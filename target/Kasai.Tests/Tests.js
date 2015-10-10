var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var MatchTests_1 = require('./Kasai.Tests.Match/MatchTests');
var CompareTests_1 = require('./Kasai.Tests.Compare/CompareTests');
var HelpersTests_1 = require('./Kasai.Tests.Compare/HelpersTests');
var CaptureTests_1 = require('./Kasai.Tests.Compare/CaptureTests');
var test = new tsUnit.Test({
    MatchTests: MatchTests_1.MatchTests,
    CompareTests: CompareTests_1.CompareTests,
    HelpersTests: HelpersTests_1.HelpersTests,
    CaptureTests: CaptureTests_1.CaptureTests
});
var result = test.run();
console.log(result);
