import { MatDialog } from '@angular/material/dialog';
import { Layer } from '../../layer/shared/layers/layer';
import { MetadataOptions, MetadataLayerOptions } from '../shared/metadata.interface';
import { MetadataService } from '../shared/metadata.service';
import * as i0 from "@angular/core";
export declare class MetadataButtonComponent {
    private metadataService;
    private dialog;
    get layer(): Layer;
    set layer(value: Layer);
    private _layer;
    get color(): string;
    set color(value: string);
    private _color;
    constructor(metadataService: MetadataService, dialog: MatDialog);
    openMetadata(metadata: MetadataOptions): void;
    get options(): MetadataLayerOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<MetadataButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MetadataButtonComponent, "igo-metadata-button", never, { "layer": "layer"; "color": "color"; }, {}, never, never>;
}
export declare class MetadataAbstractComponent {
    data: MetadataOptions;
    constructor(data: MetadataOptions);
    static ɵfac: i0.ɵɵFactoryDeclaration<MetadataAbstractComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MetadataAbstractComponent, "igo-metadata-abstract", never, {}, {}, never, never>;
}
