import { DetailedContext } from '../../context-manager/shared/context.interface';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ContextExportService {
    export(res: DetailedContext): Observable<void>;
    protected exportAsync(res: DetailedContext): Observable<void>;
    protected nothingToExport(res: DetailedContext): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContextExportService>;
}
