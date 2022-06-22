/**
 * Service where all available search sources are registered.
 */
export class SearchSourceService {
    constructor(sources) {
        this.sources = sources;
    }
    /**
     * Return available search sources
     * @returns Search sources
     */
    getSources() {
        return this.sources;
    }
    /**
     * Return enabled search sources
     * @returns Search sources
     */
    getEnabledSources() {
        return this.getSources().filter((source) => source.enabled === true);
    }
    /**
     * Enable search sources of given type
     * @param type Search type
     * @todo It would be better to track the enabled search sources
     *  without updating their 'enabled' property.
     */
    enableSourcesByType(type) {
        this.getSources().forEach((source) => {
            if (source.constructor.type === type) {
                source.enabled = true;
            }
            else {
                source.enabled = false;
            }
        });
    }
    /**
     * Set Param from the selected settings
     * @param source search-source
     * @param setting settings
     */
    setParamFromSetting(source, setting) {
        source.setParamFromSetting(setting);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNvdXJjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvc2VhcmNoL3NoYXJlZC9zZWFyY2gtc291cmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0dBRUc7QUFDSCxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFlBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQUcsQ0FBQztJQUUvQzs7O09BR0c7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQzdCLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQ2xELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxtQkFBbUIsQ0FBQyxJQUFZO1FBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7WUFDakQsSUFBSyxNQUFNLENBQUMsV0FBbUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUM3RCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxNQUFvQixFQUFFLE9BQTZCO1FBQ3JFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hTb3VyY2UgfSBmcm9tICcuL3NvdXJjZXMvc291cmNlJztcbmltcG9ydCB7IFNlYXJjaFNvdXJjZVNldHRpbmdzIH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBTZXJ2aWNlIHdoZXJlIGFsbCBhdmFpbGFibGUgc2VhcmNoIHNvdXJjZXMgYXJlIHJlZ2lzdGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hTb3VyY2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZXM6IFNlYXJjaFNvdXJjZVtdKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYXZhaWxhYmxlIHNlYXJjaCBzb3VyY2VzXG4gICAqIEByZXR1cm5zIFNlYXJjaCBzb3VyY2VzXG4gICAqL1xuICBnZXRTb3VyY2VzKCk6IFNlYXJjaFNvdXJjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBlbmFibGVkIHNlYXJjaCBzb3VyY2VzXG4gICAqIEByZXR1cm5zIFNlYXJjaCBzb3VyY2VzXG4gICAqL1xuICBnZXRFbmFibGVkU291cmNlcygpOiBTZWFyY2hTb3VyY2VbXSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U291cmNlcygpLmZpbHRlcihcbiAgICAgIChzb3VyY2U6IFNlYXJjaFNvdXJjZSkgPT4gc291cmNlLmVuYWJsZWQgPT09IHRydWVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBzZWFyY2ggc291cmNlcyBvZiBnaXZlbiB0eXBlXG4gICAqIEBwYXJhbSB0eXBlIFNlYXJjaCB0eXBlXG4gICAqIEB0b2RvIEl0IHdvdWxkIGJlIGJldHRlciB0byB0cmFjayB0aGUgZW5hYmxlZCBzZWFyY2ggc291cmNlc1xuICAgKiAgd2l0aG91dCB1cGRhdGluZyB0aGVpciAnZW5hYmxlZCcgcHJvcGVydHkuXG4gICAqL1xuICBlbmFibGVTb3VyY2VzQnlUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuZ2V0U291cmNlcygpLmZvckVhY2goKHNvdXJjZTogU2VhcmNoU291cmNlKSA9PiB7XG4gICAgICBpZiAoKHNvdXJjZS5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgU2VhcmNoU291cmNlKS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgIHNvdXJjZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZS5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IFBhcmFtIGZyb20gdGhlIHNlbGVjdGVkIHNldHRpbmdzXG4gICAqIEBwYXJhbSBzb3VyY2Ugc2VhcmNoLXNvdXJjZVxuICAgKiBAcGFyYW0gc2V0dGluZyBzZXR0aW5nc1xuICAgKi9cbiAgc2V0UGFyYW1Gcm9tU2V0dGluZyhzb3VyY2U6IFNlYXJjaFNvdXJjZSwgc2V0dGluZzogU2VhcmNoU291cmNlU2V0dGluZ3MpIHtcbiAgICBzb3VyY2Uuc2V0UGFyYW1Gcm9tU2V0dGluZyhzZXR0aW5nKTtcbiAgfVxufVxuIl19