var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Helpers_1 = require('../../Kasai.Compare/Helpers');
var HelpersTests = (function (_super) {
    __extends(HelpersTests, _super);
    function HelpersTests() {
        _super.apply(this, arguments);
    }
    HelpersTests.prototype.Wildcard_ShouldReturnTrue_WhenPassedAnything = function () {
        var stringTest = Helpers_1._('string');
        var objectTest = Helpers_1._({});
        var nullTest = Helpers_1._(null);
        this.areCollectionsIdentical([true, true, true], [stringTest, objectTest, nullTest]);
    };
    HelpersTests.prototype.typeOf_ShouldReturnAFunctionThatReturnsTrueWhenPassedAnObject_WhenPassedTheStringObject = function () {
        var t = Helpers_1.typeOf('object');
        var actual = t({});
        this.isTrue(actual);
    };
    HelpersTests.prototype.typeOf_ShouldReturnAFunctionThatReturnsFalseWhenPassedAnObject_WhenPassedTheStringString = function () {
        var t = Helpers_1.typeOf('string');
        var actual = t({});
        this.isFalse(actual);
    };
    HelpersTests.prototype.instanceOf_ShouldReturnAFunctionThatReturnsTrueWhenPassedAnInstanceOfAClass_WhenPassedTheClass = function () {
        var Class = function () { };
        var t = Helpers_1.instanceOf(Class);
        var actual = t(new Class());
        this.isTrue(actual);
    };
    HelpersTests.prototype.instanceOf_ShouldReturnAFunctionThatReturnsFalseWhenPassedAString_WhenPassedAClass = function () {
        var Class = function () { };
        var t = Helpers_1.instanceOf(Class);
        var actual = t('a string');
        this.isFalse(actual);
    };
    return HelpersTests;
})(tsUnit.TestClass);
exports.HelpersTests = HelpersTests;
