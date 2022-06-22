import { IgoMap, MapService, ProjectionService } from '@igo2/geo';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the map module
 */
export declare class MapState {
    private mapService;
    private projectionService;
    get showAllLegendsValue(): boolean;
    set showAllLegendsValue(value: boolean);
    private _legendToolShowAll;
    /**
     * Active map
     */
    get map(): IgoMap;
    private _map;
    constructor(mapService: MapService, projectionService: ProjectionService);
    static ɵfac: i0.ɵɵFactoryDeclaration<MapState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MapState>;
}
