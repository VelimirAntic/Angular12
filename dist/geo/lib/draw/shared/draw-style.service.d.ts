import * as OlStyle from 'ol/style';
import { MapService } from '../../map/shared/map.service';
import * as i0 from "@angular/core";
export declare class DrawStyleService {
    private mapService;
    private fillColor;
    private strokeColor;
    private strokeWidth;
    private labelsAreShown;
    private icon;
    constructor(mapService: MapService);
    getFillColor(): string;
    setFillColor(fillColor: string): void;
    getStrokeColor(): string;
    setStrokeColor(strokeColor: string): void;
    getStrokeWidth(): number;
    getLabelsAreShown(): boolean;
    toggleLabelsAreShown(): void;
    setIcon(icon: string): void;
    getIcon(): string;
    createDrawingLayerStyle(feature: any, resolution: any, labelsAreShown?: boolean, icon?: string): OlStyle.Style;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawStyleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DrawStyleService>;
}
