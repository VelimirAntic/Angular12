import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObjectUtils } from '@igo2/utils';
export class TableDataSource extends DataSource {
    constructor(_database, _model, _sort) {
        super();
        this._database = _database;
        this._model = _model;
        this._sort = _sort;
        this._filterChange = new BehaviorSubject('');
    }
    get filter() {
        return this._filterChange.value;
    }
    set filter(filter) {
        this._filterChange.next(filter);
    }
    // Connect function called by the table to retrieve one stream containing
    // the data to render.
    connect() {
        if (!this._database) {
            return merge([]);
        }
        const displayDataChanges = [
            this._database.dataChange,
            this._filterChange,
            this._sort.sortChange
        ];
        return merge(...displayDataChanges).pipe(map(() => {
            return this.getFilteredData(this._database.data);
        }), map(data => {
            return this.getSortedData(data);
        }));
    }
    disconnect() { }
    getFilteredData(data) {
        if (!this.filter) {
            return data;
        }
        return data.slice().filter((item) => {
            const searchStr = this._model.columns
                .filter(c => c.filterable)
                .map(c => ObjectUtils.resolve(item, c.name))
                .join(' ')
                .toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
    }
    getSortedData(data) {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            const propertyA = ObjectUtils.resolve(a, this._sort.active);
            const propertyB = ObjectUtils.resolve(b, this._sort.active);
            return ObjectUtils.naturalCompare(propertyB, propertyA, this._sort.direction);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvbGliL3RhYmxlL3RhYmxlLWRhdGFzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2hELE9BQU8sRUFBYyxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSTFDLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQWU7SUFTbEQsWUFDVSxTQUF3QixFQUN4QixNQUFrQixFQUNsQixLQUFjO1FBRXRCLEtBQUssRUFBRSxDQUFDO1FBSkEsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVM7UUFMaEIsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQVFoRCxDQUFDO0lBZEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBV0QseUVBQXlFO0lBQ3pFLHNCQUFzQjtJQUN0QixPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEI7UUFDRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUN6QixJQUFJLENBQUMsYUFBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7U0FDdEIsQ0FBQztRQUVGLE9BQU8sS0FBSyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQ3RDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztJQUVmLGVBQWUsQ0FBQyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUN2QyxNQUFNLFNBQVMsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87aUJBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7aUJBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDVCxXQUFXLEVBQUUsQ0FBQztZQUVqQixPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixNQUFNLFNBQVMsR0FBb0IsV0FBVyxDQUFDLE9BQU8sQ0FDcEQsQ0FBQyxFQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNsQixDQUFDO1lBQ0YsTUFBTSxTQUFTLEdBQW9CLFdBQVcsQ0FBQyxPQUFPLENBQ3BELENBQUMsRUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDbEIsQ0FBQztZQUVGLE9BQU8sV0FBVyxDQUFDLGNBQWMsQ0FDL0IsU0FBUyxFQUNULFNBQVMsRUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JqZWN0VXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IFRhYmxlRGF0YWJhc2UsIFRhYmxlTW9kZWwgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIFRhYmxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8YW55PiB7XG4gIGdldCBmaWx0ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyQ2hhbmdlLnZhbHVlO1xuICB9XG4gIHNldCBmaWx0ZXIoZmlsdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2UubmV4dChmaWx0ZXIpO1xuICB9XG4gIHByaXZhdGUgX2ZpbHRlckNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGFiYXNlOiBUYWJsZURhdGFiYXNlLFxuICAgIHByaXZhdGUgX21vZGVsOiBUYWJsZU1vZGVsLFxuICAgIHByaXZhdGUgX3NvcnQ6IE1hdFNvcnRcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmdcbiAgLy8gdGhlIGRhdGEgdG8gcmVuZGVyLlxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBpZiAoIXRoaXMuX2RhdGFiYXNlKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoW10pO1xuICAgIH1cbiAgICBjb25zdCBkaXNwbGF5RGF0YUNoYW5nZXMgPSBbXG4gICAgICB0aGlzLl9kYXRhYmFzZS5kYXRhQ2hhbmdlLFxuICAgICAgdGhpcy5fZmlsdGVyQ2hhbmdlLFxuICAgICAgdGhpcy5fc29ydC5zb3J0Q2hhbmdlXG4gICAgXTtcblxuICAgIHJldHVybiBtZXJnZSguLi5kaXNwbGF5RGF0YUNoYW5nZXMpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWx0ZXJlZERhdGEodGhpcy5fZGF0YWJhc2UuZGF0YSk7XG4gICAgICB9KSxcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U29ydGVkRGF0YShkYXRhKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxuXG4gIGdldEZpbHRlcmVkRGF0YShkYXRhKTogYW55W10ge1xuICAgIGlmICghdGhpcy5maWx0ZXIpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5zbGljZSgpLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hTdHI6IHN0cmluZyA9IHRoaXMuX21vZGVsLmNvbHVtbnNcbiAgICAgICAgLmZpbHRlcihjID0+IGMuZmlsdGVyYWJsZSlcbiAgICAgICAgLm1hcChjID0+IE9iamVjdFV0aWxzLnJlc29sdmUoaXRlbSwgYy5uYW1lKSlcbiAgICAgICAgLmpvaW4oJyAnKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuICAgICAgcmV0dXJuIHNlYXJjaFN0ci5pbmRleE9mKHRoaXMuZmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNvcnRlZERhdGEoZGF0YSk6IGFueVtdIHtcbiAgICBpZiAoIXRoaXMuX3NvcnQuYWN0aXZlIHx8IHRoaXMuX3NvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlBOiBudW1iZXIgfCBzdHJpbmcgPSBPYmplY3RVdGlscy5yZXNvbHZlKFxuICAgICAgICBhLFxuICAgICAgICB0aGlzLl9zb3J0LmFjdGl2ZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb3BlcnR5QjogbnVtYmVyIHwgc3RyaW5nID0gT2JqZWN0VXRpbHMucmVzb2x2ZShcbiAgICAgICAgYixcbiAgICAgICAgdGhpcy5fc29ydC5hY3RpdmVcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBPYmplY3RVdGlscy5uYXR1cmFsQ29tcGFyZShcbiAgICAgICAgcHJvcGVydHlCLFxuICAgICAgICBwcm9wZXJ0eUEsXG4gICAgICAgIHRoaXMuX3NvcnQuZGlyZWN0aW9uXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=