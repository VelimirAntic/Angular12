import * as Bowser from 'bowser';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/* eslint-disable */
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
class Base64 {
    static getByte(s, i) {
        const x = s.charCodeAt(i);
        return x;
    }
    static getByte64(s, i) {
        const idx = this.ALPHA.indexOf(s.charAt(i));
        return idx;
    }
    static decode(s) {
        let pads = 0, i, b10, imax = s.length, x = [];
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
    }
    static encode(s) {
        s = String(s);
        let i, b10, x = [], imax = s.length - s.length % 3;
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
    }
}
Base64.PADCHAR = '=';
Base64.ALPHA = ALPHA;

const userAgent = Bowser.getParser(window.navigator.userAgent);

class Clipboard {
    static copy(element) {
        let successful = false;
        if (typeof element === 'string') {
            const textArea = Clipboard.createTextArea(element);
            Clipboard.selectText(textArea);
            successful = Clipboard.copyTextToClipboard();
            Clipboard.destroyTextArea(textArea);
        }
        else {
            Clipboard.selectText(element);
            successful = Clipboard.copyTextToClipboard();
        }
        return successful;
    }
    static createTextArea(text) {
        const textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
        return textArea;
    }
    static destroyTextArea(textArea) {
        document.body.removeChild(textArea);
    }
    static selectText(textArea) {
        if (userAgent.getOSName() === 'iOS') {
            const oldContentEditable = textArea.contentEditable;
            const oldReadOnly = textArea.readOnly;
            const range = document.createRange();
            const selection = window.getSelection();
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
    }
    static copyTextToClipboard() {
        if (!(userAgent.getOSName() === 'iOS' && userAgent.compareVersion('<10'))) {
            return document.execCommand('copy');
        }
        return false;
    }
}

class StringUtils {
    static diff(s1, s2, p = 4) {
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
        const changeData = StringUtils.getChanges(s1, s2, '', p);
        const nextS = s2.slice(changeData.mtc.length + changeData.ins.length + changeData.sbs.length); // remaining part of "s"
        const nextThis = s1.slice(changeData.mtc.length + changeData.del.length + changeData.sbs.length); // remaining part of "this"
        let result = ''; // the glorious result
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
    }
    static getMatchingSubstring(s, l, m) {
        // returns the first matching substring in-between the two strings
        let i = 0;
        let match = false;
        const slen = s.length;
        const o = { fis: slen, mtc: m, sbs: '' }; // temporary object used to construct the cd (change data) object
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
    }
    static getChanges(s1, s2, m, p) {
        const isThisLonger = s1.length >= s1.length ? true : false;
        let [longer, shorter] = isThisLonger ? [s1, s2] : [s2, s1]; // assignment of longer and shorter by es6 destructuring
        let bi = 0; // base index designating the index of first mismacthing character in both strings
        while (shorter[bi] === longer[bi] && bi < shorter.length) {
            ++bi;
        } // make bi the index of first mismatching character
        longer = longer.split('').slice(bi); // as the longer string will be rotated it is converted into array
        shorter = shorter.slice(bi); // shorter and longer now starts from the first mismatching character
        const len = longer.length; // length of the longer string
        let cd = {
            fis: shorter.length,
            fil: len,
            sbs: '',
            mtc: m + s2.slice(0, bi)
        }; // if exists mtc holds the matching string at the front
        let sub = { sbs: '' }; // returned substring per 1 character rotation of the longer string
        if (shorter !== '') {
            for (let rc = 0; rc < len && sub.sbs.length < p; rc++) {
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
        [cd.del, cd.ins] = isThisLonger
            ? [longer.slice(0, cd.fil).join(''), shorter.slice(0, cd.fis)]
            : [shorter.slice(0, cd.fis), longer.slice(0, cd.fil).join('')];
        return cd.del.indexOf(' ') === -1 ||
            cd.ins.indexOf(' ') === -1 ||
            cd.del === '' ||
            cd.ins === '' ||
            cd.sbs === ''
            ? cd
            : StringUtils.getChanges(cd.del, cd.ins, cd.mtc, p);
    }
    static rotateArray(array, n) {
        const len = array.length;
        const res = new Array(array.length);
        if (n % len === 0) {
            return array.slice();
        }
        else {
            for (let i = 0; i < len; i++) {
                res[i] = array[(i + (len + (n % len))) % len];
            }
        }
        return res;
    }
}

var ChangeType;
(function (ChangeType) {
    ChangeType["ADDED"] = "added";
    ChangeType["DELETED"] = "deleted";
    ChangeType["MODIFIED"] = "modified";
})(ChangeType || (ChangeType = {}));

class ChangeUtils {
    static findChanges(obj1, obj2, ignoreKeys = []) {
        const items = {
            added: [],
            deleted: [],
            modified: []
        };
        if (!obj1 || !obj2) {
            return items;
        }
        const obj1Clone = [...obj1];
        const obj2Clone = [...obj2];
        for (const fromItem of obj1Clone) {
            const index = obj2Clone.findIndex(s => s.id === fromItem.id);
            if (index === -1) {
                items.deleted.push({
                    change: { type: ChangeType.DELETED },
                    value: fromItem
                });
                continue;
            }
            const toItem = obj2Clone.splice(index, 1)[0];
            const fromItemClone = JSON.parse(JSON.stringify(fromItem));
            const toItemClone = JSON.parse(JSON.stringify(toItem));
            const keysChanged = ChangeUtils.compareObject(fromItemClone, toItemClone, undefined, ignoreKeys);
            if (keysChanged.length) {
                items.modified.push({
                    change: {
                        type: ChangeType.MODIFIED,
                        keysChanged
                    },
                    value: fromItemClone,
                    oldValue: fromItem,
                    newValue: toItem
                });
            }
        }
        items.added = obj2Clone.map(itemAdded => {
            return {
                change: { type: ChangeType.ADDED },
                value: itemAdded
            };
        });
        return items;
    }
    static compareObject(fromItem, toItem, baseKey, ignoreKeys = []) {
        const fromItemClone = JSON.parse(JSON.stringify(fromItem));
        const toItemClone = JSON.parse(JSON.stringify(toItem));
        const keys = new Set([
            ...Object.keys(fromItem),
            ...Object.keys(toItem)
        ]);
        let keysChanged = [];
        keys.forEach(key => {
            const keyString = baseKey ? `${baseKey}.${key}` : key;
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
                keysChanged = keysChanged.concat(this.compareObject(fromItem[key], toItem[key], keyString));
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
    }
}

/**
 * Trigger download of a file
 *
 * @param content File content
 * @param mimeType File mime type
 * @param fileName File name
 */
function downloadContent(content, mimeType, fileName) {
    const uri = `data:${mimeType},${encodeURIComponent(content)}`;
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
    const element = document.createElement('a');
    element.setAttribute('href', uri);
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

class ObjectUtils {
    static resolve(obj, key) {
        const keysArray = key
            .replace(/\[/g, '.')
            .replace(/\]/g, '')
            .split('.');
        let current = obj;
        while (keysArray.length) {
            if (typeof current !== 'object') {
                return undefined;
            }
            current = current[keysArray.shift()];
        }
        return current;
    }
    static isObject(item) {
        return (item &&
            typeof item === 'object' &&
            !Array.isArray(item) &&
            item !== null &&
            !(item instanceof Date));
    }
    static mergeDeep(target, source, ignoreUndefined = false) {
        const output = Object.assign({}, target);
        if (ObjectUtils.isObject(target) && ObjectUtils.isObject(source)) {
            Object.keys(source)
                .filter(key => !ignoreUndefined || source[key] !== undefined)
                .forEach(key => {
                if (ObjectUtils.isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, { [key]: source[key] });
                    }
                    else {
                        output[key] = ObjectUtils.mergeDeep(target[key], source[key], ignoreUndefined);
                    }
                }
                else {
                    Object.assign(output, { [key]: source[key] });
                }
            });
        }
        return output;
    }
    static copyDeep(src) {
        const target = Array.isArray(src) ? [] : {};
        for (const prop in src) {
            if (src.hasOwnProperty(prop)) {
                const value = src[prop];
                if (value && typeof value === 'object') {
                    target[prop] = this.copyDeep(value);
                }
                else {
                    target[prop] = value;
                }
            }
        }
        return target;
    }
    static removeDuplicateCaseInsensitive(obj) {
        const summaryCapitalizeObject = {};
        const capitalizeObject = {};
        const upperCaseCount = [];
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                const upperCaseProperty = property.toUpperCase();
                if (!summaryCapitalizeObject.hasOwnProperty(upperCaseProperty)) {
                    summaryCapitalizeObject[upperCaseProperty] = [
                        { [property]: obj[property] }
                    ];
                }
                else {
                    summaryCapitalizeObject[upperCaseProperty].push({
                        [property]: obj[property]
                    });
                }
                // counting the number of uppercase lettersMna
                upperCaseCount.push({
                    key: property,
                    count: property.replace(/[^A-Z]/g, '').length
                });
            }
        }
        for (const capitalizedProperty in summaryCapitalizeObject) {
            if (summaryCapitalizeObject.hasOwnProperty(capitalizedProperty)) {
                if (summaryCapitalizeObject.hasOwnProperty(capitalizedProperty)) {
                    const capitalizedPropertyObject = summaryCapitalizeObject[capitalizedProperty];
                    if (capitalizedPropertyObject.length === 1) {
                        // for single params (no duplicates)
                        const singlePossibility = capitalizedPropertyObject[0];
                        capitalizeObject[capitalizedProperty] =
                            singlePossibility[Object.keys(singlePossibility)[0]];
                    }
                    else if (capitalizedPropertyObject.length > 1) {
                        // defining the closest to lowercase property
                        const paramClosestToLowercase = upperCaseCount
                            .filter(f => f.key.toLowerCase() === capitalizedProperty.toLowerCase())
                            .reduce((prev, current) => {
                            return prev.y < current.y ? prev : current;
                        });
                        capitalizeObject[paramClosestToLowercase.key.toUpperCase()] =
                            obj[paramClosestToLowercase.key];
                    }
                }
            }
        }
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                delete obj[property];
            }
        }
        for (const property in capitalizeObject) {
            if (capitalizeObject.hasOwnProperty(property)) {
                obj[property] = capitalizeObject[property];
            }
        }
    }
    static removeUndefined(obj) {
        const output = {};
        if (ObjectUtils.isObject(obj)) {
            Object.keys(obj)
                .filter(key => obj[key] !== undefined)
                .forEach(key => {
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
            return obj.map(o => ObjectUtils.removeUndefined(o));
        }
        return obj;
    }
    static removeNull(obj) {
        const output = {};
        if (ObjectUtils.isObject(obj)) {
            Object.keys(obj)
                .filter(key => obj[key] !== null)
                .forEach(key => {
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
            return obj.map(o => ObjectUtils.removeNull(o));
        }
        return obj;
    }
    static naturalCompare(a, b, direction = 'asc', nullsFirst) {
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
            const nullScore = a === b
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
        const ax = [];
        const bx = [];
        a = '' + a;
        b = '' + b;
        a.replace(/(\d+)|(\D+)/g, (_, $1, $2) => {
            ax.push([$1 || Infinity, $2 || '']);
        });
        b.replace(/(\d+)|(\D+)/g, (_, $1, $2) => {
            bx.push([$1 || Infinity, $2 || '']);
        });
        while (ax.length && bx.length) {
            const an = ax.shift();
            const bn = bx.shift();
            const nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }
        return ax.length - bx.length;
    }
    /**
     * Return true if two object are equivalent.
     * Objects are considered equivalent if they have the same properties and
     * if all of their properties (first-level only) share the same value.
     * @param obj1 First object
     * @param obj2 Second object
     * @returns Whether two objects arer equivalent
     */
    static objectsAreEquivalent(obj1, obj2) {
        if (obj1 === obj2) {
            return true;
        }
        const obj1Props = Object.getOwnPropertyNames(obj1);
        const obj2Props = Object.getOwnPropertyNames(obj2);
        if (obj1Props.length !== obj2Props.length) {
            return false;
        }
        for (const prop of obj1Props) {
            if (obj1[prop] !== obj2[prop]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Return a new object with an array of keys removed
     * @param obj Source object
     * @param keys Keys to remove
     * @returns A new object
     */
    static removeKeys(obj, keys) {
        const newObj = Object.keys(obj)
            .filter(key => keys.indexOf(key) < 0)
            .reduce((_obj, key) => {
            _obj[key] = obj[key];
            return _obj;
        }, {});
        return newObj;
    }
}

class NumberUtils {
    static roundToNDecimal(num, decimal = 3) {
        const roundFactor = Math.pow(10, decimal);
        return Math.round((num) * roundFactor) / roundFactor;
    }
}

/** Utility function to create a K:V from a list of strings */
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}

function S4() {
    // eslint-disable-next-line no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function uuid() {
    const id = `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
    return id.toLowerCase();
}

var SubjectStatus;
(function (SubjectStatus) {
    SubjectStatus[SubjectStatus["Error"] = 0] = "Error";
    SubjectStatus[SubjectStatus["Done"] = 1] = "Done";
    SubjectStatus[SubjectStatus["Working"] = 2] = "Working";
    SubjectStatus[SubjectStatus["Waiting"] = 3] = "Waiting";
})(SubjectStatus || (SubjectStatus = {}));
class Watcher {
    constructor() {
        this.status$ = new Subject();
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
        this.status$.next(value);
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    subscribe(callback, scope) {
        this.watch();
        this.status$$ = this.status$
            .pipe(distinctUntilChanged())
            .subscribe((status) => {
            this.handleStatusChange(status);
            callback.call(scope, this);
        });
    }
    unsubscribe() {
        this.unwatch();
        if (this.status$$ !== undefined) {
            this.status$$.unsubscribe();
            this.status$$ = undefined;
        }
        this.status = SubjectStatus.Waiting;
    }
    handleStatusChange(status) { }
}

/*
 * Public API Surface of utils
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Base64, ChangeType, ChangeUtils, Clipboard, NumberUtils, ObjectUtils, S4, StringUtils, SubjectStatus, Watcher, downloadContent, downloadFromUri, strEnum, userAgent, uuid };
//# sourceMappingURL=igo2-utils.js.map
