(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@igo2/context'), require('@igo2/common'), require('rxjs'), require('@igo2/geo'), require('@angular/common'), require('rxjs/operators'), require('@igo2/auth'), require('@igo2/core'), require('@angular/material/button'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@ngx-translate/core'), require('@angular/material/tabs'), require('@angular/material/button-toggle'), require('@angular/material/list'), require('@angular/material/slide-toggle'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/divider'), require('@igo2/utils'), require('ol/proj'), require('@angular/material/input'), require('@angular/material/checkbox'), require('@angular/material/badge'), require('ol/format/GeoJSON'), require('ol/Feature'), require('ol/geom/Point'), require('@turf/point-on-feature'), require('ol/style'), require('@angular/animations'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@igo2/integration', ['exports', '@angular/core', '@igo2/context', '@igo2/common', 'rxjs', '@igo2/geo', '@angular/common', 'rxjs/operators', '@igo2/auth', '@igo2/core', '@angular/material/button', '@angular/material/tooltip', '@angular/material/icon', '@ngx-translate/core', '@angular/material/tabs', '@angular/material/button-toggle', '@angular/material/list', '@angular/material/slide-toggle', '@angular/material/menu', '@angular/material/core', '@angular/forms', '@angular/material/form-field', '@angular/material/select', '@angular/material/divider', '@igo2/utils', 'ol/proj', '@angular/material/input', '@angular/material/checkbox', '@angular/material/badge', 'ol/format/GeoJSON', 'ol/Feature', 'ol/geom/Point', '@turf/point-on-feature', 'ol/style', '@angular/animations', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.igo2 = global.igo2 || {}, global.igo2.integration = {}), global.ng.core, global.igoContext, global.igoCommon, global.rxjs, global.igoGeo, global.ng.common, global.rxjs.operators, global.igoAuth, global.igoCore, global.ng.material.button, global.ng.material.tooltip, global.ng.material.icon, global["ngxt-core"], global.ng.material.tabs, global.ng.material.buttonToggle, global.ng.material.list, global.ng.material.slideToggle, global.ng.material.menu, global.ng.material.core, global.ng.forms, global.ng.material.formField, global.ng.material.select, global.ng.material.divider, global.igoUtils, global.olProj, global.ng.material.input, global.ng.material.checkbox, global.ng.material.badge, global.olFormatGeoJSON, global.olFeature, global.olPoint, global.pointOnFeature, global.olstyle, global.ng.animations, global.ng.common.http));
})(this, (function (exports, i0, i1, i4, rxjs, i1$1, i4$1, operators, i2, i2$1, i3, i4$2, i6, i8, i5, buttonToggle, i7, i10, i6$2, i8$1, i3$1, i6$1, i7$1, i9, utils, olproj, i10$1, checkbox, i12, olFormatGeoJSON, olFeature, olPoint, pointOnFeature, olstyle, animations, i3$2) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace$2 = /*#__PURE__*/_interopNamespace(i4$2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i6__namespace$2 = /*#__PURE__*/_interopNamespace(i6$2);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i7__namespace$1 = /*#__PURE__*/_interopNamespace(i7$1);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var olproj__namespace = /*#__PURE__*/_interopNamespace(olproj);
    var i10__namespace$1 = /*#__PURE__*/_interopNamespace(i10$1);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var olFormatGeoJSON__default = /*#__PURE__*/_interopDefaultLegacy(olFormatGeoJSON);
    var olFeature__default = /*#__PURE__*/_interopDefaultLegacy(olFeature);
    var olPoint__default = /*#__PURE__*/_interopDefaultLegacy(olPoint);
    var pointOnFeature__default = /*#__PURE__*/_interopDefaultLegacy(pointOnFeature);
    var olstyle__namespace = /*#__PURE__*/_interopNamespace(olstyle);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);

    var IgoAppAnalyticsModule = /** @class */ (function () {
        function IgoAppAnalyticsModule() {
        }
        return IgoAppAnalyticsModule;
    }());
    IgoAppAnalyticsModule.ɵfac = function IgoAppAnalyticsModule_Factory(t) { return new (t || IgoAppAnalyticsModule)(); };
    IgoAppAnalyticsModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppAnalyticsModule });
    IgoAppAnalyticsModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppAnalyticsModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    exports.ImportExportType = void 0;
    (function (ImportExportType) {
        ImportExportType["layer"] = "layer";
        ImportExportType["context"] = "context";
    })(exports.ImportExportType || (exports.ImportExportType = {}));
    exports.ImportExportMode = void 0;
    (function (ImportExportMode) {
        ImportExportMode["import"] = "import";
        ImportExportMode["export"] = "export";
    })(exports.ImportExportMode || (exports.ImportExportMode = {}));
    /**
     * Service that holds the state of the importExport module
     */
    var ImportExportState = /** @class */ (function () {
        function ImportExportState() {
            this.importExportType$ = new rxjs.BehaviorSubject(exports.ImportExportType.layer);
            this.selectedMode$ = new rxjs.BehaviorSubject(exports.ImportExportMode.import);
            this.exportOptions$ = new rxjs.BehaviorSubject(undefined);
        }
        ImportExportState.prototype.setImportExportType = function (type) {
            this.importExportType$.next(type);
        };
        ImportExportState.prototype.setMode = function (mode) {
            this.selectedMode$.next(mode);
        };
        ImportExportState.prototype.setsExportOptions = function (exportOptions) {
            this.exportOptions$.next(exportOptions);
        };
        return ImportExportState;
    }());
    ImportExportState.ɵfac = function ImportExportState_Factory(t) { return new (t || ImportExportState)(); };
    ImportExportState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ImportExportState, factory: ImportExportState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ImportExportState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    /**
     * Service that holds the state of the search module
     */
    var ToolState = /** @class */ (function () {
        function ToolState(toolService, importExportState) {
            this.toolService = toolService;
            this.importExportState = importExportState;
            this.openSidenav$ = new rxjs.BehaviorSubject(undefined);
        }
        Object.defineProperty(ToolState.prototype, "toolbox", {
            get: function () {
                return this.toolService.toolbox;
            },
            enumerable: false,
            configurable: true
        });
        ToolState.prototype.toolToActivateFromOptions = function (toolToActivate) {
            if (!toolToActivate) {
                return;
            }
            if (toolToActivate.tool === 'importExport') {
                var exportOptions = this.importExportState.exportOptions$.value;
                if (!exportOptions) {
                    exportOptions = {
                        layers: toolToActivate.options.layers,
                        featureInMapExtent: toolToActivate.options.featureInMapExtent
                    };
                }
                else {
                    exportOptions.layers = toolToActivate.options.layers;
                    exportOptions.featureInMapExtent = toolToActivate.options.featureInMapExtent;
                }
                this.importExportState.setsExportOptions(exportOptions);
                this.importExportState.setMode(exports.ImportExportMode.export);
            }
            if (this.toolbox.getTool(toolToActivate.tool)) {
                this.toolbox.activateTool(toolToActivate.tool);
                this.openSidenav$.next(true);
            }
        };
        return ToolState;
    }());
    ToolState.ɵfac = function ToolState_Factory(t) { return new (t || ToolState)(i0__namespace.ɵɵinject(i4__namespace.ToolService), i0__namespace.ɵɵinject(ImportExportState)); };
    ToolState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ToolState, factory: ToolState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i4__namespace.ToolService }, { type: ImportExportState }]; }, null);
    })();

    exports.ContextEditorToolComponent = /** @class */ (function () {
        function ContextEditorToolComponent(toolState) {
            this.toolState = toolState;
        }
        ContextEditorToolComponent.prototype.submitSuccessed = function () {
            this.toolState.toolbox.activatePreviousTool();
        };
        return ContextEditorToolComponent;
    }());
    exports.ContextEditorToolComponent.ɵfac = function ContextEditorToolComponent_Factory(t) { return new (t || exports.ContextEditorToolComponent)(i0__namespace.ɵɵdirectiveInject(ToolState)); };
    exports.ContextEditorToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ContextEditorToolComponent, selectors: [["igo-context-editor-tool"]], decls: 1, vars: 0, consts: [["igoContextEditBinding", "", 3, "submitSuccessed"]], template: function ContextEditorToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "igo-context-edit", 0);
                i0__namespace.ɵɵlistener("submitSuccessed", function ContextEditorToolComponent_Template_igo_context_edit_submitSuccessed_0_listener() { return ctx.submitSuccessed(); });
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.ContextEditComponent, i1__namespace.ContextEditBindingDirective], encapsulation: 2 });
    exports.ContextEditorToolComponent = __decorate([
        i4.ToolComponent({
            name: 'contextEditor',
            title: 'igo.integration.tools.contexts',
            icon: 'star',
            parent: 'contextManager'
        })
    ], exports.ContextEditorToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ContextEditorToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-editor-tool',
                        templateUrl: './context-editor-tool.component.html'
                    }]
            }], function () { return [{ type: ToolState }]; }, null);
    })();

    // import { BehaviorSubject } from 'rxjs';
    /**
     * Service that holds the state of the map module
     */
    var MapState = /** @class */ (function () {
        function MapState(mapService, projectionService // Don't remove this or it'll never be injected
        ) {
            this.mapService = mapService;
            this.projectionService = projectionService;
            this._map = new i1$1.IgoMap({
                controls: {
                    scaleLine: true,
                    attribution: {
                        collapsed: true
                    }
                }
            });
            this.mapService.setMap(this.map);
        }
        Object.defineProperty(MapState.prototype, "showAllLegendsValue", {
            // public mapCenter$ = new BehaviorSubject<boolean>(false);
            get: function () {
                return this._legendToolShowAll;
            },
            set: function (value) {
                this._legendToolShowAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapState.prototype, "map", {
            /**
             * Active map
             */
            get: function () { return this._map; },
            enumerable: false,
            configurable: true
        });
        return MapState;
    }());
    MapState.ɵfac = function MapState_Factory(t) { return new (t || MapState)(i0__namespace.ɵɵinject(i1__namespace$1.MapService), i0__namespace.ɵɵinject(i1__namespace$1.ProjectionService)); };
    MapState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MapState, factory: MapState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MapState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace$1.MapService }, { type: i1__namespace$1.ProjectionService }]; }, null);
    })();

    exports.ContextManagerToolComponent = /** @class */ (function () {
        function ContextManagerToolComponent(toolState, mapState) {
            this.toolState = toolState;
            this.mapState = mapState;
            this.toolToOpenOnContextChange = 'mapTools';
        }
        Object.defineProperty(ContextManagerToolComponent.prototype, "map", {
            get: function () { return this.mapState.map; },
            enumerable: false,
            configurable: true
        });
        ContextManagerToolComponent.prototype.editContext = function () {
            this.toolState.toolbox.activateTool('contextEditor');
        };
        ContextManagerToolComponent.prototype.managePermissions = function () {
            this.toolState.toolbox.activateTool('contextPermissionManager');
        };
        return ContextManagerToolComponent;
    }());
    exports.ContextManagerToolComponent.ɵfac = function ContextManagerToolComponent_Factory(t) { return new (t || exports.ContextManagerToolComponent)(i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(MapState)); };
    exports.ContextManagerToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ContextManagerToolComponent, selectors: [["igo-context-manager-tool"]], inputs: { toolToOpenOnContextChange: "toolToOpenOnContextChange" }, decls: 1, vars: 1, consts: [["igoContextListBinding", "", 3, "map", "edit", "managePermissions"]], template: function ContextManagerToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "igo-context-list", 0);
                i0__namespace.ɵɵlistener("edit", function ContextManagerToolComponent_Template_igo_context_list_edit_0_listener() { return ctx.editContext(); })("managePermissions", function ContextManagerToolComponent_Template_igo_context_list_managePermissions_0_listener() { return ctx.managePermissions(); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("map", ctx.map);
            }
        }, directives: [i1__namespace.ContextListComponent, i1__namespace.ContextListBindingDirective], encapsulation: 2 });
    exports.ContextManagerToolComponent = __decorate([
        i4.ToolComponent({
            name: 'contextManager',
            title: 'igo.integration.tools.contexts',
            icon: 'star'
        })
    ], exports.ContextManagerToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ContextManagerToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-manager-tool',
                        templateUrl: './context-manager-tool.component.html'
                    }]
            }], function () { return [{ type: ToolState }, { type: MapState }]; }, { toolToOpenOnContextChange: [{
                    type: i0.Input
                }] });
    })();

    exports.ContextPermissionManagerToolComponent = /** @class */ (function () {
        function ContextPermissionManagerToolComponent() {
        }
        return ContextPermissionManagerToolComponent;
    }());
    exports.ContextPermissionManagerToolComponent.ɵfac = function ContextPermissionManagerToolComponent_Factory(t) { return new (t || exports.ContextPermissionManagerToolComponent)(); };
    exports.ContextPermissionManagerToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ContextPermissionManagerToolComponent, selectors: [["igo-context-permission-manager-tool"]], decls: 1, vars: 0, consts: [["igoContextPermissionsBinding", ""]], template: function ContextPermissionManagerToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-context-permissions", 0);
            }
        }, directives: [i1__namespace.ContextPermissionsComponent, i1__namespace.ContextPermissionsBindingDirective], encapsulation: 2 });
    exports.ContextPermissionManagerToolComponent = __decorate([
        i4.ToolComponent({
            name: 'contextPermissionManager',
            title: 'igo.integration.tools.contexts',
            icon: 'star',
            parent: 'contextManager'
        })
    ], exports.ContextPermissionManagerToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ContextPermissionManagerToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-permission-manager-tool',
                        templateUrl: './context-permission-manager-tool.component.html'
                    }]
            }], null, null);
    })();

    /**
     * Service that holds the state of layer list tool values
     */
    var LayerListToolState = /** @class */ (function () {
        function LayerListToolState() {
            this.keyword$ = new rxjs.BehaviorSubject('');
            this.sortAlpha$ = new rxjs.BehaviorSubject(undefined);
            this.onlyVisible$ = new rxjs.BehaviorSubject(undefined);
            this.selectedTab$ = new rxjs.BehaviorSubject(undefined);
        }
        LayerListToolState.prototype.setKeyword = function (keyword) {
            this.keyword$.next(keyword);
        };
        LayerListToolState.prototype.setSortAlpha = function (sort) {
            this.sortAlpha$.next(sort);
        };
        LayerListToolState.prototype.setOnlyVisible = function (onlyVisible) {
            this.onlyVisible$.next(onlyVisible);
        };
        LayerListToolState.prototype.setSelectedTab = function (tab) {
            this.selectedTab$.next(tab);
        };
        LayerListToolState.prototype.getLayerListControls = function () {
            return {
                keyword: this.keyword$.value,
                onlyVisible: this.onlyVisible$.value,
                sortAlpha: this.sortAlpha$.value
            };
        };
        return LayerListToolState;
    }());
    LayerListToolState.ɵfac = function LayerListToolState_Factory(t) { return new (t || LayerListToolState)(); };
    LayerListToolState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: LayerListToolState, factory: LayerListToolState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LayerListToolState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    exports.ContextShareToolComponent = /** @class */ (function () {
        function ContextShareToolComponent(mapState, layerListToolState) {
            this.mapState = mapState;
            this.layerListToolState = layerListToolState;
        }
        Object.defineProperty(ContextShareToolComponent.prototype, "map", {
            get: function () { return this.mapState.map; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextShareToolComponent.prototype, "layerListControls", {
            get: function () { return this.layerListToolState.getLayerListControls(); },
            enumerable: false,
            configurable: true
        });
        return ContextShareToolComponent;
    }());
    exports.ContextShareToolComponent.ɵfac = function ContextShareToolComponent_Factory(t) { return new (t || exports.ContextShareToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(LayerListToolState)); };
    exports.ContextShareToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ContextShareToolComponent, selectors: [["igo-context-share-tool"]], decls: 1, vars: 1, consts: [[3, "map"]], template: function ContextShareToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-share-map", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("map", ctx.map);
            }
        }, directives: [i1__namespace.ShareMapComponent], encapsulation: 2 });
    exports.ContextShareToolComponent = __decorate([
        i4.ToolComponent({
            name: 'shareMap',
            title: 'igo.integration.tools.shareMap',
            icon: 'share-variant'
        })
    ], exports.ContextShareToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ContextShareToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-share-tool',
                        templateUrl: './context-share-tool.component.html'
                    }]
            }], function () { return [{ type: MapState }, { type: LayerListToolState }]; }, null);
    })();

    var IgoAppContextModule = /** @class */ (function () {
        function IgoAppContextModule() {
        }
        return IgoAppContextModule;
    }());
    IgoAppContextModule.ɵfac = function IgoAppContextModule_Factory(t) { return new (t || IgoAppContextModule)(); };
    IgoAppContextModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppContextModule });
    IgoAppContextModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1.IgoContextModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppContextModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.IgoContextModule],
                        declarations: [
                            exports.ContextEditorToolComponent,
                            exports.ContextManagerToolComponent,
                            exports.ContextPermissionManagerToolComponent,
                            exports.ContextShareToolComponent
                        ],
                        exports: [
                            exports.ContextEditorToolComponent,
                            exports.ContextManagerToolComponent,
                            exports.ContextPermissionManagerToolComponent,
                            exports.ContextShareToolComponent
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppContextModule, { declarations: [exports.ContextEditorToolComponent,
                exports.ContextManagerToolComponent,
                exports.ContextPermissionManagerToolComponent,
                exports.ContextShareToolComponent], imports: [i1.IgoContextModule], exports: [exports.ContextEditorToolComponent,
                exports.ContextManagerToolComponent,
                exports.ContextPermissionManagerToolComponent,
                exports.ContextShareToolComponent] });
    })();

    /**
     * Service that holds the state of the catalog module
     */
    var CatalogState = /** @class */ (function () {
        function CatalogState(authService) {
            var _this = this;
            /**
             * Catalog -> Catalog items store mapping
             */
            this.catalogItemsStores = new Map();
            this._catalogStore = new i4.EntityStore([]);
            authService.authenticate$.subscribe(function () {
                _this.clearCatalogItemsStores();
            });
        }
        Object.defineProperty(CatalogState.prototype, "catalogStore", {
            /**
             * Store that contains all the catalogs
             */
            get: function () { return this._catalogStore; },
            enumerable: false,
            configurable: true
        });
        /**
         * Get a catalog's items store
         * @param catalog Catalog
         * @returns Store that contains the catalog items
         */
        CatalogState.prototype.getCatalogItemsStore = function (catalog) {
            return this.catalogItemsStores.get(catalog.id);
        };
        /**
         * Bind a catalog items store to a catalog
         * @param catalog Catalog
         * @param store Catalog items store
         */
        CatalogState.prototype.setCatalogItemsStore = function (catalog, store) {
            this.catalogItemsStores.set(catalog.id, store);
        };
        /**
         * Clear all catalog items stores
         */
        CatalogState.prototype.clearCatalogItemsStores = function () {
            this.catalogItemsStores.clear();
        };
        return CatalogState;
    }());
    CatalogState.ɵfac = function CatalogState_Factory(t) { return new (t || CatalogState)(i0__namespace.ɵɵinject(i2__namespace.AuthService)); };
    CatalogState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: CatalogState, factory: CatalogState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CatalogState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i2__namespace.AuthService }]; }, null);
    })();

    /**
     * Tool to browse the list of available catalogs.
     */
    exports.CatalogLibraryToolComponent = /** @class */ (function () {
        function CatalogLibraryToolComponent(catalogService, catalogState, toolState, storageService) {
            this.catalogService = catalogService;
            this.catalogState = catalogState;
            this.toolState = toolState;
            this.storageService = storageService;
            /**
             * Determine if the form to add a catalog is allowed
             */
            this.addCatalogAllowed = false;
            /**
             * List of predefined catalogs
             */
            this.predefinedCatalogs = [];
        }
        Object.defineProperty(CatalogLibraryToolComponent.prototype, "store", {
            /**
             * Store that contains the catalogs
             * @internal
             */
            get: function () {
                return this.catalogState.catalogStore;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @internal
         */
        CatalogLibraryToolComponent.prototype.ngOnInit = function () {
            if (this.store.count === 0) {
                this.loadCatalogs();
            }
        };
        /**
         * When the selected catalog changes, toggle the the CatalogBrowser tool.
         * @internal
         * @param event Select event
         */
        CatalogLibraryToolComponent.prototype.onCatalogSelectChange = function (event) {
            if (event.selected === false) {
                return;
            }
            this.toolState.toolbox.activateTool('catalogBrowser');
        };
        /**
         * Get all the available catalogs from the CatalogService and
         * load them into the store.
         */
        CatalogLibraryToolComponent.prototype.loadCatalogs = function () {
            var _this = this;
            this.catalogService.loadCatalogs().pipe(operators.take(1)).subscribe(function (catalogs) {
                _this.store.clear();
                _this.store.load(catalogs.concat((_this.storageService.get('addedCatalogs') || [])));
            });
        };
        return CatalogLibraryToolComponent;
    }());
    exports.CatalogLibraryToolComponent.ɵfac = function CatalogLibraryToolComponent_Factory(t) { return new (t || exports.CatalogLibraryToolComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.CatalogService), i0__namespace.ɵɵdirectiveInject(CatalogState), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.StorageService)); };
    exports.CatalogLibraryToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.CatalogLibraryToolComponent, selectors: [["igo-catalog-library-tool"]], inputs: { addCatalogAllowed: "addCatalogAllowed", predefinedCatalogs: "predefinedCatalogs" }, decls: 1, vars: 3, consts: [[3, "predefinedCatalogs", "addCatalogAllowed", "store", "catalogSelectChange"]], template: function CatalogLibraryToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "igo-catalog-library", 0);
                i0__namespace.ɵɵlistener("catalogSelectChange", function CatalogLibraryToolComponent_Template_igo_catalog_library_catalogSelectChange_0_listener($event) { return ctx.onCatalogSelectChange($event); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("predefinedCatalogs", ctx.predefinedCatalogs)("addCatalogAllowed", ctx.addCatalogAllowed)("store", ctx.store);
            }
        }, directives: [i1__namespace$1.CatalogLibaryComponent], encapsulation: 2, changeDetection: 0 });
    exports.CatalogLibraryToolComponent = __decorate([
        i4.ToolComponent({
            name: 'catalog',
            title: 'igo.integration.tools.catalog',
            icon: 'layers-plus'
        })
    ], exports.CatalogLibraryToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.CatalogLibraryToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-catalog-library-tool',
                        templateUrl: './catalog-library-tool.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1__namespace$1.CatalogService }, { type: CatalogState }, { type: ToolState }, { type: i2__namespace$1.StorageService }]; }, { addCatalogAllowed: [{
                    type: i0.Input
                }], predefinedCatalogs: [{
                    type: i0.Input
                }] });
    })();

    /**
     * @ignore
     */
    var IgoAppCatalogLibraryToolModule = /** @class */ (function () {
        function IgoAppCatalogLibraryToolModule() {
        }
        return IgoAppCatalogLibraryToolModule;
    }());
    IgoAppCatalogLibraryToolModule.ɵfac = function IgoAppCatalogLibraryToolModule_Factory(t) { return new (t || IgoAppCatalogLibraryToolModule)(); };
    IgoAppCatalogLibraryToolModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppCatalogLibraryToolModule });
    IgoAppCatalogLibraryToolModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4$1.CommonModule,
                i1$1.IgoCatalogLibraryModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppCatalogLibraryToolModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4$1.CommonModule,
                            i1$1.IgoCatalogLibraryModule
                        ],
                        declarations: [exports.CatalogLibraryToolComponent],
                        exports: [exports.CatalogLibraryToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppCatalogLibraryToolModule, { declarations: [exports.CatalogLibraryToolComponent], imports: [i4$1.CommonModule,
                i1$1.IgoCatalogLibraryModule], exports: [exports.CatalogLibraryToolComponent] });
    })();

    function CatalogBrowserToolComponent_igo_catalog_browser_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-catalog-browser", 1);
        }
        if (rf & 2) {
            var store_r1 = ctx.ngIf;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("catalog", ctx_r0.catalog)("store", store_r1)("map", ctx_r0.map)("toggleCollapsedGroup", ctx_r0.toggleCollapsedGroup);
        }
    }
    /**
     * Tool to browse a catalog's groups and layers and display them to a map.
     */
    exports.CatalogBrowserToolComponent = /** @class */ (function () {
        function CatalogBrowserToolComponent(catalogService, catalogState, mapState, authService) {
            this.catalogService = catalogService;
            this.catalogState = catalogState;
            this.mapState = mapState;
            this.authService = authService;
            /**
             * Store that contains the catalog items
             * @internal
             */
            this.store$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Whether a group can be toggled when it's collapsed
             */
            this.toggleCollapsedGroup = true;
        }
        Object.defineProperty(CatalogBrowserToolComponent.prototype, "map", {
            /**
             * Map to add layers to
             * @internal
             */
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @internal
         */
        CatalogBrowserToolComponent.prototype.ngOnInit = function () {
            var _this = this;
            var catalogStore = this.catalogState.catalogStore;
            this.catalog$$ = catalogStore.stateView
                .firstBy$(function (record) { return record.state.selected === true; })
                .subscribe(function (record) {
                if (record && record.entity) {
                    var catalog = record.entity;
                    _this.catalog = catalog;
                }
            });
            this.authenticate$$ = this.authService.authenticate$.subscribe(function () {
                _this.loadCatalogItems(_this.catalog);
            });
        };
        /**
         * @internal
         */
        CatalogBrowserToolComponent.prototype.ngOnDestroy = function () {
            this.catalog$$.unsubscribe();
            this.authenticate$$.unsubscribe();
        };
        /**
         * Get the selected catalog's items from the CatalogService and
         * load them into the store.
         * @param catalog Selected catalog
         */
        CatalogBrowserToolComponent.prototype.loadCatalogItems = function (catalog) {
            var _this = this;
            var store = this.catalogState.getCatalogItemsStore(catalog);
            if (store !== undefined) {
                this.store$.next(store);
                return;
            }
            store = new i4.EntityStore([]);
            this.catalogState.setCatalogItemsStore(catalog, store);
            this.catalogService
                .loadCatalogItems(catalog)
                .pipe(operators.take(1))
                .subscribe(function (items) {
                store.load(items);
                _this.store$.next(store);
            });
        };
        return CatalogBrowserToolComponent;
    }());
    exports.CatalogBrowserToolComponent.ɵfac = function CatalogBrowserToolComponent_Factory(t) { return new (t || exports.CatalogBrowserToolComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.CatalogService), i0__namespace.ɵɵdirectiveInject(CatalogState), i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService)); };
    exports.CatalogBrowserToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.CatalogBrowserToolComponent, selectors: [["igo-catalog-browser-tool"]], inputs: { toggleCollapsedGroup: "toggleCollapsedGroup" }, decls: 2, vars: 3, consts: [[3, "catalog", "store", "map", "toggleCollapsedGroup", 4, "ngIf"], [3, "catalog", "store", "map", "toggleCollapsedGroup"]], template: function CatalogBrowserToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, CatalogBrowserToolComponent_igo_catalog_browser_0_Template, 1, 4, "igo-catalog-browser", 0);
                i0__namespace.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 1, ctx.store$));
            }
        }, directives: [i4__namespace$1.NgIf, i1__namespace$1.CatalogBrowserComponent], pipes: [i4__namespace$1.AsyncPipe], encapsulation: 2, changeDetection: 0 });
    exports.CatalogBrowserToolComponent = __decorate([
        i4.ToolComponent({
            name: 'catalogBrowser',
            title: 'igo.integration.tools.catalog',
            icon: 'photo-browser',
            parent: 'catalog'
        })
    ], exports.CatalogBrowserToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.CatalogBrowserToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-catalog-browser-tool',
                        templateUrl: './catalog-browser-tool.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1__namespace$1.CatalogService }, { type: CatalogState }, { type: MapState }, { type: i2__namespace.AuthService }]; }, { toggleCollapsedGroup: [{
                    type: i0.Input
                }] });
    })();

    /**
     * @ignore
     */
    var IgoAppCatalogBrowserToolModule = /** @class */ (function () {
        function IgoAppCatalogBrowserToolModule() {
        }
        return IgoAppCatalogBrowserToolModule;
    }());
    IgoAppCatalogBrowserToolModule.ɵfac = function IgoAppCatalogBrowserToolModule_Factory(t) { return new (t || IgoAppCatalogBrowserToolModule)(); };
    IgoAppCatalogBrowserToolModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppCatalogBrowserToolModule });
    IgoAppCatalogBrowserToolModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4$1.CommonModule,
                i1$1.IgoCatalogBrowserModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppCatalogBrowserToolModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4$1.CommonModule,
                            i1$1.IgoCatalogBrowserModule
                        ],
                        declarations: [exports.CatalogBrowserToolComponent],
                        exports: [exports.CatalogBrowserToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppCatalogBrowserToolModule, { declarations: [exports.CatalogBrowserToolComponent], imports: [i4$1.CommonModule,
                i1$1.IgoCatalogBrowserModule], exports: [exports.CatalogBrowserToolComponent] });
    })();

    var IgoAppCatalogModule = /** @class */ (function () {
        function IgoAppCatalogModule() {
        }
        return IgoAppCatalogModule;
    }());
    IgoAppCatalogModule.ɵfac = function IgoAppCatalogModule_Factory(t) { return new (t || IgoAppCatalogModule)(); };
    IgoAppCatalogModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppCatalogModule });
    IgoAppCatalogModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[], IgoAppCatalogLibraryToolModule,
            IgoAppCatalogBrowserToolModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppCatalogModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        exports: [
                            IgoAppCatalogLibraryToolModule,
                            IgoAppCatalogBrowserToolModule
                        ],
                        declarations: []
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppCatalogModule, { exports: [IgoAppCatalogLibraryToolModule,
                IgoAppCatalogBrowserToolModule] });
    })();

    /**
     * Service that holds the state of the direction module
     */
    var DirectionState = /** @class */ (function () {
        function DirectionState(mapState) {
            var _this = this;
            this.mapState = mapState;
            this.zoomToActiveRoute$ = new rxjs.Subject();
            /**
             * Store that holds the stop
             */
            this.stopsStore = new i1$1.StopsStore([]);
            /**
             * Store that holds the driving stops as feature
             */
            this.stopsFeatureStore = new i1$1.StopsFeatureStore([], {
                map: this.mapState.map
            });
            /**
             * Store that holds the driving route as feature
             */
            this.routesFeatureStore = new i1$1.RoutesFeatureStore([], {
                map: this.mapState.map
            });
            this.stepFeatureStore = new i1$1.StepFeatureStore([], {
                map: this.mapState.map
            });
            this.debounceTime = 200;
            this.mapState.map.ol.once('rendercomplete', function () {
                _this.stopsFeatureStore.empty$.subscribe(function (empty) {
                    var _a;
                    if ((_a = _this.stopsFeatureStore.layer) === null || _a === void 0 ? void 0 : _a.options) {
                        _this.stopsFeatureStore.layer.options.showInLayerList = !empty;
                    }
                });
                _this.routesFeatureStore.empty$.subscribe(function (empty) {
                    var _a;
                    if ((_a = _this.routesFeatureStore.layer) === null || _a === void 0 ? void 0 : _a.options) {
                        _this.routesFeatureStore.layer.options.showInLayerList = !empty;
                    }
                });
            });
            this.mapState.map.layers$.subscribe(function () {
                if (!_this.mapState.map.getLayerById('igo-direction-stops-layer')) {
                    _this.stopsStore.deleteMany(_this.stopsStore.all());
                    _this.stopsFeatureStore.deleteMany(_this.stopsFeatureStore.all()); // not necessary
                }
                if (!_this.mapState.map.getLayerById('igo-direction-route-layer')) {
                    _this.routesFeatureStore.deleteMany(_this.routesFeatureStore.all());
                }
            });
        }
        return DirectionState;
    }());
    DirectionState.ɵfac = function DirectionState_Factory(t) { return new (t || DirectionState)(i0__namespace.ɵɵinject(MapState)); };
    DirectionState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DirectionState, factory: DirectionState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DirectionState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: MapState }]; }, null);
    })();

    /**
     * Service that holds the state of the context module
     */
    var ContextState = /** @class */ (function () {
        function ContextState(contextService, toolService, toolState, languageService) {
            var _this = this;
            this.contextService = contextService;
            this.toolService = toolService;
            this.toolState = toolState;
            this.languageService = languageService;
            /**
             * Observable of the active context
             */
            this.context$ = new rxjs.BehaviorSubject(undefined);
            this.contextService.context$.subscribe(function (context) {
                _this.onContextChange(context);
            });
            this.contextService.toolsChanged$.subscribe(function (context) {
                _this.updateTools(context);
            });
        }
        /**
         * Set the active context
         * @param context Detailed context
         */
        ContextState.prototype.setContext = function (context) {
            this.updateTools(context);
            this.context$.next(context);
        };
        /**
         * Update the tool state with the context's tools
         * @param context Detailed context
         */
        ContextState.prototype.updateTools = function (context) {
            var _this = this;
            var toolbox = this.toolState.toolbox;
            var tools = [];
            var contextTools = context.tools || [];
            contextTools.forEach(function (contextTool) {
                var baseTool = _this.toolService.getTool(contextTool.name);
                if (baseTool === undefined) {
                    return;
                }
                var options = Object.assign({}, baseTool.options || {}, contextTool.options || {});
                var tool = Object.assign({}, baseTool, contextTool, { options: options });
                tools.push(tool);
            });
            tools.forEach(function (tool) {
                if (tool.parent) {
                    var parentIndex = tools.findIndex(function (el) { return el.name === tool.parent; });
                    if (parentIndex !== -1) {
                        tools[parentIndex].children = [];
                        tools[parentIndex].children.push(tool.name);
                    }
                }
            });
            toolbox.setTools(tools);
            toolbox.setToolbar(context.toolbar || []);
            // TODO: This is a patch so the context service can work without
            // injecting the ToolState or without being completely refactored
            this.contextService.setTools([].concat(tools));
            this.contextService.setToolbar(context.toolbar || []);
        };
        /**
         * Set a new context and update the tool state
         * @param context Detailed context
         */
        ContextState.prototype.onContextChange = function (context) {
            if (context === undefined) {
                return;
            }
            this.setContext(context);
        };
        return ContextState;
    }());
    ContextState.ɵfac = function ContextState_Factory(t) { return new (t || ContextState)(i0__namespace.ɵɵinject(i1__namespace.ContextService), i0__namespace.ɵɵinject(i4__namespace.ToolService), i0__namespace.ɵɵinject(ToolState), i0__namespace.ɵɵinject(i2__namespace$1.LanguageService)); };
    ContextState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ContextState, factory: ContextState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace.ContextService }, { type: i4__namespace.ToolService }, { type: ToolState }, { type: i2__namespace$1.LanguageService }]; }, null);
    })();

    exports.DirectionsToolComponent = /** @class */ (function () {
        function DirectionsToolComponent(directionState, mapState, languageService, messageService, storageService, contextState, authService) {
            this.directionState = directionState;
            this.mapState = mapState;
            this.languageService = languageService;
            this.messageService = messageService;
            this.storageService = storageService;
            this.contextState = contextState;
            this.authService = authService;
        }
        Object.defineProperty(DirectionsToolComponent.prototype, "stopsStore", {
            /**
             * stops
             * @internal
             */
            get: function () { return this.directionState.stopsStore; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectionsToolComponent.prototype, "debounceTime", {
            get: function () { return this.directionState.debounceTime; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectionsToolComponent.prototype, "stopsFeatureStore", {
            /**
             * stops
             * @internal
             */
            get: function () { return this.directionState.stopsFeatureStore; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectionsToolComponent.prototype, "routesFeatureStore", {
            /**
             * routes
             * @internal
             */
            get: function () { return this.directionState.routesFeatureStore; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectionsToolComponent.prototype, "stepFeatureStore", {
            /**
             * step store
             * @internal
             */
            get: function () { return this.directionState.stepFeatureStore; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectionsToolComponent.prototype, "zoomToActiveRoute$", {
            /**
             * step store
             * @internal
             */
            get: function () { return this.directionState.zoomToActiveRoute$; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectionsToolComponent.prototype, "map", {
            /**
             * Map to measure on
             * @internal
             */
            get: function () { return this.mapState.map; },
            enumerable: false,
            configurable: true
        });
        DirectionsToolComponent.prototype.ngOnInit = function () {
            var _this = this;
            var warningShown = this.storageService.get('direction.warning.shown');
            if (!warningShown) {
                var translate = this.languageService.translate;
                var title = translate.instant('igo.integration.directions.warning.title');
                var msg = translate.instant('igo.integration.directions.warning.message');
                this.messageService.info(msg, title, { timeOut: 20000 });
                this.storageService.set('direction.warning.shown', true, i2$1.StorageScope.SESSION);
            }
            this.contextState.context$.subscribe(function (c) {
                if (!_this.authService.authenticated) {
                    _this.currentContextUri = c.uri;
                }
            });
        };
        return DirectionsToolComponent;
    }());
    exports.DirectionsToolComponent.ɵfac = function DirectionsToolComponent_Factory(t) { return new (t || exports.DirectionsToolComponent)(i0__namespace.ɵɵdirectiveInject(DirectionState), i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.LanguageService), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.MessageService), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.StorageService), i0__namespace.ɵɵdirectiveInject(ContextState), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService)); };
    exports.DirectionsToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.DirectionsToolComponent, selectors: [["igo-directions-tool"]], decls: 1, vars: 7, consts: [[3, "contextUri", "debounceTime", "stopsStore", "stopsFeatureStore", "stepFeatureStore", "routesFeatureStore", "zoomToActiveRoute$"]], template: function DirectionsToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-directions", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("contextUri", ctx.currentContextUri)("debounceTime", ctx.debounceTime)("stopsStore", ctx.stopsStore)("stopsFeatureStore", ctx.stopsFeatureStore)("stepFeatureStore", ctx.stepFeatureStore)("routesFeatureStore", ctx.routesFeatureStore)("zoomToActiveRoute$", ctx.zoomToActiveRoute$);
            }
        }, directives: [i1__namespace$1.DirectionsComponent], encapsulation: 2 });
    exports.DirectionsToolComponent = __decorate([
        i4.ToolComponent({
            name: 'directions',
            title: 'igo.integration.tools.directions',
            icon: 'directions'
        })
    ], exports.DirectionsToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.DirectionsToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-directions-tool',
                        templateUrl: './directions-tool.component.html'
                    }]
            }], function () { return [{ type: DirectionState }, { type: MapState }, { type: i2__namespace$1.LanguageService }, { type: i2__namespace$1.MessageService }, { type: i2__namespace$1.StorageService }, { type: ContextState }, { type: i2__namespace.AuthService }]; }, null);
    })();

    var IgoAppDirectionsModule = /** @class */ (function () {
        function IgoAppDirectionsModule() {
        }
        IgoAppDirectionsModule.forRoot = function () {
            return {
                ngModule: IgoAppDirectionsModule,
                providers: []
            };
        };
        return IgoAppDirectionsModule;
    }());
    IgoAppDirectionsModule.ɵfac = function IgoAppDirectionsModule_Factory(t) { return new (t || IgoAppDirectionsModule)(); };
    IgoAppDirectionsModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppDirectionsModule });
    IgoAppDirectionsModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.IgoDirectionsModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppDirectionsModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.IgoDirectionsModule],
                        declarations: [exports.DirectionsToolComponent],
                        exports: [exports.DirectionsToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppDirectionsModule, { declarations: [exports.DirectionsToolComponent], imports: [i1$1.IgoDirectionsModule], exports: [exports.DirectionsToolComponent] }); })();

    /**
     * Service that holds the state of the measure module
     */
    var DrawState = /** @class */ (function () {
        function DrawState(mapState) {
            var _this = this;
            this.mapState = mapState;
            /**
             * Store that holds the measures
             */
            this.store = new i1$1.FeatureStore([], {
                map: this.mapState.map
            });
            this.mapState.map.layers$.subscribe(function () {
                if (!_this.mapState.map.getLayerById('igo-draw-layer')) {
                    _this.store.deleteMany(_this.store.all());
                }
            });
        }
        return DrawState;
    }());
    DrawState.ɵfac = function DrawState_Factory(t) { return new (t || DrawState)(i0__namespace.ɵɵinject(MapState)); };
    DrawState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DrawState, factory: DrawState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DrawState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: MapState }]; }, null);
    })();

    /**
     * Tool to measure lengths and areas
     */
    exports.DrawingToolComponent = /** @class */ (function () {
        function DrawingToolComponent(drawState, mapState) {
            this.drawState = drawState;
            this.mapState = mapState;
        }
        Object.defineProperty(DrawingToolComponent.prototype, "store", {
            /**
             * Map to measure on
             * @internal
             */
            get: function () { return this.drawState.store; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DrawingToolComponent.prototype, "map", {
            /**
             * Map to measure on
             * @internal
             */
            get: function () { return this.mapState.map; },
            enumerable: false,
            configurable: true
        });
        return DrawingToolComponent;
    }());
    exports.DrawingToolComponent.ɵfac = function DrawingToolComponent_Factory(t) { return new (t || exports.DrawingToolComponent)(i0__namespace.ɵɵdirectiveInject(DrawState), i0__namespace.ɵɵdirectiveInject(MapState)); };
    exports.DrawingToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.DrawingToolComponent, selectors: [["igo-drawing-tool"]], decls: 1, vars: 2, consts: [[3, "store", "map"]], template: function DrawingToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-draw", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("store", ctx.store)("map", ctx.map);
            }
        }, directives: [i1__namespace$1.DrawComponent], encapsulation: 2, changeDetection: 0 });
    exports.DrawingToolComponent = __decorate([
        i4.ToolComponent({
            name: 'draw',
            title: 'igo.integration.tools.draw',
            icon: 'draw'
        })
    ], exports.DrawingToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.DrawingToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-drawing-tool',
                        templateUrl: './drawing-tool.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DrawState }, { type: MapState }]; }, null);
    })();

    var IgoAppDrawModule = /** @class */ (function () {
        function IgoAppDrawModule() {
        }
        return IgoAppDrawModule;
    }());
    IgoAppDrawModule.ɵfac = function IgoAppDrawModule_Factory(t) { return new (t || IgoAppDrawModule)(); };
    IgoAppDrawModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppDrawModule });
    IgoAppDrawModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.IgoDrawingToolModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppDrawModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.IgoDrawingToolModule],
                        declarations: [exports.DrawingToolComponent],
                        exports: [
                            exports.DrawingToolComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppDrawModule, { declarations: [exports.DrawingToolComponent], imports: [i1$1.IgoDrawingToolModule], exports: [exports.DrawingToolComponent] }); })();

    function handleZoomAuto(workspace, storageService) {
        var zoomStrategy = workspace.entityStore
            .getStrategyOfType(i1$1.FeatureStoreSelectionStrategy);
        zoomStrategy.setMotion(storageService.get('zoomAuto') ? i1$1.FeatureMotion.Default : i1$1.FeatureMotion.None);
    }

    /**
     * Service that holds the state of storage service
     */
    var StorageState = /** @class */ (function () {
        function StorageState(igoStorageService) {
            this.igoStorageService = igoStorageService;
        }
        Object.defineProperty(StorageState.prototype, "storageService", {
            get: function () {
                return this.igoStorageService;
            },
            enumerable: false,
            configurable: true
        });
        return StorageState;
    }());
    StorageState.ɵfac = function StorageState_Factory(t) { return new (t || StorageState)(i0__namespace.ɵɵinject(i2__namespace$1.StorageService)); };
    StorageState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: StorageState, factory: StorageState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StorageState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i2__namespace$1.StorageService }]; }, null);
    })();

    var FeatureActionsService = /** @class */ (function () {
        function FeatureActionsService(storageState, languageService, toolState, mediaService) {
            this.storageState = storageState;
            this.languageService = languageService;
            this.toolState = toolState;
            this.mediaService = mediaService;
            this.maximize$ = new rxjs.BehaviorSubject(this.storageService.get('workspaceMaximize'));
            this.zoomAuto$ = new rxjs.BehaviorSubject(false);
        }
        Object.defineProperty(FeatureActionsService.prototype, "storageService", {
            get: function () {
                return this.storageState.storageService;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FeatureActionsService.prototype, "zoomAuto", {
            get: function () {
                return this.storageService.get('zoomAuto');
            },
            enumerable: false,
            configurable: true
        });
        FeatureActionsService.prototype.ngOnDestroy = function () {
            if (this.storageChange$$) {
                this.storageChange$$.unsubscribe();
            }
        };
        FeatureActionsService.prototype.loadActions = function (workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
            var actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
            workspace.actionStore.load(actions);
        };
        FeatureActionsService.prototype.buildActions = function (workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
            var _this = this;
            this.zoomAuto$.next(this.zoomAuto);
            this.storageChange$$ = this.storageService.storageChange$
                .pipe(operators.skipWhile(function (storageChange) { return storageChange.key !== 'zoomAuto' || storageChange.event === i2$1.StorageServiceEventEnum.CLEARED; }))
                .subscribe(function () {
                _this.zoomAuto$.next(_this.zoomAuto);
                handleZoomAuto(workspace, _this.storageService);
            });
            return [
                {
                    id: 'zoomAuto',
                    checkbox: true,
                    title: 'igo.integration.workspace.zoomAuto.title',
                    tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                    checkCondition: this.zoomAuto$,
                    handler: function () {
                        handleZoomAuto(workspace, _this.storageService);
                        _this.storageService.set('zoomAuto', !_this.storageService.get('zoomAuto'));
                    }
                },
                {
                    id: 'filterInMapExtent',
                    checkbox: true,
                    title: 'igo.integration.workspace.inMapExtent.title',
                    tooltip: i1$1.mapExtentStrategyActiveToolTip(workspace),
                    checkCondition: rowsInMapExtentCheckCondition$,
                    handler: function () { return rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value); }
                },
                {
                    id: 'selectedOnly',
                    checkbox: true,
                    title: 'igo.integration.workspace.selected.title',
                    tooltip: 'igo.integration.workspace.selected.tooltip',
                    checkCondition: selectOnlyCheckCondition$,
                    handler: function () { return selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value); }
                },
                {
                    id: 'clearselection',
                    icon: 'select-off',
                    title: 'igo.integration.workspace.clearSelection.title',
                    tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                    handler: function (ws) {
                        ws.entityStore.state.updateMany(ws.entityStore.view.all(), {
                            selected: false
                        });
                    },
                    args: [workspace],
                    availability: function (ws) { return i1$1.noElementSelected(ws); }
                },
                {
                    id: 'featureDownload',
                    icon: 'file-export',
                    title: 'igo.integration.workspace.download.title',
                    tooltip: 'igo.integration.workspace.download.tooltip',
                    handler: function (ws) {
                        var filterStrategy = ws.entityStore.getStrategyOfType(i4.EntityStoreFilterCustomFuncStrategy);
                        var filterSelectionStrategy = ws.entityStore.getStrategyOfType(i4.EntityStoreFilterSelectionStrategy);
                        var layersWithSelection = filterSelectionStrategy.active
                            ? [ws.layer.id]
                            : [];
                        _this.toolState.toolToActivateFromOptions({
                            tool: 'importExport',
                            options: {
                                layers: [ws.layer.id],
                                featureInMapExtent: filterStrategy.active,
                                layersWithSelection: layersWithSelection
                            }
                        });
                    },
                    args: [workspace]
                },
                {
                    id: 'maximize',
                    title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                    tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                    icon: 'resize',
                    display: function () {
                        return _this.maximize$.pipe(operators.map(function (v) { return !v && !_this.mediaService.isMobile(); }));
                    },
                    handler: function () {
                        if (!_this.mediaService.isMobile()) {
                            _this.maximize$.next(true);
                        }
                    },
                },
                {
                    id: 'standardExtent',
                    title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                    tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                    icon: 'resize',
                    display: function () {
                        return _this.maximize$.pipe(operators.map(function (v) { return v && !_this.mediaService.isMobile(); }));
                    },
                    handler: function () {
                        _this.maximize$.next(false);
                    }
                }
            ];
        };
        return FeatureActionsService;
    }());
    FeatureActionsService.ɵfac = function FeatureActionsService_Factory(t) { return new (t || FeatureActionsService)(i0__namespace.ɵɵinject(StorageState), i0__namespace.ɵɵinject(i2__namespace$1.LanguageService), i0__namespace.ɵɵinject(ToolState), i0__namespace.ɵɵinject(i2__namespace$1.MediaService)); };
    FeatureActionsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FeatureActionsService, factory: FeatureActionsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FeatureActionsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: StorageState }, { type: i2__namespace$1.LanguageService }, { type: ToolState }, { type: i2__namespace$1.MediaService }]; }, null);
    })();

    var WfsActionsService = /** @class */ (function () {
        function WfsActionsService(ogcFilterWidget, storageState, languageService, mediaService, toolState) {
            this.ogcFilterWidget = ogcFilterWidget;
            this.storageState = storageState;
            this.languageService = languageService;
            this.mediaService = mediaService;
            this.toolState = toolState;
            this.maximize$ = new rxjs.BehaviorSubject(this.storageService.get('workspaceMaximize'));
            this.selectOnlyCheckCondition$ = new rxjs.BehaviorSubject(false);
            // rowsInMapExtentCheckCondition$: BehaviorSubject<boolean> = new BehaviorSubject(true);
            this.zoomAuto$ = new rxjs.BehaviorSubject(false);
        }
        Object.defineProperty(WfsActionsService.prototype, "storageService", {
            get: function () {
                return this.storageState.storageService;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WfsActionsService.prototype, "zoomAuto", {
            get: function () {
                return this.storageService.get('zoomAuto');
            },
            enumerable: false,
            configurable: true
        });
        WfsActionsService.prototype.ngOnDestroy = function () {
            if (this.storageChange$$) {
                this.storageChange$$.unsubscribe();
            }
        };
        WfsActionsService.prototype.loadActions = function (workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
            var actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
            workspace.actionStore.load(actions);
        };
        WfsActionsService.prototype.buildActions = function (workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
            var _this = this;
            var _a, _b;
            this.zoomAuto$.next(this.zoomAuto);
            this.storageChange$$ = this.storageService.storageChange$
                .pipe(operators.skipWhile(function (storageChange) { return (storageChange === null || storageChange === void 0 ? void 0 : storageChange.key) !== 'zoomAuto' || (storageChange === null || storageChange === void 0 ? void 0 : storageChange.event) === i2$1.StorageServiceEventEnum.CLEARED; }))
                .subscribe(function () {
                _this.zoomAuto$.next(_this.zoomAuto);
                handleZoomAuto(workspace, _this.storageService);
            });
            var actions = [
                {
                    id: 'zoomAuto',
                    checkbox: true,
                    title: 'igo.integration.workspace.zoomAuto.title',
                    tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                    checkCondition: this.zoomAuto$,
                    handler: function () {
                        handleZoomAuto(workspace, _this.storageService);
                        _this.storageService.set('zoomAuto', !_this.storageService.get('zoomAuto'));
                    }
                },
                {
                    id: 'filterInMapExtent',
                    checkbox: true,
                    title: 'igo.integration.workspace.inMapExtent.title',
                    tooltip: i1$1.mapExtentStrategyActiveToolTip(workspace),
                    checkCondition: rowsInMapExtentCheckCondition$,
                    handler: function () { return rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value); }
                },
                {
                    id: 'selectedOnly',
                    checkbox: true,
                    title: 'igo.integration.workspace.selected.title',
                    tooltip: 'igo.integration.workspace.selected.title',
                    checkCondition: selectOnlyCheckCondition$,
                    handler: function () { return selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value); }
                },
                {
                    id: 'clearselection',
                    icon: 'select-off',
                    title: 'igo.integration.workspace.clearSelection.title',
                    tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                    handler: function (ws) {
                        ws.entityStore.state.updateMany(ws.entityStore.view.all(), { selected: false });
                    },
                    args: [workspace],
                    availability: function (ws) { return i1$1.noElementSelected(ws); }
                },
                {
                    id: 'wfsDownload',
                    icon: 'file-export',
                    title: 'igo.integration.workspace.download.title',
                    tooltip: 'igo.integration.workspace.download.tooltip',
                    handler: function (ws) {
                        var filterStrategy = ws.entityStore.getStrategyOfType(i4.EntityStoreFilterCustomFuncStrategy);
                        var filterSelectionStrategy = ws.entityStore.getStrategyOfType(i4.EntityStoreFilterSelectionStrategy);
                        var layersWithSelection = filterSelectionStrategy.active ? [ws.layer.id] : [];
                        _this.toolState.toolToActivateFromOptions({
                            tool: 'importExport',
                            options: { layers: [ws.layer.id], featureInMapExtent: filterStrategy.active, layersWithSelection: layersWithSelection }
                        });
                    },
                    args: [workspace]
                },
                {
                    id: 'ogcFilter',
                    icon: 'filter',
                    title: 'igo.integration.workspace.ogcFilter.title',
                    tooltip: 'igo.integration.workspace.ogcFilter.tooltip',
                    handler: function (widget, ws) {
                        ws.activateWidget(widget, {
                            map: ws.map,
                            layer: ws.layer
                        });
                    },
                    args: [this.ogcFilterWidget, workspace]
                },
                {
                    id: 'maximize',
                    title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                    tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                    icon: 'resize',
                    display: function () {
                        return _this.maximize$.pipe(operators.map(function (v) { return !v && !_this.mediaService.isMobile(); }));
                    },
                    handler: function () {
                        if (!_this.mediaService.isMobile()) {
                            _this.maximize$.next(true);
                        }
                    },
                },
                {
                    id: 'standardExtent',
                    title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                    tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                    icon: 'resize',
                    display: function () {
                        return _this.maximize$.pipe(operators.map(function (v) { return v && !_this.mediaService.isMobile(); }));
                    },
                    handler: function () {
                        _this.maximize$.next(false);
                    }
                }
            ];
            return ((_b = (_a = workspace.layer.dataSource.ogcFilters$) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.enabled) ?
                actions : actions.filter(function (action) { return action.id !== 'ogcFilter'; });
        };
        return WfsActionsService;
    }());
    WfsActionsService.ɵfac = function WfsActionsService_Factory(t) { return new (t || WfsActionsService)(i0__namespace.ɵɵinject(i1$1.OgcFilterWidget), i0__namespace.ɵɵinject(StorageState), i0__namespace.ɵɵinject(i2__namespace$1.LanguageService), i0__namespace.ɵɵinject(i2__namespace$1.MediaService), i0__namespace.ɵɵinject(ToolState)); };
    WfsActionsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: WfsActionsService, factory: WfsActionsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WfsActionsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i4__namespace.Widget, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.OgcFilterWidget]
                        }] }, { type: StorageState }, { type: i2__namespace$1.LanguageService }, { type: i2__namespace$1.MediaService }, { type: ToolState }];
        }, null);
    })();

    var EditionActionsService = /** @class */ (function () {
        function EditionActionsService(ogcFilterWidget, storageState, languageService, mediaService, toolState) {
            this.ogcFilterWidget = ogcFilterWidget;
            this.storageState = storageState;
            this.languageService = languageService;
            this.mediaService = mediaService;
            this.toolState = toolState;
            this.maximize$ = new rxjs.BehaviorSubject(this.storageService.get('workspaceMaximize'));
            this.zoomAuto$ = new rxjs.BehaviorSubject(false);
        }
        Object.defineProperty(EditionActionsService.prototype, "storageService", {
            get: function () {
                return this.storageState.storageService;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EditionActionsService.prototype, "zoomAuto", {
            get: function () {
                return this.storageService.get('zoomAuto');
            },
            enumerable: false,
            configurable: true
        });
        EditionActionsService.prototype.ngOnDestroy = function () {
            if (this.storageChange$$) {
                this.storageChange$$.unsubscribe();
            }
        };
        EditionActionsService.prototype.loadActions = function (workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
            var actions = this.buildActions(workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$);
            workspace.actionStore.load(actions);
        };
        EditionActionsService.prototype.buildActions = function (workspace, rowsInMapExtentCheckCondition$, selectOnlyCheckCondition$) {
            var _this = this;
            var _a, _b;
            this.zoomAuto$.next(this.zoomAuto);
            this.storageChange$$ = this.storageService.storageChange$
                .pipe(operators.skipWhile(function (storageChange) { return (storageChange === null || storageChange === void 0 ? void 0 : storageChange.key) !== 'zoomAuto' || (storageChange === null || storageChange === void 0 ? void 0 : storageChange.event) === i2$1.StorageServiceEventEnum.CLEARED; }))
                .subscribe(function () {
                _this.zoomAuto$.next(_this.zoomAuto);
                handleZoomAuto(workspace, _this.storageService);
            });
            var actions = [
                {
                    id: 'zoomAuto',
                    checkbox: true,
                    title: 'igo.integration.workspace.zoomAuto.title',
                    tooltip: 'igo.integration.workspace.zoomAuto.tooltip',
                    checkCondition: this.zoomAuto$,
                    handler: function () {
                        handleZoomAuto(workspace, _this.storageService);
                        _this.storageService.set('zoomAuto', !_this.storageService.get('zoomAuto'));
                    }
                },
                {
                    id: 'filterInMapExtent',
                    checkbox: true,
                    title: 'igo.integration.workspace.inMapExtent.title',
                    tooltip: i1$1.mapExtentStrategyActiveToolTip(workspace),
                    checkCondition: rowsInMapExtentCheckCondition$,
                    handler: function () { return rowsInMapExtentCheckCondition$.next(!rowsInMapExtentCheckCondition$.value); }
                },
                {
                    id: 'selectedOnly',
                    checkbox: true,
                    title: 'igo.integration.workspace.selected.title',
                    tooltip: 'igo.integration.workspace.selected.title',
                    checkCondition: selectOnlyCheckCondition$,
                    handler: function () { return selectOnlyCheckCondition$.next(!selectOnlyCheckCondition$.value); }
                },
                {
                    id: 'clearselection',
                    icon: 'select-off',
                    title: 'igo.integration.workspace.clearSelection.title',
                    tooltip: 'igo.integration.workspace.clearSelection.tooltip',
                    handler: function (ws) {
                        ws.entityStore.state.updateMany(ws.entityStore.view.all(), { selected: false });
                    },
                    args: [workspace],
                    availability: function (ws) { return i1$1.noElementSelected(ws); }
                },
                {
                    id: 'wfsDownload',
                    icon: 'file-export',
                    title: 'igo.integration.workspace.download.title',
                    tooltip: 'igo.integration.workspace.download.tooltip',
                    handler: function (ws) {
                        var filterStrategy = ws.entityStore.getStrategyOfType(i4.EntityStoreFilterCustomFuncStrategy);
                        var filterSelectionStrategy = ws.entityStore.getStrategyOfType(i4.EntityStoreFilterSelectionStrategy);
                        var layersWithSelection = filterSelectionStrategy.active ? [ws.layer.id] : [];
                        _this.toolState.toolToActivateFromOptions({
                            tool: 'importExport',
                            options: { layers: [ws.layer.id], featureInMapExtent: filterStrategy.active, layersWithSelection: layersWithSelection }
                        });
                    },
                    args: [workspace]
                },
                {
                    id: 'ogcFilter',
                    icon: 'filter',
                    title: 'igo.integration.workspace.ogcFilter.title',
                    tooltip: 'igo.integration.workspace.ogcFilter.tooltip',
                    handler: function (widget, ws) {
                        ws.activateWidget(widget, {
                            map: ws.map,
                            layer: ws.layer
                        });
                    },
                    args: [this.ogcFilterWidget, workspace]
                },
                {
                    id: 'maximize',
                    title: this.languageService.translate.instant('igo.integration.workspace.maximize'),
                    tooltip: this.languageService.translate.instant('igo.integration.workspace.maximizeTooltip'),
                    icon: 'resize',
                    display: function () {
                        return _this.maximize$.pipe(operators.map(function (v) { return !v && !_this.mediaService.isMobile(); }));
                    },
                    handler: function () {
                        if (!_this.mediaService.isMobile()) {
                            _this.maximize$.next(true);
                        }
                    },
                },
                {
                    id: 'standardExtent',
                    title: this.languageService.translate.instant('igo.integration.workspace.standardExtent'),
                    tooltip: this.languageService.translate.instant('igo.integration.workspace.standardExtentTooltip'),
                    icon: 'resize',
                    display: function () {
                        return _this.maximize$.pipe(operators.map(function (v) { return v && !_this.mediaService.isMobile(); }));
                    },
                    handler: function () {
                        _this.maximize$.next(false);
                    }
                }
            ];
            return ((_b = (_a = workspace.layer.dataSource.ogcFilters$) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.enabled) ?
                actions : actions.filter(function (action) { return action.id !== 'ogcFilter'; });
        };
        return EditionActionsService;
    }());
    EditionActionsService.ɵfac = function EditionActionsService_Factory(t) { return new (t || EditionActionsService)(i0__namespace.ɵɵinject(i1$1.OgcFilterWidget), i0__namespace.ɵɵinject(StorageState), i0__namespace.ɵɵinject(i2__namespace$1.LanguageService), i0__namespace.ɵɵinject(i2__namespace$1.MediaService), i0__namespace.ɵɵinject(ToolState)); };
    EditionActionsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: EditionActionsService, factory: EditionActionsService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EditionActionsService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i4__namespace.Widget, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.OgcFilterWidget]
                        }] }, { type: StorageState }, { type: i2__namespace$1.LanguageService }, { type: i2__namespace$1.MediaService }, { type: ToolState }];
        }, null);
    })();

    /**
     * Service that holds the state of the workspace module
     */
    var WorkspaceState = /** @class */ (function () {
        function WorkspaceState(featureActionsService, wfsActionsService, editionActionsService, storageService) {
            this.featureActionsService = featureActionsService;
            this.wfsActionsService = wfsActionsService;
            this.editionActionsService = editionActionsService;
            this.storageService = storageService;
            this.workspacePanelExpanded = false;
            this.workspaceEnabled$ = new rxjs.BehaviorSubject(false);
            this.rowsInMapExtentCheckCondition$ = new rxjs.BehaviorSubject(true);
            this.selectOnlyCheckCondition$ = new rxjs.BehaviorSubject(false);
            this.workspaceMaximize$ = new rxjs.BehaviorSubject(this.storageService.get('workspaceMaximize'));
            this.actionMaximize$$ = [];
            /** Active widget observable. Only one may be active for all available workspaces */
            this.activeWorkspaceWidget$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Observable of the active workspace
             */
            this.workspace$ = new rxjs.BehaviorSubject(undefined);
            this.initWorkspaces();
        }
        Object.defineProperty(WorkspaceState.prototype, "store", {
            /**
             * Store that holds all the available workspaces
             */
            get: function () { return this._store; },
            enumerable: false,
            configurable: true
        });
        /**
         * Initialize the workspace store. Each time a workspace is activated,
         * subscribe to it's active widget. Tracking the active widget is useful
         * to make sure only one widget is active at a time.
         */
        WorkspaceState.prototype.initWorkspaces = function () {
            var _this = this;
            this._store = new i4.WorkspaceStore([]);
            this._store.stateView
                .firstBy$(function (record) { return record.state.active === true; })
                .subscribe(function (record) {
                var workspace = record ? record.entity : undefined;
                _this.workspace$.next(workspace);
            });
            this._store.stateView.all$()
                .subscribe(function (workspaces) {
                workspaces.map(function (wks) {
                    if (wks.entity.actionStore.empty) {
                        if (wks.entity instanceof i1$1.WfsWorkspace) {
                            _this.wfsActionsService.loadActions(wks.entity, _this.rowsInMapExtentCheckCondition$, _this.selectOnlyCheckCondition$);
                        }
                        else if (wks.entity instanceof i1$1.FeatureWorkspace) {
                            _this.featureActionsService.loadActions(wks.entity, _this.rowsInMapExtentCheckCondition$, _this.selectOnlyCheckCondition$);
                        }
                        else if (wks.entity instanceof i1$1.EditionWorkspace) {
                            _this.editionActionsService.loadActions(wks.entity, _this.rowsInMapExtentCheckCondition$, _this.selectOnlyCheckCondition$);
                        }
                    }
                });
            });
            this.actionMaximize$$.push(this.featureActionsService.maximize$.subscribe(function (maximized) {
                _this.setWorkspaceIsMaximized(maximized);
            }));
            this.actionMaximize$$.push(this.wfsActionsService.maximize$.subscribe(function (maximized) {
                _this.setWorkspaceIsMaximized(maximized);
            }));
            this.actionMaximize$$.push(this.editionActionsService.maximize$.subscribe(function (maximized) {
                _this.setWorkspaceIsMaximized(maximized);
            }));
            this.activeWorkspace$$ = this.workspace$
                .subscribe(function (workspace) {
                if (_this.activeWorkspaceWidget$$ !== undefined) {
                    _this.activeWorkspaceWidget$$.unsubscribe();
                    _this.activeWorkspaceWidget$$ = undefined;
                }
                if (workspace !== undefined) {
                    _this.activeWorkspaceWidget$$ = workspace.widget$
                        .subscribe(function (widget) { return _this.activeWorkspaceWidget$.next(widget); });
                }
            });
            this.rowsInMapExtentCheckCondition$$ = this.rowsInMapExtentCheckCondition$.subscribe(function (rowsInMapExtent) {
                _this._store.stateView.all().map(function (wks) {
                    if (!wks.entity.actionStore.empty) {
                        var filterStrategy = wks.entity.entityStore.getStrategyOfType(i4.EntityStoreFilterCustomFuncStrategy);
                        if (filterStrategy) {
                            if (rowsInMapExtent) {
                                filterStrategy.activate();
                            }
                            else {
                                filterStrategy.deactivate();
                            }
                        }
                    }
                });
            });
            this.selectOnlyCheckCondition$$ = this.selectOnlyCheckCondition$.subscribe(function (selectOnly) {
                _this._store.stateView.all().map(function (wks) {
                    if (!wks.entity.actionStore.empty) {
                        var filterStrategy = wks.entity.entityStore.getStrategyOfType(i4.EntityStoreFilterSelectionStrategy);
                        if (filterStrategy) {
                            if (selectOnly) {
                                filterStrategy.activate();
                            }
                            else {
                                filterStrategy.deactivate();
                            }
                        }
                    }
                });
            });
        };
        WorkspaceState.prototype.setWorkspaceIsMaximized = function (maximized) {
            this.storageService.set('workspaceMaximize', maximized);
            this.workspaceMaximize$.next(maximized);
        };
        WorkspaceState.prototype.setActiveWorkspaceById = function (id) {
            var wksFromId = this.store
                .all()
                .find(function (workspace) { return workspace.id === id; });
            if (wksFromId) {
                this.store.activateWorkspace(wksFromId);
            }
        };
        WorkspaceState.prototype.setActiveWorkspaceByTitle = function (title) {
            var wksFromTitle = this.store
                .all()
                .find(function (workspace) { return workspace.title === title; });
            if (wksFromTitle) {
                this.store.activateWorkspace(wksFromTitle);
            }
        };
        /**
         * Teardown all the workspaces
         * @internal
         */
        WorkspaceState.prototype.ngOnDestroy = function () {
            this.teardownWorkspaces();
            this.actionMaximize$$.map(function (a) { return a.unsubscribe(); });
            if (this.rowsInMapExtentCheckCondition$$) {
                this.selectOnlyCheckCondition$$.unsubscribe();
            }
            if (this.selectOnlyCheckCondition$$) {
                this.selectOnlyCheckCondition$$.unsubscribe();
            }
        };
        /**
         * Teardown the workspace store and any subscribers
         */
        WorkspaceState.prototype.teardownWorkspaces = function () {
            this.store.clear();
            if (this.activeWorkspaceWidget$$ !== undefined) {
                this.activeWorkspaceWidget$$.unsubscribe();
            }
            if (this.activeWorkspace$$ !== undefined) {
                this.activeWorkspace$$.unsubscribe();
            }
        };
        return WorkspaceState;
    }());
    WorkspaceState.ɵfac = function WorkspaceState_Factory(t) { return new (t || WorkspaceState)(i0__namespace.ɵɵinject(FeatureActionsService), i0__namespace.ɵɵinject(WfsActionsService), i0__namespace.ɵɵinject(EditionActionsService), i0__namespace.ɵɵinject(i2__namespace$1.StorageService)); };
    WorkspaceState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: WorkspaceState, factory: WorkspaceState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WorkspaceState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: FeatureActionsService }, { type: WfsActionsService }, { type: EditionActionsService }, { type: i2__namespace$1.StorageService }]; }, null);
    })();

    function WorkspaceButtonComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 1);
            i0__namespace.ɵɵlistener("click", function WorkspaceButtonComponent_button_0_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.activateWorkspace(); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.integration.workspace.toggleWorkspace"))("color", ctx_r0.color);
        }
    }
    var WorkspaceButtonComponent = /** @class */ (function () {
        function WorkspaceButtonComponent(workspaceState) {
            this.workspaceState = workspaceState;
            this.hasWorkspace$ = new rxjs.BehaviorSubject(false);
            this.layer$ = new rxjs.BehaviorSubject(undefined);
            this.color = 'primary';
        }
        Object.defineProperty(WorkspaceButtonComponent.prototype, "layer", {
            get: function () {
                return this._layer;
            },
            set: function (value) {
                this._layer = value;
                this.layer$.next(this._layer);
            },
            enumerable: false,
            configurable: true
        });
        WorkspaceButtonComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.hasWorkspace$$ = rxjs.combineLatest([this.workspaceState.workspaceEnabled$, this.layer$])
                .subscribe(function (bunch) { var _a, _b; return _this.hasWorkspace$.next(bunch[0] && ((_b = (_a = bunch[1]) === null || _a === void 0 ? void 0 : _a.options.workspace) === null || _b === void 0 ? void 0 : _b.enabled)); });
        };
        WorkspaceButtonComponent.prototype.ngOnDestroy = function () {
            this.hasWorkspace$$.unsubscribe();
        };
        WorkspaceButtonComponent.prototype.activateWorkspace = function () {
            if (this.workspaceState.workspace$.value &&
                this.workspaceState.workspace$.value.layer.id === this.layer.id &&
                this.workspaceState.workspacePanelExpanded) {
                this.workspaceState.workspacePanelExpanded = false;
            }
            else {
                this.workspaceState.workspacePanelExpanded = true;
                this.workspaceState.setActiveWorkspaceById(this.layer.id);
            }
        };
        return WorkspaceButtonComponent;
    }());
    WorkspaceButtonComponent.ɵfac = function WorkspaceButtonComponent_Factory(t) { return new (t || WorkspaceButtonComponent)(i0__namespace.ɵɵdirectiveInject(WorkspaceState)); };
    WorkspaceButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: WorkspaceButtonComponent, selectors: [["igo-workspace-button"]], inputs: { layer: "layer", color: "color" }, decls: 2, vars: 3, consts: [["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "table"]], template: function WorkspaceButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, WorkspaceButtonComponent_button_0_Template, 3, 4, "button", 0);
                i0__namespace.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 1, ctx.hasWorkspace$));
            }
        }, directives: [i4__namespace$1.NgIf, i3__namespace.MatButton, i4__namespace$2.MatTooltip, i6__namespace.MatIcon], pipes: [i4__namespace$1.AsyncPipe, i8__namespace.TranslatePipe], styles: [""], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WorkspaceButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-workspace-button',
                        templateUrl: './workspace-button.component.html',
                        styleUrls: ['./workspace-button.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: WorkspaceState }]; }, { layer: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }] });
    })();

    var IgoAppWorkspaceModule = /** @class */ (function () {
        function IgoAppWorkspaceModule() {
        }
        return IgoAppWorkspaceModule;
    }());
    IgoAppWorkspaceModule.ɵfac = function IgoAppWorkspaceModule_Factory(t) { return new (t || IgoAppWorkspaceModule)(); };
    IgoAppWorkspaceModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppWorkspaceModule });
    IgoAppWorkspaceModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4$1.CommonModule,
                i6.MatIconModule,
                i3.MatButtonModule,
                i4$2.MatTooltipModule,
                i2$1.IgoLanguageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppWorkspaceModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4$1.CommonModule,
                            i6.MatIconModule,
                            i3.MatButtonModule,
                            i4$2.MatTooltipModule,
                            i2$1.IgoLanguageModule
                        ],
                        declarations: [WorkspaceButtonComponent],
                        exports: [WorkspaceButtonComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppWorkspaceModule, { declarations: [WorkspaceButtonComponent], imports: [i4$1.CommonModule,
                i6.MatIconModule,
                i3.MatButtonModule,
                i4$2.MatTooltipModule,
                i2$1.IgoLanguageModule], exports: [WorkspaceButtonComponent] });
    })();

    function ImportExportToolComponent_mat_tab_group_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tab-group");
            i0__namespace.ɵɵelementStart(1, "mat-tab", 3);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementStart(3, "igo-import-export", 4);
            i0__namespace.ɵɵlistener("selectMode", function ImportExportToolComponent_mat_tab_group_0_Template_igo_import_export_selectMode_3_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.modeChanged($event); })("exportOptionsChange", function ImportExportToolComponent_mat_tab_group_0_Template_igo_import_export_exportOptionsChange_3_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.exportOptionsChange($event); });
            i0__namespace.ɵɵpipe(4, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "mat-tab", 3);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelement(7, "igo-context-import-export", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(2, 9, "igo.integration.importExportTool.importExportData"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("map", ctx_r0.map)("selectFirstProj", ctx_r0.selectFirstProj)("projectionsLimitations", ctx_r0.projectionsLimitations)("store", ctx_r0.workspaceStore)("selectedMode", i0__namespace.ɵɵpipeBind1(4, 11, ctx_r0.importExportState.selectedMode$))("exportOptions$", ctx_r0.importExportState.exportOptions$);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(6, 13, "igo.integration.importExportTool.importExportContext"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("map", ctx_r0.map);
        }
    }
    function ImportExportToolComponent_igo_import_export_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-import-export", 6);
            i0__namespace.ɵɵlistener("selectMode", function ImportExportToolComponent_igo_import_export_1_Template_igo_import_export_selectMode_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.modeChanged($event); })("exportOptionsChange", function ImportExportToolComponent_igo_import_export_1_Template_igo_import_export_exportOptionsChange_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.exportOptionsChange($event); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("map", ctx_r1.map)("store", ctx_r1.workspaceStore)("selectedMode", i0__namespace.ɵɵpipeBind1(1, 4, ctx_r1.importExportState.selectedMode$))("exportOptions$", ctx_r1.importExportState.exportOptions$);
        }
    }
    function ImportExportToolComponent_igo_context_import_export_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-context-import-export", 5);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("map", ctx_r2.map);
        }
    }
    exports.ImportExportToolComponent = /** @class */ (function () {
        function ImportExportToolComponent(mapState, importExportState, workspaceState) {
            this.mapState = mapState;
            this.importExportState = importExportState;
            this.workspaceState = workspaceState;
            this.selectFirstProj = false;
            this.importExportType = exports.ImportExportType.layer;
            this.importExportShowBothType = true;
        }
        Object.defineProperty(ImportExportToolComponent.prototype, "map", {
            /**
             * Map to measure on
             * @internal
             */
            get: function () { return this.mapState.map; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ImportExportToolComponent.prototype, "workspaceStore", {
            get: function () {
                return this.workspaceState.store;
            },
            enumerable: false,
            configurable: true
        });
        ImportExportToolComponent.prototype.ngOnInit = function () {
            this.selectType();
            this.selectMode();
        };
        ImportExportToolComponent.prototype.selectType = function () {
            if (this.importExportType) {
                this.importExportState.importExportType$.next(this.importExportType);
            }
            var userSelectedType = this.importExportState.importExportType$.value;
            if (userSelectedType !== undefined) {
                this.importExportState.setImportExportType(userSelectedType);
            }
            else {
                this.importExportState.setImportExportType(exports.ImportExportType.layer);
            }
        };
        ImportExportToolComponent.prototype.selectMode = function () {
            var userSelectedMode = this.importExportState.selectedMode$.value;
            if (userSelectedMode !== undefined) {
                this.importExportState.setMode(userSelectedMode);
            }
            else {
                this.importExportState.setMode(exports.ImportExportMode.import);
            }
        };
        ImportExportToolComponent.prototype.modeChanged = function (mode) {
            this.importExportState.setMode(mode);
        };
        ImportExportToolComponent.prototype.exportOptionsChange = function (exportOptions) {
            this.importExportState.setsExportOptions(exportOptions);
        };
        ImportExportToolComponent.prototype.importExportTypeChange = function (event) {
            this.importExportType = event.value;
        };
        return ImportExportToolComponent;
    }());
    exports.ImportExportToolComponent.ɵfac = function ImportExportToolComponent_Factory(t) { return new (t || exports.ImportExportToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(ImportExportState), i0__namespace.ɵɵdirectiveInject(WorkspaceState)); };
    exports.ImportExportToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ImportExportToolComponent, selectors: [["igo-import-export-tool"]], inputs: { projectionsLimitations: "projectionsLimitations", selectFirstProj: "selectFirstProj", importExportType: "importExportType", importExportShowBothType: "importExportShowBothType" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "map", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange", 4, "ngIf"], [3, "map", 4, "ngIf"], [3, "label"], [3, "map", "selectFirstProj", "projectionsLimitations", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange"], [3, "map"], [3, "map", "store", "selectedMode", "exportOptions$", "selectMode", "exportOptionsChange"]], template: function ImportExportToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ImportExportToolComponent_mat_tab_group_0_Template, 8, 15, "mat-tab-group", 0);
                i0__namespace.ɵɵtemplate(1, ImportExportToolComponent_igo_import_export_1_Template, 2, 6, "igo-import-export", 1);
                i0__namespace.ɵɵtemplate(2, ImportExportToolComponent_igo_context_import_export_2_Template, 1, 1, "igo-context-import-export", 2);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.importExportShowBothType);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.importExportShowBothType && ctx.importExportType === "layer");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.importExportShowBothType && ctx.importExportType === "context");
            }
        }, directives: [i4__namespace$1.NgIf, i5__namespace.MatTabGroup, i5__namespace.MatTab, i1__namespace$1.ImportExportComponent, i1__namespace.ContextImportExportComponent], pipes: [i8__namespace.TranslatePipe, i4__namespace$1.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
    exports.ImportExportToolComponent = __decorate([
        i4.ToolComponent({
            name: 'importExport',
            title: 'igo.integration.tools.importExport',
            icon: 'file-move'
        })
    ], exports.ImportExportToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ImportExportToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-import-export-tool',
                        templateUrl: './import-export-tool.component.html',
                        styleUrls: ['./import-export-tool.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: MapState }, { type: ImportExportState }, { type: WorkspaceState }]; }, { projectionsLimitations: [{
                    type: i0.Input
                }], selectFirstProj: [{
                    type: i0.Input
                }], importExportType: [{
                    type: i0.Input
                }], importExportShowBothType: [{
                    type: i0.Input
                }] });
    })();

    var IgoAppImportExportModule = /** @class */ (function () {
        function IgoAppImportExportModule() {
        }
        IgoAppImportExportModule.forRoot = function () {
            return {
                ngModule: IgoAppImportExportModule,
                providers: []
            };
        };
        return IgoAppImportExportModule;
    }());
    IgoAppImportExportModule.ɵfac = function IgoAppImportExportModule_Factory(t) { return new (t || IgoAppImportExportModule)(); };
    IgoAppImportExportModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppImportExportModule });
    IgoAppImportExportModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.IgoImportExportModule,
                i1.IgoContextImportExportModule,
                i4$1.CommonModule,
                i2$1.IgoLanguageModule,
                buttonToggle.MatButtonToggleModule,
                i5.MatTabsModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppImportExportModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.IgoImportExportModule,
                            i1.IgoContextImportExportModule,
                            i4$1.CommonModule,
                            i2$1.IgoLanguageModule,
                            buttonToggle.MatButtonToggleModule,
                            i5.MatTabsModule
                        ],
                        declarations: [exports.ImportExportToolComponent],
                        exports: [exports.ImportExportToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppImportExportModule, { declarations: [exports.ImportExportToolComponent], imports: [i1$1.IgoImportExportModule,
                i1.IgoContextImportExportModule,
                i4$1.CommonModule,
                i2$1.IgoLanguageModule,
                buttonToggle.MatButtonToggleModule,
                i5.MatTabsModule], exports: [exports.ImportExportToolComponent] });
    })();

    function MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelement(0, "igo-workspace-button", 4);
            i0__namespace.ɵɵelementStart(1, "igo-export-button", 5);
            i0__namespace.ɵɵlistener("click", function MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template_igo_export_button_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r7_1); var layer_r5 = restoredCtx.layer; var ctx_r6 = i0__namespace.ɵɵnextContext(2); return ctx_r6.activateExport(layer_r5); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(2, "igo-ogc-filter-button", 6);
            i0__namespace.ɵɵelement(3, "igo-time-filter-button", 6);
            i0__namespace.ɵɵelement(4, "igo-track-feature-button", 7);
            i0__namespace.ɵɵelement(5, "igo-metadata-button", 4);
        }
        if (rf & 2) {
            var layer_r5 = ctx.layer;
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("layer", layer_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("layer", layer_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("header", ctx_r4.ogcButton)("layer", layer_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("header", ctx_r4.timeButton)("layer", layer_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("trackFeature", true)("layer", layer_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("layer", layer_r5);
        }
    }
    function MapDetailsToolComponent_igo_layer_list_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "igo-layer-list", 2);
            i0__namespace.ɵɵtemplate(1, MapDetailsToolComponent_igo_layer_list_0_ng_template_1_Template, 6, 9, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("map", ctx_r0.map)("excludeBaseLayers", ctx_r0.excludeBaseLayers)("layerFilterAndSortOptions", ctx_r0.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx_r0.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx_r0.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx_r0.updateLegendOnResolutionChange)("queryBadge", ctx_r0.queryBadge);
        }
    }
    function MapDetailsToolComponent_ng_template_2_mat_list_0_p_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 9);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
        }
    }
    function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 11);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 12);
            i0__namespace.ɵɵelement(3, "path", 13);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 14);
            i0__namespace.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(3); return ctx_r13.searchEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
        }
    }
    function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 11);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 12);
            i0__namespace.ɵɵelement(3, "path", 15);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 16);
            i0__namespace.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var ctx_r15 = i0__namespace.ɵɵnextContext(3); return ctx_r15.catalogEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
        }
    }
    function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 11);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 12);
            i0__namespace.ɵɵelement(3, "path", 17);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 18);
            i0__namespace.ɵɵlistener("click", function MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r18_1); var ctx_r17 = i0__namespace.ɵɵnextContext(3); return ctx_r17.contextEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
        }
    }
    function MapDetailsToolComponent_ng_template_2_mat_list_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list");
            i0__namespace.ɵɵelementStart(1, "p", 9);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, MapDetailsToolComponent_ng_template_2_mat_list_0_p_4_Template, 3, 3, "p", 10);
            i0__namespace.ɵɵtemplate(5, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 8);
            i0__namespace.ɵɵtemplate(6, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 8);
            i0__namespace.ɵɵtemplate(7, MapDetailsToolComponent_ng_template_2_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 8);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && (ctx_r8.searchToolInToolbar || ctx_r8.catalogToolInToolbar || ctx_r8.contextToolInToolbar));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.searchToolInToolbar);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.catalogToolInToolbar);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.contextToolInToolbar);
        }
    }
    function MapDetailsToolComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, MapDetailsToolComponent_ng_template_2_mat_list_0_Template, 8, 7, "mat-list", 8);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.delayedShowEmptyMapContent);
        }
    }
    exports.MapDetailsToolComponent = /** @class */ (function () {
        function MapDetailsToolComponent(mapState, toolState, searchSourceService, cdRef, importExportState) {
            this.mapState = mapState;
            this.toolState = toolState;
            this.searchSourceService = searchSourceService;
            this.cdRef = cdRef;
            this.importExportState = importExportState;
            this.delayedShowEmptyMapContent = false;
            this.toggleLegendOnVisibilityChange = false;
            this.expandLegendOfVisibleLayers = false;
            this.updateLegendOnResolutionChange = false;
            this.ogcButton = true;
            this.timeButton = true;
            this.layerListControls = {};
            this.queryBadge = false;
            this.layerAdditionAllowed = true;
        }
        Object.defineProperty(MapDetailsToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapDetailsToolComponent.prototype, "layers$", {
            get: function () {
                var _this = this;
                return this.map.layers$.pipe(operators.map(function (layers) { return layers.filter(function (layer) { return layer.showInLayerList !== false &&
                    (!_this.excludeBaseLayers || !layer.baseLayer); }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapDetailsToolComponent.prototype, "excludeBaseLayers", {
            get: function () {
                return this.layerListControls.excludeBaseLayers || false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapDetailsToolComponent.prototype, "layerFilterAndSortOptions", {
            get: function () {
                var filterSortOptions = Object.assign({
                    showToolbar: i1$1.LayerListControlsEnum.default
                }, this.layerListControls);
                switch (this.layerListControls.showToolbar) {
                    case i1$1.LayerListControlsEnum.always:
                        filterSortOptions.showToolbar = i1$1.LayerListControlsEnum.always;
                        break;
                    case i1$1.LayerListControlsEnum.never:
                        filterSortOptions.showToolbar = i1$1.LayerListControlsEnum.never;
                        break;
                    default:
                        break;
                }
                return filterSortOptions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapDetailsToolComponent.prototype, "searchToolInToolbar", {
            get: function () {
                return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
                    this.searchSourceService
                        .getSources()
                        .filter(i1$1.sourceCanSearch)
                        .filter(function (s) { return s.available && s.getType() === 'Layer'; }).length > 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapDetailsToolComponent.prototype, "catalogToolInToolbar", {
            get: function () {
                return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapDetailsToolComponent.prototype, "contextToolInToolbar", {
            get: function () {
                return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
            },
            enumerable: false,
            configurable: true
        });
        MapDetailsToolComponent.prototype.ngOnInit = function () {
            var _this = this;
            // prevent message to be shown too quickly. Waiting for layers
            setTimeout(function () {
                _this.delayedShowEmptyMapContent = true;
                _this.cdRef.detectChanges();
            }, 250);
        };
        MapDetailsToolComponent.prototype.searchEmit = function () {
            this.toolState.toolbox.activateTool('searchResults');
        };
        MapDetailsToolComponent.prototype.catalogEmit = function () {
            this.toolState.toolbox.activateTool('catalog');
        };
        MapDetailsToolComponent.prototype.contextEmit = function () {
            this.toolState.toolbox.activateTool('contextManager');
        };
        MapDetailsToolComponent.prototype.activateExport = function (layer) {
            var _a;
            var id = layer.id;
            if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
                id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
            }
            this.importExportState.setsExportOptions({ layers: [id] });
            this.importExportState.setMode(exports.ImportExportMode.export);
            this.toolState.toolbox.activateTool('importExport');
        };
        return MapDetailsToolComponent;
    }());
    exports.MapDetailsToolComponent.ɵfac = function MapDetailsToolComponent_Factory(t) { return new (t || exports.MapDetailsToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.SearchSourceService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(ImportExportState)); };
    exports.MapDetailsToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.MapDetailsToolComponent, selectors: [["igo-map-details-tool"]], inputs: { toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", ogcButton: "ogcButton", timeButton: "timeButton", layerListControls: "layerListControls", queryBadge: "queryBadge", layerAdditionAllowed: "layerAdditionAllowed" }, decls: 4, vars: 4, consts: [["class", "mapDetailsList", "igoLayerListBinding", "", "floatLabel", "never", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "queryBadge", 4, "ngIf", "ngIfElse"], ["empty", ""], ["igoLayerListBinding", "", "floatLabel", "never", 1, "mapDetailsList", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "queryBadge"], ["igoLayerItemToolbar", ""], [3, "layer"], [3, "layer", "click"], [3, "header", "layer"], [3, "trackFeature", "layer"], [4, "ngIf"], [1, "map-empty", "mat-typography"], ["class", "map-empty mat-typography", 4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapDetailsToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, MapDetailsToolComponent_igo_layer_list_0_Template, 3, 7, "igo-layer-list", 0);
                i0__namespace.ɵɵpipe(1, "async");
                i0__namespace.ɵɵtemplate(2, MapDetailsToolComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 2, ctx.layers$).length)("ngIfElse", _r1);
            }
        }, directives: [i4__namespace$1.NgIf, i1__namespace$1.LayerListComponent, i1__namespace$1.LayerListBindingDirective, WorkspaceButtonComponent, i1__namespace$1.ExportButtonComponent, i1__namespace$1.OgcFilterButtonComponent, i1__namespace$1.TimeFilterButtonComponent, i1__namespace$1.TrackFeatureButtonComponent, i1__namespace$1.MetadataButtonComponent, i7__namespace.MatList, i7__namespace.MatListItem, i6__namespace.MatIcon, i7__namespace.MatListIconCssMatStyler, i8__namespace$1.MatLine], pipes: [i4__namespace$1.AsyncPipe, i8__namespace.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}.mapDetailsList[_ngcontent-%COMP%]{overflow:hidden}"] });
    exports.MapDetailsToolComponent = __decorate([
        i4.ToolComponent({
            name: 'mapDetails',
            title: 'igo.integration.tools.map',
            icon: 'map'
        })
    ], exports.MapDetailsToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.MapDetailsToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-map-details-tool',
                        templateUrl: './map-details-tool.component.html',
                        styleUrls: ['./map-details-tool.component.scss']
                    }]
            }], function () { return [{ type: MapState }, { type: ToolState }, { type: i1__namespace$1.SearchSourceService }, { type: i0__namespace.ChangeDetectorRef }, { type: ImportExportState }]; }, { toggleLegendOnVisibilityChange: [{
                    type: i0.Input
                }], expandLegendOfVisibleLayers: [{
                    type: i0.Input
                }], updateLegendOnResolutionChange: [{
                    type: i0.Input
                }], ogcButton: [{
                    type: i0.Input
                }], timeButton: [{
                    type: i0.Input
                }], layerListControls: [{
                    type: i0.Input
                }], queryBadge: [{
                    type: i0.Input
                }], layerAdditionAllowed: [{
                    type: i0.Input
                }] });
    })();

    function MapToolComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelement(0, "igo-workspace-button", 4);
            i0__namespace.ɵɵelementStart(1, "igo-export-button", 5);
            i0__namespace.ɵɵlistener("click", function MapToolComponent_ng_template_4_Template_igo_export_button_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var layer_r2 = restoredCtx.layer; var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.activateExport(layer_r2); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(2, "igo-ogc-filter-button", 6);
            i0__namespace.ɵɵelement(3, "igo-time-filter-button", 6);
            i0__namespace.ɵɵelement(4, "igo-track-feature-button", 7);
            i0__namespace.ɵɵelement(5, "igo-metadata-button", 4);
        }
        if (rf & 2) {
            var layer_r2 = ctx.layer;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("layer", layer_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("layer", layer_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("header", ctx_r1.ogcButton)("layer", layer_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("header", ctx_r1.timeButton)("layer", layer_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("trackFeature", true)("layer", layer_r2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("layer", layer_r2);
        }
    }
    /**
     * Tool to browse a map's layers or to choose a different map
     */
    exports.MapToolComponent = /** @class */ (function () {
        function MapToolComponent(mapState, toolState, importExportState) {
            this.mapState = mapState;
            this.toolState = toolState;
            this.importExportState = importExportState;
            this.toggleLegendOnVisibilityChange = false;
            this.expandLegendOfVisibleLayers = false;
            this.updateLegendOnResolutionChange = false;
            this.ogcButton = true;
            this.timeButton = true;
            this.layerListControls = {};
            this.queryBadge = false;
        }
        Object.defineProperty(MapToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolComponent.prototype, "excludeBaseLayers", {
            get: function () {
                return this.layerListControls.excludeBaseLayers || false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolComponent.prototype, "layerFilterAndSortOptions", {
            get: function () {
                var filterSortOptions = Object.assign({
                    showToolbar: i1$1.LayerListControlsEnum.default
                }, this.layerListControls);
                switch (this.layerListControls.showToolbar) {
                    case i1$1.LayerListControlsEnum.always:
                        filterSortOptions.showToolbar = i1$1.LayerListControlsEnum.always;
                        break;
                    case i1$1.LayerListControlsEnum.never:
                        filterSortOptions.showToolbar = i1$1.LayerListControlsEnum.never;
                        break;
                    default:
                        break;
                }
                return filterSortOptions;
            },
            enumerable: false,
            configurable: true
        });
        MapToolComponent.prototype.activateExport = function (layer) {
            var _a;
            var id = layer.id;
            if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
                id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
            }
            this.importExportState.setsExportOptions({ layers: [id] });
            this.importExportState.setMode(exports.ImportExportMode.export);
            this.toolState.toolbox.activateTool('importExport');
        };
        return MapToolComponent;
    }());
    exports.MapToolComponent.ɵfac = function MapToolComponent_Factory(t) { return new (t || exports.MapToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(ImportExportState)); };
    exports.MapToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.MapToolComponent, selectors: [["igo-map-tool"]], inputs: { toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", ogcButton: "ogcButton", timeButton: "timeButton", layerListControls: "layerListControls", queryBadge: "queryBadge" }, decls: 9, vars: 14, consts: [[3, "label"], ["igoLayerListBinding", "", 3, "map", "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge"], ["igoLayerItemToolbar", ""], ["igoContextListBinding", ""], [3, "layer"], [3, "layer", "click"], [3, "header", "layer"], [3, "trackFeature", "layer"]], template: function MapToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group");
                i0__namespace.ɵɵelementStart(1, "mat-tab", 0);
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelementStart(3, "igo-layer-list", 1);
                i0__namespace.ɵɵtemplate(4, MapToolComponent_ng_template_4_Template, 6, 9, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-tab", 0);
                i0__namespace.ɵɵpipe(7, "translate");
                i0__namespace.ɵɵelement(8, "igo-context-list", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(2, 10, "igo.integration.tools.map"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("map", ctx.map)("excludeBaseLayers", ctx.excludeBaseLayers)("layerFilterAndSortOptions", ctx.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx.updateLegendOnResolutionChange)("floatLabel", false)("queryBadge", ctx.queryBadge);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(7, 12, "igo.integration.tools.contexts"));
            }
        }, directives: [i5__namespace.MatTabGroup, i5__namespace.MatTab, i1__namespace$1.LayerListComponent, i1__namespace$1.LayerListBindingDirective, i1__namespace.ContextListComponent, i1__namespace.ContextListBindingDirective, WorkspaceButtonComponent, i1__namespace$1.ExportButtonComponent, i1__namespace$1.OgcFilterButtonComponent, i1__namespace$1.TimeFilterButtonComponent, i1__namespace$1.TrackFeatureButtonComponent, i1__namespace$1.MetadataButtonComponent], pipes: [i8__namespace.TranslatePipe], styles: ["mat-tab-group[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{height:100%;overflow:hidden}[_nghost-%COMP%]     .mat-tab-body-content{overflow:hidden}"], changeDetection: 0 });
    exports.MapToolComponent = __decorate([
        i4.ToolComponent({
            name: 'map',
            title: 'igo.integration.tools.map',
            icon: 'map'
        })
    ], exports.MapToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.MapToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-map-tool',
                        templateUrl: './map-tool.component.html',
                        styleUrls: ['./map-tool.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: MapState }, { type: ToolState }, { type: ImportExportState }]; }, { toggleLegendOnVisibilityChange: [{
                    type: i0.Input
                }], expandLegendOfVisibleLayers: [{
                    type: i0.Input
                }], updateLegendOnResolutionChange: [{
                    type: i0.Input
                }], ogcButton: [{
                    type: i0.Input
                }], timeButton: [{
                    type: i0.Input
                }], layerListControls: [{
                    type: i0.Input
                }], queryBadge: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = ["tabGroup"];
    function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-time-filter-button", 14);
            i0__namespace.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template_igo_time_filter_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(3); return ctx_r13.activateTimeFilter(); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var layer_r9 = i0__namespace.ɵɵnextContext().layer;
            var ctx_r10 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("header", ctx_r10.timeButton)("layer", layer_r9);
        }
    }
    function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-ogc-filter-button", 14);
            i0__namespace.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template_igo_ogc_filter_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r17_1); var ctx_r16 = i0__namespace.ɵɵnextContext(3); return ctx_r16.activateOgcFilter(); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var layer_r9 = i0__namespace.ɵɵnextContext().layer;
            var ctx_r11 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("header", ctx_r11.ogcButton)("layer", layer_r9);
        }
    }
    function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-export-button", 15);
            i0__namespace.ɵɵlistener("click", function MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template_igo_export_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r21_1); var layer_r9 = i0__namespace.ɵɵnextContext().layer; var ctx_r19 = i0__namespace.ɵɵnextContext(2); return ctx_r19.activateExport(layer_r9); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var layer_r9 = i0__namespace.ɵɵnextContext().layer;
            i0__namespace.ɵɵproperty("layer", layer_r9);
        }
    }
    function MapToolsComponent_igo_layer_list_5_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-metadata-button", 10);
            i0__namespace.ɵɵelement(1, "igo-track-feature-button", 11);
            i0__namespace.ɵɵtemplate(2, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_time_filter_button_2_Template, 1, 2, "igo-time-filter-button", 12);
            i0__namespace.ɵɵtemplate(3, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_ogc_filter_button_3_Template, 1, 2, "igo-ogc-filter-button", 12);
            i0__namespace.ɵɵtemplate(4, MapToolsComponent_igo_layer_list_5_ng_template_1_igo_export_button_4_Template, 1, 1, "igo-export-button", 13);
            i0__namespace.ɵɵelement(5, "igo-workspace-button", 10);
        }
        if (rf & 2) {
            var layer_r9 = ctx.layer;
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("layer", layer_r9);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("trackFeature", true)("layer", layer_r9);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.isTimeFilterButton(layer_r9));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.isOGCFilterButton(layer_r9));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.isExportButton(layer_r9));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("layer", layer_r9);
        }
    }
    function MapToolsComponent_igo_layer_list_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-layer-list", 8);
            i0__namespace.ɵɵlistener("appliedFilterAndSort", function MapToolsComponent_igo_layer_list_5_Template_igo_layer_list_appliedFilterAndSort_0_listener($event) { i0__namespace.ɵɵrestoreView(_r24_1); var ctx_r23 = i0__namespace.ɵɵnextContext(); return ctx_r23.onLayerListChange($event); });
            i0__namespace.ɵɵtemplate(1, MapToolsComponent_igo_layer_list_5_ng_template_1_Template, 6, 7, "ng-template", null, 9, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("excludeBaseLayers", ctx_r1.excludeBaseLayers)("layerFilterAndSortOptions", ctx_r1.layerFilterAndSortOptions)("expandLegendOfVisibleLayers", ctx_r1.expandLegendOfVisibleLayers)("toggleLegendOnVisibilityChange", ctx_r1.toggleLegendOnVisibilityChange)("updateLegendOnResolutionChange", ctx_r1.updateLegendOnResolutionChange)("floatLabel", false)("queryBadge", ctx_r1.queryBadge)("map", ctx_r1.map);
        }
    }
    function MapToolsComponent_igo_layer_legend_list_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-layer-legend-list", 16);
            i0__namespace.ɵɵlistener("allLegendsShown", function MapToolsComponent_igo_layer_legend_list_9_Template_igo_layer_legend_list_allLegendsShown_0_listener($event) { i0__namespace.ɵɵrestoreView(_r26_1); var ctx_r25 = i0__namespace.ɵɵnextContext(); return ctx_r25.onShowAllLegends($event); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("allowShowAllLegends", ctx_r2.allowShowAllLegends)("showAllLegendsValue", i0__namespace.ɵɵpipeBind1(1, 4, ctx_r2.showAllLegendsValue$))("excludeBaseLayers", ctx_r2.excludeBaseLayers)("updateLegendOnResolutionChange", ctx_r2.updateLegendOnResolutionChange);
        }
    }
    function MapToolsComponent_10_ng_template_0_Template(rf, ctx) { }
    function MapToolsComponent_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, MapToolsComponent_10_ng_template_0_Template, 0, 0, "ng-template");
        }
    }
    function MapToolsComponent_p_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 17);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, ctx_r4.visibleLayers$).length ? i0__namespace.ɵɵpipeBind1(3, 3, "igo.integration.mapTool.noLayersInRange") : i0__namespace.ɵɵpipeBind1(4, 5, "igo.integration.mapTool.noLayersVisible"), " ");
        }
    }
    function MapToolsComponent_ng_template_15_mat_list_0_p_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 17);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
        }
    }
    function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 19);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 20);
            i0__namespace.ɵɵelement(3, "path", 21);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 22);
            i0__namespace.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r34_1); var ctx_r33 = i0__namespace.ɵɵnextContext(3); return ctx_r33.searchEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
        }
    }
    function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 19);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 20);
            i0__namespace.ɵɵelement(3, "path", 23);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 24);
            i0__namespace.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r36_1); var ctx_r35 = i0__namespace.ɵɵnextContext(3); return ctx_r35.catalogEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
        }
    }
    function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 19);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 20);
            i0__namespace.ɵɵelement(3, "path", 25);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 26);
            i0__namespace.ɵɵlistener("click", function MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r38_1); var ctx_r37 = i0__namespace.ɵɵnextContext(3); return ctx_r37.contextEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
        }
    }
    function MapToolsComponent_ng_template_15_mat_list_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list");
            i0__namespace.ɵɵelementStart(1, "p", 17);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, MapToolsComponent_ng_template_15_mat_list_0_p_4_Template, 3, 3, "p", 6);
            i0__namespace.ɵɵtemplate(5, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 18);
            i0__namespace.ɵɵtemplate(6, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 18);
            i0__namespace.ɵɵtemplate(7, MapToolsComponent_ng_template_15_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 18);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r28 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && (ctx_r28.searchToolInToolbar || ctx_r28.catalogToolInToolbar || ctx_r28.contextToolInToolbar));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.searchToolInToolbar);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.catalogToolInToolbar);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r28.layerAdditionAllowed && ctx_r28.contextToolInToolbar);
        }
    }
    function MapToolsComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, MapToolsComponent_ng_template_15_mat_list_0_Template, 8, 7, "mat-list", 18);
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", ctx_r6.delayedShowEmptyMapContent);
        }
    }
    /**
     * Tool to browse a map's layers or to choose a different map
     */
    exports.MapToolsComponent = /** @class */ (function () {
        function MapToolsComponent(layerListToolState, toolState, mapState, searchSourceService, importExportState) {
            this.layerListToolState = layerListToolState;
            this.toolState = toolState;
            this.mapState = mapState;
            this.searchSourceService = searchSourceService;
            this.importExportState = importExportState;
            this.layers$ = new rxjs.BehaviorSubject([]);
            this.showAllLegendsValue$ = new rxjs.BehaviorSubject(false);
            this.delayedShowEmptyMapContent = false;
            this.allowShowAllLegends = false;
            this.showAllLegendsValue = false;
            this.toggleLegendOnVisibilityChange = false;
            this.expandLegendOfVisibleLayers = false;
            this.updateLegendOnResolutionChange = false;
            this.ogcButton = true;
            this.timeButton = true;
            this.layerAdditionAllowed = true;
            this._layerListControls = {};
            this.queryBadge = false;
        }
        Object.defineProperty(MapToolsComponent.prototype, "layerListControls", {
            get: function () {
                return this._layerListControls;
            },
            set: function (value) {
                var stateOptions = this.layerListToolState.getLayerListControls();
                var stateKeyword = stateOptions.keyword;
                var stateOnlyVisible = stateOptions.onlyVisible;
                var stateSortAlpha = stateOptions.sortAlpha;
                value.keyword = stateKeyword !== '' ? stateKeyword : value.keyword;
                value.onlyVisible =
                    stateOnlyVisible !== undefined ? stateOnlyVisible : value.onlyVisible;
                value.sortAlpha =
                    stateSortAlpha !== undefined ? stateSortAlpha : value.sortAlpha;
                value.onlyVisible =
                    value.onlyVisible === undefined ? false : value.onlyVisible;
                value.sortAlpha = value.sortAlpha === undefined ? false : value.sortAlpha;
                this._layerListControls = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "visibleOrInRangeLayers$", {
            get: function () {
                return this.layers$.pipe(operators.map(function (layers) { return layers.filter(function (layer) { return layer.visible$.value && layer.isInResolutionsRange$.value; }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "visibleLayers$", {
            get: function () {
                return this.layers$.pipe(operators.map(function (layers) { return layers.filter(function (layer) { return layer.visible$.value; }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "excludeBaseLayers", {
            get: function () {
                return this.layerListControls.excludeBaseLayers || false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "layerFilterAndSortOptions", {
            get: function () {
                var filterSortOptions = Object.assign({
                    showToolbar: i1$1.LayerListControlsEnum.default
                }, this.layerListControls);
                switch (this.layerListControls.showToolbar) {
                    case i1$1.LayerListControlsEnum.always:
                        filterSortOptions.showToolbar = i1$1.LayerListControlsEnum.always;
                        break;
                    case i1$1.LayerListControlsEnum.never:
                        filterSortOptions.showToolbar = i1$1.LayerListControlsEnum.never;
                        break;
                    default:
                        break;
                }
                return filterSortOptions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "searchToolInToolbar", {
            get: function () {
                return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
                    this.searchSourceService
                        .getSources()
                        .filter(i1$1.sourceCanSearch)
                        .filter(function (s) { return s.available && s.getType() === 'Layer'; }).length > 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "catalogToolInToolbar", {
            get: function () {
                return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapToolsComponent.prototype, "contextToolInToolbar", {
            get: function () {
                return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
            },
            enumerable: false,
            configurable: true
        });
        MapToolsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.selectedTab();
            this.resolution$$ = rxjs.combineLatest([
                this.map.layers$,
                this.map.viewController.resolution$
            ])
                .pipe(operators.debounceTime(10))
                .subscribe(function (bunch) {
                _this.layers$.next(bunch[0].filter(function (layer) { return layer.showInLayerList !== false &&
                    (!_this.excludeBaseLayers || !layer.baseLayer); }));
            });
            if (this.allowShowAllLegends) {
                this.mapState.showAllLegendsValue =
                    this.mapState.showAllLegendsValue !== undefined
                        ? this.mapState.showAllLegendsValue
                        : this.showAllLegendsValue || false;
                this.showAllLegendsValue$.next(this.mapState.showAllLegendsValue);
            }
            else {
                this.showAllLegendsValue$.next(false);
            }
            // prevent message to be shown too quickly. Waiting for layers
            setTimeout(function () { return (_this.delayedShowEmptyMapContent = true); }, 250);
        };
        MapToolsComponent.prototype.ngOnDestroy = function () {
            this.resolution$$.unsubscribe();
            if (this.visibleOrInRangeLayers$$) {
                this.visibleOrInRangeLayers$$.unsubscribe();
            }
        };
        MapToolsComponent.prototype.onShowAllLegends = function (event) {
            this.mapState.showAllLegendsValue = event;
            this.showAllLegendsValue$.next(event);
        };
        MapToolsComponent.prototype.selectedTab = function () {
            var userSelectedTab = this.layerListToolState.selectedTab$.value;
            if (userSelectedTab !== undefined) {
                this.layerListToolState.setSelectedTab(userSelectedTab);
            }
            else {
                if (this.selectedTabAtOpening === 'legend') {
                    this.layerListToolState.setSelectedTab(1);
                }
                else {
                    this.layerListToolState.setSelectedTab(0);
                }
            }
        };
        MapToolsComponent.prototype.tabChanged = function (tab) {
            var _this = this;
            this.layerListToolState.setSelectedTab(tab.index);
            this.layers$.next(this.map.layers.filter(function (layer) { return layer.showInLayerList !== false &&
                (!_this.excludeBaseLayers || !layer.baseLayer); }));
        };
        MapToolsComponent.prototype.onLayerListChange = function (appliedFilters) {
            this.layerListToolState.setKeyword(appliedFilters.keyword);
            this.layerListToolState.setSortAlpha(appliedFilters.sortAlpha);
            this.layerListToolState.setOnlyVisible(appliedFilters.onlyVisible);
        };
        MapToolsComponent.prototype.showAllLegend = function () {
            if (this.layers$.getValue().length === 0) {
                return false;
            }
            else if (this.layers$.getValue().length !== 0 &&
                this.allowShowAllLegends === false) {
                var visibleOrInRangeLayers_1;
                this.visibleOrInRangeLayers$$ = this.visibleOrInRangeLayers$.subscribe(function (value) {
                    value.length === 0
                        ? (visibleOrInRangeLayers_1 = false)
                        : (visibleOrInRangeLayers_1 = true);
                });
                if (visibleOrInRangeLayers_1 === false) {
                    return false;
                }
            }
            return true;
        };
        MapToolsComponent.prototype.activateExport = function (layer) {
            var _a;
            var id = layer.id;
            if ((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.workspaceId) {
                id = layer.options.workspace.workspaceId !== layer.id ? layer.options.workspace.workspaceId : layer.id;
            }
            this.importExportState.setsExportOptions({ layers: [id] });
            this.importExportState.setMode(exports.ImportExportMode.export);
            this.toolState.toolbox.activateTool('importExport');
        };
        MapToolsComponent.prototype.activateTimeFilter = function () {
            this.toolState.toolbox.activateTool('activeTimeFilter');
        };
        MapToolsComponent.prototype.activateOgcFilter = function () {
            this.toolState.toolbox.activateTool('activeOgcFilter');
        };
        MapToolsComponent.prototype.searchEmit = function () {
            this.toolState.toolbox.activateTool('searchResults');
        };
        MapToolsComponent.prototype.catalogEmit = function () {
            this.toolState.toolbox.activateTool('catalog');
        };
        MapToolsComponent.prototype.contextEmit = function () {
            this.toolState.toolbox.activateTool('contextManager');
        };
        MapToolsComponent.prototype.isTimeFilterButton = function (layer) {
            var options = layer.dataSource.options;
            return this.timeButton && options.timeFilterable && options.timeFilter;
        };
        MapToolsComponent.prototype.isOGCFilterButton = function (layer) {
            var options = layer.dataSource.options;
            return this.ogcButton && options.ogcFilters && options.ogcFilters.enabled &&
                (options.ogcFilters.pushButtons || options.ogcFilters.checkboxes || options.ogcFilters.radioButtons
                    || options.ogcFilters.select || options.ogcFilters.editable);
        };
        MapToolsComponent.prototype.isExportButton = function (layer) {
            var _a, _b;
            if ((layer instanceof i1$1.VectorLayer && layer.exportable === true) ||
                (layer.dataSource.options.download && layer.dataSource.options.download.url) ||
                (((_a = layer.options.workspace) === null || _a === void 0 ? void 0 : _a.enabled) && ((_b = layer.options.workspace) === null || _b === void 0 ? void 0 : _b.workspaceId) !== layer.id)) {
                return true;
            }
            return false;
        };
        return MapToolsComponent;
    }());
    exports.MapToolsComponent.ɵfac = function MapToolsComponent_Factory(t) { return new (t || exports.MapToolsComponent)(i0__namespace.ɵɵdirectiveInject(LayerListToolState), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.SearchSourceService), i0__namespace.ɵɵdirectiveInject(ImportExportState)); };
    exports.MapToolsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.MapToolsComponent, selectors: [["igo-map-tools"]], viewQuery: function MapToolsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.tabGroup = _t.first);
            }
        }, inputs: { allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue", toggleLegendOnVisibilityChange: "toggleLegendOnVisibilityChange", expandLegendOfVisibleLayers: "expandLegendOfVisibleLayers", updateLegendOnResolutionChange: "updateLegendOnResolutionChange", selectedTabAtOpening: "selectedTabAtOpening", ogcButton: "ogcButton", timeButton: "timeButton", layerAdditionAllowed: "layerAdditionAllowed", layerListControls: "layerListControls", queryBadge: "queryBadge" }, decls: 17, vars: 23, consts: [[3, "selectedIndex", "selectedTabChange"], ["tabGroup", ""], [3, "label"], ["igoLayerListBinding", "", 3, "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge", "map", "appliedFilterAndSort", 4, "ngIf", "ngIfElse"], ["igoLayerLegendListBinding", "", 3, "allowShowAllLegends", "showAllLegendsValue", "excludeBaseLayers", "updateLegendOnResolutionChange", "allLegendsShown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "map-empty mat-typography", 4, "ngIf"], ["emptyLayers", ""], ["igoLayerListBinding", "", 3, "excludeBaseLayers", "layerFilterAndSortOptions", "expandLegendOfVisibleLayers", "toggleLegendOnVisibilityChange", "updateLegendOnResolutionChange", "floatLabel", "queryBadge", "map", "appliedFilterAndSort"], ["igoLayerItemToolbar", ""], [3, "layer"], [3, "trackFeature", "layer"], [3, "header", "layer", "click", 4, "ngIf"], [3, "layer", "click", 4, "ngIf"], [3, "header", "layer", "click"], [3, "layer", "click"], ["igoLayerLegendListBinding", "", 3, "allowShowAllLegends", "showAllLegendsValue", "excludeBaseLayers", "updateLegendOnResolutionChange", "allLegendsShown"], [1, "map-empty", "mat-typography"], [4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapToolsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-tab-group", 0, 1);
                i0__namespace.ɵɵlistener("selectedTabChange", function MapToolsComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) { return ctx.tabChanged($event); });
                i0__namespace.ɵɵpipe(2, "async");
                i0__namespace.ɵɵelementStart(3, "mat-tab", 2);
                i0__namespace.ɵɵpipe(4, "translate");
                i0__namespace.ɵɵtemplate(5, MapToolsComponent_igo_layer_list_5_Template, 3, 8, "igo-layer-list", 3);
                i0__namespace.ɵɵpipe(6, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-tab", 2);
                i0__namespace.ɵɵpipe(8, "translate");
                i0__namespace.ɵɵtemplate(9, MapToolsComponent_igo_layer_legend_list_9_Template, 2, 6, "igo-layer-legend-list", 4);
                i0__namespace.ɵɵtemplate(10, MapToolsComponent_10_Template, 1, 0, undefined, 5);
                i0__namespace.ɵɵpipe(11, "async");
                i0__namespace.ɵɵtemplate(12, MapToolsComponent_p_12_Template, 5, 7, "p", 6);
                i0__namespace.ɵɵpipe(13, "async");
                i0__namespace.ɵɵpipe(14, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(15, MapToolsComponent_ng_template_15_Template, 1, 1, "ng-template", null, 7, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r5 = i0__namespace.ɵɵreference(16);
                i0__namespace.ɵɵproperty("selectedIndex", i0__namespace.ɵɵpipeBind1(2, 9, ctx.layerListToolState.selectedTab$));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(4, 11, "igo.integration.tools.layers"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(6, 13, ctx.layers$).length !== 0)("ngIfElse", _r5);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(8, 15, "igo.integration.tools.legend"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.showAllLegend());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(11, 17, ctx.layers$).length !== 0)("ngIfElse", _r5);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", !ctx.allowShowAllLegends && i0__namespace.ɵɵpipeBind1(13, 19, ctx.layers$).length !== 0 && i0__namespace.ɵɵpipeBind1(14, 21, ctx.visibleOrInRangeLayers$).length === 0);
            }
        }, directives: [i5__namespace.MatTabGroup, i5__namespace.MatTab, i4__namespace$1.NgIf, i1__namespace$1.LayerListComponent, i1__namespace$1.LayerListBindingDirective, i1__namespace$1.MetadataButtonComponent, i1__namespace$1.TrackFeatureButtonComponent, WorkspaceButtonComponent, i1__namespace$1.TimeFilterButtonComponent, i1__namespace$1.OgcFilterButtonComponent, i1__namespace$1.ExportButtonComponent, i1__namespace$1.LayerLegendListComponent, i1__namespace$1.LayerLegendListBindingDirective, i7__namespace.MatList, i7__namespace.MatListItem, i6__namespace.MatIcon, i7__namespace.MatListIconCssMatStyler, i8__namespace$1.MatLine], pipes: [i4__namespace$1.AsyncPipe, i8__namespace.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}mat-tab-group[_ngcontent-%COMP%], mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-wrapper{height:100%;overflow:hidden}[_nghost-%COMP%]     .mat-tab-body-content{overflow:hidden}"], changeDetection: 0 });
    exports.MapToolsComponent = __decorate([
        i4.ToolComponent({
            name: 'mapTools',
            title: 'igo.integration.tools.map',
            icon: 'map'
        })
    ], exports.MapToolsComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.MapToolsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-map-tools',
                        templateUrl: './map-tools.component.html',
                        styleUrls: ['./map-tools.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: LayerListToolState }, { type: ToolState }, { type: MapState }, { type: i1__namespace$1.SearchSourceService }, { type: ImportExportState }]; }, { allowShowAllLegends: [{
                    type: i0.Input
                }], showAllLegendsValue: [{
                    type: i0.Input
                }], toggleLegendOnVisibilityChange: [{
                    type: i0.Input
                }], expandLegendOfVisibleLayers: [{
                    type: i0.Input
                }], updateLegendOnResolutionChange: [{
                    type: i0.Input
                }], selectedTabAtOpening: [{
                    type: i0.Input
                }], ogcButton: [{
                    type: i0.Input
                }], timeButton: [{
                    type: i0.Input
                }], layerAdditionAllowed: [{
                    type: i0.Input
                }], layerListControls: [{
                    type: i0.Input
                }], queryBadge: [{
                    type: i0.Input
                }], tabGroup: [{
                    type: i0.ViewChild,
                    args: ['tabGroup', { static: true }]
                }] });
    })();

    function MapLegendToolComponent_igo_layer_legend_list_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-layer-legend-list", 4);
            i0__namespace.ɵɵlistener("allLegendsShown", function MapLegendToolComponent_igo_layer_legend_list_0_Template_igo_layer_legend_list_allLegendsShown_0_listener($event) { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onShowAllLegends($event); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("excludeBaseLayers", ctx_r0.excludeBaseLayers)("allowShowAllLegends", ctx_r0.allowShowAllLegends)("updateLegendOnResolutionChange", ctx_r0.updateLegendOnResolutionChange)("showAllLegendsValue", i0__namespace.ɵɵpipeBind1(1, 4, ctx_r0.showAllLegendsValue$));
        }
    }
    function MapLegendToolComponent_1_ng_template_0_Template(rf, ctx) { }
    function MapLegendToolComponent_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, MapLegendToolComponent_1_ng_template_0_Template, 0, 0, "ng-template");
        }
    }
    function MapLegendToolComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, ctx_r2.visibleLayers$).length ? i0__namespace.ɵɵpipeBind1(3, 3, "igo.integration.mapTool.noLayersInRange") : i0__namespace.ɵɵpipeBind1(4, 5, "igo.integration.mapTool.noLayersVisible"), "\n");
        }
    }
    function MapLegendToolComponent_ng_template_6_mat_list_0_p_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, "igo.integration.mapTool.customize"), "");
        }
    }
    function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 7);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 8);
            i0__namespace.ɵɵelement(3, "path", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 10);
            i0__namespace.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(3); return ctx_r13.searchEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.search-tool"), " ");
        }
    }
    function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 7);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 8);
            i0__namespace.ɵɵelement(3, "path", 11);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 12);
            i0__namespace.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var ctx_r15 = i0__namespace.ɵɵnextContext(3); return ctx_r15.catalogEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.catalog-tool"), " ");
        }
    }
    function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelementStart(1, "mat-icon", 7);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(2, "svg", 8);
            i0__namespace.ɵɵelement(3, "path", 13);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelementStart(4, "h4", 14);
            i0__namespace.ɵɵlistener("click", function MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template_h4_click_4_listener() { i0__namespace.ɵɵrestoreView(_r18_1); var ctx_r17 = i0__namespace.ɵɵnextContext(3); return ctx_r17.contextEmit(); });
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 1, "igo.integration.mapTool.context-tool"), " ");
        }
    }
    function MapLegendToolComponent_ng_template_6_mat_list_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list");
            i0__namespace.ɵɵelementStart(1, "p", 5);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, MapLegendToolComponent_ng_template_6_mat_list_0_p_4_Template, 3, 3, "p", 2);
            i0__namespace.ɵɵtemplate(5, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_5_Template, 7, 3, "mat-list-item", 6);
            i0__namespace.ɵɵtemplate(6, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_6_Template, 7, 3, "mat-list-item", 6);
            i0__namespace.ɵɵtemplate(7, MapLegendToolComponent_ng_template_6_mat_list_0_mat_list_item_7_Template, 7, 3, "mat-list-item", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 5, "igo.integration.mapTool.empty"), "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && (ctx_r8.searchToolInToolbar || ctx_r8.catalogToolInToolbar || ctx_r8.contextToolInToolbar));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.searchToolInToolbar);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.catalogToolInToolbar);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r8.layerAdditionAllowed && ctx_r8.contextToolInToolbar);
        }
    }
    function MapLegendToolComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, MapLegendToolComponent_ng_template_6_mat_list_0_Template, 8, 7, "mat-list", 6);
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.delayedShowEmptyMapContent);
        }
    }
    exports.MapLegendToolComponent = /** @class */ (function () {
        function MapLegendToolComponent(mapState, toolState, searchSourceService, cdRef) {
            this.mapState = mapState;
            this.toolState = toolState;
            this.searchSourceService = searchSourceService;
            this.cdRef = cdRef;
            this.delayedShowEmptyMapContent = false;
            this.layers$ = new rxjs.BehaviorSubject([]);
            this.showAllLegendsValue$ = new rxjs.BehaviorSubject(false);
            this.change$ = new rxjs.ReplaySubject(1);
            this.updateLegendOnResolutionChange = false;
            this.layerAdditionAllowed = true;
            this.allowShowAllLegends = false;
            this.showAllLegendsValue = false;
            this.layerListControls = {};
        }
        Object.defineProperty(MapLegendToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapLegendToolComponent.prototype, "visibleOrInRangeLayers$", {
            get: function () {
                return this.layers$.pipe(operators.map(function (layers) { return layers.filter(function (layer) { return layer.visible$.value && layer.isInResolutionsRange$.value; }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapLegendToolComponent.prototype, "visibleLayers$", {
            get: function () {
                return this.layers$.pipe(operators.map(function (layers) { return layers.filter(function (layer) { return layer.visible$.value; }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapLegendToolComponent.prototype, "excludeBaseLayers", {
            get: function () {
                return this.layerListControls.excludeBaseLayers || false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapLegendToolComponent.prototype, "searchToolInToolbar", {
            get: function () {
                return (this.toolState.toolbox.getToolbar().indexOf('searchResults') !== -1 &&
                    this.searchSourceService
                        .getSources()
                        .filter(i1$1.sourceCanSearch)
                        .filter(function (s) { return s.available && s.getType() === 'Layer'; }).length > 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapLegendToolComponent.prototype, "catalogToolInToolbar", {
            get: function () {
                return this.toolState.toolbox.getToolbar().indexOf('catalog') !== -1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MapLegendToolComponent.prototype, "contextToolInToolbar", {
            get: function () {
                return this.toolState.toolbox.getToolbar().indexOf('contextManager') !== -1;
            },
            enumerable: false,
            configurable: true
        });
        MapLegendToolComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.resolution$$ = rxjs.combineLatest([
                this.map.layers$,
                this.map.viewController.resolution$
            ])
                .pipe(operators.debounceTime(10))
                .subscribe(function (bunch) {
                _this.layers$.next(bunch[0].filter(function (layer) { return layer.showInLayerList !== false &&
                    (!_this.excludeBaseLayers || !layer.baseLayer); }));
            });
            if (this.allowShowAllLegends) {
                this.mapState.showAllLegendsValue =
                    this.mapState.showAllLegendsValue !== undefined
                        ? this.mapState.showAllLegendsValue
                        : this.showAllLegendsValue || false;
                this.showAllLegendsValue$.next(this.mapState.showAllLegendsValue);
            }
            else {
                this.showAllLegendsValue$.next(false);
            }
            // prevent message to be shown too quickly. Waiting for layers
            setTimeout(function () {
                _this.delayedShowEmptyMapContent = true;
                _this.cdRef.detectChanges();
            }, 250);
        };
        MapLegendToolComponent.prototype.onShowAllLegends = function (event) {
            this.mapState.showAllLegendsValue = event;
            this.showAllLegendsValue$.next(event);
        };
        MapLegendToolComponent.prototype.showAllLegend = function () {
            if (this.layers$.getValue().length === 0) {
                return false;
            }
            else if (this.layers$.getValue().length !== 0 &&
                this.allowShowAllLegends === false) {
                var visibleOrInRangeLayers_1;
                this.visibleOrInRangeLayers$$ = this.visibleOrInRangeLayers$.subscribe(function (value) {
                    value.length === 0
                        ? (visibleOrInRangeLayers_1 = false)
                        : (visibleOrInRangeLayers_1 = true);
                });
                if (visibleOrInRangeLayers_1 === false) {
                    return false;
                }
            }
            return true;
        };
        MapLegendToolComponent.prototype.ngOnDestroy = function () {
            this.resolution$$.unsubscribe();
            if (this.visibleOrInRangeLayers$$) {
                this.visibleOrInRangeLayers$$.unsubscribe();
            }
        };
        MapLegendToolComponent.prototype.searchEmit = function () {
            this.toolState.toolbox.activateTool('searchResults');
        };
        MapLegendToolComponent.prototype.catalogEmit = function () {
            this.toolState.toolbox.activateTool('catalog');
        };
        MapLegendToolComponent.prototype.contextEmit = function () {
            this.toolState.toolbox.activateTool('contextManager');
        };
        return MapLegendToolComponent;
    }());
    exports.MapLegendToolComponent.ɵfac = function MapLegendToolComponent_Factory(t) { return new (t || exports.MapLegendToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.SearchSourceService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    exports.MapLegendToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.MapLegendToolComponent, selectors: [["igo-map-legend-tool"]], inputs: { updateLegendOnResolutionChange: "updateLegendOnResolutionChange", layerAdditionAllowed: "layerAdditionAllowed", allowShowAllLegends: "allowShowAllLegends", showAllLegendsValue: "showAllLegendsValue", layerListControls: "layerListControls" }, decls: 8, vars: 10, consts: [["igoLayerLegendListBinding", "", 3, "excludeBaseLayers", "allowShowAllLegends", "updateLegendOnResolutionChange", "showAllLegendsValue", "allLegendsShown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "map-empty mat-typography", 4, "ngIf"], ["emptyLayers", ""], ["igoLayerLegendListBinding", "", 3, "excludeBaseLayers", "allowShowAllLegends", "updateLegendOnResolutionChange", "showAllLegendsValue", "allLegendsShown"], [1, "map-empty", "mat-typography"], [4, "ngIf"], ["mat-list-icon", ""], ["viewBox", "0 0 24 24", "fit", "", "height", "100%", "width", "100%", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["d", "M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["d", "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function MapLegendToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, MapLegendToolComponent_igo_layer_legend_list_0_Template, 2, 6, "igo-layer-legend-list", 0);
                i0__namespace.ɵɵtemplate(1, MapLegendToolComponent_1_Template, 1, 0, undefined, 1);
                i0__namespace.ɵɵpipe(2, "async");
                i0__namespace.ɵɵtemplate(3, MapLegendToolComponent_p_3_Template, 5, 7, "p", 2);
                i0__namespace.ɵɵpipe(4, "async");
                i0__namespace.ɵɵpipe(5, "async");
                i0__namespace.ɵɵtemplate(6, MapLegendToolComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r3 = i0__namespace.ɵɵreference(7);
                i0__namespace.ɵɵproperty("ngIf", ctx.showAllLegend());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(2, 4, ctx.layers$).length !== 0)("ngIfElse", _r3);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", !ctx.allowShowAllLegends && i0__namespace.ɵɵpipeBind1(4, 6, ctx.layers$).length !== 0 && i0__namespace.ɵɵpipeBind1(5, 8, ctx.visibleOrInRangeLayers$).length === 0);
            }
        }, directives: [i4__namespace$1.NgIf, i1__namespace$1.LayerLegendListComponent, i1__namespace$1.LayerLegendListBindingDirective, i7__namespace.MatList, i7__namespace.MatListItem, i6__namespace.MatIcon, i7__namespace.MatListIconCssMatStyler, i8__namespace$1.MatLine], pipes: [i4__namespace$1.AsyncPipe, i8__namespace.TranslatePipe], styles: [".map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:10px}.map-empty[_ngcontent-%COMP%]{text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:5px}"] });
    exports.MapLegendToolComponent = __decorate([
        i4.ToolComponent({
            name: 'mapLegend',
            title: 'igo.integration.tools.legend',
            icon: 'format-list-bulleted-type'
        })
    ], exports.MapLegendToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.MapLegendToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-map-legend-tool',
                        templateUrl: './map-legend-tool.component.html',
                        styleUrls: ['./map-legend-tool.component.scss']
                    }]
            }], function () { return [{ type: MapState }, { type: ToolState }, { type: i1__namespace$1.SearchSourceService }, { type: i0__namespace.ChangeDetectorRef }]; }, { updateLegendOnResolutionChange: [{
                    type: i0.Input
                }], layerAdditionAllowed: [{
                    type: i0.Input
                }], allowShowAllLegends: [{
                    type: i0.Input
                }], showAllLegendsValue: [{
                    type: i0.Input
                }], layerListControls: [{
                    type: i0.Input
                }] });
    })();

    function AdvancedSwipeComponent_div_0_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵlistener("click", function AdvancedSwipeComponent_div_0_mat_option_12_Template_mat_option_click_0_listener() { i0__namespace.ɵɵrestoreView(_r7_1); i0__namespace.ɵɵnextContext(); var _r3 = i0__namespace.ɵɵreference(8); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.applyNewLayers(_r3); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var layer_r5 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", layer_r5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(layer_r5.title);
        }
    }
    function AdvancedSwipeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "form", 3);
            i0__namespace.ɵɵelementStart(2, "mat-form-field");
            i0__namespace.ɵɵelementStart(3, "mat-label");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "mat-select", 4);
            i0__namespace.ɵɵelementStart(7, "mat-option", 5, 6);
            i0__namespace.ɵɵlistener("click", function AdvancedSwipeComponent_div_0_Template_mat_option_click_7_listener() { i0__namespace.ɵɵrestoreView(_r9_1); var _r3 = i0__namespace.ɵɵreference(8); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.selectAll(_r3); });
            i0__namespace.ɵɵtext(9);
            i0__namespace.ɵɵpipe(10, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(11, "mat-divider");
            i0__namespace.ɵɵtemplate(12, AdvancedSwipeComponent_div_0_mat_option_12_Template, 2, 2, "mat-option", 7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "mat-slide-toggle", 8);
            i0__namespace.ɵɵlistener("change", function AdvancedSwipeComponent_div_0_Template_mat_slide_toggle_change_13_listener($event) { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r10 = i0__namespace.ɵɵnextContext(); return ctx_r10.startSwipe($event.checked); });
            i0__namespace.ɵɵtext(14);
            i0__namespace.ɵɵpipe(15, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("formGroup", ctx_r0.form);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(5, 8, "igo.integration.advanced-map-tool.advanced-swipe.swipe-select"));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("value", 1);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(10, 10, "igo.integration.advanced-map-tool.advanced-swipe.selectAll"), " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.userControlledLayerList);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", ctx_r0.swipe)("labelPosition", "before");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(15, 12, "igo.integration.advanced-map-tool.advanced-swipe.swipe"), " ");
        }
    }
    function AdvancedSwipeComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list");
            i0__namespace.ɵɵelementStart(1, "p", 9);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "p", 9);
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "mat-list-item");
            i0__namespace.ɵɵelement(8, "mat-icon", 10);
            i0__namespace.ɵɵelementStart(9, "h4", 11);
            i0__namespace.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_9_listener() { i0__namespace.ɵɵrestoreView(_r12_1); var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.searchEmit(); });
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵpipe(11, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "mat-list-item");
            i0__namespace.ɵɵelement(13, "mat-icon", 12);
            i0__namespace.ɵɵelementStart(14, "h4", 13);
            i0__namespace.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_14_listener() { i0__namespace.ɵɵrestoreView(_r12_1); var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.catalogEmit(); });
            i0__namespace.ɵɵtext(15);
            i0__namespace.ɵɵpipe(16, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(17, "mat-list-item");
            i0__namespace.ɵɵelement(18, "mat-icon", 14);
            i0__namespace.ɵɵelementStart(19, "h4", 15);
            i0__namespace.ɵɵlistener("click", function AdvancedSwipeComponent_ng_template_1_Template_h4_click_19_listener() { i0__namespace.ɵɵrestoreView(_r12_1); var ctx_r14 = i0__namespace.ɵɵnextContext(); return ctx_r14.contextEmit(); });
            i0__namespace.ɵɵtext(20);
            i0__namespace.ɵɵpipe(21, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 5, "igo.integration.advanced-map-tool.advanced-swipe.empty"), "");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 7, "igo.integration.advanced-map-tool.advanced-swipe.customize"), "");
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(11, 9, "igo.integration.advanced-map-tool.advanced-swipe.search-tool"), " ");
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(16, 11, "igo.integration.advanced-map-tool.advanced-swipe.catalog-tool"), " ");
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(21, 13, "igo.integration.advanced-map-tool.advanced-swipe.context-tool"), " ");
        }
    }
    var AdvancedSwipeComponent = /** @class */ (function () {
        function AdvancedSwipeComponent(mapState, contextService, formBuilder, toolState) {
            this.mapState = mapState;
            this.contextService = contextService;
            this.formBuilder = formBuilder;
            this.toolState = toolState;
            this.swipe = false;
            this.buildForm();
        }
        Object.defineProperty(AdvancedSwipeComponent.prototype, "map", {
            /**
             * Get an active map state
             */
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Get the list of layers for swipe
         * @internal
         */
        AdvancedSwipeComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.map.layers$.subscribe(function (ll) { return _this.userControlledLayerList = ll.filter(function (layer) { return (!layer.baseLayer && layer.showInLayerList && layer.displayed); }); });
        };
        /**
         * Desactivate the swipe
         * @internal
         */
        AdvancedSwipeComponent.prototype.ngOnDestroy = function () {
            this.swipe = false;
            this.map.swipeEnabled$.next(this.swipe);
        };
        /**
         * Build a form for choise of the layers
         */
        AdvancedSwipeComponent.prototype.buildForm = function () {
            this.form = this.formBuilder.group({
                layers: ['', [i3$1.Validators.required]]
            });
        };
        /**
         * Activate the swipe, send a list of layers for a swipe-tool
         */
        AdvancedSwipeComponent.prototype.startSwipe = function (toggle) {
            var e_1, _a;
            this.swipe = toggle;
            this.map.swipeEnabled$.next(toggle);
            this.listForSwipe = [];
            try {
                for (var _b = __values(this.form.value.layers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var layer = _c.value;
                    this.listForSwipe.push(layer);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.map.selectedFeatures$.next(this.listForSwipe);
        };
        /**
         * Restart a swipe for a new layers-list
         */
        AdvancedSwipeComponent.prototype.applyNewLayers = function (e) {
            this.startSwipe(false); // l'approche KISS
            this.startSwipe(true);
            if (e._selected) {
                e._selected = false;
            }
            var allLayers = this.userControlledLayerList.length;
            var selectedLayers = this.form.controls.layers.value.length;
            if (selectedLayers === allLayers) {
                e._selected = true;
            }
        };
        /**
         * Select all list of layers and restart a tool
         */
        AdvancedSwipeComponent.prototype.selectAll = function (e) {
            if (e._selected) {
                this.form.controls.layers.setValue(this.userControlledLayerList);
                e._selected = true;
            }
            else {
                this.form.controls.layers.setValue([]);
            }
            this.startSwipe(false);
            this.startSwipe(true);
        };
        /**
         * Open search tool
         */
        AdvancedSwipeComponent.prototype.searchEmit = function () {
            this.toolState.toolbox.activateTool('searchResults');
        };
        /**
         * Open catalog
         */
        AdvancedSwipeComponent.prototype.catalogEmit = function () {
            this.toolState.toolbox.activateTool('catalog');
        };
        /**
         * Open context manager
         */
        AdvancedSwipeComponent.prototype.contextEmit = function () {
            this.toolState.toolbox.activateTool('contextManager');
        };
        return AdvancedSwipeComponent;
    }());
    AdvancedSwipeComponent.ɵfac = function AdvancedSwipeComponent_Factory(t) { return new (t || AdvancedSwipeComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(i1__namespace.ContextService), i0__namespace.ɵɵdirectiveInject(i3__namespace$1.FormBuilder), i0__namespace.ɵɵdirectiveInject(ToolState)); };
    AdvancedSwipeComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AdvancedSwipeComponent, selectors: [["igo-advanced-swipe"]], decls: 3, vars: 2, consts: [["class", "igo-swipe-select-container", 4, "ngIf", "ngIfElse"], ["noLayersBlock", ""], [1, "igo-swipe-select-container"], [1, "igo-form", 3, "formGroup"], ["formControlName", "layers", "multiple", ""], [3, "value", "click"], ["e", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "swipe-toggle", "mat-typography", 3, "checked", "labelPosition", "change"], [1, "map-empty", "mat-typography"], ["mat-list-icon", "", "svgIcon", "magnify"], ["matLine", "", 1, "search-tool", "mat-typography", 3, "click"], ["mat-list-icon", "", "svgIcon", "layers-plus"], ["matLine", "", 1, "catalog-tool", "mat-typography", 3, "click"], ["mat-list-icon", "", "svgIcon", "star"], ["matLine", "", 1, "context-tool", "mat-typography", 3, "click"]], template: function AdvancedSwipeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, AdvancedSwipeComponent_div_0_Template, 16, 14, "div", 0);
                i0__namespace.ɵɵtemplate(1, AdvancedSwipeComponent_ng_template_1_Template, 22, 15, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.userControlledLayerList.length)("ngIfElse", _r1);
            }
        }, directives: [i4__namespace$1.NgIf, i3__namespace$1.ɵNgNoValidate, i3__namespace$1.NgControlStatusGroup, i3__namespace$1.FormGroupDirective, i6__namespace$1.MatFormField, i6__namespace$1.MatLabel, i7__namespace$1.MatSelect, i3__namespace$1.NgControlStatus, i3__namespace$1.FormControlName, i8__namespace$1.MatOption, i9__namespace.MatDivider, i4__namespace$1.NgForOf, i10__namespace.MatSlideToggle, i7__namespace.MatList, i7__namespace.MatListItem, i6__namespace.MatIcon, i7__namespace.MatListIconCssMatStyler, i8__namespace$1.MatLine], pipes: [i8__namespace.TranslatePipe], styles: [".nameOfTool[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:small;margin:15px 10px 0}.igo-swipe-select-container[_ngcontent-%COMP%]{padding:10px}.igo-swipe-select-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.igo-form[_ngcontent-%COMP%]{padding:1px 5px;width:100%}.swipe-toggle[_ngcontent-%COMP%]{padding:10px 5px 35px}.map-empty[_ngcontent-%COMP%], .search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{margin:5px}.map-empty[_ngcontent-%COMP%]{padding:10px;text-align:justify}.search-tool[_ngcontent-%COMP%], .catalog-tool[_ngcontent-%COMP%], .context-tool[_ngcontent-%COMP%]{cursor:pointer}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:bold}mat-list-item[_ngcontent-%COMP%]     .mat-list-text{font-size:smaller}mat-list.mat-list-base[_ngcontent-%COMP%]   mat-list-item.mat-list-item[_ngcontent-%COMP%]     div.mat-list-item-content div.mat-list-text{padding-left:15px}.advanced-tool-line[_ngcontent-%COMP%]{height:2px;background-color:gray}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdvancedSwipeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-advanced-swipe',
                        templateUrl: './advanced-swipe.component.html',
                        styleUrls: ['./advanced-swipe.component.scss']
                    }]
            }], function () { return [{ type: MapState }, { type: i1__namespace.ContextService }, { type: i3__namespace$1.FormBuilder }, { type: ToolState }]; }, null);
    })();

    function AdvancedCoordinatesComponent_mat_form_field_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 12);
            i0__namespace.ɵɵelement(1, "textarea", 13, 14);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.lon"))("value", ctx_r0.coordinates[0]);
        }
    }
    function AdvancedCoordinatesComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 12);
            i0__namespace.ɵɵelement(1, "textarea", 13, 14);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.est"))("value", ctx_r2.coordinates[0]);
        }
    }
    function AdvancedCoordinatesComponent_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 15);
            i0__namespace.ɵɵelement(1, "textarea", 13, 14);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.lat"))("value", ctx_r3.coordinates[1]);
        }
    }
    function AdvancedCoordinatesComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 15);
            i0__namespace.ɵɵelement(1, "textarea", 13, 14);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(3, 2, "igo.integration.advanced-map-tool.advanced-coordinates.nord"))("value", ctx_r5.coordinates[1]);
        }
    }
    function AdvancedCoordinatesComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 16);
            i0__namespace.ɵɵlistener("click", function AdvancedCoordinatesComponent_mat_option_16_Template_mat_option_click_0_listener($event) { return $event.stopPropagation(); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var projection_r11 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", projection_r11);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", projection_r11.translatedValue || projection_r11.alias, " ");
        }
    }
    /**
     * Tool to display the coordinates and a cursor of the center of the map
     */
    var AdvancedCoordinatesComponent = /** @class */ (function () {
        function AdvancedCoordinatesComponent(mapState, languageService, messageService, cdRef, storageService, config, formBuilder) {
            this.mapState = mapState;
            this.languageService = languageService;
            this.messageService = messageService;
            this.cdRef = cdRef;
            this.storageService = storageService;
            this.config = config;
            this.formBuilder = formBuilder;
            this.formattedScale$ = new rxjs.BehaviorSubject('');
            this.projections$ = new rxjs.BehaviorSubject([]);
            this.center = this.storageService.get('centerToggle');
            this.inMtmZone = true;
            this.inLambert2 = { 32198: true, 3798: true };
            this._projectionsLimitations = {};
            this.defaultProj = {
                translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.wgs84', { code: 'EPSG:4326' }),
                translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: ''
            };
            this.currentZones = { utm: undefined, mtm: undefined };
            this.units = true;
            this.computeProjections();
            this.buildForm();
        }
        Object.defineProperty(AdvancedCoordinatesComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AdvancedCoordinatesComponent.prototype, "inputProj", {
            get: function () {
                return this.form.get('inputProj').value;
            },
            set: function (value) {
                this.form.patchValue({ inputProj: value });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AdvancedCoordinatesComponent.prototype, "projectionsLimitations", {
            get: function () {
                return this._projectionsLimitations || {};
            },
            set: function (value) {
                this._projectionsLimitations = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Listen a state of the map, a state of a form, update the coordinates
         */
        AdvancedCoordinatesComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.mapState$$ = rxjs.combineLatest([this.map.viewController.state$.pipe(operators.debounceTime(50)), this.form.valueChanges])
                .subscribe(function () {
                _this.setScaleValue(_this.map);
                _this.currentCenterDefaultProj = _this.map.viewController.getCenter(_this.defaultProj.code);
                var currentMtmZone = i1$1.zoneMtm(_this.currentCenterDefaultProj[0]);
                var currentUtmZone = i1$1.zoneUtm(_this.currentCenterDefaultProj[0]);
                if (!_this.inMtmZone && currentMtmZone !== _this.currentZones.mtm) {
                    _this.back2quebec();
                }
                var zoneChange = false;
                if (currentMtmZone !== _this.currentZones.mtm) {
                    _this.currentZones.mtm = currentMtmZone;
                    zoneChange = true;
                }
                if (currentUtmZone !== _this.currentZones.utm) {
                    _this.currentZones.utm = currentUtmZone;
                    zoneChange = true;
                }
                if (zoneChange) {
                    _this.updateProjectionsZoneChange();
                }
                _this.checkLambert(_this.currentCenterDefaultProj);
                _this.coordinates = _this.getCoordinates();
                _this.cdRef.detectChanges();
                _this.storageService.set('currentProjection', _this.inputProj, i2$1.StorageScope.SESSION);
            });
            var tempInputProj = this.storageService.get('currentProjection');
            this.inputProj = this.projections$.value[0];
            if (tempInputProj !== null) {
                var pos = this.positionInList(tempInputProj);
                this.inputProj = this.projections$.value[pos];
                this.updateZoneMtmUtm();
            }
            this.map.mapCenter$.next(this.center);
            this.coordinates = this.getCoordinates();
            this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
        };
        AdvancedCoordinatesComponent.prototype.ngOnDestroy = function () {
            this.map.mapCenter$.next(false);
            this.mapState$$.unsubscribe();
        };
        AdvancedCoordinatesComponent.prototype.setScaleValue = function (map) {
            this.formattedScale$.next(': ~ 1 / ' + i1$1.formatScale(map.viewController.getScale()));
        };
        /**
         * Coordinates of the center of the map on the appropriate systeme of coordinates
         * @returns Array of two numbers
         */
        AdvancedCoordinatesComponent.prototype.getCoordinates = function () {
            this.currentZones.mtm = i1$1.zoneMtm(this.currentCenterDefaultProj[0]);
            this.currentZones.utm = i1$1.zoneUtm(this.currentCenterDefaultProj[0]);
            var coord;
            var code = this.inputProj.code;
            var decimal = 2;
            if (code.includes('EPSG:4326') || code.includes('EPSG:4269')) {
                decimal = 5;
            }
            this.units = (code === 'EPSG:4326' || code === 'EPSG:4269');
            coord = this.map.viewController.getCenter(code).map(function (c) { return c.toFixed(decimal); });
            return coord;
        };
        /**
         * Copy the coordinates to a clipboard
         */
        AdvancedCoordinatesComponent.prototype.copyTextToClipboard = function () {
            var successful = utils.Clipboard.copy(this.coordinates.toString());
            if (successful) {
                var translate = this.languageService.translate;
                var title = translate.instant('igo.integration.advanced-map-tool.advanced-coordinates.copyTitle');
                var msg = translate.instant('igo.integration.advanced-map-tool.advanced-coordinates.copyMsg');
                this.messageService.success(msg, title);
            }
        };
        /**
         * Display a cursor on the center of the map
         */
        AdvancedCoordinatesComponent.prototype.displayCenter = function (toggle) {
            this.center = toggle;
            this.map.mapCenter$.next(toggle);
            this.storageService.set('centerToggle', toggle, i2$1.StorageScope.SESSION);
        };
        /**
         * Builder of the form
         */
        AdvancedCoordinatesComponent.prototype.buildForm = function () {
            this.form = this.formBuilder.group({
                inputProj: ['', [i3$1.Validators.required]]
            });
        };
        /**
         * Update list of projections after changing of the state of the map
         */
        AdvancedCoordinatesComponent.prototype.updateProjectionsZoneChange = function () {
            var _this = this;
            var modifiedProj = this.projections$.value;
            var translate = this.languageService.translate;
            modifiedProj.map(function (p) {
                if (p.translateKey === 'mtm') {
                    var zone = i1$1.zoneMtm(_this.currentCenterDefaultProj[0]);
                    if (zone) {
                        var code = zone < 10 ? "EPSG:3218" + zone : "EPSG:321" + (80 + zone);
                        p.alias = "MTM " + zone;
                        p.code = code;
                        p.zone = "" + zone;
                        p.translatedValue = translate.instant('igo.geo.importExportForm.projections.mtm', p);
                    }
                    else {
                        p.alias = '';
                        _this.inMtmZone = false;
                        if (_this.inputProj.translateKey === 'mtm') {
                            _this.inputProj = _this.projections$.value[0];
                        }
                    }
                }
                if (p.translateKey === 'utm') {
                    var zone = i1$1.zoneUtm(_this.currentCenterDefaultProj[0]);
                    var code = "EPSG:326" + zone;
                    p.alias = "UTM " + zone;
                    p.code = code;
                    p.zone = "" + zone;
                    p.translatedValue = translate.instant('igo.geo.importExportForm.projections.utm', p);
                }
            });
            modifiedProj = modifiedProj.filter(function (p) { return p.alias !== ''; });
            this.projections$.next(modifiedProj);
        };
        /**
         * Create a list of currents projections
         */
        AdvancedCoordinatesComponent.prototype.computeProjections = function () {
            this.projectionsConstraints = i1$1.computeProjectionsConstraints(this.projectionsLimitations);
            var projections = [];
            if (!this.currentCenterDefaultProj) {
                this.currentCenterDefaultProj = this.map.viewController.getCenter(this.defaultProj.code);
            }
            var translate = this.languageService.translate;
            if (this.projectionsConstraints.wgs84) {
                projections.push({
                    translatedValue: translate.instant('igo.geo.importExportForm.projections.wgs84', { code: 'EPSG:4326' }),
                    translateKey: 'wgs84', alias: 'WGS84', code: 'EPSG:4326', zone: ''
                });
            }
            if (this.projectionsConstraints.nad83) {
                projections.push({
                    translatedValue: translate.instant('igo.geo.importExportForm.projections.nad83', { code: 'EPSG:4269' }),
                    translateKey: 'nad83', alias: 'NAD83', code: 'EPSG:4269', zone: ''
                });
            }
            if (this.projectionsConstraints.webMercator) {
                projections.push({
                    translatedValue: translate.instant('igo.geo.importExportForm.projections.webMercator', { code: 'EPSG:3857' }),
                    translateKey: 'webMercator', alias: 'Web Mercator', code: 'EPSG:3857', zone: ''
                });
            }
            if (this.projectionsConstraints.mtm) {
                // Quebec
                var zone = i1$1.zoneMtm(this.currentCenterDefaultProj[0]);
                if (zone) {
                    this.inMtmZone = true;
                    var code = zone < 10 ? "EPSG:3218" + zone : "EPSG:321" + (80 + zone);
                    projections.splice(3, 0, {
                        translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code: code, zone: zone }),
                        translateKey: 'mtm', alias: "MTM " + zone,
                        code: code,
                        zone: "" + zone
                    });
                }
                else {
                    this.inMtmZone = false;
                }
            }
            if (this.projectionsConstraints.utm) {
                var order = this.inMtmZone ? 4 : 3;
                var zone = i1$1.zoneUtm(this.currentCenterDefaultProj[0]);
                var code = zone < 10 ? "EPSG:3260" + zone : "EPSG:326" + zone;
                projections.splice(order, 0, {
                    translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.utm', { code: code, zone: zone }),
                    translateKey: 'utm', alias: "UTM " + zone,
                    code: code,
                    zone: "" + zone
                });
            }
            var configProjection = [];
            if (this.projectionsConstraints.projFromConfig) {
                configProjection = this.config.getConfig('projections') || [];
            }
            this.projections$.next(projections.concat(configProjection));
        };
        /**
         * Push the MTM in the array of systeme of coordinates
         * @param projections Array of the InputProjections
         */
        AdvancedCoordinatesComponent.prototype.pushMtm = function (projections) {
            if (this.projectionsConstraints.mtm) {
                var zone = i1$1.zoneMtm(this.currentCenterDefaultProj[0]);
                var code = zone < 10 ? "EPSG:3218" + zone : "EPSG:321" + (80 + zone);
                projections.splice(3, 0, {
                    translatedValue: this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code: code, zone: zone }),
                    translateKey: 'mtm', alias: "MTM " + zone,
                    code: code,
                    zone: "" + zone
                });
            }
        };
        /**
         * Updates the list of systems of coordinates for territory of Quebec
         * push MTM and UTM in the Array
         */
        AdvancedCoordinatesComponent.prototype.back2quebec = function () {
            var projections = this.projections$.value;
            this.pushMtm(projections);
            this.inMtmZone = true;
        };
        /**
         * Update the numbers of the zones when application is restarted
         */
        AdvancedCoordinatesComponent.prototype.updateZoneMtmUtm = function () {
            if (this.inputProj.translateKey === 'mtm') {
                var zone = i1$1.zoneMtm(this.currentCenterDefaultProj[0]);
                this.inputProj.alias = "MTM " + zone;
                var code = zone < 10 ? "EPSG:3218" + zone : "EPSG:321" + (80 + zone);
                this.inputProj.code = code;
                this.inputProj.zone = "" + zone;
                this.inputProj.translatedValue = this.languageService.translate.instant('igo.geo.importExportForm.projections.mtm', { code: code, zone: zone });
            }
            if (this.inputProj.translateKey === 'utm') {
                var zone = i1$1.zoneUtm(this.currentCenterDefaultProj[0]);
                this.inputProj.alias = "UTM " + zone;
                var code = zone < 10 ? "EPSG:3260" + zone : "EPSG:326" + zone;
                this.inputProj.code = code;
                this.inputProj.zone = "" + zone;
                this.inputProj.translatedValue = this.languageService.translate.instant('igo.geo.importExportForm.projections.utm', { code: code, zone: zone });
            }
        };
        /**
         * Compute the position of a current projection in a list. 0 if the projection is not in the list
         * @param translateKey string, translate key of a projection
         * @returns numeric, position of an element in the array
         */
        AdvancedCoordinatesComponent.prototype.positionInList = function (tempInputProj) {
            var tk = tempInputProj.translateKey;
            var alias = tempInputProj.alias;
            var position; // = undefined;
            var iter = 0;
            this.projections$.value.map(function (projection) {
                if (tk) {
                    if (tk === projection.translateKey) {
                        position = iter;
                    }
                }
                else if (alias === projection.alias) {
                    position = iter;
                }
                iter++;
            });
            position = position ? position : 0;
            return position;
        };
        /**
         * Change the list of projections depending on the projections of Lambert
         * @param coordinates An array of numbers, longitude and latitude
         */
        AdvancedCoordinatesComponent.prototype.checkLambert = function (coordinates) {
            var _this = this;
            var lambertProjections = this.config.getConfig('projections');
            lambertProjections.forEach(function (projection) {
                var modifiedProj = _this.projections$.value;
                var extent = projection.extent;
                var code = projection.code.match(/\d+/);
                var currentExtentWGS = olproj__namespace.transformExtent(extent, projection.code, _this.defaultProj.code);
                if (coordinates[0] < currentExtentWGS[0] || coordinates[0] > currentExtentWGS[2] ||
                    coordinates[1] < currentExtentWGS[1] || coordinates[1] > currentExtentWGS[3]) {
                    _this.inLambert2[code] = false;
                    if (_this.inputProj.alias === projection.alias) {
                        _this.inputProj = _this.projections$.value[0];
                    }
                    modifiedProj = modifiedProj.filter(function (p) { return p.alias !== projection.alias; });
                    _this.projections$.next(modifiedProj);
                }
                else {
                    if (!_this.inLambert2[code]) {
                        _this.projections$.next(modifiedProj.concat(projection));
                        _this.inLambert2[code] = true;
                    }
                }
            });
        };
        return AdvancedCoordinatesComponent;
    }());
    AdvancedCoordinatesComponent.ɵfac = function AdvancedCoordinatesComponent_Factory(t) { return new (t || AdvancedCoordinatesComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.LanguageService), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.MessageService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.StorageService), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.ConfigService), i0__namespace.ɵɵdirectiveInject(i3__namespace$1.FormBuilder)); };
    AdvancedCoordinatesComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AdvancedCoordinatesComponent, selectors: [["igo-advanced-coordinates"]], inputs: { projectionsLimitations: "projectionsLimitations" }, decls: 32, vars: 37, consts: [["class", "coordinates", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "coordinates2", 4, "ngIf", "ngIfElse"], ["elseBlock2", ""], ["mat-raised-button", "", 1, "igo-form-button-group", 3, "click"], ["svgIcon", "content-copy"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [3, "value", "valueChange"], ["matTooltipShowDelay", "500", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "center-toggle", "mat-typography", 3, "checked", "labelPosition", "change"], [1, "igo-zoom", "mat-typography"], [1, "coordinates"], ["matInput", "", "readonly", "", "rows", "1", 3, "placeholder", "value"], ["textArea", ""], [1, "coordinates2"], ["matTooltipShowDelay", "500", 3, "value", "click"]], template: function AdvancedCoordinatesComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, AdvancedCoordinatesComponent_mat_form_field_0_Template, 4, 4, "mat-form-field", 0);
                i0__namespace.ɵɵtemplate(1, AdvancedCoordinatesComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(3, AdvancedCoordinatesComponent_mat_form_field_3_Template, 4, 4, "mat-form-field", 2);
                i0__namespace.ɵɵtemplate(4, AdvancedCoordinatesComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementStart(6, "button", 4);
                i0__namespace.ɵɵlistener("click", function AdvancedCoordinatesComponent_Template_button_click_6_listener() { return ctx.copyTextToClipboard(); });
                i0__namespace.ɵɵelement(7, "mat-icon", 5);
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵpipe(9, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "form", 6);
                i0__namespace.ɵɵelementStart(11, "mat-form-field", 7);
                i0__namespace.ɵɵelementStart(12, "mat-label");
                i0__namespace.ɵɵtext(13);
                i0__namespace.ɵɵpipe(14, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "mat-select", 8);
                i0__namespace.ɵɵlistener("valueChange", function AdvancedCoordinatesComponent_Template_mat_select_valueChange_15_listener($event) { return ctx.inputProj = $event; });
                i0__namespace.ɵɵtemplate(16, AdvancedCoordinatesComponent_mat_option_16_Template, 2, 2, "mat-option", 9);
                i0__namespace.ɵɵpipe(17, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-slide-toggle", 10);
                i0__namespace.ɵɵlistener("change", function AdvancedCoordinatesComponent_Template_mat_slide_toggle_change_18_listener($event) { return ctx.displayCenter($event.checked); });
                i0__namespace.ɵɵtext(19);
                i0__namespace.ɵɵpipe(20, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "p", 11);
                i0__namespace.ɵɵtext(22);
                i0__namespace.ɵɵpipe(23, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "p", 11);
                i0__namespace.ɵɵtext(25);
                i0__namespace.ɵɵpipe(26, "translate");
                i0__namespace.ɵɵpipe(27, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "p", 11);
                i0__namespace.ɵɵtext(29);
                i0__namespace.ɵɵpipe(30, "translate");
                i0__namespace.ɵɵpipe(31, "number");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                var _r4 = i0__namespace.ɵɵreference(5);
                i0__namespace.ɵɵproperty("ngIf", ctx.units)("ngIfElse", _r1);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.units)("ngIfElse", _r4);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(9, 18, "igo.integration.advanced-map-tool.advanced-coordinates.copy"), "\n");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("formGroup", ctx.form);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(14, 20, "igo.integration.advanced-map-tool.advanced-coordinates.coordSystem"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("value", ctx.inputProj);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(17, 22, ctx.projections$));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("checked", ctx.center)("labelPosition", "before");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(20, 24, "igo.integration.advanced-map-tool.advanced-coordinates.center"), " ");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(23, 26, "igo.integration.advanced-map-tool.advanced-coordinates.zoom"), " ", ctx.map.viewController.getZoom(), "");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(26, 28, "igo.integration.advanced-map-tool.advanced-coordinates.scale"), " ", i0__namespace.ɵɵpipeBind1(27, 30, ctx.formattedScale$), "");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(30, 32, "igo.integration.advanced-map-tool.advanced-coordinates.resolution"), " ", i0__namespace.ɵɵpipeBind2(31, 34, ctx.map.viewController.getResolution(), "1.0-0"), "");
            }
        }, directives: [i4__namespace$1.NgIf, i3__namespace.MatButton, i6__namespace.MatIcon, i3__namespace$1.ɵNgNoValidate, i3__namespace$1.NgControlStatusGroup, i3__namespace$1.FormGroupDirective, i6__namespace$1.MatFormField, i6__namespace$1.MatLabel, i7__namespace$1.MatSelect, i4__namespace$1.NgForOf, i10__namespace.MatSlideToggle, i10__namespace$1.MatInput, i8__namespace$1.MatOption], pipes: [i8__namespace.TranslatePipe, i4__namespace$1.AsyncPipe, i4__namespace$1.DecimalPipe], styles: ["textarea[_ngcontent-%COMP%]{resize:none}mat-form-field[_ngcontent-%COMP%]{padding:10px 15px}mat-form-field.coordinates[_ngcontent-%COMP%]{width:120px}mat-form-field.coordinates2[_ngcontent-%COMP%]{width:120px;padding:0 10px 0 3px}mat-form-field.igo-input-container[_ngcontent-%COMP%]{width:60%;padding:0 15px}.igo-form-button-group[_ngcontent-%COMP%]{padding:0 10px;margin:0 10px}.center-toggle[_ngcontent-%COMP%]{padding:10px 15px 35px}mat-slide-toggle[_ngcontent-%COMP%]{font-size:small}.igo-zoom[_ngcontent-%COMP%]{padding:0 15px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdvancedCoordinatesComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-advanced-coordinates',
                        templateUrl: './advanced-coordinates.component.html',
                        styleUrls: ['./advanced-coordinates.component.scss']
                    }]
            }], function () { return [{ type: MapState }, { type: i2__namespace$1.LanguageService }, { type: i2__namespace$1.MessageService }, { type: i0__namespace.ChangeDetectorRef }, { type: i2__namespace$1.StorageService }, { type: i2__namespace$1.ConfigService }, { type: i3__namespace$1.FormBuilder }]; }, { projectionsLimitations: [{
                    type: i0.Input
                }] });
    })();

    exports.AdvancedMapToolComponent = /** @class */ (function () {
        function AdvancedMapToolComponent() {
        }
        return AdvancedMapToolComponent;
    }());
    exports.AdvancedMapToolComponent.ɵfac = function AdvancedMapToolComponent_Factory(t) { return new (t || exports.AdvancedMapToolComponent)(); };
    exports.AdvancedMapToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.AdvancedMapToolComponent, selectors: [["igo-advanced-map-tool"]], decls: 10, vars: 6, consts: [[1, "nameOfTool"], [1, "advanced-tool-line"]], template: function AdvancedMapToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h4", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "igo-advanced-swipe");
                i0__namespace.ɵɵelement(4, "mat-divider", 1);
                i0__namespace.ɵɵelementStart(5, "h4", 0);
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵpipe(7, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "igo-advanced-coordinates");
                i0__namespace.ɵɵelement(9, "mat-divider", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 2, "igo.integration.advanced-map-tool.advanced-swipe.swipe-tool"));
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(7, 4, "igo.integration.advanced-map-tool.advanced-coordinates.coordinates"));
            }
        }, directives: [AdvancedSwipeComponent, i9__namespace.MatDivider, AdvancedCoordinatesComponent], pipes: [i8__namespace.TranslatePipe], styles: [".nameOfTool[_ngcontent-%COMP%]{text-align:center;font-weight:bold;font-size:small;margin:15px 10px 0}.advanced-tool-line[_ngcontent-%COMP%]{height:2px;background-color:gray}"] });
    exports.AdvancedMapToolComponent = __decorate([
        i4.ToolComponent({
            name: 'advancedMap',
            title: 'igo.integration.tools.advancedMap',
            icon: 'toolbox'
        })
        /**
         * Tool to handle the advanced map tools
         */
    ], exports.AdvancedMapToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.AdvancedMapToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-advanced-map-tool',
                        templateUrl: './advanced-map-tool.component.html',
                        styleUrls: ['./advanced-map-tool.component.scss']
                    }]
            }], null, null);
    })();

    var IgoAppMapModule = /** @class */ (function () {
        function IgoAppMapModule() {
        }
        IgoAppMapModule.forRoot = function () {
            return {
                ngModule: IgoAppMapModule,
                providers: []
            };
        };
        return IgoAppMapModule;
    }());
    IgoAppMapModule.ɵfac = function IgoAppMapModule_Factory(t) { return new (t || IgoAppMapModule)(); };
    IgoAppMapModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppMapModule });
    IgoAppMapModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i3$1.FormsModule,
                i3$1.ReactiveFormsModule,
                buttonToggle.MatButtonToggleModule,
                i9.MatDividerModule,
                i7$1.MatSelectModule,
                i8$1.MatOptionModule,
                i6$1.MatFormFieldModule,
                i10$1.MatInputModule,
                checkbox.MatCheckboxModule,
                i4.IgoSpinnerModule,
                i4$1.CommonModule,
                i5.MatTabsModule,
                i7.MatListModule,
                i6.MatIconModule,
                i2$1.IgoLanguageModule,
                i1$1.IgoLayerModule,
                i1$1.IgoMetadataModule,
                i1$1.IgoDownloadModule,
                i1$1.IgoImportExportModule,
                i1$1.IgoFilterModule,
                i1.IgoContextModule,
                IgoAppWorkspaceModule,
                i10.MatSlideToggleModule,
                i6$2.MatMenuModule,
                i3.MatButtonModule,
                i4$2.MatTooltipModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppMapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3$1.FormsModule,
                            i3$1.ReactiveFormsModule,
                            buttonToggle.MatButtonToggleModule,
                            i9.MatDividerModule,
                            i7$1.MatSelectModule,
                            i8$1.MatOptionModule,
                            i6$1.MatFormFieldModule,
                            i10$1.MatInputModule,
                            checkbox.MatCheckboxModule,
                            i4.IgoSpinnerModule,
                            i4$1.CommonModule,
                            i5.MatTabsModule,
                            i7.MatListModule,
                            i6.MatIconModule,
                            i2$1.IgoLanguageModule,
                            i1$1.IgoLayerModule,
                            i1$1.IgoMetadataModule,
                            i1$1.IgoDownloadModule,
                            i1$1.IgoImportExportModule,
                            i1$1.IgoFilterModule,
                            i1.IgoContextModule,
                            IgoAppWorkspaceModule,
                            i10.MatSlideToggleModule,
                            i6$2.MatMenuModule,
                            i3.MatButtonModule,
                            i4$2.MatTooltipModule
                        ],
                        declarations: [exports.AdvancedMapToolComponent, exports.MapToolComponent,
                            exports.MapToolsComponent, exports.MapDetailsToolComponent, exports.MapLegendToolComponent, AdvancedSwipeComponent, AdvancedCoordinatesComponent],
                        exports: [exports.AdvancedMapToolComponent, exports.MapToolComponent, exports.MapToolsComponent, exports.MapDetailsToolComponent, exports.MapLegendToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppMapModule, { declarations: [exports.AdvancedMapToolComponent, exports.MapToolComponent,
                exports.MapToolsComponent, exports.MapDetailsToolComponent, exports.MapLegendToolComponent, AdvancedSwipeComponent, AdvancedCoordinatesComponent], imports: [i3$1.FormsModule,
                i3$1.ReactiveFormsModule,
                buttonToggle.MatButtonToggleModule,
                i9.MatDividerModule,
                i7$1.MatSelectModule,
                i8$1.MatOptionModule,
                i6$1.MatFormFieldModule,
                i10$1.MatInputModule,
                checkbox.MatCheckboxModule,
                i4.IgoSpinnerModule,
                i4$1.CommonModule,
                i5.MatTabsModule,
                i7.MatListModule,
                i6.MatIconModule,
                i2$1.IgoLanguageModule,
                i1$1.IgoLayerModule,
                i1$1.IgoMetadataModule,
                i1$1.IgoDownloadModule,
                i1$1.IgoImportExportModule,
                i1$1.IgoFilterModule,
                i1.IgoContextModule,
                IgoAppWorkspaceModule,
                i10.MatSlideToggleModule,
                i6$2.MatMenuModule,
                i3.MatButtonModule,
                i4$2.MatTooltipModule], exports: [exports.AdvancedMapToolComponent, exports.MapToolComponent, exports.MapToolsComponent, exports.MapDetailsToolComponent, exports.MapLegendToolComponent] });
    })();

    /**
     * Service that holds the state of the measure module
     */
    var MeasureState = /** @class */ (function () {
        function MeasureState(mapState) {
            var _this = this;
            this.mapState = mapState;
            /**
             * Store that holds the measures
             */
            this.store = new i1$1.FeatureStore([], {
                map: this.mapState.map
            });
            this.mapState.map.layers$.subscribe(function (layers) {
                if ((layers.filter(function (l) { return l.id.startsWith('igo-measures-'); }).length === 0)) {
                    _this.store.deleteMany(_this.store.all());
                    _this.mapState.map.ol.getOverlays().getArray()
                        .filter(function (overlay) { return overlay.options.className.includes('igo-map-tooltip'); })
                        .map(function (overlay) { return _this.mapState.map.ol.removeOverlay(overlay); });
                }
            });
        }
        return MeasureState;
    }());
    MeasureState.ɵfac = function MeasureState_Factory(t) { return new (t || MeasureState)(i0__namespace.ɵɵinject(MapState)); };
    MeasureState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: MeasureState, factory: MeasureState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MeasureState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: MapState }]; }, null);
    })();

    /**
     * Tool to measure lengths and areas
     */
    exports.MeasurerToolComponent = /** @class */ (function () {
        function MeasurerToolComponent(measureState, mapState) {
            this.measureState = measureState;
            this.mapState = mapState;
        }
        Object.defineProperty(MeasurerToolComponent.prototype, "store", {
            /**
             * Map to measure on
             * @internal
             */
            get: function () { return this.measureState.store; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MeasurerToolComponent.prototype, "map", {
            /**
             * Map to measure on
             * @internal
             */
            get: function () { return this.mapState.map; },
            enumerable: false,
            configurable: true
        });
        return MeasurerToolComponent;
    }());
    exports.MeasurerToolComponent.ɵfac = function MeasurerToolComponent_Factory(t) { return new (t || exports.MeasurerToolComponent)(i0__namespace.ɵɵdirectiveInject(MeasureState), i0__namespace.ɵɵdirectiveInject(MapState)); };
    exports.MeasurerToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.MeasurerToolComponent, selectors: [["igo-measurer-tool"]], decls: 1, vars: 2, consts: [[3, "store", "map"]], template: function MeasurerToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-measurer", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("store", ctx.store)("map", ctx.map);
            }
        }, directives: [i1__namespace$1.MeasurerComponent], encapsulation: 2, changeDetection: 0 });
    exports.MeasurerToolComponent = __decorate([
        i4.ToolComponent({
            name: 'measurer',
            title: 'igo.integration.tools.measurer',
            icon: 'ruler'
        })
    ], exports.MeasurerToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.MeasurerToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-measurer-tool',
                        templateUrl: './measurer-tool.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: MeasureState }, { type: MapState }]; }, null);
    })();

    /**
     * @ignore
     */
    var IgoAppMeasurerToolModule = /** @class */ (function () {
        function IgoAppMeasurerToolModule() {
        }
        return IgoAppMeasurerToolModule;
    }());
    IgoAppMeasurerToolModule.ɵfac = function IgoAppMeasurerToolModule_Factory(t) { return new (t || IgoAppMeasurerToolModule)(); };
    IgoAppMeasurerToolModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppMeasurerToolModule });
    IgoAppMeasurerToolModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.IgoMeasurerModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppMeasurerToolModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.IgoMeasurerModule
                        ],
                        declarations: [exports.MeasurerToolComponent],
                        exports: [exports.MeasurerToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppMeasurerToolModule, { declarations: [exports.MeasurerToolComponent], imports: [i1$1.IgoMeasurerModule], exports: [exports.MeasurerToolComponent] }); })();

    var IgoAppMeasureModule = /** @class */ (function () {
        function IgoAppMeasureModule() {
        }
        return IgoAppMeasureModule;
    }());
    IgoAppMeasureModule.ɵfac = function IgoAppMeasureModule_Factory(t) { return new (t || IgoAppMeasureModule)(); };
    IgoAppMeasureModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppMeasureModule });
    IgoAppMeasureModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[], IgoAppMeasurerToolModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppMeasureModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: [
                            IgoAppMeasurerToolModule
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppMeasureModule, { exports: [IgoAppMeasurerToolModule] }); })();

    exports.PrintToolComponent = /** @class */ (function () {
        function PrintToolComponent(mapState) {
            this.mapState = mapState;
        }
        Object.defineProperty(PrintToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        return PrintToolComponent;
    }());
    exports.PrintToolComponent.ɵfac = function PrintToolComponent_Factory(t) { return new (t || exports.PrintToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState)); };
    exports.PrintToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.PrintToolComponent, selectors: [["igo-print-tool"]], decls: 1, vars: 1, consts: [[3, "map"]], template: function PrintToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-print", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("map", ctx.map);
            }
        }, directives: [i1__namespace$1.PrintComponent], encapsulation: 2 });
    exports.PrintToolComponent = __decorate([
        i4.ToolComponent({
            name: 'print',
            title: 'igo.integration.tools.print',
            icon: 'printer'
        })
    ], exports.PrintToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.PrintToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-print-tool',
                        templateUrl: './print-tool.component.html'
                    }]
            }], function () { return [{ type: MapState }]; }, null);
    })();

    var IgoAppPrintModule = /** @class */ (function () {
        function IgoAppPrintModule() {
        }
        IgoAppPrintModule.forRoot = function () {
            return {
                ngModule: IgoAppPrintModule,
                providers: []
            };
        };
        return IgoAppPrintModule;
    }());
    IgoAppPrintModule.ɵfac = function IgoAppPrintModule_Factory(t) { return new (t || IgoAppPrintModule)(); };
    IgoAppPrintModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppPrintModule });
    IgoAppPrintModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.IgoPrintModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppPrintModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.IgoPrintModule],
                        declarations: [exports.PrintToolComponent],
                        exports: [exports.PrintToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppPrintModule, { declarations: [exports.PrintToolComponent], imports: [i1$1.IgoPrintModule], exports: [exports.PrintToolComponent] }); })();

    /**
     * Service that holds the state of the search module
     */
    var SearchState = /** @class */ (function () {
        function SearchState(searchSourceService, storageService, configService) {
            this.searchSourceService = searchSourceService;
            this.storageService = storageService;
            this.configService = configService;
            this.searchOverlayStyle = {};
            this.searchOverlayStyleSelection = {};
            this.searchOverlayStyleFocus = {};
            this.searchTermSplitter$ = new rxjs.BehaviorSubject('|');
            this.searchTerm$ = new rxjs.BehaviorSubject(undefined);
            this.searchType$ = new rxjs.BehaviorSubject(undefined);
            this.searchDisabled$ = new rxjs.BehaviorSubject(false);
            this.searchResultsGeometryEnabled$ = new rxjs.BehaviorSubject(false);
            this.searchSettingsChange$ = new rxjs.BehaviorSubject(undefined);
            this.selectedResult$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Store that holds the search results
             */
            this.store = new i4.EntityStore([]);
            var searchOverlayStyle = this.configService.getConfig('searchOverlayStyle');
            if (searchOverlayStyle) {
                this.searchOverlayStyle = searchOverlayStyle.base;
                this.searchOverlayStyleSelection = searchOverlayStyle.selection;
                this.searchOverlayStyleFocus = searchOverlayStyle.focus;
            }
            var searchResultsGeometryEnabled = this.storageService.get('searchResultsGeometryEnabled');
            if (searchResultsGeometryEnabled) {
                this.searchResultsGeometryEnabled$.next(searchResultsGeometryEnabled);
            }
            this.store.addStrategy(this.createCustomFilterTermStrategy(), false);
        }
        Object.defineProperty(SearchState.prototype, "searchTypes", {
            /**
             * Search types currently enabled in the search source service
             */
            get: function () {
                return this.searchSourceService
                    .getEnabledSources()
                    .map(function (source) { return source.constructor.type; });
            },
            enumerable: false,
            configurable: true
        });
        SearchState.prototype.createCustomFilterTermStrategy = function () {
            var filterClauseFunc = function (record) {
                return record.entity.meta.score === 100;
            };
            return new i4.EntityStoreFilterCustomFuncStrategy({ filterClauseFunc: filterClauseFunc });
        };
        /**
         * Activate custom strategy
         *
         */
        SearchState.prototype.activateCustomFilterTermStrategy = function () {
            var strategy = this.store.getStrategyOfType(i4.EntityStoreFilterCustomFuncStrategy);
            if (strategy !== undefined) {
                strategy.activate();
            }
        };
        /**
         * Deactivate custom strategy
         *
         */
        SearchState.prototype.deactivateCustomFilterTermStrategy = function () {
            var strategy = this.store.getStrategyOfType(i4.EntityStoreFilterCustomFuncStrategy);
            if (strategy !== undefined) {
                strategy.deactivate();
            }
        };
        SearchState.prototype.enableSearch = function () {
            this.searchDisabled$.next(false);
        };
        SearchState.prototype.disableSearch = function () {
            this.searchDisabled$.next(true);
        };
        SearchState.prototype.setSearchTerm = function (searchTerm) {
            this.searchTerm$.next(searchTerm);
        };
        SearchState.prototype.setSearchType = function (searchType) {
            this.searchSourceService.enableSourcesByType(searchType);
            this.searchType$.next(searchType);
        };
        SearchState.prototype.setSearchSettingsChange = function () {
            this.searchSettingsChange$.next(true);
        };
        SearchState.prototype.setSelectedResult = function (result) {
            this.selectedResult$.next(result);
        };
        SearchState.prototype.setSearchResultsGeometryStatus = function (value) {
            this.storageService.set('searchResultsGeometryEnabled', value);
            this.searchResultsGeometryEnabled$.next(value);
        };
        return SearchState;
    }());
    SearchState.ɵfac = function SearchState_Factory(t) { return new (t || SearchState)(i0__namespace.ɵɵinject(i1__namespace$1.SearchSourceService), i0__namespace.ɵɵinject(i2__namespace$1.StorageService), i0__namespace.ɵɵinject(i2__namespace$1.ConfigService)); };
    SearchState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: SearchState, factory: SearchState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SearchState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace$1.SearchSourceService }, { type: i2__namespace$1.StorageService }, { type: i2__namespace$1.ConfigService }]; }, null);
    })();

    var SearchBarBindingDirective = /** @class */ (function () {
        function SearchBarBindingDirective(component, searchState) {
            this.component = component;
            this.searchState = searchState;
        }
        Object.defineProperty(SearchBarBindingDirective.prototype, "searchTerm", {
            get: function () { return this.searchState.searchTerm$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchBarBindingDirective.prototype, "searchType", {
            get: function () { return this.searchState.searchType$.value; },
            enumerable: false,
            configurable: true
        });
        SearchBarBindingDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.searchTerm$$ = this.searchState.searchTerm$.subscribe(function (searchTerm) {
                if (searchTerm !== undefined && searchTerm !== null) {
                    _this.component.setTerm(searchTerm);
                }
            });
            this.searchType$$ = this.searchState.searchType$.subscribe(function (searchType) {
                if (searchType !== undefined && searchType !== null) {
                    _this.component.setSearchType(searchType);
                }
            });
            this.searchDisabled$$ = this.searchState.searchDisabled$.subscribe(function (searchDisabled) {
                _this.component.disabled = searchDisabled;
            });
        };
        SearchBarBindingDirective.prototype.ngOnDestroy = function () {
            this.searchTerm$$.unsubscribe();
            this.searchType$$.unsubscribe();
            this.searchDisabled$$.unsubscribe();
        };
        SearchBarBindingDirective.prototype.onSearchTermChange = function (searchTerm) {
            if (searchTerm !== this.searchTerm) {
                this.searchState.setSearchTerm(searchTerm);
            }
        };
        SearchBarBindingDirective.prototype.onSearchTypeChange = function (searchType) {
            if (searchType !== this.searchType) {
                this.searchState.setSearchType(searchType);
            }
        };
        return SearchBarBindingDirective;
    }());
    SearchBarBindingDirective.ɵfac = function SearchBarBindingDirective_Factory(t) { return new (t || SearchBarBindingDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.SearchBarComponent, 2), i0__namespace.ɵɵdirectiveInject(SearchState)); };
    SearchBarBindingDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: SearchBarBindingDirective, selectors: [["", "igoSearchBarBinding", ""]], hostBindings: function SearchBarBindingDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("searchTermChange", function SearchBarBindingDirective_searchTermChange_HostBindingHandler($event) { return ctx.onSearchTermChange($event); })("searchTypeChange", function SearchBarBindingDirective_searchTypeChange_HostBindingHandler($event) { return ctx.onSearchTypeChange($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SearchBarBindingDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoSearchBarBinding]'
                    }]
            }], function () {
            return [{ type: i1__namespace$1.SearchBarComponent, decorators: [{
                            type: i0.Self
                        }] }, { type: SearchState }];
        }, { onSearchTermChange: [{
                    type: i0.HostListener,
                    args: ['searchTermChange', ['$event']]
                }], onSearchTypeChange: [{
                    type: i0.HostListener,
                    args: ['searchTypeChange', ['$event']]
                }] });
    })();

    /**
     * @ignore
     */
    var IgoAppSearchBarModule = /** @class */ (function () {
        function IgoAppSearchBarModule() {
        }
        return IgoAppSearchBarModule;
    }());
    IgoAppSearchBarModule.ɵfac = function IgoAppSearchBarModule_Factory(t) { return new (t || IgoAppSearchBarModule)(); };
    IgoAppSearchBarModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppSearchBarModule });
    IgoAppSearchBarModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.IgoSearchModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppSearchBarModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.IgoSearchModule],
                        declarations: [SearchBarBindingDirective],
                        exports: [SearchBarBindingDirective],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppSearchBarModule, { declarations: [SearchBarBindingDirective], imports: [i1$1.IgoSearchModule], exports: [SearchBarBindingDirective] }); })();

    function SearchResultsToolComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "section", 3);
            i0__namespace.ɵɵelementStart(2, "h4");
            i0__namespace.ɵɵelementStart(3, "strong");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "p");
            i0__namespace.ɵɵelementStart(7, "strong");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵpipe(9, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(10, "div", 4);
            i0__namespace.ɵɵpipe(11, "sanitizeHtml");
            i0__namespace.ɵɵpipe(12, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(5, 3, "igo.integration.searchResultsTool.noResults"));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(9, 5, "igo.integration.searchResultsTool.doSearch"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("innerHTML", i0__namespace.ɵɵpipeBind1(11, 7, i0__namespace.ɵɵpipeBind1(12, 9, "igo.integration.searchResultsTool.examples")), i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function SearchResultsToolComponent_igo_flexible_1_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-search-add-button", 12);
        }
        if (rf & 2) {
            var result_r6 = ctx.result;
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("map", ctx_r4.map)("layer", result_r6);
        }
    }
    function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 18);
            i0__namespace.ɵɵlistener("click", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r8 = i0__namespace.ɵɵnextContext(3); return ctx_r8.zoomToFeatureExtent(); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵelement(3, "mat-icon", 19);
            i0__namespace.ɵɵpipe(4, "async");
            i0__namespace.ɵɵpipe(5, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 3, i0__namespace.ɵɵpipeBind1(2, 5, ctx_r7.isSelectedResultOutOfView$) ? "igo.integration.searchResultsTool.zoomOnFeatureTooltipOutOfView" : "igo.integration.searchResultsTool.zoomOnFeatureTooltip"));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("matBadge", i0__namespace.ɵɵpipeBind1(4, 7, ctx_r7.isSelectedResultOutOfView$) ? "!" : "")("matBadgeHidden", i0__namespace.ɵɵpipeBind1(5, 9, ctx_r7.isSelectedResultOutOfView$) === false);
        }
    }
    function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-panel", 13);
            i0__namespace.ɵɵelementStart(1, "button", 14);
            i0__namespace.ɵɵlistener("click", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r10 = i0__namespace.ɵɵnextContext(2); return ctx_r10.toggleTopPanel(); });
            i0__namespace.ɵɵelement(2, "mat-icon", 15);
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, SearchResultsToolComponent_igo_flexible_1_igo_panel_8_button_4_Template, 6, 11, "button", 16);
            i0__namespace.ɵɵelementStart(5, "igo-feature-details", 17);
            i0__namespace.ɵɵlistener("routingEvent", function SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template_igo_feature_details_routingEvent_5_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r12 = i0__namespace.ɵɵnextContext(2); return ctx_r12.getRoute(); });
            i0__namespace.ɵɵpipe(6, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("title", ctx_r5.featureTitle);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("svgIcon", i0__namespace.ɵɵpipeBind1(3, 6, ctx_r5.topPanelState$) === "collapsed" ? "arrow-up" : "arrow-down");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.feature.geometry);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("feature", i0__namespace.ɵɵpipeBind1(6, 8, ctx_r5.feature$))("map", ctx_r5.map)("toolbox", ctx_r5.toolState.toolbox);
        }
    }
    function SearchResultsToolComponent_igo_flexible_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-flexible", 5, 6);
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵelementStart(3, "div", 7);
            i0__namespace.ɵɵelementStart(4, "igo-search-results", 8);
            i0__namespace.ɵɵlistener("resultFocus", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultFocus_4_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.onResultFocus($event); })("resultSelect", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultSelect_4_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r15 = i0__namespace.ɵɵnextContext(); return ctx_r15.onResultSelect($event); })("resultUnfocus", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultUnfocus_4_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r16 = i0__namespace.ɵɵnextContext(); return ctx_r16.onResultUnfocus($event); })("resultMouseenter", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultMouseenter_4_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r17 = i0__namespace.ɵɵnextContext(); return ctx_r17.onResultFocus($event); })("resultMouseleave", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_resultMouseleave_4_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r18 = i0__namespace.ɵɵnextContext(); return ctx_r18.onResultUnfocus($event); })("moreResults", function SearchResultsToolComponent_igo_flexible_1_Template_igo_search_results_moreResults_4_listener($event) { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r19 = i0__namespace.ɵɵnextContext(); return ctx_r19.onSearch($event); });
            i0__namespace.ɵɵtemplate(5, SearchResultsToolComponent_igo_flexible_1_ng_template_5_Template, 1, 2, "ng-template", null, 9, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div", 10);
            i0__namespace.ɵɵtemplate(8, SearchResultsToolComponent_igo_flexible_1_igo_panel_8_Template, 7, 10, "igo-panel", 11);
            i0__namespace.ɵɵpipe(9, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("state", i0__namespace.ɵɵpipeBind1(2, 7, ctx_r1.feature$) ? ctx_r1.topPanelState : "initial");
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("store", ctx_r1.store)("showIcons", ctx_r1.showIcons)("term", ctx_r1.term)("termSplitter", ctx_r1.termSplitter)("settingsChange$", ctx_r1.settingsChange$);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(9, 9, ctx_r1.feature$));
        }
    }
    /**
     * Tool to browse the search results
     */
    exports.SearchResultsToolComponent = /** @class */ (function () {
        function SearchResultsToolComponent(mapState, searchState, elRef, toolState, directionState, configService) {
            this.mapState = mapState;
            this.searchState = searchState;
            this.elRef = elRef;
            this.toolState = toolState;
            this.directionState = directionState;
            /**
             * to show hide results icons
             */
            this.showIcons = true;
            this.hasFeatureEmphasisOnSelection = false;
            this.shownResultsGeometries = [];
            this.shownResultsEmphasisGeometries = [];
            this.focusedResult$ = new rxjs.BehaviorSubject(undefined);
            this.isSelectedResultOutOfView$ = new rxjs.BehaviorSubject(false);
            this.term = '';
            this.settingsChange$ = new rxjs.BehaviorSubject(undefined);
            this.topPanelState$ = new rxjs.BehaviorSubject('initial');
            this.format = new olFormatGeoJSON__default["default"]();
            this.hasFeatureEmphasisOnSelection = configService.getConfig('hasFeatureEmphasisOnSelection');
        }
        Object.defineProperty(SearchResultsToolComponent.prototype, "store", {
            /**
             * Store holding the search results
             * @internal
             */
            get: function () {
                return this.searchState.store;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchResultsToolComponent.prototype, "map", {
            /**
             * Map to display the results on
             * @internal
             */
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchResultsToolComponent.prototype, "featureTitle", {
            get: function () {
                return this.feature ? i4.getEntityTitle(this.feature) : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchResultsToolComponent.prototype, "feature$", {
            get: function () {
                var _this = this;
                return this.store.stateView
                    .firstBy$(function (e) { return e.state.focused; })
                    .pipe(operators.map(function (element) { return (_this.feature = element
                    ? element.entity.data
                    : undefined); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchResultsToolComponent.prototype, "topPanelState", {
            get: function () {
                return this.topPanelState$.value;
            },
            set: function (value) {
                this.topPanelState$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchResultsToolComponent.prototype, "termSplitter", {
            get: function () {
                return this.searchState.searchTermSplitter$.value;
            },
            enumerable: false,
            configurable: true
        });
        SearchResultsToolComponent.prototype.ngOnInit = function () {
            var e_1, _d;
            var _this = this;
            this.searchTerm$$ = this.searchState.searchTerm$.subscribe(function (searchTerm) {
                if (searchTerm !== undefined && searchTerm !== null) {
                    _this.term = searchTerm;
                }
            });
            try {
                for (var _e = __values(this.store.stateView.all$().value), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var res = _f.value;
                    if (this.store.state.get(res.entity).selected === true) {
                        this.topPanelState = 'expanded';
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.searchState.searchSettingsChange$.subscribe(function () {
                _this.settingsChange$.next(true);
            });
            this.topPanelState$$ = this.topPanelState$.subscribe(function () {
                var igoList = _this.computeElementRef()[0];
                var selected = _this.computeElementRef()[1];
                if (selected) {
                    setTimeout(function () {
                        // To be sure the flexible component has been displayed yet
                        if (!_this.isScrolledIntoView(igoList, selected)) {
                            _this.adjustTopPanel(igoList, selected);
                        }
                    }, i4.FlexibleComponent.transitionTime + 50);
                }
            });
            if (this.hasFeatureEmphasisOnSelection) {
                if (!this.searchState.focusedOrResolution$$) {
                    this.searchState.focusedOrResolution$$ = rxjs.combineLatest([
                        this.focusedResult$,
                        this.map.viewController.resolution$
                    ]).subscribe(function (bunch) { return _this.buildResultEmphasis(bunch[0], 'focused'); });
                }
                if (!this.searchState.selectedOrResolution$$) {
                    this.searchState.selectedOrResolution$$ = rxjs.combineLatest([
                        this.searchState.selectedResult$,
                        this.map.viewController.resolution$
                    ]).subscribe(function (bunch) { return _this.buildResultEmphasis(bunch[0], 'selected'); });
                }
            }
            this.monitorResultOutOfView();
            this.showResultsGeometries$$ = rxjs.combineLatest([
                this.searchState.searchResultsGeometryEnabled$,
                this.store.stateView.all$(),
                this.focusedResult$,
                this.searchState.selectedResult$,
                this.searchState.searchTerm$,
                this.map.viewController.resolution$
            ]).subscribe(function (bunch) {
                var searchResultsGeometryEnabled = bunch[0];
                var searchResults = bunch[1];
                if (_this.hasFeatureEmphasisOnSelection) {
                    _this.clearFeatureEmphasis('shown');
                }
                _this.shownResultsGeometries.map(function (result) { return _this.map.queryResultsOverlay.removeFeature(result); });
                var featureToHandleGeom = searchResults
                    .filter(function (result) { return result.entity.meta.dataType === i1$1.FEATURE &&
                    result.entity.data.geometry &&
                    !result.state.selected &&
                    !result.state.focused; });
                featureToHandleGeom.map(function (result) {
                    var _a;
                    if (searchResultsGeometryEnabled) {
                        result.entity.data.meta.style =
                            i1$1.getCommonVectorStyle(Object.assign({}, { feature: result.entity.data }, _this.searchState.searchOverlayStyle, ((_a = result.entity.style) === null || _a === void 0 ? void 0 : _a.base) ? result.entity.style.base : {}));
                        _this.shownResultsGeometries.push(result.entity.data);
                        _this.map.queryResultsOverlay.addFeature(result.entity.data, i1$1.FeatureMotion.None);
                        if (_this.hasFeatureEmphasisOnSelection) {
                            _this.buildResultEmphasis(result.entity, 'shown');
                        }
                    }
                });
            });
        };
        SearchResultsToolComponent.prototype.monitorResultOutOfView = function () {
            var _this = this;
            this.isSelectedResultOutOfView$$ = rxjs.combineLatest([
                this.map.viewController.state$,
                this.searchState.selectedResult$
            ])
                .pipe(operators.debounceTime(100))
                .subscribe(function (bunch) {
                var selectedResult = bunch[1];
                if (!selectedResult) {
                    _this.isSelectedResultOutOfView$.next(false);
                    return;
                }
                if (selectedResult.data.geometry) {
                    var selectedOlFeature = i1$1.featureToOl(selectedResult.data, _this.map.projection);
                    var selectedOlFeatureExtent = i1$1.computeOlFeaturesExtent(_this.map, [
                        selectedOlFeature
                    ]);
                    _this.isSelectedResultOutOfView$.next(i1$1.featuresAreOutOfView(_this.map, selectedOlFeatureExtent));
                }
            });
        };
        SearchResultsToolComponent.prototype.buildResultEmphasis = function (result, trigger) {
            var _a, _b, _c;
            if (trigger !== 'shown') {
                this.clearFeatureEmphasis(trigger);
            }
            if (!result || !result.data.geometry) {
                return;
            }
            var myOlFeature = i1$1.featureToOl(result.data, this.map.projection);
            var olGeometry = myOlFeature.getGeometry();
            if (i1$1.featuresAreTooDeepInView(this.map, olGeometry.getExtent(), 0.0025)) {
                var extent = olGeometry.getExtent();
                var x = extent[0] + (extent[2] - extent[0]) / 2;
                var y = extent[1] + (extent[3] - extent[1]) / 2;
                var feature1 = new olFeature__default["default"]({
                    name: trigger + "AbstractResult'",
                    geometry: new olPoint__default["default"]([x, y])
                });
                var abstractResult = i1$1.featureFromOl(feature1, this.map.projection);
                var computedStyle = void 0;
                var zIndexOffset = 0;
                switch (trigger) {
                    case 'focused':
                        computedStyle = i1$1.getCommonVectorSelectedStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                        zIndexOffset = 2;
                        break;
                    case 'shown':
                        computedStyle = i1$1.getCommonVectorStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyle, ((_b = result.style) === null || _b === void 0 ? void 0 : _b.base) ? result.style.base : {}));
                        break;
                    case 'selected':
                        computedStyle = i1$1.getCommonVectorSelectedStyle(Object.assign({}, { feature: abstractResult }, this.searchState.searchOverlayStyleSelection, ((_c = result.style) === null || _c === void 0 ? void 0 : _c.selection) ? result.style.selection : {}));
                        zIndexOffset = 1;
                        break;
                }
                abstractResult.meta.style = computedStyle;
                abstractResult.meta.style.setZIndex(2000 + zIndexOffset);
                this.map.searchResultsOverlay.addFeature(abstractResult, i1$1.FeatureMotion.None);
                if (trigger === 'focused') {
                    this.abstractFocusedResult = abstractResult;
                }
                if (trigger === 'selected') {
                    this.abstractSelectedResult = abstractResult;
                }
                if (trigger === 'shown') {
                    this.shownResultsEmphasisGeometries.push(abstractResult);
                }
            }
            else {
                this.clearFeatureEmphasis(trigger);
            }
        };
        SearchResultsToolComponent.prototype.clearFeatureEmphasis = function (trigger) {
            var _this = this;
            if (trigger === 'focused' && this.abstractFocusedResult) {
                this.map.searchResultsOverlay.removeFeature(this.abstractFocusedResult);
                this.abstractFocusedResult = undefined;
            }
            if (trigger === 'selected' && this.abstractSelectedResult) {
                this.map.searchResultsOverlay.removeFeature(this.abstractSelectedResult);
                this.abstractSelectedResult = undefined;
            }
            if (trigger === 'shown') {
                this.shownResultsEmphasisGeometries.map(function (shownResult) { return _this.map.searchResultsOverlay.removeFeature(shownResult); });
                this.shownResultsEmphasisGeometries = [];
            }
        };
        SearchResultsToolComponent.prototype.ngOnDestroy = function () {
            this.topPanelState$$.unsubscribe();
            this.searchTerm$$.unsubscribe();
            if (this.isSelectedResultOutOfView$$) {
                this.isSelectedResultOutOfView$$.unsubscribe();
            }
            if (this.showResultsGeometries$$) {
                this.showResultsGeometries$$.unsubscribe();
            }
            if (this.getRoute$$) {
                this.getRoute$$.unsubscribe();
            }
        };
        /**
         * Try to add a feature to the map when it's being focused
         * @internal
         * @param result A search result that could be a feature
         */
        SearchResultsToolComponent.prototype.onResultFocus = function (result) {
            var _a;
            this.focusedResult$.next(result);
            if (result.meta.dataType === i1$1.FEATURE && result.data.geometry) {
                result.data.meta.style = i1$1.getCommonVectorSelectedStyle(Object.assign({}, { feature: result.data }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                var feature = this.map.searchResultsOverlay.dataSource.ol.getFeatureById(result.meta.id);
                if (feature) {
                    feature.setStyle(result.data.meta.style);
                    return;
                }
                this.map.searchResultsOverlay.addFeature(result.data, i1$1.FeatureMotion.None);
            }
        };
        SearchResultsToolComponent.prototype.onResultUnfocus = function (result) {
            var _a;
            this.focusedResult$.next(undefined);
            if (result.meta.dataType !== i1$1.FEATURE) {
                return;
            }
            if (this.store.state.get(result).selected === true) {
                var feature = this.map.searchResultsOverlay.dataSource.ol.getFeatureById(result.meta.id);
                if (feature) {
                    var style = i1$1.getCommonVectorSelectedStyle(Object.assign({}, { feature: result.data }, this.searchState.searchOverlayStyleFocus, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.focus) ? result.style.focus : {}));
                    feature.setStyle(style);
                }
                return;
            }
            this.map.searchResultsOverlay.removeFeature(result.data);
        };
        /**
         * Try to add a feature to the map when it's being selected
         * @internal
         * @param result A search result that could be a feature or some layer options
         */
        SearchResultsToolComponent.prototype.onResultSelect = function (result) {
            var _this = this;
            this.map.searchResultsOverlay.dataSource.ol.clear();
            this.tryAddFeatureToMap(result);
            this.searchState.setSelectedResult(result);
            if (this.topPanelState === 'expanded') {
                var igoList_1 = this.computeElementRef()[0];
                var selected_1 = this.computeElementRef()[1];
                setTimeout(function () {
                    // To be sure the flexible component has been displayed yet
                    if (!_this.isScrolledIntoView(igoList_1, selected_1)) {
                        _this.adjustTopPanel(igoList_1, selected_1);
                    }
                }, i4.FlexibleComponent.transitionTime + 50);
            }
            if (this.topPanelState === 'initial') {
                this.topPanelState = 'expanded';
            }
        };
        SearchResultsToolComponent.prototype.onSearch = function (event) {
            var e_2, _d;
            var _this = this;
            var results = event.results;
            var newResults = this.store.entities$.value
                .filter(function (result) { return result.source !== event.research.source; })
                .concat(results);
            this.store.load(newResults);
            try {
                for (var _e = __values(this.store.all()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var res = _f.value;
                    if (this.store.state.get(res).focused === true &&
                        this.store.state.get(res).selected !== true) {
                        this.store.state.update(res, { focused: false }, true);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            setTimeout(function () {
                var igoList = _this.elRef.nativeElement.querySelector('igo-list');
                var moreResults;
                event.research.request.subscribe(function (source) {
                    if (!source[0] || !source[0].source) {
                        moreResults = null;
                    }
                    else if (source[0].source.getId() === 'icherche') {
                        moreResults = igoList.querySelector('.icherche .moreResults');
                    }
                    else if (source[0].source.getId() === 'ilayer') {
                        moreResults = igoList.querySelector('.ilayer .moreResults');
                    }
                    else if (source[0].source.getId() === 'nominatim') {
                        moreResults = igoList.querySelector('.nominatim .moreResults');
                    }
                    else {
                        moreResults = igoList.querySelector('.' + source[0].source.getId() + ' .moreResults');
                    }
                    if (moreResults !== null &&
                        !_this.isScrolledIntoView(igoList, moreResults)) {
                        igoList.scrollTop =
                            moreResults.offsetTop +
                                moreResults.offsetHeight -
                                igoList.clientHeight;
                    }
                });
            }, 250);
        };
        SearchResultsToolComponent.prototype.computeElementRef = function () {
            var items = document.getElementsByTagName('igo-search-results-item');
            var igoList = this.elRef.nativeElement.getElementsByTagName('igo-list')[0];
            var selectedItem;
            // eslint-disable-next-line
            for (var i = 0; i < items.length; i++) {
                if (items[i].className.includes('igo-list-item-selected')) {
                    selectedItem = items[i];
                }
            }
            return [igoList, selectedItem];
        };
        SearchResultsToolComponent.prototype.adjustTopPanel = function (elemSource, elem) {
            if (!this.isScrolledIntoView(elemSource, elem)) {
                elemSource.scrollTop =
                    elem.offsetTop +
                        elem.children[0].offsetHeight -
                        elemSource.clientHeight;
            }
        };
        SearchResultsToolComponent.prototype.toggleTopPanel = function () {
            if (this.topPanelState === 'expanded') {
                this.topPanelState = 'collapsed';
            }
            else {
                this.topPanelState = 'expanded';
            }
        };
        SearchResultsToolComponent.prototype.zoomToFeatureExtent = function () {
            if (this.feature.geometry) {
                var localOlFeature = this.format.readFeature(this.feature, {
                    dataProjection: this.feature.projection,
                    featureProjection: this.map.projection
                });
                i1$1.moveToOlFeatures(this.map, [localOlFeature], i1$1.FeatureMotion.Zoom);
            }
        };
        /**
         * Try to add a feature to the map overlay
         * @param result A search result that could be a feature
         */
        SearchResultsToolComponent.prototype.tryAddFeatureToMap = function (result) {
            var _a;
            if (result.meta.dataType !== i1$1.FEATURE) {
                return undefined;
            }
            var feature = result.data;
            // Somethimes features have no geometry. It happens with some GetFeatureInfo
            if (!feature.geometry) {
                return;
            }
            feature.meta.style = i1$1.getCommonVectorSelectedStyle(Object.assign({}, { feature: feature }, this.searchState.searchOverlayStyleSelection, ((_a = result.style) === null || _a === void 0 ? void 0 : _a.selection) ? result.style.selection : {}));
            this.map.searchResultsOverlay.addFeature(feature);
        };
        SearchResultsToolComponent.prototype.isScrolledIntoView = function (elemSource, elem) {
            var padding = 6;
            var docViewTop = elemSource.scrollTop;
            var docViewBottom = docViewTop + elemSource.clientHeight;
            var elemTop = elem.offsetTop;
            var elemBottom = elemTop + elem.clientHeight + padding;
            return elemBottom <= docViewBottom && elemTop >= docViewTop;
        };
        SearchResultsToolComponent.prototype.getRoute = function () {
            var _this = this;
            this.toolState.toolbox.activateTool('directions');
            this.directionState.stopsStore.clearStops();
            setTimeout(function () {
                var routingCoordLoaded = false;
                if (_this.getRoute$$) {
                    _this.getRoute$$.unsubscribe();
                }
                _this.getRoute$$ = _this.directionState.stopsStore.storeInitialized$.subscribe(function (init) {
                    if (_this.directionState.stopsStore.storeInitialized$.value && !routingCoordLoaded) {
                        routingCoordLoaded = true;
                        var stop = _this.directionState.stopsStore.all().find(function (e) { return e.position === 1; });
                        var coord = void 0;
                        if (_this.feature.geometry) {
                            if (_this.feature.geometry.type === 'Point') {
                                coord = [_this.feature.geometry.coordinates[0], _this.feature.geometry.coordinates[1]];
                            }
                            else {
                                var point = pointOnFeature__default["default"](_this.feature.geometry);
                                coord = [point.geometry.coordinates[0], point.geometry.coordinates[1]];
                            }
                        }
                        stop.text = _this.featureTitle;
                        stop.coordinates = coord;
                        _this.directionState.stopsStore.update(stop);
                    }
                });
            }, 250);
        };
        return SearchResultsToolComponent;
    }());
    exports.SearchResultsToolComponent.ɵfac = function SearchResultsToolComponent_Factory(t) { return new (t || exports.SearchResultsToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(SearchState), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(DirectionState), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.ConfigService)); };
    exports.SearchResultsToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.SearchResultsToolComponent, selectors: [["igo-search-results-tool"]], inputs: { showIcons: "showIcons", topPanelState: "topPanelState" }, decls: 3, vars: 4, consts: [["style", "margin: 10px;", 4, "ngIf"], ["initial", "100%", "initialMobile", "100%", "collapsed", "calc(100% - 58px)", "collapsedMobile", "calc(100% - 58px)", "expanded", "60%", "expandedMobile", "60%", 3, "state", 4, "ngIf"], [2, "margin", "10px"], [1, "mat-typography"], [3, "innerHTML"], ["initial", "100%", "initialMobile", "100%", "collapsed", "calc(100% - 58px)", "collapsedMobile", "calc(100% - 58px)", "expanded", "60%", "expandedMobile", "60%", 3, "state"], ["topPanel", ""], [1, "igo-content"], ["placeholder", "false", 3, "store", "showIcons", "term", "termSplitter", "settingsChange$", "resultFocus", "resultSelect", "resultUnfocus", "resultMouseenter", "resultMouseleave", "moreResults"], ["igoSearchItemToolbar", ""], ["igoFlexibleFill", "", 1, "igo-content"], [3, "title", 4, "ngIf"], [3, "map", "layer"], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", 1, "igo-icon-button", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["igoFeatureDetailsDirective", "", 3, "feature", "map", "toolbox", "routingEvent"], ["mat-icon-button", "", "panelRightButton", "", "matTooltipShowDelay", "500", 1, "igo-icon-button", 3, "matTooltip", "click"], ["matBadgeColor", "accent", "matBadgeSize", "small", "svgIcon", "magnify-plus-outline", 3, "matBadge", "matBadgeHidden"]], template: function SearchResultsToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SearchResultsToolComponent_div_0_Template, 13, 11, "div", 0);
                i0__namespace.ɵɵtemplate(1, SearchResultsToolComponent_igo_flexible_1_Template, 10, 11, "igo-flexible", 1);
                i0__namespace.ɵɵpipe(2, "async");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", !ctx.store || ctx.store.stateView.empty);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.store && i0__namespace.ɵɵpipeBind1(2, 2, ctx.store.stateView.empty$) === false);
            }
        }, directives: [i4__namespace$1.NgIf, i4__namespace.FlexibleComponent, i1__namespace$1.SearchResultsComponent, i1__namespace$1.SearchResultAddButtonComponent, i4__namespace.PanelComponent, i3__namespace.MatButton, i6__namespace.MatIcon, i1__namespace$1.FeatureDetailsComponent, i1__namespace$1.FeatureDetailsDirective, i4__namespace$2.MatTooltip, i12__namespace.MatBadge], pipes: [i4__namespace$1.AsyncPipe, i8__namespace.TranslatePipe, i4__namespace.SanitizeHtmlPipe], encapsulation: 2, changeDetection: 0 });
    exports.SearchResultsToolComponent = __decorate([
        i4.ToolComponent({
            name: 'searchResults',
            title: 'igo.integration.tools.searchResults',
            icon: 'magnify'
        })
    ], exports.SearchResultsToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.SearchResultsToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-search-results-tool',
                        templateUrl: './search-results-tool.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: MapState }, { type: SearchState }, { type: i0__namespace.ElementRef }, { type: ToolState }, { type: DirectionState }, { type: i2__namespace$1.ConfigService }]; }, { showIcons: [{
                    type: i0.Input
                }], topPanelState: [{
                    type: i0.Input
                }] });
    })();

    /**
     * @ignore
     */
    var IgoAppSearchResultsToolModule = /** @class */ (function () {
        function IgoAppSearchResultsToolModule() {
        }
        return IgoAppSearchResultsToolModule;
    }());
    IgoAppSearchResultsToolModule.ɵfac = function IgoAppSearchResultsToolModule_Factory(t) { return new (t || IgoAppSearchResultsToolModule)(); };
    IgoAppSearchResultsToolModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppSearchResultsToolModule });
    IgoAppSearchResultsToolModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4$1.CommonModule,
                i6.MatIconModule,
                i12.MatBadgeModule,
                i4$2.MatTooltipModule,
                i3.MatButtonModule,
                i2$1.IgoLanguageModule,
                i1$1.IgoFeatureModule,
                i1$1.IgoSearchModule,
                i4.IgoFlexibleModule,
                i4.IgoPanelModule,
                i1$1.IgoFeatureDetailsModule,
                i4.IgoCustomHtmlModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppSearchResultsToolModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4$1.CommonModule,
                            i6.MatIconModule,
                            i12.MatBadgeModule,
                            i4$2.MatTooltipModule,
                            i3.MatButtonModule,
                            i2$1.IgoLanguageModule,
                            i1$1.IgoFeatureModule,
                            i1$1.IgoSearchModule,
                            i4.IgoFlexibleModule,
                            i4.IgoPanelModule,
                            i1$1.IgoFeatureDetailsModule,
                            i4.IgoCustomHtmlModule
                        ],
                        declarations: [exports.SearchResultsToolComponent],
                        exports: [exports.SearchResultsToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppSearchResultsToolModule, { declarations: [exports.SearchResultsToolComponent], imports: [i4$1.CommonModule,
                i6.MatIconModule,
                i12.MatBadgeModule,
                i4$2.MatTooltipModule,
                i3.MatButtonModule,
                i2$1.IgoLanguageModule,
                i1$1.IgoFeatureModule,
                i1$1.IgoSearchModule,
                i4.IgoFlexibleModule,
                i4.IgoPanelModule,
                i1$1.IgoFeatureDetailsModule,
                i4.IgoCustomHtmlModule], exports: [exports.SearchResultsToolComponent] });
    })();

    var IgoAppSearchModule = /** @class */ (function () {
        function IgoAppSearchModule() {
        }
        return IgoAppSearchModule;
    }());
    IgoAppSearchModule.ɵfac = function IgoAppSearchModule_Factory(t) { return new (t || IgoAppSearchModule)(); };
    IgoAppSearchModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppSearchModule });
    IgoAppSearchModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[], IgoAppSearchBarModule,
            IgoAppSearchResultsToolModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppSearchModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: [
                            IgoAppSearchBarModule,
                            IgoAppSearchResultsToolModule
                        ],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppSearchModule, { exports: [IgoAppSearchBarModule,
                IgoAppSearchResultsToolModule] });
    })();

    exports.OgcFilterToolComponent = /** @class */ (function () {
        function OgcFilterToolComponent() {
        }
        return OgcFilterToolComponent;
    }());
    exports.OgcFilterToolComponent.ɵfac = function OgcFilterToolComponent_Factory(t) { return new (t || exports.OgcFilterToolComponent)(); };
    exports.OgcFilterToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.OgcFilterToolComponent, selectors: [["igo-ogc-filter-tool"]], decls: 1, vars: 0, consts: [["igoOgcFilterableListBinding", ""]], template: function OgcFilterToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-ogc-filterable-list", 0);
            }
        }, directives: [i1__namespace$1.OgcFilterableListComponent, i1__namespace$1.OgcFilterableListBindingDirective], encapsulation: 2 });
    exports.OgcFilterToolComponent = __decorate([
        i4.ToolComponent({
            name: 'ogcFilter',
            title: 'igo.integration.tools.ogcFilter',
            icon: 'filter'
        })
    ], exports.OgcFilterToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.OgcFilterToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-ogc-filter-tool',
                        templateUrl: './ogc-filter-tool.component.html'
                    }]
            }], function () { return []; }, null);
    })();

    exports.TimeFilterToolComponent = /** @class */ (function () {
        function TimeFilterToolComponent() {
        }
        return TimeFilterToolComponent;
    }());
    exports.TimeFilterToolComponent.ɵfac = function TimeFilterToolComponent_Factory(t) { return new (t || exports.TimeFilterToolComponent)(); };
    exports.TimeFilterToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.TimeFilterToolComponent, selectors: [["igo-time-filter-tool"]], decls: 1, vars: 0, consts: [["igoTimeFilterListBinding", ""]], template: function TimeFilterToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-time-filter-list", 0);
            }
        }, directives: [i1__namespace$1.TimeFilterListComponent, i1__namespace$1.TimeFilterListBindingDirective], encapsulation: 2 });
    exports.TimeFilterToolComponent = __decorate([
        i4.ToolComponent({
            name: 'timeFilter',
            title: 'igo.integration.tools.timeFilter',
            icon: 'history'
        })
    ], exports.TimeFilterToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.TimeFilterToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-time-filter-tool',
                        templateUrl: './time-filter-tool.component.html'
                    }]
            }], function () { return []; }, null);
    })();

    function SpatialFilterToolComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "igo-feature-details", 3);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var feature_r1 = ctx.ngIf;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("feature", feature_r1);
        }
    }
    /**
     * Tool to apply spatial filter
     */
    exports.SpatialFilterToolComponent = /** @class */ (function () {
        function SpatialFilterToolComponent(matIconRegistry, spatialFilterService, dataSourceService, layerService, mapState, messageService, languageService, importExportState, toolState, workspaceState, cdRef) {
            this.matIconRegistry = matIconRegistry;
            this.spatialFilterService = spatialFilterService;
            this.dataSourceService = dataSourceService;
            this.layerService = layerService;
            this.mapState = mapState;
            this.messageService = messageService;
            this.languageService = languageService;
            this.importExportState = importExportState;
            this.toolState = toolState;
            this.workspaceState = workspaceState;
            this.cdRef = cdRef;
            this.itemType = i1$1.SpatialFilterItemType.Address;
            this.layers = [];
            this.activeLayers = [];
            this.buffer = 0;
            this.iterator = 1;
            this.selectedFeature$ = new rxjs.BehaviorSubject(undefined);
            this.format = new olFormatGeoJSON__default["default"]();
            this.store = new i4.EntityStore([]); // Store to print results at the end
            this.spatialListStore = new i4.EntityStore([]);
            this.loading = false;
            this.thematicLength = 0;
            this.measureUnit = i1$1.MeasureLengthUnit.Meters;
            this.unsubscribe$ = new rxjs.Subject();
        }
        Object.defineProperty(SpatialFilterToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        SpatialFilterToolComponent.prototype.ngOnInit = function () {
            var e_1, _e;
            try {
                for (var _f = __values(this.map.layers), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var layer = _g.value;
                    if (layer.title && layer.title.includes(this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter'))) {
                        this.layers.push(layer);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        SpatialFilterToolComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        SpatialFilterToolComponent.prototype.getOutputType = function (event) {
            this.type = event;
            this.queryType = undefined;
        };
        SpatialFilterToolComponent.prototype.getOutputQueryType = function (event) {
            this.queryType = event;
            if (this.queryType) {
                this.loadFilterList();
            }
        };
        SpatialFilterToolComponent.prototype.activateExportTool = function () {
            var e_2, _e;
            var ids = [];
            var re = new RegExp('^Zone \\d+');
            try {
                for (var _f = __values(this.layers), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var layer = _g.value;
                    if (!layer.title.match(re)) {
                        ids.push(layer.id);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.importExportState.setMode(exports.ImportExportMode.export);
            this.importExportState.setsExportOptions({ layers: ids });
            this.toolState.toolbox.activateTool('importExport');
        };
        SpatialFilterToolComponent.prototype.activateWorkspace = function (record) {
            var _this = this;
            var layerToOpenWks;
            this.workspaceState.store.entities$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                var e_3, _e;
                if (!record && _this.activeLayers.length && _this.workspaceState.store.all().length > 1) {
                    if (_this.itemType === i1$1.SpatialFilterItemType.Thematics) {
                        var _loop_1 = function (thematic) {
                            if (!thematic.zeroResults) {
                                layerToOpenWks = _this.activeLayers.find(function (layer) { return layer.title.includes(thematic.name + ' ' + _this.iterator.toString()); });
                                return "break";
                            }
                        };
                        try {
                            for (var _f = __values(_this.thematics), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var thematic = _g.value;
                                var state_1 = _loop_1(thematic);
                                if (state_1 === "break")
                                    break;
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                    else {
                        var title_1 = 'Adresses ' + _this.iterator.toString();
                        _this.activeLayers.forEach(function (layer) {
                            if (layer.title.includes(title_1)) {
                                layerToOpenWks = layer;
                            }
                        });
                    }
                    if (layerToOpenWks) {
                        _this.workspaceState.workspacePanelExpanded = true;
                        _this.workspaceState.setActiveWorkspaceById(layerToOpenWks.id);
                    }
                }
                else if (record && _this.activeLayers.length && _this.workspaceState.store.all().length > 1) {
                    _this.selectWorkspaceEntity(record);
                    _this.moveendKey = _this.map.ol.on('moveend', function () {
                        _this.selectWorkspaceEntity(record);
                    });
                }
            });
        };
        SpatialFilterToolComponent.prototype.selectWorkspaceEntity = function (record) {
            var _this = this;
            this.workspaceState.store.all().forEach(function (workspace) {
                workspace.entityStore.state.updateAll({ selected: false });
                if (workspace.title.includes(record.added[0].meta.title)) {
                    _this.workspaceState.setActiveWorkspaceById(workspace.id);
                    workspace.entityStore.state.updateMany(record.added, { selected: true });
                }
            });
        };
        SpatialFilterToolComponent.prototype.loadFilterList = function () {
            var _this = this;
            this.spatialFilterService
                .loadFilterList(this.queryType)
                .pipe(operators.takeUntil(this.unsubscribe$))
                .subscribe(function (features) {
                features.sort(function (a, b) {
                    if (a.properties.nom < b.properties.nom) {
                        return -1;
                    }
                    if (a.properties.nom > b.properties.nom) {
                        return 1;
                    }
                    return 0;
                });
                _this.spatialListStore.clear();
                _this.spatialListStore.load(features);
            });
        };
        SpatialFilterToolComponent.prototype.getOutputToggleSearch = function () {
            this.loadThematics();
        };
        SpatialFilterToolComponent.prototype.getOutputClearSearch = function () {
            this.zone = undefined;
            this.queryType = undefined;
        };
        SpatialFilterToolComponent.prototype.clearMap = function () {
            this.map.removeLayers(this.layers);
            this.layers = [];
            this.activeLayers = [];
            this.thematicLength = 0;
            this.iterator = 1;
            if (this.type === i1$1.SpatialFilterType.Predefined) {
                this.zone = undefined;
                this.queryType = undefined;
            }
        };
        SpatialFilterToolComponent.prototype.loadThematics = function () {
            var _this = this;
            this.loading = true;
            var zeroResults = true;
            var thematics;
            if (this.buffer === 0 || this.type === i1$1.SpatialFilterType.Point) {
                this.tryAddFeaturesToMap([this.zone]);
            }
            if (this.itemType !== i1$1.SpatialFilterItemType.Thematics) {
                var theme = {
                    name: ''
                };
                thematics = [theme];
            }
            else {
                thematics = this.thematics;
            }
            if (this.measureUnit === i1$1.MeasureLengthUnit.Kilometers && this.type !== i1$1.SpatialFilterType.Point) {
                this.buffer = this.buffer * 1000;
            }
            if (this.type === i1$1.SpatialFilterType.Polygon) {
                this.buffer = 0; // to avoid buffer enter a second time in terrAPI
            }
            var observables$ = [];
            thematics.forEach(function (thematic) {
                observables$.push(_this.spatialFilterService
                    .loadFilterItem(_this.zone, _this.itemType, _this.queryType, thematic, _this.buffer)
                    .pipe(operators.tap(function (features) {
                    _this.store.insertMany(features);
                    var featuresPoint = [];
                    var featuresLinePoly = [];
                    var idPoint;
                    var idLinePoly;
                    features.forEach(function (feature) {
                        if (feature.geometry.type === 'Point') {
                            feature.properties.longitude = feature.geometry.coordinates[0];
                            feature.properties.latitude = feature.geometry.coordinates[1];
                            featuresPoint.push(feature);
                            idPoint = feature.meta.id;
                        }
                        else {
                            featuresLinePoly.push(feature);
                            idLinePoly = feature.meta.id;
                        }
                    });
                    _this.tryAddPointToMap(featuresPoint, idPoint);
                    _this.tryAddLayerToMap(featuresLinePoly, idLinePoly);
                    if (features.length) {
                        zeroResults = false;
                        _this.thematicLength += 1;
                        thematic.zeroResults = false;
                        _this.cdRef.detectChanges();
                    }
                    else {
                        thematic.zeroResults = true;
                    }
                    if (features.length >= 10000) {
                        _this.messageService.alert(_this.languageService.translate.instant('igo.geo.spatialFilter.maxSizeAlert'), _this.languageService.translate.instant('igo.geo.spatialFilter.warning'), { timeOut: 10000 });
                    }
                })));
            });
            rxjs.forkJoin(observables$).pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.loading = false;
                if (zeroResults) {
                    _this.messageService.alert(_this.languageService.translate.instant('igo.geo.spatialFilter.zeroResults'), _this.languageService.translate.instant('igo.geo.spatialFilter.warning'), { timeOut: 10000 });
                }
            });
        };
        SpatialFilterToolComponent.prototype.onZoneChange = function (feature, buffer) {
            this.zone = feature;
            if (feature) {
                buffer ? this.tryAddFeaturesToMap([feature], true) : this.tryAddFeaturesToMap([feature]);
                this.zoomToFeatureExtent(feature);
            }
        };
        /**
         * Try to add zone feature to the map overlay
         */
        SpatialFilterToolComponent.prototype.tryAddFeaturesToMap = function (features, buffer) {
            var e_4, _e;
            var _this = this;
            var _a, _b, _c, _d;
            var i = 1;
            var _loop_2 = function (feature) {
                var e_5, _f, e_6, _g, e_7, _h;
                if (this_1.type === i1$1.SpatialFilterType.Predefined) {
                    try {
                        for (var _j = (e_5 = void 0, __values(this_1.layers)), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var layer = _k.value;
                            if (layer.options._internal &&
                                layer.options._internal.code === feature.properties.code &&
                                !buffer) {
                                if (!((_a = layer.title) === null || _a === void 0 ? void 0 : _a.startsWith('Zone'))) {
                                    var index = this_1.layers.indexOf(layer);
                                    this_1.layers.splice(index, 1);
                                }
                                return { value: void 0 };
                            }
                            if ((_b = layer.title) === null || _b === void 0 ? void 0 : _b.startsWith('Zone')) {
                                this_1.activeLayers = [];
                                var index = this_1.layers.indexOf(layer);
                                this_1.layers.splice(index, 1);
                                this_1.map.removeLayer(layer);
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_f = _j.return)) _f.call(_j);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                else {
                    if (buffer) {
                        try {
                            for (var _l = (e_6 = void 0, __values(this_1.activeLayers)), _m = _l.next(); !_m.done; _m = _l.next()) {
                                var layer = _m.value;
                                if (this_1.activeLayers.length === 1 && ((_c = layer.title) === null || _c === void 0 ? void 0 : _c.startsWith('Zone'))) {
                                    var index = this_1.layers.indexOf(layer);
                                    this_1.layers.splice(index, 1);
                                    this_1.map.removeLayer(layer);
                                }
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (_m && !_m.done && (_g = _l.return)) _g.call(_l);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }
                    this_1.activeLayers = [];
                }
                try {
                    for (var _o = (e_7 = void 0, __values(this_1.layers)), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var layer = _p.value;
                        if ((_d = layer.title) === null || _d === void 0 ? void 0 : _d.startsWith('Zone')) {
                            i++;
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_h = _o.return)) _h.call(_o);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                this_1.dataSourceService
                    .createAsyncDataSource({
                    type: 'vector',
                    queryable: true
                })
                    .pipe(operators.take(1))
                    .subscribe(function (dataSource) {
                    var olLayer = _this.layerService.createLayer({
                        isIgoInternalLayer: true,
                        title: ('Zone ' + i + ' - ' + _this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter')),
                        workspace: { enabled: true },
                        _internal: {
                            code: _this.type === i1$1.SpatialFilterType.Predefined
                                ? feature.properties.code
                                : undefined
                        },
                        source: dataSource,
                        visible: true,
                        style: function (_feature, resolution) {
                            var coordinates = features[0].coordinates;
                            return new olstyle__namespace.Style({
                                image: new olstyle__namespace.Circle({
                                    radius: coordinates
                                        ? _this.buffer /
                                            Math.cos((Math.PI / 180) * coordinates[1]) /
                                            resolution
                                        : undefined,
                                    fill: new olstyle__namespace.Fill({
                                        color: 'rgba(200, 200, 20, 0.2)'
                                    }),
                                    stroke: new olstyle__namespace.Stroke({
                                        width: 1,
                                        color: 'orange'
                                    })
                                }),
                                stroke: new olstyle__namespace.Stroke({
                                    width: 1,
                                    color: 'orange'
                                }),
                                fill: new olstyle__namespace.Fill({
                                    color: 'rgba(200, 200, 20, 0.2)'
                                })
                            });
                        }
                    });
                    var featuresOl = features.map(function (f) {
                        return i1$1.featureToOl(f, _this.map.projection);
                    });
                    if (_this.type !== i1$1.SpatialFilterType.Predefined) {
                        var type = _this.type === i1$1.SpatialFilterType.Point ? 'Cercle' : 'Polygone';
                        featuresOl[0].set('nom', 'Zone', true);
                        featuresOl[0].set('type', type, true);
                    }
                    var ol = dataSource.ol;
                    ol.addFeatures(featuresOl);
                    _this.map.addLayer(olLayer);
                    _this.layers.push(olLayer);
                    _this.activeLayers.push(olLayer);
                    _this.cdRef.detectChanges();
                });
            };
            var this_1 = this;
            try {
                for (var features_1 = __values(features), features_1_1 = features_1.next(); !features_1_1.done; features_1_1 = features_1.next()) {
                    var feature = features_1_1.value;
                    var state_2 = _loop_2(feature);
                    if (typeof state_2 === "object")
                        return state_2.value;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (features_1_1 && !features_1_1.done && (_e = features_1.return)) _e.call(features_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        /**
         * Try to add point features to the map
         * Necessary to create clusters
         */
        SpatialFilterToolComponent.prototype.tryAddPointToMap = function (features, id) {
            var e_8, _e;
            var _this = this;
            var _a;
            var i = 1;
            if (features.length) {
                if (this.map === undefined) {
                    return;
                }
                try {
                    for (var _f = __values(this.layers), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var layer = _g.value;
                        if ((_a = layer.title) === null || _a === void 0 ? void 0 : _a.startsWith(features[0].meta.title)) {
                            i++;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                this.dataSourceService
                    .createAsyncDataSource({
                    type: 'cluster',
                    id: id,
                    queryable: true,
                    distance: 120,
                    meta: {
                        title: 'Cluster'
                    }
                })
                    .pipe(operators.take(1))
                    .subscribe(function (dataSource) {
                    var icon = features[0].meta.icon;
                    var style;
                    if (!icon) {
                        style = i1$1.createOverlayMarkerStyle();
                    }
                    else {
                        style = _this.createSvgIcon(icon) || i1$1.createOverlayMarkerStyle();
                    }
                    var olLayer = _this.layerService.createLayer({
                        isIgoInternalLayer: true,
                        title: (features[0].meta.title + ' ' + i + ' - ' + _this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter')),
                        source: dataSource,
                        visible: true,
                        style: style
                    });
                    var featuresOl = features.map(function (feature) {
                        return i1$1.featureToOl(feature, _this.map.projection);
                    });
                    var ol = dataSource.ol;
                    ol.getSource().addFeatures(featuresOl);
                    if (_this.layers.find(function (layer) { return layer.id === olLayer.id; })) {
                        _this.map.removeLayer(_this.layers.find(function (layer) { return layer.id === olLayer.id; }));
                        i = i - 1;
                        olLayer.title = (features[0].meta.title + ' ' + i + ' - ' + _this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter'));
                        olLayer.options.title = olLayer.title;
                    }
                    _this.iterator = i;
                    _this.map.addLayer(olLayer);
                    _this.layers.push(olLayer);
                    _this.pushLayer(olLayer);
                    _this.cdRef.detectChanges();
                });
            }
        };
        SpatialFilterToolComponent.prototype.createSvgIcon = function (icon) {
            var style;
            this.matIconRegistry.getNamedSvgIcon(icon).subscribe(function (svgObj) {
                var xmlSerializer = new XMLSerializer();
                svgObj.setAttribute('width', '30');
                svgObj.setAttribute('height', '30');
                svgObj.setAttribute('fill', 'rgba(0, 128, 255)');
                svgObj.setAttribute('stroke', 'white');
                var svg = xmlSerializer.serializeToString(svgObj);
                style = new olstyle__namespace.Style({
                    image: new olstyle__namespace.Icon({
                        src: 'data:image/svg+xml;utf8,' + svg
                    })
                });
            });
            return style;
        };
        /**
         * Try to add line or polygon features to the map
         */
        SpatialFilterToolComponent.prototype.tryAddLayerToMap = function (features, id) {
            var e_9, _e;
            var _this = this;
            var _a;
            var i = 1;
            if (features.length) {
                if (this.map === undefined) {
                    return;
                }
                try {
                    for (var _f = __values(this.layers), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var layer = _g.value;
                        if ((_a = layer.title) === null || _a === void 0 ? void 0 : _a.startsWith(features[0].meta.title)) {
                            i++;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                this.dataSourceService
                    .createAsyncDataSource({
                    type: 'vector',
                    id: id,
                    queryable: true
                })
                    .pipe(operators.take(1))
                    .subscribe(function (dataSource) {
                    var olLayer = _this.layerService.createLayer({
                        isIgoInternalLayer: true,
                        title: (features[0].meta.title + ' ' + i + ' - ' + _this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter')),
                        source: dataSource,
                        visible: true
                    });
                    var featuresOl = features.map(function (feature) {
                        return i1$1.featureToOl(feature, _this.map.projection);
                    });
                    var ol = dataSource.ol;
                    ol.addFeatures(featuresOl);
                    if (_this.layers.find(function (layer) { return layer.id === olLayer.id; })) {
                        _this.map.removeLayer(_this.layers.find(function (layer) { return layer.id === olLayer.id; }));
                        i = i - 1;
                        olLayer.title = (features[0].meta.title + ' ' + i + ' - ' + _this.languageService.translate.instant('igo.geo.spatialFilter.spatialFilter'));
                        olLayer.options.title = olLayer.title;
                    }
                    _this.map.addLayer(olLayer);
                    _this.layers.push(olLayer);
                    _this.pushLayer(olLayer);
                    _this.cdRef.detectChanges();
                });
            }
        };
        SpatialFilterToolComponent.prototype.zoomToFeatureExtent = function (feature) {
            if (feature) {
                var olFeature = this.format.readFeature(feature, {
                    dataProjection: feature.projection,
                    featureProjection: this.map.projection
                });
                i1$1.moveToOlFeatures(this.map, [olFeature], i1$1.FeatureMotion.Zoom);
            }
        };
        SpatialFilterToolComponent.prototype.pushLayer = function (layer) {
            var e_10, _e;
            try {
                for (var _f = __values(this.activeLayers), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var lay = _g.value;
                    if (lay.id === layer.id) {
                        return;
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                }
                finally { if (e_10) throw e_10.error; }
            }
            this.activeLayers.push(layer);
        };
        return SpatialFilterToolComponent;
    }());
    exports.SpatialFilterToolComponent.ɵfac = function SpatialFilterToolComponent_Factory(t) { return new (t || exports.SpatialFilterToolComponent)(i0__namespace.ɵɵdirectiveInject(i6__namespace.MatIconRegistry), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.SpatialFilterService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.DataSourceService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.LayerService), i0__namespace.ɵɵdirectiveInject(MapState), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.MessageService), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.LanguageService), i0__namespace.ɵɵdirectiveInject(ImportExportState), i0__namespace.ɵɵdirectiveInject(ToolState), i0__namespace.ɵɵdirectiveInject(WorkspaceState), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    exports.SpatialFilterToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.SpatialFilterToolComponent, selectors: [["igo-spatial-filter-tool"]], inputs: { type: "type", itemType: "itemType", freehandDrawIsActive: "freehandDrawIsActive" }, decls: 6, vars: 16, consts: [[3, "store", "selectedQueryType", "zone", "layers", "eventType", "eventQueryType", "zoneChange", "zoneWithBufferChange", "bufferChange", "measureUnitChange"], [3, "type", "queryType", "map", "zone", "loading", "store", "layers", "allLayers", "thematicLength", "radiusEvent", "bufferEvent", "measureUnitChange", "freehandControl", "drawZoneEvent", "zoneWithBufferChange", "itemTypeChange", "thematicChange", "toggleSearch", "clearButtonEvent", "clearSearchEvent", "export", "openWorkspace", "entityChange"], [4, "ngIf"], [3, "feature"]], template: function SpatialFilterToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "igo-panel");
                i0__namespace.ɵɵelementStart(1, "igo-spatial-filter-type", 0);
                i0__namespace.ɵɵlistener("eventType", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_eventType_1_listener($event) { return ctx.getOutputType($event); })("eventQueryType", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_eventQueryType_1_listener($event) { return ctx.getOutputQueryType($event); })("zoneChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_zoneChange_1_listener($event) { return ctx.onZoneChange($event); })("zoneWithBufferChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_zoneWithBufferChange_1_listener($event) { return ctx.onZoneChange($event, true); })("bufferChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_bufferChange_1_listener($event) { return ctx.buffer = $event; })("measureUnitChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_type_measureUnitChange_1_listener($event) { return ctx.measureUnit = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "igo-spatial-filter-item", 1);
                i0__namespace.ɵɵlistener("radiusEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_radiusEvent_2_listener($event) { return ctx.buffer = $event; })("bufferEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_bufferEvent_2_listener($event) { return ctx.buffer = $event; })("measureUnitChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_measureUnitChange_2_listener($event) { return ctx.measureUnit = $event; })("freehandControl", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_freehandControl_2_listener($event) { return ctx.freehandDrawIsActive = $event; })("drawZoneEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_drawZoneEvent_2_listener($event) { return ctx.zone = $event; })("zoneWithBufferChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_zoneWithBufferChange_2_listener($event) { return ctx.onZoneChange($event, true); })("itemTypeChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_itemTypeChange_2_listener($event) { return ctx.itemType = $event; })("thematicChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_thematicChange_2_listener($event) { return ctx.thematics = $event; })("toggleSearch", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_toggleSearch_2_listener() { return ctx.getOutputToggleSearch(); })("clearButtonEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_clearButtonEvent_2_listener() { return ctx.clearMap(); })("clearSearchEvent", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_clearSearchEvent_2_listener() { return ctx.getOutputClearSearch(); })("export", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_export_2_listener() { return ctx.activateExportTool(); })("openWorkspace", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_openWorkspace_2_listener() { return ctx.activateWorkspace(); })("entityChange", function SpatialFilterToolComponent_Template_igo_spatial_filter_item_entityChange_2_listener($event) { return ctx.activateWorkspace($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "igo-panel");
                i0__namespace.ɵɵtemplate(4, SpatialFilterToolComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
                i0__namespace.ɵɵpipe(5, "async");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("store", ctx.spatialListStore)("selectedQueryType", ctx.queryType)("zone", ctx.zone)("layers", ctx.activeLayers);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("type", ctx.type)("queryType", ctx.queryType)("map", ctx.map)("zone", ctx.zone)("loading", ctx.loading)("store", ctx.store)("layers", ctx.activeLayers)("allLayers", ctx.layers)("thematicLength", ctx.thematicLength);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(5, 14, ctx.selectedFeature$));
            }
        }, directives: [i1__namespace$1.SpatialFilterTypeComponent, i1__namespace$1.SpatialFilterItemComponent, i4__namespace$1.NgIf], pipes: [i4__namespace$1.AsyncPipe], styles: [""], changeDetection: 0 });
    exports.SpatialFilterToolComponent = __decorate([
        i4.ToolComponent({
            name: 'spatialFilter',
            title: 'igo.integration.tools.spatialFilter',
            icon: 'selection-marker'
        })
        /**
         * Spatial Filter Type
         */
    ], exports.SpatialFilterToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.SpatialFilterToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-spatial-filter-tool',
                        templateUrl: './spatial-filter-tool.component.html',
                        styleUrls: ['./spatial-filter-tool.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i6__namespace.MatIconRegistry }, { type: i1__namespace$1.SpatialFilterService }, { type: i1__namespace$1.DataSourceService }, { type: i1__namespace$1.LayerService }, { type: MapState }, { type: i2__namespace$1.MessageService }, { type: i2__namespace$1.LanguageService }, { type: ImportExportState }, { type: ToolState }, { type: WorkspaceState }, { type: i0__namespace.ChangeDetectorRef }]; }, { type: [{
                    type: i0.Input
                }], itemType: [{
                    type: i0.Input
                }], freehandDrawIsActive: [{
                    type: i0.Input
                }] });
    })();

    function toolSlideInOut$1(speed, type) {
        if (speed === void 0) { speed = '300ms'; }
        if (type === void 0) { type = 'ease-in-out'; }
        return animations.trigger('toolSlideInOut', [
            animations.state('enter', animations.style({
                transform: 'translateX(100%)'
            })),
            animations.transition('void => enter', animations.animate(speed + ' ' + type))
        ]);
    }

    exports.ActiveTimeFilterToolComponent = /** @class */ (function () {
        function ActiveTimeFilterToolComponent(mapState) {
            this.mapState = mapState;
            this.animate = 'enter';
        }
        Object.defineProperty(ActiveTimeFilterToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActiveTimeFilterToolComponent.prototype, "layer", {
            get: function () {
                var e_1, _a;
                try {
                    for (var _b = __values(this.map.layers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var lay = _c.value;
                        if (lay.options.active === true) {
                            return lay;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return;
            },
            enumerable: false,
            configurable: true
        });
        return ActiveTimeFilterToolComponent;
    }());
    exports.ActiveTimeFilterToolComponent.ɵfac = function ActiveTimeFilterToolComponent_Factory(t) { return new (t || exports.ActiveTimeFilterToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState)); };
    exports.ActiveTimeFilterToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ActiveTimeFilterToolComponent, selectors: [["igo-active-time-filter-tool"]], decls: 1, vars: 4, consts: [[3, "map", "layer", "header"]], template: function ActiveTimeFilterToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-time-filter-item", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("map", ctx.map)("layer", ctx.layer)("header", false)("@toolSlideInOut", ctx.animate);
            }
        }, directives: [i1__namespace$1.TimeFilterItemComponent], encapsulation: 2, data: { animation: [toolSlideInOut$1()] } });
    exports.ActiveTimeFilterToolComponent = __decorate([
        i4.ToolComponent({
            name: 'activeTimeFilter',
            title: 'igo.integration.tools.timeFilter',
            icon: 'history',
            parent: 'mapTools'
        })
    ], exports.ActiveTimeFilterToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ActiveTimeFilterToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-active-time-filter-tool',
                        templateUrl: './active-time-filter-tool.component.html',
                        animations: [toolSlideInOut$1()]
                    }]
            }], function () { return [{ type: MapState }]; }, null);
    })();

    function toolSlideInOut(speed, type) {
        if (speed === void 0) { speed = '300ms'; }
        if (type === void 0) { type = 'ease-in-out'; }
        return animations.trigger('toolSlideInOut', [
            animations.state('enter', animations.style({
                transform: 'translateX(100%)'
            })),
            animations.transition('void => enter', animations.animate(speed + ' ' + type))
        ]);
    }

    exports.ActiveOgcFilterToolComponent = /** @class */ (function () {
        function ActiveOgcFilterToolComponent(mapState) {
            this.mapState = mapState;
            this.animate = 'enter';
        }
        Object.defineProperty(ActiveOgcFilterToolComponent.prototype, "map", {
            get: function () {
                return this.mapState.map;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActiveOgcFilterToolComponent.prototype, "layer", {
            get: function () {
                var e_1, _a;
                try {
                    for (var _b = __values(this.map.layers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var lay = _c.value;
                        if (lay.options.active === true) {
                            return lay;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return;
            },
            enumerable: false,
            configurable: true
        });
        return ActiveOgcFilterToolComponent;
    }());
    exports.ActiveOgcFilterToolComponent.ɵfac = function ActiveOgcFilterToolComponent_Factory(t) { return new (t || exports.ActiveOgcFilterToolComponent)(i0__namespace.ɵɵdirectiveInject(MapState)); };
    exports.ActiveOgcFilterToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.ActiveOgcFilterToolComponent, selectors: [["igo-active-ogc-filter-tool"]], decls: 1, vars: 4, consts: [[3, "map", "layer", "header"]], template: function ActiveOgcFilterToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "igo-ogc-filterable-item", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("map", ctx.map)("layer", ctx.layer)("header", false)("@toolSlideInOut", ctx.animate);
            }
        }, directives: [i1__namespace$1.OgcFilterableItemComponent], encapsulation: 2, data: { animation: [toolSlideInOut()] } });
    exports.ActiveOgcFilterToolComponent = __decorate([
        i4.ToolComponent({
            name: 'activeOgcFilter',
            title: 'igo.integration.tools.ogcFilter',
            icon: 'filter',
            parent: 'mapTools'
        })
    ], exports.ActiveOgcFilterToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.ActiveOgcFilterToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-active-ogc-filter-tool',
                        templateUrl: './active-ogc-filter-tool.component.html',
                        animations: [toolSlideInOut()]
                    }]
            }], function () { return [{ type: MapState }]; }, null);
    })();

    var IgoAppFilterModule = /** @class */ (function () {
        function IgoAppFilterModule() {
        }
        IgoAppFilterModule.forRoot = function () {
            return {
                ngModule: IgoAppFilterModule,
                providers: []
            };
        };
        return IgoAppFilterModule;
    }());
    IgoAppFilterModule.ɵfac = function IgoAppFilterModule_Factory(t) { return new (t || IgoAppFilterModule)(); };
    IgoAppFilterModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppFilterModule });
    IgoAppFilterModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.IgoFilterModule, i1$1.IgoQueryModule, i4$1.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppFilterModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.IgoFilterModule, i1$1.IgoQueryModule, i4$1.CommonModule],
                        declarations: [
                            exports.OgcFilterToolComponent,
                            exports.ActiveOgcFilterToolComponent,
                            exports.TimeFilterToolComponent,
                            exports.ActiveTimeFilterToolComponent,
                            exports.SpatialFilterToolComponent
                        ],
                        exports: [
                            exports.OgcFilterToolComponent,
                            exports.ActiveOgcFilterToolComponent,
                            exports.TimeFilterToolComponent,
                            exports.ActiveTimeFilterToolComponent,
                            exports.SpatialFilterToolComponent
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppFilterModule, { declarations: [exports.OgcFilterToolComponent,
                exports.ActiveOgcFilterToolComponent,
                exports.TimeFilterToolComponent,
                exports.ActiveTimeFilterToolComponent,
                exports.SpatialFilterToolComponent], imports: [i1$1.IgoFilterModule, i1$1.IgoQueryModule, i4$1.CommonModule], exports: [exports.OgcFilterToolComponent,
                exports.ActiveOgcFilterToolComponent,
                exports.TimeFilterToolComponent,
                exports.ActiveTimeFilterToolComponent,
                exports.SpatialFilterToolComponent] });
    })();

    function AboutToolComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 7);
            i0__namespace.ɵɵlistener("click", function AboutToolComponent_button_2_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.openGuide(); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelementStart(2, "span");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "mat-icon", 8);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("disabled", ctx_r0.loading)("matTooltip", i0__namespace.ɵɵpipeBind1(1, 3, "igo.integration.aboutTool.trainingGuideTooltip"));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(4, 5, "igo.integration.aboutTool.trainingGuide"));
        }
    }
    function AboutToolComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 9);
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelementStart(2, "span");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "mat-icon", 8);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            var _r2 = i0__namespace.ɵɵreference(5);
            i0__namespace.ɵɵproperty("disabled", ctx_r1.loading)("matTooltip", i0__namespace.ɵɵpipeBind1(1, 4, "igo.integration.aboutTool.trainingGuideTooltip"))("matMenuTriggerFor", _r2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(4, 6, "igo.integration.aboutTool.trainingGuide"));
        }
    }
    function AboutToolComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 10);
            i0__namespace.ɵɵlistener("click", function AboutToolComponent_button_6_Template_button_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r9_1); var guide_r7 = restoredCtx.$implicit; var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.openGuide(guide_r7); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var guide_r7 = ctx.$implicit;
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r3.formatFileName(guide_r7));
        }
    }
    function AboutToolComponent_igo_custom_html_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-custom-html", 6);
            i0__namespace.ɵɵpipe(1, "translate");
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("html", i0__namespace.ɵɵpipeBind1(1, 1, ctx_r4.headerHtml));
        }
    }
    var _c0 = function (a0) { return { version: a0 }; };
    exports.AboutToolComponent = /** @class */ (function () {
        function AboutToolComponent(configService, auth, http, cdRef, languageService) {
            this.configService = configService;
            this.auth = auth;
            this.http = http;
            this.cdRef = cdRef;
            this.languageService = languageService;
            this._discoverTitleInLocale = 'IGO';
            this.discoverTitleInLocale$ = rxjs.of(this._discoverTitleInLocale);
            this._html = 'igo.integration.aboutTool.html';
            this._headerHtml = this.languageService.translate.instant('igo.integration.aboutTool.headerHtml');
            this.loading = false;
            this.version = configService.getConfig('version');
            this.baseUrlProfil = configService.getConfig('storage.url');
            this.baseUrlGuide = configService.getConfig('depot.url') + configService.getConfig('depot.guideUrl');
        }
        Object.defineProperty(AboutToolComponent.prototype, "headerHtml", {
            get: function () {
                return this._headerHtml;
            },
            set: function (value) {
                this._headerHtml = Array.isArray(value) ? value.join('\n') : value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AboutToolComponent.prototype, "html", {
            get: function () {
                return this._html;
            },
            set: function (value) {
                this._html = Array.isArray(value) ? value.join('\n') : value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AboutToolComponent.prototype, "discoverTitleInLocale", {
            get: function () {
                return this._discoverTitleInLocale;
            },
            set: function (value) {
                this._discoverTitleInLocale = value;
                this.discoverTitleInLocale$ = rxjs.of(value);
            },
            enumerable: false,
            configurable: true
        });
        AboutToolComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.auth.authenticated && this.configService.getConfig('context.url')) {
                this.http.get(this.baseUrlProfil).subscribe(function (profil) {
                    var recast = profil;
                    _this.trainingGuideURLs = recast.guides;
                    _this.cdRef.detectChanges();
                });
            }
            else if (this.auth.authenticated &&
                !this.configService.getConfig('context.url') &&
                this.configService.getConfig('depot.trainingGuides')) {
                this.trainingGuideURLs = this.configService.getConfig('depot.trainingGuides');
            }
        };
        AboutToolComponent.prototype.openGuide = function (guide) {
            var _this = this;
            this.loading = true;
            var url = guide ?
                this.baseUrlGuide + guide + '?' :
                this.baseUrlGuide + this.trainingGuideURLs[0] + '?';
            this.http
                .get(url, {
                responseType: 'blob'
            })
                .subscribe(function () {
                _this.loading = false;
                window.open(url, '_blank');
                _this.cdRef.detectChanges();
            });
        };
        AboutToolComponent.prototype.formatFileName = function (name) {
            name = name.split('_').join(' ');
            var index = name.indexOf('.');
            name = name.slice(0, index);
            return name;
        };
        return AboutToolComponent;
    }());
    exports.AboutToolComponent.ɵfac = function AboutToolComponent_Factory(t) { return new (t || exports.AboutToolComponent)(i0__namespace.ɵɵdirectiveInject(i2__namespace$1.ConfigService), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(i3__namespace$2.HttpClient), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.LanguageService)); };
    exports.AboutToolComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.AboutToolComponent, selectors: [["igo-about-tool"]], inputs: { headerHtml: "headerHtml", html: "html", discoverTitleInLocale: "discoverTitleInLocale", trainingGuideURLs: "trainingGuideURLs" }, decls: 10, vars: 11, consts: [["mat-raised-button", "", "tourToStart", "global", "menuIsOpen", "true", "styleButton", "raised", 3, "discoverTitleInLocale$"], ["class", "training-guide-button", "mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "click", 4, "ngIf"], ["class", "training-guide-button", "mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "disabled", "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "mat-typography", 3, "html", 4, "ngIf"], [1, "mat-typography", 3, "html"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "training-guide-button", 3, "disabled", "matTooltip", "click"], ["svgIcon", "file-document"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "training-guide-button", 3, "disabled", "matTooltip", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"]], template: function AboutToolComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "p");
                i0__namespace.ɵɵelement(1, "igo-interactive-tour", 0);
                i0__namespace.ɵɵtemplate(2, AboutToolComponent_button_2_Template, 6, 7, "button", 1);
                i0__namespace.ɵɵtemplate(3, AboutToolComponent_button_3_Template, 6, 8, "button", 2);
                i0__namespace.ɵɵelementStart(4, "mat-menu", null, 3);
                i0__namespace.ɵɵtemplate(6, AboutToolComponent_button_6_Template, 2, 1, "button", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(7, AboutToolComponent_igo_custom_html_7_Template, 2, 3, "igo-custom-html", 5);
                i0__namespace.ɵɵelement(8, "igo-custom-html", 6);
                i0__namespace.ɵɵpipe(9, "translate");
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("discoverTitleInLocale$", ctx.discoverTitleInLocale$);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.trainingGuideURLs && ctx.trainingGuideURLs.length === 1);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.trainingGuideURLs && ctx.trainingGuideURLs.length > 1);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.trainingGuideURLs);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.headerHtml !== "");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("html", i0__namespace.ɵɵpipeBind2(9, 6, ctx.html, i0__namespace.ɵɵpureFunction1(9, _c0, ctx.version)));
            }
        }, directives: [i4__namespace.InteractiveTourComponent, i4__namespace$1.NgIf, i6__namespace$2.MatMenu, i4__namespace$1.NgForOf, i4__namespace.CustomHtmlComponent, i3__namespace.MatButton, i4__namespace$2.MatTooltip, i6__namespace.MatIcon, i6__namespace$2.MatMenuTrigger, i6__namespace$2.MatMenuItem], pipes: [i8__namespace.TranslatePipe], styles: ["igo-interactive-tour[_ngcontent-%COMP%]{margin-left:20px}.training-guide-button[_ngcontent-%COMP%]{margin-left:5px;background-color:#1976d2;color:#fff;padding:0 12px}"] });
    exports.AboutToolComponent = __decorate([
        i4.ToolComponent({
            name: 'about',
            title: 'igo.integration.tools.about',
            icon: 'help-circle'
        })
    ], exports.AboutToolComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.AboutToolComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-about-tool',
                        templateUrl: './about-tool.component.html',
                        styleUrls: ['./about-tool.component.scss']
                    }]
            }], function () { return [{ type: i2__namespace$1.ConfigService }, { type: i2__namespace.AuthService }, { type: i3__namespace$2.HttpClient }, { type: i0__namespace.ChangeDetectorRef }, { type: i2__namespace$1.LanguageService }]; }, { headerHtml: [{
                    type: i0.Input
                }], html: [{
                    type: i0.Input
                }], discoverTitleInLocale: [{
                    type: i0.Input
                }], trainingGuideURLs: [{
                    type: i0.Input
                }] });
    })();

    var IgoAppAboutModule = /** @class */ (function () {
        function IgoAppAboutModule() {
        }
        IgoAppAboutModule.forRoot = function () {
            return {
                ngModule: IgoAppAboutModule,
                providers: []
            };
        };
        return IgoAppAboutModule;
    }());
    IgoAppAboutModule.ɵfac = function IgoAppAboutModule_Factory(t) { return new (t || IgoAppAboutModule)(); };
    IgoAppAboutModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppAboutModule });
    IgoAppAboutModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2$1.IgoLanguageModule,
                i4.IgoCustomHtmlModule,
                i3.MatButtonModule,
                i4$2.MatTooltipModule,
                i6.MatIconModule,
                i6$2.MatMenuModule,
                i4.IgoInteractiveTourModule,
                i4$1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppAboutModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2$1.IgoLanguageModule,
                            i4.IgoCustomHtmlModule,
                            i3.MatButtonModule,
                            i4$2.MatTooltipModule,
                            i6.MatIconModule,
                            i6$2.MatMenuModule,
                            i4.IgoInteractiveTourModule,
                            i4$1.CommonModule
                        ],
                        declarations: [exports.AboutToolComponent],
                        exports: [exports.AboutToolComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoAppAboutModule, { declarations: [exports.AboutToolComponent], imports: [i2$1.IgoLanguageModule,
                i4.IgoCustomHtmlModule,
                i3.MatButtonModule,
                i4$2.MatTooltipModule,
                i6.MatIconModule,
                i6$2.MatMenuModule,
                i4.IgoInteractiveTourModule,
                i4$1.CommonModule], exports: [exports.AboutToolComponent] });
    })();

    var IgoAppStorageModule = /** @class */ (function () {
        function IgoAppStorageModule() {
        }
        return IgoAppStorageModule;
    }());
    IgoAppStorageModule.ɵfac = function IgoAppStorageModule_Factory(t) { return new (t || IgoAppStorageModule)(); };
    IgoAppStorageModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppStorageModule });
    IgoAppStorageModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppStorageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();

    var IgoIntegrationModule = /** @class */ (function () {
        function IgoIntegrationModule() {
        }
        return IgoIntegrationModule;
    }());
    IgoIntegrationModule.ɵfac = function IgoIntegrationModule_Factory(t) { return new (t || IgoIntegrationModule)(); };
    IgoIntegrationModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoIntegrationModule });
    IgoIntegrationModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[], IgoAppStorageModule,
            IgoAppAnalyticsModule,
            IgoAppContextModule,
            IgoAppCatalogModule,
            IgoAppDirectionsModule,
            IgoAppDrawModule,
            IgoAppWorkspaceModule,
            IgoAppImportExportModule,
            IgoAppMapModule,
            IgoAppMeasureModule,
            IgoAppPrintModule,
            IgoAppSearchModule,
            IgoAppFilterModule,
            IgoAppAboutModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoIntegrationModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: [
                            IgoAppStorageModule,
                            IgoAppAnalyticsModule,
                            IgoAppContextModule,
                            IgoAppCatalogModule,
                            IgoAppDirectionsModule,
                            IgoAppDrawModule,
                            IgoAppWorkspaceModule,
                            IgoAppImportExportModule,
                            IgoAppMapModule,
                            IgoAppMeasureModule,
                            IgoAppPrintModule,
                            IgoAppSearchModule,
                            IgoAppFilterModule,
                            IgoAppAboutModule
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoIntegrationModule, { exports: [IgoAppStorageModule,
                IgoAppAnalyticsModule,
                IgoAppContextModule,
                IgoAppCatalogModule,
                IgoAppDirectionsModule,
                IgoAppDrawModule,
                IgoAppWorkspaceModule,
                IgoAppImportExportModule,
                IgoAppMapModule,
                IgoAppMeasureModule,
                IgoAppPrintModule,
                IgoAppSearchModule,
                IgoAppFilterModule,
                IgoAppAboutModule] });
    })();

    var IgoAppToolModule = /** @class */ (function () {
        function IgoAppToolModule() {
        }
        return IgoAppToolModule;
    }());
    IgoAppToolModule.ɵfac = function IgoAppToolModule_Factory(t) { return new (t || IgoAppToolModule)(); };
    IgoAppToolModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoAppToolModule });
    IgoAppToolModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoAppToolModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    }]
            }], null, null);
    })();

    /**
     * Service that holds the state of the search module
     */
    var AnalyticsListenerService = /** @class */ (function () {
        /**
         * Toolbox that holds main tools
         */
        function AnalyticsListenerService(analyticsService, authService, contextState, searchState, toolState) {
            this.analyticsService = analyticsService;
            this.authService = authService;
            this.contextState = contextState;
            this.searchState = searchState;
            this.toolState = toolState;
        }
        AnalyticsListenerService.prototype.listen = function () {
            this.listenUser();
            this.listenContext();
            this.listenTool();
            this.listenSearch();
        };
        AnalyticsListenerService.prototype.listenUser = function () {
            var _this = this;
            this.authService.authenticate$.subscribe(function () {
                var tokenDecoded = _this.authService.decodeToken() || {};
                if (tokenDecoded.user) {
                    _this.authService
                        .getProfils()
                        .subscribe(function (profils) { return _this.analyticsService.setUser(tokenDecoded.user, profils.profils); });
                }
                else {
                    _this.analyticsService.setUser();
                }
            });
        };
        AnalyticsListenerService.prototype.listenContext = function () {
            var _this = this;
            this.contextState.context$.subscribe(function (context) {
                if (context) {
                    _this.analyticsService.trackEvent('context', 'activateContext', context.id || context.uri);
                }
            });
        };
        AnalyticsListenerService.prototype.listenTool = function () {
            var _this = this;
            this.toolState.toolbox.activeTool$.pipe(operators.skip(1)).subscribe(function (tool) {
                if (tool) {
                    _this.analyticsService.trackEvent('tool', 'activateTool', tool.name);
                }
            });
        };
        AnalyticsListenerService.prototype.listenSearch = function () {
            var _this = this;
            this.searchState.searchTerm$.pipe(operators.skip(1)).subscribe(function (searchTerm) {
                if (searchTerm !== undefined && searchTerm !== null) {
                    _this.analyticsService.trackSearch(searchTerm, _this.searchState.store.count);
                }
            });
        };
        return AnalyticsListenerService;
    }());
    AnalyticsListenerService.ɵfac = function AnalyticsListenerService_Factory(t) { return new (t || AnalyticsListenerService)(i0__namespace.ɵɵinject(i2__namespace$1.AnalyticsService), i0__namespace.ɵɵinject(i2__namespace.AuthService), i0__namespace.ɵɵinject(ContextState), i0__namespace.ɵɵinject(SearchState), i0__namespace.ɵɵinject(ToolState)); };
    AnalyticsListenerService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: AnalyticsListenerService, factory: AnalyticsListenerService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AnalyticsListenerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i2__namespace$1.AnalyticsService }, { type: i2__namespace.AuthService }, { type: ContextState }, { type: SearchState }, { type: ToolState }]; }, null);
    })();

    /**
     * Service that holds the state of the query module
     */
    var QueryState = /** @class */ (function () {
        function QueryState(configService) {
            this.configService = configService;
            /**
             * Store that holds the query results
             */
            this.store = new i4.EntityStore([]);
            this.queryOverlayStyle = {};
            this.queryOverlayStyleSelection = {};
            this.queryOverlayStyleFocus = {};
            var queryOverlayStyle = this.configService.getConfig('queryOverlayStyle');
            if (queryOverlayStyle) {
                this.queryOverlayStyle = queryOverlayStyle.base;
                this.queryOverlayStyleSelection = queryOverlayStyle.selection;
                this.queryOverlayStyleFocus = queryOverlayStyle.focus;
            }
        }
        return QueryState;
    }());
    QueryState.ɵfac = function QueryState_Factory(t) { return new (t || QueryState)(i0__namespace.ɵɵinject(i2__namespace$1.ConfigService)); };
    QueryState.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: QueryState, factory: QueryState.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(QueryState, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i2__namespace$1.ConfigService }]; }, null);
    })();

    /*
     * Public API Surface of tools
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnalyticsListenerService = AnalyticsListenerService;
    exports.CatalogState = CatalogState;
    exports.ContextState = ContextState;
    exports.DirectionState = DirectionState;
    exports.DrawState = DrawState;
    exports.FeatureActionsService = FeatureActionsService;
    exports.IgoAppAboutModule = IgoAppAboutModule;
    exports.IgoAppAnalyticsModule = IgoAppAnalyticsModule;
    exports.IgoAppCatalogBrowserToolModule = IgoAppCatalogBrowserToolModule;
    exports.IgoAppCatalogLibraryToolModule = IgoAppCatalogLibraryToolModule;
    exports.IgoAppCatalogModule = IgoAppCatalogModule;
    exports.IgoAppContextModule = IgoAppContextModule;
    exports.IgoAppDirectionsModule = IgoAppDirectionsModule;
    exports.IgoAppDrawModule = IgoAppDrawModule;
    exports.IgoAppFilterModule = IgoAppFilterModule;
    exports.IgoAppImportExportModule = IgoAppImportExportModule;
    exports.IgoAppMapModule = IgoAppMapModule;
    exports.IgoAppMeasureModule = IgoAppMeasureModule;
    exports.IgoAppMeasurerToolModule = IgoAppMeasurerToolModule;
    exports.IgoAppPrintModule = IgoAppPrintModule;
    exports.IgoAppSearchBarModule = IgoAppSearchBarModule;
    exports.IgoAppSearchModule = IgoAppSearchModule;
    exports.IgoAppSearchResultsToolModule = IgoAppSearchResultsToolModule;
    exports.IgoAppStorageModule = IgoAppStorageModule;
    exports.IgoAppToolModule = IgoAppToolModule;
    exports.IgoAppWorkspaceModule = IgoAppWorkspaceModule;
    exports.IgoIntegrationModule = IgoIntegrationModule;
    exports.ImportExportState = ImportExportState;
    exports.MapState = MapState;
    exports.MeasureState = MeasureState;
    exports.QueryState = QueryState;
    exports.SearchBarBindingDirective = SearchBarBindingDirective;
    exports.SearchState = SearchState;
    exports.StorageState = StorageState;
    exports.ToolState = ToolState;
    exports.WfsActionsService = WfsActionsService;
    exports.WorkspaceButtonComponent = WorkspaceButtonComponent;
    exports.WorkspaceState = WorkspaceState;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=igo2-integration.umd.js.map
