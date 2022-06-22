import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../widget/widget-outlet/widget-outlet.component";
function WorkspaceWidgetOutletComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "igo-widget-outlet", 1);
    i0.ɵɵlistener("cancel", function WorkspaceWidgetOutletComponent_ng_container_0_Template_igo_widget_outlet_cancel_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const widget_r1 = restoredCtx.ngIf; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onWidgetCancel(widget_r1); })("complete", function WorkspaceWidgetOutletComponent_ng_container_0_Template_igo_widget_outlet_complete_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const widget_r1 = restoredCtx.ngIf; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onWidgetComplete(widget_r1); });
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const widget_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("widget", widget_r1)("inputs", i0.ɵɵpipeBind1(2, 3, ctx_r0.widgetInputs$))("subscribers", i0.ɵɵpipeBind1(3, 5, ctx_r0.widgetSubscribers$));
} }
/**
 * This component dynamically render an Workspace's active widget.
 * It also deactivate that widget whenever the widget's component
 * emit the 'cancel' or 'complete' event.
 */
export class WorkspaceWidgetOutletComponent {
    constructor() {
        /**
         * Event emitted when a widget is deactivate which happens
         * when the widget's component emits the 'cancel' or 'complete' event.
         */
        this.deactivateWidget = new EventEmitter();
    }
    /**
     * Observable of the workspace's active widget
     * @internal
     */
    get widget$() { return this.workspace.widget$; }
    /**
     * Observable of the workspace's widget inputs
     * @internal
     */
    get widgetInputs$() {
        return this.workspace.widgetInputs$;
    }
    /**
     * Observable of the workspace's widget inputs
     * @internal
     */
    get widgetSubscribers$() {
        return this.workspace.widgetSubscribers$;
    }
    /**
     * When a widget's component emit the 'cancel' event,
     * deactivate that widget and emit the 'deactivateWidget' event.
     * @param widget Widget
     * @internal
     */
    onWidgetCancel(widget) {
        this.workspace.deactivateWidget();
        this.deactivateWidget.emit(widget);
    }
    /**
     * When a widget's component emit the 'cancel' event,
     * deactivate that widget and emit the 'deactivateWidget' event.
     * @param widget Widget
     * @internal
     */
    onWidgetComplete(widget) {
        this.workspace.deactivateWidget();
        this.deactivateWidget.emit(widget);
    }
}
WorkspaceWidgetOutletComponent.ɵfac = function WorkspaceWidgetOutletComponent_Factory(t) { return new (t || WorkspaceWidgetOutletComponent)(); };
WorkspaceWidgetOutletComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkspaceWidgetOutletComponent, selectors: [["igo-workspace-widget-outlet"]], inputs: { workspace: "workspace" }, outputs: { deactivateWidget: "deactivateWidget" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "widget", "inputs", "subscribers", "cancel", "complete"]], template: function WorkspaceWidgetOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WorkspaceWidgetOutletComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.widget$));
    } }, directives: [i1.NgIf, i2.WidgetOutletComponent], pipes: [i1.AsyncPipe], styles: ["igo-widget-outlet[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceWidgetOutletComponent, [{
        type: Component,
        args: [{
                selector: 'igo-workspace-widget-outlet',
                templateUrl: './workspace-widget-outlet.component.html',
                styleUrls: ['./workspace-widget-outlet.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { workspace: [{
            type: Input
        }], deactivateWidget: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXdpZGdldC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvd29ya3NwYWNlL3dvcmtzcGFjZS13aWRnZXQtb3V0bGV0L3dvcmtzcGFjZS13aWRnZXQtb3V0bGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2Utd2lkZ2V0LW91dGxldC93b3Jrc3BhY2Utd2lkZ2V0LW91dGxldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDTnZCLDZCQUFnRDtJQUM5Qyw0Q0FLd0M7SUFEdEMsNlJBQWlDLHNSQUFBOzs7SUFFbkMsaUJBQW9CO0lBQ3RCLDBCQUFlOzs7O0lBTlgsZUFBaUI7SUFBakIsa0NBQWlCLHNEQUFBLGdFQUFBOztBRFdyQjs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLDhCQUE4QjtJQW1DekM7UUE1QkE7OztXQUdHO1FBQ08scUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXdCekMsQ0FBQztJQXRCaEI7OztPQUdHO0lBQ0gsSUFBSSxPQUFPLEtBQThCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXpFOzs7T0FHRztJQUNILElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztJQUMzQyxDQUFDO0lBSUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OzRHQXpEVSw4QkFBOEI7aUZBQTlCLDhCQUE4QjtRQ3hCM0MsaUdBUWU7OztRQVJBLHdEQUFzQjs7dUZEd0J4Qiw4QkFBOEI7Y0FOMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2dCQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtzQ0FNVSxTQUFTO2tCQUFqQixLQUFLO1lBTUksZ0JBQWdCO2tCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFdvcmtzcGFjZSB9IGZyb20gJy4uL3NoYXJlZC93b3Jrc3BhY2UnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGR5bmFtaWNhbGx5IHJlbmRlciBhbiBXb3Jrc3BhY2UncyBhY3RpdmUgd2lkZ2V0LlxuICogSXQgYWxzbyBkZWFjdGl2YXRlIHRoYXQgd2lkZ2V0IHdoZW5ldmVyIHRoZSB3aWRnZXQncyBjb21wb25lbnRcbiAqIGVtaXQgdGhlICdjYW5jZWwnIG9yICdjb21wbGV0ZScgZXZlbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby13b3Jrc3BhY2Utd2lkZ2V0LW91dGxldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93b3Jrc3BhY2Utd2lkZ2V0LW91dGxldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dvcmtzcGFjZS13aWRnZXQtb3V0bGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVdpZGdldE91dGxldENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFdvcmtzcGFjZVxuICAgKi9cbiAgQElucHV0KCkgd29ya3NwYWNlOiBXb3Jrc3BhY2U7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIHdpZGdldCBpcyBkZWFjdGl2YXRlIHdoaWNoIGhhcHBlbnNcbiAgICogd2hlbiB0aGUgd2lkZ2V0J3MgY29tcG9uZW50IGVtaXRzIHRoZSAnY2FuY2VsJyBvciAnY29tcGxldGUnIGV2ZW50LlxuICAgKi9cbiAgQE91dHB1dCgpIGRlYWN0aXZhdGVXaWRnZXQgPSBuZXcgRXZlbnRFbWl0dGVyPFdpZGdldD4oKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgd29ya3NwYWNlJ3MgYWN0aXZlIHdpZGdldFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCB3aWRnZXQkKCk6IEJlaGF2aW9yU3ViamVjdDxXaWRnZXQ+IHsgcmV0dXJuIHRoaXMud29ya3NwYWNlLndpZGdldCQ7IH1cblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgd29ya3NwYWNlJ3Mgd2lkZ2V0IGlucHV0c1xuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGdldCB3aWRnZXRJbnB1dHMkKCk6IEJlaGF2aW9yU3ViamVjdDx7W2tleTogc3RyaW5nXTogYW55fT4ge1xuICAgIHJldHVybiB0aGlzLndvcmtzcGFjZS53aWRnZXRJbnB1dHMkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIHdvcmtzcGFjZSdzIHdpZGdldCBpbnB1dHNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXQgd2lkZ2V0U3Vic2NyaWJlcnMkKCk6IEJlaGF2aW9yU3ViamVjdDx7W2tleTogc3RyaW5nXTogKGV2ZW50OiBhbnkpID0+IHZvaWR9PiB7XG4gICAgcmV0dXJuIHRoaXMud29ya3NwYWNlLndpZGdldFN1YnNjcmliZXJzJDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogV2hlbiBhIHdpZGdldCdzIGNvbXBvbmVudCBlbWl0IHRoZSAnY2FuY2VsJyBldmVudCxcbiAgICogZGVhY3RpdmF0ZSB0aGF0IHdpZGdldCBhbmQgZW1pdCB0aGUgJ2RlYWN0aXZhdGVXaWRnZXQnIGV2ZW50LlxuICAgKiBAcGFyYW0gd2lkZ2V0IFdpZGdldFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uV2lkZ2V0Q2FuY2VsKHdpZGdldDogV2lkZ2V0KSB7XG4gICAgdGhpcy53b3Jrc3BhY2UuZGVhY3RpdmF0ZVdpZGdldCgpO1xuICAgIHRoaXMuZGVhY3RpdmF0ZVdpZGdldC5lbWl0KHdpZGdldCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBhIHdpZGdldCdzIGNvbXBvbmVudCBlbWl0IHRoZSAnY2FuY2VsJyBldmVudCxcbiAgICogZGVhY3RpdmF0ZSB0aGF0IHdpZGdldCBhbmQgZW1pdCB0aGUgJ2RlYWN0aXZhdGVXaWRnZXQnIGV2ZW50LlxuICAgKiBAcGFyYW0gd2lkZ2V0IFdpZGdldFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uV2lkZ2V0Q29tcGxldGUod2lkZ2V0OiBXaWRnZXQpIHtcbiAgICB0aGlzLndvcmtzcGFjZS5kZWFjdGl2YXRlV2lkZ2V0KCk7XG4gICAgdGhpcy5kZWFjdGl2YXRlV2lkZ2V0LmVtaXQod2lkZ2V0KTtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0JCB8IGFzeW5jIGFzIHdpZGdldFwiPlxuICA8aWdvLXdpZGdldC1vdXRsZXRcbiAgICBbd2lkZ2V0XT1cIndpZGdldFwiXG4gICAgW2lucHV0c109XCJ3aWRnZXRJbnB1dHMkIHwgYXN5bmNcIlxuICAgIFtzdWJzY3JpYmVyc109XCJ3aWRnZXRTdWJzY3JpYmVycyQgfCBhc3luY1wiXG4gICAgKGNhbmNlbCk9XCJvbldpZGdldENhbmNlbCh3aWRnZXQpXCJcbiAgICAoY29tcGxldGUpPVwib25XaWRnZXRDb21wbGV0ZSh3aWRnZXQpXCI+XG4gIDwvaWdvLXdpZGdldC1vdXRsZXQ+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==