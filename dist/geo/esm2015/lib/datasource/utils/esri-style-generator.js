import * as olstyle from 'ol/style';
import * as olproj from 'ol/proj';
export class EsriStyleGenerator {
    constructor() {
        this._converters = {};
        this._converters.esriPMS = EsriStyleGenerator._convertEsriPMS;
        this._converters.esriSFS = EsriStyleGenerator._convertEsriSFS;
        this._converters.esriSLS = EsriStyleGenerator._convertEsriSLS;
        this._converters.esriSMS = EsriStyleGenerator._convertEsriSMS;
        this._converters.esriTS = EsriStyleGenerator._convertEsriTS;
        this._renderers = {};
        this._renderers.uniqueValue = this._renderUniqueValue;
        this._renderers.simple = this._renderSimple;
        this._renderers.classBreaks = this._renderClassBreaks;
    }
    static _convertPointToPixel(point) {
        return point / 0.75;
    }
    static _transformColor(color) {
        // alpha channel is different, runs from 0-255 but in ol3 from 0-1
        return [color[0], color[1], color[2], color[3] / 255];
    }
    static _getResolutionForScale(scale, units) {
        const dpi = 96;
        const mpu = olproj.METERS_PER_UNIT[units];
        const inchesPerMeter = 39.3701;
        return parseFloat(scale) / (mpu * inchesPerMeter * dpi);
    }
    /* convert an Esri Text Symbol */
    static _convertEsriTS(symbol) {
        const rotation = EsriStyleGenerator._transformAngle(symbol.angle);
        const text = symbol.text !== undefined ? symbol.text : undefined;
        return new olstyle.Style({
            text: new olstyle.Text({
                fill: new olstyle.Fill({
                    color: EsriStyleGenerator._transformColor(symbol.color)
                }),
                font: symbol.font.style +
                    ' ' +
                    symbol.font.weight +
                    ' ' +
                    symbol.font.size +
                    ' px ' +
                    symbol.font.family,
                textBaseline: symbol.verticalAlignment,
                textAlign: symbol.horizontalAlignment,
                offsetX: EsriStyleGenerator._convertPointToPixel(symbol.xoffset),
                offsetY: EsriStyleGenerator._convertPointToPixel(symbol.yoffset),
                rotation,
                text
            })
        });
    }
    /* convert an Esri Picture Marker Symbol */
    static _convertEsriPMS(symbol) {
        const src = 'data:' + symbol.contentType + ';base64, ' + symbol.imageData;
        const rotation = EsriStyleGenerator._transformAngle(symbol.angle);
        return new olstyle.Style({
            image: new olstyle.Icon({
                src,
                rotation
            })
        });
    }
    /* convert an Esri Simple Fill Symbol */
    static _convertEsriSFS(symbol) {
        // there is no support in openlayers currently for fill patterns, so style is not interpreted
        const fill = new olstyle.Fill({
            color: EsriStyleGenerator._transformColor(symbol.color)
        });
        const stroke = symbol.outline
            ? EsriStyleGenerator._convertOutline(symbol.outline)
            : undefined;
        return new olstyle.Style({
            fill,
            stroke
        });
    }
    static _convertOutline(outline) {
        let lineDash;
        const color = EsriStyleGenerator._transformColor(outline.color);
        if (outline.style === 'esriSLSDash') {
            lineDash = [5];
        }
        else if (outline.style === 'esriSLSDashDot') {
            lineDash = [5, 5, 1, 2];
        }
        else if (outline.style === 'esriSLSDashDotDot') {
            lineDash = [5, 5, 1, 2, 1, 2];
        }
        else if (outline.style === 'esriSLSDot') {
            lineDash = [1, 2];
        }
        else if (outline.style === 'esriSLSNull') {
            // line not visible, make color fully transparent
            color[3] = 0;
        }
        return new olstyle.Stroke({
            color,
            lineDash,
            width: EsriStyleGenerator._convertPointToPixel(outline.width)
        });
    }
    /* convert an Esri Simple Line Symbol */
    static _convertEsriSLS(symbol) {
        return new olstyle.Style({
            stroke: EsriStyleGenerator._convertOutline(symbol)
        });
    }
    static _transformAngle(angle) {
        if (angle === 0 || angle === undefined) {
            return undefined;
        }
        const normalRad = (angle * Math.PI) / 180;
        const ol3Rad = -normalRad + Math.PI / 2;
        if (ol3Rad < 0) {
            return 2 * Math.PI + ol3Rad;
        }
        else {
            return ol3Rad;
        }
    }
    /* convert an Esri Simple Marker Symbol */
    static _convertEsriSMS(symbol) {
        const fill = new olstyle.Fill({
            color: EsriStyleGenerator._transformColor(symbol.color)
        });
        const stroke = symbol.outline
            ? EsriStyleGenerator._convertOutline(symbol.outline)
            : undefined;
        const radius = EsriStyleGenerator._convertPointToPixel(symbol.size) / 2;
        const rotation = EsriStyleGenerator._transformAngle(symbol.angle);
        if (symbol.style === 'esriSMSCircle') {
            return new olstyle.Style({
                image: new olstyle.Circle({
                    radius,
                    fill,
                    stroke
                })
            });
        }
        else if (symbol.style === 'esriSMSCross') {
            return new olstyle.Style({
                image: new olstyle.RegularShape({
                    fill,
                    stroke,
                    points: 4,
                    radius,
                    radius2: 0,
                    angle: 0,
                    rotation
                })
            });
        }
        else if (symbol.style === 'esriSMSDiamond') {
            return new olstyle.Style({
                image: new olstyle.RegularShape({
                    fill,
                    stroke,
                    points: 4,
                    radius,
                    rotation
                })
            });
        }
        else if (symbol.style === 'esriSMSSquare') {
            return new olstyle.Style({
                image: new olstyle.RegularShape({
                    fill,
                    stroke,
                    points: 4,
                    radius,
                    angle: Math.PI / 4,
                    rotation
                })
            });
        }
        else if (symbol.style === 'esriSMSX') {
            return new olstyle.Style({
                image: new olstyle.RegularShape({
                    fill,
                    stroke,
                    points: 4,
                    radius,
                    radius2: 0,
                    angle: Math.PI / 4,
                    rotation
                })
            });
        }
        else if (symbol.style === 'esriSMSTriangle') {
            return new olstyle.Style({
                image: new olstyle.RegularShape({
                    fill,
                    stroke,
                    points: 3,
                    radius,
                    angle: 0,
                    rotation
                })
            });
        }
    }
    _convertLabelingInfo(labelingInfo, mapUnits) {
        const styles = [];
        for (let i = 0, ii = labelingInfo.length; i < ii; ++i) {
            const labelExpression = labelingInfo[i].labelExpression;
            // only limited support for label expressions
            const field = labelExpression.substr(labelExpression.indexOf('[') + 1, labelExpression.indexOf(']') - 1);
            const symbol = labelingInfo[i].symbol;
            const maxScale = labelingInfo[i].maxScale;
            const minScale = labelingInfo[i].minScale;
            let minResolution = null;
            if (maxScale !== 0) {
                minResolution = EsriStyleGenerator._getResolutionForScale(maxScale, mapUnits);
            }
            let maxResolution = null;
            if (minScale !== 0) {
                maxResolution = EsriStyleGenerator._getResolutionForScale(minScale, mapUnits);
            }
            const style = this._converters[symbol.type].call(this, symbol);
            styles.push((() => {
                return function (feature, resolution) {
                    let visible = true;
                    if (this.minResolution !== null && this.maxResolution !== null) {
                        visible =
                            resolution < this.maxResolution &&
                                resolution >= this.minResolution;
                    }
                    else if (this.minResolution !== null) {
                        visible = resolution >= this.minResolution;
                    }
                    else if (this.maxResolution !== null) {
                        visible = resolution < this.maxResolution;
                    }
                    if (visible) {
                        const value = feature.get(this.field);
                        this.style.getText().setText(value);
                        return [this.style];
                    }
                };
            })().bind({
                minResolution,
                maxResolution,
                field,
                style
            }));
        }
        return styles;
    }
    _renderSimple(renderer) {
        const style = this._converters[renderer.symbol.type].call(this, renderer.symbol);
        return (() => {
            return () => {
                return [style];
            };
        })();
    }
    _renderClassBreaks(renderer) {
        const defaultSymbol = renderer.defaultSymbol;
        const defaultStyle = this._converters[defaultSymbol.type].call(this, defaultSymbol);
        const field = renderer.field;
        const classes = [];
        for (let i = 0, ii = renderer.classBreakInfos.length; i < ii; ++i) {
            const classBreakInfo = renderer.classBreakInfos[i];
            let min;
            if (classBreakInfo.classMinValue === null ||
                classBreakInfo.classMinValue === undefined) {
                if (i === 0) {
                    min = renderer.minValue;
                }
                else {
                    min = renderer.classBreakInfos[i - 1].classMaxValue;
                }
            }
            else {
                min = classBreakInfo.classMinValue;
            }
            const max = classBreakInfo.classMaxValue;
            const symbol = classBreakInfo.symbol;
            const style = this._converters[symbol.type].call(this, symbol);
            classes.push({ min, max, style });
        }
        return (() => {
            return (feature) => {
                const value = feature.get(field);
                for (let i = 0, ii = classes.length; i < ii; ++i) {
                    let condition;
                    if (i === 0) {
                        condition = value >= classes[i].min && value <= classes[i].max;
                    }
                    else {
                        condition = value > classes[i].min && value <= classes[i].max;
                    }
                    if (condition) {
                        return [classes[i].style];
                    }
                }
                return [defaultStyle];
            };
        })();
    }
    _renderUniqueValue(renderer) {
        const defaultSymbol = renderer.defaultSymbol;
        let defaultStyle = [];
        if (defaultSymbol) {
            defaultStyle = [
                this._converters[defaultSymbol.type].call(this, defaultSymbol)
            ];
        }
        const field = renderer.field1;
        const infos = renderer.uniqueValueInfos;
        const me = this;
        return (() => {
            const hash = {};
            for (let i = 0, ii = infos.length; i < ii; ++i) {
                const info = infos[i];
                const symbol = info.symbol;
                hash[info.value] = [me._converters[symbol.type].call(me, symbol)];
            }
            return (feature) => {
                const style = hash[feature.get(field)];
                return style ? style : defaultStyle;
            };
        })();
    }
    generateStyle(layerInfo, mapUnits) {
        const drawingInfo = layerInfo.drawingInfo;
        let styleFunctions = [];
        const drawingInfoStyle = this._renderers[drawingInfo.renderer.type].call(this, drawingInfo.renderer);
        if (drawingInfoStyle !== undefined) {
            styleFunctions.push(drawingInfoStyle);
        }
        if (layerInfo.labelingInfo) {
            const labelingInfoStyleFunctions = this._convertLabelingInfo(layerInfo.labelingInfo, mapUnits);
            styleFunctions = styleFunctions.concat(labelingInfoStyleFunctions);
        }
        if (styleFunctions.length === 1) {
            return styleFunctions[0];
        }
        else {
            return (() => {
                return (feature, resolution) => {
                    let styles = [];
                    for (let i = 0, ii = styleFunctions.length; i < ii; ++i) {
                        const result = styleFunctions[i].call(null, feature, resolution);
                        if (result) {
                            styles = styles.concat(result);
                        }
                    }
                    return styles;
                };
            })();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNyaS1zdHlsZS1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi9kYXRhc291cmNlL3V0aWxzL2Vzcmktc3R5bGUtZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBRWxDLE1BQU0sT0FBTyxrQkFBa0I7SUFJN0I7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLGVBQWUsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUs7UUFDL0IsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFD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QUFRLENBQ3JCLENBQUM7UUFDRixJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtZQUNsQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDMUIsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzFELFNBQVMsQ0FBQyxZQUFZLEVBQ3RCLFFBQVEsQ0FDVCxDQUFDO1lBQ0YsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRTtvQkFDN0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN2RCxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQ2pFLElBQUksTUFBTSxFQUFFOzRCQUNWLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUNoQztxQkFDRjtvQkFDRCxPQUFPLE1BQU0sQ0FBQztnQkFDaEIsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNOO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb2xzdHlsZSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5cbmV4cG9ydCBjbGFzcyBFc3JpU3R5bGVHZW5lcmF0b3Ige1xuICBwdWJsaWMgX2NvbnZlcnRlcnM6IGFueTtcbiAgcHVibGljIF9yZW5kZXJlcnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9jb252ZXJ0ZXJzID0ge307XG4gICAgdGhpcy5fY29udmVydGVycy5lc3JpUE1TID0gRXNyaVN0eWxlR2VuZXJhdG9yLl9jb252ZXJ0RXNyaVBNUztcbiAgICB0aGlzLl9jb252ZXJ0ZXJzLmVzcmlTRlMgPSBFc3JpU3R5bGVHZW5lcmF0b3IuX2NvbnZlcnRFc3JpU0ZTO1xuICAgIHRoaXMuX2NvbnZlcnRlcnMuZXNyaVNMUyA9IEVzcmlTdHlsZUdlbmVyYXRvci5fY29udmVydEVzcmlTTFM7XG4gICAgdGhpcy5fY29udmVydGVycy5lc3JpU01TID0gRXNyaVN0eWxlR2VuZXJhdG9yLl9jb252ZXJ0RXNyaVNNUztcbiAgICB0aGlzLl9jb252ZXJ0ZXJzLmVzcmlUUyA9IEVzcmlTdHlsZUdlbmVyYXRvci5fY29udmVydEVzcmlUUztcbiAgICB0aGlzLl9yZW5kZXJlcnMgPSB7fTtcbiAgICB0aGlzLl9yZW5kZXJlcnMudW5pcXVlVmFsdWUgPSB0aGlzLl9yZW5kZXJVbmlxdWVWYWx1ZTtcbiAgICB0aGlzLl9yZW5kZXJlcnMuc2ltcGxlID0gdGhpcy5fcmVuZGVyU2ltcGxlO1xuICAgIHRoaXMuX3JlbmRlcmVycy5jbGFzc0JyZWFrcyA9IHRoaXMuX3JlbmRlckNsYXNzQnJlYWtzO1xuICB9XG4gIHN0YXRpYyBfY29udmVydFBvaW50VG9QaXhlbChwb2ludCkge1xuICAgIHJldHVybiBwb2ludCAvIDAuNzU7XG4gIH1cbiAgc3RhdGljIF90cmFuc2Zvcm1Db2xvcihjb2xvcik6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICAvLyBhbHBoYSBjaGFubmVsIGlzIGRpZmZlcmVudCwgcnVucyBmcm9tIDAtMjU1IGJ1dCBpbiBvbDMgZnJvbSAwLTFcbiAgICByZXR1cm4gW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGNvbG9yWzNdIC8gMjU1XTtcbiAgfVxuXG4gIHN0YXRpYyBfZ2V0UmVzb2x1dGlvbkZvclNjYWxlKHNjYWxlLCB1bml0cykge1xuICAgIGNvbnN0IGRwaSA9IDk2O1xuICAgIGNvbnN0IG1wdSA9IG9scHJvai5NRVRFUlNfUEVSX1VOSVRbdW5pdHNdO1xuICAgIGNvbnN0IGluY2hlc1Blck1ldGVyID0gMzkuMzcwMTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzY2FsZSkgLyAobXB1ICogaW5jaGVzUGVyTWV0ZXIgKiBkcGkpO1xuICB9XG5cbiAgLyogY29udmVydCBhbiBFc3JpIFRleHQgU3ltYm9sICovXG4gIHN0YXRpYyBfY29udmVydEVzcmlUUyhzeW1ib2wpIHtcbiAgICBjb25zdCByb3RhdGlvbiA9IEVzcmlTdHlsZUdlbmVyYXRvci5fdHJhbnNmb3JtQW5nbGUoc3ltYm9sLmFuZ2xlKTtcbiAgICBjb25zdCB0ZXh0ID0gc3ltYm9sLnRleHQgIT09IHVuZGVmaW5lZCA/IHN5bWJvbC50ZXh0IDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICB0ZXh0OiBuZXcgb2xzdHlsZS5UZXh0KHtcbiAgICAgICAgZmlsbDogbmV3IG9sc3R5bGUuRmlsbCh7XG4gICAgICAgICAgY29sb3I6IEVzcmlTdHlsZUdlbmVyYXRvci5fdHJhbnNmb3JtQ29sb3Ioc3ltYm9sLmNvbG9yKVxuICAgICAgICB9KSxcbiAgICAgICAgZm9udDpcbiAgICAgICAgICBzeW1ib2wuZm9udC5zdHlsZSArXG4gICAgICAgICAgJyAnICtcbiAgICAgICAgICBzeW1ib2wuZm9udC53ZWlnaHQgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgc3ltYm9sLmZvbnQuc2l6ZSArXG4gICAgICAgICAgJyBweCAnICtcbiAgICAgICAgICBzeW1ib2wuZm9udC5mYW1pbHksXG4gICAgICAgIHRleHRCYXNlbGluZTogc3ltYm9sLnZlcnRpY2FsQWxpZ25tZW50LFxuICAgICAgICB0ZXh0QWxpZ246IHN5bWJvbC5ob3Jpem9udGFsQWxpZ25tZW50LFxuICAgICAgICBvZmZzZXRYOiBFc3JpU3R5bGVHZW5lcmF0b3IuX2NvbnZlcnRQb2ludFRvUGl4ZWwoc3ltYm9sLnhvZmZzZXQpLFxuICAgICAgICBvZmZzZXRZOiBFc3JpU3R5bGVHZW5lcmF0b3IuX2NvbnZlcnRQb2ludFRvUGl4ZWwoc3ltYm9sLnlvZmZzZXQpLFxuICAgICAgICByb3RhdGlvbixcbiAgICAgICAgdGV4dFxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuICAvKiBjb252ZXJ0IGFuIEVzcmkgUGljdHVyZSBNYXJrZXIgU3ltYm9sICovXG4gIHN0YXRpYyBfY29udmVydEVzcmlQTVMoc3ltYm9sKSB7XG4gICAgY29uc3Qgc3JjID0gJ2RhdGE6JyArIHN5bWJvbC5jb250ZW50VHlwZSArICc7YmFzZTY0LCAnICsgc3ltYm9sLmltYWdlRGF0YTtcbiAgICBjb25zdCByb3RhdGlvbiA9IEVzcmlTdHlsZUdlbmVyYXRvci5fdHJhbnNmb3JtQW5nbGUoc3ltYm9sLmFuZ2xlKTtcblxuICAgIHJldHVybiBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICBpbWFnZTogbmV3IG9sc3R5bGUuSWNvbih7XG4gICAgICAgIHNyYyxcbiAgICAgICAgcm90YXRpb25cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cbiAgLyogY29udmVydCBhbiBFc3JpIFNpbXBsZSBGaWxsIFN5bWJvbCAqL1xuICBzdGF0aWMgX2NvbnZlcnRFc3JpU0ZTKHN5bWJvbCkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHN1cHBvcnQgaW4gb3BlbmxheWVycyBjdXJyZW50bHkgZm9yIGZpbGwgcGF0dGVybnMsIHNvIHN0eWxlIGlzIG5vdCBpbnRlcnByZXRlZFxuICAgIGNvbnN0IGZpbGwgPSBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgIGNvbG9yOiBFc3JpU3R5bGVHZW5lcmF0b3IuX3RyYW5zZm9ybUNvbG9yKHN5bWJvbC5jb2xvcilcbiAgICB9KTtcbiAgICBjb25zdCBzdHJva2UgPSBzeW1ib2wub3V0bGluZVxuICAgICAgPyBFc3JpU3R5bGVHZW5lcmF0b3IuX2NvbnZlcnRPdXRsaW5lKHN5bWJvbC5vdXRsaW5lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgIGZpbGwsXG4gICAgICBzdHJva2VcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgX2NvbnZlcnRPdXRsaW5lKG91dGxpbmUpIHtcbiAgICBsZXQgbGluZURhc2g7XG4gICAgY29uc3QgY29sb3IgPSBFc3JpU3R5bGVHZW5lcmF0b3IuX3RyYW5zZm9ybUNvbG9yKG91dGxpbmUuY29sb3IpO1xuICAgIGlmIChvdXRsaW5lLnN0eWxlID09PSAnZXNyaVNMU0Rhc2gnKSB7XG4gICAgICBsaW5lRGFzaCA9IFs1XTtcbiAgICB9IGVsc2UgaWYgKG91dGxpbmUuc3R5bGUgPT09ICdlc3JpU0xTRGFzaERvdCcpIHtcbiAgICAgIGxpbmVEYXNoID0gWzUsIDUsIDEsIDJdO1xuICAgIH0gZWxzZSBpZiAob3V0bGluZS5zdHlsZSA9PT0gJ2VzcmlTTFNEYXNoRG90RG90Jykge1xuICAgICAgbGluZURhc2ggPSBbNSwgNSwgMSwgMiwgMSwgMl07XG4gICAgfSBlbHNlIGlmIChvdXRsaW5lLnN0eWxlID09PSAnZXNyaVNMU0RvdCcpIHtcbiAgICAgIGxpbmVEYXNoID0gWzEsIDJdO1xuICAgIH0gZWxzZSBpZiAob3V0bGluZS5zdHlsZSA9PT0gJ2VzcmlTTFNOdWxsJykge1xuICAgICAgLy8gbGluZSBub3QgdmlzaWJsZSwgbWFrZSBjb2xvciBmdWxseSB0cmFuc3BhcmVudFxuICAgICAgY29sb3JbM10gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IG9sc3R5bGUuU3Ryb2tlKHtcbiAgICAgIGNvbG9yLFxuICAgICAgbGluZURhc2gsXG4gICAgICB3aWR0aDogRXNyaVN0eWxlR2VuZXJhdG9yLl9jb252ZXJ0UG9pbnRUb1BpeGVsKG91dGxpbmUud2lkdGgpXG4gICAgfSk7XG4gIH1cbiAgLyogY29udmVydCBhbiBFc3JpIFNpbXBsZSBMaW5lIFN5bWJvbCAqL1xuICBzdGF0aWMgX2NvbnZlcnRFc3JpU0xTKHN5bWJvbCkge1xuICAgIHJldHVybiBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICBzdHJva2U6IEVzcmlTdHlsZUdlbmVyYXRvci5fY29udmVydE91dGxpbmUoc3ltYm9sKVxuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBfdHJhbnNmb3JtQW5nbGUoYW5nbGUpIHtcbiAgICBpZiAoYW5nbGUgPT09IDAgfHwgYW5nbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsUmFkID0gKGFuZ2xlICogTWF0aC5QSSkgLyAxODA7XG4gICAgY29uc3Qgb2wzUmFkID0gLW5vcm1hbFJhZCArIE1hdGguUEkgLyAyO1xuICAgIGlmIChvbDNSYWQgPCAwKSB7XG4gICAgICByZXR1cm4gMiAqIE1hdGguUEkgKyBvbDNSYWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvbDNSYWQ7XG4gICAgfVxuICB9XG4gIC8qIGNvbnZlcnQgYW4gRXNyaSBTaW1wbGUgTWFya2VyIFN5bWJvbCAqL1xuICBzdGF0aWMgX2NvbnZlcnRFc3JpU01TKHN5bWJvbCkge1xuICAgIGNvbnN0IGZpbGwgPSBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgIGNvbG9yOiBFc3JpU3R5bGVHZW5lcmF0b3IuX3RyYW5zZm9ybUNvbG9yKHN5bWJvbC5jb2xvcilcbiAgICB9KTtcbiAgICBjb25zdCBzdHJva2UgPSBzeW1ib2wub3V0bGluZVxuICAgICAgPyBFc3JpU3R5bGVHZW5lcmF0b3IuX2NvbnZlcnRPdXRsaW5lKHN5bWJvbC5vdXRsaW5lKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcmFkaXVzID0gRXNyaVN0eWxlR2VuZXJhdG9yLl9jb252ZXJ0UG9pbnRUb1BpeGVsKHN5bWJvbC5zaXplKSAvIDI7XG4gICAgY29uc3Qgcm90YXRpb24gPSBFc3JpU3R5bGVHZW5lcmF0b3IuX3RyYW5zZm9ybUFuZ2xlKHN5bWJvbC5hbmdsZSk7XG4gICAgaWYgKHN5bWJvbC5zdHlsZSA9PT0gJ2VzcmlTTVNDaXJjbGUnKSB7XG4gICAgICByZXR1cm4gbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgZmlsbCxcbiAgICAgICAgICBzdHJva2VcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoc3ltYm9sLnN0eWxlID09PSAnZXNyaVNNU0Nyb3NzJykge1xuICAgICAgcmV0dXJuIG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgZmlsbCxcbiAgICAgICAgICBzdHJva2UsXG4gICAgICAgICAgcG9pbnRzOiA0LFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICByYWRpdXMyOiAwLFxuICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgIHJvdGF0aW9uXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN5bWJvbC5zdHlsZSA9PT0gJ2VzcmlTTVNEaWFtb25kJykge1xuICAgICAgcmV0dXJuIG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgZmlsbCxcbiAgICAgICAgICBzdHJva2UsXG4gICAgICAgICAgcG9pbnRzOiA0LFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICByb3RhdGlvblxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzeW1ib2wuc3R5bGUgPT09ICdlc3JpU01TU3F1YXJlJykge1xuICAgICAgcmV0dXJuIG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgZmlsbCxcbiAgICAgICAgICBzdHJva2UsXG4gICAgICAgICAgcG9pbnRzOiA0LFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICBhbmdsZTogTWF0aC5QSSAvIDQsXG4gICAgICAgICAgcm90YXRpb25cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoc3ltYm9sLnN0eWxlID09PSAnZXNyaVNNU1gnKSB7XG4gICAgICByZXR1cm4gbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sc3R5bGUuUmVndWxhclNoYXBlKHtcbiAgICAgICAgICBmaWxsLFxuICAgICAgICAgIHN0cm9rZSxcbiAgICAgICAgICBwb2ludHM6IDQsXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgIHJhZGl1czI6IDAsXG4gICAgICAgICAgYW5nbGU6IE1hdGguUEkgLyA0LFxuICAgICAgICAgIHJvdGF0aW9uXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN5bWJvbC5zdHlsZSA9PT0gJ2VzcmlTTVNUcmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICAgIGltYWdlOiBuZXcgb2xzdHlsZS5SZWd1bGFyU2hhcGUoe1xuICAgICAgICAgIGZpbGwsXG4gICAgICAgICAgc3Ryb2tlLFxuICAgICAgICAgIHBvaW50czogMyxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgICAgcm90YXRpb25cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9jb252ZXJ0TGFiZWxpbmdJbmZvKGxhYmVsaW5nSW5mbywgbWFwVW5pdHMpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBsYWJlbGluZ0luZm8ubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgY29uc3QgbGFiZWxFeHByZXNzaW9uID0gbGFiZWxpbmdJbmZvW2ldLmxhYmVsRXhwcmVzc2lvbjtcbiAgICAgIC8vIG9ubHkgbGltaXRlZCBzdXBwb3J0IGZvciBsYWJlbCBleHByZXNzaW9uc1xuICAgICAgY29uc3QgZmllbGQgPSBsYWJlbEV4cHJlc3Npb24uc3Vic3RyKFxuICAgICAgICBsYWJlbEV4cHJlc3Npb24uaW5kZXhPZignWycpICsgMSxcbiAgICAgICAgbGFiZWxFeHByZXNzaW9uLmluZGV4T2YoJ10nKSAtIDFcbiAgICAgICk7XG4gICAgICBjb25zdCBzeW1ib2wgPSBsYWJlbGluZ0luZm9baV0uc3ltYm9sO1xuICAgICAgY29uc3QgbWF4U2NhbGUgPSBsYWJlbGluZ0luZm9baV0ubWF4U2NhbGU7XG4gICAgICBjb25zdCBtaW5TY2FsZSA9IGxhYmVsaW5nSW5mb1tpXS5taW5TY2FsZTtcbiAgICAgIGxldCBtaW5SZXNvbHV0aW9uID0gbnVsbDtcbiAgICAgIGlmIChtYXhTY2FsZSAhPT0gMCkge1xuICAgICAgICBtaW5SZXNvbHV0aW9uID0gRXNyaVN0eWxlR2VuZXJhdG9yLl9nZXRSZXNvbHV0aW9uRm9yU2NhbGUoXG4gICAgICAgICAgbWF4U2NhbGUsXG4gICAgICAgICAgbWFwVW5pdHNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGxldCBtYXhSZXNvbHV0aW9uID0gbnVsbDtcbiAgICAgIGlmIChtaW5TY2FsZSAhPT0gMCkge1xuICAgICAgICBtYXhSZXNvbHV0aW9uID0gRXNyaVN0eWxlR2VuZXJhdG9yLl9nZXRSZXNvbHV0aW9uRm9yU2NhbGUoXG4gICAgICAgICAgbWluU2NhbGUsXG4gICAgICAgICAgbWFwVW5pdHNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fY29udmVydGVyc1tzeW1ib2wudHlwZV0uY2FsbCh0aGlzLCBzeW1ib2wpO1xuICAgICAgc3R5bGVzLnB1c2goXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgICAgICAgIGxldCB2aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pblJlc29sdXRpb24gIT09IG51bGwgJiYgdGhpcy5tYXhSZXNvbHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHZpc2libGUgPVxuICAgICAgICAgICAgICAgIHJlc29sdXRpb24gPCB0aGlzLm1heFJlc29sdXRpb24gJiZcbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uID49IHRoaXMubWluUmVzb2x1dGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5taW5SZXNvbHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHZpc2libGUgPSByZXNvbHV0aW9uID49IHRoaXMubWluUmVzb2x1dGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXhSZXNvbHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHZpc2libGUgPSByZXNvbHV0aW9uIDwgdGhpcy5tYXhSZXNvbHV0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmZWF0dXJlLmdldCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgdGhpcy5zdHlsZS5nZXRUZXh0KCkuc2V0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zdHlsZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkoKS5iaW5kKHtcbiAgICAgICAgICBtaW5SZXNvbHV0aW9uLFxuICAgICAgICAgIG1heFJlc29sdXRpb24sXG4gICAgICAgICAgZmllbGQsXG4gICAgICAgICAgc3R5bGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBfcmVuZGVyU2ltcGxlKHJlbmRlcmVyKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLl9jb252ZXJ0ZXJzW3JlbmRlcmVyLnN5bWJvbC50eXBlXS5jYWxsKFxuICAgICAgdGhpcyxcbiAgICAgIHJlbmRlcmVyLnN5bWJvbFxuICAgICk7XG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICByZXR1cm4gW3N0eWxlXTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuICBfcmVuZGVyQ2xhc3NCcmVha3MocmVuZGVyZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0U3ltYm9sID0gcmVuZGVyZXIuZGVmYXVsdFN5bWJvbDtcbiAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSB0aGlzLl9jb252ZXJ0ZXJzW2RlZmF1bHRTeW1ib2wudHlwZV0uY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBkZWZhdWx0U3ltYm9sXG4gICAgKTtcbiAgICBjb25zdCBmaWVsZCA9IHJlbmRlcmVyLmZpZWxkO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSByZW5kZXJlci5jbGFzc0JyZWFrSW5mb3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgY29uc3QgY2xhc3NCcmVha0luZm8gPSByZW5kZXJlci5jbGFzc0JyZWFrSW5mb3NbaV07XG4gICAgICBsZXQgbWluO1xuICAgICAgaWYgKFxuICAgICAgICBjbGFzc0JyZWFrSW5mby5jbGFzc01pblZhbHVlID09PSBudWxsIHx8XG4gICAgICAgIGNsYXNzQnJlYWtJbmZvLmNsYXNzTWluVmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgbWluID0gcmVuZGVyZXIubWluVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWluID0gcmVuZGVyZXIuY2xhc3NCcmVha0luZm9zW2kgLSAxXS5jbGFzc01heFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW4gPSBjbGFzc0JyZWFrSW5mby5jbGFzc01pblZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgbWF4ID0gY2xhc3NCcmVha0luZm8uY2xhc3NNYXhWYWx1ZTtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IGNsYXNzQnJlYWtJbmZvLnN5bWJvbDtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fY29udmVydGVyc1tzeW1ib2wudHlwZV0uY2FsbCh0aGlzLCBzeW1ib2wpO1xuICAgICAgY2xhc3Nlcy5wdXNoKHsgbWluLCBtYXgsIHN0eWxlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHJldHVybiAoZmVhdHVyZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZlYXR1cmUuZ2V0KGZpZWxkKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgbGV0IGNvbmRpdGlvbjtcbiAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgY29uZGl0aW9uID0gdmFsdWUgPj0gY2xhc3Nlc1tpXS5taW4gJiYgdmFsdWUgPD0gY2xhc3Nlc1tpXS5tYXg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IHZhbHVlID4gY2xhc3Nlc1tpXS5taW4gJiYgdmFsdWUgPD0gY2xhc3Nlc1tpXS5tYXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBbY2xhc3Nlc1tpXS5zdHlsZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZGVmYXVsdFN0eWxlXTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuICBfcmVuZGVyVW5pcXVlVmFsdWUocmVuZGVyZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0U3ltYm9sID0gcmVuZGVyZXIuZGVmYXVsdFN5bWJvbDtcbiAgICBsZXQgZGVmYXVsdFN0eWxlID0gW107XG4gICAgaWYgKGRlZmF1bHRTeW1ib2wpIHtcbiAgICAgIGRlZmF1bHRTdHlsZSA9IFtcbiAgICAgICAgdGhpcy5fY29udmVydGVyc1tkZWZhdWx0U3ltYm9sLnR5cGVdLmNhbGwodGhpcywgZGVmYXVsdFN5bWJvbClcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkID0gcmVuZGVyZXIuZmllbGQxO1xuICAgIGNvbnN0IGluZm9zID0gcmVuZGVyZXIudW5pcXVlVmFsdWVJbmZvcztcbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICBjb25zdCBoYXNoID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBpbmZvcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSBpbmZvc1tpXTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gaW5mby5zeW1ib2w7XG4gICAgICAgIGhhc2hbaW5mby52YWx1ZV0gPSBbbWUuX2NvbnZlcnRlcnNbc3ltYm9sLnR5cGVdLmNhbGwobWUsIHN5bWJvbCldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKGZlYXR1cmUpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBoYXNoW2ZlYXR1cmUuZ2V0KGZpZWxkKV07XG4gICAgICAgIHJldHVybiBzdHlsZSA/IHN0eWxlIDogZGVmYXVsdFN0eWxlO1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG4gIGdlbmVyYXRlU3R5bGUobGF5ZXJJbmZvLCBtYXBVbml0cykge1xuICAgIGNvbnN0IGRyYXdpbmdJbmZvID0gbGF5ZXJJbmZvLmRyYXdpbmdJbmZvO1xuICAgIGxldCBzdHlsZUZ1bmN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGRyYXdpbmdJbmZvU3R5bGUgPSB0aGlzLl9yZW5kZXJlcnNbZHJhd2luZ0luZm8ucmVuZGVyZXIudHlwZV0uY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBkcmF3aW5nSW5mby5yZW5kZXJlclxuICAgICk7XG4gICAgaWYgKGRyYXdpbmdJbmZvU3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc3R5bGVGdW5jdGlvbnMucHVzaChkcmF3aW5nSW5mb1N0eWxlKTtcbiAgICB9XG4gICAgaWYgKGxheWVySW5mby5sYWJlbGluZ0luZm8pIHtcbiAgICAgIGNvbnN0IGxhYmVsaW5nSW5mb1N0eWxlRnVuY3Rpb25zID0gdGhpcy5fY29udmVydExhYmVsaW5nSW5mbyhcbiAgICAgICAgbGF5ZXJJbmZvLmxhYmVsaW5nSW5mbyxcbiAgICAgICAgbWFwVW5pdHNcbiAgICAgICk7XG4gICAgICBzdHlsZUZ1bmN0aW9ucyA9IHN0eWxlRnVuY3Rpb25zLmNvbmNhdChsYWJlbGluZ0luZm9TdHlsZUZ1bmN0aW9ucyk7XG4gICAgfVxuICAgIGlmIChzdHlsZUZ1bmN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBzdHlsZUZ1bmN0aW9uc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZmVhdHVyZSwgcmVzb2x1dGlvbikgPT4ge1xuICAgICAgICAgIGxldCBzdHlsZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzdHlsZUZ1bmN0aW9ucy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzdHlsZUZ1bmN0aW9uc1tpXS5jYWxsKG51bGwsIGZlYXR1cmUsIHJlc29sdXRpb24pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICBzdHlsZXMgPSBzdHlsZXMuY29uY2F0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH07XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxufVxuIl19