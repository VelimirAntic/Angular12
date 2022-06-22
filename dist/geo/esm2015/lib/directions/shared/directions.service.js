import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./directions-source.service";
export class DirectionsService {
    constructor(directionsSourceService) {
        this.directionsSourceService = directionsSourceService;
    }
    route(coordinates, directionsOptions = {}) {
        if (coordinates.length === 0) {
            return;
        }
        return this.directionsSourceService.sources
            .filter((source) => source.enabled)
            .map((source) => this.routeSource(source, coordinates, directionsOptions));
    }
    routeSource(source, coordinates, directionsOptions = {}) {
        const request = source.route(coordinates, directionsOptions);
        return request;
    }
}
DirectionsService.ɵfac = function DirectionsService_Factory(t) { return new (t || DirectionsService)(i0.ɵɵinject(i1.DirectionsSourceService)); };
DirectionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DirectionsService, factory: DirectionsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DirectionsSourceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZGlyZWN0aW9ucy9zaGFyZWQvZGlyZWN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVczQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQztJQUV4RSxLQUFLLENBQUMsV0FBK0IsRUFBRSxvQkFBc0MsRUFBRTtRQUM3RSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU87YUFDeEMsTUFBTSxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwRCxHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxXQUFXLENBQ1QsTUFBd0IsRUFDeEIsV0FBK0IsRUFDL0Isb0JBQXNDLEVBQUU7UUFFeEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUM5RCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztrRkFuQlUsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vc2hhcmVkL2RpcmVjdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERpcmVjdGlvbnNTb3VyY2UgfSBmcm9tICcuLi9kaXJlY3Rpb25zLXNvdXJjZXMvZGlyZWN0aW9ucy1zb3VyY2UnO1xuaW1wb3J0IHsgRGlyZWN0aW9uc1NvdXJjZVNlcnZpY2UgfSBmcm9tICcuL2RpcmVjdGlvbnMtc291cmNlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlyZWN0aW9uc1NvdXJjZVNlcnZpY2U6IERpcmVjdGlvbnNTb3VyY2VTZXJ2aWNlKSB7fVxuXG4gIHJvdXRlKGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdW10sIGRpcmVjdGlvbnNPcHRpb25zOiBEaXJlY3Rpb25PcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPERpcmVjdGlvbltdPltdIHtcbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbnNTb3VyY2VTZXJ2aWNlLnNvdXJjZXNcbiAgICAgIC5maWx0ZXIoKHNvdXJjZTogRGlyZWN0aW9uc1NvdXJjZSkgPT4gc291cmNlLmVuYWJsZWQpXG4gICAgICAubWFwKChzb3VyY2U6IERpcmVjdGlvbnNTb3VyY2UpID0+IHRoaXMucm91dGVTb3VyY2Uoc291cmNlLCBjb29yZGluYXRlcywgZGlyZWN0aW9uc09wdGlvbnMpKTtcbiAgfVxuXG4gIHJvdXRlU291cmNlKFxuICAgIHNvdXJjZTogRGlyZWN0aW9uc1NvdXJjZSxcbiAgICBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXVtdLFxuICAgIGRpcmVjdGlvbnNPcHRpb25zOiBEaXJlY3Rpb25PcHRpb25zID0ge31cbiAgKTogT2JzZXJ2YWJsZTxEaXJlY3Rpb25bXT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBzb3VyY2Uucm91dGUoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbnNPcHRpb25zICk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cbn1cbiJdfQ==