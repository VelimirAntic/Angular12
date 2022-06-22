import { ConfigService } from '../../config/config.service';
import * as i0 from "@angular/core";
export declare class AnalyticsService {
    private config;
    private options;
    get paq(): any;
    constructor(config: ConfigService);
    private initMatomo;
    setUser(user?: {
        id: number;
        sourceId?: string;
        firstName?: string;
        lastName?: string;
    }, profils?: string[]): void;
    trackSearch(term: string, nbResults: number): void;
    trackEvent(category: string, action: string, name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnalyticsService>;
}
