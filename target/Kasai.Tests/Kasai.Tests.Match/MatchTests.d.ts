import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit';
export declare class MatchTests extends tsUnit.TestClass {
    match_ShouldMatchCorrectlyAgainstNumbers(): void;
    match_ShouldMatchCorrectlyAgainstBooleans(): void;
    match_ShouldMatchCorrectlyAgainstStrings(): void;
    match_ShouldMatchCorrectlyAgainstAnArray(): void;
    match_ShouldMatchCorrectlyAgainstAllKeysInAnObject(): void;
    match_ShouldMatchCorrectlyAgainstASubsetOfKeysInAnObject(): void;
    match_ShouldMatchFirstClause_WhenManyAreCorrect(): void;
    match_ShouldMatchCorrectlyAgainstNestedObjects(): void;
    match_ShouldMatchCorrectlyAgainstNestedArrays(): void;
    match_ShouldApplyCapturedValues_InArrays(): void;
    match_ShouldApplyCapturedValues_InObjects(): void;
    match_ShouldWork_InComplexNestedStructures(): void;
}
