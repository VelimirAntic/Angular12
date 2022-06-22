import * as i0 from "@angular/core";
export declare class WktService {
    constructor();
    wktToFeature(wkt: any, wktProj: any, featureProj: any): import("ol/Feature").default<any>;
    extentToWkt(epsgTO: any, extent: any, extentProj: any): {
        wktPoly: string;
        wktLine: string;
        wktMultiPoints: string;
    };
    private roundCoordinateArray;
    private roundArray;
    snrcToWkt(snrc: any, epsgTO: any): {
        wktPoly: any;
        wktLine: string;
        wktMultiPoints: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<WktService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WktService>;
}
