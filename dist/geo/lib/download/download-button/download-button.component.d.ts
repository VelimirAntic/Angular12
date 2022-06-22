import { Layer } from '../../layer/shared/layers/layer';
import { DownloadDataSourceOptions } from '../shared/download.interface';
import { DownloadService } from '../shared/download.service';
import * as i0 from "@angular/core";
export declare class DownloadButtonComponent {
    private downloadService;
    get layer(): Layer;
    set layer(value: Layer);
    private _layer;
    get color(): string;
    set color(value: string);
    private _color;
    constructor(downloadService: DownloadService);
    openDownload(layer: Layer): void;
    get options(): DownloadDataSourceOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<DownloadButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DownloadButtonComponent, "igo-download-button", never, { "layer": "layer"; "color": "color"; }, {}, never, never>;
}
