import { Injectable } from '@angular/core';
import { JsonDialogComponent } from './json-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class JsonDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(title, data, ignoreKeys) {
        const dialogRef = this.dialog.open(JsonDialogComponent, {
            disableClose: false
        });
        dialogRef.componentInstance.data = data;
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.ignoreKeys = ignoreKeys;
        return dialogRef.afterClosed();
    }
}
JsonDialogService.ɵfac = function JsonDialogService_Factory(t) { return new (t || JsonDialogService)(i0.ɵɵinject(i1.MatDialog)); };
JsonDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JsonDialogService, factory: JsonDialogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonDialogService, [{
        type: Injectable
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2pzb24tZGlhbG9nL2pzb24tZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRzlELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFbEMsSUFBSSxDQUFDLEtBQVUsRUFBRSxJQUFJLEVBQUUsVUFBcUI7UUFDakQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDdEQsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFcEQsT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7a0ZBWlUsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSnNvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vanNvbi1kaWFsb2cuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25EaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBwdWJsaWMgb3Blbih0aXRsZTogYW55LCBkYXRhLCBpZ25vcmVLZXlzPzogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSnNvbkRpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhID0gZGF0YTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UudGl0bGUgPSB0aXRsZTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuaWdub3JlS2V5cyA9IGlnbm9yZUtleXM7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XG4gIH1cbn1cbiJdfQ==