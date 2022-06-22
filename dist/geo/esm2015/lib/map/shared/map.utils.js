import * as olproj from 'ol/proj';
import { MAC } from 'ol/has';
import { NumberUtils } from '@igo2/utils';
/**
 * This method extracts a coordinate tuple from a string.
 * @param str Any string
 * @param mapProjection string Map Projection
 * @param opts.forceNA boolean Force North America Zone
 * @returns object:
 *             lonLat: Coordinate,
 *             message: Message of error,
 *             radius: radius of the confience of coordinate,
 *             conf: confidence of the coordinate}
 */
export function stringToLonLat(str, mapProjection, opts = {}) {
    let lonLat;
    let coordStr;
    let negativeLon;
    let degreesLon;
    let minutesLon;
    let secondsLon;
    let directionLon;
    let decimalLon;
    let negativeLat;
    let degreesLat;
    let minutesLat;
    let secondsLat;
    let directionLat;
    let decimalLat;
    let zone;
    let radius;
    let conf;
    let lon;
    let lat;
    const projectionPattern = '(\\s*;\\s*[\\d]{4,6})';
    const toProjection = '4326';
    let projectionStr;
    const projectionRegex = new RegExp(projectionPattern, 'g');
    const lonlatCoord = '([-+])?([\\d]{1,3})([,.](\\d+))?';
    const lonLatPattern = `${lonlatCoord}[\\s,]+${lonlatCoord}`;
    const lonLatRegex = new RegExp(`^${lonLatPattern}$`, 'g');
    const dmsCoord = '([0-9]{1,2})[:|°]?\\s*([0-9]{1,2})?[:|\'|′|’]?\\s*([0-9]{1,2}(?:.[0-9]+){0,1})?\\s*["|″|”]?\\s*';
    const dmsCoordPattern = `${dmsCoord}([N|S|E|W|O]),?\\s*${dmsCoord}([N|S|E|W|O])`;
    const dmsRegex = new RegExp(`^${dmsCoordPattern}$`, 'gi');
    const patternUtm = '(UTM)-?(\\d{1,2})[\\s,]*(\\d+[.,]?\\d+)[\\s,]+(\\d+[.,]?\\d+)';
    const utmRegex = new RegExp(`^${patternUtm}`, 'gi');
    const patternMtm = '(MTM)-?(\\d{1,2})[\\s,]*(\\d+[.,]?\\d+)[\\s,]+(\\d+[.,]?\\d+)';
    const mtmRegex = new RegExp(`^${patternMtm}`, 'gi');
    const ddCoord = '([-+])?(\\d{1,3})[,.](\\d+)';
    const patternDd = `${ddCoord}\\s*[,]?\\s*${ddCoord}`;
    const ddRegex = new RegExp(`^${patternDd}`, 'g');
    const dmdCoord = '([-+])?(\\d{1,3})[\\s,.]{1}(\\d{1,2})[\\s,.]{1}(\\d{1,2})[.,]?(\\d{1,5})?';
    const patternDmd = `${dmdCoord}\\s*[,.]?\\s*${dmdCoord}`;
    const dmdRegex = new RegExp(`^${patternDmd}`, 'g');
    /* eslint-disable max-len */
    const patternBELL = 'LAT\\s*[\\s:]*\\s*([-+])?(\\d{1,2})[\\s.,]?(\\d+)?[\\s.,]?\\s*(\\d{1,2}([.,]\\d+)?)?\\s*(N|S|E|W)?\\s*LONG\\s*[\\s:]*\\s*([-+])?(\\d{1,3})[\\s.,]?(\\d+)?[\\s.,]?\\s*(\\d{1,2}([.,]\\d+)?)?\\s*(N|S|E|W)?\\s*UNC\\s*[\\s:]?\\s*(\\d+)\\s*CONF\\s*[\\s:]?\\s*(\\d{1,3})';
    const bellRegex = new RegExp(`^${patternBELL}?`, 'gi');
    const mmCoord = '([-+]?\\d+)[,.]?(\\d+)?';
    const mmPattern = `${mmCoord}[\\s,]+${mmCoord}`;
    const mmRegex = new RegExp(`^${mmPattern}$`, 'g');
    let isXYCoords = false;
    str = str.toLocaleUpperCase().trim();
    // Extract projection
    if (projectionRegex.test(str)) {
        [coordStr, projectionStr] = str.split(';').map(s => s.trim());
    }
    else {
        coordStr = str;
    }
    if (lonLatRegex.test(coordStr)) {
        [
            ,
            negativeLon,
            lon,
            ,
            decimalLon,
            negativeLat,
            lat,
            ,
            decimalLat
        ] = coordStr.match(lonLatPattern);
        lon = parseFloat((negativeLon ? negativeLon : '') + lon + '.' + decimalLon);
        lat = parseFloat((negativeLat ? negativeLat : '') + lat + '.' + decimalLat);
    }
    else if (dmsRegex.test(coordStr)) {
        [
            ,
            degreesLon,
            minutesLon,
            secondsLon,
            directionLon,
            degreesLat,
            minutesLat,
            secondsLat,
            directionLat
        ] = coordStr.match(dmsCoordPattern);
        if (directionLon === 'S' || directionLon === 'N') {
            degreesLon = [degreesLat, (degreesLat = degreesLon)][0];
            minutesLon = [minutesLat, (minutesLat = minutesLon)][0];
            secondsLon = [secondsLat, (secondsLat = secondsLon)][0];
            directionLon = [directionLat, (directionLat = directionLon)][0];
        }
        lon = convertDMSToDD(parseFloat(degreesLon), parseFloat(minutesLon), parseFloat(secondsLon), directionLon);
        lat = convertDMSToDD(parseFloat(degreesLat), parseFloat(minutesLat), parseFloat(secondsLat), directionLat);
    }
    else if (utmRegex.test(coordStr)) {
        isXYCoords = true;
        [, , zone, lon, lat] = coordStr.match(patternUtm);
        const epsgUtm = Number(zone) < 10 ? `EPSG:3260${zone}` : `EPSG:326${zone}`;
        [lon, lat] = olproj.transform([parseFloat(lon), parseFloat(lat)], epsgUtm, 'EPSG:4326');
    }
    else if (mtmRegex.test(coordStr)) {
        isXYCoords = true;
        [, , zone, lon, lat] = coordStr.match(patternMtm);
        const epsgMtm = Number(zone) < 10 ? `EPSG:3218${zone}` : `EPSG:321${80 + Number(zone)}`;
        [lon, lat] = olproj.transform([parseFloat(lon), parseFloat(lat)], epsgMtm, 'EPSG:4326');
    }
    else if (dmdRegex.test(coordStr)) {
        [
            ,
            negativeLon,
            degreesLon,
            minutesLon,
            secondsLon,
            decimalLon,
            negativeLat,
            degreesLat,
            minutesLat,
            secondsLat,
            decimalLat
        ] = coordStr.match(patternDmd);
        lon = convertDMSToDD(parseFloat((negativeLon ? negativeLon : '') + degreesLon), parseFloat(minutesLon), parseFloat(secondsLon), directionLon);
        lat = convertDMSToDD(parseFloat((negativeLat ? negativeLat : '') + degreesLat), parseFloat(minutesLat), parseFloat(secondsLat), directionLat);
    }
    else if (ddRegex.test(coordStr)) {
        [
            ,
            negativeLon,
            degreesLon,
            decimalLon,
            negativeLat,
            degreesLat,
            decimalLat
        ] = coordStr.match(patternDd);
        lon = convertDMSToDD(parseFloat((negativeLon ? negativeLon : '') + degreesLon), parseFloat(minutesLon), parseFloat(secondsLon), directionLon);
        lat = convertDMSToDD(parseFloat((negativeLat ? negativeLat : '') + degreesLat), parseFloat(minutesLat), parseFloat(secondsLat), directionLat);
    }
    else if (bellRegex.test(coordStr)) {
        [
            ,
            negativeLat,
            degreesLat,
            minutesLat,
            secondsLat,
            ,
            directionLat,
            negativeLon,
            degreesLon,
            minutesLon,
            secondsLon,
            ,
            directionLon,
            radius,
            conf
        ] = coordStr.match(patternBELL);
        // Set default value for North America
        if (!directionLon) {
            directionLon = 'W';
        }
        // Check if real minutes or decimals
        if (minutesLon && minutesLon.length > 2) {
            lon = parseFloat((negativeLon ? negativeLon : '') + degreesLon + '.' + minutesLon);
        }
        else {
            lon = convertDMSToDD(parseFloat(degreesLon), parseFloat(minutesLon), parseFloat(secondsLon), directionLon);
        }
        if (minutesLat && minutesLat.length > 2) {
            lat = parseFloat((negativeLat ? negativeLat : '') + degreesLat + '.' + minutesLat);
        }
        else {
            lat = convertDMSToDD(parseFloat(degreesLat), parseFloat(minutesLat), parseFloat(secondsLat), directionLat);
        }
    }
    else if (mmRegex.test(coordStr)) {
        isXYCoords = true;
        [, lon, decimalLon, lat, decimalLat] = coordStr.match(mmPattern);
        if (decimalLon) {
            lon = parseFloat(lon + '.' + decimalLon);
        }
        if (decimalLat) {
            lat = parseFloat(lat + '.' + decimalLat);
        }
    }
    else {
        return {
            lonLat: undefined,
            message: '',
            radius: undefined,
            conf: undefined
        };
    }
    if (opts.forceNA && !isXYCoords) {
        // Set a negative coordinate for North America zone
        if (lon > 0 && lat > 0) {
            if (lon > lat) {
                lon = -lon;
            }
            else {
                lat = -lat;
            }
        }
        // Reverse coordinate to respect lonLat convention
        if (lon > lat) {
            lon = [lat, (lat = lon)][0];
        }
    }
    lonLat = [Number(lon), Number(lat)];
    // Reproject the coordinate if projection parameter have been set and coord is not 4326
    if ((projectionStr !== undefined && projectionStr !== toProjection) ||
        (lonLat[0] > 180 || lonLat[0] < -180) ||
        (lonLat[1] > 90 || lonLat[1] < -90)) {
        const source = projectionStr ? 'EPSG:' + projectionStr : mapProjection;
        const dest = 'EPSG:' + toProjection;
        try {
            lonLat = olproj.transform(lonLat, source, dest);
        }
        catch (e) {
            return {
                lonLat: undefined,
                message: 'Projection ' + source + ' not supported',
                radius: undefined,
                conf: undefined
            };
        }
    }
    if (Math.abs(lonLat[0]) <= 180 && Math.abs(lonLat[1]) <= 90) {
        return {
            lonLat,
            message: '',
            radius: radius ? parseInt(radius, 10) : undefined,
            conf: conf ? parseInt(conf, 10) : undefined
        };
    }
    else {
        return {
            lonLat: undefined,
            message: 'Coordinate out of Longitude/Latitude bounds',
            radius: undefined,
            conf: undefined
        };
    }
}
/**
 * Convert degrees minutes seconds to dd
 * @param degrees Degrees
 * @param minutes Minutes
 * @param seconds Seconds
 * @param direction Direction
 */
