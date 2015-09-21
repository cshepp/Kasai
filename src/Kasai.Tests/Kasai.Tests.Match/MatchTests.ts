
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {match} from '../../Kasai.Match/Match'

export class MatchTests extends tsUnit.TestClass {

    match_ShouldReturnTrue_InThisCase() { 
        var actual = match(1, [
            [1, true],
            [0, false]
        ])
        
        this.isFalse(actual)
    }
    
    
}
