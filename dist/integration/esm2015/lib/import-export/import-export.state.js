import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export var ImportExportType;
(function (ImportExportType) {
    ImportExportType["layer"] = "layer";
    ImportExportType["context"] = "context";
})(ImportExportType || (ImportExportType = {}));
export var ImportExportMode;
(function (ImportExportMode) {
    ImportExportMode["import"] = "import";
    ImportExportMode["export"] = "export";
})(ImportExportMode || (ImportExportMode = {}));
/**
 * Service that holds the state of the importExport module
 */
export class ImportExportState {
    constructor() {
        this.importExportType$ = new BehaviorSubject(ImportExportType.layer);
        this.selectedMode$ = new BehaviorSubject(ImportExportMode.import);
        this.exportOptions$ = new BehaviorSubject(undefined);
    }
    setImportExportType(type) {
        this.importExportType$.next(type);
    }
    setMode(mode) {
        this.selectedMode$.next(mode);
    }
    setsExportOptions(exportOptions) {
        this.exportOptions$.next(exportOptions);
    }
}
ImportExportState.ɵfac = function ImportExportState_Factory(t) { return new (t || ImportExportState)(); };
ImportExportState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImportExportState, factory: ImportExportState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportExportState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWV4cG9ydC5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvaW1wb3J0LWV4cG9ydC9pbXBvcnQtZXhwb3J0LnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkMsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMxQixtQ0FBZSxDQUFBO0lBQ2YsdUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLHFDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRzNCO0FBRUQ7O0dBRUc7QUFJSCxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBS1csc0JBQWlCLEdBQXNDLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25HLGtCQUFhLEdBQXNDLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hHLG1CQUFjLEdBQW1DLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBYzFGO0lBWkMsbUJBQW1CLENBQUMsSUFBc0I7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQXNCO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxhQUE0QjtRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOztrRkFoQlEsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXhwb3J0T3B0aW9ucyB9IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmV4cG9ydCBlbnVtIEltcG9ydEV4cG9ydFR5cGUge1xuICBsYXllciA9ICdsYXllcicsXG4gIGNvbnRleHQgPSAnY29udGV4dCdcbn1cblxuZXhwb3J0IGVudW0gSW1wb3J0RXhwb3J0TW9kZSB7XG4gIGltcG9ydCA9ICdpbXBvcnQnLFxuICBleHBvcnQgPSAnZXhwb3J0J1xufVxuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgdGhlIGltcG9ydEV4cG9ydCBtb2R1bGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW1wb3J0RXhwb3J0U3RhdGUge1xuXG4gIHJlYWRvbmx5IGltcG9ydEV4cG9ydFR5cGUkOiBCZWhhdmlvclN1YmplY3Q8SW1wb3J0RXhwb3J0VHlwZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KEltcG9ydEV4cG9ydFR5cGUubGF5ZXIpO1xuICByZWFkb25seSBzZWxlY3RlZE1vZGUkOiBCZWhhdmlvclN1YmplY3Q8SW1wb3J0RXhwb3J0TW9kZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KEltcG9ydEV4cG9ydE1vZGUuaW1wb3J0KTtcbiAgcmVhZG9ubHkgZXhwb3J0T3B0aW9ucyQ6IEJlaGF2aW9yU3ViamVjdDxFeHBvcnRPcHRpb25zPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICBzZXRJbXBvcnRFeHBvcnRUeXBlKHR5cGU6IEltcG9ydEV4cG9ydFR5cGUpIHtcbiAgICB0aGlzLmltcG9ydEV4cG9ydFR5cGUkLm5leHQodHlwZSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGU6IEltcG9ydEV4cG9ydE1vZGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkTW9kZSQubmV4dChtb2RlKTtcbiAgfVxuXG4gIHNldHNFeHBvcnRPcHRpb25zKGV4cG9ydE9wdGlvbnM6IEV4cG9ydE9wdGlvbnMpIHtcbiAgICAgIHRoaXMuZXhwb3J0T3B0aW9ucyQubmV4dChleHBvcnRPcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==