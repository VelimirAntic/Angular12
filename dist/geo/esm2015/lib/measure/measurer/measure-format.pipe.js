import { Pipe } from '@angular/core';
import { MeasureAreaUnit, MeasureLengthUnit } from '../shared/measure.enum';
import { metersToUnit, squareMetersToUnit, formatMeasure } from '../shared/measure.utils';
import * as i0 from "@angular/core";
/**
 * This pipe returns a measure converted from meters (or square meters)
 * to the specified unit. It also keeps a certain number of decimals.
 */
export class MeasureFormatPipe {
    /**
     * @ignore
     */
    transform(value, unit, unitAbbr = false, decimal = 1) {
        let out;
        if (Object.values(MeasureAreaUnit).indexOf(unit) >= 0) {
            out = squareMetersToUnit(value, unit);
        }
        else if (Object.values(MeasureLengthUnit).indexOf(unit) >= 0) {
            out = metersToUnit(value, unit);
        }
        return out ? formatMeasure(out, {
            decimal: 1,
            unit,
            unitAbbr,
            locale: 'fr'
        }) : out;
    }
}
MeasureFormatPipe.ɵfac = function MeasureFormatPipe_Factory(t) { return new (t || MeasureFormatPipe)(); };
MeasureFormatPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "measureFormat", type: MeasureFormatPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeasureFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'measureFormat'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhc3VyZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21lYXN1cmUvbWVhc3VyZXIvbWVhc3VyZS1mb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFMUY7OztHQUdHO0FBSUgsTUFBTSxPQUFPLGlCQUFpQjtJQUU1Qjs7T0FFRztJQUNILFNBQVMsQ0FDUCxLQUFhLEVBQUUsSUFBeUMsRUFDeEQsV0FBb0IsS0FBSyxFQUN6QixVQUFrQixDQUFDO1FBRW5CLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUF1QixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hFLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBdUIsQ0FBQyxDQUFDO1NBQzFEO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkYsR0FBRyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBeUIsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDOUIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJO1lBQ0osUUFBUTtZQUNSLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDWCxDQUFDOztrRkF2QlUsaUJBQWlCO3VGQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGVBQWU7YUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lYXN1cmVBcmVhVW5pdCwgTWVhc3VyZUxlbmd0aFVuaXQgfSBmcm9tICcuLi9zaGFyZWQvbWVhc3VyZS5lbnVtJztcbmltcG9ydCB7IG1ldGVyc1RvVW5pdCwgc3F1YXJlTWV0ZXJzVG9Vbml0LCBmb3JtYXRNZWFzdXJlIH0gZnJvbSAnLi4vc2hhcmVkL21lYXN1cmUudXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgcGlwZSByZXR1cm5zIGEgbWVhc3VyZSBjb252ZXJ0ZWQgZnJvbSBtZXRlcnMgKG9yIHNxdWFyZSBtZXRlcnMpXG4gKiB0byB0aGUgc3BlY2lmaWVkIHVuaXQuIEl0IGFsc28ga2VlcHMgYSBjZXJ0YWluIG51bWJlciBvZiBkZWNpbWFscy5cbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnbWVhc3VyZUZvcm1hdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVhc3VyZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBudW1iZXIsIHVuaXQ6IE1lYXN1cmVBcmVhVW5pdCB8IE1lYXN1cmVMZW5ndGhVbml0LFxuICAgIHVuaXRBYmJyOiBib29sZWFuID0gZmFsc2UsXG4gICAgZGVjaW1hbDogbnVtYmVyID0gMVxuICApOiBudW1iZXIge1xuICAgIGxldCBvdXQ7XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoTWVhc3VyZUFyZWFVbml0KS5pbmRleE9mKHVuaXQgYXMgTWVhc3VyZUFyZWFVbml0KSA+PSAwKSB7XG4gICAgICBvdXQgPSBzcXVhcmVNZXRlcnNUb1VuaXQodmFsdWUsIHVuaXQgYXMgTWVhc3VyZUFyZWFVbml0KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC52YWx1ZXMoTWVhc3VyZUxlbmd0aFVuaXQpLmluZGV4T2YodW5pdCBhcyBNZWFzdXJlTGVuZ3RoVW5pdCkgPj0gMCkge1xuICAgICAgb3V0ID0gbWV0ZXJzVG9Vbml0KHZhbHVlLCB1bml0IGFzIE1lYXN1cmVMZW5ndGhVbml0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0ID8gZm9ybWF0TWVhc3VyZShvdXQsIHtcbiAgICAgIGRlY2ltYWw6IDEsXG4gICAgICB1bml0LFxuICAgICAgdW5pdEFiYnIsXG4gICAgICBsb2NhbGU6ICdmcidcbiAgICB9KSA6IG91dDtcbiAgfVxufVxuIl19