var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Compare_1 = require('../../Kasai.Compare/Compare');
var Capture_1 = require('../../Kasai.Compare/Capture');
var Helpers_1 = require('../../Kasai.Compare/Helpers');
var CaptureTests = (function (_super) {
    __extends(CaptureTests, _super);
    function CaptureTests() {
        _super.apply(this, arguments);
    }
    CaptureTests.prototype.isMatch_ShouldReturnCapture_WhenPassed = function () {
        var actual = Compare_1.isMatch([['test'], 'again'], [[Capture_1.$], Capture_1.$]);
        console.log(actual);
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'test' && actual.value[1] === 'again');
    };
    CaptureTests.prototype.test = function () {
        var actual = Compare_1.isMatch({ a: 'test', b: '2' }, { a: Capture_1.$, b: Capture_1.$ });
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'test' && actual.value[1] === '2');
    };
    CaptureTests.prototype.test3 = function () {
        var actual = Compare_1.isMatch({ a: { b: 'test' } }, { a: { b: Capture_1.$ } });
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'test');
    };
    CaptureTests.prototype.test4 = function () {
        var actual = Compare_1.isMatch({ a: { b: ['a', 'b', 'c'] } }, { a: { b: ['a', Capture_1.$, Helpers_1._] } });
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'b');
    };
    return CaptureTests;
})(tsUnit.TestClass);
exports.CaptureTests = CaptureTests;
