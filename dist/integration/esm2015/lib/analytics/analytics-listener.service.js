import { Injectable } from '@angular/core';
import { skip } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@igo2/auth";
import * as i3 from "../context/context.state";
import * as i4 from "../search/search.state";
import * as i5 from "../tool/tool.state";
/**
 * Service that holds the state of the search module
 */
export class AnalyticsListenerService {
    /**
     * Toolbox that holds main tools
     */
    constructor(analyticsService, authService, contextState, searchState, toolState) {
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.contextState = contextState;
        this.searchState = searchState;
        this.toolState = toolState;
    }
    listen() {
        this.listenUser();
        this.listenContext();
        this.listenTool();
        this.listenSearch();
    }
    listenUser() {
        this.authService.authenticate$.subscribe(() => {
            const tokenDecoded = this.authService.decodeToken() || {};
            if (tokenDecoded.user) {
                this.authService
                    .getProfils()
                    .subscribe(profils => this.analyticsService.setUser(tokenDecoded.user, profils.profils));
            }
            else {
                this.analyticsService.setUser();
            }
        });
    }
    listenContext() {
        this.contextState.context$.subscribe(context => {
            if (context) {
                this.analyticsService.trackEvent('context', 'activateContext', context.id || context.uri);
            }
        });
    }
    listenTool() {
        this.toolState.toolbox.activeTool$.pipe(skip(1)).subscribe(tool => {
            if (tool) {
                this.analyticsService.trackEvent('tool', 'activateTool', tool.name);
            }
        });
    }
    listenSearch() {
        this.searchState.searchTerm$.pipe(skip(1)).subscribe((searchTerm) => {
            if (searchTerm !== undefined && searchTerm !== null) {
                this.analyticsService.trackSearch(searchTerm, this.searchState.store.count);
            }
        });
    }
}
AnalyticsListenerService.ɵfac = function AnalyticsListenerService_Factory(t) { return new (t || AnalyticsListenerService)(i0.ɵɵinject(i1.AnalyticsService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ContextState), i0.ɵɵinject(i4.SearchState), i0.ɵɵinject(i5.ToolState)); };
AnalyticsListenerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnalyticsListenerService, factory: AnalyticsListenerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsListenerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AnalyticsService }, { type: i2.AuthService }, { type: i3.ContextState }, { type: i4.SearchState }, { type: i5.ToolState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLWxpc3RlbmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL2FuYWx5dGljcy9hbmFseXRpY3MtbGlzdGVuZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQVN0Qzs7R0FFRztBQUlILE1BQU0sT0FBTyx3QkFBd0I7SUFDbkM7O09BRUc7SUFFSCxZQUNVLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixZQUEwQixFQUMxQixXQUF3QixFQUN4QixTQUFvQjtRQUpwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDM0IsQ0FBQztJQUVKLE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzVDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzFELElBQUksWUFBWSxDQUFDLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFdBQVc7cUJBQ2IsVUFBVSxFQUFFO3FCQUNaLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNsRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRSxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFrQixFQUFFLEVBQUU7WUFDMUUsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnR0F6RFUsd0JBQXdCOzhFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZ2QixNQUFNO3VGQUVQLHdCQUF3QjtjQUhwQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuXG5pbXBvcnQgeyBDb250ZXh0U3RhdGUgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQuc3RhdGUnO1xuaW1wb3J0IHsgU2VhcmNoU3RhdGUgfSBmcm9tICcuLi9zZWFyY2gvc2VhcmNoLnN0YXRlJztcbmltcG9ydCB7IFRvb2xTdGF0ZSB9IGZyb20gJy4uL3Rvb2wvdG9vbC5zdGF0ZSc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSBvZiB0aGUgc2VhcmNoIG1vZHVsZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NMaXN0ZW5lclNlcnZpY2Uge1xuICAvKipcbiAgICogVG9vbGJveCB0aGF0IGhvbGRzIG1haW4gdG9vbHNcbiAgICovXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udGV4dFN0YXRlOiBDb250ZXh0U3RhdGUsXG4gICAgcHJpdmF0ZSBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGUsXG4gICAgcHJpdmF0ZSB0b29sU3RhdGU6IFRvb2xTdGF0ZVxuICApIHt9XG5cbiAgbGlzdGVuKCkge1xuICAgIHRoaXMubGlzdGVuVXNlcigpO1xuICAgIHRoaXMubGlzdGVuQ29udGV4dCgpO1xuICAgIHRoaXMubGlzdGVuVG9vbCgpO1xuICAgIHRoaXMubGlzdGVuU2VhcmNoKCk7XG4gIH1cblxuICBsaXN0ZW5Vc2VyKCkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aGVudGljYXRlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW5EZWNvZGVkID0gdGhpcy5hdXRoU2VydmljZS5kZWNvZGVUb2tlbigpIHx8IHt9O1xuICAgICAgaWYgKHRva2VuRGVjb2RlZC51c2VyKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgICAuZ2V0UHJvZmlscygpXG4gICAgICAgICAgLnN1YnNjcmliZShwcm9maWxzID0+XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2V0VXNlcih0b2tlbkRlY29kZWQudXNlciwgcHJvZmlscy5wcm9maWxzKVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2V0VXNlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuQ29udGV4dCgpIHtcbiAgICB0aGlzLmNvbnRleHRTdGF0ZS5jb250ZXh0JC5zdWJzY3JpYmUoY29udGV4dCA9PiB7XG4gICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2UudHJhY2tFdmVudCgnY29udGV4dCcsICdhY3RpdmF0ZUNvbnRleHQnLCBjb250ZXh0LmlkIHx8IGNvbnRleHQudXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlblRvb2woKSB7XG4gICAgdGhpcy50b29sU3RhdGUudG9vbGJveC5hY3RpdmVUb29sJC5waXBlKHNraXAoMSkpLnN1YnNjcmliZSh0b29sID0+IHtcbiAgICAgIGlmICh0b29sKSB7XG4gICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS50cmFja0V2ZW50KCd0b29sJywgJ2FjdGl2YXRlVG9vbCcsIHRvb2wubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5TZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZS5zZWFyY2hUZXJtJC5waXBlKHNraXAoMSkpLnN1YnNjcmliZSgoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoVGVybSAhPT0gdW5kZWZpbmVkICYmIHNlYXJjaFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnRyYWNrU2VhcmNoKHNlYXJjaFRlcm0sIHRoaXMuc2VhcmNoU3RhdGUuc3RvcmUuY291bnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=