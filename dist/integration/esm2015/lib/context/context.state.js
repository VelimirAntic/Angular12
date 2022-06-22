import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/context";
import * as i2 from "@igo2/common";
import * as i3 from "../tool/tool.state";
import * as i4 from "@igo2/core";
/**
 * Service that holds the state of the context module
 */
export class ContextState {
    constructor(contextService, toolService, toolState, languageService) {
        this.contextService = contextService;
        this.toolService = toolService;
        this.toolState = toolState;
        this.languageService = languageService;
        /**
         * Observable of the active context
         */
        this.context$ = new BehaviorSubject(undefined);
        this.contextService.context$.subscribe((context) => {
            this.onContextChange(context);
        });
        this.contextService.toolsChanged$.subscribe((context) => {
            this.updateTools(context);
        });
    }
    /**
     * Set the active context
     * @param context Detailed context
     */
    setContext(context) {
        this.updateTools(context);
        this.context$.next(context);
    }
    /**
     * Update the tool state with the context's tools
     * @param context Detailed context
     */
    updateTools(context) {
        const toolbox = this.toolState.toolbox;
        const tools = [];
        const contextTools = context.tools || [];
        contextTools.forEach((contextTool) => {
            const baseTool = this.toolService.getTool(contextTool.name);
            if (baseTool === undefined) {
                return;
            }
            const options = Object.assign({}, baseTool.options || {}, contextTool.options || {});
            const tool = Object.assign({}, baseTool, contextTool, { options });
            tools.push(tool);
        });
        tools.forEach((tool) => {
            if (tool.parent) {
                const parentIndex = tools.findIndex((el) => el.name === tool.parent);
                if (parentIndex !== -1) {
                    tools[parentIndex].children = [];
                    tools[parentIndex].children.push(tool.name);
                }
            }
        });
        toolbox.setTools(tools);
        toolbox.setToolbar(context.toolbar || []);
        // TODO: This is a patch so the context service can work without
        // injecting the ToolState or without being completely refactored
        this.contextService.setTools([].concat(tools));
        this.contextService.setToolbar(context.toolbar || []);
    }
    /**
     * Set a new context and update the tool state
     * @param context Detailed context
     */
    onContextChange(context) {
        if (context === undefined) {
            return;
        }
        this.setContext(context);
    }
}
ContextState.ɵfac = function ContextState_Factory(t) { return new (t || ContextState)(i0.ɵɵinject(i1.ContextService), i0.ɵɵinject(i2.ToolService), i0.ɵɵinject(i3.ToolState), i0.ɵɵinject(i4.LanguageService)); };
ContextState.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextState, factory: ContextState.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextState, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ContextService }, { type: i2.ToolService }, { type: i3.ToolState }, { type: i4.LanguageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ludGVncmF0aW9uL3NyYy9saWIvY29udGV4dC9jb250ZXh0LnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBUXZDOztHQUVHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFNdkIsWUFDVSxjQUE4QixFQUM5QixXQUF3QixFQUN4QixTQUFvQixFQUNwQixlQUFnQztRQUhoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUMUM7O1dBRUc7UUFDSCxhQUFRLEdBQXFDLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUTFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBd0IsRUFBRSxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssVUFBVSxDQUFDLE9BQXdCO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFdBQVcsQ0FBQyxPQUF3QjtRQUMxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUV2QyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQWlCLEVBQUUsRUFBRTtZQUN6QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUMxQixPQUFPO2FBQ1I7WUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMzQixFQUFFLEVBQ0YsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQ3RCLFdBQVcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUMxQixDQUFDO1lBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JFLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN0QixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUxQyxnRUFBZ0U7UUFDaEUsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSyxlQUFlLENBQUMsT0FBd0I7UUFDOUMsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7d0VBakZVLFlBQVk7a0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJ0BpZ28yL2NvcmUnO1xuaW1wb3J0IHsgVG9vbCwgVG9vbFNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb21tb24nO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UsIERldGFpbGVkQ29udGV4dCB9IGZyb20gJ0BpZ28yL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBUb29sU3RhdGUgfSBmcm9tICcuLi90b29sL3Rvb2wuc3RhdGUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBob2xkcyB0aGUgc3RhdGUgb2YgdGhlIGNvbnRleHQgbW9kdWxlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRTdGF0ZSB7XG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIHRoZSBhY3RpdmUgY29udGV4dFxuICAgKi9cbiAgY29udGV4dCQ6IEJlaGF2aW9yU3ViamVjdDxEZXRhaWxlZENvbnRleHQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2U6IENvbnRleHRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9vbFNlcnZpY2U6IFRvb2xTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9vbFN0YXRlOiBUb29sU3RhdGUsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLmNvbnRleHQkLnN1YnNjcmliZSgoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSA9PiB7XG4gICAgICB0aGlzLm9uQ29udGV4dENoYW5nZShjb250ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRleHRTZXJ2aWNlLnRvb2xzQ2hhbmdlZCQuc3Vic2NyaWJlKChjb250ZXh0OiBEZXRhaWxlZENvbnRleHQpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHMoY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBhY3RpdmUgY29udGV4dFxuICAgKiBAcGFyYW0gY29udGV4dCBEZXRhaWxlZCBjb250ZXh0XG4gICAqL1xuICBwcml2YXRlIHNldENvbnRleHQoY29udGV4dDogRGV0YWlsZWRDb250ZXh0KSB7XG4gICAgdGhpcy51cGRhdGVUb29scyhjb250ZXh0KTtcbiAgICB0aGlzLmNvbnRleHQkLm5leHQoY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB0b29sIHN0YXRlIHdpdGggdGhlIGNvbnRleHQncyB0b29sc1xuICAgKiBAcGFyYW0gY29udGV4dCBEZXRhaWxlZCBjb250ZXh0XG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVRvb2xzKGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCkge1xuICAgIGNvbnN0IHRvb2xib3ggPSB0aGlzLnRvb2xTdGF0ZS50b29sYm94O1xuXG4gICAgY29uc3QgdG9vbHMgPSBbXTtcbiAgICBjb25zdCBjb250ZXh0VG9vbHMgPSBjb250ZXh0LnRvb2xzIHx8IFtdO1xuICAgIGNvbnRleHRUb29scy5mb3JFYWNoKChjb250ZXh0VG9vbDogVG9vbCkgPT4ge1xuICAgICAgY29uc3QgYmFzZVRvb2wgPSB0aGlzLnRvb2xTZXJ2aWNlLmdldFRvb2woY29udGV4dFRvb2wubmFtZSk7XG4gICAgICBpZiAoYmFzZVRvb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgYmFzZVRvb2wub3B0aW9ucyB8fCB7fSxcbiAgICAgICAgY29udGV4dFRvb2wub3B0aW9ucyB8fCB7fVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRvb2wgPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlVG9vbCwgY29udGV4dFRvb2wsIHsgb3B0aW9ucyB9KTtcbiAgICAgIHRvb2xzLnB1c2godG9vbCk7XG4gICAgfSk7XG5cbiAgICB0b29scy5mb3JFYWNoKCh0b29sKSA9PiB7XG4gICAgICBpZiAodG9vbC5wYXJlbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50SW5kZXggPSB0b29scy5maW5kSW5kZXgoKGVsKSA9PiBlbC5uYW1lID09PSB0b29sLnBhcmVudCk7XG4gICAgICAgIGlmIChwYXJlbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0b29sc1twYXJlbnRJbmRleF0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICB0b29sc1twYXJlbnRJbmRleF0uY2hpbGRyZW4ucHVzaCh0b29sLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b29sYm94LnNldFRvb2xzKHRvb2xzKTtcbiAgICB0b29sYm94LnNldFRvb2xiYXIoY29udGV4dC50b29sYmFyIHx8IFtdKTtcblxuICAgIC8vIFRPRE86IFRoaXMgaXMgYSBwYXRjaCBzbyB0aGUgY29udGV4dCBzZXJ2aWNlIGNhbiB3b3JrIHdpdGhvdXRcbiAgICAvLyBpbmplY3RpbmcgdGhlIFRvb2xTdGF0ZSBvciB3aXRob3V0IGJlaW5nIGNvbXBsZXRlbHkgcmVmYWN0b3JlZFxuICAgIHRoaXMuY29udGV4dFNlcnZpY2Uuc2V0VG9vbHMoW10uY29uY2F0KHRvb2xzKSk7XG4gICAgdGhpcy5jb250ZXh0U2VydmljZS5zZXRUb29sYmFyKGNvbnRleHQudG9vbGJhciB8fCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgbmV3IGNvbnRleHQgYW5kIHVwZGF0ZSB0aGUgdG9vbCBzdGF0ZVxuICAgKiBAcGFyYW0gY29udGV4dCBEZXRhaWxlZCBjb250ZXh0XG4gICAqL1xuICBwcml2YXRlIG9uQ29udGV4dENoYW5nZShjb250ZXh0OiBEZXRhaWxlZENvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcbiAgfVxufVxuIl19