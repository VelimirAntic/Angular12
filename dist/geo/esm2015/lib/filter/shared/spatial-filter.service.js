import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SpatialFilterItemType, SpatialFilterType } from './spatial-filter.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
export class SpatialFilterService {
    constructor(http, languageService, configService) {
        this.http = http;
        this.languageService = languageService;
        this.configService = configService;
        this.baseUrl = 'https://geoegl.msp.gouv.qc.ca/apis/terrapi/';
        /*
         * Type association with URL
         */
        this.urlFilterList = {
            AdmRegion: 'regadmin',
            Arrond: 'arrondissements',
            CircFed: 'circ-fed',
            CircProv: 'circ-prov',
            DirReg: 'dir-reg',
            MRC: 'mrc',
            Mun: 'municipalites',
            RegTour: 'tourisme',
            bornes: 'bornes-sumi',
            hydro: 'hydro',
            routes: 'routes'
        };
        this.baseUrl =
            this.configService.getConfig('spatialFilter.url') || this.baseUrl;
    }
    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    /*
     * Loading data for spatial filter list component (NO GEOMETRY)
     */
    loadFilterList(type) {
        const urlPath = type;
        if (urlPath) {
            return this.http
                .get(this.baseUrl + this.urlFilterList[urlPath])
                .pipe(map(featureCollection => featureCollection.features.map(f => {
                f.meta = {
                    id: f.properties.code
                };
                return f;
            })));
        }
    }
    /*
     * Loading item list (STRING)
     */
    loadThematicsList() {
        const url = 'types';
        const items = [];
        return this.http.get(this.baseUrl + url).pipe(map((types) => {
            types.forEach(type => {
                if (type.startsWith('lieux')) {
                    const item = {
                        name: undefined,
                        source: type
                    };
                    let substr = type.substring(6, type.length);
                    let name = substr;
                    if (substr.includes('.')) {
                        const index = substr.indexOf('.');
                        name = substr.substring(index + 1, substr.length);
                        substr = substr.substring(0, index);
                    }
                    try {
                        item.name = this.languageService.translate.instant('igo.geo.terrapi.' + name);
                    }
                    catch (e) {
                        item.name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length - 1);
                    }
                    try {
                        item.group = this.languageService.translate.instant('igo.geo.spatialFilter.group.' + substr);
                    }
                    catch (e) {
                        item.group = substr.substring(0, 1).toUpperCase() + substr.substring(1, name.length - 1);
                    }
                    items.push(item);
                }
                else {
                    if (this.getKeyByValue(this.urlFilterList, type)) {
                        const item = {
                            name: undefined,
                            source: type
                        };
                        const name = this.getKeyByValue(this.urlFilterList, type);
                        try {
                            item.name = this.languageService.translate.instant('igo.geo.terrapi.' + name);
                        }
                        catch (e) {
                            item.name = name.substring(0, 1).toUpperCase() + name.substring(1, name.length - 1);
                        }
                        item.source = type;
                        items.push(item);
                    }
                }
            });
            return items;
        }));
    }
    /*
     * Loading data for spatial filter item component (Address or Thematics) depends on predefined zone or draw zone (feature)
     */
    loadFilterItem(feature, itemType, type, thematic, buffer) {
        if (type) {
            // Predefined type
            const urlType = type;
            const url = this.baseUrl + this.urlFilterList[urlType];
            let urlItem = '';
            if (itemType === SpatialFilterItemType.Address) {
                urlItem = 'adresses';
                return this.http
                    .get(url + '/' + feature.properties.code + '/' + urlItem, {
                    params: {
                        geometry: 'true',
                        icon: 'true',
                        bufferInput: buffer.toString(),
                        simplified: '100'
                    }
                })
                    .pipe(map(featureCollection => featureCollection.features.map(f => {
                    f.meta = {
                        id: f.properties.code,
                        title: this.languageService.translate.instant('igo.geo.spatialFilter.Address'),
                        icon: f.icon
                    };
                    return f;
                })));
            }
            else {
                // If thematics search
                urlItem = thematic.source;
                return this.http
                    .get(url + '/' + feature.properties.code + '/' + urlItem, {
                    params: {
                        geometry: 'true',
                        icon: 'true',
                        bufferInput: buffer.toString(),
                        simplified: '100'
                    }
                })
                    .pipe(map(featureCollection => featureCollection.features.map(f => {
                    f.meta = {
                        id: f.properties.code,
                        title: thematic.name,
                        icon: f.icon
                    };
                    return f;
                })));
            }
        }
        else {
            // Draw type
            const url = this.baseUrl + 'locate';
            if (itemType === SpatialFilterItemType.Address) {
                const urlItem = '?type=adresses';
                return this.http
                    .post(url + urlItem, {
                    geometry: 'true',
                    icon: 'true',
                    loc: JSON.stringify(feature),
                    bufferInput: buffer.toString(),
                    simplified: '100'
                })
                    .pipe(map(featureCollection => featureCollection.features.map(f => {
                    f.meta = {
                        id: f.properties.code,
                        title: this.languageService.translate.instant('igo.geo.spatialFilter.Address'),
                        icon: f.icon
                    };
                    return f;
                })));
            }
            else {
                // If thematics search
                const urlItem = '?type=' + thematic.source;
                return this.http
                    .post(url + urlItem, {
                    geometry: 'true',
                    icon: 'true',
                    loc: JSON.stringify(feature),
                    bufferInput: buffer.toString(),
                    simplified: '100'
                })
                    .pipe(map(featureCollection => featureCollection.features.map(f => {
                    f.meta = {
                        id: f.properties.code,
                        title: thematic.name,
                        icon: f.icon
                    };
                    return f;
                })));
            }
        }
    }
    /*
     * Get one territory by id (WITH GEOMETRY)
     */
    loadItemById(feature, type) {
        const featureType = this.urlFilterList[type];
        const featureCode = '/' + feature.properties.code;
        if (featureType && featureCode) {
            return this.http
                .get(this.baseUrl + featureType + featureCode, {
                params: {
                    geometry: 'true'
                }
            })
                .pipe(map(f => {
                f.meta = {
                    id: f.properties.code,
                    alias: f.properties.nom,
                    title: f.properties.nom
                };
                return f;
            }));
        }
    }
    /*
     * Get buffer geometry
     */
    loadBufferGeometry(feature, filterType, buffer, type) {
        if (filterType === SpatialFilterType.Predefined) {
            const featureType = this.urlFilterList[type];
            const featureCode = '/' + feature.properties.code;
            if (featureType && featureCode) {
                return this.http
                    .get(this.baseUrl + featureType + featureCode, {
                    params: {
                        geometry: '100',
                        bufferOutput: buffer.toString()
                    }
                })
                    .pipe(map(f => {
                    f.meta = {
                        id: f.properties.code,
                        alias: f.properties.nom,
                        title: f.properties.nom
                    };
                    return f;
                }));
            }
        }
        else {
            return this.http
                .post(this.baseUrl + 'geospatial/buffer?', {
                buffer,
                loc: JSON.stringify(feature)
            })
                .pipe(map(f => {
                return f;
            }));
        }
    }
}
SpatialFilterService.ɵfac = function SpatialFilterService_Factory(t) { return new (t || SpatialFilterService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LanguageService), i0.ɵɵinject(i2.ConfigService)); };
SpatialFilterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SpatialFilterService, factory: SpatialFilterService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SpatialFilterService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LanguageService }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhdGlhbC1maWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9zaGFyZWQvc3BhdGlhbC1maWx0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLGlCQUFpQixFQUNsQixNQUFNLHVCQUF1QixDQUFDOzs7O0FBTS9CLE1BQU0sT0FBTyxvQkFBb0I7SUFvQi9CLFlBQ1UsSUFBZ0IsRUFDaEIsZUFBZ0MsRUFDaEMsYUFBNEI7UUFGNUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF0Qi9CLFlBQU8sR0FBVyw2Q0FBNkMsQ0FBQztRQUV2RTs7V0FFRztRQUNJLGtCQUFhLEdBQUc7WUFDckIsU0FBUyxFQUFFLFVBQVU7WUFDckIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixPQUFPLEVBQUUsVUFBVTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsU0FBUztZQUNqQixHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztRQU9BLElBQUksQ0FBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBTSxFQUFFLEtB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LEdBQUcsQ0FBVSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBRyxXQUFXLEVBQ3BEO29CQUNFLE1BQU0sRUFBRTt3QkFDTixRQUFRLEVBQUUsS0FBSzt3QkFDZixZQUFZLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRTtxQkFDaEM7aUJBQ0YsQ0FDRjtxQkFDQSxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNOLENBQUMsQ0FBQyxJQUFJLEdBQUc7d0JBQ1AsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSTt3QkFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRzt3QkFDdkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRztxQkFDeEIsQ0FBQztvQkFDRixPQUFPLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FDSCxDQUFDO2FBQ0w7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSTtpQkFDYixJQUFJLENBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsRUFBRTtnQkFDbEQsTUFBTTtnQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDN0IsQ0FBQztpQkFDRCxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7d0ZBOVRVLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGbkIsTUFBTTt1RkFFUCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQnO1xuaW1wb3J0IHtcbiAgU3BhdGlhbEZpbHRlclF1ZXJ5VHlwZSxcbiAgU3BhdGlhbEZpbHRlckl0ZW1UeXBlLFxuICBTcGF0aWFsRmlsdGVyVHlwZVxufSBmcm9tICcuL3NwYXRpYWwtZmlsdGVyLmVudW0nO1xuaW1wb3J0IHsgU3BhdGlhbEZpbHRlclRoZW1hdGljIH0gZnJvbSAnLi9zcGF0aWFsLWZpbHRlci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTcGF0aWFsRmlsdGVyU2VydmljZSB7XG4gIHB1YmxpYyBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9nZW9lZ2wubXNwLmdvdXYucWMuY2EvYXBpcy90ZXJyYXBpLyc7XG5cbiAgLypcbiAgICogVHlwZSBhc3NvY2lhdGlvbiB3aXRoIFVSTFxuICAgKi9cbiAgcHVibGljIHVybEZpbHRlckxpc3QgPSB7XG4gICAgQWRtUmVnaW9uOiAncmVnYWRtaW4nLFxuICAgIEFycm9uZDogJ2Fycm9uZGlzc2VtZW50cycsXG4gICAgQ2lyY0ZlZDogJ2NpcmMtZmVkJyxcbiAgICBDaXJjUHJvdjogJ2NpcmMtcHJvdicsXG4gICAgRGlyUmVnOiAnZGlyLXJlZycsXG4gICAgTVJDOiAnbXJjJyxcbiAgICBNdW46ICdtdW5pY2lwYWxpdGVzJyxcbiAgICBSZWdUb3VyOiAndG91cmlzbWUnLFxuICAgIGJvcm5lczogJ2Jvcm5lcy1zdW1pJyxcbiAgICBoeWRybzogJ2h5ZHJvJyxcbiAgICByb3V0ZXM6ICdyb3V0ZXMnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYmFzZVVybCA9XG4gICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdzcGF0aWFsRmlsdGVyLnVybCcpIHx8IHRoaXMuYmFzZVVybDtcbiAgfVxuXG4gIGdldEtleUJ5VmFsdWUob2JqZWN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmZpbmQoa2V5ID0+IG9iamVjdFtrZXldID09PSB2YWx1ZSk7XG4gIH1cblxuICAvKlxuICAgKiBMb2FkaW5nIGRhdGEgZm9yIHNwYXRpYWwgZmlsdGVyIGxpc3QgY29tcG9uZW50IChOTyBHRU9NRVRSWSlcbiAgICovXG4gIGxvYWRGaWx0ZXJMaXN0KHR5cGU6IFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGUpOiBPYnNlcnZhYmxlPEZlYXR1cmVbXT4ge1xuICAgIGNvbnN0IHVybFBhdGggPSB0eXBlIGFzIHN0cmluZztcbiAgICBpZiAodXJsUGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0PHsgZmVhdHVyZXM6IEZlYXR1cmVbXSB9PihcbiAgICAgICAgICB0aGlzLmJhc2VVcmwgKyB0aGlzLnVybEZpbHRlckxpc3RbdXJsUGF0aF1cbiAgICAgICAgKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZmVhdHVyZUNvbGxlY3Rpb24gPT5cbiAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLm1hcChmID0+IHtcbiAgICAgICAgICAgICAgZi5tZXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBmLnByb3BlcnRpZXMuY29kZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIExvYWRpbmcgaXRlbSBsaXN0IChTVFJJTkcpXG4gICAqL1xuICBsb2FkVGhlbWF0aWNzTGlzdCgpIHtcbiAgICBjb25zdCB1cmwgPSAndHlwZXMnO1xuICAgIGNvbnN0IGl0ZW1zOiBTcGF0aWFsRmlsdGVyVGhlbWF0aWNbXSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIHVybCkucGlwZShcbiAgICAgIG1hcCgodHlwZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIHR5cGVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgnbGlldXgnKSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbTogU3BhdGlhbEZpbHRlclRoZW1hdGljID0ge1xuICAgICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHNvdXJjZTogdHlwZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBzdWJzdHIgPSB0eXBlLnN1YnN0cmluZyg2LCB0eXBlLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IHN1YnN0cjtcbiAgICAgICAgICAgIGlmIChzdWJzdHIuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHN1YnN0ci5pbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgIG5hbWUgPSBzdWJzdHIuc3Vic3RyaW5nKGluZGV4ICsgMSwgc3Vic3RyLmxlbmd0aCk7XG4gICAgICAgICAgICAgIHN1YnN0ciA9IHN1YnN0ci5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaXRlbS5uYW1lID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICAgJ2lnby5nZW8udGVycmFwaS4nICsgbmFtZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSwgbmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaXRlbS5ncm91cCA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAgICdpZ28uZ2VvLnNwYXRpYWxGaWx0ZXIuZ3JvdXAuJyArIHN1YnN0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBpdGVtLmdyb3VwID0gc3Vic3RyLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3Vic3RyLnN1YnN0cmluZygxLCBuYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRLZXlCeVZhbHVlKHRoaXMudXJsRmlsdGVyTGlzdCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbTogU3BhdGlhbEZpbHRlclRoZW1hdGljID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHR5cGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0S2V5QnlWYWx1ZSh0aGlzLnVybEZpbHRlckxpc3QsIHR5cGUpO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAgICAgJ2lnby5nZW8udGVycmFwaS4nICsgbmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHJpbmcoMSwgbmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpdGVtLnNvdXJjZSA9IHR5cGU7XG5cbiAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKlxuICAgKiBMb2FkaW5nIGRhdGEgZm9yIHNwYXRpYWwgZmlsdGVyIGl0ZW0gY29tcG9uZW50IChBZGRyZXNzIG9yIFRoZW1hdGljcykgZGVwZW5kcyBvbiBwcmVkZWZpbmVkIHpvbmUgb3IgZHJhdyB6b25lIChmZWF0dXJlKVxuICAgKi9cbiAgbG9hZEZpbHRlckl0ZW0oXG4gICAgZmVhdHVyZSxcbiAgICBpdGVtVHlwZTogU3BhdGlhbEZpbHRlckl0ZW1UeXBlLFxuICAgIHR5cGU/OiBTcGF0aWFsRmlsdGVyUXVlcnlUeXBlLFxuICAgIHRoZW1hdGljPzogU3BhdGlhbEZpbHRlclRoZW1hdGljLFxuICAgIGJ1ZmZlcj86IG51bWJlclxuICApIHtcbiAgICBpZiAodHlwZSkge1xuICAgICAgLy8gUHJlZGVmaW5lZCB0eXBlXG4gICAgICBjb25zdCB1cmxUeXBlID0gdHlwZSBhcyBzdHJpbmc7XG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyB0aGlzLnVybEZpbHRlckxpc3RbdXJsVHlwZV07XG4gICAgICBsZXQgdXJsSXRlbSA9ICcnO1xuICAgICAgaWYgKGl0ZW1UeXBlID09PSBTcGF0aWFsRmlsdGVySXRlbVR5cGUuQWRkcmVzcykge1xuICAgICAgICB1cmxJdGVtID0gJ2FkcmVzc2VzJztcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5nZXQ8eyBmZWF0dXJlczogRmVhdHVyZVtdIH0+KFxuICAgICAgICAgICAgdXJsICsgJy8nICsgZmVhdHVyZS5wcm9wZXJ0aWVzLmNvZGUgKyAnLycgKyB1cmxJdGVtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogJ3RydWUnLFxuICAgICAgICAgICAgICAgIGljb246ICd0cnVlJyxcbiAgICAgICAgICAgICAgICBidWZmZXJJbnB1dDogYnVmZmVyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgc2ltcGxpZmllZDogJzEwMCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChmZWF0dXJlQ29sbGVjdGlvbiA9PlxuICAgICAgICAgICAgICBmZWF0dXJlQ29sbGVjdGlvbi5mZWF0dXJlcy5tYXAoZiA9PiB7XG4gICAgICAgICAgICAgICAgZi5tZXRhID0ge1xuICAgICAgICAgICAgICAgICAgaWQ6IGYucHJvcGVydGllcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAgICAgICAnaWdvLmdlby5zcGF0aWFsRmlsdGVyLkFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgaWNvbjogKGYgYXMgYW55KS5pY29uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlbWF0aWNzIHNlYXJjaFxuICAgICAgICB1cmxJdGVtID0gdGhlbWF0aWMuc291cmNlO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgLmdldDx7IGZlYXR1cmVzOiBGZWF0dXJlW10gfT4oXG4gICAgICAgICAgICB1cmwgKyAnLycgKyBmZWF0dXJlLnByb3BlcnRpZXMuY29kZSArICcvJyArIHVybEl0ZW0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3RydWUnLFxuICAgICAgICAgICAgICAgIGJ1ZmZlcklucHV0OiBidWZmZXIudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBzaW1wbGlmaWVkOiAnMTAwJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKGZlYXR1cmVDb2xsZWN0aW9uID0+XG4gICAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLm1hcChmID0+IHtcbiAgICAgICAgICAgICAgICBmLm1ldGEgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogZi5wcm9wZXJ0aWVzLmNvZGUsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGhlbWF0aWMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IChmIGFzIGFueSkuaWNvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRHJhdyB0eXBlXG4gICAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnbG9jYXRlJztcbiAgICAgIGlmIChpdGVtVHlwZSA9PT0gU3BhdGlhbEZpbHRlckl0ZW1UeXBlLkFkZHJlc3MpIHtcbiAgICAgICAgY29uc3QgdXJsSXRlbSA9ICc/dHlwZT1hZHJlc3Nlcyc7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAucG9zdDx7IGZlYXR1cmVzOiBGZWF0dXJlW10gfT4odXJsICsgdXJsSXRlbSwge1xuICAgICAgICAgICAgZ2VvbWV0cnk6ICd0cnVlJyxcbiAgICAgICAgICAgIGljb246ICd0cnVlJyxcbiAgICAgICAgICAgIGxvYzogSlNPTi5zdHJpbmdpZnkoZmVhdHVyZSksXG4gICAgICAgICAgICBidWZmZXJJbnB1dDogYnVmZmVyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaW1wbGlmaWVkOiAnMTAwJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoZmVhdHVyZUNvbGxlY3Rpb24gPT5cbiAgICAgICAgICAgICAgZmVhdHVyZUNvbGxlY3Rpb24uZmVhdHVyZXMubWFwKGYgPT4ge1xuICAgICAgICAgICAgICAgIGYubWV0YSA9IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBmLnByb3BlcnRpZXMuY29kZSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgICAgICAgJ2lnby5nZW8uc3BhdGlhbEZpbHRlci5BZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIGljb246IChmIGFzIGFueSkuaWNvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZW1hdGljcyBzZWFyY2hcbiAgICAgICAgY29uc3QgdXJsSXRlbSA9ICc/dHlwZT0nICsgdGhlbWF0aWMuc291cmNlO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgLnBvc3Q8eyBmZWF0dXJlczogRmVhdHVyZVtdIH0+KHVybCArIHVybEl0ZW0sIHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiAndHJ1ZScsXG4gICAgICAgICAgICBpY29uOiAndHJ1ZScsXG4gICAgICAgICAgICBsb2M6IEpTT04uc3RyaW5naWZ5KGZlYXR1cmUpLFxuICAgICAgICAgICAgYnVmZmVySW5wdXQ6IGJ1ZmZlci50b1N0cmluZygpLFxuICAgICAgICAgICAgc2ltcGxpZmllZDogJzEwMCdcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKGZlYXR1cmVDb2xsZWN0aW9uID0+XG4gICAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLm1hcChmID0+IHtcbiAgICAgICAgICAgICAgICBmLm1ldGEgPSB7XG4gICAgICAgICAgICAgICAgICBpZDogZi5wcm9wZXJ0aWVzLmNvZGUsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGhlbWF0aWMubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IChmIGFzIGFueSkuaWNvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBHZXQgb25lIHRlcnJpdG9yeSBieSBpZCAoV0lUSCBHRU9NRVRSWSlcbiAgICovXG4gIGxvYWRJdGVtQnlJZChcbiAgICBmZWF0dXJlOiBGZWF0dXJlLFxuICAgIHR5cGU6IFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGVcbiAgKTogT2JzZXJ2YWJsZTxGZWF0dXJlPiB7XG4gICAgY29uc3QgZmVhdHVyZVR5cGUgPSB0aGlzLnVybEZpbHRlckxpc3RbdHlwZV07XG4gICAgY29uc3QgZmVhdHVyZUNvZGUgPSAnLycgKyBmZWF0dXJlLnByb3BlcnRpZXMuY29kZTtcbiAgICBpZiAoZmVhdHVyZVR5cGUgJiYgZmVhdHVyZUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldDxGZWF0dXJlPih0aGlzLmJhc2VVcmwgKyBmZWF0dXJlVHlwZSArIGZlYXR1cmVDb2RlLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBnZW9tZXRyeTogJ3RydWUnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZiA9PiB7XG4gICAgICAgICAgICBmLm1ldGEgPSB7XG4gICAgICAgICAgICAgIGlkOiBmLnByb3BlcnRpZXMuY29kZSxcbiAgICAgICAgICAgICAgYWxpYXM6IGYucHJvcGVydGllcy5ub20sXG4gICAgICAgICAgICAgIHRpdGxlOiBmLnByb3BlcnRpZXMubm9tXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBHZXQgYnVmZmVyIGdlb21ldHJ5XG4gICAqL1xuICBsb2FkQnVmZmVyR2VvbWV0cnkoXG4gICAgZmVhdHVyZTogRmVhdHVyZSxcbiAgICBmaWx0ZXJUeXBlOiBTcGF0aWFsRmlsdGVyVHlwZSxcbiAgICBidWZmZXI/OiBudW1iZXIsXG4gICAgdHlwZT86IFNwYXRpYWxGaWx0ZXJRdWVyeVR5cGUsXG4gICk6IE9ic2VydmFibGU8RmVhdHVyZT4ge1xuICAgIGlmIChmaWx0ZXJUeXBlID09PSBTcGF0aWFsRmlsdGVyVHlwZS5QcmVkZWZpbmVkKSB7XG4gICAgICBjb25zdCBmZWF0dXJlVHlwZSA9IHRoaXMudXJsRmlsdGVyTGlzdFt0eXBlXTtcbiAgICAgIGNvbnN0IGZlYXR1cmVDb2RlID0gJy8nICsgZmVhdHVyZS5wcm9wZXJ0aWVzLmNvZGU7XG4gICAgICBpZiAoZmVhdHVyZVR5cGUgJiYgZmVhdHVyZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgIC5nZXQ8RmVhdHVyZT4odGhpcy5iYXNlVXJsICsgZmVhdHVyZVR5cGUgKyBmZWF0dXJlQ29kZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6ICcxMDAnLFxuICAgICAgICAgICAgICAgIGJ1ZmZlck91dHB1dDogYnVmZmVyLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChmID0+IHtcbiAgICAgICAgICAgICAgZi5tZXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBmLnByb3BlcnRpZXMuY29kZSxcbiAgICAgICAgICAgICAgICBhbGlhczogZi5wcm9wZXJ0aWVzLm5vbSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZi5wcm9wZXJ0aWVzLm5vbVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAucG9zdDxGZWF0dXJlPih0aGlzLmJhc2VVcmwgKyAnZ2Vvc3BhdGlhbC9idWZmZXI/Jywge1xuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBsb2M6IEpTT04uc3RyaW5naWZ5KGZlYXR1cmUpXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChmID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=