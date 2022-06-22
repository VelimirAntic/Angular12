import { BehaviorSubject } from 'rxjs';
import { LayerListControlsOptions } from '@igo2/geo';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of layer list tool values
 */
export declare class LayerListToolState {
    readonly keyword$: BehaviorSubject<string>;
    readonly sortAlpha$: BehaviorSubject<boolean>;
    readonly onlyVisible$: BehaviorSubject<boolean>;
    readonly selectedTab$: BehaviorSubject<number>;
    setKeyword(keyword: string): void;
    setSortAlpha(sort: boolean): void;
    setOnlyVisible(onlyVisible: boolean): void;
    setSelectedTab(tab: number): void;
    getLayerListControls(): LayerListControlsOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayerListToolState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayerListToolState>;
}
