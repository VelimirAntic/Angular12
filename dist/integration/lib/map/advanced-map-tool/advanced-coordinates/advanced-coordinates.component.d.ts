import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { IgoMap, InputProjections, ProjectionsLimitationsOptions } from '@igo2/geo';
import { MapState } from '../../map.state';
import { MessageService, LanguageService, StorageService, ConfigService } from '@igo2/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Tool to display the coordinates and a cursor of the center of the map
 */
export declare class AdvancedCoordinatesComponent implements OnInit, OnDestroy {
    mapState: MapState;
    private languageService;
    private messageService;
    private cdRef;
    private storageService;
    private config;
    private formBuilder;
    formattedScale$: BehaviorSubject<string>;
    projections$: BehaviorSubject<InputProjections[]>;
    form: FormGroup;
    coordinates: string[];
    private currentCenterDefaultProj;
    center: boolean;
    private inMtmZone;
    private inLambert2;
    private mapState$$;
    private _projectionsLimitations;
    private projectionsConstraints;
    private defaultProj;
    private currentZones;
    units: boolean;
    get map(): IgoMap;
    get inputProj(): InputProjections;
    set inputProj(value: InputProjections);
    get projectionsLimitations(): ProjectionsLimitationsOptions;
    set projectionsLimitations(value: ProjectionsLimitationsOptions);
    constructor(mapState: MapState, languageService: LanguageService, messageService: MessageService, cdRef: ChangeDetectorRef, storageService: StorageService, config: ConfigService, formBuilder: FormBuilder);
    /**
     * Listen a state of the map, a state of a form, update the coordinates
     */
    ngOnInit(): void;
    ngOnDestroy(): void;
    setScaleValue(map: IgoMap): void;
    /**
     * Coordinates of the center of the map on the appropriate systeme of coordinates
     * @returns Array of two numbers
     */
    getCoordinates(): string[];
    /**
     * Copy the coordinates to a clipboard
     */
    copyTextToClipboard(): void;
    /**
     * Display a cursor on the center of the map
     */
    displayCenter(toggle: boolean): void;
    /**
     * Builder of the form
     */
    private buildForm;
    /**
     * Update list of projections after changing of the state of the map
     */
    private updateProjectionsZoneChange;
    /**
     * Create a list of currents projections
     */
    private computeProjections;
    /**
     * Push the MTM in the array of systeme of coordinates
     * @param projections Array of the InputProjections
     */
    private pushMtm;
    /**
     * Updates the list of systems of coordinates for territory of Quebec
     * push MTM and UTM in the Array
     */
    private back2quebec;
    /**
     * Update the numbers of the zones when application is restarted
     */
    private updateZoneMtmUtm;
    /**
     * Compute the position of a current projection in a list. 0 if the projection is not in the list
     * @param translateKey string, translate key of a projection
     * @returns numeric, position of an element in the array
     */
    positionInList(tempInputProj: InputProjections): number;
    /**
     * Change the list of projections depending on the projections of Lambert
     * @param coordinates An array of numbers, longitude and latitude
     */
    checkLambert(coordinates: [number, number]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedCoordinatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedCoordinatesComponent, "igo-advanced-coordinates", never, { "projectionsLimitations": "projectionsLimitations"; }, {}, never, never>;
}
