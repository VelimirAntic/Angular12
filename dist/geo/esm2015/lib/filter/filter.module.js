import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { IgoLanguageModule } from '@igo2/core';
import { IgoCollapsibleModule, IgoListModule, IgoKeyValueModule, IgoEntityModule } from '@igo2/common';
import { IgoGeometryModule } from './../geometry/geometry.module';
import { FilterableDataSourcePipe } from './shared/filterable-datasource.pipe';
import { IgoLayerModule } from '../layer/layer.module';
import { TimeFilterButtonComponent } from './time-filter-button/time-filter-button.component';
import { TimeFilterFormComponent } from './time-filter-form/time-filter-form.component';
import { TimeFilterItemComponent } from './time-filter-item/time-filter-item.component';
import { TimeFilterListBindingDirective } from './time-filter-list/time-filter-list-binding.directive';
import { TimeFilterListComponent } from './time-filter-list/time-filter-list.component';
import { TimeFilterService } from './shared/time-filter.service';
import { OgcFilterFormComponent } from './ogc-filter-form/ogc-filter-form.component';
import { OgcFilterableFormComponent } from './ogc-filterable-form/ogc-filterable-form.component';
import { OgcFilterableItemComponent } from './ogc-filterable-item/ogc-filterable-item.component';
import { OgcFilterableListBindingDirective } from './ogc-filterable-list/ogc-filterable-list-binding.directive';
import { OgcFilterableListComponent } from './ogc-filterable-list/ogc-filterable-list.component';
import { OgcFilterButtonComponent } from './ogc-filter-button/ogc-filter-button.component';
import { OGCFilterService } from './shared/ogc-filter.service';
import { OGCFilterTimeService } from './shared/ogc-filter-time.service';
import { OgcFilterSelectionComponent } from './ogc-filter-selection/ogc-filter-selection.component';
import { SpatialFilterTypeComponent } from './spatial-filter/spatial-filter-type/spatial-filter-type.component';
import { SpatialFilterListComponent } from './spatial-filter/spatial-filter-list/spatial-filter-list.component';
import { SpatialFilterItemComponent } from './spatial-filter/spatial-filter-item/spatial-filter-item.component';
import { SpatialFilterService } from './shared/spatial-filter.service';
import { OgcFilterTimeComponent } from './ogc-filter-time/ogc-filter-time.component';
import { OgcFilterTimeSliderComponent } from './ogc-filter-time/ogc-filter-time-slider.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/badge";
import * as i6 from "@igo2/common";
import * as i7 from "@ngx-translate/core";
import * as i8 from "@angular/material/list";
import * as i9 from "@angular/material/core";
import * as i10 from "../layer/layer-legend/layer-legend.component";
import * as i11 from "@angular/material/checkbox";
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/material/select";
import * as i14 from "@angular/material/input";
import * as i15 from "@angular/material/autocomplete";
import * as i16 from "@angular/forms";
import * as i17 from "@angular/material/divider";
import * as i18 from "@angular/material/button-toggle";
import * as i19 from "@angular/material/radio";
import * as i20 from "@angular/material/tabs";
import * as i21 from "../geometry/geometry-form-field/geometry-form-field-input.component";
import * as i22 from "@angular/material/slide-toggle";
import * as i23 from "@angular/material/table";
import * as i24 from "@angular/material/tree";
import * as i25 from "@angular/material/datepicker";
export class IgoFilterModule {
    static forRoot() {
        return {
            ngModule: IgoFilterModule,
            providers: [
                {
                    provide: MAT_DATE_LOCALE,
                    useValue: 'fr-FR'
                }
            ]
        };
    }
}
IgoFilterModule.ɵfac = function IgoFilterModule_Factory(t) { return new (t || IgoFilterModule)(); };
IgoFilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoFilterModule });
IgoFilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TimeFilterService, OGCFilterService, OGCFilterTimeService, SpatialFilterService], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatAutocompleteModule,
            MatIconModule,
            MatButtonModule,
            MatTabsModule,
            MatRadioModule,
            MatMenuModule,
            MatTableModule,
            MatTreeModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatListModule,
            MatTooltipModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatDatetimepickerModule,
            MatNativeDatetimeModule,
            IgoLanguageModule,
            IgoLayerModule,
            IgoCollapsibleModule,
            IgoListModule,
            IgoEntityModule,
            IgoKeyValueModule,
            IgoGeometryModule,
            MatBadgeModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoFilterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatAutocompleteModule,
                    MatIconModule,
                    MatButtonModule,
                    MatTabsModule,
                    MatRadioModule,
                    MatMenuModule,
                    MatTableModule,
                    MatTreeModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatSliderModule,
                    MatSlideToggleModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatOptionModule,
                    MatSelectModule,
                    MatListModule,
                    MatTooltipModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatDatetimepickerModule,
                    MatNativeDatetimeModule,
                    IgoLanguageModule,
                    IgoLayerModule,
                    IgoCollapsibleModule,
                    IgoListModule,
                    IgoEntityModule,
                    IgoKeyValueModule,
                    IgoGeometryModule,
                    MatBadgeModule
                ],
                exports: [
                    FilterableDataSourcePipe,
                    TimeFilterButtonComponent,
                    TimeFilterFormComponent,
                    TimeFilterItemComponent,
                    TimeFilterListComponent,
                    TimeFilterListBindingDirective,
                    OgcFilterFormComponent,
                    OgcFilterButtonComponent,
                    OgcFilterSelectionComponent,
                    OgcFilterableFormComponent,
                    OgcFilterableItemComponent,
                    OgcFilterableListComponent,
                    OgcFilterableListBindingDirective,
                    SpatialFilterTypeComponent,
                    SpatialFilterListComponent,
                    SpatialFilterItemComponent,
                    OgcFilterTimeComponent,
                    OgcFilterTimeSliderComponent
                ],
                declarations: [
                    FilterableDataSourcePipe,
                    TimeFilterButtonComponent,
                    TimeFilterFormComponent,
                    TimeFilterItemComponent,
                    TimeFilterListComponent,
                    TimeFilterListBindingDirective,
                    OgcFilterFormComponent,
                    OgcFilterButtonComponent,
                    OgcFilterSelectionComponent,
                    OgcFilterableFormComponent,
                    OgcFilterableItemComponent,
                    OgcFilterableListComponent,
                    OgcFilterableListBindingDirective,
                    SpatialFilterTypeComponent,
                    SpatialFilterListComponent,
                    SpatialFilterItemComponent,
                    OgcFilterTimeComponent,
                    OgcFilterTimeSliderComponent
                ],
                providers: [TimeFilterService, OGCFilterService, OGCFilterTimeService, SpatialFilterService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoFilterModule, { declarations: [FilterableDataSourcePipe,
        TimeFilterButtonComponent,
        TimeFilterFormComponent,
        TimeFilterItemComponent,
        TimeFilterListComponent,
        TimeFilterListBindingDirective,
        OgcFilterFormComponent,
        OgcFilterButtonComponent,
        OgcFilterSelectionComponent,
        OgcFilterableFormComponent,
        OgcFilterableItemComponent,
        OgcFilterableListComponent,
        OgcFilterableListBindingDirective,
        SpatialFilterTypeComponent,
        SpatialFilterListComponent,
        SpatialFilterItemComponent,
        OgcFilterTimeComponent,
        OgcFilterTimeSliderComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatRadioModule,
        MatMenuModule,
        MatTableModule,
        MatTreeModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatListModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDatetimepickerModule,
        MatNativeDatetimeModule,
        IgoLanguageModule,
        IgoLayerModule,
        IgoCollapsibleModule,
        IgoListModule,
        IgoEntityModule,
        IgoKeyValueModule,
        IgoGeometryModule,
        MatBadgeModule], exports: [FilterableDataSourcePipe,
        TimeFilterButtonComponent,
        TimeFilterFormComponent,
        TimeFilterItemComponent,
        TimeFilterListComponent,
        TimeFilterListBindingDirective,
        OgcFilterFormComponent,
        OgcFilterButtonComponent,
        OgcFilterSelectionComponent,
        OgcFilterableFormComponent,
        OgcFilterableItemComponent,
        OgcFilterableListComponent,
        OgcFilterableListBindingDirective,
        SpatialFilterTypeComponent,
        SpatialFilterListComponent,
        SpatialFilterItemComponent,
        OgcFilterTimeComponent,
        OgcFilterTimeSliderComponent] }); })();
