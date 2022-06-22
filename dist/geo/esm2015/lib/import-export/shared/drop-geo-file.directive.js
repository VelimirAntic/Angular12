import { Directive, HostListener, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DragAndDropDirective } from '@igo2/common';
import { handleFileImportSuccess, handleFileImportError } from '../shared/import.utils';
import { concatMap, first, skipWhile } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../map/map-browser/map-browser.component";
import * as i2 from "./import.service";
import * as i3 from "@igo2/core";
import * as i4 from "../style-list/style-list.service";
import * as i5 from "../../layer/shared/style.service";
export class DropGeoFileDirective extends DragAndDropDirective {
    constructor(component, importService, languageService, styleListService, styleService, config, messageService) {
        super();
        this.component = component;
        this.importService = importService;
        this.languageService = languageService;
        this.styleListService = styleListService;
        this.styleService = styleService;
        this.config = config;
        this.messageService = messageService;
        this.filesDropped = new EventEmitter();
        this.filesInvalid = new EventEmitter();
        this.epsgCode$ = new BehaviorSubject(undefined);
        this.epsgCode$$ = [];
    }
    get map() {
        return this.component.map;
    }
    ngOnInit() {
        this.filesDropped$$ = this.filesDropped.subscribe((files) => {
            this.onFilesDropped(files);
        });
    }
    ngOnDestroy() {
        this.filesDropped$$.unsubscribe();
    }
    onDragOver(evt) {
        super.onDragOver(evt);
    }
    onDragLeave(evt) {
        super.onDragLeave(evt);
    }
    onDrop(evt) {
        super.onDrop(evt);
    }
    onFilesDropped(files) {
        for (const file of files) {
            this.detectEPSG(file);
            this.epsgCode$$.push(this.epsgCode$.pipe(skipWhile((code) => !code), first(), concatMap(epsgCode => {
                const epsg = epsgCode === 'epsgNotDefined' ? undefined : epsgCode;
                this.epsgCode$.next(undefined);
                return this.importService.import(file, epsg);
            })).subscribe((features) => this.onFileImportSuccess(file, features), (error) => this.onFileImportError(file, error)));
        }
    }
    detectEPSG(file, nbLines = 500) {
        if (!file.name.toLowerCase().endsWith('.geojson') && !file.name.toLowerCase().endsWith('.gml')) {
            this.epsgCode$.next('epsgNotDefined');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a, _b;
            if (file.name.toLowerCase().endsWith('.geojson')) {
                const geojson = JSON.parse(reader.result);
                if ((_b = (_a = geojson.crs) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.name) {
                    const epsg = geojson.crs.properties.name.match(/EPSG:{1,2}\d{0,6}/gm);
                    if (epsg !== null && epsg.length) {
                        this.epsgCode$.next(epsg[0].replace(/::/g, ':'));
                        return;
                    }
                    else {
                        this.epsgCode$.next('epsgNotDefined');
                        return;
                    }
                }
                else {
                    this.epsgCode$.next('epsgNotDefined');
                    return;
                }
            }
            else if (file.name.toLowerCase().endsWith('.gml')) {
                const text = reader.result;
                const lines = text.split('\n');
                for (let line = 0; line <= nbLines; line++) {
                    const epsg = lines[line].match(/EPSG:\d{0,6}/gm);
                    if (epsg !== null && epsg.length) {
                        this.epsgCode$.next(epsg[0]);
                        break;
                    }
                    else {
                        this.epsgCode$.next(undefined);
                        return;
                    }
                }
            }
            else {
                this.epsgCode$.next('epsgNotDefined');
                return;
            }
        };
        reader.readAsText(file, 'UTF-8');
    }
    onFileImportSuccess(file, features) {
        if (!this.config.getConfig('importWithStyle')) {
            handleFileImportSuccess(file, features, this.map, this.messageService, this.languageService);
        }
        else {
            handleFileImportSuccess(file, features, this.map, this.messageService, this.languageService, this.styleListService, this.styleService);
        }
    }
    onFileImportError(file, error) {
        handleFileImportError(file, error, this.messageService, this.languageService, this.config.getConfig('importExport.clientSideFileSizeMaxMb'));
    }
}
DropGeoFileDirective.ɵfac = function DropGeoFileDirective_Factory(t) { return new (t || DropGeoFileDirective)(i0.ɵɵdirectiveInject(i1.MapBrowserComponent), i0.ɵɵdirectiveInject(i2.ImportService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i4.StyleListService), i0.ɵɵdirectiveInject(i5.StyleService), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i3.MessageService)); };
DropGeoFileDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DropGeoFileDirective, selectors: [["", "igoDropGeoFile", ""]], hostBindings: function DropGeoFileDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("dragover", function DropGeoFileDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropGeoFileDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DropGeoFileDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropGeoFileDirective, [{
        type: Directive,
        args: [{
                selector: '[igoDropGeoFile]'
            }]
    }], function () { return [{ type: i1.MapBrowserComponent }, { type: i2.ImportService }, { type: i3.LanguageService }, { type: i4.StyleListService }, { type: i5.StyleService }, { type: i3.ConfigService }, { type: i3.MessageService }]; }, { onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1nZW8tZmlsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9pbXBvcnQtZXhwb3J0L3NoYXJlZC9kcm9wLWdlby1maWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBR3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU1wRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUd4RixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUs3RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsb0JBQW9CO0lBWTVELFlBQ1UsU0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLE1BQXFCLEVBQ3JCLGNBQThCO1FBRXRDLEtBQUssRUFBRSxDQUFDO1FBUkEsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQjlCLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxjQUFTLEdBQTRCLElBQUks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RUFBRSxDQUFDLFFBQVEsQ0FBQztZQU03QixXQUFXO2tCQURqQixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU05QixNQUFNO2tCQURaLFlBQVk7bUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3BEaXJlY3RpdmUgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9zaGFyZWQvZmVhdHVyZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcC9zaGFyZWQvbWFwJztcbmltcG9ydCB7IE1hcEJyb3dzZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYXAvbWFwLWJyb3dzZXIvbWFwLWJyb3dzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEltcG9ydFNlcnZpY2UgfSBmcm9tICcuL2ltcG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IGhhbmRsZUZpbGVJbXBvcnRTdWNjZXNzLCBoYW5kbGVGaWxlSW1wb3J0RXJyb3IgfSBmcm9tICcuLi9zaGFyZWQvaW1wb3J0LnV0aWxzJztcbmltcG9ydCB7IFN0eWxlU2VydmljZSB9IGZyb20gJy4uLy4uL2xheWVyL3NoYXJlZC9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0eWxlTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zdHlsZS1saXN0L3N0eWxlLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpcnN0LCBza2lwV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29Ecm9wR2VvRmlsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BHZW9GaWxlRGlyZWN0aXZlIGV4dGVuZHMgRHJhZ0FuZERyb3BEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIGZpbGVzRHJvcHBlZDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByb3RlY3RlZCBmaWxlc0ludmFsaWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIGVwc2dDb2RlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gIHByaXZhdGUgZXBzZ0NvZGUkJDogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBmaWxlc0Ryb3BwZWQkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBtYXAoKTogSWdvTWFwIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnQ6IE1hcEJyb3dzZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBpbXBvcnRTZXJ2aWNlOiBJbXBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdHlsZUxpc3RTZXJ2aWNlOiBTdHlsZUxpc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3R5bGVTZXJ2aWNlOiBTdHlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlsZXNEcm9wcGVkJCQgPSB0aGlzLmZpbGVzRHJvcHBlZC5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlW10pID0+IHtcbiAgICAgIHRoaXMub25GaWxlc0Ryb3BwZWQoZmlsZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5maWxlc0Ryb3BwZWQkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnT3ZlcihldnQpIHtcbiAgICBzdXBlci5vbkRyYWdPdmVyKGV2dCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgc3VwZXIub25EcmFnTGVhdmUoZXZ0KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Ecm9wKGV2dCkge1xuICAgIHN1cGVyLm9uRHJvcChldnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZpbGVzRHJvcHBlZChmaWxlczogRmlsZVtdKSB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICB0aGlzLmRldGVjdEVQU0coZmlsZSk7XG4gICAgICB0aGlzLmVwc2dDb2RlJCQucHVzaChcbiAgICAgICAgdGhpcy5lcHNnQ29kZSQucGlwZShcbiAgICAgICAgICBza2lwV2hpbGUoKGNvZGUpID0+ICFjb2RlKSxcbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgIGNvbmNhdE1hcChlcHNnQ29kZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcHNnID0gZXBzZ0NvZGUgPT09ICdlcHNnTm90RGVmaW5lZCcgPyB1bmRlZmluZWQgOiBlcHNnQ29kZTtcbiAgICAgICAgICAgIHRoaXMuZXBzZ0NvZGUkLm5leHQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltcG9ydFNlcnZpY2UuaW1wb3J0KGZpbGUsIGVwc2cpO1xuICAgICAgICAgIH0pLFxuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAoZmVhdHVyZXM6IEZlYXR1cmVbXSkgPT4gdGhpcy5vbkZpbGVJbXBvcnRTdWNjZXNzKGZpbGUsIGZlYXR1cmVzKSxcbiAgICAgICAgICAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLm9uRmlsZUltcG9ydEVycm9yKGZpbGUsIGVycm9yKVxuICAgICAgICApKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRldGVjdEVQU0coZmlsZTogRmlsZSwgbmJMaW5lczogbnVtYmVyID0gNTAwKSB7XG4gICAgaWYgKCFmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmdlb2pzb24nKSAmJiAhZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5nbWwnKSkge1xuICAgICAgdGhpcy5lcHNnQ29kZSQubmV4dCgnZXBzZ05vdERlZmluZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgIGlmIChmaWxlLm5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmdlb2pzb24nKSkge1xuICAgICAgICBjb25zdCBnZW9qc29uID0gSlNPTi5wYXJzZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgIGlmIChnZW9qc29uLmNycz8ucHJvcGVydGllcz8ubmFtZSkge1xuICAgICAgICAgIGNvbnN0IGVwc2cgPSBnZW9qc29uLmNycy5wcm9wZXJ0aWVzLm5hbWUubWF0Y2goL0VQU0c6ezEsMn1cXGR7MCw2fS9nbSk7XG4gICAgICAgICAgaWYgKGVwc2cgIT09IG51bGwgJiYgZXBzZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZXBzZ0NvZGUkLm5leHQoZXBzZ1swXS5yZXBsYWNlKC86Oi9nLCAnOicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcHNnQ29kZSQubmV4dCgnZXBzZ05vdERlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lcHNnQ29kZSQubmV4dCgnZXBzZ05vdERlZmluZWQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGZpbGUubmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuZ21sJykpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IChyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gKHRleHQgYXMgc3RyaW5nKS5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGxpbmUgPSAwOyBsaW5lIDw9IG5iTGluZXM7IGxpbmUrKykge1xuICAgICAgICAgIGNvbnN0IGVwc2cgPSBsaW5lc1tsaW5lXS5tYXRjaCgvRVBTRzpcXGR7MCw2fS9nbSk7XG4gICAgICAgICAgaWYgKGVwc2cgIT09IG51bGwgJiYgZXBzZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5lcHNnQ29kZSQubmV4dChlcHNnWzBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXBzZ0NvZGUkLm5leHQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXBzZ0NvZGUkLm5leHQoJ2Vwc2dOb3REZWZpbmVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsICdVVEYtOCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZpbGVJbXBvcnRTdWNjZXNzKGZpbGU6IEZpbGUsIGZlYXR1cmVzOiBGZWF0dXJlW10pIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmdldENvbmZpZygnaW1wb3J0V2l0aFN0eWxlJykpIHtcbiAgICAgIGhhbmRsZUZpbGVJbXBvcnRTdWNjZXNzKGZpbGUsIGZlYXR1cmVzLCB0aGlzLm1hcCwgdGhpcy5tZXNzYWdlU2VydmljZSwgdGhpcy5sYW5ndWFnZVNlcnZpY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVGaWxlSW1wb3J0U3VjY2VzcyhmaWxlLCBmZWF0dXJlcywgdGhpcy5tYXAsIHRoaXMubWVzc2FnZVNlcnZpY2UsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVMaXN0U2VydmljZSwgdGhpcy5zdHlsZVNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25GaWxlSW1wb3J0RXJyb3IoZmlsZTogRmlsZSwgZXJyb3I6IEVycm9yKSB7XG4gICAgaGFuZGxlRmlsZUltcG9ydEVycm9yKFxuICAgICAgZmlsZSxcbiAgICAgIGVycm9yLFxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZSxcbiAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgdGhpcy5jb25maWcuZ2V0Q29uZmlnKCdpbXBvcnRFeHBvcnQuY2xpZW50U2lkZUZpbGVTaXplTWF4TWInKSk7XG4gIH1cbn1cbiJdfQ==