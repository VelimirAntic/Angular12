import { NgModule } from '@angular/core';
import { IgoDrawingToolModule } from '@igo2/geo';
import { DrawingToolComponent } from './drawing-tool/drawing-tool.component';
import * as i0 from "@angular/core";
export class IgoAppDrawModule {
}
IgoAppDrawModule.ɵfac = function IgoAppDrawModule_Factory(t) { return new (t || IgoAppDrawModule)(); };
IgoAppDrawModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppDrawModule });
IgoAppDrawModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoDrawingToolModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppDrawModule, [{
        type: NgModule,
        args: [{
                imports: [IgoDrawingToolModule],
                declarations: [DrawingToolComponent],
                exports: [
                    DrawingToolComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppDrawModule, { declarations: [DrawingToolComponent], imports: [IgoDrawingToolModule], exports: [DrawingToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2RyYXcvZHJhdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBUzdFLE1BQU0sT0FBTyxnQkFBZ0I7O2dGQUFoQixnQkFBZ0I7a0VBQWhCLGdCQUFnQjtzRUFObEIsQ0FBQyxvQkFBb0IsQ0FBQzt1RkFNcEIsZ0JBQWdCO2NBUDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7aUJBQ3JCO2FBQ0Y7O3dGQUNZLGdCQUFnQixtQkFMWixvQkFBb0IsYUFEekIsb0JBQW9CLGFBRzVCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb0RyYXdpbmdUb29sTW9kdWxlIH0gZnJvbSAnQGlnbzIvZ2VvJztcbmltcG9ydCB7IERyYXdpbmdUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3aW5nLXRvb2wvZHJhd2luZy10b29sLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtJZ29EcmF3aW5nVG9vbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0RyYXdpbmdUb29sQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIERyYXdpbmdUb29sQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQXBwRHJhd01vZHVsZSB7fVxuIl19