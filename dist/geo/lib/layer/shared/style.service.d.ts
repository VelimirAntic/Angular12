import type { default as OlGeometry } from 'ol/geom/Geometry';
import * as olstyle from 'ol/style';
import OlFeature from 'ol/Feature';
import { StyleByAttribute } from './vector-style.interface';
import { ClusterParam } from './clusterParam';
import RenderFeature from 'ol/render/Feature';
import * as i0 from "@angular/core";
export declare class StyleService {
    style: olstyle.Style;
    createStyle(options: {
        [key: string]: any;
    }): any;
    private parseStyle;
    private getOlKey;
    private getOlCls;
    createStyleByAttribute(feature: RenderFeature | OlFeature<OlGeometry>, styleByAttribute: StyleByAttribute): any;
    createClusterStyle(feature: any, clusterParam: ClusterParam, layerStyle: any): any;
    getLabel(feature: any, labelMatch: any): string;
    private guessTypeFeature;
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StyleService>;
}
