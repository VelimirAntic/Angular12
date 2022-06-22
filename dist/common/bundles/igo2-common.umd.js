(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/tooltip'), require('@igo2/core'), require('typy'), require('rxjs'), require('rxjs/operators'), require('@igo2/utils'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/table'), require('@angular/forms'), require('moment'), require('@angular/cdk/a11y'), require('@angular/material/sort'), require('@angular/material/autocomplete'), require('@angular/material/datepicker'), require('@angular/material/input'), require('scroll-into-view-if-needed'), require('@angular/material/paginator'), require('@angular/common/http'), require('ts-cacheable'), require('@ngx-translate/core'), require('@angular/platform-browser'), require('@angular/cdk/overlay'), require('@angular/material/badge'), require('@angular/material/dialog'), require('@angular/cdk/portal'), require('angular-shepherd'), require('@angular/material/sidenav'), require('@angular/material/progress-spinner'), require('@angular/cdk/table'), require('@angular/cdk/collections'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@igo2/common', ['exports', '@angular/core', '@angular/common', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/list', '@angular/material/menu', '@angular/material/tooltip', '@igo2/core', 'typy', 'rxjs', 'rxjs/operators', '@igo2/utils', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/material/table', '@angular/forms', 'moment', '@angular/cdk/a11y', '@angular/material/sort', '@angular/material/autocomplete', '@angular/material/datepicker', '@angular/material/input', 'scroll-into-view-if-needed', '@angular/material/paginator', '@angular/common/http', 'ts-cacheable', '@ngx-translate/core', '@angular/platform-browser', '@angular/cdk/overlay', '@angular/material/badge', '@angular/material/dialog', '@angular/cdk/portal', 'angular-shepherd', '@angular/material/sidenav', '@angular/material/progress-spinner', '@angular/cdk/table', '@angular/cdk/collections', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.igo2 = global.igo2 || {}, global.igo2.common = {}), global.ng.core, global.ng.common, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.list, global.ng.material.menu, global.ng.material.tooltip, global.core, global.typy, global.rxjs, global.rxjs.operators, global.utils, global.ng.material.formField, global.ng.material.select, global.ng.material.core, global.ng.material.table, global.ng.forms, global.moment, global.ng.cdk.a11y, global.ng.material.sort, global.ng.material.autocomplete, global.ng.material.datepicker, global.ng.material.input, global.scrollIntoView, global.ng.material.paginator, global.ng.common.http, global.tsCacheable, global["ngxt-core"], global.ng.platformBrowser, global.ng.cdk.overlay, global.ng.material.badge, global.ng.material.dialog, global.ng.cdk.portal, global.angularShepherd, global.ng.material.sidenav, global.ng.material.progressSpinner, global.ng.cdk.table, global.ng.cdk.collections, global.ng.animations));
})(this, (function (exports, i0, i1$1, i4$1, i10$1, i7, i5$1, i1$6, i9$1, i6, i1$2, t, rxjs, operators, utils, i1, i2, i3, i4, i1$5, moment_, i2$2, i5, i9, i10, i2$3, scrollIntoView, i2$1, i1$3, tsCacheable, i6$1, i1$4, i1$7, badge, i1$8, portal, i3$1, i1$9, i2$4, table, collections, animations) { 'use strict';

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
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i10__namespace$1 = /*#__PURE__*/_interopNamespace(i10$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i1__namespace$6 = /*#__PURE__*/_interopNamespace(i1$6);
    var i9__namespace$1 = /*#__PURE__*/_interopNamespace(i9$1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var t__default = /*#__PURE__*/_interopDefaultLegacy(t);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$5 = /*#__PURE__*/_interopNamespace(i1$5);
    var moment___namespace = /*#__PURE__*/_interopNamespace(moment_);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$2);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i2__namespace$3 = /*#__PURE__*/_interopNamespace(i2$3);
    var scrollIntoView__default = /*#__PURE__*/_interopDefaultLegacy(scrollIntoView);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);
    var i1__namespace$7 = /*#__PURE__*/_interopNamespace(i1$7);
    var i1__namespace$8 = /*#__PURE__*/_interopNamespace(i1$8);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i1__namespace$9 = /*#__PURE__*/_interopNamespace(i1$9);
    var i2__namespace$4 = /*#__PURE__*/_interopNamespace(i2$4);

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

    exports.EntityOperationType = void 0;
    (function (EntityOperationType) {
        EntityOperationType["Insert"] = "Insert";
        EntityOperationType["Update"] = "Update";
        EntityOperationType["Delete"] = "Delete";
    })(exports.EntityOperationType || (exports.EntityOperationType = {}));
    exports.EntityTableColumnRenderer = void 0;
    (function (EntityTableColumnRenderer) {
        EntityTableColumnRenderer["Default"] = "Default";
        EntityTableColumnRenderer["HTML"] = "HTML";
        EntityTableColumnRenderer["UnsanitizedHTML"] = "UnsanitizedHTML";
        EntityTableColumnRenderer["Editable"] = "Editable";
        EntityTableColumnRenderer["Icon"] = "Icon";
        EntityTableColumnRenderer["ButtonGroup"] = "ButtonGroup";
    })(exports.EntityTableColumnRenderer || (exports.EntityTableColumnRenderer = {}));
    exports.EntityTableScrollBehavior = void 0;
    (function (EntityTableScrollBehavior) {
        EntityTableScrollBehavior["Auto"] = "auto";
        EntityTableScrollBehavior["Instant"] = "instant";
        EntityTableScrollBehavior["Smooth"] = "smooth";
    })(exports.EntityTableScrollBehavior || (exports.EntityTableScrollBehavior = {}));
    exports.EntityTableSelectionState = void 0;
    (function (EntityTableSelectionState) {
        EntityTableSelectionState["None"] = "None";
        EntityTableSelectionState["All"] = "All";
        EntityTableSelectionState["Some"] = "Some";
    })(exports.EntityTableSelectionState || (exports.EntityTableSelectionState = {}));

    /**
     * Get an entity's named property. Nested properties are supported
     * with the dotted notation. (i.e 'author.name')
     *
     * Note: this method is a 'best attempt' at getting an entity's property.
     * It fits the most common cases but you might need to explicitely define
     * a property getter when using an EntityStore, for example.
     * @param entity Entity
     * @param property Property name
     * @returns Property value
     */
    function getEntityProperty(entity, property) {
        return t__default["default"](entity, property).safeObject;
    }
    /**
     * Get an entity's id. An entity's id can be one of:
     * 'entity.meta.id', 'entity.meta.idProperty' or 'entity.id'.
     *
     * Note: See the note in the 'getEntityProperty' documentation.
     * @param entity Entity
     * @returns Entity id
     */
    function getEntityId(entity) {
        var meta = entity.meta || {};
        return meta.id ? meta.id : getEntityProperty(entity, meta.idProperty || 'id');
    }
    /**
     * Get an entity's title. An entity's title can be one of:
     * 'entity.meta.title', 'entity.meta.titleProperty' or 'entity.title'.
     * @param entity Entity
     * @returns Entity title
     */
    function getEntityTitle(entity) {
        var meta = entity.meta || {};
        return meta.title ? meta.title : getEntityProperty(entity, meta.titleProperty || 'title');
    }
    /**
     * Get an entity's HTML title. An entity's HTML title can be one of:
     * 'entity.meta.titleHtml', 'entity.meta.titleHtmlProperty' or 'entity.titleHtml'.
     * @param entity Entity
     * @returns Entity HTML title
     */
    function getEntityTitleHtml(entity) {
        var meta = entity.meta || {};
        return meta.titleHtml ? meta.titleHtml : getEntityProperty(entity, meta.titleHtmlProperty || 'titleHtml');
    }
    /**
     * Get an entity's icon. An entity's icon can be one of:
     * 'entity.meta.icon', 'entity.meta.iconProperty' or 'entity.icon'.
     * @param entity Entity
     * @returns Entity icon
     */
    function getEntityIcon(entity) {
        var meta = entity.meta || {};
        return meta.icon ? meta.icon : getEntityProperty(entity, meta.iconProperty || 'icon');
    }
    /**
     * Get an entity's revision.
     * @param entity Entity
     * @returns Entity revision
     */
    function getEntityRevision(entity) {
        var meta = entity.meta || {};
        return meta.revision || 0;
    }

    /**
     * This class is used to track a store's entities state
     */
    var EntityStateManager = /** @class */ (function () {
        function EntityStateManager(options) {
            if (options === void 0) { options = {}; }
            /**
             * State index
             */
            this.index = new Map();
            /**
             * Change emitter
             */
            this.change$ = new rxjs.ReplaySubject(1);
            this.store = options.store ? options.store : undefined;
            this.getKey = options.getKey
                ? options.getKey
                : (this.store ? this.store.getKey : getEntityId);
            this.next();
        }
        /**
         * Clear state
         */
        EntityStateManager.prototype.clear = function () {
            if (this.index.size > 0) {
                this.index.clear();
                this.next();
            }
        };
        /**
         * Get an entity's state
         * @param entity Entity
         * @returns State
         */
        EntityStateManager.prototype.get = function (entity) {
            return (this.index.get(this.getKey(entity)) || {});
        };
        /**
         * Set an entity's state
         * @param entity Entity
         * @param state State
         */
        EntityStateManager.prototype.set = function (entity, state) {
            this.setMany([entity], state);
        };
        /**
         * Set many entitie's state
         * @param entitie Entities
         * @param state State
         */
        EntityStateManager.prototype.setMany = function (entities, state) {
            var _this = this;
            entities.forEach(function (entity) {
                _this.index.set(_this.getKey(entity), Object.assign({}, state));
            });
            this.next();
        };
        /**
         * Set state of all entities that already have a state. This is not
         * the same as setting the state of all the store's entities.
         * @param state State
         */
        EntityStateManager.prototype.setAll = function (state) {
            var _this = this;
            Array.from(this.index.keys()).forEach(function (key) {
                _this.index.set(key, Object.assign({}, state));
            });
            this.next();
        };
        /**
         * Update an entity's state
         * @param entity Entity
         * @param changes State changes
         */
        EntityStateManager.prototype.update = function (entity, changes, exclusive) {
            if (exclusive === void 0) { exclusive = false; }
            this.updateMany([entity], changes, exclusive);
        };
        /**
         * Update many entitie's state
         * @param entitie Entities
         * @param changes State changes
         */
        EntityStateManager.prototype.updateMany = function (entities, changes, exclusive) {
            var _this = this;
            if (exclusive === void 0) { exclusive = false; }
            if (exclusive === true) {
                return this.updateManyExclusive(entities, changes);
            }
            entities.forEach(function (entity) {
                var state = Object.assign({}, _this.get(entity), changes);
                _this.index.set(_this.getKey(entity), state);
            });
            this.next();
        };
        /**
         * Reversee an entity's state
         * @param entity Entity
         * @param keys State keys to reverse
         */
        EntityStateManager.prototype.reverse = function (entity, keys) {
            this.reverseMany([entity], keys);
        };
        /**
         * Reverse many entitie's state
         * @param entitie Entities
         * @param keys State keys to reverse
         */
        EntityStateManager.prototype.reverseMany = function (entities, keys) {
            var _this = this;
            entities.forEach(function (entity) {
                var currentState = _this.get(entity);
                var changes = keys.reduce(function (acc, key) {
                    acc[key] = currentState[key] || false;
                    return acc;
                }, {});
                var reversedChanges = _this.reverseChanges(changes);
                var state = Object.assign({}, currentState, reversedChanges);
                _this.index.set(_this.getKey(entity), state);
            });
            this.next();
        };
        /**
         * Update state of all entities that already have a state. This is not
         * the same as updating the state of all the store's entities.
         * @param changes State
         */
        EntityStateManager.prototype.updateAll = function (changes) {
            var _this = this;
            var allKeys = this.getAllKeys();
            Array.from(allKeys).forEach(function (key) {
                var state = Object.assign({}, _this.index.get(key), changes);
                _this.index.set(key, state);
            });
            this.next();
        };
        /**
         * When some state changes are flagged as 'exclusive', reverse
         * the state of all other entities. Changes are reversable when
         * they are boolean.
         * @param entitie Entities
         * @param changes State changes
         */
        EntityStateManager.prototype.updateManyExclusive = function (entities, changes) {
            var _this = this;
            var reverseChanges = this.reverseChanges(changes);
            var keys = entities.map(function (entity) { return _this.getKey(entity); });
            var allKeys = new Set(keys.concat(Array.from(this.getAllKeys())));
            allKeys.forEach(function (key) {
                var state = _this.index.get(key) || {};
                if (keys.indexOf(key) >= 0) {
                    _this.index.set(key, Object.assign({}, state, changes));
                }
                else {
                    // Update only if the reverse changes would modify
                    // a key already present in the current state
                    var shouldUpdate = Object.keys(reverseChanges).some(function (changeKey) {
                        return state[changeKey] !== undefined &&
                            state[changeKey] !== reverseChanges[changeKey];
                    });
                    if (shouldUpdate === true) {
                        _this.index.set(key, Object.assign({}, state, reverseChanges));
                    }
                }
            });
            this.next();
        };
        /**
         * Compute a 'reversed' version of some state changes.
         * Changes are reversable when they are boolean.
         * @param changes State changes
         * @returns Reversed state changes
         */
        EntityStateManager.prototype.reverseChanges = function (changes) {
            return Object.entries(changes).reduce(function (reverseChanges, bunch) {
                var _a = __read(bunch, 2), changeKey = _a[0], value = _a[1];
                if (typeof value === typeof true) {
                    reverseChanges[changeKey] = !value;
                }
                return reverseChanges;
            }, {});
        };
        /**
         * Return all the keys in that state and in the store it's bound to, if any.
         * @returns Set of keys
         */
        EntityStateManager.prototype.getAllKeys = function () {
            var storeKeys = this.store ? Array.from(this.store.index.keys()) : [];
            return new Set(Array.from(this.index.keys()).concat(storeKeys));
        };
        /**
         * Emit 'change' event
         */
        EntityStateManager.prototype.next = function () {
            this.change$.next();
        };
        return EntityStateManager;
    }());

    /**
     * An entity view streams entities from an observable source. These entities
     * can be filtered or sorted without affecting the source. A view can also
     * combine data from multiple sources, joined together.
     */
    var EntityView = /** @class */ (function () {
        function EntityView(source$) {
            this.source$ = source$;
            /**
             * Observable stream of values
             */
            this.values$ = new rxjs.BehaviorSubject([]);
            /**
             * Whether this view has been lifted
             */
            this.lifted = false;
            /**
             * Join clauses
             */
            this.joins = [];
            /**
             * Observable of a filter clause
             */
            this.filter$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Observable of filter clauses
             */
            this.filters$ = new rxjs.BehaviorSubject([]);
            /**
             * Filters index
             */
            this.filterIndex = new Map();
            /**
             * Observable of a sort clause
             */
            this.sort$ = new rxjs.BehaviorSubject(undefined);
            this.getKey$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Number of entities
             */
            this.count$ = new rxjs.BehaviorSubject(0);
            /**
             * Whether the store is empty
             */
            this.empty$ = new rxjs.BehaviorSubject(true);
        }
        Object.defineProperty(EntityView.prototype, "getKey", {
            /**
             * Method for indexing
             */
            get: function () { return this.getKey$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityView.prototype, "count", {
            get: function () { return this.count$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityView.prototype, "empty", {
            get: function () { return this.empty$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityView.prototype, "index", {
            /**
             * Store index
             */
            get: function () { return this._index; },
            enumerable: false,
            configurable: true
        });
        /**
         * Get a value from the view by key
         * @param key Key
         * @returns Value
         */
        EntityView.prototype.get = function (key) {
            if (this._index === undefined) {
                throw new Error('This view has no index, therefore, this method is unavailable.');
            }
            return this.index.get(key);
        };
        /**
         * Get all the values
         * @returns Array of values
         */
        EntityView.prototype.all = function () {
            return this.values$.value;
        };
        /**
         * Observe all the values
         * @returns Observable of values
         */
        EntityView.prototype.all$ = function () {
            return this.values$;
        };
        /**
         * Get the first value that respects a criteria
         * @returns A value
         */
        EntityView.prototype.firstBy = function (clause) {
            return this.values$.value.find(clause);
        };
        /**
         * Observe the first value that respects a criteria
         * @returns Observable of a value
         */
        EntityView.prototype.firstBy$ = function (clause) {
            return this.values$.pipe(operators.map(function (values) { return values.find(clause); }));
        };
        /**
         * Get all the values that respect a criteria
         * @returns Array of values
         */
        EntityView.prototype.manyBy = function (clause) {
            return this.values$.value.filter(clause);
        };
        /**
         * Observe all the values that respect a criteria
         * @returns Observable of values
         */
        EntityView.prototype.manyBy$ = function (clause) {
            return this.values$.pipe(operators.map(function (values) { return values.filter(clause); }));
        };
        /**
         * Clear the filter and sort and unsubscribe from the source
         */
        EntityView.prototype.clear = function () {
            this.filter(undefined);
            this.sort(undefined);
        };
        EntityView.prototype.destroy = function () {
            if (this.values$$ !== undefined) {
                this.values$$.unsubscribe();
            }
            this.clear();
        };
        /**
         * Create an index
         * @param getKey Method to get a value's id
         * @returns The view
         */
        EntityView.prototype.createIndex = function (getKey) {
            this._index = new Map();
            this.getKey$.next(getKey);
            return this;
        };
        /**
         * Join another source to the stream (chainable)
         * @param clause Join clause
         * @returns The view
         */
        EntityView.prototype.join = function (clause) {
            if (this.lifted === true) {
                throw new Error('This view has already been lifted, therefore, no join is allowed.');
            }
            this.joins.push(clause);
            return this;
        };
        /**
         * Filter values (chainable)
         * @param clause Filter clause
         * @returns The view
         */
        EntityView.prototype.filter = function (clause) {
            this.filter$.next(clause);
            return this;
        };
        /**
         * @param clause Filter clause
         * @returns The filter id
         */
        EntityView.prototype.addFilter = function (clause) {
            var id = utils.uuid();
            this.filterIndex.set(id, clause);
            this.filters$.next(Array.from(this.filterIndex.values()));
            return id;
        };
        /**
         * Remove a filter by id
         * @param clause Filter clause
         */
        EntityView.prototype.removeFilter = function (id) {
            this.filterIndex.delete(id);
            this.filters$.next(Array.from(this.filterIndex.values()));
        };
        /**
         * Sort values (chainable)
         * @param clauseSort clause
         * @returns The view
         */
        EntityView.prototype.sort = function (clause) {
            this.sort$.next(clause);
            return this;
        };
        /**
         * Create the final observable
         * @returns Observable
         */
        EntityView.prototype.lift = function () {
            var _this = this;
            this.lifted = true;
            var source$ = this.joins.length > 0 ? this.liftJoinedSource() : this.liftSource();
            var observables$ = [
                source$,
                this.filters$,
                this.filter$,
                this.sort$,
                this.getKey$
            ];
            this.values$$ = rxjs.combineLatest(observables$)
                .pipe(operators.skip(1), operators.debounceTime(5))
                .subscribe(function (bunch) {
                var _a = __read(bunch, 5), _values = _a[0], filters = _a[1], filter = _a[2], sort = _a[3], getKey = _a[4];
                var values = _this.processValues(_values, filters, filter, sort);
                var generateIndex = getKey !== undefined;
                _this.setValues(values, generateIndex);
            });
        };
        /**
         * Create the source observable when no joins are defined
         * @returns Observable
         */
        EntityView.prototype.liftSource = function () {
            return this.source$;
        };
        /**
         * Create the source observable when joins are defined
         * @returns Observable
         */
        EntityView.prototype.liftJoinedSource = function () {
            var _this = this;
            var sources$ = [this.source$, rxjs.combineLatest(this.joins.map(function (join) { return join.source; }))];
            return rxjs.combineLatest(sources$)
                .pipe(operators.map(function (bunch) {
                var _a = __read(bunch, 2), entities = _a[0], joinData = _a[1];
                return entities.reduce(function (values, entity) {
                    var value = _this.computeJoinedValue(entity, joinData);
                    if (value !== undefined) {
                        values.push(value);
                    }
                    return values;
                }, []);
            }));
        };
        /**
         * Apply joins to a source's entity and return the final value
         * @returns Final value
         */
        EntityView.prototype.computeJoinedValue = function (entity, joinData) {
            var value = entity;
            var joinIndex = 0;
            while (value !== undefined && joinIndex < this.joins.length) {
                value = this.joins[joinIndex].reduce(value, joinData[joinIndex]);
                joinIndex += 1;
            }
            return value;
        };
        /**
         * Filter and sort values before streaming them
         * @param values Values
         * @param filters Filter clauses
         * @param filter Filter clause
         * @param sort Sort clause
         * @returns Filtered and sorted values
         */
        EntityView.prototype.processValues = function (values, filters, filter, sort) {
            values = values.slice(0);
            values = this.filterValues(values, filters.concat([filter]));
            values = this.sortValues(values, sort);
            return values;
        };
        /**
         * Filter values
         * @param values Values
         * @param filters Filter clauses
         * @returns Filtered values
         */
        EntityView.prototype.filterValues = function (values, clauses) {
            if (clauses.length === 0) {
                return values;
            }
            return values
                .filter(function (value) {
                return clauses
                    .filter(function (clause) { return clause !== undefined; })
                    .every(function (clause) { return clause(value); });
            });
        };
        /**
         * Sort values
         * @param values Values
         * @param sort Sort clause
         * @returns Sorted values
         */
        EntityView.prototype.sortValues = function (values, clause) {
            if (clause === undefined) {
                return values;
            }
            return values.sort(function (v1, v2) {
                return utils.ObjectUtils.naturalCompare(clause.valueAccessor(v1), clause.valueAccessor(v2), clause.direction, clause.nullsFirst);
            });
        };
        /**
         * Set value and optionally generate an index
         * @param values Values
         * @param generateIndex boolean
         */
        EntityView.prototype.setValues = function (values, generateIndex) {
            if (generateIndex === true) {
                this._index = this.generateIndex(values);
            }
            this.values$.next(values);
            var count = values.length;
            var empty = count === 0;
            this.count$.next(count);
            this.empty$.next(empty);
        };
        /**
         * Generate a complete index of all the values
         * @param entities Entities
         * @returns Index
         */
        EntityView.prototype.generateIndex = function (values) {
            var _this = this;
            var entries = values.map(function (value) { return [_this.getKey(value), value]; });
            return new Map(entries);
        };
        return EntityView;
    }());

    /**
     * An entity store class holds any number of entities
     * as well as their state. It can be observed, filtered and sorted and
     * provides methods to insert, update or delete entities.
     */
    var EntityStore = /** @class */ (function () {
        function EntityStore(entities, options) {
            if (options === void 0) { options = {}; }
            /**
             * Observable of the raw entities
             */
            this.entities$ = new rxjs.BehaviorSubject([]);
            /**
             * Number of entities
             */
            this.count$ = new rxjs.BehaviorSubject(0);
            /**
             * Whether the store is empty
             */
            this.empty$ = new rxjs.BehaviorSubject(true);
            this._pristine = true;
            /**
             * Strategies
             */
            this.strategies = [];
            this.getKey = options.getKey ? options.getKey : getEntityId;
            this.getProperty = options.getProperty ? options.getProperty : getEntityProperty;
            this.state = this.createStateManager();
            this.view = this.createDataView();
            this.stateView = this.createStateView();
            this.view.lift();
            this.stateView.lift();
            if (entities.length > 0) {
                this.load(entities);
            }
            else {
                this._index = this.generateIndex(entities);
            }
        }
        Object.defineProperty(EntityStore.prototype, "count", {
            get: function () { return this.count$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "empty", {
            get: function () { return this.empty$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "index", {
            /**
             * Store index
             */
            get: function () { return this._index; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityStore.prototype, "pristine", {
            /**
             * Store index
             */
            get: function () { return this._pristine; },
            enumerable: false,
            configurable: true
        });
        /**
         * Get an entity from the store by key
         * @param key Key
         * @returns Entity
         */
        EntityStore.prototype.get = function (key) {
            return this.index.get(key);
        };
        /**
         * Get all entities in the store
         * @returns Array of entities
         */
        EntityStore.prototype.all = function () {
            return this.entities$.value;
        };
        /**
         * Set this store's entities
         * @param entities Entities
         */
        EntityStore.prototype.load = function (entities, pristine) {
            if (pristine === void 0) { pristine = true; }
            this._index = this.generateIndex(entities);
            this._pristine = pristine;
            this.next();
        };
        /**
         * Clear the store's entities but keep the state and views intact.
         * Views won't return any data but future data will be subject to the
         * current views filter and sort
         */
        EntityStore.prototype.softClear = function () {
            if (this.index && this.index.size > 0) {
                this.index.clear();
                this._pristine = true;
                this.next();
            }
            else if (this.index) {
                this.updateCount();
            }
        };
        /**
         * Clear the store's entities, state and views
         */
        EntityStore.prototype.clear = function () {
            this.stateView.clear();
            this.view.clear();
            this.state.clear();
            this.softClear();
        };
        EntityStore.prototype.destroy = function () {
            this.stateView.destroy();
            this.view.destroy();
            this.clear();
        };
        /**
         * Insert an entity into the store
         * @param entity Entity
         */
        EntityStore.prototype.insert = function (entity) {
            this.insertMany([entity]);
        };
        /**
         * Insert many entities into the store
         * @param entities Entities
         */
        EntityStore.prototype.insertMany = function (entities) {
            var _this = this;
            entities.forEach(function (entity) { return _this.index.set(_this.getKey(entity), entity); });
            this._pristine = false;
            this.next();
        };
        /**
         * Update or insert an entity into the store
         * @param entity Entity
         */
        EntityStore.prototype.update = function (entity) {
            this.updateMany([entity]);
        };
        /**
         * Update or insert many entities into the store
         * @param entities Entities
         */
        EntityStore.prototype.updateMany = function (entities) {
            var _this = this;
            entities.forEach(function (entity) { return _this.index.set(_this.getKey(entity), entity); });
            this._pristine = false;
            this.next();
        };
        /**
         * Delete an entity from the store
         * @param entity Entity
         */
        EntityStore.prototype.delete = function (entity) {
            this.deleteMany([entity]);
        };
        /**
         * Delete many entities from the store
         * @param entities Entities
         */
        EntityStore.prototype.deleteMany = function (entities) {
            var _this = this;
            entities.forEach(function (entity) { return _this.index.delete(_this.getKey(entity)); });
            this._pristine = false;
            this.next();
        };
        /**
         * Add a strategy to this store
         * @param strategy Entity store strategy
         * @returns Entity store
         */
        EntityStore.prototype.addStrategy = function (strategy, activate) {
            if (activate === void 0) { activate = false; }
            var existingStrategy = this.strategies.find(function (_strategy) {
                return strategy.constructor === _strategy.constructor;
            });
            if (existingStrategy !== undefined) {
                throw new Error('A strategy of this type already exists on that EntityStore.');
            }
            this.strategies.push(strategy);
            strategy.bindStore(this);
            if (activate === true) {
                strategy.activate();
            }
            return this;
        };
        /**
         * Remove a strategy from this store
         * @param strategy Entity store strategy
         * @returns Entity store
         */
        EntityStore.prototype.removeStrategy = function (strategy) {
            var index = this.strategies.indexOf(strategy);
            if (index >= 0) {
                this.strategies.splice(index, 1);
                strategy.unbindStore(this);
            }
            return this;
        };
        /**
         * Return strategies of a given type
         * @param type Entity store strategy class
         * @returns Strategies
         */
        EntityStore.prototype.getStrategyOfType = function (type) {
            return this.strategies.find(function (strategy) {
                return strategy instanceof type;
            });
        };
        /**
         * Activate strategies of a given type
         * @param type Entity store strategy class
         */
        EntityStore.prototype.activateStrategyOfType = function (type) {
            var strategy = this.getStrategyOfType(type);
            if (strategy !== undefined) {
                strategy.activate();
            }
        };
        /**
         * Deactivate strategies of a given type
         * @param type Entity store strategy class
         */
        EntityStore.prototype.deactivateStrategyOfType = function (type) {
            var strategy = this.getStrategyOfType(type);
            if (strategy !== undefined) {
                strategy.deactivate();
            }
        };
        /**
         * Generate a complete index of all the entities
         * @param entities Entities
         * @returns Index
         */
        EntityStore.prototype.generateIndex = function (entities) {
            var _this = this;
            var entries = entities.map(function (entity) { return [_this.getKey(entity), entity]; });
            return new Map(entries);
        };
        /**
         * Push the index's entities into the entities$ observable
         */
        EntityStore.prototype.next = function () {
            this.entities$.next(Array.from(this.index.values()));
            this.updateCount();
        };
        /**
         * Update the store's count and empty
         */
        EntityStore.prototype.updateCount = function () {
            var count = this.index.size;
            var empty = count === 0;
            this.count$.next(count);
            this.empty$.next(empty);
        };
        /**
         * Create the entity state manager
         * @returns EntityStateManager
         */
        EntityStore.prototype.createStateManager = function () {
            return new EntityStateManager({ store: this });
        };
        /**
         * Create the data view
         * @returns EntityView<E>
         */
        EntityStore.prototype.createDataView = function () {
            return new EntityView(this.entities$);
        };
        /**
         * Create the state view
         * @returns EntityView<EntityRecord<E>>
         */
        EntityStore.prototype.createStateView = function () {
            var _this = this;
            return new EntityView(this.view.all$())
                .join({
                source: this.state.change$,
                reduce: function (entity) {
                    var key = _this.getKey(entity);
                    var state = _this.state.get(entity);
                    var currentRecord = _this.stateView.get(key);
                    if (currentRecord !== undefined &&
                        currentRecord.entity === entity &&
                        _this.statesAreTheSame(currentRecord.state, state)) {
                        return currentRecord;
                    }
                    var revision = currentRecord ? currentRecord.revision + 1 : 1;
                    var ref = key + "-" + revision;
                    return { entity: entity, state: state, revision: revision, ref: ref };
                }
            })
                .createIndex(function (record) { return _this.getKey(record.entity); });
        };
        EntityStore.prototype.statesAreTheSame = function (currentState, newState) {
            if (currentState === newState) {
                return true;
            }
            var currentStateIsEmpty = Object.keys(currentState).length === 0;
            var newStateIsEmpty = Object.keys(newState).length === 0;
            return currentStateIsEmpty && newStateIsEmpty;
        };
        return EntityStore;
    }());

    /**
     * This class is used to synchronize a component's changes
     * detection with an EntityStore changes. For example, it is frequent
     * to have a component subscribe to a store's selected entity and, at the same time,
     * this component provides a way to select an entity with, let's say, a click.
     *
     * This class automatically handles those case and triggers the compoent's
     * change detection when needed.
     *
     * Note: If the component observes the store's stateView, a workspace is
     * probably not required because the stateView catches any changes to the
     * entities and their state.
     */
    var EntityStoreWatcher = /** @class */ (function () {
        function EntityStoreWatcher(store, cdRef) {
            /**
             * Component inner state
             */
            this.innerStateIndex = new Map();
            this.setChangeDetector(cdRef);
            this.setStore(store);
        }
        EntityStoreWatcher.prototype.destroy = function () {
            this.setChangeDetector(undefined);
            this.setStore(undefined);
        };
        /**
         * Bind this workspace to a store and start watching for changes
         * @param store Entity store
         */
        EntityStoreWatcher.prototype.setStore = function (store) {
            if (store === undefined) {
                this.teardownObservers();
                this.innerStateIndex.clear();
                this.store = undefined;
                return;
            }
            this.setStore(undefined);
            this.store = store;
            this.setupObservers();
            this.detectChanges();
        };
        /**
         * Bind this workspace to a component's change detector
         * @param cdRef Change detector
         */
        EntityStoreWatcher.prototype.setChangeDetector = function (cdRef) {
            this.cdRef = cdRef;
        };
        /**
         * Set up observers on a store's entities and their state
         * @param store Entity store
         */
        EntityStoreWatcher.prototype.setupObservers = function () {
            var _this = this;
            this.teardownObservers();
            this.entities$$ = this.store.entities$
                .subscribe(function (entities) { return _this.onEntitiesChange(entities); });
            this.state$$ = this.store.state.change$
                .pipe(operators.skip(1))
                .subscribe(function () { return _this.onStateChange(); });
        };
        /**
         * Teardown store observers
         */
        EntityStoreWatcher.prototype.teardownObservers = function () {
            if (this.entities$$ !== undefined) {
                this.entities$$.unsubscribe();
            }
            if (this.state$$ !== undefined) {
                this.state$$.unsubscribe();
            }
            this.entities$$ = undefined;
            this.state$$ = undefined;
        };
        /**
         * When the entities change, always trigger the changes detection
         */
        EntityStoreWatcher.prototype.onEntitiesChange = function (entities) {
            this.detectChanges();
        };
        /**
         * When the entities state change, trigger the change detection
         * only if the component has not handled these changes yet. For example,
         * the component might have initiated thoses changes itself.
         */
        EntityStoreWatcher.prototype.onStateChange = function () {
            var e_1, _a;
            var changesDetected = false;
            var storeIndex = this.store.state.index;
            var innerIndex = this.innerStateIndex;
            if (storeIndex.size !== innerIndex.size) {
                changesDetected = this.detectChanges();
            }
            var storeKeys = Array.from(storeIndex.keys());
            try {
                for (var storeKeys_1 = __values(storeKeys), storeKeys_1_1 = storeKeys_1.next(); !storeKeys_1_1.done; storeKeys_1_1 = storeKeys_1.next()) {
                    var key = storeKeys_1_1.value;
                    var storeValue = storeIndex.get(key);
                    var innerValue = innerIndex.get(key);
                    if (changesDetected === false) {
                        if (innerValue === undefined) {
                            changesDetected = this.detectChanges();
                        }
                        else if (!utils.ObjectUtils.objectsAreEquivalent(storeValue, innerValue)) {
                            changesDetected = this.detectChanges();
                        }
                    }
                    this.innerStateIndex.set(key, Object.assign({}, storeValue));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (storeKeys_1_1 && !storeKeys_1_1.done && (_a = storeKeys_1.return)) _a.call(storeKeys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Trigger the change detection of the workspace is bound to a change detector
         */
        EntityStoreWatcher.prototype.detectChanges = function () {
            if (this.cdRef !== undefined) {
                this.cdRef.detectChanges();
            }
            return true;
        };
        return EntityStoreWatcher;
    }());

    /**
     * This class holds a reference to the insert, update and delete
     * operations performed on a store. This is useful to commit
     * these operations in a single pass or to cancel them.
     */
    var EntityTransaction = /** @class */ (function () {
        function EntityTransaction(options) {
            if (options === void 0) { options = {}; }
            this.inCommitPhase$ = new rxjs.BehaviorSubject(false);
            this.getKey = options.getKey ? options.getKey : getEntityId;
            this.operations = new EntityStore([], {
                getKey: function (operation) { return operation.key; }
            });
        }
        Object.defineProperty(EntityTransaction.prototype, "empty$", {
            /**
             * Whether there are pending operations
             */
            get: function () { return this.operations.empty$; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTransaction.prototype, "empty", {
            /**
             * Whether there are pending operations
             */
            get: function () { return this.empty$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTransaction.prototype, "inCommitPhase", {
            /**
             * Whether thise store is in commit phase
             */
            get: function () { return this.inCommitPhase$.value; },
            enumerable: false,
            configurable: true
        });
        EntityTransaction.prototype.destroy = function () {
            this.operations.destroy();
        };
        /**
         * Insert an entity into a store. If no store is specified, an insert
         * operation is still created but the transaction won't add the new
         * entity to the store.
         * @param current The entity to insert
         * @param store Optional: The store to insert the entity into
         * @param meta Optional: Any metadata on the operation
         */
        EntityTransaction.prototype.insert = function (current, store, meta) {
            var existingOperation = this.getOperationByEntity(current);
            if (existingOperation !== undefined) {
                this.removeOperation(existingOperation);
            }
            this.doInsert(current, store, meta);
        };
        /**
         * Update an entity in a store. If no store is specified, an update
         * operation is still created but the transaction won't update the
         * entity into the store.
         * @param previous The entity before update
         * @param current The entity after update
         * @param store Optional: The store to update the entity into
         * @param meta Optional: Any metadata on the operation
         */
        EntityTransaction.prototype.update = function (previous, current, store, meta) {
            var existingOperation = this.getOperationByEntity(current);
            if (existingOperation !== undefined) {
                this.removeOperation(existingOperation);
                if (existingOperation.type === exports.EntityOperationType.Insert) {
                    this.doInsert(current, store, meta);
                    return;
                }
                else if (existingOperation.type === exports.EntityOperationType.Update) {
                    previous = existingOperation.previous;
                }
            }
            this.doUpdate(previous, current, store, meta);
        };
        /**
         * Delete an entity from a store. If no store is specified, a delete
         * operation is still created but the transaction won't remove the
         * entity from the store.
         * @param previous The entity before delete
         * @param store Optional: The store to delete the entity from
         * @param meta Optional: Any metadata on the operation
         */
        EntityTransaction.prototype.delete = function (previous, store, meta) {
            var existingOperation = this.getOperationByEntity(previous);
            if (existingOperation !== undefined) {
                this.removeOperation(existingOperation);
                if (existingOperation.type === exports.EntityOperationType.Insert) {
                    if (store !== undefined) {
                        store.delete(previous);
                    }
                    return;
                }
            }
            this.doDelete(previous, store, meta);
        };
        /**
         * Commit operations the transaction. This method doesn't do much
         * in itself. The handler it receives does the hard work and it's
         * implementation is left to the caller. This method simply wraps
         * the handler into an error catching mechanism to update
         * the transaction afterward. The caller needs to subscribe to this
         * method's output (observable) for the commit to be performed.
         * @param operations Operations to commit
         * @param handler Function that handles the commit operation
         * @returns The handler output (observable)
         */
        EntityTransaction.prototype.commit = function (operations, handler) {
            var _this = this;
            this.inCommitPhase$.next(true);
            return handler(this, operations)
                .pipe(operators.catchError(function () { return rxjs.of(new Error()); }), operators.tap(function (result) {
                if (result instanceof Error) {
                    _this.onCommitError(operations);
                }
                else {
                    _this.onCommitSuccess(operations);
                }
            }));
        };
        /**
         * Commit all the operations of the transaction.
         * @param handler Function that handles the commit operation
         * @returns The handler output (observable)
         */
        EntityTransaction.prototype.commitAll = function (handler) {
            var operations = this.getOperationsInCommit();
            return this.commit(operations, handler);
        };
        /**
         * Rollback this transaction
         */
        EntityTransaction.prototype.rollback = function () {
            this.rollbackOperations(this.operations.all());
        };
        /**
         * Rollback specific operations
         */
        EntityTransaction.prototype.rollbackOperations = function (operations) {
            var e_1, _a;
            this.checkInCommitPhase();
            var operationsFactory = function () { return new Map([
                [exports.EntityOperationType.Delete, []],
                [exports.EntityOperationType.Update, []],
                [exports.EntityOperationType.Insert, []]
            ]); };
            var storesOperations = new Map();
            try {
                // Group operations by store and by operation type.
                // Grouping operations allows us to revert them in bacth, thus, triggering
                // observables only one per operation type.
                for (var operations_1 = __values(operations), operations_1_1 = operations_1.next(); !operations_1_1.done; operations_1_1 = operations_1.next()) {
                    var operation = operations_1_1.value;
                    var store = operation.store;
                    if (operation.store === undefined) {
                        continue;
                    }
                    var storeOperations = storesOperations.get(store);
                    if (storeOperations === undefined) {
                        storeOperations = operationsFactory();
                        storesOperations.set(store, storeOperations);
                    }
                    storeOperations.get(operation.type).push(operation);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (operations_1_1 && !operations_1_1.done && (_a = operations_1.return)) _a.call(operations_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            Array.from(storesOperations.keys()).forEach(function (store) {
                var storeOperations = storesOperations.get(store);
                var deletes = storeOperations.get(exports.EntityOperationType.Delete);
                store.insertMany(deletes.map(function (_delete) { return _delete.previous; }));
                var updates = storeOperations.get(exports.EntityOperationType.Update);
                store.updateMany(updates.map(function (_update) { return _update.previous; }));
                var inserts = storeOperations.get(exports.EntityOperationType.Insert);
                store.deleteMany(inserts.map(function (_insert) { return _insert.current; }));
            });
            this.operations.deleteMany(operations);
            this.inCommitPhase$.next(false);
        };
        /**
         * Clear this transaction
         * @todo Raise event and synchronize stores?
         */
        EntityTransaction.prototype.clear = function () {
            this.operations.clear();
            this.inCommitPhase$.next(false);
        };
        /**
         * Get any existing operation on an entity
         * @param entity Entity
         * @returns Either an insert, update or delete operation
         */
        EntityTransaction.prototype.getOperationByEntity = function (entity) {
            return this.operations.get(this.getKey(entity));
        };
        /**
         * Merge another transaction in this one
         * @param transaction Another transaction
         */
        EntityTransaction.prototype.mergeTransaction = function (transaction) {
            var _this = this;
            this.checkInCommitPhase();
            var operations = transaction.operations.all();
            operations.forEach(function (operation) {
                _this.addOperation(operation);
            });
        };
        /**
         * Create an insert operation and add an entity to the store
         * @param current The entity to insert
         * @param store Optional: The store to insert the entity into
         * @param meta Optional: Any metadata on the operation
         */
        EntityTransaction.prototype.doInsert = function (current, store, meta) {
            this.addOperation({
                key: this.getKey(current),
                type: exports.EntityOperationType.Insert,
                previous: undefined,
                current: current,
                store: store,
                meta: meta
            });
            if (store !== undefined) {
                store.insert(current);
            }
        };
        /**
         * Create an update operation and update an entity into the store
         * @param previous The entity before update
         * @param current The entity after update
         * @param store Optional: The store to update the entity into
         * @param meta Optional: Any metadata on the operation
         */
        EntityTransaction.prototype.doUpdate = function (previous, current, store, meta) {
            this.addOperation({
                key: this.getKey(current),
                type: exports.EntityOperationType.Update,
                previous: previous,
                current: current,
                store: store,
                meta: meta
            });
            if (store !== undefined) {
                store.update(current);
            }
        };
        /**
         * Create a delete operation and delete an entity from the store
         * @param previous The entity before delete
         * @param store Optional: The store to delete the entity from
         * @param meta Optional: Any metadata on the operation
         */
        EntityTransaction.prototype.doDelete = function (previous, store, meta) {
            this.addOperation({
                key: this.getKey(previous),
                type: exports.EntityOperationType.Delete,
                previous: previous,
                current: undefined,
                store: store,
                meta: meta
            });
            if (store !== undefined) {
                store.delete(previous);
            }
        };
        /**
         * Remove committed operations from store
         * @param operations Commited operations
         * @todo Raise event and synchronize stores?
         */
        EntityTransaction.prototype.resolveOperations = function (operations) {
            this.operations.deleteMany(operations);
        };
        /**
         * On commit success, resolve commited operations and exit commit phase
         * @param operations Commited operations
         */
        EntityTransaction.prototype.onCommitSuccess = function (operations) {
            this.resolveOperations(operations);
            this.inCommitPhase$.next(false);
        };
        /**
         * On commit error, abort transaction
         * @param operations Commited operations
         */
        EntityTransaction.prototype.onCommitError = function (operations) {
            this.inCommitPhase$.next(false);
        };
        /**
         * Add an operation to the operations store
         * @param operation Operation to add
         */
        EntityTransaction.prototype.addOperation = function (operation) {
            this.checkInCommitPhase();
            this.operations.insert(operation);
            this.operations.state.update(operation, { added: true });
        };
        /**
         * Remove an operation from the operations store
         * @param operation Operation to remove
         */
        EntityTransaction.prototype.removeOperation = function (operation) {
            this.checkInCommitPhase();
            this.operations.delete(operation);
            this.operations.state.update(operation, { added: false });
        };
        /**
         * Get all the operations to commit
         * @returns Operations to commit
         */
        EntityTransaction.prototype.getOperationsInCommit = function () {
            return this.operations.stateView
                .manyBy(function (value) {
                return value.state.added === true;
            })
                .map(function (value) { return value.entity; });
        };
        /**
         * Check if the transaction is in the commit phase and throw an error if it is
         */
        EntityTransaction.prototype.checkInCommitPhase = function () {
            if (this.inCommitPhase === true) {
                throw new Error('This transaction is in the commit phase. Cannot complete this operation.');
            }
        };
        return EntityTransaction;
    }());

    /**
     * Entity store strategies. They can do pretty much anything during a store's
     * lifetime. For example, they may act as triggers when something happens.
     * Sharing a strategy is a good idea when multiple strategies would have
     * on cancelling effect on each other.
     *
     * At creation, strategy is inactive and needs to be manually activated.
     */
    var EntityStoreStrategy = /** @class */ (function () {
        function EntityStoreStrategy(options) {
            if (options === void 0) { options = {}; }
            this.options = options;
            /**
             * Feature store
             * @internal
             */
            this.stores = [];
            this.active$ = new rxjs.BehaviorSubject(false);
            this.options = options;
        }
        Object.defineProperty(EntityStoreStrategy.prototype, "active", {
            /**
             * Whether this strategy is active
             * @internal
             */
            get: function () { return this.active$.value; },
            enumerable: false,
            configurable: true
        });
        /**
         * Activate the strategy. If it's already active, it'll be deactivated
         * and activated again.
         */
        EntityStoreStrategy.prototype.activate = function () {
            if (this.active === true) {
                this.doDeactivate();
            }
            this.active$.next(true);
            this.doActivate();
        };
        /**
         * Activate the strategy. If it's already active, it'll be deactivated
         * and activated again.
         */
        EntityStoreStrategy.prototype.deactivate = function () {
            this.active$.next(false);
            this.doDeactivate();
        };
        /**
         * Bind this strategy to a store
         * @param store Feature store
         */
        EntityStoreStrategy.prototype.bindStore = function (store) {
            if (this.stores.indexOf(store) < 0) {
                this.stores.push(store);
            }
        };
        /**
         * Unbind this strategy from store
         * @param store Feature store
         */
        EntityStoreStrategy.prototype.unbindStore = function (store) {
            var index = this.stores.indexOf(store);
            if (index >= 0) {
                this.stores.splice(index, 1);
            }
        };
        /**
         * Do the stataegy activation
         * @internal
         */
        EntityStoreStrategy.prototype.doActivate = function () { };
        /**
         * Do the strategy deactivation
         * @internal
         */
        EntityStoreStrategy.prototype.doDeactivate = function () { };
        return EntityStoreStrategy;
    }());

    /**
     * When active, this strategy filters a store's stateView to return
     * selected entities only.
     */
    var EntityStoreFilterCustomFuncStrategy = /** @class */ (function (_super) {
        __extends(EntityStoreFilterCustomFuncStrategy, _super);
        function EntityStoreFilterCustomFuncStrategy(options) {
            var _this = _super.call(this, options) || this;
            _this.options = options;
            /**
             * Store / filter ids map
             */
            _this.filters = new Map();
            return _this;
        }
        /**
         * Bind this strategy to a store and start filtering it
         * @param store Entity store
         */
        EntityStoreFilterCustomFuncStrategy.prototype.bindStore = function (store) {
            _super.prototype.bindStore.call(this, store);
            if (this.active === true) {
                this.filterStore(store);
            }
        };
        /**
         * Unbind this strategy from a store and stop filtering it
         * @param store Entity store
         */
        EntityStoreFilterCustomFuncStrategy.prototype.unbindStore = function (store) {
            _super.prototype.unbindStore.call(this, store);
            if (this.active === true) {
                this.unfilterStore(store);
            }
        };
        /**
         * Start filtering all stores
         * @internal
         */
        EntityStoreFilterCustomFuncStrategy.prototype.doActivate = function () {
            this.filterAll();
        };
        /**
         * Stop filtering all stores
         * @internal
         */
        EntityStoreFilterCustomFuncStrategy.prototype.doDeactivate = function () {
            this.unfilterAll();
        };
        /**
         * Filter all stores
         */
        EntityStoreFilterCustomFuncStrategy.prototype.filterAll = function () {
            var _this = this;
            this.stores.forEach(function (store) { return _this.filterStore(store); });
        };
        /**
         * Unfilter all stores
         */
        EntityStoreFilterCustomFuncStrategy.prototype.unfilterAll = function () {
            var _this = this;
            this.stores.forEach(function (store) { return _this.unfilterStore(store); });
        };
        /**
         * Filter a store and add it to the filters map
         */
        EntityStoreFilterCustomFuncStrategy.prototype.filterStore = function (store) {
            this.filters.set(store, store.stateView.addFilter(this.options.filterClauseFunc));
        };
        /**
         * Unfilter a store and delete it from the filters map
         */
        EntityStoreFilterCustomFuncStrategy.prototype.unfilterStore = function (store) {
            var filterId = this.filters.get(store);
            if (filterId === undefined) {
                return;
            }
            store.stateView.removeFilter(filterId);
            this.filters.delete(store);
        };
        return EntityStoreFilterCustomFuncStrategy;
    }(EntityStoreStrategy));

    /**
     * When active, this strategy filters a store's stateView to return
     * selected entities only.
     */
    var EntityStoreFilterSelectionStrategy = /** @class */ (function (_super) {
        __extends(EntityStoreFilterSelectionStrategy, _super);
        function EntityStoreFilterSelectionStrategy() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            /**
             * Store / filter ids map
             */
            _this.filters = new Map();
            return _this;
        }
        /**
         * Bind this strategy to a store and start filtering it
         * @param store Entity store
         */
        EntityStoreFilterSelectionStrategy.prototype.bindStore = function (store) {
            _super.prototype.bindStore.call(this, store);
            if (this.active === true) {
                this.filterStore(store);
            }
        };
        /**
         * Unbind this strategy from a store and stop filtering it
         * @param store Entity store
         */
        EntityStoreFilterSelectionStrategy.prototype.unbindStore = function (store) {
            _super.prototype.unbindStore.call(this, store);
            if (this.active === true) {
                this.unfilterStore(store);
            }
        };
        /**
         * Start filtering all stores
         * @internal
         */
        EntityStoreFilterSelectionStrategy.prototype.doActivate = function () {
            this.filterAll();
        };
        /**
         * Stop filtering all stores
         * @internal
         */
        EntityStoreFilterSelectionStrategy.prototype.doDeactivate = function () {
            this.unfilterAll();
        };
        /**
         * Filter all stores
         */
        EntityStoreFilterSelectionStrategy.prototype.filterAll = function () {
            var _this = this;
            this.stores.forEach(function (store) { return _this.filterStore(store); });
        };
        /**
         * Unfilter all stores
         */
        EntityStoreFilterSelectionStrategy.prototype.unfilterAll = function () {
            var _this = this;
            this.stores.forEach(function (store) { return _this.unfilterStore(store); });
        };
        /**
         * Filter a store and add it to the filters map
         */
        EntityStoreFilterSelectionStrategy.prototype.filterStore = function (store) {
            if (this.filters.has(store)) {
                return;
            }
            var filter = function (record) {
                return record.state.selected === true;
            };
            this.filters.set(store, store.stateView.addFilter(filter));
        };
        /**
         * Unfilter a store and delete it from the filters map
         */
        EntityStoreFilterSelectionStrategy.prototype.unfilterStore = function (store) {
            var filterId = this.filters.get(store);
            if (filterId === undefined) {
                return;
            }
            store.stateView.removeFilter(filterId);
            this.filters.delete(store);
        };
        return EntityStoreFilterSelectionStrategy;
    }(EntityStoreStrategy));

    function EntitySelectorComponent_mat_option_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("value", ctx_r0.emptyValue);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.emptyText);
        }
    }
    function EntitySelectorComponent_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("value", ctx_r1.multiSelectValue);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 2, ctx_r1.multiText$));
        }
    }
    function EntitySelectorComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r3 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("value", record_r3.entity);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.titleAccessor(record_r3.entity), " ");
        }
    }
    var EntitySelectorComponent = /** @class */ (function () {
        function EntitySelectorComponent(cdRef) {
            this.cdRef = cdRef;
            /**
             * The selected entity
             * @internal
             */
            this.selected$ = new rxjs.BehaviorSubject(undefined);
            /**
             * The current multi select option text
             * @internal
             */
            this.multiText$ = new rxjs.BehaviorSubject(undefined);
            this.multiSelectValue = { id: 'IGO_MULTI_SELECT' };
            this.emptyValue = { id: 'IGO_EMPTY_SELECT' };
            /**
             * Title accessor
             */
            this.titleAccessor = getEntityTitle;
            /**
             * Text to display when nothing is selected
             */
            this.emptyText = undefined;
            /**
             * Wheter selecting many entities is allowed
             */
            this.multi = false;
            /**
             * Text to display for the select all option
             */
            this.multiAllText = 'All';
            /**
             * Text to display for the select none option
             */
            this.multiNoneText = 'None';
            /**
             * Wheter the selector is disabled or not
             */
            this.disabled = false;
            /**
             * Event emitted when the selection changes
             */
            this.selectedChange = new i0.EventEmitter();
        }
        /**
         * Create a store watcher and subscribe to the selected entity
         * @internal
         */
        EntitySelectorComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
            this.selected$$ = this.store.stateView
                .manyBy$(function (record) { return record.state.selected === true; })
                .subscribe(function (records) {
                var entities = records.map(function (record) { return record.entity; });
                _this.onSelectFromStore(entities);
            });
        };
        /**
         * Unsubscribe to the selected entity and destroy the store watcher
         * @internal
         */
        EntitySelectorComponent.prototype.ngOnDestroy = function () {
            this.watcher.destroy();
            this.selected$$.unsubscribe();
        };
        /**
         * On selection change, update the store's state and emit an event
         * @internal
         */
        EntitySelectorComponent.prototype.onSelectionChange = function (event) {
            var _this = this;
            var values = event.value instanceof Array ? event.value : [event.value];
            var multiSelect = values.find(function (_value) { return _value === _this.multiSelectValue; });
            var entities = values.filter(function (_value) { return _value !== _this.multiSelectValue; });
            if (multiSelect !== undefined) {
                if (entities.length === this.store.count) {
                    entities = [];
                }
                else if (entities.length < this.store.count) {
                    entities = this.store.all();
                }
            }
            entities = entities.filter(function (entity) { return entity !== _this.emptyValue; });
            if (entities.length === 0) {
                this.store.state.updateAll({ selected: false });
            }
            else {
                this.store.state.updateMany(entities, { selected: true }, true);
            }
            var value = this.multi ? entities : event.value;
            this.selectedChange.emit({ selected: true, value: value });
        };
        EntitySelectorComponent.prototype.onSelectFromStore = function (entities) {
            if (this.multi === true) {
                this.selected$.next(entities);
            }
            else {
                var entity = entities.length > 0 ? entities[0] : undefined;
                this.selected$.next(entity);
            }
            this.updateMultiToggleWithEntities(entities);
        };
        EntitySelectorComponent.prototype.updateMultiToggleWithEntities = function (entities) {
            if (entities.length === this.store.count && this.multiText$.value !== this.multiNoneText) {
                this.multiText$.next(this.multiNoneText);
            }
            else if (entities.length < this.store.count && this.multiText$.value !== this.multiAllText) {
                this.multiText$.next(this.multiAllText);
            }
        };
        return EntitySelectorComponent;
    }());
    EntitySelectorComponent.ɵfac = function EntitySelectorComponent_Factory(t) { return new (t || EntitySelectorComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    EntitySelectorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: EntitySelectorComponent, selectors: [["igo-entity-selector"]], inputs: { store: "store", titleAccessor: "titleAccessor", emptyText: "emptyText", multi: "multi", multiAllText: "multiAllText", multiNoneText: "multiNoneText", placeholder: "placeholder", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, decls: 7, vars: 11, consts: [[1, "igo-entity-selector"], [3, "disabled", "value", "multiple", "placeholder", "selectionChange"], [3, "value", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [3, "value"]], template: function EntitySelectorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-select", 1);
                i0__namespace.ɵɵlistener("selectionChange", function EntitySelectorComponent_Template_mat_select_selectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
                i0__namespace.ɵɵpipe(2, "async");
                i0__namespace.ɵɵtemplate(3, EntitySelectorComponent_mat_option_3_Template, 2, 2, "mat-option", 2);
                i0__namespace.ɵɵtemplate(4, EntitySelectorComponent_mat_option_4_Template, 3, 4, "mat-option", 2);
                i0__namespace.ɵɵtemplate(5, EntitySelectorComponent_ng_template_5_Template, 2, 2, "ng-template", 3);
                i0__namespace.ɵɵpipe(6, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("disabled", ctx.disabled)("value", i0__namespace.ɵɵpipeBind1(2, 7, ctx.selected$))("multiple", ctx.multi)("placeholder", ctx.placeholder);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.emptyText !== undefined && ctx.multi === false);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.multi === true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(6, 9, ctx.store.stateView.all$()));
            }
        }, directives: [i1__namespace.MatFormField, i2__namespace.MatSelect, i1__namespace$1.NgIf, i1__namespace$1.NgForOf, i3__namespace.MatOption], pipes: [i1__namespace$1.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EntitySelectorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-entity-selector',
                        templateUrl: './entity-selector.component.html',
                        styleUrls: ['./entity-selector.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0__namespace.ChangeDetectorRef }]; }, { store: [{
                    type: i0.Input
                }], titleAccessor: [{
                    type: i0.Input
                }], emptyText: [{
                    type: i0.Input
                }], multi: [{
                    type: i0.Input
                }], multiAllText: [{
                    type: i0.Input
                }], multiNoneText: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], selectedChange: [{
                    type: i0.Output
                }] });
    })();

    var StopPropagationDirective = /** @class */ (function () {
        function StopPropagationDirective() {
        }
        StopPropagationDirective.prototype.onClick = function (event) {
            event.stopPropagation();
        };
        return StopPropagationDirective;
    }());
    StopPropagationDirective.ɵfac = function StopPropagationDirective_Factory(t) { return new (t || StopPropagationDirective)(); };
    StopPropagationDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: StopPropagationDirective, selectors: [["", "igoStopPropagation", ""]], hostBindings: function StopPropagationDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function StopPropagationDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StopPropagationDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoStopPropagation]'
                    }]
            }], null, { onClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] });
    })();

    /**
     * Directive that handles an entity table row click and selection.
     */
    var EntityTableRowDirective = /** @class */ (function () {
        function EntityTableRowDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            /**
             * Whether a row supports selection
             */
            this.selection = false;
            /**
             * Whether clicking a row should select it (if selection is true)
             */
            this.selectOnClick = true;
            /**
             * Whether the selected row should be highlighted
             */
            this.highlightSelection = true;
            this._selected = false;
            /**
             * Scroll behavior on selection
             */
            this.scrollBehavior = exports.EntityTableScrollBehavior.Auto;
            /**
             * Event emitted when a row is selected
             */
            this.select = new i0.EventEmitter();
        }
        Object.defineProperty(EntityTableRowDirective.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            /**
             * Whether a row is selected
             */
            set: function (value) {
                if (this.selection === false) {
                    return;
                }
                if (value === this._selected) {
                    return;
                }
                this.toggleSelected(value);
                this.scroll();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * When a row is clicked, select it if it's supported
         * @ignore
         */
        EntityTableRowDirective.prototype.onClick = function () {
            if (this.selection === false || this.selectOnClick === false) {
                return;
            }
            this.toggleSelected(true);
            this.select.emit(this);
        };
        /**
         * Select a row and add or remove the selected class from it
         * @param selected Whether the row should be selected
         */
        EntityTableRowDirective.prototype.toggleSelected = function (selected) {
            this._selected = selected;
            if (selected === true) {
                this.addCls(EntityTableRowDirective.selectedCls);
                if (this.highlightSelection === true) {
                    this.addCls(EntityTableRowDirective.highlightedCls);
                }
            }
            else {
                this.removeCls(EntityTableRowDirective.selectedCls);
                this.removeCls(EntityTableRowDirective.highlightedCls);
            }
        };
        /**
         * Scroll to the selected row
         */
        EntityTableRowDirective.prototype.scroll = function () {
            if (this._selected === true) {
                scrollIntoView__default["default"](this.el.nativeElement, {
                    scrollMode: 'if-needed',
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                });
            }
        };
        /**
         * Add the selected CSS class
         */
        EntityTableRowDirective.prototype.addCls = function (cls) {
            this.renderer.addClass(this.el.nativeElement, cls);
        };
        /**
         * Remove the selected CSS class
         */
        EntityTableRowDirective.prototype.removeCls = function (cls) {
            this.renderer.removeClass(this.el.nativeElement, cls);
        };
        return EntityTableRowDirective;
    }());
    /**
     * Class added to a selected row
     */
    EntityTableRowDirective.selectedCls = 'igo-entity-table-row-selected';
    /**
     * Class added to a highlighted row
     */
    EntityTableRowDirective.highlightedCls = 'igo-entity-table-row-highlighted';
    EntityTableRowDirective.ɵfac = function EntityTableRowDirective_Factory(t) { return new (t || EntityTableRowDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    EntityTableRowDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: EntityTableRowDirective, selectors: [["", "igoEntityTableRow", ""]], hostBindings: function EntityTableRowDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function EntityTableRowDirective_click_HostBindingHandler() { return ctx.onClick(); });
            }
        }, inputs: { selection: "selection", selectOnClick: "selectOnClick", highlightSelection: "highlightSelection", selected: "selected", scrollBehavior: "scrollBehavior" }, outputs: { select: "select" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EntityTableRowDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoEntityTableRow]'
                    }]
            }], function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }]; }, { selection: [{
                    type: i0.Input
                }], selectOnClick: [{
                    type: i0.Input
                }], highlightSelection: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], scrollBehavior: [{
                    type: i0.Input
                }], select: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var EntityTablePaginatorComponent = /** @class */ (function () {
        function EntityTablePaginatorComponent(languageService, mediaService) {
            var _this = this;
            this.languageService = languageService;
            this.mediaService = mediaService;
            this.disabled = false;
            this.hidePageSize = false;
            this.pageIndex = 0;
            this.pageSize = 50;
            this.pageSizeOptions = [5, 10, 20, 50, 100, 200];
            this.showFirstLastButtons = true;
            this.paginationLabelTranslation$$ = [];
            this.entitySortChange$ = new rxjs.BehaviorSubject(false);
            this.length = 0;
            /**
             * Paginator emitted.
             */
            this.paginatorChange = new i0.EventEmitter();
            this.rangeLabel = function (page, pageSize, length) {
                var of = new rxjs.BehaviorSubject('');
                _this.paginationLabelTranslation$$.push(_this.languageService.translate.get('igo.common.paginator.of').subscribe(function (label) {
                    of.next(label);
                }));
                if (length === 0 || pageSize === 0) {
                    return "0 " + of.value + " " + length;
                }
                length = Math.max(length, 0);
                var startIndex = page * pageSize;
                var endIndex = startIndex < length ?
                    Math.min(startIndex + pageSize, length) :
                    startIndex + pageSize;
                return startIndex + 1 + " - " + endIndex + " " + of.value + " " + length;
            };
        }
        EntityTablePaginatorComponent.prototype.ngOnChanges = function () {
            var _this = this;
            this.unsubscribeAll();
            this.count$$ = this.store.stateView.count$.subscribe(function (count) {
                _this.length = count;
                _this.emitPaginator();
            });
            this.entitySortChange$$ = this.entitySortChange$.subscribe(function () {
                if (_this.paginator) {
                    _this.paginator.firstPage();
                }
            });
            this.initPaginatorOptions();
            this.translateLabels();
        };
        EntityTablePaginatorComponent.prototype.initPaginatorOptions = function () {
            var _a, _b, _c, _d, _e, _f;
            this.disabled = ((_a = this.paginatorOptions) === null || _a === void 0 ? void 0 : _a.disabled) || this.disabled;
            this.pageIndex = ((_b = this.paginatorOptions) === null || _b === void 0 ? void 0 : _b.pageIndex) || this.pageIndex;
            this.pageSize = ((_c = this.paginatorOptions) === null || _c === void 0 ? void 0 : _c.pageSize) || this.pageSize;
            this.pageSizeOptions = ((_d = this.paginatorOptions) === null || _d === void 0 ? void 0 : _d.pageSizeOptions) || this.pageSizeOptions;
            if (this.mediaService.isMobile()) {
                this.showFirstLastButtons = false;
                this.hidePageSize = true;
            }
            else {
                this.showFirstLastButtons = ((_e = this.paginatorOptions) === null || _e === void 0 ? void 0 : _e.showFirstLastButtons) || this.showFirstLastButtons;
                this.hidePageSize = ((_f = this.paginatorOptions) === null || _f === void 0 ? void 0 : _f.hidePageSize) || this.hidePageSize;
            }
        };
        EntityTablePaginatorComponent.prototype.translateLabels = function () {
            var _this = this;
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.firstPageLabel').subscribe(function (label) {
                _this.paginator._intl.firstPageLabel = label;
            }));
            this.paginator._intl.getRangeLabel = this.rangeLabel;
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.itemsPerPageLabel').subscribe(function (label) {
                _this.paginator._intl.itemsPerPageLabel = label;
            }));
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.lastPageLabel').subscribe(function (label) {
                _this.paginator._intl.lastPageLabel = label;
            }));
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.nextPageLabel').subscribe(function (label) {
                _this.paginator._intl.nextPageLabel = label;
            }));
            this.paginationLabelTranslation$$.push(this.languageService.translate.get('igo.common.paginator.previousPageLabel').subscribe(function (label) {
                _this.paginator._intl.previousPageLabel = label;
            }));
        };
        EntityTablePaginatorComponent.prototype.unsubscribeAll = function () {
            this.paginationLabelTranslation$$.map(function (sub) { return sub.unsubscribe(); });
            if (this.count$$) {
                this.count$$.unsubscribe();
            }
            if (this.entitySortChange$$) {
                this.entitySortChange$$.unsubscribe();
            }
        };
        EntityTablePaginatorComponent.prototype.ngOnDestroy = function () {
            this.unsubscribeAll();
        };
        EntityTablePaginatorComponent.prototype.emitPaginator = function () {
            this.paginatorChange.emit(this.paginator);
        };
        return EntityTablePaginatorComponent;
    }());
    EntityTablePaginatorComponent.ɵfac = function EntityTablePaginatorComponent_Factory(t) { return new (t || EntityTablePaginatorComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$2.LanguageService), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MediaService)); };
    EntityTablePaginatorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: EntityTablePaginatorComponent, selectors: [["igo-entity-table-paginator"]], viewQuery: function EntityTablePaginatorComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(i2$1.MatPaginator, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            }
        }, inputs: { entitySortChange$: "entitySortChange$", store: "store", paginatorOptions: "paginatorOptions" }, outputs: { page: "page", paginatorChange: "paginatorChange" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 1, vars: 7, consts: [[3, "disabled", "hidePageSize", "length", "pageIndex", "pageSize", "pageSizeOptions", "showFirstLastButtons", "page"]], template: function EntityTablePaginatorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-paginator", 0);
                i0__namespace.ɵɵlistener("page", function EntityTablePaginatorComponent_Template_mat_paginator_page_0_listener() { return ctx.emitPaginator(); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("disabled", ctx.disabled)("hidePageSize", ctx.hidePageSize)("length", ctx.length)("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", ctx.showFirstLastButtons);
            }
        }, directives: [i2__namespace$1.MatPaginator], styles: ["[_nghost-%COMP%]{margin-top:-10px;padding-right:15px}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){[_nghost-%COMP%]{margin-top:0;padding-right:5px}}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EntityTablePaginatorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-entity-table-paginator',
                        templateUrl: './entity-table-paginator.component.html',
                        styleUrls: ['./entity-table-paginator.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1__namespace$2.LanguageService }, { type: i1__namespace$2.MediaService }]; }, { entitySortChange$: [{
                    type: i0.Input
                }], store: [{
                    type: i0.Input
                }], paginatorOptions: [{
                    type: i0.Input
                }], page: [{
                    type: i0.Output
                }], paginatorChange: [{
                    type: i0.Output
                }], paginator: [{
                    type: i0.ViewChild,
                    args: [i2$1.MatPaginator, { static: true }]
                }] });
    })();

    var SecureImagePipe = /** @class */ (function () {
        function SecureImagePipe(http) {
            this.http = http;
        }
        SecureImagePipe.prototype.transform = function (url) {
            var headers = new i1$3.HttpHeaders({
                'Content-Type': 'text/plain',
                activityInterceptor: 'false'
            });
            return this.http
                .get(url, {
                headers: headers,
                responseType: 'blob'
            })
                .pipe(operators.switchMap(function (blob) {
                return new rxjs.Observable(function (observer) {
                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        observer.next(reader.result);
                        observer.complete();
                    };
                });
            }));
        };
        return SecureImagePipe;
    }());
    SecureImagePipe.ɵfac = function SecureImagePipe_Factory(t) { return new (t || SecureImagePipe)(i0__namespace.ɵɵdirectiveInject(i1__namespace$3.HttpClient, 16)); };
    SecureImagePipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "secureImage", type: SecureImagePipe, pure: true });
    __decorate([
        tsCacheable.Cacheable({
            maxCacheCount: 20
        })
    ], SecureImagePipe.prototype, "transform", null);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SecureImagePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'secureImage'
                    }]
            }], function () { return [{ type: i1__namespace$3.HttpClient }]; }, { transform: [] });
    })();

    var SanitizeHtmlPipe = /** @class */ (function () {
        function SanitizeHtmlPipe(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeHtmlPipe.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustHtml(v);
        };
        return SanitizeHtmlPipe;
    }());
    SanitizeHtmlPipe.ɵfac = function SanitizeHtmlPipe_Factory(t) { return new (t || SanitizeHtmlPipe)(i0__namespace.ɵɵdirectiveInject(i1__namespace$4.DomSanitizer, 16)); };
    SanitizeHtmlPipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SanitizeHtmlPipe, [{
                type: i0.Pipe,
                args: [{ name: 'sanitizeHtml' }]
            }], function () { return [{ type: i1__namespace$4.DomSanitizer }]; }, null);
    })();

    function EntityTableComponent_th_3_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-checkbox", 11);
            i0__namespace.ɵɵlistener("change", function EntityTableComponent_th_3_ng_container_1_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(3); return ctx_r9.onToggleRows($event.checked); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var selectionState_r8 = ctx.ngIf;
            var ctx_r7 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", selectionState_r8 === ctx_r7.entityTableSelectionState.All)("indeterminate", selectionState_r8 === ctx_r7.entityTableSelectionState.Some);
        }
    }
    function EntityTableComponent_th_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_th_3_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 10);
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(2, 1, ctx_r6.selectionState$));
        }
    }
    function EntityTableComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 9);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_th_3_ng_container_1_Template, 3, 3, "ng-container", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.selectMany);
        }
    }
    function EntityTableComponent_td_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "td", 12);
            i0__namespace.ɵɵelementStart(1, "mat-checkbox", 13);
            i0__namespace.ɵɵlistener("mousedown", function EntityTableComponent_td_4_Template_mat_checkbox_mousedown_1_listener($event) { return $event.shiftKey ? $event.preventDefault() : null; })("click", function EntityTableComponent_td_4_Template_mat_checkbox_click_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r14_1); var record_r11 = restoredCtx.$implicit; var ctx_r13 = i0__namespace.ɵɵnextContext(); return $event.shiftKey ? ctx_r13.onShiftToggleRow(!ctx_r13.rowIsSelected(record_r11), record_r11, $event) : $event.stopPropagation(); })("change", function EntityTableComponent_td_4_Template_mat_checkbox_change_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r14_1); var record_r11 = restoredCtx.$implicit; var ctx_r15 = i0__namespace.ɵɵnextContext(); return ctx_r15.onToggleRow($event.checked, record_r11); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r11 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", ctx_r1.rowIsSelected(record_r11));
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 16);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r16 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("matTooltip", column_r16.tooltip ? column_r16.tooltip : undefined);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", column_r16.title, " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_1_th_1_Template, 2, 2, "th", 15);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_2_th_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 18);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r16 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("matTooltip", column_r16.tooltip ? column_r16.tooltip : undefined);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", column_r16.title, " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_2_th_1_Template, 2, 2, "th", 17);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 22);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r31 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r32 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r32.getCellClass(record_r31, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r32.getValue(record_r31, column_r16), " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_img_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 26);
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵpipe(2, "secureImage");
        }
        if (rf & 2) {
            var record_r31 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r37 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("src", i0__namespace.ɵɵpipeBind1(1, 1, i0__namespace.ɵɵpipeBind1(2, 3, ctx_r37.getValue(record_r31, column_r16))), i0__namespace.ɵɵsanitizeUrl);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("", i0__namespace.ɵɵpipeBind1(2, 1, "igo.common.entity-table.targetHtmlUrl"), " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 22);
            i0__namespace.ɵɵelementStart(1, "a", 23);
            i0__namespace.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_img_2_Template, 3, 5, "img", 24);
            i0__namespace.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r38 = i0__namespace.ɵɵreference(4);
            var record_r31 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r34 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r34.getCellClass(record_r31, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("href", ctx_r34.getValue(record_r31, column_r16), i0__namespace.ɵɵsanitizeUrl);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r34.isImg(ctx_r34.getValue(record_r31, column_r16)))("ngIfElse", _r38);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_td_1_Template, 2, 2, "td", 20);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 21, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var record_r31 = ctx.$implicit;
            var _r33 = i0__namespace.ɵɵreference(3);
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r30 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r30.isUrl(ctx_r30.getValue(record_r31, column_r16)))("ngIfElse", _r33);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 19);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "td", 29);
        }
        if (rf & 2) {
            var record_r47 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r48 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r48.getCellClass(record_r47, column_r16))("innerHTML", ctx_r48.getValue(record_r47, column_r16), i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_img_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 26);
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵpipe(2, "secureImage");
        }
        if (rf & 2) {
            var record_r47 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r53 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("src", i0__namespace.ɵɵpipeBind1(1, 1, i0__namespace.ɵɵpipeBind1(2, 3, ctx_r53.getValue(record_r47, column_r16))), i0__namespace.ɵɵsanitizeUrl);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("", i0__namespace.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 22);
            i0__namespace.ɵɵelementStart(1, "a", 23);
            i0__namespace.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_img_2_Template, 3, 5, "img", 24);
            i0__namespace.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r54 = i0__namespace.ɵɵreference(4);
            var record_r47 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r50 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r50.getCellClass(record_r47, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("href", ctx_r50.getValue(record_r47, column_r16), i0__namespace.ɵɵsanitizeUrl);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r50.isImg(ctx_r50.getValue(record_r47, column_r16)))("ngIfElse", _r54);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_td_1_Template, 1, 2, "td", 27);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_ng_template_2_Template, 5, 4, "ng-template", null, 28, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var record_r47 = ctx.$implicit;
            var _r49 = i0__namespace.ɵɵreference(3);
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r46 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r46.isUrl(ctx_r46.getValue(record_r47, column_r16)))("ngIfElse", _r49);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 19);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r79_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 43);
            i0__namespace.ɵɵelement(1, "mat-datepicker-toggle", 44);
            i0__namespace.ɵɵelementStart(2, "input", 45);
            i0__namespace.ɵɵlistener("dateChange", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template_input_dateChange_2_listener($event) { i0__namespace.ɵɵrestoreView(_r79_1); var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit; var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; var ctx_r77 = i0__namespace.ɵɵnextContext(); return ctx_r77.onDateChange(column_r16.name, record_r63, $event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(3, "mat-datepicker", null, 46);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r76 = i0__namespace.ɵɵreference(4);
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r67 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("for", _r76);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("value", ctx_r67.getValue(record_r63, column_r16));
            i0__namespace.ɵɵproperty("matDatepicker", _r76)("formControlName", column_r16.name);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r85_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "input", 47);
            i0__namespace.ɵɵlistener("focus", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_focus_0_listener($event) { i0__namespace.ɵɵrestoreView(_r85_1); var column_r16 = i0__namespace.ɵɵnextContext(5).$implicit; return column_r16.onFocus($event); })("keypress", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_keypress_0_listener($event) { i0__namespace.ɵɵrestoreView(_r85_1); var column_r16 = i0__namespace.ɵɵnextContext(5).$implicit; return column_r16.onChange($event); })("blur", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template_input_blur_0_listener($event) { i0__namespace.ɵɵrestoreView(_r85_1); var column_r16 = i0__namespace.ɵɵnextContext(5).$implicit; return column_r16.onBlur($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r16 = i0__namespace.ɵɵnextContext(5).$implicit;
            i0__namespace.ɵɵproperty("formControlName", column_r16.name);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r93_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "input", 48);
            i0__namespace.ɵɵlistener("input", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template_input_input_0_listener($event) { i0__namespace.ɵɵrestoreView(_r93_1); var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit; var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; var ctx_r91 = i0__namespace.ɵɵnextContext(); return ctx_r91.onValueChange(column_r16.name, record_r63, $event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r69 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("step", column_r16.step);
            i0__namespace.ɵɵpropertyInterpolate("value", ctx_r69.getValue(record_r63, column_r16));
            i0__namespace.ɵɵpropertyInterpolate("readonly", ctx_r69.getValidationAttributeValue(column_r16, "readonly"));
            i0__namespace.ɵɵpropertyInterpolate("required", ctx_r69.getValidationAttributeValue(column_r16, "mandatory"));
            i0__namespace.ɵɵpropertyInterpolate("min", ctx_r69.getValidationAttributeValue(column_r16, "minValue"));
            i0__namespace.ɵɵpropertyInterpolate("max", ctx_r69.getValidationAttributeValue(column_r16, "maxValue"));
            i0__namespace.ɵɵproperty("formControlName", column_r16.name);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r99_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "input", 49);
            i0__namespace.ɵɵlistener("input", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template_input_input_0_listener($event) { i0__namespace.ɵɵrestoreView(_r99_1); var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit; var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; var ctx_r97 = i0__namespace.ɵɵnextContext(); return ctx_r97.onValueChange(column_r16.name, record_r63, $event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r70 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("value", ctx_r70.getValue(record_r63, column_r16));
            i0__namespace.ɵɵpropertyInterpolate("readonly", ctx_r70.getValidationAttributeValue(column_r16, "readonly"));
            i0__namespace.ɵɵpropertyInterpolate("required", ctx_r70.getValidationAttributeValue(column_r16, "mandatory"));
            i0__namespace.ɵɵproperty("formControlName", column_r16.name);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r105_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-checkbox", 50);
            i0__namespace.ɵɵlistener("change", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template_mat_checkbox_change_0_listener($event) { i0__namespace.ɵɵrestoreView(_r105_1); var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit; var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; var ctx_r103 = i0__namespace.ɵɵnextContext(); return ctx_r103.onBooleanValueChange(column_r16.name, record_r63, $event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r71 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("formControlName", column_r16.name)("checked", ctx_r71.getValue(record_r63, column_r16));
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 53);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r110 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", option_r110.id)("disabled", option_r110.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", option_r110.value, " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r113_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-select", 51);
            i0__namespace.ɵɵlistener("selectionChange", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template_mat_select_selectionChange_0_listener($event) { i0__namespace.ɵɵrestoreView(_r113_1); var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit; var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; var ctx_r111 = i0__namespace.ɵɵnextContext(); return ctx_r111.onSelectValueChange(column_r16.name, record_r63, $event); });
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_mat_option_1_Template, 2, 3, "mat-option", 52);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r72 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("required", ctx_r72.getValidationAttributeValue(column_r16, "mandatory"));
            i0__namespace.ɵɵproperty("formControlName", column_r16.name)("multiple", column_r16.multiple)("value", ctx_r72.getValue(record_r63, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", column_r16.domainValues);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "input", 54);
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r74 = i0__namespace.ɵɵreference(9);
            var record_r63 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r73 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("required", ctx_r73.getValidationAttributeValue(column_r16, "mandatory"));
            i0__namespace.ɵɵpropertyInterpolate("value", ctx_r73.getValue(record_r63, column_r16));
            i0__namespace.ɵɵproperty("formControlName", column_r16.name)("matAutocomplete", _r74);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 55);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r119 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", option_r119.id);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", option_r119.value, " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r122_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "td", 32);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_div_1_Template, 5, 4, "div", 33);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_2_Template, 1, 1, "input", 34);
            i0__namespace.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_3_Template, 1, 7, "input", 35);
            i0__namespace.ɵɵtemplate(4, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_4_Template, 1, 4, "input", 36);
            i0__namespace.ɵɵtemplate(5, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_checkbox_5_Template, 1, 2, "mat-checkbox", 37);
            i0__namespace.ɵɵtemplate(6, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_select_6_Template, 2, 5, "mat-select", 38);
            i0__namespace.ɵɵtemplate(7, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_input_7_Template, 1, 4, "input", 39);
            i0__namespace.ɵɵelementStart(8, "mat-autocomplete", 40, 41);
            i0__namespace.ɵɵlistener("optionSelected", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template_mat_autocomplete_optionSelected_8_listener($event) { i0__namespace.ɵɵrestoreView(_r122_1); var record_r63 = i0__namespace.ɵɵnextContext().$implicit; var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; var ctx_r120 = i0__namespace.ɵɵnextContext(); return ctx_r120.onAutocompleteValueChange(column_r16.name, record_r63, $event); });
            i0__namespace.ɵɵtemplate(10, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_mat_option_10_Template, 2, 2, "mat-option", 42);
            i0__namespace.ɵɵpipe(11, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r64 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("formGroup", ctx_r64.formGroup)("ngClass", ctx_r64.getCellClass(record_r63, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.type === "date");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.type === "time");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.type === "number");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r16.type || column_r16.type === "string");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.type === "boolean");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.type === "list");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.type === "autocomplete");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(11, 10, ctx_r64.filteredOptions));
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_td_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "td", 29);
            i0__namespace.ɵɵpipe(1, "sanitizeHtml");
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r126 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r126.getCellClass(record_r63, column_r16))("innerHTML", i0__namespace.ɵɵpipeBind1(1, 2, ctx_r126.getValue(record_r63, column_r16)), i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_img_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 26);
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵpipe(2, "secureImage");
        }
        if (rf & 2) {
            var record_r63 = i0__namespace.ɵɵnextContext(3).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r131 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("src", i0__namespace.ɵɵpipeBind1(1, 1, i0__namespace.ɵɵpipeBind1(2, 3, ctx_r131.getValue(record_r63, column_r16))), i0__namespace.ɵɵsanitizeUrl);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("", i0__namespace.ɵɵpipeBind1(2, 1, "igo.geo.targetHtmlUrl"), " ");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 22);
            i0__namespace.ɵɵelementStart(1, "a", 23);
            i0__namespace.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template_a_click_1_listener($event) { return $event.stopPropagation(); });
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_img_2_Template, 3, 5, "img", 24);
            i0__namespace.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_ng_template_3_Template, 3, 3, "ng-template", null, 25, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r132 = i0__namespace.ɵɵreference(4);
            var record_r63 = i0__namespace.ɵɵnextContext(2).$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r128 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r128.getCellClass(record_r63, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("href", ctx_r128.getValue(record_r63, column_r16), i0__namespace.ɵɵsanitizeUrl);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r128.isImg(ctx_r128.getValue(record_r63, column_r16)))("ngIfElse", _r132);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_td_0_Template, 2, 4, "td", 27);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_ng_template_1_Template, 5, 4, "ng-template", null, 56, i0__namespace.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r127 = i0__namespace.ɵɵreference(2);
            var record_r63 = i0__namespace.ɵɵnextContext().$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r66 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", !ctx_r66.isUrl(ctx_r66.getValue(record_r63, column_r16)))("ngIfElse", _r127);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_td_1_Template, 12, 12, "td", 30);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_ng_template_2_Template, 3, 2, "ng-template", null, 31, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var record_r63 = ctx.$implicit;
            var _r65 = i0__namespace.ɵɵreference(3);
            var ctx_r62 = i0__namespace.ɵɵnextContext(4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r62.isEdition(record_r63))("ngIfElse", _r65);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_ng_container_1_Template, 4, 2, "ng-container", 19);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r145_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "td", 22);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 58);
            i0__namespace.ɵɵlistener("click", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template_mat_icon_click_1_listener($event) { i0__namespace.ɵɵrestoreView(_r145_1); var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit; return column_r16.onClick($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r142 = ctx.$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r141 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r141.getCellClass(record_r142, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("svgIcon", ctx_r141.getValue(record_r142, column_r16) || column_r16.icon);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_td_1_Template, 2, 2, "td", 57);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r156_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 62);
            i0__namespace.ɵɵlistener("mousedown", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template_button_mousedown_0_listener() { i0__namespace.ɵɵrestoreView(_r156_1); var button_r150 = i0__namespace.ɵɵnextContext(2).$implicit; var record_r148 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r154 = i0__namespace.ɵɵnextContext(4); return ctx_r154.onButtonClick(button_r150.click, record_r148); });
            i0__namespace.ɵɵelement(1, "mat-icon", 63);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r150 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("color", button_r150.color)("disabled", button_r150.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("svgIcon", button_r150.icon);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r161_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 64);
            i0__namespace.ɵɵlistener("mousedown", function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template_button_mousedown_0_listener() { i0__namespace.ɵɵrestoreView(_r161_1); var button_r150 = i0__namespace.ɵɵnextContext(2).$implicit; var record_r148 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r159 = i0__namespace.ɵɵnextContext(4); return ctx_r159.onButtonClick(button_r150.click, record_r148); });
            i0__namespace.ɵɵelement(1, "mat-icon", 63);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r150 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("color", button_r150.color)("disabled", button_r150.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("svgIcon", button_r150.icon);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_1_Template, 2, 3, "button", 60);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_button_2_Template, 2, 3, "button", 61);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var button_r150 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", button_r150.style === "mat-icon-button");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", button_r150.style !== "mat-icon-button");
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_ng_container_1_Template, 3, 2, "ng-container", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r150 = ctx.$implicit;
            var record_r148 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r149 = i0__namespace.ɵɵnextContext(4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r149.isEdition(record_r148) === button_r150.editMode);
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "td", 22);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_span_2_Template, 2, 1, "span", 59);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var record_r148 = ctx.$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r147 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngClass", ctx_r147.getCellClass(record_r148, column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r147.getValue(record_r148, column_r16));
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 19);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function EntityTableComponent_ng_container_5_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵtemplate(4, EntityTableComponent_ng_container_5_ng_container_3_ng_container_4_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵtemplate(5, EntityTableComponent_ng_container_5_ng_container_3_ng_container_5_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var columnRenderer_r24 = ctx.ngIf;
            var ctx_r19 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.Default);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.HTML);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.UnsanitizedHTML);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.Icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", columnRenderer_r24 === ctx_r19.entityTableColumnRenderer.ButtonGroup);
        }
    }
    function EntityTableComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0, 14);
            i0__namespace.ɵɵtemplate(1, EntityTableComponent_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵtemplate(2, EntityTableComponent_ng_container_5_ng_container_2_Template, 2, 0, "ng-container", 10);
            i0__namespace.ɵɵtemplate(3, EntityTableComponent_ng_container_5_ng_container_3_Template, 6, 5, "ng-container", 10);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var column_r16 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("matColumnDef", column_r16.name);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.columnIsSortable(column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r2.columnIsSortable(column_r16));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.getColumnRenderer(column_r16));
        }
    }
    function EntityTableComponent_tr_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 65);
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r3.getHeaderClass());
        }
    }
    function EntityTableComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r169_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "tr", 66);
            i0__namespace.ɵɵlistener("select", function EntityTableComponent_tr_7_Template_tr_select_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r169_1); var record_r167 = restoredCtx.$implicit; var ctx_r168 = i0__namespace.ɵɵnextContext(); return ctx_r168.onRowSelect(record_r167); })("click", function EntityTableComponent_tr_7_Template_tr_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r169_1); var record_r167 = restoredCtx.$implicit; var ctx_r170 = i0__namespace.ɵɵnextContext(); return ctx_r170.onRowClick(record_r167); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var record_r167 = ctx.$implicit;
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("scrollBehavior", ctx_r4.scrollBehavior)("ngClass", ctx_r4.getRowClass(record_r167))("selection", ctx_r4.selection)("selected", ctx_r4.rowIsSelected(record_r167));
        }
    }
    function EntityTableComponent_igo_entity_table_paginator_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r172_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-entity-table-paginator", 67);
            i0__namespace.ɵɵlistener("paginatorChange", function EntityTableComponent_igo_entity_table_paginator_8_Template_igo_entity_table_paginator_paginatorChange_0_listener($event) { i0__namespace.ɵɵrestoreView(_r172_1); var ctx_r171 = i0__namespace.ɵɵnextContext(); return ctx_r171.paginatorChange($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("store", ctx_r5.store)("paginatorOptions", ctx_r5.paginatorOptions)("entitySortChange$", ctx_r5.entitySortChange$);
        }
    }
    var moment = moment___namespace;
    var EntityTableComponent = /** @class */ (function () {
        function EntityTableComponent(cdRef, formBuilder, _focusMonitor, _elementRef, ngControl, _parentForm, _controlName, _defaultErrorStateMatcher, dateAdapter) {
            this.cdRef = cdRef;
            this.formBuilder = formBuilder;
            this._focusMonitor = _focusMonitor;
            this._elementRef = _elementRef;
            this.ngControl = ngControl;
            this._parentForm = _parentForm;
            this._controlName = _controlName;
            this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
            this.dateAdapter = dateAdapter;
            this.entitySortChange$ = new rxjs.BehaviorSubject(false);
            this.formGroup = new i1$5.FormGroup({});
            /**
             * Reference to the column renderer types
             * @internal
             */
            this.entityTableColumnRenderer = exports.EntityTableColumnRenderer;
            /**
             * Reference to the selection's state
             * @internal
             */
            this.entityTableSelectionState = exports.EntityTableSelectionState;
            /**
             * Observable of the selection,s state
             * @internal
             */
            this.selectionState$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Scroll behavior on selection
             */
            this.scrollBehavior = exports.EntityTableScrollBehavior.Auto;
            /**
             * Whether nulls should be first when sorting
             */
            this.sortNullsFirst = false;
            /**
             * Show the table paginator or not. False by default.
             */
            this.withPaginator = false;
            /**
             * Event emitted when an entity (row) is clicked
             */
            this.entityClick = new i0.EventEmitter();
            /**
             * Event emitted when an entity (row) is selected
             */
            this.entitySelectChange = new i0.EventEmitter();
            /**
             * Event emitted when the table sort is changed.
             */
            this.entitySortChange = new i0.EventEmitter(undefined);
            /**
             * Data source consumable by the underlying material table
             * @internal
             */
            this.dataSource = new i4.MatTableDataSource();
            this.dateAdapter.setLocale('fr-CA');
        }
        Object.defineProperty(EntityTableComponent.prototype, "paginator", {
            get: function () {
                return this._paginator;
            },
            /**
             * Table paginator
             */
            set: function (value) {
                this._paginator = value;
                this.dataSource.paginator = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTableComponent.prototype, "headers", {
            /**
             * Table headers
             * @internal
             */
            get: function () {
                var columns = this.template.columns
                    .filter(function (column) { return column.visible !== false; })
                    .map(function (column) { return column.name; });
                if (this.selectionCheckbox === true) {
                    columns = ['selectionCheckbox'].concat(columns);
                }
                return columns;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTableComponent.prototype, "selection", {
            /**
             * Whether selection is supported
             * @internal
             */
            get: function () { return this.template.selection || false; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTableComponent.prototype, "selectionCheckbox", {
            /**
             * Whether a selection checkbox should be displayed
             * @internal
             */
            get: function () { return this.template.selectionCheckbox || false; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTableComponent.prototype, "selectMany", {
            /**
             * Whether selection many entities should eb supported
             * @internal
             */
            get: function () { return this.template.selectMany || false; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EntityTableComponent.prototype, "fixedHeader", {
            /**
             * Whether selection many entities should eb supported
             * @internal
             */
            get: function () { return this.template.fixedHeader === undefined ? true : this.template.fixedHeader; },
            enumerable: false,
            configurable: true
        });
        /**
         * Track the selection state to properly display the selection checkboxes
         * @internal
         */
        EntityTableComponent.prototype.ngOnInit = function () {
            this.handleDatasource();
            this.dataSource.paginator = this.paginator;
        };
        /**
         * @internal
         */
        EntityTableComponent.prototype.ngOnChanges = function (changes) {
            var store = changes.store;
            if (store && store.currentValue !== store.previousValue) {
                this.handleDatasource();
            }
        };
        /**
         * Process text or number value change (edition)
         */
        EntityTableComponent.prototype.onValueChange = function (column, record, event) {
            var key = this.getColumnKeyWithoutPropertiesTag(column);
            record.entity.properties[key] = event.target.value;
        };
        /**
         * Process boolean value change (edition)
         */
        EntityTableComponent.prototype.onBooleanValueChange = function (column, record, event) {
            var key = this.getColumnKeyWithoutPropertiesTag(column);
            record.entity.properties[key] = event.checked;
        };
        /**
         * Process select value change (edition)
         */
        EntityTableComponent.prototype.onSelectValueChange = function (column, record, event) {
            var key = this.getColumnKeyWithoutPropertiesTag(column);
            record.entity.properties[key] = event.value;
        };
        /**
         * Process autocomplete value change (edition)
         */
        EntityTableComponent.prototype.onAutocompleteValueChange = function (column, record, event) {
            this.formGroup.controls[column].setValue(event.option.viewValue);
            var key = this.getColumnKeyWithoutPropertiesTag(column);
            record.entity.properties[key] = event.option.value;
        };
        /**
         * Process date value change (edition)
         */
        EntityTableComponent.prototype.onDateChange = function (column, record, event) {
            var format = "YYYY-MM-DD";
            var value = moment(event.value).format(format);
            var key = this.getColumnKeyWithoutPropertiesTag(column);
            record.entity.properties[key] = value;
        };
        /**
         * Enable edition mode for one row
         * More than one row can be edited at the same time
         */
        EntityTableComponent.prototype.enableEdit = function (record) {
            var _this = this;
            var item = record.entity.properties || record.entity;
            this.template.columns.forEach(function (column) {
                var _a;
                column.title = ((_a = column.validation) === null || _a === void 0 ? void 0 : _a.mandatory) && !column.title.includes('*') ? column.title + ' *' : column.title;
                var key = _this.getColumnKeyWithoutPropertiesTag(column.name);
                if (column.type === 'boolean') {
                    if (!item[key] || item[key] === null) {
                        item[key] = false;
                    }
                    else if (typeof item[key] === 'string') {
                        item[key] = JSON.parse(item[key].toLowerCase());
                    }
                    _this.formGroup.setControl(column.name, _this.formBuilder.control(item[key]));
                }
                else if (column.type === 'list') {
                    if (column.multiple) {
                        _this.formGroup.setControl(column.name, _this.formBuilder.control([item[key]]));
                    }
                    else {
                        _this.formGroup.setControl(column.name, _this.formBuilder.control(item[key]));
                        typeof item[key] === 'string' ?
                            _this.formGroup.controls[column.name].setValue(parseInt(item[key])) :
                            _this.formGroup.controls[column.name].setValue(item[key]);
                    }
                }
                else if (column.type === 'autocomplete') {
                    _this.formGroup.setControl(column.name, _this.formBuilder.control(item[key]));
                    _this.filteredOptions = _this.formGroup.controls[column.name].valueChanges.pipe(operators.map(function (value) {
                        if (value.length) {
                            return column.domainValues.filter(function (option) {
                                var filterNormalized = value ? value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
                                var featureNameNormalized = option.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                                return featureNameNormalized.includes(filterNormalized);
                            });
                        }
                    }));
                    var formControlValue_1 = item[key];
                    column.domainValues.forEach(function (option) {
                        if (typeof formControlValue_1 === 'string' && /^\d+$/.test(formControlValue_1)) {
                            formControlValue_1 = parseInt(formControlValue_1);
                        }
                        if (option.value === formControlValue_1 || option.id === formControlValue_1) {
                            formControlValue_1 = option.value;
                        }
                    });
                    _this.formGroup.controls[column.name].setValue(formControlValue_1);
                }
                else if (column.type === 'date') {
                    if (column.visible) {
                        if (item[key]) {
                            var date = moment(item[key]);
                            item[key] = date.utc().format('YYYY-MM-DD');
                            _this.formGroup.setControl(column.name, _this.formBuilder.control(item[key]));
                        }
                        else {
                            var newKey = _this.getColumnKeyWithoutPropertiesTag(column.name);
                            record.entity.properties[newKey] = null;
                            _this.formGroup.setControl(column.name, _this.formBuilder.control(null));
                        }
                    }
                }
                else {
                    _this.formGroup.setControl(column.name, _this.formBuilder.control(item[key]));
                }
                if (_this.formGroup.controls[column.name] && _this.getValidationAttributeValue(column, 'readonly')) {
                    _this.formGroup.controls[column.name].disable();
                }
            });
        };
        EntityTableComponent.prototype.handleDatasource = function () {
            var _this = this;
            this.unsubscribeStore();
            this.selection$$ = this.store.stateView
                .manyBy$(function (record) { return record.state.selected === true; })
                .subscribe(function (records) {
                var firstSelected = records[0];
                var firstSelectedStateviewPosition = _this.store.stateView.all().indexOf(firstSelected);
                var pageMax = _this.paginator ? _this.paginator.pageSize * (_this.paginator.pageIndex + 1) : 0;
                var pageMin = _this.paginator ? pageMax - _this.paginator.pageSize : 0;
                if (_this.paginator &&
                    (firstSelectedStateviewPosition < pageMin ||
                        firstSelectedStateviewPosition >= pageMax)) {
                    var pageToReach = Math.floor(firstSelectedStateviewPosition / _this.paginator.pageSize);
                    _this.dataSource.paginator.pageIndex = pageToReach;
                }
                _this.selectionState$.next(_this.computeSelectionState(records));
            });
            this.dataSource$$ = this.store.stateView.all$().subscribe(function (all) {
                if (all[0]) {
                    _this.enableEdit(all[0]);
                }
                _this.dataSource.data = all;
            });
        };
        /**
         * Unbind the store watcher
         * @internal
         */
        EntityTableComponent.prototype.ngOnDestroy = function () {
            this.unsubscribeStore();
        };
        EntityTableComponent.prototype.unsubscribeStore = function () {
            if (this.selection$$) {
                this.selection$$.unsubscribe();
            }
            if (this.dataSource$$) {
                this.dataSource$$.unsubscribe();
            }
        };
        /**
         * Trackby function
         * @param record Record
         * @param index Record index
         * @internal
         */
        EntityTableComponent.prototype.getTrackByFunction = function () {
            return function (index, record) {
                return record.ref;
            };
        };
        /**
         * Trigger a refresh of thre table. This can be useful when
         * the data source doesn't emit a new value but for some reason
         * the records need an update.
         * @internal
         */
        EntityTableComponent.prototype.refresh = function () {
            this.cdRef.detectChanges();
        };
        EntityTableComponent.prototype.paginatorChange = function (event) {
            this.paginator = event;
        };
        /**
         * On sort, sort the store
         * @param event Sort event
         * @internal
         */
        EntityTableComponent.prototype.onSort = function (event) {
            var _this = this;
            var direction = event.direction;
            var column = this.template.columns
                .find(function (c) { return c.name === event.active; });
            if (direction === 'asc' || direction === 'desc') {
                this.store.stateView.sort({
                    valueAccessor: function (record) { return _this.getValue(record, column); },
                    direction: direction,
                    nullsFirst: this.sortNullsFirst
                });
                this.entitySortChange.emit({ column: column, direction: direction });
                this.entitySortChange$.next(true);
            }
            else {
                this.store.stateView.sort(undefined);
            }
        };
        /**
         * When an entity is clicked, emit an event
         * @param record Record
         * @internal
         */
        EntityTableComponent.prototype.onRowClick = function (record) {
            this.lastRecordCheckedKey = this.store.stateView.getKey(record);
            this.entityClick.emit(record.entity);
        };
        /**
         * When an entity is selected, select it in the store and emit an event. Even if
         * "many" is set to true, this method always select a single, exclusive row. Selecting
         * multiple rows should be achieved by using the checkboxes.
         * @param record Record
         * @internal
         */
        EntityTableComponent.prototype.onRowSelect = function (record) {
            if (this.selection === false) {
                return;
            }
            var entity = record.entity;
            this.store.state.update(entity, { selected: true }, true);
            this.entitySelectChange.emit({ added: [entity] });
        };
        /**
         * Select or unselect all rows at once. On select, emit an event.
         * @param toggle Select or unselect
         * @internal
         */
        EntityTableComponent.prototype.onToggleRows = function (toggle) {
            if (this.selection === false) {
                return;
            }
            this.store.state.updateAll({ selected: toggle });
            if (toggle === true) {
                var entities = this.store.stateView
                    .all()
                    .map(function (record) { return record.entity; });
                this.entitySelectChange.emit({ added: [entities] });
            }
        };
        /**
         * When an entity is toggled, select or unselect it in the store. On select,
         * emit an event.
         * @param toggle Select or unselect
         * @param record Record
         * @internal
         */
        EntityTableComponent.prototype.onToggleRow = function (toggle, record) {
            if (this.selection === false) {
                return;
            }
            var entity = record.entity;
            var exclusive = toggle === true && !this.selectMany;
            this.store.state.update(entity, { selected: toggle }, exclusive);
            if (toggle === true) {
                this.entitySelectChange.emit({ added: [entity] });
            }
            this.lastRecordCheckedKey = this.store.stateView.getKey(record);
        };
        /**
         * When an entity is toggled, select or unselect it in the store. On select,
         * emit an event.
         * @param toggle Select or unselect
         * @param record Record
         * @internal
         */
        EntityTableComponent.prototype.onShiftToggleRow = function (toggle, record, event) {
            if (this.selection === false) {
                return;
            }
            if (this.selectMany === false || this.lastRecordCheckedKey === undefined) {
                this.onToggleRow(toggle, record);
                return;
            }
            // This is a workaround mat checkbox wrong behavior
            // when the shift key is held.
            // See https://github.com/angular/components/issues/6232
            var range = window.document.createRange();
            range.selectNode(event.target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            event.stopImmediatePropagation();
            var records = this.store.stateView.all();
            var recordIndex = records.indexOf(record);
            var lastRecordChecked = this.store.stateView.get(this.lastRecordCheckedKey);
            var lastRecordIndex = records.indexOf(lastRecordChecked);
            var indexes = [recordIndex, lastRecordIndex];
            var selectRecords = records.slice(Math.min.apply(Math, __spreadArray([], __read(indexes))), Math.max.apply(Math, __spreadArray([], __read(indexes))) + 1);
            var entities = selectRecords.map(function (_record) { return _record.entity; });
            this.store.state.updateMany(entities, { selected: toggle });
            if (toggle === true) {
                this.entitySelectChange.emit({ added: entities });
            }
            this.lastRecordCheckedKey = this.store.stateView.getKey(record);
        };
        /**
         * Compute the selection state
         * @returns Whether all, some or no rows are selected
         * @internal
         */
        EntityTableComponent.prototype.computeSelectionState = function (selectedRecords) {
            var states = exports.EntityTableSelectionState;
            var selectionCount = selectedRecords.length;
            return selectionCount === 0 ?
                states.None :
                (selectionCount === this.store.stateView.count ? states.All : states.Some);
        };
        /**
         * Whether a column is sortable
         * @param column Column
         * @returns True if a column is sortable
         * @internal
         */
        EntityTableComponent.prototype.columnIsSortable = function (column) {
            var sortable = column.sort;
            if (sortable === undefined) {
                sortable = this.template.sort === undefined ? false : this.template.sort;
            }
            return sortable;
        };
        /**
         * Whether a row is should be selected based on the underlying entity state
         * @param record Record
         * @returns True if a row should be selected
         * @internal
         */
        EntityTableComponent.prototype.rowIsSelected = function (record) {
            var state = record.state;
            return state.selected ? state.selected : false;
        };
        EntityTableComponent.prototype.isImg = function (value) {
            if (this.isUrl(value)) {
                return (['jpg', 'png', 'gif'].indexOf(value.split('.').pop().toLowerCase()) !== -1);
            }
            else {
                return false;
            }
        };
        EntityTableComponent.prototype.isUrl = function (value) {
            if (typeof value === 'string') {
                return (value.slice(0, 8) === 'https://' || value.slice(0, 7) === 'http://');
            }
            else {
                return false;
            }
        };
        /**
         * Method to access an entity's values
         * @param record Record
         * @param column Column
         * @returns Any value
         * @internal
         */
        EntityTableComponent.prototype.getValue = function (record, column) {
            var _this = this;
            var entity = record.entity;
            var value;
            if (column.valueAccessor !== undefined) {
                return column.valueAccessor(entity, record);
            }
            if (this.template.valueAccessor !== undefined) {
                return this.template.valueAccessor(entity, column.name, record);
            }
            value = this.store.getProperty(entity, column.name);
            if (column.type === 'boolean') {
                if (value === undefined || value === null || value === '') {
                    value = false;
                }
                else if (typeof value !== 'boolean' && value !== undefined) {
                    if (typeof value === 'number') {
                        value = Boolean(value);
                    }
                    else {
                        value = JSON.parse(value.toLowerCase());
                    }
                }
                if (!this.isEdition(record)) {
                    value = value ? '&#10003;' : ''; // check mark
                }
            }
            else if (column.type === 'list' && value && column.domainValues) {
                if (column.multiple) {
                    var list_id_1;
                    typeof value === 'string' ? list_id_1 = value.match(/[\w.-]+/g).map(Number) : list_id_1 = value;
                    var list_option_1 = [];
                    column.domainValues.forEach(function (option) {
                        if (list_id_1.includes(option.id)) {
                            if (record.edition) {
                                list_option_1.push(option.id);
                            }
                            else {
                                list_option_1.push(option.value);
                            }
                        }
                    });
                    this.isEdition(record) ? value = list_id_1 : value = list_option_1;
                }
                else {
                    column.domainValues.forEach(function (option) {
                        if (typeof value === 'string' && /^\d+$/.test(value)) {
                            value = parseInt(value);
                        }
                        if (option.value === value || option.id === value) {
                            _this.isEdition(record) ? value = option.id : value = option.value;
                        }
                    });
                }
            }
            else if (column.type === 'autocomplete' && value && column.domainValues) {
                column.domainValues.forEach(function (option) {
                    if (typeof value === 'string' && /^\d+$/.test(value)) {
                        value = parseInt(value);
                    }
                    if (option.value === value || option.id === value) {
                        value = option.value;
                    }
                });
            }
            else if (column.type === 'date') {
                if (this.isEdition(record)) {
                    if (value) {
                        var date = moment(value);
                        value = date.format();
                        this.formGroup.controls[column.name].setValue(value);
                    }
                }
                else if (!this.isEdition(record) && value === null) {
                    value = "";
                }
            }
            if (value === undefined) {
                value = '';
            }
            return value;
        };
        /**
         * Method to access an entity's validation values
         * @param column Column
         * @param validationType string
         * @returns Any value (false if no validation or not the one concerned)
         * @internal
         */
        EntityTableComponent.prototype.getValidationAttributeValue = function (column, validationType) {
            if (column.validation !== undefined && column.validation[validationType] !== undefined) {
                return column.validation[validationType];
            }
            else {
                return false;
            }
        };
        EntityTableComponent.prototype.isEdition = function (record) {
            return record.entity.edition ? true : false;
        };
        /**
         * Return the type of renderer of a column
         * @param column Column
         * @returns Renderer type
         * @internal
         */
        EntityTableComponent.prototype.getColumnRenderer = function (column) {
            if (column.renderer !== undefined) {
                return column.renderer;
            }
            return exports.EntityTableColumnRenderer.Default;
        };
        /**
         * Return the table ngClass
         * @returns ngClass
         * @internal
         */
        EntityTableComponent.prototype.getTableClass = function () {
            return {
                'igo-entity-table-with-selection': this.selection
            };
        };
        /**
         * Return a header ngClass
         * @returns ngClass
         * @internal
         */
        EntityTableComponent.prototype.getHeaderClass = function () {
            var func = this.template.headerClassFunc;
            if (func instanceof Function) {
                return func();
            }
            return {};
        };
        /**
         * Return a row ngClass
         * @param record Record
         * @returns ngClass
         * @internal
         */
        EntityTableComponent.prototype.getRowClass = function (record) {
            var entity = record.entity;
            var func = this.template.rowClassFunc;
            if (func instanceof Function) {
                return func(entity, record);
            }
            return {};
        };
        /**
         * Return a row ngClass
         * @param record Record
         * @param column Column
         * @returns ngClass
         * @internal
         */
        EntityTableComponent.prototype.getCellClass = function (record, column) {
            var entity = record.entity;
            var cls = {};
            var tableFunc = this.template.cellClassFunc;
            if (tableFunc instanceof Function) {
                Object.assign(cls, tableFunc(entity, column, record));
            }
            var columnFunc = column.cellClassFunc;
            if (columnFunc instanceof Function) {
                Object.assign(cls, columnFunc(entity, record));
            }
            return cls;
        };
        /**
         * When a button is clicked
         * @param func Function
         * @param record Record
         * @internal
         */
        EntityTableComponent.prototype.onButtonClick = function (clickFunc, record) {
            this.enableEdit(record);
            if (typeof clickFunc === 'function') {
                clickFunc(record.entity, record);
            }
        };
        /**
         * Retrieve column name without his "properties" tag (useful for edition workspace properties)
         */
        EntityTableComponent.prototype.getColumnKeyWithoutPropertiesTag = function (column) {
            if (column.includes('properties.')) {
                return column.split('.')[1];
            }
            return column;
        };
        return EntityTableComponent;
    }());
    EntityTableComponent.ɵfac = function EntityTableComponent_Factory(t) { return new (t || EntityTableComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i1__namespace$5.FormBuilder), i0__namespace.ɵɵdirectiveInject(i2__namespace$2.FocusMonitor), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i1__namespace$5.NgControl, 10), i0__namespace.ɵɵdirectiveInject(i1__namespace$5.NgForm, 8), i0__namespace.ɵɵdirectiveInject(i1__namespace$5.FormControlName, 8), i0__namespace.ɵɵdirectiveInject(i3__namespace.ErrorStateMatcher), i0__namespace.ɵɵdirectiveInject(i3__namespace.DateAdapter)); };
    EntityTableComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: EntityTableComponent, selectors: [["igo-entity-table"]], inputs: { store: "store", paginator: "paginator", template: "template", scrollBehavior: "scrollBehavior", sortNullsFirst: "sortNullsFirst", withPaginator: "withPaginator", paginatorOptions: "paginatorOptions" }, outputs: { entityClick: "entityClick", entitySelectChange: "entitySelectChange", entitySortChange: "entitySortChange" }, features: [i0__namespace.ɵɵProvidersFeature([{ provide: i1.MatFormFieldControl, useExisting: EntityTableComponent }]), i0__namespace.ɵɵNgOnChangesFeature], decls: 9, vars: 8, consts: [[1, "table-container"], ["mat-table", "", "matSort", "", 3, "ngClass", "dataSource", "trackBy", "matSortChange"], ["matColumnDef", "selectionCheckbox", 1, "mat-cell-checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 3, "ngClass", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "igoEntityTableRow", "", 3, "scrollBehavior", "ngClass", "selection", "selected", "select", "click", 4, "matRowDef", "matRowDefColumns"], [3, "store", "paginatorOptions", "entitySortChange$", "paginatorChange", 4, "ngIf"], ["mat-header-cell", ""], [4, "ngIf"], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "mousedown", "click", "change"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "matTooltip"], ["mat-header-cell", "", 3, "matTooltip", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "matTooltip"], [4, "matCellDef"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["isAnUrlDefault", ""], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "click"], ["width", "50", "heigth", "auto", 3, "src", 4, "ngIf", "ngIfElse"], ["notImg", ""], ["width", "50", "heigth", "auto", 3, "src"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", "innerHTML", 4, "ngIf", "ngIfElse"], ["isAnUrlHTML", ""], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass", "innerHTML"], ["mat-cell", "", "class", "mat-cell-text edition", 3, "formGroup", "ngClass", 4, "ngIf", "ngIfElse"], ["isUnsanitizedHTML", ""], ["mat-cell", "", 1, "mat-cell-text", "edition", 3, "formGroup", "ngClass"], ["class", "date-picker", 4, "ngIf"], ["matInput", "", "type", "time", "step", "900", 3, "formControlName", "focus", "keypress", "blur", 4, "ngIf"], ["matInput", "", "type", "number", "class", "class_number_edition", 3, "formControlName", "step", "value", "readonly", "required", "min", "max", "input", 4, "ngIf"], ["matInput", "", "type", "text", 3, "formControlName", "value", "readonly", "required", "input", 4, "ngIf"], [3, "formControlName", "checked", "change", 4, "ngIf"], [3, "required", "formControlName", "multiple", "value", "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", 3, "formControlName", "matAutocomplete", "required", "value", 4, "ngIf"], ["panelWidth", "430px", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "date-picker"], ["matSuffix", "", 3, "for"], ["matInput", "", 3, "matDatepicker", "formControlName", "value", "dateChange"], ["picker", ""], ["matInput", "", "type", "time", "step", "900", 3, "formControlName", "focus", "keypress", "blur"], ["matInput", "", "type", "number", 1, "class_number_edition", 3, "formControlName", "step", "value", "readonly", "required", "min", "max", "input"], ["matInput", "", "type", "text", 3, "formControlName", "value", "readonly", "required", "input"], [3, "formControlName", "checked", "change"], [3, "required", "formControlName", "multiple", "value", "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["matInput", "", "type", "text", 3, "formControlName", "matAutocomplete", "required", "value"], [3, "value"], ["isAnUrlUnsanitizedHTML", ""], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "matCellDef"], [3, "svgIcon", "click"], [4, "ngFor", "ngForOf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "color", "disabled", "mousedown", 4, "ngIf"], ["igoStopPropagation", "", "mat-mini-fab", "", 3, "color", "disabled", "mousedown", 4, "ngIf"], ["igoStopPropagation", "", "mat-icon-button", "", 3, "color", "disabled", "mousedown"], [3, "svgIcon"], ["igoStopPropagation", "", "mat-mini-fab", "", 3, "color", "disabled", "mousedown"], ["mat-header-row", "", 3, "ngClass"], ["mat-row", "", "igoEntityTableRow", "", 3, "scrollBehavior", "ngClass", "selection", "selected", "select", "click"], [3, "store", "paginatorOptions", "entitySortChange$", "paginatorChange"]], template: function EntityTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "table", 1);
                i0__namespace.ɵɵlistener("matSortChange", function EntityTableComponent_Template_table_matSortChange_1_listener($event) { return ctx.onSort($event); });
                i0__namespace.ɵɵelementContainerStart(2, 2);
                i0__namespace.ɵɵtemplate(3, EntityTableComponent_th_3_Template, 2, 1, "th", 3);
                i0__namespace.ɵɵtemplate(4, EntityTableComponent_td_4_Template, 2, 1, "td", 4);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(5, EntityTableComponent_ng_container_5_Template, 4, 4, "ng-container", 5);
                i0__namespace.ɵɵtemplate(6, EntityTableComponent_tr_6_Template, 1, 1, "tr", 6);
                i0__namespace.ɵɵtemplate(7, EntityTableComponent_tr_7_Template, 1, 4, "tr", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, EntityTableComponent_igo_entity_table_paginator_8_Template, 1, 3, "igo-entity-table-paginator", 8);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", ctx.getTableClass())("dataSource", ctx.dataSource)("trackBy", ctx.getTrackByFunction());
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.template.columns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.headers)("matHeaderRowDefSticky", ctx.fixedHeader);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.headers);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.withPaginator);
            }
        }, directives: [i4__namespace.MatTable, i5__namespace.MatSort, i1__namespace$1.NgClass, i4__namespace.MatColumnDef, i4__namespace.MatHeaderCellDef, i4__namespace.MatCellDef, i1__namespace$1.NgForOf, i4__namespace.MatHeaderRowDef, i4__namespace.MatRowDef, i1__namespace$1.NgIf, i4__namespace.MatHeaderCell, i7__namespace.MatCheckbox, i4__namespace.MatCell, i5__namespace.MatSortHeader, i6__namespace.MatTooltip, i1__namespace$5.NgControlStatusGroup, i1__namespace$5.FormGroupDirective, i9__namespace.MatAutocomplete, i10__namespace.MatDatepickerToggle, i1__namespace.MatSuffix, i2__namespace$3.MatInput, i10__namespace.MatDatepickerInput, i1__namespace$5.DefaultValueAccessor, i1__namespace$5.NgControlStatus, i1__namespace$5.FormControlName, i10__namespace.MatDatepicker, i1__namespace$5.NumberValueAccessor, i1__namespace$5.MinValidator, i1__namespace$5.MaxValidator, i1__namespace$5.RequiredValidator, i2__namespace.MatSelect, i3__namespace.MatOption, i9__namespace.MatAutocompleteTrigger, i5__namespace$1.MatIcon, i4__namespace$1.MatButton, StopPropagationDirective, i4__namespace.MatHeaderRow, i4__namespace.MatRow, EntityTableRowDirective, EntityTablePaginatorComponent], pipes: [i1__namespace$1.AsyncPipe, SecureImagePipe, i6__namespace$1.TranslatePipe, SanitizeHtmlPipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block}.table-compact[_nghost-%COMP%]   tr.mat-header-row[_ngcontent-%COMP%], .table-compact[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-ripple{height:36px}.table-compact[_nghost-%COMP%]   tr.mat-row[_ngcontent-%COMP%], .table-compact[_nghost-%COMP%]     .mat-checkbox .mat-checkbox-ripple{height:28px}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto;flex:1 1 auto}.mat-cell-text[_ngcontent-%COMP%]{overflow:hidden;word-wrap:break-word}th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{padding:0 3px}entity-table[_ngcontent-%COMP%]   table.igo-entity-table-with-selection[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd;cursor:pointer}table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:7px}.class_boolean[_ngcontent-%COMP%], .class_icon[_ngcontent-%COMP%], .class_number[_ngcontent-%COMP%]{text-align:center;padding-right:35px!important}.class_sting[_ngcontent-%COMP%], .class_text[_ngcontent-%COMP%], .class_number_edition[_ngcontent-%COMP%]{text-align:left}td.edition[_ngcontent-%COMP%]{background:rgba(166,166,166,.2)}input[_ngcontent-%COMP%]{border-bottom:1px solid darkgrey}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EntityTableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-entity-table',
                        templateUrl: './entity-table.component.html',
                        styleUrls: ['./entity-table.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [{ provide: i1.MatFormFieldControl, useExisting: EntityTableComponent }]
                    }]
            }], function () {
            return [{ type: i0__namespace.ChangeDetectorRef }, { type: i1__namespace$5.FormBuilder }, { type: i2__namespace$2.FocusMonitor }, { type: i0__namespace.ElementRef }, { type: i1__namespace$5.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: i1__namespace$5.NgForm, decorators: [{
                            type: i0.Optional
                        }] }, { type: i1__namespace$5.FormControlName, decorators: [{
                            type: i0.Optional
                        }] }, { type: i3__namespace.ErrorStateMatcher }, { type: i3__namespace.DateAdapter }];
        }, { store: [{
                    type: i0.Input
                }], paginator: [{
                    type: i0.Input
                }], template: [{
                    type: i0.Input
                }], scrollBehavior: [{
                    type: i0.Input
                }], sortNullsFirst: [{
                    type: i0.Input
                }], withPaginator: [{
                    type: i0.Input
                }], paginatorOptions: [{
                    type: i0.Input
                }], entityClick: [{
                    type: i0.Output
                }], entitySelectChange: [{
                    type: i0.Output
                }], entitySortChange: [{
                    type: i0.Output
                }] });
    })();

    exports.ActionbarMode = void 0;
    (function (ActionbarMode) {
        ActionbarMode["Dock"] = "dock";
        ActionbarMode["Overlay"] = "overlay";
        ActionbarMode["Context"] = "context";
    })(exports.ActionbarMode || (exports.ActionbarMode = {}));

    function ActionbarItemComponent_mat_list_item_0_button_4_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-icon", 7);
            i0__namespace.ɵɵpipe(1, "async");
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵpropertyInterpolate("svgIcon", i0__namespace.ɵɵpipeBind1(1, 1, ctx_r4.icon$));
        }
    }
    function ActionbarItemComponent_mat_list_item_0_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 5);
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵtemplate(2, ActionbarItemComponent_mat_list_item_0_button_4_mat_icon_2_Template, 2, 3, "mat-icon", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r2.color)("disabled", i0__namespace.ɵɵpipeBind1(1, 3, ctx_r2.disabled$));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.withIcon);
        }
    }
    function ActionbarItemComponent_mat_list_item_0_h4_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "h4", 8);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, ctx_r3.title));
        }
    }
    function ActionbarItemComponent_mat_list_item_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-list-item", 2);
            i0__namespace.ɵɵlistener("click", function ActionbarItemComponent_mat_list_item_0_Template_mat_list_item_click_0_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onClick(); });
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵtemplate(4, ActionbarItemComponent_mat_list_item_0_button_4_Template, 3, 5, "button", 3);
            i0__namespace.ɵɵtemplate(5, ActionbarItemComponent_mat_list_item_0_h4_5_Template, 3, 3, "h4", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("matTooltip", ctx_r0.withTooltip ? i0__namespace.ɵɵpipeBind1(1, 4, i0__namespace.ɵɵpipeBind1(2, 6, ctx_r0.tooltip$) || ctx_r0.title) : "")("ngClass", i0__namespace.ɵɵpipeBind1(3, 8, ctx_r0.ngClass$));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.withIcon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.withTitle);
        }
    }
    function ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-checkbox", 11);
            i0__namespace.ɵɵlistener("change", function ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template_mat_checkbox_change_0_listener() { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r8 = i0__namespace.ɵɵnextContext(2); return ctx_r8.action.handler(); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("checked", i0__namespace.ɵɵpipeBind1(1, 2, ctx_r7.checkCondition$));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(3, 4, ctx_r7.title), " ");
        }
    }
    function ActionbarItemComponent_mat_list_item_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list-item", 9);
            i0__namespace.ɵɵpipe(1, "translate");
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵtemplate(4, ActionbarItemComponent_mat_list_item_1_mat_checkbox_4_Template, 4, 6, "mat-checkbox", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("matTooltip", ctx_r1.withTooltip ? i0__namespace.ɵɵpipeBind1(1, 3, i0__namespace.ɵɵpipeBind1(2, 5, ctx_r1.tooltip$) || ctx_r1.title) : "")("ngClass", i0__namespace.ɵɵpipeBind1(3, 7, ctx_r1.ngClass$));
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.withTitle);
        }
    }
    /**
     * An action button
     */
    var ActionbarItemComponent = /** @class */ (function () {
        function ActionbarItemComponent() {
            this.disabled$ = new rxjs.BehaviorSubject(false);
            this.checkCondition$ = new rxjs.BehaviorSubject(undefined);
            this.icon$ = new rxjs.BehaviorSubject(undefined);
            this.tooltip$ = new rxjs.BehaviorSubject(undefined);
            this.noDisplay$ = new rxjs.BehaviorSubject(false);
            this.ngClass$ = new rxjs.BehaviorSubject({});
            /**
             * Color
             */
            this.color = 'default';
            /**
             * Whether the action title is displayed
             */
            this.withTitle = true;
            /**
             * Whether the action icon is displayed
             */
            this.withIcon = true;
            /**
             * Whether a tooltip should be shown
             */
            this.withTooltip = true;
            /**
             * Event emitted when the action button is clicked
             */
            this.trigger = new i0.EventEmitter();
        }
        Object.defineProperty(ActionbarItemComponent.prototype, "disabled", {
            get: function () { return this.disabled$.value; },
            /**
             * Whether the action is disabled
             */
            set: function (value) { this.disabled$.next(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarItemComponent.prototype, "noDisplay", {
            get: function () { return this.noDisplay$.value; },
            /**
             * Whether the action is display or not
             */
            set: function (value) { this.noDisplay$.next(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarItemComponent.prototype, "title", {
            /**
             * @internal
             */
            get: function () { return this.action.title; },
            enumerable: false,
            configurable: true
        });
        ActionbarItemComponent.prototype.ngOnInit = function () {
            var _a, _b, _c;
            var _this = this;
            var args = this.action.args || [];
            if (this.action.ngClass !== undefined) {
                this.ngClass$$ = (_a = this.action).ngClass.apply(_a, __spreadArray([], __read(args))).subscribe(function (ngClass) { return _this.updateNgClass(ngClass); });
            }
            if (rxjs.isObservable(this.action.icon)) {
                this.icon$$ = this.action.icon
                    .subscribe(function (icon) { return _this.updateIcon(icon); });
            }
            else {
                this.updateIcon(this.action.icon);
            }
            if (rxjs.isObservable(this.action.checkCondition)) {
                this.checkCondition$$ = this.action.checkCondition
                    .subscribe(function (checkCondition) { return _this.updateCheckCondition(checkCondition); });
            }
            else {
                this.updateCheckCondition(this.action.checkCondition);
            }
            if (rxjs.isObservable(this.action.tooltip)) {
                this.tooltip$$ = this.action.tooltip
                    .subscribe(function (tooltip) { return _this.updateTooltip(tooltip); });
            }
            else {
                this.updateTooltip(this.action.tooltip);
            }
            if (this.action.availability !== undefined) {
                this.availability$$ = (_b = this.action).availability.apply(_b, __spreadArray([], __read(args))).subscribe(function (available) { return _this.disabled = !available; });
            }
            this.disabled$$ = this.disabled$
                .subscribe(function (disabled) { return _this.updateNgClass({ 'igo-actionbar-item-disabled': disabled }); });
            if (this.action.display !== undefined) {
                this.display$$ = (_c = this.action).display.apply(_c, __spreadArray([], __read(args))).subscribe(function (display) { return _this.noDisplay = !display; });
            }
            this.noDisplay$$ = this.noDisplay$
                .subscribe(function (noDisplay) { return _this.updateNgClass({ 'igo-actionbar-item-no-display': noDisplay }); });
        };
        ActionbarItemComponent.prototype.ngOnDestroy = function () {
            if (this.ngClass$$ !== undefined) {
                this.ngClass$$.unsubscribe();
                this.ngClass$$ = undefined;
            }
            if (this.availability$$ !== undefined) {
                this.availability$$.unsubscribe();
                this.availability$$ = undefined;
            }
            if (this.display$$ !== undefined) {
                this.display$$.unsubscribe();
                this.display$$ = undefined;
            }
            if (this.checkCondition$$ !== undefined) {
                this.checkCondition$$.unsubscribe();
                this.checkCondition$$ = undefined;
            }
            if (this.icon$$ !== undefined) {
                this.icon$$.unsubscribe();
                this.icon$$ = undefined;
            }
            if (this.tooltip$$ !== undefined) {
                this.tooltip$$.unsubscribe();
                this.tooltip$$ = undefined;
            }
            this.disabled$$.unsubscribe();
            this.noDisplay$$.unsubscribe();
        };
        /**
         * When the action button is clicked, emit the 'trigger' event but don't
         * invoke the action handler. This is handled by the parent component.
         * @internal
         */
        ActionbarItemComponent.prototype.onClick = function () {
            if (this.disabled === true) {
                return;
            }
            this.trigger.emit(this.action);
        };
        ActionbarItemComponent.prototype.updateNgClass = function (ngClass) {
            this.ngClass$.next(Object.assign({}, this.ngClass$.value, ngClass));
        };
        ActionbarItemComponent.prototype.updateTooltip = function (tooltip) {
            this.tooltip$.next(tooltip);
        };
        ActionbarItemComponent.prototype.updateCheckCondition = function (checkCondition) {
            this.checkCondition$.next(checkCondition);
        };
        ActionbarItemComponent.prototype.updateIcon = function (icon) {
            this.icon$.next(icon);
        };
        return ActionbarItemComponent;
    }());
    ActionbarItemComponent.ɵfac = function ActionbarItemComponent_Factory(t) { return new (t || ActionbarItemComponent)(); };
    ActionbarItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ActionbarItemComponent, selectors: [["igo-actionbar-item"]], inputs: { action: "action", color: "color", withTitle: "withTitle", withIcon: "withIcon", withTooltip: "withTooltip", disabled: "disabled", noDisplay: "noDisplay" }, outputs: { trigger: "trigger" }, decls: 2, vars: 2, consts: [["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", "click", 4, "ngIf"], ["class", "item-checkbox", "matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", 4, "ngIf"], ["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 3, "matTooltip", "ngClass", "click"], ["mat-list-avatar", "", "mat-icon-button", "", 3, "color", "disabled", 4, "ngIf"], ["matLine", "", 4, "ngIf"], ["mat-list-avatar", "", "mat-icon-button", "", 3, "color", "disabled"], [3, "svgIcon", 4, "ngIf"], [3, "svgIcon"], ["matLine", ""], ["matTooltipClass", "actionbarItemTooltip", "matTooltipShowDelay", "500", 1, "item-checkbox", 3, "matTooltip", "ngClass"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]], template: function ActionbarItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ActionbarItemComponent_mat_list_item_0_Template, 6, 10, "mat-list-item", 0);
                i0__namespace.ɵɵtemplate(1, ActionbarItemComponent_mat_list_item_1_Template, 5, 9, "mat-list-item", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", !ctx.action.checkbox);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.action.checkbox);
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace$6.MatListItem, i6__namespace.MatTooltip, i1__namespace$1.NgClass, i4__namespace$1.MatButton, i1__namespace$6.MatListAvatarCssMatStyler, i5__namespace$1.MatIcon, i3__namespace.MatLine, i7__namespace.MatCheckbox], pipes: [i6__namespace$1.TranslatePipe, i1__namespace$1.AsyncPipe], styles: ["mat-list-item.igo-actionbar-item-disabled[_ngcontent-%COMP%]{color:#00000042;cursor:default!important}mat-list-item.igo-actionbar-item-no-display[_ngcontent-%COMP%]{display:none}mat-checkbox[_ngcontent-%COMP%]{padding:12px}.item-checkbox[_ngcontent-%COMP%]{height:56px}.item-checkbox[_ngcontent-%COMP%]     .mat-checkbox-label{margin-left:20px}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ActionbarItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-actionbar-item',
                        templateUrl: './actionbar-item.component.html',
                        styleUrls: ['./actionbar-item.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { action: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], withTitle: [{
                    type: i0.Input
                }], withIcon: [{
                    type: i0.Input
                }], withTooltip: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], noDisplay: [{
                    type: i0.Input
                }], trigger: [{
                    type: i0.Output
                }] });
    })();

    function ActionbarComponent_mat_list_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 5);
            i0__namespace.ɵɵelementStart(1, "button", 6);
            i0__namespace.ɵɵlistener("click", function ActionbarComponent_mat_list_0_div_1_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var ctx_r7 = i0__namespace.ɵɵnextContext(2); return ctx_r7.scrollUp(); });
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelement(3, "mat-icon", 7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(2, 1, "igo.common.actionbar.scrollUp"));
        }
    }
    function ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-actionbar-item", 8);
            i0__namespace.ɵɵlistener("trigger", function ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template_igo_actionbar_item_trigger_0_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(2); return ctx_r9.onTriggerAction(ctx_r9.toggleCollapseAction); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("withTitle", false)("withIcon", true)("color", ctx_r4.color)("disabled", ctx_r4.store.view.empty)("action", ctx_r4.toggleCollapseAction);
        }
    }
    function ActionbarComponent_mat_list_0_3_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-actionbar-item", 11);
            i0__namespace.ɵɵlistener("trigger", function ActionbarComponent_mat_list_0_3_ng_template_0_Template_igo_actionbar_item_trigger_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r15_1); var action_r13 = restoredCtx.$implicit; var ctx_r14 = i0__namespace.ɵɵnextContext(3); return ctx_r14.onTriggerAction(action_r13); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r13 = ctx.$implicit;
            var ctx_r12 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("withTitle", ctx_r12.withTitle)("withIcon", ctx_r12.withIcon)("withTooltip", ctx_r12.withTooltip)("color", ctx_r12.color)("disabled", ctx_r12.store.state.get(action_r13).disabled)("action", action_r13);
        }
    }
    function ActionbarComponent_mat_list_0_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, ActionbarComponent_mat_list_0_3_ng_template_0_Template, 1, 6, "ng-template", 9, 10, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵpipe(2, "async");
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(2, 1, ctx_r5.store.view.all$()));
        }
    }
    function ActionbarComponent_mat_list_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "button", 6);
            i0__namespace.ɵɵlistener("click", function ActionbarComponent_mat_list_0_div_4_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r17_1); var ctx_r16 = i0__namespace.ɵɵnextContext(2); return ctx_r16.scrollDown(); });
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelement(3, "mat-icon", 13);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(2, 1, "igo.common.actionbar.scrollDown"));
        }
    }
    function ActionbarComponent_mat_list_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-list");
            i0__namespace.ɵɵtemplate(1, ActionbarComponent_mat_list_0_div_1_Template, 4, 3, "div", 2);
            i0__namespace.ɵɵtemplate(2, ActionbarComponent_mat_list_0_igo_actionbar_item_2_Template, 1, 5, "igo-actionbar-item", 3);
            i0__namespace.ɵɵtemplate(3, ActionbarComponent_mat_list_0_3_Template, 3, 3, undefined, 0);
            i0__namespace.ɵɵtemplate(4, ActionbarComponent_mat_list_0_div_4_Template, 4, 3, "div", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.heightCondition && ctx_r0.positionConditionTop && ctx_r0.isDesktop);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.withToggleButton);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r0.collapsed);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.heightCondition && ctx_r0.positionConditionLow && ctx_r0.isDesktop);
        }
    }
    function ActionbarComponent_div_1_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-actionbar-item", 18);
            i0__namespace.ɵɵlistener("trigger", function ActionbarComponent_div_1_ng_template_7_Template_igo_actionbar_item_trigger_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r22_1); var action_r20 = restoredCtx.$implicit; var ctx_r21 = i0__namespace.ɵɵnextContext(2); return ctx_r21.onTriggerAction(action_r20); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r20 = ctx.$implicit;
            var ctx_r19 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("withTitle", ctx_r19.withTitle)("withIcon", ctx_r19.withIcon)("color", ctx_r19.color)("action", action_r20);
        }
    }
    function ActionbarComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "button", 14);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelement(3, "mat-icon", 15);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-menu", 16, 17);
            i0__namespace.ɵɵelementStart(6, "mat-list");
            i0__namespace.ɵɵtemplate(7, ActionbarComponent_div_1_ng_template_7_Template, 1, 4, "ng-template", 9);
            i0__namespace.ɵɵpipe(8, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r18 = i0__namespace.ɵɵreference(5);
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(2, 10, "igo.common.actionbar.icon"))("matMenuTriggerFor", _r18)("disabled", ctx_r1.store.view.empty)("color", ctx_r1.iconColor);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("svgIcon", ctx_r1.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵclassMap(ctx_r1.overlayClass);
            i0__namespace.ɵɵproperty("xPosition", ctx_r1.xPosition)("yPosition", ctx_r1.yPosition);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(8, 12, ctx_r1.store.view.all$()));
        }
    }
    function ActionbarComponent_mat_card_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "igo-actionbar-item", 18);
            i0__namespace.ɵɵlistener("trigger", function ActionbarComponent_mat_card_2_ng_template_2_Template_igo_actionbar_item_trigger_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r26_1); var action_r24 = restoredCtx.$implicit; var ctx_r25 = i0__namespace.ɵɵnextContext(2); return ctx_r25.onTriggerAction(action_r24); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(1, "br");
        }
        if (rf & 2) {
            var action_r24 = ctx.$implicit;
            var ctx_r23 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("withTitle", ctx_r23.withTitle)("withIcon", ctx_r23.withIcon)("color", ctx_r23.color)("action", action_r24);
        }
    }
    function ActionbarComponent_mat_card_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-card", 19);
            i0__namespace.ɵɵelementStart(1, "mat-list");
            i0__namespace.ɵɵtemplate(2, ActionbarComponent_mat_card_2_ng_template_2_Template, 2, 4, "ng-template", 9);
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(3, 1, ctx_r2.store.view.all$()));
        }
    }
    /**
     * A list of action buttons.
     * This component can be displayed in one of two way: 'dock' or 'overlay'
     */
    var ActionbarComponent = /** @class */ (function () {
        function ActionbarComponent(overlay, elRef, cdRef, mediaService) {
            var _this = this;
            this.overlay = overlay;
            this.elRef = elRef;
            this.cdRef = cdRef;
            this.mediaService = mediaService;
            /**
             * Reference to the ActionbarMode enum for use in the template
             * @internal
             */
            this.actionbarMode = exports.ActionbarMode;
            /**
             * Whether the actionbar is collapsed (Dock mode)
             * @internal
             */
            this.collapsed = false;
            /**
             * Toggle collapse action (Dock)
             * @internal
             */
            this.toggleCollapseAction = {
                id: 'actionbar_toggle',
                icon: 'dots-vertical',
                handler: function () {
                    _this.collapsed = !_this.collapsed;
                }
            };
            /**
             * Height Condition for scroll button
             */
            this.heightCondition$ = new rxjs.BehaviorSubject(false);
            /**
             * Position Condition for top scroll button
             */
            this.positionConditionTop$ = new rxjs.BehaviorSubject(true);
            /**
             * Position Condition for low scroll button
             */
            this.positionConditionLow$ = new rxjs.BehaviorSubject(true);
            /**
             * Actionbar mode
             */
            this.mode = exports.ActionbarMode.Dock;
            /**
             * Whether a toggle button should be displayed (Dock mode)
             */
            this.withToggleButton = false;
            /**
             * Whether a the actionbar should display buttons horizontally
             */
            this.horizontal = false;
            /**
             * Color
             */
            this.color = 'default';
            /**
             * Color of the button if action mode === overlay
             */
            this.iconColor = 'default';
            /**
             * Whether action titles are displayed
             */
            this.withTitle = true;
            /**
             * Whether action tooltips are displayed
             */
            this.withTooltip = true;
            /**
             * Whether action titles are displayed (condition for scroll button)
             */
            this.scrollActive = true;
            /**
             * Whether action icons are displayed
             */
            this.withIcon = true;
            /**
             * Which icon want to be shown
             */
            this.icon = 'dots-horizontal';
            /**
             * Overlay X position
             */
            this.xPosition = 'before';
            /**
             * Overlay Y position
             */
            this.yPosition = 'above';
            this._overlayClass = '';
        }
        Object.defineProperty(ActionbarComponent.prototype, "overlayClass", {
            get: function () {
                return [this._overlayClass, 'igo-actionbar-overlay'].join(' ');
            },
            /**
             * Class to add to the actionbar overlay
             */
            set: function (value) {
                this._overlayClass = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "withTitleClass", {
            /**
             * @ignore
             */
            get: function () {
                return this.withTitle;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "withIconClass", {
            /**
             * @ignore
             */
            get: function () {
                return this.withIcon;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "horizontalClass", {
            /**
             * @ignore
             */
            get: function () {
                return this.horizontal;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "heightCondition", {
            get: function () {
                var el = this.elRef.nativeElement;
                if (this.scrollActive === false) {
                    if (el.clientHeight < el.scrollHeight) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "positionConditionTop", {
            get: function () {
                if (this.elRef.nativeElement.scrollTop === 0) {
                    return false;
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "positionConditionLow", {
            get: function () {
                var el = this.elRef.nativeElement;
                if (el.scrollTop >= (el.scrollHeight - el.clientHeight)) {
                    return false;
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionbarComponent.prototype, "isDesktop", {
            get: function () {
                return this.mediaService.getMedia() === i1$2.Media.Desktop;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @internal
         */
        ActionbarComponent.prototype.ngOnChanges = function (changes) {
            var store = changes.store;
            if (store && store.currentValue !== store.previousValue) {
                if (this.watcher !== undefined) {
                    this.watcher.destroy();
                }
                this.watcher = new EntityStoreWatcher(this.store, this.cdRef);
            }
        };
        /**
         * @internal
         */
        ActionbarComponent.prototype.ngOnDestroy = function () {
            this.watcher.destroy();
        };
        /**
         * Invoke the action handler
         * @internal
         */
        ActionbarComponent.prototype.onTriggerAction = function (action) {
            var args = action.args || [];
            action.handler.apply(action, __spreadArray([], __read(args)));
        };
        ActionbarComponent.prototype.scrollDown = function () {
            this.elRef.nativeElement.scrollBy(0, 52);
        };
        ActionbarComponent.prototype.scrollUp = function () {
            this.elRef.nativeElement.scrollBy(0, -52);
        };
        return ActionbarComponent;
    }());
    ActionbarComponent.ɵfac = function ActionbarComponent_Factory(t) { return new (t || ActionbarComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$7.Overlay), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MediaService)); };
    ActionbarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ActionbarComponent, selectors: [["igo-actionbar"]], hostVars: 6, hostBindings: function ActionbarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("with-title", ctx.withTitleClass)("with-icon", ctx.withIconClass)("horizontal", ctx.horizontalClass);
            }
        }, inputs: { store: "store", mode: "mode", withToggleButton: "withToggleButton", horizontal: "horizontal", color: "color", iconColor: "iconColor", withTitle: "withTitle", withTooltip: "withTooltip", scrollActive: "scrollActive", withIcon: "withIcon", icon: "icon", xPosition: "xPosition", yPosition: "yPosition", overlayClass: "overlayClass" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "context-menu-card mat-elevation-z4", 4, "ngIf"], ["id", "topChevron", 4, "ngIf"], ["color", "accent", 3, "withTitle", "withIcon", "color", "disabled", "action", "trigger", 4, "ngIf"], ["id", "lowChevron", 4, "ngIf"], ["id", "topChevron"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "chevron-up"], ["color", "accent", 3, "withTitle", "withIcon", "color", "disabled", "action", "trigger"], ["ngFor", "", 3, "ngForOf"], ["buttonContent", ""], ["color", "accent", 3, "withTitle", "withIcon", "withTooltip", "color", "disabled", "action", "trigger"], ["id", "lowChevron"], ["svgIcon", "chevron-down"], ["mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 1, "buttonOverlay", 3, "matTooltip", "matMenuTriggerFor", "disabled", "color"], [3, "svgIcon"], ["overlapTrigger", "true", 1, "igo-compact-menu", "igo-no-min-width-menu", 3, "xPosition", "yPosition"], ["actionbarMenu", "matMenu"], ["color", "accent", 3, "withTitle", "withIcon", "color", "action", "trigger"], [1, "context-menu-card", "mat-elevation-z4"]], template: function ActionbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ActionbarComponent_mat_list_0_Template, 5, 4, "mat-list", 0);
                i0__namespace.ɵɵtemplate(1, ActionbarComponent_div_1_Template, 9, 14, "div", 0);
                i0__namespace.ɵɵtemplate(2, ActionbarComponent_mat_card_2_Template, 4, 3, "mat-card", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Dock);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Overlay);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.mode === ctx.actionbarMode.Context);
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace$6.MatList, i4__namespace$1.MatButton, i6__namespace.MatTooltip, i5__namespace$1.MatIcon, ActionbarItemComponent, i1__namespace$1.NgForOf, i9__namespace$1.MatMenuTrigger, i9__namespace$1.MatMenu, i10__namespace$1.MatCard], pipes: [i6__namespace$1.TranslatePipe, i1__namespace$1.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;position:relative}button[_ngcontent-%COMP%]{margin:4px}.buttonOverlay[_ngcontent-%COMP%]{margin:0}mat-list[_ngcontent-%COMP%]{padding-top:0}.horizontal[_nghost-%COMP%]{max-width:100%;overflow:unset}.horizontal[_nghost-%COMP%]   mat-list[_ngcontent-%COMP%]{width:auto;white-space:nowrap}.horizontal[_nghost-%COMP%]   igo-actionbar-item[_ngcontent-%COMP%]{display:inline-block}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-list-text>*{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:36px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar{height:46px}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content{display:-webkit-flex;height:46px;padding:3px}[_nghost-%COMP%]     .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content>mat-icon{padding:8px}igo-actionbar-item[_ngcontent-%COMP%]     mat-list-item [mat-list-avatar]{height:auto;width:40px}igo-actionbar-item[_ngcontent-%COMP%]     mat-list-item:hover{cursor:pointer}.context-menu-card[_ngcontent-%COMP%]{padding:8px 3px;margin:10px}#topChevron[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#fff;z-index:3}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){#topChevron[_ngcontent-%COMP%]{position:fixed;top:unset}}@supports (-ms-accelerator: true){#topChevron[_ngcontent-%COMP%]{position:fixed;top:unset}}#lowChevron[_ngcontent-%COMP%]{position:fixed;position:sticky;bottom:0;background-color:#fff;z-index:3}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ActionbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-actionbar',
                        templateUrl: './actionbar.component.html',
                        styleUrls: ['./actionbar.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i1__namespace$7.Overlay }, { type: i0__namespace.ElementRef }, { type: i0__namespace.ChangeDetectorRef }, { type: i1__namespace$2.MediaService }]; }, { store: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], withToggleButton: [{
                    type: i0.Input
                }], horizontal: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], iconColor: [{
                    type: i0.Input
                }], withTitle: [{
                    type: i0.Input
                }], withTooltip: [{
                    type: i0.Input
                }], scrollActive: [{
                    type: i0.Input
                }], withIcon: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], xPosition: [{
                    type: i0.Input
                }], yPosition: [{
                    type: i0.Input
                }], overlayClass: [{
                    type: i0.Input
                }], withTitleClass: [{
                    type: i0.HostBinding,
                    args: ['class.with-title']
                }], withIconClass: [{
                    type: i0.HostBinding,
                    args: ['class.with-icon']
                }], horizontalClass: [{
                    type: i0.HostBinding,
                    args: ['class.horizontal']
                }] });
    })();

    /**
     * @ignore
     */
    var IgoActionbarModule = /** @class */ (function () {
        function IgoActionbarModule() {
        }
        return IgoActionbarModule;
    }());
    IgoActionbarModule.ɵfac = function IgoActionbarModule_Factory(t) { return new (t || IgoActionbarModule)(); };
    IgoActionbarModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoActionbarModule });
    IgoActionbarModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$2.IgoLanguageModule,
                i4$1.MatButtonModule,
                i5$1.MatIconModule,
                i6.MatTooltipModule,
                i9$1.MatMenuModule,
                i1$6.MatListModule,
                i10$1.MatCardModule,
                i7.MatCheckboxModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoActionbarModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1$2.IgoLanguageModule,
                            i4$1.MatButtonModule,
                            i5$1.MatIconModule,
                            i6.MatTooltipModule,
                            i9$1.MatMenuModule,
                            i1$6.MatListModule,
                            i10$1.MatCardModule,
                            i7.MatCheckboxModule
                        ],
                        exports: [ActionbarComponent],
                        declarations: [ActionbarComponent, ActionbarItemComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoActionbarModule, { declarations: [ActionbarComponent, ActionbarItemComponent], imports: [i1$1.CommonModule,
                i1$2.IgoLanguageModule,
                i4$1.MatButtonModule,
                i5$1.MatIconModule,
                i6.MatTooltipModule,
                i9$1.MatMenuModule,
                i1$6.MatListModule,
                i10$1.MatCardModule,
                i7.MatCheckboxModule], exports: [ActionbarComponent] });
    })();

    var IgoActionModule = /** @class */ (function () {
        function IgoActionModule() {
        }
        return IgoActionModule;
    }());
    IgoActionModule.ɵfac = function IgoActionModule_Factory(t) { return new (t || IgoActionModule)(); };
    IgoActionModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoActionModule });
    IgoActionModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[
                i1$1.CommonModule,
                IgoActionbarModule
            ], IgoActionbarModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoActionModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoActionbarModule
                        ],
                        exports: [
                            IgoActionbarModule
                        ],
                        declarations: [],
                        providers: []
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoActionModule, { imports: [i1$1.CommonModule,
                IgoActionbarModule], exports: [IgoActionbarModule] });
    })();

    var _c0$b = function (a0) { return { "igo-backdrop-shown": a0 }; };
    var BackdropComponent = /** @class */ (function () {
        function BackdropComponent() {
        }
        Object.defineProperty(BackdropComponent.prototype, "shown", {
            get: function () {
                return this._shown;
            },
            set: function (value) {
                this._shown = value;
            },
            enumerable: false,
            configurable: true
        });
        return BackdropComponent;
    }());
    BackdropComponent.ɵfac = function BackdropComponent_Factory(t) { return new (t || BackdropComponent)(); };
    BackdropComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BackdropComponent, selectors: [["igo-backdrop"]], inputs: { shown: "shown" }, decls: 1, vars: 3, consts: [[3, "ngClass"]], template: function BackdropComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(1, _c0$b, ctx.shown));
            }
        }, directives: [i1__namespace$1.NgClass], styles: ["[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#64646480;z-index:2;display:none}[_nghost-%COMP%] > div.igo-backdrop-shown[_ngcontent-%COMP%]{display:block}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BackdropComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-backdrop',
                        templateUrl: './backdrop.component.html',
                        styleUrls: ['./backdrop.component.scss']
                    }]
            }], function () { return []; }, { shown: [{
                    type: i0.Input
                }] });
    })();

    var IgoBackdropModule = /** @class */ (function () {
        function IgoBackdropModule() {
        }
        IgoBackdropModule.forRoot = function () {
            return {
                ngModule: IgoBackdropModule,
                providers: []
            };
        };
        return IgoBackdropModule;
    }());
    IgoBackdropModule.ɵfac = function IgoBackdropModule_Factory(t) { return new (t || IgoBackdropModule)(); };
    IgoBackdropModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoBackdropModule });
    IgoBackdropModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoBackdropModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule],
                        declarations: [BackdropComponent],
                        exports: [BackdropComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoBackdropModule, { declarations: [BackdropComponent], imports: [i1$1.CommonModule], exports: [BackdropComponent] }); })();

    /**
     * This directive allow to add an icon inside a matBadge.
     * A value must be set into the matBadge directive ex: matBadge="icon".
     * The badge content will be overrided by this current directive.
     */
    var IgoBadgeIconDirective = /** @class */ (function () {
        function IgoBadgeIconDirective(el, matIconRegistry) {
            this.el = el;
            this.matIconRegistry = matIconRegistry;
            this.hidden = false;
            this.disabled = false;
            this.inverseColor = false;
            this.inheritColor = false;
        }
        Object.defineProperty(IgoBadgeIconDirective.prototype, "igoMatBadgeIcon", {
            set: function (value) {
                var _this = this;
                this.matIconRegistry.getNamedSvgIcon(value).subscribe(function (svgObj) {
                    _this.svg = svgObj;
                    _this.updateSvg();
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IgoBadgeIconDirective.prototype, "matBadgeHidden", {
            set: function (value) {
                this.hidden = value;
                this.updateHidden();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IgoBadgeIconDirective.prototype, "matBadgeDisabled", {
            set: function (value) {
                this.disabled = value;
                this.updateDisabled();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IgoBadgeIconDirective.prototype, "igoMatBadgeInverseColor", {
            set: function (value) {
                this.inverseColor = value;
                this.updateColor();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IgoBadgeIconDirective.prototype, "igoMatBadgeInheritColor", {
            set: function (value) {
                this.inheritColor = value;
                this.updateColor();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IgoBadgeIconDirective.prototype, "badge", {
            get: function () {
                return this.el.nativeElement.querySelector('.mat-badge-content');
            },
            enumerable: false,
            configurable: true
        });
        IgoBadgeIconDirective.prototype.ngOnInit = function () {
            this.badge.style.alignItems = 'center';
            this.badge.style.justifyContent = 'center';
            this.updateHidden();
            this.updateColor();
            this.updateSvg();
        };
        IgoBadgeIconDirective.prototype.updateSvg = function () {
            if (!this.badge) {
                return;
            }
            this.badge.innerHTML = '';
            if (this.svg) {
                this.badge.appendChild(this.svg);
            }
        };
        IgoBadgeIconDirective.prototype.updateColor = function () {
            if (!this.badge) {
                return;
            }
            if (this.inheritColor) {
                if (this.inverseColor) {
                    this.badge.style.color = 'currentColor';
                    this.badge.style.background = 'none';
                }
                else {
                    this.badge.style.color = '';
                    this.badge.style.background = 'currentColor';
                }
            }
            else {
                if (this.inverseColor) {
                    this.badge.style.color = window
                        .getComputedStyle(this.badge, null)
                        .getPropertyValue('background-color');
                    this.badge.style.background = 'none';
                }
                else {
                    this.badge.style.color = '';
                    this.badge.style.background = '';
                }
            }
            this.originalColor = this.badge.style.color;
            this.updateDisabled();
        };
        IgoBadgeIconDirective.prototype.updateHidden = function () {
            if (!this.badge) {
                return;
            }
            this.badge.style.display = this.hidden ? 'none' : 'flex';
        };
        IgoBadgeIconDirective.prototype.updateDisabled = function () {
            if (!this.badge || !this.inverseColor) {
                return;
            }
            if (this.disabled) {
                this.originalColor = this.badge.style.color;
                this.badge.style.color = '#b9b9b9';
            }
            else {
                this.badge.style.color = this.originalColor;
            }
        };
        return IgoBadgeIconDirective;
    }());
    IgoBadgeIconDirective.ɵfac = function IgoBadgeIconDirective_Factory(t) { return new (t || IgoBadgeIconDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i5__namespace$1.MatIconRegistry)); };
    IgoBadgeIconDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: IgoBadgeIconDirective, selectors: [["", "igoMatBadgeIcon", ""]], inputs: { igoMatBadgeIcon: "igoMatBadgeIcon", matBadgeHidden: "matBadgeHidden", matBadgeDisabled: "matBadgeDisabled", igoMatBadgeInverseColor: "igoMatBadgeInverseColor", igoMatBadgeInheritColor: "igoMatBadgeInheritColor" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoBadgeIconDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoMatBadgeIcon]'
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i5__namespace$1.MatIconRegistry }]; }, { igoMatBadgeIcon: [{
                    type: i0.Input
                }], matBadgeHidden: [{
                    type: i0.Input
                }], matBadgeDisabled: [{
                    type: i0.Input
                }], igoMatBadgeInverseColor: [{
                    type: i0.Input
                }], igoMatBadgeInheritColor: [{
                    type: i0.Input
                }] });
    })();

    var IgoMatBadgeIconModule = /** @class */ (function () {
        function IgoMatBadgeIconModule() {
        }
        IgoMatBadgeIconModule.forRoot = function () {
            return {
                ngModule: IgoMatBadgeIconModule,
                providers: []
            };
        };
        return IgoMatBadgeIconModule;
    }());
    IgoMatBadgeIconModule.ɵfac = function IgoMatBadgeIconModule_Factory(t) { return new (t || IgoMatBadgeIconModule)(); };
    IgoMatBadgeIconModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoMatBadgeIconModule });
    IgoMatBadgeIconModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[badge.MatBadgeModule, i5$1.MatIconModule], badge.MatBadgeModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoMatBadgeIconModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [badge.MatBadgeModule, i5$1.MatIconModule],
                        declarations: [IgoBadgeIconDirective],
                        exports: [badge.MatBadgeModule, IgoBadgeIconDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoMatBadgeIconModule, { declarations: [IgoBadgeIconDirective], imports: [badge.MatBadgeModule, i5$1.MatIconModule], exports: [badge.MatBadgeModule, IgoBadgeIconDirective] }); })();

    var ClickoutDirective = /** @class */ (function () {
        function ClickoutDirective(el) {
            this.el = el;
            this.clickout = new i0.EventEmitter();
        }
        ClickoutDirective.prototype.handleMouseClick = function (event, target) {
            if (!target) {
                return;
            }
            if (!this.el.nativeElement.contains(target)) {
                this.clickout.emit(event);
            }
        };
        return ClickoutDirective;
    }());
    ClickoutDirective.ɵfac = function ClickoutDirective_Factory(t) { return new (t || ClickoutDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    ClickoutDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ClickoutDirective, selectors: [["", "igoClickout", ""]], hostBindings: function ClickoutDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function ClickoutDirective_click_HostBindingHandler($event) { return ctx.handleMouseClick($event, $event.target); }, false, i0__namespace.ɵɵresolveDocument);
            }
        }, outputs: { clickout: "clickout" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ClickoutDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoClickout]'
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }]; }, { clickout: [{
                    type: i0.Output
                }], handleMouseClick: [{
                    type: i0.HostListener,
                    args: ['document:click', ['$event', '$event.target']]
                }] });
    })();

    var IgoClickoutModule = /** @class */ (function () {
        function IgoClickoutModule() {
        }
        IgoClickoutModule.forRoot = function () {
            return {
                ngModule: IgoClickoutModule,
                providers: []
            };
        };
        return IgoClickoutModule;
    }());
    IgoClickoutModule.ɵfac = function IgoClickoutModule_Factory(t) { return new (t || IgoClickoutModule)(); };
    IgoClickoutModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoClickoutModule });
    IgoClickoutModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoClickoutModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [ClickoutDirective],
                        exports: [ClickoutDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoClickoutModule, { declarations: [ClickoutDirective], exports: [ClickoutDirective] }); })();

    var ClonePipe = /** @class */ (function () {
        function ClonePipe() {
        }
        ClonePipe.prototype.transform = function (value, args) {
            if (value === undefined) {
                return value;
            }
            if (value instanceof Array) {
                return value.map(function (obj) { return Object.assign(Object.create(obj), obj); });
            }
            else {
                return Object.assign(Object.create(value), value);
            }
        };
        return ClonePipe;
    }());
    ClonePipe.ɵfac = function ClonePipe_Factory(t) { return new (t || ClonePipe)(); };
    ClonePipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "clone", type: ClonePipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ClonePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'clone'
                    }]
            }], null, null);
    })();

    var IgoCloneModule = /** @class */ (function () {
        function IgoCloneModule() {
        }
        IgoCloneModule.forRoot = function () {
            return {
                ngModule: IgoCloneModule,
                providers: []
            };
        };
        return IgoCloneModule;
    }());
    IgoCloneModule.ɵfac = function IgoCloneModule_Factory(t) { return new (t || IgoCloneModule)(); };
    IgoCloneModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoCloneModule });
    IgoCloneModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoCloneModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [ClonePipe],
                        exports: [ClonePipe]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoCloneModule, { declarations: [ClonePipe], exports: [ClonePipe] }); })();

    var CollapseDirective = /** @class */ (function () {
        function CollapseDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this._collapsed = false;
            this.toggle = new i0.EventEmitter();
        }
        Object.defineProperty(CollapseDirective.prototype, "target", {
            get: function () {
                return this._target;
            },
            set: function (value) {
                this._target = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CollapseDirective.prototype, "collapsed", {
            get: function () {
                return this._collapsed;
            },
            set: function (collapsed) {
                collapsed ? this.collapseTarget() : this.expandTarget();
                this._collapsed = collapsed;
                this.toggle.emit(collapsed);
            },
            enumerable: false,
            configurable: true
        });
        CollapseDirective.prototype.click = function () {
            this.collapsed = !this.collapsed;
        };
        CollapseDirective.prototype.collapseTarget = function () {
            this.renderer.addClass(this.target, 'igo-collapsed');
            this.renderer.addClass(this.el.nativeElement, 'collapsed');
        };
        CollapseDirective.prototype.expandTarget = function () {
            this.renderer.removeClass(this.target, 'igo-collapsed');
            this.renderer.removeClass(this.el.nativeElement, 'collapsed');
        };
        return CollapseDirective;
    }());
    CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    CollapseDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "igoCollapse", ""]], hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function CollapseDirective_click_HostBindingHandler() { return ctx.click(); });
            }
        }, inputs: { target: "target", collapsed: "collapsed" }, outputs: { toggle: "toggle" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CollapseDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoCollapse]'
                    }]
            }], function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }]; }, { target: [{
                    type: i0.Input
                }], collapsed: [{
                    type: i0.Input
                }], toggle: [{
                    type: i0.Output
                }], click: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var _c0$a = ["*"];
    var CollapsibleComponent = /** @class */ (function () {
        function CollapsibleComponent() {
            this._title = '';
            this._collapsed = false;
            this.toggle = new i0.EventEmitter();
        }
        Object.defineProperty(CollapsibleComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CollapsibleComponent.prototype, "collapsed", {
            get: function () {
                return this._collapsed;
            },
            set: function (value) {
                this._collapsed = value;
                this.toggle.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        return CollapsibleComponent;
    }());
    CollapsibleComponent.ɵfac = function CollapsibleComponent_Factory(t) { return new (t || CollapsibleComponent)(); };
    CollapsibleComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CollapsibleComponent, selectors: [["igo-collapsible"]], inputs: { title: "title", collapsed: "collapsed" }, outputs: { toggle: "toggle" }, ngContentSelectors: _c0$a, decls: 7, vars: 3, consts: [["svgIcon", "chevron-up", "mat-list-avatar", "", "igoCollapse", "", 1, "igo-chevron", 3, "target", "collapsed", "toggle"], ["matLine", ""], ["content", ""]], template: function CollapsibleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "mat-list-item");
                i0__namespace.ɵɵelementStart(1, "mat-icon", 0);
                i0__namespace.ɵɵlistener("toggle", function CollapsibleComponent_Template_mat_icon_toggle_1_listener($event) { return ctx.collapsed = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "h4", 1);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", null, 2);
                i0__namespace.ɵɵprojection(6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(5);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("target", _r0)("collapsed", ctx.collapsed);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.title);
            }
        }, directives: [i1__namespace$6.MatListItem, i5__namespace$1.MatIcon, i1__namespace$6.MatListAvatarCssMatStyler, CollapseDirective, i3__namespace.MatLine], styles: ["[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-avatar{height:auto;width:auto;padding:0}mat-list-item[_ngcontent-%COMP%]{overflow:hidden}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CollapsibleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-collapsible',
                        templateUrl: './collapsible.component.html',
                        styleUrls: ['./collapsible.component.scss']
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], collapsed: [{
                    type: i0.Input
                }], toggle: [{
                    type: i0.Output
                }] });
    })();

    var IgoCollapsibleModule = /** @class */ (function () {
        function IgoCollapsibleModule() {
        }
        IgoCollapsibleModule.forRoot = function () {
            return {
                ngModule: IgoCollapsibleModule,
                providers: []
            };
        };
        return IgoCollapsibleModule;
    }());
    IgoCollapsibleModule.ɵfac = function IgoCollapsibleModule_Factory(t) { return new (t || IgoCollapsibleModule)(); };
    IgoCollapsibleModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoCollapsibleModule });
    IgoCollapsibleModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i5$1.MatIconModule, i1$6.MatListModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoCollapsibleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i5$1.MatIconModule, i1$6.MatListModule],
                        declarations: [CollapsibleComponent, CollapseDirective],
                        exports: [CollapsibleComponent, CollapseDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoCollapsibleModule, { declarations: [CollapsibleComponent, CollapseDirective], imports: [i5$1.MatIconModule, i1$6.MatListModule], exports: [CollapsibleComponent, CollapseDirective] }); })();

    var ConfirmDialogComponent = /** @class */ (function () {
        function ConfirmDialogComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        return ConfirmDialogComponent;
    }());
    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$8.MatDialogRef)); };
    ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["igo-confirm-dialog"]], decls: 12, vars: 10, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h2", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵpipe(2, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 1);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div", 2);
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(true); });
                i0__namespace.ɵɵtext(7);
                i0__namespace.ɵɵpipe(8, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 4);
                i0__namespace.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(false); });
                i0__namespace.ɵɵtext(10);
                i0__namespace.ɵɵpipe(11, "translate");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 4, "igo.common.confirmDialog.title"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(ctx.confirmMessage);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(8, 6, "igo.common.confirmDialog.confirmBtn"));
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(11, 8, "igo.common.confirmDialog.cancelBtn"));
            }
        }, directives: [i1__namespace$8.MatDialogTitle, i1__namespace$8.MatDialogContent, i1__namespace$8.MatDialogActions, i4__namespace$1.MatButton], pipes: [i6__namespace$1.TranslatePipe], styles: ["h2[_ngcontent-%COMP%]{margin:5px 0 10px}div[mat-dialog-content][_ngcontent-%COMP%]{max-width:200px}div[mat-dialog-actions][_ngcontent-%COMP%]{margin:10px 0 0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConfirmDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-confirm-dialog',
                        templateUrl: './confirm-dialog.component.html',
                        styleUrls: ['./confirm-dialog.component.scss']
                    }]
            }], function () { return [{ type: i1__namespace$8.MatDialogRef }]; }, null);
    })();

    var ConfirmDialogService = /** @class */ (function () {
        function ConfirmDialogService(dialog) {
            this.dialog = dialog;
        }
        ConfirmDialogService.prototype.open = function (message) {
            var dialogRef = this.dialog.open(ConfirmDialogComponent, {
                disableClose: false
            });
            dialogRef.componentInstance.confirmMessage = message;
            return dialogRef.afterClosed();
        };
        return ConfirmDialogService;
    }());
    ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(i0__namespace.ɵɵinject(i1__namespace$8.MatDialog)); };
    ConfirmDialogService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConfirmDialogService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1__namespace$8.MatDialog }]; }, null);
    })();

    var IgoConfirmDialogModule = /** @class */ (function () {
        function IgoConfirmDialogModule() {
        }
        IgoConfirmDialogModule.forRoot = function () {
            return {
                ngModule: IgoConfirmDialogModule,
                providers: []
            };
        };
        return IgoConfirmDialogModule;
    }());
    IgoConfirmDialogModule.ɵfac = function IgoConfirmDialogModule_Factory(t) { return new (t || IgoConfirmDialogModule)(); };
    IgoConfirmDialogModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoConfirmDialogModule });
    IgoConfirmDialogModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [ConfirmDialogService], imports: [[i4$1.MatButtonModule, i1$8.MatDialogModule, i1$2.IgoLanguageModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoConfirmDialogModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i4$1.MatButtonModule, i1$8.MatDialogModule, i1$2.IgoLanguageModule],
                        declarations: [ConfirmDialogComponent],
                        exports: [ConfirmDialogComponent],
                        providers: [ConfirmDialogService]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoConfirmDialogModule, { declarations: [ConfirmDialogComponent], imports: [i4$1.MatButtonModule, i1$8.MatDialogModule, i1$2.IgoLanguageModule], exports: [ConfirmDialogComponent] }); })();

    var ContextMenuDirective = /** @class */ (function () {
        function ContextMenuDirective(overlay, viewContainerRef, elementRef) {
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.elementRef = elementRef;
            this.menuPosition = new i0.EventEmitter();
        }
        ContextMenuDirective.prototype.onContextMenu = function (e) {
            var _this = this;
            var x = e.x, y = e.y;
            this.close();
            e.preventDefault();
            this.menuPosition.emit({ x: x, y: y });
            this.overlayRef = null;
            var positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo({ x: x, y: y })
                .withPositions([
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                }
            ]);
            this.overlayRef = this.overlay.create({
                positionStrategy: positionStrategy,
                scrollStrategy: this.overlay.scrollStrategies.close()
            });
            this.overlayRef.attach(new portal.TemplatePortal(this.menuContext, this.viewContainerRef, {
                $implicit: undefined
            }));
            this.sub = rxjs.fromEvent(document, 'click')
                .pipe(operators.filter(function (event) {
                var clickTarget = event.target;
                _this.close();
                return (!!_this.overlayRef &&
                    !_this.overlayRef.overlayElement.contains(clickTarget));
            }), operators.take(1))
                .subscribe(function () { return _this.close(); });
            this.sub = rxjs.fromEvent(document, 'contextmenu')
                .pipe(operators.filter(function (event) {
                var clickTarget = event.target;
                if (clickTarget &&
                    !_this.elementRef.nativeElement.contains(clickTarget) &&
                    !_this.overlayRef.overlayElement.contains(clickTarget)) {
                    return true;
                }
                else {
                    event.preventDefault();
                }
            }), operators.take(1))
                .subscribe(function () { return _this.close(); });
        };
        ContextMenuDirective.prototype.close = function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
            }
            if (this.sub) {
                this.sub.unsubscribe();
            }
        };
        return ContextMenuDirective;
    }());
    ContextMenuDirective.ɵfac = function ContextMenuDirective_Factory(t) { return new (t || ContextMenuDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace$7.Overlay), i0__namespace.ɵɵdirectiveInject(i0__namespace.ViewContainerRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    ContextMenuDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ContextMenuDirective, selectors: [["", "igoContextMenu", ""]], hostBindings: function ContextMenuDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("contextmenu", function ContextMenuDirective_contextmenu_HostBindingHandler($event) { return ctx.onContextMenu($event); });
            }
        }, inputs: { menuContext: ["igoContextMenu", "menuContext"] }, outputs: { menuPosition: "menuPosition" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ContextMenuDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoContextMenu]'
                    }]
            }], function () { return [{ type: i1__namespace$7.Overlay }, { type: i0__namespace.ViewContainerRef }, { type: i0__namespace.ElementRef }]; }, { menuContext: [{
                    type: i0.Input,
                    args: ['igoContextMenu']
                }], menuPosition: [{
                    type: i0.Output
                }], onContextMenu: [{
                    type: i0.HostListener,
                    args: ['contextmenu', ['$event']]
                }] });
    })();

    var IgoContextMenuModule = /** @class */ (function () {
        function IgoContextMenuModule() {
        }
        IgoContextMenuModule.forRoot = function () {
            return {
                ngModule: IgoContextMenuModule,
                providers: []
            };
        };
        return IgoContextMenuModule;
    }());
    IgoContextMenuModule.ɵfac = function IgoContextMenuModule_Factory(t) { return new (t || IgoContextMenuModule)(); };
    IgoContextMenuModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoContextMenuModule });
    IgoContextMenuModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoContextMenuModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [ContextMenuDirective],
                        exports: [ContextMenuDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoContextMenuModule, { declarations: [ContextMenuDirective], exports: [ContextMenuDirective] }); })();

    var CustomHtmlComponent = /** @class */ (function () {
        function CustomHtmlComponent() {
            this._html = '';
        }
        Object.defineProperty(CustomHtmlComponent.prototype, "html", {
            get: function () {
                return this._html;
            },
            set: function (value) {
                this._html = value;
            },
            enumerable: false,
            configurable: true
        });
        return CustomHtmlComponent;
    }());
    CustomHtmlComponent.ɵfac = function CustomHtmlComponent_Factory(t) { return new (t || CustomHtmlComponent)(); };
    CustomHtmlComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CustomHtmlComponent, selectors: [["igo-custom-html"]], inputs: { html: "html" }, decls: 2, vars: 3, consts: [[1, "custom-html", 3, "innerHTML"]], template: function CustomHtmlComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0);
                i0__namespace.ɵɵpipe(1, "sanitizeHtml");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("innerHTML", i0__namespace.ɵɵpipeBind1(1, 1, ctx.html), i0__namespace.ɵɵsanitizeHtml);
            }
        }, pipes: [SanitizeHtmlPipe], styles: [".custom-html[_ngcontent-%COMP%]{padding:20px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CustomHtmlComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-custom-html',
                        templateUrl: './custom-html.component.html',
                        styleUrls: ['./custom-html.component.scss']
                    }]
            }], function () { return []; }, { html: [{
                    type: i0.Input
                }] });
    })();

    var IgoCustomHtmlModule = /** @class */ (function () {
        function IgoCustomHtmlModule() {
        }
        IgoCustomHtmlModule.forRoot = function () {
            return {
                ngModule: IgoCustomHtmlModule
            };
        };
        return IgoCustomHtmlModule;
    }());
    IgoCustomHtmlModule.ɵfac = function IgoCustomHtmlModule_Factory(t) { return new (t || IgoCustomHtmlModule)(); };
    IgoCustomHtmlModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoCustomHtmlModule });
    IgoCustomHtmlModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i5$1.MatIconModule,
                i6.MatTooltipModule,
                i2$3.MatInputModule,
                i4$1.MatButtonModule,
                i1$2.IgoLanguageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoCustomHtmlModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i5$1.MatIconModule,
                            i6.MatTooltipModule,
                            i2$3.MatInputModule,
                            i4$1.MatButtonModule,
                            i1$2.IgoLanguageModule
                        ],
                        exports: [SanitizeHtmlPipe, CustomHtmlComponent],
                        declarations: [SanitizeHtmlPipe, CustomHtmlComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoCustomHtmlModule, { declarations: [SanitizeHtmlPipe, CustomHtmlComponent], imports: [i1$1.CommonModule,
                i5$1.MatIconModule,
                i6.MatTooltipModule,
                i2$3.MatInputModule,
                i4$1.MatButtonModule,
                i1$2.IgoLanguageModule], exports: [SanitizeHtmlPipe, CustomHtmlComponent] });
    })();

    var DragAndDropDirective = /** @class */ (function () {
        function DragAndDropDirective() {
            this.allowedExtensions = [];
            this.filesDropped = new i0.EventEmitter();
            this.filesInvalid = new i0.EventEmitter();
            this.background = 'inherit';
        }
        DragAndDropDirective.prototype.onDragOver = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = '#999';
        };
        DragAndDropDirective.prototype.onDragLeave = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.background = 'inherit';
        };
        DragAndDropDirective.prototype.onDrop = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.alreadyFired) {
                return;
            }
            evt.alreadyFired = true;
            this.background = 'inherit';
            var filesObj = this.validExtensions(evt);
            if (filesObj.valid.length) {
                this.filesDropped.emit(filesObj.valid);
            }
            if (filesObj.invalid.length) {
                this.filesInvalid.emit(filesObj.invalid);
            }
        };
        DragAndDropDirective.prototype.validExtensions = function (evt) {
            var e_1, _a;
            var files = evt.dataTransfer.files;
            var filesObj = {
                valid: [],
                invalid: []
            };
            if (files.length > 0) {
                try {
                    for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                        var file = files_1_1.value;
                        var ext = file.name.split('.')[file.name.split('.').length - 1];
                        if (this.allowedExtensions.length === 0 ||
                            (this.allowedExtensions.lastIndexOf(ext) !== -1 &&
                                file.size !== 0)) {
                            filesObj.valid.push(file);
                        }
                        else {
                            filesObj.invalid.push(file);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return filesObj;
        };
        return DragAndDropDirective;
    }());
    DragAndDropDirective.ɵfac = function DragAndDropDirective_Factory(t) { return new (t || DragAndDropDirective)(); };
    DragAndDropDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: DragAndDropDirective, selectors: [["", "igoDragAndDrop", ""]], hostVars: 2, hostBindings: function DragAndDropDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("dragover", function DragAndDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragAndDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragAndDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
            }
            if (rf & 2) {
                i0__namespace.ɵɵstyleProp("background", ctx.background);
            }
        }, inputs: { allowedExtensions: "allowedExtensions" }, outputs: { filesDropped: "filesDropped", filesInvalid: "filesInvalid" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DragAndDropDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoDragAndDrop]'
                    }]
            }], null, { allowedExtensions: [{
                    type: i0.Input
                }], filesDropped: [{
                    type: i0.Output
                }], filesInvalid: [{
                    type: i0.Output
                }], background: [{
                    type: i0.HostBinding,
                    args: ['style.background']
                }], onDragOver: [{
                    type: i0.HostListener,
                    args: ['dragover', ['$event']]
                }], onDragLeave: [{
                    type: i0.HostListener,
                    args: ['dragleave', ['$event']]
                }], onDrop: [{
                    type: i0.HostListener,
                    args: ['drop', ['$event']]
                }] });
    })();

    var IgoDrapDropModule = /** @class */ (function () {
        function IgoDrapDropModule() {
        }
        IgoDrapDropModule.forRoot = function () {
            return {
                ngModule: IgoDrapDropModule,
                providers: []
            };
        };
        return IgoDrapDropModule;
    }());
    IgoDrapDropModule.ɵfac = function IgoDrapDropModule_Factory(t) { return new (t || IgoDrapDropModule)(); };
    IgoDrapDropModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoDrapDropModule });
    IgoDrapDropModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoDrapDropModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [DragAndDropDirective],
                        exports: [DragAndDropDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoDrapDropModule, { declarations: [DragAndDropDirective], exports: [DragAndDropDirective] }); })();

    /**
     * This class is used in the DynamicComponentOutlet component. It holds
     * a reference to a component factory and can render that component
     * in a target element on demand. It's also possible to set inputs
     * and to subscribe to outputs.
     */
    var DynamicComponent = /** @class */ (function () {
        function DynamicComponent(componentFactory) {
            this.componentFactory = componentFactory;
            /**
             * Subscriptions to the component's outputs. Those need
             * to be unsubscribed when the component is destroyed.
             */
            this.subscriptions = [];
            /**
             * Component inputs
             */
            this.inputs = {};
            /**
             * Subscriptions to the component's async inputs
             */
            this.inputs$$ = {};
            /**
             * Subscribers to the component's outputs
             */
            this.subscribers = {};
        }
        /**
         * Render the component to a target element.
         * Set it's inputs and subscribe to it's outputs.
         * @param target Target element
         */
        DynamicComponent.prototype.setTarget = function (target) {
            this.target = target;
            this.componentRef = target.createComponent(this.componentFactory);
            this.updateInputs(this.inputs);
            this.updateSubscribers(this.subscribers);
        };
        /**
         * Destroy this component. That means, removing from it's target
         * element and unsubscribing to it's outputs.
         */
        DynamicComponent.prototype.destroy = function () {
            if (this.target !== undefined) {
                this.target.clear();
            }
            if (this.componentRef !== undefined) {
                this.componentRef.destroy();
                this.componentRef = undefined;
            }
            this.unobserveAllInputs();
            this.unsubscribeAll();
        };
        /**
         * Update the component inputs. This is an update so any
         * key not defined won't be overwritten.
         */
        DynamicComponent.prototype.updateInputs = function (inputs) {
            var _this = this;
            this.inputs = inputs;
            if (this.componentRef === undefined) {
                return;
            }
            var instance = this.componentRef.instance;
            var allowedInputs = this.componentFactory.inputs;
            allowedInputs.forEach(function (value) {
                var key = value.propName;
                _this.unobserveInput(key);
                var inputValue = inputs[key];
                if (inputs.hasOwnProperty(key)) {
                    if (inputValue instanceof rxjs.Observable) {
                        _this.observeInput(key, inputValue);
                    }
                    else {
                        _this.setInputValue(instance, key, inputValue);
                    }
                }
            });
            if (typeof instance.onUpdateInputs === 'function') {
                instance.onUpdateInputs();
            }
        };
        /**
         * Set an instance's input value
         * @param instance Component instance
         * @param key Input key
         * @param value Input value
         */
        DynamicComponent.prototype.setInputValue = function (instance, key, value) {
            var currentValue = instance[key];
            if (value === currentValue) {
                return;
            }
            var prototype = Object.getPrototypeOf(instance);
            var descriptor = Object.getOwnPropertyDescriptor(prototype, key);
            if (descriptor !== undefined && descriptor.set !== undefined) {
                descriptor.set.call(instance, value);
            }
            else {
                instance[key] = value;
            }
        };
        /**
         * Update the component subscribers. This is an update so any
         * key not defined won't be overwritten.
         */
        DynamicComponent.prototype.updateSubscribers = function (subscribers) {
            var _this = this;
            this.subscribers = subscribers;
            if (this.componentRef === undefined) {
                return;
            }
            var instance = this.componentRef.instance;
            var allowedSubscribers = this.componentFactory.outputs;
            allowedSubscribers.forEach(function (value) {
                var key = value.propName;
                if (subscribers.hasOwnProperty(key)) {
                    var emitter_1 = instance[key];
                    var subscriber = subscribers[key];
                    if (Array.isArray(subscriber)) {
                        subscriber.forEach(function (_subscriber) {
                            _this.subscriptions.push(emitter_1.subscribe(_subscriber));
                        });
                    }
                    else {
                        _this.subscriptions.push(emitter_1.subscribe(subscriber));
                    }
                }
            });
        };
        /**
         * Subscribe to an observable input and update the component's input value
         * accordingly
         * @param key Input key
         * @param observable Observable
         */
        DynamicComponent.prototype.observeInput = function (key, observable) {
            var _this = this;
            this.inputs$$[key] = observable.subscribe(function (value) {
                var instance = _this.componentRef.instance;
                _this.setInputValue(instance, key, value);
                if (typeof instance.onUpdateInputs === 'function') {
                    instance.onUpdateInputs();
                }
            });
        };
        /**
         * Unsubscribe to an observable input
         * @param key Input key
         */
        DynamicComponent.prototype.unobserveInput = function (key) {
            if (this.inputs$$[key] !== undefined) {
                this.inputs$$[key].unsubscribe();
                this.inputs$$[key] = undefined;
            }
        };
        /**
         * Unsubscribe to all outputs.
         */
        DynamicComponent.prototype.unobserveAllInputs = function () {
            Object.values(this.inputs$$).forEach(function (s) {
                if (s !== undefined) {
                    s.unsubscribe();
                }
            });
            this.inputs$$ = {};
        };
        /**
         * Unsubscribe to all outputs.
         */
        DynamicComponent.prototype.unsubscribeAll = function () {
            this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
            this.subscriptions = [];
        };
        return DynamicComponent;
    }());

    /**
     * Service to creates DynamicComponent instances from base component classes
     */
    var DynamicComponentService = /** @class */ (function () {
        function DynamicComponentService(resolver) {
            this.resolver = resolver;
        }
        /**
         * Creates a DynamicComponent instance from a base component class
         * @param componentCls The component class
         * @returns DynamicComponent instance
         */
        DynamicComponentService.prototype.create = function (componentCls) {
            var factory = this.resolver.resolveComponentFactory(componentCls);
            return new DynamicComponent(factory);
        };
        return DynamicComponentService;
    }());
    DynamicComponentService.ɵfac = function DynamicComponentService_Factory(t) { return new (t || DynamicComponentService)(i0__namespace.ɵɵinject(i0__namespace.ComponentFactoryResolver)); };
    DynamicComponentService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DynamicComponentService, factory: DynamicComponentService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DynamicComponentService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i0__namespace.ComponentFactoryResolver }]; }, null);
    })();

    var _c0$9 = ["target"];
    function DynamicOutletComponent_ng_template_0_Template(rf, ctx) { }
    var DynamicOutletComponent = /** @class */ (function () {
        function DynamicOutletComponent(dynamicComponentService, cdRef) {
            this.dynamicComponentService = dynamicComponentService;
            this.cdRef = cdRef;
            /**
             * The dynamic component inputs
             */
            this.inputs = {};
            /**
             * The subscribers to the dynamic component outputs
             */
            this.subscribers = {};
        }
        /**
         * If the dynamic component changes, create it.
         * If the inputs or subscribers change, update the current component's
         * inputs or subscribers.
         * @internal
         */
        DynamicOutletComponent.prototype.ngOnChanges = function (changes) {
            var component = changes.component;
            var inputs = changes.inputs;
            var subscribers = changes.subscribers;
            var eq = utils.ObjectUtils.objectsAreEquivalent;
            if (!component || !component.currentValue) {
                return;
            }
            if (component.currentValue !== component.previousValue) {
                this.createComponent(component.currentValue);
            }
            else {
                var inputsAreEquivalents = inputs && eq(inputs.currentValue || {}, inputs.previousValue || {});
                var subscribersAreEquivalents = subscribers &&
                    eq(subscribers.currentValue || {}, subscribers.previousValue || {});
                if (inputsAreEquivalents === false) {
                    this.updateInputs();
                }
                if (subscribersAreEquivalents === false) {
                    this.updateSubscribers();
                }
            }
            this.cdRef.detectChanges();
        };
        /**
         * Destroy the dynamic component and all it's subscribers
         * @internal
         */
        DynamicOutletComponent.prototype.ngOnDestroy = function () {
            if (this.dynamicComponent) {
                this.dynamicComponent.destroy();
            }
        };
        /**
         * Create a  DynamicComponent out of the component class and render it.
         * @internal
         */
        DynamicOutletComponent.prototype.createComponent = function (component) {
            if (this.dynamicComponent !== undefined) {
                this.dynamicComponent.destroy();
            }
            this.dynamicComponent =
                component instanceof DynamicComponent
                    ? component
                    : this.dynamicComponentService.create(component);
            this.renderComponent();
        };
        /**
         * Create and render the dynamic component. Set it's inputs and subscribers
         * @internal
         */
        DynamicOutletComponent.prototype.renderComponent = function () {
            this.updateInputs();
            this.updateSubscribers();
            this.dynamicComponent.setTarget(this.target);
        };
        /**
         * Update the dynamic component inputs. This is an update so any
         * key not defined won't be overwritten.
         * @internal
         */
        DynamicOutletComponent.prototype.updateInputs = function () {
            this.dynamicComponent.updateInputs(this.inputs);
        };
        /**
         * Update the dynamic component subscribers. This is an update so any
         * key not defined won't be overwritten.
         * @internal
         */
        DynamicOutletComponent.prototype.updateSubscribers = function () {
            this.dynamicComponent.updateSubscribers(this.subscribers);
        };
        return DynamicOutletComponent;
    }());
    DynamicOutletComponent.ɵfac = function DynamicOutletComponent_Factory(t) { return new (t || DynamicOutletComponent)(i0__namespace.ɵɵdirectiveInject(DynamicComponentService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    DynamicOutletComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DynamicOutletComponent, selectors: [["igo-dynamic-outlet"]], viewQuery: function DynamicOutletComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$9, 7, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.target = _t.first);
            }
        }, inputs: { component: "component", inputs: "inputs", subscribers: "subscribers" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["target", ""]], template: function DynamicOutletComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, DynamicOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0__namespace.ɵɵtemplateRefExtractor);
            }
        }, styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DynamicOutletComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-dynamic-outlet',
                        templateUrl: 'dynamic-outlet.component.html',
                        styleUrls: ['dynamic-outlet.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: DynamicComponentService }, { type: i0__namespace.ChangeDetectorRef }]; }, { component: [{
                    type: i0.Input
                }], inputs: [{
                    type: i0.Input
                }], subscribers: [{
                    type: i0.Input
                }], target: [{
                    type: i0.ViewChild,
                    args: ['target', { read: i0.ViewContainerRef, static: true }]
                }] });
    })();

    /**
     * @ignore
     */
    var IgoDynamicOutletModule = /** @class */ (function () {
        function IgoDynamicOutletModule() {
        }
        return IgoDynamicOutletModule;
    }());
    IgoDynamicOutletModule.ɵfac = function IgoDynamicOutletModule_Factory(t) { return new (t || IgoDynamicOutletModule)(); };
    IgoDynamicOutletModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoDynamicOutletModule });
    IgoDynamicOutletModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoDynamicOutletModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        exports: [
                            DynamicOutletComponent
                        ],
                        declarations: [
                            DynamicOutletComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoDynamicOutletModule, { declarations: [DynamicOutletComponent], imports: [i1$1.CommonModule], exports: [DynamicOutletComponent] }); })();

    var IgoDynamicComponentModule = /** @class */ (function () {
        function IgoDynamicComponentModule() {
        }
        return IgoDynamicComponentModule;
    }());
    IgoDynamicComponentModule.ɵfac = function IgoDynamicComponentModule_Factory(t) { return new (t || IgoDynamicComponentModule)(); };
    IgoDynamicComponentModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoDynamicComponentModule });
    IgoDynamicComponentModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            DynamicComponentService
        ], imports: [[
                i1$1.CommonModule,
                IgoDynamicOutletModule
            ], IgoDynamicOutletModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoDynamicComponentModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoDynamicOutletModule
                        ],
                        exports: [
                            IgoDynamicOutletModule
                        ],
                        providers: [
                            DynamicComponentService
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoDynamicComponentModule, { imports: [i1$1.CommonModule,
                IgoDynamicOutletModule], exports: [IgoDynamicOutletModule] });
    })();

    var _c0$8 = ["flexibleMain"];
    var _c1$5 = ["*", [["", "igoFlexibleFill", ""]]];
    var _c2$1 = ["*", "[igoFlexibleFill]"];
    var FlexibleComponent = /** @class */ (function () {
        function FlexibleComponent(el, mediaService) {
            this.el = el;
            this.mediaService = mediaService;
            this._initial = '0';
            this._collapsed = '0';
            this._expanded = '100%';
            this._initialMobile = this.expanded;
            this._collapsedMobile = this.collapsed;
            this._expandedMobile = this.expanded;
            this._direction = 'column';
            this._state = 'initial';
        }
        Object.defineProperty(FlexibleComponent.prototype, "initial", {
            get: function () {
                return this._initial;
            },
            set: function (value) {
                this._initial = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "collapsed", {
            get: function () {
                return this._collapsed;
            },
            set: function (value) {
                this._collapsed = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "expanded", {
            get: function () {
                return this._expanded;
            },
            set: function (value) {
                this._expanded = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "initialMobile", {
            get: function () {
                return this._initialMobile;
            },
            set: function (value) {
                this._initialMobile = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "collapsedMobile", {
            get: function () {
                return this._collapsedMobile;
            },
            set: function (value) {
                this._collapsedMobile = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "expandedMobile", {
            get: function () {
                return this._expandedMobile;
            },
            set: function (value) {
                this._expandedMobile = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (value) {
                this._direction = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlexibleComponent.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (value) {
                var _this = this;
                var sizes = {
                    initial: this.initial,
                    collapsed: this.collapsed,
                    expanded: this.expanded
                };
                if (this.mediaService.isMobile()) {
                    Object.assign(sizes, {
                        initial: this.initialMobile,
                        collapsed: this.collapsedMobile,
                        expanded: this.expandedMobile
                    });
                }
                var size = sizes[value];
                if (size !== undefined) {
                    this.setSize(size);
                    setTimeout(function () {
                        _this._state = value;
                    }, FlexibleComponent.transitionTime);
                }
            },
            enumerable: false,
            configurable: true
        });
        FlexibleComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.el.nativeElement.className += this.direction;
            // Since this component supports different sizes
            // on mobile, force a redraw when the media changes
            this.mediaService$$ = this.mediaService.media$.subscribe(function (media) { return (_this.state = _this.state); });
        };
        FlexibleComponent.prototype.ngOnDestroy = function () {
            if (this.mediaService$$) {
                this.mediaService$$.unsubscribe();
            }
        };
        FlexibleComponent.prototype.setSize = function (size) {
            this._state = 'transition';
            if (this.direction === 'column') {
                this.main.nativeElement.style.height = size;
            }
            else if (this.direction === 'row') {
                this.main.nativeElement.style.width = size;
            }
        };
        return FlexibleComponent;
    }());
    FlexibleComponent.transitionTime = 250;
    FlexibleComponent.ɵfac = function FlexibleComponent_Factory(t) { return new (t || FlexibleComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MediaService)); };
    FlexibleComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FlexibleComponent, selectors: [["igo-flexible"]], viewQuery: function FlexibleComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$8, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.main = _t.first);
            }
        }, inputs: { initial: "initial", collapsed: "collapsed", expanded: "expanded", initialMobile: "initialMobile", collapsedMobile: "collapsedMobile", expandedMobile: "expandedMobile", direction: "direction", state: "state" }, ngContentSelectors: _c2$1, decls: 8, vars: 4, consts: [["flexibleMain", ""], [1, "igo-container"], [1, "igo-flexible-fill"]], template: function FlexibleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef(_c1$5);
                i0__namespace.ɵɵelementStart(0, "div", null, 0);
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵprojection(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 2);
                i0__namespace.ɵɵelementStart(5, "div");
                i0__namespace.ɵɵelementStart(6, "div", 1);
                i0__namespace.ɵɵprojection(7, 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassMapInterpolate2("igo-flexible-main ", ctx.state, " ", ctx.direction, "");
            }
        }, styles: ["[_nghost-%COMP%]{display:flex;height:100%;width:100%}.column[_nghost-%COMP%]{flex-direction:column}.row[_nghost-%COMP%]{flex-direction:row}.igo-flexible-main[_ngcontent-%COMP%]{flex:0 0 auto;overflow:hidden}.igo-flexible-main.column[_ngcontent-%COMP%]{transition:height .25s ease-in}.igo-flexible-main.row[_ngcontent-%COMP%]{transition:width .25s ease-in}.igo-flexible-fill[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.igo-container[_ngcontent-%COMP%]{width:calc(100% - 2 * 5px);height:100%;padding:5px 0;margin:0 5px;overflow:hidden;position:relative}  .igo-flexible-fill{flex:1 1 auto;overflow:hidden;position:relative}  .igo-content{height:100%;width:100%;overflow:auto}  igo-panel{height:100%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FlexibleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-flexible',
                        templateUrl: './flexible.component.html',
                        styleUrls: ['./flexible.component.scss']
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }, { type: i1__namespace$2.MediaService }]; }, { main: [{
                    type: i0.ViewChild,
                    args: ['flexibleMain', { static: true }]
                }], initial: [{
                    type: i0.Input
                }], collapsed: [{
                    type: i0.Input
                }], expanded: [{
                    type: i0.Input
                }], initialMobile: [{
                    type: i0.Input
                }], collapsedMobile: [{
                    type: i0.Input
                }], expandedMobile: [{
                    type: i0.Input
                }], direction: [{
                    type: i0.Input
                }], state: [{
                    type: i0.Input
                }] });
    })();

    var IgoFlexibleModule = /** @class */ (function () {
        function IgoFlexibleModule() {
        }
        IgoFlexibleModule.forRoot = function () {
            return {
                ngModule: IgoFlexibleModule,
                providers: []
            };
        };
        return IgoFlexibleModule;
    }());
    IgoFlexibleModule.ɵfac = function IgoFlexibleModule_Factory(t) { return new (t || IgoFlexibleModule)(); };
    IgoFlexibleModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoFlexibleModule });
    IgoFlexibleModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoFlexibleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [FlexibleComponent],
                        exports: [FlexibleComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoFlexibleModule, { declarations: [FlexibleComponent], exports: [FlexibleComponent] }); })();

    function formControlIsRequired(control) {
        if (control.validator) {
            var validator = control.validator({});
            if (validator && validator.required) {
                return true;
            }
        }
        if (control.controls) {
            var requiredControl = Object.keys(control.controls).find(function (key) {
                return formControlIsRequired(control.controls[key]);
            });
            return requiredControl !== undefined;
        }
        return false;
    }
    function getDefaultErrorMessages() {
        return {
            required: 'igo.common.form.errors.required'
        };
    }
    function getControlErrorMessage(control, messages) {
        var errors = control.errors || {};
        var errorKeys = Object.keys(errors);
        var errorMessages = errorKeys
            .map(function (key) { return messages[key]; })
            .filter(function (message) { return message !== undefined; });
        return errorMessages.length > 0 ? errorMessages[0] : '';
    }
    function getAllFormFields(form) {
        return form.groups.reduce(function (acc, group) {
            return acc.concat(group.fields);
        }, [].concat(form.fields));
    }
    function getFormFieldByName(form, name) {
        var fields = getAllFormFields(form);
        return fields.find(function (field) {
            return field.name === name;
        });
    }

    var _c0$7 = ["buttons"];
    var _c1$4 = ["*", [["", "formButtons", ""]]];
    var _c2 = function (a0) { return { "igo-form-body-with-buttons": a0 }; };
    var _c3 = ["*", "[formButtons]"];
    /**
     * A configurable form
     */
    var FormComponent = /** @class */ (function () {
        function FormComponent() {
            /**
             * Form autocomplete
             */
            this.autocomplete = 'off';
            /**
             * Event emitted when the form is submitted
             */
            this.submitForm = new i0.EventEmitter();
        }
        Object.defineProperty(FormComponent.prototype, "hasButtons", {
            get: function () {
                return this.buttons.nativeElement.children.length !== 0;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Is the entity or the template change, recreate the form or repopulate it.
         * @internal
         */
        FormComponent.prototype.ngOnChanges = function (changes) {
            var formData = changes.formData;
            if (formData && formData.currentValue !== formData.previousValue) {
                if (formData.currentValue === undefined) {
                    this.clear();
                }
                else {
                    this.setData(formData.currentValue);
                }
            }
        };
        /**
         * Transform the form data to a feature and emit an event
         * @param event Form submit event
         * @internal
         */
        FormComponent.prototype.onSubmit = function () {
            this.submitForm.emit(this.getData());
        };
        FormComponent.prototype.getData = function () {
            var _this = this;
            var data = {};
            getAllFormFields(this.form).forEach(function (field) {
                _this.updateDataWithFormField(data, field);
            });
            return data;
        };
        FormComponent.prototype.setData = function (data) {
            this.form.fields.forEach(function (field) {
                field.control.setValue(t__default["default"](data, field.name).safeObject);
            });
            this.form.groups.forEach(function (group) {
                group.fields.forEach(function (field) {
                    field.control.setValue(t__default["default"](data, field.name).safeObject);
                });
            });
        };
        FormComponent.prototype.updateDataWithFormField = function (data, field) {
            var control = field.control;
            if (!control.disabled) {
                data[field.name] = control.value;
            }
        };
        /**
         * Clear form
         */
        FormComponent.prototype.clear = function () {
            this.form.control.reset();
        };
        return FormComponent;
    }());
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
    FormComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FormComponent, selectors: [["igo-form"]], viewQuery: function FormComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$7, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.buttons = _t.first);
            }
        }, inputs: { form: "form", formData: "formData", autocomplete: "autocomplete" }, outputs: { submitForm: "submitForm" }, features: [i0__namespace.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 7, vars: 5, consts: [[3, "autocomplete", "formGroup", "ngSubmit"], [1, "igo-form-body", 3, "ngClass"], [1, "igo-form-content"], [1, "igo-form-buttons"], ["buttons", ""]], template: function FormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef(_c1$4);
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵlistener("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵprojection(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 3, 4);
                i0__namespace.ɵɵprojection(6, 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("autocomplete", ctx.autocomplete)("formGroup", ctx.form.control);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(3, _c2, ctx.hasButtons));
            }
        }, directives: [i1__namespace$5.ɵNgNoValidate, i1__namespace$5.NgControlStatusGroup, i1__namespace$5.FormGroupDirective, i1__namespace$1.NgClass], styles: ["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{width:100%;height:100%}.igo-form-body[_ngcontent-%COMP%], .igo-form-content[_ngcontent-%COMP%]{height:100%}.igo-form-body-with-buttons[_ngcontent-%COMP%]   .igo-form-content[_ngcontent-%COMP%]{height:calc(100% - 56px)}.igo-form-content[_ngcontent-%COMP%]{display:flex}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-form',
                        templateUrl: './form.component.html',
                        styleUrls: ['./form.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { form: [{
                    type: i0.Input
                }], formData: [{
                    type: i0.Input
                }], autocomplete: [{
                    type: i0.Input
                }], submitForm: [{
                    type: i0.Output
                }], buttons: [{
                    type: i0.ViewChild,
                    args: ['buttons', { static: true }]
                }] });
    })();

    /**
     * @ignore
     */
    var IgoFormFormModule = /** @class */ (function () {
        function IgoFormFormModule() {
        }
        return IgoFormFormModule;
    }());
    IgoFormFormModule.ɵfac = function IgoFormFormModule_Factory(t) { return new (t || IgoFormFormModule)(); };
    IgoFormFormModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoFormFormModule });
    IgoFormFormModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule
            ], i1$5.FormsModule,
            i1$5.ReactiveFormsModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoFormFormModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1$5.FormsModule,
                            i1$5.ReactiveFormsModule
                        ],
                        exports: [
                            FormComponent,
                            i1$5.FormsModule,
                            i1$5.ReactiveFormsModule
                        ],
                        declarations: [
                            FormComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoFormFormModule, { declarations: [FormComponent], imports: [i1$1.CommonModule,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule], exports: [FormComponent,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule] });
    })();

    var FormService = /** @class */ (function () {
        function FormService(formBuilder) {
            this.formBuilder = formBuilder;
        }
        FormService.prototype.form = function (fields, groups) {
            var control = this.formBuilder.group({});
            fields.forEach(function (field) {
                control.addControl(field.name, field.control);
            });
            groups.forEach(function (group) {
                control.addControl(group.name, group.control);
            });
            return { fields: fields, groups: groups, control: control };
        };
        FormService.prototype.group = function (config, fields) {
            var options = config.options || {};
            var control = this.formBuilder.group({});
            fields.forEach(function (field) {
                control.addControl(field.name, field.control);
            });
            if (options.validator) {
                var validators = this.getValidators(options.validator); // convert string to actual validator
                control.setValidators(validators);
            }
            return Object.assign({}, config, { fields: fields, control: control });
        };
        FormService.prototype.field = function (config) {
            var options = config.options || {};
            var state = {
                value: '',
                disabled: options.disabled
            };
            var control = this.formBuilder.control(state);
            if (options.validator) {
                var validators = this.getValidators(options.validator); // convert string to actual validator
                control.setValidators(validators);
            }
            return Object.assign({ type: 'text' }, config, { control: control });
        };
        FormService.prototype.extendFieldConfig = function (config, partial) {
            var options = Object.assign({}, config.options || {}, partial.options || {});
            var inputs = Object.assign({}, config.inputs || {}, partial.inputs || {});
            var subscribers = Object.assign({}, config.subscribers || {}, partial.subscribers || {});
            return Object.assign({}, config, { options: options, inputs: inputs, subscribers: subscribers });
        };
        FormService.prototype.getValidators = function (validatorOption) {
            var _this = this;
            if (Array.isArray(validatorOption)) {
                return validatorOption.map(function (validatorStr) {
                    return _this.getValidator(validatorStr);
                });
            }
            return this.getValidator(validatorOption);
        };
        FormService.prototype.getValidator = function (validatorStr) {
            if (typeof validatorStr !== 'string') {
                return validatorStr;
            }
            // regex pattern to extract arguments from string for e.g applying on "minLength(8)" would extract 8
            var re = /^([a-zA-Z]{3,15})\((.{0,20})\)$/;
            var match = validatorStr.match(re);
            if (!match) {
                return i1$5.Validators[validatorStr];
            }
            var name = match[1];
            var args = match[2];
            return i1$5.Validators[name](args);
        };
        return FormService;
    }());
    FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0__namespace.ɵɵinject(i1__namespace$5.FormBuilder)); };
    FormService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace$5.FormBuilder }]; }, null);
    })();

    /**
     * Service where all available form fields are registered.
     */
    var FormFieldService = /** @class */ (function () {
        function FormFieldService() {
        }
        FormFieldService.register = function (type, component) {
            FormFieldService.fields[type] = component;
        };
        /**
         * Return field component by type
         * @param type Field type
         * @returns Field component
         */
        FormFieldService.prototype.getFieldByType = function (type) {
            return FormFieldService.fields[type];
        };
        return FormFieldService;
    }());
    FormFieldService.fields = {};
    FormFieldService.ɵfac = function FormFieldService_Factory(t) { return new (t || FormFieldService)(); };
    FormFieldService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FormFieldService, factory: FormFieldService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormFieldService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    function IgoFormFieldComponent(type) {
        return function (compType) {
            FormFieldService.register(type, compType);
        };
    }

    function FormFieldComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "igo-dynamic-outlet", 1);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("component", ctx_r0.getFieldComponent())("inputs", ctx_r0.getFieldInputs())("subscribers", ctx_r0.getFieldSubscribers());
        }
    }
    /**
     * This component renders the proper form input based on
     * the field configuration it receives.
     */
    var FormFieldComponent = /** @class */ (function () {
        function FormFieldComponent(formFieldService) {
            this.formFieldService = formFieldService;
            /**
             * Field inputs cache
             */
            this.fieldInputs = undefined;
            /**
             * Field subscribers cache
             */
            this.fieldSubscribers = undefined;
        }
        Object.defineProperty(FormFieldComponent.prototype, "fieldOptions", {
            get: function () {
                return this.field.options || {};
            },
            enumerable: false,
            configurable: true
        });
        FormFieldComponent.prototype.getFieldComponent = function () {
            return this.formFieldService.getFieldByType(this.field.type || 'text');
        };
        FormFieldComponent.prototype.getFieldInputs = function () {
            if (this.fieldInputs !== undefined) {
                return this.fieldInputs;
            }
            var errors = this.fieldOptions.errors || {};
            this.fieldInputs = Object.assign({
                placeholder: this.field.title,
                disableSwitch: this.fieldOptions.disableSwitch || false
            }, Object.assign({}, this.field.inputs || {}), {
                formControl: this.field.control,
                errors: Object.assign({}, getDefaultErrorMessages(), errors)
            });
            return this.fieldInputs;
        };
        FormFieldComponent.prototype.getFieldSubscribers = function () {
            if (this.fieldSubscribers !== undefined) {
                return this.fieldSubscribers;
            }
            this.fieldSubscribers = Object.assign({}, this.field.subscribers || {});
            return this.fieldSubscribers;
        };
        return FormFieldComponent;
    }());
    FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) { return new (t || FormFieldComponent)(i0__namespace.ɵɵdirectiveInject(FormFieldService)); };
    FormFieldComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FormFieldComponent, selectors: [["igo-form-field"]], inputs: { field: "field" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "component", "inputs", "subscribers"]], template: function FormFieldComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, FormFieldComponent_ng_container_0_Template, 2, 3, "ng-container", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.field !== undefined);
            }
        }, directives: [i1__namespace$1.NgIf, DynamicOutletComponent], styles: ["mat-form-field{width:100%}  .igo-form-disable-switch{margin-right:8px}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormFieldComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-form-field',
                        templateUrl: './form-field.component.html',
                        styleUrls: ['./form-field.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: FormFieldService }]; }, { field: [{
                    type: i0.Input
                }] });
    })();

    function FormFieldSelectComponent_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 4);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var choice_r3 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", choice_r3.value);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", choice_r3.title, " ");
        }
    }
    function FormFieldSelectComponent_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-icon", 5);
            i0__namespace.ɵɵlistener("click", function FormFieldSelectComponent_mat_icon_4_Template_mat_icon_click_0_listener() { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.onDisableSwitchClick(); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("svgIcon", i0__namespace.ɵɵpipeBind1(1, 1, ctx_r1.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
        }
    }
    function FormFieldSelectComponent_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, ctx_r2.getErrorMessage()));
        }
    }
    /**
     * This component renders a select field
     */
    exports.FormFieldSelectComponent = /** @class */ (function () {
        function FormFieldSelectComponent() {
            this.disabled$ = new rxjs.BehaviorSubject(false);
            this.choices$ = new rxjs.BehaviorSubject([]);
            /**
             * Wheter a disable switch should be available
             */
            this.disableSwitch = false;
        }
        Object.defineProperty(FormFieldSelectComponent.prototype, "choices", {
            get: function () { return this.choices$.value; },
            /**
             * Select input choices
             */
            set: function (value) { this.choices$.next(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormFieldSelectComponent.prototype, "required", {
            /**
             * Whether the field is required
             */
            get: function () {
                return formControlIsRequired(this.formControl);
            },
            enumerable: false,
            configurable: true
        });
        FormFieldSelectComponent.prototype.ngOnInit = function () {
            this.disabled$.next(this.formControl.disabled);
        };
        /**
         * Get error message
         */
        FormFieldSelectComponent.prototype.getErrorMessage = function () {
            return getControlErrorMessage(this.formControl, this.errors);
        };
        FormFieldSelectComponent.prototype.onDisableSwitchClick = function () {
            this.toggleDisabled();
        };
        FormFieldSelectComponent.prototype.toggleDisabled = function () {
            var disabled = !this.disabled$.value;
            if (disabled === true) {
                this.formControl.disable();
            }
            else {
                this.formControl.enable();
            }
            this.disabled$.next(disabled);
        };
        return FormFieldSelectComponent;
    }());
    exports.FormFieldSelectComponent.ɵfac = function FormFieldSelectComponent_Factory(t) { return new (t || exports.FormFieldSelectComponent)(); };
    exports.FormFieldSelectComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.FormFieldSelectComponent, selectors: [["igo-form-field-select"]], inputs: { choices: "choices", formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 6, vars: 8, consts: [[3, "required", "placeholder", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelementStart(1, "mat-select", 0);
                i0__namespace.ɵɵtemplate(2, FormFieldSelectComponent_mat_option_2_Template, 2, 2, "mat-option", 1);
                i0__namespace.ɵɵpipe(3, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(4, FormFieldSelectComponent_mat_icon_4_Template, 2, 3, "mat-icon", 2);
                i0__namespace.ɵɵtemplate(5, FormFieldSelectComponent_mat_error_5_Template, 3, 3, "mat-error", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(3, 6, ctx.choices$));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.disableSwitch === true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.formControl.errors);
            }
        }, directives: [i1__namespace.MatFormField, i2__namespace.MatSelect, i1__namespace$5.RequiredValidator, i1__namespace$5.NgControlStatus, i1__namespace$5.FormControlDirective, i1__namespace$1.NgForOf, i1__namespace$1.NgIf, i3__namespace.MatOption, i5__namespace$1.MatIcon, i1__namespace.MatPrefix, i1__namespace.MatError], pipes: [i1__namespace$1.AsyncPipe, i6__namespace$1.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    exports.FormFieldSelectComponent = __decorate([
        IgoFormFieldComponent('select')
    ], exports.FormFieldSelectComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.FormFieldSelectComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-form-field-select',
                        templateUrl: './form-field-select.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { choices: [{
                    type: i0.Input
                }], formControl: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], errors: [{
                    type: i0.Input
                }], disableSwitch: [{
                    type: i0.Input
                }] });
    })();

    function FormFieldTextComponent_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-icon", 3);
            i0__namespace.ɵɵlistener("click", function FormFieldTextComponent_mat_icon_2_Template_mat_icon_click_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.onDisableSwitchClick(); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("svgIcon", i0__namespace.ɵɵpipeBind1(1, 1, ctx_r0.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
        }
    }
    function FormFieldTextComponent_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
        }
    }
    /**
     * This component renders a text field
     */
    exports.FormFieldTextComponent = /** @class */ (function () {
        function FormFieldTextComponent() {
            this.disabled$ = new rxjs.BehaviorSubject(false);
            /**
             * Wheter a disable switch should be available
             */
            this.disableSwitch = false;
        }
        Object.defineProperty(FormFieldTextComponent.prototype, "required", {
            /**
             * Whether the field is required
             */
            get: function () {
                return formControlIsRequired(this.formControl);
            },
            enumerable: false,
            configurable: true
        });
        FormFieldTextComponent.prototype.ngOnInit = function () {
            this.disabled$.next(this.formControl.disabled);
        };
        /**
         * Get error message
         */
        FormFieldTextComponent.prototype.getErrorMessage = function () {
            return getControlErrorMessage(this.formControl, this.errors);
        };
        FormFieldTextComponent.prototype.onDisableSwitchClick = function () {
            this.toggleDisabled();
        };
        FormFieldTextComponent.prototype.toggleDisabled = function () {
            var disabled = !this.disabled$.value;
            if (disabled === true) {
                this.formControl.disable();
            }
            else {
                this.formControl.enable();
            }
            this.disabled$.next(disabled);
        };
        return FormFieldTextComponent;
    }());
    exports.FormFieldTextComponent.ɵfac = function FormFieldTextComponent_Factory(t) { return new (t || exports.FormFieldTextComponent)(); };
    exports.FormFieldTextComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.FormFieldTextComponent, selectors: [["igo-form-field-text"]], inputs: { formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 4, vars: 5, consts: [["matInput", "", 3, "required", "placeholder", "formControl"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldTextComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelement(1, "input", 0);
                i0__namespace.ɵɵtemplate(2, FormFieldTextComponent_mat_icon_2_Template, 2, 3, "mat-icon", 1);
                i0__namespace.ɵɵtemplate(3, FormFieldTextComponent_mat_error_3_Template, 3, 3, "mat-error", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.disableSwitch === true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.formControl.errors);
            }
        }, directives: [i1__namespace.MatFormField, i2__namespace$3.MatInput, i1__namespace$5.DefaultValueAccessor, i1__namespace$5.RequiredValidator, i1__namespace$5.NgControlStatus, i1__namespace$5.FormControlDirective, i1__namespace$1.NgIf, i5__namespace$1.MatIcon, i1__namespace.MatPrefix, i1__namespace.MatError], pipes: [i1__namespace$1.AsyncPipe, i6__namespace$1.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    exports.FormFieldTextComponent = __decorate([
        IgoFormFieldComponent('text')
    ], exports.FormFieldTextComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.FormFieldTextComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-form-field-text',
                        templateUrl: './form-field-text.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { formControl: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], errors: [{
                    type: i0.Input
                }], disableSwitch: [{
                    type: i0.Input
                }] });
    })();

    function FormFieldTextareaComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-icon", 3);
            i0__namespace.ɵɵlistener("click", function FormFieldTextareaComponent_mat_icon_3_Template_mat_icon_click_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.onDisableSwitchClick(); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("svgIcon", i0__namespace.ɵɵpipeBind1(1, 1, ctx_r0.disabled$) === true ? "checkbox-blank-outline" : "checkbox-marked-outline");
        }
    }
    function FormFieldTextareaComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
        }
    }
    /**
     * This component renders a textarea field
     */
    exports.FormFieldTextareaComponent = /** @class */ (function () {
        function FormFieldTextareaComponent() {
            this.disabled$ = new rxjs.BehaviorSubject(false);
            /**
             * Wheter a disable switch should be available
             */
            this.disableSwitch = false;
        }
        Object.defineProperty(FormFieldTextareaComponent.prototype, "required", {
            /**
             * Whether the field is required
             */
            get: function () {
                return formControlIsRequired(this.formControl);
            },
            enumerable: false,
            configurable: true
        });
        FormFieldTextareaComponent.prototype.ngOnInit = function () {
            this.disabled$.next(this.formControl.disabled);
        };
        /**
         * Get error message
         */
        FormFieldTextareaComponent.prototype.getErrorMessage = function () {
            return getControlErrorMessage(this.formControl, this.errors);
        };
        FormFieldTextareaComponent.prototype.onDisableSwitchClick = function () {
            this.toggleDisabled();
        };
        FormFieldTextareaComponent.prototype.toggleDisabled = function () {
            var disabled = !this.disabled$.value;
            if (disabled === true) {
                this.formControl.disable();
            }
            else {
                this.formControl.enable();
            }
            this.disabled$.next(disabled);
        };
        return FormFieldTextareaComponent;
    }());
    exports.FormFieldTextareaComponent.ɵfac = function FormFieldTextareaComponent_Factory(t) { return new (t || exports.FormFieldTextareaComponent)(); };
    exports.FormFieldTextareaComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: exports.FormFieldTextareaComponent, selectors: [["igo-form-field-textarea"]], inputs: { formControl: "formControl", placeholder: "placeholder", errors: "errors", disableSwitch: "disableSwitch" }, decls: 5, vars: 5, consts: [["matInput", "", 3, "required", "placeholder", "formControl"], ["class", "igo-form-disable-switch", "matPrefix", "", 3, "svgIcon", "click", 4, "ngIf"], [4, "ngIf"], ["matPrefix", "", 1, "igo-form-disable-switch", 3, "svgIcon", "click"]], template: function FormFieldTextareaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelementStart(1, "textarea", 0);
                i0__namespace.ɵɵtext(2, "  ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, FormFieldTextareaComponent_mat_icon_3_Template, 2, 3, "mat-icon", 1);
                i0__namespace.ɵɵtemplate(4, FormFieldTextareaComponent_mat_error_4_Template, 3, 3, "mat-error", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("required", ctx.required)("placeholder", ctx.placeholder)("formControl", ctx.formControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.disableSwitch === true);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.formControl.errors);
            }
        }, directives: [i1__namespace.MatFormField, i2__namespace$3.MatInput, i1__namespace$5.DefaultValueAccessor, i1__namespace$5.RequiredValidator, i1__namespace$5.NgControlStatus, i1__namespace$5.FormControlDirective, i1__namespace$1.NgIf, i5__namespace$1.MatIcon, i1__namespace.MatPrefix, i1__namespace.MatError], pipes: [i1__namespace$1.AsyncPipe, i6__namespace$1.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    exports.FormFieldTextareaComponent = __decorate([
        IgoFormFieldComponent('textarea')
    ], exports.FormFieldTextareaComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(exports.FormFieldTextareaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-form-field-textarea',
                        templateUrl: './form-field-textarea.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { formControl: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], errors: [{
                    type: i0.Input
                }], disableSwitch: [{
                    type: i0.Input
                }] });
    })();

    /**
     * @ignore
     */
    var IgoFormFieldModule = /** @class */ (function () {
        function IgoFormFieldModule() {
        }
        return IgoFormFieldModule;
    }());
    IgoFormFieldModule.ɵfac = function IgoFormFieldModule_Factory(t) { return new (t || IgoFormFieldModule)(); };
    IgoFormFieldModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoFormFieldModule });
    IgoFormFieldModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule,
                i5$1.MatIconModule,
                i1.MatFormFieldModule,
                i2$3.MatInputModule,
                i2.MatSelectModule,
                i1$2.IgoLanguageModule,
                IgoDynamicOutletModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoFormFieldModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1$5.FormsModule,
                            i1$5.ReactiveFormsModule,
                            i5$1.MatIconModule,
                            i1.MatFormFieldModule,
                            i2$3.MatInputModule,
                            i2.MatSelectModule,
                            i1$2.IgoLanguageModule,
                            IgoDynamicOutletModule
                        ],
                        exports: [
                            FormFieldComponent,
                            exports.FormFieldSelectComponent,
                            exports.FormFieldTextComponent,
                            exports.FormFieldTextareaComponent
                        ],
                        declarations: [
                            FormFieldComponent,
                            exports.FormFieldSelectComponent,
                            exports.FormFieldTextComponent,
                            exports.FormFieldTextareaComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoFormFieldModule, { declarations: [FormFieldComponent,
                exports.FormFieldSelectComponent,
                exports.FormFieldTextComponent,
                exports.FormFieldTextareaComponent], imports: [i1$1.CommonModule,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule,
                i5$1.MatIconModule,
                i1.MatFormFieldModule,
                i2$3.MatInputModule,
                i2.MatSelectModule,
                i1$2.IgoLanguageModule,
                IgoDynamicOutletModule], exports: [FormFieldComponent,
                exports.FormFieldSelectComponent,
                exports.FormFieldTextComponent,
                exports.FormFieldTextareaComponent] });
    })();

    function FormGroupComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 5);
            i0__namespace.ɵɵelement(1, "igo-form-field", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var field_r3 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("ngClass", ctx_r2.getFieldNgClass(field_r3));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("field", field_r3);
        }
    }
    function FormGroupComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵtemplate(1, FormGroupComponent_div_0_div_1_Template, 2, 2, "div", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.group.fields);
        }
    }
    function FormGroupComponent_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(2, 1, ctx_r1.getErrorMessage()));
        }
    }
    var _c0$6 = ["*"];
    /**
     * A configurable form, optionnally bound to an entity
     * (for example in case of un update). Submitting that form
     * emits an event with the form data but no other operation is performed.
     */
    var FormGroupComponent = /** @class */ (function () {
        function FormGroupComponent() {
        }
        Object.defineProperty(FormGroupComponent.prototype, "formControl", {
            /**
             * Form group control
             */
            get: function () { return this.group.control; },
            enumerable: false,
            configurable: true
        });
        /**
         * Return the number of columns a field should occupy.
         * The maximum allowed is 2, even if the field config says more.
         * @param field Field
         * @returns Number of columns
         * @internal
         */
        FormGroupComponent.prototype.getFieldColSpan = function (field) {
            var colSpan = 2;
            var options = field.options || {};
            if (options.cols && options.cols > 0) {
                colSpan = Math.min(options.cols, 2);
            }
            return colSpan;
        };
        /**
         * Return the number of columns a field should occupy.
         * The maximum allowed is 2, even if the field config says more.
         * @param field Field
         * @returns Number of columns
         * @internal
         */
        FormGroupComponent.prototype.getFieldNgClass = function (field) {
            var _a;
            var colspan = this.getFieldColSpan(field);
            return _a = {}, _a["igo-form-field-colspan-" + colspan] = true, _a;
        };
        /**
         * Get error message
         */
        FormGroupComponent.prototype.getErrorMessage = function () {
            var options = this.group.options || {};
            return getControlErrorMessage(this.formControl, options.errors || {});
        };
        return FormGroupComponent;
    }());
    FormGroupComponent.ɵfac = function FormGroupComponent_Factory(t) { return new (t || FormGroupComponent)(); };
    FormGroupComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FormGroupComponent, selectors: [["igo-form-group"]], inputs: { group: "group", errors: "errors" }, ngContentSelectors: _c0$6, decls: 4, vars: 2, consts: [["class", "igo-form-group-fields", 4, "ngIf"], [1, "igo-form-group-extra-content"], [4, "ngIf"], [1, "igo-form-group-fields"], ["class", "igo-form-field-wrapper", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "igo-form-field-wrapper", 3, "ngClass"], [3, "field"]], template: function FormGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵtemplate(0, FormGroupComponent_div_0_Template, 2, 1, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵprojection(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(3, FormGroupComponent_mat_error_3_Template, 3, 3, "mat-error", 2);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.group && ctx.group.fields.length > 0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.formControl.errors);
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace$1.NgForOf, i1__namespace$1.NgClass, FormFieldComponent, i1__namespace.MatError], pipes: [i6__namespace$1.TranslatePipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block;overflow:auto;padding:10px 5px}.igo-form-field-wrapper[_ngcontent-%COMP%]{display:inline-block;padding:0 5px}.igo-form-field-colspan-2[_ngcontent-%COMP%]{width:100%}.igo-form-field-colspan-1[_ngcontent-%COMP%]{width:50%}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-form-group',
                        templateUrl: './form-group.component.html',
                        styleUrls: ['./form-group.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { group: [{
                    type: i0.Input
                }], errors: [{
                    type: i0.Input
                }] });
    })();

    /**
     * @ignore
     */
    var IgoFormGroupModule = /** @class */ (function () {
        function IgoFormGroupModule() {
        }
        return IgoFormGroupModule;
    }());
    IgoFormGroupModule.ɵfac = function IgoFormGroupModule_Factory(t) { return new (t || IgoFormGroupModule)(); };
    IgoFormGroupModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoFormGroupModule });
    IgoFormGroupModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1.MatFormFieldModule,
                i1$2.IgoLanguageModule,
                IgoFormFieldModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoFormGroupModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1.MatFormFieldModule,
                            i1$2.IgoLanguageModule,
                            IgoFormFieldModule
                        ],
                        exports: [
                            FormGroupComponent
                        ],
                        declarations: [
                            FormGroupComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoFormGroupModule, { declarations: [FormGroupComponent], imports: [i1$1.CommonModule,
                i1.MatFormFieldModule,
                i1$2.IgoLanguageModule,
                IgoFormFieldModule], exports: [FormGroupComponent] });
    })();

    /**
     * @ignore
     */
    var IgoFormModule = /** @class */ (function () {
        function IgoFormModule() {
        }
        return IgoFormModule;
    }());
    IgoFormModule.ɵfac = function IgoFormModule_Factory(t) { return new (t || IgoFormModule)(); };
    IgoFormModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoFormModule });
    IgoFormModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FormService,
            FormFieldService
        ], imports: [[
                i1$1.CommonModule,
                IgoFormGroupModule,
                IgoFormFieldModule
            ], IgoFormFormModule,
            IgoFormGroupModule,
            IgoFormFieldModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoFormModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoFormGroupModule,
                            IgoFormFieldModule
                        ],
                        exports: [
                            IgoFormFormModule,
                            IgoFormGroupModule,
                            IgoFormFieldModule
                        ],
                        declarations: [],
                        providers: [
                            FormService,
                            FormFieldService
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoFormModule, { imports: [i1$1.CommonModule,
                IgoFormGroupModule,
                IgoFormFieldModule], exports: [IgoFormFormModule,
                IgoFormGroupModule,
                IgoFormFieldModule] });
    })();

    var HomeButtonComponent = /** @class */ (function () {
        function HomeButtonComponent() {
            this.unselectButton = new i0.EventEmitter();
        }
        HomeButtonComponent.prototype.onUnselectButtonClick = function () {
            this.unselectButton.emit();
        };
        return HomeButtonComponent;
    }());
    HomeButtonComponent.ɵfac = function HomeButtonComponent_Factory(t) { return new (t || HomeButtonComponent)(); };
    HomeButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: HomeButtonComponent, selectors: [["igo-home-button"]], outputs: { unselectButton: "unselectButton" }, decls: 3, vars: 3, consts: [["id", "homeButton", "mat-icon-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "matTooltip", "click"], ["svgIcon", "home"]], template: function HomeButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function HomeButtonComponent_Template_button_click_0_listener() { return ctx.onUnselectButtonClick(); });
                i0__namespace.ɵɵpipe(1, "translate");
                i0__namespace.ɵɵelement(2, "mat-icon", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("matTooltip", i0__namespace.ɵɵpipeBind1(1, 1, "igo.context.sidenav.mainMenu"));
            }
        }, directives: [i4__namespace$1.MatButton, i6__namespace.MatTooltip, i5__namespace$1.MatIcon], pipes: [i6__namespace$1.TranslatePipe], styles: ["#homeButton[_ngcontent-%COMP%]{position:absolute;top:50px;left:0px;border-radius:0;height:46px;width:48px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HomeButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-home-button',
                        templateUrl: './home-button.component.html',
                        styleUrls: ['./home-button.component.scss']
                    }]
            }], function () { return []; }, { unselectButton: [{
                    type: i0.Output
                }] });
    })();

    /**
     * @ignore
     */
    var IgoHomeButtonModule = /** @class */ (function () {
        function IgoHomeButtonModule() {
        }
        return IgoHomeButtonModule;
    }());
    IgoHomeButtonModule.ɵfac = function IgoHomeButtonModule_Factory(t) { return new (t || IgoHomeButtonModule)(); };
    IgoHomeButtonModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoHomeButtonModule });
    IgoHomeButtonModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[
                i1$1.CommonModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i6.MatTooltipModule,
                i1$2.IgoLanguageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoHomeButtonModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i5$1.MatIconModule,
                            i4$1.MatButtonModule,
                            i6.MatTooltipModule,
                            i1$2.IgoLanguageModule
                        ],
                        exports: [HomeButtonComponent],
                        declarations: [HomeButtonComponent],
                        providers: []
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoHomeButtonModule, { declarations: [HomeButtonComponent], imports: [i1$1.CommonModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i6.MatTooltipModule,
                i1$2.IgoLanguageModule], exports: [HomeButtonComponent] });
    })();

    /**
     * @ignore
     */
    var IgoEntitySelectorModule = /** @class */ (function () {
        function IgoEntitySelectorModule() {
        }
        return IgoEntitySelectorModule;
    }());
    IgoEntitySelectorModule.ɵfac = function IgoEntitySelectorModule_Factory(t) { return new (t || IgoEntitySelectorModule)(); };
    IgoEntitySelectorModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoEntitySelectorModule });
    IgoEntitySelectorModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$5.FormsModule,
                i2.MatSelectModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoEntitySelectorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1$5.FormsModule,
                            i2.MatSelectModule
                        ],
                        exports: [EntitySelectorComponent],
                        declarations: [EntitySelectorComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoEntitySelectorModule, { declarations: [EntitySelectorComponent], imports: [i1$1.CommonModule,
                i1$5.FormsModule,
                i2.MatSelectModule], exports: [EntitySelectorComponent] });
    })();

    var StopDropPropagationDirective = /** @class */ (function () {
        function StopDropPropagationDirective() {
        }
        StopDropPropagationDirective.prototype.onDrop = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        return StopDropPropagationDirective;
    }());
    StopDropPropagationDirective.ɵfac = function StopDropPropagationDirective_Factory(t) { return new (t || StopDropPropagationDirective)(); };
    StopDropPropagationDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: StopDropPropagationDirective, selectors: [["", "igoStopDropPropagation", ""]], hostBindings: function StopDropPropagationDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("drop", function StopDropPropagationDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StopDropPropagationDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoStopDropPropagation]'
                    }]
            }], null, { onDrop: [{
                    type: i0.HostListener,
                    args: ['drop', ['$event']]
                }] });
    })();

    var IgoStopPropagationModule = /** @class */ (function () {
        function IgoStopPropagationModule() {
        }
        IgoStopPropagationModule.forRoot = function () {
            return {
                ngModule: IgoStopPropagationModule,
                providers: []
            };
        };
        return IgoStopPropagationModule;
    }());
    IgoStopPropagationModule.ɵfac = function IgoStopPropagationModule_Factory(t) { return new (t || IgoStopPropagationModule)(); };
    IgoStopPropagationModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoStopPropagationModule });
    IgoStopPropagationModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoStopPropagationModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [StopDropPropagationDirective, StopPropagationDirective],
                        exports: [StopDropPropagationDirective, StopPropagationDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoStopPropagationModule, { declarations: [StopDropPropagationDirective, StopPropagationDirective], exports: [StopDropPropagationDirective, StopPropagationDirective] }); })();

    /**
     * @ignore
     */
    var IgoEntityTablePaginatorModule = /** @class */ (function () {
        function IgoEntityTablePaginatorModule() {
        }
        return IgoEntityTablePaginatorModule;
    }());
    IgoEntityTablePaginatorModule.ɵfac = function IgoEntityTablePaginatorModule_Factory(t) { return new (t || IgoEntityTablePaginatorModule)(); };
    IgoEntityTablePaginatorModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoEntityTablePaginatorModule });
    IgoEntityTablePaginatorModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2$1.MatPaginatorModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoEntityTablePaginatorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2$1.MatPaginatorModule,
                        ],
                        exports: [
                            EntityTablePaginatorComponent
                        ],
                        declarations: [
                            EntityTablePaginatorComponent,
                        ]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoEntityTablePaginatorModule, { declarations: [EntityTablePaginatorComponent], imports: [i2$1.MatPaginatorModule], exports: [EntityTablePaginatorComponent] }); })();

    var IgoImageModule = /** @class */ (function () {
        function IgoImageModule() {
        }
        IgoImageModule.forRoot = function () {
            return {
                ngModule: IgoImageModule,
                providers: []
            };
        };
        return IgoImageModule;
    }());
    IgoImageModule.ɵfac = function IgoImageModule_Factory(t) { return new (t || IgoImageModule)(); };
    IgoImageModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoImageModule });
    IgoImageModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoImageModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [SecureImagePipe],
                        exports: [SecureImagePipe]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoImageModule, { declarations: [SecureImagePipe], exports: [SecureImagePipe] }); })();

    /**
     * @ignore
     */
    var IgoEntityTableModule = /** @class */ (function () {
        function IgoEntityTableModule() {
        }
        return IgoEntityTableModule;
    }());
    IgoEntityTableModule.ɵfac = function IgoEntityTableModule_Factory(t) { return new (t || IgoEntityTableModule)(); };
    IgoEntityTableModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoEntityTableModule });
    IgoEntityTableModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i4.MatTableModule,
                i9.MatAutocompleteModule,
                i5.MatSortModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i7.MatCheckboxModule,
                i2$1.MatPaginatorModule,
                i2.MatSelectModule,
                IgoStopPropagationModule,
                IgoCustomHtmlModule,
                IgoEntityTablePaginatorModule,
                IgoImageModule,
                i1$2.IgoLanguageModule,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule,
                i2$3.MatInputModule,
                i10.MatDatepickerModule,
                i6.MatTooltipModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoEntityTableModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i4.MatTableModule,
                            i9.MatAutocompleteModule,
                            i5.MatSortModule,
                            i5$1.MatIconModule,
                            i4$1.MatButtonModule,
                            i7.MatCheckboxModule,
                            i2$1.MatPaginatorModule,
                            i2.MatSelectModule,
                            IgoStopPropagationModule,
                            IgoCustomHtmlModule,
                            IgoEntityTablePaginatorModule,
                            IgoImageModule,
                            i1$2.IgoLanguageModule,
                            i1$5.FormsModule,
                            i1$5.ReactiveFormsModule,
                            i2$3.MatInputModule,
                            i10.MatDatepickerModule,
                            i6.MatTooltipModule
                        ],
                        exports: [
                            EntityTableComponent
                        ],
                        declarations: [
                            EntityTableComponent,
                            EntityTableRowDirective
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoEntityTableModule, { declarations: [EntityTableComponent,
                EntityTableRowDirective], imports: [i1$1.CommonModule,
                i4.MatTableModule,
                i9.MatAutocompleteModule,
                i5.MatSortModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i7.MatCheckboxModule,
                i2$1.MatPaginatorModule,
                i2.MatSelectModule,
                IgoStopPropagationModule,
                IgoCustomHtmlModule,
                IgoEntityTablePaginatorModule,
                IgoImageModule,
                i1$2.IgoLanguageModule,
                i1$5.FormsModule,
                i1$5.ReactiveFormsModule,
                i2$3.MatInputModule,
                i10.MatDatepickerModule,
                i6.MatTooltipModule], exports: [EntityTableComponent] });
    })();

    var IgoEntityModule = /** @class */ (function () {
        function IgoEntityModule() {
        }
        return IgoEntityModule;
    }());
    IgoEntityModule.ɵfac = function IgoEntityModule_Factory(t) { return new (t || IgoEntityModule)(); };
    IgoEntityModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoEntityModule });
    IgoEntityModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule
            ], IgoEntitySelectorModule,
            IgoEntityTableModule,
            IgoEntityTablePaginatorModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoEntityModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        exports: [
                            IgoEntitySelectorModule,
                            IgoEntityTableModule,
                            IgoEntityTablePaginatorModule
                        ],
                        declarations: []
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoEntityModule, { imports: [i1$1.CommonModule], exports: [IgoEntitySelectorModule,
                IgoEntityTableModule,
                IgoEntityTablePaginatorModule] });
    })();

    var InteractiveTourLoader = /** @class */ (function () {
        function InteractiveTourLoader(http, configService) {
            this.http = http;
            this.configService = configService;
            this.jsonURL = this.getPathToConfigFile();
        }
        InteractiveTourLoader.prototype.loadConfigTour = function () {
            var _this = this;
            this.getJSON()
                .subscribe(function (data) {
                _this.allToursOptions = data;
            }, function (err) {
                throw new Error("Problem with Interactive tour configuration file: interactiveTour.json not find. Check if the file and is path is set correctly.");
            });
        };
        InteractiveTourLoader.prototype.getPathToConfigFile = function () {
            return (this.configService.getConfig('interactiveTour.pathToConfigFile') ||
                './config/interactiveTour.json');
        };
        InteractiveTourLoader.prototype.getJSON = function () {
            return this.http.get(this.jsonURL).pipe(operators.catchError(function (e) {
                e.error.caught = true;
                throw e;
            }));
        };
        InteractiveTourLoader.prototype.getTourOptionData = function (toolName) {
            if (this.allToursOptions === undefined) {
                return undefined;
            }
            var nameInConfigFile = toolName;
            nameInConfigFile = nameInConfigFile.replace(/\s/g, '');
            return this.allToursOptions[nameInConfigFile];
        };
        return InteractiveTourLoader;
    }());
    InteractiveTourLoader.ɵfac = function InteractiveTourLoader_Factory(t) { return new (t || InteractiveTourLoader)(i0__namespace.ɵɵinject(i1__namespace$3.HttpClient), i0__namespace.ɵɵinject(i1__namespace$2.ConfigService)); };
    InteractiveTourLoader.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: InteractiveTourLoader, factory: InteractiveTourLoader.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InteractiveTourLoader, [{
                type: i0.Injectable
            }], function () { return [{ type: i1__namespace$3.HttpClient }, { type: i1__namespace$2.ConfigService }]; }, null);
    })();

    var InteractiveTourService = /** @class */ (function () {
        function InteractiveTourService(configService, mediaService, languageService, interactiveTourLoader, shepherdService) {
            this.configService = configService;
            this.mediaService = mediaService;
            this.languageService = languageService;
            this.interactiveTourLoader = interactiveTourLoader;
            this.shepherdService = shepherdService;
            this.nextIndex = 1;
            if (this.isAppHaveTour()) {
                this.interactiveTourLoader.loadConfigTour();
            }
        }
        InteractiveTourService.prototype.isAppHaveTour = function () {
            var haveTour = this.configService.getConfig('interactiveTour.activateInteractiveTour');
            if (haveTour === undefined) {
                return true;
            }
            else {
                return haveTour;
            }
        };
        InteractiveTourService.prototype.isToolHaveTourConfig = function (toolName) {
            var checkTourActiveOptions = this.interactiveTourLoader.getTourOptionData(toolName);
            if (checkTourActiveOptions === undefined) {
                return false;
            }
            else {
                return true;
            }
        };
        InteractiveTourService.prototype.disabledTourButton = function (toolName) {
            var e_1, _a;
            var stepConfig = this.interactiveTourLoader.getTourOptionData(toolName);
            if (stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.conditions) {
                try {
                    for (var _b = __values(stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.conditions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var condition = _c.value;
                        if (document.querySelector(condition) === null) {
                            return true;
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
            }
            return false;
        };
        InteractiveTourService.prototype.isMobile = function () {
            return this.mediaService.isMobile();
        };
        InteractiveTourService.prototype.isTourDisplayInMobile = function () {
            var showInMobile = this.configService.getConfig('interactiveTour.tourInMobile');
            if (showInMobile === undefined) {
                return true;
            }
            return this.configService.getConfig('interactiveTour.tourInMobile');
        };
        InteractiveTourService.prototype.getButtons = function (buttonKind) {
            if (buttonKind === 'noBackButton') {
                return [
                    {
                        classes: 'shepherd-button-primary',
                        text: this.languageService.translate.instant('igo.common.interactiveTour.nextButton'),
                        type: 'next'
                    }
                ];
            }
            if (buttonKind === 'first') {
                return [
                    {
                        classes: 'shepherd-button-secondary',
                        text: this.languageService.translate.instant('igo.common.interactiveTour.exitButton'),
                        type: 'cancel'
                    },
                    {
                        classes: 'shepherd-button-primary',
                        text: this.languageService.translate.instant('igo.common.interactiveTour.nextButton'),
                        type: 'next'
                    }
                ];
            }
            if (buttonKind === 'last') {
                return [
                    {
                        classes: 'shepherd-button-secondary',
                        text: this.languageService.translate.instant('igo.common.interactiveTour.backButton'),
                        type: 'back'
                    },
                    {
                        classes: 'shepherd-button-primary',
                        text: this.languageService.translate.instant('igo.common.interactiveTour.exitButton'),
                        type: 'cancel'
                    }
                ];
            }
            return [
                {
                    classes: 'shepherd-button-secondary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.backButton'),
                    type: 'back'
                },
                {
                    classes: 'shepherd-button-primary',
                    text: this.languageService.translate.instant('igo.common.interactiveTour.nextButton'),
                    type: 'next'
                }
            ];
        };
        InteractiveTourService.prototype.getAction = function (actionName) {
            var action = {
                click: 'click'
            };
            return action[actionName.toLowerCase()];
        };
        InteractiveTourService.prototype.addProgress = function () {
            var self = this;
            var nbTry = 0;
            var maxTry = 21;
            var checkExist = setInterval(function () {
                if (self.getCurrentStep()) {
                    if (self.getCurrentStep().options.attachTo.element && !document.querySelector(self.getCurrentStep().options.attachTo.element)) {
                        self.cancel();
                        clearInterval(checkExist);
                        return;
                    }
                    else {
                        var currentStepElement = self.getCurrentStep().getElement();
                        if (currentStepElement) {
                            var shepherdList = currentStepElement.querySelectorAll('.shepherd-content, .shepherd-text');
                            shepherdList.forEach(function (element) {
                                element.classList.add('mat-typography');
                            });
                        }
                        var header = currentStepElement
                            ? currentStepElement.querySelector('.shepherd-header')
                            : undefined;
                        nbTry++;
                        if (header || nbTry > maxTry) {
                            clearInterval(checkExist);
                        }
                        if (header) {
                            var stepsArray = self.steps;
                            var progress = document.createElement('span');
                            progress.className = 'shepherd-progress';
                            progress.innerText = stepsArray.indexOf(self.getCurrentStep()) + 1 + "/" + stepsArray.length;
                            header.insertBefore(progress, currentStepElement.querySelector('.shepherd-cancel-icon'));
                        }
                    }
                }
            }, 100);
        };
        InteractiveTourService.prototype.checkNext = function (index, tour, service) {
            if (tour.getCurrentStep()) {
                if (tour.getCurrentStep().options.attachTo.element && document.querySelector(tour.getCurrentStep().options.attachTo.element)) {
                    tour.complete();
                    return;
                }
                if (index.index === tour.steps.length - 1) {
                    tour.complete();
                    return;
                }
                tour.steps.splice(index.index, 1);
                var nextStep = tour.steps[index.index];
                if (nextStep.options.attachTo.element && !document.querySelector(nextStep.options.attachTo.element)) {
                    service.checkNext(index, tour, service);
                }
                else {
                    tour._setupModal();
                    tour.show(nextStep.id);
                }
            }
        };
        InteractiveTourService.prototype.executeAction = function (step, actionConfig) {
            if (!actionConfig) {
                return;
            }
            if (actionConfig.condition &&
                ((actionConfig.condition.charAt(0) === '!' &&
                    document.querySelector(actionConfig.condition.slice(1))) ||
                    (actionConfig.condition.charAt(0) !== '!' &&
                        !document.querySelector(actionConfig.condition)))) {
                return;
            }
            var element = document.querySelector(actionConfig.element || step.element);
            var action = this.getAction(actionConfig.action);
            if (element && action) {
                element[action]();
            }
        };
        InteractiveTourService.prototype.executeActionPromise = function (step, actionConfig) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.executeAction(step, actionConfig);
                if (!actionConfig || !actionConfig.waitFor) {
                    resolve();
                    return;
                }
                var nbTry = 0;
                var maxTry = actionConfig.maxWait ? actionConfig.maxWait / 100 : 20;
                var checkExist = setInterval(function () {
                    nbTry++;
                    if (nbTry > maxTry || document.querySelector(actionConfig.waitFor)) {
                        clearInterval(checkExist);
                        resolve();
                    }
                }, 100);
            });
        };
        InteractiveTourService.prototype.getShepherdSteps = function (stepConfig) {
            var e_2, _a;
            var _this = this;
            var shepherdSteps = [];
            var i = 0;
            var _loop_1 = function (step) {
                shepherdSteps.push({
                    attachTo: {
                        element: step.element,
                        on: step.position || stepConfig.position
                    },
                    popperOptions: {
                        modifiers: [{ name: 'offset', options: { offset: [0, 15] } }]
                    },
                    beforeShowPromise: function () {
                        return Promise.all([
                            _this.executeActionPromise(_this.previousStep, _this.previousStep ? _this.previousStep.beforeChange : undefined),
                            _this.executeActionPromise(step, step.beforeShow)
                        ]);
                    },
                    buttons: this_1.getButtons(i === 0
                        ? 'first'
                        : i + 1 === stepConfig.steps.length
                            ? 'last'
                            : stepConfig.steps[i].noBackButton
                                ? 'noBackButton'
                                : undefined),
                    classes: step.class,
                    highlightClass: step.highlightClass,
                    scrollTo: step.scrollToElement || stepConfig.scrollToElement || true,
                    canClickTarget: step.disableInteraction
                        ? !step.disableInteraction
                        : undefined,
                    title: this_1.languageService.translate.instant(step.title || stepConfig.title),
                    text: [this_1.languageService.translate.instant(step.text)],
                    when: {
                        show: function () {
                            _this.executeAction(step, step.onShow);
                        },
                        hide: function () {
                            _this.previousStep = step;
                            _this.executeAction(step, step.onHide);
                        }
                    }
                });
                i++;
            };
            var this_1 = this;
            try {
                for (var _b = __values(stepConfig.steps), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var step = _c.value;
                    _loop_1(step);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return shepherdSteps;
        };
        InteractiveTourService.prototype.startTour = function (toolName) {
            var _this = this;
            var stepConfig = this.interactiveTourLoader.getTourOptionData(toolName);
            this.shepherdService.defaultStepOptions = {
                classes: stepConfig.class,
                highlightClass: stepConfig.highlightClass,
                canClickTarget: stepConfig.disableInteraction
                    ? !stepConfig.disableInteraction
                    : true,
                cancelIcon: {
                    enabled: true
                }
            };
            var shepherdSteps = this.getShepherdSteps(stepConfig);
            this.shepherdService.modal = true;
            this.shepherdService.confirmCancel = false;
            this.shepherdService.addSteps(shepherdSteps);
            this.shepherdService.tourObject.on('show', this.addProgress);
            this.shepherdService.tourObject.on('cancel', function (index) {
                _this.checkNext(index, _this.shepherdService.tourObject, _this);
            });
            this.shepherdService.start();
        };
        return InteractiveTourService;
    }());
    InteractiveTourService.ɵfac = function InteractiveTourService_Factory(t) { return new (t || InteractiveTourService)(i0__namespace.ɵɵinject(i1__namespace$2.ConfigService), i0__namespace.ɵɵinject(i1__namespace$2.MediaService), i0__namespace.ɵɵinject(i1__namespace$2.LanguageService), i0__namespace.ɵɵinject(InteractiveTourLoader), i0__namespace.ɵɵinject(i3__namespace$1.ShepherdService)); };
    InteractiveTourService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: InteractiveTourService, factory: InteractiveTourService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InteractiveTourService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1__namespace$2.ConfigService }, { type: i1__namespace$2.MediaService }, { type: i1__namespace$2.LanguageService }, { type: InteractiveTourLoader }, { type: i3__namespace$1.ShepherdService }]; }, null);
    })();

    /**
     * Service where all available tools and their component are registered.
     */
    var Toolbox = /** @class */ (function () {
        function Toolbox(options) {
            if (options === void 0) { options = {}; }
            this.options = options;
            /**
             * Observable of the active tool
             */
            this.activeTool$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Ordered list of tool names to display in a toolbar
             */
            this.toolbar$ = new rxjs.BehaviorSubject([]);
            /**
             * Active tool history. Useful for activating the previous tool.
             */
            this.activeToolHistory = [];
            /**
             * Tool store
             */
            this.store = new EntityStore([], {
                getKey: function (tool) { return tool.name; }
            });
            this.setToolbar(options.toolbar);
            this.initStore();
        }
        Object.defineProperty(Toolbox.prototype, "tools$", {
            get: function () {
                return this.store.entities$;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Destroy the toolbox
         */
        Toolbox.prototype.destroy = function () {
            this.activeTool$$.unsubscribe();
            this.store.destroy();
        };
        /**
         * Return a tool
         * @param name Tool name
         * @returns tool Tool
         */
        Toolbox.prototype.getTool = function (name) {
            return this.store.get(name);
        };
        /**
         * Return all tools
         * @returns Array of tools
         */
        Toolbox.prototype.getTools = function () {
            return this.store.all();
        };
        /**
         * Set tool configurations
         * @param tools Tools
         */
        Toolbox.prototype.setTools = function (tools) {
            this.store.load(tools);
        };
        /**
         * Get toolbar
         * @returns Toolbar value
         */
        Toolbox.prototype.getToolbar = function () {
            return this.toolbar$.getValue();
        };
        /**
         * Set toolbar
         * @param toolbar A list of tool names
         */
        Toolbox.prototype.setToolbar = function (toolbar) {
            this.toolbar$.next(toolbar || []);
        };
        /**
         * Activate a tool (and deactivate other tools)
         * @param name Tool name
         * @param options Tool options
         */
        Toolbox.prototype.activateTool = function (name, options) {
            if (options === void 0) { options = {}; }
            var tool = this.getTool(name);
            if (tool === undefined) {
                return;
            }
            this.store.state.update(tool, { active: true, options: options }, true);
        };
        /**
         * Activate the previous tool, if any
         */
        Toolbox.prototype.activatePreviousTool = function () {
            if (this.activeToolHistory.length <= 1) {
                this.deactivateTool();
                return;
            }
            var _a = __read(this.activeToolHistory.splice(-2, 2), 2), previous = _a[0], current = _a[1];
            this.activateTool(previous);
        };
        /**
         * Activate the tool below, if any
         */
        /* activateBelowTool() {
          const arrayTools = this.getToolbar();
          const index = arrayTools.findIndex(t => t === this.activeTool$.getValue().name);
          if (arrayTools[index + 1] !== undefined) {
            this.deactivateTool();
            const below = arrayTools[index + 1];
            this.activateTool(below);
          } else {
            this.deactivateTool();
            const below = arrayTools[0];
            this.activateTool(below);
          }
        } */
        /**
         * Activate the tool above, if any
         */
        /* activateAboveTool() {
          const arrayTools = this.getToolbar();
          const index = arrayTools.findIndex(t => t === this.activeTool$.getValue().name);
          if (arrayTools[index - 1] !== undefined) {
            this.deactivateTool();
            const above = arrayTools[index - 1];
            this.activateTool(above);
          } else {
            this.deactivateTool();
            const above = arrayTools[arrayTools.length - 1];
            this.activateTool(above);
          }
        } */
        /**
         * Deactivate the active tool
         */
        Toolbox.prototype.deactivateTool = function () {
            this.clearActiveToolHistory();
            this.store.state.updateAll({ active: false });
        };
        /**
         * Initialize the tool store and start observing the active tool
         */
        Toolbox.prototype.initStore = function () {
            var _this = this;
            this.store = new EntityStore([], {
                getKey: function (entity) { return entity.name; }
            });
            this.activeTool$$ = this.store.stateView
                .firstBy$(function (record) { return record.state.active === true; })
                .subscribe(function (record) {
                if (record === undefined) {
                    _this.setActiveTool(undefined);
                    return;
                }
                var tool = record.entity;
                var options = Object.assign({}, tool.options || {}, record.state.options || {});
                _this.setActiveTool(Object.assign({}, tool, { options: options }));
            });
        };
        /**
         * Set the active tool and update the tool history
         * @param tool Tool
         */
        Toolbox.prototype.setActiveTool = function (tool) {
            this.activeTool$.next(tool);
            if (tool === undefined) {
                this.clearActiveToolHistory();
            }
            else {
                this.activeToolHistory = this.activeToolHistory
                    .filter(function (name) { return name !== tool.name; })
                    .concat([tool.name]);
            }
        };
        /**
         * Clear the tool history
         */
        Toolbox.prototype.clearActiveToolHistory = function () {
            this.activeToolHistory = [];
        };
        return Toolbox;
    }());

    /**
     * Service where runtime tool configurations are registered
     */
    var ToolService = /** @class */ (function () {
        function ToolService() {
            /**
             * Toolbox that holds main tools
             */
            this.toolbox = new Toolbox();
            this.toolbox.setTools(this.getTools());
        }
        ToolService.register = function (tool) {
            ToolService.tools[tool.name] = tool;
        };
        /**
         * Return a tool
         * @param name Tool name
         * @returns tool Tool
         */
        ToolService.prototype.getTool = function (name) {
            return ToolService.tools[name];
        };
        /**
         * Return all tools
         * @returns tTols
         */
        ToolService.prototype.getTools = function () {
            return Object.values(ToolService.tools);
        };
        return ToolService;
    }());
    ToolService.tools = {};
    ToolService.ɵfac = function ToolService_Factory(t) { return new (t || ToolService)(); };
    ToolService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ToolService, factory: ToolService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    function InteractiveTourComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 1);
            i0__namespace.ɵɵlistener("click", function InteractiveTourComponent_button_0_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.startInteractiveTour(); });
            i0__namespace.ɵɵelementStart(1, "span", 2);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵpipe(3, "translate");
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵpipe(5, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(6, "mat-icon", 3);
            i0__namespace.ɵɵpipe(7, "translate");
            i0__namespace.ɵɵpipe(8, "translate");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r0.getClass())("disabled", ctx_r0.disabledTourButton);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate2("", i0__namespace.ɵɵpipeBind1(3, 5, "igo.common.interactiveTour.buttonTitle"), " ", i0__namespace.ɵɵpipeBind1(4, 7, i0__namespace.ɵɵpipeBind1(5, 9, ctx_r0.discoverTitleInLocale$)), "");
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("matTooltip", ctx_r0.disabledTourButton ? i0__namespace.ɵɵpipeBind1(7, 11, "igo.common.interactiveTour.disaledTooltipTourToolButton") : i0__namespace.ɵɵpipeBind1(8, 13, "igo.common.interactiveTour.tooltipTourToolButton"));
        }
    }
    var InteractiveTourComponent = /** @class */ (function () {
        function InteractiveTourComponent(interactiveTourService, toolService) {
            this.interactiveTourService = interactiveTourService;
            this.toolService = toolService;
            /**
             * Toolbox that holds main tools
             */
            this.tourToStart = '';
            this.discoverTitleInLocale$ = rxjs.of('IGO');
        }
        InteractiveTourComponent.prototype.getClass = function () {
            return {
                'tour-button-tool-icon': this.styleButton === 'icon',
                'tour-button-tool': this.styleButton === 'raised'
            };
        };
        Object.defineProperty(InteractiveTourComponent.prototype, "toolbox", {
            get: function () {
                return this.toolService.toolbox;
            },
            enumerable: false,
            configurable: true
        });
        InteractiveTourComponent.prototype.getTourToStart = function () {
            if (this.tourToStart) {
                return this.tourToStart;
            }
            else {
                return this.activeToolName;
            }
        };
        Object.defineProperty(InteractiveTourComponent.prototype, "activeToolName", {
            get: function () {
                if (this.toolbox) {
                    if (this.isActiveTool) {
                        return this.toolbox.activeTool$.getValue().name;
                    }
                    else {
                        return 'global';
                    }
                }
                else {
                    return undefined;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InteractiveTourComponent.prototype, "isActiveTool", {
            get: function () {
                if (this.toolbox) {
                    return this.toolbox.activeTool$.getValue() !== undefined;
                }
                else {
                    return undefined;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InteractiveTourComponent.prototype, "isToolHaveTour", {
            get: function () {
                if (this.activeToolName === 'about' && !this.tourToStart) {
                    return false;
                }
                return this.interactiveTourService.isToolHaveTourConfig(this.getTourToStart());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InteractiveTourComponent.prototype, "showTourButton", {
            get: function () {
                // 2 conditions to show: have Tour on tool in Config file and if we are in mobile displayInMobile= true
                var haveTour;
                haveTour = this.isToolHaveTour;
                if (haveTour === false) {
                    return false;
                }
                var inMobileAndShow;
                if (this.interactiveTourService.isMobile()) {
                    inMobileAndShow = this.isTourDisplayInMobile;
                    if (inMobileAndShow === false) {
                        return false;
                    }
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InteractiveTourComponent.prototype, "isTourDisplayInMobile", {
            get: function () {
                return this.interactiveTourService.isTourDisplayInMobile();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InteractiveTourComponent.prototype, "disabledTourButton", {
            get: function () {
                return this.interactiveTourService.disabledTourButton(this.activeToolName);
            },
            enumerable: false,
            configurable: true
        });
        InteractiveTourComponent.prototype.startInteractiveTour = function () {
            var tour = this.getTourToStart();
            if (tour) {
                this.interactiveTourService.startTour(tour);
            }
            else {
                return;
            }
        };
        return InteractiveTourComponent;
    }());
    InteractiveTourComponent.ɵfac = function InteractiveTourComponent_Factory(t) { return new (t || InteractiveTourComponent)(i0__namespace.ɵɵdirectiveInject(InteractiveTourService), i0__namespace.ɵɵdirectiveInject(ToolService)); };
    InteractiveTourComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InteractiveTourComponent, selectors: [["igo-interactive-tour"]], inputs: { tourToStart: "tourToStart", styleButton: "styleButton", discoverTitleInLocale$: "discoverTitleInLocale$" }, decls: 1, vars: 1, consts: [["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "tooltip-position", "below", "matTooltipShowDelay", "500", 3, "ngClass", "disabled", "click"], [1, "interactive-tour-button-title"], ["svgIcon", "presentation-play", 3, "matTooltip"]], template: function InteractiveTourComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, InteractiveTourComponent_button_0_Template, 9, 15, "button", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.showTourButton);
            }
        }, directives: [i1__namespace$1.NgIf, i4__namespace$1.MatButton, i1__namespace$1.NgClass, i5__namespace$1.MatIcon, i6__namespace.MatTooltip], pipes: [i6__namespace$1.TranslatePipe, i1__namespace$1.AsyncPipe], styles: [".shepherd-has-title .shepherd-content .shepherd-header{padding:.5em .75em}.shepherd-title{margin:0!important;font-weight:revert!important}.shepherd-progress{margin-right:15px;color:#737373}.shepherd-text{font-size:14px!important}.shepherd-element{border:1px solid;border-color:#474747;box-shadow:4px 5px #65656599}\n"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InteractiveTourComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-interactive-tour',
                        templateUrl: './interactive-tour.component.html',
                        styleUrls: ['./interactive-tour.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: InteractiveTourService }, { type: ToolService }]; }, { tourToStart: [{
                    type: i0.Input
                }], styleButton: [{
                    type: i0.Input
                }], discoverTitleInLocale$: [{
                    type: i0.Input
                }] });
    })();

    var IgoInteractiveTourModule = /** @class */ (function () {
        function IgoInteractiveTourModule() {
        }
        return IgoInteractiveTourModule;
    }());
    IgoInteractiveTourModule.ɵfac = function IgoInteractiveTourModule_Factory(t) { return new (t || IgoInteractiveTourModule)(); };
    IgoInteractiveTourModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoInteractiveTourModule });
    IgoInteractiveTourModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [InteractiveTourService, InteractiveTourLoader], imports: [[
                i1$1.CommonModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i6.MatTooltipModule,
                i1$2.IgoLanguageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoInteractiveTourModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [InteractiveTourComponent],
                        imports: [
                            i1$1.CommonModule,
                            i5$1.MatIconModule,
                            i4$1.MatButtonModule,
                            i6.MatTooltipModule,
                            i1$2.IgoLanguageModule
                        ],
                        providers: [InteractiveTourService, InteractiveTourLoader],
                        exports: [InteractiveTourComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoInteractiveTourModule, { declarations: [InteractiveTourComponent], imports: [i1$1.CommonModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i6.MatTooltipModule,
                i1$2.IgoLanguageModule], exports: [InteractiveTourComponent] });
    })();

    var KeyValuePipe = /** @class */ (function () {
        function KeyValuePipe() {
        }
        KeyValuePipe.prototype.transform = function (value, args) {
            var keyValues = [];
            Object.getOwnPropertyNames(value).forEach(function (key) { return keyValues.push({ key: key, value: value[key] }); });
            return keyValues;
        };
        return KeyValuePipe;
    }());
    KeyValuePipe.ɵfac = function KeyValuePipe_Factory(t) { return new (t || KeyValuePipe)(); };
    KeyValuePipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "keyvalue", type: KeyValuePipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(KeyValuePipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'keyvalue'
                    }]
            }], null, null);
    })();

    var IgoKeyValueModule = /** @class */ (function () {
        function IgoKeyValueModule() {
        }
        IgoKeyValueModule.forRoot = function () {
            return {
                ngModule: IgoKeyValueModule,
                providers: []
            };
        };
        return IgoKeyValueModule;
    }());
    IgoKeyValueModule.ɵfac = function IgoKeyValueModule_Factory(t) { return new (t || IgoKeyValueModule)(); };
    IgoKeyValueModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoKeyValueModule });
    IgoKeyValueModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoKeyValueModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [KeyValuePipe],
                        exports: [KeyValuePipe]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoKeyValueModule, { declarations: [KeyValuePipe], exports: [KeyValuePipe] }); })();

    function JsonDialogComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainer(0);
        }
    }
    var _c0$5 = function (a0, a1) { return { obj: a0, baseKey: a1 }; };
    function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var property_r6 = i0__namespace.ɵɵnextContext(2).$implicit;
            var baseKey_r4 = i0__namespace.ɵɵnextContext().baseKey;
            var ctx_r8 = i0__namespace.ɵɵnextContext();
            var _r1 = i0__namespace.ɵɵreference(5);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction2(2, _c0$5, property_r6.value, ctx_r8.getKey(baseKey_r4, property_r6.key)));
        }
    }
    function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p");
            i0__namespace.ɵɵelementStart(1, "span");
            i0__namespace.ɵɵelementStart(2, "b");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4, " : ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "span", 10);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var property_r6 = i0__namespace.ɵɵnextContext(2).$implicit;
            var baseKey_r4 = i0__namespace.ɵɵnextContext().baseKey;
            var ctx_r10 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r10.getKey(baseKey_r4, property_r6.key));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("innerHtml", property_r6.value, i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 8);
            i0__namespace.ɵɵtemplate(2, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_ng_template_2_Template, 6, 2, "ng-template", null, 9, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r9 = i0__namespace.ɵɵreference(3);
            var property_r6 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r7 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r7.isObject(property_r6.value))("ngIfElse", _r9);
        }
    }
    function JsonDialogComponent_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, JsonDialogComponent_ng_template_4_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 7);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var property_r6 = ctx.$implicit;
            var baseKey_r4 = i0__namespace.ɵɵnextContext().baseKey;
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r5.ignoreKeys.indexOf(ctx_r5.getKey(baseKey_r4, property_r6.key)) === -1);
        }
    }
    function JsonDialogComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, JsonDialogComponent_ng_template_4_ng_container_0_Template, 2, 1, "ng-container", 6);
            i0__namespace.ɵɵpipe(1, "keyvalue");
        }
        if (rf & 2) {
            var obj_r3 = ctx.obj;
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind1(1, 1, obj_r3));
        }
    }
    var _c1$3 = function (a0) { return { obj: a0 }; };
    var JsonDialogComponent = /** @class */ (function () {
        function JsonDialogComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        JsonDialogComponent.prototype.isObject = function (val) {
            return typeof val === 'object' && !Array.isArray(val);
        };
        JsonDialogComponent.prototype.getKey = function (baseKey, key) {
            return (baseKey ? baseKey + '.' : '') + key;
        };
        return JsonDialogComponent;
    }());
    JsonDialogComponent.ɵfac = function JsonDialogComponent_Factory(t) { return new (t || JsonDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$8.MatDialogRef)); };
    JsonDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: JsonDialogComponent, selectors: [["igo-json-dialog"]], decls: 9, vars: 5, consts: [["mat-dialog-title", "", 1, "mat-typography"], ["mat-dialog-content", "", 1, "mat-typography"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["loopObject", ""], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notObject", ""], [1, "propertyValue", 3, "innerHtml"]], template: function JsonDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵtemplate(3, JsonDialogComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
                i0__namespace.ɵɵtemplate(4, JsonDialogComponent_ng_template_4_Template, 2, 3, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "div", 4);
                i0__namespace.ɵɵelementStart(7, "button", 5);
                i0__namespace.ɵɵlistener("click", function JsonDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(false); });
                i0__namespace.ɵɵtext(8, " OK ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(5);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.title);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(3, _c1$3, ctx.data));
            }
        }, directives: [i1__namespace$8.MatDialogTitle, i1__namespace$8.MatDialogContent, i1__namespace$1.NgTemplateOutlet, i1__namespace$8.MatDialogActions, i4__namespace$1.MatButton, i1__namespace$1.NgForOf, i1__namespace$1.NgIf], pipes: [KeyValuePipe], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(JsonDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-json-dialog',
                        templateUrl: './json-dialog.component.html'
                    }]
            }], function () { return [{ type: i1__namespace$8.MatDialogRef }]; }, null);
    })();

    var JsonDialogService = /** @class */ (function () {
        function JsonDialogService(dialog) {
            this.dialog = dialog;
        }
        JsonDialogService.prototype.open = function (title, data, ignoreKeys) {
            var dialogRef = this.dialog.open(JsonDialogComponent, {
                disableClose: false
            });
            dialogRef.componentInstance.data = data;
            dialogRef.componentInstance.title = title;
            dialogRef.componentInstance.ignoreKeys = ignoreKeys;
            return dialogRef.afterClosed();
        };
        return JsonDialogService;
    }());
    JsonDialogService.ɵfac = function JsonDialogService_Factory(t) { return new (t || JsonDialogService)(i0__namespace.ɵɵinject(i1__namespace$8.MatDialog)); };
    JsonDialogService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: JsonDialogService, factory: JsonDialogService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(JsonDialogService, [{
                type: i0.Injectable
            }], function () { return [{ type: i1__namespace$8.MatDialog }]; }, null);
    })();

    var IgoJsonDialogModule = /** @class */ (function () {
        function IgoJsonDialogModule() {
        }
        IgoJsonDialogModule.forRoot = function () {
            return {
                ngModule: IgoJsonDialogModule
            };
        };
        return IgoJsonDialogModule;
    }());
    IgoJsonDialogModule.ɵfac = function IgoJsonDialogModule_Factory(t) { return new (t || IgoJsonDialogModule)(); };
    IgoJsonDialogModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoJsonDialogModule });
    IgoJsonDialogModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [JsonDialogService], imports: [[i1$1.CommonModule, i4$1.MatButtonModule, i1$8.MatDialogModule, IgoKeyValueModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoJsonDialogModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule, i4$1.MatButtonModule, i1$8.MatDialogModule, IgoKeyValueModule],
                        exports: [JsonDialogComponent],
                        declarations: [JsonDialogComponent],
                        providers: [JsonDialogService]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoJsonDialogModule, { declarations: [JsonDialogComponent], imports: [i1$1.CommonModule, i4$1.MatButtonModule, i1$8.MatDialogModule, IgoKeyValueModule], exports: [JsonDialogComponent] }); })();

    var ListItemDirective = /** @class */ (function () {
        function ListItemDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this._color = 'primary';
            this._focused = false;
            this._selected = false;
            this._disabled = false;
            this.beforeSelect = new i0.EventEmitter();
            this.beforeFocus = new i0.EventEmitter();
            this.beforeUnselect = new i0.EventEmitter();
            this.beforeUnfocus = new i0.EventEmitter();
            this.beforeDisable = new i0.EventEmitter();
            this.beforeEnable = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.unfocus = new i0.EventEmitter();
            this.select = new i0.EventEmitter();
            this.unselect = new i0.EventEmitter();
            this.disable = new i0.EventEmitter();
            this.enable = new i0.EventEmitter();
        }
        Object.defineProperty(ListItemDirective.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemDirective.prototype, "focused", {
            get: function () {
                return this._focused;
            },
            set: function (value) {
                if (value === this._focused) {
                    return;
                }
                if (this.disabled) {
                    return;
                }
                value ? this.beforeFocus.emit(this) : this.beforeUnfocus.emit(this);
                this._focused = value;
                if (this.selected !== true) {
                    this.toggleFocusedClass();
                }
                value ? this.focus.emit(this) : this.unfocus.emit(this);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemDirective.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                if (value === this._selected) {
                    return;
                }
                if (this.disabled) {
                    return;
                }
                value ? this.beforeSelect.emit(this) : this.beforeUnselect.emit(this);
                this._selected = value;
                this._focused = value;
                this.toggleSelectedClass();
                value ? this.select.emit(this) : this.unselect.emit(this);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListItemDirective.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                if (value === this._disabled) {
                    return;
                }
                if (value === true) {
                    this.selected = false;
                }
                value ? this.beforeDisable.emit(this) : this.beforeEnable.emit(this);
                this._disabled = value;
                this.toggleDisabledClass();
                value ? this.disable.emit(this) : this.enable.emit(this);
            },
            enumerable: false,
            configurable: true
        });
        ListItemDirective.prototype.onClick = function () {
            this.selected = true;
        };
        ListItemDirective.prototype.getOffsetTop = function () {
            var padding = 5;
            return this.el.nativeElement.offsetTop - padding;
        };
        ListItemDirective.prototype.toggleFocusedClass = function () {
            if (this.focused) {
                this.addCls(ListItemDirective.focusedCls);
            }
            else {
                this.removeCls(ListItemDirective.focusedCls);
            }
        };
        ListItemDirective.prototype.toggleSelectedClass = function () {
            if (this.selected) {
                this.addCls(ListItemDirective.selectedCls);
                this.removeCls(ListItemDirective.focusedCls);
            }
            else {
                this.removeCls(ListItemDirective.selectedCls);
            }
        };
        ListItemDirective.prototype.toggleDisabledClass = function () {
            if (this.disabled) {
                this.addCls(ListItemDirective.disabledCls);
            }
            else {
                this.removeCls(ListItemDirective.disabledCls);
            }
        };
        ListItemDirective.prototype.addCls = function (cls) {
            this.renderer.addClass(this.el.nativeElement, cls);
        };
        ListItemDirective.prototype.removeCls = function (cls) {
            this.renderer.removeClass(this.el.nativeElement, cls);
        };
        return ListItemDirective;
    }());
    ListItemDirective.focusedCls = 'igo-list-item-focused';
    ListItemDirective.selectedCls = 'igo-list-item-selected';
    ListItemDirective.disabledCls = 'igo-list-item-disabled';
    ListItemDirective.ɵfac = function ListItemDirective_Factory(t) { return new (t || ListItemDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    ListItemDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: ListItemDirective, selectors: [["", "igoListItem", ""]], hostBindings: function ListItemDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("click", function ListItemDirective_click_HostBindingHandler() { return ctx.onClick(); });
            }
        }, inputs: { color: "color", focused: "focused", selected: "selected", disabled: "disabled" }, outputs: { beforeSelect: "beforeSelect", beforeFocus: "beforeFocus", beforeUnselect: "beforeUnselect", beforeUnfocus: "beforeUnfocus", beforeDisable: "beforeDisable", beforeEnable: "beforeEnable", focus: "focus", unfocus: "unfocus", select: "select", unselect: "unselect", disable: "disable", enable: "enable" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListItemDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoListItem]'
                    }]
            }], function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }]; }, { color: [{
                    type: i0.Input
                }], focused: [{
                    type: i0.Input
                }], selected: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], beforeSelect: [{
                    type: i0.Output
                }], beforeFocus: [{
                    type: i0.Output
                }], beforeUnselect: [{
                    type: i0.Output
                }], beforeUnfocus: [{
                    type: i0.Output
                }], beforeDisable: [{
                    type: i0.Output
                }], beforeEnable: [{
                    type: i0.Output
                }], focus: [{
                    type: i0.Output
                }], unfocus: [{
                    type: i0.Output
                }], select: [{
                    type: i0.Output
                }], unselect: [{
                    type: i0.Output
                }], disable: [{
                    type: i0.Output
                }], enable: [{
                    type: i0.Output
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var _c0$4 = function (a0) { return { "selectable": a0 }; };
    var _c1$2 = ["*"];
    var ListComponent = /** @class */ (function () {
        function ListComponent(el) {
            this.el = el;
            this._navigation = true;
            this._selection = true;
            this.subscriptions = [];
        }
        Object.defineProperty(ListComponent.prototype, "navigation", {
            get: function () {
                return this._navigation;
            },
            set: function (value) {
                this._navigation = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListComponent.prototype, "selection", {
            get: function () {
                return this._selection;
            },
            set: function (value) {
                this._selection = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListComponent.prototype, "selectedItem", {
            get: function () {
                return this._selectedItem;
            },
            set: function (value) {
                this.focusedItem = value;
                this._selectedItem = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListComponent.prototype, "focusedItem", {
            get: function () {
                return this._focusedItem;
            },
            set: function (value) {
                this._focusedItem = value;
            },
            enumerable: false,
            configurable: true
        });
        ListComponent.prototype.handleKeyboardEvent = function (event) {
            // It would be nice to be able to unsubscribe to the event
            // completely but until ES7 this won't be possible because
            // document events are not observables
            if (this.navigationEnabled) {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    this.navigate(event.key);
                }
                else if (event.key === 'Enter') {
                    this.select(this.focusedItem);
                }
            }
        };
        ListComponent.prototype.ngOnInit = function () {
            this.enableNavigation();
        };
        ListComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.listItems.length) {
                this.init();
            }
            this.listItems$$ = this.listItems.changes.subscribe(function (items) { return _this.init(); });
        };
        ListComponent.prototype.ngOnDestroy = function () {
            this.listItems$$.unsubscribe();
        };
        ListComponent.prototype.focus = function (item) {
            if (!this.selection) {
                return;
            }
            this.unfocus();
            // We need to make this check because dynamic
            // lists such as in the search results list may fail
            if (item !== undefined) {
                item.focused = true;
            }
        };
        ListComponent.prototype.unfocus = function () {
            if (this.focusedItem !== undefined) {
                this.focusedItem.focused = false;
            }
            this.focusedItem = undefined;
        };
        ListComponent.prototype.focusNext = function () {
            var items = this.listItems.toArray();
            var item;
            var igoList = this.el.nativeElement;
            var disabled = true;
            var index = this.getFocusedIndex();
            if (index === undefined) {
                index = -1;
            }
            while (disabled && index < items.length - 1) {
                index += 1;
                item = items[index];
                disabled = item.disabled;
            }
            if (item !== undefined) {
                this.focus(item);
            }
            if (!items[index + 1]) {
                igoList.scrollTop = igoList.scrollHeight - igoList.clientHeight;
                return;
            }
            if (item !== undefined && !this.isScrolledIntoView(item.el.nativeElement)) {
                igoList.scrollTop =
                    item.el.nativeElement.offsetTop +
                        item.el.nativeElement.children[0].offsetHeight -
                        igoList.clientHeight;
            }
        };
        ListComponent.prototype.focusPrevious = function () {
            var items = this.listItems.toArray();
            var item;
            var igoList = this.el.nativeElement;
            var disabled = true;
            var index = this.getFocusedIndex();
            while (disabled && index > 0) {
                index -= 1;
                item = items[index];
                disabled = item.disabled;
            }
            if (item !== undefined) {
                this.focus(item);
            }
            if (!items[index - 1]) {
                igoList.scrollTop = 0;
                return;
            }
            if (item !== undefined && !this.isScrolledIntoView(item.el.nativeElement)) {
                var padding = 3;
                igoList.scrollTop = item.el.nativeElement.offsetTop - padding;
            }
        };
        ListComponent.prototype.select = function (item) {
            if (!this.selection) {
                return;
            }
            this.unselect();
            if (item !== undefined) {
                item.selected = true;
            }
        };
        ListComponent.prototype.unselect = function () {
            this.unfocus();
            if (this.selectedItem !== undefined) {
                this.selectedItem.selected = false;
            }
            this.selectedItem = undefined;
        };
        ListComponent.prototype.enableNavigation = function () {
            if (this.navigation) {
                this.navigationEnabled = true;
            }
        };
        ListComponent.prototype.disableNavigation = function () {
            this.navigationEnabled = false;
        };
        ListComponent.prototype.scrollToItem = function (item) {
            this.el.nativeElement.scrollTop = item.getOffsetTop();
        };
        ListComponent.prototype.isScrolledIntoView = function (elem) {
            var docViewTop = this.el.nativeElement.scrollTop + this.el.nativeElement.offsetTop;
            var docViewBottom = docViewTop + this.el.nativeElement.clientHeight;
            var elemTop = elem.offsetTop;
            var elemBottom = elemTop + elem.children[0].offsetHeight;
            return elemBottom <= docViewBottom && elemTop >= docViewTop;
        };
        ListComponent.prototype.init = function () {
            this.subscribe();
            this.selectedItem = this.findSelectedItem();
            this.focusedItem = this.findFocusedItem();
            this.enableNavigation();
        };
        ListComponent.prototype.subscribe = function () {
            var _this = this;
            this.unsubscribe();
            this.listItems.toArray().forEach(function (item) {
                _this.subscriptions.push(item.beforeSelect.subscribe(function (item2) { return _this.handleItemBeforeSelect(item2); }));
                _this.subscriptions.push(item.select.subscribe(function (item2) { return _this.handleItemSelect(item2); }));
                _this.subscriptions.push(item.beforeFocus.subscribe(function (item2) { return _this.handleItemBeforeFocus(item2); }));
                _this.subscriptions.push(item.focus.subscribe(function (item2) { return _this.handleItemFocus(item2); }));
            }, this);
        };
        ListComponent.prototype.unsubscribe = function () {
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            this.subscriptions = [];
        };
        ListComponent.prototype.handleItemBeforeFocus = function (item) {
            if (item !== this.focusedItem) {
                this.unfocus();
            }
        };
        ListComponent.prototype.handleItemFocus = function (item) {
            this.focusedItem = item;
        };
        ListComponent.prototype.handleItemBeforeSelect = function (item) {
            if (item !== this.focusedItem) {
                this.unselect();
            }
        };
        ListComponent.prototype.handleItemSelect = function (item) {
            this.selectedItem = item;
        };
        ListComponent.prototype.findSelectedItem = function () {
            return this.listItems.toArray().find(function (item) { return item.selected; });
        };
        ListComponent.prototype.findFocusedItem = function () {
            return this.listItems.toArray().find(function (item) { return item.focused; });
        };
        ListComponent.prototype.getFocusedIndex = function () {
            var _this = this;
            return this.listItems
                .toArray()
                .findIndex(function (item) { return item === _this.focusedItem; });
        };
        ListComponent.prototype.navigate = function (key) {
            switch (key) {
                case 'ArrowUp':
                    this.focusPrevious();
                    break;
                case 'ArrowDown':
                    this.focusNext();
                    break;
                default:
                    break;
            }
        };
        return ListComponent;
    }());
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    ListComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ListComponent, selectors: [["igo-list"]], contentQueries: function ListComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0__namespace.ɵɵcontentQuery(dirIndex, ListItemDirective, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.listItems = _t);
            }
        }, hostBindings: function ListComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("keydown", function ListComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0__namespace.ɵɵresolveDocument)("enter", function ListComponent_enter_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, i0__namespace.ɵɵresolveDocument);
            }
        }, inputs: { navigation: "navigation", selection: "selection" }, ngContentSelectors: _c1$2, decls: 2, vars: 3, consts: [["igoClickout", "", 3, "ngClass", "clickout", "click"]], template: function ListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "mat-list", 0);
                i0__namespace.ɵɵlistener("clickout", function ListComponent_Template_mat_list_clickout_0_listener() { return ctx.disableNavigation(); })("click", function ListComponent_Template_mat_list_click_0_listener() { return ctx.enableNavigation(); });
                i0__namespace.ɵɵprojection(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(1, _c0$4, ctx.selection));
            }
        }, directives: [i1__namespace$6.MatList, ClickoutDirective, i1__namespace$1.NgClass], styles: ["[_nghost-%COMP%]{display:block;height:100%;overflow:auto;position:relative}mat-list[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]{position:static}[_nghost-%COMP%]     .mat-list .mat-list-item .mat-list-text>*{white-space:normal;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;max-height:36px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:2}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content{display:-webkit-flex;height:46px;padding:3px}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar{height:46px}[_nghost-%COMP%]     .mat-list   igo-collapsible>.mat-list-item>.mat-list-item-content>.mat-list-text>.mat-line{font-weight:bold;opacity:.9}[_nghost-%COMP%]     .mat-list .mat-list-item.mat-list-item-avatar .mat-list-item-content>mat-icon{padding:8px}[_nghost-%COMP%]     [igolistitem] mat-list-item [mat-list-avatar]{height:auto;width:40px}[_nghost-%COMP%]   mat-list.selectable[_ngcontent-%COMP%]     [igolistitem]:not(.igo-list-item-disabled) mat-list-item:hover{cursor:pointer}[_nghost-%COMP%]     [igolistitem]:focus{outline:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-list',
                        templateUrl: './list.component.html',
                        styleUrls: ['./list.component.scss']
                    }]
            }], function () { return [{ type: i0__namespace.ElementRef }]; }, { navigation: [{
                    type: i0.Input
                }], selection: [{
                    type: i0.Input
                }], listItems: [{
                    type: i0.ContentChildren,
                    args: [ListItemDirective, { descendants: true }]
                }], handleKeyboardEvent: [{
                    type: i0.HostListener,
                    args: ['document:keydown', ['$event']]
                }, {
                    type: i0.HostListener,
                    args: ['document:enter', ['$event']]
                }] });
    })();

    var IgoListModule = /** @class */ (function () {
        function IgoListModule() {
        }
        IgoListModule.forRoot = function () {
            return {
                ngModule: IgoListModule,
                providers: []
            };
        };
        return IgoListModule;
    }());
    IgoListModule.ɵfac = function IgoListModule_Factory(t) { return new (t || IgoListModule)(); };
    IgoListModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoListModule });
    IgoListModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i5$1.MatIconModule, i1$6.MatListModule, IgoClickoutModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoListModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule, i5$1.MatIconModule, i1$6.MatListModule, IgoClickoutModule],
                        declarations: [ListItemDirective, ListComponent],
                        exports: [ListItemDirective, ListComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoListModule, { declarations: [ListItemDirective, ListComponent], imports: [i1$1.CommonModule, i5$1.MatIconModule, i1$6.MatListModule, IgoClickoutModule], exports: [ListItemDirective, ListComponent] }); })();

    function PanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "h3");
            i0__namespace.ɵɵprojection(2, 1);
            i0__namespace.ɵɵelementStart(3, "div", 3);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵprojection(5, 2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵprojection(6, 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
        }
    }
    var _c0$3 = ["*", [["", "panelLeftButton", ""]], [["", "panelHeader", ""]], [["", "panelRightButton", ""]]];
    var _c1$1 = ["*", "[panelLeftButton]", "[panelHeader]", "[panelRightButton]"];
    var PanelComponent = /** @class */ (function () {
        function PanelComponent() {
            this._withHeader = true;
        }
        Object.defineProperty(PanelComponent.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PanelComponent.prototype, "withHeader", {
            get: function () {
                return this._withHeader;
            },
            set: function (value) {
                this._withHeader = value;
            },
            enumerable: false,
            configurable: true
        });
        return PanelComponent;
    }());
    PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
    PanelComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PanelComponent, selectors: [["igo-panel"]], hostVars: 2, hostBindings: function PanelComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("igo-panel-with-header", ctx.withHeader);
            }
        }, inputs: { title: "title", withHeader: "withHeader" }, ngContentSelectors: _c1$1, decls: 3, vars: 1, consts: [["class", "igo-panel-header mat-typography", "title", "", 4, "ngIf"], ["title", "", 1, "igo-panel-content"], ["title", "", 1, "igo-panel-header", "mat-typography"], [1, "igo-panel-title"]], template: function PanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef(_c0$3);
                i0__namespace.ɵɵtemplate(0, PanelComponent_div_0_Template, 7, 1, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵprojection(2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.withHeader);
            }
        }, directives: [i1__namespace$1.NgIf], styles: ["[_nghost-%COMP%]{display:block}.igo-panel-header[_ngcontent-%COMP%]{height:46px;padding:3px;text-align:center}.igo-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;height:40px}.igo-panel-header[_ngcontent-%COMP%]     [panelleftbutton]{float:left;margin-right:-40px}.igo-panel-header[_ngcontent-%COMP%]     [panelrightbutton]{float:right}.igo-panel-content[_ngcontent-%COMP%]{overflow:auto}.igo-panel-with-header[_nghost-%COMP%]   .igo-panel-content[_ngcontent-%COMP%]{height:calc(100% - 46px)}[_nghost-%COMP%]:not(.igo-panel-with-header)   .igo-panel-content[_ngcontent-%COMP%]{height:100%}.igo-panel-title[_ngcontent-%COMP%]{display:block;width:calc(100% - 80px);margin-left:40px;height:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;line-height:40px;float:left;font-weight:bold;font-size:1.17em}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-panel',
                        templateUrl: './panel.component.html',
                        styleUrls: ['./panel.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], withHeader: [{
                    type: i0.Input
                }, {
                    type: i0.HostBinding,
                    args: ['class.igo-panel-with-header']
                }] });
    })();

    var IgoPanelModule = /** @class */ (function () {
        function IgoPanelModule() {
        }
        return IgoPanelModule;
    }());
    IgoPanelModule.ɵfac = function IgoPanelModule_Factory(t) { return new (t || IgoPanelModule)(); };
    IgoPanelModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoPanelModule });
    IgoPanelModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoPanelModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule],
                        exports: [PanelComponent],
                        declarations: [PanelComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoPanelModule, { declarations: [PanelComponent], imports: [i1$1.CommonModule], exports: [PanelComponent] }); })();

    /**
     * <igoSidenavShim> directive.
     *
     * This directive prevents a material sidenav with mode="side"
     * from focusing an element after it's closed
     */
    var SidenavShimDirective = /** @class */ (function () {
        function SidenavShimDirective(component, renderer) {
            this.renderer = renderer;
        }
        SidenavShimDirective.prototype.onOpen = function () {
            this.focusedElement = document.activeElement;
        };
        SidenavShimDirective.prototype.onCloseStart = function () {
            var focusedElement = document.activeElement;
            if (focusedElement !== this.focusedElement) {
                this.blurElement = this.focusedElement;
            }
            else {
                this.blurElement = undefined;
            }
        };
        SidenavShimDirective.prototype.onClose = function () {
            if (this.blurElement) {
                this.renderer.selectRootElement(this.blurElement).blur();
            }
            this.blurElement = undefined;
            this.focusedElement = undefined;
        };
        return SidenavShimDirective;
    }());
    SidenavShimDirective.ɵfac = function SidenavShimDirective_Factory(t) { return new (t || SidenavShimDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace$9.MatSidenav, 2), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    SidenavShimDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: SidenavShimDirective, selectors: [["", "igoSidenavShim", ""]], hostBindings: function SidenavShimDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("open", function SidenavShimDirective_open_HostBindingHandler($event) { return ctx.onOpen($event); })("close-start", function SidenavShimDirective_close_start_HostBindingHandler($event) { return ctx.onCloseStart($event); })("close", function SidenavShimDirective_close_HostBindingHandler($event) { return ctx.onClose($event); });
            }
        } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavShimDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoSidenavShim]'
                    }]
            }], function () {
            return [{ type: i1__namespace$9.MatSidenav, decorators: [{
                            type: i0.Self
                        }] }, { type: i0__namespace.Renderer2 }];
        }, { onOpen: [{
                    type: i0.HostListener,
                    args: ['open', ['$event']]
                }], onCloseStart: [{
                    type: i0.HostListener,
                    args: ['close-start', ['$event']]
                }], onClose: [{
                    type: i0.HostListener,
                    args: ['close', ['$event']]
                }] });
    })();

    var IgoSidenavModule = /** @class */ (function () {
        function IgoSidenavModule() {
        }
        IgoSidenavModule.forRoot = function () {
            return {
                ngModule: IgoSidenavModule,
                providers: []
            };
        };
        return IgoSidenavModule;
    }());
    IgoSidenavModule.ɵfac = function IgoSidenavModule_Factory(t) { return new (t || IgoSidenavModule)(); };
    IgoSidenavModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoSidenavModule });
    IgoSidenavModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoSidenavModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [SidenavShimDirective],
                        exports: [SidenavShimDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoSidenavModule, { declarations: [SidenavShimDirective], exports: [SidenavShimDirective] }); })();

    var _c0$2 = function (a1) { return { "igo-spinner-container": true, "igo-spinner-shown": a1 }; };
    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
            this.shown$ = new rxjs.BehaviorSubject(false);
        }
        Object.defineProperty(SpinnerComponent.prototype, "shown", {
            get: function () { return this.shown$.value; },
            set: function (value) { this.shown$.next(value); },
            enumerable: false,
            configurable: true
        });
        SpinnerComponent.prototype.show = function () {
            this.shown = true;
        };
        SpinnerComponent.prototype.hide = function () {
            this.shown = false;
        };
        return SpinnerComponent;
    }());
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
    SpinnerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SpinnerComponent, selectors: [["igo-spinner"]], inputs: { shown: "shown" }, decls: 4, vars: 5, consts: [[3, "ngClass"], [1, "igo-spinner-background"], ["diameter", "40", "mode", "indeterminate"]], template: function SpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵpipe(1, "async");
                i0__namespace.ɵɵelement(2, "div", 1);
                i0__namespace.ɵɵelement(3, "mat-progress-spinner", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(3, _c0$2, i0__namespace.ɵɵpipeBind1(1, 1, ctx.shown$)));
            }
        }, directives: [i1__namespace$1.NgClass, i2__namespace$4.MatProgressSpinner], pipes: [i1__namespace$1.AsyncPipe], styles: [".igo-spinner-container[_ngcontent-%COMP%]{display:none;pointer-events:none}.igo-spinner-container.igo-spinner-shown[_ngcontent-%COMP%]{display:block}mat-progress-spinner[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%}.igo-spinner-background[_ngcontent-%COMP%]{height:36px;width:36px;border-radius:50%;border:4px solid #ffffff;position:absolute;top:2px;left:2px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-spinner',
                        templateUrl: './spinner.component.html',
                        styleUrls: ['./spinner.component.scss']
                    }]
            }], function () { return []; }, { shown: [{
                    type: i0.Input
                }] });
    })();

    /**
     * A directive to bind a SpinnerComponent to the activity service.
     * The activity service tracks any HTTP request and this directive
     * will display the spinner it's attached to when the activity counter
     * is greater than 0.
     */
    var SpinnerActivityDirective = /** @class */ (function () {
        function SpinnerActivityDirective(spinner, activityService) {
            this.spinner = spinner;
            this.activityService = activityService;
        }
        /**
         * Subscribe to the activity service counter and display the spinner
         * when it's is greater than 0.
         * @internal
         */
        SpinnerActivityDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.counter$$ = this.activityService.counter$
                .pipe(operators.debounceTime(50))
                .subscribe(function (count) {
                count > 0 ? _this.spinner.show() : _this.spinner.hide();
            });
        };
        /**
         * Unsubcribe to the activity service counter.
         * @internal
         */
        SpinnerActivityDirective.prototype.ngOnDestroy = function () {
            this.counter$$.unsubscribe();
        };
        return SpinnerActivityDirective;
    }());
    SpinnerActivityDirective.ɵfac = function SpinnerActivityDirective_Factory(t) { return new (t || SpinnerActivityDirective)(i0__namespace.ɵɵdirectiveInject(SpinnerComponent, 2), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.ActivityService)); };
    SpinnerActivityDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: SpinnerActivityDirective, selectors: [["", "igoSpinnerActivity", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SpinnerActivityDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[igoSpinnerActivity]'
                    }]
            }], function () {
            return [{ type: SpinnerComponent, decorators: [{
                            type: i0.Self
                        }] }, { type: i1__namespace$2.ActivityService }];
        }, null);
    })();

    var IgoSpinnerModule = /** @class */ (function () {
        function IgoSpinnerModule() {
        }
        return IgoSpinnerModule;
    }());
    IgoSpinnerModule.ɵfac = function IgoSpinnerModule_Factory(t) { return new (t || IgoSpinnerModule)(); };
    IgoSpinnerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoSpinnerModule });
    IgoSpinnerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2$4.MatProgressSpinnerModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoSpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule, i2$4.MatProgressSpinnerModule],
                        declarations: [SpinnerActivityDirective, SpinnerComponent],
                        exports: [SpinnerActivityDirective, SpinnerComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoSpinnerModule, { declarations: [SpinnerActivityDirective, SpinnerComponent], imports: [i1$1.CommonModule, i2$4.MatProgressSpinnerModule], exports: [SpinnerActivityDirective, SpinnerComponent] }); })();

    var TableDataSource = /** @class */ (function (_super) {
        __extends(TableDataSource, _super);
        function TableDataSource(_database, _model, _sort) {
            var _this = _super.call(this) || this;
            _this._database = _database;
            _this._model = _model;
            _this._sort = _sort;
            _this._filterChange = new rxjs.BehaviorSubject('');
            return _this;
        }
        Object.defineProperty(TableDataSource.prototype, "filter", {
            get: function () {
                return this._filterChange.value;
            },
            set: function (filter) {
                this._filterChange.next(filter);
            },
            enumerable: false,
            configurable: true
        });
        // Connect function called by the table to retrieve one stream containing
        // the data to render.
        TableDataSource.prototype.connect = function () {
            var _this = this;
            if (!this._database) {
                return rxjs.merge([]);
            }
            var displayDataChanges = [
                this._database.dataChange,
                this._filterChange,
                this._sort.sortChange
            ];
            return rxjs.merge.apply(void 0, __spreadArray([], __read(displayDataChanges))).pipe(operators.map(function () {
                return _this.getFilteredData(_this._database.data);
            }), operators.map(function (data) {
                return _this.getSortedData(data);
            }));
        };
        TableDataSource.prototype.disconnect = function () { };
        TableDataSource.prototype.getFilteredData = function (data) {
            var _this = this;
            if (!this.filter) {
                return data;
            }
            return data.slice().filter(function (item) {
                var searchStr = _this._model.columns
                    .filter(function (c) { return c.filterable; })
                    .map(function (c) { return utils.ObjectUtils.resolve(item, c.name); })
                    .join(' ')
                    .toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
        };
        TableDataSource.prototype.getSortedData = function (data) {
            var _this = this;
            if (!this._sort.active || this._sort.direction === '') {
                return data;
            }
            return data.sort(function (a, b) {
                var propertyA = utils.ObjectUtils.resolve(a, _this._sort.active);
                var propertyB = utils.ObjectUtils.resolve(b, _this._sort.active);
                return utils.ObjectUtils.naturalCompare(propertyB, propertyA, _this._sort.direction);
            });
        };
        return TableDataSource;
    }(table.DataSource));

    exports.TableActionColor = void 0;
    (function (TableActionColor) {
        TableActionColor[TableActionColor["primary"] = 0] = "primary";
        TableActionColor[TableActionColor["accent"] = 1] = "accent";
        TableActionColor[TableActionColor["warn"] = 2] = "warn";
    })(exports.TableActionColor || (exports.TableActionColor = {}));

    var _c0$1 = ["filter"];
    function TableComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 12);
            i0__namespace.ɵɵelementStart(1, "mat-form-field", 13);
            i0__namespace.ɵɵelement(2, "input", 14, 15);
            i0__namespace.ɵɵpipe(4, "translate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("placeholder", i0__namespace.ɵɵpipeBind1(4, 1, "igo.common.table.filter"));
        }
    }
    function TableComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "th", 16);
            i0__namespace.ɵɵelementStart(1, "mat-checkbox", 17);
            i0__namespace.ɵɵlistener("change", function TableComponent_th_6_Template_mat_checkbox_change_1_listener($event) { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r10 = i0__namespace.ɵɵnextContext(); return $event ? ctx_r10.masterToggle() : null; });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
        }
    }
    function TableComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "td", 18);
            i0__namespace.ɵɵelementStart(1, "mat-checkbox", 19);
            i0__namespace.ɵɵlistener("click", function TableComponent_td_7_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TableComponent_td_7_Template_mat_checkbox_change_1_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r15_1); var row_r12 = restoredCtx.$implicit; var ctx_r14 = i0__namespace.ɵɵnextContext(); return $event ? ctx_r14.selection.toggle(row_r12) : null; });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r12 = ctx.$implicit;
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", ctx_r3.selection.isSelected(row_r12));
        }
    }
    function TableComponent_ng_container_8_ng_container_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 25);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r16 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", column_r16.title, " ");
        }
    }
    function TableComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_1_th_1_Template, 2, 1, "th", 24);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_8_ng_container_2_th_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 16);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var column_r16 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", column_r16.title, " ");
        }
    }
    function TableComponent_ng_container_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_2_th_1_Template, 2, 1, "th", 6);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    var _c1 = function () { return {}; };
    function TableComponent_ng_container_8_ng_container_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 27);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r27 = ctx.$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r26 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r26.model.cellClassFunc ? ctx_r26.model.cellClassFunc(row_r27, column_r16) : i0__namespace.ɵɵpureFunction0(2, _c1));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r26.getValue(row_r27, column_r16.name), " ");
        }
    }
    function TableComponent_ng_container_8_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_3_td_1_Template, 2, 3, "td", 26);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_8_ng_template_4_td_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "td", 29);
        }
        if (rf & 2) {
            var row_r30 = ctx.$implicit;
            var column_r16 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r29 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r29.model.cellClassFunc ? ctx_r29.model.cellClassFunc(row_r30, column_r16) : i0__namespace.ɵɵpureFunction0(2, _c1))("innerHTML", ctx_r29.getValue(row_r30, column_r16.name), i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function TableComponent_ng_container_8_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, TableComponent_ng_container_8_ng_template_4_td_0_Template, 1, 3, "td", 28);
        }
    }
    function TableComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0, 20);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_8_ng_container_1_Template, 2, 0, "ng-container", 21);
            i0__namespace.ɵɵtemplate(2, TableComponent_ng_container_8_ng_container_2_Template, 2, 0, "ng-container", 21);
            i0__namespace.ɵɵtemplate(3, TableComponent_ng_container_8_ng_container_3_Template, 2, 0, "ng-container", 22);
            i0__namespace.ɵɵtemplate(4, TableComponent_ng_container_8_ng_template_4_Template, 1, 0, "ng-template", null, 23, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var column_r16 = ctx.$implicit;
            var _r20 = i0__namespace.ɵɵreference(5);
            i0__namespace.ɵɵproperty("matColumnDef", column_r16.name);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", column_r16.sortable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r16.sortable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !column_r16.html)("ngIfElse", _r20);
        }
    }
    function TableComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "th", 16);
        }
    }
    function TableComponent_td_11_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 31);
            i0__namespace.ɵɵlistener("click", function TableComponent_td_11_button_1_Template_button_click_0_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r36_1); var action_r34 = restoredCtx.$implicit; var row_r32 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r35 = i0__namespace.ɵɵnextContext(); return ctx_r35.handleClickAction($event, action_r34, row_r32); });
            i0__namespace.ɵɵelement(1, "mat-icon", 32);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r34 = ctx.$implicit;
            var ctx_r33 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("color", ctx_r33.getActionColor(action_r34.color));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵpropertyInterpolate("svgIcon", action_r34.icon);
        }
    }
    function TableComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 18);
            i0__namespace.ɵɵtemplate(1, TableComponent_td_11_button_1_Template, 2, 2, "button", 30);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r6.model.actions);
        }
    }
    function TableComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 33);
        }
    }
    function TableComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            var _r40_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "tr", 34);
            i0__namespace.ɵɵlistener("click", function TableComponent_tr_13_Template_tr_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r40_1); var row_r38 = restoredCtx.$implicit; var ctx_r39 = i0__namespace.ɵɵnextContext(); return ctx_r39.selection.toggle(row_r38); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r38 = ctx.$implicit;
            var ctx_r8 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", ctx_r8.model.rowClassFunc ? ctx_r8.model.rowClassFunc(row_r38) : i0__namespace.ɵɵpureFunction0(1, _c1));
        }
    }
    var TableComponent = /** @class */ (function () {
        function TableComponent() {
            this._hasFIlterInput = true;
            this.selection = new collections.SelectionModel(true, []);
            this.select = new i0.EventEmitter();
        }
        Object.defineProperty(TableComponent.prototype, "database", {
            get: function () {
                return this._database;
            },
            set: function (value) {
                this._database = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "hasFilterInput", {
            get: function () {
                return this._hasFIlterInput;
            },
            set: function (value) {
                this._hasFIlterInput = value;
            },
            enumerable: false,
            configurable: true
        });
        TableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.dataSource = new TableDataSource(this.database, this.model, this.sort);
            if (this.model) {
                this.displayedColumns = this.model.columns
                    .filter(function (c) { return c.displayed !== false; })
                    .map(function (c) { return c.name; });
                if (this.model.selectionCheckbox) {
                    this.displayedColumns.unshift('selectionCheckbox');
                }
                if (this.model.actions && this.model.actions.length) {
                    this.displayedColumns.push('action');
                }
            }
            this.selection.changed.subscribe(function (e) { return _this.select.emit(e); });
        };
        TableComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.filter) {
                rxjs.fromEvent(this.filter.nativeElement, 'keyup')
                    .pipe(operators.debounceTime(150), operators.distinctUntilChanged())
                    .subscribe(function () {
                    if (!_this.dataSource) {
                        return;
                    }
                    _this.dataSource.filter = _this.filter.nativeElement.value;
                });
            }
        };
        TableComponent.prototype.ngOnChanges = function (change) {
            if (change.database) {
                this.dataSource = new TableDataSource(this.database, this.model, this.sort);
                this.selection.clear();
            }
        };
        TableComponent.prototype.getActionColor = function (colorId) {
            return exports.TableActionColor[colorId];
        };
        TableComponent.prototype.getValue = function (row, key) {
            return utils.ObjectUtils.resolve(row, key);
        };
        /** Whether the number of selected elements matches the total number of rows. */
        TableComponent.prototype.isAllSelected = function () {
            var numSelected = this.selection.selected.length;
            var numRows = this.database.data.length;
            return numSelected === numRows;
        };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        TableComponent.prototype.masterToggle = function () {
            var _this = this;
            this.isAllSelected()
                ? this.selection.clear()
                : this.database.data.forEach(function (row) { return _this.selection.select(row); });
        };
        TableComponent.prototype.handleClickAction = function (event, action, row) {
            event.stopPropagation();
            action.click(row);
        };
        return TableComponent;
    }());
    TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
    TableComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TableComponent, selectors: [["igo-table"]], viewQuery: function TableComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 5);
                i0__namespace.ɵɵviewQuery(i5.MatSort, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.filter = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sort = _t.first);
            }
        }, inputs: { database: "database", model: "model", hasFilterInput: "hasFilterInput" }, outputs: { select: "select" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 14, vars: 5, consts: [[1, "table-box"], ["class", "table-header", 4, "ngIf"], [1, "table-container"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "selectionCheckbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "table-header"], ["floatPlaceholder", "never"], ["matInput", "", 3, "placeholder"], ["filter", ""], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], [3, "matColumnDef"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["cellHTML", ""], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", 4, "matCellDef"], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass"], ["mat-cell", "", "class", "mat-cell-text", 3, "ngClass", "innerHTML", 4, "matCellDef"], ["mat-cell", "", 1, "mat-cell-text", 3, "ngClass", "innerHTML"], ["mat-mini-fab", "", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-mini-fab", "", 3, "color", "click"], [3, "svgIcon"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function TableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, TableComponent_div_1_Template, 5, 3, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "table", 3, 4);
                i0__namespace.ɵɵelementContainerStart(5, 5);
                i0__namespace.ɵɵtemplate(6, TableComponent_th_6_Template, 2, 2, "th", 6);
                i0__namespace.ɵɵtemplate(7, TableComponent_td_7_Template, 2, 1, "td", 7);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(8, TableComponent_ng_container_8_Template, 6, 5, "ng-container", 8);
                i0__namespace.ɵɵelementContainerStart(9, 9);
                i0__namespace.ɵɵtemplate(10, TableComponent_th_10_Template, 1, 0, "th", 6);
                i0__namespace.ɵɵtemplate(11, TableComponent_td_11_Template, 2, 1, "td", 7);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(12, TableComponent_tr_12_Template, 1, 0, "tr", 10);
                i0__namespace.ɵɵtemplate(13, TableComponent_tr_13_Template, 1, 2, "tr", 11);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.hasFilterInput);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngForOf", ctx.model.columns);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace$1.NgIf, i4__namespace.MatTable, i5__namespace.MatSort, i4__namespace.MatColumnDef, i4__namespace.MatHeaderCellDef, i4__namespace.MatCellDef, i1__namespace$1.NgForOf, i4__namespace.MatHeaderRowDef, i4__namespace.MatRowDef, i1__namespace.MatFormField, i2__namespace$3.MatInput, i4__namespace.MatHeaderCell, i7__namespace.MatCheckbox, i4__namespace.MatCell, i5__namespace.MatSortHeader, i1__namespace$1.NgClass, i4__namespace$1.MatButton, i5__namespace$1.MatIcon, i4__namespace.MatHeaderRow, i4__namespace.MatRow], pipes: [i6__namespace$1.TranslatePipe], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:block}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow:auto;flex:1 1 auto}.table-box[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.table-header[_ngcontent-%COMP%]{min-height:64px;max-width:500px;display:flex;flex:0 1 auto;align-items:baseline;padding:8px 24px 0;font-size:20px;justify-content:space-between}tr[mat-header-row][_ngcontent-%COMP%], tr[mat-row][_ngcontent-%COMP%]{height:60px}.mat-cell-text[_ngcontent-%COMP%]{overflow:hidden;word-wrap:break-word}td[mat-cell][_ngcontent-%COMP%]{padding-right:15px}th.mat-header-cell[_ngcontent-%COMP%]{padding-right:5px}button[_ngcontent-%COMP%]{margin-right:10px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-table',
                        templateUrl: './table.component.html',
                        styleUrls: ['./table.component.scss']
                    }]
            }], null, { database: [{
                    type: i0.Input
                }], model: [{
                    type: i0.Input
                }], hasFilterInput: [{
                    type: i0.Input
                }], select: [{
                    type: i0.Output
                }], filter: [{
                    type: i0.ViewChild,
                    args: ['filter']
                }], sort: [{
                    type: i0.ViewChild,
                    args: [i5.MatSort, { static: true }]
                }] });
    })();

    var IgoTableModule = /** @class */ (function () {
        function IgoTableModule() {
        }
        IgoTableModule.forRoot = function () {
            return {
                ngModule: IgoTableModule,
                providers: []
            };
        };
        return IgoTableModule;
    }());
    IgoTableModule.ɵfac = function IgoTableModule_Factory(t) { return new (t || IgoTableModule)(); };
    IgoTableModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoTableModule });
    IgoTableModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$5.FormsModule,
                table.CdkTableModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i4.MatTableModule,
                i1.MatFormFieldModule,
                i2$3.MatInputModule,
                i5.MatSortModule,
                i7.MatCheckboxModule,
                i1$2.IgoLanguageModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoTableModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1$5.FormsModule,
                            table.CdkTableModule,
                            i5$1.MatIconModule,
                            i4$1.MatButtonModule,
                            i4.MatTableModule,
                            i1.MatFormFieldModule,
                            i2$3.MatInputModule,
                            i5.MatSortModule,
                            i7.MatCheckboxModule,
                            i1$2.IgoLanguageModule
                        ],
                        declarations: [TableComponent],
                        exports: [TableComponent]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoTableModule, { declarations: [TableComponent], imports: [i1$1.CommonModule,
                i1$5.FormsModule,
                table.CdkTableModule,
                i5$1.MatIconModule,
                i4$1.MatButtonModule,
                i4.MatTableModule,
                i1.MatFormFieldModule,
                i2$3.MatInputModule,
                i5.MatSortModule,
                i7.MatCheckboxModule,
                i1$2.IgoLanguageModule], exports: [TableComponent] });
    })();

    /**
     * The class is a specialized version of an EntityStore that stores
     * actions.
     */
    var ActionStore = /** @class */ (function (_super) {
        __extends(ActionStore, _super);
        function ActionStore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ActionStore;
    }(EntityStore));

    exports.ToolboxColor = void 0;
    (function (ToolboxColor) {
        ToolboxColor["White"] = "white";
        ToolboxColor["Grey"] = "grey";
        ToolboxColor["Primary"] = "primary";
    })(exports.ToolboxColor || (exports.ToolboxColor = {}));

    function toolSlideInOut(speed, type) {
        if (speed === void 0) { speed = '300ms'; }
        if (type === void 0) { type = 'ease-in-out'; }
        return animations.trigger('toolSlideInOut', [
            animations.state('enter', animations.style({
                transform: 'translate3d(0, 0, 0)'
            })),
            animations.transition('void => enter', animations.animate(speed + ' ' + type))
        ]);
    }

    function ToolboxComponent_igo_actionbar_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-actionbar", 2);
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "async");
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("store", ctx_r0.actionStore)("withIcon", true)("withTitle", i0__namespace.ɵɵpipeBind1(1, 6, ctx_r0.toolbarWithTitle$))("withTooltip", i0__namespace.ɵɵpipeBind1(2, 8, ctx_r0.toolbarWithTitle$) === false)("scrollActive", i0__namespace.ɵɵpipeBind1(3, 10, ctx_r0.toolbarWithTitle$))("horizontal", false);
        }
    }
    var _c0 = function (a0, a1) { return { "igo-tool-container-with-toolbar": a0, "igo-tool-container-with-animation": a1 }; };
    function ToolboxComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵlistener("@toolSlideInOut.start", function ToolboxComponent_div_2_Template_div_animation_toolSlideInOut_start_0_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.onAnimationStart(); })("@toolSlideInOut.done", function ToolboxComponent_div_2_Template_div_animation_toolSlideInOut_done_0_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onAnimationComplete(); });
            i0__namespace.ɵɵpipe(1, "async");
            i0__namespace.ɵɵelement(2, "igo-dynamic-outlet", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tool_r2 = ctx.ngIf;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction2(6, _c0, !ctx_r1.actionStore.empty, ctx_r1.animate))("@toolSlideInOut", i0__namespace.ɵɵpipeBind1(1, 4, ctx_r1.animation$));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("component", tool_r2.component)("inputs", ctx_r1.getToolInputs(tool_r2));
        }
    }
    var ToolboxComponent = /** @class */ (function () {
        function ToolboxComponent() {
            /**
             * Observable of the active tool
             */
            this.activeTool$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Store of actions that toggle tools
             */
            this.actionStore = new ActionStore([]);
            /**
             * Observable of he anmation state
             */
            this.animation$ = new rxjs.BehaviorSubject('none');
            /**
             * Observable of the toolbar
             */
            this.toolbar$ = new rxjs.BehaviorSubject([]);
            /**
             * Whether the Toolbar should display actions' titles
             */
            this.toolbarWithTitle$ = this.activeTool$.pipe(operators.map(function (tool) { return tool === undefined; }));
            /**
             * Observable of the ongoing animation. This is useful when
             * multiple animations are triggered at once i.e. when the user clicks
             * too fast on different actions
             */
            this.animating$ = new rxjs.BehaviorSubject(false);
            /**
             * Whether the toolbox should animate the first tool entering
             */
            this.animate = false;
            /**
             * Color of Toolbox
             */
            this.color = exports.ToolboxColor.White;
        }
        Object.defineProperty(ToolboxComponent.prototype, "classColorGrey", {
            /**
             * @ignore
             */
            get: function () {
                return this.color === exports.ToolboxColor.Grey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ToolboxComponent.prototype, "classColorPrimary", {
            /**
             * @ignore
             */
            get: function () {
                return this.color === exports.ToolboxColor.Primary;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Initialize the toolbar and subscribe to the active tool
         * @internal
         */
        ToolboxComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.toolbar$$ = this.toolbox.toolbar$.subscribe(function (toolbar) { return _this.onToolbarChange(toolbar); });
            this.activeTool$$ = this.toolbox.activeTool$.subscribe(function (tool) { return _this.onActiveToolChange(tool); });
        };
        /**
         * Unsubscribe to the active tool and destroy the action store
         * @internal
         */
        ToolboxComponent.prototype.ngOnDestroy = function () {
            this.toolbar$$.unsubscribe();
            this.activeTool$$.unsubscribe();
            this.actionStore.destroy();
        };
        /**
         * Track the starting animation
         * @internal
         */
        ToolboxComponent.prototype.onAnimationStart = function () {
            this.animating$.next(true);
        };
        /**
         * Untrack the completed animation
         * @internal
         */
        ToolboxComponent.prototype.onAnimationComplete = function () {
            this.animating$.next(false);
        };
        /**
         * Return a tool's inputs
         * @param tool Tool
         * @returns Tool inputs
         * @internal
         */
        ToolboxComponent.prototype.getToolInputs = function (tool) {
            return tool.options || {};
        };
        /**
         * Initialize an action store
         * @param toolbar Toolbar
         */
        ToolboxComponent.prototype.onToolbarChange = function (toolbar) {
            this.setToolbar(toolbar);
        };
        /**
         * Activate a tool and trigger an animation or not
         * @param tool Tool to activate
         */
        ToolboxComponent.prototype.onActiveToolChange = function (tool) {
            var _this = this;
            if (!this.animate) {
                this.setActiveTool(tool);
                return;
            }
            this.onAnimate(function () { return _this.setActiveTool(tool); });
        };
        /**
         * Set the active tool
         * @param tool Tool to activate
         */
        ToolboxComponent.prototype.setActiveTool = function (tool) {
            if (tool === undefined) {
                this.actionStore.state.updateAll({ active: false });
            }
            else {
                var action = this.actionStore.get(tool.name);
                if (action !== undefined) {
                    this.actionStore.state.update(action, { active: true }, true);
                }
            }
            this.activeTool$.next(tool);
            if (this.animate) {
                this.animation$.next('enter');
            }
        };
        /**
         * Initialize the toolbar
         */
        ToolboxComponent.prototype.setToolbar = function (toolbar) {
            var _this = this;
            var actions = toolbar.reduce(function (acc, toolName) {
                var tool = _this.toolbox.getTool(toolName);
                if (tool === undefined) {
                    return acc;
                }
                acc.push({
                    id: tool.name,
                    title: tool.title,
                    icon: tool.icon,
                    // iconImage: tool.iconImage,
                    tooltip: tool.tooltip,
                    args: [tool, _this.toolbox],
                    handler: function (_tool, _toolbox) {
                        _toolbox.activateTool(_tool.name);
                    },
                    ngClass: function (_tool, _toolbox) {
                        return _this.toolbox.activeTool$.pipe(operators.map(function (activeTool) {
                            var toolActivated = false;
                            if (activeTool !== undefined && _tool.name === activeTool.name) {
                                toolActivated = true;
                            }
                            var childrenToolActivated = false;
                            if (activeTool !== undefined &&
                                _tool.name === activeTool.parent) {
                                childrenToolActivated = true;
                            }
                            return {
                                'tool-activated': toolActivated,
                                'children-tool-activated': childrenToolActivated
                            };
                        }));
                    }
                });
                return acc;
            }, []);
            this.actionStore.load(actions);
            this.toolbar$.next(toolbar);
        };
        /**
         * Observe the ongoing animation and ignore any incoming animation
         * while one is still ongoing.
         * @param callback Callback to execute when the animation completes
         */
        ToolboxComponent.prototype.onAnimate = function (callback) {
            var _this = this;
            this.unAnimate();
            this.animating$$ = this.animating$.subscribe(function (animation) {
                if (!animation) {
                    callback.call(_this);
                    _this.unAnimate();
                }
            });
        };
        /**
         * Stop observing an animation when it's complete
         */
        ToolboxComponent.prototype.unAnimate = function () {
            if (this.animating$$) {
                this.animating$$.unsubscribe();
            }
        };
        return ToolboxComponent;
    }());
    ToolboxComponent.ɵfac = function ToolboxComponent_Factory(t) { return new (t || ToolboxComponent)(); };
    ToolboxComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ToolboxComponent, selectors: [["igo-toolbox"]], hostVars: 4, hostBindings: function ToolboxComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("color-grey", ctx.classColorGrey)("color-primary", ctx.classColorPrimary);
            }
        }, inputs: { toolbox: "toolbox", animate: "animate", color: "color" }, decls: 4, vars: 6, consts: [[3, "store", "withIcon", "withTitle", "withTooltip", "scrollActive", "horizontal", 4, "ngIf"], ["class", "igo-tool-container", 3, "ngClass", 4, "ngIf"], [3, "store", "withIcon", "withTitle", "withTooltip", "scrollActive", "horizontal"], [1, "igo-tool-container", 3, "ngClass"], [3, "component", "inputs"]], template: function ToolboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ToolboxComponent_igo_actionbar_0_Template, 4, 12, "igo-actionbar", 0);
                i0__namespace.ɵɵpipe(1, "async");
                i0__namespace.ɵɵtemplate(2, ToolboxComponent_div_2_Template, 3, 9, "div", 1);
                i0__namespace.ɵɵpipe(3, "async");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 2, ctx.toolbar$).length > 0);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(3, 4, ctx.activeTool$));
            }
        }, directives: [i1__namespace$1.NgIf, ActionbarComponent, i1__namespace$1.NgClass, DynamicOutletComponent], pipes: [i1__namespace$1.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;position:relative;overflow:hidden;width:100%;height:100%}.igo-tool-container[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}.igo-tool-container-with-animation[_ngcontent-%COMP%]{transform:translate(100%)}.igo-tool-container-with-toolbar[_ngcontent-%COMP%]{left:50px}igo-actionbar[_ngcontent-%COMP%]{height:100%}igo-actionbar.with-title[_ngcontent-%COMP%]{width:100%;overflow:auto}igo-actionbar[_ngcontent-%COMP%]:not(.with-title){width:48px;overflow:hidden;-o-box-shadow:2px 0px 2px 0px #dddddd;box-shadow:2px 0 2px #ddd}@media only screen and (orientation:portrait) and (max-width: 599px),only screen and (orientation:landscape) and (max-width: 959px){igo-actionbar[_ngcontent-%COMP%]:not(.with-title){overflow:auto}}igo-dynamic-outlet[_ngcontent-%COMP%]{overflow:auto}"], data: { animation: [toolSlideInOut()] }, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToolboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-toolbox',
                        templateUrl: 'toolbox.component.html',
                        styleUrls: ['toolbox.component.scss'],
                        animations: [toolSlideInOut()],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { toolbox: [{
                    type: i0.Input
                }], animate: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], classColorGrey: [{
                    type: i0.HostBinding,
                    args: ['class.color-grey']
                }], classColorPrimary: [{
                    type: i0.HostBinding,
                    args: ['class.color-primary']
                }] });
    })();

    /**
     * @ignore
     */
    var IgoToolboxModule = /** @class */ (function () {
        function IgoToolboxModule() {
        }
        return IgoToolboxModule;
    }());
    IgoToolboxModule.ɵfac = function IgoToolboxModule_Factory(t) { return new (t || IgoToolboxModule)(); };
    IgoToolboxModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoToolboxModule });
    IgoToolboxModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                IgoActionModule,
                IgoDynamicComponentModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoToolboxModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoActionModule,
                            IgoDynamicComponentModule
                        ],
                        exports: [
                            ToolboxComponent
                        ],
                        declarations: [
                            ToolboxComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoToolboxModule, { declarations: [ToolboxComponent], imports: [i1$1.CommonModule,
                IgoActionModule,
                IgoDynamicComponentModule], exports: [ToolboxComponent] });
    })();

    var IgoToolModule = /** @class */ (function () {
        function IgoToolModule() {
        }
        IgoToolModule.forRoot = function () {
            return {
                ngModule: IgoToolModule,
                providers: [
                    ToolService
                ]
            };
        };
        return IgoToolModule;
    }());
    IgoToolModule.ɵfac = function IgoToolModule_Factory(t) { return new (t || IgoToolModule)(); };
    IgoToolModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoToolModule });
    IgoToolModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule
            ], IgoToolboxModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoToolModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        exports: [
                            IgoToolboxModule
                        ],
                        declarations: []
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoToolModule, { imports: [i1$1.CommonModule], exports: [IgoToolboxModule] }); })();

    function WidgetOutletComponent_igo_dynamic_outlet_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "igo-dynamic-outlet", 1);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("component", ctx_r0.widget)("inputs", ctx_r0.inputs)("subscribers", ctx_r0.getEffectiveSubscribers());
        }
    }
    /**
     * This component dynamically renders a widget. It also subscribes
     * to the widget's 'cancel' and 'complete' events and destroys it
     * when any of those event is emitted.
     */
    var WidgetOutletComponent = /** @class */ (function () {
        function WidgetOutletComponent() {
            var _this = this;
            /**
             * Widget subscribers to 'cancel' and 'complete'
             * @internal
             */
            this.baseSubscribers = {
                cancel: function (event) { return _this.onCancel(event); },
                complete: function (event) { return _this.onComplete(event); }
            };
            /**
             * Widget subscribers
             */
            this.subscribers = {};
            /**
             * Event emitted when the widget emits 'complete'
             */
            this.complete = new i0.EventEmitter();
            /**
             * Event emitted when the widget emits 'cancel'
             */
            this.cancel = new i0.EventEmitter();
        }
        /**
         * Destroy the current widget and all it's inner subscriptions
         * @internal
         */
        WidgetOutletComponent.prototype.ngOnDestroy = function () {
            this.destroyWidget();
        };
        /**
         * Get the effective subscribers. That means a combination of the base
         * subscribers and any subscriber given as input.
         * @returns Combined subscribers
         * @internal
         */
        WidgetOutletComponent.prototype.getEffectiveSubscribers = function () {
            var _this = this;
            var subscribers = Object.assign({}, this.subscribers);
            // Base subscribers
            Object.keys(this.baseSubscribers).forEach(function (key) {
                var subscriber = subscribers[key];
                var baseSubscriber = _this.baseSubscribers[key];
                if (subscriber !== undefined) {
                    subscribers[key] = function (event) {
                        subscriber(event);
                        baseSubscriber(event);
                    };
                }
                else {
                    subscribers[key] = baseSubscriber;
                }
            });
            return subscribers;
        };
        /**
         * When the widget emits 'cancel', propagate that event and destroy
         * the widget
         */
        WidgetOutletComponent.prototype.onCancel = function (event) {
            this.cancel.emit(event);
            this.destroyWidget();
        };
        /**
         * When the widget emits 'complete', propagate that event and destroy
         * the widget
         */
        WidgetOutletComponent.prototype.onComplete = function (event) {
            this.complete.emit(event);
            this.destroyWidget();
        };
        /**
         * Destroy the current widget
         */
        WidgetOutletComponent.prototype.destroyWidget = function () {
            if (this.widget !== undefined) {
                this.widget.destroy();
            }
            this.widget = undefined;
        };
        return WidgetOutletComponent;
    }());
    WidgetOutletComponent.ɵfac = function WidgetOutletComponent_Factory(t) { return new (t || WidgetOutletComponent)(); };
    WidgetOutletComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: WidgetOutletComponent, selectors: [["igo-widget-outlet"]], inputs: { widget: "widget", inputs: "inputs", subscribers: "subscribers" }, outputs: { complete: "complete", cancel: "cancel" }, decls: 1, vars: 1, consts: [[3, "component", "inputs", "subscribers", 4, "ngIf"], [3, "component", "inputs", "subscribers"]], template: function WidgetOutletComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, WidgetOutletComponent_igo_dynamic_outlet_0_Template, 1, 3, "igo-dynamic-outlet", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.widget);
            }
        }, directives: [i1__namespace$1.NgIf, DynamicOutletComponent], styles: ["igo-dynamic-outlet[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WidgetOutletComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-widget-outlet',
                        templateUrl: './widget-outlet.component.html',
                        styleUrls: ['./widget-outlet.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { widget: [{
                    type: i0.Input
                }], inputs: [{
                    type: i0.Input
                }], subscribers: [{
                    type: i0.Input
                }], complete: [{
                    type: i0.Output
                }], cancel: [{
                    type: i0.Output
                }] });
    })();

    /**
     * @ignore
     */
    var IgoWidgetOutletModule = /** @class */ (function () {
        function IgoWidgetOutletModule() {
        }
        return IgoWidgetOutletModule;
    }());
    IgoWidgetOutletModule.ɵfac = function IgoWidgetOutletModule_Factory(t) { return new (t || IgoWidgetOutletModule)(); };
    IgoWidgetOutletModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoWidgetOutletModule });
    IgoWidgetOutletModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                IgoDynamicComponentModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoWidgetOutletModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoDynamicComponentModule
                        ],
                        exports: [
                            WidgetOutletComponent
                        ],
                        declarations: [
                            WidgetOutletComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoWidgetOutletModule, { declarations: [WidgetOutletComponent], imports: [i1$1.CommonModule,
                IgoDynamicComponentModule], exports: [WidgetOutletComponent] });
    })();

    var WidgetService = /** @class */ (function () {
        function WidgetService(dynamicComponentService) {
            this.dynamicComponentService = dynamicComponentService;
        }
        WidgetService.prototype.create = function (widgetCls) {
            return this.dynamicComponentService.create(widgetCls);
        };
        return WidgetService;
    }());
    WidgetService.ɵfac = function WidgetService_Factory(t) { return new (t || WidgetService)(i0__namespace.ɵɵinject(DynamicComponentService)); };
    WidgetService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: WidgetService, factory: WidgetService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WidgetService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: DynamicComponentService }]; }, null);
    })();

    var IgoWidgetModule = /** @class */ (function () {
        function IgoWidgetModule() {
        }
        return IgoWidgetModule;
    }());
    IgoWidgetModule.ɵfac = function IgoWidgetModule_Factory(t) { return new (t || IgoWidgetModule)(); };
    IgoWidgetModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoWidgetModule });
    IgoWidgetModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            WidgetService
        ], imports: [[
                i1$1.CommonModule,
                IgoWidgetOutletModule
            ], IgoWidgetOutletModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoWidgetModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoWidgetOutletModule
                        ],
                        exports: [
                            IgoWidgetOutletModule
                        ],
                        declarations: [],
                        providers: [
                            WidgetService
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoWidgetModule, { imports: [i1$1.CommonModule,
                IgoWidgetOutletModule], exports: [IgoWidgetOutletModule] });
    })();

    /**
     * Drop list that activates the selected workspace emit an event.
     */
    var WorkspaceSelectorComponent = /** @class */ (function () {
        function WorkspaceSelectorComponent() {
            /**
             * Event emitted when an workspace is selected or unselected
             */
            this.selectedChange = new i0.EventEmitter();
        }
        /**
         * @internal
         */
        WorkspaceSelectorComponent.prototype.getWorkspaceTitle = function (workspace) {
            return getEntityTitle(workspace);
        };
        /**
         * When an workspace is manually selected, select it into the
         * store and emit an event.
         * @internal
         * @param event The selection change event
         */
        WorkspaceSelectorComponent.prototype.onSelectedChange = function (event) {
            var workspace = event.value;
            this.store.activateWorkspace(workspace);
            this.selectedChange.emit({ selected: true, value: workspace });
        };
        return WorkspaceSelectorComponent;
    }());
    WorkspaceSelectorComponent.ɵfac = function WorkspaceSelectorComponent_Factory(t) { return new (t || WorkspaceSelectorComponent)(); };
    WorkspaceSelectorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: WorkspaceSelectorComponent, selectors: [["igo-workspace-selector"]], inputs: { store: "store", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, decls: 1, vars: 4, consts: [[3, "store", "multi", "titleAccessor", "disabled", "selectedChange"]], template: function WorkspaceSelectorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "igo-entity-selector", 0);
                i0__namespace.ɵɵlistener("selectedChange", function WorkspaceSelectorComponent_Template_igo_entity_selector_selectedChange_0_listener($event) { return ctx.onSelectedChange($event); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("store", ctx.store)("multi", false)("titleAccessor", ctx.getWorkspaceTitle)("disabled", ctx.disabled);
            }
        }, directives: [EntitySelectorComponent], styles: ["igo-entity-selector[_ngcontent-%COMP%]     mat-form-field .mat-form-field-infix{padding:0}igo-entity-selector[_ngcontent-%COMP%]     mat-form-field .mat-form-field-wrapper{padding-bottom:1.75em}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WorkspaceSelectorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-workspace-selector',
                        templateUrl: './workspace-selector.component.html',
                        styleUrls: ['./workspace-selector.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { store: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], selectedChange: [{
                    type: i0.Output
                }] });
    })();

    /**
     * @ignore
     */
    var IgoWorkspaceSelectorModule = /** @class */ (function () {
        function IgoWorkspaceSelectorModule() {
        }
        return IgoWorkspaceSelectorModule;
    }());
    IgoWorkspaceSelectorModule.ɵfac = function IgoWorkspaceSelectorModule_Factory(t) { return new (t || IgoWorkspaceSelectorModule)(); };
    IgoWorkspaceSelectorModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoWorkspaceSelectorModule });
    IgoWorkspaceSelectorModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                IgoEntitySelectorModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoWorkspaceSelectorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoEntitySelectorModule
                        ],
                        exports: [
                            WorkspaceSelectorComponent
                        ],
                        declarations: [
                            WorkspaceSelectorComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoWorkspaceSelectorModule, { declarations: [WorkspaceSelectorComponent], imports: [i1$1.CommonModule,
                IgoEntitySelectorModule], exports: [WorkspaceSelectorComponent] });
    })();

    function WorkspaceWidgetOutletComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "igo-widget-outlet", 1);
            i0__namespace.ɵɵlistener("cancel", function WorkspaceWidgetOutletComponent_ng_container_0_Template_igo_widget_outlet_cancel_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var widget_r1 = restoredCtx.ngIf; var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.onWidgetCancel(widget_r1); })("complete", function WorkspaceWidgetOutletComponent_ng_container_0_Template_igo_widget_outlet_complete_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r3_1); var widget_r1 = restoredCtx.ngIf; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.onWidgetComplete(widget_r1); });
            i0__namespace.ɵɵpipe(2, "async");
            i0__namespace.ɵɵpipe(3, "async");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var widget_r1 = ctx.ngIf;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("widget", widget_r1)("inputs", i0__namespace.ɵɵpipeBind1(2, 3, ctx_r0.widgetInputs$))("subscribers", i0__namespace.ɵɵpipeBind1(3, 5, ctx_r0.widgetSubscribers$));
        }
    }
    /**
     * This component dynamically render an Workspace's active widget.
     * It also deactivate that widget whenever the widget's component
     * emit the 'cancel' or 'complete' event.
     */
    var WorkspaceWidgetOutletComponent = /** @class */ (function () {
        function WorkspaceWidgetOutletComponent() {
            /**
             * Event emitted when a widget is deactivate which happens
             * when the widget's component emits the 'cancel' or 'complete' event.
             */
            this.deactivateWidget = new i0.EventEmitter();
        }
        Object.defineProperty(WorkspaceWidgetOutletComponent.prototype, "widget$", {
            /**
             * Observable of the workspace's active widget
             * @internal
             */
            get: function () { return this.workspace.widget$; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WorkspaceWidgetOutletComponent.prototype, "widgetInputs$", {
            /**
             * Observable of the workspace's widget inputs
             * @internal
             */
            get: function () {
                return this.workspace.widgetInputs$;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(WorkspaceWidgetOutletComponent.prototype, "widgetSubscribers$", {
            /**
             * Observable of the workspace's widget inputs
             * @internal
             */
            get: function () {
                return this.workspace.widgetSubscribers$;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * When a widget's component emit the 'cancel' event,
         * deactivate that widget and emit the 'deactivateWidget' event.
         * @param widget Widget
         * @internal
         */
        WorkspaceWidgetOutletComponent.prototype.onWidgetCancel = function (widget) {
            this.workspace.deactivateWidget();
            this.deactivateWidget.emit(widget);
        };
        /**
         * When a widget's component emit the 'cancel' event,
         * deactivate that widget and emit the 'deactivateWidget' event.
         * @param widget Widget
         * @internal
         */
        WorkspaceWidgetOutletComponent.prototype.onWidgetComplete = function (widget) {
            this.workspace.deactivateWidget();
            this.deactivateWidget.emit(widget);
        };
        return WorkspaceWidgetOutletComponent;
    }());
    WorkspaceWidgetOutletComponent.ɵfac = function WorkspaceWidgetOutletComponent_Factory(t) { return new (t || WorkspaceWidgetOutletComponent)(); };
    WorkspaceWidgetOutletComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: WorkspaceWidgetOutletComponent, selectors: [["igo-workspace-widget-outlet"]], inputs: { workspace: "workspace" }, outputs: { deactivateWidget: "deactivateWidget" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "widget", "inputs", "subscribers", "cancel", "complete"]], template: function WorkspaceWidgetOutletComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, WorkspaceWidgetOutletComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
                i0__namespace.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", i0__namespace.ɵɵpipeBind1(1, 1, ctx.widget$));
            }
        }, directives: [i1__namespace$1.NgIf, WidgetOutletComponent], pipes: [i1__namespace$1.AsyncPipe], styles: ["igo-widget-outlet[_ngcontent-%COMP%]{height:100%}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(WorkspaceWidgetOutletComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'igo-workspace-widget-outlet',
                        templateUrl: './workspace-widget-outlet.component.html',
                        styleUrls: ['./workspace-widget-outlet.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return []; }, { workspace: [{
                    type: i0.Input
                }], deactivateWidget: [{
                    type: i0.Output
                }] });
    })();

    /**
     * @ignore
     */
    var IgoWorkspaceWidgetOutletModule = /** @class */ (function () {
        function IgoWorkspaceWidgetOutletModule() {
        }
        return IgoWorkspaceWidgetOutletModule;
    }());
    IgoWorkspaceWidgetOutletModule.ɵfac = function IgoWorkspaceWidgetOutletModule_Factory(t) { return new (t || IgoWorkspaceWidgetOutletModule)(); };
    IgoWorkspaceWidgetOutletModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoWorkspaceWidgetOutletModule });
    IgoWorkspaceWidgetOutletModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                IgoWidgetOutletModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoWorkspaceWidgetOutletModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            IgoWidgetOutletModule
                        ],
                        exports: [
                            WorkspaceWidgetOutletComponent
                        ],
                        declarations: [
                            WorkspaceWidgetOutletComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoWorkspaceWidgetOutletModule, { declarations: [WorkspaceWidgetOutletComponent], imports: [i1$1.CommonModule,
                IgoWidgetOutletModule], exports: [WorkspaceWidgetOutletComponent] });
    })();

    var IgoWorkspaceModule = /** @class */ (function () {
        function IgoWorkspaceModule() {
        }
        return IgoWorkspaceModule;
    }());
    IgoWorkspaceModule.ɵfac = function IgoWorkspaceModule_Factory(t) { return new (t || IgoWorkspaceModule)(); };
    IgoWorkspaceModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IgoWorkspaceModule });
    IgoWorkspaceModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule
            ], IgoWorkspaceSelectorModule,
            IgoWorkspaceWidgetOutletModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IgoWorkspaceModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule
                        ],
                        exports: [
                            IgoWorkspaceSelectorModule,
                            IgoWorkspaceWidgetOutletModule
                        ],
                        declarations: []
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IgoWorkspaceModule, { imports: [i1$1.CommonModule], exports: [IgoWorkspaceSelectorModule,
                IgoWorkspaceWidgetOutletModule] });
    })();

    var TableDatabase = /** @class */ (function () {
        function TableDatabase(data) {
            /** Stream that emits whenever the data has been modified. */
            this.dataChange = new rxjs.BehaviorSubject([]);
            if (data) {
                this.dataChange.next(data);
            }
        }
        Object.defineProperty(TableDatabase.prototype, "data", {
            get: function () {
                return this.dataChange.value;
            },
            enumerable: false,
            configurable: true
        });
        TableDatabase.prototype.set = function (data) {
            this.dataChange.next(data);
        };
        TableDatabase.prototype.add = function (item) {
            var copiedData = this.data.slice();
            copiedData.push(item);
            this.set(copiedData);
        };
        TableDatabase.prototype.remove = function (item) {
            var copiedData = this.data.slice();
            var index = copiedData.indexOf(item);
            copiedData.splice(index, 1);
            this.set(copiedData);
        };
        return TableDatabase;
    }());

    function ToolComponent(tool) {
        return function (compType) {
            ToolService.register(Object.assign({}, tool, {
                component: compType
            }));
        };
    }

    var Widget = /** @class */ (function (_super) {
        __extends(Widget, _super);
        function Widget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Widget;
    }(DynamicComponent));

    /**
     * The class is a specialized version of an EntityStore that stores
     * workspaces.
     */
    var WorkspaceStore = /** @class */ (function (_super) {
        __extends(WorkspaceStore, _super);
        function WorkspaceStore() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.activeWorkspace$ = new rxjs.BehaviorSubject(undefined);
            return _this;
        }
        /**
         * Activate the an workspace workspace and deactivate the one currently active
         * @param workspace Workspace
         */
        WorkspaceStore.prototype.activateWorkspace = function (workspace) {
            var active = this.activeWorkspace$.value;
            if (active !== undefined) {
                active.deactivate();
            }
            this.deactivateWorkspace();
            if (workspace !== undefined) {
                this.state.update(workspace, { active: true, selected: true }, true);
                this.activeWorkspace$.next(workspace);
                workspace.activate();
            }
        };
        /**
         * Deactivate the current workspace
         * @param workspace Workspace
         */
        WorkspaceStore.prototype.deactivateWorkspace = function () {
            var active = this.activeWorkspace$.value;
            if (active !== undefined) {
                active.deactivate();
                this.activeWorkspace$.next(undefined);
            }
        };
        return WorkspaceStore;
    }(EntityStore));

    /**
     * This class is responsible of managing the relations between
     * entities and the actions that consume them. It also defines an
     * entity table template that may be used by an entity table component.
     */
    var Workspace = /** @class */ (function () {
        function Workspace(options) {
            this.options = options;
            /**
             * Observable of the selected widget
             */
            this.widget$ = new rxjs.BehaviorSubject(undefined);
            /**
             * Observable of the selected widget's inputs
             */
            this.widgetInputs$ = new rxjs.BehaviorSubject({});
            /**
             * Observable of the selected widget's subscribers
             */
            this.widgetSubscribers$ = new rxjs.BehaviorSubject({});
            /**
             * State change that trigger an update of the actions availability
             */
            this.change = new rxjs.Subject();
            this.active$ = new rxjs.BehaviorSubject(false);
        }
        Object.defineProperty(Workspace.prototype, "id", {
            /**
             * Workspace id
             */
            get: function () { return this.options.id; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "title", {
            /**
             * Workspace title
             */
            get: function () { return this.options.title; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "meta", {
            /**
             * Workspace title
             */
            get: function () { return this.options.meta || {}; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "entityStore", {
            /**
             * Entities store
             */
            get: function () { return this.options.entityStore; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "actionStore", {
            /**
             * Actions store (some actions activate a widget)
             */
            get: function () { return this.options.actionStore; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "widget", {
            /**
             * Selected widget
             */
            get: function () { return this.widget$.value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "hasWidget", {
            /**
             * Whether a widget is selected
             */
            get: function () { return this.widget !== undefined; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Workspace.prototype, "active", {
            /**
             * Whether this strategy is active
             * @internal
             */
            get: function () { return this.active$.value; },
            enumerable: false,
            configurable: true
        });
        /**
         * Activate the workspace. By doing that, the workspace will observe
         * the selected entity (from the store) and update the actions availability.
         * For example, some actions require an entity to be selected.
         */
        Workspace.prototype.activate = function () {
            var _this = this;
            if (this.active === true) {
                this.deactivate();
            }
            this.active$.next(true);
            if (this.entityStore !== undefined) {
                this.entities$$ = this.entityStore.stateView.all$()
                    .subscribe(function () { return _this.onStateChange(); });
            }
            this.change.next();
        };
        /**
         * Deactivate the workspace. Unsubcribe to the selected entity.
         */
        Workspace.prototype.deactivate = function () {
            this.active$.next(false);
            this.deactivateWidget();
            if (this.entities$$ !== undefined) {
                this.entities$$.unsubscribe();
            }
            if (this.change$ !== undefined) {
                this.change$.unsubscribe();
            }
        };
        /**
         * Activate a widget. In itself, activating a widget doesn't render it but,
         * if an WorkspaceWidgetOutlet component is bound to this workspace, the widget will
         * show up.
         * @param widget Widget
         * @param inputs Inputs the widget will receive
         */
        Workspace.prototype.activateWidget = function (widget, inputs, subscribers) {
            if (inputs === void 0) { inputs = {}; }
            if (subscribers === void 0) { subscribers = {}; }
            this.widget$.next(widget);
            this.widgetInputs$.next(inputs);
            this.widgetSubscribers$.next(subscribers);
            this.change.next();
        };
        /**
         * Deactivate a widget.
         */
        Workspace.prototype.deactivateWidget = function () {
            this.widget$.next(undefined);
            this.change.next();
        };
        /**
         * When the state changes, update the actions availability.
         */
        Workspace.prototype.onStateChange = function () {
            this.change.next();
        };
        return Workspace;
    }());

    /*
     * Public API Surface of common
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActionStore = ActionStore;
    exports.ActionbarComponent = ActionbarComponent;
    exports.BackdropComponent = BackdropComponent;
    exports.ClickoutDirective = ClickoutDirective;
    exports.ClonePipe = ClonePipe;
    exports.CollapseDirective = CollapseDirective;
    exports.CollapsibleComponent = CollapsibleComponent;
    exports.ConfirmDialogComponent = ConfirmDialogComponent;
    exports.ConfirmDialogService = ConfirmDialogService;
    exports.ContextMenuDirective = ContextMenuDirective;
    exports.CustomHtmlComponent = CustomHtmlComponent;
    exports.DragAndDropDirective = DragAndDropDirective;
    exports.DynamicComponent = DynamicComponent;
    exports.DynamicComponentService = DynamicComponentService;
    exports.DynamicOutletComponent = DynamicOutletComponent;
    exports.EntitySelectorComponent = EntitySelectorComponent;
    exports.EntityStateManager = EntityStateManager;
    exports.EntityStore = EntityStore;
    exports.EntityStoreFilterCustomFuncStrategy = EntityStoreFilterCustomFuncStrategy;
    exports.EntityStoreFilterSelectionStrategy = EntityStoreFilterSelectionStrategy;
    exports.EntityStoreStrategy = EntityStoreStrategy;
    exports.EntityStoreWatcher = EntityStoreWatcher;
    exports.EntityTableComponent = EntityTableComponent;
    exports.EntityTablePaginatorComponent = EntityTablePaginatorComponent;
    exports.EntityTransaction = EntityTransaction;
    exports.EntityView = EntityView;
    exports.FlexibleComponent = FlexibleComponent;
    exports.FormComponent = FormComponent;
    exports.FormFieldComponent = FormFieldComponent;
    exports.FormFieldService = FormFieldService;
    exports.FormGroupComponent = FormGroupComponent;
    exports.FormService = FormService;
    exports.HomeButtonComponent = HomeButtonComponent;
    exports.IgoActionModule = IgoActionModule;
    exports.IgoActionbarModule = IgoActionbarModule;
    exports.IgoBackdropModule = IgoBackdropModule;
    exports.IgoBadgeIconDirective = IgoBadgeIconDirective;
    exports.IgoClickoutModule = IgoClickoutModule;
    exports.IgoCloneModule = IgoCloneModule;
    exports.IgoCollapsibleModule = IgoCollapsibleModule;
    exports.IgoConfirmDialogModule = IgoConfirmDialogModule;
    exports.IgoContextMenuModule = IgoContextMenuModule;
    exports.IgoCustomHtmlModule = IgoCustomHtmlModule;
    exports.IgoDrapDropModule = IgoDrapDropModule;
    exports.IgoDynamicComponentModule = IgoDynamicComponentModule;
    exports.IgoDynamicOutletModule = IgoDynamicOutletModule;
    exports.IgoEntityModule = IgoEntityModule;
    exports.IgoEntitySelectorModule = IgoEntitySelectorModule;
    exports.IgoEntityTableModule = IgoEntityTableModule;
    exports.IgoEntityTablePaginatorModule = IgoEntityTablePaginatorModule;
    exports.IgoFlexibleModule = IgoFlexibleModule;
    exports.IgoFormFieldComponent = IgoFormFieldComponent;
    exports.IgoFormFieldModule = IgoFormFieldModule;
    exports.IgoFormFormModule = IgoFormFormModule;
    exports.IgoFormGroupModule = IgoFormGroupModule;
    exports.IgoFormModule = IgoFormModule;
    exports.IgoHomeButtonModule = IgoHomeButtonModule;
    exports.IgoImageModule = IgoImageModule;
    exports.IgoInteractiveTourModule = IgoInteractiveTourModule;
    exports.IgoJsonDialogModule = IgoJsonDialogModule;
    exports.IgoKeyValueModule = IgoKeyValueModule;
    exports.IgoListModule = IgoListModule;
    exports.IgoMatBadgeIconModule = IgoMatBadgeIconModule;
    exports.IgoPanelModule = IgoPanelModule;
    exports.IgoSidenavModule = IgoSidenavModule;
    exports.IgoSpinnerModule = IgoSpinnerModule;
    exports.IgoStopPropagationModule = IgoStopPropagationModule;
    exports.IgoTableModule = IgoTableModule;
    exports.IgoToolModule = IgoToolModule;
    exports.IgoToolboxModule = IgoToolboxModule;
    exports.IgoWidgetModule = IgoWidgetModule;
    exports.IgoWidgetOutletModule = IgoWidgetOutletModule;
    exports.IgoWorkspaceModule = IgoWorkspaceModule;
    exports.IgoWorkspaceSelectorModule = IgoWorkspaceSelectorModule;
    exports.IgoWorkspaceWidgetOutletModule = IgoWorkspaceWidgetOutletModule;
    exports.InteractiveTourComponent = InteractiveTourComponent;
    exports.InteractiveTourLoader = InteractiveTourLoader;
    exports.InteractiveTourService = InteractiveTourService;
    exports.JsonDialogComponent = JsonDialogComponent;
    exports.JsonDialogService = JsonDialogService;
    exports.KeyValuePipe = KeyValuePipe;
    exports.ListComponent = ListComponent;
    exports.ListItemDirective = ListItemDirective;
    exports.PanelComponent = PanelComponent;
    exports.SanitizeHtmlPipe = SanitizeHtmlPipe;
    exports.SecureImagePipe = SecureImagePipe;
    exports.SidenavShimDirective = SidenavShimDirective;
    exports.SpinnerActivityDirective = SpinnerActivityDirective;
    exports.SpinnerComponent = SpinnerComponent;
    exports.StopDropPropagationDirective = StopDropPropagationDirective;
    exports.StopPropagationDirective = StopPropagationDirective;
    exports.TableComponent = TableComponent;
    exports.TableDataSource = TableDataSource;
    exports.TableDatabase = TableDatabase;
    exports.ToolComponent = ToolComponent;
    exports.ToolService = ToolService;
    exports.Toolbox = Toolbox;
    exports.ToolboxComponent = ToolboxComponent;
    exports.Widget = Widget;
    exports.WidgetOutletComponent = WidgetOutletComponent;
    exports.WidgetService = WidgetService;
    exports.Workspace = Workspace;
    exports.WorkspaceSelectorComponent = WorkspaceSelectorComponent;
    exports.WorkspaceStore = WorkspaceStore;
    exports.WorkspaceWidgetOutletComponent = WorkspaceWidgetOutletComponent;
    exports.formControlIsRequired = formControlIsRequired;
    exports.getAllFormFields = getAllFormFields;
    exports.getControlErrorMessage = getControlErrorMessage;
    exports.getDefaultErrorMessages = getDefaultErrorMessages;
    exports.getEntityIcon = getEntityIcon;
    exports.getEntityId = getEntityId;
    exports.getEntityProperty = getEntityProperty;
    exports.getEntityRevision = getEntityRevision;
    exports.getEntityTitle = getEntityTitle;
    exports.getEntityTitleHtml = getEntityTitleHtml;
    exports.getFormFieldByName = getFormFieldByName;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=igo2-common.umd.js.map
