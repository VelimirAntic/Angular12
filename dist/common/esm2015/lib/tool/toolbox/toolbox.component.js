import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionStore } from '../../action';
import { ToolboxColor } from '../shared/toolbox.enums';
import { toolSlideInOut } from './toolbox.animation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../action/actionbar/actionbar.component";
import * as i3 from "../../dynamic-component/dynamic-outlet/dynamic-outlet.component";
function ToolboxComponent_igo_actionbar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "igo-actionbar", 2);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("store", ctx_r0.actionStore)("withIcon", true)("withTitle", i0.ɵɵpipeBind1(1, 6, ctx_r0.toolbarWithTitle$))("withTooltip", i0.ɵɵpipeBind1(2, 8, ctx_r0.toolbarWithTitle$) === false)("scrollActive", i0.ɵɵpipeBind1(3, 10, ctx_r0.toolbarWithTitle$))("horizontal", false);
} }
const _c0 = function (a0, a1) { return { "igo-tool-container-with-toolbar": a0, "igo-tool-container-with-animation": a1 }; };
function ToolboxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("@toolSlideInOut.start", function ToolboxComponent_div_2_Template_div_animation_toolSlideInOut_start_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onAnimationStart(); })("@toolSlideInOut.done", function ToolboxComponent_div_2_Template_div_animation_toolSlideInOut_done_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onAnimationComplete(); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelement(2, "igo-dynamic-outlet", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tool_r2 = ctx.ngIf;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0, !ctx_r1.actionStore.empty, ctx_r1.animate))("@toolSlideInOut", i0.ɵɵpipeBind1(1, 4, ctx_r1.animation$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("component", tool_r2.component)("inputs", ctx_r1.getToolInputs(tool_r2));
} }
export class ToolboxComponent {
    constructor() {
        /**
         * Observable of the active tool
         */
        this.activeTool$ = new BehaviorSubject(undefined);
        /**
         * Store of actions that toggle tools
         */
        this.actionStore = new ActionStore([]);
        /**
         * Observable of he anmation state
         */
        this.animation$ = new BehaviorSubject('none');
        /**
         * Observable of the toolbar
         */
        this.toolbar$ = new BehaviorSubject([]);
        /**
         * Whether the Toolbar should display actions' titles
         */
        this.toolbarWithTitle$ = this.activeTool$.pipe(map((tool) => tool === undefined));
        /**
         * Observable of the ongoing animation. This is useful when
         * multiple animations are triggered at once i.e. when the user clicks
         * too fast on different actions
         */
        this.animating$ = new BehaviorSubject(false);
        /**
         * Whether the toolbox should animate the first tool entering
         */
        this.animate = false;
        /**
         * Color of Toolbox
         */
        this.color = ToolboxColor.White;
    }
    /**
     * @ignore
     */
    get classColorGrey() {
        return this.color === ToolboxColor.Grey;
    }
    /**
     * @ignore
     */
    get classColorPrimary() {
        return this.color === ToolboxColor.Primary;
    }
    /**
     * Initialize the toolbar and subscribe to the active tool
     * @internal
     */
    ngOnInit() {
        this.toolbar$$ = this.toolbox.toolbar$.subscribe((toolbar) => this.onToolbarChange(toolbar));
        this.activeTool$$ = this.toolbox.activeTool$.subscribe((tool) => this.onActiveToolChange(tool));
    }
    /**
     * Unsubscribe to the active tool and destroy the action store
     * @internal
     */
    ngOnDestroy() {
        this.toolbar$$.unsubscribe();
        this.activeTool$$.unsubscribe();
        this.actionStore.destroy();
    }
    /**
     * Track the starting animation
     * @internal
     */
    onAnimationStart() {
        this.animating$.next(true);
    }
    /**
     * Untrack the completed animation
     * @internal
     */
    onAnimationComplete() {
        this.animating$.next(false);
    }
    /**
     * Return a tool's inputs
     * @param tool Tool
     * @returns Tool inputs
     * @internal
     */
    getToolInputs(tool) {
        return tool.options || {};
    }
    /**
     * Initialize an action store
     * @param toolbar Toolbar
     */
    onToolbarChange(toolbar) {
        this.setToolbar(toolbar);
    }
    /**
     * Activate a tool and trigger an animation or not
     * @param tool Tool to activate
     */
    onActiveToolChange(tool) {
        if (!this.animate) {
            this.setActiveTool(tool);
            return;
        }
        this.onAnimate(() => this.setActiveTool(tool));
    }
    /**
     * Set the active tool
     * @param tool Tool to activate
     */
    setActiveTool(tool) {
        if (tool === undefined) {
            this.actionStore.state.updateAll({ active: false });
        }
        else {
            const action = this.actionStore.get(tool.name);
            if (action !== undefined) {
                this.actionStore.state.update(action, { active: true }, true);
            }
        }
        this.activeTool$.next(tool);
        if (this.animate) {
            this.animation$.next('enter');
        }
    }
    /**
     * Initialize the toolbar
     */
    setToolbar(toolbar) {
        const actions = toolbar.reduce((acc, toolName) => {
            const tool = this.toolbox.getTool(toolName);
            if (tool === undefined) {
                return acc;
            }
            acc.push({
                id: tool.name,
                title: tool.title,
                icon: tool.icon,
                // iconImage: tool.iconImage,
                tooltip: tool.tooltip,
                args: [tool, this.toolbox],
                handler: (_tool, _toolbox) => {
                    _toolbox.activateTool(_tool.name);
                },
                ngClass: (_tool, _toolbox) => {
                    return this.toolbox.activeTool$.pipe(map((activeTool) => {
                        let toolActivated = false;
                        if (activeTool !== undefined && _tool.name === activeTool.name) {
                            toolActivated = true;
                        }
                        let childrenToolActivated = false;
                        if (activeTool !== undefined &&
                            _tool.name === activeTool.parent) {
                            childrenToolActivated = true;
                        }
                        return {
                            'tool-activated': toolActivated,
                            'children-tool-activated': childrenToolActivated
                        };
                    }));
                }
            });
            return acc;
        }, []);
        this.actionStore.load(actions);
        this.toolbar$.next(toolbar);
    }
    /**
     * Observe the ongoing animation and ignore any incoming animation
     * while one is still ongoing.
     * @param callback Callback to execute when the animation completes
     */
    onAnimate(callback) {
        this.unAnimate();
        this.animating$$ = this.animating$.subscribe((animation) => {
            if (!animation) {
                callback.call(this);
                this.unAnimate();
            }
        });
    }
    /**
     * Stop observing an animation when it's complete
     */
    unAnimate() {
        if (this.animating$$) {
            this.animating$$.unsubscribe();
        }
    }
}
ToolboxComponent.ɵfac = function ToolboxComponent_Factory(t) { return new (t || ToolboxComponent)(); };
ToolboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolboxComponent, selectors: [["igo-toolbox"]], hostVars: 4, hostBindings: function ToolboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("color-grey", ctx.classColorGrey)("color-primary", ctx.classColorPrimary);
    } }, inputs: { toolbox: "toolbox", animate: "animate", color: "color" }, decls: 4, vars: 6, consts: [[3, "store", "withIcon", "withTitle", "withTooltip", "scrollActive", "horizontal", 4, "ngIf"], ["class", "igo-tool-container", 3, "ngClass", 4, "ngIf"], [3, "store", "withIcon", "withTitle", "withTooltip", "scrollActive", "horizontal"], [1, "igo-tool-container", 3, "ngClass"], [3, "component", "inputs"]], template: function ToolboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ToolboxComponent_igo_actionbar_0_Template, 4, 12, "igo-actionbar", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ToolboxComponent_div_2_Template, 3, 9, "div", 1);
        i0.ɵɵpipe(3, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx.toolbar$).length > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 4, ctx.activeTool$));
    } }, directives: [i1.NgIf, i2.ActionbarComponent, i1.NgClass, i3.DynamicOutletComponent], pipes: [i1.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden;width:100%;height:100%}.igo-tool-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.igo-tool-container-with-animation[_ngcontent-%COMP%]{transform:translate(100%)}.igo-tool-container-with-toolbar[_ngcontent-%COMP%]{left:50px}igo-actionbar[_ngcontent-%COMP%]{height:100%}igo-actionbar.with-title[_ngcontent-%COMP%]{width:100%;overflow:auto}igo-actionbar[_ngcontent-%COMP%]:not(.with-title){width:48px;overflow:hidden;-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){igo-actionbar[_ngcontent-%COMP%]:not(.with-title){overflow:auto}}igo-dynamic-outlet[_ngcontent-%COMP%]{overflow:auto}"], data: { animation: [toolSlideInOut()] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolboxComponent, [{
        type: Component,
        args: [{
                selector: 'igo-toolbox',
                templateUrl: 'toolbox.component.html',
                styleUrls: ['toolbox.component.scss'],
                animations: [toolSlideInOut()],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { toolbox: [{
            type: Input
        }], animate: [{
            type: Input
        }], color: [{
            type: Input
        }], classColorGrey: [{
            type: HostBinding,
            args: ['class.color-grey']
        }], classColorPrimary: [{
            type: HostBinding,
            args: ['class.color-primary']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi90b29sL3Rvb2xib3gvdG9vbGJveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi90b29sL3Rvb2xib3gvdG9vbGJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQVUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztJQ2hCckQsbUNBUWdCOzs7Ozs7SUFOZCwwQ0FBcUIsa0JBQUEsNkRBQUEseUVBQUEsaUVBQUEscUJBQUE7Ozs7O0lBUXZCLDhCQU1pRDtJQUQvQyxnT0FBNEMsb05BQUE7O0lBRzVDLHdDQUdxQjtJQUV2QixpQkFBTTs7OztJQVZKLCtGQUFpSCw0REFBQTtJQU0vRyxlQUE0QjtJQUE1Qiw2Q0FBNEIseUNBQUE7O0FETWhDLE1BQU0sT0FBTyxnQkFBZ0I7SUFQN0I7UUFRRTs7V0FFRztRQUNILGdCQUFXLEdBQTBCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBFOztXQUVHO1FBQ0gsZ0JBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0M7O1dBRUc7UUFDSCxlQUFVLEdBQTRCLElBQUksZUFB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Q0FBQztJQUVEOztPQUVHO0lBQ0ssU0FBUztRQUNmLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Z0ZBbFBVLGdCQUFnQjttRUFBaEIsZ0JBQWdCOzs7UUN6QjdCLHNGQVFnQjs7UUFFaEIsaUVBYU07OztRQXRCSCxvRUFBbUM7UUFVbkMsZUFBMEI7UUFBMUIsNERBQTBCOzI4QkRXZixDQUFDLGNBQWMsRUFBRSxDQUFDO3VGQUduQixnQkFBZ0I7Y0FQNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsVUFBVSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQXNEVSxPQUFPO2tCQUFmLEtBQUs7WUFLRyxPQUFPO2tCQUFmLEtBQUs7WUFLRyxLQUFLO2tCQUFiLEtBQUs7WUFNRixjQUFjO2tCQURqQixXQUFXO21CQUFDLGtCQUFrQjtZQVMzQixpQkFBaUI7a0JBRHBCLFdBQVc7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25TdG9yZSB9IGZyb20gJy4uLy4uL2FjdGlvbic7XG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi4vc2hhcmVkL3Rvb2wuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRvb2xib3hDb2xvciB9IGZyb20gJy4uL3NoYXJlZC90b29sYm94LmVudW1zJztcbmltcG9ydCB7IFRvb2xib3ggfSBmcm9tICcuLi9zaGFyZWQvdG9vbGJveCc7XG5pbXBvcnQgeyB0b29sU2xpZGVJbk91dCB9IGZyb20gJy4vdG9vbGJveC5hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpZ28tdG9vbGJveCcsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0b29sU2xpZGVJbk91dCgpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIGFjdGl2ZSB0b29sXG4gICAqL1xuICBhY3RpdmVUb29sJDogQmVoYXZpb3JTdWJqZWN0PFRvb2w+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBTdG9yZSBvZiBhY3Rpb25zIHRoYXQgdG9nZ2xlIHRvb2xzXG4gICAqL1xuICBhY3Rpb25TdG9yZTogQWN0aW9uU3RvcmUgPSBuZXcgQWN0aW9uU3RvcmUoW10pO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIGhlIGFubWF0aW9uIHN0YXRlXG4gICAqL1xuICBhbmltYXRpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ25vbmUnKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgdG9vbGJhclxuICAgKi9cbiAgdG9vbGJhciQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgVG9vbGJhciBzaG91bGQgZGlzcGxheSBhY3Rpb25zJyB0aXRsZXNcbiAgICovXG4gIHRvb2xiYXJXaXRoVGl0bGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5hY3RpdmVUb29sJC5waXBlKFxuICAgIG1hcCgodG9vbDogVG9vbCB8IHVuZGVmaW5lZCkgPT4gdG9vbCA9PT0gdW5kZWZpbmVkKVxuICApO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIGFjdGl2ZSB0b29sXG4gICAqL1xuICBwcml2YXRlIGFjdGl2ZVRvb2wkJDogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIHRvb2xiYXJcbiAgICovXG4gIHByaXZhdGUgdG9vbGJhciQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIG9uZ29pbmcgYW5pbWF0aW9uLiBUaGlzIGlzIHVzZWZ1bCB3aGVuXG4gICAqIG11bHRpcGxlIGFuaW1hdGlvbnMgYXJlIHRyaWdnZXJlZCBhdCBvbmNlIGkuZS4gd2hlbiB0aGUgdXNlciBjbGlja3NcbiAgICogdG9vIGZhc3Qgb24gZGlmZmVyZW50IGFjdGlvbnNcbiAgICovXG4gIHByaXZhdGUgYW5pbWF0aW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIG9uZ29pbmcgYW5pbWF0aW9uXG4gICAqL1xuICBwcml2YXRlIGFuaW1hdGluZyQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFRvb2xib3hcbiAgICovXG4gIEBJbnB1dCgpIHRvb2xib3g6IFRvb2xib3g7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHRvb2xib3ggc2hvdWxkIGFuaW1hdGUgdGhlIGZpcnN0IHRvb2wgZW50ZXJpbmdcbiAgICovXG4gIEBJbnB1dCgpIGFuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29sb3Igb2YgVG9vbGJveFxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6IFRvb2xib3hDb2xvciA9IFRvb2xib3hDb2xvci5XaGl0ZTtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xvci1ncmV5JylcbiAgZ2V0IGNsYXNzQ29sb3JHcmV5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbG9yID09PSBUb29sYm94Q29sb3IuR3JleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbG9yLXByaW1hcnknKVxuICBnZXQgY2xhc3NDb2xvclByaW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3IgPT09IFRvb2xib3hDb2xvci5QcmltYXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHRvb2xiYXIgYW5kIHN1YnNjcmliZSB0byB0aGUgYWN0aXZlIHRvb2xcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRvb2xiYXIkJCA9IHRoaXMudG9vbGJveC50b29sYmFyJC5zdWJzY3JpYmUoKHRvb2xiYXI6IHN0cmluZ1tdKSA9PlxuICAgICAgdGhpcy5vblRvb2xiYXJDaGFuZ2UodG9vbGJhcilcbiAgICApO1xuICAgIHRoaXMuYWN0aXZlVG9vbCQkID0gdGhpcy50b29sYm94LmFjdGl2ZVRvb2wkLnN1YnNjcmliZSgodG9vbDogVG9vbCkgPT5cbiAgICAgIHRoaXMub25BY3RpdmVUb29sQ2hhbmdlKHRvb2wpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0byB0aGUgYWN0aXZlIHRvb2wgYW5kIGRlc3Ryb3kgdGhlIGFjdGlvbiBzdG9yZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudG9vbGJhciQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hY3RpdmVUb29sJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmFjdGlvblN0b3JlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayB0aGUgc3RhcnRpbmcgYW5pbWF0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmFuaW1hdGluZyQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnRyYWNrIHRoZSBjb21wbGV0ZWQgYW5pbWF0aW9uXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25BbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGluZyQubmV4dChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgdG9vbCdzIGlucHV0c1xuICAgKiBAcGFyYW0gdG9vbCBUb29sXG4gICAqIEByZXR1cm5zIFRvb2wgaW5wdXRzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0VG9vbElucHV0cyh0b29sOiBUb29sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRvb2wub3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGFuIGFjdGlvbiBzdG9yZVxuICAgKiBAcGFyYW0gdG9vbGJhciBUb29sYmFyXG4gICAqL1xuICBwcml2YXRlIG9uVG9vbGJhckNoYW5nZSh0b29sYmFyOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0VG9vbGJhcih0b29sYmFyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBhIHRvb2wgYW5kIHRyaWdnZXIgYW4gYW5pbWF0aW9uIG9yIG5vdFxuICAgKiBAcGFyYW0gdG9vbCBUb29sIHRvIGFjdGl2YXRlXG4gICAqL1xuICBwcml2YXRlIG9uQWN0aXZlVG9vbENoYW5nZSh0b29sOiBUb29sKSB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGUpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlVG9vbCh0b29sKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vbkFuaW1hdGUoKCkgPT4gdGhpcy5zZXRBY3RpdmVUb29sKHRvb2wpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGFjdGl2ZSB0b29sXG4gICAqIEBwYXJhbSB0b29sIFRvb2wgdG8gYWN0aXZhdGVcbiAgICovXG4gIHByaXZhdGUgc2V0QWN0aXZlVG9vbCh0b29sOiBUb29sIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRvb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5hY3Rpb25TdG9yZS5zdGF0ZS51cGRhdGVBbGwoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvblN0b3JlLmdldCh0b29sLm5hbWUpO1xuICAgICAgaWYgKGFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uU3RvcmUuc3RhdGUudXBkYXRlKGFjdGlvbiwgeyBhY3RpdmU6IHRydWUgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVUb29sJC5uZXh0KHRvb2wpO1xuICAgIGlmICh0aGlzLmFuaW1hdGUpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uJC5uZXh0KCdlbnRlcicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSB0b29sYmFyXG4gICAqL1xuICBwcml2YXRlIHNldFRvb2xiYXIodG9vbGJhcjogc3RyaW5nW10pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gdG9vbGJhci5yZWR1Y2UoKGFjYzogQWN0aW9uW10sIHRvb2xOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHRvb2wgPSB0aGlzLnRvb2xib3guZ2V0VG9vbCh0b29sTmFtZSk7XG4gICAgICBpZiAodG9vbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgaWQ6IHRvb2wubmFtZSxcbiAgICAgICAgdGl0bGU6IHRvb2wudGl0bGUsXG4gICAgICAgIGljb246IHRvb2wuaWNvbixcbiAgICAgICAgLy8gaWNvbkltYWdlOiB0b29sLmljb25JbWFnZSxcbiAgICAgICAgdG9vbHRpcDogdG9vbC50b29sdGlwLFxuICAgICAgICBhcmdzOiBbdG9vbCwgdGhpcy50b29sYm94XSxcbiAgICAgICAgaGFuZGxlcjogKF90b29sOiBUb29sLCBfdG9vbGJveDogVG9vbGJveCkgPT4ge1xuICAgICAgICAgIF90b29sYm94LmFjdGl2YXRlVG9vbChfdG9vbC5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmdDbGFzczogKF90b29sOiBUb29sLCBfdG9vbGJveDogVG9vbGJveCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guYWN0aXZlVG9vbCQucGlwZShcbiAgICAgICAgICAgIG1hcCgoYWN0aXZlVG9vbDogVG9vbCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdG9vbEFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlVG9vbCAhPT0gdW5kZWZpbmVkICYmIF90b29sLm5hbWUgPT09IGFjdGl2ZVRvb2wubmFtZSkge1xuICAgICAgICAgICAgICAgIHRvb2xBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuVG9vbEFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYWN0aXZlVG9vbCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgX3Rvb2wubmFtZSA9PT0gYWN0aXZlVG9vbC5wYXJlbnRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5Ub29sQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3Rvb2wtYWN0aXZhdGVkJzogdG9vbEFjdGl2YXRlZCxcbiAgICAgICAgICAgICAgICAnY2hpbGRyZW4tdG9vbC1hY3RpdmF0ZWQnOiBjaGlsZHJlblRvb2xBY3RpdmF0ZWRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICB0aGlzLmFjdGlvblN0b3JlLmxvYWQoYWN0aW9ucyk7XG4gICAgdGhpcy50b29sYmFyJC5uZXh0KHRvb2xiYXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ic2VydmUgdGhlIG9uZ29pbmcgYW5pbWF0aW9uIGFuZCBpZ25vcmUgYW55IGluY29taW5nIGFuaW1hdGlvblxuICAgKiB3aGlsZSBvbmUgaXMgc3RpbGwgb25nb2luZy5cbiAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGV4ZWN1dGUgd2hlbiB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlc1xuICAgKi9cbiAgcHJpdmF0ZSBvbkFuaW1hdGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnVuQW5pbWF0ZSgpO1xuICAgIHRoaXMuYW5pbWF0aW5nJCQgPSB0aGlzLmFuaW1hdGluZyQuc3Vic2NyaWJlKChhbmltYXRpb246IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghYW5pbWF0aW9uKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMudW5BbmltYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBvYnNlcnZpbmcgYW4gYW5pbWF0aW9uIHdoZW4gaXQncyBjb21wbGV0ZVxuICAgKi9cbiAgcHJpdmF0ZSB1bkFuaW1hdGUoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nJCQpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW5nJCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxpZ28tYWN0aW9uYmFyXG4gICpuZ0lmPVwiKHRvb2xiYXIkIHwgYXN5bmMpLmxlbmd0aCA+IDBcIlxuICBbc3RvcmVdPVwiYWN0aW9uU3RvcmVcIlxuICBbd2l0aEljb25dPVwidHJ1ZVwiXG4gIFt3aXRoVGl0bGVdPVwidG9vbGJhcldpdGhUaXRsZSQgfCBhc3luY1wiXG4gIFt3aXRoVG9vbHRpcF09XCIodG9vbGJhcldpdGhUaXRsZSQgfCBhc3luYykgPT09IGZhbHNlXCJcbiAgW3Njcm9sbEFjdGl2ZV09XCJ0b29sYmFyV2l0aFRpdGxlJCB8IGFzeW5jXCJcbiAgW2hvcml6b250YWxdPVwiZmFsc2VcIj5cbjwvaWdvLWFjdGlvbmJhcj5cblxuPGRpdlxuICAqbmdJZj1cImFjdGl2ZVRvb2wkIHwgYXN5bmMgYXMgdG9vbFwiXG4gIGNsYXNzPVwiaWdvLXRvb2wtY29udGFpbmVyXCJcbiAgW25nQ2xhc3NdPVwieydpZ28tdG9vbC1jb250YWluZXItd2l0aC10b29sYmFyJzogIWFjdGlvblN0b3JlLmVtcHR5LCAnaWdvLXRvb2wtY29udGFpbmVyLXdpdGgtYW5pbWF0aW9uJzogYW5pbWF0ZX1cIlxuICBbQHRvb2xTbGlkZUluT3V0XT1cImFuaW1hdGlvbiQgfCBhc3luY1wiXG4gIChAdG9vbFNsaWRlSW5PdXQuc3RhcnQpPVwib25BbmltYXRpb25TdGFydCgpXCJcbiAgKEB0b29sU2xpZGVJbk91dC5kb25lKT1cIm9uQW5pbWF0aW9uQ29tcGxldGUoKVwiPlxuXG4gIDxpZ28tZHluYW1pYy1vdXRsZXRcbiAgICBbY29tcG9uZW50XT1cInRvb2wuY29tcG9uZW50XCJcbiAgICBbaW5wdXRzXT1cImdldFRvb2xJbnB1dHModG9vbClcIj5cbiAgPC9pZ28tZHluYW1pYy1vdXRsZXQ+XG5cbjwvZGl2PlxuIl19