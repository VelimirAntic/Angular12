import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService, LanguageService, MessageService, StorageService } from '@igo2/core';
import { AuthInterceptor } from '@igo2/auth';
import { ImageLayer, LayerService, VectorLayer } from '../../layer';
import { IgoMap } from '../../map';
import { EditionWorkspace } from './edition-workspace';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class EditionWorkspaceService {
    private layerService;
    private storageService;
    private configService;
    private messageService;
    private languageService;
    private http;
    private dialog;
    authInterceptor?: AuthInterceptor;
    ws$: BehaviorSubject<string>;
    adding$: BehaviorSubject<boolean>;
    relationLayers$: BehaviorSubject<ImageLayer[] | VectorLayer[]>;
    rowsInMapExtentCheckCondition$: BehaviorSubject<boolean>;
    loading: boolean;
    get zoomAuto(): boolean;
    constructor(layerService: LayerService, storageService: StorageService, configService: ConfigService, messageService: MessageService, languageService: LanguageService, http: HttpClient, dialog: MatDialog, authInterceptor?: AuthInterceptor);
    createWorkspace(layer: ImageLayer, map: IgoMap): EditionWorkspace;
    private createFeatureStore;
    private createTableTemplate;
    private createFilterInMapExtentOrResolutionStrategy;
    saveFeature(feature: any, workspace: EditionWorkspace): boolean;
    addFeature(feature: any, workspace: EditionWorkspace, url: string, headers: {
        [key: string]: any;
    }): void;
    deleteFeature(workspace: EditionWorkspace, url: string): void;
    modifyFeature(feature: any, workspace: EditionWorkspace, url: string, headers: {
        [key: string]: any;
    }, protocole?: string): void;
    cancelEdit(workspace: EditionWorkspace, feature: any, fromSave?: boolean): void;
    getDomainValues(table: string): Observable<any>;
    refreshMap(layer: VectorLayer, map: IgoMap): void;
    validateFeature(feature: any, workspace: EditionWorkspace): boolean;
    sanitizeParameter(feature: any, workspace: EditionWorkspace): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditionWorkspaceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EditionWorkspaceService>;
}
