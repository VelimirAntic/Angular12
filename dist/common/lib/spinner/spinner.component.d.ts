import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SpinnerComponent {
    shown$: BehaviorSubject<boolean>;
    set shown(value: boolean);
    get shown(): boolean;
    constructor();
    show(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpinnerComponent, "igo-spinner", never, { "shown": "shown"; }, {}, never, never>;
}
