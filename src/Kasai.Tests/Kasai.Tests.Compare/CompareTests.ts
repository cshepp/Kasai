
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {compareArrays, compareObjects, isMatch} from '../../Kasai.Compare/Compare'

export class CompareTests extends tsUnit.TestClass {
    
    /**
     * Tests for compareArrays
     */
    compareArrays_ShouldReturnTrue_WhenGivenArraysThatAreEqual() {
        this.isTrue(compareArrays([0, 1], [0, 1]))
    }

    compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual() {
        this.isFalse(compareArrays([0, 1], ["a", "b"]))
    }

    compareArrays_ShouldReturnFalse_WhenValueIsShorterThanPattern() {
        this.isFalse(compareArrays([0], [0, 1]))
    }

    compareArrays_ShouldReturnFalse_WhenArraysAreNotTheSameLength() {
        this.isFalse(compareArrays([0, 1, 2], [0, 1]))
    }

    compareArrays_ShouldReturnFalse_WhenElementsAreSwitched() {
        this.isFalse(compareArrays([0, 1], [1, 0]))
    }
    
    /**
     * Tests for compareObjects
    */
    compareObjects_ShouldReturnFalse_WhenValueDoesntIncludeKeyFromPattern() {
        this.isFalse(compareObjects({ a: 1, c: 3 }, { a: 1, b: 2 }))
    }

    compareObjects_ShouldReturnFalse_WhenValuesAtAKeyAreDifferent() {
        this.isFalse(compareObjects({ a: 1 }, { a: 2 }))
    }

    compareObject_ShouldReturnTrue_WhenObjectsAreEqual() {
        this.isTrue(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }))
    }

    compareObject_ShouldReturnTrue_WhenObjectsAreEqualAreKeysAreOutOfOrder() {
        this.isTrue(compareObjects({ a: 1, b: 2 }, { b: 2, a: 1 }))
    }
    
    /**
     * Tests for isMatch 
     */
    isMatch_ShouldReturnTrue_WhenPassedEqualArrays() { 
        this.isTrue(isMatch([1, 2], [1, 2]))
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingArrays() { 
        this.isFalse(isMatch([1, 0, 2], [2, 6]))
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualObjects() { 
        this.isTrue(isMatch({a: 4, b: false}, {a: 4, b: false}))
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingObjects() {
        this.isFalse(isMatch({a: 0}, {x: 0}))
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualStrings() { 
        this.isTrue(isMatch("finn", "finn"))
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingStrings() { 
        this.isFalse(isMatch("jake", "princess bubblegum"))
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualNumbers() {
        this.isTrue(isMatch(8675309, 8675309))
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingNumbers() { 
        this.isFalse(isMatch(0, 1234))
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualBooleans() { 
        this.isTrue(isMatch(true, true))
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingBooleans() { 
        this.isFalse(isMatch(false, true))
    }
}
