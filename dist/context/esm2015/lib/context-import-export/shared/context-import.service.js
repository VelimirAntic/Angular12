import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImportInvalidFileError, ImportUnreadableFileError, ImportSizeError } from './context-import.errors';
import { getFileExtension } from './context-import.utils';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
export class ContextImportService {
    constructor(config) {
        this.config = config;
        const configFileSizeMb = this.config.getConfig('importExport.clientSideFileSizeMaxMb');
        this.clientSideFileSizeMax =
            (configFileSizeMb ? configFileSizeMb : 30) * Math.pow(1024, 2);
    }
    import(file) {
        return this.importAsync(file);
    }
    getFileImporter(file) {
        const extension = getFileExtension(file);
        const mimeType = file.type;
        const allowedMimeTypes = [...ContextImportService.allowedMimeTypes];
        const allowedExtensions = ContextImportService.allowedExtensions;
        if (allowedMimeTypes.indexOf(mimeType) < 0 &&
            allowedExtensions.indexOf(extension) < 0) {
            return undefined;
        }
        else if (mimeType === 'application/json' ||
            extension === ContextImportService.allowedExtensions) {
            return this.importFile;
        }
        return undefined;
    }
    importAsync(file) {
        const doImport = (observer) => {
            if (file.size >= this.clientSideFileSizeMax) {
                observer.error(new ImportSizeError());
                return;
            }
            const importer = this.getFileImporter(file);
            if (importer === undefined) {
                observer.error(new ImportInvalidFileError());
                return;
            }
            importer.call(this, file, observer);
        };
        return new Observable(doImport);
    }
    importFile(file, observer) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const context = this.parseContextFromFile(file, event.target.result);
                observer.next(context);
            }
            catch (e) {
                observer.error(new ImportUnreadableFileError());
            }
            observer.complete();
        };
        reader.onerror = (evt) => {
            observer.error(new ImportUnreadableFileError());
        };
        reader.readAsText(file, 'UTF-8');
    }
    parseContextFromFile(file, data) {
        const context = JSON.parse(data);
        return context;
    }
}
ContextImportService.allowedMimeTypes = ['application/json'];
ContextImportService.allowedExtensions = 'json';
ContextImportService.ɵfac = function ContextImportService_Factory(t) { return new (t || ContextImportService)(i0.ɵɵinject(i1.ConfigService)); };
ContextImportService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContextImportService, factory: ContextImportService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextImportService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1pbXBvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbnRleHQvc3JjL2xpYi9jb250ZXh0LWltcG9ydC1leHBvcnQvc2hhcmVkL2NvbnRleHQtaW1wb3J0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLGVBQWUsRUFDaEIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBTTFELE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUN2QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUM1QyxzQ0FBc0MsQ0FDdkMsQ0FBQztRQUNGLElBQUksQ0FBQyxxQkFBcUI7WUFDeEIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZUFBZSxDQUNyQixJQUFVO1FBT1YsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0saUJBQWlCLEdBQUcsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7UUFFakUsSUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUN0QyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUN4QztZQUNBLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFDTCxRQUFRLEtBQUssa0JBQWtCO1lBQy9CLFNBQVMsS0FBSyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFDcEQ7WUFDQSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQVU7UUFDNUIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFtQyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU87YUFDUjtZQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUMxQixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO1FBRUYsT0FBTyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVUsRUFBRSxRQUFtQztRQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUM3QixJQUFJO2dCQUNGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN4QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7YUFDakQ7WUFFRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLG9CQUFvQixDQUFDLElBQVUsRUFBRSxJQUFZO1FBQ25ELE1BQU0sT0FBTyxHQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O0FBdkZNLHFDQUFnQixHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV4QyxzQ0FBaUIsR0FBRyxNQUFNLENBQUM7d0ZBSHZCLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGbkIsTUFBTTt1RkFFUCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcblxuaW1wb3J0IHtcbiAgSW1wb3J0SW52YWxpZEZpbGVFcnJvcixcbiAgSW1wb3J0VW5yZWFkYWJsZUZpbGVFcnJvcixcbiAgSW1wb3J0U2l6ZUVycm9yXG59IGZyb20gJy4vY29udGV4dC1pbXBvcnQuZXJyb3JzJztcbmltcG9ydCB7IGdldEZpbGVFeHRlbnNpb24gfSBmcm9tICcuL2NvbnRleHQtaW1wb3J0LnV0aWxzJztcbmltcG9ydCB7IERldGFpbGVkQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQtbWFuYWdlci9zaGFyZWQvY29udGV4dC5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0SW1wb3J0U2VydmljZSB7XG4gIHN0YXRpYyBhbGxvd2VkTWltZVR5cGVzID0gWydhcHBsaWNhdGlvbi9qc29uJ107XG5cbiAgc3RhdGljIGFsbG93ZWRFeHRlbnNpb25zID0gJ2pzb24nO1xuXG4gIHByaXZhdGUgY2xpZW50U2lkZUZpbGVTaXplTWF4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25zdCBjb25maWdGaWxlU2l6ZU1iID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnKFxuICAgICAgJ2ltcG9ydEV4cG9ydC5jbGllbnRTaWRlRmlsZVNpemVNYXhNYidcbiAgICApO1xuICAgIHRoaXMuY2xpZW50U2lkZUZpbGVTaXplTWF4ID1cbiAgICAgIChjb25maWdGaWxlU2l6ZU1iID8gY29uZmlnRmlsZVNpemVNYiA6IDMwKSAqIE1hdGgucG93KDEwMjQsIDIpO1xuICB9XG5cbiAgaW1wb3J0KGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPERldGFpbGVkQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLmltcG9ydEFzeW5jKGZpbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlSW1wb3J0ZXIoXG4gICAgZmlsZTogRmlsZVxuICApOiAoXG4gICAgZmlsZTogRmlsZSxcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8RGV0YWlsZWRDb250ZXh0PixcbiAgICBwcm9qZWN0aW9uSW46IHN0cmluZyxcbiAgICBwcm9qZWN0aW9uT3V0OiBzdHJpbmdcbiAgKSA9PiB2b2lkIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBnZXRGaWxlRXh0ZW5zaW9uKGZpbGUpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgIGNvbnN0IGFsbG93ZWRNaW1lVHlwZXMgPSBbLi4uQ29udGV4dEltcG9ydFNlcnZpY2UuYWxsb3dlZE1pbWVUeXBlc107XG4gICAgY29uc3QgYWxsb3dlZEV4dGVuc2lvbnMgPSBDb250ZXh0SW1wb3J0U2VydmljZS5hbGxvd2VkRXh0ZW5zaW9ucztcblxuICAgIGlmIChcbiAgICAgIGFsbG93ZWRNaW1lVHlwZXMuaW5kZXhPZihtaW1lVHlwZSkgPCAwICYmXG4gICAgICBhbGxvd2VkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBtaW1lVHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nIHx8XG4gICAgICBleHRlbnNpb24gPT09IENvbnRleHRJbXBvcnRTZXJ2aWNlLmFsbG93ZWRFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbXBvcnRGaWxlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpbXBvcnRBc3luYyhmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxEZXRhaWxlZENvbnRleHQ+IHtcbiAgICBjb25zdCBkb0ltcG9ydCA9IChvYnNlcnZlcjogT2JzZXJ2ZXI8RGV0YWlsZWRDb250ZXh0PikgPT4ge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+PSB0aGlzLmNsaWVudFNpZGVGaWxlU2l6ZU1heCkge1xuICAgICAgICBvYnNlcnZlci5lcnJvcihuZXcgSW1wb3J0U2l6ZUVycm9yKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbXBvcnRlciA9IHRoaXMuZ2V0RmlsZUltcG9ydGVyKGZpbGUpO1xuICAgICAgaWYgKGltcG9ydGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydEludmFsaWRGaWxlRXJyb3IoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaW1wb3J0ZXIuY2FsbCh0aGlzLCBmaWxlLCBvYnNlcnZlcik7XG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShkb0ltcG9ydCk7XG4gIH1cblxuICBwcml2YXRlIGltcG9ydEZpbGUoZmlsZTogRmlsZSwgb2JzZXJ2ZXI6IE9ic2VydmVyPERldGFpbGVkQ29udGV4dD4pIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9ubG9hZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5wYXJzZUNvbnRleHRGcm9tRmlsZShmaWxlLCBldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChjb250ZXh0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydFVucmVhZGFibGVGaWxlRXJyb3IoKSk7XG4gICAgICB9XG5cbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgfTtcblxuICAgIHJlYWRlci5vbmVycm9yID0gKGV2dCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEltcG9ydFVucmVhZGFibGVGaWxlRXJyb3IoKSk7XG4gICAgfTtcblxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsICdVVEYtOCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUNvbnRleHRGcm9tRmlsZShmaWxlOiBGaWxlLCBkYXRhOiBzdHJpbmcpOiBEZXRhaWxlZENvbnRleHQge1xuICAgIGNvbnN0IGNvbnRleHQ6IERldGFpbGVkQ29udGV4dCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdfQ==