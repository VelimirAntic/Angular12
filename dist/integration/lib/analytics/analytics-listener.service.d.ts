import { AnalyticsService } from '@igo2/core';
import { AuthService } from '@igo2/auth';
import { ContextState } from '../context/context.state';
import { SearchState } from '../search/search.state';
import { ToolState } from '../tool/tool.state';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of the search module
 */
export declare class AnalyticsListenerService {
    private analyticsService;
    private authService;
    private contextState;
    private searchState;
    private toolState;
    /**
     * Toolbox that holds main tools
     */
    constructor(analyticsService: AnalyticsService, authService: AuthService, contextState: ContextState, searchState: SearchState, toolState: ToolState);
    listen(): void;
    listenUser(): void;
    listenContext(): void;
    listenTool(): void;
    listenSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsListenerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnalyticsListenerService>;
}
