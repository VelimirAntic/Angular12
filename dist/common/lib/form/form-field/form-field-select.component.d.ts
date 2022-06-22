import { OnInit } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FormFieldSelectChoice } from '../shared/form.interfaces';
import * as i0 from "@angular/core";
/**
 * This component renders a select field
 */
export declare class FormFieldSelectComponent implements OnInit {
    readonly disabled$: BehaviorSubject<boolean>;
    /**
     * Select input choices
     */
    set choices(value: FormFieldSelectChoice[]);
    get choices(): FormFieldSelectChoice[];
    readonly choices$: BehaviorSubject<FormFieldSelectChoice[]>;
    /**
     * The field's form control
     */
    formControl: FormControl;
    /**
     * Field placeholder
     */
    placeholder: string;
    /**
     * Field placeholder
     */
    errors: {
        [key: string]: string;
    };
    /**
     * Wheter a disable switch should be available
     */
    disableSwitch: boolean;
    /**
     * Whether the field is required
     */
    get required(): boolean;
    ngOnInit(): void;
    /**
     * Get error message
     */
    getErrorMessage(): string;
    onDisableSwitchClick(): void;
    private toggleDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldSelectComponent, "igo-form-field-select", never, { "choices": "choices"; "formControl": "formControl"; "placeholder": "placeholder"; "errors": "errors"; "disableSwitch": "disableSwitch"; }, {}, never, never>;
}
