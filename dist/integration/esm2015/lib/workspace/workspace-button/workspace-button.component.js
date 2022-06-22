import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../workspace.state";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
function WorkspaceButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function WorkspaceButtonComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.activateWorkspace(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "mat-icon", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", i0.ɵɵpipeBind1(1, 2, "igo.integration.workspace.toggleWorkspace"))("color", ctx_r0.color);
} }
export class WorkspaceButtonComponent {
    constructor(workspaceState) {
        this.workspaceState = workspaceState;
        this.hasWorkspace$ = new BehaviorSubject(false);
        this.layer$ = new BehaviorSubject(undefined);
        this.color = 'primary';
    }
    set layer(value) {
        this._layer = value;
        this.layer$.next(this._layer);
    }
    get layer() {
        return this._layer;
    }
    ngOnInit() {
        this.hasWorkspace$$ = combineLatest([this.workspaceState.workspaceEnabled$, this.layer$])
            .subscribe(bunch => { var _a, _b; return this.hasWorkspace$.next(bunch[0] && ((_b = (_a = bunch[1]) === null || _a === void 0 ? void 0 : _a.options.workspace) === null || _b === void 0 ? void 0 : _b.enabled)); });
    }
    ngOnDestroy() {
        this.hasWorkspace$$.unsubscribe();
    }
    activateWorkspace() {
        if (this.workspaceState.workspace$.value &&
            this.workspaceState.workspace$.value.layer.id === this.layer.id &&
            this.workspaceState.workspacePanelExpanded) {
            this.workspaceState.workspacePanelExpanded = false;
        }
        else {
            this.workspaceState.workspacePanelExpanded = true;
            this.workspaceState.setActiveWorkspaceById(this.layer.id);
        }
    }
}
WorkspaceButtonComponent.ɵfac = function WorkspaceButtonComponent_Factory(t) { return new (t || WorkspaceButtonComponent)(i0.ɵɵdirectiveInject(i1.WorkspaceState)); };
WorkspaceButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkspaceButtonComponent, selectors: [["igo-workspace-button"]], inputs: { layer: "layer", color: "color" }, decls: 2, vars: 3, consts: [["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "table"]], template: function WorkspaceButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WorkspaceButtonComponent_button_0_Template, 3, 4, "button", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.hasWorkspace$));
    } }, directives: [i2.NgIf, i3.MatButton, i4.MatTooltip, i5.MatIcon], pipes: [i2.AsyncPipe, i6.TranslatePipe], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkspaceButtonComponent, [{
        type: Component,
        args: [{
                selector: 'igo-workspace-button',
                templateUrl: './workspace-button.component.html',
                styleUrls: ['./workspace-button.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.WorkspaceState }]; }, { layer: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3dvcmtzcGFjZS93b3Jrc3BhY2UtYnV0dG9uL3dvcmtzcGFjZS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi93b3Jrc3BhY2Uvd29ya3NwYWNlLWJ1dHRvbi93b3Jrc3BhY2UtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc3RixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7SUNIcEUsaUNBUUc7SUFERCxzTUFBNkI7O0lBRTdCLDhCQUFxQztJQUN2QyxpQkFBUzs7O0lBTFAsOEZBQXNFLHVCQUFBOztBRE14RSxNQUFNLE9BQU8sd0JBQXdCO0lBbUJuQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQjNDLGtCQUFhLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSXBFLFdBQU0sR0FBMkIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFXL0QsVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUVtQixDQUFDO0lBWnZELElBQ0ksS0FBSyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RGLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxlQUFDLE9BQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLE1BQUEsTUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBDQUFFLE9BQU8sQ0FBQyxTQUFTLDBDQUFFLE9BQU8sQ0FBQSxDQUFDLENBQUEsRUFBQSxDQUM1RixDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7O2dHQXpDVSx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1hyQywrRUFVUzs7O1FBVE4sOERBQTJCOzt1RkRVakIsd0JBQXdCO2NBTnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7aUVBU0ssS0FBSztrQkFEUixLQUFLO1lBVUcsS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IExheWVyIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IFdvcmtzcGFjZVN0YXRlIH0gZnJvbSAnLi4vd29ya3NwYWNlLnN0YXRlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lnby13b3Jrc3BhY2UtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzcGFjZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93b3Jrc3BhY2UtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgaGFzV29ya3NwYWNlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHByaXZhdGUgaGFzV29ya3NwYWNlJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9sYXllcjogTGF5ZXI7XG4gIHByaXZhdGUgbGF5ZXIkOiBCZWhhdmlvclN1YmplY3Q8TGF5ZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuICBASW5wdXQoKVxuICBzZXQgbGF5ZXIodmFsdWU6IExheWVyKSB7XG4gICAgdGhpcy5fbGF5ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmxheWVyJC5uZXh0KHRoaXMuX2xheWVyKTtcbiAgfVxuXG4gIGdldCBsYXllcigpOiBMYXllciB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVyO1xuICB9XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtzcGFjZVN0YXRlOiBXb3Jrc3BhY2VTdGF0ZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNXb3Jrc3BhY2UkJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMud29ya3NwYWNlU3RhdGUud29ya3NwYWNlRW5hYmxlZCQsIHRoaXMubGF5ZXIkXSlcbiAgICAgIC5zdWJzY3JpYmUoYnVuY2ggPT4gdGhpcy5oYXNXb3Jrc3BhY2UkLm5leHQoYnVuY2hbMF0gJiYgYnVuY2hbMV0/Lm9wdGlvbnMud29ya3NwYWNlPy5lbmFibGVkKVxuICAgICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaGFzV29ya3NwYWNlJCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGFjdGl2YXRlV29ya3NwYWNlKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMud29ya3NwYWNlU3RhdGUud29ya3NwYWNlJC52YWx1ZSAmJlxuICAgICAgKHRoaXMud29ya3NwYWNlU3RhdGUud29ya3NwYWNlJC52YWx1ZSBhcyBhbnkpLmxheWVyLmlkID09PSB0aGlzLmxheWVyLmlkICYmXG4gICAgICB0aGlzLndvcmtzcGFjZVN0YXRlLndvcmtzcGFjZVBhbmVsRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMud29ya3NwYWNlU3RhdGUud29ya3NwYWNlUGFuZWxFeHBhbmRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndvcmtzcGFjZVN0YXRlLndvcmtzcGFjZVBhbmVsRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgdGhpcy53b3Jrc3BhY2VTdGF0ZS5zZXRBY3RpdmVXb3Jrc3BhY2VCeUlkKHRoaXMubGF5ZXIuaWQpO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvblxuICAqbmdJZj1cImhhc1dvcmtzcGFjZSQgfCBhc3luY1wiXG4gIG1hdC1pY29uLWJ1dHRvblxuICB0b29sdGlwLXBvc2l0aW9uPVwiYmVsb3dcIlxuICBtYXRUb29sdGlwU2hvd0RlbGF5PVwiNTAwXCJcbiAgW21hdFRvb2x0aXBdPVwiJ2lnby5pbnRlZ3JhdGlvbi53b3Jrc3BhY2UudG9nZ2xlV29ya3NwYWNlJyB8IHRyYW5zbGF0ZVwiXG4gIFtjb2xvcl09XCJjb2xvclwiXG4gIChjbGljayk9XCJhY3RpdmF0ZVdvcmtzcGFjZSgpXCJcbiAgPlxuICA8bWF0LWljb24gc3ZnSWNvbj1cInRhYmxlXCI+PC9tYXQtaWNvbj5cbjwvYnV0dG9uPlxuIl19