import { Directive } from '@angular/core';
import { ClusterDataSource } from '../../datasource/shared/datasources/cluster-datasource';
import { MVTDataSource } from '../../datasource/shared/datasources/mvt-datasource';
import { FeatureDataSource } from '../../datasource/shared/datasources/feature-datasource';
import { XYZDataSource } from '../../datasource/shared/datasources/xyz-datasource';
import * as i0 from "@angular/core";
import * as i1 from "../map-browser/map-browser.component";
import * as i2 from "@igo2/core";
export class MapOfflineDirective {
    constructor(component, networkService, messageService, languageService) {
        this.networkService = networkService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.offlineButtonStatus = false;
        this.networkState = {
            connection: true
        };
        this.offlineButtonState = {
            connection: true
        };
        this.component = component;
    }
    get map() {
        return this.component.map;
    }
    ngAfterViewInit() {
        this.map.offlineButtonToggle$.subscribe((offlineButtonToggle) => {
            if (this.previousMessageId) {
                this.messageService.remove(this.previousMessageId);
            }
            this.offlineButtonStatus = offlineButtonToggle;
            const translate = this.languageService.translate;
            if (this.offlineButtonStatus && this.networkState.connection) {
                const message = translate.instant('igo.geo.network.offline.message');
                const title = translate.instant('igo.geo.network.offline.title');
                const messageObj = this.messageService.info(message, title);
                this.previousMessageId = messageObj.toastId;
                this.offlineButtonState.connection = false;
                this.changeLayer();
            }
            else if (!this.offlineButtonStatus && !this.networkState.connection) {
                const message = translate.instant('igo.geo.network.offline.message');
                const title = translate.instant('igo.geo.network.offline.title');
                const messageObj = this.messageService.info(message, title);
                this.previousMessageId = messageObj.toastId;
                this.offlineButtonState.connection = false;
                this.changeLayer();
            }
            else if (!this.offlineButtonStatus && this.networkState.connection) {
                let message;
                let title;
                const messageObs = translate.get('igo.geo.network.online.message');
                const titleObs = translate.get('igo.geo.network.online.title');
                messageObs.subscribe((message1) => {
                    message = message1;
                });
                titleObs.subscribe((title1) => {
                    title = title1;
                });
                if (message) {
                    const messageObj = this.messageService.info(message, title);
                    this.previousMessageId = messageObj.toastId;
                }
                this.offlineButtonState.connection = true;
                this.changeLayer();
            }
        });
        this.networkService.currentState().subscribe((state) => {
            this.networkState = state;
            if (!this.offlineButtonStatus) {
                this.changeLayer();
            }
        });
        this.map.layers$.subscribe((layers) => {
            this.changeLayer();
        });
    }
    changeLayer() {
        let sourceOptions;
        const layerList = this.map.layers$.value;
        layerList.forEach(layer => {
            if (layer.isIgoInternalLayer) {
                return;
            }
            if (layer.options.source instanceof MVTDataSource) {
                sourceOptions = layer.options.sourceOptions;
                layer.ol.getSource().refresh();
            }
            else if (layer.options.source instanceof XYZDataSource) {
                sourceOptions = layer.options.sourceOptions;
            }
            else if (layer.options.source instanceof ClusterDataSource) {
                sourceOptions = layer.options.sourceOptions;
            }
            else if (layer.options.source instanceof FeatureDataSource) {
                sourceOptions = layer.options.sourceOptions;
            }
            else {
                if (this.networkState.connection === false ||
                    this.offlineButtonState.connection === false) {
                    layer.ol.setMaxResolution(0);
                    return;
                }
                else if (this.networkState.connection === true ||
                    this.offlineButtonState.connection === true) {
                    layer.ol.setMaxResolution(Infinity);
                    return;
                }
            }
            if (sourceOptions) {
                if ((sourceOptions.pathOffline &&
                    this.networkState.connection === false) ||
                    (sourceOptions.pathOffline &&
                        this.offlineButtonState.connection === false)) {
                    if (sourceOptions.type === 'vector' ||
                        sourceOptions.type === 'cluster') {
                        return;
                    }
                    layer.ol.getSource().setUrl(sourceOptions.pathOffline);
                }
                else if ((sourceOptions.pathOffline &&
                    this.networkState.connection === false) ||
                    (sourceOptions.pathOffline &&
                        this.offlineButtonState.connection === true)) {
                    if (sourceOptions.type === 'vector' ||
                        sourceOptions.type === 'cluster') {
                        return;
                    }
                    layer.ol.getSource().setUrl(sourceOptions.url);
                }
                else {
                    if (this.networkState.connection === false ||
                        this.offlineButtonState.connection === false) {
                        layer.ol.setMaxResolution(0);
                    }
                    else if (this.networkState.connection === true ||
                        this.offlineButtonState.connection === true) {
                        layer.ol.setMaxResolution(Infinity);
                    }
                }
            }
            else {
                if (this.networkState.connection === false ||
                    this.offlineButtonState.connection === false) {
                    layer.ol.setMaxResolution(0);
                }
                else if (this.networkState.connection === true ||
                    this.offlineButtonState.connection === true) {
                    layer.ol.setMaxResolution(Infinity);
                }
            }
        });
    }
}
MapOfflineDirective.ɵfac = function MapOfflineDirective_Factory(t) { return new (t || MapOfflineDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent), i0.ɵɵdirectiveInject(i2.NetworkService), i0.ɵɵdirectiveInject(i2.MessageService), i0.ɵɵdirectiveInject(i2.LanguageService)); };
MapOfflineDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MapOfflineDirective, selectors: [["", "igoMapOffline", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MapOfflineDirective, [{
        type: Directive,
        args: [{
                selector: '[igoMapOffline]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent }, { type: i2.NetworkService }, { type: i2.MessageService }, { type: i2.LanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwT2ZmbGluZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9tYXAvc2hhcmVkL21hcE9mZmxpbmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBZXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7QUFLbkYsTUFBTSxPQUFPLG1CQUFtQjtJQWdCOUIsWUFDRSxTQUE4QixFQUN0QixjQUE4QixFQUM5QixjQUE4QixFQUM5QixlQUFnQztRQUZoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQWxCbEMsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGlCQUFZLEdBQW9CO1lBQ3RDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFDTSx1QkFBa0IsR0FBb0I7WUFDNUMsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQWNBLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFiRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFhRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBNEIsRUFBRSxFQUFFO1lBQ3ZFLElBQUksSUFBSSxDQUFDLGlCQUFp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bSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOZXR3b3JrU2VydmljZSxcbiAgQ29ubmVjdGlvblN0YXRlLFxuICBNZXNzYWdlU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlXG59IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBNYXBCcm93c2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLWJyb3dzZXIvbWFwLWJyb3dzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2ZlYXR1cmUtZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgWFlaRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy94eXotZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTVZURGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy9tdnQtZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2x1c3RlckRhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvY2x1c3Rlci1kYXRhc291cmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMYXllciB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9sYXllcnMvbGF5ZXInO1xuaW1wb3J0IHsgQ2x1c3RlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy9jbHVzdGVyLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTVZURGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL212dC1kYXRhc291cmNlJztcbmltcG9ydCB7IEZlYXR1cmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvZmVhdHVyZS1kYXRhc291cmNlJztcbmltcG9ydCB7IFhZWkRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhc291cmNlL3NoYXJlZC9kYXRhc291cmNlcy94eXotZGF0YXNvdXJjZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29NYXBPZmZsaW5lXSdcbn0pXG5leHBvcnQgY2xhc3MgTWFwT2ZmbGluZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGNvbXBvbmVudDogTWFwQnJvd3NlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBvZmZsaW5lQnV0dG9uU3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgbmV0d29ya1N0YXRlOiBDb25uZWN0aW9uU3RhdGUgPSB7XG4gICAgY29ubmVjdGlvbjogdHJ1ZVxuICB9O1xuICBwcml2YXRlIG9mZmxpbmVCdXR0b25TdGF0ZTogQ29ubmVjdGlvblN0YXRlID0ge1xuICAgIGNvbm5lY3Rpb246IHRydWVcbiAgfTtcblxuICBnZXQgbWFwKCk6IElnb01hcCB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm1hcDtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmlvdXNNZXNzYWdlSWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tcG9uZW50OiBNYXBCcm93c2VyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgbmV0d29ya1NlcnZpY2U6IE5ldHdvcmtTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5tYXAub2ZmbGluZUJ1dHRvblRvZ2dsZSQuc3Vic2NyaWJlKChvZmZsaW5lQnV0dG9uVG9nZ2xlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmV2aW91c01lc3NhZ2VJZCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnJlbW92ZSh0aGlzLnByZXZpb3VzTWVzc2FnZUlkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2ZmbGluZUJ1dHRvblN0YXR1cyA9IG9mZmxpbmVCdXR0b25Ub2dnbGU7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBpZiAodGhpcy5vZmZsaW5lQnV0dG9uU3RhdHVzICYmIHRoaXMubmV0d29ya1N0YXRlLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uZ2VvLm5ldHdvcmsub2ZmbGluZS5tZXNzYWdlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8ubmV0d29yay5vZmZsaW5lLnRpdGxlJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmluZm8obWVzc2FnZSwgdGl0bGUpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTWVzc2FnZUlkID0gbWVzc2FnZU9iai50b2FzdElkO1xuICAgICAgICB0aGlzLm9mZmxpbmVCdXR0b25TdGF0ZS5jb25uZWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMub2ZmbGluZUJ1dHRvblN0YXR1cyAmJiAhdGhpcy5uZXR3b3JrU3RhdGUuY29ubmVjdGlvbikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoJ2lnby5nZW8ubmV0d29yay5vZmZsaW5lLm1lc3NhZ2UnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmdlby5uZXR3b3JrLm9mZmxpbmUudGl0bGUnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZU9iaiA9IHRoaXMubWVzc2FnZVNlcnZpY2UuaW5mbyhtZXNzYWdlLCB0aXRsZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNNZXNzYWdlSWQgPSBtZXNzYWdlT2JqLnRvYXN0SWQ7XG4gICAgICAgIHRoaXMub2ZmbGluZUJ1dHRvblN0YXRlLmNvbm5lY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYXllcigpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5vZmZsaW5lQnV0dG9uU3RhdHVzICYmIHRoaXMubmV0d29ya1N0YXRlLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZU9icyA9IHRyYW5zbGF0ZS5nZXQoJ2lnby5nZW8ubmV0d29yay5vbmxpbmUubWVzc2FnZScpO1xuICAgICAgICBjb25zdCB0aXRsZU9icyA9IHRyYW5zbGF0ZS5nZXQoJ2lnby5nZW8ubmV0d29yay5vbmxpbmUudGl0bGUnKTtcbiAgICAgICAgbWVzc2FnZU9icy5zdWJzY3JpYmUoKG1lc3NhZ2UxOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZTE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aXRsZU9icy5zdWJzY3JpYmUoKHRpdGxlMTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGl0bGUgPSB0aXRsZTE7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmluZm8obWVzc2FnZSwgdGl0bGUpO1xuICAgICAgICAgIHRoaXMucHJldmlvdXNNZXNzYWdlSWQgPSBtZXNzYWdlT2JqLnRvYXN0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZsaW5lQnV0dG9uU3RhdGUuY29ubmVjdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhbmdlTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubmV0d29ya1NlcnZpY2UuY3VycmVudFN0YXRlKCkuc3Vic2NyaWJlKChzdGF0ZTogQ29ubmVjdGlvblN0YXRlKSA9PiB7XG4gICAgICB0aGlzLm5ldHdvcmtTdGF0ZSA9IHN0YXRlO1xuICAgICAgaWYgKCF0aGlzLm9mZmxpbmVCdXR0b25TdGF0dXMpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYXllcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tYXAubGF5ZXJzJC5zdWJzY3JpYmUoKGxheWVyczogTGF5ZXJbXSkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VMYXllcigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VMYXllcigpIHtcbiAgICBsZXQgc291cmNlT3B0aW9ucztcbiAgICBjb25zdCBsYXllckxpc3QgPSB0aGlzLm1hcC5sYXllcnMkLnZhbHVlO1xuICAgIGxheWVyTGlzdC5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgIGlmIChsYXllci5pc0lnb0ludGVybmFsTGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGxheWVyLm9wdGlvbnMuc291cmNlIGluc3RhbmNlb2YgTVZURGF0YVNvdXJjZSkge1xuICAgICAgICBzb3VyY2VPcHRpb25zID0gbGF5ZXIub3B0aW9ucy5zb3VyY2VPcHRpb25zIGFzIE1WVERhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgICBsYXllci5vbC5nZXRTb3VyY2UoKS5yZWZyZXNoKCk7XG4gICAgICB9IGVsc2UgaWYgKGxheWVyLm9wdGlvbnMuc291cmNlIGluc3RhbmNlb2YgWFlaRGF0YVNvdXJjZSkge1xuICAgICAgICBzb3VyY2VPcHRpb25zID0gbGF5ZXIub3B0aW9ucy5zb3VyY2VPcHRpb25zIGFzIFhZWkRhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgfSBlbHNlIGlmIChsYXllci5vcHRpb25zLnNvdXJjZSBpbnN0YW5jZW9mIENsdXN0ZXJEYXRhU291cmNlKSB7XG4gICAgICAgIHNvdXJjZU9wdGlvbnMgPSBsYXllci5vcHRpb25zLnNvdXJjZU9wdGlvbnMgYXMgQ2x1c3RlckRhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgfSBlbHNlIGlmIChsYXllci5vcHRpb25zLnNvdXJjZSBpbnN0YW5jZW9mIEZlYXR1cmVEYXRhU291cmNlKSB7XG4gICAgICAgIHNvdXJjZU9wdGlvbnMgPSBsYXllci5vcHRpb25zLnNvdXJjZU9wdGlvbnMgYXMgRmVhdHVyZURhdGFTb3VyY2VPcHRpb25zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubmV0d29ya1N0YXRlLmNvbm5lY3Rpb24gPT09IGZhbHNlIHx8XG4gICAgICAgICAgdGhpcy5vZmZsaW5lQnV0dG9uU3RhdGUuY29ubmVjdGlvbiA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGF5ZXIub2wuc2V0TWF4UmVzb2x1dGlvbigwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdGUuY29ubmVjdGlvbiA9PT0gdHJ1ZSB8fFxuICAgICAgICAgIHRoaXMub2ZmbGluZUJ1dHRvblN0YXRlLmNvbm5lY3Rpb24gPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGF5ZXIub2wuc2V0TWF4UmVzb2x1dGlvbihJbmZpbml0eSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3VyY2VPcHRpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoc291cmNlT3B0aW9ucy5wYXRoT2ZmbGluZSAmJlxuICAgICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdGUuY29ubmVjdGlvbiA9PT0gZmFsc2UpIHx8XG4gICAgICAgICAgKHNvdXJjZU9wdGlvbnMucGF0aE9mZmxpbmUgJiZcbiAgICAgICAgICAgIHRoaXMub2ZmbGluZUJ1dHRvblN0YXRlLmNvbm5lY3Rpb24gPT09IGZhbHNlKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzb3VyY2VPcHRpb25zLnR5cGUgPT09ICd2ZWN0b3InIHx8XG4gICAgICAgICAgICBzb3VyY2VPcHRpb25zLnR5cGUgPT09ICdjbHVzdGVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAobGF5ZXIub2wuZ2V0U291cmNlKCkgYXMgYW55KS5zZXRVcmwoc291cmNlT3B0aW9ucy5wYXRoT2ZmbGluZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgKHNvdXJjZU9wdGlvbnMucGF0aE9mZmxpbmUgJiZcbiAgICAgICAgICAgIHRoaXMubmV0d29ya1N0YXRlLmNvbm5lY3Rpb24gPT09IGZhbHNlKSB8fFxuICAgICAgICAgIChzb3VyY2VPcHRpb25zLnBhdGhPZmZsaW5lICYmXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVCdXR0b25TdGF0ZS5jb25uZWN0aW9uID09PSB0cnVlKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzb3VyY2VPcHRpb25zLnR5cGUgPT09ICd2ZWN0b3InIHx8XG4gICAgICAgICAgICBzb3VyY2VPcHRpb25zLnR5cGUgPT09ICdjbHVzdGVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAobGF5ZXIub2wuZ2V0U291cmNlKCkgYXMgYW55KS5zZXRVcmwoc291cmNlT3B0aW9ucy51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubmV0d29ya1N0YXRlLmNvbm5lY3Rpb24gPT09IGZhbHNlIHx8XG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVCdXR0b25TdGF0ZS5jb25uZWN0aW9uID09PSBmYWxzZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGF5ZXIub2wuc2V0TWF4UmVzb2x1dGlvbigwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdGUuY29ubmVjdGlvbiA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lQnV0dG9uU3RhdGUuY29ubmVjdGlvbiA9PT0gdHJ1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGF5ZXIub2wuc2V0TWF4UmVzb2x1dGlvbihJbmZpbml0eSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5uZXR3b3JrU3RhdGUuY29ubmVjdGlvbiA9PT0gZmFsc2UgfHxcbiAgICAgICAgICB0aGlzLm9mZmxpbmVCdXR0b25TdGF0ZS5jb25uZWN0aW9uID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICBsYXllci5vbC5zZXRNYXhSZXNvbHV0aW9uKDApO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHRoaXMubmV0d29ya1N0YXRlLmNvbm5lY3Rpb24gPT09IHRydWUgfHxcbiAgICAgICAgICB0aGlzLm9mZmxpbmVCdXR0b25TdGF0ZS5jb25uZWN0aW9uID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGxheWVyLm9sLnNldE1heFJlc29sdXRpb24oSW5maW5pdHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==