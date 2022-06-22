import { ConfigService } from '../config/config.service';
import { StorageScope, StorageOptions, StorageServiceEvent } from './storage.interface';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class StorageService {
    private config;
    protected options: StorageOptions;
    storageChange$: BehaviorSubject<StorageServiceEvent>;
    constructor(config: ConfigService);
    /**
     * Use to get the data found in storage file
     */
    get(key: string, scope?: StorageScope): string | object | boolean | number;
    set(key: string, value: string | object | boolean | number, scope?: StorageScope): void;
    remove(key: string, scope?: StorageScope): void;
    clear(scope?: StorageScope): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageService>;
}
