import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit';
export declare class CaptureTests extends tsUnit.TestClass {
    compareArrays_ShouldReturnCapturedValue_WhenOnlyOneCapture(): void;
    compareArrays_ShouldReturnCaptuedValuesInOrder_WhenMoreThanOneCapture(): void;
    compareArrays_ShouldReturnCapturedValue_WhenArraysAreNested(): void;
    compareArrays_ShouldReturnCapturedValuesInOrder_WhenArraysAreNested(): void;
    compareObjects_ShouldReturnCapturedValue_WhenOnlyOneCapture(): void;
    compareObjects_ShouldReturnCapturedValuesInOrder_WhenMoreThanOneCapture(): void;
    compareObjects_ShouldReturnCapturedValue_WhenObjectsAreNested(): void;
    compareObjects_ShouldReturnCapturedValuesInOrder_WhenObjectsAreNested(): void;
    isMatch_ShouldReturnCapturedValue_WhenCapturingArray(): void;
    isMatch_ShouldReturnCapturedValue_WhenCapturingObject(): void;
}
