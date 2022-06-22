/**
 * Get all the layers legend
 * @return Array of legend
 */
export function getLayersLegends(layers, view) {
    const legends = [];
    for (const layer of layers) {
        if (layer.visible === false) {
            continue;
        }
        const legendUrls = layer.dataSource.getLegend(undefined, view) || [];
        for (const legendUrl of legendUrls) {
            if (legendUrl.url === undefined) {
                continue;
            }
            // Add legend info to the list
            legends.push({
                title: layer.title,
                url: legendUrl.url
            });
        }
    }
    return legends;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0TGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbGF5ZXIvdXRpbHMvb3V0cHV0TGVnZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7R0FHRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFlLEVBQUUsSUFBMkI7SUFDM0UsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRW5CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzFCLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFBRSxTQUFTO1NBQUU7UUFFMUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRSxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNsQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUFFLFNBQVM7YUFBRTtZQUU5Qyw4QkFBOEI7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2xCLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRzthQUNuQixDQUFDLENBQUM7U0FDSjtLQUNGO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheWVyIH0gZnJvbSAnLi4vc2hhcmVkL2xheWVycy9sYXllcic7XG5pbXBvcnQgeyBMZWdlbmRNYXBWaWV3T3B0aW9ucywgT3V0cHV0TGF5ZXJMZWdlbmQgfSBmcm9tICcuLi9zaGFyZWQvbGF5ZXJzL2xheWVyLmludGVyZmFjZSc7XG5cbi8qKlxuICogR2V0IGFsbCB0aGUgbGF5ZXJzIGxlZ2VuZFxuICogQHJldHVybiBBcnJheSBvZiBsZWdlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyc0xlZ2VuZHMobGF5ZXJzOiBMYXllcltdLCB2aWV3PzogTGVnZW5kTWFwVmlld09wdGlvbnMpOiBPdXRwdXRMYXllckxlZ2VuZFtdIHtcbiAgY29uc3QgbGVnZW5kcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgaWYgKGxheWVyLnZpc2libGUgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBjb25zdCBsZWdlbmRVcmxzID0gbGF5ZXIuZGF0YVNvdXJjZS5nZXRMZWdlbmQodW5kZWZpbmVkLCB2aWV3KSB8fCBbXTtcbiAgICBmb3IgKGNvbnN0IGxlZ2VuZFVybCBvZiBsZWdlbmRVcmxzKSB7XG4gICAgICBpZiAobGVnZW5kVXJsLnVybCA9PT0gdW5kZWZpbmVkKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIC8vIEFkZCBsZWdlbmQgaW5mbyB0byB0aGUgbGlzdFxuICAgICAgbGVnZW5kcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGxheWVyLnRpdGxlLFxuICAgICAgICB1cmw6IGxlZ2VuZFVybC51cmxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWdlbmRzO1xufVxuIl19