import { IgoMap } from './map';
import * as i0 from "@angular/core";
/**
 * MapService
 *
 * This service tracks the IgoMap instance, if any.
 * Currently, only one map instance is supported
 * but support for multiple maps may be added in the future.
 * This will impact other services such as the OverlayService
 * because these maps won't be sharing overlayed features.
 */
export declare class MapService {
    private map;
    constructor();
    getMap(): IgoMap;
    setMap(map: IgoMap): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MapService>;
}
