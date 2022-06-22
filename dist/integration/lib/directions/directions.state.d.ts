import { StopsStore, StopsFeatureStore, RoutesFeatureStore, StepFeatureStore } from '@igo2/geo';
import { Subject } from 'rxjs';
import { MapState } from '../map/map.state';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the direction module
 */
export declare class DirectionState {
    private mapState;
    zoomToActiveRoute$: Subject<void>;
    /**
     * Store that holds the stop
     */
    stopsStore: StopsStore;
    /**
     * Store that holds the driving stops as feature
     */
    stopsFeatureStore: StopsFeatureStore;
    /**
     * Store that holds the driving route as feature
     */
    routesFeatureStore: RoutesFeatureStore;
    stepFeatureStore: StepFeatureStore;
    debounceTime: number;
    constructor(mapState: MapState);
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectionState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DirectionState>;
}
