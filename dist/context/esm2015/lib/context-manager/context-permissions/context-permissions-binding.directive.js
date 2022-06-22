import { Directive, Self, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./context-permissions.component";
import * as i2 from "../shared/context.service";
import * as i3 from "@igo2/core";
export class ContextPermissionsBindingDirective {
    constructor(component, contextService, languageService, messageService, cd) {
        this.contextService = contextService;
        this.languageService = languageService;
        this.messageService = messageService;
        this.cd = cd;
        this.component = component;
    }
    onAddPermission(permission) {
        const translate = this.languageService.translate;
        if (!permission.profil) {
            const message = translate.instant('igo.context.contextManager.errors.addPermissionEmpty');
            const title = translate.instant('igo.context.contextManager.errors.addPermissionTitle');
            this.messageService.error(message, title);
            return;
        }
        const contextId = this.component.context.id;
        this.contextService
            .addPermissionAssociation(contextId, permission.profil, permission.typePermission)
            .subscribe(profils => {
            for (const p of profils) {
                this.component.permissions[permission.typePermission].push(p);
            }
            const profil = permission.profil;
            const message = translate.instant('igo.context.permission.dialog.addMsg', {
                value: profil
            });
            const title = translate.instant('igo.context.permission.dialog.addTitle');
            this.messageService.success(message, title);
            this.cd.detectChanges();
        });
    }
    onRemovePermission(permission) {
        const contextId = this.component.context.id;
        this.contextService
            .deletePermissionAssociation(contextId, permission.id)
            .subscribe(() => {
            const index = this.component.permissions[permission.typePermission].findIndex(p => {
                return p.id === permission.id;
            });
            this.component.permissions[permission.typePermission].splice(index, 1);
            const profil = permission.profil;
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.permission.dialog.deleteMsg', {
                value: profil
            });
            const title = translate.instant('igo.context.permission.dialog.deleteTitle');
            this.messageService.success(message, title);
            this.cd.detectChanges();
        });
    }
    onScopeChanged(context) {
        const scope = context.scope;
        this.contextService.update(context.id, { scope }).subscribe(() => {
            const translate = this.languageService.translate;
            const message = translate.instant('igo.context.permission.dialog.scopeChangedMsg', {
                value: translate.instant('igo.context.permission.scope.' + scope)
            });
            const title = translate.instant('igo.context.permission.dialog.scopeChangedTitle');
            this.messageService.success(message, title);
        });
    }
    ngOnInit() {
        this.editedContext$$ = this.contextService.editedContext$.subscribe(context => this.handleEditedContextChange(context));
    }
    ngOnDestroy() {
        this.editedContext$$.unsubscribe();
        this.contextService.editedContext$.next(undefined);
    }
    handleEditedContextChange(context) {
        this.component.context = context;
        if (context) {
            this.contextService
                .getPermissions(context.id)
                .subscribe(permissionsArray => {
                permissionsArray = permissionsArray || [];
                const permissions = {
                    read: permissionsArray.filter(p => {
                        return p.typePermission.toString() === 'read';
                    }),
                    write: permissionsArray.filter(p => {
                        return p.typePermission.toString() === 'write';
                    })
                };
                return (this.component.permissions = permissions);
            });
        }
    }
}
ContextPermissionsBindingDirective.ɵfac = function ContextPermissionsBindingDirective_Factory(t) { return new (t || ContextPermissionsBindingDirective)(i0.ɵɵdirectiveInject(i1.ContextPermissionsComponent, 2), i0.ɵɵdirectiveInject(i2.ContextService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ContextPermissionsBindingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContextPermissionsBindingDirective, selectors: [["", "igoContextPermissionsBinding", ""]], hostBindings: function ContextPermissionsBindingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("addPermission", function ContextPermissionsBindingDirective_addPermission_HostBindingHandler($event) { return ctx.onAddPermission($event); })("removePermission", function ContextPermissionsBindingDirective_removePermission_HostBindingHandler($event) { return ctx.onRemovePermission($event); })("scopeChanged", function ContextPermissionsBindingDirective_scopeChanged_HostBindingHandler($event) { return ctx.onScopeChanged($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextPermissionsBindingDirective, [{
        type: Directive,
        args: [{
                selector: '[igoContextPermissionsBinding]'
            }]
    }], function () { return [{ type: i1.ContextPermissionsComponent, decorators: [{
                type: Self
            }] }, { type: i2.ContextService }, { type: i3.LanguageService }, { type: i3.MessageService }, { type: i0.ChangeDetectorRef }]; }, { onAddPermission: [{
            type: HostListener,
            args: ['addPermission', ['$event']]
        }], onRemovePermission: [{
            type: HostListener,
            args: ['removePermission', ['$event']]
        }], onScopeChanged: [{
            type: HostListener,
            args: ['scopeChanged', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1wZXJtaXNzaW9ucy1iaW5kaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LW1hbmFnZXIvY29udGV4dC1wZXJtaXNzaW9ucy9jb250ZXh0LXBlcm1pc3Npb25zLWJpbmRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUdKLFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFnQnZCLE1BQU0sT0FBTyxrQ0FBa0M7SUEwRjdDLFlBQ1UsU0FBc0MsRUFDdEMsY0FBOEIsRUFDOUIsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsRUFBcUI7UUFIckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQTdGRCxlQUFlLENBQUMsVUFBNkI7UUFDM0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDL0Isc0RBQXNELENBQ3ZELENBQUM7WUFDRixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUM3QixzREFBc0QsQ0FDdkQsQ0FBQztZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FB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SSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7O29IQWxJVSxrQ0FBa0M7cUZBQWxDLGtDQUFrQztxSUFBbEMsMkJBQXVCLDBIQUF2Qiw4QkFBMEIsa0hBQTFCLDBCQUFzQjs7dUZBQXRCLGtDQUFrQztjQUg5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQzthQUMzQzs7c0JBNEZJLElBQUk7Z0pBdEZQLGVBQWU7a0JBRGQsWUFBWTttQkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUF3Q3pDLGtCQUFrQjtrQkFEakIsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQThCNUMsY0FBYztrQkFEYixZQUFZO21CQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgU2VsZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UsIExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDb250ZXh0LFxuICBDb250ZXh0UGVybWlzc2lvbixcbiAgRGV0YWlsZWRDb250ZXh0XG59IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGV4dFBlcm1pc3Npb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LXBlcm1pc3Npb25zLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpZ29Db250ZXh0UGVybWlzc2lvbnNCaW5kaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dFBlcm1pc3Npb25zQmluZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb21wb25lbnQ6IENvbnRleHRQZXJtaXNzaW9uc0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBlZGl0ZWRDb250ZXh0JCQ6IFN1YnNjcmlwdGlvbjtcblxuICBASG9zdExpc3RlbmVyKCdhZGRQZXJtaXNzaW9uJywgWyckZXZlbnQnXSlcbiAgb25BZGRQZXJtaXNzaW9uKHBlcm1pc3Npb246IENvbnRleHRQZXJtaXNzaW9uKSB7XG4gICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgIGlmICghcGVybWlzc2lvbi5wcm9maWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmVycm9ycy5hZGRQZXJtaXNzaW9uRW1wdHknXG4gICAgICApO1xuICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ2lnby5jb250ZXh0LmNvbnRleHRNYW5hZ2VyLmVycm9ycy5hZGRQZXJtaXNzaW9uVGl0bGUnXG4gICAgICApO1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5lcnJvcihtZXNzYWdlLCB0aXRsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRleHRJZCA9IHRoaXMuY29tcG9uZW50LmNvbnRleHQuaWQ7XG4gICAgdGhpcy5jb250ZXh0U2VydmljZVxuICAgICAgLmFkZFBlcm1pc3Npb25Bc3NvY2lhdGlvbihcbiAgICAgICAgY29udGV4dElkLFxuICAgICAgICBwZXJtaXNzaW9uLnByb2ZpbCxcbiAgICAgICAgcGVybWlzc2lvbi50eXBlUGVybWlzc2lvblxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShwcm9maWxzID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHByb2ZpbHMpIHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC5wZXJtaXNzaW9uc1twZXJtaXNzaW9uLnR5cGVQZXJtaXNzaW9uXS5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2ZpbCA9IHBlcm1pc3Npb24ucHJvZmlsO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgJ2lnby5jb250ZXh0LnBlcm1pc3Npb24uZGlhbG9nLmFkZE1zZycsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IHByb2ZpbFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5kaWFsb2cuYWRkVGl0bGUnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdyZW1vdmVQZXJtaXNzaW9uJywgWyckZXZlbnQnXSlcbiAgb25SZW1vdmVQZXJtaXNzaW9uKHBlcm1pc3Npb246IENvbnRleHRQZXJtaXNzaW9uKSB7XG4gICAgY29uc3QgY29udGV4dElkID0gdGhpcy5jb21wb25lbnQuY29udGV4dC5pZDtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlXG4gICAgICAuZGVsZXRlUGVybWlzc2lvbkFzc29jaWF0aW9uKGNvbnRleHRJZCwgcGVybWlzc2lvbi5pZClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29tcG9uZW50LnBlcm1pc3Npb25zW1xuICAgICAgICAgIHBlcm1pc3Npb24udHlwZVBlcm1pc3Npb25cbiAgICAgICAgXS5maW5kSW5kZXgocCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHAuaWQgPT09IHBlcm1pc3Npb24uaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5wZXJtaXNzaW9uc1twZXJtaXNzaW9uLnR5cGVQZXJtaXNzaW9uXS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGNvbnN0IHByb2ZpbCA9IHBlcm1pc3Npb24ucHJvZmlsO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5kaWFsb2cuZGVsZXRlTXNnJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvZmlsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uY29udGV4dC5wZXJtaXNzaW9uLmRpYWxvZy5kZWxldGVUaXRsZSdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Njb3BlQ2hhbmdlZCcsIFsnJGV2ZW50J10pXG4gIG9uU2NvcGVDaGFuZ2VkKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICBjb25zdCBzY29wZSA9IGNvbnRleHQuc2NvcGU7XG4gICAgdGhpcy5jb250ZXh0U2VydmljZS51cGRhdGUoY29udGV4dC5pZCwgeyBzY29wZSB9KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5kaWFsb2cuc2NvcGVDaGFuZ2VkTXNnJyxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiB0cmFuc2xhdGUuaW5zdGFudCgnaWdvLmNvbnRleHQucGVybWlzc2lvbi5zY29wZS4nICsgc2NvcGUpXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnaWdvLmNvbnRleHQucGVybWlzc2lvbi5kaWFsb2cuc2NvcGVDaGFuZ2VkVGl0bGUnXG4gICAgICApO1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTZWxmKCkgY29tcG9uZW50OiBDb250ZXh0UGVybWlzc2lvbnNDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZTogQ29udGV4dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWRpdGVkQ29udGV4dCQkID0gdGhpcy5jb250ZXh0U2VydmljZS5lZGl0ZWRDb250ZXh0JC5zdWJzY3JpYmUoXG4gICAgICBjb250ZXh0ID0+IHRoaXMuaGFuZGxlRWRpdGVkQ29udGV4dENoYW5nZShjb250ZXh0KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVkaXRlZENvbnRleHQkJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY29udGV4dFNlcnZpY2UuZWRpdGVkQ29udGV4dCQubmV4dCh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFZGl0ZWRDb250ZXh0Q2hhbmdlKGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCkge1xuICAgIHRoaXMuY29tcG9uZW50LmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHRoaXMuY29udGV4dFNlcnZpY2VcbiAgICAgICAgLmdldFBlcm1pc3Npb25zKGNvbnRleHQuaWQpXG4gICAgICAgIC5zdWJzY3JpYmUocGVybWlzc2lvbnNBcnJheSA9PiB7XG4gICAgICAgICAgcGVybWlzc2lvbnNBcnJheSA9IHBlcm1pc3Npb25zQXJyYXkgfHwgW107XG4gICAgICAgICAgY29uc3QgcGVybWlzc2lvbnMgPSB7XG4gICAgICAgICAgICByZWFkOiBwZXJtaXNzaW9uc0FycmF5LmZpbHRlcihwID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAudHlwZVBlcm1pc3Npb24udG9TdHJpbmcoKSA9PT0gJ3JlYWQnO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3cml0ZTogcGVybWlzc2lvbnNBcnJheS5maWx0ZXIocCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBwLnR5cGVQZXJtaXNzaW9uLnRvU3RyaW5nKCkgPT09ICd3cml0ZSc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuICh0aGlzLmNvbXBvbmVudC5wZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=