import { Injectable } from '@angular/core';
import { Toolbox } from './toolbox';
import * as i0 from "@angular/core";
/**
 * Service where runtime tool configurations are registered
 */
export class ToolService {
    constructor() {
        /**
         * Toolbox that holds main tools
         */
        this.toolbox = new Toolbox();
        this.toolbox.setTools(this.getTools());
    }
    static register(tool) {
        ToolService.tools[tool.name] = tool;
    }
    /**
     * Return a tool
     * @param name Tool name
     * @returns tool Tool
     */
    getTool(name) {
        return ToolService.tools[name];
    }
    /**
     * Return all tools
     * @returns tTols
     */
    getTools() {
        return Object.values(ToolService.tools);
    }
}
ToolService.tools = {};
ToolService.ɵfac = function ToolService_Factory(t) { return new (t || ToolService)(); };
ToolService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ToolService, factory: ToolService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvdG9vbC9zaGFyZWQvdG9vbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFcEM7O0dBRUc7QUFJSCxNQUFNLE9BQU8sV0FBVztJQVl0QjtRQVRBOztXQUVHO1FBQ0ksWUFBTyxHQUFZLElBQUksT0FBTyxFQUFFLENBQUM7UUFPdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQU5ELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBVTtRQUN4QixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQU1EOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVE7UUFDTixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0FBOUJNLGlCQUFLLEdBQTRCLEVBQUUsQ0FBQztzRUFEaEMsV0FBVztpRUFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGVixNQUFNO3VGQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sIH0gZnJvbSAnLi90b29sLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUb29sYm94IH0gZnJvbSAnLi90b29sYm94JztcblxuLyoqXG4gKiBTZXJ2aWNlIHdoZXJlIHJ1bnRpbWUgdG9vbCBjb25maWd1cmF0aW9ucyBhcmUgcmVnaXN0ZXJlZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUb29sU2VydmljZSB7XG4gIHN0YXRpYyB0b29sczogeyBba2V5OiBzdHJpbmddOiBUb29sIH0gPSB7fTtcblxuICAvKipcbiAgICogVG9vbGJveCB0aGF0IGhvbGRzIG1haW4gdG9vbHNcbiAgICovXG4gIHB1YmxpYyB0b29sYm94OiBUb29sYm94ID0gbmV3IFRvb2xib3goKTtcblxuICBzdGF0aWMgcmVnaXN0ZXIodG9vbDogVG9vbCkge1xuICAgIFRvb2xTZXJ2aWNlLnRvb2xzW3Rvb2wubmFtZV0gPSB0b29sO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b29sYm94LnNldFRvb2xzKHRoaXMuZ2V0VG9vbHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgdG9vbFxuICAgKiBAcGFyYW0gbmFtZSBUb29sIG5hbWVcbiAgICogQHJldHVybnMgdG9vbCBUb29sXG4gICAqL1xuICBnZXRUb29sKG5hbWU6IHN0cmluZyk6IFRvb2wge1xuICAgIHJldHVybiBUb29sU2VydmljZS50b29sc1tuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIHRvb2xzXG4gICAqIEByZXR1cm5zIHRUb2xzXG4gICAqL1xuICBnZXRUb29scygpOiBUb29sW10ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKFRvb2xTZXJ2aWNlLnRvb2xzKTtcbiAgfVxufVxuIl19