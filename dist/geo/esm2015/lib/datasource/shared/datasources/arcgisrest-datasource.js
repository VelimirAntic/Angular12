import olSourceVector from 'ol/source/Vector';
import olFormatEsriJSON from 'ol/format/EsriJSON';
import * as olloadingstrategy from 'ol/loadingstrategy';
import { DataSource } from './datasource';
export class ArcGISRestDataSource extends DataSource {
    createOlSource() {
        const esrijsonFormat = new olFormatEsriJSON();
        return new olSourceVector({
            attributions: this.options.params.attributions,
            overlaps: false,
            format: esrijsonFormat,
            url: function (extent, resolution, proj) {
                const baseUrl = this.options.url + '/' + this.options.layer + '/query/';
                const geometry = encodeURIComponent('{"xmin":' +
                    extent[0] +
                    ',"ymin":' +
                    extent[1] +
                    ',"xmax":' +
                    extent[2] +
                    ',"ymax":' +
                    extent[3] +
                    ',"spatialReference":{"wkid":102100}}');
                const params = [
                    'f=json',
                    `geometry=${geometry}`,
                    'geometryType=esriGeometryEnvelope',
                    'inSR=102100',
                    'spatialRel=esriSpatialRelIntersects',
                    'outFields=*',
                    'returnGeometry=true',
                    'outSR=102100'
                ];
                if (this.options.params.time) {
                    const time = `time=${this.options.params.time}`;
                    params.push(time);
                }
                if (this.options.params.customParams) {
                    this.options.params.customParams.forEach(element => {
                        params.push(element);
                    });
                }
                return `${baseUrl}?${params.join('&')}`;
            }.bind(this),
            strategy: olloadingstrategy.bbox
        });
    }
    getLegend() {
        const legendInfo = this.options.legendInfo;
        const legend = super.getLegend();
        if (legendInfo === undefined || legend.length > 0) {
            return legend;
        }
        if (!legendInfo) {
            return;
        }
        let htmlString = '<table>';
        let src;
        let label;
        let svg;
        if (legendInfo.legend) {
            for (const legendElement of legendInfo.legend) {
                src = this.htmlImgSrc(legendElement.contentType, legendElement.imageData);
                label = legendElement.label ? legendElement.label.replace('<Null>', 'Null') : '';
                htmlString +=
                    `<tr><td align='left'><img src="` +
                        src +
                        `" alt ='' /></td><td class="mat-typography">` +
                        label +
                        '</td></tr>';
            }
        }
        else if (legendInfo.type === "uniqueValue") {
            for (const legendElement of legendInfo.uniqueValueInfos) {
                label = legendElement.label.replace('<Null>', 'Null');
                if (legendElement.symbol.type === 'esriPMS') {
                    src = this.htmlImgSrc(legendElement.symbol.contentType, legendElement.symbol.imageData);
                    htmlString +=
                        `<tr><td align='left'><img src="` +
                            src +
                            `" alt ='' /></td><td class="mat-typography">` +
                            label +
                            '</td></tr>';
                }
                else if (legendElement.symbol.type !== 'esriPMS') {
                    svg = this.createSVG(legendElement.symbol);
                    htmlString += `<tr><td align='left'>` + svg + `</td><td class="mat-typography">` + label + '</td></tr>';
                }
            }
        }
        else if (legendInfo.type === "simple") {
            label = legendInfo.label ? legendInfo.label.replace('<Null>', 'Null') : '';
            if (legendInfo.symbol.type === 'esriPMS') {
                src = this.htmlImgSrc(legendInfo.symbol.contentType, legendInfo.symbol.imageData);
                htmlString +=
                    `<tr><td align='left'><img src="` +
                        src +
                        `" alt ='' /></td><td class="mat-typography">` +
                        label +
                        '</td></tr>';
            }
            else if (legendInfo.symbol.type !== 'esriPMS') {
                svg = this.createSVG(legendInfo.symbol);
                htmlString += `<tr><td align='left'>` + svg + `</td><td class="mat-typography">` + label + '</td></tr>';
            }
        }
        htmlString += '</table>';
        return [{ html: htmlString }];
    }
    htmlImgSrc(contentType, imageData) {
        return `data:${contentType};base64,${imageData}`;
    }
    createSVG(symbol) {
        let svg = '';
        const color = symbol.color ? symbol.color : [0, 0, 0, 0];
        if (symbol.type === 'esriSLS') {
            const width = symbol.width ? symbol.width : 0;
            const stroke = `stroke:rgba(` + color[0] + ',' + color[1] + ',' + color[2] + ',' + color[3] + ')';
            const strokeWidth = `stroke-width:` + width;
            if (symbol.style === 'esriSLSSolid') {
                svg = `<svg height="30" width="30"><line x1="0" y1="15" x2="30" y2="15" style="` + stroke + ';' + strokeWidth + `"/></svg>`;
            }
            else if (symbol.style === 'esriSLSDash') {
                const strokeDashArray = `stroke-dasharray="5,5"`;
                svg = `<svg height="30" width="30"><line x1="0" y1="15" x2="30" y2="15" style="` + stroke + ';' + strokeWidth + `" ` + strokeDashArray + `/></svg>`;
            }
        }
        else if (symbol.style === 'esriSMSCircle' || symbol.style === 'esriSFSSolid') {
            const outlineColor = symbol.outline.color;
            const outlineWidth = symbol.outline.width;
            const size = symbol.size;
            const stroke = `stroke:rgba(` + outlineColor[0] + ',' + outlineColor[1] + ',' + outlineColor[2] + ',' + outlineColor[3] + ')';
            const strokeWidth = `stroke-width:` + outlineWidth;
            const fill = `fill:rgba(` + color[0] + ',' + color[1] + ',' + color[2] + ',' + color[3] + ')';
            if (symbol.style === 'esriSMSCircle') {
                svg = `<svg height="30" width="30"><circle cx="15" cy="15" r="` + size / 2 + `" style="` + stroke + ';' + strokeWidth + ';' + fill + `"/></svg>`;
            }
            else {
                svg = `<svg height="30" width="30"><rect x="5" y="5" width="20" height="20" style ="` + stroke + ';' + strokeWidth + ';' + fill + `"/></svg>`;
            }
        }
        return svg;
    }
    onUnwatch() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjZ2lzcmVzdC1kYXRhc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvZGF0YXNvdXJjZS9zaGFyZWQvZGF0YXNvdXJjZXMvYXJjZ2lzcmVzdC1kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sY0FBYyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sZ0JBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxLQUFLLGlCQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBR3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJMUMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFJeEMsY0FBYztRQUN0QixNQUFNLGNBQWMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDOUMsT0FBTyxJQUFJLGNBQWMsQ0FBQztZQUN4QixZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUM5QyxRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLEdBQUcsRUFBRSxVQUFTLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSTtnQkFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDeEUsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQ2pDLFVBQVU7b0JBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDVCxVQUFVO29CQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1QsVUFBVTtvQkFDVixNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNULFVBQVU7b0JBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDVCxzQ0FBc0MsQ0FDekMsQ0FBQztn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ZWN0b3IgZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5pbXBvcnQgb2xGb3JtYXRFc3JpSlNPTiBmcm9tICdvbC9mb3JtYXQvRXNyaUpTT04nO1xuaW1wb3J0ICogYXMgb2xsb2FkaW5nc3RyYXRlZ3kgZnJvbSAnb2wvbG9hZGluZ3N0cmF0ZWd5JztcbmltcG9ydCB0eXBlIHsgZGVmYXVsdCBhcyBPbEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTGVnZW5kIH0gZnJvbSAnLi9kYXRhc291cmNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBcmNHSVNSZXN0RGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL2FyY2dpc3Jlc3QtZGF0YXNvdXJjZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQXJjR0lTUmVzdERhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIG9sOiBvbFNvdXJjZVZlY3RvcjxPbEdlb21ldHJ5PjtcbiAgcHVibGljIG9wdGlvbnM6IEFyY0dJU1Jlc3REYXRhU291cmNlT3B0aW9ucztcblxuICBwcm90ZWN0ZWQgY3JlYXRlT2xTb3VyY2UoKTogb2xTb3VyY2VWZWN0b3I8T2xHZW9tZXRyeT4ge1xuICAgIGNvbnN0IGVzcmlqc29uRm9ybWF0ID0gbmV3IG9sRm9ybWF0RXNyaUpTT04oKTtcbiAgICByZXR1cm4gbmV3IG9sU291cmNlVmVjdG9yKHtcbiAgICAgIGF0dHJpYnV0aW9uczogdGhpcy5vcHRpb25zLnBhcmFtcy5hdHRyaWJ1dGlvbnMsXG4gICAgICBvdmVybGFwczogZmFsc2UsXG4gICAgICBmb3JtYXQ6IGVzcmlqc29uRm9ybWF0LFxuICAgICAgdXJsOiBmdW5jdGlvbihleHRlbnQsIHJlc29sdXRpb24sIHByb2opIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMub3B0aW9ucy51cmwgKyAnLycgKyB0aGlzLm9wdGlvbnMubGF5ZXIgKyAnL3F1ZXJ5Lyc7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICd7XCJ4bWluXCI6JyArXG4gICAgICAgICAgICBleHRlbnRbMF0gK1xuICAgICAgICAgICAgJyxcInltaW5cIjonICtcbiAgICAgICAgICAgIGV4dGVudFsxXSArXG4gICAgICAgICAgICAnLFwieG1heFwiOicgK1xuICAgICAgICAgICAgZXh0ZW50WzJdICtcbiAgICAgICAgICAgICcsXCJ5bWF4XCI6JyArXG4gICAgICAgICAgICBleHRlbnRbM10gK1xuICAgICAgICAgICAgJyxcInNwYXRpYWxSZWZlcmVuY2VcIjp7XCJ3a2lkXCI6MTAyMTAwfX0nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgICAnZj1qc29uJyxcbiAgICAgICAgICBgZ2VvbWV0cnk9JHtnZW9tZXRyeX1gLFxuICAgICAgICAgICdnZW9tZXRyeVR5cGU9ZXNyaUdlb21ldHJ5RW52ZWxvcGUnLFxuICAgICAgICAgICdpblNSPTEwMjEwMCcsXG4gICAgICAgICAgJ3NwYXRpYWxSZWw9ZXNyaVNwYXRpYWxSZWxJbnRlcnNlY3RzJyxcbiAgICAgICAgICAnb3V0RmllbGRzPSonLFxuICAgICAgICAgICdyZXR1cm5HZW9tZXRyeT10cnVlJyxcbiAgICAgICAgICAnb3V0U1I9MTAyMTAwJ1xuICAgICAgICBdO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmFtcy50aW1lKSB7XG4gICAgICAgICAgY29uc3QgdGltZSA9IGB0aW1lPSR7dGhpcy5vcHRpb25zLnBhcmFtcy50aW1lfWA7XG4gICAgICAgICAgcGFyYW1zLnB1c2godGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJhbXMuY3VzdG9tUGFyYW1zKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmFtcy5jdXN0b21QYXJhbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3BhcmFtcy5qb2luKCcmJyl9YDtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHN0cmF0ZWd5OiBvbGxvYWRpbmdzdHJhdGVneS5iYm94XG4gICAgfSk7XG4gIH1cblxuICBnZXRMZWdlbmQoKTogTGVnZW5kW10ge1xuICAgIGNvbnN0IGxlZ2VuZEluZm8gPSB0aGlzLm9wdGlvbnMubGVnZW5kSW5mbztcbiAgICBjb25zdCBsZWdlbmQgPSBzdXBlci5nZXRMZWdlbmQoKTtcbiAgICBpZiAobGVnZW5kSW5mbyA9PT0gdW5kZWZpbmVkIHx8IGxlZ2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbGVnZW5kO1xuICAgIH1cbiAgICBpZiAoIWxlZ2VuZEluZm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGh0bWxTdHJpbmcgPSAnPHRhYmxlPic7XG4gICAgbGV0IHNyYzogc3RyaW5nO1xuICAgIGxldCBsYWJlbDogc3RyaW5nO1xuICAgIGxldCBzdmc6IHN0cmluZztcblxuICAgIGlmIChsZWdlbmRJbmZvLmxlZ2VuZCkge1xuICAgICAgZm9yIChjb25zdCBsZWdlbmRFbGVtZW50IG9mIGxlZ2VuZEluZm8ubGVnZW5kKSB7XG4gICAgICAgIHNyYyA9IHRoaXMuaHRtbEltZ1NyYyhsZWdlbmRFbGVtZW50LmNvbnRlbnRUeXBlLCBsZWdlbmRFbGVtZW50LmltYWdlRGF0YSk7XG4gICAgICAgIGxhYmVsID0gbGVnZW5kRWxlbWVudC5sYWJlbCA/IGxlZ2VuZEVsZW1lbnQubGFiZWwucmVwbGFjZSgnPE51bGw+JywgJ051bGwnKSA6ICcnO1xuICAgICAgICBodG1sU3RyaW5nICs9XG4gICAgICAgICAgYDx0cj48dGQgYWxpZ249J2xlZnQnPjxpbWcgc3JjPVwiYCArXG4gICAgICAgICAgc3JjICtcbiAgICAgICAgICBgXCIgYWx0ID0nJyAvPjwvdGQ+PHRkIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5gICtcbiAgICAgICAgICBsYWJlbCArXG4gICAgICAgICAgJzwvdGQ+PC90cj4nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGVnZW5kSW5mby50eXBlID09PSBcInVuaXF1ZVZhbHVlXCIpIHtcbiAgICAgIGZvciAoY29uc3QgbGVnZW5kRWxlbWVudCBvZiBsZWdlbmRJbmZvLnVuaXF1ZVZhbHVlSW5mb3MpIHtcbiAgICAgICAgbGFiZWwgPSBsZWdlbmRFbGVtZW50LmxhYmVsLnJlcGxhY2UoJzxOdWxsPicsICdOdWxsJyk7XG4gICAgICAgIGlmIChsZWdlbmRFbGVtZW50LnN5bWJvbC50eXBlID09PSAnZXNyaVBNUycpIHtcbiAgICAgICAgICBzcmMgPSB0aGlzLmh0bWxJbWdTcmMobGVnZW5kRWxlbWVudC5zeW1ib2wuY29udGVudFR5cGUsIGxlZ2VuZEVsZW1lbnQuc3ltYm9sLmltYWdlRGF0YSk7XG4gICAgICAgICAgaHRtbFN0cmluZyArPVxuICAgICAgICAgICAgYDx0cj48dGQgYWxpZ249J2xlZnQnPjxpbWcgc3JjPVwiYCArXG4gICAgICAgICAgICBzcmMgK1xuICAgICAgICAgICAgYFwiIGFsdCA9JycgLz48L3RkPjx0ZCBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+YCArXG4gICAgICAgICAgICBsYWJlbCArXG4gICAgICAgICAgICAnPC90ZD48L3RyPic7XG4gICAgICAgIH0gZWxzZSBpZiAobGVnZW5kRWxlbWVudC5zeW1ib2wudHlwZSAhPT0gJ2VzcmlQTVMnKSB7XG4gICAgICAgICAgc3ZnID0gdGhpcy5jcmVhdGVTVkcobGVnZW5kRWxlbWVudC5zeW1ib2wpO1xuICAgICAgICAgIGh0bWxTdHJpbmcgKz0gYDx0cj48dGQgYWxpZ249J2xlZnQnPmAgKyBzdmcgKyBgPC90ZD48dGQgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPmAgKyBsYWJlbCArICc8L3RkPjwvdHI+JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGVnZW5kSW5mby50eXBlID09PSBcInNpbXBsZVwiKSB7XG4gICAgICBsYWJlbCA9IGxlZ2VuZEluZm8ubGFiZWwgPyBsZWdlbmRJbmZvLmxhYmVsLnJlcGxhY2UoJzxOdWxsPicsICdOdWxsJykgOiAnJztcbiAgICAgIGlmIChsZWdlbmRJbmZvLnN5bWJvbC50eXBlID09PSAnZXNyaVBNUycpIHtcbiAgICAgICAgc3JjID0gdGhpcy5odG1sSW1nU3JjKGxlZ2VuZEluZm8uc3ltYm9sLmNvbnRlbnRUeXBlLCBsZWdlbmRJbmZvLnN5bWJvbC5pbWFnZURhdGEpO1xuICAgICAgICBodG1sU3RyaW5nICs9XG4gICAgICAgICAgYDx0cj48dGQgYWxpZ249J2xlZnQnPjxpbWcgc3JjPVwiYCArXG4gICAgICAgICAgc3JjICtcbiAgICAgICAgICBgXCIgYWx0ID0nJyAvPjwvdGQ+PHRkIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5gICtcbiAgICAgICAgICBsYWJlbCArXG4gICAgICAgICAgJzwvdGQ+PC90cj4nO1xuICAgICAgfSBlbHNlIGlmIChsZWdlbmRJbmZvLnN5bWJvbC50eXBlICE9PSAnZXNyaVBNUycpIHtcbiAgICAgICAgc3ZnID0gdGhpcy5jcmVhdGVTVkcobGVnZW5kSW5mby5zeW1ib2wpO1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8dHI+PHRkIGFsaWduPSdsZWZ0Jz5gICsgc3ZnICsgYDwvdGQ+PHRkIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5gICsgbGFiZWwgKyAnPC90ZD48L3RyPic7XG4gICAgICB9XG4gICAgfVxuICAgIGh0bWxTdHJpbmcgKz0gJzwvdGFibGU+JztcbiAgICByZXR1cm4gW3sgaHRtbDogaHRtbFN0cmluZyB9XTtcbiAgfVxuXG4gIGh0bWxJbWdTcmMoY29udGVudFR5cGU6IHN0cmluZywgaW1hZ2VEYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgZGF0YToke2NvbnRlbnRUeXBlfTtiYXNlNjQsJHtpbWFnZURhdGF9YDtcbiAgfVxuXG4gIGNyZWF0ZVNWRyhzeW1ib2wpOiBzdHJpbmcge1xuICAgIGxldCBzdmc6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3QgY29sb3I6IEFycmF5PG51bWJlcj4gPSBzeW1ib2wuY29sb3IgPyBzeW1ib2wuY29sb3IgOiBbMCwgMCwgMCwgMF07XG5cbiAgICBpZiAoc3ltYm9sLnR5cGUgPT09ICdlc3JpU0xTJykge1xuICAgICAgY29uc3Qgd2lkdGg6IG51bWJlciA9IHN5bWJvbC53aWR0aCA/IHN5bWJvbC53aWR0aCA6IDA7XG5cbiAgICAgIGNvbnN0IHN0cm9rZTogc3RyaW5nID0gYHN0cm9rZTpyZ2JhKGAgKyBjb2xvclswXSArICcsJyArIGNvbG9yWzFdICsgJywnICsgY29sb3JbMl0gKyAnLCcgKyBjb2xvclszXSArICcpJztcbiAgICAgIGNvbnN0IHN0cm9rZVdpZHRoOiBzdHJpbmcgPSBgc3Ryb2tlLXdpZHRoOmAgKyB3aWR0aDtcblxuICAgICAgaWYgKHN5bWJvbC5zdHlsZSA9PT0gJ2VzcmlTTFNTb2xpZCcpIHtcbiAgICAgICAgc3ZnID0gYDxzdmcgaGVpZ2h0PVwiMzBcIiB3aWR0aD1cIjMwXCI+PGxpbmUgeDE9XCIwXCIgeTE9XCIxNVwiIHgyPVwiMzBcIiB5Mj1cIjE1XCIgc3R5bGU9XCJgICsgc3Ryb2tlICsgJzsnICsgc3Ryb2tlV2lkdGggKyBgXCIvPjwvc3ZnPmA7XG4gICAgICB9IGVsc2UgaWYgKHN5bWJvbC5zdHlsZSA9PT0gJ2VzcmlTTFNEYXNoJykge1xuICAgICAgICBjb25zdCBzdHJva2VEYXNoQXJyYXk6IHN0cmluZyA9IGBzdHJva2UtZGFzaGFycmF5PVwiNSw1XCJgO1xuICAgICAgICBzdmcgPSBgPHN2ZyBoZWlnaHQ9XCIzMFwiIHdpZHRoPVwiMzBcIj48bGluZSB4MT1cIjBcIiB5MT1cIjE1XCIgeDI9XCIzMFwiIHkyPVwiMTVcIiBzdHlsZT1cImAgKyBzdHJva2UgKyAnOycgKyBzdHJva2VXaWR0aCArIGBcIiBgKyBzdHJva2VEYXNoQXJyYXkgKyBgLz48L3N2Zz5gO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3ltYm9sLnN0eWxlID09PSAnZXNyaVNNU0NpcmNsZScgfHwgc3ltYm9sLnN0eWxlID09PSAnZXNyaVNGU1NvbGlkJykge1xuICAgICAgY29uc3Qgb3V0bGluZUNvbG9yID0gc3ltYm9sLm91dGxpbmUuY29sb3I7XG4gICAgICBjb25zdCBvdXRsaW5lV2lkdGggPSBzeW1ib2wub3V0bGluZS53aWR0aDtcbiAgICAgIGNvbnN0IHNpemUgPSBzeW1ib2wuc2l6ZTtcblxuICAgICAgY29uc3Qgc3Ryb2tlID0gYHN0cm9rZTpyZ2JhKGAgKyBvdXRsaW5lQ29sb3JbMF0gKyAnLCcgKyBvdXRsaW5lQ29sb3JbMV0gKyAnLCcgKyBvdXRsaW5lQ29sb3JbMl0gKyAnLCcgKyBvdXRsaW5lQ29sb3JbM10gKyAnKSc7XG4gICAgICBjb25zdCBzdHJva2VXaWR0aCA9IGBzdHJva2Utd2lkdGg6YCArIG91dGxpbmVXaWR0aDtcbiAgICAgIGNvbnN0IGZpbGwgPSBgZmlsbDpyZ2JhKGAgKyBjb2xvclswXSArICcsJyArIGNvbG9yWzFdICsgJywnICsgY29sb3JbMl0gKyAnLCcgKyBjb2xvclszXSArICcpJztcblxuICAgICAgaWYgKHN5bWJvbC5zdHlsZSA9PT0gJ2VzcmlTTVNDaXJjbGUnKSB7XG4gICAgICAgIHN2ZyA9IGA8c3ZnIGhlaWdodD1cIjMwXCIgd2lkdGg9XCIzMFwiPjxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiYCArIHNpemUvMiArIGBcIiBzdHlsZT1cImAgKyBzdHJva2UgKyAnOycgKyBzdHJva2VXaWR0aCArICc7JyArIGZpbGwgKyBgXCIvPjwvc3ZnPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdmcgPSBgPHN2ZyBoZWlnaHQ9XCIzMFwiIHdpZHRoPVwiMzBcIj48cmVjdCB4PVwiNVwiIHk9XCI1XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgc3R5bGUgPVwiYCArIHN0cm9rZSArICc7JyArIHN0cm9rZVdpZHRoICsgJzsnICsgZmlsbCArIGBcIi8+PC9zdmc+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHB1YmxpYyBvblVud2F0Y2goKSB7fVxufVxuIl19