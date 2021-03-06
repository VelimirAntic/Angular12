export function formControlIsRequired(control) {
    if (control.validator) {
        const validator = control.validator({});
        if (validator && validator.required) {
            return true;
        }
    }
    if (control.controls) {
        const requiredControl = Object.keys(control.controls).find((key) => {
            return formControlIsRequired(control.controls[key]);
        });
        return requiredControl !== undefined;
    }
    return false;
}
export function getDefaultErrorMessages() {
    return {
        required: 'igo.common.form.errors.required'
    };
}
export function getControlErrorMessage(control, messages) {
    const errors = control.errors || {};
    const errorKeys = Object.keys(errors);
    const errorMessages = errorKeys
        .map((key) => messages[key])
        .filter((message) => message !== undefined);
    return errorMessages.length > 0 ? errorMessages[0] : '';
}
export function getAllFormFields(form) {
    return form.groups.reduce((acc, group) => {
        return acc.concat(group.fields);
    }, [].concat(form.fields));
}
export function getFormFieldByName(form, name) {
    const fields = getAllFormFields(form);
    return fields.find((field) => {
        return field.name === name;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2Zvcm0vc2hhcmVkL2Zvcm0udXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxVQUFVLHFCQUFxQixDQUFDLE9BQXdCO0lBQzVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUNyQixNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQXFCLENBQUMsQ0FBQztRQUMzRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUVELElBQUssT0FBZSxDQUFDLFFBQVEsRUFBRTtRQUM3QixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFFLE9BQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUNsRixPQUFPLHFCQUFxQixDQUFFLE9BQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sZUFBZSxLQUFLLFNBQVMsQ0FBQztLQUN0QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUI7SUFDckMsT0FBTztRQUNMLFFBQVEsRUFBRSxpQ0FBaUM7S0FDNUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsT0FBd0IsRUFBRSxRQUFpQztJQUNoRyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sYUFBYSxHQUFHLFNBQVM7U0FDNUIsR0FBRyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkMsTUFBTSxDQUFDLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUM7SUFDdEQsT0FBTyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUQsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxJQUFVO0lBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFnQixFQUFFLEtBQXFCLEVBQUUsRUFBRTtRQUNwRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLElBQVk7SUFDekQsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtLCBGb3JtRmllbGQsIEZvcm1GaWVsZEdyb3VwIH0gZnJvbSAnLi9mb3JtLmludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNvbnRyb2xJc1JlcXVpcmVkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IGJvb2xlYW4ge1xuICBpZiAoY29udHJvbC52YWxpZGF0b3IpIHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBjb250cm9sLnZhbGlkYXRvcih7fSBhcyBBYnN0cmFjdENvbnRyb2wpO1xuICAgIGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoKGNvbnRyb2wgYXMgYW55KS5jb250cm9scykge1xuICAgIGNvbnN0IHJlcXVpcmVkQ29udHJvbCA9IE9iamVjdC5rZXlzKChjb250cm9sIGFzIGFueSkuY29udHJvbHMpLmZpbmQoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZm9ybUNvbnRyb2xJc1JlcXVpcmVkKChjb250cm9sIGFzIGFueSkuY29udHJvbHNba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcXVpcmVkQ29udHJvbCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEVycm9yTWVzc2FnZXMoKToge1trZXk6IHN0cmluZ106IHN0cmluZ30ge1xuICByZXR1cm4ge1xuICAgIHJlcXVpcmVkOiAnaWdvLmNvbW1vbi5mb3JtLmVycm9ycy5yZXF1aXJlZCdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xFcnJvck1lc3NhZ2UoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBtZXNzYWdlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiBzdHJpbmcge1xuICBjb25zdCBlcnJvcnMgPSBjb250cm9sLmVycm9ycyB8fCB7fTtcbiAgY29uc3QgZXJyb3JLZXlzID0gT2JqZWN0LmtleXMoZXJyb3JzKTtcbiAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IGVycm9yS2V5c1xuICAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBtZXNzYWdlc1trZXldKVxuICAgIC5maWx0ZXIoKG1lc3NhZ2U6IHN0cmluZykgPT4gbWVzc2FnZSAhPT0gdW5kZWZpbmVkKTtcbiAgcmV0dXJuIGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCA/IGVycm9yTWVzc2FnZXNbMF0gOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEZvcm1GaWVsZHMoZm9ybTogRm9ybSk6IEZvcm1GaWVsZFtdIHtcbiAgcmV0dXJuIGZvcm0uZ3JvdXBzLnJlZHVjZSgoYWNjOiBGb3JtRmllbGRbXSwgZ3JvdXA6IEZvcm1GaWVsZEdyb3VwKSA9PiB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ3JvdXAuZmllbGRzKTtcbiAgfSwgW10uY29uY2F0KGZvcm0uZmllbGRzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtRmllbGRCeU5hbWUoZm9ybTogRm9ybSwgbmFtZTogc3RyaW5nKTogRm9ybUZpZWxkIHtcbiAgY29uc3QgZmllbGRzID0gZ2V0QWxsRm9ybUZpZWxkcyhmb3JtKTtcbiAgcmV0dXJuIGZpZWxkcy5maW5kKChmaWVsZDogRm9ybUZpZWxkKSA9PiB7XG4gICAgcmV0dXJuIGZpZWxkLm5hbWUgPT09IG5hbWU7XG4gIH0pO1xufVxuIl19