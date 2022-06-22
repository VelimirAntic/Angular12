import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IgoKeyValueModule } from '../keyvalue/keyvalue.module';
import { JsonDialogComponent } from './json-dialog.component';
import { JsonDialogService } from './json-dialog.service';
import * as i0 from "@angular/core";
export class IgoJsonDialogModule {
    static forRoot() {
        return {
            ngModule: IgoJsonDialogModule
        };
    }
}
IgoJsonDialogModule.ɵfac = function IgoJsonDialogModule_Factory(t) { return new (t || IgoJsonDialogModule)(); };
IgoJsonDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IgoJsonDialogModule });
IgoJsonDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [JsonDialogService], imports: [[CommonModule, MatButtonModule, MatDialogModule, IgoKeyValueModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoJsonDialogModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatButtonModule, MatDialogModule, IgoKeyValueModule],
                exports: [JsonDialogComponent],
                declarations: [JsonDialogComponent],
                providers: [JsonDialogService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IgoJsonDialogModule, { declarations: [JsonDialogComponent], imports: [CommonModule, MatButtonModule, MatDialogModule, IgoKeyValueModule], exports: [JsonDialogComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvanNvbi1kaWFsb2cvanNvbi1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVExRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztJQUNKLENBQUM7O3NGQUxVLG1CQUFtQjtxRUFBbkIsbUJBQW1COzBFQUZuQixDQUFDLGlCQUFpQixDQUFDLFlBSHJCLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7dUZBS2pFLG1CQUFtQjtjQU4vQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzVFLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7O3dGQUNZLG1CQUFtQixtQkFIZixtQkFBbUIsYUFGeEIsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLGFBQ2pFLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IElnb0tleVZhbHVlTW9kdWxlIH0gZnJvbSAnLi4va2V5dmFsdWUva2V5dmFsdWUubW9kdWxlJztcblxuaW1wb3J0IHsgSnNvbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vanNvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9qc29uLWRpYWxvZy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIElnb0tleVZhbHVlTW9kdWxlXSxcbiAgZXhwb3J0czogW0pzb25EaWFsb2dDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtKc29uRGlhbG9nQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbSnNvbkRpYWxvZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIElnb0pzb25EaWFsb2dNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElnb0pzb25EaWFsb2dNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElnb0pzb25EaWFsb2dNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=