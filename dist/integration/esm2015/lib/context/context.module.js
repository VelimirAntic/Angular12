import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgoContextModule } from '@igo2/context';
import { ContextEditorToolComponent } from './context-editor-tool/context-editor-tool.component';
import { ContextManagerToolComponent } from './context-manager-tool/context-manager-tool.component';
import { ContextPermissionManagerToolComponent } from './context-permission-manager-tool/context-permission-manager-tool.component';
import { ContextShareToolComponent } from './context-share-tool/context-share-tool.component';
import * as i0 from "@angular/core";
export class IgoAppContextModule {
}
IgoAppContextModule.ɵfac = function IgoAppContextModule_Factory(t) { return new (t || IgoAppContextModule)(); };
IgoAppContextModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoAppContextModule });
IgoAppContextModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[IgoContextModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoAppContextModule, [{
        type: NgModule,
        args: [{
                imports: [IgoContextModule],
                declarations: [
                    ContextEditorToolComponent,
                    ContextManagerToolComponent,
                    ContextPermissionManagerToolComponent,
                    ContextShareToolComponent
                ],
                exports: [
                    ContextEditorToolComponent,
                    ContextManagerToolComponent,
                    ContextPermissionManagerToolComponent,
                    ContextShareToolComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoAppContextModule, { declarations: [ContextEditorToolComponent,
        ContextManagerToolComponent,
        ContextPermissionManagerToolComponent,
        ContextShareToolComponent], imports: [IgoContextModule], exports: [ContextEditorToolComponent,
        ContextManagerToolComponent,
        ContextPermissionManagerToolComponent,
        ContextShareToolComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2NvbnRleHQvY29udGV4dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDcEksT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBa0I5RixNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3FFQUFuQixtQkFBbUI7eUVBZnJCLENBQUMsZ0JBQWdCLENBQUM7dUZBZWhCLG1CQUFtQjtjQWhCL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixZQUFZLEVBQUU7b0JBQ1osMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLHFDQUFxQztvQkFDckMseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLHFDQUFxQztvQkFDckMseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7d0ZBQ1ksbUJBQW1CLG1CQWI1QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLHFDQUFxQztRQUNyQyx5QkFBeUIsYUFMakIsZ0JBQWdCLGFBUXhCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IscUNBQXFDO1FBQ3JDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElnb0NvbnRleHRNb2R1bGUgfSBmcm9tICdAaWdvMi9jb250ZXh0JztcblxuaW1wb3J0IHsgQ29udGV4dEVkaXRvclRvb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtZWRpdG9yLXRvb2wvY29udGV4dC1lZGl0b3ItdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dE1hbmFnZXJUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LW1hbmFnZXItdG9vbC9jb250ZXh0LW1hbmFnZXItdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dFBlcm1pc3Npb25NYW5hZ2VyVG9vbENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dC1wZXJtaXNzaW9uLW1hbmFnZXItdG9vbC9jb250ZXh0LXBlcm1pc3Npb24tbWFuYWdlci10b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0U2hhcmVUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LXNoYXJlLXRvb2wvY29udGV4dC1zaGFyZS10b29sLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtJZ29Db250ZXh0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29udGV4dEVkaXRvclRvb2xDb21wb25lbnQsXG4gICAgQ29udGV4dE1hbmFnZXJUb29sQ29tcG9uZW50LFxuICAgIENvbnRleHRQZXJtaXNzaW9uTWFuYWdlclRvb2xDb21wb25lbnQsXG4gICAgQ29udGV4dFNoYXJlVG9vbENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29udGV4dEVkaXRvclRvb2xDb21wb25lbnQsXG4gICAgQ29udGV4dE1hbmFnZXJUb29sQ29tcG9uZW50LFxuICAgIENvbnRleHRQZXJtaXNzaW9uTWFuYWdlclRvb2xDb21wb25lbnQsXG4gICAgQ29udGV4dFNoYXJlVG9vbENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvQXBwQ29udGV4dE1vZHVsZSB7fVxuIl19