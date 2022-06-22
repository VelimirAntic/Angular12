import { AfterViewInit, OnDestroy } from '@angular/core';
import { IgoMap } from '../shared/map';
import * as i0 from "@angular/core";
/**
 * Tool to display the center of the map
 */
export declare class MapCenterComponent implements AfterViewInit, OnDestroy {
    /**
     * Get an active map
     */
    map: IgoMap;
    /**
     * Listener of toggle from advanced-map-tool
     */
    private displayCenter$$;
    constructor();
    /**
     * Set a visibility for cursor of the center of the map
     */
    ngAfterViewInit(): void;
    /**
     * Destroyer of a component
     */
    ngOnDestroy(): void;
    /**
     * Zoom on div
     */
    private letZoom;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapCenterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapCenterComponent, "igo-map-center", never, { "map": "map"; }, {}, never, never>;
}
