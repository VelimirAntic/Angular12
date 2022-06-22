import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { uuid } from '@igo2/utils';
import { Observable } from 'rxjs';
import * as olformat from 'ol/format';
import { ImportInvalidFileError, ImportUnreadableFileError, ImportSizeError, ImportSRSError, ImportOgreServerError } from './import.errors';
import { computeLayerTitleFromFile, getFileExtension } from './import.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
export class ImportService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.ogreUrl = this.config.getConfig('importExport.url');
        const configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
        this.clientSideFileSizeMax = (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
    }
    import(file, projectionIn = 'EPSG:4326', projectionOut = 'EPSG:4326') {
        return this.importAsync(file, projectionIn, projectionOut);
    }
    getFileImporter(file) {
        const extension = getFileExtension(file);
        const mimeType = file.type;
        const allowedMimeTypes = [
            ...ImportService.allowedMimeTypes,
            ...ImportService.allowedZipMimeTypes
        ];
        const allowedExtensions = ImportService.allowedExtensions;
        if (allowedMimeTypes.indexOf(mimeType) < 0 &&
            allowedExtensions.indexOf(extension) < 0) {
            return undefined;
        }
        else if (mimeType === 'application/json' ||
            ['json', 'geojson', 'kml', 'gpx'].indexOf(extension) >= 0) {
            return this.importFile;
        }
        else if (this.ogreUrl !== undefined) {
            return this.importFileWithOgre;
        }
        return undefined;
    }
    importAsync(file, projectionIn, projectionOut) {
        const doImport = (observer) => {
            if (file.size >= this.clientSideFileSizeMax) {
                observer.error(new ImportSizeError());
                return;
            }
            const importer = this.getFileImporter(file);
            if (importer === undefined) {
                observer.error(new ImportInvalidFileError());
                return;
            }
            importer.call(this, file, observer, projectionIn, projectionOut);
        };
        return new Observable(doImport);
    }
    importFile(file, observer, projectionIn, projectionOut) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const features = this.parseFeaturesFromFile(file, event.target.result, projectionIn, projectionOut);
                observer.next(features);
            }
            catch (e) {
                observer.error(new ImportUnreadableFileError());
            }
            observer.complete();
        };
        reader.onerror = evt => {
            observer.error(new ImportUnreadableFileError());
        };
        reader.readAsText(file, 'UTF-8');
    }
    importFileWithOgre(file, observer, projectionIn, projectionOut) {
        const url = `${this.ogreUrl}/convert`;
        const formData = new FormData();
        formData.append('upload', file);
        formData.append('sourceSrs', projectionIn);
        formData.append('targetSrs', projectionOut);
        formData.append('formatOutput', 'GEOJSON');
        formData.append('skipFailures', '');
        this.http.post(url, formData, { headers: new HttpHeaders() })
            .subscribe((response) => {
            if (response === null) {
                observer.error(new ImportUnreadableFileError());
                return;
            }
            const errors = response.errors || [];
            if (errors.length > 0) {
                observer.error(new ImportUnreadableFileError());
            }
            else {
                const features = this.parseFeaturesFromGeoJSON(file, response, projectionOut);
                observer.next(features);
                observer.complete();
            }
        }, (error) => {
            error.error.caught = true;
            const errMsg = error.error.msg || '';
            if (errMsg === 'No valid files found') {
                observer.error(new ImportInvalidFileError());
            }
            else if (errMsg && errMsg.startWith('ERROR 1: Failed to process SRS definition')) {
                observer.error(new ImportSRSError());
            }
            else if (error.status === 500) {
                observer.error(new ImportOgreServerError());
            }
            else {
                observer.error(new ImportUnreadableFileError());
            }
        });
    }
    parseFeaturesFromFile(file, data, projectionIn, projectionOut) {
        const extension = getFileExtension(file);
        const mimeType = file.type;
        const GeoJSON = new olformat.GeoJSON();
        let format;
        if (mimeType === 'application/vnd.google-earth.kml+xml') {
            format = new olformat.KML();
        }
        else if (mimeType === 'application/gml+xml') {
            format = new olformat.GML();
        }
        else if (mimeType === 'application/gpx+xml') {
            format = new olformat.GPX();
        }
        else {
            switch (extension) {
                case 'kml':
                    format = new olformat.KML();
                    break;
                case 'gpx':
                    format = new olformat.GPX();
                    break;
                case 'gml':
                    format = new olformat.GML();
                    break;
                default:
                    format = GeoJSON;
                    break;
            }
        }
        const olFeatures = format.readFeatures(data, {
            dataProjection: projectionIn,
            featureProjection: projectionOut
        });
        const features = olFeatures.map((olFeature) => {
            return Object.assign(GeoJSON.writeFeatureObject(olFeature), {
                projection: projectionOut,
                meta: {
                    id: uuid(),
                    title: computeLayerTitleFromFile(file)
                }
            });
        });
        return features;
    }
    parseFeaturesFromGeoJSON(file, data, projectionOut) {
        const olFormat = new olformat.GeoJSON();
        const olFeatures = olFormat.readFeatures(data);
        const features = olFeatures.map((olFeature) => {
            return Object.assign(olFormat.writeFeatureObject(olFeature), {
                projection: projectionOut,
                meta: {
                    id: uuid(),
                    title: computeLayerTitleFromFile(file)
                }
            });
        });
        return features;
    }
}
ImportService.allowedMimeTypes = [
    'application/gml+xml',
    'application/vnd.google-earth.kml+xml',
    'application/gpx+xml',
    'application/json'
];
ImportService.allowedZipMimeTypes = [
    'application/zip',
    'application/x-zip-compressed',
    'application/x-zip'
];
ImportService.allowedExtensions = ['geojson', 'kml', 'gpx', 'json', 'gml'];
ImportService.ɵfac = function ImportService_Factory(t) { return new (t || ImportService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); };
ImportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImportService, factory: ImportService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L3NoYXJlZC9pbXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUcvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5DLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFLdEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsZUFBZSxFQUNmLGNBQWMsRUFDZCxxQkFBcUIsRUFDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs3RSxNQUFNLE9BQU8sYUFBYTtJQW1CeEIsWUFBb0IsSUFBZ0IsRUFBVSxNQUFxQjtRQUEvQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNqRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFD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IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgKiBhcyBvbGZvcm1hdCBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IE9sRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5cbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi8uLi9mZWF0dXJlL3NoYXJlZC9mZWF0dXJlLmludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgSW1wb3J0SW52YWxpZEZpbGVFcnJvcixcbiAgSW1wb3J0VW5yZWFkYWJsZUZpbGVFcnJvcixcbiAgSW1wb3J0U2l6ZUVycm9yLFxuICBJbXBvcnRTUlNFcnJvcixcbiAgSW1wb3J0T2dyZVNlcnZlckVycm9yXG59IGZyb20gJy4vaW1wb3J0LmVycm9ycyc7XG5pbXBvcnQgeyBjb21wdXRlTGF5ZXJUaXRsZUZyb21GaWxlLCBnZXRGaWxlRXh0ZW5zaW9uIH0gZnJvbSAnLi9pbXBvcnQudXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbXBvcnRTZXJ2aWNlIHtcbiAgc3RhdGljIGFsbG93ZWRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL2dtbCt4bWwnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWVhcnRoLmttbCt4bWwnLFxuICAgICdhcHBsaWNhdGlvbi9ncHgreG1sJyxcbiAgICAnYXBwbGljYXRpb24vanNvbidcbiAgXTtcblxuICBzdGF0aWMgYWxsb3dlZFppcE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAnYXBwbGljYXRpb24veC16aXAtY29tcHJlc3NlZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtemlwJ1xuICBdO1xuXG4gIHN0YXRpYyBhbGxvd2VkRXh0ZW5zaW9ucyA9IFsnZ2VvanNvbicsICdrbWwnLCAnZ3B4JywgJ2pzb24nLCAnZ21sJ107XG5cbiAgcHJpdmF0ZSBvZ3JlVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgY2xpZW50U2lkZUZpbGVTaXplTWF4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMub2dyZVVybCA9IHRoaXMuY29uZmlnLmdldENvbmZpZygnaW1wb3J0RXhwb3J0LnVybCcpO1xuICAgIGNvbnN0IGNvbmZpZ0ZpbGVTaXplTWIgPSB0aGlzLmNvbmZpZy5nZXRDb25maWcoJ2ltcG9ydEV4cG9ydC5jbGllbnRTaWRlRmlsZVNpemVNYXhNYicpO1xuICAgIHRoaXMuY2xpZW50U2lkZUZpbGVTaXplTWF4ID0gKGNvbmZpZ0ZpbGVTaXplTWIgPyBjb25maWdGaWxlU2l6ZU1iIDogMzApICogTWF0aC5wb3coMTAyNCwgMik7XG4gIH1cblxuICBpbXBvcnQoXG4gICAgZmlsZTogRmlsZSxcbiAgICBwcm9qZWN0aW9uSW4gPSAnRVBTRzo0MzI2JyxcbiAgICBwcm9qZWN0aW9uT3V0ID0gJ0VQU0c6NDMyNidcbiAgKTogT2JzZXJ2YWJsZTxGZWF0dXJlW10+IHtcbiAgICByZXR1cm4gdGhpcy5pbXBvcnRBc3luYyhmaWxlLCBwcm9qZWN0aW9uSW4sIHByb2plY3Rpb25PdXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlSW1wb3J0ZXIoXG4gICAgZmlsZTogRmlsZVxuICApOiAoXG4gICAgZmlsZTogRmlsZSxcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8RmVhdHVyZVtdPixcbiAgICBwcm9qZWN0aW9uSW46IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uT3V0OiBzdHJpbmdcbiAgKSA9PiB2b2lkIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBnZXRGaWxlRXh0ZW5zaW9uKGZpbGUpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgIGNvbnN0IGFsbG93ZWRNaW1lVHlwZXMgPSBbXG4gICAgICAuLi5JbXBvcnRTZXJ2aWNlLmFsbG93ZWRNaW1lVHlwZXMsXG4gICAgICAuLi5JbXBvcnRTZXJ2aWNlLmFsbG93ZWRaaXBNaW1lVHlwZXNcbiAgICBdO1xuICAgIGNvbnN0IGFsbG93ZWRFeHRlbnNpb25zID0gSW1wb3J0U2VydmljZS5hbGxvd2VkRXh0ZW5zaW9ucztcblxuICAgIGlmIChcbiAgICAgIGFsbG93ZWRNaW1lVHlwZXMuaW5kZXhPZihtaW1lVHlwZSkgPCAwICYmXG4gICAgICBhbGxvd2VkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBtaW1lVHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nIHx8XG4gICAgICBbJ2pzb24nLCAnZ2VvanNvbicsICdrbWwnLCAnZ3B4J10uaW5kZXhPZihleHRlbnNpb24pID49IDBcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmltcG9ydEZpbGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9ncmVVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0RmlsZVdpdGhPZ3JlO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGltcG9ydEFzeW5jKFxuICAgIGZpbGU6IEZpbGUsXG4gICAgcHJvamVjdGlvbkluOiBzdHJpbmcsXG4gICAgcHJvamVjdGlvbk91dDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RmVhdHVyZVtdPiB7XG4gICAgY29uc3QgZG9JbXBvcnQgPSAob2JzZXJ2ZXI6IE9ic2VydmVyPEZlYXR1cmVbXT4pID0+IHtcbiAgICAgIGlmIChmaWxlLnNpemUgPj0gdGhpcy5jbGllbnRTaWRlRmlsZVNpemVNYXgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydFNpemVFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1wb3J0ZXIgPSB0aGlzLmdldEZpbGVJbXBvcnRlcihmaWxlKTtcbiAgICAgIGlmIChpbXBvcnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBJbXBvcnRJbnZhbGlkRmlsZUVycm9yKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGltcG9ydGVyLmNhbGwodGhpcywgZmlsZSwgb2JzZXJ2ZXIsIHByb2plY3Rpb25JbiwgcHJvamVjdGlvbk91dCk7XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShkb0ltcG9ydCk7XG4gIH1cblxuICBwcml2YXRlIGltcG9ydEZpbGUoXG4gICAgZmlsZTogRmlsZSxcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8RmVhdHVyZVtdPixcbiAgICBwcm9qZWN0aW9uSW46IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uT3V0OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPSB0aGlzLnBhcnNlRmVhdHVyZXNGcm9tRmlsZShcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXN1bHQsXG4gICAgICAgICAgcHJvamVjdGlvbkluLFxuICAgICAgICAgIHByb2plY3Rpb25PdXRcbiAgICAgICAgKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChmZWF0dXJlcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBJbXBvcnRVbnJlYWRhYmxlRmlsZUVycm9yKCkpO1xuICAgICAgfVxuXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgIH07XG5cbiAgICByZWFkZXIub25lcnJvciA9IGV2dCA9PiB7XG4gICAgICBvYnNlcnZlci5lcnJvcihuZXcgSW1wb3J0VW5yZWFkYWJsZUZpbGVFcnJvcigpKTtcbiAgICB9O1xuXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSwgJ1VURi04Jyk7XG4gIH1cblxuICBwcml2YXRlIGltcG9ydEZpbGVXaXRoT2dyZShcbiAgICBmaWxlOiBGaWxlLFxuICAgIG9ic2VydmVyOiBPYnNlcnZlcjxGZWF0dXJlW10+LFxuICAgIHByb2plY3Rpb25Jbjogc3RyaW5nLFxuICAgIHByb2plY3Rpb25PdXQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLm9ncmVVcmx9L2NvbnZlcnRgO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd1cGxvYWQnLCBmaWxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3NvdXJjZVNycycsIHByb2plY3Rpb25Jbik7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0YXJnZXRTcnMnLCBwcm9qZWN0aW9uT3V0KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2Zvcm1hdE91dHB1dCcsICdHRU9KU09OJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdza2lwRmFpbHVyZXMnLCAnJyk7XG5cbiAgICB0aGlzLmh0dHAucG9zdCh1cmwsIGZvcm1EYXRhLCB7IGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpIH0pXG4gICAgLnN1YnNjcmliZShcbiAgICAgIChyZXNwb25zZTogeyBlcnJvcnM/OiBzdHJpbmdbXSB9IHwgb2JqZWN0IHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UgPT09IG51bGwpIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgSW1wb3J0VW5yZWFkYWJsZUZpbGVFcnJvcigpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvcnMgPSAocmVzcG9uc2UgYXMgYW55KS5lcnJvcnMgfHwgW107XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBJbXBvcnRVbnJlYWRhYmxlRmlsZUVycm9yKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gdGhpcy5wYXJzZUZlYXR1cmVzRnJvbUdlb0pTT04oXG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICBwcm9qZWN0aW9uT3V0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGZlYXR1cmVzKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgZXJyb3IuZXJyb3IuY2F1Z2h0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZXJyTXNnID0gZXJyb3IuZXJyb3IubXNnIHx8ICcnO1xuICAgICAgICBpZiAoZXJyTXNnID09PSAnTm8gdmFsaWQgZmlsZXMgZm91bmQnKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydEludmFsaWRGaWxlRXJyb3IoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyTXNnICYmIGVyck1zZy5zdGFydFdpdGgoJ0VSUk9SIDE6IEZhaWxlZCB0byBwcm9jZXNzIFNSUyBkZWZpbml0aW9uJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydFNSU0Vycm9yKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydE9ncmVTZXJ2ZXJFcnJvcigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgSW1wb3J0VW5yZWFkYWJsZUZpbGVFcnJvcigpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlRmVhdHVyZXNGcm9tRmlsZShcbiAgICBmaWxlOiBGaWxlLFxuICAgIGRhdGE6IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uSW46IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uT3V0OiBzdHJpbmdcbiAgKTogRmVhdHVyZVtdIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBnZXRGaWxlRXh0ZW5zaW9uKGZpbGUpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gZmlsZS50eXBlO1xuXG4gICAgY29uc3QgR2VvSlNPTiA9IG5ldyBvbGZvcm1hdC5HZW9KU09OKCk7XG5cbiAgICBsZXQgZm9ybWF0O1xuICAgIGlmIChtaW1lVHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtZWFydGgua21sK3htbCcpIHtcbiAgICAgIGZvcm1hdCA9IG5ldyBvbGZvcm1hdC5LTUwoKTtcbiAgICB9IGVsc2UgaWYgKG1pbWVUeXBlID09PSAnYXBwbGljYXRpb24vZ21sK3htbCcpIHtcbiAgICAgIGZvcm1hdCA9IG5ldyBvbGZvcm1hdC5HTUwoKTtcbiAgICB9IGVsc2UgaWYgKG1pbWVUeXBlID09PSAnYXBwbGljYXRpb24vZ3B4K3htbCcpIHtcbiAgICAgIGZvcm1hdCA9IG5ldyBvbGZvcm1hdC5HUFgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChleHRlbnNpb24pIHtcbiAgICAgICAgY2FzZSAna21sJzpcbiAgICAgICAgICBmb3JtYXQgPSBuZXcgb2xmb3JtYXQuS01MKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dweCc6XG4gICAgICAgICAgZm9ybWF0ID0gbmV3IG9sZm9ybWF0LkdQWCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnbWwnOlxuICAgICAgICAgIGZvcm1hdCA9IG5ldyBvbGZvcm1hdC5HTUwoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmb3JtYXQgPSBHZW9KU09OO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9sRmVhdHVyZXMgPSBmb3JtYXQucmVhZEZlYXR1cmVzKGRhdGEsIHtcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiBwcm9qZWN0aW9uSW4sXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbk91dFxuICAgIH0pO1xuICAgIGNvbnN0IGZlYXR1cmVzID0gb2xGZWF0dXJlcy5tYXAoKG9sRmVhdHVyZTogT2xGZWF0dXJlPE9sR2VvbWV0cnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihHZW9KU09OLndyaXRlRmVhdHVyZU9iamVjdChvbEZlYXR1cmUpLCB7XG4gICAgICAgIHByb2plY3Rpb246IHByb2plY3Rpb25PdXQsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgIHRpdGxlOiBjb21wdXRlTGF5ZXJUaXRsZUZyb21GaWxlKGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZlYXR1cmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUZlYXR1cmVzRnJvbUdlb0pTT04oXG4gICAgZmlsZTogRmlsZSxcbiAgICBkYXRhOiBvYmplY3QsXG4gICAgcHJvamVjdGlvbk91dDogc3RyaW5nXG4gICk6IEZlYXR1cmVbXSB7XG4gICAgY29uc3Qgb2xGb3JtYXQgPSBuZXcgb2xmb3JtYXQuR2VvSlNPTigpO1xuICAgIGNvbnN0IG9sRmVhdHVyZXMgPSBvbEZvcm1hdC5yZWFkRmVhdHVyZXMoZGF0YSk7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBvbEZlYXR1cmVzLm1hcCgob2xGZWF0dXJlOiBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9sRm9ybWF0LndyaXRlRmVhdHVyZU9iamVjdChvbEZlYXR1cmUpLCB7XG4gICAgICAgIHByb2plY3Rpb246IHByb2plY3Rpb25PdXQsXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgIHRpdGxlOiBjb21wdXRlTGF5ZXJUaXRsZUZyb21GaWxlKGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZlYXR1cmVzIGFzIEZlYXR1cmVbXTtcbiAgfVxufVxuIl19