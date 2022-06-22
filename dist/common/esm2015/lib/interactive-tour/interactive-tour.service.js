import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@igo2/core";
import * as i2 from "./interactive-tour.loader";
import * as i3 from "angular-shepherd";
export class InteractiveTourService {
    constructor(configService, mediaService, languageService, interactiveTourLoader, shepherdService) {
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
    isAppHaveTour() {
        const haveTour = this.configService.getConfig('interactiveTour.activateInteractiveTour');
        if (haveTour === undefined) {
            return true;
        }
        else {
            return haveTour;
        }
    }
    isToolHaveTourConfig(toolName) {
        const checkTourActiveOptions = this.interactiveTourLoader.getTourOptionData(toolName);
        if (checkTourActiveOptions === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    disabledTourButton(toolName) {
        const stepConfig = this.interactiveTourLoader.getTourOptionData(toolName);
        if (stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.conditions) {
            for (const condition of stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.conditions) {
                if (document.querySelector(condition) === null) {
                    return true;
                }
            }
        }
        return false;
    }
    isMobile() {
        return this.mediaService.isMobile();
    }
    isTourDisplayInMobile() {
        const showInMobile = this.configService.getConfig('interactiveTour.tourInMobile');
        if (showInMobile === undefined) {
            return true;
        }
        return this.configService.getConfig('interactiveTour.tourInMobile');
    }
    getButtons(buttonKind) {
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
    }
    getAction(actionName) {
        const action = {
            click: 'click'
        };
        return action[actionName.toLowerCase()];
    }
    addProgress() {
        const self = this;
        let nbTry = 0;
        const maxTry = 21;
        const checkExist = setInterval(() => {
            if (self.getCurrentStep()) {
                if (self.getCurrentStep().options.attachTo.element && !document.querySelector(self.getCurrentStep().options.attachTo.element)) {
                    self.cancel();
                    clearInterval(checkExist);
                    return;
                }
                else {
                    const currentStepElement = self.getCurrentStep().getElement();
                    if (currentStepElement) {
                        const shepherdList = currentStepElement.querySelectorAll('.shepherd-content, .shepherd-text');
                        shepherdList.forEach(element => {
                            element.classList.add('mat-typography');
                        });
                    }
                    const header = currentStepElement
                        ? currentStepElement.querySelector('.shepherd-header')
                        : undefined;
                    nbTry++;
                    if (header || nbTry > maxTry) {
                        clearInterval(checkExist);
                    }
                    if (header) {
                        const stepsArray = self.steps;
                        const progress = document.createElement('span');
                        progress.className = 'shepherd-progress';
                        progress.innerText = `${stepsArray.indexOf(self.getCurrentStep()) + 1}/${stepsArray.length}`;
                        header.insertBefore(progress, currentStepElement.querySelector('.shepherd-cancel-icon'));
                    }
                }
            }
        }, 100);
    }
    checkNext(index, tour, service) {
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
            const nextStep = tour.steps[index.index];
            if (nextStep.options.attachTo.element && !document.querySelector(nextStep.options.attachTo.element)) {
                service.checkNext(index, tour, service);
            }
            else {
                tour._setupModal();
                tour.show(nextStep.id);
            }
        }
    }
    executeAction(step, actionConfig) {
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
        const element = document.querySelector(actionConfig.element || step.element);
        const action = this.getAction(actionConfig.action);
        if (element && action) {
            element[action]();
        }
    }
    executeActionPromise(step, actionConfig) {
        return new Promise((resolve) => {
            this.executeAction(step, actionConfig);
            if (!actionConfig || !actionConfig.waitFor) {
                resolve();
                return;
            }
            let nbTry = 0;
            const maxTry = actionConfig.maxWait ? actionConfig.maxWait / 100 : 20;
            const checkExist = setInterval(() => {
                nbTry++;
                if (nbTry > maxTry || document.querySelector(actionConfig.waitFor)) {
                    clearInterval(checkExist);
                    resolve();
                }
            }, 100);
        });
    }
    getShepherdSteps(stepConfig) {
        const shepherdSteps = [];
        let i = 0;
        for (const step of stepConfig.steps) {
            shepherdSteps.push({
                attachTo: {
                    element: step.element,
                    on: step.position || stepConfig.position
                },
                popperOptions: {
                    modifiers: [{ name: 'offset', options: { offset: [0, 15] } }]
                },
                beforeShowPromise: () => {
                    return Promise.all([
                        this.executeActionPromise(this.previousStep, this.previousStep ? this.previousStep.beforeChange : undefined),
                        this.executeActionPromise(step, step.beforeShow)
                    ]);
                },
                buttons: this.getButtons(i === 0
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
                title: this.languageService.translate.instant(step.title || stepConfig.title),
                text: [this.languageService.translate.instant(step.text)],
                when: {
                    show: () => {
                        this.executeAction(step, step.onShow);
                    },
                    hide: () => {
                        this.previousStep = step;
                        this.executeAction(step, step.onHide);
                    }
                }
            });
            i++;
        }
        return shepherdSteps;
    }
    startTour(toolName) {
        const stepConfig = this.interactiveTourLoader.getTourOptionData(toolName);
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
        const shepherdSteps = this.getShepherdSteps(stepConfig);
        this.shepherdService.modal = true;
        this.shepherdService.confirmCancel = false;
        this.shepherdService.addSteps(shepherdSteps);
        this.shepherdService.tourObject.on('show', this.addProgress);
        this.shepherdService.tourObject.on('cancel', (index) => {
            this.checkNext(index, this.shepherdService.tourObject, this);
        });
        this.shepherdService.start();
    }
}
InteractiveTourService.ɵfac = function InteractiveTourService_Factory(t) { return new (t || InteractiveTourService)(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i1.MediaService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.InteractiveTourLoader), i0.ɵɵinject(i3.ShepherdService)); };
InteractiveTourService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InteractiveTourService, factory: InteractiveTourService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractiveTourService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }, { type: i1.MediaService }, { type: i1.LanguageService }, { type: i2.InteractiveTourLoader }, { type: i3.ShepherdService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUtdG91ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9saWIvaW50ZXJhY3RpdmUtdG91ci9pbnRlcmFjdGl2ZS10b3VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFjM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQyxZQUNVLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLHFCQUE0QyxFQUM1QyxlQUFnQztRQUpoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFQbEMsY0FBUyxHQUFHLENBQUMsQ0FBQztRQVNwQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRU0sYUFBYTtRQUNsQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxRQUFnQjtRQUMxQyxNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FDekUsUUFBUSxDQUNULENBQUM7UUFDRixJQUFJLHNCQUFzQixLQUFLLFNBQVMsRUFBRTtZQUN4QyxPQUFPLEtB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Q0FBQyxrQkFBa0I7Z0JBQ2hDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRixDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs0RkFyVlUsc0JBQXNCOzRFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZyQixNQUFNO3VGQUVQLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGVwaGVyZFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLXNoZXBoZXJkJztcblxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgTWVkaWFTZXJ2aWNlLCBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdAaWdvMi9jb3JlJztcbmltcG9ydCB7IEludGVyYWN0aXZlVG91ckxvYWRlciB9IGZyb20gJy4vaW50ZXJhY3RpdmUtdG91ci5sb2FkZXInO1xuaW1wb3J0IHtcbiAgSW50ZXJhY3RpdmVUb3VyT3B0aW9ucyxcbiAgSW50ZXJhY3RpdmVUb3VyU3RlcCxcbiAgSW50ZXJhY3RpdmVUb3VyQWN0aW9uXG59IGZyb20gJy4vaW50ZXJhY3RpdmUtdG91ci5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGl2ZVRvdXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwcmV2aW91c1N0ZXA6IEludGVyYWN0aXZlVG91clN0ZXA7XG4gIHByaXZhdGUgbmV4dEluZGV4ID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSxcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW50ZXJhY3RpdmVUb3VyTG9hZGVyOiBJbnRlcmFjdGl2ZVRvdXJMb2FkZXIsXG4gICAgcHJpdmF0ZSBzaGVwaGVyZFNlcnZpY2U6IFNoZXBoZXJkU2VydmljZVxuICApIHtcbiAgICBpZiAodGhpcy5pc0FwcEhhdmVUb3VyKCkpIHtcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmVUb3VyTG9hZGVyLmxvYWRDb25maWdUb3VyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzQXBwSGF2ZVRvdXIoKSB7XG4gICAgY29uc3QgaGF2ZVRvdXIgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdpbnRlcmFjdGl2ZVRvdXIuYWN0aXZhdGVJbnRlcmFjdGl2ZVRvdXInKTtcbiAgICBpZiAoaGF2ZVRvdXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBoYXZlVG91cjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNUb29sSGF2ZVRvdXJDb25maWcodG9vbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNoZWNrVG91ckFjdGl2ZU9wdGlvbnMgPSB0aGlzLmludGVyYWN0aXZlVG91ckxvYWRlci5nZXRUb3VyT3B0aW9uRGF0YShcbiAgICAgIHRvb2xOYW1lXG4gICAgKTtcbiAgICBpZiAoY2hlY2tUb3VyQWN0aXZlT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlZFRvdXJCdXR0b24odG9vbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0ZXBDb25maWc6IEludGVyYWN0aXZlVG91ck9wdGlvbnMgPSB0aGlzLmludGVyYWN0aXZlVG91ckxvYWRlci5nZXRUb3VyT3B0aW9uRGF0YShcbiAgICAgIHRvb2xOYW1lXG4gICAgKTtcblxuICAgIGlmIChzdGVwQ29uZmlnPy5jb25kaXRpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiBzdGVwQ29uZmlnPy5jb25kaXRpb25zKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmRpdGlvbikgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gIH1cblxuICBwdWJsaWMgaXNUb3VyRGlzcGxheUluTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHNob3dJbk1vYmlsZSA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoXG4gICAgICAnaW50ZXJhY3RpdmVUb3VyLnRvdXJJbk1vYmlsZSdcbiAgICApO1xuICAgIGlmIChzaG93SW5Nb2JpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKCdpbnRlcmFjdGl2ZVRvdXIudG91ckluTW9iaWxlJyk7XG4gIH1cblxuICBwcml2YXRlIGdldEJ1dHRvbnMoYnV0dG9uS2luZD86ICdmaXJzdCcgfCAnbGFzdCcgfCAnbm9CYWNrQnV0dG9uJykge1xuICAgIGlmIChidXR0b25LaW5kID09PSAnbm9CYWNrQnV0dG9uJykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdzaGVwaGVyZC1idXR0b24tcHJpbWFyeScsXG4gICAgICAgICAgdGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAnaWdvLmNvbW1vbi5pbnRlcmFjdGl2ZVRvdXIubmV4dEJ1dHRvbidcbiAgICAgICAgICApLFxuICAgICAgICAgIHR5cGU6ICduZXh0J1xuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoYnV0dG9uS2luZCA9PT0gJ2ZpcnN0Jykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdzaGVwaGVyZC1idXR0b24tc2Vjb25kYXJ5JyxcbiAgICAgICAgICB0ZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICdpZ28uY29tbW9uLmludGVyYWN0aXZlVG91ci5leGl0QnV0dG9uJ1xuICAgICAgICAgICksXG4gICAgICAgICAgdHlwZTogJ2NhbmNlbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzZXM6ICdzaGVwaGVyZC1idXR0b24tcHJpbWFyeScsXG4gICAgICAgICAgdGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAnaWdvLmNvbW1vbi5pbnRlcmFjdGl2ZVRvdXIubmV4dEJ1dHRvbidcbiAgICAgICAgICApLFxuICAgICAgICAgIHR5cGU6ICduZXh0J1xuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChidXR0b25LaW5kID09PSAnbGFzdCcpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc2VzOiAnc2hlcGhlcmQtYnV0dG9uLXNlY29uZGFyeScsXG4gICAgICAgICAgdGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoXG4gICAgICAgICAgICAnaWdvLmNvbW1vbi5pbnRlcmFjdGl2ZVRvdXIuYmFja0J1dHRvbidcbiAgICAgICAgICApLFxuICAgICAgICAgIHR5cGU6ICdiYWNrJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NlczogJ3NoZXBoZXJkLWJ1dHRvbi1wcmltYXJ5JyxcbiAgICAgICAgICB0ZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICdpZ28uY29tbW9uLmludGVyYWN0aXZlVG91ci5leGl0QnV0dG9uJ1xuICAgICAgICAgICksXG4gICAgICAgICAgdHlwZTogJ2NhbmNlbCdcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBjbGFzc2VzOiAnc2hlcGhlcmQtYnV0dG9uLXNlY29uZGFyeScsXG4gICAgICAgIHRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uY29tbW9uLmludGVyYWN0aXZlVG91ci5iYWNrQnV0dG9uJ1xuICAgICAgICApLFxuICAgICAgICB0eXBlOiAnYmFjaydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzZXM6ICdzaGVwaGVyZC1idXR0b24tcHJpbWFyeScsXG4gICAgICAgIHRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdpZ28uY29tbW9uLmludGVyYWN0aXZlVG91ci5uZXh0QnV0dG9uJ1xuICAgICAgICApLFxuICAgICAgICB0eXBlOiAnbmV4dCdcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3Rpb24oYWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgY2xpY2s6ICdjbGljaydcbiAgICB9O1xuICAgIHJldHVybiBhY3Rpb25bYWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUHJvZ3Jlc3MoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXMgYXMgYW55O1xuICAgIGxldCBuYlRyeSA9IDA7XG4gICAgY29uc3QgbWF4VHJ5ID0gMjE7XG4gICAgY29uc3QgY2hlY2tFeGlzdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChzZWxmLmdldEN1cnJlbnRTdGVwKCkpIHtcbiAgICAgICAgaWYgKHNlbGYuZ2V0Q3VycmVudFN0ZXAoKS5vcHRpb25zLmF0dGFjaFRvLmVsZW1lbnQgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5nZXRDdXJyZW50U3RlcCgpLm9wdGlvbnMuYXR0YWNoVG8uZWxlbWVudCkpIHtcbiAgICAgICAgICBzZWxmLmNhbmNlbCgpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tFeGlzdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGVwRWxlbWVudCA9IHNlbGYuZ2V0Q3VycmVudFN0ZXAoKS5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgaWYgKGN1cnJlbnRTdGVwRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hlcGhlcmRMaXN0ID0gY3VycmVudFN0ZXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGVwaGVyZC1jb250ZW50LCAuc2hlcGhlcmQtdGV4dCcpO1xuICAgICAgICAgICAgc2hlcGhlcmRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWF0LXR5cG9ncmFwaHknKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBoZWFkZXIgPSBjdXJyZW50U3RlcEVsZW1lbnRcbiAgICAgICAgICAgID8gY3VycmVudFN0ZXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVwaGVyZC1oZWFkZXInKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBuYlRyeSsrO1xuICAgICAgICAgIGlmIChoZWFkZXIgfHwgbmJUcnkgPiBtYXhUcnkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tFeGlzdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgY29uc3Qgc3RlcHNBcnJheSA9IHNlbGYuc3RlcHM7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHByb2dyZXNzLmNsYXNzTmFtZSA9ICdzaGVwaGVyZC1wcm9ncmVzcyc7XG4gICAgICAgICAgICBwcm9ncmVzcy5pbm5lclRleHQgPSBgJHtcbiAgICAgICAgICAgICAgc3RlcHNBcnJheS5pbmRleE9mKHNlbGYuZ2V0Q3VycmVudFN0ZXAoKSkgKyAxXG4gICAgICAgICAgICB9LyR7c3RlcHNBcnJheS5sZW5ndGh9YDtcbiAgICAgICAgICAgIGhlYWRlci5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIHByb2dyZXNzLFxuICAgICAgICAgICAgICBjdXJyZW50U3RlcEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNoZXBoZXJkLWNhbmNlbC1pY29uJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tOZXh0KGluZGV4LCB0b3VyLCBzZXJ2aWNlKSB7XG4gICAgaWYgKHRvdXIuZ2V0Q3VycmVudFN0ZXAoKSkge1xuICAgICAgaWYgKHRvdXIuZ2V0Q3VycmVudFN0ZXAoKS5vcHRpb25zLmF0dGFjaFRvLmVsZW1lbnQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b3VyLmdldEN1cnJlbnRTdGVwKCkub3B0aW9ucy5hdHRhY2hUby5lbGVtZW50KSkge1xuICAgICAgICB0b3VyLmNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4LmluZGV4ID09PSB0b3VyLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdG91ci5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRvdXIuc3RlcHMuc3BsaWNlKGluZGV4LmluZGV4LCAxKTtcbiAgICAgIGNvbnN0IG5leHRTdGVwID0gdG91ci5zdGVwc1tpbmRleC5pbmRleF07XG4gICAgICBpZiAobmV4dFN0ZXAub3B0aW9ucy5hdHRhY2hUby5lbGVtZW50ICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5leHRTdGVwLm9wdGlvbnMuYXR0YWNoVG8uZWxlbWVudCkpIHtcbiAgICAgICAgc2VydmljZS5jaGVja05leHQoaW5kZXgsIHRvdXIsIHNlcnZpY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG91ci5fc2V0dXBNb2RhbCgpO1xuICAgICAgICB0b3VyLnNob3cobmV4dFN0ZXAuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXhlY3V0ZUFjdGlvbihcbiAgICBzdGVwOiBJbnRlcmFjdGl2ZVRvdXJTdGVwLFxuICAgIGFjdGlvbkNvbmZpZzogSW50ZXJhY3RpdmVUb3VyQWN0aW9uXG4gICkge1xuICAgIGlmICghYWN0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgYWN0aW9uQ29uZmlnLmNvbmRpdGlvbiAmJlxuICAgICAgKChhY3Rpb25Db25maWcuY29uZGl0aW9uLmNoYXJBdCgwKSA9PT0gJyEnICYmXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWN0aW9uQ29uZmlnLmNvbmRpdGlvbi5zbGljZSgxKSkpIHx8XG4gICAgICAgIChhY3Rpb25Db25maWcuY29uZGl0aW9uLmNoYXJBdCgwKSAhPT0gJyEnICYmXG4gICAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWN0aW9uQ29uZmlnLmNvbmRpdGlvbikpKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGFjdGlvbkNvbmZpZy5lbGVtZW50IHx8IHN0ZXAuZWxlbWVudFxuICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24oYWN0aW9uQ29uZmlnLmFjdGlvbik7XG4gICAgaWYgKGVsZW1lbnQgJiYgYWN0aW9uKSB7XG4gICAgICBlbGVtZW50W2FjdGlvbl0oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVBY3Rpb25Qcm9taXNlKFxuICAgIHN0ZXA6IEludGVyYWN0aXZlVG91clN0ZXAsXG4gICAgYWN0aW9uQ29uZmlnOiBJbnRlcmFjdGl2ZVRvdXJBY3Rpb25cbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmV4ZWN1dGVBY3Rpb24oc3RlcCwgYWN0aW9uQ29uZmlnKTtcbiAgICAgIGlmICghYWN0aW9uQ29uZmlnIHx8ICFhY3Rpb25Db25maWcud2FpdEZvcikge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBuYlRyeSA9IDA7XG4gICAgICBjb25zdCBtYXhUcnkgPSBhY3Rpb25Db25maWcubWF4V2FpdCA/IGFjdGlvbkNvbmZpZy5tYXhXYWl0IC8gMTAwIDogMjA7XG4gICAgICBjb25zdCBjaGVja0V4aXN0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBuYlRyeSsrO1xuICAgICAgICBpZiAobmJUcnkgPiBtYXhUcnkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhY3Rpb25Db25maWcud2FpdEZvcikpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGNoZWNrRXhpc3QpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hlcGhlcmRTdGVwcyhzdGVwQ29uZmlnOiBJbnRlcmFjdGl2ZVRvdXJPcHRpb25zKSB7XG4gICAgY29uc3Qgc2hlcGhlcmRTdGVwcyA9IFtdO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3Qgc3RlcCBvZiBzdGVwQ29uZmlnLnN0ZXBzKSB7XG4gICAgICBzaGVwaGVyZFN0ZXBzLnB1c2goe1xuICAgICAgICBhdHRhY2hUbzoge1xuICAgICAgICAgIGVsZW1lbnQ6IHN0ZXAuZWxlbWVudCxcbiAgICAgICAgICBvbjogc3RlcC5wb3NpdGlvbiB8fCBzdGVwQ29uZmlnLnBvc2l0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgICAgICBtb2RpZmllcnM6IFt7IG5hbWU6ICdvZmZzZXQnLCBvcHRpb25zOiB7IG9mZnNldDogWzAsIDE1XSB9IH1dXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNob3dQcm9taXNlOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUFjdGlvblByb21pc2UoXG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGVwLFxuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcCA/IHRoaXMucHJldmlvdXNTdGVwLmJlZm9yZUNoYW5nZSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUFjdGlvblByb21pc2Uoc3RlcCwgc3RlcC5iZWZvcmVTaG93KVxuICAgICAgICAgIF0pO1xuICAgICAgICB9LFxuICAgICAgICBidXR0b25zOiB0aGlzLmdldEJ1dHRvbnMoXG4gICAgICAgICAgaSA9PT0gMFxuICAgICAgICAgICAgPyAnZmlyc3QnXG4gICAgICAgICAgICA6IGkgKyAxID09PSBzdGVwQ29uZmlnLnN0ZXBzLmxlbmd0aFxuICAgICAgICAgICAgPyAnbGFzdCdcbiAgICAgICAgICAgIDogc3RlcENvbmZpZy5zdGVwc1tpXS5ub0JhY2tCdXR0b25cbiAgICAgICAgICAgID8gJ25vQmFja0J1dHRvbidcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICksXG4gICAgICAgIGNsYXNzZXM6IHN0ZXAuY2xhc3MsXG4gICAgICAgIGhpZ2hsaWdodENsYXNzOiBzdGVwLmhpZ2hsaWdodENsYXNzLFxuICAgICAgICBzY3JvbGxUbzogc3RlcC5zY3JvbGxUb0VsZW1lbnQgfHwgc3RlcENvbmZpZy5zY3JvbGxUb0VsZW1lbnQgfHwgdHJ1ZSxcbiAgICAgICAgY2FuQ2xpY2tUYXJnZXQ6IHN0ZXAuZGlzYWJsZUludGVyYWN0aW9uXG4gICAgICAgICAgPyAhc3RlcC5kaXNhYmxlSW50ZXJhY3Rpb25cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgdGl0bGU6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgIHN0ZXAudGl0bGUgfHwgc3RlcENvbmZpZy50aXRsZVxuICAgICAgICApLFxuICAgICAgICB0ZXh0OiBbdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRlLmluc3RhbnQoc3RlcC50ZXh0KV0sXG4gICAgICAgIHdoZW46IHtcbiAgICAgICAgICBzaG93OiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVBY3Rpb24oc3RlcCwgc3RlcC5vblNob3cpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGlkZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlQWN0aW9uKHN0ZXAsIHN0ZXAub25IaWRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVwaGVyZFN0ZXBzO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0VG91cih0b29sTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3RlcENvbmZpZzogSW50ZXJhY3RpdmVUb3VyT3B0aW9ucyA9IHRoaXMuaW50ZXJhY3RpdmVUb3VyTG9hZGVyLmdldFRvdXJPcHRpb25EYXRhKFxuICAgICAgdG9vbE5hbWVcbiAgICApO1xuXG4gICAgdGhpcy5zaGVwaGVyZFNlcnZpY2UuZGVmYXVsdFN0ZXBPcHRpb25zID0ge1xuICAgICAgY2xhc3Nlczogc3RlcENvbmZpZy5jbGFzcyxcbiAgICAgIGhpZ2hsaWdodENsYXNzOiBzdGVwQ29uZmlnLmhpZ2hsaWdodENsYXNzLFxuICAgICAgY2FuQ2xpY2tUYXJnZXQ6IHN0ZXBDb25maWcuZGlzYWJsZUludGVyYWN0aW9uXG4gICAgICAgID8gIXN0ZXBDb25maWcuZGlzYWJsZUludGVyYWN0aW9uXG4gICAgICAgIDogdHJ1ZSxcbiAgICAgIGNhbmNlbEljb246IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzaGVwaGVyZFN0ZXBzID0gdGhpcy5nZXRTaGVwaGVyZFN0ZXBzKHN0ZXBDb25maWcpO1xuXG4gICAgdGhpcy5zaGVwaGVyZFNlcnZpY2UubW9kYWwgPSB0cnVlO1xuICAgIHRoaXMuc2hlcGhlcmRTZXJ2aWNlLmNvbmZpcm1DYW5jZWwgPSBmYWxzZTtcbiAgICB0aGlzLnNoZXBoZXJkU2VydmljZS5hZGRTdGVwcyhzaGVwaGVyZFN0ZXBzKTtcblxuICAgIHRoaXMuc2hlcGhlcmRTZXJ2aWNlLnRvdXJPYmplY3Qub24oJ3Nob3cnLCB0aGlzLmFkZFByb2dyZXNzKTtcbiAgICB0aGlzLnNoZXBoZXJkU2VydmljZS50b3VyT2JqZWN0Lm9uKCdjYW5jZWwnLCAoaW5kZXgpID0+wqB7XG4gICAgICB0aGlzLmNoZWNrTmV4dChpbmRleCwgdGhpcy5zaGVwaGVyZFNlcnZpY2UudG91ck9iamVjdCwgdGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNoZXBoZXJkU2VydmljZS5zdGFydCgpO1xuICB9XG59XG4iXX0=