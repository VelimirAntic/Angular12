import olFeature from 'ol/Feature';
import * as olStyle from 'ol/style';
import type { default as OlGeometry } from 'ol/geom/Geometry';
import { Direction, Stop } from './directions.interface';
import { LanguageService } from '@igo2/core';
import { DirectionRelativePositionType } from './directions.enum';
import { RoutesFeatureStore, StepFeatureStore, StopsFeatureStore, StopsStore } from './store';
/**
 * Function that updat the sort of the list base on the provided field.
 * @param source stop store
 * @param direction asc / desc sort order
 * @param field the field to use to sort the view
 */
export declare function updateStoreSorting(stopsStore: StopsStore, direction?: 'asc' | 'desc', field?: string): void;
export declare function computeRelativePosition(index: number, totalLength: any): DirectionRelativePositionType;
export declare function computeStopsPosition(stopsStore: StopsStore): void;
/**
 * Function that add a stop to the stop store. Stop are always added before the last stop.
 * @param stopsStore stop store as an EntityStore
 */
export declare function addStopToStore(stopsStore: StopsStore): Stop;
export declare function removeStopFromStore(stopsStore: StopsStore, stop: Stop): void;
/**
 * Create a style for the directions stops and routes
 * @param feature OlFeature
 * @returns OL style function
 */
export declare function directionsStyle(feature: olFeature<OlGeometry>, resolution: number): olStyle.Style | olStyle.Style[];
export declare function initStopsFeatureStore(stopsFeatureStore: StopsFeatureStore, languageService: LanguageService): void;
export declare function initRoutesFeatureStore(routesFeatureStore: RoutesFeatureStore, languageService: LanguageService): void;
export declare function initStepFeatureStore(stepFeatureStore: StepFeatureStore): void;
export declare function addStopToStopsFeatureStore(stop: Stop, stopsStore: StopsStore, stopsFeatureStore: StopsFeatureStore, projection: string, languageService: LanguageService): void;
export declare function addDirectionToRoutesFeatureStore(routesFeatureStore: RoutesFeatureStore, direction: Direction, projection: string, active?: boolean, moveToExtent?: boolean): void;
export declare function formatDistance(distance: number): string;
export declare function formatDuration(duration: number): string;
export declare function formatInstruction(type: any, modifier: any, route: any, direction: any, stepPosition: any, exit: any, languageService: LanguageService, lastStep?: boolean): {
    instruction: any;
    image: string;
    cssClass: string;
};
export declare function translateModifier(modifier: any, languageService: LanguageService): any;
export declare function translateBearing(bearing: number, languageService: LanguageService): any;
