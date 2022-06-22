import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Observable, Subject, forkJoin } from 'rxjs';
import { map as rxMap } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as JSZip from 'jszip';
import { SubjectStatus } from '@igo2/utils';
import { SecureImagePipe } from '@igo2/common';
import { formatScale } from '../../map/shared/map.utils';
import { getLayersLegends } from '../../layer/utils/outputLegend';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@igo2/core";
export class PrintService {
    constructor(http, messageService, activityService, languageService) {
        this.http = http;
        this.messageService = messageService;
        this.activityService = activityService;
        this.languageService = languageService;
    }
    print(map, options) {
        const status$ = new Subject();
        const paperFormat = options.paperFormat;
        const resolution = +options.resolution; // Default is 96
        const orientation = options.orientation;
        const legendPostion = options.legendPosition;
        this.activityId = this.activityService.register();
        const doc = new jspdf({
            orientation,
            format: paperFormat.toLowerCase()
        });
        const dimensions = [
            doc.internal.pageSize.width,
            doc.internal.pageSize.height
        ];
        const margins = [10, 10, 10, 10];
        const width = dimensions[0] - margins[3] - margins[1];
        const height = dimensions[1] - margins[0] - margins[2];
        const size = [width, height];
        let titleSizeResults = [0, 0];
        if (options.title !== undefined) {
            titleSizeResults = this.getTitleSize(options.title, width, height, doc); // return : size(pt) and left margin (mm)
            this.addTitle(doc, options.title, titleSizeResults[0], margins[3] + titleSizeResults[1], titleSizeResults[0] * (25.4 / 72));
        }
        if (options.subtitle !== undefined) {
            let subtitleSizeResult = 0;
            const titleH = titleSizeResults[0];
            subtitleSizeResult = this.getSubTitleSize(options.subtitle, width, height, doc); // return : size(pt) and left margin (mm)
            this.addSubTitle(doc, options.subtitle, titleH * 0.7, margins[3] + subtitleSizeResult, titleH * 1.7 * (25.4 / 72));
            margins[0] = margins[0] + titleSizeResults[0] * 0.7 * (25.4 / 72);
        }
        if (options.showProjection === true || options.showScale === true) {
            this.addProjScale(doc, map, resolution, options.showProjection, options.showScale);
        }
        if (options.comment !== '') {
            this.addComment(doc, options.comment);
        }
        this.addMap(doc, map, resolution, size, margins).subscribe((status) => __awaiter(this, void 0, void 0, function* () {
            if (status === SubjectStatus.Done) {
                yield this.addScale(doc, map, margins);
                yield this.handleMeasureLayer(doc, map, margins);
                if (options.legendPosition !== 'none') {
                    if (['topleft', 'topright', 'bottomleft', 'bottomright'].indexOf(options.legendPosition) > -1) {
                        yield this.addLegendSamePage(doc, map, margins, resolution, options.legendPosition);
                    }
                    else if (options.legendPosition === 'newpage') {
                        yield this.addLegend(doc, map, margins, resolution);
                    }
                }
                else {
                    yield this.saveDoc(doc);
                }
            }
            if (status === SubjectStatus.Done || status === SubjectStatus.Error) {
                this.activityService.unregister(this.activityId);
                status$.next(SubjectStatus.Done);
            }
        }));
        return status$;
    }
    /**
     * Add measure overlay on the map on the document when the measure layer is present
     * @param  doc - Pdf document where measure tooltip will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    handleMeasureLayer(doc, map, margins) {
        return __awaiter(this, void 0, void 0, function* () {
            if (map.layers.find(layer => layer.visible && layer.id.startsWith('igo-measures-'))) {
                let canvasOverlayHTMLMeasures;
                const mapOverlayMeasuresHTML = map.ol.getOverlayContainer();
                yield html2canvas(mapOverlayMeasuresHTML, {
                    scale: 1,
                    backgroundColor: null
                }).then(e => {
                    canvasOverlayHTMLMeasures = e;
                });
                this.addCanvas(doc, canvasOverlayHTMLMeasures, margins); // this adds measure overlays
            }
        });
    }
    /**
     * Get html code for all layers legend
     * @param  map IgoMap
     * @param  width The width that the legend need to be
     * @return Html code for the legend
     */
    getLayersLegendHtml(map, width, resolution) {
        return new Observable((observer) => {
            let html = '';
            const legends = getLayersLegends(map.layers, {
                resolution: map.viewController.getResolution(),
                extent: map.viewController.getExtent(),
                projection: map.viewController.getOlProjection().getCode(),
                scale: map.viewController.getScale(resolution),
                size: map.ol.getSize()
            });
            if (legends.length === 0) {
                observer.next(html);
                observer.complete();
                return;
            }
            // Define important style to be sure that all container is convert
            // to image not just visible part
            html += '<style media="screen" type="text/css">';
            html += '.html2canvas-container { width: ' + width + 'mm !important; height: 2000px !important; }';
            html += 'table.tableLegend {table-layout: auto;}';
            html += 'div.styleLegend {padding-top: 5px; padding-right:5px;padding-left:5px;padding-bottom:5px;}';
            html += '</style>';
            // The font size will also be lowered afterwards (globally along the legend size)
            // this allows having a good relative font size here and to keep ajusting the legend size
            // while keeping good relative font size
            html += '<font size="3" face="Times" >';
            html += '<div class="styleLegend">';
            html += '<table class="tableLegend" >';
            // For each legend, define an html table cell
            const images$ = legends.map((legend) => this.getDataImage(legend.url).pipe(rxMap((dataImage) => {
                let htmlImg = '<tr><td>' + legend.title.toUpperCase() + '</td></tr>';
                htmlImg += '<tr><td><img src="' + dataImage + '"></td></tr>';
                return htmlImg;
            })));
            forkJoin(images$).subscribe((dataImages) => {
                html = dataImages.reduce((acc, current) => (acc += current), html);
                html += '</table>';
                html += '</div>';
                observer.next(html);
                observer.complete();
            });
        });
    }
    getDataImage(url) {
        const secureIMG = new SecureImagePipe(this.http);
        return secureIMG.transform(url);
    }
    /**
     * Get all the legend in a single image
     * * @param  format - Image format. default value to "png"
     * @return The image of the legend
     */
    getLayersLegendImage(map, format = 'png', doZipFile, resolution) {
        return __awaiter(this, void 0, void 0, function* () {
            const status$ = new Subject();
            // Get html code for the legend
            const width = 200; // milimeters unit, originally define for document pdf
            let html = yield this.getLayersLegendHtml(map, width, resolution).toPromise();
            format = format.toLowerCase();
            // If no legend show No LEGEND in an image
            if (html.length === 0) {
                html = '<font size="12" face="Courier New" >';
                html += '<div align="center"><b>NO LEGEND</b></div>';
            }
            // Create div to contain html code for legend
            const div = window.document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = '0';
            // Add html code to convert in the new window
            window.document.body.appendChild(div);
            div.innerHTML = html;
            yield this.timeout(1);
            const canvas = yield html2canvas(div, { useCORS: true }).catch((e) => {
                console.log(e);
            });
            if (canvas) {
                let status = SubjectStatus.Done;
                try {
                    if (!doZipFile) {
                        // Save the canvas as file
                        this.saveCanvasImageAsFile(canvas, 'legendImage', format);
                    }
                    else {
                        // Add the canvas to zip
                        this.generateCanvaFileToZip(canvas, 'legendImage' + '.' + format);
                    }
                    div.parentNode.removeChild(div); // remove temp div (IE)
                }
                catch (err) {
                    status = SubjectStatus.Error;
                }
                status$.next(status);
            }
            return status$;
        });
    }
    getTitleSize(title, pageWidth, pageHeight, doc) {
        const pdfResolution = 96;
        const titleSize = Math.round(2 * (pageHeight + 145) * 0.05) / 2;
        doc.setFont('Times', 'bold');
        const width = doc.getTextWidth(title);
        const titleWidth = doc.getStringUnitWidth(title) * titleSize / doc.internal.scaleFactor;
        const titleTailleMinimale = Math.round(2 * (pageHeight + 150) * 0.037) / 2;
        let titleFontSize = 0;
        let titleMarginLeft;
        if (titleWidth >= (pageWidth)) {
            titleMarginLeft = 0;
            titleFontSize = Math.round(((pageWidth / title.length) * pdfResolution) / 25.4);
            // If the formula to find the font size gives below the defined minimum size
            if (titleFontSize < titleTailleMinimale) {
                titleFontSize = titleTailleMinimale;
            }
        }
        else {
            titleMarginLeft = (pageWidth - titleWidth) / 2;
            titleFontSize = titleSize;
        }
        return [titleFontSize, titleMarginLeft];
    }
    getSubTitleSize(subtitle, pageWidth, pageHeight, doc) {
        const subtitleSize = 0.7 * Math.round(2 * (pageHeight + 145) * 0.05) / 2; // 70% of the title's font size
        doc.setFont('Times', 'bold');
        const subtitleWidth = doc.getStringUnitWidth(subtitle) * subtitleSize / doc.internal.scaleFactor;
        let subtitleMarginLeft;
        if (subtitleWidth >= (pageWidth)) {
            subtitleMarginLeft = 0;
        }
        else {
            subtitleMarginLeft = (pageWidth - subtitleWidth) / 2;
        }
        return subtitleMarginLeft;
    }
    addTitle(doc, title, titleFontSize, titleMarginLeft, titleMarginTop) {
        doc.setFont('Times', 'bold');
        doc.setFontSize(titleFontSize);
        doc.text(title, titleMarginLeft, titleMarginTop);
    }
    addSubTitle(doc, subtitle, subtitleFontSize, subtitleMarginLeft, subtitleMarginTop) {
        doc.setFont('Times', 'bold');
        doc.setFontSize(subtitleFontSize);
        doc.text(subtitle, subtitleMarginLeft, subtitleMarginTop);
    }
    /**
     * Add comment to the document
     * * @param  doc - pdf document
     * * @param  comment - Comment to add in the document
     * * @param  size - Size of the document
     */
    addComment(doc, comment) {
        const commentSize = 16;
        const commentMarginLeft = 20;
        const marginBottom = 5;
        const heightPixels = doc.internal.pageSize.height - marginBottom;
        doc.setFont('courier');
        doc.setFontSize(commentSize);
        doc.text(comment, commentMarginLeft, heightPixels);
    }
    /**
     * Add projection and/or scale to the document
     * @param  doc - pdf document
     * @param  map - Map of the app
     * @param  dpi - DPI resolution of the document
     * @param  projection - Bool to indicate if projection need to be added
     * @param  scale - Bool to indicate if scale need to be added
     */
    addProjScale(doc, map, dpi, projection, scale) {
        const translate = this.languageService.translate;
        const projScaleSize = 16;
        const projScaleMarginLeft = 20;
        const marginBottom = 15;
        const heightPixels = doc.internal.pageSize.height - marginBottom;
        let textProjScale = '';
        if (projection === true) {
            const projText = translate.instant('igo.geo.printForm.projection');
            textProjScale += projText + ': ' + map.projection;
        }
        if (scale === true) {
            if (projection === true) {
                textProjScale += '   ';
            }
            const scaleText = translate.instant('igo.geo.printForm.scale');
            const mapScale = map.viewController.getScale(dpi);
            textProjScale += scaleText + ': ~ 1 / ' + formatScale(mapScale);
        }
        doc.setFont('courier');
        doc.setFontSize(projScaleSize);
        doc.text(textProjScale, projScaleMarginLeft, heightPixels);
    }
    /**
     * Add the legend to the document
     * @param  doc - Pdf document where legend will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    addLegend(doc, map, margins, resolution) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get html code for the legend
            const width = doc.internal.pageSize.width;
            const html = yield this.getLayersLegendHtml(map, width, resolution).toPromise();
            // If no legend, save the map directly
            if (html === '') {
                yield this.saveDoc(doc);
                return true;
            }
            // Create div to contain html code for legend
            const div = window.document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = '0';
            // Add html code to convert in the new window
            window.document.body.appendChild(div);
            div.innerHTML = html;
            yield this.timeout(1);
            const canvas = yield html2canvas(div, { useCORS: true }).catch((e) => {
                console.log(e);
            });
            if (canvas) {
                const pourcentageReduction = 0.85;
                const imageSize = [pourcentageReduction * (25.4 * canvas.width) / resolution, pourcentageReduction
                        * (25.4 * canvas.height) / resolution];
                let imgData;
                doc.addPage();
                imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 10, 10, imageSize[0], imageSize[1]);
                div.parentNode.removeChild(div); // remove temp div (IE style)
            }
            yield this.saveDoc(doc);
        });
    }
    /**
     * Add the legend to the document
     * @param  doc - Pdf document where legend will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    addLegendSamePage(doc, map, margins, resolution, legendPosition) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get html code for the legend
            const width = doc.internal.pageSize.width;
            const html = yield this.getLayersLegendHtml(map, width, resolution).toPromise();
            // If no legend, save the map directly
            if (html === '') {
                yield this.saveDoc(doc);
                return true;
            }
            // Create div to contain html code for legend
            const div = window.document.createElement('div');
            div.style.position = 'absolute';
            div.style.top = '0';
            // Add html code to convert in the new window
            window.document.body.appendChild(div);
            div.innerHTML = html;
            yield this.timeout(1);
            const canvas = yield html2canvas(div, { useCORS: true }).catch((e) => {
                console.log(e);
            });
            let marginsLegend;
            if (canvas) {
                const pourcentageReduction = 0.85;
                const imageSize = [pourcentageReduction * (25.4 * canvas.width) / resolution,
                    pourcentageReduction * (25.4 * canvas.height) / resolution];
                // Move the legend to the correct position on the page
                if (legendPosition === 'bottomright') {
                    marginsLegend = [doc.internal.pageSize.height - margins[2] - imageSize[1], margins[1],
                        margins[2], doc.internal.pageSize.width - margins[1] - imageSize[0]];
                }
                else if (legendPosition === 'topright') {
                    marginsLegend = [margins[0], margins[1], doc.internal.pageSize.height - margins[0] - imageSize[1],
                        doc.internal.pageSize.width - margins[1] - imageSize[0]];
                }
                else if (legendPosition === 'bottomleft') {
                    // When the legend is in the bottom left, raise the legend slightly upward so that attributions are visible
                    marginsLegend = [doc.internal.pageSize.height - margins[2] - imageSize[1] - 15,
                        doc.internal.pageSize.width - margins[3] - imageSize[0], margins[2] + 15, margins[3]];
                }
                else if (legendPosition === 'topleft') {
                    marginsLegend = [margins[0], doc.internal.pageSize.width - margins[3] - imageSize[0],
                        doc.internal.pageSize.height - margins[0] - imageSize[1], margins[3]];
                }
                this.addCanvas(doc, canvas, marginsLegend); // this adds the legend
                div.parentNode.removeChild(div); // remove temp div (IE style)
                yield this.saveDoc(doc);
            }
        });
    }
    /**
     * Add scale and attributions on the map on the document
     * @param  doc - Pdf document where legend will be added
     * @param  map - Map of the app
     * @param  margins - Page margins
     */
    addScale(doc, map, margins) {
        return __awaiter(this, void 0, void 0, function* () {
            const mapSize = map.ol.getSize();
            const extent = map.ol.getView().calculateExtent(mapSize);
            // Get the scale and attribution
            // we use cloneNode to modify the nodes to print without modifying it on the page, using deep:true to get children
            let canvasOverlayHTML;
            const mapOverlayHTML = map.ol.getOverlayContainerStopEvent();
            // Remove the UI buttons from the nodes
            const OverlayHTMLButtons = mapOverlayHTML.getElementsByTagName('button');
            const OverlayHTMLButtonsarr = Array.from(OverlayHTMLButtons);
            for (const OverlayHTMLButton of OverlayHTMLButtonsarr) {
                OverlayHTMLButton.setAttribute('data-html2canvas-ignore', 'true');
            }
            // Change the styles of hyperlink in the printed version
            // Transform the Overlay into a canvas
            // scale is necessary to make it in google chrome
            // background as null because otherwise it is white and cover the map
            // allowtaint is to allow rendering images in the attributions
            // useCORS: true pour permettre de renderer les images (ne marche pas en local)
            const canvas = yield html2canvas(mapOverlayHTML, {
                scale: 1,
                backgroundColor: null,
                allowTaint: true,
                useCORS: true,
            }).then(e => {
                canvasOverlayHTML = e;
            });
            this.addCanvas(doc, canvasOverlayHTML, margins); // this adds scales and attributions
        });
    }
    defineNbFileToProcess(nbFileToProcess) {
        this.nbFileToProcess = nbFileToProcess;
    }
    timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    addCanvas(doc, canvas, margins) {
        let image;
        if (canvas) {
            image = canvas.toDataURL('image/png');
        }
        if (image !== undefined) {
            const imageSize = this.getImageSizeToFitPdf(doc, canvas, margins);
            doc.addImage(image, 'PNG', margins[3], margins[0], imageSize[0], imageSize[1]);
            doc.rect(margins[3], margins[0], imageSize[0], imageSize[1]);
        }
    }
    // TODO fix printing with image resolution
    addMap(doc, map, resolution, size, margins) {
        const status$ = new Subject();
        const mapSize = map.ol.getSize();
        const extent = map.ol.getView().calculateExtent(mapSize);
        const widthPixels = Math.round((size[0] * resolution) / 25.4);
        const heightPixels = Math.round((size[1] * resolution) / 25.4);
        let timeout;
        map.ol.once('rendercomplete', (event) => {
            const canvases = event.target.getViewport().getElementsByTagName('canvas');
            const mapStatus$$ = map.status$.subscribe((mapStatus) => {
                clearTimeout(timeout);
                if (mapStatus !== SubjectStatus.Done) {
                    return;
                }
                mapStatus$$.unsubscribe();
                let status = SubjectStatus.Done;
                try {
                    for (const canvas of canvases) {
                        if (canvas.width !== 0) {
                            this.addCanvas(doc, canvas, margins);
                        }
                    }
                }
                catch (err) {
                    status = SubjectStatus.Error;
                    this.messageService.error(this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageBody'), this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageHeader'));
                }
                this.renderMap(map, mapSize, extent);
                status$.next(status);
            });
            // If no loading as started after 200ms, then probably no loading
            // is required.
            timeout = window.setTimeout(() => {
                mapStatus$$.unsubscribe();
                let status = SubjectStatus.Done;
                try {
                    for (const canvas of canvases) {
                        if (canvas.width !== 0) {
                            this.addCanvas(doc, canvas, margins);
                        }
                    }
                }
                catch (err) {
                    status = SubjectStatus.Error;
                    this.messageService.error(this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageBody'), this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageHeader'));
                }
                this.renderMap(map, mapSize, extent);
                status$.next(status);
            }, 200);
        });
        this.renderMap(map, [widthPixels, heightPixels], extent);
        return status$;
    }
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
    downloadMapImage(map, resolution, format = 'png', projection = false, scale = false, legend = false, title = '', subtitle = '', comment = '', doZipFile = true) {
        const status$ = new Subject();
        // const resolution = map.ol.getView().getResolution();
        this.activityId = this.activityService.register();
        const translate = this.languageService.translate;
        map.ol.once('rendercomplete', (event) => {
            format = format.toLowerCase();
            const oldCanvas = event.target
                .getViewport()
                .getElementsByTagName('canvas')[0];
            const newCanvas = document.createElement('canvas');
            const newContext = newCanvas.getContext('2d');
            // Postion in height to set the canvas in new canvas
            let positionHCanvas = 0;
            // Position in width to set the Proj/Scale in new canvas
            let positionWProjScale = 10;
            // Get height/width of map canvas
            const width = oldCanvas.width;
            let height = oldCanvas.height;
            // Set Font to calculate comment width
            newContext.font = '20px Calibri';
            const commentWidth = newContext.measureText(comment).width;
            // Add height for title if defined
            height = title !== '' ? height + 30 : height;
            // Add height for title if defined
            height = subtitle !== '' ? height + 30 : height;
            // Add height for projection or scale (same line) if defined
            height = projection !== false || scale !== false ? height + 30 : height;
            const positionHProjScale = height - 10;
            // Define number of line depending of the comment length
            const commentNbLine = Math.ceil(commentWidth / width);
            // Add height for multiline comment if defined
            height = comment !== '' ? height + commentNbLine * 30 : height;
            let positionHComment = height - commentNbLine * 20 + 5;
            // Set the new canvas with the new calculated size
            newCanvas.width = width;
            newCanvas.height = height;
            // Patch Jpeg default black background to white
            if (format === 'jpeg') {
                newContext.fillStyle = '#ffffff';
                newContext.fillRect(0, 0, width, height);
                newContext.fillStyle = '#000000';
            }
            // If a title need to be added to canvas
            if (title !== '') {
                // Set font for title
                // Adjust according to title length
                newContext.font = '26px Calibri';
                positionHCanvas = 30;
                newContext.textAlign = 'center';
                newContext.fillText(title, width / 2, 20, width * 0.9);
            }
            if (subtitle !== '') {
                // Set font for subtitle
                // Adjust according to title length
                newContext.font = '26px Calibri';
                positionHCanvas = 60;
                newContext.textAlign = 'center';
                newContext.fillText(subtitle, width / 2, 50, width * 0.9);
            }
            // Set font for next section
            newContext.font = '20px Calibri';
            // If projection need to be added to canvas
            if (projection !== false) {
                const projText = translate.instant('igo.geo.printForm.projection');
                newContext.textAlign = 'start';
                newContext.fillText(projText + ': ' + map.projection, positionWProjScale, positionHProjScale);
                positionWProjScale += 200; // Width position change for scale position
            }
            // If scale need to be added to canvas
            if (scale !== false) {
                const scaleText = translate.instant('igo.geo.printForm.scale');
                const mapScale = map.viewController.getScale(resolution);
                newContext.textAlign = 'start';
                newContext.fillText(scaleText + ': ~ 1 / ' + formatScale(mapScale), positionWProjScale, positionHProjScale);
            }
            // If a comment need to be added to canvas
            if (comment !== '') {
                newContext.textAlign = 'center';
                // If only one line, no need to multiline the comment
                if (commentNbLine === 1) {
                    newContext.fillText(comment, width / 2, positionHComment);
                }
                else {
                    // Separate the setenses to be approx. the same length
                    const nbCommentChar = comment.length;
                    const CommentLengthToCut = Math.floor(nbCommentChar / commentNbLine);
                    let commentCurrentLine = '';
                    let positionFirstCutChar = 0;
                    let positionLastBlank;
                    // Loop for the number of line calculated
                    for (let i = 0; i < commentNbLine; i++) {
                        // For all line except last
                        if (commentNbLine - 1 > i) {
                            // Get comment current line to find the right place tu cut comment
                            commentCurrentLine = comment.substr(positionFirstCutChar, CommentLengthToCut);
                            // Cut the setence at blank
                            positionLastBlank = commentCurrentLine.lastIndexOf(' ');
                            newContext.fillText(commentCurrentLine.substr(0, positionLastBlank), width / 2, positionHComment);
                            positionFirstCutChar += positionLastBlank;
                            // Go to next line for insertion
                            positionHComment += 20;
                        }
                        else {
                            // Don't cut last part
                            newContext.fillText(comment.substr(positionFirstCutChar), width / 2, positionHComment);
                        }
                    }
                }
            }
            // Add map to new canvas
            newContext.drawImage(oldCanvas, 0, positionHCanvas);
            let status = SubjectStatus.Done;
            try {
                // Save the canvas as file
                if (!doZipFile) {
                    this.saveCanvasImageAsFile(newCanvas, 'map', format);
                }
                else if (format.toLowerCase() === 'tiff') {
                    // Add the canvas to zip
                    this.generateCanvaFileToZip(newCanvas, 'map' + map.projection.replace(':', '_') + '.' + format);
                }
                else {
                    // Add the canvas to zip
                    this.generateCanvaFileToZip(newCanvas, 'map' + '.' + format);
                }
            }
            catch (err) {
                status = SubjectStatus.Error;
            }
            status$.next(status);
            if (format.toLowerCase() === 'tiff') {
                const tiwContent = this.getWorldFileInformation(map);
                const blob = new Blob([tiwContent], {
                    type: 'text/plain;charset=utf-8'
                });
                if (!doZipFile) {
                    // saveAs automaticly replace ':' for '_'
                    saveAs(blob, 'map' + map.projection + '.tfw');
                    this.saveFileProcessing();
                }
                else {
                    // Add the canvas to zip
                    this.addFileToZip('map' + map.projection.replace(':', '_') + '.tfw', blob);
                }
            }
        });
        map.ol.renderSync();
        return status$;
    }
    renderMap(map, size, extent) {
        map.ol.updateSize();
        map.ol.renderSync();
    }
    /**
     * Save document
     * @param  doc - Document to save
     */
    saveDoc(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            yield doc.save('map.pdf', { returnPromise: true });
        });
    }
    /**
     * Calculate the best Image size to fit in pdf
     * @param doc - Pdf Document
     * @param canvas - Canvas of image
     * @param margins - Page margins
     */
    getImageSizeToFitPdf(doc, canvas, margins) {
        // Define variable to calculate best size to fit in one page
        const pageHeight = doc.internal.pageSize.getHeight() - (margins[0] + margins[2]);
        const pageWidth = doc.internal.pageSize.getWidth() - (margins[1] + margins[3]);
        const canHeight = canvas.height;
        const canWidth = canvas.width;
        const heightRatio = canHeight / pageHeight;
        const widthRatio = canWidth / pageWidth;
        const maxRatio = heightRatio > widthRatio ? heightRatio : widthRatio;
        const imgHeigh = maxRatio > 1 ? canHeight / maxRatio : canHeight;
        const imgWidth = maxRatio > 1 ? canWidth / maxRatio : canWidth;
        return [imgWidth, imgHeigh];
    }
    /**
     * Get a world file information for tiff
     * @param  map - Map of the app
     */
    getWorldFileInformation(map) {
        const currentResolution = map.viewController.getResolution();
        const currentExtent = map.viewController.getExtent(); // Return [minx, miny, maxx, maxy]
        return [
            currentResolution,
            0,
            0,
            -currentResolution,
            currentExtent[0] + currentResolution / 0.5,
            currentExtent[3] - currentResolution / 0.5
        ].join('\n');
    }
    /**
     * Save canvas image as file
     * @param canvas - Canvas to save
     * @param name - Name of the file
     * @param format - file format
     */
    saveCanvasImageAsFile(canvas, name, format) {
        const blobFormat = 'image/' + format;
        const that = this;
        try {
            canvas.toDataURL(); // Just to make the catch trigger wihtout toBlob Error throw not catched
            // If navigator is Internet Explorer
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(canvas.msToBlob(), name + '.' + format);
                this.saveFileProcessing();
            }
            else {
                canvas.toBlob((blob) => {
                    // download image
                    saveAs(blob, name + '.' + format);
                    that.saveFileProcessing();
                }, blobFormat);
            }
        }
        catch (err) {
            this.messageService.error(this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageBody'), this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageHeader'));
        }
    }
    /**
     * Add file to a zip
     * @param canvas - File to add to the zip
     * @param  name -Name of the fileoverview
     */
    generateCanvaFileToZip(canvas, name) {
        const blobFormat = 'image/' + 'jpeg';
        const that = this;
        if (!this.hasOwnProperty('zipFile') ||
            typeof this.zipFile === 'undefined') {
            this.zipFile = new JSZip();
        }
        try {
            canvas.toDataURL(); // Just to make the catch trigger wihtout toBlob Error throw not catched
            if (navigator.msSaveBlob) {
                this.addFileToZip(name, canvas.msToBlob());
            }
            else {
                canvas.toBlob((blob) => {
                    that.addFileToZip(name, blob);
                }, blobFormat);
            }
        }
        catch (err) {
            this.messageService.error(this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageBody'), this.languageService.translate.instant('igo.geo.printForm.corsErrorMessageHeader'));
        }
    }
    /**
     * Add file to zip, if all file are zipped, download
     * @param name - Name of the files
     * @param blob - Contain of file
     */
    addFileToZip(name, blob) {
        // add file to zip
        this.zipFile.file(name, blob);
        this.nbFileToProcess--;
        // If all files are proccessed
        if (this.nbFileToProcess === 0) {
            // Download zip file
            this.getZipFile();
            // Stop loading
            this.activityService.unregister(this.activityId);
        }
    }
    saveFileProcessing() {
        this.nbFileToProcess--;
        // If all files are proccessed
        if (this.nbFileToProcess === 0) {
            // Stop loading
            this.activityService.unregister(this.activityId);
        }
    }
    /**
     * Get the zipped file
     * @return Retun a zip file
     */
    getZipFile() {
        const that = this;
        this.zipFile.generateAsync({ type: 'blob' }).then((blob) => {
            // 1) generate the zip file
            saveAs(blob, 'map.zip');
            delete that.zipFile;
        });
    }
}
PrintService.ɵfac = function PrintService_Factory(t) { return new (t || PrintService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i2.ActivityService), i0.ɵɵinject(i2.LanguageService)); };
PrintService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PrintService, factory: PrintService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrintService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.MessageService }, { type: i2.ActivityService }, { type: i2.LanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3ByaW50L3NoYXJlZC9wcmludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBT2xFLE1BQU0sT0FBTyxZQUFZO0lBSXZCLFlBQ1UsSUFBZ0IsRUFDaEIsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsZUFBZ0M7UUFIaEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN2QyxDQUFDO0lBRUosS0FBSyxDQUFDLEdBQVcsRUFBRSxPQUFxQjtRQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlC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LE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2Qiw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLENBQUMsRUFBRTtZQUM5QixvQkFBb0I7WUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLGVBQWU7WUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2Qiw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLENBQUMsRUFBRTtZQUM5QixlQUFlO1lBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFVBQVU7UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekQsMkJBQTJCO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7d0VBbDlCVSxZQUFZO2tFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07dUZBRVAsWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIGFzIHJ4TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCBqc3BkZiBmcm9tICdqc3BkZic7XG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xuaW1wb3J0ICogYXMgSlNaaXAgZnJvbSAnanN6aXAnO1xuXG5pbXBvcnQgeyBTdWJqZWN0U3RhdHVzIH0gZnJvbSAnQGlnbzIvdXRpbHMnO1xuaW1wb3J0IHsgU2VjdXJlSW1hZ2VQaXBlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBBY3Rpdml0eVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcCc7XG5pbXBvcnQgeyBmb3JtYXRTY2FsZSB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwLnV0aWxzJztcbmltcG9ydCB7IExlZ2VuZE1hcFZpZXdPcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5ZXIvc2hhcmVkL2xheWVycy9sYXllci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0TGF5ZXJzTGVnZW5kcyB9IGZyb20gJy4uLy4uL2xheWVyL3V0aWxzL291dHB1dExlZ2VuZCc7XG5cbmltcG9ydCB7IFByaW50T3B0aW9ucyB9IGZyb20gJy4vcHJpbnQuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRTZXJ2aWNlIHtcbiAgemlwRmlsZTogSlNaaXA7XG4gIG5iRmlsZVRvUHJvY2VzczogbnVtYmVyO1xuICBhY3Rpdml0eUlkOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2aXR5U2VydmljZTogQWN0aXZpdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaW50KG1hcDogSWdvTWFwLCBvcHRpb25zOiBQcmludE9wdGlvbnMpOiBTdWJqZWN0PGFueT4ge1xuICAgIGNvbnN0IHN0YXR1cyQgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3QgcGFwZXJGb3JtYXQ6IHN0cmluZyA9IG9wdGlvbnMucGFwZXJGb3JtYXQ7XG4gICAgY29uc3QgcmVzb2x1dGlvbiA9ICtvcHRpb25zLnJlc29sdXRpb247IC8vIERlZmF1bHQgaXMgOTZcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IG9wdGlvbnMub3JpZW50YXRpb247XG4gICAgY29uc3QgbGVnZW5kUG9zdGlvbiA9IG9wdGlvbnMubGVnZW5kUG9zaXRpb247XG5cbiAgICB0aGlzLmFjdGl2aXR5SWQgPSB0aGlzLmFjdGl2aXR5U2VydmljZS5yZWdpc3RlcigpO1xuICAgIGNvbnN0IGRvYyA9IG5ldyBqc3BkZih7XG4gICAgICBvcmllbnRhdGlvbixcbiAgICAgIGZvcm1hdDogcGFwZXJGb3JtYXQudG9Mb3dlckNhc2UoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGltZW5zaW9ucyA9IFtcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCxcbiAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHRcbiAgICBdO1xuXG4gICAgY29uc3QgbWFyZ2lucyA9IFsxMCwgMTAsIDEwLCAxMF07XG4gICAgY29uc3Qgd2lkdGggPSBkaW1lbnNpb25zWzBdIC0gbWFyZ2luc1szXSAtIG1hcmdpbnNbMV07XG4gICAgY29uc3QgaGVpZ2h0ID0gZGltZW5zaW9uc1sxXSAtIG1hcmdpbnNbMF0gLSBtYXJnaW5zWzJdO1xuICAgIGNvbnN0IHNpemUgPSBbd2lkdGgsIGhlaWdodF07XG4gICAgbGV0IHRpdGxlU2l6ZVJlc3VsdHMgPSBbMCwgMF07XG5cbiAgICBpZiAob3B0aW9ucy50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aXRsZVNpemVSZXN1bHRzID0gdGhpcy5nZXRUaXRsZVNpemUob3B0aW9ucy50aXRsZSwgd2lkdGgsIGhlaWdodCwgZG9jKTsgLy8gcmV0dXJuIDogc2l6ZShwdCkgYW5kIGxlZnQgbWFyZ2luIChtbSlcbiAgICAgIHRoaXMuYWRkVGl0bGUoZG9jLCBvcHRpb25zLnRpdGxlLCB0aXRsZVNpemVSZXN1bHRzWzBdLCBtYXJnaW5zWzNdICsgdGl0bGVTaXplUmVzdWx0c1sxXSwgdGl0bGVTaXplUmVzdWx0c1swXSAqICgyNS40IC8gNzIpKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3VidGl0bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHN1YnRpdGxlU2l6ZVJlc3VsdCA9IDA7XG4gICAgICBjb25zdCB0aXRsZUggPSB0aXRsZVNpemVSZXN1bHRzWzBdO1xuICAgICAgc3VidGl0bGVTaXplUmVzdWx0ID0gdGhpcy5nZXRTdWJUaXRsZVNpemUob3B0aW9ucy5zdWJ0aXRsZSwgd2lkdGgsIGhlaWdodCwgZG9jKTsgLy8gcmV0dXJuIDogc2l6ZShwdCkgYW5kIGxlZnQgbWFyZ2luIChtbSlcbiAgICAgIHRoaXMuYWRkU3ViVGl0bGUoZG9jLCBvcHRpb25zLnN1YnRpdGxlLCB0aXRsZUggKiAwLjcsIG1hcmdpbnNbM10gKyBzdWJ0aXRsZVNpemVSZXN1bHQsIHRpdGxlSCAqIDEuNyAqICgyNS40IC8gNzIpKTtcbiAgICAgIG1hcmdpbnNbMF0gPSBtYXJnaW5zWzBdICsgdGl0bGVTaXplUmVzdWx0c1swXSAqIDAuNyAqICgyNS40IC8gNzIpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zaG93UHJvamVjdGlvbiA9PT0gdHJ1ZSB8fCBvcHRpb25zLnNob3dTY2FsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRQcm9qU2NhbGUoXG4gICAgICAgIGRvYyxcbiAgICAgICAgbWFwLFxuICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICBvcHRpb25zLnNob3dQcm9qZWN0aW9uLFxuICAgICAgICBvcHRpb25zLnNob3dTY2FsZVxuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb21tZW50ICE9PSAnJykge1xuICAgICAgdGhpcy5hZGRDb21tZW50KGRvYywgb3B0aW9ucy5jb21tZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE1hcChkb2MsIG1hcCwgcmVzb2x1dGlvbiwgc2l6ZSwgbWFyZ2lucykuc3Vic2NyaWJlKFxuICAgICAgYXN5bmMgKHN0YXR1czogU3ViamVjdFN0YXR1cykgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBTdWJqZWN0U3RhdHVzLkRvbmUpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFkZFNjYWxlKGRvYywgbWFwLCBtYXJnaW5zKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZU1lYXN1cmVMYXllcihkb2MsIG1hcCwgbWFyZ2lucyk7XG4gICAgICAgICAgaWYgKG9wdGlvbnMubGVnZW5kUG9zaXRpb24gIT09ICdub25lJykge1xuICAgICAgICAgICAgaWYgKFsndG9wbGVmdCcsICd0b3ByaWdodCcsICdib3R0b21sZWZ0JywgJ2JvdHRvbXJpZ2h0J10uaW5kZXhPZihvcHRpb25zLmxlZ2VuZFBvc2l0aW9uKSA+IC0xICkge1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFkZExlZ2VuZFNhbWVQYWdlKGRvYywgbWFwLCBtYXJnaW5zLCByZXNvbHV0aW9uLCBvcHRpb25zLmxlZ2VuZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5sZWdlbmRQb3NpdGlvbiA9PT0gJ25ld3BhZ2UnKSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkTGVnZW5kKGRvYywgbWFwLCBtYXJnaW5zLCByZXNvbHV0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zYXZlRG9jKGRvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU3ViamVjdFN0YXR1cy5Eb25lIHx8IHN0YXR1cyA9PT0gU3ViamVjdFN0YXR1cy5FcnJvcikge1xuICAgICAgICAgIHRoaXMuYWN0aXZpdHlTZXJ2aWNlLnVucmVnaXN0ZXIodGhpcy5hY3Rpdml0eUlkKTtcbiAgICAgICAgICBzdGF0dXMkLm5leHQoU3ViamVjdFN0YXR1cy5Eb25lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gc3RhdHVzJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbWVhc3VyZSBvdmVybGF5IG9uIHRoZSBtYXAgb24gdGhlIGRvY3VtZW50IHdoZW4gdGhlIG1lYXN1cmUgbGF5ZXIgaXMgcHJlc2VudFxuICAgKiBAcGFyYW0gIGRvYyAtIFBkZiBkb2N1bWVudCB3aGVyZSBtZWFzdXJlIHRvb2x0aXAgd2lsbCBiZSBhZGRlZFxuICAgKiBAcGFyYW0gIG1hcCAtIE1hcCBvZiB0aGUgYXBwXG4gICAqIEBwYXJhbSAgbWFyZ2lucyAtIFBhZ2UgbWFyZ2luc1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVNZWFzdXJlTGF5ZXIoXG4gICAgZG9jOiBqc3BkZixcbiAgICBtYXA6IElnb01hcCxcbiAgICBtYXJnaW5zOiBBcnJheTxudW1iZXI+XG4gICkge1xuICAgIGlmIChtYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIudmlzaWJsZSAmJiBsYXllci5pZC5zdGFydHNXaXRoKCdpZ28tbWVhc3VyZXMtJykpKSB7XG4gICAgICBsZXQgY2FudmFzT3ZlcmxheUhUTUxNZWFzdXJlcztcbiAgICAgIGNvbnN0IG1hcE92ZXJsYXlNZWFzdXJlc0hUTUwgPSBtYXAub2wuZ2V0T3ZlcmxheUNvbnRhaW5lcigpO1xuICAgICAgYXdhaXQgaHRtbDJjYW52YXMobWFwT3ZlcmxheU1lYXN1cmVzSFRNTCwge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICB9KS50aGVuKGUgPT4ge1xuICAgICAgICBjYW52YXNPdmVybGF5SFRNTE1lYXN1cmVzID0gZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hZGRDYW52YXMoZG9jLCBjYW52YXNPdmVybGF5SFRNTE1lYXN1cmVzLCBtYXJnaW5zKTsgLy8gdGhpcyBhZGRzIG1lYXN1cmUgb3ZlcmxheXNcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGh0bWwgY29kZSBmb3IgYWxsIGxheWVycyBsZWdlbmRcbiAgICogQHBhcmFtICBtYXAgSWdvTWFwXG4gICAqIEBwYXJhbSAgd2lkdGggVGhlIHdpZHRoIHRoYXQgdGhlIGxlZ2VuZCBuZWVkIHRvIGJlXG4gICAqIEByZXR1cm4gSHRtbCBjb2RlIGZvciB0aGUgbGVnZW5kXG4gICAqL1xuICBnZXRMYXllcnNMZWdlbmRIdG1sKFxuICAgIG1hcDogSWdvTWFwLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgcmVzb2x1dGlvbjogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGh0bWwgPSAnJztcbiAgICAgIGNvbnN0IGxlZ2VuZHMgPSBnZXRMYXllcnNMZWdlbmRzKFxuICAgICAgICBtYXAubGF5ZXJzLFxuICAgICAgICB7XG4gICAgICAgICAgcmVzb2x1dGlvbjogbWFwLnZpZXdDb250cm9sbGVyLmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICBleHRlbnQ6IG1hcC52aWV3Q29udHJvbGxlci5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwcm9qZWN0aW9uOiBtYXAudmlld0NvbnRyb2xsZXIuZ2V0T2xQcm9qZWN0aW9uKCkuZ2V0Q29kZSgpLFxuICAgICAgICAgIHNjYWxlOiBtYXAudmlld0NvbnRyb2xsZXIuZ2V0U2NhbGUocmVzb2x1dGlvbiksXG4gICAgICAgICAgc2l6ZTogbWFwLm9sLmdldFNpemUoKVxuICAgICAgICB9IGFzIExlZ2VuZE1hcFZpZXdPcHRpb25zXG4gICAgICApO1xuICAgICAgaWYgKGxlZ2VuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoaHRtbCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIERlZmluZSBpbXBvcnRhbnQgc3R5bGUgdG8gYmUgc3VyZSB0aGF0IGFsbCBjb250YWluZXIgaXMgY29udmVydFxuICAgICAgLy8gdG8gaW1hZ2Ugbm90IGp1c3QgdmlzaWJsZSBwYXJ0XG4gICAgICBodG1sICs9ICc8c3R5bGUgbWVkaWE9XCJzY3JlZW5cIiB0eXBlPVwidGV4dC9jc3NcIj4nO1xuICAgICAgaHRtbCArPSAnLmh0bWwyY2FudmFzLWNvbnRhaW5lciB7IHdpZHRoOiAnICsgd2lkdGggKyAnbW0gIWltcG9ydGFudDsgaGVpZ2h0OiAyMDAwcHggIWltcG9ydGFudDsgfSc7XG4gICAgICBodG1sICs9ICd0YWJsZS50YWJsZUxlZ2VuZCB7dGFibGUtbGF5b3V0OiBhdXRvO30nO1xuICAgICAgaHRtbCArPSAnZGl2LnN0eWxlTGVnZW5kIHtwYWRkaW5nLXRvcDogNXB4OyBwYWRkaW5nLXJpZ2h0OjVweDtwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctYm90dG9tOjVweDt9JztcbiAgICAgIGh0bWwgKz0gJzwvc3R5bGU+JztcbiAgICAgIC8vIFRoZSBmb250IHNpemUgd2lsbCBhbHNvIGJlIGxvd2VyZWQgYWZ0ZXJ3YXJkcyAoZ2xvYmFsbHkgYWxvbmcgdGhlIGxlZ2VuZCBzaXplKVxuICAgICAgLy8gdGhpcyBhbGxvd3MgaGF2aW5nIGEgZ29vZCByZWxhdGl2ZSBmb250IHNpemUgaGVyZSBhbmQgdG8ga2VlcCBhanVzdGluZyB0aGUgbGVnZW5kIHNpemVcbiAgICAgIC8vIHdoaWxlIGtlZXBpbmcgZ29vZCByZWxhdGl2ZSBmb250IHNpemVcbiAgICAgIGh0bWwgKz0gJzxmb250IHNpemU9XCIzXCIgZmFjZT1cIlRpbWVzXCIgPic7XG4gICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwic3R5bGVMZWdlbmRcIj4nO1xuICAgICAgaHRtbCArPSAnPHRhYmxlIGNsYXNzPVwidGFibGVMZWdlbmRcIiA+JztcblxuICAgICAgLy8gRm9yIGVhY2ggbGVnZW5kLCBkZWZpbmUgYW4gaHRtbCB0YWJsZSBjZWxsXG4gICAgICBjb25zdCBpbWFnZXMkID0gbGVnZW5kcy5tYXAoKGxlZ2VuZCkgPT5cbiAgICAgICAgdGhpcy5nZXREYXRhSW1hZ2UobGVnZW5kLnVybCkucGlwZShcbiAgICAgICAgICByeE1hcCgoZGF0YUltYWdlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaHRtbEltZyA9ICc8dHI+PHRkPicgKyBsZWdlbmQudGl0bGUudG9VcHBlckNhc2UoKSArICc8L3RkPjwvdHI+JztcbiAgICAgICAgICAgIGh0bWxJbWcgKz0gJzx0cj48dGQ+PGltZyBzcmM9XCInICsgZGF0YUltYWdlICsgJ1wiPjwvdGQ+PC90cj4nO1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxJbWc7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGZvcmtKb2luKGltYWdlcyQpLnN1YnNjcmliZSgoZGF0YUltYWdlcykgPT4ge1xuICAgICAgICBodG1sID0gZGF0YUltYWdlcy5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4gKGFjYyArPSBjdXJyZW50KSwgaHRtbCk7XG4gICAgICAgIGh0bWwgKz0gJzwvdGFibGU+JztcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChodG1sKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YUltYWdlKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBzZWN1cmVJTUcgPSBuZXcgU2VjdXJlSW1hZ2VQaXBlKHRoaXMuaHR0cCk7XG4gICAgcmV0dXJuIHNlY3VyZUlNRy50cmFuc2Zvcm0odXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBsZWdlbmQgaW4gYSBzaW5nbGUgaW1hZ2VcbiAgICogKiBAcGFyYW0gIGZvcm1hdCAtIEltYWdlIGZvcm1hdC4gZGVmYXVsdCB2YWx1ZSB0byBcInBuZ1wiXG4gICAqIEByZXR1cm4gVGhlIGltYWdlIG9mIHRoZSBsZWdlbmRcbiAgICovXG4gIGFzeW5jIGdldExheWVyc0xlZ2VuZEltYWdlKFxuICAgIG1hcCxcbiAgICBmb3JtYXQ6IHN0cmluZyA9ICdwbmcnLFxuICAgIGRvWmlwRmlsZTogYm9vbGVhbixcbiAgICByZXNvbHV0aW9uOiBudW1iZXJcbiAgKSB7XG4gICAgY29uc3Qgc3RhdHVzJCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgLy8gR2V0IGh0bWwgY29kZSBmb3IgdGhlIGxlZ2VuZFxuICAgIGNvbnN0IHdpZHRoID0gMjAwOyAvLyBtaWxpbWV0ZXJzIHVuaXQsIG9yaWdpbmFsbHkgZGVmaW5lIGZvciBkb2N1bWVudCBwZGZcbiAgICBsZXQgaHRtbCA9IGF3YWl0IHRoaXMuZ2V0TGF5ZXJzTGVnZW5kSHRtbChcbiAgICAgIG1hcCxcbiAgICAgIHdpZHRoLFxuICAgICAgcmVzb2x1dGlvblxuICAgICkudG9Qcm9taXNlKCk7XG4gICAgZm9ybWF0ID0gZm9ybWF0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBJZiBubyBsZWdlbmQgc2hvdyBObyBMRUdFTkQgaW4gYW4gaW1hZ2VcbiAgICBpZiAoaHRtbC5sZW5ndGggPT09IDApIHtcbiAgICAgIGh0bWwgPSAnPGZvbnQgc2l6ZT1cIjEyXCIgZmFjZT1cIkNvdXJpZXIgTmV3XCIgPic7XG4gICAgICBodG1sICs9ICc8ZGl2IGFsaWduPVwiY2VudGVyXCI+PGI+Tk8gTEVHRU5EPC9iPjwvZGl2Pic7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBkaXYgdG8gY29udGFpbiBodG1sIGNvZGUgZm9yIGxlZ2VuZFxuICAgIGNvbnN0IGRpdiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRpdi5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICAvLyBBZGQgaHRtbCBjb2RlIHRvIGNvbnZlcnQgaW4gdGhlIG5ldyB3aW5kb3dcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgYXdhaXQgdGhpcy50aW1lb3V0KDEpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGF3YWl0IGh0bWwyY2FudmFzKGRpdiwgeyB1c2VDT1JTOiB0cnVlIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcblxuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGxldCBzdGF0dXMgPSBTdWJqZWN0U3RhdHVzLkRvbmU7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWRvWmlwRmlsZSkge1xuICAgICAgICAgIC8vIFNhdmUgdGhlIGNhbnZhcyBhcyBmaWxlXG4gICAgICAgICAgdGhpcy5zYXZlQ2FudmFzSW1hZ2VBc0ZpbGUoY2FudmFzLCAnbGVnZW5kSW1hZ2UnLCBmb3JtYXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFkZCB0aGUgY2FudmFzIHRvIHppcFxuICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYW52YUZpbGVUb1ppcChjYW52YXMsICdsZWdlbmRJbWFnZScgKyAnLicgKyBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7IC8vIHJlbW92ZSB0ZW1wIGRpdiAoSUUpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc3RhdHVzID0gU3ViamVjdFN0YXR1cy5FcnJvcjtcbiAgICAgIH1cbiAgICAgIHN0YXR1cyQubmV4dChzdGF0dXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXMkO1xuICB9XG5cbiAgZ2V0VGl0bGVTaXplKHRpdGxlOiBzdHJpbmcsIHBhZ2VXaWR0aDogbnVtYmVyLCBwYWdlSGVpZ2h0OiBudW1iZXIsIGRvYzoganNwZGYpIHtcbiAgICBjb25zdCBwZGZSZXNvbHV0aW9uID0gOTY7XG4gICAgY29uc3QgdGl0bGVTaXplID0gTWF0aC5yb3VuZCgyICogKHBhZ2VIZWlnaHQgKyAxNDUpICogMC4wNSkgLyAyO1xuICAgIGRvYy5zZXRGb250KCdUaW1lcycsICdib2xkJyk7XG4gICAgY29uc3Qgd2lkdGggPSBkb2MuZ2V0VGV4dFdpZHRoKHRpdGxlKTtcblxuICAgIGNvbnN0IHRpdGxlV2lkdGggPSBkb2MuZ2V0U3RyaW5nVW5pdFdpZHRoKHRpdGxlKSAqIHRpdGxlU2l6ZSAvIGRvYy5pbnRlcm5hbC5zY2FsZUZhY3RvcjtcbiAgICBjb25zdCB0aXRsZVRhaWxsZU1pbmltYWxlID0gTWF0aC5yb3VuZCggMiAqIChwYWdlSGVpZ2h0ICsgMTUwICkgKiAwLjAzNykgLyAyO1xuICAgIGxldCB0aXRsZUZvbnRTaXplID0gMDtcblxuICAgIGxldCB0aXRsZU1hcmdpbkxlZnQ7XG4gICAgaWYgKHRpdGxlV2lkdGggPj0gKHBhZ2VXaWR0aCkpIHtcbiAgICAgIHRpdGxlTWFyZ2luTGVmdCA9IDA7XG4gICAgICB0aXRsZUZvbnRTaXplID0gTWF0aC5yb3VuZCgoKHBhZ2VXaWR0aCAvIHRpdGxlLmxlbmd0aCkgKiBwZGZSZXNvbHV0aW9uKSAvIDI1LjQpO1xuICAgICAgLy8gSWYgdGhlIGZvcm11bGEgdG8gZmluZCB0aGUgZm9udCBzaXplIGdpdmVzIGJlbG93IHRoZSBkZWZpbmVkIG1pbmltdW0gc2l6ZVxuICAgICAgaWYgKHRpdGxlRm9udFNpemUgPCB0aXRsZVRhaWxsZU1pbmltYWxlKSB7XG4gICAgICAgIHRpdGxlRm9udFNpemUgPSB0aXRsZVRhaWxsZU1pbmltYWxlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZU1hcmdpbkxlZnQgPSAocGFnZVdpZHRoIC0gdGl0bGVXaWR0aCkgLyAyIDtcbiAgICAgIHRpdGxlRm9udFNpemUgPSB0aXRsZVNpemU7XG4gICAgfVxuICAgIHJldHVybiBbdGl0bGVGb250U2l6ZSwgdGl0bGVNYXJnaW5MZWZ0XTtcbiAgfVxuXG4gIGdldFN1YlRpdGxlU2l6ZShzdWJ0aXRsZTogc3RyaW5nLCBwYWdlV2lkdGg6IG51bWJlciwgcGFnZUhlaWdodDogbnVtYmVyLCBkb2M6IGpzcGRmKSB7XG4gICAgY29uc3Qgc3VidGl0bGVTaXplID0gMC43ICogTWF0aC5yb3VuZCgyICogKHBhZ2VIZWlnaHQgKyAxNDUpICogMC4wNSkgLyAyOyAvLyA3MCUgb2YgdGhlIHRpdGxlJ3MgZm9udCBzaXplXG5cbiAgICBkb2Muc2V0Rm9udCgnVGltZXMnLCAnYm9sZCcpO1xuXG4gICAgY29uc3Qgc3VidGl0bGVXaWR0aCA9IGRvYy5nZXRTdHJpbmdVbml0V2lkdGgoc3VidGl0bGUpICogc3VidGl0bGVTaXplIC8gZG9jLmludGVybmFsLnNjYWxlRmFjdG9yO1xuXG4gICAgbGV0IHN1YnRpdGxlTWFyZ2luTGVmdDtcbiAgICBpZiAoc3VidGl0bGVXaWR0aCA+PSAocGFnZVdpZHRoKSkge1xuICAgICAgc3VidGl0bGVNYXJnaW5MZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VidGl0bGVNYXJnaW5MZWZ0ID0gKHBhZ2VXaWR0aCAtIHN1YnRpdGxlV2lkdGgpIC8gMiA7XG4gICAgfVxuICAgIHJldHVybiBzdWJ0aXRsZU1hcmdpbkxlZnQ7XG4gIH1cblxuICBwcml2YXRlIGFkZFRpdGxlKGRvYzoganNwZGYsIHRpdGxlOiBzdHJpbmcsIHRpdGxlRm9udFNpemU6IG51bWJlciwgdGl0bGVNYXJnaW5MZWZ0OiBudW1iZXIsIHRpdGxlTWFyZ2luVG9wOiBudW1iZXIpIHtcbiAgICBkb2Muc2V0Rm9udCgnVGltZXMnLCAnYm9sZCcpO1xuICAgIGRvYy5zZXRGb250U2l6ZSh0aXRsZUZvbnRTaXplKTtcbiAgICBkb2MudGV4dCh0aXRsZSwgdGl0bGVNYXJnaW5MZWZ0LCB0aXRsZU1hcmdpblRvcCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN1YlRpdGxlKGRvYzoganNwZGYsIHN1YnRpdGxlOiBzdHJpbmcsIHN1YnRpdGxlRm9udFNpemU6IG51bWJlciwgc3VidGl0bGVNYXJnaW5MZWZ0OiBudW1iZXIsIHN1YnRpdGxlTWFyZ2luVG9wOiBudW1iZXIpIHtcbiAgICBkb2Muc2V0Rm9udCgnVGltZXMnLCAnYm9sZCcpO1xuICAgIGRvYy5zZXRGb250U2l6ZShzdWJ0aXRsZUZvbnRTaXplKTtcbiAgICBkb2MudGV4dChzdWJ0aXRsZSwgc3VidGl0bGVNYXJnaW5MZWZ0LCBzdWJ0aXRsZU1hcmdpblRvcCk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBjb21tZW50IHRvIHRoZSBkb2N1bWVudFxuICAgKiAqIEBwYXJhbSAgZG9jIC0gcGRmIGRvY3VtZW50XG4gICAqICogQHBhcmFtICBjb21tZW50IC0gQ29tbWVudCB0byBhZGQgaW4gdGhlIGRvY3VtZW50XG4gICAqICogQHBhcmFtICBzaXplIC0gU2l6ZSBvZiB0aGUgZG9jdW1lbnRcbiAgICovXG4gIHByaXZhdGUgYWRkQ29tbWVudChkb2M6IGpzcGRmLCBjb21tZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb21tZW50U2l6ZSA9IDE2O1xuICAgIGNvbnN0IGNvbW1lbnRNYXJnaW5MZWZ0ID0gMjA7XG4gICAgY29uc3QgbWFyZ2luQm90dG9tID0gNTtcbiAgICBjb25zdCBoZWlnaHRQaXhlbHMgPSBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gbWFyZ2luQm90dG9tO1xuXG4gICAgZG9jLnNldEZvbnQoJ2NvdXJpZXInKTtcbiAgICBkb2Muc2V0Rm9udFNpemUoY29tbWVudFNpemUpO1xuICAgIGRvYy50ZXh0KGNvbW1lbnQsIGNvbW1lbnRNYXJnaW5MZWZ0LCBoZWlnaHRQaXhlbHMpO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgcHJvamVjdGlvbiBhbmQvb3Igc2NhbGUgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSAgZG9jIC0gcGRmIGRvY3VtZW50XG4gICAqIEBwYXJhbSAgbWFwIC0gTWFwIG9mIHRoZSBhcHBcbiAgICogQHBhcmFtICBkcGkgLSBEUEkgcmVzb2x1dGlvbiBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtICBwcm9qZWN0aW9uIC0gQm9vbCB0byBpbmRpY2F0ZSBpZiBwcm9qZWN0aW9uIG5lZWQgdG8gYmUgYWRkZWRcbiAgICogQHBhcmFtICBzY2FsZSAtIEJvb2wgdG8gaW5kaWNhdGUgaWYgc2NhbGUgbmVlZCB0byBiZSBhZGRlZFxuICAgKi9cbiAgcHJpdmF0ZSBhZGRQcm9qU2NhbGUoXG4gICAgZG9jOiBqc3BkZixcbiAgICBtYXA6IElnb01hcCxcbiAgICBkcGk6IG51bWJlcixcbiAgICBwcm9qZWN0aW9uOiBib29sZWFuLFxuICAgIHNjYWxlOiBib29sZWFuXG4gICkge1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICBjb25zdCBwcm9qU2NhbGVTaXplID0gMTY7XG4gICAgY29uc3QgcHJvalNjYWxlTWFyZ2luTGVmdCA9IDIwO1xuICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IDE1O1xuICAgIGNvbnN0IGhlaWdodFBpeGVscyA9IGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSBtYXJnaW5Cb3R0b207XG5cbiAgICBsZXQgdGV4dFByb2pTY2FsZTogc3RyaW5nID0gJyc7XG4gICAgaWYgKHByb2plY3Rpb24gPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHByb2pUZXh0ID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8ucHJpbnRGb3JtLnByb2plY3Rpb24nKTtcbiAgICAgIHRleHRQcm9qU2NhbGUgKz0gcHJvalRleHQgKyAnOiAnICsgbWFwLnByb2plY3Rpb247XG4gICAgfVxuICAgIGlmIChzY2FsZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHByb2plY3Rpb24gPT09IHRydWUpIHtcbiAgICAgICAgdGV4dFByb2pTY2FsZSArPSAnICAgJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNjYWxlVGV4dCA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnByaW50Rm9ybS5zY2FsZScpO1xuICAgICAgY29uc3QgbWFwU2NhbGUgPSBtYXAudmlld0NvbnRyb2xsZXIuZ2V0U2NhbGUoZHBpKTtcbiAgICAgIHRleHRQcm9qU2NhbGUgKz0gc2NhbGVUZXh0ICsgJzogfiAxIC8gJyArIGZvcm1hdFNjYWxlKG1hcFNjYWxlKTtcbiAgICB9XG4gICAgZG9jLnNldEZvbnQoJ2NvdXJpZXInKTtcbiAgICBkb2Muc2V0Rm9udFNpemUocHJvalNjYWxlU2l6ZSk7XG4gICAgZG9jLnRleHQodGV4dFByb2pTY2FsZSwgcHJvalNjYWxlTWFyZ2luTGVmdCwgaGVpZ2h0UGl4ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGxlZ2VuZCB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtICBkb2MgLSBQZGYgZG9jdW1lbnQgd2hlcmUgbGVnZW5kIHdpbGwgYmUgYWRkZWRcbiAgICogQHBhcmFtICBtYXAgLSBNYXAgb2YgdGhlIGFwcFxuICAgKiBAcGFyYW0gIG1hcmdpbnMgLSBQYWdlIG1hcmdpbnNcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYWRkTGVnZW5kKFxuICAgIGRvYzoganNwZGYsXG4gICAgbWFwOiBJZ29NYXAsXG4gICAgbWFyZ2luczogQXJyYXk8bnVtYmVyPixcbiAgICByZXNvbHV0aW9uOiBudW1iZXJcbiAgKSB7XG4gICAgLy8gR2V0IGh0bWwgY29kZSBmb3IgdGhlIGxlZ2VuZFxuICAgIGNvbnN0IHdpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICAgIGNvbnN0IGh0bWwgPSBhd2FpdCB0aGlzLmdldExheWVyc0xlZ2VuZEh0bWwoXG4gICAgICBtYXAsXG4gICAgICB3aWR0aCxcbiAgICAgIHJlc29sdXRpb25cbiAgICApLnRvUHJvbWlzZSgpO1xuICAgIC8vIElmIG5vIGxlZ2VuZCwgc2F2ZSB0aGUgbWFwIGRpcmVjdGx5XG4gICAgaWYgKGh0bWwgPT09ICcnKSB7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVEb2MoZG9jKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgZGl2IHRvIGNvbnRhaW4gaHRtbCBjb2RlIGZvciBsZWdlbmRcbiAgICBjb25zdCBkaXYgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBkaXYuc3R5bGUudG9wID0gJzAnO1xuXG4gICAgLy8gQWRkIGh0bWwgY29kZSB0byBjb252ZXJ0IGluIHRoZSBuZXcgd2luZG93XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGF3YWl0IHRoaXMudGltZW91dCgxKTtcbiAgICBjb25zdCBjYW52YXMgPSBhd2FpdCBodG1sMmNhbnZhcyhkaXYsIHsgdXNlQ09SUzogdHJ1ZSB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zdCBwb3VyY2VudGFnZVJlZHVjdGlvbiA9IDAuODU7XG4gICAgICBjb25zdCBpbWFnZVNpemUgPSBbcG91cmNlbnRhZ2VSZWR1Y3Rpb24gKiAoMjUuNCAqIGNhbnZhcy53aWR0aCkgLyByZXNvbHV0aW9uLCBwb3VyY2VudGFnZVJlZHVjdGlvblxuICAgICAgICAqICgyNS40ICogY2FudmFzLmhlaWdodCkgLyByZXNvbHV0aW9uXTtcbiAgICAgIGxldCBpbWdEYXRhO1xuICAgICAgZG9jLmFkZFBhZ2UoKTtcbiAgICAgIGltZ0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgIGRvYy5hZGRJbWFnZShpbWdEYXRhLCAnUE5HJywgMTAsIDEwLCBpbWFnZVNpemVbMF0sIGltYWdlU2l6ZVsxXSk7XG4gICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpOyAvLyByZW1vdmUgdGVtcCBkaXYgKElFIHN0eWxlKVxuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuc2F2ZURvYyhkb2MpO1xuXG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBsZWdlbmQgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSAgZG9jIC0gUGRmIGRvY3VtZW50IHdoZXJlIGxlZ2VuZCB3aWxsIGJlIGFkZGVkXG4gICAqIEBwYXJhbSAgbWFwIC0gTWFwIG9mIHRoZSBhcHBcbiAgICogQHBhcmFtICBtYXJnaW5zIC0gUGFnZSBtYXJnaW5zXG4gICAqL1xuICAgICBwcml2YXRlIGFzeW5jIGFkZExlZ2VuZFNhbWVQYWdlKFxuICAgICAgZG9jOiBqc3BkZixcbiAgICAgIG1hcDogSWdvTWFwLFxuICAgICAgbWFyZ2luczogQXJyYXk8bnVtYmVyPixcbiAgICAgIHJlc29sdXRpb246IG51bWJlcixcbiAgICAgIGxlZ2VuZFBvc2l0aW9uOiBzdHJpbmdcbiAgICApIHtcbiAgICAgIC8vIEdldCBodG1sIGNvZGUgZm9yIHRoZSBsZWdlbmRcbiAgICAgIGNvbnN0IHdpZHRoID0gZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoO1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHRoaXMuZ2V0TGF5ZXJzTGVnZW5kSHRtbChcbiAgICAgICAgbWFwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgcmVzb2x1dGlvblxuICAgICAgKS50b1Byb21pc2UoKTtcbiAgICAgIC8vIElmIG5vIGxlZ2VuZCwgc2F2ZSB0aGUgbWFwIGRpcmVjdGx5XG4gICAgICBpZiAoaHRtbCA9PT0gJycpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRG9jKGRvYyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIGRpdiB0byBjb250YWluIGh0bWwgY29kZSBmb3IgbGVnZW5kXG4gICAgICBjb25zdCBkaXYgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgZGl2LnN0eWxlLnRvcCA9ICcwJztcbiAgICAgIC8vIEFkZCBodG1sIGNvZGUgdG8gY29udmVydCBpbiB0aGUgbmV3IHdpbmRvd1xuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgYXdhaXQgdGhpcy50aW1lb3V0KDEpO1xuICAgICAgY29uc3QgY2FudmFzID0gYXdhaXQgaHRtbDJjYW52YXMoZGl2LCB7IHVzZUNPUlM6IHRydWUgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9KTtcbiAgICAgIGxldCBtYXJnaW5zTGVnZW5kO1xuICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICBjb25zdCBwb3VyY2VudGFnZVJlZHVjdGlvbiA9IDAuODU7XG4gICAgICAgIGNvbnN0IGltYWdlU2l6ZSA9IFtwb3VyY2VudGFnZVJlZHVjdGlvbiAqICgyNS40ICogY2FudmFzLndpZHRoKSAvIHJlc29sdXRpb24sXG4gICAgICAgICAgIHBvdXJjZW50YWdlUmVkdWN0aW9uICogKDI1LjQgKiBjYW52YXMuaGVpZ2h0KSAvIHJlc29sdXRpb25dO1xuICAgICAgICAvLyBNb3ZlIHRoZSBsZWdlbmQgdG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gb24gdGhlIHBhZ2VcbiAgICAgICAgaWYgKCBsZWdlbmRQb3NpdGlvbiA9PT0gJ2JvdHRvbXJpZ2h0Jykge1xuICAgICAgICAgIG1hcmdpbnNMZWdlbmQgPSBbZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIG1hcmdpbnNbMl0gLSBpbWFnZVNpemVbMV0sIG1hcmdpbnNbMV0sXG4gICAgICAgICAgIG1hcmdpbnNbMl0sIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIG1hcmdpbnNbMV0gLSBpbWFnZVNpemVbMF1dO1xuICAgICAgICB9IGVsc2UgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSAndG9wcmlnaHQnKSB7XG4gICAgICAgICAgbWFyZ2luc0xlZ2VuZCA9IFttYXJnaW5zWzBdLCBtYXJnaW5zWzFdLCBkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gbWFyZ2luc1swXSAtIGltYWdlU2l6ZVsxXSxcbiAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSBtYXJnaW5zWzFdIC0gaW1hZ2VTaXplWzBdIF07XG4gICAgICAgIH0gZWxzZSBpZiAobGVnZW5kUG9zaXRpb24gPT09ICdib3R0b21sZWZ0Jykge1xuICAgICAgICAgIC8vIFdoZW4gdGhlIGxlZ2VuZCBpcyBpbiB0aGUgYm90dG9tIGxlZnQsIHJhaXNlIHRoZSBsZWdlbmQgc2xpZ2h0bHkgdXB3YXJkIHNvIHRoYXQgYXR0cmlidXRpb25zIGFyZSB2aXNpYmxlXG4gICAgICAgICAgbWFyZ2luc0xlZ2VuZCA9IFtkb2MuaW50ZXJuYWwucGFnZVNpemUuaGVpZ2h0IC0gbWFyZ2luc1syXSAtIGltYWdlU2l6ZVsxXSAtIDE1LFxuICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIG1hcmdpbnNbM10gLSBpbWFnZVNpemVbMF0sIG1hcmdpbnNbMl0gKyAxNSwgbWFyZ2luc1szXSBdO1xuICAgICAgICB9IGVsc2UgaWYgKGxlZ2VuZFBvc2l0aW9uID09PSAndG9wbGVmdCcpIHtcbiAgICAgICAgICBtYXJnaW5zTGVnZW5kID0gW21hcmdpbnNbMF0sIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAtIG1hcmdpbnNbM10gLSBpbWFnZVNpemVbMF0sXG4gICAgICAgICAgIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS5oZWlnaHQgLSBtYXJnaW5zWzBdIC0gaW1hZ2VTaXplWzFdLCBtYXJnaW5zWzNdIF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRDYW52YXMoZG9jLCBjYW52YXMsIG1hcmdpbnNMZWdlbmQpOyAvLyB0aGlzIGFkZHMgdGhlIGxlZ2VuZFxuICAgICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpOyAvLyByZW1vdmUgdGVtcCBkaXYgKElFIHN0eWxlKVxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEb2MoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIEFkZCBzY2FsZSBhbmQgYXR0cmlidXRpb25zIG9uIHRoZSBtYXAgb24gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSAgZG9jIC0gUGRmIGRvY3VtZW50IHdoZXJlIGxlZ2VuZCB3aWxsIGJlIGFkZGVkXG4gICAqIEBwYXJhbSAgbWFwIC0gTWFwIG9mIHRoZSBhcHBcbiAgICogQHBhcmFtICBtYXJnaW5zIC0gUGFnZSBtYXJnaW5zXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGFkZFNjYWxlKFxuICAgIGRvYzoganNwZGYsXG4gICAgbWFwOiBJZ29NYXAsXG4gICAgbWFyZ2luczogQXJyYXk8bnVtYmVyPlxuICAgICkge1xuICAgICAgY29uc3QgbWFwU2l6ZSA9IG1hcC5vbC5nZXRTaXplKCk7XG4gICAgICBjb25zdCBleHRlbnQgPSBtYXAub2wuZ2V0VmlldygpLmNhbGN1bGF0ZUV4dGVudChtYXBTaXplKTtcbiAgICAgIC8vIEdldCB0aGUgc2NhbGUgYW5kIGF0dHJpYnV0aW9uXG4gICAgICAvLyB3ZSB1c2UgY2xvbmVOb2RlIHRvIG1vZGlmeSB0aGUgbm9kZXMgdG8gcHJpbnQgd2l0aG91dCBtb2RpZnlpbmcgaXQgb24gdGhlIHBhZ2UsIHVzaW5nIGRlZXA6dHJ1ZSB0byBnZXQgY2hpbGRyZW5cbiAgICAgIGxldCBjYW52YXNPdmVybGF5SFRNTDtcbiAgICAgIGNvbnN0IG1hcE92ZXJsYXlIVE1MID0gbWFwLm9sLmdldE92ZXJsYXlDb250YWluZXJTdG9wRXZlbnQoKTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgVUkgYnV0dG9ucyBmcm9tIHRoZSBub2Rlc1xuICAgICAgY29uc3QgT3ZlcmxheUhUTUxCdXR0b25zID0gbWFwT3ZlcmxheUhUTUwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgT3ZlcmxheUhUTUxCdXR0b25zYXJyID0gQXJyYXkuZnJvbShPdmVybGF5SFRNTEJ1dHRvbnMpO1xuICAgICAgZm9yIChjb25zdCBPdmVybGF5SFRNTEJ1dHRvbiBvZiBPdmVybGF5SFRNTEJ1dHRvbnNhcnIpIHtcbiAgICAgICAgT3ZlcmxheUhUTUxCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZScsICd0cnVlJyk7XG4gICAgICB9XG4gICAgICAvLyBDaGFuZ2UgdGhlIHN0eWxlcyBvZiBoeXBlcmxpbmsgaW4gdGhlIHByaW50ZWQgdmVyc2lvblxuICAgICAgLy8gVHJhbnNmb3JtIHRoZSBPdmVybGF5IGludG8gYSBjYW52YXNcbiAgICAgIC8vIHNjYWxlIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGl0IGluIGdvb2dsZSBjaHJvbWVcbiAgICAgIC8vIGJhY2tncm91bmQgYXMgbnVsbCBiZWNhdXNlIG90aGVyd2lzZSBpdCBpcyB3aGl0ZSBhbmQgY292ZXIgdGhlIG1hcFxuICAgICAgLy8gYWxsb3d0YWludCBpcyB0byBhbGxvdyByZW5kZXJpbmcgaW1hZ2VzIGluIHRoZSBhdHRyaWJ1dGlvbnNcbiAgICAgIC8vIHVzZUNPUlM6IHRydWUgcG91ciBwZXJtZXR0cmUgZGUgcmVuZGVyZXIgbGVzIGltYWdlcyAobmUgbWFyY2hlIHBhcyBlbiBsb2NhbClcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGF3YWl0IGh0bWwyY2FudmFzKG1hcE92ZXJsYXlIVE1MLCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICAgIGFsbG93VGFpbnQ6IHRydWUsXG4gICAgICAgIHVzZUNPUlM6IHRydWUsXG4gICAgICB9KS50aGVuKCBlID0+IHtcbiAgICAgICAgY2FudmFzT3ZlcmxheUhUTUwgPSBlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFkZENhbnZhcyhkb2MsIGNhbnZhc092ZXJsYXlIVE1MLCBtYXJnaW5zKTsgLy8gdGhpcyBhZGRzIHNjYWxlcyBhbmQgYXR0cmlidXRpb25zXG4gfVxuXG4gIGRlZmluZU5iRmlsZVRvUHJvY2VzcyhuYkZpbGVUb1Byb2Nlc3MpIHtcbiAgICB0aGlzLm5iRmlsZVRvUHJvY2VzcyA9IG5iRmlsZVRvUHJvY2VzcztcbiAgfVxuXG4gIHByaXZhdGUgdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDYW52YXMoXG4gICAgZG9jOiBqc3BkZixcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIG1hcmdpbnM6IEFycmF5PG51bWJlcj5cbiAgKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgfVxuXG4gICAgaWYgKGltYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGltYWdlU2l6ZSA9IHRoaXMuZ2V0SW1hZ2VTaXplVG9GaXRQZGYoZG9jLCBjYW52YXMsIG1hcmdpbnMpO1xuICAgICAgZG9jLmFkZEltYWdlKFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgJ1BORycsXG4gICAgICAgIG1hcmdpbnNbM10sXG4gICAgICAgIG1hcmdpbnNbMF0sXG4gICAgICAgIGltYWdlU2l6ZVswXSxcbiAgICAgICAgaW1hZ2VTaXplWzFdXG4gICAgICApO1xuICAgICAgZG9jLnJlY3QobWFyZ2luc1szXSwgbWFyZ2luc1swXSwgaW1hZ2VTaXplWzBdLCBpbWFnZVNpemVbMV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE8gZml4IHByaW50aW5nIHdpdGggaW1hZ2UgcmVzb2x1dGlvblxuICBwcml2YXRlIGFkZE1hcChcbiAgICBkb2M6IGpzcGRmLFxuICAgIG1hcDogSWdvTWFwLFxuICAgIHJlc29sdXRpb246IG51bWJlcixcbiAgICBzaXplOiBBcnJheTxudW1iZXI+LFxuICAgIG1hcmdpbnM6IEFycmF5PG51bWJlcj5cbiAgKSB7XG4gICAgY29uc3Qgc3RhdHVzJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdCBtYXBTaXplID0gbWFwLm9sLmdldFNpemUoKTtcbiAgICBjb25zdCBleHRlbnQgPSBtYXAub2wuZ2V0VmlldygpLmNhbGN1bGF0ZUV4dGVudChtYXBTaXplKTtcblxuICAgIGNvbnN0IHdpZHRoUGl4ZWxzID0gTWF0aC5yb3VuZCgoc2l6ZVswXSAqIHJlc29sdXRpb24pIC8gMjUuNCk7XG4gICAgY29uc3QgaGVpZ2h0UGl4ZWxzID0gTWF0aC5yb3VuZCgoc2l6ZVsxXSAqIHJlc29sdXRpb24pIC8gMjUuNCk7XG5cbiAgICBsZXQgdGltZW91dDtcblxuICAgIG1hcC5vbC5vbmNlKCdyZW5kZXJjb21wbGV0ZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBjb25zdCBjYW52YXNlcyA9IGV2ZW50LnRhcmdldC5nZXRWaWV3cG9ydCgpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcbiAgICAgIGNvbnN0IG1hcFN0YXR1cyQkID0gbWFwLnN0YXR1cyQuc3Vic2NyaWJlKChtYXBTdGF0dXM6IFN1YmplY3RTdGF0dXMpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgIGlmIChtYXBTdGF0dXMgIT09IFN1YmplY3RTdGF0dXMuRG9uZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcFN0YXR1cyQkLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgbGV0IHN0YXR1cyA9IFN1YmplY3RTdGF0dXMuRG9uZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhbnZhcyBvZiBjYW52YXNlcykge1xuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmFkZENhbnZhcyhkb2MsIGNhbnZhcywgbWFyZ2lucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBzdGF0dXMgPSBTdWJqZWN0U3RhdHVzLkVycm9yO1xuICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IoXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgJ2lnby5nZW8ucHJpbnRGb3JtLmNvcnNFcnJvck1lc3NhZ2VCb2R5J1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAnaWdvLmdlby5wcmludEZvcm0uY29yc0Vycm9yTWVzc2FnZUhlYWRlcidcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyTWFwKG1hcCwgbWFwU2l6ZSwgZXh0ZW50KTtcbiAgICAgICAgc3RhdHVzJC5uZXh0KHN0YXR1cyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgbm8gbG9hZGluZyBhcyBzdGFydGVkIGFmdGVyIDIwMG1zLCB0aGVuIHByb2JhYmx5IG5vIGxvYWRpbmdcbiAgICAgIC8vIGlzIHJlcXVpcmVkLlxuICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWFwU3RhdHVzJCQudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICBsZXQgc3RhdHVzID0gU3ViamVjdFN0YXR1cy5Eb25lO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAoY29uc3QgY2FudmFzIG9mIGNhbnZhc2VzKSB7XG4gICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkQ2FudmFzKGRvYywgY2FudmFzLCBtYXJnaW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHN0YXR1cyA9IFN1YmplY3RTdGF0dXMuRXJyb3I7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5lcnJvcihcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICAgICAnaWdvLmdlby5wcmludEZvcm0uY29yc0Vycm9yTWVzc2FnZUJvZHknXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICdpZ28uZ2VvLnByaW50Rm9ybS5jb3JzRXJyb3JNZXNzYWdlSGVhZGVyJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJNYXAobWFwLCBtYXBTaXplLCBleHRlbnQpO1xuICAgICAgICBzdGF0dXMkLm5leHQoc3RhdHVzKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlck1hcChtYXAsIFt3aWR0aFBpeGVscywgaGVpZ2h0UGl4ZWxzXSwgZXh0ZW50KTtcblxuICAgIHJldHVybiBzdGF0dXMkO1xuICB9XG5cbiAgLyoqXG4gICAqIERvd25sb2FkIGFuIGltYWdlIG9mIHRoZSBtYXAgd2l0aCBhZGRpdGlvbiBvZiBpbmZvcm1hdGlvbnNcbiAgICogQHBhcmFtICBtYXAgLSBNYXAgb2YgdGhlIGFwcFxuICAgKiBAcGFyYW0gIGZvcm1hdCAtIEltYWdlIGZvcm1hdC4gZGVmYXVsdCB2YWx1ZSB0byBcInBuZ1wiXG4gICAqIEBwYXJhbSAgcHJvamVjdGlvbiAtIEluZGljYXRlIGlmIHByb2plY3Rpb24gbmVlZCB0byBiZSBhZGQuIERlZmF1bHQgdG8gZmFsc2VcbiAgICogQHBhcmFtICBzY2FsZSAtIEluZGljYXRlIGlmIHNjYWxlIG5lZWQgdG8gYmUgYWRkLiBEZWZhdWx0IHRvIGZhbHNlXG4gICAqIEBwYXJhbSAgbGVnZW5kIC0gSW5kaWNhdGUgaWYgdGhlIGxlZ2VuZCBvZiBsYXllcnMgbmVlZCB0byBiZSBkb3dubG9hZC4gRGVmYXVsdCB0byBmYWxzZVxuICAgKiBAcGFyYW0gIHRpdGxlIC0gVGl0bGUgdG8gYWRkIGZvciB0aGUgbWFwIC0gRGVmYXVsdCB0byBibGFua1xuICAgKiBAcGFyYW0gIHN1YnRpdGxlIC0gU3VidGl0bGUgdG8gYWRkIGZvciB0aGUgbWFwIC0gRGVmYXVsdCB0byBibGFua1xuICAgKiBAcGFyYW0gIGNvbW1lbnQgLSBDb21tZW50IHRvIGFkZCBmb3IgdGhlIG1hcCAtIERlZmF1bHQgdG8gYmxhbmtcbiAgICogQHBhcmFtICBkb1ppcEZpbGUgLSBJbmRpY2F0ZSBpZiB3ZSBkbyBhIHppcCB3aXRoIHRoZSBmaWxlXG4gICAqIEByZXR1cm4gSW1hZ2UgZmlsZSBvZiB0aGUgbWFwIHdpdGggZXh0ZW5zaW9uIGZvcm1hdCBnaXZlbiBhcyBwYXJhbWV0ZXJcbiAgICovXG4gIGRvd25sb2FkTWFwSW1hZ2UoXG4gICAgbWFwOiBJZ29NYXAsXG4gICAgcmVzb2x1dGlvbjogbnVtYmVyLFxuICAgIGZvcm1hdCA9ICdwbmcnLFxuICAgIHByb2plY3Rpb24gPSBmYWxzZSxcbiAgICBzY2FsZSA9IGZhbHNlLFxuICAgIGxlZ2VuZCA9IGZhbHNlLFxuICAgIHRpdGxlID0gJycsXG4gICAgc3VidGl0bGUgPSAnJyxcbiAgICBjb21tZW50ID0gJycsXG4gICAgZG9aaXBGaWxlID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCBzdGF0dXMkID0gbmV3IFN1YmplY3QoKTtcbiAgICAvLyBjb25zdCByZXNvbHV0aW9uID0gbWFwLm9sLmdldFZpZXcoKS5nZXRSZXNvbHV0aW9uKCk7XG4gICAgdGhpcy5hY3Rpdml0eUlkID0gdGhpcy5hY3Rpdml0eVNlcnZpY2UucmVnaXN0ZXIoKTtcbiAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgbWFwLm9sLm9uY2UoJ3JlbmRlcmNvbXBsZXRlJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGZvcm1hdCA9IGZvcm1hdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3Qgb2xkQ2FudmFzID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIC5nZXRWaWV3cG9ydCgpXG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XG4gICAgICBjb25zdCBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIC8vIFBvc3Rpb24gaW4gaGVpZ2h0IHRvIHNldCB0aGUgY2FudmFzIGluIG5ldyBjYW52YXNcbiAgICAgIGxldCBwb3NpdGlvbkhDYW52YXMgPSAwO1xuICAgICAgLy8gUG9zaXRpb24gaW4gd2lkdGggdG8gc2V0IHRoZSBQcm9qL1NjYWxlIGluIG5ldyBjYW52YXNcbiAgICAgIGxldCBwb3NpdGlvbldQcm9qU2NhbGUgPSAxMDtcbiAgICAgIC8vIEdldCBoZWlnaHQvd2lkdGggb2YgbWFwIGNhbnZhc1xuICAgICAgY29uc3Qgd2lkdGggPSBvbGRDYW52YXMud2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gb2xkQ2FudmFzLmhlaWdodDtcbiAgICAgIC8vIFNldCBGb250IHRvIGNhbGN1bGF0ZSBjb21tZW50IHdpZHRoXG4gICAgICBuZXdDb250ZXh0LmZvbnQgPSAnMjBweCBDYWxpYnJpJztcbiAgICAgIGNvbnN0IGNvbW1lbnRXaWR0aCA9IG5ld0NvbnRleHQubWVhc3VyZVRleHQoY29tbWVudCkud2lkdGg7XG4gICAgICAvLyBBZGQgaGVpZ2h0IGZvciB0aXRsZSBpZiBkZWZpbmVkXG4gICAgICBoZWlnaHQgPSB0aXRsZSAhPT0gJycgPyBoZWlnaHQgKyAzMCA6IGhlaWdodDtcbiAgICAgIC8vIEFkZCBoZWlnaHQgZm9yIHRpdGxlIGlmIGRlZmluZWRcbiAgICAgIGhlaWdodCA9IHN1YnRpdGxlICE9PSAnJyA/IGhlaWdodCArIDMwIDogaGVpZ2h0O1xuICAgICAgLy8gQWRkIGhlaWdodCBmb3IgcHJvamVjdGlvbiBvciBzY2FsZSAoc2FtZSBsaW5lKSBpZiBkZWZpbmVkXG4gICAgICBoZWlnaHQgPSBwcm9qZWN0aW9uICE9PSBmYWxzZSB8fCBzY2FsZSAhPT0gZmFsc2UgPyBoZWlnaHQgKyAzMCA6IGhlaWdodDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uSFByb2pTY2FsZSA9IGhlaWdodCAtIDEwO1xuICAgICAgLy8gRGVmaW5lIG51bWJlciBvZiBsaW5lIGRlcGVuZGluZyBvZiB0aGUgY29tbWVudCBsZW5ndGhcbiAgICAgIGNvbnN0IGNvbW1lbnROYkxpbmUgPSBNYXRoLmNlaWwoY29tbWVudFdpZHRoIC8gd2lkdGgpO1xuICAgICAgLy8gQWRkIGhlaWdodCBmb3IgbXVsdGlsaW5lIGNvbW1lbnQgaWYgZGVmaW5lZFxuICAgICAgaGVpZ2h0ID0gY29tbWVudCAhPT0gJycgPyBoZWlnaHQgKyBjb21tZW50TmJMaW5lICogMzAgOiBoZWlnaHQ7XG4gICAgICBsZXQgcG9zaXRpb25IQ29tbWVudCA9IGhlaWdodCAtIGNvbW1lbnROYkxpbmUgKiAyMCArIDU7XG4gICAgICAvLyBTZXQgdGhlIG5ldyBjYW52YXMgd2l0aCB0aGUgbmV3IGNhbGN1bGF0ZWQgc2l6ZVxuICAgICAgbmV3Q2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBuZXdDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgLy8gUGF0Y2ggSnBlZyBkZWZhdWx0IGJsYWNrIGJhY2tncm91bmQgdG8gd2hpdGVcbiAgICAgIGlmIChmb3JtYXQgPT09ICdqcGVnJykge1xuICAgICAgICBuZXdDb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgbmV3Q29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgbmV3Q29udGV4dC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgICB9XG4gICAgICAvLyBJZiBhIHRpdGxlIG5lZWQgdG8gYmUgYWRkZWQgdG8gY2FudmFzXG4gICAgICBpZiAodGl0bGUgIT09ICcnKSB7XG4gICAgICAgIC8vIFNldCBmb250IGZvciB0aXRsZVxuICAgICAgICAvLyBBZGp1c3QgYWNjb3JkaW5nIHRvIHRpdGxlIGxlbmd0aFxuICAgICAgICBuZXdDb250ZXh0LmZvbnQgPSAnMjZweCBDYWxpYnJpJztcbiAgICAgICAgcG9zaXRpb25IQ2FudmFzID0gMzA7XG4gICAgICAgIG5ld0NvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIG5ld0NvbnRleHQuZmlsbFRleHQodGl0bGUsIHdpZHRoIC8gMiwgMjAsIHdpZHRoICogMC45KTtcbiAgICAgIH1cbiAgICAgIGlmIChzdWJ0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgLy8gU2V0IGZvbnQgZm9yIHN1YnRpdGxlXG4gICAgICAgIC8vIEFkanVzdCBhY2NvcmRpbmcgdG8gdGl0bGUgbGVuZ3RoXG4gICAgICAgIG5ld0NvbnRleHQuZm9udCA9ICcyNnB4IENhbGlicmknO1xuICAgICAgICBwb3NpdGlvbkhDYW52YXMgPSA2MDtcbiAgICAgICAgbmV3Q29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgbmV3Q29udGV4dC5maWxsVGV4dChzdWJ0aXRsZSwgd2lkdGggLyAyLCA1MCwgd2lkdGggKiAwLjkpO1xuICAgICAgfVxuICAgICAgLy8gU2V0IGZvbnQgZm9yIG5leHQgc2VjdGlvblxuICAgICAgbmV3Q29udGV4dC5mb250ID0gJzIwcHggQ2FsaWJyaSc7XG4gICAgICAvLyBJZiBwcm9qZWN0aW9uIG5lZWQgdG8gYmUgYWRkZWQgdG8gY2FudmFzXG4gICAgICBpZiAocHJvamVjdGlvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvalRleHQgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5wcmludEZvcm0ucHJvamVjdGlvbicpO1xuICAgICAgICBuZXdDb250ZXh0LnRleHRBbGlnbiA9ICdzdGFydCc7XG4gICAgICAgIG5ld0NvbnRleHQuZmlsbFRleHQoXG4gICAgICAgICAgcHJvalRleHQgKyAnOiAnICsgbWFwLnByb2plY3Rpb24sXG4gICAgICAgICAgcG9zaXRpb25XUHJvalNjYWxlLFxuICAgICAgICAgIHBvc2l0aW9uSFByb2pTY2FsZVxuICAgICAgICApO1xuICAgICAgICBwb3NpdGlvbldQcm9qU2NhbGUgKz0gMjAwOyAvLyBXaWR0aCBwb3NpdGlvbiBjaGFuZ2UgZm9yIHNjYWxlIHBvc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHNjYWxlIG5lZWQgdG8gYmUgYWRkZWQgdG8gY2FudmFzXG4gICAgICBpZiAoc2NhbGUgIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlVGV4dCA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLnByaW50Rm9ybS5zY2FsZScpO1xuICAgICAgICBjb25zdCBtYXBTY2FsZSA9IG1hcC52aWV3Q29udHJvbGxlci5nZXRTY2FsZShyZXNvbHV0aW9uKTtcbiAgICAgICAgbmV3Q29udGV4dC50ZXh0QWxpZ24gPSAnc3RhcnQnO1xuICAgICAgICBuZXdDb250ZXh0LmZpbGxUZXh0KFxuICAgICAgICAgIHNjYWxlVGV4dCArICc6IH4gMSAvICcgKyBmb3JtYXRTY2FsZShtYXBTY2FsZSksXG4gICAgICAgICAgcG9zaXRpb25XUHJvalNjYWxlLFxuICAgICAgICAgIHBvc2l0aW9uSFByb2pTY2FsZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gSWYgYSBjb21tZW50IG5lZWQgdG8gYmUgYWRkZWQgdG8gY2FudmFzXG4gICAgICBpZiAoY29tbWVudCAhPT0gJycpIHtcbiAgICAgICAgbmV3Q29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgLy8gSWYgb25seSBvbmUgbGluZSwgbm8gbmVlZCB0byBtdWx0aWxpbmUgdGhlIGNvbW1lbnRcbiAgICAgICAgaWYgKGNvbW1lbnROYkxpbmUgPT09IDEpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LmZpbGxUZXh0KGNvbW1lbnQsIHdpZHRoIC8gMiwgcG9zaXRpb25IQ29tbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2VwYXJhdGUgdGhlIHNldGVuc2VzIHRvIGJlIGFwcHJveC4gdGhlIHNhbWUgbGVuZ3RoXG4gICAgICAgICAgY29uc3QgbmJDb21tZW50Q2hhciA9IGNvbW1lbnQubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IENvbW1lbnRMZW5ndGhUb0N1dCA9IE1hdGguZmxvb3IobmJDb21tZW50Q2hhciAvIGNvbW1lbnROYkxpbmUpO1xuICAgICAgICAgIGxldCBjb21tZW50Q3VycmVudExpbmUgPSAnJztcbiAgICAgICAgICBsZXQgcG9zaXRpb25GaXJzdEN1dENoYXIgPSAwO1xuICAgICAgICAgIGxldCBwb3NpdGlvbkxhc3RCbGFuaztcbiAgICAgICAgICAvLyBMb29wIGZvciB0aGUgbnVtYmVyIG9mIGxpbmUgY2FsY3VsYXRlZFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudE5iTGluZTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBGb3IgYWxsIGxpbmUgZXhjZXB0IGxhc3RcbiAgICAgICAgICAgIGlmIChjb21tZW50TmJMaW5lIC0gMSA+IGkpIHtcbiAgICAgICAgICAgICAgLy8gR2V0IGNvbW1lbnQgY3VycmVudCBsaW5lIHRvIGZpbmQgdGhlIHJpZ2h0IHBsYWNlIHR1IGN1dCBjb21tZW50XG4gICAgICAgICAgICAgIGNvbW1lbnRDdXJyZW50TGluZSA9IGNvbW1lbnQuc3Vic3RyKFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRmlyc3RDdXRDaGFyLFxuICAgICAgICAgICAgICAgIENvbW1lbnRMZW5ndGhUb0N1dFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAvLyBDdXQgdGhlIHNldGVuY2UgYXQgYmxhbmtcbiAgICAgICAgICAgICAgcG9zaXRpb25MYXN0QmxhbmsgPSBjb21tZW50Q3VycmVudExpbmUubGFzdEluZGV4T2YoJyAnKTtcbiAgICAgICAgICAgICAgbmV3Q29udGV4dC5maWxsVGV4dChcbiAgICAgICAgICAgICAgICBjb21tZW50Q3VycmVudExpbmUuc3Vic3RyKDAsIHBvc2l0aW9uTGFzdEJsYW5rKSxcbiAgICAgICAgICAgICAgICB3aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25IQ29tbWVudFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBwb3NpdGlvbkZpcnN0Q3V0Q2hhciArPSBwb3NpdGlvbkxhc3RCbGFuaztcbiAgICAgICAgICAgICAgLy8gR28gdG8gbmV4dCBsaW5lIGZvciBpbnNlcnRpb25cbiAgICAgICAgICAgICAgcG9zaXRpb25IQ29tbWVudCArPSAyMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIERvbid0IGN1dCBsYXN0IHBhcnRcbiAgICAgICAgICAgICAgbmV3Q29udGV4dC5maWxsVGV4dChcbiAgICAgICAgICAgICAgICBjb21tZW50LnN1YnN0cihwb3NpdGlvbkZpcnN0Q3V0Q2hhciksXG4gICAgICAgICAgICAgICAgd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSENvbW1lbnRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEFkZCBtYXAgdG8gbmV3IGNhbnZhc1xuICAgICAgbmV3Q29udGV4dC5kcmF3SW1hZ2Uob2xkQ2FudmFzLCAwLCBwb3NpdGlvbkhDYW52YXMpO1xuXG4gICAgICBsZXQgc3RhdHVzID0gU3ViamVjdFN0YXR1cy5Eb25lO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gU2F2ZSB0aGUgY2FudmFzIGFzIGZpbGVcbiAgICAgICAgaWYgKCFkb1ppcEZpbGUpIHtcbiAgICAgICAgICB0aGlzLnNhdmVDYW52YXNJbWFnZUFzRmlsZShuZXdDYW52YXMsICdtYXAnLCBmb3JtYXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdC50b0xvd2VyQ2FzZSgpID09PSAndGlmZicpIHtcbiAgICAgICAgICAvLyBBZGQgdGhlIGNhbnZhcyB0byB6aXBcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FudmFGaWxlVG9aaXAoXG4gICAgICAgICAgICBuZXdDYW52YXMsXG4gICAgICAgICAgICAnbWFwJyArIG1hcC5wcm9qZWN0aW9uLnJlcGxhY2UoJzonLCAnXycpICsgJy4nICsgZm9ybWF0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBZGQgdGhlIGNhbnZhcyB0byB6aXBcbiAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FudmFGaWxlVG9aaXAobmV3Q2FudmFzLCAnbWFwJyArICcuJyArIGZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzdGF0dXMgPSBTdWJqZWN0U3RhdHVzLkVycm9yO1xuICAgICAgfVxuXG4gICAgICBzdGF0dXMkLm5leHQoc3RhdHVzKTtcblxuICAgICAgaWYgKGZvcm1hdC50b0xvd2VyQ2FzZSgpID09PSAndGlmZicpIHtcbiAgICAgICAgY29uc3QgdGl3Q29udGVudCA9IHRoaXMuZ2V0V29ybGRGaWxlSW5mb3JtYXRpb24obWFwKTtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt0aXdDb250ZW50XSwge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWRvWmlwRmlsZSkge1xuICAgICAgICAgIC8vIHNhdmVBcyBhdXRvbWF0aWNseSByZXBsYWNlICc6JyBmb3IgJ18nXG4gICAgICAgICAgc2F2ZUFzKGJsb2IsICdtYXAnICsgbWFwLnByb2plY3Rpb24gKyAnLnRmdycpO1xuICAgICAgICAgIHRoaXMuc2F2ZUZpbGVQcm9jZXNzaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQWRkIHRoZSBjYW52YXMgdG8gemlwXG4gICAgICAgICAgdGhpcy5hZGRGaWxlVG9aaXAoXG4gICAgICAgICAgICAnbWFwJyArIG1hcC5wcm9qZWN0aW9uLnJlcGxhY2UoJzonLCAnXycpICsgJy50ZncnLFxuICAgICAgICAgICAgYmxvYlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtYXAub2wucmVuZGVyU3luYygpO1xuXG4gICAgcmV0dXJuIHN0YXR1cyQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck1hcChtYXAsIHNpemUsIGV4dGVudCkge1xuICAgIG1hcC5vbC51cGRhdGVTaXplKCk7XG4gICAgbWFwLm9sLnJlbmRlclN5bmMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGRvY3VtZW50XG4gICAqIEBwYXJhbSAgZG9jIC0gRG9jdW1lbnQgdG8gc2F2ZVxuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIHNhdmVEb2MoZG9jOiBqc3BkZikge1xuICAgIGF3YWl0IGRvYy5zYXZlKCdtYXAucGRmJywgeyByZXR1cm5Qcm9taXNlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgYmVzdCBJbWFnZSBzaXplIHRvIGZpdCBpbiBwZGZcbiAgICogQHBhcmFtIGRvYyAtIFBkZiBEb2N1bWVudFxuICAgKiBAcGFyYW0gY2FudmFzIC0gQ2FudmFzIG9mIGltYWdlXG4gICAqIEBwYXJhbSBtYXJnaW5zIC0gUGFnZSBtYXJnaW5zXG4gICAqL1xuICBwcml2YXRlIGdldEltYWdlU2l6ZVRvRml0UGRmKGRvYywgY2FudmFzLCBtYXJnaW5zKSB7XG4gICAgLy8gRGVmaW5lIHZhcmlhYmxlIHRvIGNhbGN1bGF0ZSBiZXN0IHNpemUgdG8gZml0IGluIG9uZSBwYWdlXG4gICAgY29uc3QgcGFnZUhlaWdodCA9XG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuZ2V0SGVpZ2h0KCkgLSAobWFyZ2luc1swXSArIG1hcmdpbnNbMl0pO1xuICAgIGNvbnN0IHBhZ2VXaWR0aCA9XG4gICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUuZ2V0V2lkdGgoKSAtIChtYXJnaW5zWzFdICsgbWFyZ2luc1szXSk7XG4gICAgY29uc3QgY2FuSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCBjYW5XaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBoZWlnaHRSYXRpbyA9IGNhbkhlaWdodCAvIHBhZ2VIZWlnaHQ7XG4gICAgY29uc3Qgd2lkdGhSYXRpbyA9IGNhbldpZHRoIC8gcGFnZVdpZHRoO1xuICAgIGNvbnN0IG1heFJhdGlvID0gaGVpZ2h0UmF0aW8gPiB3aWR0aFJhdGlvID8gaGVpZ2h0UmF0aW8gOiB3aWR0aFJhdGlvO1xuICAgIGNvbnN0IGltZ0hlaWdoID0gbWF4UmF0aW8gPiAxID8gY2FuSGVpZ2h0IC8gbWF4UmF0aW8gOiBjYW5IZWlnaHQ7XG4gICAgY29uc3QgaW1nV2lkdGggPSBtYXhSYXRpbyA+IDEgPyBjYW5XaWR0aCAvIG1heFJhdGlvIDogY2FuV2lkdGg7XG5cbiAgICByZXR1cm4gW2ltZ1dpZHRoLCBpbWdIZWlnaF07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgd29ybGQgZmlsZSBpbmZvcm1hdGlvbiBmb3IgdGlmZlxuICAgKiBAcGFyYW0gIG1hcCAtIE1hcCBvZiB0aGUgYXBwXG4gICAqL1xuICBwcml2YXRlIGdldFdvcmxkRmlsZUluZm9ybWF0aW9uKG1hcCkge1xuICAgIGNvbnN0IGN1cnJlbnRSZXNvbHV0aW9uID0gbWFwLnZpZXdDb250cm9sbGVyLmdldFJlc29sdXRpb24oKTtcbiAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gbWFwLnZpZXdDb250cm9sbGVyLmdldEV4dGVudCgpOyAvLyBSZXR1cm4gW21pbngsIG1pbnksIG1heHgsIG1heHldXG4gICAgcmV0dXJuIFtcbiAgICAgIGN1cnJlbnRSZXNvbHV0aW9uLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAtY3VycmVudFJlc29sdXRpb24sXG4gICAgICBjdXJyZW50RXh0ZW50WzBdICsgY3VycmVudFJlc29sdXRpb24gLyAwLjUsXG4gICAgICBjdXJyZW50RXh0ZW50WzNdIC0gY3VycmVudFJlc29sdXRpb24gLyAwLjVcbiAgICBdLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY2FudmFzIGltYWdlIGFzIGZpbGVcbiAgICogQHBhcmFtIGNhbnZhcyAtIENhbnZhcyB0byBzYXZlXG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZmlsZVxuICAgKiBAcGFyYW0gZm9ybWF0IC0gZmlsZSBmb3JtYXRcbiAgICovXG4gIHByaXZhdGUgc2F2ZUNhbnZhc0ltYWdlQXNGaWxlKGNhbnZhcywgbmFtZSwgZm9ybWF0KSB7XG4gICAgY29uc3QgYmxvYkZvcm1hdCA9ICdpbWFnZS8nICsgZm9ybWF0O1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNhbnZhcy50b0RhdGFVUkwoKTsgLy8gSnVzdCB0byBtYWtlIHRoZSBjYXRjaCB0cmlnZ2VyIHdpaHRvdXQgdG9CbG9iIEVycm9yIHRocm93IG5vdCBjYXRjaGVkXG4gICAgICAvLyBJZiBuYXZpZ2F0b3IgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikge1xuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihjYW52YXMubXNUb0Jsb2IoKSwgbmFtZSArICcuJyArIGZvcm1hdCk7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGVQcm9jZXNzaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgICAgLy8gZG93bmxvYWQgaW1hZ2VcbiAgICAgICAgICBzYXZlQXMoYmxvYiwgbmFtZSArICcuJyArIGZvcm1hdCk7XG4gICAgICAgICAgdGhhdC5zYXZlRmlsZVByb2Nlc3NpbmcoKTtcbiAgICAgICAgfSwgYmxvYkZvcm1hdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVycm9yKFxuICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmdlby5wcmludEZvcm0uY29yc0Vycm9yTWVzc2FnZUJvZHknXG4gICAgICAgICksXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uZ2VvLnByaW50Rm9ybS5jb3JzRXJyb3JNZXNzYWdlSGVhZGVyJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZmlsZSB0byBhIHppcFxuICAgKiBAcGFyYW0gY2FudmFzIC0gRmlsZSB0byBhZGQgdG8gdGhlIHppcFxuICAgKiBAcGFyYW0gIG5hbWUgLU5hbWUgb2YgdGhlIGZpbGVvdmVydmlld1xuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZUNhbnZhRmlsZVRvWmlwKGNhbnZhcywgbmFtZSkge1xuICAgIGNvbnN0IGJsb2JGb3JtYXQgPSAnaW1hZ2UvJyArICdqcGVnJztcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAoXG4gICAgICAhdGhpcy5oYXNPd25Qcm9wZXJ0eSgnemlwRmlsZScpIHx8XG4gICAgICB0eXBlb2YgdGhpcy56aXBGaWxlID09PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgdGhpcy56aXBGaWxlID0gbmV3IEpTWmlwKCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNhbnZhcy50b0RhdGFVUkwoKTsgLy8gSnVzdCB0byBtYWtlIHRoZSBjYXRjaCB0cmlnZ2VyIHdpaHRvdXQgdG9CbG9iIEVycm9yIHRocm93IG5vdCBjYXRjaGVkXG4gICAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHtcbiAgICAgICAgdGhpcy5hZGRGaWxlVG9aaXAobmFtZSwgY2FudmFzLm1zVG9CbG9iKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgIHRoYXQuYWRkRmlsZVRvWmlwKG5hbWUsIGJsb2IpO1xuICAgICAgICB9LCBibG9iRm9ybWF0KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuZXJyb3IoXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uZ2VvLnByaW50Rm9ybS5jb3JzRXJyb3JNZXNzYWdlQm9keSdcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5nZW8ucHJpbnRGb3JtLmNvcnNFcnJvck1lc3NhZ2VIZWFkZXInXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBmaWxlIHRvIHppcCwgaWYgYWxsIGZpbGUgYXJlIHppcHBlZCwgZG93bmxvYWRcbiAgICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBmaWxlc1xuICAgKiBAcGFyYW0gYmxvYiAtIENvbnRhaW4gb2YgZmlsZVxuICAgKi9cbiAgcHJpdmF0ZSBhZGRGaWxlVG9aaXAobmFtZSwgYmxvYikge1xuICAgIC8vIGFkZCBmaWxlIHRvIHppcFxuICAgIHRoaXMuemlwRmlsZS5maWxlKG5hbWUsIGJsb2IpO1xuICAgIHRoaXMubmJGaWxlVG9Qcm9jZXNzLS07XG5cbiAgICAvLyBJZiBhbGwgZmlsZXMgYXJlIHByb2NjZXNzZWRcbiAgICBpZiAodGhpcy5uYkZpbGVUb1Byb2Nlc3MgPT09IDApIHtcbiAgICAgIC8vIERvd25sb2FkIHppcCBmaWxlXG4gICAgICB0aGlzLmdldFppcEZpbGUoKTtcbiAgICAgIC8vIFN0b3AgbG9hZGluZ1xuICAgICAgdGhpcy5hY3Rpdml0eVNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLmFjdGl2aXR5SWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUZpbGVQcm9jZXNzaW5nKCkge1xuICAgIHRoaXMubmJGaWxlVG9Qcm9jZXNzLS07XG5cbiAgICAvLyBJZiBhbGwgZmlsZXMgYXJlIHByb2NjZXNzZWRcbiAgICBpZiAodGhpcy5uYkZpbGVUb1Byb2Nlc3MgPT09IDApIHtcbiAgICAgIC8vIFN0b3AgbG9hZGluZ1xuICAgICAgdGhpcy5hY3Rpdml0eVNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLmFjdGl2aXR5SWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHppcHBlZCBmaWxlXG4gICAqIEByZXR1cm4gUmV0dW4gYSB6aXAgZmlsZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRaaXBGaWxlKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuemlwRmlsZS5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pLnRoZW4oKGJsb2IpID0+IHtcbiAgICAgIC8vIDEpIGdlbmVyYXRlIHRoZSB6aXAgZmlsZVxuICAgICAgc2F2ZUFzKGJsb2IsICdtYXAuemlwJyk7XG4gICAgICBkZWxldGUgdGhhdC56aXBGaWxlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=