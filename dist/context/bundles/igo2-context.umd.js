(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/core'), require('@angular/material/divider'), require('@angular/material/select'), require('@angular/material/checkbox'), require('@angular/material/tabs'), require('@angular/material/tooltip'), require('@igo2/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ol/style'), require('@igo2/geo'), require('@igo2/utils'), require('ol/geom/Point'), require('ol/format/GeoJSON'), require('ol/source/Cluster'), require('ol/source/Vector'), require('@angular/common/http'), require('@igo2/auth'), require('@igo2/common'), require('@ngx-translate/core'), require('@angular/material/autocomplete'), require('@angular/material/dialog'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/radio'), require('ol/proj'), require('ol/easing'), require('@angular/animations'), require('@angular/material/sidenav'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@igo2/context', ['exports', '@angular/core', '@angular/material/form-field', '@angular/material/input', '@angular/material/menu', '@angular/common', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/core', '@angular/material/divider', '@angular/material/select', '@angular/material/checkbox', '@angular/material/tabs', '@angular/material/tooltip', '@igo2/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ol/style', '@igo2/geo', '@igo2/utils', 'ol/geom/Point', 'ol/format/GeoJSON', 'ol/source/Cluster', 'ol/source/Vector', '@angular/common/http', '@igo2/auth', '@igo2/common', '@ngx-translate/core', '@angular/material/autocomplete', '@angular/material/dialog', '@angular/material/icon', '@angular/material/list', '@angular/material/radio', 'ol/proj', 'ol/easing', '@angular/animations', '@angular/material/sidenav', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.igo2 = global.igo2 || {}, global.igo2.context = {}), global.ng.core, global.ng.material.formField, global.ng.material.input, global.ng.material.menu, global.ng.common, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.core, global.ng.material.divider, global.ng.material.select, global.ng.material.checkbox, global.ng.material.tabs, global.ng.material.tooltip, global.core, global.ng.forms, global.rxjs, global.rxjs.operators, global.olStlyle, global.geo, global.utils, global.olPoint, global.olFormatGeoJSON, global.cluster, global.vector, global.ng.common.http, global.auth, global.common, global["ngxt-core"], global.ng.material.autocomplete, global.ng.material.dialog, global.ng.material.icon, global.ng.material.list, global.ng.material.radio, global.olproj, global.oleasing, global.ng.animations, global.ng.material.sidenav, global.ng.platformBrowser));
})(this, (function (exports, i0, i3$1, i3$2, i7$1, i7, i5, i6, i11, i14, i12, i8, i3$3, i6$2, i3, i4, rxjs, operators, olStyle, i1, utils, olPoint, GeoJSON, Cluster, olVectorSource, i1$1, i2, i5$1, i6$1, i9$1, i1$2, i9, i3$4, i6$3, olproj, oleasing, animations, i2$1, i1$3) { 'use strict';

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
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i7__namespace$1 = /*#__PURE__*/_interopNamespace(i7$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i3__namespace$4 = /*#__PURE__*/_interopNamespace(i3$3);
    var i6__namespace$2 = /*#__PURE__*/_interopNamespace(i6$2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var olStyle__namespace = /*#__PURE__*/_interopNamespace(olStyle);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1);
    var olPoint__default = /*#__PURE__*/_interopDefaultLegacy(olPoint);
    var GeoJSON__default = /*#__PURE__*/_interopDefaultLegacy(GeoJSON);
    var Cluster__default = /*#__PURE__*/_interopDefaultLegacy(Cluster);
    var olVectorSource__default = /*#__PURE__*/_interopDefaultLegacy(olVectorSource);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i9__namespace$1 = /*#__PURE__*/_interopNamespace(i9$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i3__namespace$3 = /*#__PURE__*/_interopNamespace(i3$4);
    var i6__namespace$3 = /*#__PURE__*/_interopNamespace(i6$3);
    var olproj__namespace = /*#__PURE__*/_interopNamespace(olproj);
    var oleasing__namespace = /*#__PURE__*/_interopNamespace(oleasing);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);

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

    var ExportError = /** @class */ (function (_super) {
        __extends(ExportError, _super);
        function ExportError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ExportError;
    }(Error));
    var ExportInvalidFileError = /** @class */ (function (_super) {
        __extends(ExportInvalidFileError, _super);
        function ExportInvalidFileError() {
            var _this = _super.call(this, 'Invalid context') || this;
            Object.setPrototypeOf(_this, ExportInvalidFileError.prototype);
            return _this;
        }
        return ExportInvalidFileError;
    }(ExportError));
    var ExportNothingToExportError = /** @class */ (function (_super) {
        __extends(ExportNothingToExportError, _super);
        function ExportNothingToExportError() {
            var _this = _super.call(this, 'Nothing to export') || this;
            Object.setPrototypeOf(_this, ExportNothingToExportError.prototype);
            return _this;
        }
        return ExportNothingToExportError;
    }(ExportError));

    function handleFileExportError(error, messageService, languageService) {
        if (error instanceof ExportNothingToExportError) {
            this.handleNothingToExportError(messageService, languageService);
            return;
        }
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.export.failed.title');
        var message = translate.instant('igo.context.contextImportExport.export.failed.text');
        messageService.error(message, title);
    }
    function handleFileExportSuccess(messageService, languageService) {
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.export.success.title');
        var message = translate.instant('igo.context.contextImportExport.export.success.text');
        messageService.success(message, title);
    }
    function handleNothingToExportError(messageService, languageService) {
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.export.nothing.title');
        var message = translate.instant('igo.context.contextImportExport.export.nothing.text');
        messageService.error(message, title);
    }

    function handleFileImportSuccess(file, context, messageService, languageService, contextService) {
        if (Object.keys(context).length <= 0) {
            handleNothingToImportError(file, messageService, languageService);
            return;
        }
        var contextTitle = computeLayerTitleFromFile(file);
        addContextToContextList(context, contextTitle, contextService);
        var translate = languageService.translate;
        var messageTitle = translate.instant('igo.context.contextImportExport.import.success.title');
        var message = translate.instant('igo.context.contextImportExport.import.success.text', {
            value: contextTitle
        });
        messageService.success(message, messageTitle);
    }
    function handleFileImportError(file, error, messageService, languageService, sizeMb) {
        sizeMb = sizeMb ? sizeMb : 30;
        var errMapping = {
            'Invalid file': handleInvalidFileImportError,
            'File is too large': handleSizeFileImportError,
            'Failed to read file': handleUnreadbleFileImportError
        };
        errMapping[error.message](file, error, messageService, languageService, sizeMb);
    }
    function handleInvalidFileImportError(file, error, messageService, languageService) {
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.import.invalid.title');
        var message = translate.instant('igo.context.contextImportExport.import.invalid.text', {
            value: file.name,
            mimeType: file.type
        });
        messageService.error(message, title);
    }
    function handleSizeFileImportError(file, error, messageService, languageService, sizeMb) {
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.import.tooLarge.title');
        var message = translate.instant('igo.context.contextImportExport.import.tooLarge.text', {
            value: file.name,
            size: sizeMb
        });
        messageService.error(message, title);
    }
    function handleUnreadbleFileImportError(file, error, messageService, languageService) {
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.import.unreadable.title');
        var message = translate.instant('igo.context.contextImportExport.import.unreadable.text', {
            value: file.name
        });
        messageService.error(message, title);
    }
    function handleNothingToImportError(file, messageService, languageService) {
        var translate = languageService.translate;
        var title = translate.instant('igo.context.contextImportExport.import.empty.title');
        var message = translate.instant('igo.context.contextImportExport.import.empty.text', {
            value: file.name
        });
        messageService.error(message, title);
    }
    function addContextToContextList(context, contextTitle, contextService) {
        context.title = contextTitle;
        context.imported = true;
        contextService.contexts$.value.ours.unshift(context);
        contextService.contexts$.next(contextService.contexts$.value);
        contextService.importedContext.unshift(context);
        contextService.loadContext(context.uri);
    }
    function getFileExtension(file) {
        return file.name.split('.').pop().toLowerCase();
    }
    function computeLayerTitleFromFile(file) {
        return file.name.substr(0, file.name.lastIndexOf('.'));
    }
    function addImportedFeaturesToMap(olFeatures, map, layerTitle) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var stroke = new olStyle__namespace.Stroke({
            color: [r, g, b, 1],
            width: 2
        });
        var fill = new olStyle__namespace.Fill({
            color: [r, g, b, 0.4]
        });
        var sourceOptions = {
            type: 'vector',
            queryable: true
        };
        var source = new i1.FeatureDataSource(sourceOptions);
        source.ol.addFeatures(olFeatures);
        var layer = new i1.VectorLayer({
            title: layerTitle,
            source: source,
            style: new olStyle__namespace.Style({
                stroke: stroke,
                fill: fill,
                image: new olStyle__namespace.Circle({
                    radius: 5,
                    stroke: stroke,
                    fill: fill
                })
            })
        });
        map.addLayer(layer);
        return layer;
    }
    function addImportedFeaturesStyledToMap(olFeatures, map, layerTitle, styleListService, styleService) {
        var style;
        var distance;
        if (styleListService.getStyleList(layerTitle.toString() + '.styleByAttribute')) {
            var styleByAttribute_1 = styleListService.getStyleList(layerTitle.toString() + '.styleByAttribute');
            style = function (feature) {
                return styleService.createStyleByAttribute(feature, styleByAttribute_1);
            };
        }
        else if (styleListService.getStyleList(layerTitle.toString() + '.clusterStyle')) {
            var clusterParam_1 = styleListService.getStyleList(layerTitle.toString() + '.clusterParam');
            distance = styleListService.getStyleList(layerTitle.toString() + '.distance');
            var baseStyle_1 = styleService.createStyle(styleListService.getStyleList(layerTitle.toString() + '.clusterStyle'));
            style = function (feature) {
                return styleService.createClusterStyle(feature, clusterParam_1, baseStyle_1);
            };
        }
        else if (styleListService.getStyleList(layerTitle.toString() + '.style')) {
            style = styleService.createStyle(styleListService.getStyleList(layerTitle.toString() + '.style'));
        }
        else {
            style = styleService.createStyle(styleListService.getStyleList('default.style'));
        }
        var source;
        if (styleListService.getStyleList(layerTitle.toString() + '.clusterStyle')) {
            var sourceOptions = {
                distance: distance,
                type: 'cluster',
                queryable: true
            };
            source = new i1.ClusterDataSource(sourceOptions);
            source.ol.source.addFeatures(olFeatures);
        }
        else {
            var sourceOptions = {
                type: 'vector',
                queryable: true
            };
            source = new i1.FeatureDataSource(sourceOptions);
            source.ol.addFeatures(olFeatures);
        }
        var layer = new i1.VectorLayer({
            title: layerTitle,
            source: source,
            style: style
        });
        map.addLayer(layer);
        return layer;
    }

    var ImportError = /** @class */ (function (_super) {
        __extends(ImportError, _super);
        function ImportError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ImportError;
    }(Error));
    var ImportInvalidFileError = /** @class */ (function (_super) {
        __extends(ImportInvalidFileError, _super);
        function ImportInvalidFileError() {
            var _this = _super.call(this, 'Invalid file') || this;
            Object.setPrototypeOf(_this, ImportInvalidFileError.prototype);
            return _this;
        }
        return ImportInvalidFileError;
    }(ImportError));
    var ImportUnreadableFileError = /** @class */ (function (_super) {
        __extends(ImportUnreadableFileError, _super);
        function ImportUnreadableFileError() {
            var _this = _super.call(this, 'Failed to read file') || this;
            Object.setPrototypeOf(_this, ImportUnreadableFileError.prototype);
            return _this;
        }
        return ImportUnreadableFileError;
    }(ImportError));
    var ImportNothingToImportError = /** @class */ (function (_super) {
        __extends(ImportNothingToImportError, _super);
        function ImportNothingToImportError() {
            var _this = _super.call(this, 'Nothing to import') || this;
            Object.setPrototypeOf(_this, ImportNothingToImportError.prototype);
            return _this;
        }
        return ImportNothingToImportError;
    }(ImportError));
    var ImportSizeError = /** @class */ (function (_super) {
        __extends(ImportSizeError, _super);
        function ImportSizeError() {
            var _this = _super.call(this, 'File is too large') || this;
            Object.setPrototypeOf(_this, ImportNothingToImportError.prototype);
            return _this;
        }
        return ImportSizeError;
    }(ImportError));
    var ImportSRSError = /** @class */ (function (_super) {
        __extends(ImportSRSError, _super);
        function ImportSRSError() {
            var _this = _super.call(this, 'Invalid SRS definition') || this;
            Object.setPrototypeOf(_this, ImportNothingToImportError.prototype);
            return _this;
        }
        return ImportSRSError;
    }(ImportError));

    var ContextImportService = /** @class */ (function () {
        function ContextImportService(config) {
            this.config = config;
            var configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
            this.clientSideFileSizeMax =
                (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
        }
        ContextImportService.prototype.import = function (file) {
            return this.importAsync(file);
        };
        ContextImportService.prototype.getFileImporter = function (file) {
            var extension = getFileExtension(file);
            var mimeType = file.type;
            var allowedMimeTypes = __spreadArray([], __read(ContextImportService.allowedMimeTypes));
            var allowedExtensions = ContextImportService.allowedExtensions;
            if (allowedMimeTypes.indexOf(mimeType) < 0 &&
                allowedExtensions.indexOf(extension) < 0) {
                return undefined;
            }
            else if (mimeType === 'application/json' ||
                extension === ContextImportService.allowedExtensions) {
                return this.importFile;
            }
            return undefined;
        };
        ContextImportService.prototype.importAsync = function (file) {
            var _this = this;
            var doImport = function (observer) {
                if (file.size >= _this.clientSideFileSizeMax) {
                    observer.error(new ImportSizeError());
                    return;
                }
                var importer = _this.getFileImporter(file);
                if (importer === undefined) {
                    observer.error(new ImportInvalidFileError());
                    return;
                }
                importer.call(_this, file, observer);
            };
            return new rxjs.Observable(doImport);
        };
        ContextImportService.prototype.importFile = function (file, observer) {
            var _this = this;
            var reader = new FileReader();
            reader.onload = function (event) {
                try {
                    var context = _this.parseContextFromFile(file, event.target.result);
                    observer.next(context);
                }
                catch (e) {
                    observer.error(new ImportUnreadableFileError());
                }
                observer.complete();
            };
            reader.onerror = function (evt) {
                observer.error(new ImportUnreadableFileError());
            };
            reader.readAsText(file, 'UTF-8');
        };
        ContextImportService.prototype.parseContextFromFile = function (file, data) {
            var context = JSON.parse(data);
            return context;
        };
        return ContextImportService;
    }());
    ContextImportService.allowedMimeTypes = ['application/json'];
    ContextImportService.allowedExtensions = 'json';
    ContextImportService.ɵfac = function ContextImportService_Factory(t) { return new (t || ContextImportService)(i0__namespace.ɵɵinject(i3__namespace.ConfigService)); };
    ContextImportService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ContextImportService, factory: ContextImportService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextImportService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i3__namespace.ConfigService }]; }, null);
    })();

    var ContextExportService = /** @class */ (function () {
        function ContextExportService() {
        }
        ContextExportService.prototype.export = function (res) {
            return this.exportAsync(res);
        };
        ContextExportService.prototype.exportAsync = function (res) {
            var _this = this;
            var doExport = function (observer) {
                var nothingToExport = _this.nothingToExport(res);
                if (nothingToExport === true) {
                    observer.error(new ExportNothingToExportError());
                    return;
                }
                var contextJSON = JSON.stringify(res);
                utils.downloadContent(contextJSON, 'text/json;charset=utf-8', res.uri + ".json");
                observer.complete();
            };
            return new rxjs.Observable(doExport);
        };
        ContextExportService.prototype.nothingToExport = function (res) {
            if (res.map === undefined) {
                return true;
            }
            return false;
        };
        return ContextExportService;
    }());
    ContextExportService.ɵfac = function ContextExportService_Factory(t) { return new (t || ContextExportService)(); };
    ContextExportService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ContextExportService, factory: ContextExportService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextExportService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    exports.TypePermission = void 0;
    (function (TypePermission) {
        TypePermission[TypePermission["null"] = 0] = "null";
        TypePermission[TypePermission["read"] = 1] = "read";
        TypePermission[TypePermission["write"] = 2] = "write";
    })(exports.TypePermission || (exports.TypePermission = {}));
    exports.Scope = void 0;
    (function (Scope) {
        Scope[Scope["public"] = 0] = "public";
        Scope[Scope["protected"] = 1] = "protected";
        Scope[Scope["private"] = 2] = "private";
    })(exports.Scope || (exports.Scope = {}));

    var ContextService = /** @class */ (function () {
        function ContextService(http, authService, languageService, config, messageService, route) {
            var _this = this;
            this.http = http;
            this.authService = authService;
            this.languageService = languageService;
            this.config = config;
            this.messageService = messageService;
            this.route = route;
            this.context$ = new rxjs.BehaviorSubject(undefined);
            this.contexts$ = new rxjs.BehaviorSubject({ ours: [] });
            this.defaultContextId$ = new rxjs.BehaviorSubject(undefined);
            this.editedContext$ = new rxjs.BehaviorSubject(undefined);
            this.importedContext = [];
            this.toolsChanged$ = new rxjs.Subject();
            this.mapViewFromRoute = {};
            this.options = Object.assign({
                basePath: 'contexts',
                contextListFile: '_contexts.json',
                defaultContextUri: '_default'
            }, this.config.getConfig('context'));
            this.baseUrl = this.options.url;
            this.readParamsFromRoute();
            if (this.authService.hasAuthService) {
                this.authService.logged$.subscribe(function (logged) {
                    if (logged) {
                        _this.contexts$.pipe(operators.skip(1), operators.first()).subscribe(function (c) {
                            _this.handleContextsChange();
                        });
                        _this.loadContexts();
                    }
                });
            }
            else {
                this.loadContexts();
                this.handleContextsChange(false);
            }
        }
        Object.defineProperty(ContextService.prototype, "defaultContextUri", {
            get: function () {
                return this._defaultContextUri || this.options.defaultContextUri;
            },
            set: function (uri) {
                this._defaultContextUri = uri;
            },
            enumerable: false,
            configurable: true
        });
        ContextService.prototype.get = function (permissions, hidden) {
            var url = this.baseUrl + '/contexts';
            if (permissions && this.authService.authenticated) {
                url += '?permission=' + permissions.join();
                if (hidden) {
                    url += '&hidden=true';
                }
            }
            return this.http.get(url);
        };
        ContextService.prototype.getById = function (id) {
            var url = this.baseUrl + '/contexts/' + id;
            return this.http.get(url);
        };
        ContextService.prototype.getDetails = function (id) {
            var _this = this;
            var url = this.baseUrl + "/contexts/" + id + "/details";
            return this.http.get(url).pipe(operators.catchError(function (res) {
                _this.handleError(res, id);
                throw res;
            }));
        };
        ContextService.prototype.getDefault = function () {
            var _this = this;
            var url = this.baseUrl + '/contexts/default';
            return this.http.get(url).pipe(operators.tap(function (context) {
                _this.defaultContextId$.next(context.id);
            }));
        };
        ContextService.prototype.getProfilByUser = function () {
            if (this.baseUrl) {
                var url = this.baseUrl + '/profils?';
                return this.http.get(url);
            }
            return rxjs.of([]);
        };
        ContextService.prototype.setDefault = function (id) {
            var url = this.baseUrl + '/contexts/default';
            return this.http.post(url, { defaultContextId: id });
        };
        ContextService.prototype.hideContext = function (id) {
            var url = this.baseUrl + '/contexts/' + id + '/hide';
            return this.http.post(url, {});
        };
        ContextService.prototype.showContext = function (id) {
            var url = this.baseUrl + '/contexts/' + id + '/show';
            return this.http.post(url, {});
        };
        ContextService.prototype.delete = function (id, imported) {
            var _this = this;
            if (imported === void 0) { imported = false; }
            var contexts = { ours: [] };
            Object.keys(this.contexts$.value).forEach(function (key) { return (contexts[key] = _this.contexts$.value[key].filter(function (c) { return c.id !== id; })); });
            if (imported) {
                this.importedContext = this.importedContext.filter(function (c) { return c.id !== id; });
                return rxjs.of(this.contexts$.next(contexts));
            }
            var url = this.baseUrl + '/contexts/' + id;
            return this.http.delete(url).pipe(operators.tap(function (res) {
                _this.contexts$.next(contexts);
            }));
        };
        ContextService.prototype.create = function (context) {
            var _this = this;
            var url = this.baseUrl + '/contexts';
            return this.http.post(url, context).pipe(operators.map(function (contextCreated) {
                if (_this.authService.authenticated) {
                    contextCreated.permission = exports.TypePermission[exports.TypePermission.write];
                }
                else {
                    contextCreated.permission = exports.TypePermission[exports.TypePermission.read];
                }
                _this.contexts$.value.ours.unshift(contextCreated);
                _this.contexts$.next(_this.contexts$.value);
                return contextCreated;
            }));
        };
        ContextService.prototype.clone = function (id, properties) {
            var _this = this;
            if (properties === void 0) { properties = {}; }
            var url = this.baseUrl + '/contexts/' + id + '/clone';
            return this.http.post(url, properties).pipe(operators.map(function (contextCloned) {
                contextCloned.permission = exports.TypePermission[exports.TypePermission.write];
                _this.contexts$.value.ours.unshift(contextCloned);
                _this.contexts$.next(_this.contexts$.value);
                return contextCloned;
            }));
        };
        ContextService.prototype.update = function (id, context) {
            var url = this.baseUrl + '/contexts/' + id;
            return this.http.patch(url, context);
        };
        // =================================================================
        ContextService.prototype.addToolAssociation = function (contextId, toolId) {
            var url = this.baseUrl + "/contexts/" + contextId + "/tools";
            var association = {
                toolId: toolId
            };
            return this.http.post(url, association);
        };
        ContextService.prototype.deleteToolAssociation = function (contextId, toolId) {
            var url = this.baseUrl + "/contexts/" + contextId + "/tools/" + toolId;
            return this.http.delete(url);
        };
        ContextService.prototype.getPermissions = function (id) {
            var url = this.baseUrl + '/contexts/' + id + '/permissions';
            return this.http.get(url);
        };
        ContextService.prototype.addPermissionAssociation = function (contextId, profil, type) {
            var _this = this;
            var url = this.baseUrl + "/contexts/" + contextId + "/permissions";
            var association = {
                profil: profil,
                typePermission: type
            };
            return this.http.post(url, association).pipe(operators.catchError(function (res) {
                _this.handleError(res, undefined, true);
                throw [res]; // TODO Not sure about this.
            }));
        };
        ContextService.prototype.deletePermissionAssociation = function (contextId, permissionId) {
            var url = this.baseUrl + "/contexts/" + contextId + "/permissions/" + permissionId;
            return this.http.delete(url);
        };
        // ======================================================================
        ContextService.prototype.getLocalContexts = function () {
            var url = this.getPath(this.options.contextListFile);
            return this.http.get(url).pipe(operators.map(function (res) {
                return { ours: res };
            }));
        };
        ContextService.prototype.getLocalContext = function (uri) {
            var _this = this;
            var url = this.getPath(uri + ".json");
            return this.http.get(url).pipe(operators.mergeMap(function (res) {
                if (!res.base) {
                    return rxjs.of(res);
                }
                var urlBase = _this.getPath(res.base + ".json");
                return _this.http.get(urlBase).pipe(operators.map(function (resBase) {
                    var resMerge = res;
                    resMerge.map = utils.ObjectUtils.mergeDeep(resBase.map, res.map);
                    resMerge.layers = (resBase.layers || [])
                        .concat(res.layers || [])
                        .reverse()
                        .filter(function (l, index, self) { return !l.id || self.findIndex(function (l2) { return l2.id === l.id; }) === index; })
                        .reverse();
                    resMerge.toolbar = res.toolbar || resBase.toolbar;
                    resMerge.message = res.message || resBase.message;
                    resMerge.messages = res.messages || resBase.messages;
                    resMerge.tools = (res.tools || [])
                        .concat(resBase.tools || [])
                        .filter(function (t, index, self) { return self.findIndex(function (t2) { return t2.name === t.name; }) === index; });
                    return resMerge;
                }), operators.catchError(function (err) {
                    _this.handleError(err, uri);
                    throw err;
                }));
            }), operators.catchError(function (err2) {
                _this.handleError(err2, uri);
                throw err2;
            }));
        };
        ContextService.prototype.loadContexts = function (permissions, hidden) {
            var _this = this;
            var request;
            if (this.baseUrl) {
                request = this.get(permissions, hidden);
            }
            else {
                request = this.getLocalContexts();
            }
            request.subscribe(function (contexts) {
                contexts.ours = _this.importedContext.concat(contexts.ours);
                _this.contexts$.next(contexts);
            });
        };
        ContextService.prototype.loadDefaultContext = function () {
            var _this = this;
            var loadFct = function (direct) {
                if (direct === void 0) { direct = false; }
                if (!direct && _this.baseUrl && _this.authService.authenticated) {
                    _this.getDefault().subscribe(function (_context) {
                        _this.defaultContextUri = _context.uri;
                        _this.addContextToList(_context);
                        _this.setContext(_context);
                    }, function () {
                        _this.defaultContextId$.next(undefined);
                        _this.loadContext(_this.defaultContextUri);
                    });
                }
                else {
                    _this.loadContext(_this.defaultContextUri);
                }
            };
            if (this.route && this.route.options.contextKey) {
                this.route.queryParams.pipe(operators.debounceTime(100)).subscribe(function (params) {
                    var contextParam = params[_this.route.options.contextKey];
                    var direct = false;
                    if (contextParam) {
                        _this.defaultContextUri = contextParam;
                        direct = true;
                    }
                    loadFct(direct);
                });
            }
            else {
                loadFct();
            }
        };
        ContextService.prototype.loadContext = function (uri) {
            var _this = this;
            var context = this.context$.value;
            if (context && context.uri === uri) {
                return;
            }
            this.getContextByUri(uri)
                .pipe(operators.first())
                .subscribe(function (_context) {
                _this.addContextToList(_context);
                _this.setContext(_context);
            }, function (err) {
                if (uri !== _this.options.defaultContextUri) {
                    _this.loadContext(_this.options.defaultContextUri);
                }
            });
        };
        ContextService.prototype.setContext = function (context) {
            this.handleContextMessage(context);
            var currentContext = this.context$.value;
            if (currentContext && context && context.id === currentContext.id) {
                if (context.map.view.keepCurrentView === undefined) {
                    context.map.view.keepCurrentView = true;
                }
                this.context$.next(context);
                return;
            }
            if (!context.map) {
                context.map = { view: {} };
            }
            Object.assign(context.map.view, this.mapViewFromRoute);
            this.context$.next(context);
        };
        ContextService.prototype.loadEditedContext = function (uri) {
            var _this = this;
            this.getContextByUri(uri).subscribe(function (_context) {
                _this.setEditedContext(_context);
            });
        };
        ContextService.prototype.setEditedContext = function (context) {
            this.editedContext$.next(context);
        };
        ContextService.prototype.getContextFromMap = function (igoMap, empty) {
            var e_1, _a;
            var view = igoMap.ol.getView();
            var proj = view.getProjection().getCode();
            var center = new olPoint__default["default"](view.getCenter()).transform(proj, 'EPSG:4326');
            var context = {
                uri: utils.uuid(),
                title: '',
                scope: 'private',
                map: {
                    view: {
                        center: center.getCoordinates(),
                        zoom: view.getZoom(),
                        projection: proj,
                        maxZoomOnExtent: igoMap.viewController.maxZoomOnExtent
                    }
                },
                layers: [],
                tools: []
            };
            var layers = [];
            if (empty === true) {
                layers = igoMap.layers$
                    .getValue()
                    .filter(function (lay) { return lay.baseLayer === true ||
                    lay.options.id === 'searchPointerSummaryId'; })
                    .sort(function (a, b) { return a.zIndex - b.zIndex; });
            }
            else {
                layers = igoMap.layers$.getValue().filter(function (lay) { return !lay.id.includes('WfsWorkspaceTableDest'); }).sort(function (a, b) { return a.zIndex - b.zIndex; });
            }
            var i = 0;
            try {
                for (var layers_1 = __values(layers), layers_1_1 = layers_1.next(); !layers_1_1.done; layers_1_1 = layers_1.next()) {
                    var l = layers_1_1.value;
                    var layer = l;
                    var opts = {
                        id: layer.options.id ? String(layer.options.id) : undefined,
                        layerOptions: {
                            title: layer.options.title,
                            zIndex: ++i,
                            visible: layer.visible
                        },
                        sourceOptions: {
                            type: layer.dataSource.options.type,
                            params: layer.dataSource.options.params,
                            url: layer.dataSource.options.url,
                            queryable: layer.queryable
                        }
                    };
                    if (opts.sourceOptions.type) {
                        context.layers.push(opts);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (layers_1_1 && !layers_1_1.done && (_a = layers_1.return)) _a.call(layers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            context.tools = this.tools.map(function (tool) {
                return { id: String(tool.id), global: tool.global };
            });
            return context;
        };
        ContextService.prototype.getContextFromLayers = function (igoMap, layers, name) {
            var currentContext = this.context$.getValue();
            var view = igoMap.ol.getView();
            var proj = view.getProjection().getCode();
            var center = new olPoint__default["default"](view.getCenter()).transform(proj, 'EPSG:4326');
            var context = {
                uri: name,
                title: name,
                map: {
                    view: {
                        center: center.getCoordinates(),
                        zoom: view.getZoom(),
                        projection: proj
                    }
                },
                layers: [],
                toolbar: [],
                tools: [],
                extraFeatures: []
            };
            var currentLayers = igoMap.layers$.getValue();
            context.layers = currentLayers
                .filter(function (l) { return l.baseLayer; })
                .map(function (l) {
                return {
                    baseLayer: true,
                    sourceOptions: l.options.sourceOptions,
                    title: l.options.title,
                    visible: l.visible
                };
            });
            layers.forEach(function (layer) {
                var layerFound = currentContext.layers.find(function (contextLayer) { return layer.id === contextLayer.source.id && !contextLayer.baseLayer; });
                if (layerFound) {
                    var layerStyle = layerFound["style"];
                    if (layerFound["styleByAttribute"]) {
                        layerStyle = undefined;
                    }
                    else if (layerFound["clusterBaseStyle"]) {
                        layerStyle = undefined;
                        delete layerFound.sourceOptions["source"];
                        delete layerFound.sourceOptions["format"];
                    }
                    var opts = {
                        baseLayer: layerFound.baseLayer,
                        title: layer.options.title,
                        zIndex: layer.zIndex,
                        styleByAttribute: layerFound["styleByAttribute"],
                        clusterBaseStyle: layerFound["clusterBaseStyle"],
                        style: layerStyle,
                        clusterParam: layerFound["clusterParam"],
                        visible: layer.visible,
                        opacity: layer.opacity,
                        sourceOptions: layerFound.sourceOptions
                    };
                    context.layers.push(opts);
                }
                else {
                    if (!(layer.ol.getSource() instanceof olVectorSource__default["default"])) {
                        var catalogLayer = layer.options;
                        catalogLayer.zIndex = layer.zIndex;
                        delete catalogLayer.source;
                        context.layers.push(catalogLayer);
                    }
                    else {
                        var features = void 0;
                        var writer = new GeoJSON__default["default"]();
                        if (layer.ol.getSource() instanceof Cluster__default["default"]) {
                            var clusterSource = layer.ol.getSource();
                            features = writer.writeFeatures(clusterSource.getFeatures(), {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                            });
                        }
                        else {
                            var source = layer.ol.getSource();
                            features = writer.writeFeatures(source.getFeatures(), {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                            });
                        }
                        features = JSON.parse(features);
                        features.name = layer.options.title;
                        context.extraFeatures.push(features);
                    }
                }
            });
            context.toolbar = this.toolbar;
            context.tools = this.tools;
            return context;
        };
        ContextService.prototype.setTools = function (tools) {
            this.tools = tools;
        };
        ContextService.prototype.setToolbar = function (toolbar) {
            this.toolbar = toolbar;
        };
        ContextService.prototype.handleContextMessage = function (context) {
            var _this = this;
            if (this.context$.value && context.uri && this.context$.value.uri !== context.uri) {
                this.messageService.removeAllAreNotError();
            }
            context.messages = context.messages ? context.messages : [];
            context.messages.push(context.message);
            context.messages.map(function (message) {
                if (message) {
                    message.title = message.title
                        ? _this.languageService.translate.instant(message.title)
                        : undefined;
                    message.text = message.text
                        ? _this.languageService.translate.instant(message.text)
                        : undefined;
                    _this.messageService.message(message);
                }
            });
        };
        ContextService.prototype.getContextByUri = function (uri) {
            var e_2, _a;
            if (this.baseUrl) {
                var contextToLoad = void 0;
                try {
                    for (var _b = __values(Object.keys(this.contexts$.value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        contextToLoad = this.contexts$.value[key].find(function (c) {
                            return c.uri === uri;
                        });
                        if (contextToLoad) {
                            break;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                if (contextToLoad && contextToLoad.imported) {
                    return rxjs.of(contextToLoad);
                }
                // TODO : use always id or uri
                var id = contextToLoad ? contextToLoad.id : uri;
                return this.getDetails(id);
            }
            var importedContext = this.contexts$.value.ours.find(function (currentContext) {
                return currentContext.uri === uri && currentContext.imported === true;
            });
            if (importedContext) {
                return rxjs.of(importedContext);
            }
            else {
                return this.getLocalContext(uri);
            }
        };
        ContextService.prototype.getContextLayers = function (igoMap) {
            var layers = [];
            var mapLayers = igoMap.layers$.getValue();
            mapLayers.forEach(function (layer) {
                if (!layer.baseLayer && layer.options.id !== 'searchPointerSummaryId') {
                    layers.push(layer);
                }
            });
            return layers;
        };
        ContextService.prototype.readParamsFromRoute = function () {
            var _this = this;
            if (!this.route) {
                return;
            }
            this.route.queryParams.subscribe(function (params) {
                var centerKey = _this.route.options.centerKey;
                if (centerKey && params[centerKey]) {
                    var centerParams = params[centerKey];
                    _this.mapViewFromRoute.center = centerParams.split(',').map(Number);
                    _this.mapViewFromRoute.geolocate = false;
                }
                var projectionKey = _this.route.options.projectionKey;
                if (projectionKey && params[projectionKey]) {
                    var projectionParam = params[projectionKey];
                    _this.mapViewFromRoute.projection = projectionParam;
                }
                var zoomKey = _this.route.options.zoomKey;
                if (zoomKey && params[zoomKey]) {
                    var zoomParam = params[zoomKey];
                    _this.mapViewFromRoute.zoom = Number(zoomParam);
                }
            });
        };
        ContextService.prototype.getPath = function (file) {
            var basePath = this.options.basePath.replace(/\/$/, '');
            return basePath + "/" + file;
        };
        ContextService.prototype.handleError = function (error, uri, permissionError) {
            var context = this.contexts$.value.ours.find(function (obj) { return obj.uri === uri; });
            var titleContext = context ? context.title : uri;
            error.error.title = this.languageService.translate.instant('igo.context.contextManager.invalid.title');
            error.error.message = this.languageService.translate.instant('igo.context.contextManager.invalid.text', { value: titleContext });
            error.error.toDisplay = true;
            if (permissionError) {
                error.error.title = this.languageService.translate.instant('igo.context.contextManager.errors.addPermissionTitle');
                error.error.message = this.languageService.translate.instant('igo.context.contextManager.errors.addPermission');
            }
            this.messageService.error(error.error.message, error.error.title);
        };
        ContextService.prototype.handleContextsChange = function (keepCurrentContext) {
            var _this = this;
            if (keepCurrentContext === void 0) { keepCurrentContext = true; }
            var context = this.context$.value;
            var editedContext = this.editedContext$.value;
            if (!context || context.uri === this.options.defaultContextUri) {
                keepCurrentContext = false;
            }
            if (!keepCurrentContext || !this.findContext(context)) {
                this.defaultContextUri = undefined;
                this.loadDefaultContext();
            }
            else {
                this.getContextByUri(context.uri)
                    .pipe(operators.first())
                    .subscribe(function (newContext) {
                    _this.toolsChanged$.next(newContext);
                });
                if (this.baseUrl && this.authService.authenticated) {
                    this.getDefault().subscribe();
                }
            }
            var editedFound = this.findContext(editedContext);
            if (!editedFound || editedFound.permission !== 'write') {
                this.setEditedContext(undefined);
            }
        };
        ContextService.prototype.addContextToList = function (context) {
            var contextFound = this.findContext(context);
            if (!contextFound) {
                var contextSimplifie = {
                    id: context.id,
                    uri: context.uri,
                    title: context.title,
                    scope: context.scope,
                    permission: exports.TypePermission[exports.TypePermission.read]
                };
                if (this.contexts$.value && this.contexts$.value.public) {
                    this.contexts$.value.public.push(contextSimplifie);
                    this.contexts$.next(this.contexts$.value);
                }
            }
        };
        ContextService.prototype.findContext = function (context) {
            var e_3, _a;
            if (!context) {
                return false;
            }
            var contexts = this.contexts$.value;
            var found;
            try {
                for (var _b = __values(Object.keys(contexts)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var value = contexts[key];
                    found = value.find(function (c) { return (context.id && c.id === context.id) ||
                        (context.uri && c.uri === context.uri); });
                    if (found) {
                        break;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return found;
        };
        return ContextService;
    }());
    ContextService.ɵfac = function ContextService_Factory(t) { return new (t || ContextService)(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(i2__namespace.AuthService), i0__namespace.ɵɵinject(i3__namespace.LanguageService), i0__namespace.ɵɵinject(i3__namespace.ConfigService), i0__namespace.ɵɵinject(i3__namespace.MessageService), i0__namespace.ɵɵinject(i3__namespace.RouteService, 8)); };
    ContextService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ContextService, factory: ContextService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i1__namespace.HttpClient }, { type: i2__namespace.AuthService }, { type: i3__namespace.LanguageService }, { type: i3__namespace.ConfigService }, { type: i3__namespace.MessageService }, { type: i3__namespace.RouteService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var _c0$2 = function (a0) { return { size: a0 }; };
    function ContextImportExportComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "form", 5);
            i0__namespace.ɵɵelementStart(2, "div", 6);
            i0__namespace.ɵɵelementStart(3, "button", 7);
            i0__namespace.ɵɵlistener("click", function ContextImportExportComponent_div_8_Template_button_click_3_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r2 = i0__namespace.ɵɵreference(10); return _r2.click(); });
            i0__namespace.ɵɵpipe(4, "async");
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(7, "igo-spinner", 8);
            i0__namespace.ɵɵpipe(8, "async");
            i0__namespace.ɵɵelementStart(9, "input", 9, 10);
            i0__namespace.ɵɵlistener("click", function ContextImportExportComponent_div_8_Template_input_click_9_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r2 = i0__namespace.ɵɵreference(10); return _r2.value = null; })("change", function ContextImportExportComponent_div_8_Template_input_change_9_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.importFiles($event.target.files); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "section", 11);
            i0__namespace.ɵɵelementStart(12, "h4");
            i0__namespace.ɵɵtext(13);
            i0__namespace.ɵɵpipe(14, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(15, "ul");
            i0__namespace.ɵɵelementStart(16, "li");
            i0__namespace.ɵɵtext(17);
            i0__namespace.ɵɵpipe(18, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("disabled", i0__namespace.ɵɵpipeBind1(4, 7, ctx_r0.loading$));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 9, "igo.geo.importExportForm.importButton"), " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("shown", i0__namespace.ɵɵpipeBind1(8, 11, ctx_r0.loading$));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵstyleProp("display", "none");
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(14, 13, "igo.geo.importExportForm.importClarifications"));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind2(18, 15, "igo.geo.importExportForm.importSizeMax", i0__namespace.ɵɵpureFunction1(18, _c0$2, ctx_r0.fileSizeMb)));
        }
    }
    function ContextImportExportComponent_form_9_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var layer_r9 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", layer_r9);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(layer_r9.title);
        }
    }
    function ContextImportExportComponent_form_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "form", 12);
            i0__namespace.ɵɵelementStart(1, "div", 13);
            i0__namespace.ɵɵelementStart(2, "mat-form-field", 14);
            i0__namespace.ɵɵelementStart(3, "mat-label");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(6, "input", 15);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "div", 13);
            i0__namespace.ɵɵelementStart(8, "mat-form-field");
            i0__namespace.ɵɵelementStart(9, "mat-label");
            i0__namespace.ɵɵtext(10);
            i0__namespace.ɵɵpipe(11, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "mat-select", 16);
            i0__namespace.ɵɵelementStart(13, "mat-option", 17, 18);
            i0__namespace.ɵɵlistener("click", function ContextImportExportComponent_form_9_Template_mat_option_click_13_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var _r7 = i0__namespace.ɵɵreference(14); var ctx_r10 = i0__namespace.ɵɵnextContext(); return ctx_r10.selectAll(_r7); });
            i0__namespace.ɵɵtext(15);
            i0__namespace.ɵɵpipe(16, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(17, "mat-divider");
            i0__namespace.ɵɵtemplate(18, ContextImportExportComponent_form_9_mat_option_18_Template, 2, 2, "mat-option", 19);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(19, "div", 6);
            i0__namespace.ɵɵelementStart(20, "button", 7);
            i0__namespace.ɵɵlistener("click", function ContextImportExportComponent_form_9_Template_button_click_20_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r12 = i0__namespace.ɵɵnextContext(); return ctx_r12.handleExportFormSubmit(ctx_r12.form.value); });
            i0__namespace.ɵɵpipe(21, "async");
            i0__namespace.ɵɵtext(22);
            i0__namespace.ɵɵpipe(23, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(24, "igo-spinner", 8);
            i0__namespace.ɵɵpipe(25, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("formGroup", ctx_r1.form);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(5, 9, "igo.context.contextImportExport.export.exportContextName"));
            i0__namespace.ɵɵadvance(6);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(11, 11, "igo.context.contextImportExport.export.exportPlaceHolder"));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("value", 1);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(16, 13, "igo.context.contextImportExport.export.exportSelectAll"), " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r1.userControlledLayerList);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("disabled", !ctx_r1.form.valid || i0__namespace.ɵɵpipeBind1(21, 15, ctx_r1.loading$));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(23, 17, "igo.geo.importExportForm.exportButton"), " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("shown", i0__namespace.ɵɵpipeBind1(25, 19, ctx_r1.loading$));
        }
    }
    var ContextImportExportComponent = /** @class */ (function () {
        function ContextImportExportComponent(contextImportService, contextExportService, languageService, messageService, formBuilder, config, contextService) {
            this.contextImportService = contextImportService;
            this.contextExportService = contextExportService;
            this.languageService = languageService;
            this.messageService = messageService;
            this.formBuilder = formBuilder;
            this.config = config;
            this.contextService = contextService;
            this.inputProj = 'EPSG:4326';
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.forceNaming = false;
            this.activeImportExport = 'import';
            this.buildForm();
        }
        ContextImportExportComponent.prototype.ngOnInit = function () {
            var configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
            this.clientSideFileSizeMax =
                (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
            this.fileSizeMb = this.clientSideFileSizeMax / Math.pow(1024, 2);
            this.layerList = this.contextService.getContextLayers(this.map);
            this.userControlledLayerList = this.layerList.filter(function (layer) { return layer.showInLayerList; });
        };
        ContextImportExportComponent.prototype.importFiles = function (files) {
            var e_1, _a;
            var _this = this;
            this.loading$.next(true);
            var _loop_1 = function (file) {
                this_1.contextImportService.import(file).pipe(operators.take(1)).subscribe(function (context) { return _this.onFileImportSuccess(file, context); }, function (error) { return _this.onFileImportError(file, error); }, function () {
                    _this.loading$.next(false);
                });
            };
            var this_1 = this;
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    _loop_1(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        ContextImportExportComponent.prototype.handleExportFormSubmit = function (contextOptions) {
            var _this = this;
            this.loading$.next(true);
            this.res = this.contextService.getContextFromLayers(this.map, contextOptions.layers, contextOptions.name);
            this.res.imported = true;
            this.contextExportService.export(this.res).pipe(operators.take(1)).subscribe(function () { }, function (error) { return _this.onFileExportError(error); }, function () {
                _this.onFileExportSuccess();
                _this.loading$.next(false);
            });
        };
        ContextImportExportComponent.prototype.buildForm = function () {
            this.form = this.formBuilder.group({
                layers: ['', [i4.Validators.required]],
                name: ['', [i4.Validators.required]]
            });
        };
        ContextImportExportComponent.prototype.onFileImportSuccess = function (file, context) {
            handleFileImportSuccess(file, context, this.messageService, this.languageService, this.contextService);
        };
        ContextImportExportComponent.prototype.onFileImportError = function (file, error) {
            this.loading$.next(false);
            handleFileImportError(file, error, this.messageService, this.languageService, this.fileSizeMb);
        };
        ContextImportExportComponent.prototype.onFileExportError = function (error) {
            this.loading$.next(false);
            handleFileExportError(error, this.messageService, this.languageService);
        };
        ContextImportExportComponent.prototype.onFileExportSuccess = function () {
            handleFileExportSuccess(this.messageService, this.languageService);
        };
        ContextImportExportComponent.prototype.selectAll = function (e) {
            if (e._selected) {
                this.form.controls.layers.setValue(this.userControlledLayerList);
                e._selected = true;
            }
            if (e._selected === false) {
                this.form.controls.layers.setValue([]);
            }
        };
        ContextImportExportComponent.prototype.onImportExportChange = function (event) {
            this.activeImportExport = event.value;
        };
        return ContextImportExportComponent;
    }());
    ContextImportExportComponent.ɵfac = function ContextImportExportComponent_Factory(t) { return new (t || ContextImportExportComponent)(i0__namespace.ɵɵdirectiveInject(ContextImportService), i0__namespace.ɵɵdirectiveInject(ContextExportService), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(i4__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(i3__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(ContextService)); };
    ContextImportExportComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ContextImportExportComponent, selectors: [["igo-context-import-export"]], inputs: { map: "map" }, decls: 10, vars: 11, consts: [[1, "import-export-toggle", "mat-typography"], [3, "value", "change"], [3, "value"], [4, "ngIf"], ["class", "igo-form", 3, "formGroup", 4, "ngIf"], [1, "igo-form"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], [3, "shown"], ["type", "file", 3, "click", "change"], ["fileInput", ""], [1, "mat-typography"], [1, "igo-form", 3, "formGroup"], [1, "igo-input-container"], [1, "example-full-width"], ["formControlName", "name", "matInput", "", 3, "value"], ["formControlName", "layers", "multiple", ""], [3, "value", "click"], ["e", ""], [3, "value", 4, "ngFor", "ngForOf"]], template: function ContextImportExportComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-button-toggle-group", 1);
                i0__namespace.ɵɵlistener("change", function ContextImportExportComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.onImportExportChange($event); });
                i0__namespace.ɵɵelementStart(2, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵpipe(4, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵpipe(7, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, ContextImportExportComponent_div_8_Template, 19, 20, "div", 3);
                i0__namespace.ɵɵtemplate(9, ContextImportExportComponent_form_9_Template, 26, 21, "form", 4);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("value", ctx.activeImportExport);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("value", "import");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(4, 7, "igo.geo.importExportForm.importTabTitle"), " ");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("value", "export");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(7, 9, "igo.geo.importExportForm.exportTabTitle"), " ");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.activeImportExport === "import");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.activeImportExport === "export");
            }
        }, directives: [i6__namespace.MatButtonToggleGroup, i6__namespace.MatButtonToggle, i7__namespace.NgIf, i4__namespace.ɵNgNoValidate, i4__namespace.NgControlStatusGroup, i4__namespace.NgForm, i5__namespace.MatButton, i5__namespace$1.SpinnerComponent, i4__namespace.FormGroupDirective, i3__namespace$1.MatFormField, i3__namespace$1.MatLabel, i4__namespace.DefaultValueAccessor, i3__namespace$2.MatInput, i4__namespace.NgControlStatus, i4__namespace.FormControlName, i12__namespace.MatSelect, i11__namespace.MatOption, i14__namespace.MatDivider, i7__namespace.NgForOf], pipes: [i6__namespace$1.TranslatePipe, i7__namespace.AsyncPipe], styles: [".import-export-toggle[_ngcontent-%COMP%]{padding:10px;text-align:center}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%}.import-export-toggle[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:50%}.igo-input-container[_ngcontent-%COMP%]{padding:10px}.igo-input-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}h4[_ngcontent-%COMP%]{padding:0 5px}.igo-form[_ngcontent-%COMP%]{padding:15px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}igo-spinner[_ngcontent-%COMP%]{position:absolute;padding-left:10px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextImportExportComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-import-export',
                        templateUrl: './context-import-export.component.html',
                        styleUrls: ['./context-import-export.component.scss']
                    }]
            }], function () { return [{ type: ContextImportService }, { type: ContextExportService }, { type: i3__namespace.LanguageService }, { type: i3__namespace.MessageService }, { type: i4__namespace.FormBuilder }, { type: i3__namespace.ConfigService }, { type: ContextService }]; }, { map: [{
                    type: i0.Input
                }] });
    })();

    var IgoContextImportExportModule = /** @class */ (function () {
        function IgoContextImportExportModule() {
        }
        IgoContextImportExportModule.forRoot = function () {
            return {
                ngModule: IgoContextImportExportModule
            };
        };
        return IgoContextImportExportModule;
    }());
    IgoContextImportExportModule.ɵfac = function IgoContextImportExportModule_Factory(t) { return new (t || IgoContextImportExportModule)(); };
    IgoContextImportExportModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoContextImportExportModule });
    IgoContextImportExportModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.FormsModule,
                i4.ReactiveFormsModule,
                i7.CommonModule,
                i5.MatButtonModule,
                i6.MatButtonToggleModule,
                i14.MatDividerModule,
                i3$3.MatTabsModule,
                i12.MatSelectModule,
                i11.MatOptionModule,
                i3$1.MatFormFieldModule,
                i3$2.MatInputModule,
                i8.MatCheckboxModule,
                i3.IgoLanguageModule,
                i5$1.IgoSpinnerModule,
                i6$2.MatTooltipModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoContextImportExportModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.FormsModule,
                            i4.ReactiveFormsModule,
                            i7.CommonModule,
                            i5.MatButtonModule,
                            i6.MatButtonToggleModule,
                            i14.MatDividerModule,
                            i3$3.MatTabsModule,
                            i12.MatSelectModule,
                            i11.MatOptionModule,
                            i3$1.MatFormFieldModule,
                            i3$2.MatInputModule,
                            i8.MatCheckboxModule,
                            i3.IgoLanguageModule,
                            i5$1.IgoSpinnerModule,
                            i6$2.MatTooltipModule,
                        ],
                        exports: [
                            ContextImportExportComponent
                        ],
                        declarations: [
                            ContextImportExportComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoContextImportExportModule, { declarations: [ContextImportExportComponent], imports: [i4.FormsModule,
                i4.ReactiveFormsModule,
                i7.CommonModule,
                i5.MatButtonModule,
                i6.MatButtonToggleModule,
                i14.MatDividerModule,
                i3$3.MatTabsModule,
                i12.MatSelectModule,
                i11.MatOptionModule,
                i3$1.MatFormFieldModule,
                i3$2.MatInputModule,
                i8.MatCheckboxModule,
                i3.IgoLanguageModule,
                i5$1.IgoSpinnerModule,
                i6$2.MatTooltipModule], exports: [ContextImportExportComponent] });
    })();

    var MapContextDirective = /** @class */ (function () {
        function MapContextDirective(component, contextService, mediaService) {
            this.contextService = contextService;
            this.mediaService = mediaService;
            this.component = component;
        }
        Object.defineProperty(MapContextDirective.prototype, "map", {
            get: function () {
                return this.component.map;
            },
            enumerable: false,
            configurable: true
        });
        MapContextDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.context$$ = this.contextService.context$
                .pipe(operators.filter(function (context) { return context !== undefined; }))
                .subscribe(function (context) { return _this.handleContextChange(context); });
        };
        MapContextDirective.prototype.ngOnDestroy = function () {
            this.context$$.unsubscribe();
        };
        MapContextDirective.prototype.handleContextChange = function (context) {
            if (context.map === undefined) {
                return;
            }
            // This creates a new ol.Map when the context changes. Doing that
            // allows the print tool to work properly even when the map's canvas
            // has been tainted (CORS) with the layers of another context. This could
            // have some side effects such as unbinding all listeners on the first map.
            // A better solution would be to create a new map (preview) before
            // printing and avoid the tainted canvas issue. This will come later so
            // this snippet of code is kept here in case it takes too long becomes
            // an issue
            // const target = this.component.map.ol.getTarget();
            // this.component.map.ol.setTarget(undefined);
            // this.component.map.init();
            // this.component.map.ol.setTarget(target);
            var viewContext = context.map.view;
            if (!this.component.view || viewContext.keepCurrentView !== true) {
                this.component.view = viewContext;
            }
            var controlsContext = context.map.controls;
            if (!this.component.controls && controlsContext) {
                if (this.mediaService.isMobile()) {
                    if (typeof (controlsContext.scaleLine) !== 'boolean') {
                        var scaleLineOption = controlsContext.scaleLine;
                        if (!scaleLineOption.minWidth) {
                            scaleLineOption.minWidth = Math.min(64, scaleLineOption.minWidth);
                            controlsContext.scaleLine = scaleLineOption;
                        }
                    }
                }
                this.component.controls = controlsContext;
            }
        };
        return MapContextDirective;
    }());
    MapContextDirective.ɵfac = function MapContextDirective_Factory(t) { return new (t || MapContextDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.MapBrowserComponent), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MediaService)); };
    MapContextDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: MapContextDirective, selectors: [["", "igoMapContext", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MapContextDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoMapContext]'
                    }]
            }], function () { return [{ type: i1__namespace$1.MapBrowserComponent }, { type: ContextService }, { type: i3__namespace.MediaService }]; }, null);
    })();

    var LayerContextDirective = /** @class */ (function () {
        function LayerContextDirective(component, contextService, layerService, configService, styleListService, styleService, route) {
            this.component = component;
            this.contextService = contextService;
            this.layerService = layerService;
            this.configService = configService;
            this.styleListService = styleListService;
            this.styleService = styleService;
            this.route = route;
            this.contextLayers = [];
            this.removeLayersOnContextChange = true;
        }
        Object.defineProperty(LayerContextDirective.prototype, "map", {
            get: function () {
                return this.component.map;
            },
            enumerable: false,
            configurable: true
        });
        LayerContextDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.context$$ = this.contextService.context$
                .pipe(operators.filter(function (context) { return context !== undefined; }))
                .subscribe(function (context) { return _this.handleContextChange(context); });
            if (this.route &&
                this.route.options.visibleOnLayersKey &&
                this.route.options.visibleOffLayersKey &&
                this.route.options.contextKey) {
                var queryParams$$_1 = this.route.queryParams.subscribe(function (params) {
                    if (Object.keys(params).length > 0) {
                        _this.queryParams = params;
                        queryParams$$_1.unsubscribe();
                    }
                });
            }
        };
        LayerContextDirective.prototype.ngOnDestroy = function () {
            this.context$$.unsubscribe();
        };
        LayerContextDirective.prototype.handleContextChange = function (context) {
            var _this = this;
            if (context.layers === undefined) {
                return;
            }
            if (this.removeLayersOnContextChange === true) {
                this.map.removeAllLayers();
            }
            else {
                this.map.removeLayers(this.contextLayers);
            }
            this.contextLayers = [];
            var layersAndIndex$ = rxjs.merge.apply(void 0, __spreadArray([], __read(context.layers.map(function (layerOptions, index) {
                return _this.layerService.createAsyncLayer(layerOptions, context.uri);
            }))));
            layersAndIndex$
                .pipe(operators.buffer(layersAndIndex$.pipe(operators.debounceTime(500))))
                .subscribe(function (layers) {
                layers = layers
                    .filter(function (layer) { return layer !== undefined; })
                    .map(function (layer) {
                    layer.visible = _this.computeLayerVisibilityFromUrl(layer);
                    layer.zIndex = layer.zIndex;
                    return layer;
                });
                _this.contextLayers.concat(layers);
                _this.map.addLayers(layers);
                if (context.extraFeatures) {
                    context.extraFeatures.forEach(function (featureCollection) {
                        var format = new GeoJSON__default["default"]();
                        var title = featureCollection.name;
                        featureCollection = JSON.stringify(featureCollection);
                        featureCollection = format.readFeatures(featureCollection, {
                            dataProjection: 'EPSG:4326',
                            featureProjection: 'EPSG:3857'
                        });
                        if (!_this.configService.getConfig('importWithStyle')) {
                            addImportedFeaturesToMap(featureCollection, _this.map, title);
                        }
                        else {
                            addImportedFeaturesStyledToMap(featureCollection, _this.map, title, _this.styleListService, _this.styleService);
                        }
                    });
                }
            });
        };
        LayerContextDirective.prototype.computeLayerVisibilityFromUrl = function (layer) {
            var params = this.queryParams;
            var currentContext = this.contextService.context$.value.uri;
            var currentLayerid = layer.id;
            var visible = layer.visible;
            if (!params || !currentLayerid) {
                return visible;
            }
            var contextParams = params[this.route.options.contextKey];
            if (contextParams === currentContext || !contextParams) {
                var visibleOnLayersParams = '';
                var visibleOffLayersParams = '';
                var visiblelayers = [];
                var invisiblelayers = [];
                if (this.route.options.visibleOnLayersKey &&
                    params[this.route.options.visibleOnLayersKey]) {
                    visibleOnLayersParams =
                        params[this.route.options.visibleOnLayersKey];
                }
                if (this.route.options.visibleOffLayersKey &&
                    params[this.route.options.visibleOffLayersKey]) {
                    visibleOffLayersParams =
                        params[this.route.options.visibleOffLayersKey];
                }
                /* This order is important because to control whichever
                 the order of * param. First whe open and close everything.*/
                if (visibleOnLayersParams === '*') {
                    visible = true;
                }
                if (visibleOffLayersParams === '*') {
                    visible = false;
                }
                // After, managing named layer by id (context.json OR id from datasource)
                visiblelayers = visibleOnLayersParams.split(',');
                invisiblelayers = visibleOffLayersParams.split(',');
                if (visiblelayers.indexOf(currentLayerid) > -1 || visiblelayers.indexOf(currentLayerid.toString()) > -1) {
                    visible = true;
                }
                if (invisiblelayers.indexOf(currentLayerid) > -1 || invisiblelayers.indexOf(currentLayerid.toString()) > -1) {
                    visible = false;
                }
            }
            return visible;
        };
        return LayerContextDirective;
    }());
    LayerContextDirective.ɵfac = function LayerContextDirective_Factory(t) { return new (t || LayerContextDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.MapBrowserComponent), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.LayerService), i0__namespace.ɵɵdirectiveInject(i3__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.StyleListService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.StyleService), i0__namespace.ɵɵdirectiveInject(i3__namespace.RouteService, 8)); };
    LayerContextDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: LayerContextDirective, selectors: [["", "igoLayerContext", ""]], inputs: { removeLayersOnContextChange: "removeLayersOnContextChange" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LayerContextDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoLayerContext]'
                    }]
            }], function () {
            return [{ type: i1__namespace$1.MapBrowserComponent }, { type: ContextService }, { type: i1__namespace$1.LayerService }, { type: i3__namespace.ConfigService }, { type: i1__namespace$1.StyleListService }, { type: i1__namespace$1.StyleService }, { type: i3__namespace.RouteService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { removeLayersOnContextChange: [{
                    type: i0.Input
                }] });
    })();

    var ContextListControlsEnum;
    (function (ContextListControlsEnum) {
        ContextListControlsEnum["always"] = "always";
        ContextListControlsEnum["never"] = "never";
        ContextListControlsEnum["default"] = "default";
    })(ContextListControlsEnum || (ContextListControlsEnum = {}));

    var BookmarkDialogComponent = /** @class */ (function () {
        function BookmarkDialogComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        return BookmarkDialogComponent;
    }());
    BookmarkDialogComponent.ɵfac = function BookmarkDialogComponent_Factory(t) { return new (t || BookmarkDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialogRef)); };
    BookmarkDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BookmarkDialogComponent, selectors: [["igo-bookmark-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["matInput", "", "required", "", "autocomplete", "off", "maxlength", "128", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function BookmarkDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 1);
                i0__namespace.ɵɵelementStart(4, "mat-form-field");
                i0__namespace.ɵɵelementStart(5, "input", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function BookmarkDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
                i0__namespace.ɵɵpipe(6, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 3);
                i0__namespace.ɵɵelementStart(8, "button", 4);
                i0__namespace.ɵɵlistener("click", function BookmarkDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(ctx.title); });
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵpipe(10, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 5);
                i0__namespace.ɵɵlistener("click", function BookmarkDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
                i0__namespace.ɵɵtext(12);
                i0__namespace.ɵɵpipe(13, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 6, "igo.context.bookmarkButton.dialog.title"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(6, 8, "igo.context.bookmarkButton.dialog.placeholder"))("ngModel", ctx.title);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("disabled", !ctx.title);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(10, 10, "igo.common.confirmDialog.confirmBtn"), " ");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(13, 12, "igo.common.confirmDialog.cancelBtn"), " ");
            }
        }, directives: [i1__namespace$2.MatDialogTitle, i1__namespace$2.MatDialogContent, i3__namespace$1.MatFormField, i3__namespace$2.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.RequiredValidator, i4__namespace.MaxLengthValidator, i4__namespace.NgControlStatus, i4__namespace.NgModel, i1__namespace$2.MatDialogActions, i5__namespace.MatButton], pipes: [i6__namespace$1.TranslatePipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BookmarkDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-bookmark-dialog',
                        templateUrl: './bookmark-dialog.component.html'
                    }]
            }], function () { return [{ type: i1__namespace$2.MatDialogRef }]; }, null);
    })();

    function ContextItemComponent_button_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-icon", 7);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵpropertyInterpolate("svgIcon", ctx_r2.context.icon ? ctx_r2.context.icon : ctx_r2.context.scope === "public" ? "earth" : "star");
        }
    }
    function ContextItemComponent_button_1_img_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 8);
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("src", ctx_r3.context.iconImage, i0__namespace.ɵɵsanitizeUrl);
        }
    }
    function ContextItemComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 4);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_button_1_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.favoriteClick(ctx_r4.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵtemplate(2, ContextItemComponent_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 5);
            i0__namespace.ɵɵtemplate(3, ContextItemComponent_button_1_img_3_Template, 1, 1, "img", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("matTooltip", ctx_r0.auth.authenticated ? i0__namespace.ɵɵpipeBind1(1, 4, "igo.context.contextManager.favorite") : "")("color", ctx_r0.default ? "primary" : "default");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r0.context.iconImage);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.context.iconImage);
        }
    }
    function ContextItemComponent_div_4_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 20);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_1_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r15_1); var ctx_r14 = i0__namespace.ɵɵnextContext(2); return ctx_r14.save.emit(ctx_r14.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.save"))("color", ctx_r6.color);
        }
    }
    function ContextItemComponent_div_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 22);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r17_1); var ctx_r16 = i0__namespace.ɵɵnextContext(2); return ctx_r16.managePermissions.emit(ctx_r16.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 23);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.managePermissions"))("color", ctx_r8.color);
        }
    }
    function ContextItemComponent_div_4_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 24);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_5_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r19_1); var ctx_r18 = i0__namespace.ɵɵnextContext(2); return ctx_r18.clone.emit(ctx_r18.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 25);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.clone"))("color", ctx_r9.color);
        }
    }
    function ContextItemComponent_div_4_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 26);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_6_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r21_1); var ctx_r20 = i0__namespace.ɵɵnextContext(2); return ctx_r20.edit.emit(ctx_r20.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 27);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r10.color)("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.edit"));
        }
    }
    function ContextItemComponent_div_4_button_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 28);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_7_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r23_1); var ctx_r22 = i0__namespace.ɵɵnextContext(2); return ctx_r22.hide.emit(ctx_r22.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 29);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r11.color)("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.hide"));
        }
    }
    function ContextItemComponent_div_4_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 28);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_8_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r25_1); var ctx_r24 = i0__namespace.ɵɵnextContext(2); return ctx_r24.show.emit(ctx_r24.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 30);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r12.color)("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.show"));
        }
    }
    function ContextItemComponent_div_4_button_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 31);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_button_9_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r27_1); var ctx_r26 = i0__namespace.ɵɵnextContext(2); return ctx_r26.delete.emit(ctx_r26.context); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 32);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.contextManager.delete"));
        }
    }
    function ContextItemComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 9);
            i0__namespace.ɵɵtemplate(1, ContextItemComponent_div_4_button_1_Template, 3, 4, "button", 10);
            i0__namespace.ɵɵelementStart(2, "div", 11, 12);
            i0__namespace.ɵɵtemplate(4, ContextItemComponent_div_4_button_4_Template, 3, 4, "button", 13);
            i0__namespace.ɵɵtemplate(5, ContextItemComponent_div_4_button_5_Template, 3, 4, "button", 14);
            i0__namespace.ɵɵtemplate(6, ContextItemComponent_div_4_button_6_Template, 3, 4, "button", 15);
            i0__namespace.ɵɵtemplate(7, ContextItemComponent_div_4_button_7_Template, 3, 4, "button", 16);
            i0__namespace.ɵɵtemplate(8, ContextItemComponent_div_4_button_8_Template, 3, 4, "button", 16);
            i0__namespace.ɵɵtemplate(9, ContextItemComponent_div_4_button_9_Template, 3, 3, "button", 17);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 18);
            i0__namespace.ɵɵlistener("click", function ContextItemComponent_div_4_Template_button_click_10_listener() { i0__namespace.ɵɵrestoreView(_r29_1); var ctx_r28 = i0__namespace.ɵɵnextContext(); return ctx_r28.collapsed = !ctx_r28.collapsed; });
            i0__namespace.ɵɵelement(11, "mat-icon", 19);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r7 = i0__namespace.ɵɵreference(3);
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.collapsed && ctx_r1.selected && (ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] || ctx_r1.context.imported));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.canShare && !ctx_r1.context.imported);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r1.context.imported);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] && !ctx_r1.context.imported);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r1.context.hidden && !ctx_r1.context.imported);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.context.hidden && !ctx_r1.context.imported);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.context.permission === ctx_r1.typePermission[ctx_r1.typePermission.write] || ctx_r1.context.imported);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("color", ctx_r1.color)("target", _r7)("collapsed", ctx_r1.collapsed);
        }
    }
    var _c0$1 = function (a0) { return { "mat-list-item-light": a0 }; };
    var ContextItemComponent = /** @class */ (function () {
        function ContextItemComponent(auth, storageService) {
            this.auth = auth;
            this.storageService = storageService;
            this.typePermission = exports.TypePermission;
            this.color = 'primary';
            this.collapsed = true;
            this._default = false;
            this.edit = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
            this.save = new i0.EventEmitter();
            this.clone = new i0.EventEmitter();
            this.hide = new i0.EventEmitter();
            this.show = new i0.EventEmitter();
            this.favorite = new i0.EventEmitter();
            this.managePermissions = new i0.EventEmitter();
            this.manageTools = new i0.EventEmitter();
        }
        Object.defineProperty(ContextItemComponent.prototype, "context", {
            get: function () {
                return this._context;
            },
            set: function (value) {
                this._context = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextItemComponent.prototype, "default", {
            get: function () {
                return this._default;
            },
            set: function (value) {
                this._default = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextItemComponent.prototype, "hidden", {
            get: function () {
                return this.context.hidden;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextItemComponent.prototype, "canShare", {
            get: function () {
                return this.storageService.get('canShare') === true;
            },
            enumerable: false,
            configurable: true
        });
        ContextItemComponent.prototype.favoriteClick = function (context) {
            if (this.auth.authenticated) {
                this.favorite.emit(context);
            }
        };
        return ContextItemComponent;
    }());
    ContextItemComponent.ɵfac = function ContextItemComponent_Factory(t) { return new (t || ContextItemComponent)(i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(i3__namespace.StorageService)); };
    ContextItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ContextItemComponent, selectors: [["igo-context-item"]], inputs: { context: "context", default: "default", selected: "selected" }, outputs: { edit: "edit", delete: "delete", save: "save", clone: "clone", hide: "hide", show: "show", favorite: "favorite", managePermissions: "managePermissions", manageTools: "manageTools" }, decls: 5, vars: 6, consts: [[1, "mat-list-item", 3, "ngClass"], ["mat-list-avatar", "", "mat-icon-button", "", "igoStopPropagation", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["matLine", ""], ["igoStopPropagation", "", "class", "igo-actions-container", 4, "ngIf"], ["mat-list-avatar", "", "mat-icon-button", "", "igoStopPropagation", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], [3, "svgIcon", 4, "ngIf"], [3, "src", 4, "ngIf"], [3, "svgIcon"], [3, "src"], ["igoStopPropagation", "", 1, "igo-actions-container"], ["class", "save-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], [1, "igo-actions-expand-container"], ["actions", ""], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["class", "clone-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click", 4, "ngIf"], ["class", "edit-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "hide-button", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "color", "matTooltip", "click", 4, "ngIf"], ["class", "delete-button", "mat-icon-button", "", "color", "warn", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "igoCollapse", "", 1, "actions-button", 3, "color", "target", "collapsed", "click"], ["svgIcon", "dots-horizontal"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "save-button", 3, "matTooltip", "color", "click"], ["svgIcon", "content-save"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "color", "click"], ["svgIcon", "account-arrow-right"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "clone-button", 3, "matTooltip", "color", "click"], ["svgIcon", "content-copy"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "edit-button", 3, "color", "matTooltip", "click"], ["svgIcon", "pencil"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "hide-button", 3, "color", "matTooltip", "click"], ["svgIcon", "eye"], ["svgIcon", "eye-off"], ["mat-icon-button", "", "color", "warn", "matTooltipShowDelay", "500", 1, "delete-button", 3, "matTooltip", "click"], ["svgIcon", "delete"]], template: function ContextItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-list-item", 0);
                i0__namespace.ɵɵtemplate(1, ContextItemComponent_button_1_Template, 4, 6, "button", 1);
                i0__namespace.ɵɵelementStart(2, "h4", 2);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(4, ContextItemComponent_div_4_Template, 12, 10, "div", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(4, _c0$1, ctx.hidden));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.auth.authenticated);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.context.title);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.auth.authenticated);
            }
        }, directives: [i3__namespace$3.MatListItem, i7__namespace.NgClass, i7__namespace.NgIf, i11__namespace.MatLine, i5__namespace.MatButton, i3__namespace$3.MatListAvatarCssMatStyler, i5__namespace$1.StopPropagationDirective, i6__namespace$2.MatTooltip, i9__namespace.MatIcon, i5__namespace$1.CollapseDirective], pipes: [i6__namespace$1.TranslatePipe], styles: ["[_nghost-%COMP%]{overflow:hidden}.igo-actions-container[_ngcontent-%COMP%]{flex-shrink:0}.igo-actions-expand-container[_ngcontent-%COMP%]{display:inline-flex}mat-list-item[_ngcontent-%COMP%]     .mat-list-item-content .mat-list-text{padding:0}mat-icon.disabled[_ngcontent-%COMP%]{color:#00000061}mat-list-item.mat-list-item-light[_ngcontent-%COMP%]     .mat-list-item-content{color:#969696}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-item',
                        templateUrl: './context-item.component.html',
                        styleUrls: ['./context-item.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i2__namespace.AuthService }, { type: i3__namespace.StorageService }]; }, { context: [{
                    type: i0.Input
                }], default: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], edit: [{
                    type: i0.Output
                }], delete: [{
                    type: i0.Output
                }], save: [{
                    type: i0.Output
                }], clone: [{
                    type: i0.Output
                }], hide: [{
                    type: i0.Output
                }], show: [{
                    type: i0.Output
                }], favorite: [{
                    type: i0.Output
                }], managePermissions: [{
                    type: i0.Output
                }], manageTools: [{
                    type: i0.Output
                }] });
    })();

    function ContextListComponent_mat_form_field_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 14);
            i0__namespace.ɵɵlistener("click", function ContextListComponent_mat_form_field_1_button_3_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(2); return ctx_r9.clearFilter(); });
            i0__namespace.ɵɵelement(1, "mat-icon", 15);
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ContextListComponent_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 11);
            i0__namespace.ɵɵelementStart(1, "input", 12);
            i0__namespace.ɵɵlistener("ngModelChange", function ContextListComponent_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r12_1); var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.term = $event; });
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(3, ContextListComponent_mat_form_field_1_button_3_Template, 2, 0, "button", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r0.auth.authenticated && ctx_r0.configService.getConfig("context") ? "context-filter-min-width" : "context-filter-max-width");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(2, 4, "igo.context.contextManager.filterPlaceHolder"))("ngModel", ctx_r0.term);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.term.length);
        }
    }
    function ContextListComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 16);
            i0__namespace.ɵɵlistener("click", function ContextListComponent_button_2_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.toggleSort(true); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 17);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.contextManager.sortAlphabetically"));
        }
    }
    function ContextListComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 16);
            i0__namespace.ɵɵlistener("click", function ContextListComponent_button_3_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var ctx_r15 = i0__namespace.ɵɵnextContext(); return ctx_r15.toggleSort(false); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 18);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.contextManager.sortContextOrder"));
        }
    }
    function ContextListComponent_igo_actionbar_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-actionbar", 19);
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("iconColor", ctx_r3.color)("store", ctx_r3.actionStore)("withIcon", true)("withTitle", ctx_r3.actionbarMode === "overlay")("horizontal", false)("mode", ctx_r3.actionbarMode);
        }
    }
    function ContextListComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 20);
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 21);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r5 = i0__namespace.ɵɵreference(7);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.filterUser"))("matMenuTriggerFor", _r5);
        }
    }
    function ContextListComponent_ng_container_8_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 27);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var user_r17 = i0__namespace.ɵɵnextContext().$implicit;
            var _r20 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵproperty("matMenuTriggerFor", _r20);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", user_r17.title, " ");
        }
    }
    function ContextListComponent_ng_container_8_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 9);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var user_r17 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", user_r17.title, " ");
        }
    }
    function ContextListComponent_ng_container_8_mat_checkbox_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-checkbox", 8);
            i0__namespace.ɵɵlistener("click", function ContextListComponent_ng_container_8_mat_checkbox_7_Template_mat_checkbox_click_0_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_ng_container_8_mat_checkbox_7_Template_mat_checkbox_change_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r27_1); var child_r24 = restoredCtx.$implicit; var user_r17 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r26 = i0__namespace.ɵɵnextContext(); return ctx_r26.userSelection(child_r24, user_r17); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var child_r24 = ctx.$implicit;
            var ctx_r21 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("checked", ctx_r21.getPermission(child_r24).checked);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", child_r24.title, " ");
        }
    }
    function ContextListComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r31_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "span", 7);
            i0__namespace.ɵɵelementStart(2, "mat-checkbox", 22);
            i0__namespace.ɵɵlistener("click", function ContextListComponent_ng_container_8_Template_mat_checkbox_click_2_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_ng_container_8_Template_mat_checkbox_change_2_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r31_1); var user_r17 = restoredCtx.$implicit; var ctx_r30 = i0__namespace.ɵɵnextContext(); return ctx_r30.userSelection(user_r17); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(3, ContextListComponent_ng_container_8_button_3_Template, 2, 2, "button", 23);
            i0__namespace.ɵɵtemplate(4, ContextListComponent_ng_container_8_button_4_Template, 2, 1, "button", 24);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "mat-menu", null, 25);
            i0__namespace.ɵɵtemplate(7, ContextListComponent_ng_container_8_mat_checkbox_7_Template, 2, 2, "mat-checkbox", 26);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var user_r17 = ctx.$implicit;
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("checked", ctx_r6.getPermission(user_r17).checked)("indeterminate", ctx_r6.getPermission(user_r17).indeterminate);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", user_r17.childs);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !user_r17.childs);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", user_r17.childs);
        }
    }
    function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-context-item", 31);
            i0__namespace.ɵɵlistener("edit", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_edit_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r37 = i0__namespace.ɵɵnextContext(3); return ctx_r37.edit.emit(context_r36); })("delete", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_delete_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r39 = i0__namespace.ɵɵnextContext(3); return ctx_r39.delete.emit(context_r36); })("clone", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_clone_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r40 = i0__namespace.ɵɵnextContext(3); return ctx_r40.clone.emit(context_r36); })("save", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_save_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r41 = i0__namespace.ɵɵnextContext(3); return ctx_r41.save.emit(context_r36); })("hide", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_hide_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r42 = i0__namespace.ɵɵnextContext(3); return ctx_r42.hideContext(context_r36); })("show", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_show_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r43 = i0__namespace.ɵɵnextContext(3); return ctx_r43.showContext(context_r36); })("favorite", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_favorite_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r44 = i0__namespace.ɵɵnextContext(3); return ctx_r44.favorite.emit(context_r36); })("manageTools", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_manageTools_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r45 = i0__namespace.ɵɵnextContext(3); return ctx_r45.manageTools.emit(context_r36); })("managePermissions", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_managePermissions_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r46 = i0__namespace.ɵɵnextContext(3); return ctx_r46.managePermissions.emit(context_r36); })("select", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_select_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r47 = i0__namespace.ɵɵnextContext(3); return ctx_r47.select.emit(context_r36); })("unselect", function ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template_igo_context_item_unselect_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r38_1); var context_r36 = restoredCtx.$implicit; var ctx_r48 = i0__namespace.ɵɵnextContext(3); return ctx_r48.unselect.emit(context_r36); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var context_r36 = ctx.$implicit;
            var ctx_r35 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("selected", ctx_r35.selectedContext && ctx_r35.selectedContext.uri === context_r36.uri)("context", context_r36)("default", context_r36.id && ctx_r35.defaultContextId && ctx_r35.defaultContextId === context_r36.id);
        }
    }
    function ContextListComponent_ng_template_14_igo_collapsible_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r50_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-collapsible", 30);
            i0__namespace.ɵɵlistener("toggle", function ContextListComponent_ng_template_14_igo_collapsible_0_Template_igo_collapsible_toggle_0_listener($event) { i0__namespace.ɵɵrestoreView(_r50_1); var groupContexts_r32 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r49 = i0__namespace.ɵɵnextContext(); return (ctx_r49.collapsed[ctx_r49.titleMapping[groupContexts_r32.key]] = $event); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵtemplate(2, ContextListComponent_ng_template_14_igo_collapsible_0_ng_template_2_Template, 1, 3, "ng-template", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupContexts_r32 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r33 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("title", i0__namespace.ɵɵpipeBind1(1, 3, ctx_r33.titleMapping[groupContexts_r32.key]))("collapsed", ctx_r33.collapsed[ctx_r33.titleMapping[groupContexts_r32.key]]);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", groupContexts_r32.value);
        }
    }
    function ContextListComponent_ng_template_14_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r56_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-context-item", 32);
            i0__namespace.ɵɵlistener("select", function ContextListComponent_ng_template_14_1_ng_template_0_Template_igo_context_item_select_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r56_1); var context_r54 = restoredCtx.$implicit; var ctx_r55 = i0__namespace.ɵɵnextContext(3); return ctx_r55.select.emit(context_r54); })("unselect", function ContextListComponent_ng_template_14_1_ng_template_0_Template_igo_context_item_unselect_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r56_1); var context_r54 = restoredCtx.$implicit; var ctx_r57 = i0__namespace.ɵɵnextContext(3); return ctx_r57.unselect.emit(context_r54); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var context_r54 = ctx.$implicit;
            var ctx_r53 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("selected", ctx_r53.selectedContext && ctx_r53.selectedContext.uri === context_r54.uri)("context", context_r54)("default", ctx_r53.defaultContextId === context_r54.id);
        }
    }
    function ContextListComponent_ng_template_14_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ContextListComponent_ng_template_14_1_ng_template_0_Template, 1, 3, "ng-template", 10);
        }
        if (rf & 2) {
            var groupContexts_r32 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("ngForOf", groupContexts_r32.value);
        }
    }
    function ContextListComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ContextListComponent_ng_template_14_igo_collapsible_0_Template, 3, 5, "igo-collapsible", 28);
            i0__namespace.ɵɵtemplate(1, ContextListComponent_ng_template_14_1_Template, 1, 1, undefined, 29);
        }
        if (rf & 2) {
            var groupContexts_r32 = ctx.$implicit;
            var ctx_r7 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", groupContexts_r32.value.length && ctx_r7.auth.authenticated);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", groupContexts_r32.value.length && !ctx_r7.auth.authenticated);
        }
    }
    var ContextListComponent = /** @class */ (function () {
        function ContextListComponent(cdRef, contextService, configService, auth, dialog, languageService, storageService) {
            this.cdRef = cdRef;
            this.contextService = contextService;
            this.configService = configService;
            this.auth = auth;
            this.dialog = dialog;
            this.languageService = languageService;
            this.storageService = storageService;
            this.contextsInitial = { ours: [] };
            this.contexts$ = new rxjs.BehaviorSubject(this.contextsInitial);
            this.change$ = new rxjs.ReplaySubject(1);
            this._contexts = { ours: [] };
            this.collapsed = [];
            this.select = new i0.EventEmitter();
            this.unselect = new i0.EventEmitter();
            this.edit = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
            this.save = new i0.EventEmitter();
            this.clone = new i0.EventEmitter();
            this.create = new i0.EventEmitter();
            this.hide = new i0.EventEmitter();
            this.show = new i0.EventEmitter();
            this.showHiddenContexts = new i0.EventEmitter();
            this.favorite = new i0.EventEmitter();
            this.managePermissions = new i0.EventEmitter();
            this.manageTools = new i0.EventEmitter();
            this.filterPermissionsChanged = new i0.EventEmitter();
            this.titleMapping = {
                ours: 'igo.context.contextManager.ourContexts',
                shared: 'igo.context.contextManager.sharedContexts',
                public: 'igo.context.contextManager.publicContexts'
            };
            this.permissions = [];
            this.actionStore = new i5$1.ActionStore([]);
            this.actionbarMode = i5$1.ActionbarMode.Overlay;
            this.color = 'primary';
            this.showHidden = false;
            this._term = '';
            this._sortedAlpha = undefined;
            this.showContextFilter = ContextListControlsEnum.always;
            this.thresholdToFilter = 5;
        }
        Object.defineProperty(ContextListComponent.prototype, "contexts", {
            get: function () {
                return this._contexts;
            },
            set: function (value) {
                this._contexts = value;
                this.cdRef.detectChanges();
                this.next();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextListComponent.prototype, "selectedContext", {
            get: function () {
                return this._selectedContext;
            },
            set: function (value) {
                this._selectedContext = value;
                this.cdRef.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextListComponent.prototype, "map", {
            get: function () {
                return this._map;
            },
            set: function (value) {
                this._map = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextListComponent.prototype, "defaultContextId", {
            get: function () {
                return this._defaultContextId;
            },
            set: function (value) {
                this._defaultContextId = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextListComponent.prototype, "term", {
            get: function () {
                return this._term;
            },
            /**
             * Context filter term
             */
            set: function (value) {
                this._term = value;
                this.next();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextListComponent.prototype, "sortedAlpha", {
            get: function () {
                return this._sortedAlpha;
            },
            set: function (value) {
                this._sortedAlpha = value;
                this.next();
            },
            enumerable: false,
            configurable: true
        });
        ContextListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.change$$ = this.change$
                .pipe(operators.debounce(function () {
                return _this.contexts.ours.length === 0 ? rxjs.EMPTY : rxjs.timer(50);
            }))
                .subscribe(function () {
                _this.contexts$.next(_this.filterContextsList(_this.contexts));
            });
            this.actionStore.load([
                {
                    id: 'emptyContext',
                    title: this.languageService.translate.instant('igo.context.contextManager.emptyContext'),
                    icon: 'map-outline',
                    tooltip: this.languageService.translate.instant('igo.context.contextManager.emptyContextTooltip'),
                    handler: function () {
                        _this.createContext(true);
                    }
                },
                {
                    id: 'contextFromMap',
                    title: this.languageService.translate.instant('igo.context.contextManager.contextMap'),
                    icon: 'map-check',
                    tooltip: this.languageService.translate.instant('igo.context.contextManager.contextMapTooltip'),
                    handler: function () {
                        _this.createContext(false);
                    }
                }
            ]);
        };
        ContextListComponent.prototype.next = function () {
            this.change$.next();
        };
        ContextListComponent.prototype.filterContextsList = function (contexts) {
            var _this = this;
            if (this.term === '') {
                if (this.sortedAlpha) {
                    contexts = this.sortContextsList(contexts);
                }
                return contexts;
            }
            else {
                var ours = contexts.ours.filter(function (context) {
                    var filterNormalized = _this.term
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    var contextTitleNormalized = context.title
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    return contextTitleNormalized.includes(filterNormalized);
                });
                var updateContexts = {
                    ours: ours
                };
                if (this.contexts.public) {
                    var publics = contexts.public.filter(function (context) {
                        var filterNormalized = _this.term
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                        var contextTitleNormalized = context.title
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                        return contextTitleNormalized.includes(filterNormalized);
                    });
                    updateContexts.public = publics;
                }
                if (this.contexts.shared) {
                    var shared = contexts.shared.filter(function (context) {
                        var filterNormalized = _this.term
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                        var contextTitleNormalized = context.title
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                        return contextTitleNormalized.includes(filterNormalized);
                    });
                    updateContexts.shared = shared;
                }
                if (this.sortedAlpha) {
                    updateContexts = this.sortContextsList(updateContexts);
                }
                return updateContexts;
            }
        };
        ContextListComponent.prototype.ngOnDestroy = function () {
            this.change$$.unsubscribe();
        };
        ContextListComponent.prototype.showFilter = function () {
            switch (this.showContextFilter) {
                case ContextListControlsEnum.always:
                    return true;
                case ContextListControlsEnum.never:
                    return false;
                default:
                    var totalLength = this.contexts.ours.length;
                    this.contexts.public
                        ? (totalLength += this.contexts.public.length)
                        : (totalLength += 0);
                    this.contexts.shared
                        ? (totalLength += this.contexts.shared.length)
                        : (totalLength += 0);
                    if (totalLength >= this.thresholdToFilter) {
                        return true;
                    }
                    return false;
            }
        };
        ContextListComponent.prototype.sortContextsList = function (contexts) {
            var _this = this;
            if (contexts) {
                var contextsList = JSON.parse(JSON.stringify(contexts));
                contextsList.ours.sort(function (a, b) {
                    if (_this.normalize(a.title) < _this.normalize(b.title)) {
                        return -1;
                    }
                    if (_this.normalize(a.title) > _this.normalize(b.title)) {
                        return 1;
                    }
                    return 0;
                });
                if (contextsList.shared) {
                    contextsList.shared.sort(function (a, b) {
                        if (_this.normalize(a.title) < _this.normalize(b.title)) {
                            return -1;
                        }
                        if (_this.normalize(a.title) > _this.normalize(b.title)) {
                            return 1;
                        }
                        return 0;
                    });
                }
                else if (contextsList.public) {
                    contextsList.public.sort(function (a, b) {
                        if (_this.normalize(a.title) < _this.normalize(b.title)) {
                            return -1;
                        }
                        if (_this.normalize(a.title) > _this.normalize(b.title)) {
                            return 1;
                        }
                        return 0;
                    });
                }
                return contextsList;
            }
        };
        ContextListComponent.prototype.normalize = function (str) {
            return str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase();
        };
        ContextListComponent.prototype.toggleSort = function (sortAlpha) {
            this.sortedAlpha = sortAlpha;
        };
        ContextListComponent.prototype.clearFilter = function () {
            this.term = '';
        };
        ContextListComponent.prototype.createContext = function (empty) {
            var _this = this;
            this.dialog
                .open(BookmarkDialogComponent, { disableClose: false })
                .afterClosed()
                .pipe(operators.take(1))
                .subscribe(function (title) {
                if (title) {
                    _this.create.emit({ title: title, empty: empty });
                }
            });
        };
        ContextListComponent.prototype.getPermission = function (user) {
            if (user) {
                var permission = this.permissions.find(function (p) { return p.name === user.name; });
                return permission;
            }
        };
        ContextListComponent.prototype.userSelection = function (user, parent) {
            var e_1, _a, e_2, _b;
            var permission = this.getPermission(user);
            if (permission) {
                permission.checked = !permission.checked;
                this.storageService.set('contexts.permissions.' + permission.name, permission.checked);
                permission.indeterminate = false;
            }
            if (parent) {
                var indeterminate = false;
                try {
                    for (var _c = __values(parent.childs), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var c = _d.value;
                        var cPermission = this.getPermission(c);
                        if (cPermission.checked !== permission.checked) {
                            indeterminate = true;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var parentPermission = this.getPermission(parent);
                if (parentPermission) {
                    parentPermission.checked = permission.checked;
                    this.storageService.set('contexts.permissions.' + parentPermission.name, permission.checked);
                    parentPermission.indeterminate = indeterminate;
                }
            }
            if (user.childs) {
                try {
                    for (var _e = __values(user.childs), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var c = _f.value;
                        var childrenPermission = this.getPermission(c);
                        if (childrenPermission &&
                            childrenPermission.checked !== permission.checked) {
                            childrenPermission.checked = permission.checked;
                            this.storageService.set('contexts.permissions.' + childrenPermission.name, permission.checked);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            this.filterPermissionsChanged.emit(this.permissions);
        };
        ContextListComponent.prototype.hideContext = function (context) {
            context.hidden = true;
            if (!this.showHidden) {
                var contexts = { ours: [], shared: [], public: [] };
                contexts.ours = this.contexts.ours.filter(function (c) { return c.id !== context.id; });
                contexts.shared = this.contexts.shared.filter(function (c) { return c.id !== context.id; });
                contexts.public = this.contexts.public.filter(function (c) { return c.id !== context.id; });
                this.contexts = contexts;
            }
            this.hide.emit(context);
        };
        ContextListComponent.prototype.showContext = function (context) {
            context.hidden = false;
            this.show.emit(context);
        };
        return ContextListComponent;
    }());
    ContextListComponent.ɵfac = function ContextListComponent_Factory(t) { return new (t || ContextListComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i3__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialog), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.StorageService)); };
    ContextListComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ContextListComponent, selectors: [["igo-context-list"]], inputs: { contexts: "contexts", selectedContext: "selectedContext", map: "map", defaultContextId: "defaultContextId", term: "term" }, outputs: { select: "select", unselect: "unselect", edit: "edit", delete: "delete", save: "save", clone: "clone", create: "create", hide: "hide", show: "show", showHiddenContexts: "showHiddenContexts", favorite: "favorite", managePermissions: "managePermissions", manageTools: "manageTools", filterPermissionsChanged: "filterPermissionsChanged" }, decls: 17, vars: 16, consts: [[3, "navigation"], [3, "ngClass", 4, "ngIf"], ["class", "sort-alpha", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "click", 4, "ngIf"], ["class", "add-context-button", "icon", "plus", 3, "iconColor", "store", "withIcon", "withTitle", "horizontal", "mode", 4, "ngIf"], ["class", "users-filter", "mat-icon-button", "", "matTooltipShowDelay", "500", 3, "matTooltip", "matMenuTriggerFor", 4, "ngIf"], ["accountMenu", "matMenu"], [4, "ngFor", "ngForOf"], [1, "profilsMenu"], [1, "mat-menu-item", 3, "checked", "click", "change"], ["mat-menu-item", ""], ["ngFor", "", 3, "ngForOf"], [3, "ngClass"], ["matInput", "", "type", "text", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "class", "clear-button", "aria-label", "Clear", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", "color", "warn", 1, "clear-button", 3, "click"], ["svgIcon", "close"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "sort-alpha", 3, "matTooltip", "click"], ["color", "primary", "svgIcon", "sort-alphabetical-variant"], ["color", "warn", "svgIcon", "sort-variant-remove"], ["icon", "plus", 1, "add-context-button", 3, "iconColor", "store", "withIcon", "withTitle", "horizontal", "mode"], ["mat-icon-button", "", "matTooltipShowDelay", "500", 1, "users-filter", 3, "matTooltip", "matMenuTriggerFor"], ["color", "primary", "svgIcon", "filter-menu"], [1, "mat-menu-item", 3, "checked", "indeterminate", "click", "change"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 4, "ngIf"], ["subAccountMenu", "matMenu"], ["class", "mat-menu-item", 3, "checked", "click", "change", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [3, "title", "collapsed", "toggle", 4, "ngIf"], [4, "ngIf"], [3, "title", "collapsed", "toggle"], ["igoListItem", "", "color", "accent", 3, "selected", "context", "default", "edit", "delete", "clone", "save", "hide", "show", "favorite", "manageTools", "managePermissions", "select", "unselect"], ["igoListItem", "", "color", "accent", 3, "selected", "context", "default", "select", "unselect"]], template: function ContextListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "igo-list", 0);
                i0__namespace.ɵɵtemplate(1, ContextListComponent_mat_form_field_1_Template, 4, 6, "mat-form-field", 1);
                i0__namespace.ɵɵtemplate(2, ContextListComponent_button_2_Template, 3, 3, "button", 2);
                i0__namespace.ɵɵtemplate(3, ContextListComponent_button_3_Template, 3, 3, "button", 2);
                i0__namespace.ɵɵtemplate(4, ContextListComponent_igo_actionbar_4_Template, 1, 6, "igo-actionbar", 3);
                i0__namespace.ɵɵtemplate(5, ContextListComponent_button_5_Template, 3, 4, "button", 4);
                i0__namespace.ɵɵelementStart(6, "mat-menu", null, 5);
                i0__namespace.ɵɵtemplate(8, ContextListComponent_ng_container_8_Template, 8, 5, "ng-container", 6);
                i0__namespace.ɵɵelementStart(9, "span", 7);
                i0__namespace.ɵɵelementStart(10, "mat-checkbox", 8);
                i0__namespace.ɵɵlistener("click", function ContextListComponent_Template_mat_checkbox_click_10_listener($event) { return $event.stopPropagation(); })("change", function ContextListComponent_Template_mat_checkbox_change_10_listener() { return ctx.showHiddenContexts.emit(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 9);
                i0__namespace.ɵɵtext(12);
                i0__namespace.ɵɵpipe(13, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(14, ContextListComponent_ng_template_14_Template, 2, 2, "ng-template", 10);
                i0__namespace.ɵɵpipe(15, "keyvalue");
                i0__namespace.ɵɵpipe(16, "async");
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("navigation", true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.showFilter());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.sortedAlpha);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.sortedAlpha);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.configService.getConfig("context"));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.auth.authenticated && ctx.configService.getConfig("context"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.users);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("checked", ctx.showHidden);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(13, 10, "igo.context.contextManager.showHidden"), " ");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(15, 12, i0__namespace.ɵɵpipeBind1(16, 14, ctx.contexts$)));
            }
        }, directives: [i5__namespace$1.ListComponent, i7__namespace.NgIf, i7__namespace$1.MatMenu, i7__namespace.NgForOf, i8__namespace.MatCheckbox, i7__namespace$1.MatMenuItem, i3__namespace$1.MatFormField, i7__namespace.NgClass, i3__namespace$2.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.NgControlStatus, i4__namespace.NgModel, i5__namespace.MatButton, i3__namespace$1.MatSuffix, i9__namespace.MatIcon, i6__namespace$2.MatTooltip, i5__namespace$1.ActionbarComponent, i7__namespace$1.MatMenuTrigger, i5__namespace$1.CollapsibleComponent, ContextItemComponent, i5__namespace$1.ListItemDirective], pipes: [i6__namespace$1.TranslatePipe, i5__namespace$1.KeyValuePipe, i7__namespace.AsyncPipe], styles: [".context-filter-max-width[_ngcontent-%COMP%]{width:calc(100% - 100px);margin:5px;padding-left:6px}.context-filter-min-width[_ngcontent-%COMP%]{width:calc(100% - 135px);margin:5px;padding-left:6px}.clear-button[_ngcontent-%COMP%]{padding-right:5px}mat-form-field[_ngcontent-%COMP%]{height:40px}.profilsMenu[_ngcontent-%COMP%]{display:flex}.profilsMenu[_ngcontent-%COMP%] > mat-checkbox[_ngcontent-%COMP%]{width:8px}.add-context-button[_ngcontent-%COMP%]{margin:0;width:40px;display:inline-flex;overflow:hidden}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-list',
                        templateUrl: './context-list.component.html',
                        styleUrls: ['./context-list.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0__namespace.ChangeDetectorRef }, { type: ContextService }, { type: i3__namespace.ConfigService }, { type: i2__namespace.AuthService }, { type: i1__namespace$2.MatDialog }, { type: i3__namespace.LanguageService }, { type: i3__namespace.StorageService }]; }, { contexts: [{
                    type: i0.Input
                }], selectedContext: [{
                    type: i0.Input
                }], map: [{
                    type: i0.Input
                }], defaultContextId: [{
                    type: i0.Input
                }], select: [{
                    type: i0.Output
                }], unselect: [{
                    type: i0.Output
                }], edit: [{
                    type: i0.Output
                }], delete: [{
                    type: i0.Output
                }], save: [{
                    type: i0.Output
                }], clone: [{
                    type: i0.Output
                }], create: [{
                    type: i0.Output
                }], hide: [{
                    type: i0.Output
                }], show: [{
                    type: i0.Output
                }], showHiddenContexts: [{
                    type: i0.Output
                }], favorite: [{
                    type: i0.Output
                }], managePermissions: [{
                    type: i0.Output
                }], manageTools: [{
                    type: i0.Output
                }], filterPermissionsChanged: [{
                    type: i0.Output
                }], term: [{
                    type: i0.Input
                }] });
    })();

    var ContextListBindingDirective = /** @class */ (function () {
        function ContextListBindingDirective(component, contextService, mapService, languageService, confirmDialogService, messageService, auth, storageService) {
            this.contextService = contextService;
            this.mapService = mapService;
            this.languageService = languageService;
            this.confirmDialogService = confirmDialogService;
            this.messageService = messageService;
            this.auth = auth;
            this.storageService = storageService;
            this.component = component;
        }
        ContextListBindingDirective.prototype.onSelect = function (context) {
            this.contextService.loadContext(context.uri);
        };
        ContextListBindingDirective.prototype.onEdit = function (context) {
            this.contextService.loadEditedContext(context.uri);
        };
        ContextListBindingDirective.prototype.onSave = function (context) {
            var _this = this;
            var map = this.mapService.getMap();
            var contextFromMap = this.contextService.getContextFromMap(map);
            var msgSuccess = function () {
                var translate = _this.languageService.translate;
                var message = translate.instant('igo.context.contextManager.dialog.saveMsg', {
                    value: context.title
                });
                var title = translate.instant('igo.context.contextManager.dialog.saveTitle');
                _this.messageService.success(message, title);
            };
            if (context.imported) {
                contextFromMap.title = context.title;
                this.contextService.delete(context.id, true);
                this.contextService.create(contextFromMap).subscribe(function (contextCreated) {
                    _this.contextService.loadContext(contextCreated.uri);
                    msgSuccess();
                });
                return;
            }
            var changes = {
                layers: contextFromMap.layers,
                map: {
                    view: contextFromMap.map.view
                }
            };
            this.contextService.update(context.id, changes).subscribe(function () {
                msgSuccess();
            });
        };
        ContextListBindingDirective.prototype.onFavorite = function (context) {
            var _this = this;
            this.contextService.setDefault(context.id).subscribe(function () {
                _this.contextService.defaultContextId$.next(context.id);
                var translate = _this.languageService.translate;
                var message = translate.instant('igo.context.contextManager.dialog.favoriteMsg', {
                    value: context.title
                });
                var title = translate.instant('igo.context.contextManager.dialog.favoriteTitle');
                _this.messageService.success(message, title);
            });
        };
        ContextListBindingDirective.prototype.onManageTools = function (context) {
            this.contextService.loadEditedContext(context.uri);
        };
        ContextListBindingDirective.prototype.onManagePermissions = function (context) {
            this.contextService.loadEditedContext(context.uri);
        };
        ContextListBindingDirective.prototype.onDelete = function (context) {
            var _this = this;
            var translate = this.languageService.translate;
            this.confirmDialogService
                .open(translate.instant('igo.context.contextManager.dialog.confirmDelete'))
                .subscribe(function (confirm) {
                if (confirm) {
                    _this.contextService
                        .delete(context.id, context.imported)
                        .subscribe(function () {
                        var message = translate.instant('igo.context.contextManager.dialog.deleteMsg', {
                            value: context.title
                        });
                        var title = translate.instant('igo.context.contextManager.dialog.deleteTitle');
                        _this.messageService.info(message, title);
                    });
                }
            });
        };
        ContextListBindingDirective.prototype.onClone = function (context) {
            var _this = this;
            var properties = {
                title: context.title + '-copy',
                uri: context.uri + '-copy'
            };
            this.contextService.clone(context.id, properties).subscribe(function () {
                var translate = _this.languageService.translate;
                var message = translate.instant('igo.context.contextManager.dialog.cloneMsg', {
                    value: context.title
                });
                var title = translate.instant('igo.context.contextManager.dialog.cloneTitle');
                _this.messageService.success(message, title);
            });
        };
        ContextListBindingDirective.prototype.onCreate = function (opts) {
            var _this = this;
            var title = opts.title, empty = opts.empty;
            var context = this.contextService.getContextFromMap(this.component.map, empty);
            context.title = title;
            this.contextService.create(context).subscribe(function () {
                var translate = _this.languageService.translate;
                var titleD = translate.instant('igo.context.bookmarkButton.dialog.createTitle');
                var message = translate.instant('igo.context.bookmarkButton.dialog.createMsg', {
                    value: context.title
                });
                _this.messageService.success(message, titleD);
                _this.contextService.loadContext(context.uri);
            });
        };
        ContextListBindingDirective.prototype.loadContexts = function () {
            var e_1, _a;
            var permissions = ['none'];
            try {
                for (var _b = __values(this.component.permissions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    if (p.checked === true || p.indeterminate === true) {
                        permissions.push(p.name);
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
            this.component.showHidden
                ? this.contextService.loadContexts(permissions, true)
                : this.contextService.loadContexts(permissions, false);
        };
        ContextListBindingDirective.prototype.showHiddenContexts = function () {
            this.component.showHidden = !this.component.showHidden;
            this.storageService.set('contexts.showHidden', this.component.showHidden);
            this.loadContexts();
        };
        ContextListBindingDirective.prototype.onShowContext = function (context) {
            this.contextService.showContext(context.id).subscribe();
        };
        ContextListBindingDirective.prototype.onHideContext = function (context) {
            this.contextService.hideContext(context.id).subscribe();
        };
        ContextListBindingDirective.prototype.ngOnInit = function () {
            var _this = this;
            // Override input contexts
            this.component.contexts = { ours: [] };
            this.component.showHidden = this.storageService.get('contexts.showHidden');
            this.contexts$$ = this.contextService.contexts$.subscribe(function (contexts) { return _this.handleContextsChange(contexts); });
            this.defaultContextId$$ = this.contextService.defaultContextId$.subscribe(function (id) {
                _this.component.defaultContextId = id;
            });
            // See feature-list.component for an explanation about the debounce time
            this.selectedContext$$ = this.contextService.context$
                .pipe(operators.debounceTime(100))
                .subscribe(function (context) { return (_this.component.selectedContext = context); });
            this.auth.authenticate$.subscribe(function (authenticate) {
                if (authenticate) {
                    _this.contextService.getProfilByUser().subscribe(function (profils) {
                        var e_2, _a, e_3, _b;
                        _this.component.users = profils;
                        _this.component.permissions = [];
                        var profilsAcc = _this.component.users.reduce(function (acc, cur) {
                            acc = acc.concat(cur);
                            acc = cur.childs ? acc.concat(cur.childs) : acc;
                            return acc;
                        }, []);
                        try {
                            for (var profilsAcc_1 = __values(profilsAcc), profilsAcc_1_1 = profilsAcc_1.next(); !profilsAcc_1_1.done; profilsAcc_1_1 = profilsAcc_1.next()) {
                                var user = profilsAcc_1_1.value;
                                var permission = {
                                    name: user.name,
                                    checked: _this.storageService.get('contexts.permissions.' + user.name)
                                };
                                if (permission.checked === null) {
                                    permission.checked = true;
                                }
                                _this.component.permissions.push(permission);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (profilsAcc_1_1 && !profilsAcc_1_1.done && (_a = profilsAcc_1.return)) _a.call(profilsAcc_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        var permissions = ['none'];
                        try {
                            for (var _c = __values(_this.component.permissions), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var p = _d.value;
                                if (p.checked === true || p.indeterminate === true) {
                                    permissions.push(p.name);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        _this.component.showHidden
                            ? _this.contextService.loadContexts(permissions, true)
                            : _this.contextService.loadContexts(permissions, false);
                    });
                }
            });
        };
        ContextListBindingDirective.prototype.ngOnDestroy = function () {
            this.contexts$$.unsubscribe();
            this.selectedContext$$.unsubscribe();
            this.defaultContextId$$.unsubscribe();
        };
        ContextListBindingDirective.prototype.handleContextsChange = function (contexts) {
            this.component.contexts = contexts;
        };
        return ContextListBindingDirective;
    }());
    ContextListBindingDirective.ɵfac = function ContextListBindingDirective_Factory(t) { return new (t || ContextListBindingDirective)(i0__namespace.ɵɵdirectiveInject(ContextListComponent, 2), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i1__namespace$1.MapService), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i5__namespace$1.ConfirmDialogService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(i3__namespace.StorageService)); };
    ContextListBindingDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ContextListBindingDirective, selectors: [["", "igoContextListBinding", ""]], hostBindings: function ContextListBindingDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("select", function ContextListBindingDirective_select_HostBindingHandler($event) { return ctx.onSelect($event); })("edit", function ContextListBindingDirective_edit_HostBindingHandler($event) { return ctx.onEdit($event); })("save", function ContextListBindingDirective_save_HostBindingHandler($event) { return ctx.onSave($event); })("favorite", function ContextListBindingDirective_favorite_HostBindingHandler($event) { return ctx.onFavorite($event); })("manageTools", function ContextListBindingDirective_manageTools_HostBindingHandler($event) { return ctx.onManageTools($event); })("managePermissions", function ContextListBindingDirective_managePermissions_HostBindingHandler($event) { return ctx.onManagePermissions($event); })("delete", function ContextListBindingDirective_delete_HostBindingHandler($event) { return ctx.onDelete($event); })("clone", function ContextListBindingDirective_clone_HostBindingHandler($event) { return ctx.onClone($event); })("create", function ContextListBindingDirective_create_HostBindingHandler($event) { return ctx.onCreate($event); })("filterPermissionsChanged", function ContextListBindingDirective_filterPermissionsChanged_HostBindingHandler() { return ctx.loadContexts(); })("showHiddenContexts", function ContextListBindingDirective_showHiddenContexts_HostBindingHandler() { return ctx.showHiddenContexts(); })("show", function ContextListBindingDirective_show_HostBindingHandler($event) { return ctx.onShowContext($event); })("hide", function ContextListBindingDirective_hide_HostBindingHandler($event) { return ctx.onHideContext($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextListBindingDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoContextListBinding]'
                    }]
            }], function () {
            return [{ type: ContextListComponent, decorators: [{
                            type: i0.Self
                        }] }, { type: ContextService }, { type: i1__namespace$1.MapService }, { type: i3__namespace.LanguageService }, { type: i5__namespace$1.ConfirmDialogService }, { type: i3__namespace.MessageService }, { type: i2__namespace.AuthService }, { type: i3__namespace.StorageService }];
        }, { onSelect: [{
                    type: i0.HostListener,
                    args: ['select', ['$event']]
                }], onEdit: [{
                    type: i0.HostListener,
                    args: ['edit', ['$event']]
                }], onSave: [{
                    type: i0.HostListener,
                    args: ['save', ['$event']]
                }], onFavorite: [{
                    type: i0.HostListener,
                    args: ['favorite', ['$event']]
                }], onManageTools: [{
                    type: i0.HostListener,
                    args: ['manageTools', ['$event']]
                }], onManagePermissions: [{
                    type: i0.HostListener,
                    args: ['managePermissions', ['$event']]
                }], onDelete: [{
                    type: i0.HostListener,
                    args: ['delete', ['$event']]
                }], onClone: [{
                    type: i0.HostListener,
                    args: ['clone', ['$event']]
                }], onCreate: [{
                    type: i0.HostListener,
                    args: ['create', ['$event']]
                }], loadContexts: [{
                    type: i0.HostListener,
                    args: ['filterPermissionsChanged']
                }], showHiddenContexts: [{
                    type: i0.HostListener,
                    args: ['showHiddenContexts']
                }], onShowContext: [{
                    type: i0.HostListener,
                    args: ['show', ['$event']]
                }], onHideContext: [{
                    type: i0.HostListener,
                    args: ['hide', ['$event']]
                }] });
    })();

    function ContextFormComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("", ctx_r0.prefix, "-");
        }
    }
    var ContextFormComponent = /** @class */ (function () {
        function ContextFormComponent(formBuilder, languageService, messageService) {
            this.formBuilder = formBuilder;
            this.languageService = languageService;
            this.messageService = messageService;
            this._disabled = false;
            // TODO: replace any by ContextOptions or Context
            this.submitForm = new i0.EventEmitter();
            this.clone = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
        }
        Object.defineProperty(ContextFormComponent.prototype, "btnSubmitText", {
            get: function () {
                return this._btnSubmitText;
            },
            set: function (value) {
                this._btnSubmitText = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextFormComponent.prototype, "context", {
            get: function () {
                return this._context;
            },
            set: function (value) {
                this._context = value;
                this.buildForm();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextFormComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value;
            },
            enumerable: false,
            configurable: true
        });
        ContextFormComponent.prototype.ngOnInit = function () {
            this.buildForm();
        };
        ContextFormComponent.prototype.handleFormSubmit = function (value) {
            var inputs = Object.assign({}, value);
            inputs = utils.ObjectUtils.removeNull(inputs);
            inputs.uri = inputs.uri.replace(' ', '');
            if (inputs.uri) {
                inputs.uri = this.prefix + '-' + inputs.uri;
            }
            else {
                inputs.uri = this.prefix;
            }
            this.submitForm.emit(inputs);
        };
        ContextFormComponent.prototype.copyTextToClipboard = function () {
            var text = this.prefix + '-' + this.form.value.uri.replace(' ', '');
            var successful = utils.Clipboard.copy(text);
            if (successful) {
                var translate = this.languageService.translate;
                var title = translate.instant('igo.context.contextManager.dialog.copyTitle');
                var msg = translate.instant('igo.context.contextManager.dialog.copyMsg');
                this.messageService.success(msg, title);
            }
        };
        ContextFormComponent.prototype.buildForm = function () {
            var context = this.context || {};
            var uriSplit = context.uri.split('-');
            this.prefix = uriSplit.shift();
            var uri = uriSplit.join('-');
            this.form = this.formBuilder.group({
                title: [context.title],
                uri: [uri || ' ']
            });
        };
        return ContextFormComponent;
    }());
    ContextFormComponent.ɵfac = function ContextFormComponent_Factory(t) { return new (t || ContextFormComponent)(i0__namespace.ɵɵdirectiveInject(i4__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService)); };
    ContextFormComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ContextFormComponent, selectors: [["igo-context-form"]], inputs: { btnSubmitText: "btnSubmitText", context: "context", disabled: "disabled" }, outputs: { submitForm: "submitForm", clone: "clone", delete: "delete" }, decls: 19, vars: 18, consts: [[1, "igo-form", 3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", "maxlength", "128", "formControlName", "title", 3, "placeholder"], ["id", "uriInput", 1, "full-width"], ["class", "prefix", 4, "ngIf"], [1, "fieldWrapper"], ["matInput", "", "maxlength", "64", "floatLabel", "always", "formControlName", "uri", 3, "placeholder"], ["id", "copyButton", "type", "button", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "content-copy"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "prefix"]], template: function ContextFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵlistener("ngSubmit", function ContextFormComponent_Template_form_ngSubmit_0_listener() { return ctx.handleFormSubmit(ctx.form.value); });
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelement(2, "input", 2);
                i0__namespace.ɵɵpipe(3, "translate");
                i0__namespace.ɵɵelementStart(4, "mat-error");
                i0__namespace.ɵɵtext(5);
                i0__namespace.ɵɵpipe(6, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-form-field", 3);
                i0__namespace.ɵɵtemplate(8, ContextFormComponent_span_8_Template, 2, 1, "span", 4);
                i0__namespace.ɵɵelementStart(9, "span", 5);
                i0__namespace.ɵɵelement(10, "input", 6);
                i0__namespace.ɵɵpipe(11, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 7);
                i0__namespace.ɵɵlistener("click", function ContextFormComponent_Template_button_click_12_listener() { return ctx.copyTextToClipboard(); });
                i0__namespace.ɵɵpipe(13, "translate");
                i0__namespace.ɵɵelement(14, "mat-icon", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "div", 9);
                i0__namespace.ɵɵelementStart(16, "button", 10);
                i0__namespace.ɵɵtext(17);
                i0__namespace.ɵɵpipe(18, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.form);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(3, 8, "igo.context.contextManager.form.title"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(6, 10, "igo.context.contextManager.form.titleRequired"), " ");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.prefix);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(11, 12, "igo.context.contextManager.form.uri"));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(13, 14, "igo.context.contextManager.form.copy"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("disabled", !ctx.form.valid || ctx.disabled);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(18, 16, "igo.context.contextManager.form.edit"), " ");
            }
        }, directives: [i4__namespace.ɵNgNoValidate, i4__namespace.NgControlStatusGroup, i4__namespace.FormGroupDirective, i3__namespace$1.MatFormField, i3__namespace$2.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.RequiredValidator, i4__namespace.MaxLengthValidator, i4__namespace.NgControlStatus, i4__namespace.FormControlName, i3__namespace$1.MatError, i7__namespace.NgIf, i5__namespace.MatButton, i6__namespace$2.MatTooltip, i9__namespace.MatIcon], pipes: [i6__namespace$1.TranslatePipe], styles: ["form[_ngcontent-%COMP%]{margin:10px}.full-width[_ngcontent-%COMP%]{width:100%}#uriInput[_ngcontent-%COMP%]   .fieldWrapper[_ngcontent-%COMP%]{display:block;overflow:hidden}#uriInput[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{float:left}#copyButton[_ngcontent-%COMP%]{width:24px;float:right;position:relative;top:-58px;left:5px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-form',
                        templateUrl: './context-form.component.html',
                        styleUrls: ['./context-form.component.scss']
                    }]
            }], function () { return [{ type: i4__namespace.FormBuilder }, { type: i3__namespace.LanguageService }, { type: i3__namespace.MessageService }]; }, { btnSubmitText: [{
                    type: i0.Input
                }], context: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], submitForm: [{
                    type: i0.Output
                }], clone: [{
                    type: i0.Output
                }], delete: [{
                    type: i0.Output
                }] });
    })();

    function ContextEditComponent_igo_context_form_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-context-form", 1);
            i0__namespace.ɵɵlistener("submitForm", function ContextEditComponent_igo_context_form_0_Template_igo_context_form_submitForm_0_listener($event) { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.submitForm.emit($event); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("btnSubmitText", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.contextManager.save"))("context", ctx_r0.context);
        }
    }
    var ContextEditComponent = /** @class */ (function () {
        function ContextEditComponent(cd) {
            this.cd = cd;
            this.submitForm = new i0.EventEmitter();
        }
        Object.defineProperty(ContextEditComponent.prototype, "context", {
            get: function () {
                return this._context;
            },
            set: function (value) {
                this._context = value;
                this.refresh();
            },
            enumerable: false,
            configurable: true
        });
        ContextEditComponent.prototype.refresh = function () {
            this.cd.detectChanges();
        };
        return ContextEditComponent;
    }());
    ContextEditComponent.ɵfac = function ContextEditComponent_Factory(t) { return new (t || ContextEditComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    ContextEditComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ContextEditComponent, selectors: [["igo-context-edit"]], inputs: { context: "context" }, outputs: { submitForm: "submitForm" }, decls: 1, vars: 1, consts: [[3, "btnSubmitText", "context", "submitForm", 4, "ngIf"], [3, "btnSubmitText", "context", "submitForm"]], template: function ContextEditComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ContextEditComponent_igo_context_form_0_Template, 2, 4, "igo-context-form", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.context);
            }
        }, directives: [i7__namespace.NgIf, ContextFormComponent], pipes: [i6__namespace$1.TranslatePipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextEditComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-edit',
                        templateUrl: './context-edit.component.html'
                    }]
            }], function () { return [{ type: i0__namespace.ChangeDetectorRef }]; }, { context: [{
                    type: i0.Input
                }], submitForm: [{
                    type: i0.Output
                }] });
    })();

    var ContextEditBindingDirective = /** @class */ (function () {
        function ContextEditBindingDirective(component, contextService, messageService, languageService) {
            this.contextService = contextService;
            this.messageService = messageService;
            this.languageService = languageService;
            this.submitSuccessed = new i0.EventEmitter();
            this.component = component;
        }
        ContextEditBindingDirective.prototype.onEdit = function (context) {
            var _this = this;
            var id = this.component.context.id;
            this.contextService.update(id, context).subscribe(function () {
                var translate = _this.languageService.translate;
                var message = translate.instant('igo.context.contextManager.dialog.saveMsg', {
                    value: context.title || _this.component.context.title
                });
                var title = translate.instant('igo.context.contextManager.dialog.saveTitle');
                _this.messageService.success(message, title);
                _this.contextService.setEditedContext(undefined);
                _this.submitSuccessed.emit(context);
            });
        };
        ContextEditBindingDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.editedContext$$ = this.contextService.editedContext$.subscribe(function (context) { return _this.handleEditedContextChange(context); });
        };
        ContextEditBindingDirective.prototype.ngOnDestroy = function () {
            this.editedContext$$.unsubscribe();
        };
        ContextEditBindingDirective.prototype.handleEditedContextChange = function (context) {
            this.component.context = context;
        };
        return ContextEditBindingDirective;
    }());
    ContextEditBindingDirective.ɵfac = function ContextEditBindingDirective_Factory(t) { return new (t || ContextEditBindingDirective)(i0__namespace.ɵɵdirectiveInject(ContextEditComponent, 2), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService)); };
    ContextEditBindingDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ContextEditBindingDirective, selectors: [["", "igoContextEditBinding", ""]], hostBindings: function ContextEditBindingDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("submitForm", function ContextEditBindingDirective_submitForm_HostBindingHandler($event) { return ctx.onEdit($event); });
            }
        }, outputs: { submitSuccessed: "submitSuccessed" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextEditBindingDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoContextEditBinding]'
                    }]
            }], function () {
            return [{ type: ContextEditComponent, decorators: [{
                            type: i0.Self
                        }] }, { type: ContextService }, { type: i3__namespace.MessageService }, { type: i3__namespace.LanguageService }];
        }, { submitSuccessed: [{
                    type: i0.Output
                }], onEdit: [{
                    type: i0.HostListener,
                    args: ['submitForm', ['$event']]
                }] });
    })();

    function ContextPermissionsComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "h4");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "p");
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(3, 2, "igo.context.permission.readOnlyTitle"));
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(6, 4, "igo.context.permission.readOnlyMsg"));
        }
    }
    function ContextPermissionsComponent_div_0_div_2_mat_radio_button_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-radio-button", 8);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.permission.scope.public"), " ");
        }
    }
    function ContextPermissionsComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "mat-radio-group", 4);
            i0__namespace.ɵɵlistener("ngModelChange", function ContextPermissionsComponent_div_0_div_2_Template_mat_radio_group_ngModelChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(2); return ctx_r6.context.scope = $event; })("change", function ContextPermissionsComponent_div_0_div_2_Template_mat_radio_group_change_1_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r8 = i0__namespace.ɵɵnextContext(2); return ctx_r8.scopeChanged.emit(ctx_r8.context); });
            i0__namespace.ɵɵelementStart(2, "mat-radio-button", 5);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "mat-radio-button", 6);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵpipe(7, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(8, ContextPermissionsComponent_div_0_div_2_mat_radio_button_8_Template, 3, 3, "mat-radio-button", 7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r2.context.scope);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(4, 4, "igo.context.permission.scope.private"), " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(7, 6, "igo.context.permission.scope.shared"), " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.authService.isAdmin);
        }
    }
    function ContextPermissionsComponent_div_0_form_3_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 20);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelement(2, "br");
            i0__namespace.ɵɵelementStart(3, "small", 21);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var profil_r11 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", profil_r11);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", profil_r11.title, "");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(profil_r11.name);
        }
    }
    function ContextPermissionsComponent_div_0_form_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "form", 9);
            i0__namespace.ɵɵlistener("ngSubmit", function ContextPermissionsComponent_div_0_form_3_Template_form_ngSubmit_0_listener() { i0__namespace.ɵɵrestoreView(_r13_1); var ctx_r12 = i0__namespace.ɵɵnextContext(2); return ctx_r12.handleFormSubmit(ctx_r12.form.value); });
            i0__namespace.ɵɵelementStart(1, "mat-form-field", 10);
            i0__namespace.ɵɵelement(2, "input", 11);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementStart(4, "mat-autocomplete", 12, 13);
            i0__namespace.ɵɵlistener("optionSelected", function ContextPermissionsComponent_div_0_form_3_Template_mat_autocomplete_optionSelected_4_listener($event) { i0__namespace.ɵɵrestoreView(_r13_1); var ctx_r14 = i0__namespace.ɵɵnextContext(2); return ctx_r14.onProfilSelected($event.option.value); });
            i0__namespace.ɵɵtemplate(6, ContextPermissionsComponent_div_0_form_3_mat_option_6_Template, 5, 3, "mat-option", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "mat-error");
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵpipe(9, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "mat-radio-group", 15);
            i0__namespace.ɵɵelementStart(11, "mat-radio-button", 16);
            i0__namespace.ɵɵtext(12);
            i0__namespace.ɵɵpipe(13, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(14, "mat-radio-button", 17);
            i0__namespace.ɵɵtext(15);
            i0__namespace.ɵɵpipe(16, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(17, "div", 18);
            i0__namespace.ɵɵelementStart(18, "button", 19);
            i0__namespace.ɵɵtext(19);
            i0__namespace.ɵɵpipe(20, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r9 = i0__namespace.ɵɵreference(5);
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("formGroup", ctx_r3.form);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(3, 11, "igo.context.permission.user"))("formControl", ctx_r3.formControl)("matAutocomplete", _r9);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("displayWith", ctx_r3.displayFn);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r3.profils);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(9, 13, "igo.context.permission.profilRequired"), " ");
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(13, 15, "igo.context.permission.read"), " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(16, 17, "igo.context.permission.write"), " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("disabled", !ctx_r3.form.valid);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(20, 19, "igo.context.permission.addBtn"), " ");
        }
    }
    function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 29);
            i0__namespace.ɵɵlistener("click", function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r23_1); var permission_r19 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r21 = i0__namespace.ɵɵnextContext(5); return ctx_r21.removePermission.emit(permission_r19); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 30);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.permission.delete"));
        }
    }
    function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list-item");
            i0__namespace.ɵɵelement(1, "mat-icon", 25);
            i0__namespace.ɵɵelementStart(2, "h4", 26);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementStart(4, "small", 21);
            i0__namespace.ɵɵtext(5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "div", 27);
            i0__namespace.ɵɵtemplate(7, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_button_7_Template, 3, 3, "button", 28);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var permission_r19 = ctx.$implicit;
            var ctx_r18 = i0__namespace.ɵɵnextContext(5);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("", permission_r19.profilTitle, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(permission_r19.profil);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r18.canWrite || permission_r19.profil === ctx_r18.authService.decodeToken().user.sourceId);
        }
    }
    function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "igo-collapsible", 24);
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵtemplate(2, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_ng_template_2_Template, 8, 3, "ng-template", 22);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var groupPermissions_r16 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("title", i0__namespace.ɵɵpipeBind1(1, 2, "igo.context.permission." + groupPermissions_r16.key));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", groupPermissions_r16.value);
        }
    }
    function ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_igo_collapsible_0_Template, 3, 4, "igo-collapsible", 23);
        }
        if (rf & 2) {
            var groupPermissions_r16 = ctx.$implicit;
            i0__namespace.ɵɵproperty("ngIf", groupPermissions_r16.value.length);
        }
    }
    function ContextPermissionsComponent_div_0_igo_list_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "igo-list");
            i0__namespace.ɵɵtemplate(1, ContextPermissionsComponent_div_0_igo_list_4_ng_template_1_Template, 1, 1, "ng-template", 22);
            i0__namespace.ɵɵpipe(2, "keyvalue");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(2, 1, ctx_r4.permissions));
        }
    }
    function ContextPermissionsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, ContextPermissionsComponent_div_0_div_1_Template, 7, 6, "div", 1);
            i0__namespace.ɵɵtemplate(2, ContextPermissionsComponent_div_0_div_2_Template, 9, 8, "div", 1);
            i0__namespace.ɵɵtemplate(3, ContextPermissionsComponent_div_0_form_3_Template, 21, 21, "form", 2);
            i0__namespace.ɵɵtemplate(4, ContextPermissionsComponent_div_0_igo_list_4_Template, 3, 3, "igo-list", 0);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r0.canWrite);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.canWrite);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.context.scope !== "private" && ctx_r0.canWrite);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.permissions && ctx_r0.context.scope !== "private");
        }
    }
    var ContextPermissionsComponent = /** @class */ (function () {
        function ContextPermissionsComponent(formBuilder, cd, http, authService, config) {
            this.formBuilder = formBuilder;
            this.cd = cd;
            this.http = http;
            this.authService = authService;
            this.config = config;
            this._profils = [];
            this.formControl = new i4.FormControl();
            this.addPermission = new i0.EventEmitter();
            this.removePermission = new i0.EventEmitter();
            this.scopeChanged = new i0.EventEmitter();
        }
        Object.defineProperty(ContextPermissionsComponent.prototype, "context", {
            get: function () {
                return this._context;
            },
            set: function (value) {
                this._context = value;
                this.cd.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextPermissionsComponent.prototype, "permissions", {
            get: function () {
                return this._permissions;
            },
            set: function (value) {
                this._permissions = value;
                this.cd.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextPermissionsComponent.prototype, "profils", {
            get: function () {
                return this._profils;
            },
            set: function (value) {
                this._profils = value;
                this.cd.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ContextPermissionsComponent.prototype, "canWrite", {
            get: function () {
                return this.context.permission === exports.TypePermission[exports.TypePermission.write];
            },
            enumerable: false,
            configurable: true
        });
        ContextPermissionsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.buildForm();
            this.baseUrlProfils = this.config.getConfig('context.url') + '/profils-users?';
            this.formValueChanges$$ = this.formControl.valueChanges.subscribe(function (value) {
                if (value.length) {
                    _this.http.get(_this.baseUrlProfils + 'q=' + value).subscribe(function (profils) {
                        _this.profils = profils;
                    });
                    _this.profils.filter(function (profil) {
                        var filterNormalized = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        var profilTitleNormalized = profil.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        var profilNameNormalized = profil.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        var profilNormalized = profilNameNormalized + profilTitleNormalized;
                        return profilNormalized.includes(filterNormalized);
                    });
                }
                else {
                    _this.profils = [];
                }
            });
        };
        ContextPermissionsComponent.prototype.displayFn = function (profil) {
            return profil ? profil.title : undefined;
        };
        ContextPermissionsComponent.prototype.handleFormSubmit = function (value) {
            this.addPermission.emit(value);
        };
        ContextPermissionsComponent.prototype.buildForm = function () {
            this.form = this.formBuilder.group({
                profil: [],
                typePermission: ['read']
            });
        };
        ContextPermissionsComponent.prototype.onProfilSelected = function (value) {
            this.form.setValue({
                profil: value.name,
                typePermission: this.form.value.typePermission
            });
        };
        return ContextPermissionsComponent;
    }());
    ContextPermissionsComponent.ɵfac = function ContextPermissionsComponent_Factory(t) { return new (t || ContextPermissionsComponent)(i0__namespace.ɵɵdirectiveInject(i4__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i1__namespace.HttpClient), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(i3__namespace.ConfigService)); };
    ContextPermissionsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ContextPermissionsComponent, selectors: [["igo-context-permissions"]], inputs: { context: "context", permissions: "permissions" }, outputs: { addPermission: "addPermission", removePermission: "removePermission", scopeChanged: "scopeChanged" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "scopeForm", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "scopeForm"], [3, "ngModel", "ngModelChange", "change"], ["value", "private"], ["value", "protected"], ["value", "public", 4, "ngIf"], ["value", "public"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "required", "", 3, "placeholder", "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "typePermission"], ["value", "read"], ["value", "write"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [3, "value"], [1, "mat-typography"], ["ngFor", "", 3, "ngForOf"], [3, "title", 4, "ngIf"], [3, "title"], ["mat-list-avatar", "", "svgIcon", "account-outline"], ["mat-line", ""], ["igoStopPropagation", "", 1, "igo-actions-container"], ["mat-icon-button", "", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltipShowDelay", "500", "color", "warn", 3, "matTooltip", "click"], ["svgIcon", "delete"]], template: function ContextPermissionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ContextPermissionsComponent_div_0_Template, 5, 4, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.context);
            }
        }, directives: [i7__namespace.NgIf, i6__namespace$3.MatRadioGroup, i4__namespace.NgControlStatus, i4__namespace.NgModel, i6__namespace$3.MatRadioButton, i4__namespace.ɵNgNoValidate, i4__namespace.NgControlStatusGroup, i4__namespace.FormGroupDirective, i3__namespace$1.MatFormField, i3__namespace$2.MatInput, i4__namespace.DefaultValueAccessor, i9__namespace$1.MatAutocompleteTrigger, i4__namespace.RequiredValidator, i4__namespace.FormControlDirective, i9__namespace$1.MatAutocomplete, i7__namespace.NgForOf, i3__namespace$1.MatError, i4__namespace.FormControlName, i5__namespace.MatButton, i11__namespace.MatOption, i5__namespace$1.ListComponent, i5__namespace$1.CollapsibleComponent, i3__namespace$3.MatListItem, i9__namespace.MatIcon, i3__namespace$3.MatListAvatarCssMatStyler, i11__namespace.MatLine, i5__namespace$1.StopPropagationDirective, i6__namespace$2.MatTooltip], pipes: [i6__namespace$1.TranslatePipe, i5__namespace$1.KeyValuePipe], styles: ["[_nghost-%COMP%]{margin:10px}.full-width[_ngcontent-%COMP%]{width:100%}mat-radio-button[_ngcontent-%COMP%]{padding:14px 14px 14px 0}.scopeForm[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{padding:5px}mat-option[_ngcontent-%COMP%]     .mat-option-text{line-height:normal;line-height:initial}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextPermissionsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-context-permissions',
                        templateUrl: './context-permissions.component.html',
                        styleUrls: ['./context-permissions.component.scss']
                    }]
            }], function () { return [{ type: i4__namespace.FormBuilder }, { type: i0__namespace.ChangeDetectorRef }, { type: i1__namespace.HttpClient }, { type: i2__namespace.AuthService }, { type: i3__namespace.ConfigService }]; }, { context: [{
                    type: i0.Input
                }], permissions: [{
                    type: i0.Input
                }], addPermission: [{
                    type: i0.Output
                }], removePermission: [{
                    type: i0.Output
                }], scopeChanged: [{
                    type: i0.Output
                }] });
    })();

    var ContextPermissionsBindingDirective = /** @class */ (function () {
        function ContextPermissionsBindingDirective(component, contextService, languageService, messageService, cd) {
            this.contextService = contextService;
            this.languageService = languageService;
            this.messageService = messageService;
            this.cd = cd;
            this.component = component;
        }
        ContextPermissionsBindingDirective.prototype.onAddPermission = function (permission) {
            var _this = this;
            var translate = this.languageService.translate;
            if (!permission.profil) {
                var message = translate.instant('igo.context.contextManager.errors.addPermissionEmpty');
                var title = translate.instant('igo.context.contextManager.errors.addPermissionTitle');
                this.messageService.error(message, title);
                return;
            }
            var contextId = this.component.context.id;
            this.contextService
                .addPermissionAssociation(contextId, permission.profil, permission.typePermission)
                .subscribe(function (profils) {
                var e_1, _a;
                try {
                    for (var profils_1 = __values(profils), profils_1_1 = profils_1.next(); !profils_1_1.done; profils_1_1 = profils_1.next()) {
                        var p = profils_1_1.value;
                        _this.component.permissions[permission.typePermission].push(p);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (profils_1_1 && !profils_1_1.done && (_a = profils_1.return)) _a.call(profils_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var profil = permission.profil;
                var message = translate.instant('igo.context.permission.dialog.addMsg', {
                    value: profil
                });
                var title = translate.instant('igo.context.permission.dialog.addTitle');
                _this.messageService.success(message, title);
                _this.cd.detectChanges();
            });
        };
        ContextPermissionsBindingDirective.prototype.onRemovePermission = function (permission) {
            var _this = this;
            var contextId = this.component.context.id;
            this.contextService
                .deletePermissionAssociation(contextId, permission.id)
                .subscribe(function () {
                var index = _this.component.permissions[permission.typePermission].findIndex(function (p) {
                    return p.id === permission.id;
                });
                _this.component.permissions[permission.typePermission].splice(index, 1);
                var profil = permission.profil;
                var translate = _this.languageService.translate;
                var message = translate.instant('igo.context.permission.dialog.deleteMsg', {
                    value: profil
                });
                var title = translate.instant('igo.context.permission.dialog.deleteTitle');
                _this.messageService.success(message, title);
                _this.cd.detectChanges();
            });
        };
        ContextPermissionsBindingDirective.prototype.onScopeChanged = function (context) {
            var _this = this;
            var scope = context.scope;
            this.contextService.update(context.id, { scope: scope }).subscribe(function () {
                var translate = _this.languageService.translate;
                var message = translate.instant('igo.context.permission.dialog.scopeChangedMsg', {
                    value: translate.instant('igo.context.permission.scope.' + scope)
                });
                var title = translate.instant('igo.context.permission.dialog.scopeChangedTitle');
                _this.messageService.success(message, title);
            });
        };
        ContextPermissionsBindingDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.editedContext$$ = this.contextService.editedContext$.subscribe(function (context) { return _this.handleEditedContextChange(context); });
        };
        ContextPermissionsBindingDirective.prototype.ngOnDestroy = function () {
            this.editedContext$$.unsubscribe();
            this.contextService.editedContext$.next(undefined);
        };
        ContextPermissionsBindingDirective.prototype.handleEditedContextChange = function (context) {
            var _this = this;
            this.component.context = context;
            if (context) {
                this.contextService
                    .getPermissions(context.id)
                    .subscribe(function (permissionsArray) {
                    permissionsArray = permissionsArray || [];
                    var permissions = {
                        read: permissionsArray.filter(function (p) {
                            return p.typePermission.toString() === 'read';
                        }),
                        write: permissionsArray.filter(function (p) {
                            return p.typePermission.toString() === 'write';
                        })
                    };
                    return (_this.component.permissions = permissions);
                });
            }
        };
        return ContextPermissionsBindingDirective;
    }());
    ContextPermissionsBindingDirective.ɵfac = function ContextPermissionsBindingDirective_Factory(t) { return new (t || ContextPermissionsBindingDirective)(i0__namespace.ɵɵdirectiveInject(ContextPermissionsComponent, 2), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    ContextPermissionsBindingDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ContextPermissionsBindingDirective, selectors: [["", "igoContextPermissionsBinding", ""]], hostBindings: function ContextPermissionsBindingDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("addPermission", function ContextPermissionsBindingDirective_addPermission_HostBindingHandler($event) { return ctx.onAddPermission($event); })("removePermission", function ContextPermissionsBindingDirective_removePermission_HostBindingHandler($event) { return ctx.onRemovePermission($event); })("scopeChanged", function ContextPermissionsBindingDirective_scopeChanged_HostBindingHandler($event) { return ctx.onScopeChanged($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextPermissionsBindingDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoContextPermissionsBinding]'
                    }]
            }], function () {
            return [{ type: ContextPermissionsComponent, decorators: [{
                            type: i0.Self
                        }] }, { type: ContextService }, { type: i3__namespace.LanguageService }, { type: i3__namespace.MessageService }, { type: i0__namespace.ChangeDetectorRef }];
        }, { onAddPermission: [{
                    type: i0.HostListener,
                    args: ['addPermission', ['$event']]
                }], onRemovePermission: [{
                    type: i0.HostListener,
                    args: ['removePermission', ['$event']]
                }], onScopeChanged: [{
                    type: i0.HostListener,
                    args: ['scopeChanged', ['$event']]
                }] });
    })();

    var BookmarkButtonComponent = /** @class */ (function () {
        function BookmarkButtonComponent(dialog, contextService, languageService, messageService) {
            this.dialog = dialog;
            this.contextService = contextService;
            this.languageService = languageService;
            this.messageService = messageService;
        }
        Object.defineProperty(BookmarkButtonComponent.prototype, "map", {
            get: function () {
                return this._map;
            },
            set: function (value) {
                this._map = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BookmarkButtonComponent.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        BookmarkButtonComponent.prototype.createContext = function () {
            var _this = this;
            this.dialog
                .open(BookmarkDialogComponent, { disableClose: false })
                .afterClosed()
                .pipe(operators.take(1))
                .subscribe(function (title) {
                if (title) {
                    var context_1 = _this.contextService.getContextFromMap(_this.map);
                    context_1.title = title;
                    _this.contextService.create(context_1).subscribe(function () {
                        var translate = _this.languageService.translate;
                        var titleD = translate.instant('igo.context.bookmarkButton.dialog.createTitle');
                        var message = translate.instant('igo.context.bookmarkButton.dialog.createMsg', {
                            value: context_1.title
                        });
                        _this.messageService.success(message, titleD);
                        _this.contextService.loadContext(context_1.uri);
                    });
                }
            });
        };
        return BookmarkButtonComponent;
    }());
    BookmarkButtonComponent.ɵfac = function BookmarkButtonComponent_Factory(t) { return new (t || BookmarkButtonComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialog), i0__namespace.ɵɵdirectiveInject(ContextService), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService)); };
    BookmarkButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BookmarkButtonComponent, selectors: [["igo-bookmark-button"]], inputs: { map: "map", color: "color" }, decls: 4, vars: 4, consts: [[1, "igo-bookmark-button-container"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "color", "click"], ["svgIcon", "star"]], template: function BookmarkButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("click", function BookmarkButtonComponent_Template_button_click_1_listener() { return ctx.createContext(); });
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelement(3, "mat-icon", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(2, 2, "igo.context.bookmarkButton.create"))("color", ctx.color);
            }
        }, directives: [i5__namespace.MatButton, i6__namespace$2.MatTooltip, i9__namespace.MatIcon], pipes: [i6__namespace$1.TranslatePipe], styles: [".igo-bookmark-button-container[_ngcontent-%COMP%]{width:40px}.igo-bookmark-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-bookmark-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BookmarkButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-bookmark-button',
                        templateUrl: './bookmark-button.component.html',
                        styleUrls: ['./bookmark-button.component.scss']
                    }]
            }], function () { return [{ type: i1__namespace$2.MatDialog }, { type: ContextService }, { type: i3__namespace.LanguageService }, { type: i3__namespace.MessageService }]; }, { map: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }] });
    })();

    var PoiDialogComponent = /** @class */ (function () {
        function PoiDialogComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        return PoiDialogComponent;
    }());
    PoiDialogComponent.ɵfac = function PoiDialogComponent_Factory(t) { return new (t || PoiDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialogRef)); };
    PoiDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PoiDialogComponent, selectors: [["igo-poi-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", ""], ["matInput", "", "required", "", "autocomplete", "off", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", 3, "click"]], template: function PoiDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 1);
                i0__namespace.ɵɵelementStart(4, "mat-form-field");
                i0__namespace.ɵɵelementStart(5, "input", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function PoiDialogComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
                i0__namespace.ɵɵpipe(6, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 3);
                i0__namespace.ɵɵelementStart(8, "button", 4);
                i0__namespace.ɵɵlistener("click", function PoiDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(ctx.title); });
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵpipe(10, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 5);
                i0__namespace.ɵɵlistener("click", function PoiDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
                i0__namespace.ɵɵtext(12);
                i0__namespace.ɵɵpipe(13, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 6, "igo.context.poiButton.dialog.title"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(6, 8, "igo.context.poiButton.dialog.placeholder"))("ngModel", ctx.title);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("disabled", !ctx.title);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(10, 10, "igo.common.confirmDialog.confirmBtn"), " ");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(13, 12, "igo.common.confirmDialog.cancelBtn"), " ");
            }
        }, directives: [i1__namespace$2.MatDialogTitle, i1__namespace$2.MatDialogContent, i3__namespace$1.MatFormField, i3__namespace$2.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.RequiredValidator, i4__namespace.NgControlStatus, i4__namespace.NgModel, i1__namespace$2.MatDialogActions, i5__namespace.MatButton], pipes: [i6__namespace$1.TranslatePipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PoiDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-poi-dialog',
                        templateUrl: './poi-dialog.component.html'
                    }]
            }], function () { return [{ type: i1__namespace$2.MatDialogRef }]; }, null);
    })();

    var PoiService = /** @class */ (function () {
        function PoiService(http, config) {
            this.http = http;
            this.config = config;
            this.baseUrl = this.config.getConfig('context.url');
        }
        PoiService.prototype.get = function () {
            if (!this.baseUrl) {
                return rxjs.EMPTY;
            }
            var url = this.baseUrl + '/pois';
            return this.http.get(url);
        };
        PoiService.prototype.delete = function (id) {
            var url = this.baseUrl + '/pois/' + id;
            return this.http.delete(url);
        };
        PoiService.prototype.create = function (context) {
            var url = this.baseUrl + '/pois';
            return this.http.post(url, context);
        };
        return PoiService;
    }());
    PoiService.ɵfac = function PoiService_Factory(t) { return new (t || PoiService)(i0__namespace.ɵɵinject(i1__namespace.HttpClient), i0__namespace.ɵɵinject(i3__namespace.ConfigService)); };
    PoiService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: PoiService, factory: PoiService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PoiService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1__namespace.HttpClient }, { type: i3__namespace.ConfigService }]; }, null);
    })();

    function PoiButtonComponent_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-option", 6);
            i0__namespace.ɵɵlistener("click", function PoiButtonComponent_mat_option_8_Template_mat_option_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var poi_r1 = restoredCtx.$implicit; var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.zoomOnPoi(poi_r1.id); });
            i0__namespace.ɵɵelementStart(1, "div", 2);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 7);
            i0__namespace.ɵɵlistener("click", function PoiButtonComponent_mat_option_8_Template_button_click_3_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var poi_r1 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.deletePoi(poi_r1); });
            i0__namespace.ɵɵelement(4, "mat-icon", 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var poi_r1 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", poi_r1.id);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(poi_r1.title);
        }
    }
    var PoiButtonComponent = /** @class */ (function () {
        function PoiButtonComponent(dialog, authService, poiService, messageService, languageService, confirmDialogService) {
            this.dialog = dialog;
            this.authService = authService;
            this.poiService = poiService;
            this.messageService = messageService;
            this.languageService = languageService;
            this.confirmDialogService = confirmDialogService;
        }
        Object.defineProperty(PoiButtonComponent.prototype, "map", {
            get: function () {
                return this._map;
            },
            set: function (value) {
                this._map = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PoiButtonComponent.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        PoiButtonComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.authenticate$$ = this.authService.authenticate$.subscribe(function (auth) {
                if (auth) {
                    _this.getPois();
                }
            });
        };
        PoiButtonComponent.prototype.ngOnDestroy = function () {
            this.authenticate$$.unsubscribe();
        };
        PoiButtonComponent.prototype.deletePoi = function (poi) {
            var _this = this;
            if (poi && poi.id) {
                var translate_1 = this.languageService.translate;
                this.confirmDialogService
                    .open(translate_1.instant('igo.context.poiButton.dialog.confirmDelete'))
                    .subscribe(function (confirm) {
                    if (confirm) {
                        _this.poiService.delete(poi.id).subscribe(function () {
                            var title = translate_1.instant('igo.context.poiButton.dialog.deleteTitle');
                            var message = translate_1.instant('igo.context.poiButton.dialog.deleteMsg', {
                                value: poi.title
                            });
                            _this.messageService.info(message, title);
                            _this.pois = _this.pois.filter(function (p) { return p.id !== poi.id; });
                        }, function (err) {
                            err.error.title = 'DELETE Pois';
                            _this.messageService.showError(err);
                        });
                    }
                });
            }
        };
        PoiButtonComponent.prototype.getPois = function () {
            var _this = this;
            this.poiService.get().pipe(operators.take(1)).subscribe(function (rep) {
                _this.pois = rep;
            }, function (err) {
                err.error.title = 'GET Pois';
                _this.messageService.showError(err);
            });
        };
        PoiButtonComponent.prototype.createPoi = function () {
            var _this = this;
            var view = this.map.ol.getView();
            var proj = view.getProjection().getCode();
            var center = new olPoint__default["default"](view.getCenter()).transform(proj, 'EPSG:4326');
            var poi = {
                title: '',
                x: center.getCoordinates()[0],
                y: center.getCoordinates()[1],
                zoom: view.getZoom()
            };
            this.dialog
                .open(PoiDialogComponent, { disableClose: false })
                .afterClosed()
                .subscribe(function (title) {
                if (title) {
                    poi.title = title;
                    _this.poiService.create(poi).subscribe(function (newPoi) {
                        var translate = _this.languageService.translate;
                        var titleD = translate.instant('igo.context.poiButton.dialog.createTitle');
                        var message = translate.instant('igo.context.poiButton.dialog.createMsg', {
                            value: poi.title
                        });
                        _this.messageService.success(message, titleD);
                        poi.id = newPoi.id;
                        _this.pois.push(poi);
                    }, function (err) {
                        err.error.title = 'POST Pois';
                        _this.messageService.showError(err);
                    });
                }
            });
        };
        PoiButtonComponent.prototype.zoomOnPoi = function (id) {
            var poi = this.pois.find(function (p) { return p.id === id; });
            var center = olproj__namespace.fromLonLat([Number(poi.x), Number(poi.y)], this.map.projection);
            this.map.ol.getView().animate({
                center: center,
                zoom: poi.zoom,
                duration: 500,
                easing: oleasing__namespace.easeOut
            });
        };
        return PoiButtonComponent;
    }());
    PoiButtonComponent.ɵfac = function PoiButtonComponent_Factory(t) { return new (t || PoiButtonComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialog), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(PoiService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i5__namespace$1.ConfirmDialogService)); };
    PoiButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PoiButtonComponent, selectors: [["igo-poi-button"]], inputs: { map: "map", color: "color" }, decls: 9, vars: 7, consts: [["floatPlaceholder", "never", 3, "placeholder"], [3, "click"], [1, "titlePoi"], ["igoStopPropagation", "", "mat-icon-button", "", "color", "primary", 1, "addPoi", "buttonPoi", 3, "click"], ["svgIcon", "plus-circle"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["igoStopPropagation", "", "mat-icon-button", "", "color", "warn", 1, "deletePoi", "buttonPoi", 3, "click"], ["svgIcon", "delete"]], template: function PoiButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-select", 0);
                i0__namespace.ɵɵpipe(1, "translate");
                i0__namespace.ɵɵelementStart(2, "mat-option", 1);
                i0__namespace.ɵɵlistener("click", function PoiButtonComponent_Template_mat_option_click_2_listener() { return ctx.createPoi(); });
                i0__namespace.ɵɵelementStart(3, "div", 2);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵpipe(5, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵlistener("click", function PoiButtonComponent_Template_button_click_6_listener() { return ctx.createPoi(); });
                i0__namespace.ɵɵelement(7, "mat-icon", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, PoiButtonComponent_mat_option_8_Template, 5, 2, "mat-option", 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(1, 3, "igo.context.poiButton.placeholder"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(5, 5, "igo.context.poiButton.create"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.pois);
            }
        }, directives: [i12__namespace.MatSelect, i11__namespace.MatOption, i5__namespace.MatButton, i5__namespace$1.StopPropagationDirective, i9__namespace.MatIcon, i7__namespace.NgForOf], pipes: [i6__namespace$1.TranslatePipe], styles: ["mat-select[_ngcontent-%COMP%]{width:150px;background-color:#fff;height:40px;padding-top:0}mat-select[_ngcontent-%COMP%]     .mat-select-trigger{height:40px}mat-select[_ngcontent-%COMP%]     .mat-select-value-text, mat-select[_ngcontent-%COMP%]     .mat-select-placeholder{padding:5px;top:12px;position:relative}.mat-option[_ngcontent-%COMP%]{text-overflow:inherit}.titlePoi[_ngcontent-%COMP%]{max-width:135px;overflow:hidden;text-overflow:ellipsis;float:left}.buttonPoi[_ngcontent-%COMP%]{float:right;margin:4px -10px 4px 0}.buttonPoi[_ngcontent-%COMP%]     .mat-icon{margin:0 8px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PoiButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-poi-button',
                        templateUrl: './poi-button.component.html',
                        styleUrls: ['./poi-button.component.scss']
                    }]
            }], function () { return [{ type: i1__namespace$2.MatDialog }, { type: i2__namespace.AuthService }, { type: PoiService }, { type: i3__namespace.MessageService }, { type: i3__namespace.LanguageService }, { type: i5__namespace$1.ConfirmDialogService }]; }, { map: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }] });
    })();

    var UserDialogComponent = /** @class */ (function () {
        function UserDialogComponent(dialogRef, auth, storageService) {
            this.dialogRef = dialogRef;
            this.auth = auth;
            this.storageService = storageService;
            var decodeToken = this.auth.decodeToken();
            this.user = decodeToken.user;
            this.exp = new Date(decodeToken.exp * 1000).toLocaleString();
        }
        UserDialogComponent.prototype.clearPreferences = function () {
            this.storageService.clear();
        };
        return UserDialogComponent;
    }());
    UserDialogComponent.ɵfac = function UserDialogComponent_Factory(t) { return new (t || UserDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialogRef), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(i3__namespace.StorageService)); };
    UserDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: UserDialogComponent, selectors: [["igo-user-dialog"]], decls: 20, vars: 18, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-dialog-actions", "", 2, "justify-content", "center"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 1);
                i0__namespace.ɵɵelementStart(4, "p");
                i0__namespace.ɵɵtext(5);
                i0__namespace.ɵɵpipe(6, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "p");
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵpipe(9, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "p");
                i0__namespace.ɵɵtext(11);
                i0__namespace.ɵɵpipe(12, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "button", 2);
                i0__namespace.ɵɵlistener("click", function UserDialogComponent_Template_button_click_13_listener() { return ctx.clearPreferences(); });
                i0__namespace.ɵɵtext(14);
                i0__namespace.ɵɵpipe(15, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(16, "br");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "div", 3);
                i0__namespace.ɵɵelementStart(18, "button", 4);
                i0__namespace.ɵɵlistener("click", function UserDialogComponent_Template_button_click_18_listener() { return ctx.dialogRef.close(false); });
                i0__namespace.ɵɵtext(19, " OK ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 8, "igo.context.userButton.infoTitle"));
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(6, 10, "igo.context.userButton.dialog.user"), ": ", ctx.user.sourceId, "");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(9, 12, "igo.context.userButton.dialog.email"), ": ", ctx.user.email, "");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(12, 14, "igo.context.userButton.dialog.expiration"), ": ", ctx.exp, "");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(15, 16, "igo.context.userButton.dialog.clearPreferences"), " ");
            }
        }, directives: [i1__namespace$2.MatDialogTitle, i1__namespace$2.MatDialogContent, i5__namespace.MatButton, i1__namespace$2.MatDialogActions], pipes: [i6__namespace$1.TranslatePipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-user-dialog',
                        templateUrl: './user-dialog.component.html'
                    }]
            }], function () { return [{ type: i1__namespace$2.MatDialogRef }, { type: i2__namespace.AuthService }, { type: i3__namespace.StorageService }]; }, null);
    })();

    function userButtonSlideInOut() {
        return animations.trigger('userButtonState', [
            animations.state('collapse', animations.style({
                width: '0',
                overflow: 'hidden',
                display: 'none'
            })),
            animations.state('expand', animations.style({
                overflow: 'hidden',
                display: 'display'
            })),
            animations.transition('collapse => expand', animations.animate('200ms')),
            animations.transition('expand => collapse', animations.animate('200ms'))
        ]);
    }

    function UserButtonComponent_div_0_igo_poi_button_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-poi-button", 9);
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r1.color)("map", ctx_r1.map);
        }
    }
    function UserButtonComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 1);
            i0__namespace.ɵɵelementStart(1, "div", 2);
            i0__namespace.ɵɵtemplate(2, UserButtonComponent_div_0_igo_poi_button_2_Template, 1, 2, "igo-poi-button", 3);
            i0__namespace.ɵɵelementStart(3, "button", 4);
            i0__namespace.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_3_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.infoUser(); });
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelement(5, "mat-icon", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "button", 4);
            i0__namespace.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_6_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.logout(); });
            i0__namespace.ɵɵpipe(7, "translate");
            i0__namespace.ɵɵelement(8, "mat-icon", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "button", 7);
            i0__namespace.ɵɵlistener("click", function UserButtonComponent_div_0_Template_button_click_9_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.accountClick(); });
            i0__namespace.ɵɵelement(10, "mat-icon", 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("@userButtonState", ctx_r0.expand ? "expand" : "collapse");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.hasApi);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(4, 7, "igo.context.userButton.infoTitle"))("color", ctx_r0.color);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(7, 9, "igo.context.userButton.logout"))("color", ctx_r0.color);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("color", ctx_r0.auth.authenticated ? ctx_r0.color : "warn");
        }
    }
    var UserButtonComponent = /** @class */ (function () {
        function UserButtonComponent(dialog, config, auth) {
            this.dialog = dialog;
            this.config = config;
            this.auth = auth;
            this.expand = false;
            this.visible = false;
            this.hasApi = false;
            this.visible = this.config.getConfig('auth') ? true : false;
            this.hasApi = this.config.getConfig('context.url') !== undefined;
        }
        Object.defineProperty(UserButtonComponent.prototype, "map", {
            get: function () {
                return this._map;
            },
            set: function (value) {
                this._map = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UserButtonComponent.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        UserButtonComponent.prototype.accountClick = function () {
            if (this.auth.authenticated) {
                this.expand = !this.expand;
            }
            else {
                this.auth.logout();
            }
        };
        UserButtonComponent.prototype.logout = function () {
            this.expand = false;
            this.auth.logout();
        };
        UserButtonComponent.prototype.infoUser = function () {
            this.dialog.open(UserDialogComponent, { disableClose: false });
        };
        return UserButtonComponent;
    }());
    UserButtonComponent.ɵfac = function UserButtonComponent_Factory(t) { return new (t || UserButtonComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MatDialog), i0__namespace.ɵɵdirectiveInject(i3__namespace.ConfigService), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService)); };
    UserButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: UserButtonComponent, selectors: [["igo-user-button"]], inputs: { map: "map", color: "color" }, decls: 1, vars: 1, consts: [["class", "igo-user-button-container", 4, "ngIf"], [1, "igo-user-button-container"], [1, "igo-user-button-more-container"], [3, "color", "map", 4, "ngIf"], ["mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "color", "click"], ["svgIcon", "information-outline"], ["svgIcon", "power"], ["mat-icon-button", "", 3, "color", "click"], ["svgIcon", "account-box"], [3, "color", "map"]], template: function UserButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, UserButtonComponent_div_0_Template, 11, 11, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.visible);
            }
        }, directives: [i7__namespace.NgIf, i5__namespace.MatButton, i6__namespace$2.MatTooltip, i9__namespace.MatIcon, PoiButtonComponent], pipes: [i6__namespace$1.TranslatePipe], styles: [".igo-user-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff}.igo-user-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#efefef}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.igo-user-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;bottom:0}}.igo-user-button-more-container[_ngcontent-%COMP%]{float:left;height:40px}.igo-user-button-more-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:2px;float:left}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){.igo-user-button-more-container[_ngcontent-%COMP%]{height:80px;width:150px;position:relative;left:24px}}button[_ngcontent-%COMP%], [_nghost-%COMP%]     button .mat-button-ripple-round{border-radius:0}"], data: { animation: [userButtonSlideInOut()] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-user-button',
                        templateUrl: './user-button.component.html',
                        styleUrls: ['./user-button.component.scss'],
                        animations: [userButtonSlideInOut()]
                    }]
            }], function () { return [{ type: i1__namespace$2.MatDialog }, { type: i3__namespace.ConfigService }, { type: i2__namespace.AuthService }]; }, { map: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }] });
    })();

    var IgoContextMapButtonModule = /** @class */ (function () {
        function IgoContextMapButtonModule() {
        }
        IgoContextMapButtonModule.forRoot = function () {
            return {
                ngModule: IgoContextMapButtonModule
            };
        };
        return IgoContextMapButtonModule;
    }());
    IgoContextMapButtonModule.ɵfac = function IgoContextMapButtonModule_Factory(t) { return new (t || IgoContextMapButtonModule)(); };
    IgoContextMapButtonModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoContextMapButtonModule });
    IgoContextMapButtonModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [PoiService], imports: [[
                i7.CommonModule,
                i3.IgoLanguageModule,
                i5$1.IgoConfirmDialogModule,
                i5$1.IgoStopPropagationModule,
                i2.IgoAuthModule,
                i4.FormsModule,
                i9.MatIconModule,
                i5.MatButtonModule,
                i12.MatSelectModule,
                i11.MatOptionModule,
                i6$2.MatTooltipModule,
                i3$1.MatFormFieldModule,
                i1$2.MatDialogModule,
                i3$2.MatInputModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoContextMapButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i7.CommonModule,
                            i3.IgoLanguageModule,
                            i5$1.IgoConfirmDialogModule,
                            i5$1.IgoStopPropagationModule,
                            i2.IgoAuthModule,
                            i4.FormsModule,
                            i9.MatIconModule,
                            i5.MatButtonModule,
                            i12.MatSelectModule,
                            i11.MatOptionModule,
                            i6$2.MatTooltipModule,
                            i3$1.MatFormFieldModule,
                            i1$2.MatDialogModule,
                            i3$2.MatInputModule
                        ],
                        exports: [BookmarkButtonComponent, PoiButtonComponent, UserButtonComponent, BookmarkDialogComponent],
                        declarations: [
                            BookmarkButtonComponent,
                            BookmarkDialogComponent,
                            PoiButtonComponent,
                            PoiDialogComponent,
                            UserButtonComponent,
                            UserDialogComponent
                        ],
                        providers: [PoiService]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoContextMapButtonModule, { declarations: [BookmarkButtonComponent,
                BookmarkDialogComponent,
                PoiButtonComponent,
                PoiDialogComponent,
                UserButtonComponent,
                UserDialogComponent], imports: [i7.CommonModule,
                i3.IgoLanguageModule,
                i5$1.IgoConfirmDialogModule,
                i5$1.IgoStopPropagationModule,
                i2.IgoAuthModule,
                i4.FormsModule,
                i9.MatIconModule,
                i5.MatButtonModule,
                i12.MatSelectModule,
                i11.MatOptionModule,
                i6$2.MatTooltipModule,
                i3$1.MatFormFieldModule,
                i1$2.MatDialogModule,
                i3$2.MatInputModule], exports: [BookmarkButtonComponent, PoiButtonComponent, UserButtonComponent, BookmarkDialogComponent] });
    })();

    var CONTEXT_DIRECTIVES = [
        MapContextDirective,
        LayerContextDirective
    ];
    var IgoContextManagerModule = /** @class */ (function () {
        function IgoContextManagerModule() {
        }
        IgoContextManagerModule.forRoot = function () {
            return {
                ngModule: IgoContextManagerModule
            };
        };
        return IgoContextManagerModule;
    }());
    IgoContextManagerModule.ɵfac = function IgoContextManagerModule_Factory(t) { return new (t || IgoContextManagerModule)(); };
    IgoContextManagerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoContextManagerModule });
    IgoContextManagerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i7.CommonModule,
                i4.FormsModule,
                i4.ReactiveFormsModule,
                i3$1.MatFormFieldModule,
                i3$2.MatInputModule,
                i9.MatIconModule,
                i5.MatButtonModule,
                i6$2.MatTooltipModule,
                i3$4.MatListModule,
                i8.MatCheckboxModule,
                i6$3.MatRadioModule,
                i1$2.MatDialogModule,
                i7$1.MatMenuModule,
                i11.MatOptionModule,
                i9$1.MatAutocompleteModule,
                i2.IgoAuthModule,
                i5$1.IgoListModule,
                i5$1.IgoKeyValueModule,
                i5$1.IgoCollapsibleModule,
                i5$1.IgoStopPropagationModule,
                i3.IgoLanguageModule,
                IgoContextImportExportModule,
                IgoContextMapButtonModule,
                i5$1.IgoActionbarModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoContextManagerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i7.CommonModule,
                            i4.FormsModule,
                            i4.ReactiveFormsModule,
                            i3$1.MatFormFieldModule,
                            i3$2.MatInputModule,
                            i9.MatIconModule,
                            i5.MatButtonModule,
                            i6$2.MatTooltipModule,
                            i3$4.MatListModule,
                            i8.MatCheckboxModule,
                            i6$3.MatRadioModule,
                            i1$2.MatDialogModule,
                            i7$1.MatMenuModule,
                            i11.MatOptionModule,
                            i9$1.MatAutocompleteModule,
                            i2.IgoAuthModule,
                            i5$1.IgoListModule,
                            i5$1.IgoKeyValueModule,
                            i5$1.IgoCollapsibleModule,
                            i5$1.IgoStopPropagationModule,
                            i3.IgoLanguageModule,
                            IgoContextImportExportModule,
                            IgoContextMapButtonModule,
                            i5$1.IgoActionbarModule
                        ],
                        exports: __spreadArray([
                            ContextListComponent,
                            ContextListBindingDirective,
                            ContextItemComponent,
                            ContextFormComponent,
                            ContextEditComponent,
                            ContextEditBindingDirective,
                            ContextPermissionsComponent,
                            ContextPermissionsBindingDirective
                        ], __read(CONTEXT_DIRECTIVES)),
                        declarations: __spreadArray([
                            ContextListComponent,
                            ContextListBindingDirective,
                            ContextItemComponent,
                            ContextFormComponent,
                            ContextEditComponent,
                            ContextEditBindingDirective,
                            ContextPermissionsComponent,
                            ContextPermissionsBindingDirective
                        ], __read(CONTEXT_DIRECTIVES))
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoContextManagerModule, { declarations: [ContextListComponent,
                ContextListBindingDirective,
                ContextItemComponent,
                ContextFormComponent,
                ContextEditComponent,
                ContextEditBindingDirective,
                ContextPermissionsComponent,
                ContextPermissionsBindingDirective, MapContextDirective,
                LayerContextDirective], imports: [i7.CommonModule,
                i4.FormsModule,
                i4.ReactiveFormsModule,
                i3$1.MatFormFieldModule,
                i3$2.MatInputModule,
                i9.MatIconModule,
                i5.MatButtonModule,
                i6$2.MatTooltipModule,
                i3$4.MatListModule,
                i8.MatCheckboxModule,
                i6$3.MatRadioModule,
                i1$2.MatDialogModule,
                i7$1.MatMenuModule,
                i11.MatOptionModule,
                i9$1.MatAutocompleteModule,
                i2.IgoAuthModule,
                i5$1.IgoListModule,
                i5$1.IgoKeyValueModule,
                i5$1.IgoCollapsibleModule,
                i5$1.IgoStopPropagationModule,
                i3.IgoLanguageModule,
                IgoContextImportExportModule,
                IgoContextMapButtonModule,
                i5$1.IgoActionbarModule], exports: [ContextListComponent,
                ContextListBindingDirective,
                ContextItemComponent,
                ContextFormComponent,
                ContextEditComponent,
                ContextEditBindingDirective,
                ContextPermissionsComponent,
                ContextPermissionsBindingDirective, MapContextDirective,
                LayerContextDirective] });
    })();

    var ShareMapService = /** @class */ (function () {
        function ShareMapService(contextService, messageService, route) {
            this.contextService = contextService;
            this.messageService = messageService;
            this.route = route;
        }
        ShareMapService.prototype.getUrlWithApi = function (formValues) {
            return location.origin + location.pathname + "?context=" + formValues.uri;
        };
        ShareMapService.prototype.createContextShared = function (map, formValues) {
            var context = this.contextService.getContextFromMap(map);
            context.scope = 'public';
            context.title = formValues.title;
            context.uri = formValues.uri;
            return this.contextService.create(context);
        };
        ShareMapService.prototype.updateContextShared = function (map, formValues, id) {
            var context = this.contextService.getContextFromMap(map);
            return this.contextService.update(id, {
                title: formValues.title,
                map: context.map
            });
        };
        ShareMapService.prototype.getUrlWithoutApi = function (map, publicShareOption) {
            var e_1, _b, e_2, _c;
            if (!this.route ||
                !this.route.options.visibleOnLayersKey ||
                !this.route.options.visibleOffLayersKey ||
                !map.viewController.getZoom()) {
                return;
            }
            var llc = publicShareOption.layerlistControls.querystring;
            var visibleKey = this.route.options.visibleOnLayersKey;
            var invisibleKey = this.route.options.visibleOffLayersKey;
            var layers = map.layers;
            var visibleLayers = layers.filter(function (lay) { return lay.visible && !lay.isIgoInternalLayer; });
            var invisibleLayers = layers.filter(function (lay) { return !lay.visible && !lay.isIgoInternalLayer; });
            if (visibleLayers.length === 0) {
                visibleKey = '';
            }
            if (invisibleLayers.length === 0) {
                invisibleKey = '';
            }
            var layersUrl = '';
            var layersToLoop = [];
            if (visibleLayers.length > invisibleLayers.length) {
                layersUrl = visibleKey + "=*&" + invisibleKey + "=";
                layersToLoop = invisibleLayers;
            }
            else {
                layersUrl = invisibleKey + "=*&" + visibleKey + "=";
                layersToLoop = visibleLayers;
            }
            try {
                for (var layersToLoop_1 = __values(layersToLoop), layersToLoop_1_1 = layersToLoop_1.next(); !layersToLoop_1_1.done; layersToLoop_1_1 = layersToLoop_1.next()) {
                    var layer = layersToLoop_1_1.value;
                    if (layer.id) {
                        layersUrl += layer.id + ',';
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (layersToLoop_1_1 && !layersToLoop_1_1.done && (_b = layersToLoop_1.return)) _b.call(layersToLoop_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var contextLayersID = [];
            var contextLayers = this.contextService.context$.value.layers;
            try {
                for (var contextLayers_1 = __values(contextLayers), contextLayers_1_1 = contextLayers_1.next(); !contextLayers_1_1.done; contextLayers_1_1 = contextLayers_1.next()) {
                    var contextLayer = contextLayers_1_1.value;
                    if (typeof contextLayer.id !== 'undefined' || typeof contextLayer.source !== 'undefined') {
                        contextLayersID.push(contextLayer.id || contextLayer.source.id);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (contextLayers_1_1 && !contextLayers_1_1.done && (_c = contextLayers_1.return)) _c.call(contextLayers_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var addedLayersQueryParamsWms = this.makeLayersByService(layers, contextLayersID, 'wms');
            var addedLayersQueryParamsWmts = this.makeLayersByService(layers, contextLayersID, 'wmts');
            var addedLayersQueryParamsArcgisRest = this.makeLayersByService(layers, contextLayersID, 'arcgisrest');
            var addedLayersQueryParamsImageArcgisRest = this.makeLayersByService(layers, contextLayersID, 'imagearcgisrest');
            var addedLayersQueryParamsTileArcgisRest = this.makeLayersByService(layers, contextLayersID, 'tilearcgisrest');
            layersUrl = layersUrl.substr(0, layersUrl.length - 1);
            var zoomKey = this.route.options.zoomKey;
            var centerKey = this.route.options.centerKey;
            var contextKey = this.route.options.contextKey;
            var zoom = zoomKey + "=" + map.viewController.getZoom();
            var arrayCenter = map.viewController.getCenter('EPSG:4326') || [];
            var long = arrayCenter[0].toFixed(5).replace(/\.([^0]+)0+$/, '.$1');
            var lat = arrayCenter[1].toFixed(5).replace(/\.([^0]+)0+$/, '.$1');
            var center = (centerKey + "=" + long + "," + lat).replace(/.00000/g, '');
            var context = '';
            if (this.contextService.context$.value) {
                context = contextKey + "=" + this.contextService.context$.value.uri;
            }
            var url = "" + location.origin + location.pathname + "?" + context + "&" + zoom + "&" + center + "&" + layersUrl + "&" + llc + "&" + addedLayersQueryParamsWms + "&" + llc + "&" + addedLayersQueryParamsWmts + "&" + addedLayersQueryParamsArcgisRest + "&" + addedLayersQueryParamsImageArcgisRest + "&" + addedLayersQueryParamsTileArcgisRest;
            for (var i = 0; i < 5; i++) {
                url = url.replace(/&&/g, '&');
                url = url.endsWith('&') ? url.slice(0, -1) : url;
            }
            url = url.endsWith('&') ? url.slice(0, -1) : url;
            url = url.replace('?&wm', '&wm');
            url = url.replace('?&', '?');
            return url;
        };
        ShareMapService.prototype.makeLayersByService = function (layers, contextLayersID, typeService) {
            var e_3, _b;
            var addedLayersByService = [];
            var _loop_1 = function (layer) {
                if (contextLayersID.indexOf(layer.id) === -1) {
                    var linkUrl_1 = encodeURIComponent(layer.dataSource.options.url);
                    var addedLayer = '';
                    var layerVersion = void 0;
                    switch (layer.dataSource.options.type.toLowerCase()) {
                        case 'wms':
                            var datasourceOptions = layer.dataSource.options;
                            addedLayer = encodeURIComponent(datasourceOptions.params.LAYERS);
                            layerVersion = datasourceOptions.params.VERSION === '1.3.0' ? layerVersion : datasourceOptions.params.VERSION;
                            break;
                        case 'wmts':
                        case 'arcgisrest':
                        case 'imagearcgisrest':
                        case 'tilearcgisrest':
                            addedLayer = encodeURIComponent(layer.dataSource.options.layer);
                            break;
                    }
                    var addedLayerPosition_1 = addedLayer + ":igoz" + layer.zIndex;
                    var version = '';
                    if (layerVersion) {
                        var operator = layer.dataSource.options.url.indexOf('?') === -1 ? '?' : '&';
                        version = encodeURIComponent(operator + "VERSION=" + layerVersion);
                    }
                    linkUrl_1 = "" + linkUrl_1 + version;
                    if (!addedLayersByService.find(function (definedUrl) { return definedUrl.url === linkUrl_1; })) {
                        addedLayersByService.push({
                            url: linkUrl_1,
                            layers: [addedLayerPosition_1]
                        });
                    }
                    else {
                        addedLayersByService.forEach(function (service) {
                            if (service.url === linkUrl_1) {
                                service.layers.push(addedLayerPosition_1);
                            }
                        });
                    }
                }
            };
            try {
                for (var _c = __values(layers.filter(function (l) { var _a; return ((_a = l.dataSource.options) === null || _a === void 0 ? void 0 : _a.type) === typeService; })), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var layer = _d.value;
                    _loop_1(layer);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var addedLayersQueryParams = '';
            if (addedLayersByService.length >= 1) {
                var linkUrlKey = void 0;
                var layersKey = void 0;
                /*
                const linkUrlKey = (typeService === 'wms') ? this.route.options.wmsUrlKey :
                  (typeService === 'wmts') ? this.route.options.wmtsUrlKey : '' ;
                const layersKey = (typeService === 'wms') ? this.route.options.wmsLayersKey :
                  (typeService === 'wmts') ? this.route.options.wmtsLayersKey : '' ;
          */
                switch (typeService.toLowerCase()) {
                    case 'wms':
                        linkUrlKey = this.route.options.wmsUrlKey;
                        layersKey = this.route.options.wmsLayersKey;
                        break;
                    case 'wmts':
                        linkUrlKey = this.route.options.wmtsUrlKey;
                        layersKey = this.route.options.wmtsLayersKey;
                        break;
                    case 'arcgisrest':
                        linkUrlKey = this.route.options.arcgisUrlKey;
                        layersKey = this.route.options.arcgisLayersKey;
                        break;
                    case 'imagearcgisrest':
                        linkUrlKey = this.route.options.iarcgisUrlKey;
                        layersKey = this.route.options.iarcgisLayersKey;
                        break;
                    case 'tilearcgisrest':
                        linkUrlKey = this.route.options.tarcgisUrlKey;
                        layersKey = this.route.options.tarcgisLayersKey;
                        break;
                    default:
                        linkUrlKey = '';
                        layersKey = '';
                }
                var linkUrlQueryParams_1 = '';
                var layersQueryParams_1 = '';
                addedLayersByService.forEach(function (service) {
                    linkUrlQueryParams_1 += service.url + ",";
                    layersQueryParams_1 += "(" + service.layers.join(',') + "),";
                });
                linkUrlQueryParams_1 = linkUrlQueryParams_1.endsWith(',')
                    ? linkUrlQueryParams_1.slice(0, -1)
                    : linkUrlQueryParams_1;
                layersQueryParams_1 = layersQueryParams_1.endsWith(',')
                    ? layersQueryParams_1.slice(0, -1)
                    : layersQueryParams_1;
                addedLayersQueryParams = linkUrlKey + "=" + linkUrlQueryParams_1 + "&" + layersKey + "=" + layersQueryParams_1;
            }
            return addedLayersQueryParams;
        };
        return ShareMapService;
    }());
    ShareMapService.ɵfac = function ShareMapService_Factory(t) { return new (t || ShareMapService)(i0__namespace.ɵɵinject(ContextService), i0__namespace.ɵɵinject(i3__namespace.MessageService), i0__namespace.ɵɵinject(i3__namespace.RouteService, 8)); };
    ShareMapService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ShareMapService, factory: ShareMapService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ShareMapService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: ContextService }, { type: i3__namespace.MessageService }, { type: i3__namespace.RouteService, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    function ShareMapApiComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("", ctx_r0.userId, "-");
        }
    }
    function ShareMapApiComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 12);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("disabled", !ctx_r1.form.valid);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 2, "igo.context.shareMap.button"), " ");
        }
    }
    function ShareMapApiComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 13);
            i0__namespace.ɵɵlistener("click", function ShareMapApiComponent_button_19_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.updateContextShared(ctx_r4.form.value); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.refreshBtn"), " ");
        }
    }
    function ShareMapApiComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 14);
            i0__namespace.ɵɵelementStart(1, "mat-form-field");
            i0__namespace.ɵɵelement(2, "textarea", 15, 16);
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementStart(5, "button", 17);
            i0__namespace.ɵɵlistener("click", function ShareMapApiComponent_div_20_Template_button_click_5_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var _r6 = i0__namespace.ɵɵreference(3); var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.copyTextToClipboard(_r6); });
            i0__namespace.ɵɵpipe(6, "translate");
            i0__namespace.ɵɵelement(7, "mat-icon", 18);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(8, "div");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(4, 3, "igo.context.shareMap.placeholderLink"))("value", ctx_r3.url);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(6, 5, "igo.context.shareMap.copy"));
        }
    }
    var ShareMapApiComponent = /** @class */ (function () {
        function ShareMapApiComponent(languageService, messageService, auth, shareMapService, formBuilder) {
            this.languageService = languageService;
            this.messageService = messageService;
            this.auth = auth;
            this.shareMapService = shareMapService;
            this.formBuilder = formBuilder;
        }
        ShareMapApiComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.auth.authenticate$.subscribe(function (auth) {
                var decodeToken = _this.auth.decodeToken();
                _this.userId = decodeToken.user ? decodeToken.user.id : undefined;
                _this.buildForm();
            });
        };
        ShareMapApiComponent.prototype.createUrl = function (values) {
            var _this = this;
            if (values === void 0) { values = {}; }
            var inputs = Object.assign({}, values);
            inputs.uri = this.userId ? this.userId + "-" + values.uri : values.uri;
            this.url = this.shareMapService.getUrlWithApi(inputs);
            this.shareMapService.createContextShared(this.map, inputs).subscribe(function (rep) {
                _this.idContextShared = rep.id;
                var title = _this.languageService.translate.instant('igo.context.contextManager.dialog.saveTitle');
                var msg = _this.languageService.translate.instant('igo.context.contextManager.dialog.saveMsg', {
                    value: inputs.title
                });
                _this.messageService.success(msg, title);
            }, function (err) {
                err.error.title = _this.languageService.translate.instant('igo.context.shareMap.errorTitle');
                _this.messageService.showError(err);
            });
        };
        ShareMapApiComponent.prototype.updateContextShared = function (values) {
            var _this = this;
            if (values === void 0) { values = {}; }
            var inputs = Object.assign({}, values);
            inputs.uri = this.userId ? this.userId + "-" + values.uri : values.uri;
            this.shareMapService.updateContextShared(this.map, inputs, this.idContextShared).subscribe(function (rep) {
                var title = _this.languageService.translate.instant('igo.context.contextManager.dialog.saveTitle');
                var msg = _this.languageService.translate.instant('igo.context.contextManager.dialog.saveMsg', {
                    value: inputs.title
                });
                _this.messageService.success(msg, title);
            }, function (err) {
                err.error.title = _this.languageService.translate.instant('igo.context.shareMap.errorTitle');
                _this.messageService.showError(err);
            });
        };
        ShareMapApiComponent.prototype.copyTextToClipboard = function (textArea) {
            var successful = utils.Clipboard.copy(textArea);
            if (successful) {
                var translate = this.languageService.translate;
                var title = translate.instant('igo.context.shareMap.dialog.copyTitle');
                var msg = translate.instant('igo.context.shareMap.dialog.copyMsg');
                this.messageService.success(msg, title);
            }
        };
        ShareMapApiComponent.prototype.buildForm = function () {
            this.url = undefined;
            var id = utils.uuid();
            var title = 'Partage ';
            title += this.userId ? "(" + this.userId + "-" + id + ")" : "(" + id + ")";
            this.form = this.formBuilder.group({
                title: [title],
                uri: [id]
            });
        };
        return ShareMapApiComponent;
    }());
    ShareMapApiComponent.ɵfac = function ShareMapApiComponent_Factory(t) { return new (t || ShareMapApiComponent)(i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(i2__namespace.AuthService), i0__namespace.ɵɵdirectiveInject(ShareMapService), i0__namespace.ɵɵdirectiveInject(i4__namespace.FormBuilder)); };
    ShareMapApiComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ShareMapApiComponent, selectors: [["igo-share-map-api"]], inputs: { map: "map" }, decls: 21, vars: 18, consts: [[1, "igo-form", 3, "formGroup", "ngSubmit"], [1, "igo-input-container"], ["matInput", "", "required", "", "formControlName", "title", 3, "placeholder"], ["id", "uriInput", 1, "igo-input-container"], ["class", "prefix", 4, "ngIf"], [1, "fieldWrapper"], ["matInput", "", "required", "", "formControlName", "uri", 3, "readonly", "placeholder"], [1, "igo-form-button-group"], ["mat-raised-button", "", "type", "submit", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["class", "igo-input-container linkToShare", 4, "ngIf"], [1, "prefix"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "type", "button", 3, "click"], [1, "igo-input-container", "linkToShare"], ["matInput", "", "readonly", "", "rows", "3", 1, "textAreaWithButton", 3, "placeholder", "value"], ["textArea", ""], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", "color", "primary", 3, "matTooltip", "click"], ["svgIcon", "content-copy"]], template: function ShareMapApiComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵlistener("ngSubmit", function ShareMapApiComponent_Template_form_ngSubmit_0_listener() { return ctx.createUrl(ctx.form.value); });
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "mat-form-field");
                i0__namespace.ɵɵelement(3, "input", 2);
                i0__namespace.ɵɵpipe(4, "translate");
                i0__namespace.ɵɵelementStart(5, "mat-error");
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵpipe(7, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "div", 3);
                i0__namespace.ɵɵelementStart(9, "mat-form-field");
                i0__namespace.ɵɵtemplate(10, ShareMapApiComponent_span_10_Template, 2, 1, "span", 4);
                i0__namespace.ɵɵelementStart(11, "span", 5);
                i0__namespace.ɵɵelement(12, "input", 6);
                i0__namespace.ɵɵpipe(13, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-error");
                i0__namespace.ɵɵtext(15);
                i0__namespace.ɵɵpipe(16, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "div", 7);
                i0__namespace.ɵɵtemplate(18, ShareMapApiComponent_button_18_Template, 3, 4, "button", 8);
                i0__namespace.ɵɵtemplate(19, ShareMapApiComponent_button_19_Template, 3, 3, "button", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(20, ShareMapApiComponent_div_20_Template, 9, 7, "div", 10);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("formGroup", ctx.form);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(4, 10, "igo.context.contextManager.form.title"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(7, 12, "igo.context.contextManager.form.titleRequired"), " ");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngIf", ctx.userId);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("readonly", !ctx.userId)("placeholder", i0__namespace.ɵɵpipeBind1(13, 14, "igo.context.contextManager.form.uri"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(16, 16, "igo.context.contextManager.form.uriRequired"), " ");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", !ctx.url);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.url);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.url);
            }
        }, directives: [i4__namespace.ɵNgNoValidate, i4__namespace.NgControlStatusGroup, i4__namespace.FormGroupDirective, i3__namespace$1.MatFormField, i3__namespace$2.MatInput, i4__namespace.DefaultValueAccessor, i4__namespace.RequiredValidator, i4__namespace.NgControlStatus, i4__namespace.FormControlName, i3__namespace$1.MatError, i7__namespace.NgIf, i5__namespace.MatButton, i6__namespace$2.MatTooltip, i9__namespace.MatIcon], pipes: [i6__namespace$1.TranslatePipe], styles: ["@charset \"UTF-8\";mat-form-field[_ngcontent-%COMP%]{width:100%}#uriInput[_ngcontent-%COMP%]   .fieldWrapper[_ngcontent-%COMP%]{display:block;overflow:hidden}#uriInput[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]{float:left}.linkToShare\\a0[_ngcontent-%COMP%] {padding:25px 5px 5px}.linkToShare\\a0[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;width:100%;line-height:1.3;height:40px;overflow-y:hidden;word-wrap:normal;word-break:break-all}.linkToShare\\a0[_ngcontent-%COMP%]   textarea.textAreaWithButton[_ngcontent-%COMP%]{width:calc(100% - 60px)}.linkToShare\\a0[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{float:right;margin:-10px 0}.igo-form[_ngcontent-%COMP%]{padding:20px 5px 5px}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ShareMapApiComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-share-map-api',
                        templateUrl: './share-map-api.component.html',
                        styleUrls: ['./share-map-api.component.scss']
                    }]
            }], function () { return [{ type: i3__namespace.LanguageService }, { type: i3__namespace.MessageService }, { type: i2__namespace.AuthService }, { type: ShareMapService }, { type: i4__namespace.FormBuilder }]; }, { map: [{
                    type: i0.Input
                }] });
    })();

    function ShareMapUrlComponent_h4_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "h4");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.included"));
        }
    }
    function ShareMapUrlComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.context"));
        }
    }
    function ShareMapUrlComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.center"));
        }
    }
    function ShareMapUrlComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.zoom"));
        }
    }
    function ShareMapUrlComponent_li_22_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.addedLayers"));
        }
    }
    function ShareMapUrlComponent_li_24_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.visibleInvisible"));
        }
    }
    function ShareMapUrlComponent_h4_26_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "h4");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.excluded"));
        }
    }
    function ShareMapUrlComponent_li_29_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.order"));
        }
    }
    function ShareMapUrlComponent_li_31_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.opacity"));
        }
    }
    function ShareMapUrlComponent_li_33_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.filterOgc"));
        }
    }
    function ShareMapUrlComponent_li_35_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, "igo.context.shareMap.filterTime"));
        }
    }
    var ShareMapUrlComponent = /** @class */ (function () {
        function ShareMapUrlComponent(languageService, messageService, shareMapService, cdRef) {
            this.languageService = languageService;
            this.messageService = messageService;
            this.shareMapService = shareMapService;
            this.cdRef = cdRef;
            this.publicShareOption = {
                layerlistControls: { querystring: '' }
            };
        }
        ShareMapUrlComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.resetUrl();
            this.mapState$$ = rxjs.combineLatest([
                this.map.viewController.state$,
                this.map.status$
            ]).subscribe(function (c) {
                _this.resetUrl();
                _this.cdRef.detectChanges();
            });
        };
        ShareMapUrlComponent.prototype.ngAfterViewInit = function () {
            this.resetUrl();
        };
        ShareMapUrlComponent.prototype.ngOnDestroy = function () {
            this.mapState$$.unsubscribe();
        };
        ShareMapUrlComponent.prototype.resetUrl = function (values) {
            if (values === void 0) { values = {}; }
            this.url = this.shareMapService.getUrlWithoutApi(this.map, this.publicShareOption);
        };
        ShareMapUrlComponent.prototype.copyTextToClipboard = function (textArea) {
            var successful = utils.Clipboard.copy(textArea);
            if (successful) {
                var translate = this.languageService.translate;
                var title = translate.instant('igo.context.shareMap.dialog.copyTitle');
                var msg = translate.instant('igo.context.shareMap.dialog.copyMsg');
                this.messageService.success(msg, title);
            }
        };
        return ShareMapUrlComponent;
    }());
    ShareMapUrlComponent.ɵfac = function ShareMapUrlComponent_Factory(t) { return new (t || ShareMapUrlComponent)(i0__namespace.ɵɵdirectiveInject(i3__namespace.LanguageService), i0__namespace.ɵɵdirectiveInject(i3__namespace.MessageService), i0__namespace.ɵɵdirectiveInject(ShareMapService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    ShareMapUrlComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ShareMapUrlComponent, selectors: [["igo-share-map-url"]], inputs: { map: "map" }, decls: 37, vars: 40, consts: [[1, "igo-input-container", "linkToShare"], ["matInput", "", "readonly", "", "rows", "3", 3, "placeholder", "value"], ["textArea", ""], [1, "igo-form-button-group"], ["mat-raised-button", "", 3, "click"], ["svgIcon", "content-copy"], [1, "mat-typography"], [4, "ngIf"]], template: function ShareMapUrlComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r12_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field");
                i0__namespace.ɵɵelement(2, "textarea", 1, 2);
                i0__namespace.ɵɵpipe(4, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div", 3);
                i0__namespace.ɵɵelementStart(6, "button", 4);
                i0__namespace.ɵɵlistener("click", function ShareMapUrlComponent_Template_button_click_6_listener() { i0__namespace.ɵɵrestoreView(_r12_1); var _r0 = i0__namespace.ɵɵreference(3); return ctx.copyTextToClipboard(_r0); });
                i0__namespace.ɵɵelement(7, "mat-icon", 5);
                i0__namespace.ɵɵtext(8);
                i0__namespace.ɵɵpipe(9, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "div");
                i0__namespace.ɵɵelement(11, "br");
                i0__namespace.ɵɵelementStart(12, "section", 6);
                i0__namespace.ɵɵtemplate(13, ShareMapUrlComponent_h4_13_Template, 3, 3, "h4", 7);
                i0__namespace.ɵɵpipe(14, "translate");
                i0__namespace.ɵɵelementStart(15, "ul");
                i0__namespace.ɵɵtemplate(16, ShareMapUrlComponent_li_16_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(17, "translate");
                i0__namespace.ɵɵtemplate(18, ShareMapUrlComponent_li_18_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(19, "translate");
                i0__namespace.ɵɵtemplate(20, ShareMapUrlComponent_li_20_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(21, "translate");
                i0__namespace.ɵɵtemplate(22, ShareMapUrlComponent_li_22_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(23, "translate");
                i0__namespace.ɵɵtemplate(24, ShareMapUrlComponent_li_24_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(25, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(26, ShareMapUrlComponent_h4_26_Template, 3, 3, "h4", 7);
                i0__namespace.ɵɵpipe(27, "translate");
                i0__namespace.ɵɵelementStart(28, "ul");
                i0__namespace.ɵɵtemplate(29, ShareMapUrlComponent_li_29_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(30, "translate");
                i0__namespace.ɵɵtemplate(31, ShareMapUrlComponent_li_31_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(32, "translate");
                i0__namespace.ɵɵtemplate(33, ShareMapUrlComponent_li_33_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(34, "translate");
                i0__namespace.ɵɵtemplate(35, ShareMapUrlComponent_li_35_Template, 3, 3, "li", 7);
                i0__namespace.ɵɵpipe(36, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(4, 14, "igo.context.shareMap.placeholderLink"))("value", ctx.url);
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(9, 16, "igo.context.shareMap.copy"), " ");
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(14, 18, "igo.context.shareMap.included") !== "");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(17, 20, "igo.context.shareMap.context") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(19, 22, "igo.context.shareMap.center") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(21, 24, "igo.context.shareMap.zoom") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(23, 26, "igo.context.shareMap.addedLayers") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(25, 28, "igo.context.shareMap.visibleInvisible") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(27, 30, "igo.context.shareMap.excluded") !== "");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(30, 32, "igo.context.shareMap.order") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(32, 34, "igo.context.shareMap.opacity") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(34, 36, "igo.context.shareMap.filterOgc") !== "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(36, 38, "igo.context.shareMap.filterTime") !== "");
            }
        }, directives: [i3__namespace$1.MatFormField, i3__namespace$2.MatInput, i5__namespace.MatButton, i9__namespace.MatIcon, i7__namespace.NgIf], pipes: [i6__namespace$1.TranslatePipe], styles: ["@charset \"UTF-8\";mat-form-field[_ngcontent-%COMP%]{width:100%}.linkToShare\\a0[_ngcontent-%COMP%] {padding:25px 5px 5px}.linkToShare\\a0[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;width:100%;line-height:1.3;height:40px;overflow-y:hidden;word-wrap:normal;word-break:break-all}.linkToShare\\a0[_ngcontent-%COMP%]   textarea.textAreaWithButton[_ngcontent-%COMP%]{width:calc(100% - 60px)}.linkToShare\\a0[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{float:right;margin:-10px 0}.igo-form-button-group[_ngcontent-%COMP%]{text-align:center;padding-top:10px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ShareMapUrlComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-share-map-url',
                        templateUrl: './share-map-url.component.html',
                        styleUrls: ['./share-map-url.component.scss']
                    }]
            }], function () { return [{ type: i3__namespace.LanguageService }, { type: i3__namespace.MessageService }, { type: ShareMapService }, { type: i0__namespace.ChangeDetectorRef }]; }, { map: [{
                    type: i0.Input
                }] });
    })();

    function ShareMapComponent_mat_tab_group_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tab-group");
            i0__namespace.ɵɵelementStart(1, "mat-tab", 2);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelement(3, "igo-share-map-api", 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-tab", 2);
            i0__namespace.ɵɵpipe(5, "translate");
            i0__namespace.ɵɵelement(6, "igo-share-map-url", 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(2, 4, "igo.context.shareMap.shareWithApi"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("map", ctx_r0.map);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("label", i0__namespace.ɵɵpipeBind1(5, 6, "igo.context.shareMap.shareWithUrl"));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("map", ctx_r0.map);
        }
    }
    function ShareMapComponent_igo_share_map_url_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-share-map-url", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("map", ctx_r1.map);
        }
    }
    var ShareMapComponent = /** @class */ (function () {
        function ShareMapComponent(config) {
            this.config = config;
            this.hasApi = false;
            this.hasApi = this.config.getConfig('context.url') ? true : false;
        }
        return ShareMapComponent;
    }());
    ShareMapComponent.ɵfac = function ShareMapComponent_Factory(t) { return new (t || ShareMapComponent)(i0__namespace.ɵɵdirectiveInject(i3__namespace.ConfigService)); };
    ShareMapComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ShareMapComponent, selectors: [["igo-share-map"]], inputs: { map: "map" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "map", 4, "ngIf"], [3, "label"], [3, "map"]], template: function ShareMapComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ShareMapComponent_mat_tab_group_0_Template, 7, 8, "mat-tab-group", 0);
                i0__namespace.ɵɵtemplate(1, ShareMapComponent_igo_share_map_url_1_Template, 1, 1, "igo-share-map-url", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.hasApi);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.hasApi);
            }
        }, directives: [i7__namespace.NgIf, i3__namespace$4.MatTabGroup, i3__namespace$4.MatTab, ShareMapApiComponent, ShareMapUrlComponent], pipes: [i6__namespace$1.TranslatePipe], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ShareMapComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-share-map',
                        templateUrl: './share-map.component.html',
                        styleUrls: ['./share-map.component.scss']
                    }]
            }], function () { return [{ type: i3__namespace.ConfigService }]; }, { map: [{
                    type: i0.Input
                }] });
    })();

    var IgoShareMapModule = /** @class */ (function () {
        function IgoShareMapModule() {
        }
        IgoShareMapModule.forRoot = function () {
            return {
                ngModule: IgoShareMapModule
            };
        };
        return IgoShareMapModule;
    }());
    IgoShareMapModule.ɵfac = function IgoShareMapModule_Factory(t) { return new (t || IgoShareMapModule)(); };
    IgoShareMapModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoShareMapModule });
    IgoShareMapModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i7.CommonModule,
                i4.FormsModule,
                i4.ReactiveFormsModule,
                i9.MatIconModule,
                i6$2.MatTooltipModule,
                i3$3.MatTabsModule,
                i3$1.MatFormFieldModule,
                i3$2.MatInputModule,
                i5.MatButtonModule,
                i3.IgoLanguageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoShareMapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i7.CommonModule,
                            i4.FormsModule,
                            i4.ReactiveFormsModule,
                            i9.MatIconModule,
                            i6$2.MatTooltipModule,
                            i3$3.MatTabsModule,
                            i3$1.MatFormFieldModule,
                            i3$2.MatInputModule,
                            i5.MatButtonModule,
                            i3.IgoLanguageModule
                        ],
                        exports: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent],
                        declarations: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoShareMapModule, { declarations: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent], imports: [i7.CommonModule,
                i4.FormsModule,
                i4.ReactiveFormsModule,
                i9.MatIconModule,
                i6$2.MatTooltipModule,
                i3$3.MatTabsModule,
                i3$1.MatFormFieldModule,
                i3$2.MatInputModule,
                i5.MatButtonModule,
                i3.IgoLanguageModule], exports: [ShareMapComponent, ShareMapUrlComponent, ShareMapApiComponent] });
    })();

    function SidenavComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 11);
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 12);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.sidenav.goBack"));
        }
    }
    function SidenavComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 13);
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵelement(2, "mat-icon", 14);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.sidenav.mainMenu"));
        }
    }
    function SidenavComponent_igo_panel_11_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 19);
            i0__namespace.ɵɵlistener("click", function SidenavComponent_igo_panel_11_button_3_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var ctx_r7 = i0__namespace.ɵɵnextContext(2); return ctx_r7.zoomToFeatureExtent(); });
            i0__namespace.ɵɵelement(1, "mat-icon", 20);
            i0__namespace.ɵɵelementEnd();
        }
    }
    function SidenavComponent_igo_panel_11_igo_feature_details_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-feature-details", 21);
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("feature", ctx_r6.feature);
        }
    }
    var _c0 = function () { return ["collapsed", "initial"]; };
    function SidenavComponent_igo_panel_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-panel", 6);
            i0__namespace.ɵɵelementStart(1, "button", 15);
            i0__namespace.ɵɵlistener("click", function SidenavComponent_igo_panel_11_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(); return ctx_r9.toggleTopPanel(); });
            i0__namespace.ɵɵelement(2, "mat-icon", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(3, SidenavComponent_igo_panel_11_button_3_Template, 2, 0, "button", 17);
            i0__namespace.ɵɵtemplate(4, SidenavComponent_igo_panel_11_igo_feature_details_4_Template, 1, 1, "igo-feature-details", 18);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            var _r1 = i0__namespace.ɵɵreference(4);
            i0__namespace.ɵɵproperty("title", ctx_r4.featureTitle);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("svgIcon", i0__namespace.ɵɵpureFunction0(4, _c0).indexOf(_r1.state) >= 0 ? "arrow_downward" : "arrow_upward");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r4.feature.geometry);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpureFunction0(5, _c0).indexOf(_r1.state) >= 0);
        }
    }
    var SidenavComponent = /** @class */ (function () {
        function SidenavComponent(titleService) {
            this.titleService = titleService;
            this.format = new GeoJSON__default["default"]();
            this._title = this.titleService.getTitle();
            this.topPanelState = 'initial';
        }
        Object.defineProperty(SidenavComponent.prototype, "map", {
            get: function () {
                return this._map;
            },
            set: function (value) {
                this._map = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SidenavComponent.prototype, "opened", {
            get: function () {
                return this._opened;
            },
            set: function (value) {
                this._opened = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SidenavComponent.prototype, "feature", {
            get: function () {
                return this._feature;
            },
            set: function (value) {
                this._feature = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SidenavComponent.prototype, "tool", {
            get: function () {
                return this._tool;
            },
            set: function (value) {
                this._tool = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SidenavComponent.prototype, "media", {
            get: function () {
                return this._media;
            },
            set: function (value) {
                this._media = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SidenavComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                if (value) {
                    this._title = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SidenavComponent.prototype, "featureTitle", {
            get: function () {
                return this.feature ? i5$1.getEntityTitle(this.feature) : undefined;
            },
            enumerable: false,
            configurable: true
        });
        SidenavComponent.prototype.zoomToFeatureExtent = function () {
            if (this.feature.geometry) {
                var olFeature = this.format.readFeature(this.feature, {
                    dataProjection: this.feature.projection,
                    featureProjection: this.map.projection
                });
                i1.moveToOlFeatures(this.map, [olFeature], i1.FeatureMotion.Zoom);
            }
        };
        SidenavComponent.prototype.toggleTopPanel = function () {
            if (this.topPanelState === 'initial') {
                this.topPanelState = 'expanded';
            }
            else {
                this.topPanelState = 'initial';
            }
        };
        return SidenavComponent;
    }());
    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$3.Title)); };
    SidenavComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavComponent, selectors: [["igo-sidenav"]], inputs: { map: "map", opened: "opened", feature: "feature", tool: "tool", media: "media", title: "title" }, decls: 12, vars: 8, consts: [["igoSidenavShim", "", "mode", "side", 3, "opened"], ["sidenav", ""], [1, "igo-sidenav-content"], ["initial", "50%", "initialMobile", "100%", "expanded", "calc(100% - 58px)", 3, "state"], ["topPanel", ""], [1, "igo-content"], [3, "title"], ["mat-icon-button", "", "panelLeftButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["mat-icon-button", "", "panelRightButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", 4, "ngIf"], ["igoFlexibleFill", "", 1, "igo-content"], [3, "title", 4, "ngIf"], ["mat-icon-button", "", "panelLeftButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip"], ["svgIcon", "arrow-back"], ["mat-icon-button", "", "panelRightButton", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip"], ["svgIcon", "menu"], ["mat-icon-button", "", "panelLeftButton", "", 1, "igo-icon-button", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", "panelRightButton", "", "class", "igo-icon-button", 3, "click", 4, "ngIf"], [3, "feature", 4, "ngIf"], ["mat-icon-button", "", "panelRightButton", "", 1, "igo-icon-button", 3, "click"], ["svgIcon", "zoom-in"], [3, "feature"]], template: function SidenavComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-sidenav", 0, 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "igo-flexible", 3, 4);
                i0__namespace.ɵɵelementStart(5, "div", 5);
                i0__namespace.ɵɵelementStart(6, "igo-panel", 6);
                i0__namespace.ɵɵpipe(7, "translate");
                i0__namespace.ɵɵtemplate(8, SidenavComponent_button_8_Template, 3, 3, "button", 7);
                i0__namespace.ɵɵtemplate(9, SidenavComponent_button_9_Template, 3, 3, "button", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "div", 9);
                i0__namespace.ɵɵtemplate(11, SidenavComponent_igo_panel_11_Template, 5, 6, "igo-panel", 10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("opened", ctx.opened);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("state", ctx.topPanelState);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("title", ctx.tool ? i0__namespace.ɵɵpipeBind1(7, 6, ctx.tool.title) : ctx.title);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.tool);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.tool);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.feature && ctx.media !== "mobile");
            }
        }, directives: [i2__namespace$1.MatSidenav, i5__namespace$1.FlexibleComponent, i5__namespace$1.PanelComponent, i7__namespace.NgIf, i5__namespace.MatButton, i6__namespace$2.MatTooltip, i9__namespace.MatIcon, i1__namespace$1.FeatureDetailsComponent], pipes: [i6__namespace$1.TranslatePipe], styles: ["[_nghost-%COMP%]     .igo-flexible-fill .igo-container, .igo-sidenav-content[_ngcontent-%COMP%]   .igo-flexible-fill[_ngcontent-%COMP%]   .igo-container[_ngcontent-%COMP%]{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}[_nghost-%COMP%]     .igo-flexible-fill .igo-container, .igo-sidenav-content[_ngcontent-%COMP%]   .igo-flexible-fill[_ngcontent-%COMP%]   .igo-container[_ngcontent-%COMP%]{border-top-width:1px;border-top-style:solid;border-top-color:#0003}mat-sidenav[_ngcontent-%COMP%]{-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd}[_nghost-%COMP%]{background-color:#fff}[_nghost-%COMP%]     mat-sidenav{z-index:3!important}mat-sidenav[_ngcontent-%COMP%]{width:400px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){mat-sidenav[_ngcontent-%COMP%]{width:calc(100% - 40px - 5px)}}.igo-sidenav-content[_ngcontent-%COMP%]{margin-top:50px;height:calc(100% - 50px)}igo-feature-details[_ngcontent-%COMP%]     table{width:100%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-sidenav',
                        templateUrl: './sidenav.component.html',
                        styleUrls: ['./sidenav.component.scss']
                    }]
            }], function () { return [{ type: i1__namespace$3.Title }]; }, { map: [{
                    type: i0.Input
                }], opened: [{
                    type: i0.Input
                }], feature: [{
                    type: i0.Input
                }], tool: [{
                    type: i0.Input
                }], media: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }] });
    })();

    var IgoSidenavModule = /** @class */ (function () {
        function IgoSidenavModule() {
        }
        IgoSidenavModule.forRoot = function () {
            return {
                ngModule: IgoSidenavModule
            };
        };
        return IgoSidenavModule;
    }());
    IgoSidenavModule.ɵfac = function IgoSidenavModule_Factory(t) { return new (t || IgoSidenavModule)(); };
    IgoSidenavModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoSidenavModule });
    IgoSidenavModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i7.CommonModule,
                i9.MatIconModule,
                i5.MatButtonModule,
                i2$1.MatSidenavModule,
                i6$2.MatTooltipModule,
                i3.IgoLanguageModule,
                i5$1.IgoPanelModule,
                i5$1.IgoFlexibleModule,
                i1.IgoFeatureModule,
                IgoContextManagerModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoSidenavModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i7.CommonModule,
                            i9.MatIconModule,
                            i5.MatButtonModule,
                            i2$1.MatSidenavModule,
                            i6$2.MatTooltipModule,
                            i3.IgoLanguageModule,
                            i5$1.IgoPanelModule,
                            i5$1.IgoFlexibleModule,
                            i1.IgoFeatureModule,
                            IgoContextManagerModule
                        ],
                        exports: [SidenavComponent],
                        declarations: [SidenavComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoSidenavModule, { declarations: [SidenavComponent], imports: [i7.CommonModule,
                i9.MatIconModule,
                i5.MatButtonModule,
                i2$1.MatSidenavModule,
                i6$2.MatTooltipModule,
                i3.IgoLanguageModule,
                i5$1.IgoPanelModule,
                i5$1.IgoFlexibleModule,
                i1.IgoFeatureModule,
                IgoContextManagerModule], exports: [SidenavComponent] });
    })();

    var IgoContextModule = /** @class */ (function () {
        function IgoContextModule() {
        }
        IgoContextModule.forRoot = function () {
            return {
                ngModule: IgoContextModule,
                providers: []
            };
        };
        return IgoContextModule;
    }());
    IgoContextModule.ɵfac = function IgoContextModule_Factory(t) { return new (t || IgoContextModule)(); };
    IgoContextModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoContextModule });
    IgoContextModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i3$2.MatInputModule, i3$1.MatFormFieldModule, i7$1.MatMenuModule], IgoContextImportExportModule,
            IgoContextManagerModule,
            IgoContextMapButtonModule,
            IgoShareMapModule,
            IgoSidenavModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoContextModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i3$2.MatInputModule, i3$1.MatFormFieldModule, i7$1.MatMenuModule],
                        declarations: [],
                        exports: [
                            IgoContextImportExportModule,
                            IgoContextManagerModule,
                            IgoContextMapButtonModule,
                            IgoShareMapModule,
                            IgoSidenavModule
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoContextModule, { imports: [i3$2.MatInputModule, i3$1.MatFormFieldModule, i7$1.MatMenuModule], exports: [IgoContextImportExportModule,
                IgoContextManagerModule,
                IgoContextMapButtonModule,
                IgoShareMapModule,
                IgoSidenavModule] });
    })();

    /*
     * Public API Surface of context
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BookmarkButtonComponent = BookmarkButtonComponent;
    exports.BookmarkDialogComponent = BookmarkDialogComponent;
    exports.ContextEditBindingDirective = ContextEditBindingDirective;
    exports.ContextEditComponent = ContextEditComponent;
    exports.ContextExportService = ContextExportService;
    exports.ContextFormComponent = ContextFormComponent;
    exports.ContextImportExportComponent = ContextImportExportComponent;
    exports.ContextImportService = ContextImportService;
    exports.ContextItemComponent = ContextItemComponent;
    exports.ContextListBindingDirective = ContextListBindingDirective;
    exports.ContextListComponent = ContextListComponent;
    exports.ContextPermissionsBindingDirective = ContextPermissionsBindingDirective;
    exports.ContextPermissionsComponent = ContextPermissionsComponent;
    exports.ContextService = ContextService;
    exports.ExportError = ExportError;
    exports.ExportInvalidFileError = ExportInvalidFileError;
    exports.ExportNothingToExportError = ExportNothingToExportError;
    exports.IgoContextImportExportModule = IgoContextImportExportModule;
    exports.IgoContextManagerModule = IgoContextManagerModule;
    exports.IgoContextMapButtonModule = IgoContextMapButtonModule;
    exports.IgoContextModule = IgoContextModule;
    exports.IgoShareMapModule = IgoShareMapModule;
    exports.IgoSidenavModule = IgoSidenavModule;
    exports.ImportError = ImportError;
    exports.ImportInvalidFileError = ImportInvalidFileError;
    exports.ImportNothingToImportError = ImportNothingToImportError;
    exports.ImportSRSError = ImportSRSError;
    exports.ImportSizeError = ImportSizeError;
    exports.ImportUnreadableFileError = ImportUnreadableFileError;
    exports.LayerContextDirective = LayerContextDirective;
    exports.MapContextDirective = MapContextDirective;
    exports.PoiButtonComponent = PoiButtonComponent;
    exports.PoiDialogComponent = PoiDialogComponent;
    exports.PoiService = PoiService;
    exports.ShareMapApiComponent = ShareMapApiComponent;
    exports.ShareMapComponent = ShareMapComponent;
    exports.ShareMapService = ShareMapService;
    exports.ShareMapUrlComponent = ShareMapUrlComponent;
    exports.SidenavComponent = SidenavComponent;
    exports.UserButtonComponent = UserButtonComponent;
    exports.UserDialogComponent = UserDialogComponent;
    exports.addContextToContextList = addContextToContextList;
    exports.addImportedFeaturesStyledToMap = addImportedFeaturesStyledToMap;
    exports.addImportedFeaturesToMap = addImportedFeaturesToMap;
    exports.computeLayerTitleFromFile = computeLayerTitleFromFile;
    exports.getFileExtension = getFileExtension;
    exports.handleFileExportError = handleFileExportError;
    exports.handleFileExportSuccess = handleFileExportSuccess;
    exports.handleFileImportError = handleFileImportError;
    exports.handleFileImportSuccess = handleFileImportSuccess;
    exports.handleInvalidFileImportError = handleInvalidFileImportError;
    exports.handleNothingToExportError = handleNothingToExportError;
    exports.handleNothingToImportError = handleNothingToImportError;
    exports.handleSizeFileImportError = handleSizeFileImportError;
    exports.handleUnreadbleFileImportError = handleUnreadbleFileImportError;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=igo2-context.umd.js.map
