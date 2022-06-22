import { Watcher } from '@igo2/utils';
import { LanguageService, MessageService } from '@igo2/core';
import { ImageLayer } from '../shared/layers/image-layer';
export declare class ImageWatcher extends Watcher {
    protected id: string;
    protected loaded: number;
    protected loading: number;
    private source;
    private messageService;
    private languageService;
    constructor(layer: ImageLayer, messageService: MessageService, languageService: LanguageService);
    protected watch(): void;
    protected unwatch(): void;
    private handleLoadStart;
    private handleLoadEnd;
    private handleLoadError;
}
