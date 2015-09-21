import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit';
export declare class HelpersTests extends tsUnit.TestClass {
    Wildcard_ShouldReturnTrue_WhenPassedAnything(): void;
    typeOf_ShouldReturnAFunctionThatReturnsTrueWhenPassedAnObject_WhenPassedTheStringObject(): void;
    typeOf_ShouldReturnAFunctionThatReturnsFalseWhenPassedAnObject_WhenPassedTheStringString(): void;
    instanceOf_ShouldReturnAFunctionThatReturnsTrueWhenPassedAnInstanceOfAClass_WhenPassedTheClass(): void;
    instanceOf_ShouldReturnAFunctionThatReturnsFalseWhenPassedAString_WhenPassedAClass(): void;
}
