import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ClonePipe {
    transform(value, args) {
        if (value === undefined) {
            return value;
        }
        if (value instanceof Array) {
            return value.map(obj => Object.assign(Object.create(obj), obj));
        }
        else {
            return Object.assign(Object.create(value), value);
        }
    }
}
ClonePipe.ɵfac = function ClonePipe_Factory(t) { return new (t || ClonePipe)(); };
ClonePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "clone", type: ClonePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClonePipe, [{
        type: Pipe,
        args: [{
                name: 'clone'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2Nsb25lL2Nsb25lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztrRUFYVSxTQUFTO3VFQUFULFNBQVM7dUZBQVQsU0FBUztjQUhyQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLE9BQU87YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY2xvbmUnXG59KVxuZXhwb3J0IGNsYXNzIENsb25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcChvYmogPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG9iaiksIG9iaikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHZhbHVlKSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19