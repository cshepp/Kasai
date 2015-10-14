
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {compareArrays, compareObjects, isMatch, positiveMatch} from '../../Kasai.Compare/Compare'

export class CompareTests extends tsUnit.TestClass {

    /**
     * Tests for compareArrays
     */
    compareArrays_ShouldReturnTrue_WhenGivenArraysThatAreEqual() {
        let actual = compareArrays([0, 1], [0, 1])
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual() {
        let actual = compareArrays([0, 1], ["a", "b"])
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    compareArrays_ShouldReturnFalse_WhenValueIsShorterThanPattern() {
        let actual = compareArrays([0], [0, 1])
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    compareArrays_ShouldReturnFalse_WhenArraysAreNotTheSameLength() {
        let actual = compareArrays([0, 1, 2], [0, 1])
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    compareArrays_ShouldReturnFalse_WhenElementsAreSwitched() {
        let actual = compareArrays([0, 1], [1, 0])
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    /**
     * Tests for compareObjects
    */
    compareObjects_ShouldReturnFalse_WhenValueDoesntIncludeKeyFromPattern() {
        let actual = compareObjects({ a: 1, c: 3 }, { a: 1, b: 2 })
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    compareObjects_ShouldReturnFalse_WhenValuesAtAKeyAreDifferent() {
        let actual = compareObjects({ a: 1 }, { a: 2 })
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    compareObject_ShouldReturnTrue_WhenObjectsAreEqual() {
        let actual = compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 })
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    compareObject_ShouldReturnTrue_WhenObjectsAreEqualAreKeysAreOutOfOrder() {
        let actual = compareObjects({ a: 1, b: 2 }, { b: 2, a: 1 })
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    /**
     * Tests for isMatch
     */
    isMatch_ShouldReturnTrue_WhenPassedEqualArrays() {
        let actual = isMatch([1, 2], [1, 2])
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingArrays() {
        let actual = isMatch([1, 0, 2], [2, 6])
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualObjects() {
        let actual = isMatch({a: 4, b: false}, {a: 4, b: false})
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingObjects() {
        let actual = isMatch({a: 0}, {x: 0})
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualStrings() {
        let actual = isMatch("finn", "finn")
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingStrings() {
        let actual = isMatch("jake", "princess bubblegum")
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualNumbers() {
        let actual = isMatch(8675309, 8675309)
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingNumbers() {
        let actual = isMatch(0, 1234)
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }

    isMatch_ShouldReturnTrue_WhenPassedEqualBooleans() {
        let actual = isMatch(true, true)
        this.isTrue(typeof actual === 'boolean' && actual === true)
    }

    isMatch_ShouldReturnFalse_WhenPassedDifferingBooleans() {
        let actual = isMatch(false, true)
        this.isTrue(typeof actual === 'boolean' && actual === false)
    }
}
