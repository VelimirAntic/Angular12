import { EntityStore } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import { FeatureStore } from '../../feature/shared/store';
import { FeatureWithDirection, FeatureWithStep, FeatureWithStop, Stop } from './directions.interface';
/**
 * The class is a specialized version of an EntityStore that stores
 * stops.
 */
export declare class StopsStore extends EntityStore<Stop> {
    storeInitialized$: BehaviorSubject<boolean>;
    clearStops(): void;
}
export declare class StopsFeatureStore extends FeatureStore<FeatureWithStop> {
}
export declare class RoutesFeatureStore extends FeatureStore<FeatureWithDirection> {
}
export declare class StepFeatureStore extends FeatureStore<FeatureWithStep> {
}
