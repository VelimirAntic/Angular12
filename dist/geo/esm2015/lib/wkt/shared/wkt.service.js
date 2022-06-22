import { Injectable } from '@angular/core';
import * as olproj from 'ol/proj';
import olWKT from 'ol/format/WKT';
import * as i0 from "@angular/core";
export class WktService {
    constructor() { }
    wktToFeature(wkt, wktProj, featureProj) {
        return new olWKT().readFeature(wkt, {
            dataProjection: wktProj,
            featureProjection: featureProj
        });
    }
    extentToWkt(epsgTO, extent, extentProj) {
        let currentExtent = olproj.transformExtent(extent, extentProj, epsgTO);
        currentExtent = this.roundCoordinateArray(currentExtent, epsgTO, 0);
        const wktPoly = `POLYGON((
      ${extent[0]} ${extent[1]},
      ${extent[0]} ${extent[3]},
      ${extent[2]} ${extent[3]},
      ${extent[2]} ${extent[1]},
      ${extent[0]} ${extent[1]}))`;
        const wktLine = `LINESTRING(
      ${extent[0]} ${extent[1]},
      ${extent[0]} ${extent[3]},
      ${extent[2]} ${extent[3]},
      ${extent[2]} ${extent[1]},
      ${extent[0]} ${extent[1]})`;
        const wktMultiPoints = `MULTIPOINT(
        ${extent[0]} ${extent[1]},
        ${extent[0]} ${extent[3]},
        ${extent[2]} ${extent[3]},
        ${extent[2]} ${extent[1]})`;
        return {
            wktPoly,
            wktLine,
            wktMultiPoints
        };
    }
    roundCoordinateArray(coordinateArray, projection, decimal = 0) {
        const lproj = olproj.get(projection);
        const units = lproj.getUnits();
        const olUnits = ['ft', 'm', 'us-ft'];
        if (olUnits.indexOf(units) !== -1) {
            coordinateArray = this.roundArray(coordinateArray, decimal);
        }
        return coordinateArray;
    }
    roundArray(array, decimal = 0) {
        let x = 0;
        while (x < array.length) {
            array[x] = array[x].toFixed(decimal);
            x++;
        }
        return array;
    }
    snrcToWkt(snrc, epsgTO) {
        snrc = snrc.toLowerCase();
        let wktPoly;
        const ew = {
            1: { from: -56, to: -64 },
            2: { from: -64, to: -72 },
            3: { from: -72, to: -80 },
            4: { from: -80, to: -88 },
            5: { from: -88, to: -96 },
            6: { from: -96, to: -104 },
            7: { from: -104, to: -112 },
            8: { from: -112, to: -120 },
            9: { from: -120, to: -128 },
            10: { from: -128, to: -136 }
        };
        const sn = {
            1: { from: 44, to: 48 },
            2: { from: 48, to: 52 },
            3: { from: 52, to: 56 },
            4: { from: 56, to: 60 },
            5: { from: 60, to: 64 },
            6: { from: 64, to: 68 },
            7: { from: 68, to: 72 },
            8: { from: 72, to: 76 },
            9: { from: 76, to: -128 }
        };
        const snrc250kIndex = [
            ['m', 'n', 'o', 'p'],
            ['l', 'k', 'j', 'i'],
            ['e', 'f', 'g', 'h'],
            ['d', 'c', 'b', 'a']
        ];
        const snrc50kIndex = [
            ['13', '14', '15', '16'],
            ['12', '11', '10', '09'],
            ['05', '06', '07', '08'],
            ['04', '03', '02', '01']
        ];
        const checkSNRC50k = /\d{2,3}[a-p][0,1][0-9]/gi;
        const checkSNRC250k = /\d{2,3}[a-p]/gi;
        const checkSNRC1m = /\d{2,3}/gi;
        let snrc1m = false;
        let snrc250k = false;
        let snrc50k = false;
        if (checkSNRC50k.test(snrc)) {
            snrc50k = true;
        }
        else {
            if (checkSNRC250k.test(snrc)) {
                snrc250k = true;
            }
            else {
                if (checkSNRC1m.test(snrc)) {
                    snrc1m = true;
                }
            }
        }
        if (snrc1m) {
            snrc += 'a01';
        }
        else if (snrc250k) {
            snrc += '01';
        }
        if (/\d{2,3}[a-p][0,1][0-9]/gi.test(snrc)) {
            const regex1m = /(?=[a-p])/gi;
            const ar1m = snrc.split(regex1m);
            const part1m = ar1m[0];
            const part250k = ar1m[1][0];
            const part50k = ar1m[1].split(part250k)[1];
            let separator = 1;
            if (part1m.length === 3) {
                separator = 2;
            }
            const partEW = part1m.substring(0, separator);
            const partSN = part1m.substring(separator);
            const unit1mEW = 8;
            const unit1mSN = 4;
            const unit250kEW = 2;
            const unit250kSN = 1;
            const unit50kEW = 0.5;
            const unit50kSN = 0.25;
            let index250kEW = 0;
            let index250kSN = 0;
            let index50kEW = 0;
            let index50kSN = 0;
            snrc250kIndex.forEach(element => {
                if (element.indexOf(part250k) !== -1) {
                    index250kSN = snrc250kIndex.indexOf(element);
                    index250kEW = element.indexOf(part250k);
                }
            });
            snrc50kIndex.forEach(element => {
                if (element.indexOf(part50k) !== -1) {
                    index50kSN = snrc50kIndex.indexOf(element);
                    index50kEW = element.indexOf(part50k);
                }
            });
            let increment250kEW = 0;
            let increment250kSN = 0;
            let increment50kEW = 0;
            let increment50kSN = 0;
            let unitPerTypeEW = unit1mEW;
            let unitPerTypeSN = unit1mSN;
            if (snrc250k) {
                increment250kEW = index250kEW * unit250kEW;
                increment250kSN = index250kSN * unit250kSN;
                increment50kEW = 0;
                increment50kSN = 0;
                unitPerTypeEW = unit250kEW;
                unitPerTypeSN = unit250kSN;
            }
            else if (snrc50k) {
                increment250kEW = index250kEW * unit250kEW;
                increment250kSN = index250kSN * unit250kSN;
                increment50kEW = index50kEW * unit50kEW;
                increment50kSN = index50kSN * unit50kSN;
                unitPerTypeEW = unit50kEW;
                unitPerTypeSN = unit50kSN;
            }
            const coord = {
                ul: [
                    ew[partEW].to + increment250kEW + increment50kEW,
                    sn[partSN].to - increment250kSN - increment50kSN
                ]
            };
            coord.lr = [
                coord.ul[0] + unitPerTypeEW,
                coord.ul[1] - unitPerTypeSN
            ];
            coord.ur = [coord.ul[0], coord.ul[1] - unitPerTypeSN];
            coord.ll = [coord.ul[0] + unitPerTypeEW, coord.ul[1]];
            coord.ul = olproj.transform([coord.ul[0], coord.ul[1]], 'EPSG:4326', epsgTO);
            coord.lr = olproj.transform([coord.lr[0], coord.lr[1]], 'EPSG:4326', epsgTO);
            coord.ur = olproj.transform([coord.ur[0], coord.ur[1]], 'EPSG:4326', epsgTO);
            coord.ll = olproj.transform([coord.ll[0], coord.ll[1]], 'EPSG:4326', epsgTO);
            // Rounded coordinate to shorten url in get
            coord.ul = this.roundCoordinateArray(coord.ul, epsgTO, 0);
            coord.lr = this.roundCoordinateArray(coord.lr, epsgTO, 0);
            coord.ur = this.roundCoordinateArray(coord.ur, epsgTO, 0);
            coord.ll = this.roundCoordinateArray(coord.ll, epsgTO, 0);
            wktPoly =
                'POLYGON((' +
                    [
                        coord.ul.join(' '),
                        coord.ur.join(' '),
                        coord.lr.join(' '),
                        coord.ll.join(' '),
                        coord.ul.join(' ')
                    ].join(',') +
                    '))';
            const wktLine = 'LINESTRING(' +
                [
                    coord.ul.join(' '),
                    coord.ur.join(' '),
                    coord.lr.join(' '),
                    coord.ll.join(' '),
                    coord.ul.join(' ')
                ].join(',') +
                ')';
            const wktMultiPoints = 'MULTIPOINT(' +
                [
                    coord.ul.join(' '),
                    coord.ur.join(' '),
                    coord.lr.join(' '),
                    coord.ll.join(' ')
                ].join(',') +
                ')';
            return {
                wktPoly,
                wktLine,
                wktMultiPoints
            };
        }
    }
}
WktService.ɵfac = function WktService_Factory(t) { return new (t || WktService)(); };
WktService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WktService, factory: WktService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WktService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2t0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9nZW8vc3JjL2xpYi93a3Qvc2hhcmVkL3drdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDOztBQUtsQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixnQkFBZSxDQUFDO0lBRVQsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVztRQUMzQyxPQUFPLElBQUksS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNsQyxjQUFjLEVBQUUsT0FBTztZQUN2QixpQkFBaUIsRUFBRSxXQUFXO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVO1FBQzNDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RSxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFD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SSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMzQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQzNCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDM0IsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRTtTQUM3QixDQUFDO1FBQ0YsTUFBTSxFQUFFLEdBQUc7WUFDVCxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdkIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN2QixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdkIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN2QixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdkIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFO1NBQzFCLENBQUM7UUFDRixNQUFNLGFBQWEsR0FBRztZQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFH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OztvRUE3UFUsVUFBVTtnRUFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNO3VGQUVQLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBvbHByb2ogZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgb2xXS1QgZnJvbSAnb2wvZm9ybWF0L1dLVCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdrdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHdrdFRvRmVhdHVyZSh3a3QsIHdrdFByb2osIGZlYXR1cmVQcm9qKSB7XG4gICAgcmV0dXJuIG5ldyBvbFdLVCgpLnJlYWRGZWF0dXJlKHdrdCwge1xuICAgICAgZGF0YVByb2plY3Rpb246IHdrdFByb2osXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogZmVhdHVyZVByb2pcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgZXh0ZW50VG9Xa3QoZXBzZ1RPLCBleHRlbnQsIGV4dGVudFByb2opIHtcbiAgICBsZXQgY3VycmVudEV4dGVudCA9IG9scHJvai50cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCBleHRlbnRQcm9qLCBlcHNnVE8pO1xuICAgIGN1cnJlbnRFeHRlbnQgPSB0aGlzLnJvdW5kQ29vcmRpbmF0ZUFycmF5KGN1cnJlbnRFeHRlbnQsIGVwc2dUTywgMCk7XG4gICAgY29uc3Qgd2t0UG9seSA9IGBQT0xZR09OKChcbiAgICAgICR7ZXh0ZW50WzBdfSAke2V4dGVudFsxXX0sXG4gICAgICAke2V4dGVudFswXX0gJHtleHRlbnRbM119LFxuICAgICAgJHtleHRlbnRbMl19ICR7ZXh0ZW50WzNdfSxcbiAgICAgICR7ZXh0ZW50WzJdfSAke2V4dGVudFsxXX0sXG4gICAgICAke2V4dGVudFswXX0gJHtleHRlbnRbMV19KSlgO1xuICAgIGNvbnN0IHdrdExpbmUgPSBgTElORVNUUklORyhcbiAgICAgICR7ZXh0ZW50WzBdfSAke2V4dGVudFsxXX0sXG4gICAgICAke2V4dGVudFswXX0gJHtleHRlbnRbM119LFxuICAgICAgJHtleHRlbnRbMl19ICR7ZXh0ZW50WzNdfSxcbiAgICAgICR7ZXh0ZW50WzJdfSAke2V4dGVudFsxXX0sXG4gICAgICAke2V4dGVudFswXX0gJHtleHRlbnRbMV19KWA7XG4gICAgY29uc3Qgd2t0TXVsdGlQb2ludHMgPSBgTVVMVElQT0lOVChcbiAgICAgICAgJHtleHRlbnRbMF19ICR7ZXh0ZW50WzFdfSxcbiAgICAgICAgJHtleHRlbnRbMF19ICR7ZXh0ZW50WzNdfSxcbiAgICAgICAgJHtleHRlbnRbMl19ICR7ZXh0ZW50WzNdfSxcbiAgICAgICAgJHtleHRlbnRbMl19ICR7ZXh0ZW50WzFdfSlgO1xuICAgIHJldHVybiB7XG4gICAgICB3a3RQb2x5LFxuICAgICAgd2t0TGluZSxcbiAgICAgIHdrdE11bHRpUG9pbnRzXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcm91bmRDb29yZGluYXRlQXJyYXkoY29vcmRpbmF0ZUFycmF5LCBwcm9qZWN0aW9uLCBkZWNpbWFsID0gMCkge1xuICAgIGNvbnN0IGxwcm9qID0gb2xwcm9qLmdldChwcm9qZWN0aW9uKTtcbiAgICBjb25zdCB1bml0cyA9IGxwcm9qLmdldFVuaXRzKCk7XG4gICAgY29uc3Qgb2xVbml0cyA9IFsnZnQnLCAnbScsICd1cy1mdCddO1xuICAgIGlmIChvbFVuaXRzLmluZGV4T2YodW5pdHMpICE9PSAtMSkge1xuICAgICAgY29vcmRpbmF0ZUFycmF5ID0gdGhpcy5yb3VuZEFycmF5KGNvb3JkaW5hdGVBcnJheSwgZGVjaW1hbCk7XG4gICAgfVxuICAgIHJldHVybiBjb29yZGluYXRlQXJyYXk7XG4gIH1cblxuICBwcml2YXRlIHJvdW5kQXJyYXkoYXJyYXksIGRlY2ltYWwgPSAwKSB7XG4gICAgbGV0IHggPSAwO1xuICAgIHdoaWxlICh4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICBhcnJheVt4XSA9IGFycmF5W3hdLnRvRml4ZWQoZGVjaW1hbCk7XG4gICAgICB4Kys7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHB1YmxpYyBzbnJjVG9Xa3Qoc25yYywgZXBzZ1RPKSB7XG4gICAgc25yYyA9IHNucmMudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgd2t0UG9seTtcbiAgICBjb25zdCBldyA9IHtcbiAgICAgIDE6IHsgZnJvbTogLTU2LCB0bzogLTY0IH0sXG4gICAgICAyOiB7IGZyb206IC02NCwgdG86IC03MiB9LFxuICAgICAgMzogeyBmcm9tOiAtNzIsIHRvOiAtODAgfSxcbiAgICAgIDQ6IHsgZnJvbTogLTgwLCB0bzogLTg4IH0sXG4gICAgICA1OiB7IGZyb206IC04OCwgdG86IC05NiB9LFxuICAgICAgNjogeyBmcm9tOiAtOTYsIHRvOiAtMTA0IH0sXG4gICAgICA3OiB7IGZyb206IC0xMDQsIHRvOiAtMTEyIH0sXG4gICAgICA4OiB7IGZyb206IC0xMTIsIHRvOiAtMTIwIH0sXG4gICAgICA5OiB7IGZyb206IC0xMjAsIHRvOiAtMTI4IH0sXG4gICAgICAxMDogeyBmcm9tOiAtMTI4LCB0bzogLTEzNiB9XG4gICAgfTtcbiAgICBjb25zdCBzbiA9IHtcbiAgICAgIDE6IHsgZnJvbTogNDQsIHRvOiA0OCB9LFxuICAgICAgMjogeyBmcm9tOiA0OCwgdG86IDUyIH0sXG4gICAgICAzOiB7IGZyb206IDUyLCB0bzogNTYgfSxcbiAgICAgIDQ6IHsgZnJvbTogNTYsIHRvOiA2MCB9LFxuICAgICAgNTogeyBmcm9tOiA2MCwgdG86IDY0IH0sXG4gICAgICA2OiB7IGZyb206IDY0LCB0bzogNjggfSxcbiAgICAgIDc6IHsgZnJvbTogNjgsIHRvOiA3MiB9LFxuICAgICAgODogeyBmcm9tOiA3MiwgdG86IDc2IH0sXG4gICAgICA5OiB7IGZyb206IDc2LCB0bzogLTEyOCB9XG4gICAgfTtcbiAgICBjb25zdCBzbnJjMjUwa0luZGV4ID0gW1xuICAgICAgWydtJywgJ24nLCAnbycsICdwJ10sXG4gICAgICBbJ2wnLCAnaycsICdqJywgJ2knXSxcbiAgICAgIFsnZScsICdmJywgJ2cnLCAnaCddLFxuICAgICAgWydkJywgJ2MnLCAnYicsICdhJ11cbiAgICBdO1xuXG4gICAgY29uc3Qgc25yYzUwa0luZGV4ID0gW1xuICAgICAgWycxMycsICcxNCcsICcxNScsICcxNiddLFxuICAgICAgWycxMicsICcxMScsICcxMCcsICcwOSddLFxuICAgICAgWycwNScsICcwNicsICcwNycsICcwOCddLFxuICAgICAgWycwNCcsICcwMycsICcwMicsICcwMSddXG4gICAgXTtcbiAgICBjb25zdCBjaGVja1NOUkM1MGsgPSAvXFxkezIsM31bYS1wXVswLDFdWzAtOV0vZ2k7XG4gICAgY29uc3QgY2hlY2tTTlJDMjUwayA9IC9cXGR7MiwzfVthLXBdL2dpO1xuICAgIGNvbnN0IGNoZWNrU05SQzFtID0gL1xcZHsyLDN9L2dpO1xuXG4gICAgbGV0IHNucmMxbSA9IGZhbHNlO1xuICAgIGxldCBzbnJjMjUwayA9IGZhbHNlO1xuICAgIGxldCBzbnJjNTBrID0gZmFsc2U7XG5cbiAgICBpZiAoY2hlY2tTTlJDNTBrLnRlc3Qoc25yYykpIHtcbiAgICAgIHNucmM1MGsgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2hlY2tTTlJDMjUway50ZXN0KHNucmMpKSB7XG4gICAgICAgIHNucmMyNTBrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja1NOUkMxbS50ZXN0KHNucmMpKSB7XG4gICAgICAgICAgc25yYzFtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzbnJjMW0pIHtcbiAgICAgIHNucmMgKz0gJ2EwMSc7XG4gICAgfSBlbHNlIGlmIChzbnJjMjUwaykge1xuICAgICAgc25yYyArPSAnMDEnO1xuICAgIH1cbiAgICBpZiAoL1xcZHsyLDN9W2EtcF1bMCwxXVswLTldL2dpLnRlc3Qoc25yYykpIHtcbiAgICAgIGNvbnN0IHJlZ2V4MW0gPSAvKD89W2EtcF0pL2dpO1xuICAgICAgY29uc3QgYXIxbSA9IHNucmMuc3BsaXQocmVnZXgxbSk7XG4gICAgICBjb25zdCBwYXJ0MW0gPSBhcjFtWzBdO1xuICAgICAgY29uc3QgcGFydDI1MGsgPSBhcjFtWzFdWzBdO1xuICAgICAgY29uc3QgcGFydDUwayA9IGFyMW1bMV0uc3BsaXQocGFydDI1MGspWzFdO1xuICAgICAgbGV0IHNlcGFyYXRvciA9IDE7XG4gICAgICBpZiAocGFydDFtLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBzZXBhcmF0b3IgPSAyO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFydEVXID0gcGFydDFtLnN1YnN0cmluZygwLCBzZXBhcmF0b3IpO1xuICAgICAgY29uc3QgcGFydFNOID0gcGFydDFtLnN1YnN0cmluZyhzZXBhcmF0b3IpO1xuICAgICAgY29uc3QgdW5pdDFtRVcgPSA4O1xuICAgICAgY29uc3QgdW5pdDFtU04gPSA0O1xuICAgICAgY29uc3QgdW5pdDI1MGtFVyA9IDI7XG4gICAgICBjb25zdCB1bml0MjUwa1NOID0gMTtcbiAgICAgIGNvbnN0IHVuaXQ1MGtFVyA9IDAuNTtcbiAgICAgIGNvbnN0IHVuaXQ1MGtTTiA9IDAuMjU7XG4gICAgICBsZXQgaW5kZXgyNTBrRVcgPSAwO1xuICAgICAgbGV0IGluZGV4MjUwa1NOID0gMDtcbiAgICAgIGxldCBpbmRleDUwa0VXID0gMDtcbiAgICAgIGxldCBpbmRleDUwa1NOID0gMDtcbiAgICAgIHNucmMyNTBrSW5kZXguZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5kZXhPZihwYXJ0MjUwaykgIT09IC0xKSB7XG4gICAgICAgICAgaW5kZXgyNTBrU04gPSBzbnJjMjUwa0luZGV4LmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgaW5kZXgyNTBrRVcgPSBlbGVtZW50LmluZGV4T2YocGFydDI1MGspO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNucmM1MGtJbmRleC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5pbmRleE9mKHBhcnQ1MGspICE9PSAtMSkge1xuICAgICAgICAgIGluZGV4NTBrU04gPSBzbnJjNTBrSW5kZXguaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICBpbmRleDUwa0VXID0gZWxlbWVudC5pbmRleE9mKHBhcnQ1MGspO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IGluY3JlbWVudDI1MGtFVyA9IDA7XG4gICAgICBsZXQgaW5jcmVtZW50MjUwa1NOID0gMDtcbiAgICAgIGxldCBpbmNyZW1lbnQ1MGtFVyA9IDA7XG4gICAgICBsZXQgaW5jcmVtZW50NTBrU04gPSAwO1xuICAgICAgbGV0IHVuaXRQZXJUeXBlRVcgPSB1bml0MW1FVztcbiAgICAgIGxldCB1bml0UGVyVHlwZVNOID0gdW5pdDFtU047XG4gICAgICBpZiAoc25yYzI1MGspIHtcbiAgICAgICAgaW5jcmVtZW50MjUwa0VXID0gaW5kZXgyNTBrRVcgKiB1bml0MjUwa0VXO1xuICAgICAgICBpbmNyZW1lbnQyNTBrU04gPSBpbmRleDI1MGtTTiAqIHVuaXQyNTBrU047XG4gICAgICAgIGluY3JlbWVudDUwa0VXID0gMDtcbiAgICAgICAgaW5jcmVtZW50NTBrU04gPSAwO1xuICAgICAgICB1bml0UGVyVHlwZUVXID0gdW5pdDI1MGtFVztcbiAgICAgICAgdW5pdFBlclR5cGVTTiA9IHVuaXQyNTBrU047XG4gICAgICB9IGVsc2UgaWYgKHNucmM1MGspIHtcbiAgICAgICAgaW5jcmVtZW50MjUwa0VXID0gaW5kZXgyNTBrRVcgKiB1bml0MjUwa0VXO1xuICAgICAgICBpbmNyZW1lbnQyNTBrU04gPSBpbmRleDI1MGtTTiAqIHVuaXQyNTBrU047XG4gICAgICAgIGluY3JlbWVudDUwa0VXID0gaW5kZXg1MGtFVyAqIHVuaXQ1MGtFVztcbiAgICAgICAgaW5jcmVtZW50NTBrU04gPSBpbmRleDUwa1NOICogdW5pdDUwa1NOO1xuICAgICAgICB1bml0UGVyVHlwZUVXID0gdW5pdDUwa0VXO1xuICAgICAgICB1bml0UGVyVHlwZVNOID0gdW5pdDUwa1NOO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb29yZDoge3VsPzogYW55LCBscj86IGFueSwgdXI/OiBhbnksIGxsPzogYW55fSA9IHtcbiAgICAgICAgdWw6IFtcbiAgICAgICAgICBld1twYXJ0RVddLnRvICsgaW5jcmVtZW50MjUwa0VXICsgaW5jcmVtZW50NTBrRVcsXG4gICAgICAgICAgc25bcGFydFNOXS50byAtIGluY3JlbWVudDI1MGtTTiAtIGluY3JlbWVudDUwa1NOXG4gICAgICAgIF1cbiAgICAgIH07XG5cbiAgICAgIGNvb3JkLmxyID0gW1xuICAgICAgICBjb29yZC51bFswXSArIHVuaXRQZXJUeXBlRVcsXG4gICAgICAgIGNvb3JkLnVsWzFdIC0gdW5pdFBlclR5cGVTTlxuICAgICAgXTtcbiAgICAgIGNvb3JkLnVyID0gW2Nvb3JkLnVsWzBdLCBjb29yZC51bFsxXSAtIHVuaXRQZXJUeXBlU05dO1xuICAgICAgY29vcmQubGwgPSBbY29vcmQudWxbMF0gKyB1bml0UGVyVHlwZUVXLCBjb29yZC51bFsxXV07XG5cbiAgICAgIGNvb3JkLnVsID0gb2xwcm9qLnRyYW5zZm9ybShcbiAgICAgICAgW2Nvb3JkLnVsWzBdLCBjb29yZC51bFsxXV0sXG4gICAgICAgICdFUFNHOjQzMjYnLFxuICAgICAgICBlcHNnVE9cbiAgICAgICk7XG4gICAgICBjb29yZC5sciA9IG9scHJvai50cmFuc2Zvcm0oXG4gICAgICAgIFtjb29yZC5sclswXSwgY29vcmQubHJbMV1dLFxuICAgICAgICAnRVBTRzo0MzI2JyxcbiAgICAgICAgZXBzZ1RPXG4gICAgICApO1xuICAgICAgY29vcmQudXIgPSBvbHByb2oudHJhbnNmb3JtKFxuICAgICAgICBbY29vcmQudXJbMF0sIGNvb3JkLnVyWzFdXSxcbiAgICAgICAgJ0VQU0c6NDMyNicsXG4gICAgICAgIGVwc2dUT1xuICAgICAgKTtcbiAgICAgIGNvb3JkLmxsID0gb2xwcm9qLnRyYW5zZm9ybShcbiAgICAgICAgW2Nvb3JkLmxsWzBdLCBjb29yZC5sbFsxXV0sXG4gICAgICAgICdFUFNHOjQzMjYnLFxuICAgICAgICBlcHNnVE9cbiAgICAgICk7XG5cbiAgICAgIC8vIFJvdW5kZWQgY29vcmRpbmF0ZSB0byBzaG9ydGVuIHVybCBpbiBnZXRcbiAgICAgIGNvb3JkLnVsID0gdGhpcy5yb3VuZENvb3JkaW5hdGVBcnJheShjb29yZC51bCwgZXBzZ1RPLCAwKTtcbiAgICAgIGNvb3JkLmxyID0gdGhpcy5yb3VuZENvb3JkaW5hdGVBcnJheShjb29yZC5sciwgZXBzZ1RPLCAwKTtcbiAgICAgIGNvb3JkLnVyID0gdGhpcy5yb3VuZENvb3JkaW5hdGVBcnJheShjb29yZC51ciwgZXBzZ1RPLCAwKTtcbiAgICAgIGNvb3JkLmxsID0gdGhpcy5yb3VuZENvb3JkaW5hdGVBcnJheShjb29yZC5sbCwgZXBzZ1RPLCAwKTtcblxuICAgICAgd2t0UG9seSA9XG4gICAgICAgICdQT0xZR09OKCgnICtcbiAgICAgICAgW1xuICAgICAgICAgIGNvb3JkLnVsLmpvaW4oJyAnKSxcbiAgICAgICAgICBjb29yZC51ci5qb2luKCcgJyksXG4gICAgICAgICAgY29vcmQubHIuam9pbignICcpLFxuICAgICAgICAgIGNvb3JkLmxsLmpvaW4oJyAnKSxcbiAgICAgICAgICBjb29yZC51bC5qb2luKCcgJylcbiAgICAgICAgXS5qb2luKCcsJykgK1xuICAgICAgICAnKSknO1xuICAgICAgY29uc3Qgd2t0TGluZSA9XG4gICAgICAgICdMSU5FU1RSSU5HKCcgK1xuICAgICAgICBbXG4gICAgICAgICAgY29vcmQudWwuam9pbignICcpLFxuICAgICAgICAgIGNvb3JkLnVyLmpvaW4oJyAnKSxcbiAgICAgICAgICBjb29yZC5sci5qb2luKCcgJyksXG4gICAgICAgICAgY29vcmQubGwuam9pbignICcpLFxuICAgICAgICAgIGNvb3JkLnVsLmpvaW4oJyAnKVxuICAgICAgICBdLmpvaW4oJywnKSArXG4gICAgICAgICcpJztcblxuICAgICAgY29uc3Qgd2t0TXVsdGlQb2ludHMgPVxuICAgICAgICAnTVVMVElQT0lOVCgnICtcbiAgICAgICAgW1xuICAgICAgICAgIGNvb3JkLnVsLmpvaW4oJyAnKSxcbiAgICAgICAgICBjb29yZC51ci5qb2luKCcgJyksXG4gICAgICAgICAgY29vcmQubHIuam9pbignICcpLFxuICAgICAgICAgIGNvb3JkLmxsLmpvaW4oJyAnKVxuICAgICAgICBdLmpvaW4oJywnKSArXG4gICAgICAgICcpJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdrdFBvbHksXG4gICAgICAgIHdrdExpbmUsXG4gICAgICAgIHdrdE11bHRpUG9pbnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19