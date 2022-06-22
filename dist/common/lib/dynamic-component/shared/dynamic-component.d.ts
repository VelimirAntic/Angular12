import { ComponentFactory, ViewContainerRef } from '@angular/core';
/**
 * This class is used in the DynamicComponentOutlet component. It holds
 * a reference to a component factory and can render that component
 * in a target element on demand. It's also possible to set inputs
 * and to subscribe to outputs.
 */
export declare class DynamicComponent<C> {
    private componentFactory;
    /**
     * Component reference
     */
    private componentRef;
    /**
     * Subscriptions to the component's outputs. Those need
     * to be unsubscribed when the component is destroyed.
     */
    private subscriptions;
    /**
     * Component target element
     */
    private target;
    /**
     * Component inputs
     */
    private inputs;
    /**
     * Subscriptions to the component's async inputs
     */
    private inputs$$;
    /**
     * Subscribers to the component's outputs
     */
    private subscribers;
    constructor(componentFactory: ComponentFactory<C>);
    /**
     * Render the component to a target element.
     * Set it's inputs and subscribe to it's outputs.
     * @param target Target element
     */
    setTarget(target: ViewContainerRef): void;
    /**
     * Destroy this component. That means, removing from it's target
     * element and unsubscribing to it's outputs.
     */
    destroy(): void;
    /**
     * Update the component inputs. This is an update so any
     * key not defined won't be overwritten.
     */
    updateInputs(inputs: {
        [key: string]: any;
    }): void;
    /**
     * Set an instance's input value
     * @param instance Component instance
     * @param key Input key
     * @param value Input value
     */
    private setInputValue;
    /**
     * Update the component subscribers. This is an update so any
     * key not defined won't be overwritten.
     */
    updateSubscribers(subscribers: {
        [key: string]: (event: any) => void;
    }): void;
    /**
     * Subscribe to an observable input and update the component's input value
     * accordingly
     * @param key Input key
     * @param observable Observable
     */
    private observeInput;
    /**
     * Unsubscribe to an observable input
     * @param key Input key
     */
    private unobserveInput;
    /**
     * Unsubscribe to all outputs.
     */
    private unobserveAllInputs;
    /**
     * Unsubscribe to all outputs.
     */
    private unsubscribeAll;
}
