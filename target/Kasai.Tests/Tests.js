var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var MatchTests_1 = require('./Kasai.Tests.Match/MatchTests');
var test = new tsUnit.Test({
    MatchTests: MatchTests_1.MatchTests //,
});
var result = test.run();
console.log(result);
