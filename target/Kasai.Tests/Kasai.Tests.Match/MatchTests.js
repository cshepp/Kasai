var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Match_1 = require('../../Kasai.Match/Match');
var Helpers_1 = require('../../Kasai.Compare/Helpers');
var MatchTests = (function (_super) {
    __extends(MatchTests, _super);
    function MatchTests() {
        _super.apply(this, arguments);
    }
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstNumbers = function () {
        var actual = Match_1.match(1, [
            [1, true],
            [0, false]
        ]);
        this.isTrue(actual);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstBooleans = function () {
        var actual = Match_1.match(true, [
            [true, 11],
            [false, 12]
        ]);
        this.areIdentical(actual, 11);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstStrings = function () {
        var actual = Match_1.match('something', [
            ['something', 'y'],
            [Helpers_1._, 'z']
        ]);
        this.areIdentical('y', actual);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstAnArray = function () {
        var actual = Match_1.match(['a', 'b', 'c'], [
            [['a', 'b', 'c'], 'one'],
            [Helpers_1._, 'two']
        ]);
        this.areIdentical('one', actual);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstAllKeysInAnObject = function () {
        var actual = Match_1.match({ a: 1, b: 2 }, [
            [{ a: 1, b: 2 }, 'one'],
            [Helpers_1._, 'two']
        ]);
        this.areIdentical('one', actual);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstASubsetOfKeysInAnObject = function () {
        var actual = Match_1.match({ a: 1, b: 2 }, [
            [{ a: 1 }, 'one'],
            [Helpers_1._, 'two']
        ]);
        this.areIdentical('one', actual);
    };
    MatchTests.prototype.match_ShouldMatchFirstClause_WhenManyAreCorrect = function () {
        var actual = Match_1.match('x', [
            ['x', 1],
            ['x', 2],
            ['x', 3]
        ]);
        this.areIdentical(1, actual);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstNestedObjects = function () {
        var actual = Match_1.match({ a: { b: 1 } }, [
            [{ a: { b: 1 } }, 'one'],
            [Helpers_1._, 'two']
        ]);
        this.areIdentical('one', actual);
    };
    MatchTests.prototype.match_ShouldMatchCorrectlyAgainstNestedArrays = function () {
        var actual = Match_1.match([[1, 2], [3, 4]], [
            [[[1, 2], [3, 4]], 'one'],
            [Helpers_1._, 'two']
        ]);
        this.areIdentical('one', actual);
    };
    return MatchTests;
})(tsUnit.TestClass);
exports.MatchTests = MatchTests;
