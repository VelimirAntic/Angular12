import { HttpClient } from '@angular/common/http';
import { ConfigService, LanguageService, StorageService } from '@igo2/core';
import { SearchSource } from './source';
import { ILayerSearchSource, ILayerSearchResultFormatter } from './ilayer';
/**
 * ILayer search result formatter factory
 * @ignore
 */
export function ilayerSearchResultFormatterFactory(languageService) {
    return new ILayerSearchResultFormatter(languageService);
}
/**
 * Function that returns a provider for the ILayer search result formatter
 */
export function provideILayerSearchResultFormatter() {
    return {
        provide: ILayerSearchResultFormatter,
        useFactory: ilayerSearchResultFormatterFactory,
        deps: [LanguageService]
    };
}
/**
 * ILayer search source factory
 * @ignore
 */
export function ilayerSearchSourceFactory(http, languageService, storageService, config, formatter) {
    return new ILayerSearchSource(http, languageService, storageService, config.getConfig(`searchSources.${ILayerSearchSource.id}`), formatter);
}
/**
 * Function that returns a provider for the ILayer search source
 */
export function provideILayerSearchSource() {
    return {
        provide: SearchSource,
        useFactory: ilayerSearchSourceFactory,
        multi: true,
        deps: [HttpClient, LanguageService, StorageService, ConfigService, ILayerSearchResultFormatter]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWxheWVyLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL3NlYXJjaC9zaGFyZWQvc291cmNlcy9pbGF5ZXIucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFM0U7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGtDQUFrQyxDQUNoRCxlQUFnQztJQUVoQyxPQUFPLElBQUksMkJBQTJCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGtDQUFrQztJQUNoRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxVQUFVLEVBQUUsa0NBQWtDO1FBQzlDLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUN4QixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSx5QkFBeUIsQ0FDdkMsSUFBZ0IsRUFDaEIsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsTUFBcUIsRUFDckIsU0FBc0M7SUFFdEMsT0FBTyxJQUFJLGtCQUFrQixDQUMzQixJQUFJLEVBQ0osZUFBZSxFQUNmLGNBQWMsRUFDZCxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUMxRCxTQUFTLENBQ1YsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsT0FBTztRQUNMLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLENBQUM7S0FDaEcsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGlnbzIvY29yZSc7XG5cbmltcG9ydCB7IFNlYXJjaFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IElMYXllclNlYXJjaFNvdXJjZSwgSUxheWVyU2VhcmNoUmVzdWx0Rm9ybWF0dGVyIH0gZnJvbSAnLi9pbGF5ZXInO1xuXG4vKipcbiAqIElMYXllciBzZWFyY2ggcmVzdWx0IGZvcm1hdHRlciBmYWN0b3J5XG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbGF5ZXJTZWFyY2hSZXN1bHRGb3JtYXR0ZXJGYWN0b3J5KFxuICBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxuKSB7XG4gIHJldHVybiBuZXcgSUxheWVyU2VhcmNoUmVzdWx0Rm9ybWF0dGVyKGxhbmd1YWdlU2VydmljZSk7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvdmlkZXIgZm9yIHRoZSBJTGF5ZXIgc2VhcmNoIHJlc3VsdCBmb3JtYXR0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVJTGF5ZXJTZWFyY2hSZXN1bHRGb3JtYXR0ZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogSUxheWVyU2VhcmNoUmVzdWx0Rm9ybWF0dGVyLFxuICAgIHVzZUZhY3Rvcnk6IGlsYXllclNlYXJjaFJlc3VsdEZvcm1hdHRlckZhY3RvcnksXG4gICAgZGVwczogW0xhbmd1YWdlU2VydmljZV1cbiAgfTtcbn1cblxuLyoqXG4gKiBJTGF5ZXIgc2VhcmNoIHNvdXJjZSBmYWN0b3J5XG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbGF5ZXJTZWFyY2hTb3VyY2VGYWN0b3J5KFxuICBodHRwOiBIdHRwQ2xpZW50LFxuICBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gIGZvcm1hdHRlcjogSUxheWVyU2VhcmNoUmVzdWx0Rm9ybWF0dGVyXG4pIHtcbiAgcmV0dXJuIG5ldyBJTGF5ZXJTZWFyY2hTb3VyY2UoXG4gICAgaHR0cCxcbiAgICBsYW5ndWFnZVNlcnZpY2UsXG4gICAgc3RvcmFnZVNlcnZpY2UsXG4gICAgY29uZmlnLmdldENvbmZpZyhgc2VhcmNoU291cmNlcy4ke0lMYXllclNlYXJjaFNvdXJjZS5pZH1gKSxcbiAgICBmb3JtYXR0ZXJcbiAgKTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm92aWRlciBmb3IgdGhlIElMYXllciBzZWFyY2ggc291cmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlSUxheWVyU2VhcmNoU291cmNlKCkge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IFNlYXJjaFNvdXJjZSxcbiAgICB1c2VGYWN0b3J5OiBpbGF5ZXJTZWFyY2hTb3VyY2VGYWN0b3J5LFxuICAgIG11bHRpOiB0cnVlLFxuICAgIGRlcHM6IFtIdHRwQ2xpZW50LCBMYW5ndWFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlLCBDb25maWdTZXJ2aWNlLCBJTGF5ZXJTZWFyY2hSZXN1bHRGb3JtYXR0ZXJdXG4gIH07XG59XG4iXX0=