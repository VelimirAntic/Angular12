import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActionStore, EntityStoreFilterCustomFuncStrategy, EntityStoreFilterSelectionStrategy, EntityTableColumnRenderer } from '@igo2/common';
import { FeatureStore, FeatureStoreLoadingLayerStrategy, FeatureStoreSelectionStrategy, FeatureStoreInMapExtentStrategy, FeatureMotion, FeatureStoreInMapResolutionStrategy } from '../../feature';
import { VectorLayer } from '../../layer';
import { FeatureDataSource } from '../../datasource';
import { FeatureWorkspace } from './feature-workspace';
import { skipWhile, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class FeatureWorkspaceService {
    constructor(storageService) {
        this.storageService = storageService;
        this.ws$ = new BehaviorSubject(undefined);
    }
    get zoomAuto() {
        return this.storageService.get('zoomAuto');
    }
    createWorkspace(layer, map) {
        var _a;
        if (((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled) === false || layer.dataSource.options.edition) {
            return;
        }
        layer.options.workspace = Object.assign({}, layer.options.workspace, {
            srcId: layer.id,
            workspaceId: layer.id,
            enabled: true
        });
        const wks = new FeatureWorkspace({
            id: layer.id,
            title: layer.title,
            layer,
            map,
            entityStore: this.createFeatureStore(layer, map),
            actionStore: new ActionStore([]),
            meta: {
                tableTemplate: undefined
            }
        });
        this.createTableTemplate(wks, layer);
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
FeatureWorkspaceService.ɵfac = function FeatureWorkspaceService_Factory(t) { return new (t || FeatureWorkspaceService)(i0.ɵɵinject(i1.StorageService)); };
FeatureWorkspaceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FeatureWorkspaceService, factory: FeatureWorkspaceService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureWorkspaceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.StorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS13b3Jrc3BhY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS9zaGFyZWQvZmVhdHVyZS13b3Jrc3BhY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUNMLFdBQVcsRUFFWCxtQ0FBbUMsRUFHbkMsa0NBQWtDLEVBQ2xDLHlCQUF5QixFQUMxQixNQUFNLGNBQWMsQ0FBQztBQUV0QixPQUFPLEVBQ0wsWUFBWSxFQUNaLGdDQUFnQyxFQUNoQyw2QkFBNkIsRUFDN0IsK0JBQStCLEVBRS9CLGFBQWEsRUFDYixtQ0FBbUMsRUFDcEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcxQyxPQUFPLEVBQTZCLGlCQUFpQixFQUFtQixNQUFNLGtCQUFrQixDQUFDO0FBRWpHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVNqRCxNQUFNLE9BQU8sdUJBQXVCO0lBUWxDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYzQyxRQUFHLEdBQUcsSUFBSSxlQUFlLENBQVMsU0FBUyxDQUFDLENBQUM7SUFFQyxDQUFDO0lBTnRELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFZLENBQUM7SUFDeEQsQ0FBQztJQU1ELGVBQWUsQ0FBQyxLQUFrQixFQUFFLEdBQVc7O1FBQzdDLElBQUksQ0FBQSxNQUFB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YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDN0IsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU87U0FDUixDQUFDO0lBQ0osQ0FBQztJQUVPLDJDQUEyQztRQUNqRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBNEIsRUFBRSxFQUFFO1lBQ3hELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQztRQUNwRixDQUFDLENBQUM7UUFDRixPQUFPLElBQUksbUNBQW1DLENBQUMsRUFBQyxnQkFBZ0IsRUFBbUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7OzhGQS9JVSx1QkFBdUI7NkVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUIsbUJBRnRCLE1BQU07dUZBRVAsdUJBQXVCO2NBSG5DLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQWN0aW9uU3RvcmUsXG4gIEVudGl0eVRhYmxlVGVtcGxhdGUsXG4gIEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5LFxuICBFbnRpdHlSZWNvcmQsXG4gIEVudGl0eVN0b3JlU3RyYXRlZ3lGdW5jT3B0aW9ucyxcbiAgRW50aXR5U3RvcmVGaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSxcbiAgRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlclxufSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQge1xuICBGZWF0dXJlU3RvcmUsXG4gIEZlYXR1cmVTdG9yZUxvYWRpbmdMYXllclN0cmF0ZWd5LFxuICBGZWF0dXJlU3RvcmVTZWxlY3Rpb25TdHJhdGVneSxcbiAgRmVhdHVyZVN0b3JlSW5NYXBFeHRlbnRTdHJhdGVneSxcbiAgRmVhdHVyZSxcbiAgRmVhdHVyZU1vdGlvbixcbiAgRmVhdHVyZVN0b3JlSW5NYXBSZXNvbHV0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnLi4vLi4vZmVhdHVyZSc7XG5pbXBvcnQgeyBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyJztcbmltcG9ydCB7IEdlb1dvcmtzcGFjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9sYXllci9zaGFyZWQvbGF5ZXJzL2xheWVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi9tYXAnO1xuaW1wb3J0IHsgU291cmNlRmllbGRzT3B0aW9uc1BhcmFtcywgRmVhdHVyZURhdGFTb3VyY2UsIFJlbGF0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBGZWF0dXJlV29ya3NwYWNlIH0gZnJvbSAnLi9mZWF0dXJlLXdvcmtzcGFjZSc7XG5pbXBvcnQgeyBza2lwV2hpbGUsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHR5cGUgeyBkZWZhdWx0IGFzIE9sR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tL0dlb21ldHJ5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZVdvcmtzcGFjZVNlcnZpY2Uge1xuXG4gIGdldCB6b29tQXV0bygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3pvb21BdXRvJykgYXMgYm9vbGVhbjtcbiAgfVxuXG4gIHB1YmxpYyB3cyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odW5kZWZpbmVkKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSkge31cblxuICBjcmVhdGVXb3Jrc3BhY2UobGF5ZXI6IFZlY3RvckxheWVyLCBtYXA6IElnb01hcCk6IEZlYXR1cmVXb3Jrc3BhY2Uge1xuICAgIGlmIChsYXllci5vcHRpb25zLndvcmtzcGFjZT8uZW5hYmxlZCA9PT0gZmFsc2UgfHwgbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLmVkaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsYXllci5vcHRpb25zLndvcmtzcGFjZSA9IE9iamVjdC5hc3NpZ24oe30sIGxheWVyLm9wdGlvbnMud29ya3NwYWNlLFxuICAgICAge1xuICAgICAgICBzcmNJZDogbGF5ZXIuaWQsXG4gICAgICAgIHdvcmtzcGFjZUlkOiBsYXllci5pZCxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfSBhcyBHZW9Xb3Jrc3BhY2VPcHRpb25zKTtcblxuXG4gICAgY29uc3Qgd2tzID0gbmV3IEZlYXR1cmVXb3Jrc3BhY2Uoe1xuICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgdGl0bGU6IGxheWVyLnRpdGxlLFxuICAgICAgbGF5ZXIsXG4gICAgICBtYXAsXG4gICAgICBlbnRpdHlTdG9yZTogdGhpcy5jcmVhdGVGZWF0dXJlU3RvcmUobGF5ZXIsIG1hcCksXG4gICAgICBhY3Rpb25TdG9yZTogbmV3IEFjdGlvblN0b3JlKFtdKSxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGFibGVUZW1wbGF0ZTogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jcmVhdGVUYWJsZVRlbXBsYXRlKHdrcywgbGF5ZXIpO1xuICAgIHJldHVybiB3a3M7XG5cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRmVhdHVyZVN0b3JlKGxheWVyOiBWZWN0b3JMYXllciwgbWFwOiBJZ29NYXApOiBGZWF0dXJlU3RvcmUge1xuICAgIGNvbnN0IHN0b3JlID0gbmV3IEZlYXR1cmVTdG9yZShbXSwge21hcH0pO1xuICAgIHN0b3JlLmJpbmRMYXllcihsYXllcik7XG5cbiAgICBjb25zdCBsb2FkaW5nU3RyYXRlZ3kgPSBuZXcgRmVhdHVyZVN0b3JlTG9hZGluZ0xheWVyU3RyYXRlZ3koe30pO1xuICAgIGNvbnN0IGluTWFwRXh0ZW50U3RyYXRlZ3kgPSBuZXcgRmVhdHVyZVN0b3JlSW5NYXBFeHRlbnRTdHJhdGVneSh7fSk7XG4gICAgY29uc3QgaW5NYXBSZXNvbHV0aW9uU3RyYXRlZ3kgPSBuZXcgRmVhdHVyZVN0b3JlSW5NYXBSZXNvbHV0aW9uU3RyYXRlZ3koe30pO1xuICAgIGNvbnN0IHNlbGVjdGVkUmVjb3JkU3RyYXRlZ3kgPSBuZXcgRW50aXR5U3RvcmVGaWx0ZXJTZWxlY3Rpb25TdHJhdGVneSh7fSk7XG4gICAgY29uc3Qgc2VsZWN0aW9uU3RyYXRlZ3kgPSBuZXcgRmVhdHVyZVN0b3JlU2VsZWN0aW9uU3RyYXRlZ3koe1xuICAgICAgbGF5ZXI6IG5ldyBWZWN0b3JMYXllcih7XG4gICAgICAgIHpJbmRleDogMzAwLFxuICAgICAgICBzb3VyY2U6IG5ldyBGZWF0dXJlRGF0YVNvdXJjZSgpLFxuICAgICAgICBzdHlsZTogdW5kZWZpbmVkLFxuICAgICAgICBzaG93SW5MYXllckxpc3Q6IGZhbHNlLFxuICAgICAgICBleHBvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgYnJvd3NhYmxlOiBmYWxzZVxuICAgICAgfSksXG4gICAgICBtYXAsXG4gICAgICBoaXRUb2xlcmFuY2U6IDE1LFxuICAgICAgbW90aW9uOiB0aGlzLnpvb21BdXRvID8gRmVhdHVyZU1vdGlvbi5EZWZhdWx0IDogRmVhdHVyZU1vdGlvbi5Ob25lLFxuICAgICAgbWFueTogdHJ1ZSxcbiAgICAgIGRyYWdCb3g6IHRydWVcbiAgICB9KTtcbiAgICBzdG9yZS5hZGRTdHJhdGVneShsb2FkaW5nU3RyYXRlZ3ksIHRydWUpO1xuICAgIHN0b3JlLmFkZFN0cmF0ZWd5KGluTWFwRXh0ZW50U3RyYXRlZ3ksIHRydWUpO1xuICAgIHN0b3JlLmFkZFN0cmF0ZWd5KGluTWFwUmVzb2x1dGlvblN0cmF0ZWd5LCB0cnVlKTtcbiAgICBzdG9yZS5hZGRTdHJhdGVneShzZWxlY3Rpb25TdHJhdGVneSwgdHJ1ZSk7XG4gICAgc3RvcmUuYWRkU3RyYXRlZ3koc2VsZWN0ZWRSZWNvcmRTdHJhdGVneSwgZmFsc2UpO1xuICAgIHN0b3JlLmFkZFN0cmF0ZWd5KHRoaXMuY3JlYXRlRmlsdGVySW5NYXBFeHRlbnRPclJlc29sdXRpb25TdHJhdGVneSgpLCB0cnVlKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRhYmxlVGVtcGxhdGUod29ya3NwYWNlOiBGZWF0dXJlV29ya3NwYWNlLCBsYXllcjogVmVjdG9yTGF5ZXIpOiBFbnRpdHlUYWJsZVRlbXBsYXRlIHtcbiAgICBjb25zdCBmaWVsZHMgPSBsYXllci5kYXRhU291cmNlLm9wdGlvbnMuc291cmNlRmllbGRzIHx8IFtdO1xuXG4gICAgY29uc3QgcmVsYXRpb25zID0gbGF5ZXIuZGF0YVNvdXJjZS5vcHRpb25zLnJlbGF0aW9ucyB8fCBbXTtcblxuICAgIGlmIChmaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3b3Jrc3BhY2UuZW50aXR5U3RvcmUuZW50aXRpZXMkLnBpcGUoXG4gICAgICAgIHNraXBXaGlsZSh2YWwgPT4gdmFsLmxlbmd0aCA9PT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgICkuc3Vic2NyaWJlKGVudGl0aWVzID0+IHtcbiAgICAgICAgY29uc3Qgb2wgPSAoZW50aXRpZXNbMF0gYXMgRmVhdHVyZSkub2wgYXMgb2xGZWF0dXJlPE9sR2VvbWV0cnk+O1xuICAgICAgICBjb25zdCBjb2x1bW5zRnJvbUZlYXR1cmVzID0gb2wuZ2V0S2V5cygpXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgY29sID0+ICFjb2wuc3RhcnRzV2l0aCgnXycpICYmXG4gICAgICAgICAgY29sICE9PSAnZ2VvbWV0cnknICYmXG4gICAgICAgICAgY29sICE9PSBvbC5nZXRHZW9tZXRyeU5hbWUoKSAmJlxuICAgICAgICAgICFjb2wubWF0Y2goL2JvdW5kZWRieS9naSkpXG4gICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogYHByb3BlcnRpZXMuJHtrZXl9YCxcbiAgICAgICAgICAgIHRpdGxlOiBrZXksXG4gICAgICAgICAgICByZW5kZXJlcjogRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5VbnNhbml0aXplZEhUTUxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgd29ya3NwYWNlLm1ldGEudGFibGVUZW1wbGF0ZSA9IHtcbiAgICAgICAgICBzZWxlY3Rpb246IHRydWUsXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zRnJvbUZlYXR1cmVzXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sdW1ucyA9IGZpZWxkcy5tYXAoKGZpZWxkOiBTb3VyY2VGaWVsZHNPcHRpb25zUGFyYW1zKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBgcHJvcGVydGllcy4ke2ZpZWxkLm5hbWV9YCxcbiAgICAgICAgdGl0bGU6IGZpZWxkLmFsaWFzID8gZmllbGQuYWxpYXMgOiBmaWVsZC5uYW1lLFxuICAgICAgICByZW5kZXJlcjogRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5VbnNhbml0aXplZEhUTUwsXG4gICAgICAgIHRvb2x0aXA6IGZpZWxkLnRvb2x0aXBcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCByZWxhdGlvbnNDb2x1bW4gPSByZWxhdGlvbnMubWFwKChyZWxhdGlvbjogUmVsYXRpb25PcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBgcHJvcGVydGllcy4ke3JlbGF0aW9uLm5hbWV9YCxcbiAgICAgICAgdGl0bGU6IHJlbGF0aW9uLmFsaWFzID8gcmVsYXRpb24uYWxpYXMgOiByZWxhdGlvbi5uYW1lLFxuICAgICAgICByZW5kZXJlcjogRW50aXR5VGFibGVDb2x1bW5SZW5kZXJlci5JY29uLFxuICAgICAgICBpY29uOiByZWxhdGlvbi5pY29uLFxuICAgICAgICBwYXJlbnQ6IHJlbGF0aW9uLnBhcmVudCxcbiAgICAgICAgdHlwZTogJ3JlbGF0aW9uJyxcbiAgICAgICAgdG9vbHRpcDogcmVsYXRpb24udG9vbHRpcCxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53cyQubmV4dChyZWxhdGlvbi50aXRsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNlbGxDbGFzc0Z1bmM6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4geyAnY2xhc3NfaWNvbic6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbHVtbnMucHVzaCguLi5yZWxhdGlvbnNDb2x1bW4pO1xuICAgIHdvcmtzcGFjZS5tZXRhLnRhYmxlVGVtcGxhdGUgPSB7XG4gICAgICBzZWxlY3Rpb246IHRydWUsXG4gICAgICBzb3J0OiB0cnVlLFxuICAgICAgY29sdW1uc1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZpbHRlckluTWFwRXh0ZW50T3JSZXNvbHV0aW9uU3RyYXRlZ3koKTogRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3kge1xuICAgIGNvbnN0IGZpbHRlckNsYXVzZUZ1bmMgPSAocmVjb3JkOiBFbnRpdHlSZWNvcmQ8b2JqZWN0PikgPT4ge1xuICAgICAgcmV0dXJuIHJlY29yZC5zdGF0ZS5pbk1hcEV4dGVudCA9PT0gdHJ1ZSAmJiByZWNvcmQuc3RhdGUuaW5NYXBSZXNvbHV0aW9uID09PSB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIG5ldyBFbnRpdHlTdG9yZUZpbHRlckN1c3RvbUZ1bmNTdHJhdGVneSh7ZmlsdGVyQ2xhdXNlRnVuY30gYXMgRW50aXR5U3RvcmVTdHJhdGVneUZ1bmNPcHRpb25zKTtcbiAgfVxufVxuIl19