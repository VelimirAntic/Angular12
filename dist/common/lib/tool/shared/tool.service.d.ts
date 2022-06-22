import { Tool } from './tool.interface';
import { Toolbox } from './toolbox';
import * as i0 from "@angular/core";
/**
 * Service where runtime tool configurations are registered
 */
export declare class ToolService {
    static tools: {
        [key: string]: Tool;
    };
    /**
     * Toolbox that holds main tools
     */
    toolbox: Toolbox;
    static register(tool: Tool): void;
    constructor();
    /**
     * Return a tool
     * @param name Tool name
     * @returns tool Tool
     */
    getTool(name: string): Tool;
    /**
     * Return all tools
     * @returns tTols
     */
    getTools(): Tool[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToolService>;
}
