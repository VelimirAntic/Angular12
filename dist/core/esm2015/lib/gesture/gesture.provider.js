import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export class IgoGestureConfig extends HammerGestureConfig {
    buildHammer(element) {
        const mc = super.buildHammer(element);
        mc.set({ touchAction: 'pan-y' });
        return mc;
    }
}
IgoGestureConfig.ɵfac = /*@__PURE__*/ function () { let ɵIgoGestureConfig_BaseFactory; return function IgoGestureConfig_Factory(t) { return (ɵIgoGestureConfig_BaseFactory || (ɵIgoGestureConfig_BaseFactory = i0.ɵɵgetInheritedFactory(IgoGestureConfig)))(t || IgoGestureConfig); }; }();
IgoGestureConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: IgoGestureConfig, factory: IgoGestureConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IgoGestureConfig, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9nZXN0dXJlL2dlc3R1cmUucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFJaEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG1CQUFtQjtJQUN2RCxXQUFXLENBQUMsT0FBb0I7UUFDOUIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQVEsQ0FBQztRQUM3QyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzt3T0FMVSxnQkFBZ0IsU0FBaEIsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWdvR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG1jID0gc3VwZXIuYnVpbGRIYW1tZXIoZWxlbWVudCkgYXMgYW55O1xuICAgIG1jLnNldCh7IHRvdWNoQWN0aW9uOiAncGFuLXknIH0pO1xuICAgIHJldHVybiBtYztcbiAgfVxufVxuIl19