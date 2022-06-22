import { RouteService, MessageService } from '@igo2/core';
import type { IgoMap } from '@igo2/geo';
import { ContextService } from '../../context-manager/shared/context.service';
import * as i0 from "@angular/core";
export declare class ShareMapService {
    private contextService;
    private messageService;
    private route;
    constructor(contextService: ContextService, messageService: MessageService, route: RouteService);
    getUrlWithApi(formValues: any): string;
    createContextShared(map: IgoMap, formValues: any): import("rxjs").Observable<import("../../context-manager/shared/context.interface").Context>;
    updateContextShared(map: IgoMap, formValues: any, id: string): import("rxjs").Observable<import("../../context-manager/shared/context.interface").Context>;
    getUrlWithoutApi(map: IgoMap, publicShareOption: any): string;
    private makeLayersByService;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareMapService, [null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShareMapService>;
}
