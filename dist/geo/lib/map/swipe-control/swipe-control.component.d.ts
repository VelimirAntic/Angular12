import { AfterViewInit, OnDestroy } from '@angular/core';
import { IgoMap } from '../shared/map';
import * as i0 from "@angular/core";
/**
 * Tool to swipe the layers
 */
export declare class SwipeControlComponent implements AfterViewInit, OnDestroy {
    /**
     * Get an active map
     */
    map: IgoMap;
    /**
     * The list of layers for swipe
     */
    private layers;
    /**
     * Final position of the swiped element
     */
    private pos1;
    /**
     * Intermediate position of the swiped element
     */
    private pos3;
    /**
     * State of draggable action
     */
    private inDragAction;
    /**
     * Listener of toggle from advanced-map-tool
     */
    private swipeEnabled$$;
    /**
     * Binder of prerender on the same element
     */
    private boundPrerender;
    constructor();
    /**
     * Get the list of layers for swipe and activate of deactivate the swipe
     * @internal
     */
    ngAfterViewInit(): void;
    /**
     * Clear the overlay layer and any interaction added by this component.
     * @internal
     */
    ngOnDestroy(): void;
    /**
     * Display a swipe-element and render the layers
     */
    displaySwipe(): void;
    /**
     * Clear a swipe-element and render the layers on the initial state
     */
    displaySwipeOff(): void;
    /**
     * Getter of element
     */
    get swipeId(): HTMLElement;
    /**
     * Get the list of layers for swipe
     */
    getListOfLayers(): void;
    /**
     * Get a position of click or touch
     */
    dragDown(event: any): void;
    /**
     * Moving a line with a mouse
     */
    mouseSwipe(): void;
    /**
     * Moving a line with a touch
     */
    touchSwipe(): void;
    /**
     * Deactivate a listener of a mouse-action
     */
    closeDragMouseElement(): void;
    /**
     * Deactivate a listener of a touch-action
     */
    closeDragTouchElement(): void;
    /**
     * Cut the image of a layer by the position of swiped-element
     */
    prerender(event: any): void;
    /**
     * Save a current state of the context
     */
    postrender(event: any): void;
    /**
     * Zoom on div
     */
    private letZoom;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwipeControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwipeControlComponent, "igo-swipe-control", never, { "map": "map"; }, {}, never, never>;
}
