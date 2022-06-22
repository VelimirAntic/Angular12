import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ActivityService {
    counter$: BehaviorSubject<number>;
    private ids;
    constructor();
    register(): string;
    unregister(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActivityService>;
}