function convertDMSToDD(degrees, minutes, seconds, direction) {
    minutes = minutes || 0;
    seconds = seconds || 0;
    const neg = degrees < 0;
    let dd = Math.abs(degrees) + minutes / 60 + seconds / 3600;
    if (neg || direction === 'S' || direction === 'W') {
        dd = -dd;
    } // Don't do anything for N or E
    return dd;
}
/**
 * Convert dd to degrees minutes seconds
 * @param lonLatDD longitude and latitude in dd
 * @param decimal number of decimals for seconds
 * @returns longitude and latitude in dms
 */
export function convertDDToDMS(lonLatDD, decimal = 3) {
    const lonLatDMS = [];
    lonLatDD.forEach(dd => {
        const degrees = dd < 0 ? Math.ceil(dd) : Math.floor(dd);
        const int = dd < 0 ? (degrees - dd) * 60 : (dd - degrees) * 60;
        const minutes = Math.floor(int);
        const seconds = ((int - minutes) * 60).toFixed(decimal);
        lonLatDMS.push(`${degrees}° ${minutes}' ${seconds}"`);
    });
    return lonLatDMS;
}
/**
 * Return true of two view states are equal.
 * @param state1 View state
 * @param state2 View state
 * @returns True if the view states are equal
 */
export function viewStatesAreEqual(state1, state2) {
    if (state1 === undefined || state2 === undefined) {
        return false;
    }
    const tolerance = 1 / 10000;
    return (state1.zoom === state2.zoom &&
        Math.trunc(state1.center[0] / tolerance) ===
            Math.trunc(state2.center[0] / tolerance) &&
        Math.trunc(state1.center[1] / tolerance) ===
            Math.trunc(state2.center[1] / tolerance));
}
/**
 * Format the scale to a human readable text
 * @param Scale of the map
 * @returns Human readable scale text
 */
export function formatScale(scale) {
    scale = Math.round(scale);
    if (scale < 10000) {
        return scale + '';
    }
    scale = Math.round(scale / 1000);
    if (scale < 1000) {
        return scale + 'K';
    }
    scale = Math.round(scale / 1000);
    return scale + 'M';
}
/**
 * Return the resolution from a scale denom
 * @param scale Scale denom
 * @param dpi DPI
 * @returns Resolution
 */
export function getResolutionFromScale(scale, dpi = 96) {
    const inchesPerMeter = 39.3701;
    return scale / (inchesPerMeter * dpi);
}
/**
 * Return the resolution from a scale denom
 * @param Scale denom
 * @returns Resolution
 */
export function getScaleFromResolution(resolution, unit = 'm', dpi = 96) {
    const inchesPerMeter = 39.3701;
    return resolution * olproj.METERS_PER_UNIT[unit] * inchesPerMeter * dpi;
}
/**
 * Returns true if the CTRL key is pushed during an Ol MapBrowserPointerEvent
 * @param event OL MapBrowserPointerEvent
 * @returns Whether the CTRL key is pushed
 */
