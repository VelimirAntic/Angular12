import { unByKey } from 'ol/Observable';
/**
 * Base map controller
 */
export class MapController {
    constructor() {
        /**
         * Array of observer keys
         */
        this.observerKeys = [];
    }
    /**
     * Return the OL map this controller is bound to
     * @returns OL Map
     */
    getOlMap() {
        return this.olMap;
    }
    /**
     * Add or remove this controller to/from a map.
     * @param map OL Map
     */
    setOlMap(olMap) {
        if (olMap !== undefined && this.getOlMap() !== undefined) {
            throw new Error('This controller is already bound to a map.');
        }
        if (olMap === undefined) {
            this.teardownObservers();
            this.olMap = olMap;
            return;
        }
        this.olMap = olMap;
    }
    /**
     * Teardown any observers
     */
    teardownObservers() {
        this.observerKeys.forEach((key) => unByKey(key));
        this.observerKeys = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL21hcC9zaGFyZWQvY29udHJvbGxlcnMvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFPRTs7V0FFRztRQUNPLGlCQUFZLEdBQWdCLEVBQUUsQ0FBQztJQW9DM0MsQ0FBQztJQWxDQzs7O09BR0c7SUFDSCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRLENBQUMsS0FBd0I7UUFDL0IsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDeEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQjtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBYyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudHNLZXkgfSBmcm9tICdvbC9ldmVudHMnO1xuaW1wb3J0IE9sTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgeyB1bkJ5S2V5IH0gZnJvbSAnb2wvT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogQmFzZSBtYXAgY29udHJvbGxlclxuICovXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbGxlciB7XG5cbiAgLyoqXG4gICAqIE9MIE1hcFxuICAgKi9cbiAgcHJvdGVjdGVkIG9sTWFwOiBPbE1hcDtcblxuICAvKipcbiAgICogQXJyYXkgb2Ygb2JzZXJ2ZXIga2V5c1xuICAgKi9cbiAgcHJvdGVjdGVkIG9ic2VydmVyS2V5czogRXZlbnRzS2V5W10gPSBbXTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBPTCBtYXAgdGhpcyBjb250cm9sbGVyIGlzIGJvdW5kIHRvXG4gICAqIEByZXR1cm5zIE9MIE1hcFxuICAgKi9cbiAgZ2V0T2xNYXAoKTogT2xNYXAge1xuICAgIHJldHVybiB0aGlzLm9sTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgdGhpcyBjb250cm9sbGVyIHRvL2Zyb20gYSBtYXAuXG4gICAqIEBwYXJhbSBtYXAgT0wgTWFwXG4gICAqL1xuICBzZXRPbE1hcChvbE1hcDogT2xNYXAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAob2xNYXAgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmdldE9sTWFwKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGNvbnRyb2xsZXIgaXMgYWxyZWFkeSBib3VuZCB0byBhIG1hcC4nKTtcbiAgICB9XG5cbiAgICBpZiAob2xNYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50ZWFyZG93bk9ic2VydmVycygpO1xuICAgICAgdGhpcy5vbE1hcCA9IG9sTWFwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2xNYXAgPSBvbE1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biBhbnkgb2JzZXJ2ZXJzXG4gICAqL1xuICB0ZWFyZG93bk9ic2VydmVycygpIHtcbiAgICB0aGlzLm9ic2VydmVyS2V5cy5mb3JFYWNoKChrZXk6IEV2ZW50c0tleSkgPT4gdW5CeUtleShrZXkpKTtcbiAgICB0aGlzLm9ic2VydmVyS2V5cyA9IFtdO1xuICB9XG5cbn1cbiJdfQ==