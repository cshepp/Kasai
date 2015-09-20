
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {match} from '../../Kasai.Match/Match'

export class MatchTests extends tsUnit.TestClass {

    Test_ShouldPass_WhenExecuted(){
        this.areIdentical(1, 1)
    }

    Test_ShouldFail_WhenExecuted(){
        this.areIdentical(1, 2)
    }
}
