
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {compareArrays} from '../../Kasai.Compare/Compare'

export class CompareTests extends tsUnit.TestClass {

    compareArrays_ShouldReturnTrue_WhenGivenArraysThatAreEqual(){
        this.areIdentical(true, compareArrays([0, 1], [0, 1]))
    }

    compareArrays_ShouldReturnFalse_WhenGivenArraysThatAreNotEqual(){
        this.areIdentical(false, compareArrays([0, 1], ["a", "b"]))
    }
}
