import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit';
export declare class CompareTests extends tsUnit.TestClass {
    /**
     * Tests for compareArrays
     */
    compareArrays_ShouldReturnTrue_WhenGivenArraysThatAreEqual(): void;
    compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual(): void;
    compareArrays_ShouldReturnFalse_WhenValueIsShorterThanPattern(): void;
    compareArrays_ShouldReturnFalse_WhenArraysAreNotTheSameLength(): void;
    compareArrays_ShouldReturnFalse_WhenElementsAreSwitched(): void;
    /**
     * Tests for compareObjects
    */
    compareObjects_ShouldReturnFalse_WhenValueDoesntIncludeKeyFromPattern(): void;
    compareObjects_ShouldReturnFalse_WhenValuesAtAKeyAreDifferent(): void;
    compareObject_ShouldReturnTrue_WhenObjectsAreEqual(): void;
    compareObject_ShouldReturnTrue_WhenObjectsAreEqualAreKeysAreOutOfOrder(): void;
    /**
     * Tests for isMatch
     */
    isMatch_ShouldReturnTrue_WhenPassedEqualArrays(): void;
    isMatch_ShouldReturnFalse_WhenPassedDifferingArrays(): void;
    isMatch_ShouldReturnTrue_WhenPassedEqualObjects(): void;
    isMatch_ShouldReturnFalse_WhenPassedDifferingObjects(): void;
    isMatch_ShouldReturnTrue_WhenPassedEqualStrings(): void;
    isMatch_ShouldReturnFalse_WhenPassedDifferingStrings(): void;
    isMatch_ShouldReturnTrue_WhenPassedEqualNumbers(): void;
    isMatch_ShouldReturnFalse_WhenPassedDifferingNumbers(): void;
    isMatch_ShouldReturnTrue_WhenPassedEqualBooleans(): void;
    isMatch_ShouldReturnFalse_WhenPassedDifferingBooleans(): void;
}
