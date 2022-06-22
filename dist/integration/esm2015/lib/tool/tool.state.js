import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImportExportMode } from '../import-export/import-export.state';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/common";
import * as i2 from "../import-export/import-export.state";
/**
 * Service that holds the state of the search module
 */
export class ToolState {
    constructor(toolService, importExportState) {
        this.toolService = toolService;
        this.importExportState = importExportState;
        this.openSidenav$ = new BehaviorSubject(undefined);
    }
    get toolbox() {
        return this.toolService.toolbox;
    }
    toolToActivateFromOptions(toolToActivate) {
        if (!toolToActivate) {
            return;
        }
        if (toolToActivate.tool === 'importExport') {
            let exportOptions = this.importExportState.exportOptions$.value;
            if (!exportOptions) {
                exportOptions = {
                    layers: toolToActivate.options.layers,
                    featureInMapExtent: toolToActivate.options.featureInMapExtent
                };
            }
            else {
                exportOptions.layers = toolToActivate.options.layers;
                exportOptions.featureInMapExtent = toolToActivate.options.featureInMapExtent;
            }
            this.importExportState.setsExportOptions(exportOptions);
            this.importExportState.setMode(ImportExportMode.export);
        }
        if (this.toolbox.getTool(toolToActivate.tool)) {
            this.toolbox.activateTool(toolToActivate.tool);
            this.openSidenav$.next(true);
        }
    }
}
ToolState.ɵfac = function ToolState_Factory(t) { return new (t || ToolState)(i0.ɵɵinject(i1.ToolService), i0.ɵɵinject(i2.ImportExportState)); };
ToolState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToolState, factory: ToolState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ToolService }, { type: i2.ImportExportState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvdG9vbC90b29sLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQXFCLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFM0Y7O0dBRUc7QUFJSCxNQUFNLE9BQU8sU0FBUztJQU9wQixZQUNVLFdBQXdCLEVBQ3hCLGlCQUFvQztRQURwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSnZDLGlCQUFZLEdBQTZCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBSzFFLENBQUM7SUFUTixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFTQyx5QkFBeUIsQ0FBQyxjQUErRDtRQUN6RixJQUFJLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2hDLElBQUksY0FBYyxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDMUMsSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQy9FLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLGFBQWEsR0FBRztvQkFDZCxNQUFNLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNO29CQUNyQyxrQkFBa0IsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQjtpQkFDOUQsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLGFBQWEsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3JELGFBQWEsQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2FBQzlFO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztrRUFqQ1UsU0FBUzsrREFBVCxTQUFTLFdBQVQsU0FBUyxtQkFGUixNQUFNO3VGQUVQLFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sYm94LCBUb29sU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5cbmltcG9ydCB7IEV4cG9ydE9wdGlvbnMgfSBmcm9tICdAaWdvMi9nZW8nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbXBvcnRFeHBvcnRNb2RlLCBJbXBvcnRFeHBvcnRTdGF0ZSB9IGZyb20gJy4uL2ltcG9ydC1leHBvcnQvaW1wb3J0LWV4cG9ydC5zdGF0ZSc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSBvZiB0aGUgc2VhcmNoIG1vZHVsZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb29sU3RhdGUge1xuICBnZXQgdG9vbGJveCgpOiBUb29sYm94IHtcbiAgICByZXR1cm4gdGhpcy50b29sU2VydmljZS50b29sYm94O1xuICB9XG5cbiAgcHVibGljIG9wZW5TaWRlbmF2JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9vbFNlcnZpY2U6IFRvb2xTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW1wb3J0RXhwb3J0U3RhdGU6IEltcG9ydEV4cG9ydFN0YXRlXG4gICAgKSB7fVxuXG4gICAgdG9vbFRvQWN0aXZhdGVGcm9tT3B0aW9ucyh0b29sVG9BY3RpdmF0ZTogeyB0b29sOiBzdHJpbmc7IG9wdGlvbnM6IHtba2V5OiBzdHJpbmddOiBhbnl9IH0pIHtcbiAgICBpZiAoIXRvb2xUb0FjdGl2YXRlKSB7IHJldHVybjsgfVxuICAgIGlmICh0b29sVG9BY3RpdmF0ZS50b29sID09PSAnaW1wb3J0RXhwb3J0Jykge1xuICAgICAgbGV0IGV4cG9ydE9wdGlvbnM6IEV4cG9ydE9wdGlvbnMgPSB0aGlzLmltcG9ydEV4cG9ydFN0YXRlLmV4cG9ydE9wdGlvbnMkLnZhbHVlO1xuICAgICAgaWYgKCFleHBvcnRPcHRpb25zKSB7XG4gICAgICAgIGV4cG9ydE9wdGlvbnMgPSB7XG4gICAgICAgICAgbGF5ZXJzOiB0b29sVG9BY3RpdmF0ZS5vcHRpb25zLmxheWVycyxcbiAgICAgICAgICBmZWF0dXJlSW5NYXBFeHRlbnQ6IHRvb2xUb0FjdGl2YXRlLm9wdGlvbnMuZmVhdHVyZUluTWFwRXh0ZW50XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHBvcnRPcHRpb25zLmxheWVycyA9IHRvb2xUb0FjdGl2YXRlLm9wdGlvbnMubGF5ZXJzO1xuICAgICAgICBleHBvcnRPcHRpb25zLmZlYXR1cmVJbk1hcEV4dGVudCA9IHRvb2xUb0FjdGl2YXRlLm9wdGlvbnMuZmVhdHVyZUluTWFwRXh0ZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5pbXBvcnRFeHBvcnRTdGF0ZS5zZXRzRXhwb3J0T3B0aW9ucyhleHBvcnRPcHRpb25zKTtcbiAgICAgIHRoaXMuaW1wb3J0RXhwb3J0U3RhdGUuc2V0TW9kZShJbXBvcnRFeHBvcnRNb2RlLmV4cG9ydCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9vbGJveC5nZXRUb29sKHRvb2xUb0FjdGl2YXRlLnRvb2wpKSB7XG4gICAgICB0aGlzLnRvb2xib3guYWN0aXZhdGVUb29sKHRvb2xUb0FjdGl2YXRlLnRvb2wpO1xuICAgICAgdGhpcy5vcGVuU2lkZW5hdiQubmV4dCh0cnVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==