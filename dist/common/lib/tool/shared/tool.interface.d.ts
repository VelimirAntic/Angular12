export interface Tool {
    name: string;
    component: any;
    title?: string;
    icon?: string;
    iconImage?: string;
    tooltip?: string;
    global?: boolean;
    options?: {
        [key: string]: any;
    };
    parent?: string;
    children?: string[];
    id?: string;
}
export interface ToolboxOptions {
    toolbar?: string[];
}
