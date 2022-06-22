import { Injectable } from '@angular/core';
import * as olstyle from 'ol/style';
import OlFeature from 'ol/Feature';
import { createOverlayMarkerStyle } from '../../overlay/shared/overlay-marker-style.utils';
import * as i0 from "@angular/core";
export class StyleService {
    createStyle(options) {
        if (!options) {
            return createOverlayMarkerStyle();
        }
        if (typeof options === 'function' || options instanceof olstyle.Style) {
            return options;
        }
        return this.parseStyle('style', options);
    }
    parseStyle(key, value) {
        const styleOptions = {};
        const olCls = this.getOlCls(key);
        if (olCls && value instanceof Object) {
            Object.keys(value).forEach(_key => {
                const olKey = this.getOlKey(_key);
                styleOptions[olKey] = this.parseStyle(_key, value[_key]);
            });
            return new olCls(styleOptions);
        }
        else {
            return value;
        }
    }
    getOlKey(key) {
        let olKey;
        switch (key.toLowerCase()) {
            case 'circle':
            case 'regularshape':
            case 'icon':
                olKey = 'image';
                break;
            default:
                break;
        }
        return olKey || key;
    }
    getOlCls(key) {
        let olCls = olstyle[key.charAt(0).toUpperCase() + key.slice(1)];
        if (key === 'regularshape') {
            olCls = olstyle.RegularShape;
        }
        if (key === 'backgroundFill') {
            olCls = olstyle.Fill;
        }
        if (key === 'backgroundStroke') {
            olCls = olstyle.Stroke;
        }
        return olCls;
    }
    createStyleByAttribute(feature, styleByAttribute) {
        var _a;
        let style;
        const type = styleByAttribute.type ? styleByAttribute.type : this.guessTypeFeature(feature);
        const attribute = styleByAttribute.attribute;
        const data = styleByAttribute.data;
        const stroke = styleByAttribute.stroke;
        const width = styleByAttribute.width;
        const fill = styleByAttribute.fill;
        const anchor = styleByAttribute.anchor;
        const radius = styleByAttribute.radius;
        const icon = styleByAttribute.icon;
        const scale = styleByAttribute.scale;
        const size = data ? data.length : 0;
        const label = styleByAttribute.label ? styleByAttribute.label.attribute : undefined;
        let labelStyle = ((_a = styleByAttribute.label) === null || _a === void 0 ? void 0 : _a.style) ? this.parseStyle('text', styleByAttribute.label.style) : undefined;
        if (!labelStyle && label) {
            labelStyle = new olstyle.Text();
        }
        const baseStyle = styleByAttribute.baseStyle;
        if (labelStyle) {
            labelStyle.setText(this.getLabel(feature, label));
        }
        if (type === 'circle') {
            for (let i = 0; i < size; i++) {
                const val = typeof feature.get(attribute) !== 'undefined' && feature.get(attribute) !== null
                    ? feature.get(attribute)
                    : '';
                if (val === data[i] || val.toString().match(new RegExp(data[i], 'gmi'))) {
                    if (icon) {
                        style = [
                            new olstyle.Style({
                                image: new olstyle.Icon({
                                    color: fill ? fill[i] : undefined,
                                    src: icon[i],
                                    scale: scale ? scale[i] : 1,
                                    anchor: anchor ? anchor[i] : [0.5, 0.5]
                                }),
                                text: labelStyle instanceof olstyle.Text ? labelStyle : undefined
                            })
                        ];
                        return style;
                    }
                    style = [
                        new olstyle.Style({
                            image: new olstyle.Circle({
                                radius: radius ? radius[i] : 4,
                                stroke: new olstyle.Stroke({
                                    color: stroke ? stroke[i] : 'black',
                                    width: width ? width[i] : 1
                                }),
                                fill: new olstyle.Fill({
                                    color: fill ? fill[i] : 'black'
                                })
                            }),
                            text: labelStyle instanceof olstyle.Text ? labelStyle : undefined
                        })
                    ];
                    return style;
                }
            }
            if (!feature.getStyle()) {
                if (baseStyle) {
                    style = this.createStyle(baseStyle);
                    if (labelStyle) {
                        style.setText(labelStyle);
                    }
                    return style;
                }
                style = [
                    new olstyle.Style({
                        image: new olstyle.Circle({
                            radius: 4,
                            stroke: new olstyle.Stroke({
                                color: 'black'
                            }),
                            fill: new olstyle.Fill({
                                color: '#bbbbf2'
                            })
                        })
                    })
                ];
                return style;
            }
        }
        else if (type === 'regular') {
            for (let i = 0; i < size; i++) {
                const val = typeof feature.get(attribute) !== 'undefined' && feature.get(attribute) !== null
                    ? feature.get(attribute)
                    : '';
                if (val === data[i] || val.toString().match(new RegExp(data[i], 'gmi'))) {
                    style = [
                        new olstyle.Style({
                            stroke: new olstyle.Stroke({
                                color: stroke ? stroke[i] : 'black',
                                width: width ? width[i] : 1
                            }),
                            fill: new olstyle.Fill({
                                color: fill ? fill[i] : 'rgba(255,255,255,0.4)'
                            }),
                            text: labelStyle instanceof olstyle.Text ? labelStyle : undefined
                        })
                    ];
                    return style;
                }
            }
            if (feature instanceof OlFeature) {
                if (!feature.getStyle()) {
                    if (baseStyle) {
                        style = this.createStyle(baseStyle);
                        if (labelStyle) {
                            style.setText(labelStyle);
                        }
                        return style;
                    }
                    style = [
                        new olstyle.Style({
                            stroke: new olstyle.Stroke({
                                color: 'black'
                            }),
                            fill: new olstyle.Fill({
                                color: '#bbbbf2'
                            })
                        })
                    ];
                    return style;
                }
            }
        }
    }
    createClusterStyle(feature, clusterParam = {}, layerStyle) {
        let style;
        const size = feature.get('features').length;
        if (size !== 1) {
            if (clusterParam.clusterRanges) {
                for (const r of clusterParam.clusterRanges) {
                    if ((!r.minRadius || r.minRadius <= size) &&
                        (!r.maxRadius || r.maxRadius >= size)) {
                        style = this.createStyle(r.style);
                        if (r.showRange) {
                            const text = new olstyle.Text({
                                text: size.toString(),
                                fill: new olstyle.Fill({
                                    color: '#fff'
                                })
                            });
                            style.setText(text);
                        }
                        if (r.dynamicRadius) {
                            let clusterRadius;
                            const radiusMin = style.getRadius();
                            clusterRadius = 5 * Math.log(size);
                            if (clusterRadius < radiusMin) {
                                clusterRadius = radiusMin;
                            }
                            style.image_.setRadius(clusterRadius);
                        }
                        break;
                    }
                }
            }
            if (!style) {
                let clusterRadius;
                if (clusterParam.radiusCalc) {
                    clusterRadius = clusterParam.radiusCalc(size);
                }
                else {
                    const radiusMin = 6;
                    clusterRadius = 5 * Math.log(size);
                    if (clusterRadius < radiusMin) {
                        clusterRadius = radiusMin;
                    }
                }
                style = [
                    new olstyle.Style({
                        image: new olstyle.Circle({
                            radius: clusterRadius,
                            stroke: new olstyle.Stroke({
                                color: 'black'
                            }),
                            fill: new olstyle.Fill({
                                color: 'rgba(24, 134, 45, 0.5)'
                            })
                        }),
                        text: new olstyle.Text({
                            text: size.toString(),
                            fill: new olstyle.Fill({
                                color: '#fff'
                            })
                        })
                    })
                ];
            }
        }
        else {
            style = this.createStyle(layerStyle);
        }
        return style;
    }
    getLabel(feature, labelMatch) {
        let label = labelMatch;
        if (!label) {
            return;
        }
        const labelToGet = Array.from(labelMatch.matchAll(/\$\{([^\{\}]+)\}/g));
        labelToGet.forEach(v => {
            label = label.replace(v[0], feature.get(v[1]));
        });
        // Nothing done? check feature's attribute
        if (labelToGet.length === 0 && label === labelMatch) {
            label = feature.get(labelMatch) || labelMatch;
        }
        return label;
    }
    guessTypeFeature(feature) {
        switch (feature.getGeometry().getType()) {
            case 'Point':
            case 'MultiPoint':
            case 'Circle':
                return 'circle';
            default:
                return 'regular';
        }
    }
}
StyleService.ɵfac = function StyleService_Factory(t) { return new (t || StyleService)(); };
StyleService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StyleService, factory: StyleService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StyleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dlby9zcmMvbGliL2xheWVyL3NoYXJlZC9zdHlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBSW5DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOztBQU0zRixNQUFNLE9BQU8sWUFBWTtJQUd2QixXQUFXLENBQUMsT0FBK0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sd0JBQXdCLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxJQUFJLE9BQU8sWUFBWSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3JFLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sVUFBVSxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksS0FBSyxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsVUFB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QUFRLENBQUM7WUFDbEI7Z0JBQ0UsT0FBTyxTQUFTLENBQUM7U0FDcEI7SUFDSCxDQUFDOzt3RUF0U1UsWUFBWTtrRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO3VGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IGRlZmF1bHQgYXMgT2xHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20vR2VvbWV0cnknO1xuaW1wb3J0ICogYXMgb2xzdHlsZSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgT2xGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHsgU3R5bGVCeUF0dHJpYnV0ZSB9IGZyb20gJy4vdmVjdG9yLXN0eWxlLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IENsdXN0ZXJQYXJhbSB9IGZyb20gJy4vY2x1c3RlclBhcmFtJztcbmltcG9ydCB7IGNyZWF0ZU92ZXJsYXlNYXJrZXJTdHlsZSB9IGZyb20gJy4uLy4uL292ZXJsYXkvc2hhcmVkL292ZXJsYXktbWFya2VyLXN0eWxlLnV0aWxzJztcbmltcG9ydCBSZW5kZXJGZWF0dXJlIGZyb20gJ29sL3JlbmRlci9GZWF0dXJlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVTZXJ2aWNlIHtcbiAgcHVibGljIHN0eWxlOiBvbHN0eWxlLlN0eWxlO1xuXG4gIGNyZWF0ZVN0eWxlKG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5TWFya2VyU3R5bGUoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nIHx8IG9wdGlvbnMgaW5zdGFuY2VvZiBvbHN0eWxlLlN0eWxlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFyc2VTdHlsZSgnc3R5bGUnLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VTdHlsZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHN0eWxlT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IG9sQ2xzID0gdGhpcy5nZXRPbENscyhrZXkpO1xuXG4gICAgaWYgKG9sQ2xzICYmIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChfa2V5ID0+IHtcbiAgICAgICAgY29uc3Qgb2xLZXkgPSB0aGlzLmdldE9sS2V5KF9rZXkpO1xuICAgICAgICBzdHlsZU9wdGlvbnNbb2xLZXldID0gdGhpcy5wYXJzZVN0eWxlKF9rZXksIHZhbHVlW19rZXldKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBvbENscyhzdHlsZU9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPbEtleShrZXk6IGFueSkge1xuICAgIGxldCBvbEtleTtcbiAgICBzd2l0Y2ggKGtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgY2FzZSAncmVndWxhcnNoYXBlJzpcbiAgICAgIGNhc2UgJ2ljb24nOlxuICAgICAgICBvbEtleSA9ICdpbWFnZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9sS2V5IHx8IGtleTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T2xDbHMoa2V5OiBhbnkpIHtcbiAgICBsZXQgb2xDbHMgPSBvbHN0eWxlW2tleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKV07XG4gICAgaWYgKGtleSA9PT0gJ3JlZ3VsYXJzaGFwZScpIHtcbiAgICAgIG9sQ2xzID0gb2xzdHlsZS5SZWd1bGFyU2hhcGU7XG4gICAgfVxuICAgIGlmIChrZXkgPT09ICdiYWNrZ3JvdW5kRmlsbCcpIHtcbiAgICAgIG9sQ2xzID0gb2xzdHlsZS5GaWxsO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnYmFja2dyb3VuZFN0cm9rZScpIHtcbiAgICAgIG9sQ2xzID0gb2xzdHlsZS5TdHJva2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9sQ2xzO1xuICB9XG5cbiAgY3JlYXRlU3R5bGVCeUF0dHJpYnV0ZShmZWF0dXJlOiBSZW5kZXJGZWF0dXJlIHwgT2xGZWF0dXJlPE9sR2VvbWV0cnk+LCBzdHlsZUJ5QXR0cmlidXRlOiBTdHlsZUJ5QXR0cmlidXRlKSB7XG5cbiAgICBsZXQgc3R5bGU7XG4gICAgY29uc3QgdHlwZSA9IHN0eWxlQnlBdHRyaWJ1dGUudHlwZSA/IHN0eWxlQnlBdHRyaWJ1dGUudHlwZSA6IHRoaXMuZ3Vlc3NUeXBlRmVhdHVyZShmZWF0dXJlKTtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBzdHlsZUJ5QXR0cmlidXRlLmF0dHJpYnV0ZTtcbiAgICBjb25zdCBkYXRhID0gc3R5bGVCeUF0dHJpYnV0ZS5kYXRhO1xuICAgIGNvbnN0IHN0cm9rZSA9IHN0eWxlQnlBdHRyaWJ1dGUuc3Ryb2tlO1xuICAgIGNvbnN0IHdpZHRoID0gc3R5bGVCeUF0dHJpYnV0ZS53aWR0aDtcbiAgICBjb25zdCBmaWxsID0gc3R5bGVCeUF0dHJpYnV0ZS5maWxsO1xuICAgIGNvbnN0IGFuY2hvciA9IHN0eWxlQnlBdHRyaWJ1dGUuYW5jaG9yO1xuICAgIGNvbnN0IHJhZGl1cyA9IHN0eWxlQnlBdHRyaWJ1dGUucmFkaXVzO1xuICAgIGNvbnN0IGljb24gPSBzdHlsZUJ5QXR0cmlidXRlLmljb247XG4gICAgY29uc3Qgc2NhbGUgPSBzdHlsZUJ5QXR0cmlidXRlLnNjYWxlO1xuICAgIGNvbnN0IHNpemUgPSBkYXRhID8gZGF0YS5sZW5ndGggOiAwO1xuICAgIGNvbnN0IGxhYmVsID0gc3R5bGVCeUF0dHJpYnV0ZS5sYWJlbCA/IHN0eWxlQnlBdHRyaWJ1dGUubGFiZWwuYXR0cmlidXRlIDogdW5kZWZpbmVkO1xuICAgIGxldCBsYWJlbFN0eWxlID0gc3R5bGVCeUF0dHJpYnV0ZS5sYWJlbD8uc3R5bGUgPyB0aGlzLnBhcnNlU3R5bGUoJ3RleHQnLCBzdHlsZUJ5QXR0cmlidXRlLmxhYmVsLnN0eWxlKSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIWxhYmVsU3R5bGUgJiYgbGFiZWwpIHtcbiAgICAgICAgbGFiZWxTdHlsZSA9IG5ldyBvbHN0eWxlLlRleHQoKTtcbiAgICB9XG4gICAgY29uc3QgYmFzZVN0eWxlID0gc3R5bGVCeUF0dHJpYnV0ZS5iYXNlU3R5bGU7XG5cbiAgICBpZiAobGFiZWxTdHlsZSkge1xuICAgICAgbGFiZWxTdHlsZS5zZXRUZXh0KHRoaXMuZ2V0TGFiZWwoZmVhdHVyZSwgbGFiZWwpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9XG4gICAgICAgICAgdHlwZW9mIGZlYXR1cmUuZ2V0KGF0dHJpYnV0ZSkgIT09ICd1bmRlZmluZWQnICYmIGZlYXR1cmUuZ2V0KGF0dHJpYnV0ZSkgIT09IG51bGxcbiAgICAgICAgICAgID8gZmVhdHVyZS5nZXQoYXR0cmlidXRlKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgaWYgKHZhbCA9PT0gZGF0YVtpXSB8fCB2YWwudG9TdHJpbmcoKS5tYXRjaChuZXcgUmVnRXhwKGRhdGFbaV0sICdnbWknKSkpIHtcbiAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgc3R5bGUgPSBbXG4gICAgICAgICAgICAgIG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogbmV3IG9sc3R5bGUuSWNvbih7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogZmlsbCA/IGZpbGxbaV0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBzcmM6IGljb25baV0sXG4gICAgICAgICAgICAgICAgICBzY2FsZTogc2NhbGUgPyBzY2FsZVtpXSA6IDEsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IGFuY2hvciA/IGFuY2hvcltpXSA6IFswLjUsIDAuNV1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBsYWJlbFN0eWxlIGluc3RhbmNlb2Ygb2xzdHlsZS5UZXh0ID8gbGFiZWxTdHlsZSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGUgPSBbXG4gICAgICAgICAgICBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgIGltYWdlOiBuZXcgb2xzdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzID8gcmFkaXVzW2ldIDogNCxcbiAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbHN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogc3Ryb2tlID8gc3Ryb2tlW2ldIDogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCA/IHdpZHRoW2ldIDogMVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbHN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGZpbGwgPyBmaWxsW2ldIDogJ2JsYWNrJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB0ZXh0OiBsYWJlbFN0eWxlIGluc3RhbmNlb2Ygb2xzdHlsZS5UZXh0ID8gbGFiZWxTdHlsZSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdO1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEoZmVhdHVyZSBhcyBPbEZlYXR1cmU8T2xHZW9tZXRyeT4pLmdldFN0eWxlKCkpIHtcbiAgICAgICAgaWYgKGJhc2VTdHlsZSkge1xuICAgICAgICAgIHN0eWxlID0gdGhpcy5jcmVhdGVTdHlsZShiYXNlU3R5bGUpO1xuICAgICAgICAgIGlmIChsYWJlbFN0eWxlKSB7XG4gICAgICAgICAgICBzdHlsZS5zZXRUZXh0KGxhYmVsU3R5bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUgPSBbXG4gICAgICAgICAgbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogNCxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2xzdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBmaWxsOiBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNiYmJiZjInXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZWd1bGFyJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsID1cbiAgICAgICAgdHlwZW9mIGZlYXR1cmUuZ2V0KGF0dHJpYnV0ZSkgIT09ICd1bmRlZmluZWQnICYmIGZlYXR1cmUuZ2V0KGF0dHJpYnV0ZSkgIT09IG51bGxcbiAgICAgICAgICAgID8gZmVhdHVyZS5nZXQoYXR0cmlidXRlKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgaWYgKHZhbCA9PT0gZGF0YVtpXSB8fCB2YWwudG9TdHJpbmcoKS5tYXRjaChuZXcgUmVnRXhwKGRhdGFbaV0sICdnbWknKSkpIHtcbiAgICAgICAgICBzdHlsZSA9IFtcbiAgICAgICAgICAgIG5ldyBvbHN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2xzdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBzdHJva2UgPyBzdHJva2VbaV0gOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCA/IHdpZHRoW2ldIDogMVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgZmlsbDogbmV3IG9sc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IGZpbGwgPyBmaWxsW2ldIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KSdcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHRleHQ6IGxhYmVsU3R5bGUgaW5zdGFuY2VvZiBvbHN0eWxlLlRleHQgPyBsYWJlbFN0eWxlIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF07XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZmVhdHVyZSBpbnN0YW5jZW9mIE9sRmVhdHVyZSkge1xuICAgICAgICBpZiAoIWZlYXR1cmUuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgIGlmIChiYXNlU3R5bGUpIHtcbiAgICAgICAgICAgIHN0eWxlID0gdGhpcy5jcmVhdGVTdHlsZShiYXNlU3R5bGUpO1xuICAgICAgICAgICAgaWYgKGxhYmVsU3R5bGUpIHtcbiAgICAgICAgICAgICAgc3R5bGUuc2V0VGV4dChsYWJlbFN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGUgPSBbXG4gICAgICAgICAgICBuZXcgb2xzdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJ1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgZmlsbDogbmV3IG9sc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjYmJiYmYyJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdO1xuICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNsdXN0ZXJTdHlsZShmZWF0dXJlLCBjbHVzdGVyUGFyYW06IENsdXN0ZXJQYXJhbSA9IHt9LCBsYXllclN0eWxlKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGNvbnN0IHNpemUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKS5sZW5ndGg7XG4gICAgaWYgKHNpemUgIT09IDEpIHtcbiAgICAgIGlmIChjbHVzdGVyUGFyYW0uY2x1c3RlclJhbmdlcykge1xuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgY2x1c3RlclBhcmFtLmNsdXN0ZXJSYW5nZXMpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoIXIubWluUmFkaXVzIHx8IHIubWluUmFkaXVzIDw9IHNpemUpICYmXG4gICAgICAgICAgICAoIXIubWF4UmFkaXVzIHx8IHIubWF4UmFkaXVzID49IHNpemUpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBzdHlsZSA9IHRoaXMuY3JlYXRlU3R5bGUoci5zdHlsZSkgYXMgb2xzdHlsZS5DaXJjbGU7XG5cbiAgICAgICAgICAgIGlmIChyLnNob3dSYW5nZSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IG9sc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc2l6ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbHN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBzdHlsZS5zZXRUZXh0KHRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5keW5hbWljUmFkaXVzKSB7XG4gICAgICAgICAgICAgIGxldCBjbHVzdGVyUmFkaXVzOiBudW1iZXI7XG4gICAgICAgICAgICAgIGNvbnN0IHJhZGl1c01pbiA9IHN0eWxlLmdldFJhZGl1cygpO1xuICAgICAgICAgICAgICBjbHVzdGVyUmFkaXVzID0gNSAqIE1hdGgubG9nKHNpemUpO1xuICAgICAgICAgICAgICBpZiAoY2x1c3RlclJhZGl1cyA8IHJhZGl1c01pbikge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJSYWRpdXMgPSByYWRpdXNNaW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3R5bGUuaW1hZ2VfLnNldFJhZGl1cyhjbHVzdGVyUmFkaXVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXN0eWxlKSB7XG4gICAgICAgIGxldCBjbHVzdGVyUmFkaXVzOiBudW1iZXI7XG4gICAgICAgIGlmIChjbHVzdGVyUGFyYW0ucmFkaXVzQ2FsYykge1xuICAgICAgICAgIGNsdXN0ZXJSYWRpdXMgPSBjbHVzdGVyUGFyYW0ucmFkaXVzQ2FsYyhzaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByYWRpdXNNaW4gPSA2O1xuICAgICAgICAgIGNsdXN0ZXJSYWRpdXMgPSA1ICogTWF0aC5sb2coc2l6ZSk7XG4gICAgICAgICAgaWYgKGNsdXN0ZXJSYWRpdXMgPCByYWRpdXNNaW4pIHtcbiAgICAgICAgICAgIGNsdXN0ZXJSYWRpdXMgPSByYWRpdXNNaW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGUgPSBbXG4gICAgICAgICAgbmV3IG9sc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBvbHN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogY2x1c3RlclJhZGl1cyxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2xzdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBmaWxsOiBuZXcgb2xzdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjQsIDEzNCwgNDUsIDAuNSknXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRleHQ6IG5ldyBvbHN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICB0ZXh0OiBzaXplLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIGZpbGw6IG5ldyBvbHN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUgPSB0aGlzLmNyZWF0ZVN0eWxlKGxheWVyU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBnZXRMYWJlbChmZWF0dXJlLCBsYWJlbE1hdGNoKTogc3RyaW5nIHtcbiAgICBsZXQgbGFiZWwgPSBsYWJlbE1hdGNoO1xuICAgIGlmICghbGFiZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGFiZWxUb0dldCA9IEFycmF5LmZyb20obGFiZWxNYXRjaC5tYXRjaEFsbCgvXFwkXFx7KFteXFx7XFx9XSspXFx9L2cpKTtcblxuICAgIGxhYmVsVG9HZXQuZm9yRWFjaCh2ID0+IHtcbiAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSh2WzBdLCBmZWF0dXJlLmdldCh2WzFdKSk7XG4gICAgfSk7XG5cbiAgICAvLyBOb3RoaW5nIGRvbmU/IGNoZWNrIGZlYXR1cmUncyBhdHRyaWJ1dGVcbiAgICBpZiAobGFiZWxUb0dldC5sZW5ndGggPT09IDAgJiYgbGFiZWwgPT09IGxhYmVsTWF0Y2gpIHtcbiAgICAgIGxhYmVsID0gZmVhdHVyZS5nZXQobGFiZWxNYXRjaCkgfHwgbGFiZWxNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBwcml2YXRlIGd1ZXNzVHlwZUZlYXR1cmUoZmVhdHVyZSkge1xuICAgIHN3aXRjaCAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSkge1xuICAgICAgY2FzZSAnUG9pbnQnOlxuICAgICAgY2FzZSAnTXVsdGlQb2ludCc6XG4gICAgICBjYXNlICdDaXJjbGUnOlxuICAgICAgICByZXR1cm4gJ2NpcmNsZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ3JlZ3VsYXInO1xuICAgIH1cbiAgfVxufVxuIl19