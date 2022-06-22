import { Injectable } from '@angular/core';
import { downloadContent } from '@igo2/utils';
import { ExportNothingToExportError } from './context-export.errors';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export class ContextExportService {
    export(res) {
        return this.exportAsync(res);
    }
    exportAsync(res) {
        const doExport = (observer) => {
            const nothingToExport = this.nothingToExport(res);
            if (nothingToExport === true) {
                observer.error(new ExportNothingToExportError());
                return;
            }
            const contextJSON = JSON.stringify(res);
            downloadContent(contextJSON, 'text/json;charset=utf-8', `${res.uri}.json`);
            observer.complete();
        };
        return new Observable(doExport);
    }
    nothingToExport(res) {
        if (res.map === undefined) {
            return true;
        }
        return false;
    }
}
ContextExportService.ɵfac = function ContextExportService_Factory(t) { return new (t || ContextExportService)(); };
ContextExportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextExportService, factory: ContextExportService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextExportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1leHBvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LWltcG9ydC1leHBvcnQvc2hhcmVkL2NvbnRleHQtZXhwb3J0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBWSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzVDLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsTUFBTSxDQUFDLEdBQW9CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRVMsV0FBVyxDQUFDLEdBQW9CO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBd0IsRUFBRSxFQUFFO1lBQzFDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO2dCQUMxQixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPO2FBQ1Y7WUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLGVBQWUsQ0FBQyxXQUFXLEVBQUUseUJBQXlCLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUMzRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVMsZUFBZSxDQUFDLEdBQW9CO1FBQzVDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7d0ZBekJVLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGbkIsTUFBTTt1RkFFUCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkb3dubG9hZENvbnRlbnQgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IERldGFpbGVkQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXhwb3J0Tm90aGluZ1RvRXhwb3J0RXJyb3IgfSBmcm9tICcuL2NvbnRleHQtZXhwb3J0LmVycm9ycyc7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0RXhwb3J0U2VydmljZSB7XG5cbiAgZXhwb3J0KHJlczogRGV0YWlsZWRDb250ZXh0KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZXhwb3J0QXN5bmMocmVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBleHBvcnRBc3luYyhyZXM6IERldGFpbGVkQ29udGV4dCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IGRvRXhwb3J0ID0gKG9ic2VydmVyOiBPYnNlcnZlcjx2b2lkPikgPT4ge1xuICAgICAgICBjb25zdCBub3RoaW5nVG9FeHBvcnQgPSB0aGlzLm5vdGhpbmdUb0V4cG9ydChyZXMpO1xuICAgICAgICBpZiAobm90aGluZ1RvRXhwb3J0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgRXhwb3J0Tm90aGluZ1RvRXhwb3J0RXJyb3IoKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGV4dEpTT04gPSBKU09OLnN0cmluZ2lmeShyZXMpO1xuICAgICAgICBkb3dubG9hZENvbnRlbnQoY29udGV4dEpTT04sICd0ZXh0L2pzb247Y2hhcnNldD11dGYtOCcsIGAke3Jlcy51cml9Lmpzb25gKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShkb0V4cG9ydCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbm90aGluZ1RvRXhwb3J0KHJlczogRGV0YWlsZWRDb250ZXh0KTogYm9vbGVhbiB7XG4gICAgaWYgKHJlcy5tYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19