import { Directive, Self, HostListener } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./context-list.component";
import * as i2 from "../shared/context.service";
import * as i3 from "@igo2/geo";
import * as i4 from "@igo2/core";
import * as i5 from "@igo2/common";
import * as i6 from "@igo2/auth";
export class ContextListBindingDirective {
    constructor(component, contextService, mapService, languageService, confirmDialogService, messageService, auth, storageService) {
        this.contextService = contextService;
        this.mapService = mapService;
        this.languageService = languageService;
        this.confirmDialogService = confirmDialogService;
        this.messageService = messageService;
        this.auth = auth;
        this.storageService = storageService;
        this.component = component;
    }
    onSelect(context) {
        this.contextService.loadContext(context.uri);
    }
    onEdit(context) {
        this.contextService.loadEditedContext(context.uri);
    }
    onSave(context) {
        const map = this.mapService.getMap();
        const contextFromMap = this.contextService.getContextFromMap(map);
        const msgSuccess = () => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.saveMsg', {
                value: context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.saveTitle');
            this.messageService.success(message, title);
        };
        if (context.imported) {
            contextFromMap.title = context.title;
            this.contextService.delete(context.id, true);
            this.contextService.create(contextFromMap).subscribe((contextCreated) => {
                this.contextService.loadContext(contextCreated.uri);
                msgSuccess();
            });
            return;
        }
        const changes = {
            layers: contextFromMap.layers,
            map: {
                view: contextFromMap.map.view
            }
        };
        this.contextService.update(context.id, changes).subscribe(() => {
            msgSuccess();
        });
    }
    onFavorite(context) {
        this.contextService.setDefault(context.id).subscribe(() => {
            this.contextService.defaultContextId$.next(context.id);
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.favoriteMsg', {
                value: context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.favoriteTitle');
            this.messageService.success(message, title);
        });
    }
    onManageTools(context) {
        this.contextService.loadEditedContext(context.uri);
    }
    onManagePermissions(context) {
        this.contextService.loadEditedContext(context.uri);
    }
    onDelete(context) {
        const translate = this.languageService.translate;
        this.confirmDialogService
            .open(translate.instant('igo.context.contextManager.dialog.confirmDelete'))
            .subscribe((confirm) => {
            if (confirm) {
                this.contextService
                    .delete(context.id, context.imported)
                    .subscribe(() => {
                    const message = translate.instant('igo.context.contextManager.dialog.deleteMsg', {
                        value: context.title
                    });
                    const title = translate.instant('igo.context.contextManager.dialog.deleteTitle');
                    this.messageService.info(message, title);
                });
            }
        });
    }
    onClone(context) {
        const properties = {
            title: context.title + '-copy',
            uri: context.uri + '-copy'
        };
        this.contextService.clone(context.id, properties).subscribe(() => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.contextManager.dialog.cloneMsg', {
                value: context.title
            });
            const title = translate.instant('igo.context.contextManager.dialog.cloneTitle');
            this.messageService.success(message, title);
        });
    }
    onCreate(opts) {
        const { title, empty } = opts;
        const context = this.contextService.getContextFromMap(this.component.map, empty);
        context.title = title;
        this.contextService.create(context).subscribe(() => {
            const translate = this.languageService.translate;
            const titleD = translate.instant('igo.context.bookmarkButton.dialog.createTitle');
            const message = translate.instant('igo.context.bookmarkButton.dialog.createMsg', {
                value: context.title
            });
            this.messageService.success(message, titleD);
            this.contextService.loadContext(context.uri);
        });
    }
    loadContexts() {
        const permissions = ['none'];
        for (const p of this.component.permissions) {
            if (p.checked === true || p.indeterminate === true) {
                permissions.push(p.name);
            }
        }
        this.component.showHidden
            ? this.contextService.loadContexts(permissions, true)
            : this.contextService.loadContexts(permissions, false);
    }
    showHiddenContexts() {
        this.component.showHidden = !this.component.showHidden;
        this.storageService.set('contexts.showHidden', this.component.showHidden);
        this.loadContexts();
    }
    onShowContext(context) {
        this.contextService.showContext(context.id).subscribe();
    }
    onHideContext(context) {
        this.contextService.hideContext(context.id).subscribe();
    }
    ngOnInit() {
        // Override input contexts
        this.component.contexts = { ours: [] };
        this.component.showHidden = this.storageService.get('contexts.showHidden');
        this.contexts$$ = this.contextService.contexts$.subscribe((contexts) => this.handleContextsChange(contexts));
        this.defaultContextId$$ = this.contextService.defaultContextId$.subscribe((id) => {
            this.component.defaultContextId = id;
        });
        // See feature-list.component for an explanation about the debounce time
        this.selectedContext$$ = this.contextService.context$
            .pipe(debounceTime(100))
            .subscribe((context) => (this.component.selectedContext = context));
        this.auth.authenticate$.subscribe((authenticate) => {
            if (authenticate) {
                this.contextService.getProfilByUser().subscribe((profils) => {
                    this.component.users = profils;
                    this.component.permissions = [];
                    const profilsAcc = this.component.users.reduce((acc, cur) => {
                        acc = acc.concat(cur);
                        acc = cur.childs ? acc.concat(cur.childs) : acc;
                        return acc;
                    }, []);
                    for (const user of profilsAcc) {
                        const permission = {
                            name: user.name,
                            checked: this.storageService.get('contexts.permissions.' + user.name)
                        };
                        if (permission.checked === null) {
                            permission.checked = true;
                        }
                        this.component.permissions.push(permission);
                    }
                    const permissions = ['none'];
                    for (const p of this.component.permissions) {
                        if (p.checked === true || p.indeterminate === true) {
                            permissions.push(p.name);
                        }
                    }
                    this.component.showHidden
                        ? this.contextService.loadContexts(permissions, true)
                        : this.contextService.loadContexts(permissions, false);
                });
            }
        });
    }
    ngOnDestroy() {
        this.contexts$$.unsubscribe();
        this.selectedContext$$.unsubscribe();
        this.defaultContextId$$.unsubscribe();
    }
    handleContextsChange(contexts) {
        this.component.contexts = contexts;
    }
}
ContextListBindingDirective.ɵfac = function ContextListBindingDirective_Factory(t) { return new (t || ContextListBindingDirective)(i0.ɵɵdirectiveInject(i1.ContextListComponent, 2), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i3.MapService), i0.ɵɵdirectiveInject(i4.LanguageService), i0.ɵɵdirectiveInject(i5.ConfirmDialogService), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i4.StorageService)); };
ContextListBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextListBindingDirective, selectors: [["", "igoContextListBinding", ""]], hostBindings: function ContextListBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("select", function ContextListBindingDirective_select_HostBindingHandler($event) { return ctx.onSelect($event); })("edit", function ContextListBindingDirective_edit_HostBindingHandler($event) { return ctx.onEdit($event); })("save", function ContextListBindingDirective_save_HostBindingHandler($event) { return ctx.onSave($event); })("favorite", function ContextListBindingDirective_favorite_HostBindingHandler($event) { return ctx.onFavorite($event); })("manageTools", function ContextListBindingDirective_manageTools_HostBindingHandler($event) { return ctx.onManageTools($event); })("managePermissions", function ContextListBindingDirective_managePermissions_HostBindingHandler($event) { return ctx.onManagePermissions($event); })("delete", function ContextListBindingDirective_delete_HostBindingHandler($event) { return ctx.onDelete($event); })("clone", function ContextListBindingDirective_clone_HostBindingHandler($event) { return ctx.onClone($event); })("create", function ContextListBindingDirective_create_HostBindingHandler($event) { return ctx.onCreate($event); })("filterPermissionsChanged", function ContextListBindingDirective_filterPermissionsChanged_HostBindingHandler() { return ctx.loadContexts(); })("showHiddenContexts", function ContextListBindingDirective_showHiddenContexts_HostBindingHandler() { return ctx.showHiddenContexts(); })("show", function ContextListBindingDirective_show_HostBindingHandler($event) { return ctx.onShowContext($event); })("hide", function ContextListBindingDirective_hide_HostBindingHandler($event) { return ctx.onHideContext($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextListBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextListBinding]'
            }]
    }], function () { return [{ type: i1.ContextListComponent, decorators: [{
                type: Self
            }] }, { type: i2.ContextService }, { type: i3.MapService }, { type: i4.LanguageService }, { type: i5.ConfirmDialogService }, { type: i4.MessageService }, { type: i6.AuthService }, { type: i4.StorageService }]; }, { onSelect: [{
            type: HostListener,
            args: ['select', ['$event']]
        }], onEdit: [{
            type: HostListener,
            args: ['edit', ['$event']]
        }], onSave: [{
            type: HostListener,
            args: ['save', ['$event']]
        }], onFavorite: [{
            type: HostListener,
            args: ['favorite', ['$event']]
        }], onManageTools: [{
            type: HostListener,
            args: ['manageTools', ['$event']]
        }], onManagePermissions: [{
            type: HostListener,
            args: ['managePermissions', ['$event']]
        }], onDelete: [{
            type: HostListener,
            args: ['delete', ['$event']]
        }], onClone: [{
            type: HostListener,
            args: ['clone', ['$event']]
        }], onCreate: [{
            type: HostListener,
            args: ['create', ['$event']]
        }], loadContexts: [{
            type: HostListener,
            args: ['filterPermissionsChanged']
        }], showHiddenContexts: [{
            type: HostListener,
            args: ['showHiddenContexts']
        }], onShowContext: [{
            type: HostListener,
            args: ['show', ['$event']]
        }], onHideContext: [{
            type: HostListener,
            args: ['hide', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1saXN0LWJpbmRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29udGV4dC9zcmMvbGliL2NvbnRleHQtbWFuYWdlci9jb250ZXh0LWxpc3QvY29udGV4dC1saXN0LWJpbmRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUdKLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBbUI5QyxNQUFNLE9BQU8sMkJBQTJCO0lBMkx0QyxZQUNVLFNBQStCLEVBQy9CLGNBQThCLEVBQzlCLFVBQXNCLEVBQ3RCLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixJQUFpQixFQUNqQixjQUE4QjtRQU45QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQS9MRCxRQUFRLENBQUMsT0FBZ0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxNQUFNLENBQUMsT0FBZ0I7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELE1BQU0sQ0FBQyxP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QURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBNEJsQyxPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBc0JqQyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBeUJsQyxZQUFZO2tCQURYLFlBQVk7bUJBQUMsMEJBQTBCO1lBY3hDLGtCQUFrQjtrQkFEakIsWUFBWTttQkFBQyxvQkFBb0I7WUFRbEMsYUFBYTtrQkFEWixZQUFZO21CQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU1oQyxhQUFhO2tCQURaLFlBQVk7bUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBTZWxmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BpZ28yL2F1dGgnO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJ0BpZ28yL2dlbyc7XG5cbmltcG9ydCB7XG4gIENvbnRleHQsXG4gIERldGFpbGVkQ29udGV4dCxcbiAgQ29udGV4dHNMaXN0LFxuICBDb250ZXh0VXNlclBlcm1pc3Npb25cbn0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dC1saXN0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29Db250ZXh0TGlzdEJpbmRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TGlzdEJpbmRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcG9uZW50OiBDb250ZXh0TGlzdENvbXBvbmVudDtcbiAgcHJpdmF0ZSBjb250ZXh0cyQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2VsZWN0ZWRDb250ZXh0JCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkZWZhdWx0Q29udGV4dElkJCQ6IFN1YnNjcmlwdGlvbjtcblxuICBASG9zdExpc3RlbmVyKCdzZWxlY3QnLCBbJyRldmVudCddKVxuICBvblNlbGVjdChjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0U2VydmljZS5sb2FkQ29udGV4dChjb250ZXh0LnVyaSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdlZGl0JywgWyckZXZlbnQnXSlcbiAgb25FZGl0KGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLmxvYWRFZGl0ZWRDb250ZXh0KGNvbnRleHQudXJpKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3NhdmUnLCBbJyRldmVudCddKVxuICBvblNhdmUoY29udGV4dDogQ29udGV4dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwU2VydmljZS5nZXRNYXAoKTtcbiAgICBjb25zdCBjb250ZXh0RnJvbU1hcCA9IHRoaXMuY29udGV4dFNlcnZpY2UuZ2V0Q29udGV4dEZyb21NYXAobWFwKTtcblxuICAgIGNvbnN0IG1zZ1N1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5kaWFsb2cuc2F2ZU1zZycsXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogY29udGV4dC50aXRsZVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5zYXZlVGl0bGUnXG4gICAgICApO1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICB9O1xuXG4gICAgaWYgKGNvbnRleHQuaW1wb3J0ZWQpIHtcbiAgICAgIGNvbnRleHRGcm9tTWFwLnRpdGxlID0gY29udGV4dC50aXRsZTtcbiAgICAgIHRoaXMuY29udGV4dFNlcnZpY2UuZGVsZXRlKGNvbnRleHQuaWQsIHRydWUpO1xuICAgICAgdGhpcy5jb250ZXh0U2VydmljZS5jcmVhdGUoY29udGV4dEZyb21NYXApLnN1YnNjcmliZSgoY29udGV4dENyZWF0ZWQpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0U2VydmljZS5sb2FkQ29udGV4dChjb250ZXh0Q3JlYXRlZC51cmkpO1xuICAgICAgICBtc2dTdWNjZXNzKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VzOiBhbnkgPSB7XG4gICAgICBsYXllcnM6IGNvbnRleHRGcm9tTWFwLmxheWVycyxcbiAgICAgIG1hcDoge1xuICAgICAgICB2aWV3OiBjb250ZXh0RnJvbU1hcC5tYXAudmlld1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLnVwZGF0ZShjb250ZXh0LmlkLCBjaGFuZ2VzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgbXNnU3VjY2VzcygpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZmF2b3JpdGUnLCBbJyRldmVudCddKVxuICBvbkZhdm9yaXRlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLnNldERlZmF1bHQoY29udGV4dC5pZCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY29udGV4dFNlcnZpY2UuZGVmYXVsdENvbnRleHRJZCQubmV4dChjb250ZXh0LmlkKTtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5mYXZvcml0ZU1zZycsXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogY29udGV4dC50aXRsZVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5mYXZvcml0ZVRpdGxlJ1xuICAgICAgKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtYW5hZ2VUb29scycsIFsnJGV2ZW50J10pXG4gIG9uTWFuYWdlVG9vbHMoY29udGV4dDogQ29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dFNlcnZpY2UubG9hZEVkaXRlZENvbnRleHQoY29udGV4dC51cmkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbWFuYWdlUGVybWlzc2lvbnMnLCBbJyRldmVudCddKVxuICBvbk1hbmFnZVBlcm1pc3Npb25zKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLmxvYWRFZGl0ZWRDb250ZXh0KGNvbnRleHQudXJpKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RlbGV0ZScsIFsnJGV2ZW50J10pXG4gIG9uRGVsZXRlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgdGhpcy5jb25maXJtRGlhbG9nU2VydmljZVxuICAgICAgLm9wZW4oXG4gICAgICAgIHRyYW5zbGF0ZS5pbnN0YW50KCdpZ28uY29udGV4dC5jb250ZXh0TWFuYWdlci5kaWFsb2cuY29uZmlybURlbGV0ZScpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChjb25maXJtKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtKSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0U2VydmljZVxuICAgICAgICAgICAgLmRlbGV0ZShjb250ZXh0LmlkLCBjb250ZXh0LmltcG9ydGVkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgICAnaWdvLmNvbnRleHQuY29udGV4dE1hbmFnZXIuZGlhbG9nLmRlbGV0ZU1zZycsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRleHQudGl0bGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5kZWxldGVUaXRsZSdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5pbmZvKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Nsb25lJywgWyckZXZlbnQnXSlcbiAgb25DbG9uZShjb250ZXh0OiBEZXRhaWxlZENvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge1xuICAgICAgdGl0bGU6IGNvbnRleHQudGl0bGUgKyAnLWNvcHknLFxuICAgICAgdXJpOiBjb250ZXh0LnVyaSArICctY29weSdcbiAgICB9O1xuICAgIHRoaXMuY29udGV4dFNlcnZpY2UuY2xvbmUoY29udGV4dC5pZCwgcHJvcGVydGllcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5jbG9uZU1zZycsXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogY29udGV4dC50aXRsZVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmRpYWxvZy5jbG9uZVRpdGxlJ1xuICAgICAgKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjcmVhdGUnLCBbJyRldmVudCddKVxuICBvbkNyZWF0ZShvcHRzOiB7IHRpdGxlOiBzdHJpbmc7IGVtcHR5OiBib29sZWFuIH0pIHtcbiAgICBjb25zdCB7IHRpdGxlLCBlbXB0eSB9ID0gb3B0cztcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0U2VydmljZS5nZXRDb250ZXh0RnJvbU1hcChcbiAgICAgIHRoaXMuY29tcG9uZW50Lm1hcCxcbiAgICAgIGVtcHR5XG4gICAgKTtcbiAgICBjb250ZXh0LnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb250ZXh0U2VydmljZS5jcmVhdGUoY29udGV4dCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IHRpdGxlRCA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmNvbnRleHQuYm9va21hcmtCdXR0b24uZGlhbG9nLmNyZWF0ZVRpdGxlJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmJvb2ttYXJrQnV0dG9uLmRpYWxvZy5jcmVhdGVNc2cnLFxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6IGNvbnRleHQudGl0bGVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZUQpO1xuICAgICAgdGhpcy5jb250ZXh0U2VydmljZS5sb2FkQ29udGV4dChjb250ZXh0LnVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmaWx0ZXJQZXJtaXNzaW9uc0NoYW5nZWQnKVxuICBsb2FkQ29udGV4dHMoKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSBbJ25vbmUnXTtcbiAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5jb21wb25lbnQucGVybWlzc2lvbnMpIHtcbiAgICAgIGlmIChwLmNoZWNrZWQgPT09IHRydWUgfHwgcC5pbmRldGVybWluYXRlID09PSB0cnVlKSB7XG4gICAgICAgIHBlcm1pc3Npb25zLnB1c2gocC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb21wb25lbnQuc2hvd0hpZGRlblxuICAgICAgPyB0aGlzLmNvbnRleHRTZXJ2aWNlLmxvYWRDb250ZXh0cyhwZXJtaXNzaW9ucywgdHJ1ZSlcbiAgICAgIDogdGhpcy5jb250ZXh0U2VydmljZS5sb2FkQ29udGV4dHMocGVybWlzc2lvbnMsIGZhbHNlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Nob3dIaWRkZW5Db250ZXh0cycpXG4gIHNob3dIaWRkZW5Db250ZXh0cygpIHtcbiAgICB0aGlzLmNvbXBvbmVudC5zaG93SGlkZGVuID0gIXRoaXMuY29tcG9uZW50LnNob3dIaWRkZW47XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ2NvbnRleHRzLnNob3dIaWRkZW4nLCB0aGlzLmNvbXBvbmVudC5zaG93SGlkZGVuKTtcbiAgICB0aGlzLmxvYWRDb250ZXh0cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2hvdycsIFsnJGV2ZW50J10pXG4gIG9uU2hvd0NvbnRleHQoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0U2VydmljZS5zaG93Q29udGV4dChjb250ZXh0LmlkKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2hpZGUnLCBbJyRldmVudCddKVxuICBvbkhpZGVDb250ZXh0KGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dFNlcnZpY2UuaGlkZUNvbnRleHQoY29udGV4dC5pZCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIGNvbXBvbmVudDogQ29udGV4dExpc3RDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZTogQ29udGV4dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maXJtRGlhbG9nU2VydmljZTogQ29uZmlybURpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIE92ZXJyaWRlIGlucHV0IGNvbnRleHRzXG4gICAgdGhpcy5jb21wb25lbnQuY29udGV4dHMgPSB7IG91cnM6IFtdIH07XG4gICAgdGhpcy5jb21wb25lbnQuc2hvd0hpZGRlbiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KFxuICAgICAgJ2NvbnRleHRzLnNob3dIaWRkZW4nXG4gICAgKSBhcyBib29sZWFuO1xuXG4gICAgdGhpcy5jb250ZXh0cyQkID0gdGhpcy5jb250ZXh0U2VydmljZS5jb250ZXh0cyQuc3Vic2NyaWJlKChjb250ZXh0cykgPT5cbiAgICAgIHRoaXMuaGFuZGxlQ29udGV4dHNDaGFuZ2UoY29udGV4dHMpXG4gICAgKTtcblxuICAgIHRoaXMuZGVmYXVsdENvbnRleHRJZCQkID0gdGhpcy5jb250ZXh0U2VydmljZS5kZWZhdWx0Q29udGV4dElkJC5zdWJzY3JpYmUoXG4gICAgICAoaWQpID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZGVmYXVsdENvbnRleHRJZCA9IGlkO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBTZWUgZmVhdHVyZS1saXN0LmNvbXBvbmVudCBmb3IgYW4gZXhwbGFuYXRpb24gYWJvdXQgdGhlIGRlYm91bmNlIHRpbWVcbiAgICB0aGlzLnNlbGVjdGVkQ29udGV4dCQkID0gdGhpcy5jb250ZXh0U2VydmljZS5jb250ZXh0JFxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKChjb250ZXh0KSA9PiAodGhpcy5jb21wb25lbnQuc2VsZWN0ZWRDb250ZXh0ID0gY29udGV4dCkpO1xuXG4gICAgdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZSQuc3Vic2NyaWJlKChhdXRoZW50aWNhdGUpID0+IHtcbiAgICAgIGlmIChhdXRoZW50aWNhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0U2VydmljZS5nZXRQcm9maWxCeVVzZXIoKS5zdWJzY3JpYmUoKHByb2ZpbHMpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC51c2VycyA9IHByb2ZpbHM7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnQucGVybWlzc2lvbnMgPSBbXTtcbiAgICAgICAgICBjb25zdCBwcm9maWxzQWNjID0gdGhpcy5jb21wb25lbnQudXNlcnMucmVkdWNlKChhY2MsIGN1cikgPT4ge1xuICAgICAgICAgICAgYWNjID0gYWNjLmNvbmNhdChjdXIpO1xuICAgICAgICAgICAgYWNjID0gY3VyLmNoaWxkcyA/IGFjYy5jb25jYXQoY3VyLmNoaWxkcykgOiBhY2M7XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBwcm9maWxzQWNjKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uOiBDb250ZXh0VXNlclBlcm1pc3Npb24gPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgY2hlY2tlZDogdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoXG4gICAgICAgICAgICAgICAgJ2NvbnRleHRzLnBlcm1pc3Npb25zLicgKyB1c2VyLm5hbWVcbiAgICAgICAgICAgICAgKSBhcyBib29sZWFuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24uY2hlY2tlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQucGVybWlzc2lvbnMucHVzaChwZXJtaXNzaW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwZXJtaXNzaW9ucyA9IFsnbm9uZSddO1xuICAgICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLmNvbXBvbmVudC5wZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgaWYgKHAuY2hlY2tlZCA9PT0gdHJ1ZSB8fCBwLmluZGV0ZXJtaW5hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcGVybWlzc2lvbnMucHVzaChwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY29tcG9uZW50LnNob3dIaWRkZW5cbiAgICAgICAgICAgID8gdGhpcy5jb250ZXh0U2VydmljZS5sb2FkQ29udGV4dHMocGVybWlzc2lvbnMsIHRydWUpXG4gICAgICAgICAgICA6IHRoaXMuY29udGV4dFNlcnZpY2UubG9hZENvbnRleHRzKHBlcm1pc3Npb25zLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb250ZXh0cyQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zZWxlY3RlZENvbnRleHQkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZGVmYXVsdENvbnRleHRJZCQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbnRleHRzQ2hhbmdlKGNvbnRleHRzOiBDb250ZXh0c0xpc3QpIHtcbiAgICB0aGlzLmNvbXBvbmVudC5jb250ZXh0cyA9IGNvbnRleHRzO1xuICB9XG59XG4iXX0=