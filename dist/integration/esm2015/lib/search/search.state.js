import { Injectable } from '@angular/core';
import { EntityStore, EntityStoreFilterCustomFuncStrategy } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/geo";
import * as i2 from "@igo2/core";
/**
 * Service that holds the state of the search module
 */
export class SearchState {
    constructor(searchSourceService, storageService, configService) {
        this.searchSourceService = searchSourceService;
        this.storageService = storageService;
        this.configService = configService;
        this.searchOverlayStyle = {};
        this.searchOverlayStyleSelection = {};
        this.searchOverlayStyleFocus = {};
        this.searchTermSplitter$ = new BehaviorSubject('|');
        this.searchTerm$ = new BehaviorSubject(undefined);
        this.searchType$ = new BehaviorSubject(undefined);
        this.searchDisabled$ = new BehaviorSubject(false);
        this.searchResultsGeometryEnabled$ = new BehaviorSubject(false);
        this.searchSettingsChange$ = new BehaviorSubject(undefined);
        this.selectedResult$ = new BehaviorSubject(undefined);
        /**
         * Store that holds the search results
         */
        this.store = new EntityStore([]);
        const searchOverlayStyle = this.configService.getConfig('searchOverlayStyle');
        if (searchOverlayStyle) {
            this.searchOverlayStyle = searchOverlayStyle.base;
            this.searchOverlayStyleSelection = searchOverlayStyle.selection;
            this.searchOverlayStyleFocus = searchOverlayStyle.focus;
        }
        const searchResultsGeometryEnabled = this.storageService.get('searchResultsGeometryEnabled');
        if (searchResultsGeometryEnabled) {
            this.searchResultsGeometryEnabled$.next(searchResultsGeometryEnabled);
        }
        this.store.addStrategy(this.createCustomFilterTermStrategy(), false);
    }
    /**
     * Search types currently enabled in the search source service
     */
    get searchTypes() {
        return this.searchSourceService
            .getEnabledSources()
            .map((source) => source.constructor.type);
    }
    createCustomFilterTermStrategy() {
        const filterClauseFunc = (record) => {
            return record.entity.meta.score === 100;
        };
        return new EntityStoreFilterCustomFuncStrategy({ filterClauseFunc });
    }
    /**
     * Activate custom strategy
     *
     */
    activateCustomFilterTermStrategy() {
        const strategy = this.store.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
        if (strategy !== undefined) {
            strategy.activate();
        }
    }
    /**
     * Deactivate custom strategy
     *
     */
    deactivateCustomFilterTermStrategy() {
        const strategy = this.store.getStrategyOfType(EntityStoreFilterCustomFuncStrategy);
        if (strategy !== undefined) {
            strategy.deactivate();
        }
    }
    enableSearch() {
        this.searchDisabled$.next(false);
    }
    disableSearch() {
        this.searchDisabled$.next(true);
    }
    setSearchTerm(searchTerm) {
        this.searchTerm$.next(searchTerm);
    }
    setSearchType(searchType) {
        this.searchSourceService.enableSourcesByType(searchType);
        this.searchType$.next(searchType);
    }
    setSearchSettingsChange() {
        this.searchSettingsChange$.next(true);
    }
    setSelectedResult(result) {
        this.selectedResult$.next(result);
    }
    setSearchResultsGeometryStatus(value) {
        this.storageService.set('searchResultsGeometryEnabled', value);
        this.searchResultsGeometryEnabled$.next(value);
    }
}
SearchState.ɵfac = function SearchState_Factory(t) { return new (t || SearchState)(i0.ɵɵinject(i1.SearchSourceService), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject(i2.ConfigService)); };
SearchState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SearchState, factory: SearchState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SearchSourceService }, { type: i2.StorageService }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaW50ZWdyYXRpb24vc3JjL2xpYi9zZWFyY2gvc2VhcmNoLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFnQixXQUFXLEVBQUUsbUNBQW1DLEVBQWtDLE1BQU0sY0FBYyxDQUFDO0FBRzlILE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7O0FBRXJEOztHQUVHO0FBSUgsTUFBTSxPQUFPLFdBQVc7SUFvQ3RCLFlBQ1UsbUJBQXdDLEVBQ3hDLGNBQThCLEVBQzlCLGFBQTRCO1FBRjVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBdEMvQix1QkFBa0IsR0FBNkIsRUFBRSxDQUFDO1FBQ2xELGdDQUEyQixHQUE2QixFQUFFLENBQUM7UUFDM0QsNEJBQXVCLEdBQTZCLEVBQUUsQ0FBQztRQUtyRCx3QkFBbUIsR0FBNEIsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEUsZ0JBQVcsR0FBNEIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEUsZ0JBQVcsR0FBNEIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEUsb0JBQWUsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkUsa0NBQTZCLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJGLDBCQUFxQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRixvQkFBZSxHQUFrQyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6Rjs7V0FFRztR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QyxjQUFjLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7c0VBbkhVLFdBQVc7aUVBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTt1RkFFUCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW50aXR5UmVjb3JkLCBFbnRpdHlTdG9yZSwgRW50aXR5U3RvcmVGaWx0ZXJDdXN0b21GdW5jU3RyYXRlZ3ksIEVudGl0eVN0b3JlU3RyYXRlZ3lGdW5jT3B0aW9ucyB9IGZyb20gJ0BpZ28yL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0LCBTZWFyY2hTb3VyY2VTZXJ2aWNlLCBTZWFyY2hTb3VyY2UsIENvbW1vblZlY3RvclN0eWxlT3B0aW9ucyB9IGZyb20gJ0BpZ28yL2dlbyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgdGhlIHNlYXJjaCBtb2R1bGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoU3RhdGUge1xuICBwdWJsaWMgc2VhcmNoT3ZlcmxheVN0eWxlOiBDb21tb25WZWN0b3JTdHlsZU9wdGlvbnMgPSB7fTtcbiAgcHVibGljIHNlYXJjaE92ZXJsYXlTdHlsZVNlbGVjdGlvbjogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zID0ge307XG4gIHB1YmxpYyBzZWFyY2hPdmVybGF5U3R5bGVGb2N1czogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zID0ge307XG5cbiAgcHVibGljIGZvY3VzZWRPclJlc29sdXRpb24kJDogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgc2VsZWN0ZWRPclJlc29sdXRpb24kJDogU3Vic2NyaXB0aW9uO1xuXG4gIHJlYWRvbmx5IHNlYXJjaFRlcm1TcGxpdHRlciQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnfCcpO1xuXG4gIHJlYWRvbmx5IHNlYXJjaFRlcm0kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICByZWFkb25seSBzZWFyY2hUeXBlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgcmVhZG9ubHkgc2VhcmNoRGlzYWJsZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICByZWFkb25seSBzZWFyY2hSZXN1bHRzR2VvbWV0cnlFbmFibGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcmVhZG9ubHkgc2VhcmNoU2V0dGluZ3NDaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgcmVhZG9ubHkgc2VsZWN0ZWRSZXN1bHQkOiBCZWhhdmlvclN1YmplY3Q8U2VhcmNoUmVzdWx0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogU3RvcmUgdGhhdCBob2xkcyB0aGUgc2VhcmNoIHJlc3VsdHNcbiAgICovXG4gIHJlYWRvbmx5IHN0b3JlOiBFbnRpdHlTdG9yZTxTZWFyY2hSZXN1bHQ+ID0gbmV3IEVudGl0eVN0b3JlPFNlYXJjaFJlc3VsdD4oW10pO1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggdHlwZXMgY3VycmVudGx5IGVuYWJsZWQgaW4gdGhlIHNlYXJjaCBzb3VyY2Ugc2VydmljZVxuICAgKi9cbiAgZ2V0IHNlYXJjaFR5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hTb3VyY2VTZXJ2aWNlXG4gICAgICAuZ2V0RW5hYmxlZFNvdXJjZXMoKVxuICAgICAgLm1hcCgoc291cmNlOiBTZWFyY2hTb3VyY2UpID0+IChzb3VyY2UuY29uc3RydWN0b3IgYXMgYW55KS50eXBlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VhcmNoU291cmNlU2VydmljZTogU2VhcmNoU291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25zdCBzZWFyY2hPdmVybGF5U3R5bGUgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdzZWFyY2hPdmVybGF5U3R5bGUnKSBhcyB7XG4gICAgICBiYXNlPzogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zLFxuICAgICAgc2VsZWN0aW9uPzogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zLFxuICAgICAgZm9jdXM/OiBDb21tb25WZWN0b3JTdHlsZU9wdGlvbnNcbiAgICB9O1xuICAgIGlmIChzZWFyY2hPdmVybGF5U3R5bGUpIHtcbiAgICAgIHRoaXMuc2VhcmNoT3ZlcmxheVN0eWxlID0gc2VhcmNoT3ZlcmxheVN0eWxlLmJhc2U7XG4gICAgICB0aGlzLnNlYXJjaE92ZXJsYXlTdHlsZVNlbGVjdGlvbiA9IHNlYXJjaE92ZXJsYXlTdHlsZS5zZWxlY3Rpb247XG4gICAgICB0aGlzLnNlYXJjaE92ZXJsYXlTdHlsZUZvY3VzID0gc2VhcmNoT3ZlcmxheVN0eWxlLmZvY3VzO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnc2VhcmNoUmVzdWx0c0dlb21ldHJ5RW5hYmxlZCcpIGFzIGJvb2xlYW47XG4gICAgaWYgKHNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0c0dlb21ldHJ5RW5hYmxlZCQubmV4dChzZWFyY2hSZXN1bHRzR2VvbWV0cnlFbmFibGVkKTtcbiAgICB9XG4gICAgdGhpcy5zdG9yZS5hZGRTdHJhdGVneSh0aGlzLmNyZWF0ZUN1c3RvbUZpbHRlclRlcm1TdHJhdGVneSgpLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUZpbHRlclRlcm1TdHJhdGVneSgpOiBFbnRpdHlTdG9yZUZpbHRlckN1c3RvbUZ1bmNTdHJhdGVneSB7XG4gICAgY29uc3QgZmlsdGVyQ2xhdXNlRnVuYyA9IChyZWNvcmQ6IEVudGl0eVJlY29yZDxTZWFyY2hSZXN1bHQ+KSA9PiB7XG4gICAgICByZXR1cm4gcmVjb3JkLmVudGl0eS5tZXRhLnNjb3JlID09PSAxMDA7XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5KHtmaWx0ZXJDbGF1c2VGdW5jfSBhcyBFbnRpdHlTdG9yZVN0cmF0ZWd5RnVuY09wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIGN1c3RvbSBzdHJhdGVneVxuICAgKlxuICAgKi9cbiAgYWN0aXZhdGVDdXN0b21GaWx0ZXJUZXJtU3RyYXRlZ3koKSB7XG4gICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLnN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5KTtcbiAgICBpZiAoc3RyYXRlZ3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3RyYXRlZ3kuYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZSBjdXN0b20gc3RyYXRlZ3lcbiAgICpcbiAgICovXG4gIGRlYWN0aXZhdGVDdXN0b21GaWx0ZXJUZXJtU3RyYXRlZ3koKSB7XG4gICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLnN0b3JlLmdldFN0cmF0ZWd5T2ZUeXBlKEVudGl0eVN0b3JlRmlsdGVyQ3VzdG9tRnVuY1N0cmF0ZWd5KTtcbiAgICBpZiAoc3RyYXRlZ3kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3RyYXRlZ3kuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZVNlYXJjaCgpIHtcbiAgICB0aGlzLnNlYXJjaERpc2FibGVkJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIGRpc2FibGVTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hEaXNhYmxlZCQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hUZXJtJC5uZXh0KHNlYXJjaFRlcm0pO1xuICB9XG5cbiAgc2V0U2VhcmNoVHlwZShzZWFyY2hUeXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaFNvdXJjZVNlcnZpY2UuZW5hYmxlU291cmNlc0J5VHlwZShzZWFyY2hUeXBlKTtcbiAgICB0aGlzLnNlYXJjaFR5cGUkLm5leHQoc2VhcmNoVHlwZSk7XG4gIH1cblxuICBzZXRTZWFyY2hTZXR0aW5nc0NoYW5nZSgpIHtcbiAgICB0aGlzLnNlYXJjaFNldHRpbmdzQ2hhbmdlJC5uZXh0KHRydWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRSZXN1bHQocmVzdWx0OiBTZWFyY2hSZXN1bHQpIHtcbiAgICB0aGlzLnNlbGVjdGVkUmVzdWx0JC5uZXh0KHJlc3VsdCk7XG4gIH1cblxuICBzZXRTZWFyY2hSZXN1bHRzR2VvbWV0cnlTdGF0dXModmFsdWUpIHtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnc2VhcmNoUmVzdWx0c0dlb21ldHJ5RW5hYmxlZCcsIHZhbHVlKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNHZW9tZXRyeUVuYWJsZWQkLm5leHQodmFsdWUpO1xuICB9XG59XG4iXX0=