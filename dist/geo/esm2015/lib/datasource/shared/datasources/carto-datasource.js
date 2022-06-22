import olSourceCarto from 'ol/source/CartoDB';
import { DataSource } from './datasource';
import { QueryHtmlTarget } from '../../../query/shared/query.enums';
export class CartoDataSource extends DataSource {
    get params() {
        return this.options.params;
    }
    get queryTitle() {
        return this.options.queryTitle
            ? this.options.queryTitle
            : 'title';
    }
    get mapLabel() {
        return this.options.mapLabel;
    }
    get queryHtmlTarget() {
        return this.options.queryHtmlTarget
            ? this.options.queryHtmlTarget
            : QueryHtmlTarget.BLANK;
    }
    createOlSource() {
        const crossOrigin = this.options.crossOrigin
            ? this.options.crossOrigin
            : 'anonymous';
        const sourceOptions = Object.assign({
            crossOrigin
        }, this.options);
        return new olSourceCarto(sourceOptions);
    }
    getLegend() {
        const legend = super.getLegend();
        if (legend.length > 0) {
            return legend;
        }
        let htmlString = '<table>';
        if (this.options.config.layers[0].legend !== null) {
            this.options.config.layers[0].legend.items.forEach(f => {
                if (f.visible === true) {
                    htmlString +=
                        '<tr><td>' +
                            '<p><font size="5" color="' +
                            f.value +
                            '"> &#9679</font></p></td>' +
                            '<td>' +
                            f.name +
                            '</td></tr>';
                }
            });
            htmlString += '</table>';
            return [{ html: htmlString }];
        }
        else {
            // Try to build the legend from the cartocss options
            const layerOptions = this.options.config.layers[0].options;
            // All available cartocss style options
            const types = [
                'polygon-fill:',
                'marker-fill:',
                'shield-fill:',
                'building-fill:',
                'line-color:'
            ];
            for (const oneType of types) {
                if (layerOptions.cartocss.includes(oneType)) {
                    const type = layerOptions.cartocss.split(oneType).pop();
                    const color = type.substr(0, type.indexOf(';'));
                    if (color.includes('ramp')) {
                        const colors = color.split(', (')[1].split(',');
                        const data = color.split(', (')[2].split(',');
                        for (let j = 0; j < colors.length; j++) {
                            colors[j] = colors[j].replace(/("|\))/g, '');
                            data[j] = data[j].replace(/("|\))/g, '');
                            if (data[j].replace(/\s+/g, '') === '=') {
                                data[j] = 'Autres';
                            }
                            htmlString +=
                                '<tr><td>' +
                                    '<p><font size="5" color="' +
                                    colors[j] +
                                    '"> &#9679</font></p></td>' +
                                    '<td>' +
                                    data[j] +
                                    '</td></tr>';
                        }
                        break;
                    }
                    else {
                        const title = layerOptions.layer_name
                            ? layerOptions.layer_name
                            : '';
                        htmlString +=
                            '<tr><td>' +
                                '<p><font size="5" color="' +
                                color +
                                '"> &#9679</font></p>' +
                                '</td><td>' +
                                title +
                                '</td></tr>';
                        break;
                    }
                }
            }
            htmlString += '</table>';
            return [{ html: htmlString }];
        }
    }
    onUnwatch() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydG8tZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2RhdGFzb3VyY2Uvc2hhcmVkL2RhdGFzb3VyY2VzL2NhcnRvLWRhdGFzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxhQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUcxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUk3QyxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFRLElBQUksQ0FBQyxPQUFlLENBQUMsVUFBVTtZQUNyQyxDQUFDLENBQUUsSUFBSSxDQUFDLE9BQWUsQ0FBQyxVQUFVO1lBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBUSxJQUFJLENBQUMsT0FBZSxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQVEsSUFBSSxDQUFDLE9BQWUsQ0FBQyxlQUFlO1lBQzFDLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBZSxDQUFDLGVBQWU7WUFDdkMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVTLGNBQWM7UUFDdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDMUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoQixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNqQztZ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RyxRQUFRLENBQUM7NkJBQ3BCOzRCQUNELFVBQVU7Z0NBQ1IsVUFBVTtvQ0FDViwyQkFBMkI7b0NBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0NBQ1QsMkJBQTJCO29DQUMzQixNQUFNO29DQUNOLElBQUksQ0FBQyxDQUFDLENBQUM7b0NBQ1AsWUFBWSxDQUFDO3lCQUNoQjt3QkFDRCxNQUFNO3FCQUNQO3lCQUFNO3dCQUNMLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxVQUFVOzRCQUNuQyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVU7NEJBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ1AsVUFBVTs0QkFDUixVQUFVO2dDQUNWLDJCQUEyQjtnQ0FDM0IsS0FBSztnQ0FDTCxzQkFBc0I7Z0NBQ3RCLFdBQVc7Z0NBQ1gsS0FBSztnQ0FDTCxZQUFZLENBQUM7d0JBQ2YsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1lBQ0QsVUFBVSxJQUFJLFVBQVUsQ0FBQztZQUN6QixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFTSxTQUFTLEtBQUksQ0FBQztDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbFNvdXJjZUNhcnRvIGZyb20gJ29sL3NvdXJjZS9DYXJ0b0RCJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBMZWdlbmQgfSBmcm9tICcuL2RhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhcnRvRGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL2NhcnRvLWRhdGFzb3VyY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IFF1ZXJ5SHRtbFRhcmdldCB9IGZyb20gJy4uLy4uLy4uL3F1ZXJ5L3NoYXJlZC9xdWVyeS5lbnVtcyc7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0b0RhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIG9sOiBvbFNvdXJjZUNhcnRvO1xuICBwdWJsaWMgb3B0aW9uczogQ2FydG9EYXRhU291cmNlT3B0aW9ucztcblxuICBnZXQgcGFyYW1zKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wYXJhbXMgYXMgYW55O1xuICB9XG5cbiAgZ2V0IHF1ZXJ5VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMub3B0aW9ucyBhcyBhbnkpLnF1ZXJ5VGl0bGVcbiAgICAgID8gKHRoaXMub3B0aW9ucyBhcyBhbnkpLnF1ZXJ5VGl0bGVcbiAgICAgIDogJ3RpdGxlJztcbiAgfVxuXG4gIGdldCBtYXBMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zIGFzIGFueSkubWFwTGFiZWw7XG4gIH1cblxuICBnZXQgcXVlcnlIdG1sVGFyZ2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMgYXMgYW55KS5xdWVyeUh0bWxUYXJnZXRcbiAgICAgID8gKHRoaXMub3B0aW9ucyBhcyBhbnkpLnF1ZXJ5SHRtbFRhcmdldFxuICAgICAgOiBRdWVyeUh0bWxUYXJnZXQuQkxBTks7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlT2xTb3VyY2UoKTogb2xTb3VyY2VDYXJ0byB7XG4gICAgY29uc3QgY3Jvc3NPcmlnaW4gPSB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW5cbiAgICAgID8gdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luXG4gICAgICA6ICdhbm9ueW1vdXMnO1xuICAgIGNvbnN0IHNvdXJjZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBjcm9zc09yaWdpblxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIG5ldyBvbFNvdXJjZUNhcnRvKHNvdXJjZU9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0TGVnZW5kKCk6IExlZ2VuZFtdIHtcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoKTtcbiAgICBpZiAobGVnZW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBsZWdlbmQ7XG4gICAgfVxuXG4gICAgbGV0IGh0bWxTdHJpbmcgPSAnPHRhYmxlPic7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb25maWcubGF5ZXJzWzBdLmxlZ2VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zLmNvbmZpZy5sYXllcnNbMF0ubGVnZW5kLml0ZW1zLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGlmIChmLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICBodG1sU3RyaW5nICs9XG4gICAgICAgICAgICAnPHRyPjx0ZD4nICtcbiAgICAgICAgICAgICc8cD48Zm9udCBzaXplPVwiNVwiIGNvbG9yPVwiJyArXG4gICAgICAgICAgICBmLnZhbHVlICtcbiAgICAgICAgICAgICdcIj4gJiM5Njc5PC9mb250PjwvcD48L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICtcbiAgICAgICAgICAgIGYubmFtZSArXG4gICAgICAgICAgICAnPC90ZD48L3RyPic7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaHRtbFN0cmluZyArPSAnPC90YWJsZT4nO1xuICAgICAgcmV0dXJuIFt7IGh0bWw6IGh0bWxTdHJpbmcgfV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSB0byBidWlsZCB0aGUgbGVnZW5kIGZyb20gdGhlIGNhcnRvY3NzIG9wdGlvbnNcbiAgICAgIGNvbnN0IGxheWVyT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5jb25maWcubGF5ZXJzWzBdLm9wdGlvbnM7XG4gICAgICAvLyBBbGwgYXZhaWxhYmxlIGNhcnRvY3NzIHN0eWxlIG9wdGlvbnNcbiAgICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgICAncG9seWdvbi1maWxsOicsXG4gICAgICAgICdtYXJrZXItZmlsbDonLFxuICAgICAgICAnc2hpZWxkLWZpbGw6JyxcbiAgICAgICAgJ2J1aWxkaW5nLWZpbGw6JyxcbiAgICAgICAgJ2xpbmUtY29sb3I6J1xuICAgICAgXTtcbiAgICAgIGZvciAoY29uc3Qgb25lVHlwZSBvZiB0eXBlcykge1xuICAgICAgICBpZiAobGF5ZXJPcHRpb25zLmNhcnRvY3NzLmluY2x1ZGVzKG9uZVR5cGUpKSB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IGxheWVyT3B0aW9ucy5jYXJ0b2Nzcy5zcGxpdChvbmVUeXBlKS5wb3AoKTtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHR5cGUuc3Vic3RyKDAsIHR5cGUuaW5kZXhPZignOycpKTtcbiAgICAgICAgICBpZiAoY29sb3IuaW5jbHVkZXMoJ3JhbXAnKSkge1xuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gY29sb3Iuc3BsaXQoJywgKCcpWzFdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY29sb3Iuc3BsaXQoJywgKCcpWzJdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBjb2xvcnNbal0gPSBjb2xvcnNbal0ucmVwbGFjZSgvKFwifFxcKSkvZywgJycpO1xuICAgICAgICAgICAgICBkYXRhW2pdID0gZGF0YVtqXS5yZXBsYWNlKC8oXCJ8XFwpKS9nLCAnJyk7XG4gICAgICAgICAgICAgIGlmIChkYXRhW2pdLnJlcGxhY2UoL1xccysvZywgJycpID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICBkYXRhW2pdID0gJ0F1dHJlcyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaHRtbFN0cmluZyArPVxuICAgICAgICAgICAgICAgICc8dHI+PHRkPicgK1xuICAgICAgICAgICAgICAgICc8cD48Zm9udCBzaXplPVwiNVwiIGNvbG9yPVwiJyArXG4gICAgICAgICAgICAgICAgY29sb3JzW2pdICtcbiAgICAgICAgICAgICAgICAnXCI+ICYjOTY3OTwvZm9udD48L3A+PC90ZD4nICtcbiAgICAgICAgICAgICAgICAnPHRkPicgK1xuICAgICAgICAgICAgICAgIGRhdGFbal0gK1xuICAgICAgICAgICAgICAgICc8L3RkPjwvdHI+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGxheWVyT3B0aW9ucy5sYXllcl9uYW1lXG4gICAgICAgICAgICAgID8gbGF5ZXJPcHRpb25zLmxheWVyX25hbWVcbiAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIGh0bWxTdHJpbmcgKz1cbiAgICAgICAgICAgICAgJzx0cj48dGQ+JyArXG4gICAgICAgICAgICAgICc8cD48Zm9udCBzaXplPVwiNVwiIGNvbG9yPVwiJyArXG4gICAgICAgICAgICAgIGNvbG9yICtcbiAgICAgICAgICAgICAgJ1wiPiAmIzk2Nzk8L2ZvbnQ+PC9wPicgK1xuICAgICAgICAgICAgICAnPC90ZD48dGQ+JyArXG4gICAgICAgICAgICAgIHRpdGxlICtcbiAgICAgICAgICAgICAgJzwvdGQ+PC90cj4nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBodG1sU3RyaW5nICs9ICc8L3RhYmxlPic7XG4gICAgICByZXR1cm4gW3sgaHRtbDogaHRtbFN0cmluZyB9XTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25VbndhdGNoKCkge31cbn1cbiJdfQ==