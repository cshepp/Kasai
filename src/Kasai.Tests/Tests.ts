
import * as tsUnit from '../../node_modules/tsunit.external/tsUnit'
import {MatchTests} from './Kasai.Tests.Match/MatchTests'
import {CompareTests} from './Kasai.Tests.Compare/CompareTests'
import {HelpersTests} from './Kasai.Tests.Compare/HelpersTests'
import {CaptureTests} from './Kasai.Tests.Compare/CaptureTests'

var test = new tsUnit.Test({
	MatchTests: MatchTests,
	CompareTests: CompareTests,
	HelpersTests: HelpersTests,
	CaptureTests: CaptureTests
})

var result = test.run()
console.log(result)
