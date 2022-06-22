import { InteractiveTourService } from './interactive-tour.service';
import { ToolService } from '../tool/shared/tool.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class InteractiveTourComponent {
    private interactiveTourService;
    private toolService;
    /**
     * Toolbox that holds main tools
     */
    tourToStart: string;
    styleButton: string;
    discoverTitleInLocale$: Observable<string>;
    getClass(): {
        'tour-button-tool-icon': boolean;
        'tour-button-tool': boolean;
    };
    get toolbox(): import("@igo2/common").Toolbox;
    getTourToStart(): string;
    get activeToolName(): string;
    get isActiveTool(): boolean;
    get isToolHaveTour(): boolean;
    get showTourButton(): boolean;
    get isTourDisplayInMobile(): boolean;
    get disabledTourButton(): boolean;
    constructor(interactiveTourService: InteractiveTourService, toolService: ToolService);
    startInteractiveTour(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InteractiveTourComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InteractiveTourComponent, "igo-interactive-tour", never, { "tourToStart": "tourToStart"; "styleButton": "styleButton"; "discoverTitleInLocale$": "discoverTitleInLocale$"; }, {}, never, never>;
}
