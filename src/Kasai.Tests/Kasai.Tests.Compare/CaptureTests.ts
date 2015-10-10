
import * as tsUnit from '../../../node_modules/tsunit.external/tsUnit'
import {compareArrays, compareObjects, isMatch} from '../../Kasai.Compare/Compare'
import {$, Capture} from '../../Kasai.Compare/Capture'
import {_} from '../../Kasai.Compare/Helpers'

export class CaptureTests extends tsUnit.TestClass {

	compareArrays_ShouldReturnCapturedValue_WhenOnlyOneCapture() {
		let actual = compareArrays(['test'], [$])
		this.isTrue(actual instanceof Capture && actual.value[0] === 'test')
	}
	
	compareArrays_ShouldReturnCaptuedValuesInOrder_WhenMoreThanOneCapture() { 
		let actual = compareArrays(['test', 'test2'], [$, $])
		this.isTrue(actual instanceof Capture
			&& actual.value[0] === 'test'
			&& actual.value[1] === 'test2')
	}
	
	compareArrays_ShouldReturnCapturedValue_WhenArraysAreNested() { 
		let actual = compareArrays([['test']], [[$]])
		this.isTrue(actual instanceof Capture && actual.value[0] === 'test')
	}
	
	compareArrays_ShouldReturnCapturedValuesInOrder_WhenArraysAreNested() { 
		let actual = compareArrays([['test'], ['test2']], [[$], [$]])
		this.isTrue(actual instanceof Capture
			&& actual.value[0] === 'test'
			&& actual.value[1] === 'test2')
	}
	
	compareObjects_ShouldReturnCapturedValue_WhenOnlyOneCapture() { 
		let actual = compareObjects({ a: 'test' }, { a: $ })
		this.isTrue(actual instanceof Capture && actual.value[0] === 'test')
	}
	
	compareObjects_ShouldReturnCapturedValuesInOrder_WhenMoreThanOneCapture() { 
		let actual = compareObjects({ a: 'test', b: 'test2' }, { a: $, b: $ })
		this.isTrue(actual instanceof Capture
			&& actual.value[0] === 'test'
			&& actual.value[1] === 'test2')
	}
	
	compareObjects_ShouldReturnCapturedValue_WhenObjectsAreNested() { 
		let actual = compareObjects({ a: { b: 'test' } }, { a: { b: $ } })
		this.isTrue(actual instanceof Capture
			&& actual.value[0] === 'test')
	}
	
	compareObjects_ShouldReturnCapturedValuesInOrder_WhenObjectsAreNested() { 
		let actual = compareObjects({ a: { b: 'test', c: { d: 'test2' } } }, { a: { b: $, c: { d: $ } } })
		this.isTrue(actual instanceof Capture
			&& actual.value[0] === 'test'
			&& actual.value[1] === 'test2')
	}
}
