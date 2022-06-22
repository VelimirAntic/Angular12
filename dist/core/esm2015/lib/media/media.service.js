import { Injectable } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { Media, MediaOrientation } from './media.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
export class MediaService {
    constructor(breakpointObserver) {
        this.media$ = new BehaviorSubject(undefined);
        this.orientation$ = new BehaviorSubject(undefined);
        breakpointObserver
            .observe([Breakpoints.HandsetLandscape])
            .subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Mobile);
                this.orientation$.next(MediaOrientation.Landscape);
            }
        });
        breakpointObserver.observe([Breakpoints.HandsetPortrait]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Mobile);
                this.orientation$.next(MediaOrientation.Portrait);
            }
        });
        breakpointObserver.observe([Breakpoints.TabletLandscape]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Tablet);
                this.orientation$.next(MediaOrientation.Landscape);
            }
        });
        breakpointObserver.observe([Breakpoints.TabletPortrait]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Tablet);
                this.orientation$.next(MediaOrientation.Portrait);
            }
        });
        breakpointObserver.observe([Breakpoints.WebLandscape]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Desktop);
                this.orientation$.next(MediaOrientation.Landscape);
            }
        });
        breakpointObserver.observe([Breakpoints.WebPortrait]).subscribe(res => {
            if (res.matches) {
                this.media$.next(Media.Desktop);
                this.orientation$.next(MediaOrientation.Portrait);
            }
        });
    }
    getMedia() {
        return this.media$.value;
    }
    getOrientation() {
        return this.orientation$.value;
    }
    isTouchScreen() {
        return 'ontouchstart' in document.documentElement ? true : false;
    }
    isMobile() {
        const media = this.getMedia();
        return media === 'mobile';
    }
    isDesktop() {
        const media = this.getMedia();
        return media === 'desktop';
    }
}
MediaService.ɵfac = function MediaService_Factory(t) { return new (t || MediaService)(i0.ɵɵinject(i1.BreakpointObserver)); };
MediaService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MediaService, factory: MediaService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9tZWRpYS9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBc0IsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUt2RCxNQUFNLE9BQU8sWUFBWTtJQUl2QixZQUFZLGtCQUFzQztRQUgzQyxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVEsU0FBUyxDQUFDLENBQUM7UUFDL0MsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBbUIsU0FBUyxDQUFDLENBQUM7UUFHckUsa0JBQWtCO2FBQ2YsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDdkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hFLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkUsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BFLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxjQUFjLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUM3QixDQUFDOzt3RUF0RVUsWUFBWTtrRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO3VGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMsIEJyZWFrcG9pbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVkaWEsIE1lZGlhT3JpZW50YXRpb24gfSBmcm9tICcuL21lZGlhLmVudW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICBwdWJsaWMgbWVkaWEkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZWRpYT4odW5kZWZpbmVkKTtcbiAgcHVibGljIG9yaWVudGF0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVkaWFPcmllbnRhdGlvbj4odW5kZWZpbmVkKTtcblxuICBjb25zdHJ1Y3RvcihicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuICAgIGJyZWFrcG9pbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUoW0JyZWFrcG9pbnRzLkhhbmRzZXRMYW5kc2NhcGVdKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLm1hdGNoZXMpIHtcbiAgICAgICAgICB0aGlzLm1lZGlhJC5uZXh0KE1lZGlhLk1vYmlsZSk7XG4gICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiQubmV4dChNZWRpYU9yaWVudGF0aW9uLkxhbmRzY2FwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW0JyZWFrcG9pbnRzLkhhbmRzZXRQb3J0cmFpdF0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMubWVkaWEkLm5leHQoTWVkaWEuTW9iaWxlKTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiQubmV4dChNZWRpYU9yaWVudGF0aW9uLlBvcnRyYWl0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtCcmVha3BvaW50cy5UYWJsZXRMYW5kc2NhcGVdKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmIChyZXMubWF0Y2hlcykge1xuICAgICAgICB0aGlzLm1lZGlhJC5uZXh0KE1lZGlhLlRhYmxldCk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24kLm5leHQoTWVkaWFPcmllbnRhdGlvbi5MYW5kc2NhcGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW0JyZWFrcG9pbnRzLlRhYmxldFBvcnRyYWl0XSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5tZWRpYSQubmV4dChNZWRpYS5UYWJsZXQpO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uJC5uZXh0KE1lZGlhT3JpZW50YXRpb24uUG9ydHJhaXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW0JyZWFrcG9pbnRzLldlYkxhbmRzY2FwZV0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMubWVkaWEkLm5leHQoTWVkaWEuRGVza3RvcCk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24kLm5leHQoTWVkaWFPcmllbnRhdGlvbi5MYW5kc2NhcGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW0JyZWFrcG9pbnRzLldlYlBvcnRyYWl0XSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5tZWRpYSQubmV4dChNZWRpYS5EZXNrdG9wKTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiQubmV4dChNZWRpYU9yaWVudGF0aW9uLlBvcnRyYWl0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldE1lZGlhKCk6IE1lZGlhIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYSQudmFsdWU7XG4gIH1cblxuICBnZXRPcmllbnRhdGlvbigpOiBNZWRpYU9yaWVudGF0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbiQudmFsdWU7XG4gIH1cblxuICBpc1RvdWNoU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBtZWRpYSA9IHRoaXMuZ2V0TWVkaWEoKTtcbiAgICByZXR1cm4gbWVkaWEgPT09ICdtb2JpbGUnO1xuICB9XG5cbiAgaXNEZXNrdG9wKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1lZGlhID0gdGhpcy5nZXRNZWRpYSgpO1xuICAgIHJldHVybiBtZWRpYSA9PT0gJ2Rlc2t0b3AnO1xuICB9XG59XG4iXX0=