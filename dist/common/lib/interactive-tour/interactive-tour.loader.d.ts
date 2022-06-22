import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InteractiveTourOptions } from './interactive-tour.interface';
import { ConfigService } from '@igo2/core';
import * as i0 from "@angular/core";
export declare class InteractiveTourLoader {
    private http;
    private configService;
    private jsonURL;
    private allToursOptions;
    constructor(http: HttpClient, configService: ConfigService);
    loadConfigTour(): void;
    getPathToConfigFile(): string;
    getJSON(): Observable<any>;
    getTourOptionData(toolName: any): InteractiveTourOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<InteractiveTourLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InteractiveTourLoader>;
}
