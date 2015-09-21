var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Match_1 = require('../../Kasai.Match/Match');
var MatchTests = (function (_super) {
    __extends(MatchTests, _super);
    function MatchTests() {
        _super.apply(this, arguments);
    }
    MatchTests.prototype.match_ShouldReturnTrue_InThisCase = function () {
        var actual = Match_1.match(1, [
            [1, true],
            [0, false]
        ]);
        this.isFalse(actual);
    };
    return MatchTests;
})(tsUnit.TestClass);
exports.MatchTests = MatchTests;
