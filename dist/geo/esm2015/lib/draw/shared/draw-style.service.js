import { Injectable } from '@angular/core';
import * as OlStyle from 'ol/style';
import OlPoint from 'ol/geom/Point';
import { transform } from 'ol/proj';
import * as i0 from "@angular/core";
import * as i1 from "../../map/shared/map.service";
export class DrawStyleService {
    constructor(mapService) {
        this.mapService = mapService;
        this.fillColor = 'rgba(255,255,255,0.4)';
        this.strokeColor = 'rgba(143,7,7,1)';
        this.strokeWidth = 1;
        this.labelsAreShown = true;
    }
    getFillColor() {
        return this.fillColor;
    }
    setFillColor(fillColor) {
        this.fillColor = fillColor;
    }
    getStrokeColor() {
        return this.strokeColor;
    }
    setStrokeColor(strokeColor) {
        this.strokeColor = strokeColor;
    }
    getStrokeWidth() {
        return this.strokeWidth;
    }
    getLabelsAreShown() {
        return this.labelsAreShown;
    }
    toggleLabelsAreShown() {
        this.labelsAreShown = !this.labelsAreShown;
    }
    setIcon(icon) {
        this.icon = icon;
    }
    getIcon() {
        return this.icon;
    }
    createDrawingLayerStyle(feature, resolution, labelsAreShown, icon) {
        let style;
        let labelsAreOffset = false;
        const proj = this.mapService.getMap().projection;
        const geom = feature.getGeometry();
        if (geom instanceof OlPoint) {
            labelsAreOffset = !labelsAreOffset;
        }
        // if feature is a circle
        if (feature.get('rad')) {
            const coordinates = transform(feature.getGeometry().flatCoordinates, proj, 'EPSG:4326');
            style = new OlStyle.Style({
                text: new OlStyle.Text({
                    text: labelsAreShown ? feature.get('draw') : '',
                    stroke: new OlStyle.Stroke({
                        color: 'white',
                        width: 0.75
                    }),
                    fill: new OlStyle.Fill({
                        color: 'black'
                    }),
                    font: '20px sans-serif',
                    overflow: true
                }),
                image: new OlStyle.Circle({
                    radius: feature.get('rad') / Math.cos((Math.PI / 180) * coordinates[1]) / resolution,
                    stroke: new OlStyle.Stroke({
                        color: this.strokeColor,
                        width: this.strokeWidth
                    }),
                    fill: new OlStyle.Fill({
                        color: this.fillColor
                    })
                })
            });
            return style;
            // if feature is an icon
        }
        else if (icon) {
            style = new OlStyle.Style({
                text: new OlStyle.Text({
                    text: labelsAreShown ? feature.get('draw') : '',
                    offsetY: -26,
                    stroke: new OlStyle.Stroke({
                        color: 'white',
                        width: 0.75
                    }),
                    fill: new OlStyle.Fill({
                        color: 'black'
                    }),
                    font: '20px sans-serif',
                    overflow: true
                }),
                stroke: new OlStyle.Stroke({
                    color: this.strokeColor,
                    width: this.strokeWidth
                }),
                fill: new OlStyle.Fill({
                    color: this.fillColor
                }),
                image: new OlStyle.Icon({
                    src: icon
                })
            });
            return style;
            // if feature is a point, a linestring or a polygon
        }
        else {
            style = new OlStyle.Style({
                text: new OlStyle.Text({
                    text: labelsAreShown ? feature.get('draw') : '',
                    stroke: new OlStyle.Stroke({
                        color: 'white',
                        width: 0.75
                    }),
                    fill: new OlStyle.Fill({
                        color: 'black'
                    }),
                    font: '20px sans-serif',
                    overflow: true,
                    offsetY: labelsAreOffset ? -15 : 0
                }),
                stroke: new OlStyle.Stroke({
                    color: this.strokeColor,
                    width: this.strokeWidth
                }),
                fill: new OlStyle.Fill({
                    color: this.fillColor
                }),
                image: new OlStyle.Circle({
                    radius: 5,
                    stroke: new OlStyle.Stroke({
                        color: this.strokeColor,
                        width: this.strokeWidth
                    }),
                    fill: new OlStyle.Fill({
                        color: this.fillColor
                    })
                })
            });
            return style;
        }
    }
}
DrawStyleService.ɵfac = function DrawStyleService_Factory(t) { return new (t || DrawStyleService)(i0.ɵɵinject(i1.MapService)); };
DrawStyleService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DrawStyleService, factory: DrawStyleService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawStyleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MapService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1zdHlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZHJhdy9zaGFyZWQvZHJhdy1zdHlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7OztBQU1wQyxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVB4QixjQUFTLEdBQUcsdUJBQXVCLENBQUM7UUFDcEMsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztJQUszQixDQUFDO0lBRUosWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENB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QUFDO29CQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztpQkFDeEIsQ0FBQztnQkFFRixJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7aUJBQ3RCLENBQUM7Z0JBRUYsS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDeEIsTUFBTSxFQUFFLENBQUM7b0JBQ1QsTUFBTSxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO3dCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ3hCLENBQUM7b0JBQ0YsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO3FCQUN0QixDQUFDO2lCQUNILENBQUM7YUFDSCxDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Z0ZBaEtVLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGYixNQUFNO3VGQUVULGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIE9sU3R5bGUgZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IE9sUG9pbnQgZnJvbSAnb2wvZ2VvbS9Qb2ludCc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9tYXAvc2hhcmVkL21hcC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xuICB9KVxuZXhwb3J0IGNsYXNzIERyYXdTdHlsZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZmlsbENvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC40KSc7XG4gIHByaXZhdGUgc3Ryb2tlQ29sb3IgPSAncmdiYSgxNDMsNyw3LDEpJztcbiAgcHJpdmF0ZSBzdHJva2VXaWR0aDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBsYWJlbHNBcmVTaG93biA9IHRydWU7XG4gIHByaXZhdGUgaWNvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwU2VydmljZTogTWFwU2VydmljZVxuICApIHt9XG5cbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZmlsbENvbG9yO1xuICB9XG5cbiAgc2V0RmlsbENvbG9yKGZpbGxDb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBmaWxsQ29sb3I7XG4gIH1cblxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0cm9rZUNvbG9yO1xuICB9XG5cbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSBzdHJva2VDb2xvcjtcbiAgfVxuXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3Ryb2tlV2lkdGg7XG4gIH1cblxuICBnZXRMYWJlbHNBcmVTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHNBcmVTaG93bjtcbiAgfVxuXG4gIHRvZ2dsZUxhYmVsc0FyZVNob3duKCkge1xuICAgIHRoaXMubGFiZWxzQXJlU2hvd24gPSAhdGhpcy5sYWJlbHNBcmVTaG93bjtcbiAgfVxuXG4gIHNldEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgfVxuXG4gIGdldEljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbjtcbiAgfVxuXG4gIGNyZWF0ZURyYXdpbmdMYXllclN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24sIGxhYmVsc0FyZVNob3duPzogYm9vbGVhbiwgaWNvbj86IHN0cmluZyk6IE9sU3R5bGUuU3R5bGUge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgbGFiZWxzQXJlT2Zmc2V0OiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3QgcHJvaiA9IHRoaXMubWFwU2VydmljZS5nZXRNYXAoKS5wcm9qZWN0aW9uO1xuICAgIGNvbnN0IGdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG5cbiAgICBpZiAoZ2VvbSBpbnN0YW5jZW9mIE9sUG9pbnQpIHtcbiAgICAgIGxhYmVsc0FyZU9mZnNldCA9ICFsYWJlbHNBcmVPZmZzZXQ7XG4gICAgfVxuXG4gICAgLy8gaWYgZmVhdHVyZSBpcyBhIGNpcmNsZVxuICAgIGlmIChmZWF0dXJlLmdldCgncmFkJykpIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdHJhbnNmb3JtKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5mbGF0Q29vcmRpbmF0ZXMsIHByb2osICdFUFNHOjQzMjYnKTtcblxuICAgICAgc3R5bGUgPSBuZXcgT2xTdHlsZS5TdHlsZSh7XG4gICAgICAgIHRleHQ6IG5ldyBPbFN0eWxlLlRleHQoe1xuICAgICAgICAgIHRleHQ6IGxhYmVsc0FyZVNob3duID8gZmVhdHVyZS5nZXQoJ2RyYXcnKSA6ICcnLFxuICAgICAgICAgIHN0cm9rZTogbmV3IE9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgd2lkdGg6IDAuNzVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWxsOiBuZXcgT2xTdHlsZS5GaWxsKHtcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9udDogJzIwcHggc2Fucy1zZXJpZicsXG4gICAgICAgICAgb3ZlcmZsb3c6IHRydWVcbiAgICAgICAgfSksXG5cbiAgICAgICAgaW1hZ2U6IG5ldyBPbFN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgcmFkaXVzOiBmZWF0dXJlLmdldCgncmFkJykgLyBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiBjb29yZGluYXRlc1sxXSkgLyByZXNvbHV0aW9uLFxuICAgICAgICAgIHN0cm9rZTogbmV3IE9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3Ryb2tlV2lkdGhcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmaWxsOiBuZXcgT2xTdHlsZS5GaWxsKHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmZpbGxDb2xvclxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHlsZTtcblxuICAgIC8vIGlmIGZlYXR1cmUgaXMgYW4gaWNvblxuICAgIH0gZWxzZSBpZiAoaWNvbikge1xuICAgICAgc3R5bGUgPSBuZXcgT2xTdHlsZS5TdHlsZSh7XG4gICAgICAgIHRleHQ6IG5ldyBPbFN0eWxlLlRleHQoe1xuICAgICAgICAgIHRleHQ6IGxhYmVsc0FyZVNob3duID8gZmVhdHVyZS5nZXQoJ2RyYXcnKSA6ICcnLFxuICAgICAgICAgIG9mZnNldFk6IC0yNixcbiAgICAgICAgICBzdHJva2U6IG5ldyBPbFN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAwLjc1XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsbDogbmV3IE9sU3R5bGUuRmlsbCh7XG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvbnQ6ICcyMHB4IHNhbnMtc2VyaWYnLFxuICAgICAgICAgIG92ZXJmbG93OiB0cnVlXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHN0cm9rZTogbmV3IE9sU3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICBjb2xvcjogdGhpcy5zdHJva2VDb2xvcixcbiAgICAgICAgICB3aWR0aDogdGhpcy5zdHJva2VXaWR0aFxuICAgICAgICB9KSxcblxuICAgICAgICBmaWxsOiAgbmV3IE9sU3R5bGUuRmlsbCh7XG4gICAgICAgICAgY29sb3I6IHRoaXMuZmlsbENvbG9yXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGltYWdlOiBuZXcgT2xTdHlsZS5JY29uKHtcbiAgICAgICAgICBzcmM6IGljb25cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuXG4gICAgLy8gaWYgZmVhdHVyZSBpcyBhIHBvaW50LCBhIGxpbmVzdHJpbmcgb3IgYSBwb2x5Z29uXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gbmV3IE9sU3R5bGUuU3R5bGUoe1xuICAgICAgICB0ZXh0OiBuZXcgT2xTdHlsZS5UZXh0KHtcbiAgICAgICAgICB0ZXh0OiBsYWJlbHNBcmVTaG93biA/IGZlYXR1cmUuZ2V0KCdkcmF3JykgOiAnJyxcbiAgICAgICAgICBzdHJva2U6IG5ldyBPbFN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAwLjc1XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsbDogbmV3IE9sU3R5bGUuRmlsbCh7XG4gICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvbnQ6ICcyMHB4IHNhbnMtc2VyaWYnLFxuICAgICAgICAgIG92ZXJmbG93OiB0cnVlLFxuICAgICAgICAgIG9mZnNldFk6IGxhYmVsc0FyZU9mZnNldCA/IC0xNSA6IDBcbiAgICAgICAgfSksXG5cbiAgICAgICAgc3Ryb2tlOiBuZXcgT2xTdHlsZS5TdHJva2Uoe1xuICAgICAgICAgIGNvbG9yOiB0aGlzLnN0cm9rZUNvbG9yLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnN0cm9rZVdpZHRoXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGZpbGw6IG5ldyBPbFN0eWxlLkZpbGwoe1xuICAgICAgICAgIGNvbG9yOiB0aGlzLmZpbGxDb2xvclxuICAgICAgICB9KSxcblxuICAgICAgICBpbWFnZTogbmV3IE9sU3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICByYWRpdXM6IDUsXG4gICAgICAgICAgc3Ryb2tlOiBuZXcgT2xTdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zdHJva2VXaWR0aFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbGw6IG5ldyBPbFN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuZmlsbENvbG9yXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxufVxuIl19