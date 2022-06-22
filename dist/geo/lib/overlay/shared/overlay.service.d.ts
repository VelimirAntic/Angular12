import { BehaviorSubject } from 'rxjs';
import { Feature } from '../../feature/shared/feature.interfaces';
import { OverlayAction } from './overlay.enum';
import * as i0 from "@angular/core";
export declare class OverlayService {
    features$: BehaviorSubject<[Feature<{
        [key: string]: any;
    }>[], OverlayAction]>;
    constructor();
    setFeatures(features: Feature[], action?: OverlayAction): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OverlayService>;
}
