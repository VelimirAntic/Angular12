import { Injectable } from '@angular/core';
import proj4 from 'proj4';
import * as olproj from 'ol/proj';
import * as olproj4 from 'ol/proj/proj4';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
/**
 * When injected, this service automatically registers and
 * projection defined in the application config. A custom projection
 * needs to be registered to be usable by OL.
 */
export class ProjectionService {
    constructor(config) {
        this.config = config;
        const projections = this.config.getConfig('projections') || [];
        projections.forEach((projection) => {
            projection.alias = projection.alias ? projection.alias : projection.code;
            this.registerProjection(projection);
        });
        // register all utm zones
        for (let utmZone = 1; utmZone < 61; utmZone++) {
            const code = utmZone < 10 ? `EPSG:3260${utmZone}` : `EPSG:326${utmZone}`;
            const def = `+proj=utm +zone=${utmZone} +datum=WGS84 +units=m +no_defs`;
            const proj = { code, def, extent: undefined };
            this.registerProjection(proj);
        }
        // register all mtm zones
        for (let mtmZone = 1; mtmZone < 11; mtmZone++) {
            const code = mtmZone < 10 ? `EPSG:3218${mtmZone}` : `EPSG:321${80 + mtmZone}`;
            let lon0;
            if (Number(mtmZone) <= 2) {
                lon0 = -50 - Number(mtmZone) * 3;
            }
            else if (Number(mtmZone) >= 12) {
                lon0 = -81 - (Number(mtmZone) - 12) * 3;
            }
            else {
                lon0 = -49.5 - Number(mtmZone) * 3;
            }
            const def = `+proj=tmerc +lat_0=0 +lon_0=${lon0} +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"`;
            const proj = { code, def, extent: undefined };
            this.registerProjection(proj);
        }
    }
    /**
     * Define a proj4 projection and register it in OL
     * @param projection Projection
     */
    registerProjection(projection) {
        proj4.defs(projection.code, projection.def);
        olproj4.register(proj4);
        if (projection.extent) {
            olproj.get(projection.code).setExtent(projection.extent);
        }
    }
}
ProjectionService.ɵfac = function ProjectionService_Factory(t) { return new (t || ProjectionService)(i0.ɵɵinject(i1.ConfigService)); };
ProjectionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProjectionService, factory: ProjectionService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL3NoYXJlZC9wcm9qZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxLQUFLLE9BQU8sTUFBTSxlQUFlLENBQUM7OztBQU16Qzs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBQzdDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUN6RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFSCx5QkFBeUI7UUFDekIsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUM3QyxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLE9BQU8sRUFBRSxDQUFDO1lBQ3pFLE1BQU0sR0FBRyxHQUFHLG1CQUFtQixPQUFPLGlDQUFpQyxDQUFDO1lBQ3hFLE1BQU0sSUFBSSxHQUFlLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUcsU0FBUyxFQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBRUQseUJBQXlCO1FBQ3pCLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7WUFDOUUsSUFBSSxJQUFJLENBQUM7WUFDVCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQztZQUNELE1BQU0sR0FBRyxHQUFHLCtCQUErQixJQUFJLHNGQUFzRixDQUFDO1lBQ3RJLE1BQU0sSUFBSSxHQUFlLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUcsU0FBUyxFQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQixDQUFDLFVBQXNCO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7O2tGQTVDVSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07dUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHByb2o0IGZyb20gJ3Byb2o0JztcbmltcG9ydCAqIGFzIG9scHJvaiBmcm9tICdvbC9wcm9qJztcbmltcG9ydCAqIGFzIG9scHJvajQgZnJvbSAnb2wvcHJvai9wcm9qNCc7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHsgUHJvamVjdGlvbiB9IGZyb20gJy4vcHJvamVjdGlvbi5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBXaGVuIGluamVjdGVkLCB0aGlzIHNlcnZpY2UgYXV0b21hdGljYWxseSByZWdpc3RlcnMgYW5kXG4gKiBwcm9qZWN0aW9uIGRlZmluZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGNvbmZpZy4gQSBjdXN0b20gcHJvamVjdGlvblxuICogbmVlZHMgdG8gYmUgcmVnaXN0ZXJlZCB0byBiZSB1c2FibGUgYnkgT0wuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3Rpb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIGNvbnN0IHByb2plY3Rpb25zID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdwcm9qZWN0aW9ucycpIHx8IFtdO1xuICAgIHByb2plY3Rpb25zLmZvckVhY2goKHByb2plY3Rpb246IFByb2plY3Rpb24pID0+IHtcbiAgICAgIHByb2plY3Rpb24uYWxpYXMgPSBwcm9qZWN0aW9uLmFsaWFzID8gcHJvamVjdGlvbi5hbGlhcyA6IHByb2plY3Rpb24uY29kZTtcbiAgICAgIHRoaXMucmVnaXN0ZXJQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuICAgIH0pO1xuXG4gICAgLy8gcmVnaXN0ZXIgYWxsIHV0bSB6b25lc1xuICAgIGZvciAobGV0IHV0bVpvbmUgPSAxOyB1dG1ab25lIDwgNjE7IHV0bVpvbmUrKykge1xuICAgICAgY29uc3QgY29kZSA9IHV0bVpvbmUgPCAxMCA/IGBFUFNHOjMyNjAke3V0bVpvbmV9YCA6IGBFUFNHOjMyNiR7dXRtWm9uZX1gO1xuICAgICAgY29uc3QgZGVmID0gYCtwcm9qPXV0bSArem9uZT0ke3V0bVpvbmV9ICtkYXR1bT1XR1M4NCArdW5pdHM9bSArbm9fZGVmc2A7XG4gICAgICBjb25zdCBwcm9qOiBQcm9qZWN0aW9uID0geyBjb2RlLCBkZWYsIGV4dGVudCA6IHVuZGVmaW5lZH07XG4gICAgICB0aGlzLnJlZ2lzdGVyUHJvamVjdGlvbihwcm9qKTtcbiAgICB9XG5cbiAgICAvLyByZWdpc3RlciBhbGwgbXRtIHpvbmVzXG4gICAgZm9yIChsZXQgbXRtWm9uZSA9IDE7IG10bVpvbmUgPCAxMTsgbXRtWm9uZSsrKSB7XG4gICAgICBjb25zdCBjb2RlID0gbXRtWm9uZSA8IDEwID8gYEVQU0c6MzIxOCR7bXRtWm9uZX1gIDogYEVQU0c6MzIxJHs4MCArIG10bVpvbmV9YDtcbiAgICAgIGxldCBsb24wO1xuICAgICAgaWYgKE51bWJlcihtdG1ab25lKSA8PSAyKSB7XG4gICAgICAgIGxvbjAgPSAtNTAgLSBOdW1iZXIobXRtWm9uZSkgKiAzO1xuICAgICAgfSBlbHNlIGlmIChOdW1iZXIobXRtWm9uZSkgPj0gMTIpIHtcbiAgICAgICAgbG9uMCA9IC04MSAtIChOdW1iZXIobXRtWm9uZSkgLSAxMikgKiAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9uMCA9IC00OS41IC0gTnVtYmVyKG10bVpvbmUpICogMztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlZiA9IGArcHJvaj10bWVyYyArbGF0XzA9MCArbG9uXzA9JHtsb24wfSAraz0wLjk5OTkgK3hfMD0zMDQ4MDAgK3lfMD0wICtlbGxwcz1HUlM4MCArdG93Z3M4ND0wLDAsMCwwLDAsMCwwICt1bml0cz1tICtub19kZWZzXCJgO1xuICAgICAgY29uc3QgcHJvajogUHJvamVjdGlvbiA9IHsgY29kZSwgZGVmLCBleHRlbnQgOiB1bmRlZmluZWR9O1xuICAgICAgdGhpcy5yZWdpc3RlclByb2plY3Rpb24ocHJvaik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhIHByb2o0IHByb2plY3Rpb24gYW5kIHJlZ2lzdGVyIGl0IGluIE9MXG4gICAqIEBwYXJhbSBwcm9qZWN0aW9uIFByb2plY3Rpb25cbiAgICovXG4gIHJlZ2lzdGVyUHJvamVjdGlvbihwcm9qZWN0aW9uOiBQcm9qZWN0aW9uKSB7XG4gICAgcHJvajQuZGVmcyhwcm9qZWN0aW9uLmNvZGUsIHByb2plY3Rpb24uZGVmKTtcbiAgICBvbHByb2o0LnJlZ2lzdGVyKHByb2o0KTtcbiAgICBpZiAocHJvamVjdGlvbi5leHRlbnQpIHtcbiAgICAgIG9scHJvai5nZXQocHJvamVjdGlvbi5jb2RlKS5zZXRFeHRlbnQocHJvamVjdGlvbi5leHRlbnQpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=