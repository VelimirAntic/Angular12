import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { FeatureDetailsComponent } from './feature-details.component';
import olGeolocation from 'ol/Geolocation';
import { BehaviorSubject } from 'rxjs';
import { Feature } from '../shared';
import * as i0 from "@angular/core";
export declare class FeatureDetailsDirective implements OnInit {
    private el;
    private component;
    geolocation$: BehaviorSubject<olGeolocation>;
    start: Feature;
    end: Feature;
    get map(): import("@igo2/geo").IgoMap;
    get feature(): Feature<{
        [key: string]: any;
    }>;
    feature$: BehaviorSubject<any>;
    get geolocation(): olGeolocation;
    set geolocation(value: olGeolocation);
    routingEvent: EventEmitter<Feature<{
        [key: string]: any;
    }>[]>;
    setFeature(): void;
    constructor(component: FeatureDetailsComponent, el: ElementRef);
    ngOnInit(): void;
    bindClicking(): void;
    activateRouting(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDetailsDirective, [{ self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FeatureDetailsDirective, "[igoFeatureDetailsDirective]", never, {}, { "routingEvent": "routingEvent"; }, never>;
}
