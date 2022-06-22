import { Component, Input, ChangeDetectionStrategy, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "@angular/material/paginator";
export class EntityTablePaginatorComponent {
    constructor(languageService, mediaService) {
        this.languageService = languageService;
        this.mediaService = mediaService;
        this.disabled = false;
        this.hidePageSize = false;
        this.pageIndex = 0;
        this.pageSize = 50;
        this.pageSizeOptions = [5, 10, 20, 50, 100, 200];
        this.showFirstLastButtons = true;
        this.paginationLabelTranslation$$ = [];
        this.entitySortChange$ = new BehaviorSubject(false);
        this.length = 0;
        /**
         * Paginator emitted.
         */
        this.paginatorChange = new EventEmitter();
        this.rangeLabel = (page, pageSize, length) => {
            const of = new BehaviorSubject('');
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.of').subscribe((label) => {
                of.next(label);
            }));
            if (length === 0 || pageSize === 0) {
                return `0 ${of.value} ${length}`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return `${startIndex + 1} - ${endIndex} ${of.value} ${length}`;
        };
    }
    ngOnChanges() {
        this.unsubscribeAll();
        this.count$$ = this.store.stateView.count$.subscribe((count) => {
            this.length = count;
            this.emitPaginator();
        });
        this.entitySortChange$$ = this.entitySortChange$.subscribe(() => {
            if (this.paginator) {
                this.paginator.firstPage();
            }
        });
        this.initPaginatorOptions();
        this.translateLabels();
    }
    initPaginatorOptions() {
        var _a, _b, _c, _d, _e, _f;
        this.disabled = ((_a = this.paginatorOptions) === null || _a === void 0 ? void 0 : _a.disabled) || this.disabled;
        this.pageIndex = ((_b = this.paginatorOptions) === null || _b === void 0 ? void 0 : _b.pageIndex) || this.pageIndex;
        this.pageSize = ((_c = this.paginatorOptions) === null || _c === void 0 ? void 0 : _c.pageSize) || this.pageSize;
        this.pageSizeOptions = ((_d = this.paginatorOptions) === null || _d === void 0 ? void 0 : _d.pageSizeOptions) || this.pageSizeOptions;
        if (this.mediaService.isMobile()) {
            this.showFirstLastButtons = false;
            this.hidePageSize = true;
        }
        else {
            this.showFirstLastButtons = ((_e = this.paginatorOptions) === null || _e === void 0 ? void 0 : _e.showFirstLastButtons) || this.showFirstLastButtons;
            this.hidePageSize = ((_f = this.paginatorOptions) === null || _f === void 0 ? void 0 : _f.hidePageSize) || this.hidePageSize;
        }
    }
    translateLabels() {
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.firstPageLabel').subscribe((label) => {
            this.paginator._intl.firstPageLabel = label;
        }));
        this.paginator._intl.getRangeLabel = this.rangeLabel;
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.itemsPerPageLabel').subscribe((label) => {
            this.paginator._intl.itemsPerPageLabel = label;
        }));
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.lastPageLabel').subscribe((label) => {
            this.paginator._intl.lastPageLabel = label;
        }));
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.nextPageLabel').subscribe((label) => {
            this.paginator._intl.nextPageLabel = label;
        }));
        this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.previousPageLabel').subscribe((label) => {
            this.paginator._intl.previousPageLabel = label;
        }));
    }
    unsubscribeAll() {
        this.paginationLabelTranslation$$.map(sub => sub.unsubscribe());
        if (this.count$$) {
            this.count$$.unsubscribe();
        }
        if (this.entitySortChange$$) {
            this.entitySortChange$$.unsubscribe();
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    emitPaginator() {
        this.paginatorChange.emit(this.paginator);
    }
}
EntityTablePaginatorComponent.ɵfac = function EntityTablePaginatorComponent_Factory(t) { return new (t || EntityTablePaginatorComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i1.MediaService)); };
EntityTablePaginatorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EntityTablePaginatorComponent, selectors: [["igo-entity-table-paginator"]], viewQuery: function EntityTablePaginatorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, inputs: { entitySortChange$: "entitySortChange$", store: "store", paginatorOptions: "paginatorOptions" }, outputs: { page: "page", paginatorChange: "paginatorChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 7, consts: [[3, "disabled", "hidePageSize", "length", "pageIndex", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"]], template: function EntityTablePaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-paginator", 0);
        i0.ɵɵlistener("page", function EntityTablePaginatorComponent_Template_mat_paginator_page_0_listener() { return ctx.emitPaginator(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("hidePageSize", ctx.hidePageSize)("length", ctx.length)("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", ctx.showFirstLastButtons);
    } }, directives: [i2.MatPaginator], styles: ["[_nghost-%COMP%]{margin-top:-10px;padding-right:15px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]{margin-top:0;padding-right:5px}}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EntityTablePaginatorComponent, [{
        type: Component,
        args: [{
                selector: 'igo-entity-table-paginator',
                templateUrl: './entity-table-paginator.component.html',
                styleUrls: ['./entity-table-paginator.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.LanguageService }, { type: i1.MediaService }]; }, { entitySortChange$: [{
            type: Input
        }], store: [{
            type: Input
        }], paginatorOptions: [{
            type: Input
        }], page: [{
            type: Output
        }], paginatorChange: [{
            type: Output
        }], paginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXRhYmxlLXBhZ2luYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9lbnRpdHkvZW50aXR5LXRhYmxlLXBhZ2luYXRvci9lbnRpdHktdGFibGUtcGFnaW5hdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2VudGl0eS9lbnRpdHktdGFibGUtcGFnaW5hdG9yL2VudGl0eS10YWJsZS1wYWdpbmF0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7OztBQVVyRCxNQUFNLE9BQU8sNkJBQTZCO0lBb0N4QyxZQUFvQixlQUFnQyxFQUFVLFlBQTBCO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBbENqRixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixvQkFBZSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RCx5QkFBb0IsR0FBWSxJQUFJLENBQUM7UUFHcEMsaUNBQTRCLEdBQW1CLEVBQUUsQ0FBQztRQUVqRCxzQkFBaUIsR0FBNkIsSUFBSSxlQUFlLENB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QVEyQjtRQUF6QiwrR0FBUSxtQkFBZSxJQUFDO1FBQzFCLGlCQUFnQjs7UUFSZCx1Q0FBcUIsa0NBQUEsc0JBQUEsNEJBQUEsMEJBQUEsd0NBQUEsa0RBQUE7O3VGRHdCViw2QkFBNkI7Y0FOekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2dCQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs2RkFhVSxpQkFBaUI7a0JBQXpCLEtBQUs7WUFJRyxLQUFLO2tCQUFiLEtBQUs7WUFNTixnQkFBZ0I7a0JBRGYsS0FBSztZQU1JLElBQUk7a0JBQWIsTUFBTTtZQU9HLGVBQWU7a0JBQXhCLE1BQU07WUFJb0MsU0FBUztrQkFBbkQsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBFbnRpdHlTdG9yZVxufSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBQYWdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBFbnRpdHlUYWJsZVBhZ2luYXRvck9wdGlvbnMgfSBmcm9tICcuL2VudGl0eS10YWJsZS1wYWdpbmF0b3IuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaWdvLWVudGl0eS10YWJsZS1wYWdpbmF0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZW50aXR5LXRhYmxlLXBhZ2luYXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VudGl0eS10YWJsZS1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5VGFibGVQYWdpbmF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBoaWRlUGFnZVNpemU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHBhZ2VJbmRleDogbnVtYmVyID0gMDtcbiAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIgPSA1MDtcbiAgcHVibGljIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10gPSBbNSwgMTAsIDIwLCA1MCwgMTAwLCAyMDBdO1xuICBwdWJsaWMgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGNvdW50JCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBlbnRpdHlTb3J0Q2hhbmdlJCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uTGFiZWxUcmFuc2xhdGlvbiQkOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGVudGl0eVNvcnRDaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgLyoqXG4gICAqIEVudGl0eSBzdG9yZVxuICAgKi9cbiAgQElucHV0KCkgc3RvcmU6IEVudGl0eVN0b3JlPG9iamVjdD47XG5cbiAgLyoqXG4gICAqIFBhZ2luYXRvciBvcHRpb25zXG4gICAqL1xuICBASW5wdXQoKVxuICBwYWdpbmF0b3JPcHRpb25zOiBFbnRpdHlUYWJsZVBhZ2luYXRvck9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcGFnaW5hdG9yIGNoYW5nZXMgdGhlIHBhZ2Ugc2l6ZSBvciBwYWdlIGluZGV4LlxuICAgKi9cbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+O1xuXG4gIHB1YmxpYyBsZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFBhZ2luYXRvciBlbWl0dGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHBhZ2luYXRvckNoYW5nZTogRXZlbnRFbWl0dGVyPE1hdFBhZ2luYXRvcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE1hdFBhZ2luYXRvcj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLCBwcml2YXRlIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgdGhpcy5jb3VudCQkID0gdGhpcy5zdG9yZS5zdGF0ZVZpZXcuY291bnQkLnN1YnNjcmliZSgoY291bnQpID0+IHtcbiAgICAgIHRoaXMubGVuZ3RoID0gY291bnQ7XG4gICAgICB0aGlzLmVtaXRQYWdpbmF0b3IoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVudGl0eVNvcnRDaGFuZ2UkJCA9IHRoaXMuZW50aXR5U29ydENoYW5nZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRvcikge1xuICAgICAgICB0aGlzLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmluaXRQYWdpbmF0b3JPcHRpb25zKCk7XG4gICAgdGhpcy50cmFuc2xhdGVMYWJlbHMoKTtcbiAgfVxuXG4gIGluaXRQYWdpbmF0b3JPcHRpb25zKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLnBhZ2luYXRvck9wdGlvbnM/LmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWQ7XG4gICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLnBhZ2luYXRvck9wdGlvbnM/LnBhZ2VJbmRleCB8fCB0aGlzLnBhZ2VJbmRleDtcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0b3JPcHRpb25zPy5wYWdlU2l6ZSB8fCB0aGlzLnBhZ2VTaXplO1xuICAgIHRoaXMucGFnZVNpemVPcHRpb25zID0gdGhpcy5wYWdpbmF0b3JPcHRpb25zPy5wYWdlU2l6ZU9wdGlvbnMgfHwgdGhpcy5wYWdlU2l6ZU9wdGlvbnM7XG4gICAgaWYgKHRoaXMubWVkaWFTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgIHRoaXMuc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZVBhZ2VTaXplID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRoaXMucGFnaW5hdG9yT3B0aW9ucz8uc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgfHwgdGhpcy5zaG93Rmlyc3RMYXN0QnV0dG9ucztcbiAgICAgIHRoaXMuaGlkZVBhZ2VTaXplID0gdGhpcy5wYWdpbmF0b3JPcHRpb25zPy5oaWRlUGFnZVNpemUgfHwgdGhpcy5oaWRlUGFnZVNpemU7XG4gICAgfVxuICB9XG5cbiAgdHJhbnNsYXRlTGFiZWxzKCkge1xuXG4gICAgdGhpcy5wYWdpbmF0aW9uTGFiZWxUcmFuc2xhdGlvbiQkLnB1c2goXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuZ2V0KCdpZ28uY29tbW9uLnBhZ2luYXRvci5maXJzdFBhZ2VMYWJlbCcpLnN1YnNjcmliZSgobGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2luYXRvci5faW50bC5maXJzdFBhZ2VMYWJlbCA9IGxhYmVsO1xuICAgICAgfSkpO1xuXG4gICAgdGhpcy5wYWdpbmF0b3IuX2ludGwuZ2V0UmFuZ2VMYWJlbCA9IHRoaXMucmFuZ2VMYWJlbDtcblxuICAgIHRoaXMucGFnaW5hdGlvbkxhYmVsVHJhbnNsYXRpb24kJC5wdXNoKFxuICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmdldCgnaWdvLmNvbW1vbi5wYWdpbmF0b3IuaXRlbXNQZXJQYWdlTGFiZWwnKS5zdWJzY3JpYmUoKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5wYWdpbmF0b3IuX2ludGwuaXRlbXNQZXJQYWdlTGFiZWwgPSBsYWJlbDtcbiAgICAgIH0pKTtcbiAgICB0aGlzLnBhZ2luYXRpb25MYWJlbFRyYW5zbGF0aW9uJCQucHVzaChcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5nZXQoJ2lnby5jb21tb24ucGFnaW5hdG9yLmxhc3RQYWdlTGFiZWwnKS5zdWJzY3JpYmUoKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5wYWdpbmF0b3IuX2ludGwubGFzdFBhZ2VMYWJlbCA9IGxhYmVsO1xuICAgICAgfSkpO1xuICAgIHRoaXMucGFnaW5hdGlvbkxhYmVsVHJhbnNsYXRpb24kJC5wdXNoKFxuICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmdldCgnaWdvLmNvbW1vbi5wYWdpbmF0b3IubmV4dFBhZ2VMYWJlbCcpLnN1YnNjcmliZSgobGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2luYXRvci5faW50bC5uZXh0UGFnZUxhYmVsID0gbGFiZWw7XG4gICAgICB9KSk7XG4gICAgdGhpcy5wYWdpbmF0aW9uTGFiZWxUcmFuc2xhdGlvbiQkLnB1c2goXG4gICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuZ2V0KCdpZ28uY29tbW9uLnBhZ2luYXRvci5wcmV2aW91c1BhZ2VMYWJlbCcpLnN1YnNjcmliZSgobGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2luYXRvci5faW50bC5wcmV2aW91c1BhZ2VMYWJlbCA9IGxhYmVsO1xuICAgICAgfSkpO1xuICB9XG5cbiAgcmFuZ2VMYWJlbCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgb2Y6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG5cbiAgICB0aGlzLnBhZ2luYXRpb25MYWJlbFRyYW5zbGF0aW9uJCQucHVzaChcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5nZXQoJ2lnby5jb21tb24ucGFnaW5hdG9yLm9mJykuc3Vic2NyaWJlKChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIG9mLm5leHQobGFiZWwpO1xuICAgICAgfSkpO1xuICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHsgcmV0dXJuIGAwICR7b2YudmFsdWV9ICR7bGVuZ3RofWA7IH1cbiAgICBsZW5ndGggPSBNYXRoLm1heChsZW5ndGgsIDApO1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID9cbiAgICAgICAgTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDpcbiAgICAgICAgc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuICAgIHJldHVybiBgJHtzdGFydEluZGV4ICsgMX0gLSAke2VuZEluZGV4fSAke29mLnZhbHVlfSAke2xlbmd0aH1gO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLnBhZ2luYXRpb25MYWJlbFRyYW5zbGF0aW9uJCQubWFwKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgaWYgKHRoaXMuY291bnQkJCkgeyB0aGlzLmNvdW50JCQudW5zdWJzY3JpYmUoKTsgfVxuICAgIGlmICh0aGlzLmVudGl0eVNvcnRDaGFuZ2UkJCkgeyB0aGlzLmVudGl0eVNvcnRDaGFuZ2UkJC51bnN1YnNjcmliZSgpOyB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gIH1cblxuICBlbWl0UGFnaW5hdG9yKCkge1xuICAgIHRoaXMucGFnaW5hdG9yQ2hhbmdlLmVtaXQodGhpcy5wYWdpbmF0b3IpO1xuICB9XG59XG4iLCI8bWF0LXBhZ2luYXRvciBcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgW2hpZGVQYWdlU2l6ZV09XCJoaWRlUGFnZVNpemVcIlxuICBbbGVuZ3RoXT1cImxlbmd0aFwiXG4gIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcbiAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlU2l6ZU9wdGlvbnNcIlxuICBbc2hvd0ZpcnN0TGFzdEJ1dHRvbnNdPVwic2hvd0ZpcnN0TGFzdEJ1dHRvbnNcIlxuICAocGFnZSk9XCJlbWl0UGFnaW5hdG9yKClcIj5cbjwvbWF0LXBhZ2luYXRvcj5cbiJdfQ==