export function ctrlKeyDown(event) {
    const originalEvent = event.originalEvent;
    return (!originalEvent.altKey &&
        (MAC ? originalEvent.metaKey : originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
}
export function roundCoordTo(coord, decimal = 3) {
    return [
        NumberUtils.roundToNDecimal(coord[0], decimal),
        NumberUtils.roundToNDecimal(coord[1], decimal)
    ];
}
/**
 * Returns an array of converted coordinates.
 * Conversion is done for every configured projections
 * and for the current UTM zone and MTM zone.
 * @param lonLat [number, number] array of the coordinate to transform.
 * @param projections  Projection[] Array of destination projection.
 * @returns Returns an array of converted coordinates.
 */
export function lonLatConversion(lonLat, projections) {
    const rawCoord3857 = olproj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');
    const convertedLonLat = [
        {
            code: 'EPSG:3857',
            alias: 'Web Mercator',
            coord: rawCoord3857,
            igo2CoordFormat: `${roundCoordTo(rawCoord3857).join(', ')} ; 3857`
        }
    ];
    // detect the current utm zone.
    const utmZone = utmZoneFromLonLat(lonLat);
    const epsgUtm = utmZone < 10 ? `EPSG:3260${utmZone}` : `EPSG:326${utmZone}`;
    const utmName = `UTM-${utmZone}`;
    const rawCoordUtm = olproj.transform(lonLat, 'EPSG:4326', epsgUtm);
    convertedLonLat.push({
        code: epsgUtm,
        alias: 'UTM',
        coord: rawCoordUtm,
        igo2CoordFormat: `${utmName} ${roundCoordTo(rawCoordUtm).join(', ')}`
    });
    // detect the current mtm zone.
    const mtmZone = mtmZoneFromLonLat(lonLat);
    if (mtmZone) {
        const epsgMtm = mtmZone < 10 ? `EPSG:3218${mtmZone}` : `EPSG:321${80 + mtmZone}`;
        const mtmName = `MTM-${mtmZone}`;
        const rawCoordMtm = olproj.transform(lonLat, 'EPSG:4326', epsgMtm);
        convertedLonLat.push({
            code: epsgMtm,
            alias: 'MTM',
            coord: rawCoordMtm,
            igo2CoordFormat: `${mtmName} ${roundCoordTo(rawCoordMtm).join(', ')}`
        });
    }
    projections.forEach(projection => {
        const rawCoord = olproj.transform(lonLat, 'EPSG:4326', projection.code);
        const numericEpsgCode = projection.code.split(':')[1];
        convertedLonLat.push({
            code: projection.code,
            alias: projection.alias || projection.code,
            coord: rawCoord,
            igo2CoordFormat: `${roundCoordTo(rawCoord).join(', ')} ; ${numericEpsgCode}`
        });
    });
    return convertedLonLat;
}
/**
 * Detect the current utm zone of the lon/lat coordinate.
 * @param lonLat [number, number] array of the coordinate to detect the UTM zone.
 * @returns number The UTM zone.
 */
export function utmZoneFromLonLat(lonLat) {
    return Math.ceil((lonLat[0] + 180) / 6);
}
/**
 * Detect the current mtm zone of the lon/lat coordinate.
 * @param lonLat [number, number] array of the coordinate to detect the MTM zone.
 * @returns number The MTM zone. Undefined if outside of the mtm application zone.
 */
export function mtmZoneFromLonLat(lonLat) {
    const long = lonLat[0];
    let mtmZone;
    if (long < -51 && long > -54) {
        mtmZone = 1;
    }
    if (long < -54 && long > -57) {
        mtmZone = 2;
    }
    if (long < -57 && long > -60) {
        mtmZone = 3;
    }
    if (long < -60 && long > -63) {
        mtmZone = 4;
    }
    if (long < -63 && long > -66) {
        mtmZone = 5;
    }
    if (long < -66 && long > -69) {
        mtmZone = 6;
    }
    if (long < -69 && long > -72) {
        mtmZone = 7;
    }
    if (long < -72 && long > -75) {
        mtmZone = 8;
    }
    if (long < -75 && long > -78) {
        mtmZone = 9;
    }
    if (long < -78 && long > -81) {
        mtmZone = 10;
    }
    return mtmZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZ2VvL3NyYy9saWIvbWFwL3NoYXJlZC9tYXAudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFFbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU3QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUM1QixHQUFXLEVBQ1gsYUFBcUIsRUFDckIsT0FBOEIsRUFBRTtJQU9oQyxJQUFJLE1BQXdCLENBQUM7SUFDN0IsSUFBSSxRQUFnQixDQUFDO0lBQ3JCLElBQUksV0FBbUIsQ0FBQztJQUN4QixJQUFJLFVBQWtCLENBQUM7SUFDdkIsSUFBSSxVQUFrQixDQUFDO0lBQ3ZCLElBQUksVUFBa0IsQ0FBQztJQUN2QixJQUFJLFlBQW9CLENBQUM7SUFDekIsSUFBSSxVQUFrQixDQUFDO0lBQ3ZCLElBQUksV0FBbUIsQ0FBQztJQUN4QixJQUFJLFVBQWtCLENBQUM7SUFDdkIsSUFBSSxVQUFrQixDQUFDO0lBQ3ZCLElBQUksVUFBa0IsQ0FBQztJQUN2QixJQUFJLFlBQW9CLENBQUM7SUFDekIsSUFBSSxVQUFrQixDQUFDO0lBQ3ZCLElBQUksSUFBWSxDQUFDO0lBQ2pCLElBQUksTUFBYyxDQUFDO0lBQ25CLElBQUksSUFBWSxDQUFDO0lBQ2pCLElBQUksR0FBUSxDQUFDO0lBQ2IsSUFBSSxHQUFRLENBQUM7SUFFYixNQUFNLGlCQUFpQixHQUFHLHVCQUF1QixDQUFDO0lBQ2xELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM1QixJQUFJLGFBQXFCLENBQUM7SUFDMUIsTUFBTSxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxD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QUksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNsQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBRSxBQUFELEVBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDM0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FDM0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2xDLE9BQU8sRUFDUCxXQUFXLENBQ1osQ0FBQztLQUNIO1NBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2xDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEFBQUQsRUFBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDMUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FDM0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2xDLE9BQU8sRUFDUCxXQUFXLENBQ1osQ0FBQztLQUNIO1NBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2xDO1lBQ0UsQUFERDtZQUVDLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLFVBQVU7U0FDWCxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0IsR0FBRyxHQUFHLGNBQWMsQ0FDbEIsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUN6RCxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQ3RCLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsWUFBWSxDQUNiLENBQUM7UUFDRixHQUFHLEdBQUcsY0FBYyxDQUNsQixVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQ3pELFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUN0QixZQUFZLENBQ2IsQ0FBQztLQUNIO1NBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDO1lBQ0UsQUFERDtZQUVDLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtTQUNYLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5QixHQUFHLEdBQUcsY0FBYyxDQUNsQixVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQ3pELFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUN0QixZQUFZLENBQ2IsQ0FBQztRQUNGLEdBQUcsR0FBRyxjQUFjLENBQ2xCLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsRUFDekQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUN0QixVQUFVLENBQUMsVUFBVSxDQUFDLEVBQ3RCLFlBQVksQ0FDYixDQUFDO0tBQ0g7U0FBTSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDbkM7WUFDRSxBQUREO1lBRUMsV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLEFBRFc7WUFFWCxZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsVUFBVTtZQUNWLEFBRFc7WUFFWCxZQUFZO1lBQ1osTUFBTTtZQUNOLElBQUk7U0FDTCxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEMsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUNwQjtRQUVELG9DQUFvQztRQUNwQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxHQUFHLEdBQUcsVUFBVSxDQUNkLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUNqRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLEdBQUcsR0FBRyxjQUFjLENBQ2xCLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUN0QixVQUFVLENBQUMsVUFBVSxDQUFDLEVBQ3RCLFlBQVksQ0FDYixDQUFDO1NBQ0g7UUFFRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxHQUFHLEdBQUcsVUFBVSxDQUNkLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUNqRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLEdBQUcsR0FBRyxjQUFjLENBQ2xCLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFDdEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUN0QixVQUFVLENBQUMsVUFBVSxDQUFDLEVBQ3RCLFlBQVksQ0FDYixDQUFDO1NBQ0g7S0FDRjtTQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpFLElBQUksVUFBVSxFQUFFO1lBQ2QsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7U0FDMUM7S0FDRjtTQUFNO1FBQ0wsT0FBTztZQUNMLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztLQUNIO0lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQy9CLG1EQUFtRDtRQUNuRCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7Z0JBQ2IsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0wsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1o7U0FDRjtRQUVELGtEQUFrRDtRQUNsRCxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDYixHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtLQUNGO0lBRUQsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBcUIsQ0FBQztJQUV4RCx1RkFBdUY7SUFDdkYsSUFDRSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLFlBQVksQ0FBQztRQUMvRCxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3JDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFDbkM7UUFDQSxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN2RSxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBRXBDLElBQUk7WUFDRixNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBcUIsQ0FBQztTQUNyRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTztnQkFDTCxNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFLGFBQWEsR0FBRyxNQUFNLEdBQUcsZ0JBQWdCO2dCQUNsRCxNQUFNLEVBQUUsU0FBUztnQkFDakIsSUFBSSxFQUFFLFNBQVM7YUFDaEIsQ0FBQztTQUNIO0tBQ0Y7SUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzNELE9BQU87WUFDTCxNQUFNO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2pELElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDNUMsQ0FBQztLQUNIO1NBQU07UUFDTCxPQUFPO1lBQ0wsTUFBTSxFQUFFLFNBQVM7WUFDakIsT0FBTyxFQUFFLDZDQUE2QztZQUN0RCxNQUFNLEVBQUUsU0FBUztZQUNqQixJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO0tBQ0g7QUFDSCxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxjQUFjLENBQ3JCLE9BQWUsRUFDZixPQUFlLEVBQ2YsT0FBZSxFQUNmLFNBQWlCO0lBRWpCLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBRXZCLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUcsRUFBRSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFM0QsSUFBSSxHQUFHLElBQUksU0FBUyxLQUFLLEdBQUcsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO1FBQ2pELEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUNWLENBQUMsK0JBQStCO0lBQ2pDLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsUUFBMEIsRUFBRSxVQUFrQixDQUFDO0lBRS9DLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVyQixRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxNQUFvQixFQUNwQixNQUFvQjtJQUVwQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUNoRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM1QixPQUFPLENBQ0wsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSTtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQzNDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBSztJQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7UUFDakIsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0lBRUQsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtRQUNoQixPQUFPLEtBQUssR0FBRyxHQUFHLENBQUM7S0FDcEI7SUFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakMsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsS0FBYSxFQUNiLE1BQWMsRUFBRTtJQUVoQixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDL0IsT0FBTyxLQUFLLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLFVBQWtCLEVBQ2xCLE9BQWUsR0FBRyxFQUNsQixNQUFjLEVBQUU7SUFFaEIsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDO0lBQy9CLE9BQU8sVUFBVSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLEdBQUcsQ0FBQztBQUMxRSxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBa0M7SUFDNUQsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUMxQyxPQUFPLENBQ0wsQ0FBQyxhQUFhLENBQUMsTUFBTTtRQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3hCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUF1QixFQUFFLFVBQWtCLENBQUM7SUFDdkUsT0FBTztRQUNMLFdBQVcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQztRQUM5QyxXQUFXLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7S0FBcUIsQ0FBQztBQUN4RSxDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsTUFBd0IsRUFDeEIsV0FBeUI7SUFPekIsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBcUIsQ0FBQztJQUM1RixNQUFNLGVBQWUsR0FBRztRQUN0QjtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxZQUFZO1lBQ25CLGVBQWUsRUFBRSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDbkU7S0FDRixDQUFDO0lBRUYsK0JBQStCO0lBQy9CLE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsT0FBTyxFQUFFLENBQUM7SUFDNUUsTUFBTSxPQUFPLEdBQUcsT0FBTyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFxQixDQUFDO0lBQ3ZGLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSxXQUFXO1FBQ2xCLGVBQWUsRUFBRSxHQUFHLE9BQU8sSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0tBQ3RFLENBQUMsQ0FBQztJQUVILCtCQUErQjtJQUMvQixNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxJQUFJLE9BQU8sRUFBRTtRQUNYLE1BQU0sT0FBTyxHQUNYLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ25FLE1BQU0sT0FBTyxHQUFHLE9BQU8sT0FBTyxFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBcUIsQ0FBQztRQUN2RixlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ25CLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixlQUFlLEVBQUUsR0FBRyxPQUFPLElBQUksWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtTQUN0RSxDQUFDLENBQUM7S0FDSjtJQUVELFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQXFCLENBQUM7UUFDNUYsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7WUFDckIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLElBQUk7WUFDMUMsS0FBSyxFQUFFLFFBQVE7WUFDZixlQUFlLEVBQUUsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM3QyxJQUFJLENBQ0wsTUFBTSxlQUFlLEVBQUU7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUF3QjtJQUN4RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsTUFBd0I7SUFDeEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUM7S0FDYjtJQUNELElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsT0FBTyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUM7S0FDYjtJQUNELElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsT0FBTyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVCLE9BQU8sR0FBRyxDQUFDLENBQUM7S0FDYjtJQUNELElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsT0FBTyxHQUFHLENBQUMsQ0FBQztLQUNiO0lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVCLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDZDtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgTWFwQnJvd3NlclBvaW50ZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xuaW1wb3J0IHsgTUFDIH0gZnJvbSAnb2wvaGFzJztcblxuaW1wb3J0IHsgTnVtYmVyVXRpbHMgfSBmcm9tICdAaWdvMi91dGlscyc7XG5cbmltcG9ydCB7IE1hcFZpZXdTdGF0ZSB9IGZyb20gJy4vbWFwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uIH0gZnJvbSAnLi9wcm9qZWN0aW9uLmludGVyZmFjZXMnO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGV4dHJhY3RzIGEgY29vcmRpbmF0ZSB0dXBsZSBmcm9tIGEgc3RyaW5nLlxuICogQHBhcmFtIHN0ciBBbnkgc3RyaW5nXG4gKiBAcGFyYW0gbWFwUHJvamVjdGlvbiBzdHJpbmcgTWFwIFByb2plY3Rpb25cbiAqIEBwYXJhbSBvcHRzLmZvcmNlTkEgYm9vbGVhbiBGb3JjZSBOb3J0aCBBbWVyaWNhIFpvbmVcbiAqIEByZXR1cm5zIG9iamVjdDpcbiAqICAgICAgICAgICAgIGxvbkxhdDogQ29vcmRpbmF0ZSxcbiAqICAgICAgICAgICAgIG1lc3NhZ2U6IE1lc3NhZ2Ugb2YgZXJyb3IsXG4gKiAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyBvZiB0aGUgY29uZmllbmNlIG9mIGNvb3JkaW5hdGUsXG4gKiAgICAgICAgICAgICBjb25mOiBjb25maWRlbmNlIG9mIHRoZSBjb29yZGluYXRlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9Mb25MYXQoXG4gIHN0cjogc3RyaW5nLFxuICBtYXBQcm9qZWN0aW9uOiBzdHJpbmcsXG4gIG9wdHM6IHsgZm9yY2VOQT86IGJvb2xlYW4gfSA9IHt9XG4pOiB7XG4gIGxvbkxhdDogW251bWJlciwgbnVtYmVyXSB8IHVuZGVmaW5lZDtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICByYWRpdXM6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uZjogbnVtYmVyIHwgdW5kZWZpbmVkO1xufSB7XG4gIGxldCBsb25MYXQ6IFtudW1iZXIsIG51bWJlcl07XG4gIGxldCBjb29yZFN0cjogc3RyaW5nO1xuICBsZXQgbmVnYXRpdmVMb246IHN0cmluZztcbiAgbGV0IGRlZ3JlZXNMb246IHN0cmluZztcbiAgbGV0IG1pbnV0ZXNMb246IHN0cmluZztcbiAgbGV0IHNlY29uZHNMb246IHN0cmluZztcbiAgbGV0IGRpcmVjdGlvbkxvbjogc3RyaW5nO1xuICBsZXQgZGVjaW1hbExvbjogc3RyaW5nO1xuICBsZXQgbmVnYXRpdmVMYXQ6IHN0cmluZztcbiAgbGV0IGRlZ3JlZXNMYXQ6IHN0cmluZztcbiAgbGV0IG1pbnV0ZXNMYXQ6IHN0cmluZztcbiAgbGV0IHNlY29uZHNMYXQ6IHN0cmluZztcbiAgbGV0IGRpcmVjdGlvbkxhdDogc3RyaW5nO1xuICBsZXQgZGVjaW1hbExhdDogc3RyaW5nO1xuICBsZXQgem9uZTogc3RyaW5nO1xuICBsZXQgcmFkaXVzOiBzdHJpbmc7XG4gIGxldCBjb25mOiBzdHJpbmc7XG4gIGxldCBsb246IGFueTtcbiAgbGV0IGxhdDogYW55O1xuXG4gIGNvbnN0IHByb2plY3Rpb25QYXR0ZXJuID0gJyhcXFxccyo7XFxcXHMqW1xcXFxkXXs0LDZ9KSc7XG4gIGNvbnN0IHRvUHJvamVjdGlvbiA9ICc0MzI2JztcbiAgbGV0IHByb2plY3Rpb25TdHI6IHN0cmluZztcbiAgY29uc3QgcHJvamVjdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cChwcm9qZWN0aW9uUGF0dGVybiwgJ2cnKTtcblxuICBjb25zdCBsb25sYXRDb29yZCA9ICcoWy0rXSk/KFtcXFxcZF17MSwzfSkoWywuXShcXFxcZCspKT8nO1xuICBjb25zdCBsb25MYXRQYXR0ZXJuID0gYCR7bG9ubGF0Q29vcmR9W1xcXFxzLF0rJHtsb25sYXRDb29yZH1gO1xuICBjb25zdCBsb25MYXRSZWdleCA9IG5ldyBSZWdFeHAoYF4ke2xvbkxhdFBhdHRlcm59JGAsICdnJyk7XG5cbiAgY29uc3QgZG1zQ29vcmQgPVxuICAgICcoWzAtOV17MSwyfSlbOnzCsF0/XFxcXHMqKFswLTldezEsMn0pP1s6fFxcJ3zigLJ84oCZXT9cXFxccyooWzAtOV17MSwyfSg/Oi5bMC05XSspezAsMX0pP1xcXFxzKltcInzigLN84oCdXT9cXFxccyonO1xuICBjb25zdCBkbXNDb29yZFBhdHRlcm4gPSBgJHtkbXNDb29yZH0oW058U3xFfFd8T10pLD9cXFxccyoke2Rtc0Nvb3JkfShbTnxTfEV8V3xPXSlgO1xuICBjb25zdCBkbXNSZWdleCA9IG5ldyBSZWdFeHAoYF4ke2Rtc0Nvb3JkUGF0dGVybn0kYCwgJ2dpJyk7XG5cbiAgY29uc3QgcGF0dGVyblV0bSA9XG4gICAgJyhVVE0pLT8oXFxcXGR7MSwyfSlbXFxcXHMsXSooXFxcXGQrWy4sXT9cXFxcZCspW1xcXFxzLF0rKFxcXFxkK1suLF0/XFxcXGQrKSc7XG4gIGNvbnN0IHV0bVJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVyblV0bX1gLCAnZ2knKTtcblxuICBjb25zdCBwYXR0ZXJuTXRtID1cbiAgICAnKE1UTSktPyhcXFxcZHsxLDJ9KVtcXFxccyxdKihcXFxcZCtbLixdP1xcXFxkKylbXFxcXHMsXSsoXFxcXGQrWy4sXT9cXFxcZCspJztcbiAgY29uc3QgbXRtUmVnZXggPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJuTXRtfWAsICdnaScpO1xuXG4gIGNvbnN0IGRkQ29vcmQgPSAnKFstK10pPyhcXFxcZHsxLDN9KVssLl0oXFxcXGQrKSc7XG4gIGNvbnN0IHBhdHRlcm5EZCA9IGAke2RkQ29vcmR9XFxcXHMqWyxdP1xcXFxzKiR7ZGRDb29yZH1gO1xuICBjb25zdCBkZFJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybkRkfWAsICdnJyk7XG5cbiAgY29uc3QgZG1kQ29vcmQgPVxuICAgICcoWy0rXSk/KFxcXFxkezEsM30pW1xcXFxzLC5dezF9KFxcXFxkezEsMn0pW1xcXFxzLC5dezF9KFxcXFxkezEsMn0pWy4sXT8oXFxcXGR7MSw1fSk/JztcbiAgY29uc3QgcGF0dGVybkRtZCA9IGAke2RtZENvb3JkfVxcXFxzKlssLl0/XFxcXHMqJHtkbWRDb29yZH1gO1xuICBjb25zdCBkbWRSZWdleCA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm5EbWR9YCwgJ2cnKTtcblxuIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgY29uc3QgcGF0dGVybkJFTEwgPVxuICAgICdMQVRcXFxccypbXFxcXHM6XSpcXFxccyooWy0rXSk/KFxcXFxkezEsMn0pW1xcXFxzLixdPyhcXFxcZCspP1tcXFxccy4sXT9cXFxccyooXFxcXGR7MSwyfShbLixdXFxcXGQrKT8pP1xcXFxzKihOfFN8RXxXKT9cXFxccypMT05HXFxcXHMqW1xcXFxzOl0qXFxcXHMqKFstK10pPyhcXFxcZHsxLDN9KVtcXFxccy4sXT8oXFxcXGQrKT9bXFxcXHMuLF0/XFxcXHMqKFxcXFxkezEsMn0oWy4sXVxcXFxkKyk/KT9cXFxccyooTnxTfEV8Vyk/XFxcXHMqVU5DXFxcXHMqW1xcXFxzOl0/XFxcXHMqKFxcXFxkKylcXFxccypDT05GXFxcXHMqW1xcXFxzOl0/XFxcXHMqKFxcXFxkezEsM30pJztcbiAgY29uc3QgYmVsbFJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVybkJFTEx9P2AsICdnaScpO1xuXG4gIGNvbnN0IG1tQ29vcmQgPSAnKFstK10/XFxcXGQrKVssLl0/KFxcXFxkKyk/JztcbiAgY29uc3QgbW1QYXR0ZXJuID0gYCR7bW1Db29yZH1bXFxcXHMsXSske21tQ29vcmR9YDtcbiAgY29uc3QgbW1SZWdleCA9IG5ldyBSZWdFeHAoYF4ke21tUGF0dGVybn0kYCwgJ2cnKTtcblxuICBsZXQgaXNYWUNvb3JkcyA9IGZhbHNlO1xuXG4gIHN0ciA9IHN0ci50b0xvY2FsZVVwcGVyQ2FzZSgpLnRyaW0oKTtcblxuICAvLyBFeHRyYWN0IHByb2plY3Rpb25cbiAgaWYgKHByb2plY3Rpb25SZWdleC50ZXN0KHN0cikpIHtcbiAgICBbY29vcmRTdHIsIHByb2plY3Rpb25TdHJdID0gc3RyLnNwbGl0KCc7JykubWFwKHMgPT4gcy50cmltKCkpO1xuICB9IGVsc2Uge1xuICAgIGNvb3JkU3RyID0gc3RyO1xuICB9XG4gIGlmIChsb25MYXRSZWdleC50ZXN0KGNvb3JkU3RyKSkge1xuICAgIFtcbiAgICAgICxcbiAgICAgIG5lZ2F0aXZlTG9uLFxuICAgICAgbG9uLFxuICAgICAgLFxuICAgICAgZGVjaW1hbExvbixcbiAgICAgIG5lZ2F0aXZlTGF0LFxuICAgICAgbGF0LFxuICAgICAgLFxuICAgICAgZGVjaW1hbExhdFxuICAgIF0gPSBjb29yZFN0ci5tYXRjaChsb25MYXRQYXR0ZXJuKTtcblxuICAgIGxvbiA9IHBhcnNlRmxvYXQoKG5lZ2F0aXZlTG9uID8gbmVnYXRpdmVMb24gOiAnJykgKyBsb24gKyAnLicgKyBkZWNpbWFsTG9uKTtcbiAgICBsYXQgPSBwYXJzZUZsb2F0KChuZWdhdGl2ZUxhdCA/IG5lZ2F0aXZlTGF0IDogJycpICsgbGF0ICsgJy4nICsgZGVjaW1hbExhdCk7XG4gIH0gZWxzZSBpZiAoZG1zUmVnZXgudGVzdChjb29yZFN0cikpIHtcbiAgICBbXG4gICAgICAsXG4gICAgICBkZWdyZWVzTG9uLFxuICAgICAgbWludXRlc0xvbixcbiAgICAgIHNlY29uZHNMb24sXG4gICAgICBkaXJlY3Rpb25Mb24sXG4gICAgICBkZWdyZWVzTGF0LFxuICAgICAgbWludXRlc0xhdCxcbiAgICAgIHNlY29uZHNMYXQsXG4gICAgICBkaXJlY3Rpb25MYXRcbiAgICBdID0gY29vcmRTdHIubWF0Y2goZG1zQ29vcmRQYXR0ZXJuKTtcblxuICAgIGlmIChkaXJlY3Rpb25Mb24gPT09ICdTJyB8fCBkaXJlY3Rpb25Mb24gPT09ICdOJykge1xuICAgICAgZGVncmVlc0xvbiA9IFtkZWdyZWVzTGF0LCAoZGVncmVlc0xhdCA9IGRlZ3JlZXNMb24pXVswXTtcbiAgICAgIG1pbnV0ZXNMb24gPSBbbWludXRlc0xhdCwgKG1pbnV0ZXNMYXQgPSBtaW51dGVzTG9uKV1bMF07XG4gICAgICBzZWNvbmRzTG9uID0gW3NlY29uZHNMYXQsIChzZWNvbmRzTGF0ID0gc2Vjb25kc0xvbildWzBdO1xuICAgICAgZGlyZWN0aW9uTG9uID0gW2RpcmVjdGlvbkxhdCwgKGRpcmVjdGlvbkxhdCA9IGRpcmVjdGlvbkxvbildWzBdO1xuICAgIH1cblxuICAgIGxvbiA9IGNvbnZlcnRETVNUb0REKFxuICAgICAgcGFyc2VGbG9hdChkZWdyZWVzTG9uKSxcbiAgICAgIHBhcnNlRmxvYXQobWludXRlc0xvbiksXG4gICAgICBwYXJzZUZsb2F0KHNlY29uZHNMb24pLFxuICAgICAgZGlyZWN0aW9uTG9uXG4gICAgKTtcbiAgICBsYXQgPSBjb252ZXJ0RE1TVG9ERChcbiAgICAgIHBhcnNlRmxvYXQoZGVncmVlc0xhdCksXG4gICAgICBwYXJzZUZsb2F0KG1pbnV0ZXNMYXQpLFxuICAgICAgcGFyc2VGbG9hdChzZWNvbmRzTGF0KSxcbiAgICAgIGRpcmVjdGlvbkxhdFxuICAgICk7XG4gIH0gZWxzZSBpZiAodXRtUmVnZXgudGVzdChjb29yZFN0cikpIHtcbiAgICBpc1hZQ29vcmRzID0gdHJ1ZTtcbiAgICBbLCAsIHpvbmUsIGxvbiwgbGF0XSA9IGNvb3JkU3RyLm1hdGNoKHBhdHRlcm5VdG0pO1xuICAgIGNvbnN0IGVwc2dVdG0gPSBOdW1iZXIoem9uZSkgPCAxMCA/IGBFUFNHOjMyNjAke3pvbmV9YCA6IGBFUFNHOjMyNiR7em9uZX1gO1xuICAgIFtsb24sIGxhdF0gPSBvbHByb2oudHJhbnNmb3JtKFxuICAgICAgW3BhcnNlRmxvYXQobG9uKSwgcGFyc2VGbG9hdChsYXQpXSxcbiAgICAgIGVwc2dVdG0sXG4gICAgICAnRVBTRzo0MzI2J1xuICAgICk7XG4gIH0gZWxzZSBpZiAobXRtUmVnZXgudGVzdChjb29yZFN0cikpIHtcbiAgICBpc1hZQ29vcmRzID0gdHJ1ZTtcbiAgICBbLCAsIHpvbmUsIGxvbiwgbGF0XSA9IGNvb3JkU3RyLm1hdGNoKHBhdHRlcm5NdG0pO1xuICAgIGNvbnN0IGVwc2dNdG0gPVxuICAgICAgTnVtYmVyKHpvbmUpIDwgMTAgPyBgRVBTRzozMjE4JHt6b25lfWAgOiBgRVBTRzozMjEkezgwICsgTnVtYmVyKHpvbmUpfWA7XG4gICAgW2xvbiwgbGF0XSA9IG9scHJvai50cmFuc2Zvcm0oXG4gICAgICBbcGFyc2VGbG9hdChsb24pLCBwYXJzZUZsb2F0KGxhdCldLFxuICAgICAgZXBzZ010bSxcbiAgICAgICdFUFNHOjQzMjYnXG4gICAgKTtcbiAgfSBlbHNlIGlmIChkbWRSZWdleC50ZXN0KGNvb3JkU3RyKSkge1xuICAgIFtcbiAgICAgICxcbiAgICAgIG5lZ2F0aXZlTG9uLFxuICAgICAgZGVncmVlc0xvbixcbiAgICAgIG1pbnV0ZXNMb24sXG4gICAgICBzZWNvbmRzTG9uLFxuICAgICAgZGVjaW1hbExvbixcbiAgICAgIG5lZ2F0aXZlTGF0LFxuICAgICAgZGVncmVlc0xhdCxcbiAgICAgIG1pbnV0ZXNMYXQsXG4gICAgICBzZWNvbmRzTGF0LFxuICAgICAgZGVjaW1hbExhdFxuICAgIF0gPSBjb29yZFN0ci5tYXRjaChwYXR0ZXJuRG1kKTtcblxuICAgIGxvbiA9IGNvbnZlcnRETVNUb0REKFxuICAgICAgcGFyc2VGbG9hdCgobmVnYXRpdmVMb24gPyBuZWdhdGl2ZUxvbiA6ICcnKSArIGRlZ3JlZXNMb24pLFxuICAgICAgcGFyc2VGbG9hdChtaW51dGVzTG9uKSxcbiAgICAgIHBhcnNlRmxvYXQoc2Vjb25kc0xvbiksXG4gICAgICBkaXJlY3Rpb25Mb25cbiAgICApO1xuICAgIGxhdCA9IGNvbnZlcnRETVNUb0REKFxuICAgICAgcGFyc2VGbG9hdCgobmVnYXRpdmVMYXQgPyBuZWdhdGl2ZUxhdCA6ICcnKSArIGRlZ3JlZXNMYXQpLFxuICAgICAgcGFyc2VGbG9hdChtaW51dGVzTGF0KSxcbiAgICAgIHBhcnNlRmxvYXQoc2Vjb25kc0xhdCksXG4gICAgICBkaXJlY3Rpb25MYXRcbiAgICApO1xuICB9IGVsc2UgaWYgKGRkUmVnZXgudGVzdChjb29yZFN0cikpIHtcbiAgICBbXG4gICAgICAsXG4gICAgICBuZWdhdGl2ZUxvbixcbiAgICAgIGRlZ3JlZXNMb24sXG4gICAgICBkZWNpbWFsTG9uLFxuICAgICAgbmVnYXRpdmVMYXQsXG4gICAgICBkZWdyZWVzTGF0LFxuICAgICAgZGVjaW1hbExhdFxuICAgIF0gPSBjb29yZFN0ci5tYXRjaChwYXR0ZXJuRGQpO1xuXG4gICAgbG9uID0gY29udmVydERNU1RvREQoXG4gICAgICBwYXJzZUZsb2F0KChuZWdhdGl2ZUxvbiA/IG5lZ2F0aXZlTG9uIDogJycpICsgZGVncmVlc0xvbiksXG4gICAgICBwYXJzZUZsb2F0KG1pbnV0ZXNMb24pLFxuICAgICAgcGFyc2VGbG9hdChzZWNvbmRzTG9uKSxcbiAgICAgIGRpcmVjdGlvbkxvblxuICAgICk7XG4gICAgbGF0ID0gY29udmVydERNU1RvREQoXG4gICAgICBwYXJzZUZsb2F0KChuZWdhdGl2ZUxhdCA/IG5lZ2F0aXZlTGF0IDogJycpICsgZGVncmVlc0xhdCksXG4gICAgICBwYXJzZUZsb2F0KG1pbnV0ZXNMYXQpLFxuICAgICAgcGFyc2VGbG9hdChzZWNvbmRzTGF0KSxcbiAgICAgIGRpcmVjdGlvbkxhdFxuICAgICk7XG4gIH0gZWxzZSBpZiAoYmVsbFJlZ2V4LnRlc3QoY29vcmRTdHIpKSB7XG4gICAgW1xuICAgICAgLFxuICAgICAgbmVnYXRpdmVMYXQsXG4gICAgICBkZWdyZWVzTGF0LFxuICAgICAgbWludXRlc0xhdCxcbiAgICAgIHNlY29uZHNMYXQsXG4gICAgICAsXG4gICAgICBkaXJlY3Rpb25MYXQsXG4gICAgICBuZWdhdGl2ZUxvbixcbiAgICAgIGRlZ3JlZXNMb24sXG4gICAgICBtaW51dGVzTG9uLFxuICAgICAgc2Vjb25kc0xvbixcbiAgICAgICxcbiAgICAgIGRpcmVjdGlvbkxvbixcbiAgICAgIHJhZGl1cyxcbiAgICAgIGNvbmZcbiAgICBdID0gY29vcmRTdHIubWF0Y2gocGF0dGVybkJFTEwpO1xuXG4gICAgLy8gU2V0IGRlZmF1bHQgdmFsdWUgZm9yIE5vcnRoIEFtZXJpY2FcbiAgICBpZiAoIWRpcmVjdGlvbkxvbikge1xuICAgICAgZGlyZWN0aW9uTG9uID0gJ1cnO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHJlYWwgbWludXRlcyBvciBkZWNpbWFsc1xuICAgIGlmIChtaW51dGVzTG9uICYmIG1pbnV0ZXNMb24ubGVuZ3RoID4gMikge1xuICAgICAgbG9uID0gcGFyc2VGbG9hdChcbiAgICAgICAgKG5lZ2F0aXZlTG9uID8gbmVnYXRpdmVMb24gOiAnJykgKyBkZWdyZWVzTG9uICsgJy4nICsgbWludXRlc0xvblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9uID0gY29udmVydERNU1RvREQoXG4gICAgICAgIHBhcnNlRmxvYXQoZGVncmVlc0xvbiksXG4gICAgICAgIHBhcnNlRmxvYXQobWludXRlc0xvbiksXG4gICAgICAgIHBhcnNlRmxvYXQoc2Vjb25kc0xvbiksXG4gICAgICAgIGRpcmVjdGlvbkxvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobWludXRlc0xhdCAmJiBtaW51dGVzTGF0Lmxlbmd0aCA+IDIpIHtcbiAgICAgIGxhdCA9IHBhcnNlRmxvYXQoXG4gICAgICAgIChuZWdhdGl2ZUxhdCA/IG5lZ2F0aXZlTGF0IDogJycpICsgZGVncmVlc0xhdCArICcuJyArIG1pbnV0ZXNMYXRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhdCA9IGNvbnZlcnRETVNUb0REKFxuICAgICAgICBwYXJzZUZsb2F0KGRlZ3JlZXNMYXQpLFxuICAgICAgICBwYXJzZUZsb2F0KG1pbnV0ZXNMYXQpLFxuICAgICAgICBwYXJzZUZsb2F0KHNlY29uZHNMYXQpLFxuICAgICAgICBkaXJlY3Rpb25MYXRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1tUmVnZXgudGVzdChjb29yZFN0cikpIHtcbiAgICBpc1hZQ29vcmRzID0gdHJ1ZTtcbiAgICBbLCBsb24sIGRlY2ltYWxMb24sIGxhdCwgZGVjaW1hbExhdF0gPSBjb29yZFN0ci5tYXRjaChtbVBhdHRlcm4pO1xuXG4gICAgaWYgKGRlY2ltYWxMb24pIHtcbiAgICAgIGxvbiA9IHBhcnNlRmxvYXQobG9uICsgJy4nICsgZGVjaW1hbExvbik7XG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxMYXQpIHtcbiAgICAgIGxhdCA9IHBhcnNlRmxvYXQobGF0ICsgJy4nICsgZGVjaW1hbExhdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBsb25MYXQ6IHVuZGVmaW5lZCxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgcmFkaXVzOiB1bmRlZmluZWQsXG4gICAgICBjb25mOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9wdHMuZm9yY2VOQSAmJiAhaXNYWUNvb3Jkcykge1xuICAgIC8vIFNldCBhIG5lZ2F0aXZlIGNvb3JkaW5hdGUgZm9yIE5vcnRoIEFtZXJpY2Egem9uZVxuICAgIGlmIChsb24gPiAwICYmIGxhdCA+IDApIHtcbiAgICAgIGlmIChsb24gPiBsYXQpIHtcbiAgICAgICAgbG9uID0gLWxvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhdCA9IC1sYXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV2ZXJzZSBjb29yZGluYXRlIHRvIHJlc3BlY3QgbG9uTGF0IGNvbnZlbnRpb25cbiAgICBpZiAobG9uID4gbGF0KSB7XG4gICAgICBsb24gPSBbbGF0LCAobGF0ID0gbG9uKV1bMF07XG4gICAgfVxuICB9XG5cbiAgbG9uTGF0ID0gW051bWJlcihsb24pLCBOdW1iZXIobGF0KV0gYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAvLyBSZXByb2plY3QgdGhlIGNvb3JkaW5hdGUgaWYgcHJvamVjdGlvbiBwYXJhbWV0ZXIgaGF2ZSBiZWVuIHNldCBhbmQgY29vcmQgaXMgbm90IDQzMjZcbiAgaWYgKFxuICAgIChwcm9qZWN0aW9uU3RyICE9PSB1bmRlZmluZWQgJiYgcHJvamVjdGlvblN0ciAhPT0gdG9Qcm9qZWN0aW9uKSB8fFxuICAgIChsb25MYXRbMF0gPiAxODAgfHwgbG9uTGF0WzBdIDwgLTE4MCkgfHxcbiAgICAobG9uTGF0WzFdID4gOTAgfHwgbG9uTGF0WzFdIDwgLTkwKVxuICApIHtcbiAgICBjb25zdCBzb3VyY2UgPSBwcm9qZWN0aW9uU3RyID8gJ0VQU0c6JyArIHByb2plY3Rpb25TdHIgOiBtYXBQcm9qZWN0aW9uO1xuICAgIGNvbnN0IGRlc3QgPSAnRVBTRzonICsgdG9Qcm9qZWN0aW9uO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxvbkxhdCA9IG9scHJvai50cmFuc2Zvcm0obG9uTGF0LCBzb3VyY2UsIGRlc3QpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9uTGF0OiB1bmRlZmluZWQsXG4gICAgICAgIG1lc3NhZ2U6ICdQcm9qZWN0aW9uICcgKyBzb3VyY2UgKyAnIG5vdCBzdXBwb3J0ZWQnLFxuICAgICAgICByYWRpdXM6IHVuZGVmaW5lZCxcbiAgICAgICAgY29uZjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAoTWF0aC5hYnMobG9uTGF0WzBdKSA8PSAxODAgJiYgTWF0aC5hYnMobG9uTGF0WzFdKSA8PSA5MCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb25MYXQsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIHJhZGl1czogcmFkaXVzID8gcGFyc2VJbnQocmFkaXVzLCAxMCkgOiB1bmRlZmluZWQsXG4gICAgICBjb25mOiBjb25mID8gcGFyc2VJbnQoY29uZiwgMTApIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9uTGF0OiB1bmRlZmluZWQsXG4gICAgICBtZXNzYWdlOiAnQ29vcmRpbmF0ZSBvdXQgb2YgTG9uZ2l0dWRlL0xhdGl0dWRlIGJvdW5kcycsXG4gICAgICByYWRpdXM6IHVuZGVmaW5lZCxcbiAgICAgIGNvbmY6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRlZ3JlZXMgbWludXRlcyBzZWNvbmRzIHRvIGRkXG4gKiBAcGFyYW0gZGVncmVlcyBEZWdyZWVzXG4gKiBAcGFyYW0gbWludXRlcyBNaW51dGVzXG4gKiBAcGFyYW0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0gZGlyZWN0aW9uIERpcmVjdGlvblxuICovXG5mdW5jdGlvbiBjb252ZXJ0RE1TVG9ERChcbiAgZGVncmVlczogbnVtYmVyLFxuICBtaW51dGVzOiBudW1iZXIsXG4gIHNlY29uZHM6IG51bWJlcixcbiAgZGlyZWN0aW9uOiBzdHJpbmdcbikge1xuICBtaW51dGVzID0gbWludXRlcyB8fCAwO1xuICBzZWNvbmRzID0gc2Vjb25kcyB8fCAwO1xuXG4gIGNvbnN0IG5lZyA9IGRlZ3JlZXMgPCAwO1xuICBsZXQgZGQgPSBNYXRoLmFicyhkZWdyZWVzKSArIG1pbnV0ZXMgLyA2MCArIHNlY29uZHMgLyAzNjAwO1xuXG4gIGlmIChuZWcgfHwgZGlyZWN0aW9uID09PSAnUycgfHwgZGlyZWN0aW9uID09PSAnVycpIHtcbiAgICBkZCA9IC1kZDtcbiAgfSAvLyBEb24ndCBkbyBhbnl0aGluZyBmb3IgTiBvciBFXG4gIHJldHVybiBkZDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRkIHRvIGRlZ3JlZXMgbWludXRlcyBzZWNvbmRzXG4gKiBAcGFyYW0gbG9uTGF0REQgbG9uZ2l0dWRlIGFuZCBsYXRpdHVkZSBpbiBkZFxuICogQHBhcmFtIGRlY2ltYWwgbnVtYmVyIG9mIGRlY2ltYWxzIGZvciBzZWNvbmRzXG4gKiBAcmV0dXJucyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlIGluIGRtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEREVG9ETVMoXG4gIGxvbkxhdEREOiBbbnVtYmVyLCBudW1iZXJdLCBkZWNpbWFsOiBudW1iZXIgPSAzXG4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGxvbkxhdERNUyA9IFtdO1xuXG4gIGxvbkxhdERELmZvckVhY2goZGQgPT4ge1xuICAgIGNvbnN0IGRlZ3JlZXMgPSBkZCA8IDAgPyBNYXRoLmNlaWwoZGQpIDogTWF0aC5mbG9vcihkZCk7XG4gICAgY29uc3QgaW50ID0gZGQgPCAwID8gKGRlZ3JlZXMgLSBkZCkgKiA2MCA6IChkZCAtIGRlZ3JlZXMpICogNjA7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoaW50KTtcbiAgICBjb25zdCBzZWNvbmRzID0gKChpbnQgLSBtaW51dGVzKSAqIDYwKS50b0ZpeGVkKGRlY2ltYWwpO1xuXG4gICAgbG9uTGF0RE1TLnB1c2goYCR7ZGVncmVlc33CsCAke21pbnV0ZXN9JyAke3NlY29uZHN9XCJgKTtcbiAgfSk7XG4gIHJldHVybiBsb25MYXRETVM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgb2YgdHdvIHZpZXcgc3RhdGVzIGFyZSBlcXVhbC5cbiAqIEBwYXJhbSBzdGF0ZTEgVmlldyBzdGF0ZVxuICogQHBhcmFtIHN0YXRlMiBWaWV3IHN0YXRlXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2aWV3IHN0YXRlcyBhcmUgZXF1YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpZXdTdGF0ZXNBcmVFcXVhbChcbiAgc3RhdGUxOiBNYXBWaWV3U3RhdGUsXG4gIHN0YXRlMjogTWFwVmlld1N0YXRlXG4pOiBib29sZWFuIHtcbiAgaWYgKHN0YXRlMSA9PT0gdW5kZWZpbmVkIHx8IHN0YXRlMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgdG9sZXJhbmNlID0gMSAvIDEwMDAwO1xuICByZXR1cm4gKFxuICAgIHN0YXRlMS56b29tID09PSBzdGF0ZTIuem9vbSAmJlxuICAgIE1hdGgudHJ1bmMoc3RhdGUxLmNlbnRlclswXSAvIHRvbGVyYW5jZSkgPT09XG4gICAgICBNYXRoLnRydW5jKHN0YXRlMi5jZW50ZXJbMF0gLyB0b2xlcmFuY2UpICYmXG4gICAgTWF0aC50cnVuYyhzdGF0ZTEuY2VudGVyWzFdIC8gdG9sZXJhbmNlKSA9PT1cbiAgICAgIE1hdGgudHJ1bmMoc3RhdGUyLmNlbnRlclsxXSAvIHRvbGVyYW5jZSlcbiAgKTtcbn1cblxuLyoqXG4gKiBGb3JtYXQgdGhlIHNjYWxlIHRvIGEgaHVtYW4gcmVhZGFibGUgdGV4dFxuICogQHBhcmFtIFNjYWxlIG9mIHRoZSBtYXBcbiAqIEByZXR1cm5zIEh1bWFuIHJlYWRhYmxlIHNjYWxlIHRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNjYWxlKHNjYWxlKSB7XG4gIHNjYWxlID0gTWF0aC5yb3VuZChzY2FsZSk7XG4gIGlmIChzY2FsZSA8IDEwMDAwKSB7XG4gICAgcmV0dXJuIHNjYWxlICsgJyc7XG4gIH1cblxuICBzY2FsZSA9IE1hdGgucm91bmQoc2NhbGUgLyAxMDAwKTtcbiAgaWYgKHNjYWxlIDwgMTAwMCkge1xuICAgIHJldHVybiBzY2FsZSArICdLJztcbiAgfVxuXG4gIHNjYWxlID0gTWF0aC5yb3VuZChzY2FsZSAvIDEwMDApO1xuICByZXR1cm4gc2NhbGUgKyAnTSc7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSByZXNvbHV0aW9uIGZyb20gYSBzY2FsZSBkZW5vbVxuICogQHBhcmFtIHNjYWxlIFNjYWxlIGRlbm9tXG4gKiBAcGFyYW0gZHBpIERQSVxuICogQHJldHVybnMgUmVzb2x1dGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzb2x1dGlvbkZyb21TY2FsZShcbiAgc2NhbGU6IG51bWJlcixcbiAgZHBpOiBudW1iZXIgPSA5NlxuKTogbnVtYmVyIHtcbiAgY29uc3QgaW5jaGVzUGVyTWV0ZXIgPSAzOS4zNzAxO1xuICByZXR1cm4gc2NhbGUgLyAoaW5jaGVzUGVyTWV0ZXIgKiBkcGkpO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcmVzb2x1dGlvbiBmcm9tIGEgc2NhbGUgZGVub21cbiAqIEBwYXJhbSBTY2FsZSBkZW5vbVxuICogQHJldHVybnMgUmVzb2x1dGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVGcm9tUmVzb2x1dGlvbihcbiAgcmVzb2x1dGlvbjogbnVtYmVyLFxuICB1bml0OiBzdHJpbmcgPSAnbScsXG4gIGRwaTogbnVtYmVyID0gOTZcbik6IG51bWJlciB7XG4gIGNvbnN0IGluY2hlc1Blck1ldGVyID0gMzkuMzcwMTtcbiAgcmV0dXJuIHJlc29sdXRpb24gKiBvbHByb2ouTUVURVJTX1BFUl9VTklUW3VuaXRdICogaW5jaGVzUGVyTWV0ZXIgKiBkcGk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBDVFJMIGtleSBpcyBwdXNoZWQgZHVyaW5nIGFuIE9sIE1hcEJyb3dzZXJQb2ludGVyRXZlbnRcbiAqIEBwYXJhbSBldmVudCBPTCBNYXBCcm93c2VyUG9pbnRlckV2ZW50XG4gKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBDVFJMIGtleSBpcyBwdXNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN0cmxLZXlEb3duKGV2ZW50OiBNYXBCcm93c2VyUG9pbnRlckV2ZW50PGFueT4pOiBib29sZWFuIHtcbiAgY29uc3Qgb3JpZ2luYWxFdmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gIHJldHVybiAoXG4gICAgIW9yaWdpbmFsRXZlbnQuYWx0S2V5ICYmXG4gICAgKE1BQyA/IG9yaWdpbmFsRXZlbnQubWV0YUtleSA6IG9yaWdpbmFsRXZlbnQuY3RybEtleSkgJiZcbiAgICAhb3JpZ2luYWxFdmVudC5zaGlmdEtleVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRDb29yZFRvKGNvb3JkOiBbbnVtYmVyLCBudW1iZXJdLCBkZWNpbWFsOiBudW1iZXIgPSAzKTogW251bWJlciwgbnVtYmVyXSB7XG4gIHJldHVybiBbXG4gICAgTnVtYmVyVXRpbHMucm91bmRUb05EZWNpbWFsKGNvb3JkWzBdLCBkZWNpbWFsKSxcbiAgICBOdW1iZXJVdGlscy5yb3VuZFRvTkRlY2ltYWwoY29vcmRbMV0sIGRlY2ltYWwpXSBhcyBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2YgY29udmVydGVkIGNvb3JkaW5hdGVzLlxuICogQ29udmVyc2lvbiBpcyBkb25lIGZvciBldmVyeSBjb25maWd1cmVkIHByb2plY3Rpb25zXG4gKiBhbmQgZm9yIHRoZSBjdXJyZW50IFVUTSB6b25lIGFuZCBNVE0gem9uZS5cbiAqIEBwYXJhbSBsb25MYXQgW251bWJlciwgbnVtYmVyXSBhcnJheSBvZiB0aGUgY29vcmRpbmF0ZSB0byB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0gcHJvamVjdGlvbnMgIFByb2plY3Rpb25bXSBBcnJheSBvZiBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHJldHVybnMgUmV0dXJucyBhbiBhcnJheSBvZiBjb252ZXJ0ZWQgY29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb25MYXRDb252ZXJzaW9uKFxuICBsb25MYXQ6IFtudW1iZXIsIG51bWJlcl0sXG4gIHByb2plY3Rpb25zOiBQcm9qZWN0aW9uW11cbik6IHtcbiAgY29kZTogc3RyaW5nO1xuICBhbGlhczogc3RyaW5nO1xuICBjb29yZDogW251bWJlciwgbnVtYmVyXTtcbiAgaWdvMkNvb3JkRm9ybWF0OiBzdHJpbmc7XG59W10ge1xuICBjb25zdCByYXdDb29yZDM4NTcgPSBvbHByb2oudHJhbnNmb3JtKGxvbkxhdCwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICBjb25zdCBjb252ZXJ0ZWRMb25MYXQgPSBbXG4gICAge1xuICAgICAgY29kZTogJ0VQU0c6Mzg1NycsXG4gICAgICBhbGlhczogJ1dlYiBNZXJjYXRvcicsXG4gICAgICBjb29yZDogcmF3Q29vcmQzODU3LFxuICAgICAgaWdvMkNvb3JkRm9ybWF0OiBgJHtyb3VuZENvb3JkVG8ocmF3Q29vcmQzODU3KS5qb2luKCcsICcpfSA7IDM4NTdgXG4gICAgfVxuICBdO1xuXG4gIC8vIGRldGVjdCB0aGUgY3VycmVudCB1dG0gem9uZS5cbiAgY29uc3QgdXRtWm9uZSA9IHV0bVpvbmVGcm9tTG9uTGF0KGxvbkxhdCk7XG4gIGNvbnN0IGVwc2dVdG0gPSB1dG1ab25lIDwgMTAgPyBgRVBTRzozMjYwJHt1dG1ab25lfWAgOiBgRVBTRzozMjYke3V0bVpvbmV9YDtcbiAgY29uc3QgdXRtTmFtZSA9IGBVVE0tJHt1dG1ab25lfWA7XG4gIGNvbnN0IHJhd0Nvb3JkVXRtID0gb2xwcm9qLnRyYW5zZm9ybShsb25MYXQsICdFUFNHOjQzMjYnLCBlcHNnVXRtKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICBjb252ZXJ0ZWRMb25MYXQucHVzaCh7XG4gICAgY29kZTogZXBzZ1V0bSxcbiAgICBhbGlhczogJ1VUTScsXG4gICAgY29vcmQ6IHJhd0Nvb3JkVXRtLFxuICAgIGlnbzJDb29yZEZvcm1hdDogYCR7dXRtTmFtZX0gJHtyb3VuZENvb3JkVG8ocmF3Q29vcmRVdG0pLmpvaW4oJywgJyl9YFxuICB9KTtcblxuICAvLyBkZXRlY3QgdGhlIGN1cnJlbnQgbXRtIHpvbmUuXG4gIGNvbnN0IG10bVpvbmUgPSBtdG1ab25lRnJvbUxvbkxhdChsb25MYXQpO1xuICBpZiAobXRtWm9uZSkge1xuICAgIGNvbnN0IGVwc2dNdG0gPVxuICAgICAgbXRtWm9uZSA8IDEwID8gYEVQU0c6MzIxOCR7bXRtWm9uZX1gIDogYEVQU0c6MzIxJHs4MCArIG10bVpvbmV9YDtcbiAgICBjb25zdCBtdG1OYW1lID0gYE1UTS0ke210bVpvbmV9YDtcbiAgICBjb25zdCByYXdDb29yZE10bSA9IG9scHJvai50cmFuc2Zvcm0obG9uTGF0LCAnRVBTRzo0MzI2JywgZXBzZ010bSkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICBjb252ZXJ0ZWRMb25MYXQucHVzaCh7XG4gICAgICBjb2RlOiBlcHNnTXRtLFxuICAgICAgYWxpYXM6ICdNVE0nLFxuICAgICAgY29vcmQ6IHJhd0Nvb3JkTXRtLFxuICAgICAgaWdvMkNvb3JkRm9ybWF0OiBgJHttdG1OYW1lfSAke3JvdW5kQ29vcmRUbyhyYXdDb29yZE10bSkuam9pbignLCAnKX1gXG4gICAgfSk7XG4gIH1cblxuICBwcm9qZWN0aW9ucy5mb3JFYWNoKHByb2plY3Rpb24gPT4ge1xuICAgIGNvbnN0IHJhd0Nvb3JkID0gb2xwcm9qLnRyYW5zZm9ybShsb25MYXQsICdFUFNHOjQzMjYnLCBwcm9qZWN0aW9uLmNvZGUpIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgY29uc3QgbnVtZXJpY0Vwc2dDb2RlID0gcHJvamVjdGlvbi5jb2RlLnNwbGl0KCc6JylbMV07XG4gICAgY29udmVydGVkTG9uTGF0LnB1c2goe1xuICAgICAgY29kZTogcHJvamVjdGlvbi5jb2RlLFxuICAgICAgYWxpYXM6IHByb2plY3Rpb24uYWxpYXMgfHwgcHJvamVjdGlvbi5jb2RlLFxuICAgICAgY29vcmQ6IHJhd0Nvb3JkLFxuICAgICAgaWdvMkNvb3JkRm9ybWF0OiBgJHtyb3VuZENvb3JkVG8ocmF3Q29vcmQpLmpvaW4oXG4gICAgICAgICcsICdcbiAgICAgICl9IDsgJHtudW1lcmljRXBzZ0NvZGV9YFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gY29udmVydGVkTG9uTGF0O1xufVxuXG4vKipcbiAqIERldGVjdCB0aGUgY3VycmVudCB1dG0gem9uZSBvZiB0aGUgbG9uL2xhdCBjb29yZGluYXRlLlxuICogQHBhcmFtIGxvbkxhdCBbbnVtYmVyLCBudW1iZXJdIGFycmF5IG9mIHRoZSBjb29yZGluYXRlIHRvIGRldGVjdCB0aGUgVVRNIHpvbmUuXG4gKiBAcmV0dXJucyBudW1iZXIgVGhlIFVUTSB6b25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXRtWm9uZUZyb21Mb25MYXQobG9uTGF0OiBbbnVtYmVyLCBudW1iZXJdKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoKGxvbkxhdFswXSArIDE4MCkgLyA2KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgdGhlIGN1cnJlbnQgbXRtIHpvbmUgb2YgdGhlIGxvbi9sYXQgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSBsb25MYXQgW251bWJlciwgbnVtYmVyXSBhcnJheSBvZiB0aGUgY29vcmRpbmF0ZSB0byBkZXRlY3QgdGhlIE1UTSB6b25lLlxuICogQHJldHVybnMgbnVtYmVyIFRoZSBNVE0gem9uZS4gVW5kZWZpbmVkIGlmIG91dHNpZGUgb2YgdGhlIG10bSBhcHBsaWNhdGlvbiB6b25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbXRtWm9uZUZyb21Mb25MYXQobG9uTGF0OiBbbnVtYmVyLCBudW1iZXJdKSB7XG4gIGNvbnN0IGxvbmcgPSBsb25MYXRbMF07XG4gIGxldCBtdG1ab25lO1xuICBpZiAobG9uZyA8IC01MSAmJiBsb25nID4gLTU0KSB7XG4gICAgbXRtWm9uZSA9IDE7XG4gIH1cbiAgaWYgKGxvbmcgPCAtNTQgJiYgbG9uZyA+IC01Nykge1xuICAgIG10bVpvbmUgPSAyO1xuICB9XG4gIGlmIChsb25nIDwgLTU3ICYmIGxvbmcgPiAtNjApIHtcbiAgICBtdG1ab25lID0gMztcbiAgfVxuICBpZiAobG9uZyA8IC02MCAmJiBsb25nID4gLTYzKSB7XG4gICAgbXRtWm9uZSA9IDQ7XG4gIH1cbiAgaWYgKGxvbmcgPCAtNjMgJiYgbG9uZyA+IC02Nikge1xuICAgIG10bVpvbmUgPSA1O1xuICB9XG4gIGlmIChsb25nIDwgLTY2ICYmIGxvbmcgPiAtNjkpIHtcbiAgICBtdG1ab25lID0gNjtcbiAgfVxuICBpZiAobG9uZyA8IC02OSAmJiBsb25nID4gLTcyKSB7XG4gICAgbXRtWm9uZSA9IDc7XG4gIH1cbiAgaWYgKGxvbmcgPCAtNzIgJiYgbG9uZyA+IC03NSkge1xuICAgIG10bVpvbmUgPSA4O1xuICB9XG4gIGlmIChsb25nIDwgLTc1ICYmIGxvbmcgPiAtNzgpIHtcbiAgICBtdG1ab25lID0gOTtcbiAgfVxuICBpZiAobG9uZyA8IC03OCAmJiBsb25nID4gLTgxKSB7XG4gICAgbXRtWm9uZSA9IDEwO1xuICB9XG4gIHJldHVybiBtdG1ab25lO1xufVxuIl19