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
    CompareTests.prototype.compareArrays_ShouldReturnTrue_WhenGivenArraysThatAreEqual = function () {
        this.areIdentical(true, Compare_1.compareArrays([0, 1], [0, 1]));
    };
    CompareTests.prototype.compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual = function () {
        this.areIdentical(false, Compare_1.compareArrays([0, 1], ["a", "b"]));
    };
    return CompareTests;
})(tsUnit.TestClass);
exports.CompareTests = CompareTests;
