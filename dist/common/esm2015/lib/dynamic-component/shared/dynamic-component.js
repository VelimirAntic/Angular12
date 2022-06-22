import { Observable } from 'rxjs';
/**
 * This class is used in the DynamicComponentOutlet component. It holds
 * a reference to a component factory and can render that component
 * in a target element on demand. It's also possible to set inputs
 * and to subscribe to outputs.
 */
export class DynamicComponent {
    constructor(componentFactory) {
        this.componentFactory = componentFactory;
        /**
         * Subscriptions to the component's outputs. Those need
         * to be unsubscribed when the component is destroyed.
         */
        this.subscriptions = [];
        /**
         * Component inputs
         */
        this.inputs = {};
        /**
         * Subscriptions to the component's async inputs
         */
        this.inputs$$ = {};
        /**
         * Subscribers to the component's outputs
         */
        this.subscribers = {};
    }
    /**
     * Render the component to a target element.
     * Set it's inputs and subscribe to it's outputs.
     * @param target Target element
     */
    setTarget(target) {
        this.target = target;
        this.componentRef = target.createComponent(this.componentFactory);
        this.updateInputs(this.inputs);
        this.updateSubscribers(this.subscribers);
    }
    /**
     * Destroy this component. That means, removing from it's target
     * element and unsubscribing to it's outputs.
     */
    destroy() {
        if (this.target !== undefined) {
            this.target.clear();
        }
        if (this.componentRef !== undefined) {
            this.componentRef.destroy();
            this.componentRef = undefined;
        }
        this.unobserveAllInputs();
        this.unsubscribeAll();
    }
    /**
     * Update the component inputs. This is an update so any
     * key not defined won't be overwritten.
     */
    updateInputs(inputs) {
        this.inputs = inputs;
        if (this.componentRef === undefined) {
            return;
        }
        const instance = this.componentRef.instance;
        const allowedInputs = this.componentFactory.inputs;
        allowedInputs.forEach((value) => {
            const key = value.propName;
            this.unobserveInput(key);
            const inputValue = inputs[key];
            if (inputs.hasOwnProperty(key)) {
                if (inputValue instanceof Observable) {
                    this.observeInput(key, inputValue);
                }
                else {
                    this.setInputValue(instance, key, inputValue);
                }
            }
        });
        if (typeof instance.onUpdateInputs === 'function') {
            instance.onUpdateInputs();
        }
    }
    /**
     * Set an instance's input value
     * @param instance Component instance
     * @param key Input key
     * @param value Input value
     */
    setInputValue(instance, key, value) {
        const currentValue = instance[key];
        if (value === currentValue) {
            return;
        }
        const prototype = Object.getPrototypeOf(instance);
        const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
        if (descriptor !== undefined && descriptor.set !== undefined) {
            descriptor.set.call(instance, value);
        }
        else {
            instance[key] = value;
        }
    }
    /**
     * Update the component subscribers. This is an update so any
     * key not defined won't be overwritten.
     */
    updateSubscribers(subscribers) {
        this.subscribers = subscribers;
        if (this.componentRef === undefined) {
            return;
        }
        const instance = this.componentRef.instance;
        const allowedSubscribers = this.componentFactory.outputs;
        allowedSubscribers.forEach((value) => {
            const key = value.propName;
            if (subscribers.hasOwnProperty(key)) {
                const emitter = instance[key];
                const subscriber = subscribers[key];
                if (Array.isArray(subscriber)) {
                    subscriber.forEach((_subscriber) => {
                        this.subscriptions.push(emitter.subscribe(_subscriber));
                    });
                }
                else {
                    this.subscriptions.push(emitter.subscribe(subscriber));
                }
            }
        });
    }
    /**
     * Subscribe to an observable input and update the component's input value
     * accordingly
     * @param key Input key
     * @param observable Observable
     */
    observeInput(key, observable) {
        this.inputs$$[key] = observable.subscribe((value) => {
            const instance = this.componentRef.instance;
            this.setInputValue(instance, key, value);
            if (typeof instance.onUpdateInputs === 'function') {
                instance.onUpdateInputs();
            }
        });
    }
    /**
     * Unsubscribe to an observable input
     * @param key Input key
     */
    unobserveInput(key) {
        if (this.inputs$$[key] !== undefined) {
            this.inputs$$[key].unsubscribe();
            this.inputs$$[key] = undefined;
        }
    }
    /**
     * Unsubscribe to all outputs.
     */
    unobserveAllInputs() {
        Object.values(this.inputs$$).forEach((s) => {
            if (s !== undefined) {
                s.unsubscribe();
            }
        });
        this.inputs$$ = {};
    }
    /**
     * Unsubscribe to all outputs.
     */
    unsubscribeAll() {
        this.subscriptions.forEach((s) => s.unsubscribe());
        this.subscriptions = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi9keW5hbWljLWNvbXBvbmVudC9zaGFyZWQvZHluYW1pYy1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFaEQ7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sZ0JBQWdCO0lBaUMzQixZQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQTFCekQ7OztXQUdHO1FBQ0ssa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBTzNDOztXQUVHO1FBQ0ssV0FBTSxHQUF5QixFQUFFLENBQUM7UUFFMUM7O1dBRUc7UUFDSyxhQUFRLEdBQWtDLEVBQUUsQ0FBQztRQUVyRDs7V0FFRztRQUNLLGdCQUFXLEdBQTBDLEVBQUUsQ0FBQztJQUVKLENBQUM7SUFFN0Q7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxNQUF3QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxD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SUFDSyxrQkFBa0I7UUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBMkIsRUFBRSxFQUFFO1lBQ25FLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBpbiB0aGUgRHluYW1pY0NvbXBvbmVudE91dGxldCBjb21wb25lbnQuIEl0IGhvbGRzXG4gKiBhIHJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBmYWN0b3J5IGFuZCBjYW4gcmVuZGVyIHRoYXQgY29tcG9uZW50XG4gKiBpbiBhIHRhcmdldCBlbGVtZW50IG9uIGRlbWFuZC4gSXQncyBhbHNvIHBvc3NpYmxlIHRvIHNldCBpbnB1dHNcbiAqIGFuZCB0byBzdWJzY3JpYmUgdG8gb3V0cHV0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnQ8Qz4ge1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgcmVmZXJlbmNlXG4gICAqL1xuICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEM+O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb25zIHRvIHRoZSBjb21wb25lbnQncyBvdXRwdXRzLiBUaG9zZSBuZWVkXG4gICAqIHRvIGJlIHVuc3Vic2NyaWJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgdGFyZ2V0IGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgdGFyZ2V0OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgaW5wdXRzXG4gICAqL1xuICBwcml2YXRlIGlucHV0czoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9ucyB0byB0aGUgY29tcG9uZW50J3MgYXN5bmMgaW5wdXRzXG4gICAqL1xuICBwcml2YXRlIGlucHV0cyQkOiB7W2tleTogc3RyaW5nXTogU3Vic2NyaXB0aW9ufSA9IHt9O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmVycyB0byB0aGUgY29tcG9uZW50J3Mgb3V0cHV0c1xuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVyczoge1trZXk6IHN0cmluZ106IChldmVudDogYW55KSA9PiB2b2lkfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDPikge31cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBjb21wb25lbnQgdG8gYSB0YXJnZXQgZWxlbWVudC5cbiAgICogU2V0IGl0J3MgaW5wdXRzIGFuZCBzdWJzY3JpYmUgdG8gaXQncyBvdXRwdXRzLlxuICAgKiBAcGFyYW0gdGFyZ2V0IFRhcmdldCBlbGVtZW50XG4gICAqL1xuICBzZXRUYXJnZXQodGFyZ2V0OiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0YXJnZXQuY3JlYXRlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50RmFjdG9yeSk7XG4gICAgdGhpcy51cGRhdGVJbnB1dHModGhpcy5pbnB1dHMpO1xuICAgIHRoaXMudXBkYXRlU3Vic2NyaWJlcnModGhpcy5zdWJzY3JpYmVycyk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGlzIGNvbXBvbmVudC4gVGhhdCBtZWFucywgcmVtb3ZpbmcgZnJvbSBpdCdzIHRhcmdldFxuICAgKiBlbGVtZW50IGFuZCB1bnN1YnNjcmliaW5nIHRvIGl0J3Mgb3V0cHV0cy5cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudGFyZ2V0LmNsZWFyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy51bm9ic2VydmVBbGxJbnB1dHMoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb21wb25lbnQgaW5wdXRzLiBUaGlzIGlzIGFuIHVwZGF0ZSBzbyBhbnlcbiAgICoga2V5IG5vdCBkZWZpbmVkIHdvbid0IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgdXBkYXRlSW5wdXRzKGlucHV0czoge1trZXk6IHN0cmluZ106IGFueX0pIHtcbiAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgY29uc3QgYWxsb3dlZElucHV0cyA9IHRoaXMuY29tcG9uZW50RmFjdG9yeS5pbnB1dHM7XG4gICAgYWxsb3dlZElucHV0cy5mb3JFYWNoKCh2YWx1ZToge3Byb3BOYW1lOiBzdHJpbmc7IHRlbXBsYXRlTmFtZTogc3RyaW5nOyB9KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB2YWx1ZS5wcm9wTmFtZTtcblxuICAgICAgdGhpcy51bm9ic2VydmVJbnB1dChrZXkpO1xuXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRzW2tleV07XG4gICAgICBpZiAoaW5wdXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlSW5wdXQoa2V5LCBpbnB1dFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoaW5zdGFuY2UsIGtleSwgaW5wdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgKGluc3RhbmNlIGFzIGFueSkub25VcGRhdGVJbnB1dHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIChpbnN0YW5jZSBhcyBhbnkpLm9uVXBkYXRlSW5wdXRzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbiBpbnN0YW5jZSdzIGlucHV0IHZhbHVlXG4gICAqIEBwYXJhbSBpbnN0YW5jZSBDb21wb25lbnQgaW5zdGFuY2VcbiAgICogQHBhcmFtIGtleSBJbnB1dCBrZXlcbiAgICogQHBhcmFtIHZhbHVlIElucHV0IHZhbHVlXG4gICAqL1xuICBwcml2YXRlIHNldElucHV0VmFsdWUoaW5zdGFuY2U6IEMsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gaW5zdGFuY2Vba2V5XTtcbiAgICBpZiAodmFsdWUgPT09IGN1cnJlbnRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSk7XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBrZXkpO1xuICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQgJiYgZGVzY3JpcHRvci5zZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbChpbnN0YW5jZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY29tcG9uZW50IHN1YnNjcmliZXJzLiBUaGlzIGlzIGFuIHVwZGF0ZSBzbyBhbnlcbiAgICoga2V5IG5vdCBkZWZpbmVkIHdvbid0IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgdXBkYXRlU3Vic2NyaWJlcnMoc3Vic2NyaWJlcnM6IHtba2V5OiBzdHJpbmddOiAoZXZlbnQ6IGFueSkgPT4gdm9pZH0pIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gc3Vic2NyaWJlcnM7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgIGNvbnN0IGFsbG93ZWRTdWJzY3JpYmVycyA9IHRoaXMuY29tcG9uZW50RmFjdG9yeS5vdXRwdXRzO1xuICAgIGFsbG93ZWRTdWJzY3JpYmVycy5mb3JFYWNoKCh2YWx1ZToge3Byb3BOYW1lOiBzdHJpbmc7IHRlbXBsYXRlTmFtZTogc3RyaW5nOyB9KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB2YWx1ZS5wcm9wTmFtZTtcbiAgICAgIGlmIChzdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBpbnN0YW5jZVtrZXldO1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlcnNba2V5XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcikpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLmZvckVhY2goKF9zdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChlbWl0dGVyLnN1YnNjcmliZShfc3Vic2NyaWJlcikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGVtaXR0ZXIuc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBvYnNlcnZhYmxlIGlucHV0IGFuZCB1cGRhdGUgdGhlIGNvbXBvbmVudCdzIGlucHV0IHZhbHVlXG4gICAqIGFjY29yZGluZ2x5XG4gICAqIEBwYXJhbSBrZXkgSW5wdXQga2V5XG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlIE9ic2VydmFibGVcbiAgICovXG4gIHByaXZhdGUgb2JzZXJ2ZUlucHV0KGtleTogc3RyaW5nLCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4pIHtcbiAgICB0aGlzLmlucHV0cyQkW2tleV0gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwga2V5LCB2YWx1ZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgKGluc3RhbmNlIGFzIGFueSkub25VcGRhdGVJbnB1dHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgKGluc3RhbmNlIGFzIGFueSkub25VcGRhdGVJbnB1dHMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0byBhbiBvYnNlcnZhYmxlIGlucHV0XG4gICAqIEBwYXJhbSBrZXkgSW5wdXQga2V5XG4gICAqL1xuICBwcml2YXRlIHVub2JzZXJ2ZUlucHV0KGtleTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRzJCRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlucHV0cyQkW2tleV0udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuaW5wdXRzJCRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgdG8gYWxsIG91dHB1dHMuXG4gICAqL1xuICBwcml2YXRlIHVub2JzZXJ2ZUFsbElucHV0cygpIHtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuaW5wdXRzJCQpLmZvckVhY2goKHM6IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgaWYgKHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dHMkJCA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRvIGFsbCBvdXRwdXRzLlxuICAgKi9cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoczogU3Vic2NyaXB0aW9uKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICB9XG5cbn1cbiJdfQ==