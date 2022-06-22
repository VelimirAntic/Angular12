import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MessageService, LanguageService } from '@igo2/core';
import { Context, ContextPermission } from '../shared/context.interface';
import { ContextService } from '../shared/context.service';
import { ContextPermissionsComponent } from './context-permissions.component';
import * as i0 from "@angular/core";
export declare class ContextPermissionsBindingDirective implements OnInit, OnDestroy {
    private contextService;
    private languageService;
    private messageService;
    private cd;
    private component;
    private editedContext$$;
    onAddPermission(permission: ContextPermission): void;
    onRemovePermission(permission: ContextPermission): void;
    onScopeChanged(context: Context): void;
    constructor(component: ContextPermissionsComponent, contextService: ContextService, languageService: LanguageService, messageService: MessageService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private handleEditedContextChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextPermissionsBindingDirective, [{ self: true; }, null, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContextPermissionsBindingDirective, "[igoContextPermissionsBinding]", never, {}, {}, never>;
}
