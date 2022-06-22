import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class FormService {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    form(fields, groups) {
        const control = this.formBuilder.group({});
        fields.forEach((field) => {
            control.addControl(field.name, field.control);
        });
        groups.forEach((group) => {
            control.addControl(group.name, group.control);
        });
        return { fields, groups, control };
    }
    group(config, fields) {
        const options = config.options || {};
        const control = this.formBuilder.group({});
        fields.forEach((field) => {
            control.addControl(field.name, field.control);
        });
        if (options.validator) {
            const validators = this.getValidators(options.validator); // convert string to actual validator
            control.setValidators(validators);
        }
        return Object.assign({}, config, { fields, control });
    }
    field(config) {
        const options = config.options || {};
        const state = {
            value: '',
            disabled: options.disabled
        };
        const control = this.formBuilder.control(state);
        if (options.validator) {
            const validators = this.getValidators(options.validator); // convert string to actual validator
            control.setValidators(validators);
        }
        return Object.assign({ type: 'text' }, config, { control });
    }
    extendFieldConfig(config, partial) {
        const options = Object.assign({}, config.options || {}, partial.options || {});
        const inputs = Object.assign({}, config.inputs || {}, partial.inputs || {});
        const subscribers = Object.assign({}, config.subscribers || {}, partial.subscribers || {});
        return Object.assign({}, config, { options, inputs, subscribers });
    }
    getValidators(validatorOption) {
        if (Array.isArray(validatorOption)) {
            return validatorOption.map((validatorStr) => {
                return this.getValidator(validatorStr);
            });
        }
        return this.getValidator(validatorOption);
    }
    getValidator(validatorStr) {
        if (typeof validatorStr !== 'string') {
            return validatorStr;
        }
        // regex pattern to extract arguments from string for e.g applying on "minLength(8)" would extract 8
        const re = /^([a-zA-Z]{3,15})\((.{0,20})\)$/;
        const match = validatorStr.match(re);
        if (!match) {
            return Validators[validatorStr];
        }
        const name = match[1];
        const args = match[2];
        return Validators[name](args);
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0.ɵɵinject(i1.FormBuilder)); };
FormService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvZm9ybS9zaGFyZWQvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDOzs7QUFhdEUsTUFBTSxPQUFPLFdBQVc7SUFFdEIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRWhELElBQUksQ0FBQyxNQUFtQixFQUFFLE1BQXdCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDbEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBNEIsRUFBRSxNQUFtQjtRQUNyRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENB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O1FBRXJDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7c0VBaEZVLFdBQVc7aUVBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlYsTUFBTTt1RkFFUCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRm9ybUZpZWxkLFxuICBGb3JtRmllbGRDb25maWcsXG4gIEZvcm1GaWVsZEdyb3VwLFxuICBGb3JtRmllbGRHcm91cENvbmZpZ1xufSBmcm9tICcuL2Zvcm0uaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBmb3JtKGZpZWxkczogRm9ybUZpZWxkW10sIGdyb3VwczogRm9ybUZpZWxkR3JvdXBbXSk6IEZvcm0ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEZvcm1GaWVsZCkgPT4ge1xuICAgICAgY29udHJvbC5hZGRDb250cm9sKGZpZWxkLm5hbWUsIGZpZWxkLmNvbnRyb2wpO1xuICAgIH0pO1xuICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cDogRm9ybUZpZWxkR3JvdXApID0+IHtcbiAgICAgIGNvbnRyb2wuYWRkQ29udHJvbChncm91cC5uYW1lLCBncm91cC5jb250cm9sKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7ZmllbGRzLCBncm91cHMsIGNvbnRyb2x9O1xuICB9XG5cbiAgZ3JvdXAoY29uZmlnOiBGb3JtRmllbGRHcm91cENvbmZpZywgZmllbGRzOiBGb3JtRmllbGRbXSk6IEZvcm1GaWVsZEdyb3VwIHtcbiAgICBjb25zdCBvcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwge307XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZDogRm9ybUZpZWxkKSA9PiB7XG4gICAgICBjb250cm9sLmFkZENvbnRyb2woZmllbGQubmFtZSwgZmllbGQuY29udHJvbCk7XG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy52YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMob3B0aW9ucy52YWxpZGF0b3IpOyAvLyBjb252ZXJ0IHN0cmluZyB0byBhY3R1YWwgdmFsaWRhdG9yXG4gICAgICBjb250cm9sLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywge2ZpZWxkcywgY29udHJvbH0pIGFzIEZvcm1GaWVsZEdyb3VwO1xuICB9XG5cbiAgZmllbGQoY29uZmlnOiBGb3JtRmllbGRDb25maWcpOiBGb3JtRmllbGQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRpc2FibGVkOiBvcHRpb25zLmRpc2FibGVkXG4gICAgfTtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHN0YXRlKTtcblxuICAgIGlmIChvcHRpb25zLnZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0VmFsaWRhdG9ycyhvcHRpb25zLnZhbGlkYXRvcik7IC8vIGNvbnZlcnQgc3RyaW5nIHRvIGFjdHVhbCB2YWxpZGF0b3JcbiAgICAgIGNvbnRyb2wuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7dHlwZTogJ3RleHQnfSwgY29uZmlnLCB7Y29udHJvbH0pIGFzIEZvcm1GaWVsZDtcbiAgfVxuXG4gIGV4dGVuZEZpZWxkQ29uZmlnKGNvbmZpZzogRm9ybUZpZWxkQ29uZmlnLCBwYXJ0aWFsOiBQYXJ0aWFsPEZvcm1GaWVsZENvbmZpZz4pOiBGb3JtRmllbGRDb25maWcge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcub3B0aW9ucyB8fCB7fSwgcGFydGlhbC5vcHRpb25zIHx8IHt9KTtcbiAgICBjb25zdCBpbnB1dHMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuaW5wdXRzIHx8IHt9LCBwYXJ0aWFsLmlucHV0cyB8fCB7fSk7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuc3Vic2NyaWJlcnMgfHwge30sIHBhcnRpYWwuc3Vic2NyaWJlcnMgfHwge30pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIHtvcHRpb25zLCBpbnB1dHMsIHN1YnNjcmliZXJzfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbGlkYXRvcnModmFsaWRhdG9yT3B0aW9uOiBzdHJpbmcgfCBzdHJpbmdbXSB8IFZhbGlkYXRvckZuKTogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWxpZGF0b3JPcHRpb24pKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdG9yT3B0aW9uLm1hcCgodmFsaWRhdG9yU3RyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkYXRvcih2YWxpZGF0b3JTdHIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRhdG9yKHZhbGlkYXRvck9wdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbGlkYXRvcih2YWxpZGF0b3JTdHI6IHN0cmluZyB8IFZhbGlkYXRvckZuKTogVmFsaWRhdG9yRm4ge1xuICAgIGlmICh0eXBlb2YgdmFsaWRhdG9yU3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvclN0cjtcbiAgICB9XG5cbiAgICAvLyByZWdleCBwYXR0ZXJuIHRvIGV4dHJhY3QgYXJndW1lbnRzIGZyb20gc3RyaW5nIGZvciBlLmcgYXBwbHlpbmcgb24gXCJtaW5MZW5ndGgoOClcIiB3b3VsZCBleHRyYWN0IDhcbiAgICBjb25zdCByZSA9IC9eKFthLXpBLVpdezMsMTV9KVxcKCguezAsMjB9KVxcKSQvO1xuICAgIGNvbnN0IG1hdGNoID0gdmFsaWRhdG9yU3RyLm1hdGNoKHJlKTtcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzW3ZhbGlkYXRvclN0cl07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IG1hdGNoWzFdO1xuICAgIGNvbnN0IGFyZ3MgPSBtYXRjaFsyXTtcbiAgICByZXR1cm4gVmFsaWRhdG9yc1tuYW1lXShhcmdzKTtcbiAgfVxuXG59XG4iXX0=