import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { Media, MediaOrientation } from './media.enum';
import * as i0 from "@angular/core";
export declare class MediaService {
    media$: BehaviorSubject<Media>;
    orientation$: BehaviorSubject<MediaOrientation>;
    constructor(breakpointObserver: BreakpointObserver);
    getMedia(): Media;
    getOrientation(): MediaOrientation;
    isTouchScreen(): boolean;
    isMobile(): boolean;
    isDesktop(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}
