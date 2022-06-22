import { EntityStore } from '../../entity';
import { BehaviorSubject } from 'rxjs';
/**
 * The class is a specialized version of an EntityStore that stores
 * workspaces.
 */
export class WorkspaceStore extends EntityStore {
    constructor() {
        super(...arguments);
        this.activeWorkspace$ = new BehaviorSubject(undefined);
    }
    /**
     * Activate the an workspace workspace and deactivate the one currently active
     * @param workspace Workspace
     */
    activateWorkspace(workspace) {
        const active = this.activeWorkspace$.value;
        if (active !== undefined) {
            active.deactivate();
        }
        this.deactivateWorkspace();
        if (workspace !== undefined) {
            this.state.update(workspace, { active: true, selected: true }, true);
            this.activeWorkspace$.next(workspace);
            workspace.activate();
        }
    }
    /**
     * Deactivate the current workspace
     * @param workspace Workspace
     */
    deactivateWorkspace() {
        const active = this.activeWorkspace$.value;
        if (active !== undefined) {
            active.deactivate();
            this.activeWorkspace$.next(undefined);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xpYi93b3Jrc3BhY2Uvc2hhcmVkL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2Qzs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQXNCO0lBQTFEOztRQUVFLHFCQUFnQixHQUErQixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQWdDaEYsQ0FBQztJQTlCQzs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxTQUFvQjtRQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUJBQW1CO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RvcmUgfSBmcm9tICcuLi8uLi9lbnRpdHknO1xuaW1wb3J0IHsgV29ya3NwYWNlIH0gZnJvbSAnLi93b3Jrc3BhY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogVGhlIGNsYXNzIGlzIGEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBhbiBFbnRpdHlTdG9yZSB0aGF0IHN0b3Jlc1xuICogd29ya3NwYWNlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVN0b3JlIGV4dGVuZHMgRW50aXR5U3RvcmU8V29ya3NwYWNlPiB7XG5cbiAgYWN0aXZlV29ya3NwYWNlJDogQmVoYXZpb3JTdWJqZWN0PFdvcmtzcGFjZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIHRoZSBhbiB3b3Jrc3BhY2Ugd29ya3NwYWNlIGFuZCBkZWFjdGl2YXRlIHRoZSBvbmUgY3VycmVudGx5IGFjdGl2ZVxuICAgKiBAcGFyYW0gd29ya3NwYWNlIFdvcmtzcGFjZVxuICAgKi9cbiAgYWN0aXZhdGVXb3Jrc3BhY2Uod29ya3NwYWNlOiBXb3Jrc3BhY2UpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVdvcmtzcGFjZSQudmFsdWU7XG4gICAgaWYgKGFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmUuZGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVhY3RpdmF0ZVdvcmtzcGFjZSgpO1xuICAgIGlmICh3b3Jrc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZS51cGRhdGUod29ya3NwYWNlLCB7YWN0aXZlOiB0cnVlLCBzZWxlY3RlZDogdHJ1ZX0sIHRydWUpO1xuICAgICAgdGhpcy5hY3RpdmVXb3Jrc3BhY2UkLm5leHQod29ya3NwYWNlKTtcbiAgICAgIHdvcmtzcGFjZS5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlIHRoZSBjdXJyZW50IHdvcmtzcGFjZVxuICAgKiBAcGFyYW0gd29ya3NwYWNlIFdvcmtzcGFjZVxuICAgKi9cbiAgZGVhY3RpdmF0ZVdvcmtzcGFjZSgpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZVdvcmtzcGFjZSQudmFsdWU7XG4gICAgaWYgKGFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmUuZGVhY3RpdmF0ZSgpO1xuICAgICAgdGhpcy5hY3RpdmVXb3Jrc3BhY2UkLm5leHQodW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxufVxuIl19