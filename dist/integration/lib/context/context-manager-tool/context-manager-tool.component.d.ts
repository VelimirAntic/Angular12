import { ToolState } from '../../tool/tool.state';
import { MapState } from '../../map/map.state';
import { IgoMap } from '@igo2/geo';
import * as i0 from "@angular/core";
export declare class ContextManagerToolComponent {
    private toolState;
    private mapState;
    toolToOpenOnContextChange: string;
    get map(): IgoMap;
    constructor(toolState: ToolState, mapState: MapState);
    editContext(): void;
    managePermissions(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextManagerToolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextManagerToolComponent, "igo-context-manager-tool", never, { "toolToOpenOnContextChange": "toolToOpenOnContextChange"; }, {}, never, never>;
}
