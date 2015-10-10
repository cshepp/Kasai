var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var tsUnit = require('../../../node_modules/tsunit.external/tsUnit');
var Compare_1 = require('../../Kasai.Compare/Compare');
var Capture_1 = require('../../Kasai.Compare/Capture');
var CaptureTests = (function (_super) {
    __extends(CaptureTests, _super);
    function CaptureTests() {
        _super.apply(this, arguments);
    }
    CaptureTests.prototype.compareArrays_ShouldReturnCapturedValue_WhenOnlyOneCapture = function () {
        var actual = Compare_1.compareArrays(['test'], [Capture_1.$]);
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'test');
    };
    CaptureTests.prototype.compareArrays_ShouldReturnCaptuedValuesInOrder_WhenMoreThanOneCapture = function () {
        var actual = Compare_1.compareArrays(['test', 'test2'], [Capture_1.$, Capture_1.$]);
        this.isTrue(actual instanceof Capture_1.Capture
            && actual.value[0] === 'test'
            && actual.value[1] === 'test2');
    };
    CaptureTests.prototype.compareArrays_ShouldReturnCapturedValue_WhenArraysAreNested = function () {
        var actual = Compare_1.compareArrays([['test']], [[Capture_1.$]]);
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'test');
    };
    CaptureTests.prototype.compareArrays_ShouldReturnCapturedValuesInOrder_WhenArraysAreNested = function () {
        var actual = Compare_1.compareArrays([['test'], ['test2']], [[Capture_1.$], [Capture_1.$]]);
        this.isTrue(actual instanceof Capture_1.Capture
            && actual.value[0] === 'test'
            && actual.value[1] === 'test2');
    };
    CaptureTests.prototype.compareObjects_ShouldReturnCapturedValue_WhenOnlyOneCapture = function () {
        var actual = Compare_1.compareObjects({ a: 'test' }, { a: Capture_1.$ });
        this.isTrue(actual instanceof Capture_1.Capture && actual.value[0] === 'test');
    };
    CaptureTests.prototype.compareObjects_ShouldReturnCapturedValuesInOrder_WhenMoreThanOneCapture = function () {
        var actual = Compare_1.compareObjects({ a: 'test', b: 'test2' }, { a: Capture_1.$, b: Capture_1.$ });
        this.isTrue(actual instanceof Capture_1.Capture
            && actual.value[0] === 'test'
            && actual.value[1] === 'test2');
    };
    CaptureTests.prototype.compareObjects_ShouldReturnCapturedValue_WhenObjectsAreNested = function () {
        var actual = Compare_1.compareObjects({ a: { b: 'test' } }, { a: { b: Capture_1.$ } });
        this.isTrue(actual instanceof Capture_1.Capture
            && actual.value[0] === 'test');
    };
    CaptureTests.prototype.compareObjects_ShouldReturnCapturedValuesInOrder_WhenObjectsAreNested = function () {
        var actual = Compare_1.compareObjects({ a: { b: 'test', c: { d: 'test2' } } }, { a: { b: Capture_1.$, c: { d: Capture_1.$ } } });
        this.isTrue(actual instanceof Capture_1.Capture
            && actual.value[0] === 'test'
            && actual.value[1] === 'test2');
    };
    return CaptureTests;
})(tsUnit.TestClass);
exports.CaptureTests = CaptureTests;
