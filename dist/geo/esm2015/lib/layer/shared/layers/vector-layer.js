import olLayerVector from 'ol/layer/Vector';
import { unByKey } from 'ol/Observable';
import { easeOut } from 'ol/easing';
import { asArray as ColorAsArray } from 'ol/color';
import { getVectorContext } from 'ol/render';
import FormatType from 'ol/format/FormatType';
import olProjection from 'ol/proj/Projection';
import * as olproj from 'ol/proj';
import { VectorWatcher } from '../../utils';
import { Layer } from './layer';
import { buildUrl, defaultMaxFeatures } from '../../../datasource/shared/datasources/wms-wfs.utils';
export class VectorLayer extends Layer {
    constructor(options, messageService, authInterceptor) {
        super(options, messageService, authInterceptor);
        this.messageService = messageService;
        this.authInterceptor = authInterceptor;
        this.watcher = new VectorWatcher(this);
        this.status$ = this.watcher.status$;
    }
    get browsable() {
        return this.options.browsable !== false;
    }
    get exportable() {
        return this.options.exportable !== false;
    }
    createOlLayer() {
        const olOptions = Object.assign({}, this.options, {
            source: this.options.source.ol
        });
        if (this.options.animation) {
            this.dataSource.ol.on('addfeature', function (e) {
                this.flash(e.feature);
            }.bind(this));
        }
        if (this.options.trackFeature) {
            this.enableTrackFeature(this.options.trackFeature);
        }
        const vector = new olLayerVector(olOptions);
        const vectorSource = vector.getSource();
        const url = vectorSource.getUrl();
        if (url) {
            let loader;
            const wfsOptions = olOptions.sourceOptions;
            if ((wfsOptions === null || wfsOptions === void 0 ? void 0 : wfsOptions.type) === 'wfs' && (wfsOptions.params || wfsOptions.paramsWFS)) {
                loader = (extent, resolution, proj, success, failure) => {
                    this.customWFSLoader(vectorSource, wfsOptions, this.authInterceptor, extent, resolution, proj, success, failure);
                };
            }
            else {
                loader = (extent, resolution, proj, success, failure) => {
                    this.customLoader(vectorSource, url, this.authInterceptor, extent, resolution, proj, success, failure);
                };
            }
            if (loader) {
                vectorSource.setLoader(loader);
            }
        }
        return vector;
    }
    flash(feature) {
        const start = new Date().getTime();
        const listenerKey = this.ol.on('postrender', animate.bind(this));
        function animate(event) {
            const vectorContext = getVectorContext(event);
            const frameState = event.frameState;
            const flashGeom = feature.getGeometry().clone();
            const elapsed = frameState.time - start;
            const elapsedRatio = elapsed / this.options.animation.duration;
            const opacity = easeOut(1 - elapsedRatio);
            const newColor = ColorAsArray(this.options.animation.color || 'red');
            newColor[3] = opacity;
            let style = this.ol
                .getStyleFunction()
                .call(this, feature)
                .find((style2) => {
                return style2.getImage();
            });
            if (!style) {
                style = this.ol.getStyleFunction().call(this, feature)[0];
            }
            const styleClone = style.clone();
            switch (feature.getGeometry().getType()) {
                case 'Point':
                    const radius = easeOut(elapsedRatio) * (styleClone.getImage().getRadius() * 3);
                    styleClone.getImage().setRadius(radius);
                    styleClone.getImage().setOpacity(opacity);
                    break;
                case 'LineString':
                    // TODO
                    if (styleClone.getImage()) {
                        styleClone.getImage().getStroke().setColor(newColor);
                        styleClone
                            .getImage()
                            .getStroke()
                            .setWidth(easeOut(elapsedRatio) *
                            (styleClone.getImage().getStroke().getWidth() * 3));
                    }
                    if (styleClone.getStroke()) {
                        styleClone.getStroke().setColor(newColor);
                        styleClone
                            .getStroke()
                            .setWidth(easeOut(elapsedRatio) * (styleClone.getStroke().getWidth() * 3));
                    }
                    break;
                case 'Polygon':
                    // TODO
                    if (styleClone.getImage()) {
                        styleClone.getImage().getFill().setColor(newColor);
                    }
                    if (styleClone.getFill()) {
                        styleClone.getFill().setColor(newColor);
                    }
                    break;
            }
            styleClone.setText('');
            vectorContext.setStyle(styleClone);
            vectorContext.drawGeometry(flashGeom);
            if (elapsed > this.options.animation.duration) {
                unByKey(listenerKey);
                // remove last geometry
                // there is a little flash before feature disappear, better solution ?
                this.map.ol.render();
                return;
            }
            // tell OpenLayers to continue postcompose animation
            this.map.ol.render();
        }
    }
    setMap(map) {
        if (map === undefined) {
            this.watcher.unsubscribe();
        }
        else {
            this.watcher.subscribe(() => { });
        }
        super.setMap(map);
    }
    onUnwatch() {
        this.dataSource.onUnwatch();
        this.stopAnimation();
    }
    stopAnimation() {
        this.dataSource.ol.un('addfeature', function (e) {
            if (this.visible) {
                this.flash(e.feature);
            }
        }.bind(this));
    }
    enableTrackFeature(id) {
        this.trackFeatureListenerId = this.dataSource.ol.on('addfeature', this.trackFeature.bind(this, id));
    }
    centerMapOnFeature(id) {
        const feat = this.dataSource.ol.getFeatureById(id);
        if (feat) {
            this.map.ol.getView().setCenter(feat.getGeometry().getCoordinates());
        }
    }
    trackFeature(id, feat) {
        if (feat.feature.getId() === id && this.visible) {
            this.centerMapOnFeature(id);
        }
    }
    disableTrackFeature(id) {
        unByKey(this.trackFeatureListenerId);
    }
    /**
     * Custom loader for a WFS datasource
     * @internal
     * @param vectorSource the vector source to be created
     * @param options olOptions from source
     * @param interceptor the interceptor of the data
     * @param extent the extent of the requested data
     * @param resolution the current resolution
     * @param proj the projection to retrieve the data
     * @param success success callback
     * @param failure failure callback
     * @param randomParam random parameter to ensure cache is not causing problems in retrieving new data
     */
    customWFSLoader(vectorSource, options, interceptor, extent, resolution, proj, success, failure, randomParam) {
        {
            const paramsWFS = options.paramsWFS;
            const wfsProj = paramsWFS.srsName ? new olProjection({ code: paramsWFS.srsName }) : proj;
            const currentExtent = olproj.transformExtent(extent, proj, wfsProj);
            paramsWFS.srsName = paramsWFS.srsName || proj.getCode();
            const url = buildUrl(options, currentExtent, wfsProj, options.ogcFilters, randomParam);
            let startIndex = 0;
            if (paramsWFS.version === '2.0.0' && paramsWFS.maxFeatures > defaultMaxFeatures) {
                const nbOfFeature = 1000;
                while (startIndex < paramsWFS.maxFeatures) {
                    let alteredUrl = url.replace('count=' + paramsWFS.maxFeatures, 'count=' + nbOfFeature);
                    alteredUrl = alteredUrl.replace('startIndex=0', '0');
                    alteredUrl += '&startIndex=' + startIndex;
                    alteredUrl.replace(/&&/g, '&');
                    this.getFeatures(vectorSource, interceptor, currentExtent, wfsProj, proj, alteredUrl, nbOfFeature, success, failure);
                    startIndex += nbOfFeature;
                }
            }
            else {
                this.getFeatures(vectorSource, interceptor, currentExtent, wfsProj, proj, url, paramsWFS.maxFeatures, success, failure);
            }
        }
    }
    /**
     * Custom loader to get feature from a WFS datasource
     * @internal
     * @param vectorSource the vector source to be created
     * @param interceptor the interceptor of the data
     * @param extent the extent of the requested data
     * @param dataProjection the projection of the retrieved data
     * @param featureProjection the projection of the created features
     * @param url the url string to retrieve the data
     * @param threshold the threshold to manage "more features" (TODO)
     * @param success success callback
     * @param failure failure callback
     */
    getFeatures(vectorSource, interceptor, extent, dataProjection, featureProjection, url, threshold, success, failure) {
        const idAssociatedCall = this.dataSource.mostRecentIdCallOGCFilter;
        const xhr = new XMLHttpRequest();
        const alteredUrlWithKeyAuth = interceptor.alterUrlWithKeyAuth(url);
        let modifiedUrl = url;
        if (alteredUrlWithKeyAuth) {
            modifiedUrl = alteredUrlWithKeyAuth;
        }
        xhr.open('GET', modifiedUrl);
        if (interceptor) {
            interceptor.interceptXhr(xhr, modifiedUrl);
        }
        const onError = () => {
            vectorSource.removeLoadedExtent(extent);
            failure();
        };
        xhr.onerror = onError;
        xhr.onload = () => {
            if (xhr.status === 200 && xhr.responseText.length > 0) {
                const features = vectorSource
                    .getFormat()
                    .readFeatures(xhr.responseText, { dataProjection, featureProjection });
                // TODO Manage "More feature"
                /*if (features.length === 0 || features.length < threshold ) {
                  console.log('No more data to download at this resolution');
                }*/
                // Avoids retrieving an older call that took longer to be process
                if (idAssociatedCall === this.dataSource.mostRecentIdCallOGCFilter) {
                    vectorSource.addFeatures(features);
                    success(features);
                }
                else {
                    success([]);
                }
            }
            else {
                onError();
            }
        };
        xhr.send();
    }
    /**
     * Custom loader for vector layer.
     * @internal
     * @param vectorSource the vector source to be created
     * @param url the url string or function to retrieve the data
     * @param interceptor the interceptor of the data
     * @param extent the extent of the requested data
     * @param resolution the current resolution
     * @param projection the projection to retrieve the data
     */
    customLoader(vectorSource, url, interceptor, extent, resolution, projection, success, failure) {
        const xhr = new XMLHttpRequest();
        let modifiedUrl = url;
        if (typeof url !== 'function') {
            const alteredUrlWithKeyAuth = interceptor.alterUrlWithKeyAuth(url);
            if (alteredUrlWithKeyAuth) {
                modifiedUrl = alteredUrlWithKeyAuth;
            }
        }
        else {
            modifiedUrl = url(extent, resolution, projection);
        }
        xhr.open('GET', modifiedUrl);
        const format = vectorSource.getFormat();
        if (format.getType() === FormatType.ARRAY_BUFFER) {
            xhr.responseType = 'arraybuffer';
        }
        if (interceptor) {
            interceptor.interceptXhr(xhr, modifiedUrl);
        }
        const onError = () => {
            vectorSource.removeLoadedExtent(extent);
            failure();
        };
        xhr.onerror = onError;
        xhr.onload = () => {
            // status will be 0 for file:// urls
            if (!xhr.status || (xhr.status >= 200 && xhr.status < 300)) {
                const type = format.getType();
                let source;
                if (type === FormatType.JSON || type === FormatType.TEXT) {
                    source = xhr.responseText;
                }
                else if (type === FormatType.XML) {
                    source = xhr.responseXML;
                    if (!source) {
                        source = new DOMParser().parseFromString(xhr.responseText, 'application/xml');
                    }
                }
                else if (type === FormatType.ARRAY_BUFFER) {
                    source = xhr.response;
                }
                if (source) {
                    const features = format.readFeatures(source, { extent, featureProjection: projection });
                    vectorSource.addFeatures(features, format.readProjection(source));
                    success(features);
                }
                else {
                    onError();
                }
            }
            else {
                onError();
            }
        };
        xhr.send();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLWxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvc2hhcmVkL2xheWVycy92ZWN0b3ItbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxhQUFhLE1BQU0saUJBQWlCLENBQUM7QUFHNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLElBQUksWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QyxPQUFPLFlBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEtBQUssTUFBTSxNQUFNLFNBQVMsQ0FBQztBQVFsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFLaEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXBHLE1BQU0sT0FBTyxXQUFZLFNBQVEsS0FBSztJQW9CcEMsWUFDRSxPQUEyQixFQUNwQixjQUErQixFQUMvQixlQUFpQztRQUV4QyxLQUFLLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUh6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBR3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBaEJELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBWVMsYUFBYTtRQUNyQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hELE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFnQztTQUM3RCxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDbkIsWUFBWSxFQUNaLFVBQVMsQ0FBQztnQkFDUixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNiLENBQUM7U0FDSDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFnQyxDQUFDO1FBQ3RFLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksTUFBTSxDQUFDO1lBQ1gsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLGFBQXFDLENBQUM7WUFDbkUsSUFBSSxDQUFBLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxJQUFJLE1BQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzdFLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtvQkFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FDbEIsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLENBQUMsZUFBZSxFQUNwQixNQUFNLEVBQ04sVUFBVSxFQUNWLElBQUksRUFDSixPQUFPLEVBQ1AsT0FBTyxDQUNSLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO29CQUN0RCxJQUFJLENBQUMsWUFBWSxDQUNmLFlBQVksRUFDWixHQUFHLEVBQ0gsSUFBSSxDQUFDLGVBQWUsRUFDcEIsTUFBTSxFQUNOLFVBQVUsRUFDVixJQUFJLEVBQ0osT0FBTyxFQUNQLE9BQU8sQ0FDUixDQUFDO2dCQUNKLENBQUMsQ0FBQzthQUNIO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxPQUFPO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVqRSxTQUFTLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDcEMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ3hDLE1BQU0sWUFBWSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDL0QsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUMxQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDO1lBQ3JFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUU7aUJBQ2hCLGdCQUFnQixFQUFFO2lCQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztpQkFDbkIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUNELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVqQyxRQUFRLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDdkMsS0FBSyxPQUFPO29CQUNWLE1BQU0sTUFBTSxHQUNWLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEUsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUixLQUFLLFlBQVk7b0JBQ2YsT0FBTztvQkFDUCxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTt3QkFDekIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDckQsVUFBVTs2QkFDUCxRQUFRLEVBQUU7NkJBQ1YsU0FBUyxFQUFFOzZCQUNYLFFBQVEsQ0FDUCxPQUFPLENBQUMsWUFBWSxDQUFDOzRCQUNuQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDckQsQ0FBQztxQkFDTDtvQkFDRCxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRTt3QkFDMUIsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDMUMsVUFBVTs2QkFDUCxTQUFTLEVBQUU7NkJBQ1gsUUFBUSxDQUNQLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDaEUsQ0FBQztxQkFDTDtvQkFDRCxNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWixPQUFPO29CQUNQLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUN6QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRDtvQkFDRCxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDeEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDekM7b0JBQ0QsTUFBTTthQUNUO1lBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2QixhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUM3QyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JCLHVCQUF1QjtnQkFDdkIsc0VBQXNFO2dCQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckIsT0FBTzthQUNSO1lBQ0Qsb0RBQW9EO1lBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQXVCO1FBQ25DLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ25CLFlBQVksRUFDWixVQUFTLENBQUM7WUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDYixDQUFDO0lBQ0osQ0FBQztJQUVNLGtCQUFrQixDQUFDLEVBQW1CO1FBQzNDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ2pELFlBQVksRUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBQ00sa0JBQWtCLENBQUMsRUFBbUI7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVNLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSTtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVNLG1CQUFtQixDQUFDLEVBQW9CO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksZUFBZSxDQUNwQixZQUFZLEVBQ1osT0FBTyxFQUNQLFdBQVcsRUFDWCxNQUFNLEVBQ04sVUFBVSxFQUNWLElBQUksRUFDSixPQUFPLEVBQ1AsT0FBTyxFQUNQLFdBQXFCO1FBRXJCO1lBQ0UsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNwQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pGLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRSxTQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FDbEIsT0FBTyxFQUNQLGFBQWEsRUFDYixPQUFPLEVBQ04sT0FBMEMsQ0FBQyxVQUFVLEVBQ3RELFdBQVcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQUksU0FBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsRUFBRTtnQkFDL0UsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixPQUFPLFVBQVUsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO29CQUN6QyxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQztvQkFDdkYsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNyRCxVQUFVLElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQztvQkFDMUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDckgsVUFBVSxJQUFJLFdBQVcsQ0FBQztpQkFDM0I7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3pIO1NBQ0Y7SUFDSCxDQUFDO0lBR0Q7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ssV0FBVyxDQUNqQixZQUF3QyxFQUN4QyxXQUFXLEVBQ1gsTUFBTSxFQUNOLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsR0FBVyxFQUNYLFNBQWlCLEVBQ2pCLE9BQU8sRUFBRSxPQUFPO1FBRWhCLE1BQU0sZ0JBQWdCLEdBQUksSUFBSSxDQUFDLFVBQTRCLENBQUMseUJBQXlCLENBQUM7UUFDdEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQyxNQUFNLHFCQUFxQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxxQkFBcUIsRUFBRTtZQUN6QixXQUFXLEdBQUcscUJBQXFCLENBQUM7U0FDckM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLFdBQVcsRUFBRTtZQUNmLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ25CLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyRCxNQUFNLFFBQVEsR0FDWixZQUFZO3FCQUNULFNBQVMsRUFBRTtxQkFDWCxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxDQUE0QixDQUFDO2dCQUN0Ryw2QkFBNkI7Z0JBQzdCOzttQkFFRztnQkFDSCxpRUFBaUU7Z0JBQ2pFLElBQUksZ0JBQWdCLEtBQU0sSUFBSSxDQUFDLFVBQTRCLENBQUMseUJBQXlCLEVBQ3JGO29CQUNJLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDckI7cUJBQ0k7b0JBQ0QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNmO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyxZQUFZLENBQ2xCLFlBQVksRUFDWixHQUFHLEVBQ0gsV0FBVyxFQUNYLE1BQU0sRUFDTixVQUFVLEVBQ1YsVUFBVSxFQUNWLE9BQU8sRUFDUCxPQUFPO1FBRVAsTUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVLEVBQUU7WUFDN0IsTUFBTSxxQkFBcUIsR0FBRyxXQUFXLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkUsSUFBSSxxQkFBcUIsRUFBRTtnQkFDekIsV0FBVyxHQUFHLHFCQUFxQixDQUFDO2FBQ3JDO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNuRDtRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ2hELEdBQUcsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM1QztRQUVELE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNuQixZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN0QixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNoQixvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlCLElBQUksTUFBTSxDQUFDO2dCQUNYLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hELE1BQU0sR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO2lCQUMzQjtxQkFBTSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNsQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDWCxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQ3RDLEdBQUcsQ0FBQyxZQUFZLEVBQ2hCLGlCQUFpQixDQUNsQixDQUFDO3FCQUNIO2lCQUNGO3FCQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxZQUFZLEVBQUU7b0JBQzNDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUN4RixZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yJztcbmltcG9ydCBvbFNvdXJjZVZlY3RvciBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5pbXBvcnQgeyB1bkJ5S2V5IH0gZnJvbSAnb2wvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBlYXNlT3V0IH0gZnJvbSAnb2wvZWFzaW5nJztcbmltcG9ydCB7IGFzQXJyYXkgYXMgQ29sb3JBc0FycmF5IH0gZnJvbSAnb2wvY29sb3InO1xuaW1wb3J0IHsgZ2V0VmVjdG9yQ29udGV4dCB9IGZyb20gJ29sL3JlbmRlcic7XG5pbXBvcnQgRm9ybWF0VHlwZSBmcm9tICdvbC9mb3JtYXQvRm9ybWF0VHlwZSc7XG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IG9sUHJvamVjdGlvbiBmcm9tICdvbC9wcm9qL1Byb2plY3Rpb24nO1xuaW1wb3J0ICogYXMgb2xwcm9qIGZyb20gJ29sL3Byb2onO1xuXG5pbXBvcnQgeyBGZWF0dXJlRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2ZlYXR1cmUtZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBXRlNEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvd2ZzLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQXJjR0lTUmVzdERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy9hcmNnaXNyZXN0LWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgV2ViU29ja2V0RGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL3dlYnNvY2tldC1kYXRhc291cmNlJztcbmltcG9ydCB7IENsdXN0ZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvY2x1c3Rlci1kYXRhc291cmNlJztcblxuaW1wb3J0IHsgVmVjdG9yV2F0Y2hlciB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uLy4uL21hcCc7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4vbGF5ZXInO1xuaW1wb3J0IHsgVmVjdG9yTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi92ZWN0b3ItbGF5ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IFdGU0RhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvd2ZzLWRhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IGJ1aWxkVXJsLCBkZWZhdWx0TWF4RmVhdHVyZXMgfSBmcm9tICcuLi8uLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy93bXMtd2ZzLnV0aWxzJztcbmltcG9ydCB7IE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zaGFyZWQvb2djLWZpbHRlci5pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIFZlY3RvckxheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBwdWJsaWMgZGF0YVNvdXJjZTpcbiAgICB8IEZlYXR1cmVEYXRhU291cmNlXG4gICAgfCBXRlNEYXRhU291cmNlXG4gICAgfCBBcmNHSVNSZXN0RGF0YVNvdXJjZVxuICAgIHwgV2ViU29ja2V0RGF0YVNvdXJjZVxuICAgIHwgQ2x1c3RlckRhdGFTb3VyY2U7XG4gIHB1YmxpYyBvcHRpb25zOiBWZWN0b3JMYXllck9wdGlvbnM7XG4gIHB1YmxpYyBvbDogb2xMYXllclZlY3RvcjxvbFNvdXJjZVZlY3RvcjxPbEdlb21ldHJ5Pj47XG4gIHByaXZhdGUgd2F0Y2hlcjogVmVjdG9yV2F0Y2hlcjtcbiAgcHJpdmF0ZSB0cmFja0ZlYXR1cmVMaXN0ZW5lcklkO1xuXG4gIGdldCBicm93c2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5icm93c2FibGUgIT09IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGV4cG9ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5leHBvcnRhYmxlICE9PSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnM6IFZlY3RvckxheWVyT3B0aW9ucyxcbiAgICBwdWJsaWMgbWVzc2FnZVNlcnZpY2U/OiBNZXNzYWdlU2VydmljZSxcbiAgICBwdWJsaWMgYXV0aEludGVyY2VwdG9yPzogQXV0aEludGVyY2VwdG9yXG4gICkge1xuICAgIHN1cGVyKG9wdGlvbnMsIG1lc3NhZ2VTZXJ2aWNlLCBhdXRoSW50ZXJjZXB0b3IpO1xuICAgIHRoaXMud2F0Y2hlciA9IG5ldyBWZWN0b3JXYXRjaGVyKHRoaXMpO1xuICAgIHRoaXMuc3RhdHVzJCA9IHRoaXMud2F0Y2hlci5zdGF0dXMkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU9sTGF5ZXIoKTogb2xMYXllclZlY3RvcjxvbFNvdXJjZVZlY3RvcjxPbEdlb21ldHJ5Pj4ge1xuICAgIGNvbnN0IG9sT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgc291cmNlOiB0aGlzLm9wdGlvbnMuc291cmNlLm9sIGFzIG9sU291cmNlVmVjdG9yPE9sR2VvbWV0cnk+XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLm9sLm9uKFxuICAgICAgICAnYWRkZmVhdHVyZScsXG4gICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICB0aGlzLmZsYXNoKGUuZmVhdHVyZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrRmVhdHVyZSkge1xuICAgICAgdGhpcy5lbmFibGVUcmFja0ZlYXR1cmUodGhpcy5vcHRpb25zLnRyYWNrRmVhdHVyZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVjdG9yID0gbmV3IG9sTGF5ZXJWZWN0b3Iob2xPcHRpb25zKTtcbiAgICBjb25zdCB2ZWN0b3JTb3VyY2UgPSB2ZWN0b3IuZ2V0U291cmNlKCkgYXMgb2xTb3VyY2VWZWN0b3I8T2xHZW9tZXRyeT47XG4gICAgY29uc3QgdXJsID0gdmVjdG9yU291cmNlLmdldFVybCgpO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIGxldCBsb2FkZXI7XG4gICAgICBjb25zdCB3ZnNPcHRpb25zID0gb2xPcHRpb25zLnNvdXJjZU9wdGlvbnMgYXMgV0ZTRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgICBpZiAod2ZzT3B0aW9ucz8udHlwZSA9PT0gJ3dmcycgJiYgKHdmc09wdGlvbnMucGFyYW1zIHx8IHdmc09wdGlvbnMucGFyYW1zV0ZTKSkge1xuICAgICAgICBsb2FkZXIgPSAoZXh0ZW50LCByZXNvbHV0aW9uLCBwcm9qLCBzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXN0b21XRlNMb2FkZXIoXG4gICAgICAgICAgICB2ZWN0b3JTb3VyY2UsXG4gICAgICAgICAgICB3ZnNPcHRpb25zLFxuICAgICAgICAgICAgdGhpcy5hdXRoSW50ZXJjZXB0b3IsXG4gICAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICAgICAgcHJvaixcbiAgICAgICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsdXJlXG4gICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRlciA9IChleHRlbnQsIHJlc29sdXRpb24sIHByb2osIHN1Y2Nlc3MsIGZhaWx1cmUpID0+IHtcbiAgICAgICAgICB0aGlzLmN1c3RvbUxvYWRlcihcbiAgICAgICAgICAgIHZlY3RvclNvdXJjZSxcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHRoaXMuYXV0aEludGVyY2VwdG9yLFxuICAgICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgICAgIHByb2osXG4gICAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgICAgZmFpbHVyZVxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAobG9hZGVyKSB7XG4gICAgICAgIHZlY3RvclNvdXJjZS5zZXRMb2FkZXIobG9hZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBmbGFzaChmZWF0dXJlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBsaXN0ZW5lcktleSA9IHRoaXMub2wub24oJ3Bvc3RyZW5kZXInLCBhbmltYXRlLmJpbmQodGhpcykpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZShldmVudCkge1xuICAgICAgY29uc3QgdmVjdG9yQ29udGV4dCA9IGdldFZlY3RvckNvbnRleHQoZXZlbnQpO1xuICAgICAgY29uc3QgZnJhbWVTdGF0ZSA9IGV2ZW50LmZyYW1lU3RhdGU7XG4gICAgICBjb25zdCBmbGFzaEdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKTtcbiAgICAgIGNvbnN0IGVsYXBzZWQgPSBmcmFtZVN0YXRlLnRpbWUgLSBzdGFydDtcbiAgICAgIGNvbnN0IGVsYXBzZWRSYXRpbyA9IGVsYXBzZWQgLyB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uLmR1cmF0aW9uO1xuICAgICAgY29uc3Qgb3BhY2l0eSA9IGVhc2VPdXQoMSAtIGVsYXBzZWRSYXRpbyk7XG4gICAgICBjb25zdCBuZXdDb2xvciA9IENvbG9yQXNBcnJheSh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uLmNvbG9yIHx8ICdyZWQnKTtcbiAgICAgIG5ld0NvbG9yWzNdID0gb3BhY2l0eTtcbiAgICAgIGxldCBzdHlsZSA9IHRoaXMub2xcbiAgICAgICAgLmdldFN0eWxlRnVuY3Rpb24oKVxuICAgICAgICAuY2FsbCh0aGlzLCBmZWF0dXJlKVxuICAgICAgICAuZmluZCgoc3R5bGUyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlMi5nZXRJbWFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgIGlmICghc3R5bGUpIHtcbiAgICAgICAgc3R5bGUgPSB0aGlzLm9sLmdldFN0eWxlRnVuY3Rpb24oKS5jYWxsKHRoaXMsIGZlYXR1cmUpWzBdO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3R5bGVDbG9uZSA9IHN0eWxlLmNsb25lKCk7XG5cbiAgICAgIHN3aXRjaCAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSkge1xuICAgICAgICBjYXNlICdQb2ludCc6XG4gICAgICAgICAgY29uc3QgcmFkaXVzID1cbiAgICAgICAgICAgIGVhc2VPdXQoZWxhcHNlZFJhdGlvKSAqIChzdHlsZUNsb25lLmdldEltYWdlKCkuZ2V0UmFkaXVzKCkgKiAzKTtcbiAgICAgICAgICBzdHlsZUNsb25lLmdldEltYWdlKCkuc2V0UmFkaXVzKHJhZGl1cyk7XG4gICAgICAgICAgc3R5bGVDbG9uZS5nZXRJbWFnZSgpLnNldE9wYWNpdHkob3BhY2l0eSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICBpZiAoc3R5bGVDbG9uZS5nZXRJbWFnZSgpKSB7XG4gICAgICAgICAgICBzdHlsZUNsb25lLmdldEltYWdlKCkuZ2V0U3Ryb2tlKCkuc2V0Q29sb3IobmV3Q29sb3IpO1xuICAgICAgICAgICAgc3R5bGVDbG9uZVxuICAgICAgICAgICAgICAuZ2V0SW1hZ2UoKVxuICAgICAgICAgICAgICAuZ2V0U3Ryb2tlKClcbiAgICAgICAgICAgICAgLnNldFdpZHRoKFxuICAgICAgICAgICAgICAgIGVhc2VPdXQoZWxhcHNlZFJhdGlvKSAqXG4gICAgICAgICAgICAgICAgICAoc3R5bGVDbG9uZS5nZXRJbWFnZSgpLmdldFN0cm9rZSgpLmdldFdpZHRoKCkgKiAzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3R5bGVDbG9uZS5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgc3R5bGVDbG9uZS5nZXRTdHJva2UoKS5zZXRDb2xvcihuZXdDb2xvcik7XG4gICAgICAgICAgICBzdHlsZUNsb25lXG4gICAgICAgICAgICAgIC5nZXRTdHJva2UoKVxuICAgICAgICAgICAgICAuc2V0V2lkdGgoXG4gICAgICAgICAgICAgICAgZWFzZU91dChlbGFwc2VkUmF0aW8pICogKHN0eWxlQ2xvbmUuZ2V0U3Ryb2tlKCkuZ2V0V2lkdGgoKSAqIDMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgaWYgKHN0eWxlQ2xvbmUuZ2V0SW1hZ2UoKSkge1xuICAgICAgICAgICAgc3R5bGVDbG9uZS5nZXRJbWFnZSgpLmdldEZpbGwoKS5zZXRDb2xvcihuZXdDb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdHlsZUNsb25lLmdldEZpbGwoKSkge1xuICAgICAgICAgICAgc3R5bGVDbG9uZS5nZXRGaWxsKCkuc2V0Q29sb3IobmV3Q29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3R5bGVDbG9uZS5zZXRUZXh0KCcnKTtcbiAgICAgIHZlY3RvckNvbnRleHQuc2V0U3R5bGUoc3R5bGVDbG9uZSk7XG4gICAgICB2ZWN0b3JDb250ZXh0LmRyYXdHZW9tZXRyeShmbGFzaEdlb20pO1xuXG4gICAgICBpZiAoZWxhcHNlZCA+IHRoaXMub3B0aW9ucy5hbmltYXRpb24uZHVyYXRpb24pIHtcbiAgICAgICAgdW5CeUtleShsaXN0ZW5lcktleSk7XG4gICAgICAgIC8vIHJlbW92ZSBsYXN0IGdlb21ldHJ5XG4gICAgICAgIC8vIHRoZXJlIGlzIGEgbGl0dGxlIGZsYXNoIGJlZm9yZSBmZWF0dXJlIGRpc2FwcGVhciwgYmV0dGVyIHNvbHV0aW9uID9cbiAgICAgICAgdGhpcy5tYXAub2wucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHRlbGwgT3BlbkxheWVycyB0byBjb250aW51ZSBwb3N0Y29tcG9zZSBhbmltYXRpb25cbiAgICAgIHRoaXMubWFwLm9sLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRNYXAobWFwOiBJZ29NYXAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAobWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2F0Y2hlci51bnN1YnNjcmliZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhdGNoZXIuc3Vic2NyaWJlKCgpID0+IHt9KTtcbiAgICB9XG4gICAgc3VwZXIuc2V0TWFwKG1hcCk7XG4gIH1cblxuICBwdWJsaWMgb25VbndhdGNoKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5vblVud2F0Y2goKTtcbiAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBzdG9wQW5pbWF0aW9uKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5vbC51bihcbiAgICAgICdhZGRmZWF0dXJlJyxcbiAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuZmxhc2goZS5mZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGVUcmFja0ZlYXR1cmUoaWQ6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMudHJhY2tGZWF0dXJlTGlzdGVuZXJJZCA9IHRoaXMuZGF0YVNvdXJjZS5vbC5vbihcbiAgICAgICdhZGRmZWF0dXJlJyxcbiAgICAgIHRoaXMudHJhY2tGZWF0dXJlLmJpbmQodGhpcywgaWQpXG4gICAgKTtcbiAgfVxuICBwdWJsaWMgY2VudGVyTWFwT25GZWF0dXJlKGlkOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjb25zdCBmZWF0ID0gdGhpcy5kYXRhU291cmNlLm9sLmdldEZlYXR1cmVCeUlkKGlkKTtcbiAgICBpZiAoZmVhdCkge1xuICAgICAgdGhpcy5tYXAub2wuZ2V0VmlldygpLnNldENlbnRlcihmZWF0LmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrRmVhdHVyZShpZCwgZmVhdCkge1xuICAgIGlmIChmZWF0LmZlYXR1cmUuZ2V0SWQoKSA9PT0gaWQgJiYgdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLmNlbnRlck1hcE9uRmVhdHVyZShpZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2FibGVUcmFja0ZlYXR1cmUoaWQ/OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICB1bkJ5S2V5KHRoaXMudHJhY2tGZWF0dXJlTGlzdGVuZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIGxvYWRlciBmb3IgYSBXRlMgZGF0YXNvdXJjZVxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIHZlY3RvclNvdXJjZSB0aGUgdmVjdG9yIHNvdXJjZSB0byBiZSBjcmVhdGVkXG4gICAqIEBwYXJhbSBvcHRpb25zIG9sT3B0aW9ucyBmcm9tIHNvdXJjZVxuICAgKiBAcGFyYW0gaW50ZXJjZXB0b3IgdGhlIGludGVyY2VwdG9yIG9mIHRoZSBkYXRhXG4gICAqIEBwYXJhbSBleHRlbnQgdGhlIGV4dGVudCBvZiB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICogQHBhcmFtIHJlc29sdXRpb24gdGhlIGN1cnJlbnQgcmVzb2x1dGlvblxuICAgKiBAcGFyYW0gcHJvaiB0aGUgcHJvamVjdGlvbiB0byByZXRyaWV2ZSB0aGUgZGF0YVxuICAgKiBAcGFyYW0gc3VjY2VzcyBzdWNjZXNzIGNhbGxiYWNrXG4gICAqIEBwYXJhbSBmYWlsdXJlIGZhaWx1cmUgY2FsbGJhY2tcbiAgICogQHBhcmFtIHJhbmRvbVBhcmFtIHJhbmRvbSBwYXJhbWV0ZXIgdG8gZW5zdXJlIGNhY2hlIGlzIG5vdCBjYXVzaW5nIHByb2JsZW1zIGluIHJldHJpZXZpbmcgbmV3IGRhdGFcbiAgICovXG4gIHB1YmxpYyBjdXN0b21XRlNMb2FkZXIoXG4gICAgdmVjdG9yU291cmNlLFxuICAgIG9wdGlvbnMsXG4gICAgaW50ZXJjZXB0b3IsXG4gICAgZXh0ZW50LFxuICAgIHJlc29sdXRpb24sXG4gICAgcHJvaixcbiAgICBzdWNjZXNzLFxuICAgIGZhaWx1cmUsXG4gICAgcmFuZG9tUGFyYW0/OiBib29sZWFuXG4gICkge1xuICAgIHtcbiAgICAgIGNvbnN0IHBhcmFtc1dGUyA9IG9wdGlvbnMucGFyYW1zV0ZTO1xuICAgICAgY29uc3Qgd2ZzUHJvaiA9IHBhcmFtc1dGUy5zcnNOYW1lID8gbmV3IG9sUHJvamVjdGlvbih7IGNvZGU6IHBhcmFtc1dGUy5zcnNOYW1lIH0pIDogcHJvajtcbiAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSBvbHByb2oudHJhbnNmb3JtRXh0ZW50KGV4dGVudCwgcHJvaiwgd2ZzUHJvaik7XG4gICAgICBwYXJhbXNXRlMuc3JzTmFtZSA9IHBhcmFtc1dGUy5zcnNOYW1lIHx8IHByb2ouZ2V0Q29kZSgpO1xuICAgICAgY29uc3QgdXJsID0gYnVpbGRVcmwoXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGN1cnJlbnRFeHRlbnQsXG4gICAgICAgIHdmc1Byb2osXG4gICAgICAgIChvcHRpb25zIGFzIE9nY0ZpbHRlcmFibGVEYXRhU291cmNlT3B0aW9ucykub2djRmlsdGVycyxcbiAgICAgICAgcmFuZG9tUGFyYW0pO1xuICAgICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICAgICAgaWYgKHBhcmFtc1dGUy52ZXJzaW9uID09PSAnMi4wLjAnICYmIHBhcmFtc1dGUy5tYXhGZWF0dXJlcyA+IGRlZmF1bHRNYXhGZWF0dXJlcykge1xuICAgICAgICBjb25zdCBuYk9mRmVhdHVyZSA9IDEwMDA7XG4gICAgICAgIHdoaWxlIChzdGFydEluZGV4IDwgcGFyYW1zV0ZTLm1heEZlYXR1cmVzKSB7XG4gICAgICAgICAgbGV0IGFsdGVyZWRVcmwgPSB1cmwucmVwbGFjZSgnY291bnQ9JyArIHBhcmFtc1dGUy5tYXhGZWF0dXJlcywgJ2NvdW50PScgKyBuYk9mRmVhdHVyZSk7XG4gICAgICAgICAgYWx0ZXJlZFVybCA9IGFsdGVyZWRVcmwucmVwbGFjZSgnc3RhcnRJbmRleD0wJywgJzAnKTtcbiAgICAgICAgICBhbHRlcmVkVXJsICs9ICcmc3RhcnRJbmRleD0nICsgc3RhcnRJbmRleDtcbiAgICAgICAgICBhbHRlcmVkVXJsLnJlcGxhY2UoLyYmL2csICcmJyk7XG4gICAgICAgICAgdGhpcy5nZXRGZWF0dXJlcyh2ZWN0b3JTb3VyY2UsIGludGVyY2VwdG9yLCBjdXJyZW50RXh0ZW50LCB3ZnNQcm9qLCBwcm9qLCBhbHRlcmVkVXJsLCBuYk9mRmVhdHVyZSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgc3RhcnRJbmRleCArPSBuYk9mRmVhdHVyZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlcyh2ZWN0b3JTb3VyY2UsIGludGVyY2VwdG9yLCBjdXJyZW50RXh0ZW50LCB3ZnNQcm9qLCBwcm9qLCB1cmwsIHBhcmFtc1dGUy5tYXhGZWF0dXJlcywgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQ3VzdG9tIGxvYWRlciB0byBnZXQgZmVhdHVyZSBmcm9tIGEgV0ZTIGRhdGFzb3VyY2VcbiAgICogQGludGVybmFsXG4gICAqIEBwYXJhbSB2ZWN0b3JTb3VyY2UgdGhlIHZlY3RvciBzb3VyY2UgdG8gYmUgY3JlYXRlZFxuICAgKiBAcGFyYW0gaW50ZXJjZXB0b3IgdGhlIGludGVyY2VwdG9yIG9mIHRoZSBkYXRhXG4gICAqIEBwYXJhbSBleHRlbnQgdGhlIGV4dGVudCBvZiB0aGUgcmVxdWVzdGVkIGRhdGFcbiAgICogQHBhcmFtIGRhdGFQcm9qZWN0aW9uIHRoZSBwcm9qZWN0aW9uIG9mIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgKiBAcGFyYW0gZmVhdHVyZVByb2plY3Rpb24gdGhlIHByb2plY3Rpb24gb2YgdGhlIGNyZWF0ZWQgZmVhdHVyZXNcbiAgICogQHBhcmFtIHVybCB0aGUgdXJsIHN0cmluZyB0byByZXRyaWV2ZSB0aGUgZGF0YVxuICAgKiBAcGFyYW0gdGhyZXNob2xkIHRoZSB0aHJlc2hvbGQgdG8gbWFuYWdlIFwibW9yZSBmZWF0dXJlc1wiIChUT0RPKVxuICAgKiBAcGFyYW0gc3VjY2VzcyBzdWNjZXNzIGNhbGxiYWNrXG4gICAqIEBwYXJhbSBmYWlsdXJlIGZhaWx1cmUgY2FsbGJhY2tcbiAgICovXG4gIHByaXZhdGUgZ2V0RmVhdHVyZXMoXG4gICAgdmVjdG9yU291cmNlOiBvbFNvdXJjZVZlY3RvcjxPbEdlb21ldHJ5PixcbiAgICBpbnRlcmNlcHRvcixcbiAgICBleHRlbnQsXG4gICAgZGF0YVByb2plY3Rpb24sXG4gICAgZmVhdHVyZVByb2plY3Rpb24sXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGhyZXNob2xkOiBudW1iZXIsXG4gICAgc3VjY2VzcywgZmFpbHVyZSkge1xuXG4gICAgY29uc3QgaWRBc3NvY2lhdGVkQ2FsbCA9ICh0aGlzLmRhdGFTb3VyY2UgYXMgV0ZTRGF0YVNvdXJjZSkubW9zdFJlY2VudElkQ2FsbE9HQ0ZpbHRlcjtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBhbHRlcmVkVXJsV2l0aEtleUF1dGggPSBpbnRlcmNlcHRvci5hbHRlclVybFdpdGhLZXlBdXRoKHVybCk7XG4gICAgbGV0IG1vZGlmaWVkVXJsID0gdXJsO1xuICAgIGlmIChhbHRlcmVkVXJsV2l0aEtleUF1dGgpIHtcbiAgICAgIG1vZGlmaWVkVXJsID0gYWx0ZXJlZFVybFdpdGhLZXlBdXRoO1xuICAgIH1cbiAgICB4aHIub3BlbignR0VUJywgbW9kaWZpZWRVcmwpO1xuICAgIGlmIChpbnRlcmNlcHRvcikge1xuICAgICAgaW50ZXJjZXB0b3IuaW50ZXJjZXB0WGhyKHhociwgbW9kaWZpZWRVcmwpO1xuICAgIH1cbiAgICBjb25zdCBvbkVycm9yID0gKCkgPT4ge1xuICAgICAgdmVjdG9yU291cmNlLnJlbW92ZUxvYWRlZEV4dGVudChleHRlbnQpO1xuICAgICAgZmFpbHVyZSgpO1xuICAgIH07XG4gICAgeGhyLm9uZXJyb3IgPSBvbkVycm9yO1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICAgICAgdmVjdG9yU291cmNlXG4gICAgICAgICAgICAuZ2V0Rm9ybWF0KClcbiAgICAgICAgICAgIC5yZWFkRmVhdHVyZXMoeGhyLnJlc3BvbnNlVGV4dCwgeyBkYXRhUHJvamVjdGlvbiwgZmVhdHVyZVByb2plY3Rpb24gfSkgYXMgb2xGZWF0dXJlPE9sR2VvbWV0cnk+W107XG4gICAgICAgIC8vIFRPRE8gTWFuYWdlIFwiTW9yZSBmZWF0dXJlXCJcbiAgICAgICAgLyppZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwIHx8IGZlYXR1cmVzLmxlbmd0aCA8IHRocmVzaG9sZCApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbW9yZSBkYXRhIHRvIGRvd25sb2FkIGF0IHRoaXMgcmVzb2x1dGlvbicpO1xuICAgICAgICB9Ki9cbiAgICAgICAgLy8gQXZvaWRzIHJldHJpZXZpbmcgYW4gb2xkZXIgY2FsbCB0aGF0IHRvb2sgbG9uZ2VyIHRvIGJlIHByb2Nlc3NcbiAgICAgICAgaWYgKGlkQXNzb2NpYXRlZENhbGwgPT09ICh0aGlzLmRhdGFTb3VyY2UgYXMgV0ZTRGF0YVNvdXJjZSkubW9zdFJlY2VudElkQ2FsbE9HQ0ZpbHRlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MoZmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VjY2VzcyhbXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIGxvYWRlciBmb3IgdmVjdG9yIGxheWVyLlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIHZlY3RvclNvdXJjZSB0aGUgdmVjdG9yIHNvdXJjZSB0byBiZSBjcmVhdGVkXG4gICAqIEBwYXJhbSB1cmwgdGhlIHVybCBzdHJpbmcgb3IgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGRhdGFcbiAgICogQHBhcmFtIGludGVyY2VwdG9yIHRoZSBpbnRlcmNlcHRvciBvZiB0aGUgZGF0YVxuICAgKiBAcGFyYW0gZXh0ZW50IHRoZSBleHRlbnQgb2YgdGhlIHJlcXVlc3RlZCBkYXRhXG4gICAqIEBwYXJhbSByZXNvbHV0aW9uIHRoZSBjdXJyZW50IHJlc29sdXRpb25cbiAgICogQHBhcmFtIHByb2plY3Rpb24gdGhlIHByb2plY3Rpb24gdG8gcmV0cmlldmUgdGhlIGRhdGFcbiAgICovXG4gIHByaXZhdGUgY3VzdG9tTG9hZGVyKFxuICAgIHZlY3RvclNvdXJjZSxcbiAgICB1cmwsXG4gICAgaW50ZXJjZXB0b3IsXG4gICAgZXh0ZW50LFxuICAgIHJlc29sdXRpb24sXG4gICAgcHJvamVjdGlvbixcbiAgICBzdWNjZXNzLFxuICAgIGZhaWx1cmVcbiAgKSB7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgbGV0IG1vZGlmaWVkVXJsID0gdXJsO1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBhbHRlcmVkVXJsV2l0aEtleUF1dGggPSBpbnRlcmNlcHRvci5hbHRlclVybFdpdGhLZXlBdXRoKHVybCk7XG4gICAgICBpZiAoYWx0ZXJlZFVybFdpdGhLZXlBdXRoKSB7XG4gICAgICAgIG1vZGlmaWVkVXJsID0gYWx0ZXJlZFVybFdpdGhLZXlBdXRoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtb2RpZmllZFVybCA9IHVybChleHRlbnQsIHJlc29sdXRpb24sIHByb2plY3Rpb24pO1xuICAgIH1cbiAgICB4aHIub3BlbiggJ0dFVCcsIG1vZGlmaWVkVXJsKTtcbiAgICBjb25zdCBmb3JtYXQgPSB2ZWN0b3JTb3VyY2UuZ2V0Rm9ybWF0KCk7XG4gICAgaWYgKGZvcm1hdC5nZXRUeXBlKCkgPT09IEZvcm1hdFR5cGUuQVJSQVlfQlVGRkVSKSB7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICB9XG4gICAgaWYgKGludGVyY2VwdG9yKSB7XG4gICAgICBpbnRlcmNlcHRvci5pbnRlcmNlcHRYaHIoeGhyLCBtb2RpZmllZFVybCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcbiAgICAgIHZlY3RvclNvdXJjZS5yZW1vdmVMb2FkZWRFeHRlbnQoZXh0ZW50KTtcbiAgICAgIGZhaWx1cmUoKTtcbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gb25FcnJvcjtcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gc3RhdHVzIHdpbGwgYmUgMCBmb3IgZmlsZTovLyB1cmxzXG4gICAgICBpZiAoIXhoci5zdGF0dXMgfHwgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBmb3JtYXQuZ2V0VHlwZSgpO1xuICAgICAgICBsZXQgc291cmNlO1xuICAgICAgICBpZiAodHlwZSA9PT0gRm9ybWF0VHlwZS5KU09OIHx8IHR5cGUgPT09IEZvcm1hdFR5cGUuVEVYVCkge1xuICAgICAgICAgIHNvdXJjZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gRm9ybWF0VHlwZS5YTUwpIHtcbiAgICAgICAgICBzb3VyY2UgPSB4aHIucmVzcG9uc2VYTUw7XG4gICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXG4gICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICAgICdhcHBsaWNhdGlvbi94bWwnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBGb3JtYXRUeXBlLkFSUkFZX0JVRkZFUikge1xuICAgICAgICAgIHNvdXJjZSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBmb3JtYXQucmVhZEZlYXR1cmVzKHNvdXJjZSwgeyBleHRlbnQsIGZlYXR1cmVQcm9qZWN0aW9uOiBwcm9qZWN0aW9uIH0pO1xuICAgICAgICAgIHZlY3RvclNvdXJjZS5hZGRGZWF0dXJlcyhmZWF0dXJlcywgZm9ybWF0LnJlYWRQcm9qZWN0aW9uKHNvdXJjZSkpO1xuICAgICAgICAgIHN1Y2Nlc3MoZmVhdHVyZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25FcnJvcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxufVxuIl19