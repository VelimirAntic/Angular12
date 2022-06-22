import { EntityStore } from '../../entity';
import { BehaviorSubject } from 'rxjs';
/**
 * Service where all available tools and their component are registered.
 */
export class Toolbox {
    constructor(options = {}) {
        this.options = options;
        /**
         * Observable of the active tool
         */
        this.activeTool$ = new BehaviorSubject(undefined);
        /**
         * Ordered list of tool names to display in a toolbar
         */
        this.toolbar$ = new BehaviorSubject([]);
        /**
         * Active tool history. Useful for activating the previous tool.
         */
        this.activeToolHistory = [];
        /**
         * Tool store
         */
        this.store = new EntityStore([], {
            getKey: (tool) => tool.name
        });
        this.setToolbar(options.toolbar);
        this.initStore();
    }
    get tools$() {
        return this.store.entities$;
    }
    /**
     * Destroy the toolbox
     */
    destroy() {
        this.activeTool$$.unsubscribe();
        this.store.destroy();
    }
    /**
     * Return a tool
     * @param name Tool name
     * @returns tool Tool
     */
    getTool(name) {
        return this.store.get(name);
    }
    /**
     * Return all tools
     * @returns Array of tools
     */
    getTools() {
        return this.store.all();
    }
    /**
     * Set tool configurations
     * @param tools Tools
     */
    setTools(tools) {
        this.store.load(tools);
    }
    /**
     * Get toolbar
     * @returns Toolbar value
     */
    getToolbar() {
        return this.toolbar$.getValue();
    }
    /**
     * Set toolbar
     * @param toolbar A list of tool names
     */
    setToolbar(toolbar) {
        this.toolbar$.next(toolbar || []);
    }
    /**
     * Activate a tool (and deactivate other tools)
     * @param name Tool name
     * @param options Tool options
     */
    activateTool(name, options = {}) {
        const tool = this.getTool(name);
        if (tool === undefined) {
            return;
        }
        this.store.state.update(tool, { active: true, options }, true);
    }
    /**
     * Activate the previous tool, if any
     */
    activatePreviousTool() {
        if (this.activeToolHistory.length <= 1) {
            this.deactivateTool();
            return;
        }
        const [previous, current] = this.activeToolHistory.splice(-2, 2);
        this.activateTool(previous);
    }
    /**
     * Activate the tool below, if any
     */
    /* activateBelowTool() {
      const arrayTools = this.getToolbar();
      const index = arrayTools.findIndex(t => t === this.activeTool$.getValue().name);
      if (arrayTools[index + 1] !== undefined) {
        this.deactivateTool();
        const below = arrayTools[index + 1];
        this.activateTool(below);
      } else {
        this.deactivateTool();
        const below = arrayTools[0];
        this.activateTool(below);
      }
    } */
    /**
     * Activate the tool above, if any
     */
    /* activateAboveTool() {
      const arrayTools = this.getToolbar();
      const index = arrayTools.findIndex(t => t === this.activeTool$.getValue().name);
      if (arrayTools[index - 1] !== undefined) {
        this.deactivateTool();
        const above = arrayTools[index - 1];
        this.activateTool(above);
      } else {
        this.deactivateTool();
        const above = arrayTools[arrayTools.length - 1];
        this.activateTool(above);
      }
    } */
    /**
     * Deactivate the active tool
     */
    deactivateTool() {
        this.clearActiveToolHistory();
        this.store.state.updateAll({ active: false });
    }
    /**
     * Initialize the tool store and start observing the active tool
     */
    initStore() {
        this.store = new EntityStore([], {
            getKey: (entity) => entity.name
        });
        this.activeTool$$ = this.store.stateView
            .firstBy$((record) => record.state.active === true)
            .subscribe((record) => {
            if (record === undefined) {
                this.setActiveTool(undefined);
                return;
            }
            const tool = record.entity;
            const options = Object.assign({}, tool.options || {}, record.state.options || {});
            this.setActiveTool(Object.assign({}, tool, { options }));
        });
    }
    /**
     * Set the active tool and update the tool history
     * @param tool Tool
     */
    setActiveTool(tool) {
        this.activeTool$.next(tool);
        if (tool === undefined) {
            this.clearActiveToolHistory();
        }
        else {
            this.activeToolHistory = this.activeToolHistory
                .filter((name) => name !== tool.name)
                .concat([tool.name]);
        }
    }
    /**
     * Clear the tool history
     */
    clearActiveToolHistory() {
        this.activeToolHistory = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3Rvb2wvc2hhcmVkL3Rvb2xib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFckQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQWdDbEIsWUFBb0IsVUFBMEIsRUFBRTtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQS9CaEQ7O1dBRUc7UUFDSCxnQkFBVyxHQUEwQixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVwRTs7V0FFRztRQUNILGFBQVEsR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFPOUQ7O1dBRUc7UUFDSyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFFekM7O1dBRUc7UUFDSyxVQUFLLEdBQUcsSUFBSSxXQUFXLENBQU8sRUFBRSxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDbEMsQ0FBQyxDQUFDO1FBT0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFQRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFPRDs7T0FFRztJQUNILE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsSUFB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QUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGFBQWEsQ0FBQyxJQUFzQjtRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2lCQUM1QyxNQUFNLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUM1QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eVJlY29yZCwgRW50aXR5U3RvcmUgfSBmcm9tICcuLi8uLi9lbnRpdHknO1xuaW1wb3J0IHsgVG9vbCwgVG9vbGJveE9wdGlvbnMgfSBmcm9tICcuL3Rvb2wuaW50ZXJmYWNlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogU2VydmljZSB3aGVyZSBhbGwgYXZhaWxhYmxlIHRvb2xzIGFuZCB0aGVpciBjb21wb25lbnQgYXJlIHJlZ2lzdGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb29sYm94IHtcbiAgLyoqXG4gICAqIE9ic2VydmFibGUgb2YgdGhlIGFjdGl2ZSB0b29sXG4gICAqL1xuICBhY3RpdmVUb29sJDogQmVoYXZpb3JTdWJqZWN0PFRvb2w+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBPcmRlcmVkIGxpc3Qgb2YgdG9vbCBuYW1lcyB0byBkaXNwbGF5IGluIGEgdG9vbGJhclxuICAgKi9cbiAgdG9vbGJhciQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgYWN0aXZlIHRvb2xcbiAgICovXG4gIHByaXZhdGUgYWN0aXZlVG9vbCQkOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSB0b29sIGhpc3RvcnkuIFVzZWZ1bCBmb3IgYWN0aXZhdGluZyB0aGUgcHJldmlvdXMgdG9vbC5cbiAgICovXG4gIHByaXZhdGUgYWN0aXZlVG9vbEhpc3Rvcnk6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIFRvb2wgc3RvcmVcbiAgICovXG4gIHByaXZhdGUgc3RvcmUgPSBuZXcgRW50aXR5U3RvcmU8VG9vbD4oW10sIHtcbiAgICBnZXRLZXk6ICh0b29sOiBUb29sKSA9PiB0b29sLm5hbWVcbiAgfSk7XG5cbiAgZ2V0IHRvb2xzJCgpOiBCZWhhdmlvclN1YmplY3Q8VG9vbFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZW50aXRpZXMkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBUb29sYm94T3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXRUb29sYmFyKG9wdGlvbnMudG9vbGJhcik7XG4gICAgdGhpcy5pbml0U3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSB0b29sYm94XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWN0aXZlVG9vbCQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdG9yZS5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgdG9vbFxuICAgKiBAcGFyYW0gbmFtZSBUb29sIG5hbWVcbiAgICogQHJldHVybnMgdG9vbCBUb29sXG4gICAqL1xuICBnZXRUb29sKG5hbWU6IHN0cmluZyk6IFRvb2wge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldChuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIHRvb2xzXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIHRvb2xzXG4gICAqL1xuICBnZXRUb29scygpOiBUb29sW10ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmFsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0b29sIGNvbmZpZ3VyYXRpb25zXG4gICAqIEBwYXJhbSB0b29scyBUb29sc1xuICAgKi9cbiAgc2V0VG9vbHModG9vbHM6IFRvb2xbXSkge1xuICAgIHRoaXMuc3RvcmUubG9hZCh0b29scyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRvb2xiYXJcbiAgICogQHJldHVybnMgVG9vbGJhciB2YWx1ZVxuICAgKi9cbiAgZ2V0VG9vbGJhcigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbGJhciQuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdG9vbGJhclxuICAgKiBAcGFyYW0gdG9vbGJhciBBIGxpc3Qgb2YgdG9vbCBuYW1lc1xuICAgKi9cbiAgc2V0VG9vbGJhcih0b29sYmFyOiBzdHJpbmdbXSkge1xuICAgIHRoaXMudG9vbGJhciQubmV4dCh0b29sYmFyIHx8IFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBhIHRvb2wgKGFuZCBkZWFjdGl2YXRlIG90aGVyIHRvb2xzKVxuICAgKiBAcGFyYW0gbmFtZSBUb29sIG5hbWVcbiAgICogQHBhcmFtIG9wdGlvbnMgVG9vbCBvcHRpb25zXG4gICAqL1xuICBhY3RpdmF0ZVRvb2wobmFtZTogc3RyaW5nLCBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge30pIHtcbiAgICBjb25zdCB0b29sID0gdGhpcy5nZXRUb29sKG5hbWUpO1xuICAgIGlmICh0b29sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JlLnN0YXRlLnVwZGF0ZSh0b29sLCB7IGFjdGl2ZTogdHJ1ZSwgb3B0aW9ucyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSB0aGUgcHJldmlvdXMgdG9vbCwgaWYgYW55XG4gICAqL1xuICBhY3RpdmF0ZVByZXZpb3VzVG9vbCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVUb29sSGlzdG9yeS5sZW5ndGggPD0gMSkge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlVG9vbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBbcHJldmlvdXMsIGN1cnJlbnRdID0gdGhpcy5hY3RpdmVUb29sSGlzdG9yeS5zcGxpY2UoLTIsIDIpO1xuICAgIHRoaXMuYWN0aXZhdGVUb29sKHByZXZpb3VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSB0aGUgdG9vbCBiZWxvdywgaWYgYW55XG4gICAqL1xuICAvKiBhY3RpdmF0ZUJlbG93VG9vbCgpIHtcbiAgICBjb25zdCBhcnJheVRvb2xzID0gdGhpcy5nZXRUb29sYmFyKCk7XG4gICAgY29uc3QgaW5kZXggPSBhcnJheVRvb2xzLmZpbmRJbmRleCh0ID0+IHQgPT09IHRoaXMuYWN0aXZlVG9vbCQuZ2V0VmFsdWUoKS5uYW1lKTtcbiAgICBpZiAoYXJyYXlUb29sc1tpbmRleCArIDFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZVRvb2woKTtcbiAgICAgIGNvbnN0IGJlbG93ID0gYXJyYXlUb29sc1tpbmRleCArIDFdO1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvb2woYmVsb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYWN0aXZhdGVUb29sKCk7XG4gICAgICBjb25zdCBiZWxvdyA9IGFycmF5VG9vbHNbMF07XG4gICAgICB0aGlzLmFjdGl2YXRlVG9vbChiZWxvdyk7XG4gICAgfVxuICB9ICovXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIHRoZSB0b29sIGFib3ZlLCBpZiBhbnlcbiAgICovXG4gIC8qIGFjdGl2YXRlQWJvdmVUb29sKCkge1xuICAgIGNvbnN0IGFycmF5VG9vbHMgPSB0aGlzLmdldFRvb2xiYXIoKTtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5VG9vbHMuZmluZEluZGV4KHQgPT4gdCA9PT0gdGhpcy5hY3RpdmVUb29sJC5nZXRWYWx1ZSgpLm5hbWUpO1xuICAgIGlmIChhcnJheVRvb2xzW2luZGV4IC0gMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlVG9vbCgpO1xuICAgICAgY29uc3QgYWJvdmUgPSBhcnJheVRvb2xzW2luZGV4IC0gMV07XG4gICAgICB0aGlzLmFjdGl2YXRlVG9vbChhYm92ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZVRvb2woKTtcbiAgICAgIGNvbnN0IGFib3ZlID0gYXJyYXlUb29sc1thcnJheVRvb2xzLmxlbmd0aCAtIDFdO1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvb2woYWJvdmUpO1xuICAgIH1cbiAgfSAqL1xuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlIHRoZSBhY3RpdmUgdG9vbFxuICAgKi9cbiAgZGVhY3RpdmF0ZVRvb2woKSB7XG4gICAgdGhpcy5jbGVhckFjdGl2ZVRvb2xIaXN0b3J5KCk7XG4gICAgdGhpcy5zdG9yZS5zdGF0ZS51cGRhdGVBbGwoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHRvb2wgc3RvcmUgYW5kIHN0YXJ0IG9ic2VydmluZyB0aGUgYWN0aXZlIHRvb2xcbiAgICovXG4gIHByaXZhdGUgaW5pdFN0b3JlKCkge1xuICAgIHRoaXMuc3RvcmUgPSBuZXcgRW50aXR5U3RvcmU8VG9vbD4oW10sIHtcbiAgICAgIGdldEtleTogKGVudGl0eTogVG9vbCkgPT4gZW50aXR5Lm5hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlVG9vbCQkID0gdGhpcy5zdG9yZS5zdGF0ZVZpZXdcbiAgICAgIC5maXJzdEJ5JCgocmVjb3JkOiBFbnRpdHlSZWNvcmQ8VG9vbD4pID0+IHJlY29yZC5zdGF0ZS5hY3RpdmUgPT09IHRydWUpXG4gICAgICAuc3Vic2NyaWJlKChyZWNvcmQ6IEVudGl0eVJlY29yZDxUb29sPikgPT4ge1xuICAgICAgICBpZiAocmVjb3JkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRvb2wodW5kZWZpbmVkKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b29sID0gcmVjb3JkLmVudGl0eTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgdG9vbC5vcHRpb25zIHx8IHt9LFxuICAgICAgICAgIHJlY29yZC5zdGF0ZS5vcHRpb25zIHx8IHt9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVG9vbChPYmplY3QuYXNzaWduKHt9LCB0b29sLCB7IG9wdGlvbnMgfSkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBhY3RpdmUgdG9vbCBhbmQgdXBkYXRlIHRoZSB0b29sIGhpc3RvcnlcbiAgICogQHBhcmFtIHRvb2wgVG9vbFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBY3RpdmVUb29sKHRvb2w6IFRvb2wgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmFjdGl2ZVRvb2wkLm5leHQodG9vbCk7XG4gICAgaWYgKHRvb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jbGVhckFjdGl2ZVRvb2xIaXN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlVG9vbEhpc3RvcnkgPSB0aGlzLmFjdGl2ZVRvb2xIaXN0b3J5XG4gICAgICAgIC5maWx0ZXIoKG5hbWU6IHN0cmluZykgPT4gbmFtZSAhPT0gdG9vbC5uYW1lKVxuICAgICAgICAuY29uY2F0KFt0b29sLm5hbWVdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHRvb2wgaGlzdG9yeVxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZVRvb2xIaXN0b3J5KCkge1xuICAgIHRoaXMuYWN0aXZlVG9vbEhpc3RvcnkgPSBbXTtcbiAgfVxufVxuIl19