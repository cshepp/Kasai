import { Capture } from './Capture';
export declare type MatchResult = boolean | Capture;
export interface Comparator {
    (value: any): MatchResult;
}
export declare var positiveMatch: (r: boolean | Capture) => boolean;
export declare var compareArrays: (value: any, pattern: any) => boolean | Capture;
export declare var compareObjects: (value: any, pattern: any) => boolean | Capture;
export declare var getComparator: (pattern: any) => Comparator;
export declare var isMatch: (value: any, pattern: any) => boolean | Capture;
