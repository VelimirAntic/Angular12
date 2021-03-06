import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SanitizeHtmlPipe implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(v: string): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<SanitizeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SanitizeHtmlPipe, "sanitizeHtml">;
}
