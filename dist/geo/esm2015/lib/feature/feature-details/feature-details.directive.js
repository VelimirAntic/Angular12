import { Directive, Self, HostListener, Output, EventEmitter } from '@angular/core';
import * as olProj from 'ol/proj';
import { BehaviorSubject } from 'rxjs';
import pointOnFeature from '@turf/point-on-feature';
import { FEATURE } from '../shared';
import * as i0 from "@angular/core";
import * as i1 from "./feature-details.component";
export class FeatureDetailsDirective {
    constructor(component, el) {
        this.el = el;
        this.geolocation$ = new BehaviorSubject(undefined);
        this.start = {
            meta: { id: 1 },
            type: FEATURE,
            geometry: {
                type: 'Point',
                coordinates: undefined
            },
            projection: 'EPSG:4326',
            properties: {
                id: 1,
                name: 'User coordinates',
            }
        };
        this.feature$ = new BehaviorSubject(undefined);
        this.routingEvent = new EventEmitter();
        this.component = component;
    }
    get map() {
        return this.component.map;
    }
    get feature() {
        return this.component.feature;
    }
    get geolocation() {
        return this.component.map.geolocation$.getValue();
    }
    set geolocation(value) {
        if (value) {
            this.geolocation = value;
            this.geolocation.on('change', evt => {
                this.geolocation$.next(this.geolocation);
            });
        }
    }
    setFeature() {
        this.feature$.next(this.feature);
    }
    ngOnInit() {
        this.map.geolocation$.subscribe(geolocation => {
            if (!geolocation) {
                return;
            }
            geolocation.setProjection(this.map.projection);
            if (geolocation && geolocation.getTracking() === false) {
                geolocation.setTracking(false);
            }
            if (geolocation.getTracking() === true) {
                let userCoord = geolocation.getPosition();
                userCoord = olProj.transform(userCoord, this.map.projection, 'EPSG:4326');
                this.start.geometry.coordinates = userCoord;
            }
        });
        this.feature$.subscribe(() => {
            if (this.feature.geometry) {
                if (this.feature.geometry.type === 'Point') {
                    this.end = this.feature;
                }
                else {
                    this.end = pointOnFeature(this.feature.geometry);
                }
                this.geolocation$.next(this.geolocation);
                this.bindClicking();
            }
        });
    }
    bindClicking() {
        setTimeout(() => {
            const routeElement = this.el.nativeElement.querySelector('span.routing');
            if (routeElement) {
                routeElement.addEventListener('click', () => {
                    this.activateRouting();
                });
            }
        }, 1);
    }
    activateRouting() {
        this.start.geometry.coordinates ? this.routingEvent.emit([this.start, this.end]) : this.routingEvent.emit([this.end]);
    }
}
FeatureDetailsDirective.ɵfac = function FeatureDetailsDirective_Factory(t) { return new (t || FeatureDetailsDirective)(i0.ɵɵdirectiveInject(i1.FeatureDetailsComponent, 2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
FeatureDetailsDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FeatureDetailsDirective, selectors: [["", "igoFeatureDetailsDirective", ""]], hostBindings: function FeatureDetailsDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("selectFeature", function FeatureDetailsDirective_selectFeature_HostBindingHandler() { return ctx.setFeature(); });
    } }, outputs: { routingEvent: "routingEvent" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatureDetailsDirective, [{
        type: Directive,
        args: [{
                // This directive allow to view the route between the user coordinates and the feature
                selector: '[igoFeatureDetailsDirective]'
            }]
    }], function () { return [{ type: i1.FeatureDetailsComponent, decorators: [{
                type: Self
            }] }, { type: i0.ElementRef }]; }, { routingEvent: [{
            type: Output
        }], setFeature: [{
            type: HostListener,
            args: ['selectFeature']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1kZXRhaWxzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2ZlYXR1cmUvZmVhdHVyZS1kZXRhaWxzL2ZlYXR1cmUtZGV0YWlscy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFVLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFjLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJeEcsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFFbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLGNBQWMsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFPN0MsTUFBTSxPQUFPLHVCQUF1QjtJQWdEbEMsWUFDVSxTQUFrQyxFQUNsQyxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWhEakIsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsU0FBUyxDQUFDLENBQUM7UUFFN0QsVUFBSyxHQUFZO1lBQ3RCLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixXQUFXLEVBQUUsU0FBUzthQUN2QjtZQUNELFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDVixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCO1NBQ0YsQ0FBQztRQVdGLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQWNoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFXckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQWpDRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsSUFBSSxXQUFXLENBQUMsS0FBSztRQUNuQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBS0QsVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBU0QsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPO2FBQ1I7WUFDRCxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFL0MsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtnQkFDdEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDdEMsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMxQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7YUFDN0M7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbEQ7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1YsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN6RSxJQUFJLFlBQVksRUFBRTtnQkFDaEIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEgsQ0FBQzs7OEZBbkdVLHVCQUF1QjswRUFBdkIsdUJBQXVCO29IQUF2QixnQkFBWTs7dUZBQVosdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxzRkFBc0Y7Z0JBQ3RGLFFBQVEsRUFBRSw4QkFBOEI7YUFDekM7O3NCQW1ESSxJQUFJO2lEQVJHLFlBQVk7a0JBQXJCLE1BQU07WUFHUCxVQUFVO2tCQURULFlBQVk7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgRGlyZWN0aXZlLCBTZWxmLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZS1kZXRhaWxzLmNvbXBvbmVudCc7XG5cbmltcG9ydCBvbEdlb2xvY2F0aW9uIGZyb20gJ29sL0dlb2xvY2F0aW9uJztcbmltcG9ydCAqIGFzIG9sUHJvaiBmcm9tICdvbC9wcm9qJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCBwb2ludE9uRmVhdHVyZSBmcm9tICdAdHVyZi9wb2ludC1vbi1mZWF0dXJlJztcbmltcG9ydCB7IEZlYXR1cmUsIEZFQVRVUkUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gVGhpcyBkaXJlY3RpdmUgYWxsb3cgdG8gdmlldyB0aGUgcm91dGUgYmV0d2VlbiB0aGUgdXNlciBjb29yZGluYXRlcyBhbmQgdGhlIGZlYXR1cmVcbiAgc2VsZWN0b3I6ICdbaWdvRmVhdHVyZURldGFpbHNEaXJlY3RpdmVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVEZXRhaWxzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBjb21wb25lbnQ6IEZlYXR1cmVEZXRhaWxzQ29tcG9uZW50O1xuICBwdWJsaWMgZ2VvbG9jYXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxvbEdlb2xvY2F0aW9uPih1bmRlZmluZWQpO1xuXG4gIHB1YmxpYyBzdGFydDogRmVhdHVyZSA9IHtcbiAgICBtZXRhOiB7IGlkOiAxIH0sXG4gICAgdHlwZTogRkVBVFVSRSxcbiAgICBnZW9tZXRyeToge1xuICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgIGNvb3JkaW5hdGVzOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ1VzZXIgY29vcmRpbmF0ZXMnLFxuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgZW5kOiBGZWF0dXJlO1xuXG4gIGdldCBtYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50Lm1hcDtcbiAgfVxuXG4gIGdldCBmZWF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5mZWF0dXJlO1xuICB9XG4gIGZlYXR1cmUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGdldCBnZW9sb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubWFwLmdlb2xvY2F0aW9uJC5nZXRWYWx1ZSgpO1xuICB9XG4gIHNldCBnZW9sb2NhdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5nZW9sb2NhdGlvbi5vbignY2hhbmdlJywgZXZ0ID0+IHtcbiAgICAgICAgdGhpcy5nZW9sb2NhdGlvbiQubmV4dCh0aGlzLmdlb2xvY2F0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSByb3V0aW5nRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZlYXR1cmVbXT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdzZWxlY3RGZWF0dXJlJylcbiAgc2V0RmVhdHVyZSgpIHtcbiAgICB0aGlzLmZlYXR1cmUkLm5leHQodGhpcy5mZWF0dXJlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgY29tcG9uZW50OiBGZWF0dXJlRGV0YWlsc0NvbXBvbmVudCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXAuZ2VvbG9jYXRpb24kLnN1YnNjcmliZShnZW9sb2NhdGlvbiA9PiB7XG4gICAgICBpZiAoIWdlb2xvY2F0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGdlb2xvY2F0aW9uLnNldFByb2plY3Rpb24odGhpcy5tYXAucHJvamVjdGlvbik7XG5cbiAgICAgIGlmIChnZW9sb2NhdGlvbiAmJiBnZW9sb2NhdGlvbi5nZXRUcmFja2luZygpID09PSBmYWxzZSkge1xuICAgICAgICBnZW9sb2NhdGlvbi5zZXRUcmFja2luZyhmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZW9sb2NhdGlvbi5nZXRUcmFja2luZygpID09PSB0cnVlKSB7XG4gICAgICAgIGxldCB1c2VyQ29vcmQgPSBnZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpO1xuICAgICAgICB1c2VyQ29vcmQgPSBvbFByb2oudHJhbnNmb3JtKHVzZXJDb29yZCwgdGhpcy5tYXAucHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpO1xuICAgICAgICB0aGlzLnN0YXJ0Lmdlb21ldHJ5LmNvb3JkaW5hdGVzID0gdXNlckNvb3JkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5mZWF0dXJlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZmVhdHVyZS5nZW9tZXRyeSkge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09ICdQb2ludCcpIHtcbiAgICAgICAgICB0aGlzLmVuZCA9IHRoaXMuZmVhdHVyZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVuZCA9IHBvaW50T25GZWF0dXJlKHRoaXMuZmVhdHVyZS5nZW9tZXRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZW9sb2NhdGlvbiQubmV4dCh0aGlzLmdlb2xvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tpbmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJpbmRDbGlja2luZygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJvdXRlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLnJvdXRpbmcnKTtcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQpIHtcbiAgICAgICAgcm91dGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVSb3V0aW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICB9XG5cbiAgYWN0aXZhdGVSb3V0aW5nKCkge1xuICAgIHRoaXMuc3RhcnQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMgPyB0aGlzLnJvdXRpbmdFdmVudC5lbWl0KFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF0pIDogdGhpcy5yb3V0aW5nRXZlbnQuZW1pdChbdGhpcy5lbmRdKTtcbiAgfVxufVxuIl19