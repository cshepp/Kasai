var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Compare_1 = require('../../Kasai.Compare/Compare');
var CompareTests = (function (_super) {
    __extends(CompareTests, _super);
    function CompareTests() {
        _super.apply(this, arguments);
    }
    /**
     * Tests for compareArrays
     */
    CompareTests.prototype.compareArrays_ShouldReturnTrue_WhenGivenArraysThatAreEqual = function () {
        this.isTrue(Compare_1.compareArrays([0, 1], [0, 1]));
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual = function () {
        this.isFalse(Compare_1.compareArrays([0, 1], ["a", "b"]));
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenValueIsShorterThanPattern = function () {
        this.isFalse(Compare_1.compareArrays([0], [0, 1]));
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenArraysAreNotTheSameLength = function () {
        this.isFalse(Compare_1.compareArrays([0, 1, 2], [0, 1]));
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenElementsAreSwitched = function () {
        this.isFalse(Compare_1.compareArrays([0, 1], [1, 0]));
    };
    /**
     * Tests for compareObjects
    */
    CompareTests.prototype.compareObjects_ShouldReturnFalse_WhenValueDoesntIncludeKeyFromPattern = function () {
        this.isFalse(Compare_1.compareObjects({ a: 1, c: 3 }, { a: 1, b: 2 }));
    };
    CompareTests.prototype.compareObjects_ShouldReturnFalse_WhenValuesAtAKeyAreDifferent = function () {
        this.isFalse(Compare_1.compareObjects({ a: 1 }, { a: 2 }));
    };
    CompareTests.prototype.compareObject_ShouldReturnTrue_WhenObjectsAreEqual = function () {
        this.isTrue(Compare_1.compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));
    };
    CompareTests.prototype.compareObject_ShouldReturnTrue_WhenObjectsAreEqualAreKeysAreOutOfOrder = function () {
        this.isTrue(Compare_1.compareObjects({ a: 1, b: 2 }, { b: 2, a: 1 }));
    };
    /**
     * Tests for isMatch
     */
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualArrays = function () {
        this.isTrue(Compare_1.isMatch([1, 2], [1, 2]));
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingArrays = function () {
        this.isFalse(Compare_1.isMatch([1, 0, 2], [2, 6]));
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualObjects = function () {
        this.isTrue(Compare_1.isMatch({ a: 4, b: false }, { a: 4, b: false }));
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingObjects = function () {
        this.isFalse(Compare_1.isMatch({ a: 0 }, { x: 0 }));
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualStrings = function () {
        this.isTrue(Compare_1.isMatch("finn", "finn"));
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingStrings = function () {
        this.isFalse(Compare_1.isMatch("jake", "princess bubblegum"));
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualNumbers = function () {
        this.isTrue(Compare_1.isMatch(8675309, 8675309));
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingNumbers = function () {
        this.isFalse(Compare_1.isMatch(0, 1234));
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualBooleans = function () {
        this.isTrue(Compare_1.isMatch(true, true));
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingBooleans = function () {
        this.isFalse(Compare_1.isMatch(false, true));
    };
    return CompareTests;
})(tsUnit.TestClass);
exports.CompareTests = CompareTests;
