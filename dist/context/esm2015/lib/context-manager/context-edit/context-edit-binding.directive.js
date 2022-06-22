import { Output, EventEmitter, Directive, Self, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./context-edit.component";
import * as i2 from "../shared/context.service";
import * as i3 from "@igo2/core";
export class ContextEditBindingDirective {
    constructor(component, contextService, messageService, languageService) {
        this.contextService = contextService;
        this.messageService = messageService;
        this.languageService = languageService;
        this.submitSuccessed = new EventEmitter();
        this.component = component;
    }
    onEdit(context) {
        const id = this.component.context.id;
        this.contextService.update(id, context).subscribe(() => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: context.title || this.component.context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.saveTitle');
            this.messageService.success(message, title);
            this.contextService.setEditedContext(undefined);
            this.submitSuccessed.emit(context);
        });
    }
    ngOnInit() {
        this.editedContext$$ = this.contextService.editedContext$.subscribe(context => this.handleEditedContextChange(context));
    }
    ngOnDestroy() {
        this.editedContext$$.unsubscribe();
    }
    handleEditedContextChange(context) {
        this.component.context = context;
    }
}
ContextEditBindingDirective.ɵfac = function ContextEditBindingDirective_Factory(t) { return new (t || ContextEditBindingDirective)(i0.ɵɵdirectiveInject(i1.ContextEditComponent, 2), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i3.LanguageService)); };
ContextEditBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextEditBindingDirective, selectors: [["", "igoContextEditBinding", ""]], hostBindings: function ContextEditBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("submitForm", function ContextEditBindingDirective_submitForm_HostBindingHandler($event) { return ctx.onEdit($event); });
    } }, outputs: { submitSuccessed: "submitSuccessed" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextEditBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextEditBinding]'
            }]
    }], function () { return [{ type: i1.ContextEditComponent, decorators: [{
                type: Self
            }] }, { type: i2.ContextService }, { type: i3.MessageService }, { type: i3.LanguageService }]; }, { submitSuccessed: [{
            type: Output
        }], onEdit: [{
            type: HostListener,
            args: ['submitForm', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1lZGl0LWJpbmRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFuYWdlci9jb250ZXh0LWVkaXQvY29udGV4dC1lZGl0LWJpbmRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxJQUFJLEVBR0osWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOzs7OztBQVl2QixNQUFNLE9BQU8sMkJBQTJCO0lBcUJ0QyxZQUNVLFNBQStCLEVBQy9CLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLGVBQWdDO1FBRmhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBckJoQyxvQkFBZSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBdUJwRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBckJELE1BQU0sQ0FBQyxPQUFnQjtRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDckQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDakQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRTtnQkFDN0UsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSzthQUNyRCxDQUFDLENBQUM7WUFDSCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBV0QsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUNqRSxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8seUJBQXlCLENBQUMsT0FBd0I7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ25DLENBQUM7O3NHQTFDVSwyQkFBMkI7OEVBQTNCLDJCQUEyQjt3SEFBM0Isa0JBQWM7O3VGQUFkLDJCQUEyQjtjQUh2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjthQUNwQzs7c0JBdUJJLElBQUk7Z0hBbEJHLGVBQWU7a0JBQXhCLE1BQU07WUFHUCxNQUFNO2tCQURMLFlBQVk7bUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIERpcmVjdGl2ZSxcbiAgU2VsZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHQsIERldGFpbGVkQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGV4dEVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHQtZWRpdC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaWdvQ29udGV4dEVkaXRCaW5kaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dEVkaXRCaW5kaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbXBvbmVudDogQ29udGV4dEVkaXRDb21wb25lbnQ7XG4gIHByaXZhdGUgZWRpdGVkQ29udGV4dCQkOiBTdWJzY3JpcHRpb247XG5cbiAgQE91dHB1dCgpIHN1Ym1pdFN1Y2Nlc3NlZDogRXZlbnRFbWl0dGVyPENvbnRleHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3N1Ym1pdEZvcm0nLCBbJyRldmVudCddKVxuICBvbkVkaXQoY29udGV4dDogQ29udGV4dCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5jb21wb25lbnQuY29udGV4dC5pZDtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLnVwZGF0ZShpZCwgY29udGV4dCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZGlhbG9nLnNhdmVNc2cnLCB7XG4gICAgICAgIHZhbHVlOiBjb250ZXh0LnRpdGxlIHx8IHRoaXMuY29tcG9uZW50LmNvbnRleHQudGl0bGVcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZGlhbG9nLnNhdmVUaXRsZScpO1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICAgIHRoaXMuY29udGV4dFNlcnZpY2Uuc2V0RWRpdGVkQ29udGV4dCh1bmRlZmluZWQpO1xuICAgICAgdGhpcy5zdWJtaXRTdWNjZXNzZWQuZW1pdChjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgY29tcG9uZW50OiBDb250ZXh0RWRpdENvbXBvbmVudCxcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lZGl0ZWRDb250ZXh0JCQgPSB0aGlzLmNvbnRleHRTZXJ2aWNlLmVkaXRlZENvbnRleHQkLnN1YnNjcmliZShcbiAgICAgIGNvbnRleHQgPT4gdGhpcy5oYW5kbGVFZGl0ZWRDb250ZXh0Q2hhbmdlKGNvbnRleHQpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWRpdGVkQ29udGV4dCQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVkaXRlZENvbnRleHRDaGFuZ2UoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgdGhpcy5jb21wb25lbnQuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cbn1cbiJdfQ==