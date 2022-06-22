export interface InteractiveTourStep {
    element?: string;
    position?: string;
    title?: string;
    text: string;
    beforeShow?: InteractiveTourAction;
    beforeChange?: InteractiveTourAction;
    onShow?: InteractiveTourAction;
    onHide?: InteractiveTourAction;
    class?: string;
    highlightClass?: string;
    scrollToElement?: boolean;
    disableInteraction?: boolean;
    noBackButton?: boolean;
}
export interface InteractiveTourAction {
    element?: string;
    action: 'click';
    condition?: string;
    waitFor?: string;
    maxWait?: number;
}
export interface InteractiveTourOptions {
    steps: InteractiveTourStep[];
    position?: string;
    title?: string;
    highlightClass?: string;
    class?: string;
    scrollToElement?: boolean;
    disableInteraction?: boolean;
    conditions?: string[];
}
