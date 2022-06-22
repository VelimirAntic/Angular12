import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IgoLanguageModule } from '@igo2/core';
import { IgoListModule, IgoCollapsibleModule, IgoImageModule, IgoPanelModule, IgoMatBadgeIconModule, IgoCustomHtmlModule } from '@igo2/common';
import { LayerService } from './shared/layer.service';
import { StyleService } from './shared/style.service';
import { LayerListToolService } from './layer-list-tool/layer-list-tool.service';
import { LayerItemComponent } from './layer-item/layer-item.component';
import { LayerLegendComponent } from './layer-legend/layer-legend.component';
import { LayerListComponent } from './layer-list/layer-list.component';
import { LayerListToolComponent } from './layer-list-tool/layer-list-tool.component';
import { LayerListBindingDirective } from './layer-list/layer-list-binding.directive';
import { LayerLegendListBindingDirective } from './layer-legend-list/layer-legend-list-binding.directive';
import { TrackFeatureButtonComponent } from './track-feature-button/track-feature-button.component';
import { LayerLegendListComponent } from './layer-legend-list/layer-legend-list.component';
import { LayerLegendItemComponent } from './layer-legend-item/layer-legend-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/badge";
import * as i9 from "@ngx-translate/core";
import * as i10 from "@angular/material/divider";
import * as i11 from "@igo2/common";
import * as i12 from "@angular/material/menu";
import * as i13 from "@angular/material/slider";
import * as i14 from "@angular/forms";
import * as i15 from "@angular/material/slide-toggle";
export class IgoLayerModule {
    static forRoot() {
        return {
            ngModule: IgoLayerModule,
            providers: [LayerService, StyleService, LayerListToolService]
        };
    }
}
IgoLayerModule.ɵfac = function IgoLayerModule_Factory(t) { return new (t || IgoLayerModule)(); };
IgoLayerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoLayerModule });
IgoLayerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatInputModule,
            MatFormFieldModule,
            CommonModule,
            FormsModule,
            MatDividerModule,
            MatMenuModule,
            MatIconModule,
            MatButtonModule,
            MatSlideToggleModule,
            MatSelectModule,
            MatTooltipModule,
            MatListModule,
            MatSliderModule,
            MatBadgeModule,
            MatCheckboxModule,
            IgoLanguageModule,
            IgoListModule,
            IgoCollapsibleModule,
            IgoImageModule,
            IgoPanelModule,
            IgoMatBadgeIconModule,
            IgoCustomHtmlModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoLayerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatInputModule,
                    MatFormFieldModule,
                    CommonModule,
                    FormsModule,
                    MatDividerModule,
                    MatMenuModule,
                    MatIconModule,
                    MatButtonModule,
                    MatSlideToggleModule,
                    MatSelectModule,
                    MatTooltipModule,
                    MatListModule,
                    MatSliderModule,
                    MatBadgeModule,
                    MatCheckboxModule,
                    IgoLanguageModule,
                    IgoListModule,
                    IgoCollapsibleModule,
                    IgoImageModule,
                    IgoPanelModule,
                    IgoMatBadgeIconModule,
                    IgoCustomHtmlModule
                ],
                exports: [
                    LayerItemComponent,
                    LayerLegendItemComponent,
                    LayerLegendComponent,
                    LayerListComponent,
                    LayerListToolComponent,
                    LayerLegendListComponent,
                    LayerListBindingDirective,
                    LayerLegendListBindingDirective,
                    TrackFeatureButtonComponent
                ],
                declarations: [
                    LayerItemComponent,
                    LayerLegendItemComponent,
                    LayerLegendComponent,
                    LayerListComponent,
                    LayerListToolComponent,
                    LayerLegendListComponent,
                    LayerListBindingDirective,
                    LayerLegendListBindingDirective,
                    TrackFeatureButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoLayerModule, { declarations: [LayerItemComponent,
        LayerLegendItemComponent,
        LayerLegendComponent,
        LayerListComponent,
        LayerListToolComponent,
        LayerLegendListComponent,
        LayerListBindingDirective,
        LayerLegendListBindingDirective,
        TrackFeatureButtonComponent], imports: [MatInputModule,
        MatFormFieldModule,
        CommonModule,
        FormsModule,
        MatDividerModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatTooltipModule,
        MatListModule,
        MatSliderModule,
        MatBadgeModule,
        MatCheckboxModule,
        IgoLanguageModule,
        IgoListModule,
        IgoCollapsibleModule,
        IgoImageModule,
        IgoPanelModule,
        IgoMatBadgeIconModule,
        IgoCustomHtmlModule], exports: [LayerItemComponent,
        LayerLegendItemComponent,
        LayerLegendComponent,
        LayerListComponent,
        LayerListToolComponent,
        LayerLegendListComponent,
        LayerListBindingDirective,
        LayerLegendListBindingDirective,
        TrackFeatureButtonComponent] }); })();
