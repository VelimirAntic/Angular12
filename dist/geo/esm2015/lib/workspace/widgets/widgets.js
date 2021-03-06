import { InjectionToken } from '@angular/core';
import { WidgetService } from '@igo2/common';
import { OgcFilterComponent } from './ogc-filter/ogc-filter.component';
export const OgcFilterWidget = new InjectionToken('OgcFilterWidget');
export function ogcFilterWidgetFactory(widgetService) {
    return widgetService.create(OgcFilterComponent);
}
export function provideOgcFilterWidget() {
    return {
        provide: OgcFilterWidget,
        useFactory: ogcFilterWidgetFactory,
        deps: [WidgetService]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3dvcmtzcGFjZS93aWRnZXRzL3dpZGdldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQVUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXJELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXZFLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBUyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTdFLE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxhQUE0QjtJQUNqRSxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQyxPQUFPO1FBQ0wsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDdEIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXaWRnZXQsIFdpZGdldFNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBPZ2NGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL29nYy1maWx0ZXIvb2djLWZpbHRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgT2djRmlsdGVyV2lkZ2V0ID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldD4oJ09nY0ZpbHRlcldpZGdldCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gb2djRmlsdGVyV2lkZ2V0RmFjdG9yeSh3aWRnZXRTZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKTogV2lkZ2V0IHtcbiAgcmV0dXJuIHdpZGdldFNlcnZpY2UuY3JlYXRlKE9nY0ZpbHRlckNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlT2djRmlsdGVyV2lkZ2V0KCkge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IE9nY0ZpbHRlcldpZGdldCxcbiAgICB1c2VGYWN0b3J5OiBvZ2NGaWx0ZXJXaWRnZXRGYWN0b3J5LFxuICAgIGRlcHM6IFtXaWRnZXRTZXJ2aWNlXVxuICB9O1xufVxuIl19