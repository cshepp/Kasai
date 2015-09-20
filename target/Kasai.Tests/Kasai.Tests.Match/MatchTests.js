var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var MatchTests = (function (_super) {
    __extends(MatchTests, _super);
    function MatchTests() {
        _super.apply(this, arguments);
    }
    MatchTests.prototype.Test_ShouldPass_WhenExecuted = function () {
        this.areIdentical(1, 1);
    };
    MatchTests.prototype.Test_ShouldFail_WhenExecuted = function () {
        this.areIdentical(1, 2);
    };
    return MatchTests;
})(tsUnit.TestClass);
exports.MatchTests = MatchTests;
