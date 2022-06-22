import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActionStore, EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy, EntityTableColumnRenderer } from '@igo2/common';
import { skipWhile, take } from 'rxjs/operators';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { FeatureMotion, FeatureStore, FeatureStoreInMapExtentStrategy, FeatureStoreInMapResolutionStrategy, FeatureStoreLoadingLayerStrategy, FeatureStoreSelectionStrategy } from '../../feature';
import { LinkedProperties, VectorLayer } from '../../layer';
import { WfsWorkspace } from './wfs-workspace';
import * as i0 from "@angular/core";
import * as i1 from "../../layer";
import * as i2 from "@igo2/core";
export class WmsWorkspaceService {
    constructor(layerService, storageService) {
        this.layerService = layerService;
        this.storageService = storageService;
        this.ws$ = new BehaviorSubject(undefined);
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    createWorkspace(layer, map) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!layer.options.workspace ||
            map.layers.find(lay => lay.id === layer.id + '.WfsWorkspaceTableDest') ||
            layer.dataSource.options.edition) {
            return;
        }
        const dataSource = layer.dataSource;
        const wmsLinkId = layer.id + '.WmsWorkspaceTableSrc';
        const wfsLinkId = layer.id + '.WfsWorkspaceTableDest';
        if (!layer.options.linkedLayers) {
            layer.options.linkedLayers = { linkId: wmsLinkId, links: [] };
        }
        const linkProperties = {
            bidirectionnal: true,
            syncedDelete: true,
            linkedIds: [wfsLinkId],
            properties: [
                LinkedProperties.ZINDEX,
                LinkedProperties.VISIBLE
            ]
        };
        if (!((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.minResolution)) {
            linkProperties.properties.push(LinkedProperties.MINRESOLUTION);
        }
        let hasOgcFilters = false;
        if ((_b = dataSource.options.ogcFilters) === null || _b === void 0 ? void 0 : _b.enabled) {
            linkProperties.properties.push(LinkedProperties.OGCFILTERS);
            hasOgcFilters = true;
        }
        if (!((_c = layer.options.workspace) === null || _c === void 0 ? void 0 : _c.maxResolution)) {
            linkProperties.properties.push(LinkedProperties.MAXRESOLUTION);
        }
        let clonedLinks = [];
        if (layer.options.linkedLayers.links) {
            clonedLinks = JSON.parse(JSON.stringify(layer.options.linkedLayers.links));
        }
        clonedLinks.push(linkProperties);
        layer.options.linkedLayers.linkId = layer.options.linkedLayers.linkId ? layer.options.linkedLayers.linkId : wmsLinkId,
            layer.options.linkedLayers.links = clonedLinks;
        let wks;
        let wksLayerOption = {
            srcId: layer.id,
            workspaceId: undefined,
            enabled: false,
            queryOptions: {
                mapQueryOnOpenTab: (_e = (_d = layer.options.workspace) === null || _d === void 0 ? void 0 : _d.queryOptions) === null || _e === void 0 ? void 0 : _e.mapQueryOnOpenTab,
                tabQuery: (_g = (_f = layer.options.workspace) === null || _f === void 0 ? void 0 : _f.queryOptions) === null || _g === void 0 ? void 0 : _g.tabQuery
            },
            pageSize: (_h = layer.options.workspace) === null || _h === void 0 ? void 0 : _h.pageSize,
            pageSizeOptions: (_j = layer.options.workspace) === null || _j === void 0 ? void 0 : _j.pageSizeOptions
        };
        this.layerService
            .createAsyncLayer({
            isIgoInternalLayer: true,
            id: wfsLinkId,
            linkedLayers: {
                linkId: wfsLinkId
            },
            workspace: wksLayerOption,
            showInLayerList: false,
            opacity: 0,
            title: layer.title,
            minResolution: ((_k = layer.options.workspace) === null || _k === void 0 ? void 0 : _k.minResolution) || layer.minResolution || 0,
            maxResolution: ((_l = layer.options.workspace) === null || _l === void 0 ? void 0 : _l.maxResolution) || layer.maxResolution || Infinity,
            sourceOptions: {
                download: dataSource.options.download,
                type: 'wfs',
                url: dataSource.options.urlWfs || dataSource.options.url,
                queryable: true,
                relations: dataSource.options.relations,
                queryTitle: dataSource.options.queryTitle,
                queryFormatAsWms: dataSource.options.queryFormatAsWms,
                params: dataSource.options.paramsWFS,
                ogcFilters: Object.assign({}, dataSource.ogcFilters$.value, { enabled: hasOgcFilters }),
                sourceFields: dataSource.options.sourceFields || undefined
            }
        })
            .subscribe((workspaceLayer) => {
            var _a, _b, _c, _d, _e, _f, _g;
            map.addLayer(workspaceLayer);
            layer.ol.setProperties({ linkedLayers: { linkId: layer.options.linkedLayers.linkId, links: clonedLinks } }, false);
            workspaceLayer.dataSource.ol.refresh();
            if (!((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled)) {
                return;
            }
            wks = new WfsWorkspace({
                id: layer.id,
                title: layer.title,
                layer: workspaceLayer,
                map,
                entityStore: this.createFeatureStore(workspaceLayer, map),
                actionStore: new ActionStore([]),
                meta: {
                    tableTemplate: undefined
                }
            });
            this.createTableTemplate(wks, workspaceLayer);
            workspaceLayer.options.workspace.workspaceId = workspaceLayer.id;
            layer.options.workspace = Object.assign({}, layer.options.workspace, {
                enabled: true,
                srcId: layer.id,
                workspaceId: workspaceLayer.id,
                queryOptions: {
                    mapQueryOnOpenTab: (_c = (_b = layer.options.workspace) === null || _b === void 0 ? void 0 : _b.queryOptions) === null || _c === void 0 ? void 0 : _c.mapQueryOnOpenTab,
                    tabQuery: (_e = (_d = layer.options.workspace) === null || _d === void 0 ? void 0 : _d.queryOptions) === null || _e === void 0 ? void 0 : _e.tabQuery
                },
                pageSize: (_f = layer.options.workspace) === null || _f === void 0 ? void 0 : _f.pageSize,
                pageSizeOptions: (_g = layer.options.workspace) === null || _g === void 0 ? void 0 : _g.pageSizeOptions
            });
            delete dataSource.options.download;
            return wks;
        });
        return wks;
    }
    createFeatureStore(layer, map) {
        const store = new FeatureStore([], { map });
        store.bindLayer(layer);
        const loadingStrategy = new FeatureStoreLoadingLayerStrategy({});
        const inMapExtentStrategy = new FeatureStoreInMapExtentStrategy({});
        const inMapResolutionStrategy = new FeatureStoreInMapResolutionStrategy({});
        const selectedRecordStrategy = new EntityStoreFilterSelectionStrategy({});
        const selectionStrategy = new FeatureStoreSelectionStrategy({
            layer: new VectorLayer({
                zIndex: 300,
                source: new FeatureDataSource(),
                style: undefined,
                showInLayerList: false,
                exportable: false,
                browsable: false
            }),
            map,
            hitTolerance: 15,
            motion: this.zoomAuto ? FeatureMotion.Default : FeatureMotion.None,
            many: true,
            dragBox: true
        });
        store.addStrategy(loadingStrategy, true);
        store.addStrategy(inMapExtentStrategy, true);
        store.addStrategy(inMapResolutionStrategy, true);
        store.addStrategy(selectionStrategy, true);
        store.addStrategy(selectedRecordStrategy, false);
        store.addStrategy(this.createFilterInMapExtentOrResolutionStrategy(), true);
        return store;
    }
    createTableTemplate(workspace, layer) {
        const fields = layer.dataSource.options.sourceFields || [];
        const relations = layer.dataSource.options.relations || [];
        if (fields.length === 0) {
            workspace.entityStore.entities$.pipe(skipWhile(val => val.length === 0), take(1)).subscribe(entities => {
                const ol = entities[0].ol;
                const columnsFromFeatures = ol.getKeys()
                    .filter(col => !col.startsWith('_') &&
                    col !== 'geometry' &&
                    col !== ol.getGeometryName() &&
                    !col.match(/boundedby/gi))
                    .map(key => {
                    return {
                        name: `properties.${key}`,
                        title: key,
                        renderer: EntityTableColumnRenderer.UnsanitizedHTML
                    };
                });
                workspace.meta.tableTemplate = {
                    selection: true,
                    sort: true,
                    columns: columnsFromFeatures
                };
            });
            return;
        }
        const columns = fields.map((field) => {
            return {
                name: `properties.${field.name}`,
                title: field.alias ? field.alias : field.name,
                renderer: EntityTableColumnRenderer.UnsanitizedHTML,
                tooltip: field.tooltip
            };
        });
        const relationsColumn = relations.map((relation) => {
            return {
                name: `properties.${relation.name}`,
                title: relation.alias ? relation.alias : relation.name,
                renderer: EntityTableColumnRenderer.Icon,
                icon: relation.icon,
                parent: relation.parent,
                type: 'relation',
                tooltip: relation.tooltip,
                onClick: () => {
                    this.ws$.next(relation.title);
                },
                cellClassFunc: () => {
                    return { 'class_icon': true };
                }
            };
        });
        columns.push(...relationsColumn);
        workspace.meta.tableTemplate = {
            selection: true,
            sort: true,
            columns
        };
    }
    createFilterInMapExtentOrResolutionStrategy() {
        const filterClauseFunc = (record) => {
            return record.state.inMapExtent === true && record.state.inMapResolution === true;
        };
        return new EntityStoreFilterCustomFuncStrategy({ filterClauseFunc });
    }
}
WmsWorkspaceService.ɵfac = function WmsWorkspaceService_Factory(t) { return new (t || WmsWorkspaceService)(i0.ɵɵinject(i1.LayerService), i0.ɵɵinject(i2.StorageService)); };
WmsWorkspaceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WmsWorkspaceService, factory: WmsWorkspaceService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WmsWorkspaceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LayerService }, { type: i2.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLXdvcmtzcGFjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvd29ya3NwYWNlL3NoYXJlZC93bXMtd29ya3NwYWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxXQUFXLEVBRVgsbUNBQW1DLEVBQ25DLGtDQUFrQyxFQUVsQyx5QkFBeUIsRUFDSixNQUFNLGNBQWMsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTNGLE9BQU8sRUFFTCxhQUFhLEVBQ2IsWUFBWSxFQUNaLCtCQUErQixFQUMvQixtQ0FBbUMsRUFDbkMsZ0NBQWdDLEVBQ2hDLDZCQUE2QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE9BQU8sRUFBa0QsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVEvQyxNQUFNLE9BQU8sbUJBQW1CO0lBUTlCLFlBQW9CLFlBQTBCLEVBQVUsY0FBOEI7UUFBbEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGL0UsUUFBRyxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO0lBRXNDLENBQUM7SUFOM0YsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQVksQ0FBQztJQUN4RCxDQUFDO0lBTUQsZUFBZSxDQUFDLEtBQWlCLEVBQUUsR0FBVzs7UUFDNUMsSUFDRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUztZQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsR0FBRyx3QkFBd0IsQ0FBQztZQUN0RSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBQ0QsTUFBTSxVQUFVLEdBQWtCLEtBQUssQ0FBQyxVQUEyQixDQUFFO1FBQ3JFLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFLEdBQUcsdUJBQXVCLENBQUM7UUFDckQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyx3QkFBd0IsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUMvRDtRQUNELE1BQU0sY0FBYyxHQUFHO1lBQ3JCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN0QixVQUFVLEVBQUU7Z0JBQ1YsZ0JBQWdCLENBQUMsTUFBTTtnQkFDdkIsZ0JBQWdCLENBQUMsT0FBTzthQUFDO1NBQ0osQ0FBQztRQUUxQixJQUFJLENBQUMsQ0FBQSxNQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUywwQ0FBRSxhQUFhLENBQUEsRUFBRTtZQUMxQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLE1BQUMsVUFBVSxDQUFDLE9BQTBDLENBQUMsVUFBVSwwQ0FBRSxPQUFPLEVBQUU7WUFDOUUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxDQUFBLE1BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLDBDQUFFLGFBQWEsQ0FBQSxFQUFFO1lBQzNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxXQUFXLEdBQTJCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtZQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDNUU7UUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztZQUNuSCxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBR2pELElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxjQUFjLEdBQUc7WUFDbkIsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2YsV0FBVyxFQUFFLFNBQVM7WUFDdEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUU7Z0JBQ1osaUJBQWlCLEVBQUUsTUFBQSxNQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUywwQ0FBRSxZQUFZLDBDQUFFLGlCQUFpQjtnQkFDM0UsUUFBUSxFQUFFLE1BQUEsTUFBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsMENBQUUsWUFBWSwwQ0FBRSxRQUFRO2FBQzFEO1lBQ0QsUUFBUSxFQUFFLE1BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLDBDQUFFLFFBQVE7WUFDM0MsZUFBZSxFQUFFLE1BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLDBDQUFFLGVBQWU7U0FDMUQsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZO2FBQ2QsZ0JBQWdCLENBQUM7WUFDaEIsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixFQUFFLEVBQUUsU0FBUztZQUNiLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNELFNBQVMsRUFBRSxjQUFjO1lBQ3pCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGFBQWEsRUFBRSxDQUFBLE1BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLDBDQUFFLGFBQWEsS0FBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUM7WUFDakYsYUFBYSxFQUFFLENBQUEsTUFBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsMENBQUUsYUFBYSxLQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksUUFBUTtZQUN4RixhQUFhLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUTtnQkFDckMsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsR0FBRyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDeEQsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDdkMsVUFBVSxFQUFHLFVBQVUsQ0FBQyxPQUFzQyxDQUFDLFVBQVU7Z0JBQ3pFLGdCQUFnQixFQUFHLFVBQVUsQ0FBQyxPQUFzQyxDQUFDLGdCQUFnQjtnQkFDckYsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDcEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxDQUFDO2dCQUNyRixZQUFZLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksU0FBUzthQUM3QztTQUNoQixDQUFDO2FBQ0QsU0FBUyxDQUFDLENBQUMsY0FBMkIsRUFBRSxFQUFFOztZQUN6QyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuSCxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV2QyxJQUFJLENBQUMsQ0FBQSxNQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUywwQ0FBRSxPQUFPLENBQUEsRUFBRTtnQkFDckMsT0FBTzthQUNSO1lBQ0QsR0FBRyxHQUFHLElBQUksWUFBWSxDQUFDO2dCQUNyQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixLQUFLLEVBQUUsY0FBYztnQkFDckIsR0FBRztnQkFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUM7Z0JBQ3pELFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksRUFBRTtvQkFDSixhQUFhLEVBQUUsU0FBUztpQkFDekI7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBRTlDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUNqRTtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsV0FBVyxFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUM5QixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCLEVBQUUsTUFBQSxNQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUywwQ0FBRSxZQUFZLDBDQUFFLGlCQUFpQjtvQkFDM0UsUUFBUSxFQUFFLE1BQUEsTUFBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsMENBQUUsWUFBWSwwQ0FBRSxRQUFRO2lCQUMxRDtnQkFDRCxRQUFRLEVBQUUsTUFBQSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsMENBQUUsUUFBUTtnQkFDM0MsZUFBZSxFQUFFLE1BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLDBDQUFFLGVBQWU7YUFDbkMsQ0FBQyxDQUFDO1lBRTVCLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkMsT0FBTyxHQUFHLENBQUM7UUFFYixDQUFDLENBQUMsQ0FBQztRQUVMLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEtBQWtCLEVBQUUsR0FBVztRQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkIsTUFBTSxlQUFlLEdBQUcsSUFBSSxnQ0FBZ0MsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLG1CQUFtQixHQUFHLElBQUksK0JBQStCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLG1DQUFtQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxrQ0FBa0MsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRSxNQUFNLGlCQUFpQixHQUFHLElBQUksNkJBQTZCLENBQUM7WUFDMUQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUNyQixNQUFNLEVBQUUsR0FBRztnQkFDWCxNQUFNLEVBQUUsSUFBSSxpQkFBaUIsRUFBRTtnQkFDL0IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixVQUFVLEVBQUUsS0FBSztnQkFDakIsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQztZQUNGLEdBQUc7WUFDSCxZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUk7WUFDbEUsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxTQUF1QixFQUFFLEtBQWtCO1FBQ3JFLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFFM0QsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUUzRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDbEMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNyQixNQUFNLEVBQUUsR0FBSSxRQUFRLENBQUMsQ0FBQyxDQUFhLENBQUMsRUFBMkIsQ0FBQztnQkFDaEUsTUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFO3FCQUNyQyxNQUFNLENBQ0wsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUN6QixHQUFHLEtBQUssVUFBVTtvQkFDbEIsR0FBRyxLQUFLLEVBQUUsQ0FBQyxlQUFlLEVBQUU7b0JBQzVCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNULE9BQU87d0JBQ0wsSUFBSSxFQUFFLGNBQWMsR0FBRyxFQUFFO3dCQUN6QixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUseUJBQXlCLENBQUMsZUFBZTtxQkFDcEQsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztnQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRztvQkFDN0IsU0FBUyxFQUFFLElBQUk7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTyxFQUFFLG1CQUFtQjtpQkFDN0IsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWdDLEVBQUUsRUFBRTtZQUM5RCxPQUFPO2dCQUNMLElBQUksRUFBRSxjQUFjLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDN0MsUUFBUSxFQUFFLHlCQUF5QixDQUFDLGVBQWU7Z0JBQ25ELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN2QixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBeUIsRUFBRSxFQUFFO1lBQ2xFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLGNBQWMsUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDbkMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJO2dCQUN0RCxRQUFRLEVBQUUseUJBQXlCLENBQUMsSUFBSTtnQkFDeEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2dCQUNuQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07Z0JBQ3ZCLElBQUksRUFBRSxVQUFVO2dCQUNoQixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87Z0JBQ3pCLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELGFBQWEsRUFBRSxHQUFHLEVBQUU7b0JBQ2xCLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDN0IsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU87U0FDUixDQUFDO0lBQ0osQ0FBQztJQUVPLDJDQUEyQztRQUNqRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBNEIsRUFBRSxFQUFFO1lBQ3hELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQztRQUNwRixDQUFDLENBQUM7UUFDRixPQUFPLElBQUksbUNBQW1DLENBQUMsRUFBQyxnQkFBZ0IsRUFBbUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7O3NGQWhQVSxtQkFBbUI7eUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07dUZBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQWN0aW9uU3RvcmUsXG4gIEVudGl0eVJlY29yZCxcbiAgRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3ksXG4gIEVudGl0eVN0b3JlRmlsdGVyU2VsZWN0aW9uU3RyYXRlZ3ksXG4gIEVudGl0eVN0b3JlU3RyYXRlZ3lGdW5jT3B0aW9ucyxcbiAgRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlcixcbiAgRW50aXR5VGFibGVUZW1wbGF0ZSB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgc2tpcFdoaWxlLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmVsYXRpb25PcHRpb25zLCBTb3VyY2VGaWVsZHNPcHRpb25zUGFyYW1zLCBXTVNEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2ZlYXR1cmUtZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBXRlNEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL3dmcy1kYXRhc291cmNlLmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBGZWF0dXJlLFxuICBGZWF0dXJlTW90aW9uLFxuICBGZWF0dXJlU3RvcmUsXG4gIEZlYXR1cmVTdG9yZUluTWFwRXh0ZW50U3RyYXRlZ3ksXG4gIEZlYXR1cmVTdG9yZUluTWFwUmVzb2x1dGlvblN0cmF0ZWd5LFxuICBGZWF0dXJlU3RvcmVMb2FkaW5nTGF5ZXJTdHJhdGVneSxcbiAgRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9mZWF0dXJlJztcblxuaW1wb3J0IHsgT2djRmlsdGVyYWJsZURhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vZmlsdGVyL3NoYXJlZC9vZ2MtZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbWFnZUxheWVyLCBMYXllclNlcnZpY2UsIExheWVyc0xpbmtQcm9wZXJ0aWVzLCBMaW5rZWRQcm9wZXJ0aWVzLCBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyJztcbmltcG9ydCB7IEdlb1dvcmtzcGFjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuaW1wb3J0IHsgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9xdWVyeS9zaGFyZWQvcXVlcnkuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBXZnNXb3Jrc3BhY2UgfSBmcm9tICcuL3dmcy13b3Jrc3BhY2UnO1xuXG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV21zV29ya3NwYWNlU2VydmljZSB7XG5cbiAgZ2V0IHpvb21BdXRvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnem9vbUF1dG8nKSBhcyBib29sZWFuO1xuICB9XG5cbiAgcHVibGljIHdzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2UsIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlKSB7IH1cblxuICBjcmVhdGVXb3Jrc3BhY2UobGF5ZXI6IEltYWdlTGF5ZXIsIG1hcDogSWdvTWFwKTogV2ZzV29ya3NwYWNlIHtcbiAgICBpZiAoXG4gICAgICAhbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2UgfHxcbiAgICAgIG1hcC5sYXllcnMuZmluZChsYXkgPT4gbGF5LmlkID09PSBsYXllci5pZCArICcuV2ZzV29ya3NwYWNlVGFibGVEZXN0JykgfHxcbiAgICAgIGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5lZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGFTb3VyY2U6IFdNU0RhdGFTb3VyY2UgPSBsYXllci5kYXRhU291cmNlIGFzIFdNU0RhdGFTb3VyY2UgO1xuICAgIGNvbnN0IHdtc0xpbmtJZCA9IGxheWVyLmlkICsgJy5XbXNXb3Jrc3BhY2VUYWJsZVNyYyc7XG4gICAgY29uc3Qgd2ZzTGlua0lkID0gbGF5ZXIuaWQgKyAnLldmc1dvcmtzcGFjZVRhYmxlRGVzdCc7XG4gICAgaWYgKCFsYXllci5vcHRpb25zLmxpbmtlZExheWVycykge1xuICAgICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMgPSB7IGxpbmtJZDogd21zTGlua0lkLCBsaW5rczogW10gfTtcbiAgICB9XG4gICAgY29uc3QgbGlua1Byb3BlcnRpZXMgPSB7XG4gICAgICBiaWRpcmVjdGlvbm5hbDogdHJ1ZSxcbiAgICAgIHN5bmNlZERlbGV0ZTogdHJ1ZSxcbiAgICAgIGxpbmtlZElkczogW3dmc0xpbmtJZF0sXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIExpbmtlZFByb3BlcnRpZXMuWklOREVYLFxuICAgICAgICBMaW5rZWRQcm9wZXJ0aWVzLlZJU0lCTEVdXG4gICAgfSBhcyBMYXllcnNMaW5rUHJvcGVydGllcztcblxuICAgIGlmICghbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/Lm1pblJlc29sdXRpb24pIHtcbiAgICAgICBsaW5rUHJvcGVydGllcy5wcm9wZXJ0aWVzLnB1c2goTGlua2VkUHJvcGVydGllcy5NSU5SRVNPTFVUSU9OKTtcbiAgICB9XG4gICAgbGV0IGhhc09nY0ZpbHRlcnMgPSBmYWxzZTtcbiAgICBpZiAoKGRhdGFTb3VyY2Uub3B0aW9ucyBhcyBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLm9nY0ZpbHRlcnM/LmVuYWJsZWQpIHtcbiAgICAgIGxpbmtQcm9wZXJ0aWVzLnByb3BlcnRpZXMucHVzaChMaW5rZWRQcm9wZXJ0aWVzLk9HQ0ZJTFRFUlMpO1xuICAgICAgaGFzT2djRmlsdGVycyA9IHRydWU7XG4gICAgfVxuICAgIGlmICghbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/Lm1heFJlc29sdXRpb24pIHtcbiAgICAgIGxpbmtQcm9wZXJ0aWVzLnByb3BlcnRpZXMucHVzaChMaW5rZWRQcm9wZXJ0aWVzLk1BWFJFU09MVVRJT04pO1xuICAgIH1cblxuICAgIGxldCBjbG9uZWRMaW5rczogTGF5ZXJzTGlua1Byb3BlcnRpZXNbXSA9IFtdO1xuICAgIGlmIChsYXllci5vcHRpb25zLmxpbmtlZExheWVycy5saW5rcykge1xuICAgICAgY2xvbmVkTGlua3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxheWVyLm9wdGlvbnMubGlua2VkTGF5ZXJzLmxpbmtzKSk7XG4gICAgfVxuICAgIGNsb25lZExpbmtzLnB1c2gobGlua1Byb3BlcnRpZXMpO1xuXG4gICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkID0gbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkID8gbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua0lkIDogd21zTGlua0lkLFxuICAgICAgbGF5ZXIub3B0aW9ucy5saW5rZWRMYXllcnMubGlua3MgPSBjbG9uZWRMaW5rcztcbiAgICBpbnRlcmZhY2UgV0ZTb3B0aW9ucyBleHRlbmRzIFdGU0RhdGFTb3VyY2VPcHRpb25zLCBPZ2NGaWx0ZXJhYmxlRGF0YVNvdXJjZU9wdGlvbnMgeyB9XG5cbiAgICBsZXQgd2tzO1xuICAgIGxldCB3a3NMYXllck9wdGlvbiA9IHtcbiAgICAgIHNyY0lkOiBsYXllci5pZCxcbiAgICAgIHdvcmtzcGFjZUlkOiB1bmRlZmluZWQsXG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHF1ZXJ5T3B0aW9uczoge1xuICAgICAgICBtYXBRdWVyeU9uT3BlblRhYjogbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/LnF1ZXJ5T3B0aW9ucz8ubWFwUXVlcnlPbk9wZW5UYWIsXG4gICAgICAgIHRhYlF1ZXJ5OiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ucXVlcnlPcHRpb25zPy50YWJRdWVyeVxuICAgICAgfSxcbiAgICAgIHBhZ2VTaXplOiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ucGFnZVNpemUsXG4gICAgICBwYWdlU2l6ZU9wdGlvbnM6IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5wYWdlU2l6ZU9wdGlvbnNcbiAgICB9O1xuXG4gICAgdGhpcy5sYXllclNlcnZpY2VcbiAgICAgIC5jcmVhdGVBc3luY0xheWVyKHtcbiAgICAgICAgaXNJZ29JbnRlcm5hbExheWVyOiB0cnVlLFxuICAgICAgICBpZDogd2ZzTGlua0lkLFxuICAgICAgICBsaW5rZWRMYXllcnM6IHtcbiAgICAgICAgICBsaW5rSWQ6IHdmc0xpbmtJZFxuICAgICAgICB9LFxuICAgICAgICB3b3Jrc3BhY2U6IHdrc0xheWVyT3B0aW9uLFxuICAgICAgICBzaG93SW5MYXllckxpc3Q6IGZhbHNlLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0aXRsZTogbGF5ZXIudGl0bGUsXG4gICAgICAgIG1pblJlc29sdXRpb246IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5taW5SZXNvbHV0aW9uIHx8IGxheWVyLm1pblJlc29sdXRpb24gfHwgMCxcbiAgICAgICAgbWF4UmVzb2x1dGlvbjogbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/Lm1heFJlc29sdXRpb24gfHwgbGF5ZXIubWF4UmVzb2x1dGlvbiB8fCBJbmZpbml0eSxcbiAgICAgICAgc291cmNlT3B0aW9uczoge1xuICAgICAgICAgIGRvd25sb2FkOiBkYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQsXG4gICAgICAgICAgdHlwZTogJ3dmcycsXG4gICAgICAgICAgdXJsOiBkYXRhU291cmNlLm9wdGlvbnMudXJsV2ZzIHx8IGRhdGFTb3VyY2Uub3B0aW9ucy51cmwsXG4gICAgICAgICAgcXVlcnlhYmxlOiB0cnVlLFxuICAgICAgICAgIHJlbGF0aW9uczogZGF0YVNvdXJjZS5vcHRpb25zLnJlbGF0aW9ucyxcbiAgICAgICAgICBxdWVyeVRpdGxlOiAoZGF0YVNvdXJjZS5vcHRpb25zIGFzIFF1ZXJ5YWJsZURhdGFTb3VyY2VPcHRpb25zKS5xdWVyeVRpdGxlLFxuICAgICAgICAgIHF1ZXJ5Rm9ybWF0QXNXbXM6IChkYXRhU291cmNlLm9wdGlvbnMgYXMgUXVlcnlhYmxlRGF0YVNvdXJjZU9wdGlvbnMpLnF1ZXJ5Rm9ybWF0QXNXbXMsXG4gICAgICAgICAgcGFyYW1zOiBkYXRhU291cmNlLm9wdGlvbnMucGFyYW1zV0ZTLFxuICAgICAgICAgIG9nY0ZpbHRlcnM6IE9iamVjdC5hc3NpZ24oe30sIGRhdGFTb3VyY2Uub2djRmlsdGVycyQudmFsdWUsIHtlbmFibGVkOiBoYXNPZ2NGaWx0ZXJzfSksXG4gICAgICAgICAgc291cmNlRmllbGRzOiBkYXRhU291cmNlLm9wdGlvbnMuc291cmNlRmllbGRzIHx8IHVuZGVmaW5lZFxuICAgICAgICB9IGFzIFdGU29wdGlvbnNcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKCh3b3Jrc3BhY2VMYXllcjogVmVjdG9yTGF5ZXIpID0+IHtcbiAgICAgICAgbWFwLmFkZExheWVyKHdvcmtzcGFjZUxheWVyKTtcbiAgICAgICAgbGF5ZXIub2wuc2V0UHJvcGVydGllcyh7IGxpbmtlZExheWVyczogeyBsaW5rSWQ6IGxheWVyLm9wdGlvbnMubGlua2VkTGF5ZXJzLmxpbmtJZCwgbGlua3M6IGNsb25lZExpbmtzIH0gfSwgZmFsc2UpO1xuICAgICAgICB3b3Jrc3BhY2VMYXllci5kYXRhU291cmNlLm9sLnJlZnJlc2goKTtcblxuICAgICAgICBpZiAoIWxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5lbmFibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdrcyA9IG5ldyBXZnNXb3Jrc3BhY2Uoe1xuICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICB0aXRsZTogbGF5ZXIudGl0bGUsXG4gICAgICAgICAgbGF5ZXI6IHdvcmtzcGFjZUxheWVyLFxuICAgICAgICAgIG1hcCxcbiAgICAgICAgICBlbnRpdHlTdG9yZTogdGhpcy5jcmVhdGVGZWF0dXJlU3RvcmUod29ya3NwYWNlTGF5ZXIsIG1hcCksXG4gICAgICAgICAgYWN0aW9uU3RvcmU6IG5ldyBBY3Rpb25TdG9yZShbXSksXG4gICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgdGFibGVUZW1wbGF0ZTogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYWJsZVRlbXBsYXRlKHdrcywgd29ya3NwYWNlTGF5ZXIpO1xuXG4gICAgICAgIHdvcmtzcGFjZUxheWVyLm9wdGlvbnMud29ya3NwYWNlLndvcmtzcGFjZUlkID0gd29ya3NwYWNlTGF5ZXIuaWQ7XG4gICAgICAgIGxheWVyLm9wdGlvbnMud29ya3NwYWNlID0gT2JqZWN0LmFzc2lnbih7fSwgbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2UsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNyY0lkOiBsYXllci5pZCxcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiB3b3Jrc3BhY2VMYXllci5pZCxcbiAgICAgICAgICAgIHF1ZXJ5T3B0aW9uczoge1xuICAgICAgICAgICAgICBtYXBRdWVyeU9uT3BlblRhYjogbGF5ZXIub3B0aW9ucy53b3Jrc3BhY2U/LnF1ZXJ5T3B0aW9ucz8ubWFwUXVlcnlPbk9wZW5UYWIsXG4gICAgICAgICAgICAgIHRhYlF1ZXJ5OiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ucXVlcnlPcHRpb25zPy50YWJRdWVyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhZ2VTaXplOiBsYXllci5vcHRpb25zLndvcmtzcGFjZT8ucGFnZVNpemUsXG4gICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IGxheWVyLm9wdGlvbnMud29ya3NwYWNlPy5wYWdlU2l6ZU9wdGlvbnNcbiAgICAgICAgICB9IGFzIEdlb1dvcmtzcGFjZU9wdGlvbnMpO1xuXG4gICAgICAgIGRlbGV0ZSBkYXRhU291cmNlLm9wdGlvbnMuZG93bmxvYWQ7XG4gICAgICAgIHJldHVybiB3a3M7XG5cbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHdrcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRmVhdHVyZVN0b3JlKGxheWVyOiBWZWN0b3JMYXllciwgbWFwOiBJZ29NYXApOiBGZWF0dXJlU3RvcmUge1xuICAgIGNvbnN0IHN0b3JlID0gbmV3IEZlYXR1cmVTdG9yZShbXSwgeyBtYXAgfSk7XG4gICAgc3RvcmUuYmluZExheWVyKGxheWVyKTtcblxuICAgIGNvbnN0IGxvYWRpbmdTdHJhdGVneSA9IG5ldyBGZWF0dXJlU3RvcmVMb2FkaW5nTGF5ZXJTdHJhdGVneSh7fSk7XG4gICAgY29uc3QgaW5NYXBFeHRlbnRTdHJhdGVneSA9IG5ldyBGZWF0dXJlU3RvcmVJbk1hcEV4dGVudFN0cmF0ZWd5KHt9KTtcbiAgICBjb25zdCBpbk1hcFJlc29sdXRpb25TdHJhdGVneSA9IG5ldyBGZWF0dXJlU3RvcmVJbk1hcFJlc29sdXRpb25TdHJhdGVneSh7fSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRSZWNvcmRTdHJhdGVneSA9IG5ldyBFbnRpdHlTdG9yZUZpbHRlclNlbGVjdGlvblN0cmF0ZWd5KHt9KTtcbiAgICBjb25zdCBzZWxlY3Rpb25TdHJhdGVneSA9IG5ldyBGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneSh7XG4gICAgICBsYXllcjogbmV3IFZlY3RvckxheWVyKHtcbiAgICAgICAgekluZGV4OiAzMDAsXG4gICAgICAgIHNvdXJjZTogbmV3IEZlYXR1cmVEYXRhU291cmNlKCksXG4gICAgICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgICAgIHNob3dJbkxheWVyTGlzdDogZmFsc2UsXG4gICAgICAgIGV4cG9ydGFibGU6IGZhbHNlLFxuICAgICAgICBicm93c2FibGU6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIG1hcCxcbiAgICAgIGhpdFRvbGVyYW5jZTogMTUsXG4gICAgICBtb3Rpb246IHRoaXMuem9vbUF1dG8gPyBGZWF0dXJlTW90aW9uLkRlZmF1bHQgOiBGZWF0dXJlTW90aW9uLk5vbmUsXG4gICAgICBtYW55OiB0cnVlLFxuICAgICAgZHJhZ0JveDogdHJ1ZVxuICAgIH0pO1xuICAgIHN0b3JlLmFkZFN0cmF0ZWd5KGxvYWRpbmdTdHJhdGVneSwgdHJ1ZSk7XG4gICAgc3RvcmUuYWRkU3RyYXRlZ3koaW5NYXBFeHRlbnRTdHJhdGVneSwgdHJ1ZSk7XG4gICAgc3RvcmUuYWRkU3RyYXRlZ3koaW5NYXBSZXNvbHV0aW9uU3RyYXRlZ3ksIHRydWUpO1xuICAgIHN0b3JlLmFkZFN0cmF0ZWd5KHNlbGVjdGlvblN0cmF0ZWd5LCB0cnVlKTtcbiAgICBzdG9yZS5hZGRTdHJhdGVneShzZWxlY3RlZFJlY29yZFN0cmF0ZWd5LCBmYWxzZSk7XG4gICAgc3RvcmUuYWRkU3RyYXRlZ3kodGhpcy5jcmVhdGVGaWx0ZXJJbk1hcEV4dGVudE9yUmVzb2x1dGlvblN0cmF0ZWd5KCksIHRydWUpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGFibGVUZW1wbGF0ZSh3b3Jrc3BhY2U6IFdmc1dvcmtzcGFjZSwgbGF5ZXI6IFZlY3RvckxheWVyKTogRW50aXR5VGFibGVUZW1wbGF0ZSB7XG4gICAgY29uc3QgZmllbGRzID0gbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLnNvdXJjZUZpZWxkcyB8fCBbXTtcblxuICAgIGNvbnN0IHJlbGF0aW9ucyA9IGxheWVyLmRhdGFTb3VyY2Uub3B0aW9ucy5yZWxhdGlvbnMgfHwgW107XG5cbiAgICBpZiAoZmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd29ya3NwYWNlLmVudGl0eVN0b3JlLmVudGl0aWVzJC5waXBlKFxuICAgICAgICBza2lwV2hpbGUodmFsID0+IHZhbC5sZW5ndGggPT09IDApLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApLnN1YnNjcmliZShlbnRpdGllcyA9PiB7XG4gICAgICAgIGNvbnN0IG9sID0gKGVudGl0aWVzWzBdIGFzIEZlYXR1cmUpLm9sIGFzIG9sRmVhdHVyZTxPbEdlb21ldHJ5PjtcbiAgICAgICAgY29uc3QgY29sdW1uc0Zyb21GZWF0dXJlcyA9IG9sLmdldEtleXMoKVxuICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICBjb2wgPT4gIWNvbC5zdGFydHNXaXRoKCdfJykgJiZcbiAgICAgICAgICAgICAgY29sICE9PSAnZ2VvbWV0cnknICYmXG4gICAgICAgICAgICAgIGNvbCAhPT0gb2wuZ2V0R2VvbWV0cnlOYW1lKCkgJiZcbiAgICAgICAgICAgICAgIWNvbC5tYXRjaCgvYm91bmRlZGJ5L2dpKSlcbiAgICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiBgcHJvcGVydGllcy4ke2tleX1gLFxuICAgICAgICAgICAgICB0aXRsZToga2V5LFxuICAgICAgICAgICAgICByZW5kZXJlcjogRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5VbnNhbml0aXplZEhUTUxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIHdvcmtzcGFjZS5tZXRhLnRhYmxlVGVtcGxhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgIHNvcnQ6IHRydWUsXG4gICAgICAgICAgY29sdW1uczogY29sdW1uc0Zyb21GZWF0dXJlc1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbHVtbnMgPSBmaWVsZHMubWFwKChmaWVsZDogU291cmNlRmllbGRzT3B0aW9uc1BhcmFtcykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHByb3BlcnRpZXMuJHtmaWVsZC5uYW1lfWAsXG4gICAgICAgIHRpdGxlOiBmaWVsZC5hbGlhcyA/IGZpZWxkLmFsaWFzIDogZmllbGQubmFtZSxcbiAgICAgICAgcmVuZGVyZXI6IEVudGl0eVRhYmxlQ29sdW1uUmVuZGVyZXIuVW5zYW5pdGl6ZWRIVE1MLFxuICAgICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVsYXRpb25zQ29sdW1uID0gcmVsYXRpb25zLm1hcCgocmVsYXRpb246IFJlbGF0aW9uT3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHByb3BlcnRpZXMuJHtyZWxhdGlvbi5uYW1lfWAsXG4gICAgICAgIHRpdGxlOiByZWxhdGlvbi5hbGlhcyA/IHJlbGF0aW9uLmFsaWFzIDogcmVsYXRpb24ubmFtZSxcbiAgICAgICAgcmVuZGVyZXI6IEVudGl0eVRhYmxlQ29sdW1uUmVuZGVyZXIuSWNvbixcbiAgICAgICAgaWNvbjogcmVsYXRpb24uaWNvbixcbiAgICAgICAgcGFyZW50OiByZWxhdGlvbi5wYXJlbnQsXG4gICAgICAgIHR5cGU6ICdyZWxhdGlvbicsXG4gICAgICAgIHRvb2x0aXA6IHJlbGF0aW9uLnRvb2x0aXAsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud3MkLm5leHQocmVsYXRpb24udGl0bGUpO1xuICAgICAgICB9LFxuICAgICAgICBjZWxsQ2xhc3NGdW5jOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgJ2NsYXNzX2ljb24nOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb2x1bW5zLnB1c2goLi4ucmVsYXRpb25zQ29sdW1uKTtcbiAgICB3b3Jrc3BhY2UubWV0YS50YWJsZVRlbXBsYXRlID0ge1xuICAgICAgc2VsZWN0aW9uOiB0cnVlLFxuICAgICAgc29ydDogdHJ1ZSxcbiAgICAgIGNvbHVtbnNcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGaWx0ZXJJbk1hcEV4dGVudE9yUmVzb2x1dGlvblN0cmF0ZWd5KCk6IEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5IHtcbiAgICBjb25zdCBmaWx0ZXJDbGF1c2VGdW5jID0gKHJlY29yZDogRW50aXR5UmVjb3JkPG9iamVjdD4pID0+IHtcbiAgICAgIHJldHVybiByZWNvcmQuc3RhdGUuaW5NYXBFeHRlbnQgPT09IHRydWUgJiYgcmVjb3JkLnN0YXRlLmluTWFwUmVzb2x1dGlvbiA9PT0gdHJ1ZTtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3koe2ZpbHRlckNsYXVzZUZ1bmN9IGFzIEVudGl0eVN0b3JlU3RyYXRlZ3lGdW5jT3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==