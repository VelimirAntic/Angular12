import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import jspdf from 'jspdf';
import * as JSZip from 'jszip';
import { MessageService, ActivityService, LanguageService } from '@igo2/core';
import { IgoMap } from '../../map/shared/map';
import { PrintOptions } from './print.interface';
import * as i0 from "@angular/core";
export declare class PrintService {
    private http;
    private messageService;
    private activityService;
    private languageService;
    zipFile: JSZip;
    nbFileToProcess: number;
    activityId: string;
    constructor(http: HttpClient, messageService: MessageService, activityService: ActivityService, languageService: LanguageService);
    print(map: IgoMap, options: PrintOptions): Subject<any>;
    /**
     * Add measure overlay on the map on the document when the measure layer is present
     * @param  doc - Pdf document where measure tooltip will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    private handleMeasureLayer;
    /**
     * Get html code for all layers legend
     * @param  map IgoMap
     * @param  width The width that the legend need to be
     * @return Html code for the legend
     */
    getLayersLegendHtml(map: IgoMap, width: number, resolution: number): Observable<string>;
    getDataImage(url: string): Observable<string>;
    /**
     * Get all the legend in a single image
     * * @param  format - Image format. default value to "png"
     * @return The image of the legend
     */
    getLayersLegendImage(map: any, format: string, doZipFile: boolean, resolution: number): Promise<Subject<unknown>>;
    getTitleSize(title: string, pageWidth: number, pageHeight: number, doc: jspdf): any[];
    getSubTitleSize(subtitle: string, pageWidth: number, pageHeight: number, doc: jspdf): any;
    private addTitle;
    private addSubTitle;
    /**
     * Add comment to the document
     * * @param  doc - pdf document
     * * @param  comment - Comment to add in the document
     * * @param  size - Size of the document
     */
    private addComment;
    /**
     * Add projection and/or scale to the document
     * @param  doc - pdf document
     * @param  map - Map of the app
     * @param  dpi - DPI resolution of the document
     * @param  projection - Bool to indicate if projection need to be added
     * @param  scale - Bool to indicate if scale need to be added
     */
    private addProjScale;
    /**
     * Add the legend to the document
     * @param  doc - Pdf document where legend will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    private addLegend;
    /**
     * Add the legend to the document
     * @param  doc - Pdf document where legend will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    private addLegendSamePage;
    /**
     * Add scale and attributions on the map on the document
     * @param  doc - Pdf document where legend will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    private addScale;
    defineNbFileToProcess(nbFileToProcess: any): void;
    private timeout;
    private addCanvas;
    private addMap;
    /**
     * Download an image of the map with addition of informations
     * @param  map - Map of the app
     * @param  format - Image format. default value to "png"
     * @param  projection - Indicate if projection need to be add. Default to false
     * @param  scale - Indicate if scale need to be add. Default to false
     * @param  legend - Indicate if the legend of layers need to be download. Default to false
     * @param  title - Title to add for the map - Default to blank
     * @param  subtitle - Subtitle to add for the map - Default to blank
     * @param  comment - Comment to add for the map - Default to blank
     * @param  doZipFile - Indicate if we do a zip with the file
     * @return Image file of the map with extension format given as parameter
     */
    downloadMapImage(map: IgoMap, resolution: number, format?: string, projection?: boolean, scale?: boolean, legend?: boolean, title?: string, subtitle?: string, comment?: string, doZipFile?: boolean): Subject<unknown>;
    private renderMap;
    /**
     * Save document
     * @param  doc - Document to save
     */
    protected saveDoc(doc: jspdf): Promise<void>;
    /**
     * Calculate the best Image size to fit in pdf
     * @param doc - Pdf Document
     * @param canvas - Canvas of image
     * @param margins - Page margins
     */
    private getImageSizeToFitPdf;
    /**
     * Get a world file information for tiff
     * @param  map - Map of the app
     */
    private getWorldFileInformation;
    /**
     * Save canvas image as file
     * @param canvas - Canvas to save
     * @param name - Name of the file
     * @param format - file format
     */
    private saveCanvasImageAsFile;
    /**
     * Add file to a zip
     * @param canvas - File to add to the zip
     * @param  name -Name of the fileoverview
     */
    private generateCanvaFileToZip;
    /**
     * Add file to zip, if all file are zipped, download
     * @param name - Name of the files
     * @param blob - Contain of file
     */
    private addFileToZip;
    private saveFileProcessing;
    /**
     * Get the zipped file
     * @return Retun a zip file
     */
    private getZipFile;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrintService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrintService>;
}
