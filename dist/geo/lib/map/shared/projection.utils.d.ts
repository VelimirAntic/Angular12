import { ProjectionsLimitationsOptions } from './projection.interfaces';
/**
 * Return a number of zone MTM for a longitude for province of Quebec only
 * @param lon number
 * @returns zone
 */
export declare function zoneMtm(lon: number): number;
/**
 * Return a number of zone UTM for a longitude
 * @param lon number
 * @returns zone
 */
export declare function zoneUtm(lon: number): number;
/**
 * Compute the contraints of projections
 * @param projectionsLimitations: ProjectionsLimitationsOptions
 * @returns projectionsContraints: ProjectionsLimitationsOptions
 */
export declare function computeProjectionsConstraints(projectionsLimitations: ProjectionsLimitationsOptions): ProjectionsLimitationsOptions;
