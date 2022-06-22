import { ShepherdService } from 'angular-shepherd';
import { ConfigService, MediaService, LanguageService } from '@igo2/core';
import { InteractiveTourLoader } from './interactive-tour.loader';
import * as i0 from "@angular/core";
export declare class InteractiveTourService {
    private configService;
    private mediaService;
    private languageService;
    private interactiveTourLoader;
    private shepherdService;
    private previousStep;
    private nextIndex;
    constructor(configService: ConfigService, mediaService: MediaService, languageService: LanguageService, interactiveTourLoader: InteractiveTourLoader, shepherdService: ShepherdService);
    isAppHaveTour(): any;
    isToolHaveTourConfig(toolName: string): boolean;
    disabledTourButton(toolName: string): boolean;
    isMobile(): boolean;
    isTourDisplayInMobile(): boolean;
    private getButtons;
    private getAction;
    private addProgress;
    private checkNext;
    private executeAction;
    private executeActionPromise;
    private getShepherdSteps;
    startTour(toolName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InteractiveTourService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InteractiveTourService>;
}
