import { Injectable } from '@angular/core';
import { downloadContent } from '@igo2/utils';
import { Observable } from 'rxjs';
import * as olformat from 'ol/format';
import OlFeature from 'ol/Feature';
import { ExportFormat, EncodingFormat } from './export.type';
import { ExportInvalidFileError, ExportNothingToExportError } from './export.errors';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class ExportService {
    constructor(config) {
        this.config = config;
        this.aggregateInComment = true;
        this.ogreUrl = this.config.getConfig('importExport.url');
        const gpxAggregateInComment = this.config.getConfig('importExport.gpxAggregateInComment');
        if (gpxAggregateInComment !== undefined) {
            this.aggregateInComment = gpxAggregateInComment;
        }
    }
    export(olFeatures, format, title, encoding, projectionIn = 'EPSG:4326', projectionOut = 'EPSG:4326') {
        const exportOlFeatures = this.generateFeature(olFeatures, format);
        return this.exportAsync(exportOlFeatures, format, title, encoding, projectionIn, projectionOut);
    }
    generateFeature(olFeatures, format) {
        if (format === ExportFormat.GPX && this.aggregateInComment) {
            return this.generateAggregatedFeature(olFeatures);
        }
        return olFeatures.map((olFeature) => {
            const keys = olFeature
                .getKeys()
                .filter((key) => !key.startsWith('_'));
            const properties = keys.reduce((acc, key) => {
                acc[key] = olFeature.get(key);
                return acc;
            }, { geometry: olFeature.getGeometry() });
            return new OlFeature(properties);
        });
    }
    generateAggregatedFeature(olFeatures) {
        return olFeatures.map((olFeature) => {
            const keys = olFeature.getKeys().filter((key) => !key.startsWith('_'));
            let comment = '';
            const properties = keys.reduce((acc, key) => {
                if (key && key !== 'geometry') {
                    key === 'id' && olFeature.get('draw') ? comment += key + ':' + olFeature.get('draw') + '   \r\n'
                        : comment += key + ':' + olFeature.get(key) + '   \r\n';
                }
                acc[key] = olFeature.get(key);
                return acc;
            }, {
                geometry: olFeature.getGeometry()
            });
            const newFeature = new OlFeature(properties);
            newFeature.set('name', olFeature.getId());
            newFeature.set('cmt', comment);
            return newFeature;
        });
    }
    exportAsync(olFeatures, format, title, encoding, projectionIn, projectionOut) {
        const doExport = (observer) => {
            const nothingToExport = this.nothingToExport(olFeatures, format);
            if (nothingToExport) {
                observer.error(new ExportNothingToExportError());
                return;
            }
            const ogreFormats = Object.keys(ExportService.ogreFormats);
            if (ogreFormats.indexOf(format) >= 0) {
                if (!this.ogreUrl) {
                    if (ExportService.noOgreFallbacks.indexOf(format) >= 0) {
                        this.exportToFile(olFeatures, observer, format, title, projectionIn, projectionOut);
                    }
                    else {
                        observer.error(new ExportInvalidFileError());
                    }
                    return;
                }
                this.exportWithOgre(olFeatures, observer, format, title, encoding, projectionIn, projectionOut);
            }
            else {
                this.exportToFile(olFeatures, observer, format, title, projectionIn, projectionOut);
            }
        };
        return new Observable(doExport);
    }
    exportToFile(olFeatures, observer, format, title, projectionIn, projectionOut) {
        const olFormat = new olformat[format]();
        const featuresText = olFormat.writeFeatures(olFeatures, {
            dataProjection: projectionOut,
            featureProjection: projectionIn,
            featureType: 'feature',
            featureNS: 'http://example.com/feature'
        });
        const fileName = `${title}.${format.toLowerCase()}`;
        downloadContent(featuresText, 'text/plain;charset=utf-8', fileName);
        observer.complete();
    }
    exportWithOgre(olFeatures, observer, format, title, encodingType, projectionIn, projectionOut) {
        const featuresText = new olformat.GeoJSON().writeFeatures(olFeatures, {
            dataProjection: projectionOut,
            featureProjection: projectionIn
        });
        const url = `${this.ogreUrl}/convertJson`;
        const form = document.createElement('form');
        form.style.display = 'none';
        document.body.appendChild(form);
        form.setAttribute('method', 'post');
        form.setAttribute('target', '_blank');
        form.setAttribute('action', url);
        if (encodingType === EncodingFormat.UTF8) {
            form.acceptCharset = 'UTF-8';
            form.enctype = 'application/x-www-form-urlencoded; charset=utf-8;';
        }
        else if (encodingType === EncodingFormat.LATIN1) {
            const enctype = 'ISO-8859-1';
            const encoding = document.createElement('input');
            encoding.setAttribute('type', 'hidden');
            encoding.setAttribute('name', 'encoding');
            encoding.setAttribute('value', enctype);
            form.appendChild(encoding);
        }
        if (format === 'CSVsemicolon') {
            const options = document.createElement('input');
            options.setAttribute('type', 'hidden');
            options.setAttribute('name', 'lco');
            options.setAttribute('value', 'SEPARATOR=SEMICOLON');
            form.appendChild(options);
        }
        const geojsonField = document.createElement('input');
        geojsonField.setAttribute('type', 'hidden');
        geojsonField.setAttribute('name', 'json');
        geojsonField.setAttribute('value', featuresText);
        form.appendChild(geojsonField);
        const outputNameField = document.createElement('input');
        let outputName = format === 'Shapefile' ? `${title}.zip` : `${title}.${format.toLowerCase()}`;
        if (format === 'CSVcomma' || format === 'CSVsemicolon') {
            outputName = `${title}.csv`;
        }
        outputName = outputName.replace(' ', '_');
        outputName = outputName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        outputNameField.setAttribute('type', 'hidden');
        outputNameField.setAttribute('name', 'outputName');
        outputNameField.setAttribute('value', outputName);
        form.appendChild(outputNameField);
        let ogreFormat = ExportService.ogreFormats[format];
        if (format === 'CSVcomma' || format === 'CSVsemicolon') {
            ogreFormat = 'CSV';
        }
        const outputFormatField = document.createElement('input');
        outputFormatField.setAttribute('type', 'hidden');
        outputFormatField.setAttribute('name', 'format');
        outputFormatField.setAttribute('value', ogreFormat);
        form.appendChild(outputFormatField);
        form.submit();
        document.body.removeChild(form);
        observer.complete();
    }
    nothingToExport(olFeatures, format) {
        if (olFeatures.length === 0) {
            return true;
        }
        if (format === 'GPX') {
            const pointOrLine = olFeatures.find(olFeature => {
                return (['Point', 'LineString', 'MultiLineString'].indexOf(olFeature.getGeometry().getType()) >= 0);
            });
            return pointOrLine === undefined;
        }
        return false;
    }
}
ExportService.ogreFormats = {
    GML: 'gml',
    GPX: 'gpx',
    KML: 'kml',
    Shapefile: 'ESRI Shapefile',
    CSVcomma: 'CSVcomma',
    CSVsemicolon: 'CSVsemicolon'
};
ExportService.noOgreFallbacks = ['GML', 'GPX', 'KML'];
ExportService.ɵfac = function ExportService_Factory(t) { return new (t || ExportService)(i0.ɵɵinject(i1.ConfigService)); };
ExportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExportService, factory: ExportService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L3NoYXJlZC9leHBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFHbkMsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUNMLHNCQUFzQixFQUN0QiwwQkFBMEIsRUFDM0IsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBS3pCLE1BQU0sT0FBTyxhQUFhO0lBZXhCLFlBQW9CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFGakMsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBR3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNqRCxvQ0FBb0MsQ0FDckMsQ0FBQztRQUNGLElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxNQUFNLENBQ0osVUFBbUMsRUFDbkMsTUFBb0IsRUFDcEIsS0FBYSxFQUNiLFFBQXdCLEVBQ3hCLFlBQVksR0FBRyxXQUFXLEVBQzFCLGFBQWEsR0FBRyxXQUFXO1FBRTNC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QUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFlBQVksRUFBRSxjQUFjO0NBQzdCLENBQUM7QUFFSyw2QkFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzswRUFWcEMsYUFBYTttRUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBkb3dubG9hZENvbnRlbnQgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIG9sZm9ybWF0IGZyb20gJ29sL2Zvcm1hdCc7XG5pbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuaW1wb3J0IHsgRXhwb3J0Rm9ybWF0LCBFbmNvZGluZ0Zvcm1hdCB9IGZyb20gJy4vZXhwb3J0LnR5cGUnO1xuXG5pbXBvcnQge1xuICBFeHBvcnRJbnZhbGlkRmlsZUVycm9yLFxuICBFeHBvcnROb3RoaW5nVG9FeHBvcnRFcnJvclxufSBmcm9tICcuL2V4cG9ydC5lcnJvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeHBvcnRTZXJ2aWNlIHtcbiAgc3RhdGljIG9ncmVGb3JtYXRzID0ge1xuICAgIEdNTDogJ2dtbCcsXG4gICAgR1BYOiAnZ3B4JyxcbiAgICBLTUw6ICdrbWwnLFxuICAgIFNoYXBlZmlsZTogJ0VTUkkgU2hhcGVmaWxlJyxcbiAgICBDU1Zjb21tYTogJ0NTVmNvbW1hJyxcbiAgICBDU1ZzZW1pY29sb246ICdDU1ZzZW1pY29sb24nXG4gIH07XG5cbiAgc3RhdGljIG5vT2dyZUZhbGxiYWNrcyA9IFsnR01MJywgJ0dQWCcsICdLTUwnXTtcblxuICBwcml2YXRlIG9ncmVVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBhZ2dyZWdhdGVJbkNvbW1lbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5vZ3JlVXJsID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdpbXBvcnRFeHBvcnQudXJsJyk7XG4gICAgY29uc3QgZ3B4QWdncmVnYXRlSW5Db21tZW50ID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKFxuICAgICAgJ2ltcG9ydEV4cG9ydC5ncHhBZ2dyZWdhdGVJbkNvbW1lbnQnXG4gICAgKTtcbiAgICBpZiAoZ3B4QWdncmVnYXRlSW5Db21tZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYWdncmVnYXRlSW5Db21tZW50ID0gZ3B4QWdncmVnYXRlSW5Db21tZW50O1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydChcbiAgICBvbEZlYXR1cmVzOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXSxcbiAgICBmb3JtYXQ6IEV4cG9ydEZvcm1hdCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGVuY29kaW5nOiBFbmNvZGluZ0Zvcm1hdCxcbiAgICBwcm9qZWN0aW9uSW4gPSAnRVBTRzo0MzI2JyxcbiAgICBwcm9qZWN0aW9uT3V0ID0gJ0VQU0c6NDMyNidcbiAgKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgY29uc3QgZXhwb3J0T2xGZWF0dXJlcyA9IHRoaXMuZ2VuZXJhdGVGZWF0dXJlKG9sRmVhdHVyZXMsIGZvcm1hdCk7XG5cbiAgICByZXR1cm4gdGhpcy5leHBvcnRBc3luYyhleHBvcnRPbEZlYXR1cmVzLCBmb3JtYXQsIHRpdGxlLCBlbmNvZGluZywgcHJvamVjdGlvbkluLCBwcm9qZWN0aW9uT3V0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVGZWF0dXJlKFxuICAgIG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdLFxuICAgIGZvcm1hdDogRXhwb3J0Rm9ybWF0XG4gICk6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdIHtcbiAgICBpZiAoZm9ybWF0ID09PSBFeHBvcnRGb3JtYXQuR1BYICYmIHRoaXMuYWdncmVnYXRlSW5Db21tZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUFnZ3JlZ2F0ZWRGZWF0dXJlKG9sRmVhdHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBvbEZlYXR1cmVzLm1hcCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBvbEZlYXR1cmVcbiAgICAgICAgLmdldEtleXMoKVxuICAgICAgICAuZmlsdGVyKChrZXk6IHN0cmluZykgPT4gIWtleS5zdGFydHNXaXRoKCdfJykpO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IGtleXMucmVkdWNlKFxuICAgICAgICAoYWNjOiBvYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgYWNjW2tleV0gPSBvbEZlYXR1cmUuZ2V0KGtleSk7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSxcbiAgICAgICAgeyBnZW9tZXRyeTogb2xGZWF0dXJlLmdldEdlb21ldHJ5KCkgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgT2xGZWF0dXJlKHByb3BlcnRpZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFnZ3JlZ2F0ZWRGZWF0dXJlKG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdKTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+W10ge1xuICAgIHJldHVybiBvbEZlYXR1cmVzLm1hcCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIGNvbnN0IGtleXMgPSBvbEZlYXR1cmUuZ2V0S2V5cygpLmZpbHRlcigoa2V5OiBzdHJpbmcpID0+ICFrZXkuc3RhcnRzV2l0aCgnXycpKTtcbiAgICAgIGxldCBjb21tZW50OiBzdHJpbmcgPSAnJztcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBrZXlzLnJlZHVjZSgoYWNjOiBvYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChrZXkgJiYga2V5ICE9PSAnZ2VvbWV0cnknKSB7XG4gICAgICAgICAga2V5ID09PSAnaWQnICYmIG9sRmVhdHVyZS5nZXQoJ2RyYXcnKSA/IGNvbW1lbnQgKz0ga2V5ICsgJzonICsgb2xGZWF0dXJlLmdldCgnZHJhdycpICsgJyAgIFxcclxcbidcbiAgICAgICAgICA6IGNvbW1lbnQgKz0ga2V5ICsgJzonICsgb2xGZWF0dXJlLmdldChrZXkpICsgJyAgIFxcclxcbic7XG4gICAgICAgIH1cbiAgICAgICAgYWNjW2tleV0gPSBvbEZlYXR1cmUuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBnZW9tZXRyeTogb2xGZWF0dXJlLmdldEdlb21ldHJ5KClcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbmV3RmVhdHVyZSA9IG5ldyBPbEZlYXR1cmUocHJvcGVydGllcyk7XG4gICAgICBuZXdGZWF0dXJlLnNldCgnbmFtZScsIG9sRmVhdHVyZS5nZXRJZCgpKTtcbiAgICAgIG5ld0ZlYXR1cmUuc2V0KCdjbXQnLCBjb21tZW50KTtcblxuICAgICAgcmV0dXJuIG5ld0ZlYXR1cmU7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydEFzeW5jKFxuICAgIG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdLFxuICAgIGZvcm1hdDogRXhwb3J0Rm9ybWF0LFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgZW5jb2Rpbmc6IEVuY29kaW5nRm9ybWF0LFxuICAgIHByb2plY3Rpb25Jbjogc3RyaW5nLFxuICAgIHByb2plY3Rpb25PdXQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCBkb0V4cG9ydCA9IChvYnNlcnZlcjogT2JzZXJ2ZXI8dm9pZD4pID0+IHtcbiAgICAgIGNvbnN0IG5vdGhpbmdUb0V4cG9ydCA9IHRoaXMubm90aGluZ1RvRXhwb3J0KG9sRmVhdHVyZXMsIGZvcm1hdCk7XG4gICAgICBpZiAobm90aGluZ1RvRXhwb3J0KSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBFeHBvcnROb3RoaW5nVG9FeHBvcnRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvZ3JlRm9ybWF0cyA9IE9iamVjdC5rZXlzKEV4cG9ydFNlcnZpY2Uub2dyZUZvcm1hdHMpO1xuICAgICAgaWYgKG9ncmVGb3JtYXRzLmluZGV4T2YoZm9ybWF0KSA+PSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5vZ3JlVXJsKSB7XG4gICAgICAgICAgaWYgKEV4cG9ydFNlcnZpY2Uubm9PZ3JlRmFsbGJhY2tzLmluZGV4T2YoZm9ybWF0KSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvRmlsZShvbEZlYXR1cmVzLCBvYnNlcnZlciwgZm9ybWF0LCB0aXRsZSwgcHJvamVjdGlvbkluLCBwcm9qZWN0aW9uT3V0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEV4cG9ydEludmFsaWRGaWxlRXJyb3IoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4cG9ydFdpdGhPZ3JlKG9sRmVhdHVyZXMsIG9ic2VydmVyLCBmb3JtYXQsIHRpdGxlLCBlbmNvZGluZywgcHJvamVjdGlvbkluLCBwcm9qZWN0aW9uT3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXhwb3J0VG9GaWxlKG9sRmVhdHVyZXMsIG9ic2VydmVyLCBmb3JtYXQsIHRpdGxlLCBwcm9qZWN0aW9uSW4sIHByb2plY3Rpb25PdXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZG9FeHBvcnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGV4cG9ydFRvRmlsZShcbiAgICBvbEZlYXR1cmVzOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXSxcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8dm9pZD4sXG4gICAgZm9ybWF0OiBFeHBvcnRGb3JtYXQsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uSW46IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uT3V0OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgb2xGb3JtYXQgPSBuZXcgb2xmb3JtYXRbZm9ybWF0XSgpO1xuICAgIGNvbnN0IGZlYXR1cmVzVGV4dCA9IG9sRm9ybWF0LndyaXRlRmVhdHVyZXMob2xGZWF0dXJlcywge1xuICAgICAgZGF0YVByb2plY3Rpb246IHByb2plY3Rpb25PdXQsXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbkluLFxuICAgICAgZmVhdHVyZVR5cGU6ICdmZWF0dXJlJyxcbiAgICAgIGZlYXR1cmVOUzogJ2h0dHA6Ly9leGFtcGxlLmNvbS9mZWF0dXJlJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHt0aXRsZX0uJHtmb3JtYXQudG9Mb3dlckNhc2UoKX1gO1xuXG4gICAgZG93bmxvYWRDb250ZW50KGZlYXR1cmVzVGV4dCwgJ3RleHQvcGxhaW47Y2hhcnNldD11dGYtOCcsIGZpbGVOYW1lKTtcbiAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHBvcnRXaXRoT2dyZShcbiAgICBvbEZlYXR1cmVzOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT5bXSxcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8dm9pZD4sXG4gICAgZm9ybWF0OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBlbmNvZGluZ1R5cGU6IEVuY29kaW5nRm9ybWF0LFxuICAgIHByb2plY3Rpb25Jbjogc3RyaW5nLFxuICAgIHByb2plY3Rpb25PdXQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBmZWF0dXJlc1RleHQ6IHN0cmluZyA9IG5ldyBvbGZvcm1hdC5HZW9KU09OKCkud3JpdGVGZWF0dXJlcyhcbiAgICAgIG9sRmVhdHVyZXMsXG4gICAgICB7XG4gICAgICAgIGRhdGFQcm9qZWN0aW9uOiBwcm9qZWN0aW9uT3V0LFxuICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbkluXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub2dyZVVybH0vY29udmVydEpzb25gO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgdXJsKTtcblxuICAgIGlmIChlbmNvZGluZ1R5cGUgPT09IEVuY29kaW5nRm9ybWF0LlVURjgpIHtcbiAgICAgIGZvcm0uYWNjZXB0Q2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICBmb3JtLmVuY3R5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04Oyc7XG4gICAgfSBlbHNlIGlmIChlbmNvZGluZ1R5cGUgPT09IEVuY29kaW5nRm9ybWF0LkxBVElOMSkge1xuICAgICAgY29uc3QgZW5jdHlwZSA9ICdJU08tODg1OS0xJztcbiAgICAgIGNvbnN0IGVuY29kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGVuY29kaW5nLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgICAgIGVuY29kaW5nLnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbmNvZGluZycpO1xuICAgICAgZW5jb2Rpbmcuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVuY3R5cGUpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChlbmNvZGluZyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gJ0NTVnNlbWljb2xvbicpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgb3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG4gICAgICBvcHRpb25zLnNldEF0dHJpYnV0ZSgnbmFtZScsICdsY28nKTtcbiAgICAgIG9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTRVBBUkFUT1I9U0VNSUNPTE9OJyk7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlb2pzb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZ2VvanNvbkZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgICBnZW9qc29uRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2pzb24nKTtcbiAgICBnZW9qc29uRmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGZlYXR1cmVzVGV4dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChnZW9qc29uRmllbGQpO1xuXG4gICAgY29uc3Qgb3V0cHV0TmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBsZXQgb3V0cHV0TmFtZSA9IGZvcm1hdCA9PT0gJ1NoYXBlZmlsZScgPyBgJHt0aXRsZX0uemlwYCA6IGAke3RpdGxlfS4ke2Zvcm1hdC50b0xvd2VyQ2FzZSgpfWA7XG4gICAgaWYgKGZvcm1hdCA9PT0gJ0NTVmNvbW1hJyB8fCBmb3JtYXQgPT09ICdDU1ZzZW1pY29sb24nKSB7XG4gICAgICBvdXRwdXROYW1lID0gYCR7dGl0bGV9LmNzdmA7XG4gICAgfVxuICAgIG91dHB1dE5hbWUgPSBvdXRwdXROYW1lLnJlcGxhY2UoJyAnLCAnXycpO1xuICAgIG91dHB1dE5hbWUgPSBvdXRwdXROYW1lLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpO1xuICAgIG91dHB1dE5hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG4gICAgb3V0cHV0TmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdvdXRwdXROYW1lJyk7XG4gICAgb3V0cHV0TmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvdXRwdXROYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG91dHB1dE5hbWVGaWVsZCk7XG5cbiAgICBsZXQgb2dyZUZvcm1hdCA9IEV4cG9ydFNlcnZpY2Uub2dyZUZvcm1hdHNbZm9ybWF0XTtcbiAgICBpZiAoZm9ybWF0ID09PSAnQ1NWY29tbWEnIHx8IGZvcm1hdCA9PT0gJ0NTVnNlbWljb2xvbicpIHtcbiAgICAgIG9ncmVGb3JtYXQgPSAnQ1NWJztcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0Rm9ybWF0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG91dHB1dEZvcm1hdEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcbiAgICBvdXRwdXRGb3JtYXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZm9ybWF0Jyk7XG4gICAgb3V0cHV0Rm9ybWF0RmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9ncmVGb3JtYXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3V0cHV0Rm9ybWF0RmllbGQpO1xuXG4gICAgZm9ybS5zdWJtaXQoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm0pO1xuXG4gICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aGluZ1RvRXhwb3J0KG9sRmVhdHVyZXM6IE9sRmVhdHVyZTxPbEdlb21ldHJ5PltdLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChvbEZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09ICdHUFgnKSB7XG4gICAgICBjb25zdCBwb2ludE9yTGluZSA9IG9sRmVhdHVyZXMuZmluZChvbEZlYXR1cmUgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFsnUG9pbnQnLCAnTGluZVN0cmluZycsICdNdWx0aUxpbmVTdHJpbmcnXS5pbmRleE9mKG9sRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSkgPj0gMFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcG9pbnRPckxpbmUgPT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=