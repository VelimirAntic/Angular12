import * as Bowser from 'bowser';
export interface UserAgent extends Bowser.Parser.Parser {
    compareVersion: (version: string) => boolean;
}
export declare const userAgent: UserAgent;
