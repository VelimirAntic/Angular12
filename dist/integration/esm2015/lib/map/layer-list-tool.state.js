import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service that holds the state of layer list tool values
 */
export class LayerListToolState {
    constructor() {
        this.keyword$ = new BehaviorSubject('');
        this.sortAlpha$ = new BehaviorSubject(undefined);
        this.onlyVisible$ = new BehaviorSubject(undefined);
        this.selectedTab$ = new BehaviorSubject(undefined);
    }
    setKeyword(keyword) {
        this.keyword$.next(keyword);
    }
    setSortAlpha(sort) {
        this.sortAlpha$.next(sort);
    }
    setOnlyVisible(onlyVisible) {
        this.onlyVisible$.next(onlyVisible);
    }
    setSelectedTab(tab) {
        this.selectedTab$.next(tab);
    }
    getLayerListControls() {
        return {
            keyword: this.keyword$.value,
            onlyVisible: this.onlyVisible$.value,
            sortAlpha: this.sortAlpha$.value
        };
    }
}
LayerListToolState.ɵfac = function LayerListToolState_Factory(t) { return new (t || LayerListToolState)(); };
LayerListToolState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LayerListToolState, factory: LayerListToolState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayerListToolState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbGlzdC10b29sLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9tYXAvbGF5ZXItbGlzdC10b29sLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkM7O0dBRUc7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBS2EsYUFBUSxHQUE0QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxlQUFVLEdBQTZCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLGlCQUFZLEdBQTZCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLGlCQUFZLEdBQTRCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBeUJuRjtJQXZCRyxVQUFVLENBQUMsT0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUgsWUFBWSxDQUFDLElBQWE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVILGNBQWMsQ0FBQyxXQUFvQjtRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUgsY0FBYyxDQUFDLEdBQVc7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUM1QixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQ3BDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7U0FDakMsQ0FBQztJQUNKLENBQUM7O29GQTdCUSxrQkFBa0I7d0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTt1RkFFVCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYXllckxpc3RDb250cm9sc09wdGlvbnMgfSBmcm9tICdAaWdvMi9nZW8nO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgbGF5ZXIgbGlzdCB0b29sIHZhbHVlc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExheWVyTGlzdFRvb2xTdGF0ZSB7XG5cbiAgICByZWFkb25seSBrZXl3b3JkJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgICByZWFkb25seSBzb3J0QWxwaGEkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gICAgcmVhZG9ubHkgb25seVZpc2libGUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gICAgcmVhZG9ubHkgc2VsZWN0ZWRUYWIkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICAgIHNldEtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMua2V5d29yZCQubmV4dChrZXl3b3JkKTtcbiAgICAgIH1cblxuICAgIHNldFNvcnRBbHBoYShzb3J0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc29ydEFscGhhJC5uZXh0KHNvcnQpO1xuICAgICAgfVxuXG4gICAgc2V0T25seVZpc2libGUob25seVZpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5vbmx5VmlzaWJsZSQubmV4dChvbmx5VmlzaWJsZSk7XG4gICAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFRhYih0YWI6IG51bWJlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYiQubmV4dCh0YWIpO1xuICAgIH1cblxuICAgIGdldExheWVyTGlzdENvbnRyb2xzKCk6IExheWVyTGlzdENvbnRyb2xzT3B0aW9ucyB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXl3b3JkOiB0aGlzLmtleXdvcmQkLnZhbHVlLFxuICAgICAgICBvbmx5VmlzaWJsZTogdGhpcy5vbmx5VmlzaWJsZSQudmFsdWUsXG4gICAgICAgIHNvcnRBbHBoYTogdGhpcy5zb3J0QWxwaGEkLnZhbHVlXG4gICAgICB9O1xuICAgIH1cbn1cbiJdfQ==