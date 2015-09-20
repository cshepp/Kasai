var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var MatchTests_1 = require('./Kasai.Tests.Match/MatchTests');
var CompareTests_1 = require('./Kasai.Tests.Compare/CompareTests');
var test = new tsUnit.Test({ MatchTests: MatchTests_1.MatchTests, CompareTests: CompareTests_1.CompareTests });
var result = test.run();
console.log(result);
