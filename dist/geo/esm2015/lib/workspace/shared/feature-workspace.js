import { Workspace } from '@igo2/common';
import { BehaviorSubject } from 'rxjs';
export class FeatureWorkspace extends Workspace {
    constructor(options) {
        super(options);
        this.options = options;
        this.inResolutionRange$ = new BehaviorSubject(true);
        this.map.viewController.resolution$.subscribe((mapResolution) => {
            if (mapResolution > this.layer.minResolution && mapResolution < this.layer.maxResolution) {
                this.inResolutionRange$.next(true);
            }
            else {
                this.inResolutionRange$.next(false);
            }
        });
    }
    get layer() { return this.options.layer; }
    get map() { return this.options.map; }
    getLayerWksOptionTabQuery() {
        var _a;
        if (((_a = this.layer.options.workspace.queryOptions) === null || _a === void 0 ? void 0 : _a.tabQuery) !== undefined) {
            return this.layer.options.workspace.queryOptions.tabQuery;
        }
        return true;
    }
    getLayerWksOptionMapQuery() {
        var _a;
        if (((_a = this.layer.options.workspace.queryOptions) === null || _a === void 0 ? void 0 : _a.mapQueryOnOpenTab) !== undefined) {
            return this.layer.options.workspace.queryOptions.mapQueryOnOpenTab;
        }
        return true;
    }
    getInResolutionRange() {
        return this.inResolutionRange$.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS13b3Jrc3BhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi93b3Jrc3BhY2Uvc2hhcmVkL2ZlYXR1cmUtd29ya3NwYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVYsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVV2QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUztJQVE3QyxZQUFzQixPQUFnQztRQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFESyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQU43Qyx1QkFBa0IsR0FBNkIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFRaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzlELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDeEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYkQsSUFBSSxLQUFLLEtBQWtCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXZELElBQUksR0FBRyxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBYXZDLHlCQUF5Qjs7UUFDOUIsSUFBSSxDQUFBLE1BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksMENBQUUsUUFBUSxNQUFLLFNBQVMsRUFBRTtZQUNyRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0seUJBQXlCOztRQUM5QixJQUFJLENBQUEsTUFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSwwQ0FBRSxpQkFBaUIsTUFBSyxTQUFTLEVBQUU7WUFDOUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1NBQ3BFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBXb3Jrc3BhY2UsXG4gIFdvcmtzcGFjZU9wdGlvbnNcbn0gZnJvbSAnQGlnbzIvY29tbW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZWN0b3JMYXllciB9IGZyb20gJy4uLy4uL2xheWVyJztcbmltcG9ydCB7IElnb01hcCB9IGZyb20gJy4uLy4uL21hcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVdvcmtzcGFjZU9wdGlvbnMgZXh0ZW5kcyBXb3Jrc3BhY2VPcHRpb25zIHtcbiAgbGF5ZXI6IFZlY3RvckxheWVyO1xuICBtYXA6IElnb01hcDtcbn1cblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVXb3Jrc3BhY2UgZXh0ZW5kcyBXb3Jrc3BhY2Uge1xuXG4gIHJlYWRvbmx5IGluUmVzb2x1dGlvblJhbmdlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcblxuICBnZXQgbGF5ZXIoKTogVmVjdG9yTGF5ZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLmxheWVyOyB9XG5cbiAgZ2V0IG1hcCgpOiBJZ29NYXAgeyByZXR1cm4gdGhpcy5vcHRpb25zLm1hcDsgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBGZWF0dXJlV29ya3NwYWNlT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMubWFwLnZpZXdDb250cm9sbGVyLnJlc29sdXRpb24kLnN1YnNjcmliZSgobWFwUmVzb2x1dGlvbikgPT4ge1xuICAgICAgaWYgKG1hcFJlc29sdXRpb24gPiB0aGlzLmxheWVyLm1pblJlc29sdXRpb24gJiYgbWFwUmVzb2x1dGlvbiA8IHRoaXMubGF5ZXIubWF4UmVzb2x1dGlvbikge1xuICAgICAgICB0aGlzLmluUmVzb2x1dGlvblJhbmdlJC5uZXh0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pblJlc29sdXRpb25SYW5nZSQubmV4dChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGF5ZXJXa3NPcHRpb25UYWJRdWVyeSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5sYXllci5vcHRpb25zLndvcmtzcGFjZS5xdWVyeU9wdGlvbnM/LnRhYlF1ZXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyLm9wdGlvbnMud29ya3NwYWNlLnF1ZXJ5T3B0aW9ucy50YWJRdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGF5ZXJXa3NPcHRpb25NYXBRdWVyeSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5sYXllci5vcHRpb25zLndvcmtzcGFjZS5xdWVyeU9wdGlvbnM/Lm1hcFF1ZXJ5T25PcGVuVGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyLm9wdGlvbnMud29ya3NwYWNlLnF1ZXJ5T3B0aW9ucy5tYXBRdWVyeU9uT3BlblRhYjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldEluUmVzb2x1dGlvblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluUmVzb2x1dGlvblJhbmdlJC52YWx1ZTtcbiAgfVxufVxuIl19