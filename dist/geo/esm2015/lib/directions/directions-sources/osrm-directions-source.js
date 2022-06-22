import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cacheable } from 'ts-cacheable';
import { uuid } from '@igo2/utils';
import { DirectionsFormat, SourceDirectionsType } from '../shared/directions.enum';
import { DirectionsSource } from './directions-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
export class OsrmDirectionsSource extends DirectionsSource {
    constructor(http, config) {
        super();
        this.http = http;
        this.config = config;
        this.directionsUrl = 'https://geoegl.msp.gouv.qc.ca/services/itineraire/route/v1/driving/';
        this.options = this.config.getConfig('directionsSources.osrm') || {};
        this.directionsUrl = this.options.url || this.directionsUrl;
    }
    get enabled() {
        return this.options.enabled !== false;
    }
    set enabled(value) {
        this.options.enabled = value;
    }
    getName() {
        return OsrmDirectionsSource._name;
    }
    route(coordinates, directionsOptions = {}) {
        const directionsParams = this.getRouteParams(directionsOptions);
        return this.http
            .get(this.directionsUrl + coordinates.join(';'), {
            params: directionsParams
        })
            .pipe(map(res => this.extractRoutesData(res)));
    }
    extractRoutesData(response) {
        const routeResponse = [];
        response.routes.forEach(route => {
            routeResponse.push(this.formatRoute(route, response.waypoints));
        });
        return routeResponse;
    }
    getRouteParams(directionsOptions = {}) {
        directionsOptions.alternatives = directionsOptions.alternatives !== undefined ? directionsOptions.alternatives : true;
        directionsOptions.steps = directionsOptions.steps !== undefined ? directionsOptions.steps : true;
        directionsOptions.geometries = directionsOptions.geometries !== undefined ? directionsOptions.geometries : 'geojson';
        directionsOptions.overview = directionsOptions.overview !== undefined ? directionsOptions.overview : false;
        directionsOptions.continue_straight = directionsOptions.continue_straight !== undefined ? directionsOptions.continue_straight : false;
        return new HttpParams({
            fromObject: {
                alternatives: directionsOptions.alternatives ? 'true' : 'false',
                overview: directionsOptions.overview ? 'simplified' : 'full',
                steps: directionsOptions.steps ? 'true' : 'false',
                geometries: directionsOptions.geometries ? directionsOptions.geometries : 'geojson',
                continue_straight: directionsOptions.continue_straight ? 'true' : 'false',
            }
        });
    }
    formatRoute(roadNetworkRoute, waypoints) {
        const stepsUI = [];
        roadNetworkRoute.legs.forEach(leg => {
            leg.steps.forEach(step => {
                stepsUI.push(step);
            });
        });
        return {
            id: uuid(),
            title: roadNetworkRoute.legs[0].summary,
            source: OsrmDirectionsSource._name,
            sourceType: SourceDirectionsType.Route,
            order: 1,
            format: DirectionsFormat.GeoJSON,
            icon: 'directions',
            projection: 'EPSG:4326',
            waypoints,
            distance: roadNetworkRoute.distance,
            duration: roadNetworkRoute.duration,
            geometry: roadNetworkRoute.geometry,
            legs: roadNetworkRoute.legs,
            steps: stepsUI,
            weight: roadNetworkRoute.weight,
            weight_name: roadNetworkRoute.weight_name
        };
    }
}
OsrmDirectionsSource._name = 'OSRM Québec';
OsrmDirectionsSource.ɵfac = function OsrmDirectionsSource_Factory(t) { return new (t || OsrmDirectionsSource)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); };
OsrmDirectionsSource.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OsrmDirectionsSource, factory: OsrmDirectionsSource.ɵfac });
__decorate([
    Cacheable({
        maxCacheCount: 20
    })
], OsrmDirectionsSource.prototype, "route", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OsrmDirectionsSource, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, { route: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NybS1kaXJlY3Rpb25zLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy1zb3VyY2VzL29zcm0tZGlyZWN0aW9ucy1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJbkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFJdkQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQVl4RCxZQUFvQixJQUFnQixFQUFVLE1BQXFCO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRFUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7UUFKM0Qsa0JBQWEsR0FDbkIscUVBQXFFLENBQUM7UUFLdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUQsQ0FBQztJQWZELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUss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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDYWNoZWFibGUgfSBmcm9tICd0cy1jYWNoZWFibGUnO1xuXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi9zaGFyZWQvZGlyZWN0aW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGlyZWN0aW9uc0Zvcm1hdCwgU291cmNlRGlyZWN0aW9uc1R5cGUgfSBmcm9tICcuLi9zaGFyZWQvZGlyZWN0aW9ucy5lbnVtJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uc1NvdXJjZSB9IGZyb20gJy4vZGlyZWN0aW9ucy1zb3VyY2UnO1xuaW1wb3J0IHsgRGlyZWN0aW9uc1NvdXJjZU9wdGlvbnMgfSBmcm9tICcuL2RpcmVjdGlvbnMtc291cmNlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPc3JtRGlyZWN0aW9uc1NvdXJjZSBleHRlbmRzIERpcmVjdGlvbnNTb3VyY2Uge1xuICBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlO1xuICB9XG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBzdGF0aWMgX25hbWUgPSAnT1NSTSBRdcOpYmVjJztcbiAgcHJpdmF0ZSBkaXJlY3Rpb25zVXJsID1cbiAgICAnaHR0cHM6Ly9nZW9lZ2wubXNwLmdvdXYucWMuY2Evc2VydmljZXMvaXRpbmVyYWlyZS9yb3V0ZS92MS9kcml2aW5nLyc7XG4gIHByaXZhdGUgb3B0aW9uczogRGlyZWN0aW9uc1NvdXJjZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdkaXJlY3Rpb25zU291cmNlcy5vc3JtJykgfHwge307XG4gICAgdGhpcy5kaXJlY3Rpb25zVXJsID0gdGhpcy5vcHRpb25zLnVybCB8fCB0aGlzLmRpcmVjdGlvbnNVcmw7XG4gIH1cblxuICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9zcm1EaXJlY3Rpb25zU291cmNlLl9uYW1lO1xuICB9XG5cbiAgQENhY2hlYWJsZSh7XG4gICAgbWF4Q2FjaGVDb3VudDogMjBcbiAgfSlcbiAgcm91dGUoY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl1bXSwgZGlyZWN0aW9uc09wdGlvbnM6IERpcmVjdGlvbk9wdGlvbnMgPSB7fSk6IE9ic2VydmFibGU8RGlyZWN0aW9uW10+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25zUGFyYW1zID0gdGhpcy5nZXRSb3V0ZVBhcmFtcyhkaXJlY3Rpb25zT3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxKU09OW10+KHRoaXMuZGlyZWN0aW9uc1VybCArIGNvb3JkaW5hdGVzLmpvaW4oJzsnKSwge1xuICAgICAgICBwYXJhbXM6IGRpcmVjdGlvbnNQYXJhbXNcbiAgICAgIH0pXG4gICAgICAucGlwZShtYXAocmVzID0+IHRoaXMuZXh0cmFjdFJvdXRlc0RhdGEocmVzKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0Um91dGVzRGF0YShyZXNwb25zZSk6IERpcmVjdGlvbltdIHtcbiAgICBjb25zdCByb3V0ZVJlc3BvbnNlID0gW107XG4gICAgcmVzcG9uc2Uucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgcm91dGVSZXNwb25zZS5wdXNoKHRoaXMuZm9ybWF0Um91dGUocm91dGUsIHJlc3BvbnNlLndheXBvaW50cykpO1xuICAgIH0pO1xuICAgIHJldHVybiByb3V0ZVJlc3BvbnNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3V0ZVBhcmFtcyhkaXJlY3Rpb25zT3B0aW9uczogRGlyZWN0aW9uT3B0aW9ucyA9IHt9KTogSHR0cFBhcmFtcyB7XG5cbiAgICBkaXJlY3Rpb25zT3B0aW9ucy5hbHRlcm5hdGl2ZXMgPSBkaXJlY3Rpb25zT3B0aW9ucy5hbHRlcm5hdGl2ZXMgIT09IHVuZGVmaW5lZCA/IGRpcmVjdGlvbnNPcHRpb25zLmFsdGVybmF0aXZlcyA6IHRydWU7XG4gICAgZGlyZWN0aW9uc09wdGlvbnMuc3RlcHMgPSBkaXJlY3Rpb25zT3B0aW9ucy5zdGVwcyAhPT0gdW5kZWZpbmVkID8gZGlyZWN0aW9uc09wdGlvbnMuc3RlcHMgOiB0cnVlO1xuICAgIGRpcmVjdGlvbnNPcHRpb25zLmdlb21ldHJpZXMgPSBkaXJlY3Rpb25zT3B0aW9ucy5nZW9tZXRyaWVzICE9PSB1bmRlZmluZWQgPyBkaXJlY3Rpb25zT3B0aW9ucy5nZW9tZXRyaWVzIDogJ2dlb2pzb24nO1xuICAgIGRpcmVjdGlvbnNPcHRpb25zLm92ZXJ2aWV3ID0gZGlyZWN0aW9uc09wdGlvbnMub3ZlcnZpZXcgIT09IHVuZGVmaW5lZCA/IGRpcmVjdGlvbnNPcHRpb25zLm92ZXJ2aWV3IDogZmFsc2U7XG4gICAgZGlyZWN0aW9uc09wdGlvbnMuY29udGludWVfc3RyYWlnaHQgPSBkaXJlY3Rpb25zT3B0aW9ucy5jb250aW51ZV9zdHJhaWdodCAhPT0gdW5kZWZpbmVkID8gZGlyZWN0aW9uc09wdGlvbnMuY29udGludWVfc3RyYWlnaHQgOiBmYWxzZTtcblxuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tT2JqZWN0OiB7XG4gICAgICAgIGFsdGVybmF0aXZlczogZGlyZWN0aW9uc09wdGlvbnMuYWx0ZXJuYXRpdmVzID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgb3ZlcnZpZXc6IGRpcmVjdGlvbnNPcHRpb25zLm92ZXJ2aWV3ID8gJ3NpbXBsaWZpZWQnIDogJ2Z1bGwnLFxuICAgICAgICBzdGVwczogZGlyZWN0aW9uc09wdGlvbnMuc3RlcHMgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICBnZW9tZXRyaWVzOiBkaXJlY3Rpb25zT3B0aW9ucy5nZW9tZXRyaWVzID8gZGlyZWN0aW9uc09wdGlvbnMuZ2VvbWV0cmllcyA6ICdnZW9qc29uJyxcbiAgICAgICAgY29udGludWVfc3RyYWlnaHQ6IGRpcmVjdGlvbnNPcHRpb25zLmNvbnRpbnVlX3N0cmFpZ2h0ID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Um91dGUocm9hZE5ldHdvcmtSb3V0ZTogYW55LCB3YXlwb2ludHM6IGFueSk6IERpcmVjdGlvbiB7XG4gICAgY29uc3Qgc3RlcHNVSSA9IFtdO1xuICAgIHJvYWROZXR3b3JrUm91dGUubGVncy5mb3JFYWNoKGxlZyA9PiB7XG4gICAgICBsZWcuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgc3RlcHNVSS5wdXNoKHN0ZXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgICB0aXRsZTogcm9hZE5ldHdvcmtSb3V0ZS5sZWdzWzBdLnN1bW1hcnksXG4gICAgICBzb3VyY2U6IE9zcm1EaXJlY3Rpb25zU291cmNlLl9uYW1lLFxuICAgICAgc291cmNlVHlwZTogU291cmNlRGlyZWN0aW9uc1R5cGUuUm91dGUsXG4gICAgICBvcmRlcjogMSxcbiAgICAgIGZvcm1hdDogRGlyZWN0aW9uc0Zvcm1hdC5HZW9KU09OLFxuICAgICAgaWNvbjogJ2RpcmVjdGlvbnMnLFxuICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICB3YXlwb2ludHMsXG4gICAgICBkaXN0YW5jZTogcm9hZE5ldHdvcmtSb3V0ZS5kaXN0YW5jZSxcbiAgICAgIGR1cmF0aW9uOiByb2FkTmV0d29ya1JvdXRlLmR1cmF0aW9uLFxuICAgICAgZ2VvbWV0cnk6IHJvYWROZXR3b3JrUm91dGUuZ2VvbWV0cnksXG4gICAgICBsZWdzOiByb2FkTmV0d29ya1JvdXRlLmxlZ3MsXG4gICAgICBzdGVwczogc3RlcHNVSSxcbiAgICAgIHdlaWdodDogcm9hZE5ldHdvcmtSb3V0ZS53ZWlnaHQsXG4gICAgICB3ZWlnaHRfbmFtZTogcm9hZE5ldHdvcmtSb3V0ZS53ZWlnaHRfbmFtZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==