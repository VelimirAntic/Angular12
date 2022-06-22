import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DragAndDropDirective {
    constructor() {
        this.allowedExtensions = [];
        this.filesDropped = new EventEmitter();
        this.filesInvalid = new EventEmitter();
        this.background = 'inherit';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'inherit';
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.alreadyFired) {
            return;
        }
        evt.alreadyFired = true;
        this.background = 'inherit';
        const filesObj = this.validExtensions(evt);
        if (filesObj.valid.length) {
            this.filesDropped.emit(filesObj.valid);
        }
        if (filesObj.invalid.length) {
            this.filesInvalid.emit(filesObj.invalid);
        }
    }
    validExtensions(evt) {
        const files = evt.dataTransfer.files;
        const filesObj = {
            valid: [],
            invalid: []
        };
        if (files.length > 0) {
            for (const file of files) {
                const ext = file.name.split('.')[file.name.split('.').length - 1];
                if (this.allowedExtensions.length === 0 ||
                    (this.allowedExtensions.lastIndexOf(ext) !== -1 &&
                        file.size !== 0)) {
                    filesObj.valid.push(file);
                }
                else {
                    filesObj.invalid.push(file);
                }
            }
        }
        return filesObj;
    }
}
DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(t) { return new (t || DragAndDropDirective)(); };
DragAndDropDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DragAndDropDirective, selectors: [["", "igoDragAndDrop", ""]], hostVars: 2, hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("dragover", function DragAndDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragAndDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragAndDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("background", ctx.background);
    } }, inputs: { allowedExtensions: "allowedExtensions" }, outputs: { filesDropped: "filesDropped", filesInvalid: "filesInvalid" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragAndDropDirective, [{
        type: Directive,
        args: [{
                selector: '[igoDragAndDrop]'
            }]
    }], null, { allowedExtensions: [{
            type: Input
        }], filesDropped: [{
            type: Output
        }], filesInvalid: [{
            type: Output
        }], background: [{
            type: HostBinding,
            args: ['style.background']
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL2RyYWctZHJvcC9kcmFnLWRyb3AuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQzs7QUFLdkIsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUtXLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFFM0IsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5DLGVBQVUsR0FBRyxTQUFTLENBQUM7S0E0RGpFO0lBekRRLFVBQVUsQ0FBQyxHQUFHO1FBQ25CLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUdNLFdBQVcsQ0FBQyxHQUFHO1FBQ3BCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUdNLE1BQU0sQ0FBQyxHQUFHO1FBQ2YsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxHQUFHO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFDRixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLElBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUNuQyxDQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FDaEIsRUFDRDtvQkFDQSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O3dGQW5FVSxvQkFBb0I7dUVBQXBCLG9CQUFvQjs2R0FBcEIsc0JBQWtCLDhGQUFsQix1QkFBbUIsb0ZBQW5CLGtCQUFjOzs7O3VGQUFkLG9CQUFvQjtjQUhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3QjtnQkFHVSxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFYyxZQUFZO2tCQUEvQixNQUFNO1lBRWEsWUFBWTtrQkFBL0IsTUFBTTtZQUVrQyxVQUFVO2tCQUFsRCxXQUFXO21CQUFDLGtCQUFrQjtZQUd4QixVQUFVO2tCQURoQixZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVE3QixXQUFXO2tCQURqQixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVE5QixNQUFNO2tCQURaLFlBQVk7bUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2lnb0RyYWdBbmREcm9wXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wRGlyZWN0aXZlIHtcclxuXHJcbiAgQElucHV0KCkgYWxsb3dlZEV4dGVuc2lvbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgQE91dHB1dCgpIHByb3RlY3RlZCBmaWxlc0Ryb3BwZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcHJvdGVjdGVkIGZpbGVzSW52YWxpZDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZCcpIHByaXZhdGUgYmFja2dyb3VuZCA9ICdpbmhlcml0JztcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkRyYWdPdmVyKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSAnIzk5OSc7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uRHJvcChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKGV2dC5hbHJlYWR5RmlyZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZ0LmFscmVhZHlGaXJlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJ2luaGVyaXQnO1xyXG4gICAgY29uc3QgZmlsZXNPYmogPSB0aGlzLnZhbGlkRXh0ZW5zaW9ucyhldnQpO1xyXG4gICAgaWYgKGZpbGVzT2JqLnZhbGlkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmZpbGVzRHJvcHBlZC5lbWl0KGZpbGVzT2JqLnZhbGlkKTtcclxuICAgIH1cclxuICAgIGlmIChmaWxlc09iai5pbnZhbGlkLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmZpbGVzSW52YWxpZC5lbWl0KGZpbGVzT2JqLmludmFsaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZEV4dGVuc2lvbnMoZXZ0KSB7XHJcbiAgICBjb25zdCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICBjb25zdCBmaWxlc09iaiA9IHtcclxuICAgICAgdmFsaWQ6IFtdLFxyXG4gICAgICBpbnZhbGlkOiBbXVxyXG4gICAgfTtcclxuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpW2ZpbGUubmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuYWxsb3dlZEV4dGVuc2lvbnMubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIHRoaXMuYWxsb3dlZEV4dGVuc2lvbnMubGFzdEluZGV4T2YoZXh0KSAhPT0gLTEgJiZcclxuICAgICAgICAgICAgZmlsZS5zaXplICE9PSAwXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBmaWxlc09iai52YWxpZC5wdXNoKGZpbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmaWxlc09iai5pbnZhbGlkLnB1c2goZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGVzT2JqO1xyXG4gIH1cclxufVxyXG4iXX0=