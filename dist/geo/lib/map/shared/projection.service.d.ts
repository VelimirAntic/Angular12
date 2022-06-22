import { ConfigService } from '@igo2/core';
import { Projection } from './projection.interfaces';
import * as i0 from "@angular/core";
/**
 * When injected, this service automatically registers and
 * projection defined in the application config. A custom projection
 * needs to be registered to be usable by OL.
 */
export declare class ProjectionService {
    private config;
    constructor(config: ConfigService);
    /**
     * Define a proj4 projection and register it in OL
     * @param projection Projection
     */
    registerProjection(projection: Projection): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProjectionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProjectionService>;
}