i0.ɵɵsetComponentScope(LayerItemComponent, [i1.MatListItem, i2.NgIf, i3.MatCheckbox, i1.MatListIconCssMatStyler, i4.MatLine, i5.MatTooltip, i6.MatButton, i7.MatIcon, i8.MatBadge, i2.NgClass, LayerLegendComponent], [i9.TranslatePipe, i2.AsyncPipe]);
i0.ɵɵsetComponentScope(LayerLegendItemComponent, [i1.MatListItem, i4.MatLine, i5.MatTooltip, LayerLegendComponent], []);
i0.ɵɵsetComponentScope(LayerListComponent, [i1.MatList, i2.NgIf, LayerListToolComponent, i1.MatListItem, i3.MatCheckbox, i10.MatDivider, i11.ListComponent, i2.NgClass, i2.NgForOf, LayerItemComponent, i11.ListItemDirective, i11.PanelComponent, i6.MatButton, i5.MatTooltip, i7.MatIcon, i8.MatBadge, i12.MatMenuTrigger, i12.MatMenu, i13.MatSlider, i2.NgTemplateOutlet, i14.NgControlStatus, i14.NgModel], [i2.AsyncPipe, i9.TranslatePipe]);
i0.ɵɵsetComponentScope(LayerLegendListComponent, [i2.NgIf, i15.MatSlideToggle, i5.MatTooltip, i10.MatDivider, i11.ListComponent, i2.NgForOf, LayerLegendItemComponent, i11.ListItemDirective], [i9.TranslatePipe, i2.AsyncPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvbGF5ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxF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LCtCQUErQjtRQUMvQiwyQkFBMkIsYUEzQzNCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQixhQUduQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLDJCQUEyQjt1QkFHM0Isa0JBQWtCLHNKQUVsQixvQkFBb0I7dUJBRHBCLHdCQUF3Qiw4Q0FDeEIsb0JBQW9CO3VCQUNwQixrQkFBa0Isd0JBQ2xCLHNCQUFzQiw2RkFKdEIsa0JBQWtCO3VCQUtsQix3QkFBd0IsOEZBSnhCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRCYWRnZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdERpdmlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuaW1wb3J0IHsgSWdvTGFuZ3VhZ2VNb2R1bGUgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7XG4gIElnb0xpc3RNb2R1bGUsXG4gIElnb0NvbGxhcHNpYmxlTW9kdWxlLFxuICBJZ29JbWFnZU1vZHVsZSxcbiAgSWdvUGFuZWxNb2R1bGUsXG4gIElnb01hdEJhZGdlSWNvbk1vZHVsZSxcbiAgSWdvQ3VzdG9tSHRtbE1vZHVsZVxufSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9sYXllci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0eWxlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3N0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5ZXJMaXN0VG9vbFNlcnZpY2UgfSBmcm9tICcuL2xheWVyLWxpc3QtdG9vbC9sYXllci1saXN0LXRvb2wuc2VydmljZSc7XG5pbXBvcnQgeyBMYXllckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheWVyLWl0ZW0vbGF5ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLWxlZ2VuZC9sYXllci1sZWdlbmQuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXItbGlzdC9sYXllci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckxpc3RUb29sQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci1saXN0LXRvb2wvbGF5ZXItbGlzdC10b29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckxpc3RCaW5kaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXllci1saXN0L2xheWVyLWxpc3QtYmluZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGF5ZXJMZWdlbmRMaXN0QmluZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vbGF5ZXItbGVnZW5kLWxpc3QvbGF5ZXItbGVnZW5kLWxpc3QtYmluZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJhY2tGZWF0dXJlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90cmFjay1mZWF0dXJlLWJ1dHRvbi90cmFjay1mZWF0dXJlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJMZWdlbmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXllci1sZWdlbmQtbGlzdC9sYXllci1sZWdlbmQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJMZWdlbmRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci1sZWdlbmQtaXRlbS9sYXllci1sZWdlbmQtaXRlbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgSWdvTGFuZ3VhZ2VNb2R1bGUsXG4gICAgSWdvTGlzdE1vZHVsZSxcbiAgICBJZ29Db2xsYXBzaWJsZU1vZHVsZSxcbiAgICBJZ29JbWFnZU1vZHVsZSxcbiAgICBJZ29QYW5lbE1vZHVsZSxcbiAgICBJZ29NYXRCYWRnZUljb25Nb2R1bGUsXG4gICAgSWdvQ3VzdG9tSHRtbE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGF5ZXJJdGVtQ29tcG9uZW50LFxuICAgIExheWVyTGVnZW5kSXRlbUNvbXBvbmVudCxcbiAgICBMYXllckxlZ2VuZENvbXBvbmVudCxcbiAgICBMYXllckxpc3RDb21wb25lbnQsXG4gICAgTGF5ZXJMaXN0VG9vbENvbXBvbmVudCxcbiAgICBMYXllckxlZ2VuZExpc3RDb21wb25lbnQsXG4gICAgTGF5ZXJMaXN0QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBMYXllckxlZ2VuZExpc3RCaW5kaW5nRGlyZWN0aXZlLFxuICAgIFRyYWNrRmVhdHVyZUJ1dHRvbkNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMYXllckl0ZW1Db21wb25lbnQsXG4gICAgTGF5ZXJMZWdlbmRJdGVtQ29tcG9uZW50LFxuICAgIExheWVyTGVnZW5kQ29tcG9uZW50LFxuICAgIExheWVyTGlzdENvbXBvbmVudCxcbiAgICBMYXllckxpc3RUb29sQ29tcG9uZW50LFxuICAgIExheWVyTGVnZW5kTGlzdENvbXBvbmVudCxcbiAgICBMYXllckxpc3RCaW5kaW5nRGlyZWN0aXZlLFxuICAgIExheWVyTGVnZW5kTGlzdEJpbmRpbmdEaXJlY3RpdmUsXG4gICAgVHJhY2tGZWF0dXJlQnV0dG9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSWdvTGF5ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0xheWVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJZ29MYXllck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0xheWVyU2VydmljZSwgU3R5bGVTZXJ2aWNlLCBMYXllckxpc3RUb29sU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=