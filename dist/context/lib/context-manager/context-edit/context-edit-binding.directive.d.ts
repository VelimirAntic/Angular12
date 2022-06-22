import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MessageService, LanguageService } from '@igo2/core';
import { Context } from '../shared/context.interface';
import { ContextService } from '../shared/context.service';
import { ContextEditComponent } from './context-edit.component';
import * as i0 from "@angular/core";
export declare class ContextEditBindingDirective implements OnInit, OnDestroy {
    private contextService;
    private messageService;
    private languageService;
    private component;
    private editedContext$$;
    submitSuccessed: EventEmitter<Context>;
    onEdit(context: Context): void;
    constructor(component: ContextEditComponent, contextService: ContextService, messageService: MessageService, languageService: LanguageService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private handleEditedContextChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextEditBindingDirective, [{ self: true; }, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContextEditBindingDirective, "[igoContextEditBinding]", never, {}, { "submitSuccessed": "submitSuccessed"; }, never>;
}
