import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoAuthModule } from '@igo2/auth';
import { IgoLanguageModule } from '@igo2/core';
import { IgoListModule, IgoKeyValueModule, IgoCollapsibleModule, IgoStopPropagationModule, IgoActionbarModule } from '@igo2/common';
import { MapContextDirective } from './shared/map-context.directive';
import { LayerContextDirective } from './shared/layer-context.directive';
import { ContextListComponent } from './context-list/context-list.component';
import { ContextListBindingDirective } from './context-list/context-list-binding.directive';
import { ContextItemComponent } from './context-item/context-item.component';
import { ContextFormComponent } from './context-form/context-form.component';
import { ContextEditComponent } from './context-edit/context-edit.component';
import { ContextEditBindingDirective } from './context-edit/context-edit-binding.directive';
import { ContextPermissionsComponent } from './context-permissions/context-permissions.component';
import { ContextPermissionsBindingDirective } from './context-permissions/context-permissions-binding.directive';
import { IgoContextMapButtonModule } from '../context-map-button/context-map-button.module';
import { IgoContextImportExportModule } from '../context-import-export/context-import-export.module';
import * as i0 from "@angular/core";
const CONTEXT_DIRECTIVES = [
    MapContextDirective,
    LayerContextDirective
];
export class IgoContextManagerModule {
    static forRoot() {
        return {
            ngModule: IgoContextManagerModule
        };
    }
}
IgoContextManagerModule.ɵfac = function IgoContextManagerModule_Factory(t) { return new (t || IgoContextManagerModule)(); };
IgoContextManagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoContextManagerModule });
IgoContextManagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            MatListModule,
            MatCheckboxModule,
            MatRadioModule,
            MatDialogModule,
            MatMenuModule,
            MatOptionModule,
            MatAutocompleteModule,
            IgoAuthModule,
            IgoListModule,
            IgoKeyValueModule,
            IgoCollapsibleModule,
            IgoStopPropagationModule,
            IgoLanguageModule,
            IgoContextImportExportModule,
            IgoContextMapButtonModule,
            IgoActionbarModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoContextManagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTooltipModule,
                    MatListModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatDialogModule,
                    MatMenuModule,
                    MatOptionModule,
                    MatAutocompleteModule,
                    IgoAuthModule,
                    IgoListModule,
                    IgoKeyValueModule,
                    IgoCollapsibleModule,
                    IgoStopPropagationModule,
                    IgoLanguageModule,
                    IgoContextImportExportModule,
                    IgoContextMapButtonModule,
                    IgoActionbarModule
                ],
                exports: [
                    ContextListComponent,
                    ContextListBindingDirective,
                    ContextItemComponent,
                    ContextFormComponent,
                    ContextEditComponent,
                    ContextEditBindingDirective,
                    ContextPermissionsComponent,
                    ContextPermissionsBindingDirective,
                    ...CONTEXT_DIRECTIVES
                ],
                declarations: [
                    ContextListComponent,
                    ContextListBindingDirective,
                    ContextItemComponent,
                    ContextFormComponent,
                    ContextEditComponent,
                    ContextEditBindingDirective,
                    ContextPermissionsComponent,
                    ContextPermissionsBindingDirective,
                    ...CONTEXT_DIRECTIVES
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoContextManagerModule, { declarations: [ContextListComponent,
        ContextListBindingDirective,
        ContextItemComponent,
        ContextFormComponent,
        ContextEditComponent,
        ContextEditBindingDirective,
        ContextPermissionsComponent,
        ContextPermissionsBindingDirective, MapContextDirective,
        LayerContextDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatMenuModule,
        MatOptionModule,
        MatAutocompleteModule,
        IgoAuthModule,
        IgoListModule,
        IgoKeyValueModule,
        IgoCollapsibleModule,
        IgoStopPropagationModule,
        IgoLanguageModule,
        IgoContextImportExportModule,
        IgoContextMapButtonModule,
        IgoActionbarModule], exports: [ContextListComponent,
        ContextListBindingDirective,
        ContextItemComponent,
        ContextFormComponent,
        ContextEditComponent,
        ContextEditBindingDirective,
        ContextPermissionsComponent,
        ContextPermissionsBindingDirective, MapContextDirective,
        LayerContextDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tYW5hZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLEVB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Rjs7d0ZBQ1ksdUJBQXVCLG1CQVpoQyxvQkFBb0I7UUFDcEIsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0Isa0NBQWtDLEVBbkRwQyxtQkFBbUI7UUFDbkIscUJBQXFCLGFBS25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGFBQWE7UUFDYixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsaUJBQWlCO1FBQ2pCLDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsa0JBQWtCLGFBR2xCLG9CQUFvQjtRQUNwQiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQixrQ0FBa0MsRUF2Q3BDLG1CQUFtQjtRQUNuQixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdE9wdGlvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuaW1wb3J0IHsgSWdvQXV0aE1vZHVsZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7XG4gIElnb0xpc3RNb2R1bGUsXG4gIElnb0tleVZhbHVlTW9kdWxlLFxuICBJZ29Db2xsYXBzaWJsZU1vZHVsZSxcbiAgSWdvU3RvcFByb3BhZ2F0aW9uTW9kdWxlLFxuICBJZ29BY3Rpb25iYXJNb2R1bGVcbn0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgTWFwQ29udGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vc2hhcmVkL21hcC1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMYXllckNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3NoYXJlZC9sYXllci1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb250ZXh0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dC1saXN0L2NvbnRleHQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dExpc3RCaW5kaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0LWxpc3QvY29udGV4dC1saXN0LWJpbmRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRleHRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LWl0ZW0vY29udGV4dC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dC1mb3JtL2NvbnRleHQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtZWRpdC9jb250ZXh0LWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRleHRFZGl0QmluZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vY29udGV4dC1lZGl0L2NvbnRleHQtZWRpdC1iaW5kaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb250ZXh0UGVybWlzc2lvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtcGVybWlzc2lvbnMvY29udGV4dC1wZXJtaXNzaW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dFBlcm1pc3Npb25zQmluZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vY29udGV4dC1wZXJtaXNzaW9ucy9jb250ZXh0LXBlcm1pc3Npb25zLWJpbmRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IElnb0NvbnRleHRNYXBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9jb250ZXh0LW1hcC1idXR0b24vY29udGV4dC1tYXAtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBJZ29Db250ZXh0SW1wb3J0RXhwb3J0TW9kdWxlIH0gZnJvbSAnLi4vY29udGV4dC1pbXBvcnQtZXhwb3J0L2NvbnRleHQtaW1wb3J0LWV4cG9ydC5tb2R1bGUnO1xuXG5jb25zdCBDT05URVhUX0RJUkVDVElWRVMgPSBbXG4gIE1hcENvbnRleHREaXJlY3RpdmUsXG4gIExheWVyQ29udGV4dERpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBJZ29BdXRoTW9kdWxlLFxuICAgIElnb0xpc3RNb2R1bGUsXG4gICAgSWdvS2V5VmFsdWVNb2R1bGUsXG4gICAgSWdvQ29sbGFwc2libGVNb2R1bGUsXG4gICAgSWdvU3RvcFByb3BhZ2F0aW9uTW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIElnb0NvbnRleHRJbXBvcnRFeHBvcnRNb2R1bGUsXG4gICAgSWdvQ29udGV4dE1hcEJ1dHRvbk1vZHVsZSxcbiAgICBJZ29BY3Rpb25iYXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbnRleHRMaXN0Q29tcG9uZW50LFxuICAgIENvbnRleHRMaXN0QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBDb250ZXh0SXRlbUNvbXBvbmVudCxcbiAgICBDb250ZXh0Rm9ybUNvbXBvbmVudCxcbiAgICBDb250ZXh0RWRpdENvbXBvbmVudCxcbiAgICBDb250ZXh0RWRpdEJpbmRpbmdEaXJlY3RpdmUsXG4gICAgQ29udGV4dFBlcm1pc3Npb25zQ29tcG9uZW50LFxuICAgIENvbnRleHRQZXJtaXNzaW9uc0JpbmRpbmdEaXJlY3RpdmUsXG5cbiAgICAuLi5DT05URVhUX0RJUkVDVElWRVNcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29udGV4dExpc3RDb21wb25lbnQsXG4gICAgQ29udGV4dExpc3RCaW5kaW5nRGlyZWN0aXZlLFxuICAgIENvbnRleHRJdGVtQ29tcG9uZW50LFxuICAgIENvbnRleHRGb3JtQ29tcG9uZW50LFxuICAgIENvbnRleHRFZGl0Q29tcG9uZW50LFxuICAgIENvbnRleHRFZGl0QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBDb250ZXh0UGVybWlzc2lvbnNDb21wb25lbnQsXG4gICAgQ29udGV4dFBlcm1pc3Npb25zQmluZGluZ0RpcmVjdGl2ZSxcblxuICAgIC4uLkNPTlRFWFRfRElSRUNUSVZFU1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0NvbnRleHRNYW5hZ2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29Db250ZXh0TWFuYWdlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWdvQ29udGV4dE1hbmFnZXJNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=