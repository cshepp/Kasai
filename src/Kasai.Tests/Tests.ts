
import * as tsUnit from '../../node_modules/tsunit.external/tsUnit'
import {MatchTests} from './Kasai.Tests.Match/MatchTests'
import {CompareTests} from './Kasai.Tests.Compare/CompareTests'

var test = new tsUnit.Test({MatchTests: MatchTests, CompareTests: CompareTests})

var result = test.run()
console.log(result)
