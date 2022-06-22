/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MSAL_INSTANCE } from '@azure/msal-angular';
import { EventMessageUtils, InteractionStatus } from '@azure/msal-browser';
import * as i0 from "@angular/core";
import * as i1 from "./auth-msalServiceb2c.service.";
export class MsalBroadcastServiceb2c {
    constructor(msalInstance, authService) {
        this.msalInstance = msalInstance;
        this.authService = authService;
        this._msalSubject = new Subject();
        this.msalSubject$ = this._msalSubject.asObservable();
        // InProgress as BehaviorSubject so most recent inProgress state will be available upon subscription
        this._inProgress = new BehaviorSubject(InteractionStatus.Startup);
        this.inProgress$ = this._inProgress.asObservable();
        this.msalInstance.addEventCallback((message) => {
            this._msalSubject.next(message);
            const status = EventMessageUtils.getInteractionStatusFromEvent(message);
            if (status !== null) {
                this.authService.getLogger().verbose(`BroadcastService - ${message.eventType} results in setting inProgress to ${status}`);
                this._inProgress.next(status);
            }
        });
    }
}
MsalBroadcastServiceb2c.ɵfac = function MsalBroadcastServiceb2c_Factory(t) { return new (t || MsalBroadcastServiceb2c)(i0.ɵɵinject(MSAL_INSTANCE), i0.ɵɵinject(i1.MsalServiceb2c)); };
MsalBroadcastServiceb2c.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MsalBroadcastServiceb2c, factory: MsalBroadcastServiceb2c.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MsalBroadcastServiceb2c, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MSAL_INSTANCE]
            }] }, { type: i1.MsalServiceb2c }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1tc2FsQnJvYWRjYXN0U2VydmljZWIyYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvbGliL3NoYXJlZC9hdXRoLW1zYWxCcm9hZGNhc3RTZXJ2aWNlYjJjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBZ0IsaUJBQWlCLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUluSCxNQUFNLE9BQU8sdUJBQXVCO0lBTWhDLFlBQ21DLFlBQXNDLEVBQzdELFdBQTJCO1FBREosaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQzdELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUVuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyRCxvR0FBb0c7UUFDcEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBb0IsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFxQixFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEUsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsT0FBTyxDQUFDLFNBQVMscUNBQXFDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs4RkF6QlEsdUJBQXVCLGNBT3BCLGFBQWE7NkVBUGhCLHVCQUF1QixXQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVOztzQkFRRixNQUFNO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1TQUxfSU5TVEFOQ0UgfSBmcm9tICdAYXp1cmUvbXNhbC1hbmd1bGFyJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSwgRXZlbnRNZXNzYWdlVXRpbHMsIElQdWJsaWNDbGllbnRBcHBsaWNhdGlvbiwgSW50ZXJhY3Rpb25TdGF0dXMgfSBmcm9tICdAYXp1cmUvbXNhbC1icm93c2VyJztcbmltcG9ydCB7IE1zYWxTZXJ2aWNlYjJjIH0gZnJvbSAnLi9hdXRoLW1zYWxTZXJ2aWNlYjJjLnNlcnZpY2UuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1zYWxCcm9hZGNhc3RTZXJ2aWNlYjJjIHtcbiAgICBwcml2YXRlIF9tc2FsU3ViamVjdDogU3ViamVjdDxFdmVudE1lc3NhZ2U+O1xuICAgIHB1YmxpYyBtc2FsU3ViamVjdCQ6IE9ic2VydmFibGU8RXZlbnRNZXNzYWdlPjtcbiAgICBwcml2YXRlIF9pblByb2dyZXNzOiBCZWhhdmlvclN1YmplY3Q8SW50ZXJhY3Rpb25TdGF0dXM+O1xuICAgIHB1YmxpYyBpblByb2dyZXNzJDogT2JzZXJ2YWJsZTxJbnRlcmFjdGlvblN0YXR1cz47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChNU0FMX0lOU1RBTkNFKSBwcml2YXRlIG1zYWxJbnN0YW5jZTogSVB1YmxpY0NsaWVudEFwcGxpY2F0aW9uLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBNc2FsU2VydmljZWIyY1xuICAgICkge1xuICAgICAgICB0aGlzLl9tc2FsU3ViamVjdCA9IG5ldyBTdWJqZWN0PEV2ZW50TWVzc2FnZT4oKTtcbiAgICAgICAgdGhpcy5tc2FsU3ViamVjdCQgPSB0aGlzLl9tc2FsU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgICAgICAvLyBJblByb2dyZXNzIGFzIEJlaGF2aW9yU3ViamVjdCBzbyBtb3N0IHJlY2VudCBpblByb2dyZXNzIHN0YXRlIHdpbGwgYmUgYXZhaWxhYmxlIHVwb24gc3Vic2NyaXB0aW9uXG4gICAgICAgIHRoaXMuX2luUHJvZ3Jlc3MgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEludGVyYWN0aW9uU3RhdHVzPihJbnRlcmFjdGlvblN0YXR1cy5TdGFydHVwKTtcbiAgICAgICAgdGhpcy5pblByb2dyZXNzJCA9IHRoaXMuX2luUHJvZ3Jlc3MuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgdGhpcy5tc2FsSW5zdGFuY2UuYWRkRXZlbnRDYWxsYmFjaygobWVzc2FnZTogRXZlbnRNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9tc2FsU3ViamVjdC5uZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gRXZlbnRNZXNzYWdlVXRpbHMuZ2V0SW50ZXJhY3Rpb25TdGF0dXNGcm9tRXZlbnQobWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRMb2dnZXIoKS52ZXJib3NlKGBCcm9hZGNhc3RTZXJ2aWNlIC0gJHttZXNzYWdlLmV2ZW50VHlwZX0gcmVzdWx0cyBpbiBzZXR0aW5nIGluUHJvZ3Jlc3MgdG8gJHtzdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5Qcm9ncmVzcy5uZXh0KHN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==