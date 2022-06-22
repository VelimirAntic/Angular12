import { Injectable } from '@angular/core';
import { EntityStore } from '@igo2/common';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
/**
 * Service that holds the state of the query module
 */
export class QueryState {
    constructor(configService) {
        this.configService = configService;
        /**
         * Store that holds the query results
         */
        this.store = new EntityStore([]);
        this.queryOverlayStyle = {};
        this.queryOverlayStyleSelection = {};
        this.queryOverlayStyleFocus = {};
        const queryOverlayStyle = this.configService.getConfig('queryOverlayStyle');
        if (queryOverlayStyle) {
            this.queryOverlayStyle = queryOverlayStyle.base;
            this.queryOverlayStyleSelection = queryOverlayStyle.selection;
            this.queryOverlayStyleFocus = queryOverlayStyle.focus;
        }
    }
}
QueryState.ɵfac = function QueryState_Factory(t) { return new (t || QueryState)(i0.ɵɵinject(i1.ConfigService)); };
QueryState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QueryState, factory: QueryState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QueryState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pbnRlZ3JhdGlvbi9zcmMvbGliL3NlYXJjaC9xdWVyeS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUkzQzs7R0FFRztBQUlILE1BQU0sT0FBTyxVQUFVO0lBU3JCLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBUmhEOztXQUVHO1FBQ0ksVUFBSyxHQUE4QixJQUFJLFdBQVcsQ0FBZSxFQUFFLENBQUMsQ0FBQztRQUNyRSxzQkFBaUIsR0FBNkIsRUFBRSxDQUFDO1FBQ2pELCtCQUEwQixHQUE2QixFQUFFLENBQUM7UUFDMUQsMkJBQXNCLEdBQTZCLEVBQUUsQ0FBQztRQUczRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUl6RSxDQUFDO1FBQ0YsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ2hELElBQUksQ0FBQywwQkFBMEIsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDOUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztTQUN2RDtJQUNILENBQUM7O29FQXBCVSxVQUFVO2dFQUFWLFVBQVUsV0FBVixVQUFVLG1CQUZULE1BQU07dUZBRVAsVUFBVTtjQUh0QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVudGl0eVN0b3JlIH0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IENvbW1vblZlY3RvclN0eWxlT3B0aW9ucywgU2VhcmNoUmVzdWx0IH0gZnJvbSAnQGlnbzIvZ2VvJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIG9mIHRoZSBxdWVyeSBtb2R1bGVcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUXVlcnlTdGF0ZSB7XG4gIC8qKlxuICAgKiBTdG9yZSB0aGF0IGhvbGRzIHRoZSBxdWVyeSByZXN1bHRzXG4gICAqL1xuICBwdWJsaWMgc3RvcmU6IEVudGl0eVN0b3JlPFNlYXJjaFJlc3VsdD4gPSBuZXcgRW50aXR5U3RvcmU8U2VhcmNoUmVzdWx0PihbXSk7XG4gIHB1YmxpYyBxdWVyeU92ZXJsYXlTdHlsZTogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zID0ge307XG4gIHB1YmxpYyBxdWVyeU92ZXJsYXlTdHlsZVNlbGVjdGlvbjogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zID0ge307XG4gIHB1YmxpYyBxdWVyeU92ZXJsYXlTdHlsZUZvY3VzOiBDb21tb25WZWN0b3JTdHlsZU9wdGlvbnMgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25zdCBxdWVyeU92ZXJsYXlTdHlsZSA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoJ3F1ZXJ5T3ZlcmxheVN0eWxlJykgYXMge1xuICAgICAgYmFzZT86IENvbW1vblZlY3RvclN0eWxlT3B0aW9ucyxcbiAgICAgIHNlbGVjdGlvbj86IENvbW1vblZlY3RvclN0eWxlT3B0aW9ucyxcbiAgICAgIGZvY3VzPzogQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zXG4gICAgfTtcbiAgICBpZiAocXVlcnlPdmVybGF5U3R5bGUpIHtcbiAgICAgIHRoaXMucXVlcnlPdmVybGF5U3R5bGUgPSBxdWVyeU92ZXJsYXlTdHlsZS5iYXNlO1xuICAgICAgdGhpcy5xdWVyeU92ZXJsYXlTdHlsZVNlbGVjdGlvbiA9IHF1ZXJ5T3ZlcmxheVN0eWxlLnNlbGVjdGlvbjtcbiAgICAgIHRoaXMucXVlcnlPdmVybGF5U3R5bGVGb2N1cyA9IHF1ZXJ5T3ZlcmxheVN0eWxlLmZvY3VzO1xuICAgIH1cbiAgfVxufVxuIl19