import { DynamicComponentService } from '../../dynamic-component/shared/dynamic-component.service';
import { Widget } from './widget';
import * as i0 from "@angular/core";
export declare class WidgetService {
    private dynamicComponentService;
    constructor(dynamicComponentService: DynamicComponentService);
    create(widgetCls: any): Widget;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetService>;
}
