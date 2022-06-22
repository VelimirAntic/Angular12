import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoListModule } from '@igo2/common';
import { CatalogLibaryComponent, } from './catalog-library.component';
import { CatalogLibaryItemComponent } from './catalog-library-item.component';
import { AddCatalogDialogComponent } from './add-catalog-dialog.component';
import { MatBadgeModule } from '@angular/material/badge';
import { IgoLanguageModule } from '@igo2/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/common";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/icon";
import * as i6 from "@ngx-translate/core";
/**
 * @ignore
 */
export class IgoCatalogLibraryModule {
}
IgoCatalogLibraryModule.ɵfac = function IgoCatalogLibraryModule_Factory(t) { return new (t || IgoCatalogLibraryModule)(); };
IgoCatalogLibraryModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoCatalogLibraryModule });
IgoCatalogLibraryModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatIconModule,
            MatBadgeModule,
            MatListModule,
            MatTooltipModule,
            IgoListModule,
            IgoLanguageModule,
            MatButtonModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatAutocompleteModule,
            MatDialogModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoCatalogLibraryModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatBadgeModule,
                    MatListModule,
                    MatTooltipModule,
                    IgoListModule,
                    IgoLanguageModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatSelectModule,
                    MatAutocompleteModule,
                    MatDialogModule
                ],
                exports: [
                    CatalogLibaryComponent,
                    AddCatalogDialogComponent
                ],
                declarations: [
                    CatalogLibaryComponent,
                    CatalogLibaryItemComponent,
                    AddCatalogDialogComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoCatalogLibraryModule, { declarations: [CatalogLibaryComponent,
        CatalogLibaryItemComponent,
        AddCatalogDialogComponent], imports: [CommonModule,
        MatIconModule,
        MatBadgeModule,
        MatListModule,
        MatTooltipModule,
        IgoListModule,
        IgoLanguageModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDialogModule], exports: [CatalogLibaryComponent,
        AddCatalogDialogComponent] }); })();
i0.ɵɵsetComponentScope(CatalogLibaryComponent, [i1.ListComponent, i2.NgForOf, CatalogLibaryItemComponent, i1.ListItemDirective, i2.NgIf, i3.MatButton, i4.MatTooltip, i5.MatIcon], [i2.AsyncPipe, i6.TranslatePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2NhdGFsb2cvY2F0YWxvZy1saWJyYXJ5L2NhdGFsb2ctbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDLE9BQU8sRUFBRSxzQkFBc0IsR0FBRyxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztBQUUzRDs7R0FFRztBQTRCSCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCO3lFQUF2Qix1QkFBdUI7NkVBMUJ6QjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsY0FBYztZQUNkLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixlQUFlO1NBQ2hCO3VGQVdVLHVCQUF1QjtjQTNCbkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUMxQix5QkFBeUI7aUJBQzFCO2FBQ0Y7O3dGQUNZLHVCQUF1QixtQkFMaEMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQix5QkFBeUIsYUF0QnpCLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixlQUFlLGFBR2Ysc0JBQXNCO1FBQ3RCLHlCQUF5Qjt1QkFHekIsc0JBQXNCLGlDQUN0QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBJZ29MaXN0TW9kdWxlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2F0YWxvZ0xpYmFyeUNvbXBvbmVudCwgfSBmcm9tICcuL2NhdGFsb2ctbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0YWxvZ0xpYmFyeUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhdGFsb2ctbGlicmFyeS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRDYXRhbG9nRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hZGQtY2F0YWxvZy1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWF0QmFkZ2VNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9iYWRnZSc7XG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBJZ29MaXN0TW9kdWxlLFxuICAgIElnb0xhbmd1YWdlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2F0YWxvZ0xpYmFyeUNvbXBvbmVudCxcbiAgICBBZGRDYXRhbG9nRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhdGFsb2dMaWJhcnlDb21wb25lbnQsXG4gICAgQ2F0YWxvZ0xpYmFyeUl0ZW1Db21wb25lbnQsXG4gICAgQWRkQ2F0YWxvZ0RpYWxvZ0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElnb0NhdGFsb2dMaWJyYXJ5TW9kdWxlIHt9XG4iXX0=