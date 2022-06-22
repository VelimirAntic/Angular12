import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class KeyValuePipe {
    transform(value, args) {
        const keyValues = [];
        Object.getOwnPropertyNames(value).forEach((key) => keyValues.push({ key, value: value[key] }));
        return keyValues;
    }
}
KeyValuePipe.ɵfac = function KeyValuePipe_Factory(t) { return new (t || KeyValuePipe)(); };
KeyValuePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "keyvalue", type: KeyValuePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyValuePipe, [{
        type: Pipe,
        args: [{
                name: 'keyvalue'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2tleXZhbHVlL2tleXZhbHVlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQ3hELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQzNDLENBQUM7UUFFRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzt3RUFSVSxZQUFZOzZFQUFaLFlBQVk7dUZBQVosWUFBWTtjQUh4QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLFVBQVU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2tleXZhbHVlJ1xufSlcbmV4cG9ydCBjbGFzcyBLZXlWYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGtleVZhbHVlcyA9IFtdO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT5cbiAgICAgIGtleVZhbHVlcy5wdXNoKHsga2V5LCB2YWx1ZTogdmFsdWVba2V5XSB9KVxuICAgICk7XG5cbiAgICByZXR1cm4ga2V5VmFsdWVzO1xuICB9XG59XG4iXX0=