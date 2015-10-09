
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {match} from '../../Kasai.Match/Match'
import {_} from '../../Kasai.Compare/Helpers'
import {$} from '../../Kasai.Compare/Capture'

export class MatchTests extends tsUnit.TestClass {

    match_ShouldMatchCorrectlyAgainstNumbers() {
        var actual = match(1, [
            [1, true],
            [0, false]
        ])

        this.isTrue(actual)
    }

    match_ShouldMatchCorrectlyAgainstBooleans() {
        var actual = match(true, [
            [true, 11],
            [false, 12]
        ])

        this.areIdentical(actual, 11)
    }

    match_ShouldMatchCorrectlyAgainstStrings() {
        var actual = match('something', [
            ['something', 'y'],
            [_, 'z']
        ])

        this.areIdentical('y', actual)
    }

    match_ShouldMatchCorrectlyAgainstAnArray() {
        var actual = match(['a', 'b', 'c'], [
            [['a', 'b', 'c'], 'one'],
            [_, 'two']
        ])

        this.areIdentical('one', actual)
    }

    match_ShouldMatchCorrectlyAgainstAllKeysInAnObject() {
        var actual = match({ a: 1, b: 2 }, [
            [{ a: 1, b: 2 }, 'one'],
            [_, 'two']
        ])

        this.areIdentical('one', actual)
    }

    match_ShouldMatchCorrectlyAgainstASubsetOfKeysInAnObject() {
        var actual = match({ a: 1, b: 2 }, [
            [{ a: 1 }, 'one'],
            [_, 'two']
        ])

        this.areIdentical('one', actual)
    }

    match_ShouldMatchFirstClause_WhenManyAreCorrect() {
        var actual = match('x', [
            ['x', 1],
            ['x', 2],
            ['x', 3]
        ])

        this.areIdentical(1, actual)
    }

    match_ShouldMatchCorrectlyAgainstNestedObjects() {
        var actual = match({ a: { b: 1 } }, [
            [{ a: { b: 1 } }, 'one'],
            [_, 'two']
        ])

        this.areIdentical('one', actual)
    }

    match_ShouldMatchCorrectlyAgainstNestedArrays() {
        var actual = match([[1, 2], [3, 4]], [
            [[[1, 2], [3, 4]], 'one'],
            [_, 'two']
        ])

        this.areIdentical('one', actual)
    }
}
