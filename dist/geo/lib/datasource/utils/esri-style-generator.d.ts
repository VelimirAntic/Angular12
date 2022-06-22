import * as olstyle from 'ol/style';
export declare class EsriStyleGenerator {
    _converters: any;
    _renderers: any;
    constructor();
    static _convertPointToPixel(point: any): number;
    static _transformColor(color: any): [number, number, number, number];
    static _getResolutionForScale(scale: any, units: any): number;
    static _convertEsriTS(symbol: any): olstyle.Style;
    static _convertEsriPMS(symbol: any): olstyle.Style;
    static _convertEsriSFS(symbol: any): olstyle.Style;
    static _convertOutline(outline: any): olstyle.Stroke;
    static _convertEsriSLS(symbol: any): olstyle.Style;
    static _transformAngle(angle: any): number;
    static _convertEsriSMS(symbol: any): olstyle.Style;
    _convertLabelingInfo(labelingInfo: any, mapUnits: any): any[];
    _renderSimple(renderer: any): () => any[];
    _renderClassBreaks(renderer: any): (feature: any) => any[];
    _renderUniqueValue(renderer: any): (feature: any) => any;
    generateStyle(layerInfo: any, mapUnits: any): any;
}
