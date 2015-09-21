
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {_, typeOf, instanceOf} from '../../Kasai.Compare/Helpers'

export class HelpersTests extends tsUnit.TestClass {

    Wildcard_ShouldReturnTrue_WhenPassedAnything(){
        var stringTest = _('string')
        var objectTest = _({})
        var nullTest = _(null)

        this.areCollectionsIdentical([true, true, true], [stringTest, objectTest, nullTest])
    }

    typeOf_ShouldReturnAFunctionThatReturnsTrueWhenPassedAnObject_WhenPassedTheStringObject() {
        var t = typeOf('object')
        var actual = t({})

        this.isTrue(actual)
    }

    typeOf_ShouldReturnAFunctionThatReturnsFalseWhenPassedAnObject_WhenPassedTheStringString() {
        var t = typeOf('string')
        var actual = t({})

        this.isFalse(actual)
    }

    instanceOf_ShouldReturnAFunctionThatReturnsTrueWhenPassedAnInstanceOfAClass_WhenPassedTheClass() {
        var Class = () => {}
        var t = instanceOf(Class)
        var actual = t(new Class())

        this.isTrue(actual)
    }

    instanceOf_ShouldReturnAFunctionThatReturnsFalseWhenPassedAString_WhenPassedAClass() {
        var Class = () => {}
        var t = instanceOf(Class)
        var actual = t('a string')

        this.isFalse(actual)
    }
}
