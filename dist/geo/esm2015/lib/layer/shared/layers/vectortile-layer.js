import olLayerVectorTile from 'ol/layer/VectorTile';
import { Layer } from './layer';
import { TileWatcher } from '../../utils';
export class VectorTileLayer extends Layer {
    constructor(options, messageService, authInterceptor) {
        super(options, messageService, authInterceptor);
        this.messageService = messageService;
        this.authInterceptor = authInterceptor;
        this.watcher = new TileWatcher(this);
        this.status$ = this.watcher.status$;
    }
    createOlLayer() {
        const olOptions = Object.assign({}, this.options, {
            source: this.options.source.ol
        });
        const vectorTile = new olLayerVectorTile(olOptions);
        const vectorTileSource = vectorTile.getSource();
        vectorTileSource.setTileLoadFunction((tile, url) => {
            const loader = this.customLoader(url, tile.getFormat(), this.authInterceptor, tile.onLoad.bind(tile));
            if (loader) {
                tile.setLoader(loader);
            }
        });
        return vectorTile;
    }
    /**
     * Custom loader for vector tile layer. Modified from the loadFeaturesXhr function in ol\featureloader.js
     * @internal
     * @param url the url string or function to retrieve the data
     * @param format the format of the tile
     * @param interceptor the interceptor of the data
     * @param success On success event action to trigger
     * @param failure On failure event action to trigger TODO
     */
    customLoader(url, format, interceptor, success, failure) {
        return ((extent, resolution, projection) => {
            const xhr = new XMLHttpRequest();
            let modifiedUrl = url;
            if (typeof url !== 'function') {
                const alteredUrlWithKeyAuth = interceptor.alterUrlWithKeyAuth(url);
                if (alteredUrlWithKeyAuth) {
                    modifiedUrl = alteredUrlWithKeyAuth;
                }
            }
            else {
                modifiedUrl = url(extent, resolution, projection);
            }
            xhr.open('GET', modifiedUrl);
            if (interceptor) {
                interceptor.interceptXhr(xhr, modifiedUrl);
            }
            if (format.getType() === 'arraybuffer') {
                xhr.responseType = 'arraybuffer';
            }
            xhr.onload = (event) => {
                if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
                    const type = format.getType();
                    let source;
                    if (type === 'json' || type === 'text') {
                        source = xhr.responseText;
                    }
                    else if (type === 'xml') {
                        source = xhr.responseXML;
                        if (!source) {
                            source = new DOMParser().parseFromString(xhr.responseText, 'application/xml');
                        }
                    }
                    else if (type === 'arraybuffer') {
                        source = xhr.response;
                    }
                    if (source) {
                        success.call(this, format.readFeatures(source, {
                            extent,
                            featureProjection: projection
                        }), format.readProjection(source));
                    }
                    else {
                        // TODO
                        failure.call(this);
                    }
                }
                else {
                    // TODO
                    failure.call(this);
                }
            };
            xhr.onerror = () => {
                // TODO
                failure.call(this);
            };
            xhr.send();
        });
    }
    setMap(map) {
        if (map === undefined) {
            this.watcher.unsubscribe();
        }
        else {
            this.watcher.subscribe(() => { });
        }
        super.setMap(map);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2xheWVyL3NoYXJlZC9sYXllcnMvdmVjdG9ydGlsZS1sYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGlCQUFpQixNQUFNLHFCQUFxQixDQUFDO0FBS3BELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxLQUFLO0lBT3hDLFlBQ0UsT0FBK0IsRUFDeEIsY0FBK0IsRUFDL0IsZUFBaUM7UUFDeEMsS0FBSyxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFGekMsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUV4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVTLGFBQWE7UUFDckIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBd0I7U0FDckQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQXdCLENBQUM7UUFFdEUsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFnQixFQUFFLEdBQVcsRUFB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SUFBSSxDQUFDLENBQUM7aUJBQ3BCO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ2pCLE9BQU87Z0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBdUI7UUFDbkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2xMYXllclZlY3RvclRpbGUgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yVGlsZSc7XG5pbXBvcnQgb2xTb3VyY2VWZWN0b3JUaWxlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3JUaWxlJztcblxuaW1wb3J0IHsgTVZURGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL212dC1kYXRhc291cmNlJztcblxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuL2xheWVyJztcbmltcG9ydCB7IFZlY3RvclRpbGVMYXllck9wdGlvbnMgfSBmcm9tICcuL3ZlY3RvcnRpbGUtbGF5ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRpbGVXYXRjaGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnQGlnbzIvYXV0aCc7XG5pbXBvcnQgeyBJZ29NYXAgfSBmcm9tICcuLi8uLi8uLi9tYXAnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCBWZWN0b3JUaWxlIGZyb20gJ29sL1ZlY3RvclRpbGUnO1xuXG5leHBvcnQgY2xhc3MgVmVjdG9yVGlsZUxheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBwdWJsaWMgZGF0YVNvdXJjZTogTVZURGF0YVNvdXJjZTtcbiAgcHVibGljIG9wdGlvbnM6IFZlY3RvclRpbGVMYXllck9wdGlvbnM7XG4gIHB1YmxpYyBvbDogb2xMYXllclZlY3RvclRpbGU7XG5cbiAgcHJpdmF0ZSB3YXRjaGVyOiBUaWxlV2F0Y2hlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zOiBWZWN0b3JUaWxlTGF5ZXJPcHRpb25zLFxuICAgIHB1YmxpYyBtZXNzYWdlU2VydmljZT86IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHB1YmxpYyBhdXRoSW50ZXJjZXB0b3I/OiBBdXRoSW50ZXJjZXB0b3IpIHtcbiAgICBzdXBlcihvcHRpb25zLCBtZXNzYWdlU2VydmljZSwgYXV0aEludGVyY2VwdG9yKTtcbiAgICB0aGlzLndhdGNoZXIgPSBuZXcgVGlsZVdhdGNoZXIodGhpcyk7XG4gICAgdGhpcy5zdGF0dXMkID0gdGhpcy53YXRjaGVyLnN0YXR1cyQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlT2xMYXllcigpOiBvbExheWVyVmVjdG9yVGlsZSB7XG4gICAgY29uc3Qgb2xPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICBzb3VyY2U6IHRoaXMub3B0aW9ucy5zb3VyY2Uub2wgYXMgb2xTb3VyY2VWZWN0b3JUaWxlXG4gICAgfSk7XG5cbiAgICBjb25zdCB2ZWN0b3JUaWxlID0gbmV3IG9sTGF5ZXJWZWN0b3JUaWxlKG9sT3B0aW9ucyk7XG4gICAgY29uc3QgdmVjdG9yVGlsZVNvdXJjZSA9IHZlY3RvclRpbGUuZ2V0U291cmNlKCkgYXMgb2xTb3VyY2VWZWN0b3JUaWxlO1xuXG4gICAgdmVjdG9yVGlsZVNvdXJjZS5zZXRUaWxlTG9hZEZ1bmN0aW9uKCh0aWxlOiBWZWN0b3JUaWxlLCB1cmw6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gdGhpcy5jdXN0b21Mb2FkZXIodXJsLCB0aWxlLmdldEZvcm1hdCgpLCB0aGlzLmF1dGhJbnRlcmNlcHRvciwgdGlsZS5vbkxvYWQuYmluZCh0aWxlKSk7XG4gICAgICBpZiAobG9hZGVyKSB7XG4gICAgICAgIHRpbGUuc2V0TG9hZGVyKGxvYWRlcik7XG4gICAgICB9XG4gICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdmVjdG9yVGlsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gbG9hZGVyIGZvciB2ZWN0b3IgdGlsZSBsYXllci4gTW9kaWZpZWQgZnJvbSB0aGUgbG9hZEZlYXR1cmVzWGhyIGZ1bmN0aW9uIGluIG9sXFxmZWF0dXJlbG9hZGVyLmpzXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0gdXJsIHRoZSB1cmwgc3RyaW5nIG9yIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBkYXRhXG4gICAqIEBwYXJhbSBmb3JtYXQgdGhlIGZvcm1hdCBvZiB0aGUgdGlsZVxuICAgKiBAcGFyYW0gaW50ZXJjZXB0b3IgdGhlIGludGVyY2VwdG9yIG9mIHRoZSBkYXRhXG4gICAqIEBwYXJhbSBzdWNjZXNzIE9uIHN1Y2Nlc3MgZXZlbnQgYWN0aW9uIHRvIHRyaWdnZXJcbiAgICogQHBhcmFtIGZhaWx1cmUgT24gZmFpbHVyZSBldmVudCBhY3Rpb24gdG8gdHJpZ2dlciBUT0RPXG4gICAqL1xuICBjdXN0b21Mb2FkZXIodXJsLCBmb3JtYXQsIGludGVyY2VwdG9yLCBzdWNjZXNzLCBmYWlsdXJlPykge1xuICAgIHJldHVybiAoKGV4dGVudCwgcmVzb2x1dGlvbiwgcHJvamVjdGlvbikgPT4ge1xuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBsZXQgbW9kaWZpZWRVcmwgPSB1cmw7XG4gICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBhbHRlcmVkVXJsV2l0aEtleUF1dGggPSBpbnRlcmNlcHRvci5hbHRlclVybFdpdGhLZXlBdXRoKHVybCk7XG4gICAgICAgIGlmIChhbHRlcmVkVXJsV2l0aEtleUF1dGgpIHtcbiAgICAgICAgICBtb2RpZmllZFVybCA9IGFsdGVyZWRVcmxXaXRoS2V5QXV0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kaWZpZWRVcmwgPSB1cmwoZXh0ZW50LCByZXNvbHV0aW9uLCBwcm9qZWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIHhoci5vcGVuKCAnR0VUJywgbW9kaWZpZWRVcmwpO1xuICAgICAgaWYgKGludGVyY2VwdG9yKSB7XG4gICAgICAgIGludGVyY2VwdG9yLmludGVyY2VwdFhocih4aHIsIG1vZGlmaWVkVXJsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdC5nZXRUeXBlKCkgPT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICB9XG4gICAgICB4aHIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgheGhyLnN0YXR1cyB8fCB4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGZvcm1hdC5nZXRUeXBlKCk7XG4gICAgICAgICAgbGV0IHNvdXJjZTtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2pzb24nIHx8IHR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgc291cmNlID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ3htbCcpIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IHhoci5yZXNwb25zZVhNTDtcbiAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgIHNvdXJjZSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoeGhyLnJlc3BvbnNlVGV4dCwgJ2FwcGxpY2F0aW9uL3htbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MuY2FsbCh0aGlzLCBmb3JtYXQucmVhZEZlYXR1cmVzKHNvdXJjZSwge1xuICAgICAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBwcm9qZWN0aW9uXG4gICAgICAgICAgICB9KSwgZm9ybWF0LnJlYWRQcm9qZWN0aW9uKHNvdXJjZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgIGZhaWx1cmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgIGZhaWx1cmUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIGZhaWx1cmUuY2FsbCh0aGlzKTtcbiAgICAgIH07XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNldE1hcChtYXA6IElnb01hcCB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChtYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXRjaGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2F0Y2hlci5zdWJzY3JpYmUoKCkgPT4ge30pO1xuICAgIH1cbiAgICBzdXBlci5zZXRNYXAobWFwKTtcbiAgfVxufVxuIl19