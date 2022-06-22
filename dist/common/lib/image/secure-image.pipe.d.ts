import { PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SecureImagePipe implements PipeTransform {
    private http;
    constructor(http: HttpClient);
    transform(url: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecureImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SecureImagePipe, "secureImage">;
}
