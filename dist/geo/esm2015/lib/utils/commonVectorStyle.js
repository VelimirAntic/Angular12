import olFeature from 'ol/Feature';
import { asArray as ColorAsArray } from 'ol/color';
import { createOverlayMarkerStyle } from '../overlay/shared/overlay-marker-style.utils';
import { createOverlayDefaultStyle } from '../overlay/shared/overlay.utils';
/**
 * Generate a style for selected features
 * @param feature The feature to generate the style
 * @returns A olStyle
 */
export function getCommonVectorSelectedStyle({ feature, markerColor = [0, 161, 222], markerOpacity = 1, markerOutlineColor = [0, 255, 255], fillColor, fillOpacity = 0.15, strokeColor = [0, 255, 255], strokeOpacity = 0.5, strokeWidth = 4 }) {
    return getCommonVectorStyle({
        feature,
        markerColor,
        markerOpacity,
        markerOutlineColor,
        fillColor,
        fillOpacity,
        strokeColor,
        strokeOpacity,
        strokeWidth
    });
}
/**
 * Generate a basic style for features
 * @param feature The feature to generate the style
 * @returns A olStyle
 */
export function getCommonVectorStyle({ feature, markerColor = [0, 161, 222], markerOpacity = 0.5, markerOutlineColor, fillColor = [0, 161, 222], fillOpacity = 0.15, strokeColor = [0, 161, 222], strokeOpacity = 0.5, strokeWidth = 2 }) {
    const isOlFeature = feature instanceof olFeature;
    let geometry;
    let text;
    if (isOlFeature) {
        feature = feature;
        geometry = feature.getGeometry();
    }
    else {
        feature = feature;
        geometry = feature.geometry;
        text = feature.meta.mapTitle;
    }
    const geometryType = isOlFeature ? geometry.getType() : geometry.type;
    if (!geometry || geometryType === 'Point') {
        const markerColorAsArray = ColorAsArray(markerColor).slice(0);
        const markerColorRGB = markerColorAsArray.slice(0, 3);
        if (markerColorAsArray.length === 4 &&
            (typeof markerColor !== 'string' || /^#[0-9A-F]{8}$/i.test(markerColor))) {
            markerOpacity = markerColorAsArray[3];
        }
        return createOverlayMarkerStyle({
            text,
            opacity: markerOpacity,
            markerOutlineColor,
            markerColor: markerColorRGB
        });
    }
    else {
        const fillWithOpacity = ColorAsArray(fillColor).slice(0);
        const strokeWithOpacity = ColorAsArray(strokeColor).slice(0);
        if (!(fillWithOpacity.length === 4 &&
            (typeof fillColor !== 'string' || /^#[0-9A-F]{8}$/i.test(fillColor)))) {
            fillWithOpacity[3] = fillOpacity;
        }
        if (!(strokeWithOpacity.length === 4 &&
            (typeof strokeColor !== 'string' || /^#[0-9A-F]{8}$/i.test(strokeColor)))) {
            strokeWithOpacity[3] = strokeOpacity;
        }
        return createOverlayDefaultStyle({
            text,
            strokeWidth,
            strokeColor: strokeWithOpacity,
            fillColor: fillWithOpacity
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uVmVjdG9yU3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi91dGlscy9jb21tb25WZWN0b3JTdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sSUFBSSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFLNUU7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSw0QkFBNEIsQ0FDMUMsRUFDRSxPQUFPLEVBQ1AsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsYUFBYSxHQUFHLENBQUMsRUFDakIsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsQyxTQUFTLEVBQ1QsV0FBVyxHQUFHLElBQUksRUFDbEIsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsYUFBYSxHQUFHLEdBQUcsRUFDbkIsV0FBVyxHQUFHLENBQUMsRUFDaUI7SUFFbEMsT0FBTyxvQkFBb0IsQ0FBQztRQUMxQixPQUFPO1FBQ1AsV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsYUFBYTtRQUNiLFdBQVc7S0FDWixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsRUFDRSxPQUFPLEVBQ1AsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDM0IsYUFBYSxHQUFHLEdBQUcsRUFDbkIsa0JBQWtCLEVBQ2xCLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLFdBQVcsR0FBRyxJQUFJLEVBQ2xCLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzNCLGFBQWEsR0FBRyxHQUFHLEVBQ25CLFdBQVcsR0FBRyxDQUFDLEVBQ2lCO0lBRWxDLE1BQU0sV0FBVyxHQUFHLE9BQU8sWUFBWSxTQUFTLENBQUM7SUFDakQsSUFBSSxRQUFRLENBQUM7SUFDYixJQUFJLElBQUksQ0FBQztJQUNULElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxHQUFHLE9BQWdDLENBQUM7UUFDM0MsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNsQztTQUFNO1FBQ0wsT0FBTyxHQUFHLE9BQWtCLENBQUM7UUFDN0IsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQzlCO0lBQ0QsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFFdEUsSUFBSSxDQUFDLFFBQVEsSUFBSSxZQUFZLEtBQUssT0FBTyxFQUFFO1FBQ3pDLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxNQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksa0JBQWtCLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDL0IsQ0FBQyxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQXFCLENBQUMsQ0FBQyxFQUFFO1lBQ3RGLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sd0JBQXdCLENBQUM7WUFDOUIsSUFBSTtZQUNKLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLGtCQUFrQjtZQUNsQixXQUFXLEVBQUUsY0FBYztTQUM1QixDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQzlCLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25GLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNoQyxDQUFDLE9BQU8sV0FBVyxLQUFLLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RixpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7U0FDdEM7UUFFRCxPQUFPLHlCQUF5QixDQUFDO1lBQy9CLElBQUk7WUFDSixXQUFXO1lBQ1gsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixTQUFTLEVBQUUsZUFBZTtTQUMzQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0ICogYXMgb2xzdHlsZSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgb2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHsgYXNBcnJheSBhcyBDb2xvckFzQXJyYXkgfSBmcm9tICdvbC9jb2xvcic7XG5cbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXlNYXJrZXJTdHlsZSB9IGZyb20gJy4uL292ZXJsYXkvc2hhcmVkL292ZXJsYXktbWFya2VyLXN0eWxlLnV0aWxzJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXlEZWZhdWx0U3R5bGUgfSBmcm9tICcuLi9vdmVybGF5L3NoYXJlZC9vdmVybGF5LnV0aWxzJztcbmltcG9ydCB7IEZlYXR1cmVDb21tb25WZWN0b3JTdHlsZU9wdGlvbnMgfSBmcm9tICcuL2NvbW1vblZlY3RvclN0eWxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vZmVhdHVyZSc7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0eWxlIGZvciBzZWxlY3RlZCBmZWF0dXJlc1xuICogQHBhcmFtIGZlYXR1cmUgVGhlIGZlYXR1cmUgdG8gZ2VuZXJhdGUgdGhlIHN0eWxlXG4gKiBAcmV0dXJucyBBIG9sU3R5bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1vblZlY3RvclNlbGVjdGVkU3R5bGUoXG4gIHtcbiAgICBmZWF0dXJlLFxuICAgIG1hcmtlckNvbG9yID0gWzAsIDE2MSwgMjIyXSxcbiAgICBtYXJrZXJPcGFjaXR5ID0gMSxcbiAgICBtYXJrZXJPdXRsaW5lQ29sb3IgPSBbMCwgMjU1LCAyNTVdLFxuICAgIGZpbGxDb2xvcixcbiAgICBmaWxsT3BhY2l0eSA9IDAuMTUsXG4gICAgc3Ryb2tlQ29sb3IgPSBbMCwgMjU1LCAyNTVdLFxuICAgIHN0cm9rZU9wYWNpdHkgPSAwLjUsXG4gICAgc3Ryb2tlV2lkdGggPSA0XG4gIH06IEZlYXR1cmVDb21tb25WZWN0b3JTdHlsZU9wdGlvbnMpOiBvbHN0eWxlLlN0eWxlIHtcblxuICByZXR1cm4gZ2V0Q29tbW9uVmVjdG9yU3R5bGUoe1xuICAgIGZlYXR1cmUsXG4gICAgbWFya2VyQ29sb3IsXG4gICAgbWFya2VyT3BhY2l0eSxcbiAgICBtYXJrZXJPdXRsaW5lQ29sb3IsXG4gICAgZmlsbENvbG9yLFxuICAgIGZpbGxPcGFjaXR5LFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHN0cm9rZU9wYWNpdHksXG4gICAgc3Ryb2tlV2lkdGhcbiAgfSk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBiYXNpYyBzdHlsZSBmb3IgZmVhdHVyZXNcbiAqIEBwYXJhbSBmZWF0dXJlIFRoZSBmZWF0dXJlIHRvIGdlbmVyYXRlIHRoZSBzdHlsZVxuICogQHJldHVybnMgQSBvbFN0eWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tb25WZWN0b3JTdHlsZShcbiAge1xuICAgIGZlYXR1cmUsXG4gICAgbWFya2VyQ29sb3IgPSBbMCwgMTYxLCAyMjJdLFxuICAgIG1hcmtlck9wYWNpdHkgPSAwLjUsXG4gICAgbWFya2VyT3V0bGluZUNvbG9yLFxuICAgIGZpbGxDb2xvciA9IFswLCAxNjEsIDIyMl0sXG4gICAgZmlsbE9wYWNpdHkgPSAwLjE1LFxuICAgIHN0cm9rZUNvbG9yID0gWzAsIDE2MSwgMjIyXSxcbiAgICBzdHJva2VPcGFjaXR5ID0gMC41LFxuICAgIHN0cm9rZVdpZHRoID0gMlxuICB9OiBGZWF0dXJlQ29tbW9uVmVjdG9yU3R5bGVPcHRpb25zKTogb2xzdHlsZS5TdHlsZSB7XG5cbiAgY29uc3QgaXNPbEZlYXR1cmUgPSBmZWF0dXJlIGluc3RhbmNlb2Ygb2xGZWF0dXJlO1xuICBsZXQgZ2VvbWV0cnk7XG4gIGxldCB0ZXh0O1xuICBpZiAoaXNPbEZlYXR1cmUpIHtcbiAgICBmZWF0dXJlID0gZmVhdHVyZSBhcyBvbEZlYXR1cmU8T2xHZW9tZXRyeT47XG4gICAgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gIH0gZWxzZSB7XG4gICAgZmVhdHVyZSA9IGZlYXR1cmUgYXMgRmVhdHVyZTtcbiAgICBnZW9tZXRyeSA9IGZlYXR1cmUuZ2VvbWV0cnk7XG4gICAgdGV4dCA9IGZlYXR1cmUubWV0YS5tYXBUaXRsZTtcbiAgfVxuICBjb25zdCBnZW9tZXRyeVR5cGUgPSBpc09sRmVhdHVyZSA/IGdlb21ldHJ5LmdldFR5cGUoKSA6IGdlb21ldHJ5LnR5cGU7XG5cbiAgaWYgKCFnZW9tZXRyeSB8fCBnZW9tZXRyeVR5cGUgPT09ICdQb2ludCcpIHtcbiAgICBjb25zdCBtYXJrZXJDb2xvckFzQXJyYXkgPSBDb2xvckFzQXJyYXkobWFya2VyQ29sb3IpLnNsaWNlKDApO1xuICAgIGNvbnN0IG1hcmtlckNvbG9yUkdCID0gbWFya2VyQ29sb3JBc0FycmF5LnNsaWNlKDAsIDMpO1xuXG4gICAgaWYgKG1hcmtlckNvbG9yQXNBcnJheS5sZW5ndGggPT09IDQgJiZcbiAgICAgICAgKHR5cGVvZiBtYXJrZXJDb2xvciAhPT0gJ3N0cmluZycgfHwgL14jWzAtOUEtRl17OH0kL2kudGVzdChtYXJrZXJDb2xvciBhcyBzdHJpbmcpKSkge1xuICAgICAgbWFya2VyT3BhY2l0eSA9IG1hcmtlckNvbG9yQXNBcnJheVszXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlT3ZlcmxheU1hcmtlclN0eWxlKHtcbiAgICAgIHRleHQsXG4gICAgICBvcGFjaXR5OiBtYXJrZXJPcGFjaXR5LFxuICAgICAgbWFya2VyT3V0bGluZUNvbG9yLFxuICAgICAgbWFya2VyQ29sb3I6IG1hcmtlckNvbG9yUkdCXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsbFdpdGhPcGFjaXR5ID0gQ29sb3JBc0FycmF5KGZpbGxDb2xvcikuc2xpY2UoMCk7XG4gICAgY29uc3Qgc3Ryb2tlV2l0aE9wYWNpdHkgPSBDb2xvckFzQXJyYXkoc3Ryb2tlQ29sb3IpLnNsaWNlKDApO1xuXG4gICAgaWYgKCEoZmlsbFdpdGhPcGFjaXR5Lmxlbmd0aCA9PT0gNCAmJlxuICAgICAgICAodHlwZW9mIGZpbGxDb2xvciAhPT0gJ3N0cmluZycgfHwgL14jWzAtOUEtRl17OH0kL2kudGVzdChmaWxsQ29sb3IgYXMgc3RyaW5nKSkpKSB7XG4gICAgICBmaWxsV2l0aE9wYWNpdHlbM10gPSBmaWxsT3BhY2l0eTtcbiAgICB9XG5cbiAgICBpZiAoIShzdHJva2VXaXRoT3BhY2l0eS5sZW5ndGggPT09IDQgJiZcbiAgICAgICAgKHR5cGVvZiBzdHJva2VDb2xvciAhPT0gJ3N0cmluZycgfHwgL14jWzAtOUEtRl17OH0kL2kudGVzdChzdHJva2VDb2xvciBhcyBzdHJpbmcpKSkpIHtcbiAgICAgIHN0cm9rZVdpdGhPcGFjaXR5WzNdID0gc3Ryb2tlT3BhY2l0eTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlT3ZlcmxheURlZmF1bHRTdHlsZSh7XG4gICAgICB0ZXh0LFxuICAgICAgc3Ryb2tlV2lkdGgsXG4gICAgICBzdHJva2VDb2xvcjogc3Ryb2tlV2l0aE9wYWNpdHksXG4gICAgICBmaWxsQ29sb3I6IGZpbGxXaXRoT3BhY2l0eVxuICAgIH0pO1xuICB9XG59XG4iXX0=