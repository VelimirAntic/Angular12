(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bowser'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@igo2/utils', ['exports', 'bowser', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.igo2 = global.igo2 || {}, global.igo2.utils = {}), global.bowser, global.rxjs, global.rxjs.operators));
})(this, (function (exports, Bowser, rxjs, operators) { 'use strict';

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

    var Bowser__namespace = /*#__PURE__*/_interopNamespace(Bowser);

    /* eslint-disable */
    var ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var Base64 = /** @class */ (function () {
        function Base64() {
        }
        Base64.getByte = function (s, i) {
            var x = s.charCodeAt(i);
            return x;
        };
        Base64.getByte64 = function (s, i) {
            var idx = this.ALPHA.indexOf(s.charAt(i));
            return idx;
        };
        Base64.decode = function (s) {
            var pads = 0, i, b10, imax = s.length, x = [];
            s = String(s);
            if (imax === 0) {
                return s;
            }
            if (s.charAt(imax - 1) === this.PADCHAR) {
                pads = 1;
                if (s.charAt(imax - 2) === this.PADCHAR) {
                    pads = 2;
                }
                imax -= 4;
            }
            for (i = 0; i < imax; i += 4) {
                b10 =
                    (this.getByte64(s, i) << 18) |
                        (this.getByte64(s, i + 1) << 12) |
                        (this.getByte64(s, i + 2) << 6) |
                        this.getByte64(s, i + 3);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255));
            }
            switch (pads) {
                case 1:
                    b10 =
                        (this.getByte64(s, i) << 18) |
                            (this.getByte64(s, i + 1) << 12) |
                            (this.getByte64(s, i + 2) << 6);
                    x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
                    break;
                case 2:
                    b10 = (this.getByte64(s, i) << 18) | (this.getByte64(s, i + 1) << 12);
                    x.push(String.fromCharCode(b10 >> 16));
                    break;
            }
            return x.join('');
        };
        Base64.encode = function (s) {
            s = String(s);
            var i, b10, x = [], imax = s.length - s.length % 3;
            if (s.length === 0) {
                return s;
            }
            for (i = 0; i < imax; i += 3) {
                b10 =
                    (this.getByte(s, i) << 16) |
                        (this.getByte(s, i + 1) << 8) |
                        this.getByte(s, i + 2);
                x.push(this.ALPHA.charAt(b10 >> 18));
                x.push(this.ALPHA.charAt((b10 >> 12) & 63));
                x.push(this.ALPHA.charAt((b10 >> 6) & 63));
                x.push(this.ALPHA.charAt(b10 & 63));
            }
            switch (s.length - imax) {
                case 1:
                    b10 = this.getByte(s, i) << 16;
                    x.push(this.ALPHA.charAt(b10 >> 18) +
                        this.ALPHA.charAt((b10 >> 12) & 63) +
                        this.PADCHAR +
                        this.PADCHAR);
                    break;
                case 2:
                    b10 = (this.getByte(s, i) << 16) | (this.getByte(s, i + 1) << 8);
                    x.push(this.ALPHA.charAt(b10 >> 18) +
                        this.ALPHA.charAt((b10 >> 12) & 63) +
                        this.ALPHA.charAt((b10 >> 6) & 63) +
                        this.PADCHAR);
                    break;
            }
            return x.join('');
        };
        return Base64;
    }());
    Base64.PADCHAR = '=';
    Base64.ALPHA = ALPHA;

    var userAgent = Bowser__namespace.getParser(window.navigator.userAgent);

    var Clipboard = /** @class */ (function () {
        function Clipboard() {
        }
        Clipboard.copy = function (element) {
            var successful = false;
            if (typeof element === 'string') {
                var textArea = Clipboard.createTextArea(element);
                Clipboard.selectText(textArea);
                successful = Clipboard.copyTextToClipboard();
                Clipboard.destroyTextArea(textArea);
            }
            else {
                Clipboard.selectText(element);
                successful = Clipboard.copyTextToClipboard();
            }
            return successful;
        };
        Clipboard.createTextArea = function (text) {
            var textArea = document.createElement('textArea');
            textArea.value = text;
            document.body.appendChild(textArea);
            return textArea;
        };
        Clipboard.destroyTextArea = function (textArea) {
            document.body.removeChild(textArea);
        };
        Clipboard.selectText = function (textArea) {
            if (userAgent.getOSName() === 'iOS') {
                var oldContentEditable = textArea.contentEditable;
                var oldReadOnly = textArea.readOnly;
                var range = document.createRange();
                var selection = window.getSelection();
                textArea.contenteditable = true;
                textArea.readonly = false;
                range.selectNodeContents(textArea);
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
                textArea.contentEditable = oldContentEditable;
                textArea.readOnly = oldReadOnly;
            }
            else {
                textArea.select();
            }
        };
        Clipboard.copyTextToClipboard = function () {
            if (!(userAgent.getOSName() === 'iOS' && userAgent.compareVersion('<10'))) {
                return document.execCommand('copy');
            }
            return false;
        };
        return Clipboard;
    }());

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

    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        StringUtils.diff = function (s1, s2, p) {
            if (p === void 0) { p = 4; }
            if (!s1 && !s2) {
                return '';
            }
            if (!s1) {
                return '<span class="inserted">' + s2 + '</span>';
            }
            if (!s2) {
                return '<span class="deleted">' + s1 + '</span>';
            }
            s1 = s1.toString();
            s2 = s2.toString();
            var changeData = StringUtils.getChanges(s1, s2, '', p);
            var nextS = s2.slice(changeData.mtc.length + changeData.ins.length + changeData.sbs.length); // remaining part of "s"
            var nextThis = s1.slice(changeData.mtc.length + changeData.del.length + changeData.sbs.length); // remaining part of "this"
            var result = ''; // the glorious result
            if (changeData.del.length > 0) {
                changeData.del = '<span class="deleted">' + changeData.del + '</span>';
            }
            if (changeData.ins.length > 0) {
                changeData.ins = '<span class="inserted">' + changeData.ins + '</span>';
            }
            result = changeData.mtc + changeData.del + changeData.ins + changeData.sbs;
            result +=
                nextThis !== '' || nextS !== ''
                    ? StringUtils.diff(nextThis, nextS, p)
                    : '';
            return result;
        };
        StringUtils.getMatchingSubstring = function (s, l, m) {
            // returns the first matching substring in-between the two strings
            var i = 0;
            var match = false;
            var slen = s.length;
            var o = { fis: slen, mtc: m, sbs: '' }; // temporary object used to construct the cd (change data) object
            while (i < slen) {
                l[i] === s[i]
                    ? match
                        ? (o.sbs += s[i]) // o.sbs holds the matching substring itsef
                        : ((match = true), (o.fis = i), (o.sbs = s[i]))
                    : match
                        ? (i = slen) // stop after the first found substring
                        : (i = i);
                ++i;
            }
            return o;
        };
        StringUtils.getChanges = function (s1, s2, m, p) {
            var _a;
            var isThisLonger = s1.length >= s1.length ? true : false;
            var _b = __read(isThisLonger ? [s1, s2] : [s2, s1], 2), longer = _b[0], shorter = _b[1]; // assignment of longer and shorter by es6 destructuring
            var bi = 0; // base index designating the index of first mismacthing character in both strings
            while (shorter[bi] === longer[bi] && bi < shorter.length) {
                ++bi;
            } // make bi the index of first mismatching character
            longer = longer.split('').slice(bi); // as the longer string will be rotated it is converted into array
            shorter = shorter.slice(bi); // shorter and longer now starts from the first mismatching character
            var len = longer.length; // length of the longer string
            var cd = {
                fis: shorter.length,
                fil: len,
                sbs: '',
                mtc: m + s2.slice(0, bi)
            }; // if exists mtc holds the matching string at the front
            var sub = { sbs: '' }; // returned substring per 1 character rotation of the longer string
            if (shorter !== '') {
                for (var rc = 0; rc < len && sub.sbs.length < p; rc++) {
                    // rc -> rotate count, p -> precision factor
                    sub = StringUtils.getMatchingSubstring(shorter, StringUtils.rotateArray(longer, rc), cd.mtc); // rotate longer string 1 char and get substring
                    sub.fil =
                        rc < len - sub.fis
                            ? sub.fis + rc // mismatch is longer than the mismatch in short
                            : sub.fis - len + rc; // mismatch is shorter than the mismatch in short
                    if (sub.sbs.length > cd.sbs.length) {
                        cd = sub; // only keep the one with the longest substring.
                    }
                }
            }
            // insert the mismatching delete subsrt and insert substr to the cd object and attach the previous substring
            _a = __read(isThisLonger
                ? [longer.slice(0, cd.fil).join(''), shorter.slice(0, cd.fis)]
                : [shorter.slice(0, cd.fis), longer.slice(0, cd.fil).join('')], 2), cd.del = _a[0], cd.ins = _a[1];
            return cd.del.indexOf(' ') === -1 ||
                cd.ins.indexOf(' ') === -1 ||
                cd.del === '' ||
                cd.ins === '' ||
                cd.sbs === ''
                ? cd
                : StringUtils.getChanges(cd.del, cd.ins, cd.mtc, p);
        };
        StringUtils.rotateArray = function (array, n) {
            var len = array.length;
            var res = new Array(array.length);
            if (n % len === 0) {
                return array.slice();
            }
            else {
                for (var i = 0; i < len; i++) {
                    res[i] = array[(i + (len + (n % len))) % len];
                }
            }
            return res;
        };
        return StringUtils;
    }());

    exports.ChangeType = void 0;
    (function (ChangeType) {
        ChangeType["ADDED"] = "added";
        ChangeType["DELETED"] = "deleted";
        ChangeType["MODIFIED"] = "modified";
    })(exports.ChangeType || (exports.ChangeType = {}));

    var ChangeUtils = /** @class */ (function () {
        function ChangeUtils() {
        }
        ChangeUtils.findChanges = function (obj1, obj2, ignoreKeys) {
            var e_1, _a;
            if (ignoreKeys === void 0) { ignoreKeys = []; }
            var items = {
                added: [],
                deleted: [],
                modified: []
            };
            if (!obj1 || !obj2) {
                return items;
            }
            var obj1Clone = __spreadArray([], __read(obj1));
            var obj2Clone = __spreadArray([], __read(obj2));
            var _loop_1 = function (fromItem) {
                var index = obj2Clone.findIndex(function (s) { return s.id === fromItem.id; });
                if (index === -1) {
                    items.deleted.push({
                        change: { type: exports.ChangeType.DELETED },
                        value: fromItem
                    });
                    return "continue";
                }
                var toItem = obj2Clone.splice(index, 1)[0];
                var fromItemClone = JSON.parse(JSON.stringify(fromItem));
                var toItemClone = JSON.parse(JSON.stringify(toItem));
                var keysChanged = ChangeUtils.compareObject(fromItemClone, toItemClone, undefined, ignoreKeys);
                if (keysChanged.length) {
                    items.modified.push({
                        change: {
                            type: exports.ChangeType.MODIFIED,
                            keysChanged: keysChanged
                        },
                        value: fromItemClone,
                        oldValue: fromItem,
                        newValue: toItem
                    });
                }
            };
            try {
                for (var obj1Clone_1 = __values(obj1Clone), obj1Clone_1_1 = obj1Clone_1.next(); !obj1Clone_1_1.done; obj1Clone_1_1 = obj1Clone_1.next()) {
                    var fromItem = obj1Clone_1_1.value;
                    _loop_1(fromItem);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (obj1Clone_1_1 && !obj1Clone_1_1.done && (_a = obj1Clone_1.return)) _a.call(obj1Clone_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            items.added = obj2Clone.map(function (itemAdded) {
                return {
                    change: { type: exports.ChangeType.ADDED },
                    value: itemAdded
                };
            });
            return items;
        };
        ChangeUtils.compareObject = function (fromItem, toItem, baseKey, ignoreKeys) {
            var _this = this;
            if (ignoreKeys === void 0) { ignoreKeys = []; }
            var fromItemClone = JSON.parse(JSON.stringify(fromItem));
            var toItemClone = JSON.parse(JSON.stringify(toItem));
            var keys = new Set(__spreadArray(__spreadArray([], __read(Object.keys(fromItem))), __read(Object.keys(toItem))));
            var keysChanged = [];
            keys.forEach(function (key) {
                var keyString = baseKey ? baseKey + "." + key : key;
                if (ignoreKeys.indexOf(keyString) !== -1) {
                    return;
                }
                if (Array.isArray(fromItem[key])) {
                    fromItem[key] = fromItem[key].join(',<br>');
                }
                if (Array.isArray(toItem[key])) {
                    toItem[key] = toItem[key].join(',<br>');
                }
                if (typeof fromItem[key] === 'object' &&
                    typeof toItem[key] === 'object' &&
                    fromItem[key] !== null &&
                    toItem[key] !== null) {
                    keysChanged = keysChanged.concat(_this.compareObject(fromItem[key], toItem[key], keyString));
                }
                else {
                    if (fromItem[key] !== toItem[key]) {
                        keysChanged.push({
                            key: keyString,
                            oldValue: fromItemClone[key],
                            newValue: toItemClone[key]
                        });
                        fromItem[key] = StringUtils.diff(fromItem[key], toItem[key]);
                    }
                }
            });
            return keysChanged;
        };
        return ChangeUtils;
    }());

    /**
     * Trigger download of a file
     *
     * @param content File content
     * @param mimeType File mime type
     * @param fileName File name
     */
    function downloadContent(content, mimeType, fileName) {
        var uri = "data:" + mimeType + "," + encodeURIComponent(content);
        downloadFromUri(uri, fileName);
    }
    /**
     * Trigger download of a file
     *
     * @param content File content
     * @param mimeType File mime type
     * @param fileName File name
     */
    function downloadFromUri(uri, fileName) {
        var element = document.createElement('a');
        element.setAttribute('href', uri);
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    var ObjectUtils = /** @class */ (function () {
        function ObjectUtils() {
        }
        ObjectUtils.resolve = function (obj, key) {
            var keysArray = key
                .replace(/\[/g, '.')
                .replace(/\]/g, '')
                .split('.');
            var current = obj;
            while (keysArray.length) {
                if (typeof current !== 'object') {
                    return undefined;
                }
                current = current[keysArray.shift()];
            }
            return current;
        };
        ObjectUtils.isObject = function (item) {
            return (item &&
                typeof item === 'object' &&
                !Array.isArray(item) &&
                item !== null &&
                !(item instanceof Date));
        };
        ObjectUtils.mergeDeep = function (target, source, ignoreUndefined) {
            if (ignoreUndefined === void 0) { ignoreUndefined = false; }
            var output = Object.assign({}, target);
            if (ObjectUtils.isObject(target) && ObjectUtils.isObject(source)) {
                Object.keys(source)
                    .filter(function (key) { return !ignoreUndefined || source[key] !== undefined; })
                    .forEach(function (key) {
                    var _a, _b;
                    if (ObjectUtils.isObject(source[key])) {
                        if (!(key in target)) {
                            Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                        }
                        else {
                            output[key] = ObjectUtils.mergeDeep(target[key], source[key], ignoreUndefined);
                        }
                    }
                    else {
                        Object.assign(output, (_b = {}, _b[key] = source[key], _b));
                    }
                });
            }
            return output;
        };
        ObjectUtils.copyDeep = function (src) {
            var target = Array.isArray(src) ? [] : {};
            for (var prop in src) {
                if (src.hasOwnProperty(prop)) {
                    var value = src[prop];
                    if (value && typeof value === 'object') {
                        target[prop] = this.copyDeep(value);
                    }
                    else {
                        target[prop] = value;
                    }
                }
            }
            return target;
        };
        ObjectUtils.removeDuplicateCaseInsensitive = function (obj) {
            var _a, _b;
            var summaryCapitalizeObject = {};
            var capitalizeObject = {};
            var upperCaseCount = [];
            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    var upperCaseProperty = property.toUpperCase();
                    if (!summaryCapitalizeObject.hasOwnProperty(upperCaseProperty)) {
                        summaryCapitalizeObject[upperCaseProperty] = [
                            (_a = {}, _a[property] = obj[property], _a)
                        ];
                    }
                    else {
                        summaryCapitalizeObject[upperCaseProperty].push((_b = {},
                            _b[property] = obj[property],
                            _b));
                    }
                    // counting the number of uppercase lettersMna
                    upperCaseCount.push({
                        key: property,
                        count: property.replace(/[^A-Z]/g, '').length
                    });
                }
            }
            var _loop_1 = function (capitalizedProperty) {
                if (summaryCapitalizeObject.hasOwnProperty(capitalizedProperty)) {
                    if (summaryCapitalizeObject.hasOwnProperty(capitalizedProperty)) {
                        var capitalizedPropertyObject = summaryCapitalizeObject[capitalizedProperty];
                        if (capitalizedPropertyObject.length === 1) {
                            // for single params (no duplicates)
                            var singlePossibility = capitalizedPropertyObject[0];
                            capitalizeObject[capitalizedProperty] =
                                singlePossibility[Object.keys(singlePossibility)[0]];
                        }
                        else if (capitalizedPropertyObject.length > 1) {
                            // defining the closest to lowercase property
                            var paramClosestToLowercase = upperCaseCount
                                .filter(function (f) { return f.key.toLowerCase() === capitalizedProperty.toLowerCase(); })
                                .reduce(function (prev, current) {
                                return prev.y < current.y ? prev : current;
                            });
                            capitalizeObject[paramClosestToLowercase.key.toUpperCase()] =
                                obj[paramClosestToLowercase.key];
                        }
                    }
                }
            };
            for (var capitalizedProperty in summaryCapitalizeObject) {
                _loop_1(capitalizedProperty);
            }
            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    delete obj[property];
                }
            }
            for (var property in capitalizeObject) {
                if (capitalizeObject.hasOwnProperty(property)) {
                    obj[property] = capitalizeObject[property];
                }
            }
        };
        ObjectUtils.removeUndefined = function (obj) {
            var output = {};
            if (ObjectUtils.isObject(obj)) {
                Object.keys(obj)
                    .filter(function (key) { return obj[key] !== undefined; })
                    .forEach(function (key) {
                    if (ObjectUtils.isObject(obj[key]) || Array.isArray(obj[key])) {
                        output[key] = ObjectUtils.removeUndefined(obj[key]);
                    }
                    else {
                        output[key] = obj[key];
                    }
                });
                return output;
            }
            if (Array.isArray(obj)) {
                return obj.map(function (o) { return ObjectUtils.removeUndefined(o); });
            }
            return obj;
        };
        ObjectUtils.removeNull = function (obj) {
            var output = {};
            if (ObjectUtils.isObject(obj)) {
                Object.keys(obj)
                    .filter(function (key) { return obj[key] !== null; })
                    .forEach(function (key) {
                    if (ObjectUtils.isObject(obj[key]) || Array.isArray(obj[key])) {
                        output[key] = ObjectUtils.removeNull(obj[key]);
                    }
                    else {
                        output[key] = obj[key];
                    }
                });
                return output;
            }
            if (Array.isArray(obj)) {
                return obj.map(function (o) { return ObjectUtils.removeNull(o); });
            }
            return obj;
        };
        ObjectUtils.naturalCompare = function (a, b, direction, nullsFirst) {
            if (direction === void 0) { direction = 'asc'; }
            if (direction === 'desc') {
                b = [a, (a = b)][0];
            }
            // nullsFirst = undefined : end if direction = 'asc', first if direction = 'desc'
            // nullsFirst = true : always first
            // nullsFirst = false : always end
            if (a === null ||
                a === '' ||
                a === undefined ||
                b === null ||
                b === '' ||
                b === undefined) {
                var nullScore = a === b
                    ? 0
                    : a === undefined
                        ? 3
                        : b === undefined
                            ? -3
                            : a === null
                                ? 2
                                : b === null
                                    ? -2
                                    : a === ''
                                        ? 1
                                        : -1;
                if (direction === 'desc') {
                    return nullsFirst !== false ? nullScore : nullScore * -1;
                }
                return nullsFirst === true ? nullScore * -1 : nullScore;
            }
            var ax = [];
            var bx = [];
            a = '' + a;
            b = '' + b;
            a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
                ax.push([$1 || Infinity, $2 || '']);
            });
            b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
                bx.push([$1 || Infinity, $2 || '']);
            });
            while (ax.length && bx.length) {
                var an = ax.shift();
                var bn = bx.shift();
                var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
                if (nn) {
                    return nn;
                }
            }
            return ax.length - bx.length;
        };
        /**
         * Return true if two object are equivalent.
         * Objects are considered equivalent if they have the same properties and
         * if all of their properties (first-level only) share the same value.
         * @param obj1 First object
         * @param obj2 Second object
         * @returns Whether two objects arer equivalent
         */
        ObjectUtils.objectsAreEquivalent = function (obj1, obj2) {
            var e_1, _a;
            if (obj1 === obj2) {
                return true;
            }
            var obj1Props = Object.getOwnPropertyNames(obj1);
            var obj2Props = Object.getOwnPropertyNames(obj2);
            if (obj1Props.length !== obj2Props.length) {
                return false;
            }
            try {
                for (var obj1Props_1 = __values(obj1Props), obj1Props_1_1 = obj1Props_1.next(); !obj1Props_1_1.done; obj1Props_1_1 = obj1Props_1.next()) {
                    var prop = obj1Props_1_1.value;
                    if (obj1[prop] !== obj2[prop]) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (obj1Props_1_1 && !obj1Props_1_1.done && (_a = obj1Props_1.return)) _a.call(obj1Props_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
        };
        /**
         * Return a new object with an array of keys removed
         * @param obj Source object
         * @param keys Keys to remove
         * @returns A new object
         */
        ObjectUtils.removeKeys = function (obj, keys) {
            var newObj = Object.keys(obj)
                .filter(function (key) { return keys.indexOf(key) < 0; })
                .reduce(function (_obj, key) {
                _obj[key] = obj[key];
                return _obj;
            }, {});
            return newObj;
        };
        return ObjectUtils;
    }());

    var NumberUtils = /** @class */ (function () {
        function NumberUtils() {
        }
        NumberUtils.roundToNDecimal = function (num, decimal) {
            if (decimal === void 0) { decimal = 3; }
            var roundFactor = Math.pow(10, decimal);
            return Math.round((num) * roundFactor) / roundFactor;
        };
        return NumberUtils;
    }());

    /** Utility function to create a K:V from a list of strings */
    function strEnum(o) {
        return o.reduce(function (res, key) {
            res[key] = key;
            return res;
        }, Object.create(null));
    }

    function S4() {
        // eslint-disable-next-line no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    function uuid() {
        var id = "" + S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
        return id.toLowerCase();
    }

    exports.SubjectStatus = void 0;
    (function (SubjectStatus) {
        SubjectStatus[SubjectStatus["Error"] = 0] = "Error";
        SubjectStatus[SubjectStatus["Done"] = 1] = "Done";
        SubjectStatus[SubjectStatus["Working"] = 2] = "Working";
        SubjectStatus[SubjectStatus["Waiting"] = 3] = "Waiting";
    })(exports.SubjectStatus || (exports.SubjectStatus = {}));
    var Watcher = /** @class */ (function () {
        function Watcher() {
            this.status$ = new rxjs.Subject();
        }
        Object.defineProperty(Watcher.prototype, "status", {
            get: function () {
                return this._status;
            },
            set: function (value) {
                this._status = value;
                this.status$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        // eslint-disable-next-line @typescript-eslint/ban-types
        Watcher.prototype.subscribe = function (callback, scope) {
            var _this = this;
            this.watch();
            this.status$$ = this.status$
                .pipe(operators.distinctUntilChanged())
                .subscribe(function (status) {
                _this.handleStatusChange(status);
                callback.call(scope, _this);
            });
        };
        Watcher.prototype.unsubscribe = function () {
            this.unwatch();
            if (this.status$$ !== undefined) {
                this.status$$.unsubscribe();
                this.status$$ = undefined;
            }
            this.status = exports.SubjectStatus.Waiting;
        };
        Watcher.prototype.handleStatusChange = function (status) { };
        return Watcher;
    }());

    /*
     * Public API Surface of utils
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Base64 = Base64;
    exports.ChangeUtils = ChangeUtils;
    exports.Clipboard = Clipboard;
    exports.NumberUtils = NumberUtils;
    exports.ObjectUtils = ObjectUtils;
    exports.S4 = S4;
    exports.StringUtils = StringUtils;
    exports.Watcher = Watcher;
    exports.downloadContent = downloadContent;
    exports.downloadFromUri = downloadFromUri;
    exports.strEnum = strEnum;
    exports.userAgent = userAgent;
    exports.uuid = uuid;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=igo2-utils.umd.js.map