i0.ɵɵsetComponentScope(TimeFilterButtonComponent, [i1.NgIf, i2.MatButton, i3.MatTooltip, i4.MatIcon, i5.MatBadge, TimeFilterItemComponent, i6.ListItemDirective], [i7.TranslatePipe]);
i0.ɵɵsetComponentScope(TimeFilterItemComponent, [i1.NgIf, i8.MatListItem, i4.MatIcon, i8.MatListAvatarCssMatStyler, i6.CollapseDirective, i9.MatLine, i1.NgStyle, i2.MatButton, i3.MatTooltip, i1.NgClass, i10.LayerLegendComponent, TimeFilterFormComponent], [i7.TranslatePipe, i1.AsyncPipe]);
i0.ɵɵsetComponentScope(TimeFilterListComponent, [i6.ListComponent, i1.NgForOf, TimeFilterItemComponent, i6.ListItemDirective], [FilterableDataSourcePipe]);
i0.ɵɵsetComponentScope(OgcFilterFormComponent, [i11.MatCheckbox, i3.MatTooltip, i12.MatFormField, i1.NgClass, i13.MatSelect, i9.MatOption, i1.NgIf, i14.MatInput, i15.MatAutocompleteTrigger, i15.MatAutocomplete, i1.NgForOf, i2.MatButton, i12.MatSuffix, i4.MatIcon, OgcFilterTimeComponent], [i7.TranslatePipe, i1.AsyncPipe, i6.KeyValuePipe]);
i0.ɵɵsetComponentScope(OgcFilterButtonComponent, [i1.NgIf, i2.MatButton, i3.MatTooltip, i4.MatIcon, i5.MatBadge, OgcFilterableItemComponent, i6.ListItemDirective], [i7.TranslatePipe]);
i0.ɵɵsetComponentScope(OgcFilterSelectionComponent, [i16.ɵNgNoValidate, i16.NgControlStatusGroup, i16.FormGroupDirective, i1.NgForOf, i1.NgIf, i17.MatDivider, i12.MatFormField, i13.MatSelect, i16.NgControlStatus, i16.FormControlName, i3.MatTooltip, i9.MatOption, i18.MatButtonToggleGroup, i18.MatButtonToggle, i1.NgStyle, i11.MatCheckbox, i19.MatRadioGroup, i19.MatRadioButton, i4.MatIcon, i16.FormControlDirective, i16.NgModel, OgcFilterTimeComponent], [i7.TranslatePipe]);
i0.ɵɵsetComponentScope(OgcFilterableFormComponent, [i1.NgIf, OgcFilterSelectionComponent, i6.ListItemDirective, i1.NgForOf, OgcFilterFormComponent], []);
i0.ɵɵsetComponentScope(OgcFilterableItemComponent, [i8.MatListItem, i1.NgIf, i4.MatIcon, i8.MatListAvatarCssMatStyler, i6.CollapseDirective, i9.MatLine, i1.NgStyle, i3.MatTooltip, i2.MatButton, i1.NgClass, i10.LayerLegendComponent, OgcFilterableFormComponent, i17.MatDivider, i11.MatCheckbox, i16.NgControlStatus, i16.NgModel], [i7.TranslatePipe, i1.AsyncPipe]);
i0.ɵɵsetComponentScope(OgcFilterableListComponent, [i6.ListComponent, i1.NgForOf, OgcFilterableItemComponent, i6.ListItemDirective], [FilterableDataSourcePipe]);
i0.ɵɵsetComponentScope(SpatialFilterTypeComponent, [i20.MatTabGroup, i20.MatTab, i12.MatFormField, i12.MatLabel, i13.MatSelect, i1.NgForOf, i9.MatOption, SpatialFilterListComponent, i18.MatButtonToggleGroup, i18.MatButtonToggle, i3.MatTooltip, i4.MatIcon], [i7.TranslatePipe]);
i0.ɵɵsetComponentScope(SpatialFilterItemComponent, [i21.GeometryFormFieldInputComponent, i16.NgControlStatus, i16.FormControlDirective, i1.NgIf, i22.MatSlideToggle, i16.ɵNgNoValidate, i16.NgControlStatusGroup, i16.NgForm, i12.MatFormField, i16.NumberValueAccessor, i14.MatInput, i16.DefaultValueAccessor, i13.MatSelect, i1.NgForOf, i9.MatOption, i12.MatLabel, i19.MatRadioGroup, i19.MatRadioButton, i23.MatTable, i23.MatColumnDef, i23.MatHeaderCellDef, i23.MatHeaderCell, i11.MatCheckbox, i23.MatHeaderRowDef, i23.MatHeaderRow, i23.MatRowDef, i23.MatRow, i24.MatTree, i24.MatTreeNodeDef, i24.MatTreeNode, i24.MatTreeNodeToggle, i2.MatButton, i24.MatNestedTreeNode, i4.MatIcon, i24.MatTreeNodeOutlet, i3.MatTooltip, i6.EntityTableComponent], [i1.AsyncPipe, i7.TranslatePipe]);
i0.ɵɵsetComponentScope(OgcFilterTimeComponent, [i1.NgIf, i22.MatSlideToggle, i16.NgControlStatus, i16.NgModel, OgcFilterTimeSliderComponent, i12.MatFormField, i12.MatLabel, i14.MatInput, i25.MatDatepickerToggle, i12.MatSuffix, i25.MatDatepicker, i25.MatDatepickerInput, i2.MatButton, i3.MatTooltip, i4.MatIcon, i13.MatSelect, i16.FormControlDirective, i1.NgForOf, i9.MatOption], [i7.TranslatePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZpbHRlci9maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVB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RUFDdEIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0T3B0aW9uTW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRUYWJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5cbmltcG9ydCB7XG4gIE1hdERhdGV0aW1lcGlja2VyTW9kdWxlLFxuICBNYXROYXRpdmVEYXRldGltZU1vZHVsZVxufSBmcm9tICdAbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29MYW5ndWFnZU1vZHVsZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHtcbiAgSWdvQ29sbGFwc2libGVNb2R1bGUsXG4gIElnb0xpc3RNb2R1bGUsXG4gIElnb0tleVZhbHVlTW9kdWxlLFxuICBJZ29FbnRpdHlNb2R1bGVcbn0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IElnb0dlb21ldHJ5TW9kdWxlIH0gZnJvbSAnLi8uLi9nZW9tZXRyeS9nZW9tZXRyeS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBGaWx0ZXJhYmxlRGF0YVNvdXJjZVBpcGUgfSBmcm9tICcuL3NoYXJlZC9maWx0ZXJhYmxlLWRhdGFzb3VyY2UucGlwZSc7XG5pbXBvcnQgeyBJZ29MYXllck1vZHVsZSB9IGZyb20gJy4uL2xheWVyL2xheWVyLm1vZHVsZSc7XG5pbXBvcnQgeyBUaW1lRmlsdGVyQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLWZpbHRlci1idXR0b24vdGltZS1maWx0ZXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lRmlsdGVyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vdGltZS1maWx0ZXItZm9ybS90aW1lLWZpbHRlci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lRmlsdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGltZS1maWx0ZXItaXRlbS90aW1lLWZpbHRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lRmlsdGVyTGlzdEJpbmRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL3RpbWUtZmlsdGVyLWxpc3QvdGltZS1maWx0ZXItbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaW1lRmlsdGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdGltZS1maWx0ZXItbGlzdC90aW1lLWZpbHRlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3RpbWUtZmlsdGVyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPZ2NGaWx0ZXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9vZ2MtZmlsdGVyLWZvcm0vb2djLWZpbHRlci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vb2djLWZpbHRlcmFibGUtZm9ybS9vZ2MtZmlsdGVyYWJsZS1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vb2djLWZpbHRlcmFibGUtaXRlbS9vZ2MtZmlsdGVyYWJsZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlTGlzdEJpbmRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL29nYy1maWx0ZXJhYmxlLWxpc3Qvb2djLWZpbHRlcmFibGUtbGlzdC1iaW5kaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJhYmxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vb2djLWZpbHRlcmFibGUtbGlzdC9vZ2MtZmlsdGVyYWJsZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPZ2NGaWx0ZXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL29nYy1maWx0ZXItYnV0dG9uL29nYy1maWx0ZXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPR0NGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvb2djLWZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9HQ0ZpbHRlclRpbWVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvb2djLWZpbHRlci10aW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2djRmlsdGVyU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vZ2MtZmlsdGVyLXNlbGVjdGlvbi9vZ2MtZmlsdGVyLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTcGF0aWFsRmlsdGVyVHlwZUNvbXBvbmVudCB9IGZyb20gJy4vc3BhdGlhbC1maWx0ZXIvc3BhdGlhbC1maWx0ZXItdHlwZS9zcGF0aWFsLWZpbHRlci10eXBlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGF0aWFsRmlsdGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3BhdGlhbC1maWx0ZXIvc3BhdGlhbC1maWx0ZXItbGlzdC9zcGF0aWFsLWZpbHRlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGF0aWFsRmlsdGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc3BhdGlhbC1maWx0ZXIvc3BhdGlhbC1maWx0ZXItaXRlbS9zcGF0aWFsLWZpbHRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGF0aWFsRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NwYXRpYWwtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2djRmlsdGVyVGltZUNvbXBvbmVudCB9IGZyb20gJy4vb2djLWZpbHRlci10aW1lL29nYy1maWx0ZXItdGltZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2djRmlsdGVyVGltZVNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vb2djLWZpbHRlci10aW1lL29nYy1maWx0ZXItdGltZS1zbGlkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRPcHRpb25Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvTGF5ZXJNb2R1bGUsXG4gICAgSWdvQ29sbGFwc2libGVNb2R1bGUsXG4gICAgSWdvTGlzdE1vZHVsZSxcbiAgICBJZ29FbnRpdHlNb2R1bGUsXG4gICAgSWdvS2V5VmFsdWVNb2R1bGUsXG4gICAgSWdvR2VvbWV0cnlNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZpbHRlcmFibGVEYXRhU291cmNlUGlwZSxcbiAgICBUaW1lRmlsdGVyQnV0dG9uQ29tcG9uZW50LFxuICAgIFRpbWVGaWx0ZXJGb3JtQ29tcG9uZW50LFxuICAgIFRpbWVGaWx0ZXJJdGVtQ29tcG9uZW50LFxuICAgIFRpbWVGaWx0ZXJMaXN0Q29tcG9uZW50LFxuICAgIFRpbWVGaWx0ZXJMaXN0QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBPZ2NGaWx0ZXJGb3JtQ29tcG9uZW50LFxuICAgIE9nY0ZpbHRlckJ1dHRvbkNvbXBvbmVudCxcbiAgICBPZ2NGaWx0ZXJTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgT2djRmlsdGVyYWJsZUZvcm1Db21wb25lbnQsXG4gICAgT2djRmlsdGVyYWJsZUl0ZW1Db21wb25lbnQsXG4gICAgT2djRmlsdGVyYWJsZUxpc3RDb21wb25lbnQsXG4gICAgT2djRmlsdGVyYWJsZUxpc3RCaW5kaW5nRGlyZWN0aXZlLFxuICAgIFNwYXRpYWxGaWx0ZXJUeXBlQ29tcG9uZW50LFxuICAgIFNwYXRpYWxGaWx0ZXJMaXN0Q29tcG9uZW50LFxuICAgIFNwYXRpYWxGaWx0ZXJJdGVtQ29tcG9uZW50LFxuICAgIE9nY0ZpbHRlclRpbWVDb21wb25lbnQsXG4gICAgT2djRmlsdGVyVGltZVNsaWRlckNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGaWx0ZXJhYmxlRGF0YVNvdXJjZVBpcGUsXG4gICAgVGltZUZpbHRlckJ1dHRvbkNvbXBvbmVudCxcbiAgICBUaW1lRmlsdGVyRm9ybUNvbXBvbmVudCxcbiAgICBUaW1lRmlsdGVySXRlbUNvbXBvbmVudCxcbiAgICBUaW1lRmlsdGVyTGlzdENvbXBvbmVudCxcbiAgICBUaW1lRmlsdGVyTGlzdEJpbmRpbmdEaXJlY3RpdmUsXG4gICAgT2djRmlsdGVyRm9ybUNvbXBvbmVudCxcbiAgICBPZ2NGaWx0ZXJCdXR0b25Db21wb25lbnQsXG4gICAgT2djRmlsdGVyU2VsZWN0aW9uQ29tcG9uZW50LFxuICAgIE9nY0ZpbHRlcmFibGVGb3JtQ29tcG9uZW50LFxuICAgIE9nY0ZpbHRlcmFibGVJdGVtQ29tcG9uZW50LFxuICAgIE9nY0ZpbHRlcmFibGVMaXN0Q29tcG9uZW50LFxuICAgIE9nY0ZpbHRlcmFibGVMaXN0QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBTcGF0aWFsRmlsdGVyVHlwZUNvbXBvbmVudCxcbiAgICBTcGF0aWFsRmlsdGVyTGlzdENvbXBvbmVudCxcbiAgICBTcGF0aWFsRmlsdGVySXRlbUNvbXBvbmVudCxcbiAgICBPZ2NGaWx0ZXJUaW1lQ29tcG9uZW50LFxuICAgIE9nY0ZpbHRlclRpbWVTbGlkZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVGltZUZpbHRlclNlcnZpY2UsIE9HQ0ZpbHRlclNlcnZpY2UsIE9HQ0ZpbHRlclRpbWVTZXJ2aWNlLCBTcGF0aWFsRmlsdGVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWdvRmlsdGVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZ29GaWx0ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0ZpbHRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTUFUX0RBVEVfTE9DQUxFLFxuICAgICAgICAgIHVzZVZhbHVlOiAnZnItRlInXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=