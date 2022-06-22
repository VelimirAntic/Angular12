import { Component, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { EntityStoreWatcher } from '@igo2/common';
import * as olCondition from 'ol/events/condition';
import * as olInteraction from 'ol/interaction';
import * as olProj from 'ol/proj';
import { Subject } from 'rxjs';
import { addDirectionToRoutesFeatureStore, addStopToStopsFeatureStore, addStopToStore, initRoutesFeatureStore, initStepFeatureStore, initStopsFeatureStore, updateStoreSorting } from './shared/directions.utils';
import { DirectionType, ProposalType } from './shared/directions.enum';
import { roundCoordTo, stringToLonLat } from '../map';
import { ChangeUtils, ObjectUtils } from '@igo2/utils';
import { FeatureStoreLoadingStrategy } from '../feature/shared/strategies/loading';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "./shared/directions.service";
import * as i3 from "../search/shared/search.service";
import * as i4 from "../query/shared/query.service";
import * as i5 from "./directions-buttons/directions-buttons.component";
import * as i6 from "./directions-inputs/directions-inputs.component";
import * as i7 from "./directions-results/directions-results.component";
export class DirectionsComponent {
    constructor(cdRef, languageService, directionsService, searchService, queryService) {
        this.cdRef = cdRef;
        this.languageService = languageService;
        this.directionsService = directionsService;
        this.searchService = searchService;
        this.queryService = queryService;
        this.projection = 'EPSG:4326';
        this.routesQueries$$ = [];
        this.focusOnStop = false;
        this.isTranslating = false;
        this.previousStops = [];
        this.searchs$$ = [];
        this.debounce = 200;
        this.length = 2;
        this.coordRoundedDecimals = 6;
        this.zoomToActiveRoute$ = new Subject();
    }
    ngOnInit() {
        this.queryService.queryEnabled = false;
        this.initEntityStores();
        setTimeout(() => {
            initStopsFeatureStore(this.stopsFeatureStore, this.languageService);
            initRoutesFeatureStore(this.routesFeatureStore, this.languageService);
            initStepFeatureStore(this.stepFeatureStore);
            this.initOlInteraction();
        }, 1);
    }
    ngOnDestroy() {
        this.queryService.queryEnabled = true;
        this.storeEmpty$$.unsubscribe();
        this.storeChange$$.unsubscribe();
        this.routesQueries$$.map((u) => u.unsubscribe());
        this.zoomRoute$$.unsubscribe();
        this.freezeStores();
    }
    freezeStores() {
        this.stopsFeatureStore.layer.map.ol.removeInteraction(this.selectStopInteraction);
        this.stopsFeatureStore.layer.map.ol.removeInteraction(this.translateStop);
        this.routesFeatureStore.layer.map.ol.removeInteraction(this.selectedRoute);
        this.stopsFeatureStore.deactivateStrategyOfType(FeatureStoreLoadingStrategy);
        this.routesFeatureStore.deactivateStrategyOfType(FeatureStoreLoadingStrategy);
        this.stepFeatureStore.deactivateStrategyOfType(FeatureStoreLoadingStrategy);
    }
    initEntityStores() {
        this.watcher = new EntityStoreWatcher(this.stopsStore, this.cdRef);
        this.monitorEmptyEntityStore();
        this.monitorEntityStoreChange();
        this.monitorActiveRouteZoom();
    }
    monitorActiveRouteZoom() {
        this.zoomRoute$$ = this.zoomToActiveRoute$.subscribe(() => {
            if (this.routesFeatureStore.count >= 1) {
                const activeRoute = this.routesFeatureStore.all().find(route => route.properties.active);
                if (activeRoute) {
                    activeRoute.ol.getGeometry();
                    const routeExtent = activeRoute.ol.getGeometry().getExtent();
                    this.routesFeatureStore.layer.map.viewController.zoomToExtent(routeExtent);
                }
            }
        });
    }
    initOlInteraction() {
        this.selectStopInteraction = new olInteraction.Select({
            layers: [this.stopsFeatureStore.layer.ol],
            hitTolerance: 7,
            condition: (event) => {
                return event.type === 'pointermove' && !event.dragging;
            }
        });
        this.translateStop = new olInteraction.Translate({
            features: this.selectStopInteraction.getFeatures()
        });
        this.translateStop.on('translating', (evt) => {
            this.isTranslating = true;
            this.executeStopTranslation(evt.features);
        });
        this.translateStop.on('translateend', (evt) => {
            this.isTranslating = false;
            this.executeStopTranslation(evt.features);
        });
        this.selectedRoute = new olInteraction.Select({
            layers: [this.routesFeatureStore.layer.ol],
            condition: olCondition.click,
            hitTolerance: 7,
            filter: feature => {
                return feature.get('type') === DirectionType.Route &&
                    feature.get('active') &&
                    !this.isTranslating;
            }
        });
        this.selectedRoute.on('select', (evt) => {
            if (this.focusOnStop === false) {
                const selectCoordinates = roundCoordTo(olProj.transform(evt.mapBrowserEvent.coordinate, this.routesFeatureStore.layer.map.projection, this.projection), this.coordRoundedDecimals);
                const addedStop = addStopToStore(this.stopsStore);
                addedStop.text = selectCoordinates.join(',');
                addedStop.coordinates = [selectCoordinates[0], selectCoordinates[1]];
            }
        });
        this.stopsFeatureStore.layer.map.ol.addInteraction(this.selectStopInteraction);
        this.stopsFeatureStore.layer.map.ol.addInteraction(this.translateStop);
        this.routesFeatureStore.layer.map.ol.addInteraction(this.selectedRoute);
    }
    onStopInputHasFocusChange(stopInputHasFocus) {
        stopInputHasFocus ?
            this.routesFeatureStore.layer.map.ol.removeInteraction(this.selectedRoute) :
            this.routesFeatureStore.layer.map.ol.addInteraction(this.selectedRoute);
    }
    executeStopTranslation(features) {
        if (features.getLength() === 0) {
            return;
        }
        const firstFeature = features.getArray()[0];
        const translatedStopId = firstFeature.getId();
        const translationCoordinates = olProj.transform(firstFeature.getGeometry().getCoordinates(), this.stopsFeatureStore.layer.map.projection, this.projection);
        const translatedStop = this.stopsStore.get(translatedStopId);
        const roundedCoord = roundCoordTo(translationCoordinates, this.coordRoundedDecimals);
        translatedStop.coordinates = roundedCoord;
        translatedStop.text = roundedCoord.join(',');
        this.stopsStore.update(translatedStop);
    }
    monitorEmptyEntityStore() {
        // Watch if the store is empty to reset it
        this.storeEmpty$$ = this.stopsStore.count$
            .pipe(distinctUntilChanged()).subscribe((count) => {
            if (count < 2) {
                addStopToStore(this.stopsStore);
                if (this.stopsStore.count === 2) {
                    this.stopsStore.storeInitialized$.next(true);
                    return;
                }
                this.stopsStore.storeInitialized$.next(false);
            }
            this.routesQueries$$.map((u) => u.unsubscribe());
        });
    }
    monitorEntityStoreChange() {
        this.storeChange$$ = this.stopsStore.entities$
            .pipe(debounceTime(this.debounce))
            .subscribe((stops) => {
            this.handleStopDiff(stops);
            updateStoreSorting(this.stopsStore);
            this.handleStopsFeature();
            this.getRoutes(this.isTranslating);
        });
    }
    cancelSearch() {
        this.searchs$$.map(s => s.unsubscribe());
    }
    handleStopDiff(stops) {
        const simplifiedStops = stops.map((stop) => {
            return ObjectUtils.removeUndefined(Object.assign({ id: stop.id, text: stop.text, coordinates: stop.coordinates }));
        });
        const diff = ChangeUtils.findChanges(this.previousStops, simplifiedStops, ['coordinates']);
        const stopIdToProcess = diff.added.concat(diff.modified);
        if (stopIdToProcess) {
            stopIdToProcess.map((change) => {
                const changedStop = change.newValue;
                if (changedStop) {
                    const stop = this.stopsStore.get(changedStop.id);
                    const term = stop.text;
                    if (!term || term.length === 0) {
                        return;
                    }
                    const response = stringToLonLat(term, this.stopsFeatureStore.layer.map.projection);
                    let researches;
                    let isCoord = false;
                    if (response.lonLat) {
                        isCoord = true;
                    }
                    researches = this.searchService.search(term, { searchType: 'Feature' });
                    this.cancelSearch();
                    const requests$ = researches.map(res => res.request
                        .pipe(map((results) => results.filter(r => isCoord ? r.data.geometry.type === 'Point' && r.data.geometry : r.data.geometry))));
                    this.searchs$$ = requests$.map((request) => {
                        return request.pipe(map((results) => results.filter(r => isCoord ? r.data.geometry.type === 'Point' && r.data.geometry : r.data.geometry)))
                            .subscribe((res) => {
                            if (res.length > 0) {
                                const source = res[0].source;
                                const meta = res[0].meta;
                                const results = res.map(r => r.data);
                                if (!stop.searchProposals) {
                                    stop.searchProposals = [];
                                }
                                stop.searchProposals = stop.searchProposals.filter(sp => sp.type === (isCoord ? ProposalType.Coord : ProposalType.Text));
                                let storedSource = stop.searchProposals.find(sp => sp.source === source);
                                if (storedSource) {
                                    storedSource.results = results;
                                }
                                else {
                                    stop.searchProposals.push({
                                        type: isCoord ? ProposalType.Coord : ProposalType.Text,
                                        source,
                                        meta,
                                        results
                                    });
                                }
                            }
                            this.cdRef.detectChanges();
                        });
                    });
                }
            });
        }
        this.previousStops = simplifiedStops;
    }
    handleStopsFeature() {
        const stops = this.stopsStore.all();
        const stopsWithCoordinates = stops.filter(stop => stop.coordinates);
        stopsWithCoordinates.map(stop => this.addStopOverlay(stop));
        this.stopsFeatureStore.all().map((stopFeature) => {
            if (!this.stopsStore.get(stopFeature.properties.id)) {
                this.stopsFeatureStore.delete(stopFeature);
            }
        });
        const stopsWithoutCoordinates = stops.filter(stop => !stop.coordinates);
        stopsWithoutCoordinates.map(stop => {
            const stopFeature = this.stopsFeatureStore.get(stop.id);
            if (stopFeature) {
                this.stopsFeatureStore.delete(stopFeature);
            }
        });
    }
    getRoutes(isOverview = false) {
        const stopsWithCoordinates = this.stopsStore.view
            .all()
            .filter(stop => stop.coordinates);
        if (stopsWithCoordinates.length < 2) {
            this.routesFeatureStore.deleteMany(this.routesFeatureStore.all());
            return;
        }
        const roundedCoordinates = stopsWithCoordinates.map((stop) => {
            const roundedCoord = roundCoordTo(stop.coordinates, this.coordRoundedDecimals);
            return roundedCoord;
        });
        const overviewDirectionsOptions = {
            overview: true,
            steps: false,
            alternatives: false,
            continue_straight: false
        };
        this.routesQueries$$.map((u) => u.unsubscribe());
        const routeResponse = this.directionsService.route(roundedCoordinates, isOverview ? overviewDirectionsOptions : undefined);
        if (routeResponse) {
            routeResponse.map(res => this.routesQueries$$.push(res.subscribe(directions => {
                this.routesFeatureStore.deleteMany(this.routesFeatureStore.all());
                directions.map(direction => addDirectionToRoutesFeatureStore(this.routesFeatureStore, direction, this.projection, direction === directions[0] ? true : false));
            })));
        }
    }
    addStopOverlay(stop) {
        addStopToStopsFeatureStore(stop, this.stopsStore, this.stopsFeatureStore, this.projection, this.languageService);
    }
}
DirectionsComponent.ɵfac = function DirectionsComponent_Factory(t) { return new (t || DirectionsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i2.DirectionsService), i0.ɵɵdirectiveInject(i3.SearchService), i0.ɵɵdirectiveInject(i4.QueryService)); };
DirectionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectionsComponent, selectors: [["igo-directions"]], inputs: { contextUri: "contextUri", stopsStore: "stopsStore", stopsFeatureStore: "stopsFeatureStore", routesFeatureStore: "routesFeatureStore", stepFeatureStore: "stepFeatureStore", debounce: "debounce", length: "length", coordRoundedDecimals: "coordRoundedDecimals", zoomToActiveRoute$: "zoomToActiveRoute$" }, decls: 4, vars: 12, consts: [[3, "contextUri", "zoomToActiveRoute$", "routesFeatureStore", "stopsStore"], [3, "coordRoundedDecimals", "projection", "stopsFeatureStore", "stopsStore", "debounce", "length", "stopInputHasFocus"], [3, "stepFeatureStore", "routesFeatureStore"]], template: function DirectionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "igo-directions-buttons", 0);
        i0.ɵɵelementStart(1, "igo-directions-inputs", 1);
        i0.ɵɵlistener("stopInputHasFocus", function DirectionsComponent_Template_igo_directions_inputs_stopInputHasFocus_1_listener($event) { return ctx.onStopInputHasFocusChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "br");
        i0.ɵɵelement(3, "igo-directions-results", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("contextUri", ctx.contextUri)("zoomToActiveRoute$", ctx.zoomToActiveRoute$)("routesFeatureStore", ctx.routesFeatureStore)("stopsStore", ctx.stopsStore);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("coordRoundedDecimals", ctx.coordRoundedDecimals)("projection", ctx.projection)("stopsFeatureStore", ctx.stopsFeatureStore)("stopsStore", ctx.stopsStore)("debounce", ctx.debounce)("length", ctx.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepFeatureStore", ctx.stepFeatureStore)("routesFeatureStore", ctx.routesFeatureStore);
    } }, directives: [i5.DirectionsButtonsComponent, i6.DirectionsInputsComponent, i7.DirectionsResultsComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectionsComponent, [{
        type: Component,
        args: [{
                selector: 'igo-directions',
                templateUrl: './directions.component.html',
                styleUrls: ['./directions.component.scss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.LanguageService }, { type: i2.DirectionsService }, { type: i3.SearchService }, { type: i4.QueryService }]; }, { contextUri: [{
            type: Input
        }], stopsStore: [{
            type: Input
        }], stopsFeatureStore: [{
            type: Input
        }], routesFeatureStore: [{
            type: Input
        }], stepFeatureStore: [{
            type: Input
        }], debounce: [{
            type: Input
        }], length: [{
            type: Input
        }], coordRoundedDecimals: [{
            type: Input
        }], zoomToActiveRoute$: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kaXJlY3Rpb25zL2RpcmVjdGlvbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBTWxDLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSwwQkFBMEIsRUFBRSxjQUFjLEVBQ25GLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHN0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7O0FBU25GLE1BQU0sT0FBTyxt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QUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZVdhdGNoZXIgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgKiBhcyBvbENvbmRpdGlvbiBmcm9tICdvbC9ldmVudHMvY29uZGl0aW9uJztcbmltcG9ydCAqIGFzIG9sSW50ZXJhY3Rpb24gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgVHJhbnNsYXRlRXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9UcmFuc2xhdGUnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnb2wvQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBTZWxlY3RFdmVudCB9IGZyb20gJ29sL2ludGVyYWN0aW9uL1NlbGVjdCc7XG5cbmltcG9ydCB7IERpcmVjdGlvbk9wdGlvbnMsIEZlYXR1cmVXaXRoU3RvcFByb3BlcnRpZXMsIFN0b3AgfSBmcm9tICcuL3NoYXJlZC9kaXJlY3Rpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGFkZERpcmVjdGlvblRvUm91dGVzRmVhdHVyZVN0b3JlLCBhZGRTdG9wVG9TdG9wc0ZlYXR1cmVTdG9yZSwgYWRkU3RvcFRvU3RvcmUsXG4gIGluaXRSb3V0ZXNGZWF0dXJlU3RvcmUsIGluaXRTdGVwRmVhdHVyZVN0b3JlLCBpbml0U3RvcHNGZWF0dXJlU3RvcmUsIHVwZGF0ZVN0b3JlU29ydGluZyB9IGZyb20gJy4vc2hhcmVkL2RpcmVjdGlvbnMudXRpbHMnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uL2ZlYXR1cmUvc2hhcmVkL2ZlYXR1cmUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb25zU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2RpcmVjdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25UeXBlLCBQcm9wb3NhbFR5cGUgfSBmcm9tICcuL3NoYXJlZC9kaXJlY3Rpb25zLmVudW0nO1xuaW1wb3J0IHsgcm91bmRDb29yZFRvLCBzdHJpbmdUb0xvbkxhdCB9IGZyb20gJy4uL21hcCc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VhcmNoL3NoYXJlZC9zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBDaGFuZ2VVdGlscywgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5pbXBvcnQgeyBSb3V0ZXNGZWF0dXJlU3RvcmUsIFN0ZXBGZWF0dXJlU3RvcmUsIFN0b3BzRmVhdHVyZVN0b3JlLCBTdG9wc1N0b3JlIH0gZnJvbSAnLi9zaGFyZWQvc3RvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZVN0b3JlTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vZmVhdHVyZS9zaGFyZWQvc3RyYXRlZ2llcy9sb2FkaW5nJztcbmltcG9ydCB7IFJlc2VhcmNoLCBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2gvc2hhcmVkL3NlYXJjaC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFF1ZXJ5U2VydmljZSB9IGZyb20gJy4uL3F1ZXJ5L3NoYXJlZC9xdWVyeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWRpcmVjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlyZWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgd2F0Y2hlcjogRW50aXR5U3RvcmVXYXRjaGVyPFN0b3A+O1xuXG4gIHB1YmxpYyBwcm9qZWN0aW9uOiBzdHJpbmcgPSAnRVBTRzo0MzI2JztcblxuICBwcml2YXRlIHpvb21Sb3V0ZSQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3RvcmVFbXB0eSQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3RvcmVDaGFuZ2UkJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJvdXRlc1F1ZXJpZXMkJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIHNlbGVjdFN0b3BJbnRlcmFjdGlvbjogb2xJbnRlcmFjdGlvbi5TZWxlY3Q7XG4gIHByaXZhdGUgdHJhbnNsYXRlU3RvcDogb2xJbnRlcmFjdGlvbi5UcmFuc2xhdGU7XG4gIHByaXZhdGUgc2VsZWN0ZWRSb3V0ZTtcbiAgcHJpdmF0ZSBmb2N1c09uU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGlzVHJhbnNsYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgcHJldmlvdXNTdG9wczogU3RvcFtdID0gW107XG5cbiAgcHJpdmF0ZSBzZWFyY2hzJCQ6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgQElucHV0KCkgY29udGV4dFVyaTogc3RyaW5nO1xuICBASW5wdXQoKSBzdG9wc1N0b3JlOiBTdG9wc1N0b3JlO1xuICBASW5wdXQoKSBzdG9wc0ZlYXR1cmVTdG9yZTogU3RvcHNGZWF0dXJlU3RvcmU7XG4gIEBJbnB1dCgpIHJvdXRlc0ZlYXR1cmVTdG9yZTogUm91dGVzRmVhdHVyZVN0b3JlO1xuICBASW5wdXQoKSBzdGVwRmVhdHVyZVN0b3JlOiBTdGVwRmVhdHVyZVN0b3JlO1xuICBASW5wdXQoKSBkZWJvdW5jZTogbnVtYmVyID0gMjAwO1xuICBASW5wdXQoKSBsZW5ndGg6IG51bWJlciA9IDI7XG4gIEBJbnB1dCgpIGNvb3JkUm91bmRlZERlY2ltYWxzOiBudW1iZXIgPSA2O1xuICBASW5wdXQoKSB6b29tVG9BY3RpdmVSb3V0ZSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb25zU2VydmljZTogRGlyZWN0aW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgcXVlcnlTZXJ2aWNlOiBRdWVyeVNlcnZpY2VcbiAgKSB7IH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucXVlcnlTZXJ2aWNlLnF1ZXJ5RW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdEVudGl0eVN0b3JlcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5pdFN0b3BzRmVhdHVyZVN0b3JlKHRoaXMuc3RvcHNGZWF0dXJlU3RvcmUsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICAgIGluaXRSb3V0ZXNGZWF0dXJlU3RvcmUodGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICAgIGluaXRTdGVwRmVhdHVyZVN0b3JlKHRoaXMuc3RlcEZlYXR1cmVTdG9yZSk7XG4gICAgICB0aGlzLmluaXRPbEludGVyYWN0aW9uKCk7XG4gICAgfSwgMSk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucXVlcnlTZXJ2aWNlLnF1ZXJ5RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5zdG9yZUVtcHR5JCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN0b3JlQ2hhbmdlJCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvdXRlc1F1ZXJpZXMkJC5tYXAoKHUpID0+IHUudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy56b29tUm91dGUkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZnJlZXplU3RvcmVzKCk7XG4gIH1cblxuICBwcml2YXRlIGZyZWV6ZVN0b3JlcygpIHtcbiAgICB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmxheWVyLm1hcC5vbC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLnNlbGVjdFN0b3BJbnRlcmFjdGlvbik7XG4gICAgdGhpcy5zdG9wc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAub2wucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy50cmFuc2xhdGVTdG9wKTtcbiAgICB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAub2wucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5zZWxlY3RlZFJvdXRlKTtcbiAgICB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmRlYWN0aXZhdGVTdHJhdGVneU9mVHlwZShGZWF0dXJlU3RvcmVMb2FkaW5nU3RyYXRlZ3kpO1xuICAgIHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmRlYWN0aXZhdGVTdHJhdGVneU9mVHlwZShGZWF0dXJlU3RvcmVMb2FkaW5nU3RyYXRlZ3kpO1xuICAgIHRoaXMuc3RlcEZlYXR1cmVTdG9yZS5kZWFjdGl2YXRlU3RyYXRlZ3lPZlR5cGUoRmVhdHVyZVN0b3JlTG9hZGluZ1N0cmF0ZWd5KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEVudGl0eVN0b3JlcygpIHtcbiAgICB0aGlzLndhdGNoZXIgPSBuZXcgRW50aXR5U3RvcmVXYXRjaGVyKHRoaXMuc3RvcHNTdG9yZSwgdGhpcy5jZFJlZik7XG4gICAgdGhpcy5tb25pdG9yRW1wdHlFbnRpdHlTdG9yZSgpO1xuICAgIHRoaXMubW9uaXRvckVudGl0eVN0b3JlQ2hhbmdlKCk7XG4gICAgdGhpcy5tb25pdG9yQWN0aXZlUm91dGVab29tKCk7XG4gIH1cblxuICBwcml2YXRlIG1vbml0b3JBY3RpdmVSb3V0ZVpvb20oKSB7XG4gICAgdGhpcy56b29tUm91dGUkJCA9IHRoaXMuem9vbVRvQWN0aXZlUm91dGUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUuY291bnQgPj0gMSkge1xuICAgICAgICBjb25zdCBhY3RpdmVSb3V0ZSA9IHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmFsbCgpLmZpbmQocm91dGUgPT4gcm91dGUucHJvcGVydGllcy5hY3RpdmUpO1xuXG4gICAgICAgIGlmIChhY3RpdmVSb3V0ZSkge1xuICAgICAgICAgIGFjdGl2ZVJvdXRlLm9sLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgY29uc3Qgcm91dGVFeHRlbnQgPSBhY3RpdmVSb3V0ZS5vbC5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpO1xuICAgICAgICAgIHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmxheWVyLm1hcC52aWV3Q29udHJvbGxlci56b29tVG9FeHRlbnQocm91dGVFeHRlbnQgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPbEludGVyYWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0U3RvcEludGVyYWN0aW9uID0gbmV3IG9sSW50ZXJhY3Rpb24uU2VsZWN0KHtcbiAgICAgIGxheWVyczogW3RoaXMuc3RvcHNGZWF0dXJlU3RvcmUubGF5ZXIub2xdLFxuICAgICAgaGl0VG9sZXJhbmNlOiA3LFxuICAgICAgY29uZGl0aW9uOiAoZXZlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnR5cGUgPT09ICdwb2ludGVybW92ZScgJiYgIWV2ZW50LmRyYWdnaW5nO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmFuc2xhdGVTdG9wID0gbmV3IG9sSW50ZXJhY3Rpb24uVHJhbnNsYXRlKHtcbiAgICAgIGZlYXR1cmVzOiB0aGlzLnNlbGVjdFN0b3BJbnRlcmFjdGlvbi5nZXRGZWF0dXJlcygpXG4gICAgfSk7XG4gICAgdGhpcy50cmFuc2xhdGVTdG9wLm9uKCd0cmFuc2xhdGluZycsIChldnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmlzVHJhbnNsYXRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5leGVjdXRlU3RvcFRyYW5zbGF0aW9uKGV2dC5mZWF0dXJlcyk7XG4gICAgfSk7XG4gICAgdGhpcy50cmFuc2xhdGVTdG9wLm9uKCd0cmFuc2xhdGVlbmQnLCAoZXZ0OiBUcmFuc2xhdGVFdmVudCkgPT4ge1xuICAgICAgdGhpcy5pc1RyYW5zbGF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmV4ZWN1dGVTdG9wVHJhbnNsYXRpb24oZXZ0LmZlYXR1cmVzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0ZWRSb3V0ZSA9IG5ldyBvbEludGVyYWN0aW9uLlNlbGVjdCh7XG4gICAgICBsYXllcnM6IFt0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5sYXllci5vbF0sXG4gICAgICBjb25kaXRpb246IG9sQ29uZGl0aW9uLmNsaWNrLFxuICAgICAgaGl0VG9sZXJhbmNlOiA3LFxuICAgICAgZmlsdGVyOiBmZWF0dXJlID0+IHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0KCd0eXBlJykgPT09IERpcmVjdGlvblR5cGUuUm91dGUgJiZcbiAgICAgICAgICBmZWF0dXJlLmdldCgnYWN0aXZlJykgJiZcbiAgICAgICAgICAhdGhpcy5pc1RyYW5zbGF0aW5nO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3V0ZS5vbignc2VsZWN0JywgKGV2dDogU2VsZWN0RXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmZvY3VzT25TdG9wID09PSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RDb29yZGluYXRlcyA9IHJvdW5kQ29vcmRUbyhcbiAgICAgICAgICBvbFByb2oudHJhbnNmb3JtKFxuICAgICAgICAgICAgKGV2dCBhcyBhbnkpLm1hcEJyb3dzZXJFdmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUubGF5ZXIubWFwLnByb2plY3Rpb24sXG4gICAgICAgICAgICB0aGlzLnByb2plY3Rpb25cbiAgICAgICAgICApIGFzIFtudW1iZXIsIG51bWJlcl0sIHRoaXMuY29vcmRSb3VuZGVkRGVjaW1hbHMpO1xuICAgICAgICBjb25zdCBhZGRlZFN0b3AgPSBhZGRTdG9wVG9TdG9yZSh0aGlzLnN0b3BzU3RvcmUpO1xuICAgICAgICBhZGRlZFN0b3AudGV4dCA9IHNlbGVjdENvb3JkaW5hdGVzLmpvaW4oJywnKTtcbiAgICAgICAgYWRkZWRTdG9wLmNvb3JkaW5hdGVzID0gW3NlbGVjdENvb3JkaW5hdGVzWzBdLCBzZWxlY3RDb29yZGluYXRlc1sxXV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmxheWVyLm1hcC5vbC5hZGRJbnRlcmFjdGlvbih0aGlzLnNlbGVjdFN0b3BJbnRlcmFjdGlvbik7XG4gICAgdGhpcy5zdG9wc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAub2wuYWRkSW50ZXJhY3Rpb24odGhpcy50cmFuc2xhdGVTdG9wKTtcbiAgICB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAub2wuYWRkSW50ZXJhY3Rpb24odGhpcy5zZWxlY3RlZFJvdXRlKTtcbiAgfVxuXG4gIG9uU3RvcElucHV0SGFzRm9jdXNDaGFuZ2Uoc3RvcElucHV0SGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICBzdG9wSW5wdXRIYXNGb2N1cyA/XG4gICAgICB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAub2wucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5zZWxlY3RlZFJvdXRlKSA6XG4gICAgICB0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAub2wuYWRkSW50ZXJhY3Rpb24odGhpcy5zZWxlY3RlZFJvdXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZVN0b3BUcmFuc2xhdGlvbihcbiAgICBmZWF0dXJlczogQ29sbGVjdGlvbjxhbnk+XG4gICkge1xuICAgIGlmIChmZWF0dXJlcy5nZXRMZW5ndGgoKSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaXJzdEZlYXR1cmUgPSBmZWF0dXJlcy5nZXRBcnJheSgpWzBdO1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRTdG9wSWQgPSBmaXJzdEZlYXR1cmUuZ2V0SWQoKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uQ29vcmRpbmF0ZXMgPSBvbFByb2oudHJhbnNmb3JtKFxuICAgICAgZmlyc3RGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSxcbiAgICAgIHRoaXMuc3RvcHNGZWF0dXJlU3RvcmUubGF5ZXIubWFwLnByb2plY3Rpb24sXG4gICAgICB0aGlzLnByb2plY3Rpb25cbiAgICApO1xuICAgIGNvbnN0IHRyYW5zbGF0ZWRTdG9wID0gdGhpcy5zdG9wc1N0b3JlLmdldCh0cmFuc2xhdGVkU3RvcElkKTtcbiAgICBjb25zdCByb3VuZGVkQ29vcmQgPSByb3VuZENvb3JkVG8odHJhbnNsYXRpb25Db29yZGluYXRlcyBhcyBbbnVtYmVyLCBudW1iZXJdLCB0aGlzLmNvb3JkUm91bmRlZERlY2ltYWxzKTtcbiAgICB0cmFuc2xhdGVkU3RvcC5jb29yZGluYXRlcyA9IHJvdW5kZWRDb29yZDtcbiAgICB0cmFuc2xhdGVkU3RvcC50ZXh0ID0gcm91bmRlZENvb3JkLmpvaW4oJywnKTtcbiAgICB0aGlzLnN0b3BzU3RvcmUudXBkYXRlKHRyYW5zbGF0ZWRTdG9wKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBtb25pdG9yRW1wdHlFbnRpdHlTdG9yZSgpIHtcbiAgICAvLyBXYXRjaCBpZiB0aGUgc3RvcmUgaXMgZW1wdHkgdG8gcmVzZXQgaXRcbiAgICB0aGlzLnN0b3JlRW1wdHkkJCA9IHRoaXMuc3RvcHNTdG9yZS5jb3VudCRcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApLnN1YnNjcmliZSgoY291bnQpID0+IHtcbiAgICAgICAgaWYgKGNvdW50IDwgMikge1xuICAgICAgICAgIGFkZFN0b3BUb1N0b3JlKHRoaXMuc3RvcHNTdG9yZSk7XG4gICAgICAgICAgaWYgKHRoaXMuc3RvcHNTdG9yZS5jb3VudCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5zdG9wc1N0b3JlLnN0b3JlSW5pdGlhbGl6ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RvcHNTdG9yZS5zdG9yZUluaXRpYWxpemVkJC5uZXh0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlc1F1ZXJpZXMkJC5tYXAoKHUpID0+IHUudW5zdWJzY3JpYmUoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbW9uaXRvckVudGl0eVN0b3JlQ2hhbmdlKCkge1xuICAgIHRoaXMuc3RvcmVDaGFuZ2UkJCA9IHRoaXMuc3RvcHNTdG9yZS5lbnRpdGllcyRcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSlcbiAgICAgIC5zdWJzY3JpYmUoKHN0b3BzOiBTdG9wW10pID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVTdG9wRGlmZihzdG9wcyk7XG4gICAgICAgIHVwZGF0ZVN0b3JlU29ydGluZyh0aGlzLnN0b3BzU3RvcmUpO1xuICAgICAgICB0aGlzLmhhbmRsZVN0b3BzRmVhdHVyZSgpO1xuICAgICAgICB0aGlzLmdldFJvdXRlcyh0aGlzLmlzVHJhbnNsYXRpbmcpO1xuICAgICAgfSk7XG4gIH1cblxuICBjYW5jZWxTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hzJCQubWFwKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RvcERpZmYoc3RvcHM6IFN0b3BbXSkge1xuICAgIGNvbnN0IHNpbXBsaWZpZWRTdG9wcyA9IHN0b3BzLm1hcCgoc3RvcDogU3RvcCkgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLnJlbW92ZVVuZGVmaW5lZCh7IC4uLnsgaWQ6IHN0b3AuaWQsIHRleHQ6IHN0b3AudGV4dCwgY29vcmRpbmF0ZXM6IHN0b3AuY29vcmRpbmF0ZXMgfSB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBkaWZmID0gQ2hhbmdlVXRpbHMuZmluZENoYW5nZXModGhpcy5wcmV2aW91c1N0b3BzLCBzaW1wbGlmaWVkU3RvcHMsIFsnY29vcmRpbmF0ZXMnXSk7XG4gICAgY29uc3Qgc3RvcElkVG9Qcm9jZXNzID0gZGlmZi5hZGRlZC5jb25jYXQoZGlmZi5tb2RpZmllZCk7XG4gICAgaWYgKHN0b3BJZFRvUHJvY2Vzcykge1xuICAgICAgc3RvcElkVG9Qcm9jZXNzLm1hcCgoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRTdG9wID0gKGNoYW5nZS5uZXdWYWx1ZSBhcyBTdG9wKTtcbiAgICAgICAgaWYgKGNoYW5nZWRTdG9wKSB7XG4gICAgICAgICAgY29uc3Qgc3RvcDogU3RvcCA9IHRoaXMuc3RvcHNTdG9yZS5nZXQoY2hhbmdlZFN0b3AuaWQpO1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSBzdG9wLnRleHQ7XG4gICAgICAgICAgaWYgKCF0ZXJtIHx8IHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gc3RyaW5nVG9Mb25MYXQodGVybSwgdGhpcy5zdG9wc0ZlYXR1cmVTdG9yZS5sYXllci5tYXAucHJvamVjdGlvbik7XG4gICAgICAgICAgbGV0IHJlc2VhcmNoZXM6IFJlc2VhcmNoW107XG4gICAgICAgICAgbGV0IGlzQ29vcmQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UubG9uTGF0KSB7XG4gICAgICAgICAgICBpc0Nvb3JkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzZWFyY2hlcyA9IHRoaXMuc2VhcmNoU2VydmljZS5zZWFyY2godGVybSwgeyBzZWFyY2hUeXBlOiAnRmVhdHVyZScgfSk7XG4gICAgICAgICAgdGhpcy5jYW5jZWxTZWFyY2goKTtcbiAgICAgICAgICBjb25zdCByZXF1ZXN0cyQgPSByZXNlYXJjaGVzLm1hcChyZXMgPT4gcmVzLnJlcXVlc3RcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzdWx0czogU2VhcmNoUmVzdWx0W10pID0+IHJlc3VsdHMuZmlsdGVyKHIgPT5cbiAgICAgICAgICAgICAgaXNDb29yZCA/IHIuZGF0YS5nZW9tZXRyeS50eXBlID09PSAnUG9pbnQnICYmIHIuZGF0YS5nZW9tZXRyeSA6IHIuZGF0YS5nZW9tZXRyeSkpKVxuXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNlYXJjaHMkJCA9IHJlcXVlc3RzJC5tYXAoKHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LnBpcGUobWFwKChyZXN1bHRzOiBTZWFyY2hSZXN1bHRbXSkgPT4gcmVzdWx0cy5maWx0ZXIociA9PlxuICAgICAgICAgICAgICBpc0Nvb3JkID8gci5kYXRhLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcgJiYgci5kYXRhLmdlb21ldHJ5IDogci5kYXRhLmdlb21ldHJ5KSkpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogU2VhcmNoUmVzdWx0W10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IHJlc1swXS5zb3VyY2U7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0gcmVzWzBdLm1ldGE7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gcmVzLm1hcChyID0+IHIuZGF0YSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIXN0b3Auc2VhcmNoUHJvcG9zYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Auc2VhcmNoUHJvcG9zYWxzID0gW107XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzdG9wLnNlYXJjaFByb3Bvc2FscyA9IHN0b3Auc2VhcmNoUHJvcG9zYWxzLmZpbHRlcihzcCA9PiBzcC50eXBlID09PSAoaXNDb29yZCA/IFByb3Bvc2FsVHlwZS5Db29yZCA6IFByb3Bvc2FsVHlwZS5UZXh0KSk7XG4gICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkU291cmNlID0gc3RvcC5zZWFyY2hQcm9wb3NhbHMuZmluZChzcCA9PiBzcC5zb3VyY2UgPT09IHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc3RvcmVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZFNvdXJjZS5yZXN1bHRzID0gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3Auc2VhcmNoUHJvcG9zYWxzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGlzQ29vcmQgPyBQcm9wb3NhbFR5cGUuQ29vcmQgOiBQcm9wb3NhbFR5cGUuVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgbWV0YSxcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzU3RvcHMgPSBzaW1wbGlmaWVkU3RvcHM7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0b3BzRmVhdHVyZSgpIHtcbiAgICBjb25zdCBzdG9wcyA9IHRoaXMuc3RvcHNTdG9yZS5hbGwoKTtcbiAgICBjb25zdCBzdG9wc1dpdGhDb29yZGluYXRlcyA9IHN0b3BzLmZpbHRlcihzdG9wID0+IHN0b3AuY29vcmRpbmF0ZXMpO1xuICAgIHN0b3BzV2l0aENvb3JkaW5hdGVzLm1hcChzdG9wID0+IHRoaXMuYWRkU3RvcE92ZXJsYXkoc3RvcCkpO1xuICAgIHRoaXMuc3RvcHNGZWF0dXJlU3RvcmUuYWxsKCkubWFwKFxuICAgICAgKHN0b3BGZWF0dXJlOiBGZWF0dXJlPEZlYXR1cmVXaXRoU3RvcFByb3BlcnRpZXM+KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zdG9wc1N0b3JlLmdldChzdG9wRmVhdHVyZS5wcm9wZXJ0aWVzLmlkKSkge1xuICAgICAgICAgIHRoaXMuc3RvcHNGZWF0dXJlU3RvcmUuZGVsZXRlKHN0b3BGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgY29uc3Qgc3RvcHNXaXRob3V0Q29vcmRpbmF0ZXMgPSBzdG9wcy5maWx0ZXIoc3RvcCA9PiAhc3RvcC5jb29yZGluYXRlcyk7XG4gICAgc3RvcHNXaXRob3V0Q29vcmRpbmF0ZXMubWFwKHN0b3AgPT4ge1xuICAgICAgY29uc3Qgc3RvcEZlYXR1cmUgPSB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmdldChzdG9wLmlkKTtcbiAgICAgIGlmIChzdG9wRmVhdHVyZSkge1xuICAgICAgICB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLmRlbGV0ZShzdG9wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlcyhpc092ZXJ2aWV3OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdG9wc1dpdGhDb29yZGluYXRlcyA9IHRoaXMuc3RvcHNTdG9yZS52aWV3XG4gICAgICAuYWxsKClcbiAgICAgIC5maWx0ZXIoc3RvcCA9PiBzdG9wLmNvb3JkaW5hdGVzKTtcbiAgICBpZiAoc3RvcHNXaXRoQ29vcmRpbmF0ZXMubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUuZGVsZXRlTWFueSh0aGlzLnJvdXRlc0ZlYXR1cmVTdG9yZS5hbGwoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm91bmRlZENvb3JkaW5hdGVzID0gc3RvcHNXaXRoQ29vcmRpbmF0ZXMubWFwKChzdG9wKSA9PiB7XG4gICAgICBjb25zdCByb3VuZGVkQ29vcmQgPSByb3VuZENvb3JkVG8oc3RvcC5jb29yZGluYXRlcywgdGhpcy5jb29yZFJvdW5kZWREZWNpbWFscyk7XG4gICAgICByZXR1cm4gcm91bmRlZENvb3JkO1xuICAgIH0pO1xuICAgIGNvbnN0IG92ZXJ2aWV3RGlyZWN0aW9uc09wdGlvbnM6IERpcmVjdGlvbk9wdGlvbnMgPSB7XG4gICAgICBvdmVydmlldzogdHJ1ZSxcbiAgICAgIHN0ZXBzOiBmYWxzZSxcbiAgICAgIGFsdGVybmF0aXZlczogZmFsc2UsXG4gICAgICBjb250aW51ZV9zdHJhaWdodDogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMucm91dGVzUXVlcmllcyQkLm1hcCgodSkgPT4gdS51bnN1YnNjcmliZSgpKTtcbiAgICBjb25zdCByb3V0ZVJlc3BvbnNlID0gdGhpcy5kaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICAgIHJvdW5kZWRDb29yZGluYXRlcyxcbiAgICAgIGlzT3ZlcnZpZXcgPyBvdmVydmlld0RpcmVjdGlvbnNPcHRpb25zIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgICBpZiAocm91dGVSZXNwb25zZSkge1xuICAgICAgcm91dGVSZXNwb25zZS5tYXAocmVzID0+XG4gICAgICAgIHRoaXMucm91dGVzUXVlcmllcyQkLnB1c2goXG4gICAgICAgICAgcmVzLnN1YnNjcmliZShkaXJlY3Rpb25zID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLmRlbGV0ZU1hbnkodGhpcy5yb3V0ZXNGZWF0dXJlU3RvcmUuYWxsKCkpO1xuICAgICAgICAgICAgZGlyZWN0aW9ucy5tYXAoZGlyZWN0aW9uID0+XG4gICAgICAgICAgICAgIGFkZERpcmVjdGlvblRvUm91dGVzRmVhdHVyZVN0b3JlKFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVzRmVhdHVyZVN0b3JlLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBkaXJlY3Rpb25zWzBdID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRTdG9wT3ZlcmxheShzdG9wOiBTdG9wKSB7XG4gICAgYWRkU3RvcFRvU3RvcHNGZWF0dXJlU3RvcmUoc3RvcCwgdGhpcy5zdG9wc1N0b3JlLCB0aGlzLnN0b3BzRmVhdHVyZVN0b3JlLCB0aGlzLnByb2plY3Rpb24sIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgfVxufVxuIiwiPGlnby1kaXJlY3Rpb25zLWJ1dHRvbnMgW2NvbnRleHRVcmldPVwiY29udGV4dFVyaVwiIFt6b29tVG9BY3RpdmVSb3V0ZSRdPVwiem9vbVRvQWN0aXZlUm91dGUkXCIgW3JvdXRlc0ZlYXR1cmVTdG9yZV09XCJyb3V0ZXNGZWF0dXJlU3RvcmVcIiBbc3RvcHNTdG9yZV09XCJzdG9wc1N0b3JlXCI+PC9pZ28tZGlyZWN0aW9ucy1idXR0b25zPlxuXG48aWdvLWRpcmVjdGlvbnMtaW5wdXRzIChzdG9wSW5wdXRIYXNGb2N1cyk9XCJvblN0b3BJbnB1dEhhc0ZvY3VzQ2hhbmdlKCRldmVudClcIiBbY29vcmRSb3VuZGVkRGVjaW1hbHNdPVwiY29vcmRSb3VuZGVkRGVjaW1hbHNcIiBbcHJvamVjdGlvbl09XCJwcm9qZWN0aW9uXCIgW3N0b3BzRmVhdHVyZVN0b3JlXT1cInN0b3BzRmVhdHVyZVN0b3JlXCIgW3N0b3BzU3RvcmVdPVwic3RvcHNTdG9yZVwiIFtkZWJvdW5jZV09XCJkZWJvdW5jZVwiIFtsZW5ndGhdPVwibGVuZ3RoXCI+PC9pZ28tZGlyZWN0aW9ucy1pbnB1dHM+XG48YnI+XG48aWdvLWRpcmVjdGlvbnMtcmVzdWx0cyBbc3RlcEZlYXR1cmVTdG9yZV09XCJzdGVwRmVhdHVyZVN0b3JlXCIgW3JvdXRlc0ZlYXR1cmVTdG9yZV09XCJyb3V0ZXNGZWF0dXJlU3RvcmVcIj48L2lnby1kaXJlY3Rpb25zLXJlc3VsdHM+Il19