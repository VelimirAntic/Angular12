import { BehaviorSubject, Subject } from 'rxjs';
/**
 * This class is responsible of managing the relations between
 * entities and the actions that consume them. It also defines an
 * entity table template that may be used by an entity table component.
 */
export class Workspace {
    constructor(options) {
        this.options = options;
        /**
         * Observable of the selected widget
         */
        this.widget$ = new BehaviorSubject(undefined);
        /**
         * Observable of the selected widget's inputs
         */
        this.widgetInputs$ = new BehaviorSubject({});
        /**
         * Observable of the selected widget's subscribers
         */
        this.widgetSubscribers$ = new BehaviorSubject({});
        /**
         * State change that trigger an update of the actions availability
         */
        this.change = new Subject();
        this.active$ = new BehaviorSubject(false);
    }
    /**
     * Workspace id
     */
    get id() { return this.options.id; }
    /**
     * Workspace title
     */
    get title() { return this.options.title; }
    /**
     * Workspace title
     */
    get meta() { return this.options.meta || {}; }
    /**
     * Entities store
     */
    get entityStore() { return this.options.entityStore; }
    /**
     * Actions store (some actions activate a widget)
     */
    get actionStore() { return this.options.actionStore; }
    /**
     * Selected widget
     */
    get widget() { return this.widget$.value; }
    /**
     * Whether a widget is selected
     */
    get hasWidget() { return this.widget !== undefined; }
    /**
     * Whether this strategy is active
     * @internal
     */
    get active() { return this.active$.value; }
    /**
     * Activate the workspace. By doing that, the workspace will observe
     * the selected entity (from the store) and update the actions availability.
     * For example, some actions require an entity to be selected.
     */
    activate() {
        if (this.active === true) {
            this.deactivate();
        }
        this.active$.next(true);
        if (this.entityStore !== undefined) {
            this.entities$$ = this.entityStore.stateView.all$()
                .subscribe(() => this.onStateChange());
        }
        this.change.next();
    }
    /**
     * Deactivate the workspace. Unsubcribe to the selected entity.
     */
    deactivate() {
        this.active$.next(false);
        this.deactivateWidget();
        if (this.entities$$ !== undefined) {
            this.entities$$.unsubscribe();
        }
        if (this.change$ !== undefined) {
            this.change$.unsubscribe();
        }
    }
    /**
     * Activate a widget. In itself, activating a widget doesn't render it but,
     * if an WorkspaceWidgetOutlet component is bound to this workspace, the widget will
     * show up.
     * @param widget Widget
     * @param inputs Inputs the widget will receive
     */
    activateWidget(widget, inputs = {}, subscribers = {}) {
        this.widget$.next(widget);
        this.widgetInputs$.next(inputs);
        this.widgetSubscribers$.next(subscribers);
        this.change.next();
    }
    /**
     * Deactivate a widget.
     */
    deactivateWidget() {
        this.widget$.next(undefined);
        this.change.next();
    }
    /**
     * When the state changes, update the actions availability.
     */
    onStateChange() {
        this.change.next();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvd29ya3NwYWNlL3NoYXJlZC93b3Jrc3BhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUTlEOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sU0FBUztJQW1FcEIsWUFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFqRS9DOztXQUVHO1FBQ00sWUFBTyxHQUFHLElBQUksZUFBZSxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRTFEOztXQUVHO1FBQ00sa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBdUIsRUFBRSxDQUFDLENBQUM7UUFFdkU7O1dBRUc7UUFDTSx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBd0MsRUFBRSxDQUFDLENBQUM7UUFPN0Y7O1dBRUc7UUFDSyxXQUFNLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFpRHJDLFlBQU8sR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFQdEIsQ0FBQztJQW5DbkQ7O09BRUc7SUFDSCxJQUFJLEVBQUUsS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU1Qzs7T0FFRztJQUNILElBQUksS0FBSyxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWxEOztPQUVHO0lBQ0gsSUFBSSxJQUFJLEtBQTJCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRTs7T0FFRztJQUNILElBQUksV0FBVyxLQUFxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBNkIsQ0FBQyxDQUFDLENBQUM7SUFFeEY7O09BRUc7SUFDSCxJQUFJLFdBQVcsS0FBa0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFbkU7O09BRUc7SUFDSCxJQUFJLE1BQU0sS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuRDs7T0FFRztJQUNILElBQUksU0FBUyxLQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBSTlEOzs7T0FHRztJQUNILElBQUksTUFBTSxLQUFjLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBR3BEOzs7O09BSUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO2lCQUNoRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsY0FBYyxDQUNaLE1BQWMsRUFDZCxTQUErQixFQUFFLEVBQ2pDLGNBQXFELEVBQUU7UUFFdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssYUFBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFjdGlvblN0b3JlIH0gZnJvbSAnLi4vLi4vYWN0aW9uJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBFbnRpdHlTdG9yZSB9IGZyb20gJy4uLy4uL2VudGl0eSc7XG5cbmltcG9ydCB7IFdvcmtzcGFjZU9wdGlvbnMgfSBmcm9tICcuL3dvcmtzcGFjZS5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIG9mIG1hbmFnaW5nIHRoZSByZWxhdGlvbnMgYmV0d2VlblxuICogZW50aXRpZXMgYW5kIHRoZSBhY3Rpb25zIHRoYXQgY29uc3VtZSB0aGVtLiBJdCBhbHNvIGRlZmluZXMgYW5cbiAqIGVudGl0eSB0YWJsZSB0ZW1wbGF0ZSB0aGF0IG1heSBiZSB1c2VkIGJ5IGFuIGVudGl0eSB0YWJsZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2U8RSBleHRlbmRzIG9iamVjdCA9IG9iamVjdD4ge1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIHRoZSBzZWxlY3RlZCB3aWRnZXRcbiAgICovXG4gIHJlYWRvbmx5IHdpZGdldCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdpZGdldD4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSBvZiB0aGUgc2VsZWN0ZWQgd2lkZ2V0J3MgaW5wdXRzXG4gICAqL1xuICByZWFkb25seSB3aWRnZXRJbnB1dHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7W2tleTogc3RyaW5nXTogYW55fT4oe30pO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIG9mIHRoZSBzZWxlY3RlZCB3aWRnZXQncyBzdWJzY3JpYmVyc1xuICAgKi9cbiAgcmVhZG9ubHkgd2lkZ2V0U3Vic2NyaWJlcnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7W2tleTogc3RyaW5nXTogKGV2ZW50OiBhbnkpID0+IHZvaWR9Pih7fSk7XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byB0aGUgc2VsZWN0ZWQgZW50aXR5XG4gICAqL1xuICBwcml2YXRlIGVudGl0aWVzJCQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogU3RhdGUgY2hhbmdlIHRoYXQgdHJpZ2dlciBhbiB1cGRhdGUgb2YgdGhlIGFjdGlvbnMgYXZhaWxhYmlsaXR5XG4gICAqL1xuICBwcml2YXRlIGNoYW5nZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogV29ya3NwYWNlIGlkXG4gICAqL1xuICBnZXQgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5pZDsgfVxuXG4gIC8qKlxuICAgKiBXb3Jrc3BhY2UgdGl0bGVcbiAgICovXG4gIGdldCB0aXRsZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vcHRpb25zLnRpdGxlOyB9XG5cbiAgLyoqXG4gICAqIFdvcmtzcGFjZSB0aXRsZVxuICAgKi9cbiAgZ2V0IG1ldGEoKToge1trZXk6IHN0cmluZ106IGFueX0geyByZXR1cm4gdGhpcy5vcHRpb25zLm1ldGEgfHwge307IH1cblxuICAvKipcbiAgICogRW50aXRpZXMgc3RvcmVcbiAgICovXG4gIGdldCBlbnRpdHlTdG9yZSgpOiBFbnRpdHlTdG9yZTxFPiB7IHJldHVybiB0aGlzLm9wdGlvbnMuZW50aXR5U3RvcmUgYXMgRW50aXR5U3RvcmU8RT47IH1cblxuICAvKipcbiAgICogQWN0aW9ucyBzdG9yZSAoc29tZSBhY3Rpb25zIGFjdGl2YXRlIGEgd2lkZ2V0KVxuICAgKi9cbiAgZ2V0IGFjdGlvblN0b3JlKCk6IEFjdGlvblN0b3JlIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5hY3Rpb25TdG9yZTsgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RlZCB3aWRnZXRcbiAgICovXG4gIGdldCB3aWRnZXQoKTogV2lkZ2V0IHsgcmV0dXJuIHRoaXMud2lkZ2V0JC52YWx1ZTsgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgd2lkZ2V0IGlzIHNlbGVjdGVkXG4gICAqL1xuICBnZXQgaGFzV2lkZ2V0KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy53aWRnZXQgIT09IHVuZGVmaW5lZDsgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBXb3Jrc3BhY2VPcHRpb25zKSB7fVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgc3RyYXRlZ3kgaXMgYWN0aXZlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuYWN0aXZlJC52YWx1ZTsgfVxuICByZWFkb25seSBhY3RpdmUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICAvKipcbiAgICogQWN0aXZhdGUgdGhlIHdvcmtzcGFjZS4gQnkgZG9pbmcgdGhhdCwgdGhlIHdvcmtzcGFjZSB3aWxsIG9ic2VydmVcbiAgICogdGhlIHNlbGVjdGVkIGVudGl0eSAoZnJvbSB0aGUgc3RvcmUpIGFuZCB1cGRhdGUgdGhlIGFjdGlvbnMgYXZhaWxhYmlsaXR5LlxuICAgKiBGb3IgZXhhbXBsZSwgc29tZSBhY3Rpb25zIHJlcXVpcmUgYW4gZW50aXR5IHRvIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUkLm5leHQodHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5lbnRpdHlTdG9yZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmVudGl0aWVzJCQgPSB0aGlzLmVudGl0eVN0b3JlLnN0YXRlVmlldy5hbGwkKClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uU3RhdGVDaGFuZ2UoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgdGhlIHdvcmtzcGFjZS4gVW5zdWJjcmliZSB0byB0aGUgc2VsZWN0ZWQgZW50aXR5LlxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSQubmV4dChmYWxzZSk7XG4gICAgdGhpcy5kZWFjdGl2YXRlV2lkZ2V0KCk7XG5cbiAgICBpZiAodGhpcy5lbnRpdGllcyQkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZW50aXRpZXMkJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGFuZ2UkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZSBhIHdpZGdldC4gSW4gaXRzZWxmLCBhY3RpdmF0aW5nIGEgd2lkZ2V0IGRvZXNuJ3QgcmVuZGVyIGl0IGJ1dCxcbiAgICogaWYgYW4gV29ya3NwYWNlV2lkZ2V0T3V0bGV0IGNvbXBvbmVudCBpcyBib3VuZCB0byB0aGlzIHdvcmtzcGFjZSwgdGhlIHdpZGdldCB3aWxsXG4gICAqIHNob3cgdXAuXG4gICAqIEBwYXJhbSB3aWRnZXQgV2lkZ2V0XG4gICAqIEBwYXJhbSBpbnB1dHMgSW5wdXRzIHRoZSB3aWRnZXQgd2lsbCByZWNlaXZlXG4gICAqL1xuICBhY3RpdmF0ZVdpZGdldChcbiAgICB3aWRnZXQ6IFdpZGdldCxcbiAgICBpbnB1dHM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge30sXG4gICAgc3Vic2NyaWJlcnM6IHtba2V5OiBzdHJpbmddOiAoZXZlbnQ6IGFueSkgPT4gdm9pZH0gPSB7fVxuICApIHtcbiAgICB0aGlzLndpZGdldCQubmV4dCh3aWRnZXQpO1xuICAgIHRoaXMud2lkZ2V0SW5wdXRzJC5uZXh0KGlucHV0cyk7XG4gICAgdGhpcy53aWRnZXRTdWJzY3JpYmVycyQubmV4dChzdWJzY3JpYmVycyk7XG4gICAgdGhpcy5jaGFuZ2UubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGUgYSB3aWRnZXQuXG4gICAqL1xuICBkZWFjdGl2YXRlV2lkZ2V0KCkge1xuICAgIHRoaXMud2lkZ2V0JC5uZXh0KHVuZGVmaW5lZCk7XG4gICAgdGhpcy5jaGFuZ2UubmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHN0YXRlIGNoYW5nZXMsIHVwZGF0ZSB0aGUgYWN0aW9ucyBhdmFpbGFiaWxpdHkuXG4gICAqL1xuICBwcml2YXRlIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5jaGFuZ2UubmV4dCgpO1xuICB9XG5cbn1cbiJdfQ==