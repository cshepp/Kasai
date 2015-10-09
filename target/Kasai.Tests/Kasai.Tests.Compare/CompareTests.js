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
        var actual = Compare_1.compareArrays([0, 1], [0, 1]);
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual = function () {
        var actual = Compare_1.compareArrays([0, 1], ["a", "b"]);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenValueIsShorterThanPattern = function () {
        var actual = Compare_1.compareArrays([0], [0, 1]);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenArraysAreNotTheSameLength = function () {
        var actual = Compare_1.compareArrays([0, 1, 2], [0, 1]);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenElementsAreSwitched = function () {
        var actual = Compare_1.compareArrays([0, 1], [1, 0]);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    /**
     * Tests for compareObjects
    */
    CompareTests.prototype.compareObjects_ShouldReturnFalse_WhenValueDoesntIncludeKeyFromPattern = function () {
        var actual = Compare_1.compareObjects({ a: 1, c: 3 }, { a: 1, b: 2 });
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.compareObjects_ShouldReturnFalse_WhenValuesAtAKeyAreDifferent = function () {
        var actual = Compare_1.compareObjects({ a: 1 }, { a: 2 });
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.compareObject_ShouldReturnTrue_WhenObjectsAreEqual = function () {
        var actual = Compare_1.compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 });
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.compareObject_ShouldReturnTrue_WhenObjectsAreEqualAreKeysAreOutOfOrder = function () {
        var actual = Compare_1.compareObjects({ a: 1, b: 2 }, { b: 2, a: 1 });
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    /**
     * Tests for isMatch
     */
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualArrays = function () {
        var actual = Compare_1.isMatch([1, 2], [1, 2]);
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingArrays = function () {
        var actual = Compare_1.isMatch([1, 0, 2], [2, 6]);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualObjects = function () {
        var actual = Compare_1.isMatch({ a: 4, b: false }, { a: 4, b: false });
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingObjects = function () {
        var actual = Compare_1.isMatch({ a: 0 }, { x: 0 });
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualStrings = function () {
        var actual = Compare_1.isMatch("finn", "finn");
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingStrings = function () {
        var actual = Compare_1.isMatch("jake", "princess bubblegum");
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualNumbers = function () {
        var actual = Compare_1.isMatch(8675309, 8675309);
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingNumbers = function () {
        var actual = Compare_1.isMatch(0, 1234);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    CompareTests.prototype.isMatch_ShouldReturnTrue_WhenPassedEqualBooleans = function () {
        var actual = Compare_1.isMatch(true, true);
        this.isTrue(typeof actual === 'boolean' && actual === true);
    };
    CompareTests.prototype.isMatch_ShouldReturnFalse_WhenPassedDifferingBooleans = function () {
        var actual = Compare_1.isMatch(false, true);
        this.isTrue(typeof actual === 'boolean' && actual === false);
    };
    return CompareTests;
})(tsUnit.TestClass);
exports.CompareTests = CompareTests;
