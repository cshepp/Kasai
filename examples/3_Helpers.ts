import {match} from '../src/Kasai.Match/Match'
import {_, typeOf, instanceOf} from '../src/Kasai.Compare/Helpers'

/**********************
 * 	wildcard (_)
 */

	// Kasai offers 3 helper methods that allow
	// for super concise syntax
	
	// You're probably already familiar with the
	// first helper - the wildcard (_).
	
	// It's often used as a default case
	
	let x = ['a', 'b', 'd'];
	
	let y = match(x, [
		[['a', 'b', 'c'], 'yes'],
		[_, 'no']
	]);
	
	y === 'no' // true
	
	// Let's quickly take a look at the implementation
	// of the wildcard pattern. Simple, right?
	
	let wildcard = (x) => true;


/**********************
 * 	typeOf
 */

	// The next helper is for matching on the type
	// of a variable. Normally you would have
	// to use a lambda expression:
	
	let z = 1;
	
	let t = match(z, [
		[(x) => typeof x === 'string', 'string'],
		[(x) => typeof x === 'boolean', 'boolean'],
		[(x) => typeof x === 'number', 'number'],
		[_, 'object']
	]);
	
	t === 'number' // true
	
	// BUT - using the typeOf helper makes this
	// a bit shorter:
	
	let t2 = match(z, [
		[typeOf('string'), 'string'],
		[typeOf('boolean'), 'boolean'],
		[typeOf('number'), 'number'],
		[_, 'object']
	]);
	
	t2 === 'number' // true
	
	// ***** Be careful when checking for Arrays!
	// (typeof [] === 'object') -> True! 



/**********************
 * 	instanceOf
 */

	// Kasai also has a helper function for
	// instanceof comparisons:
	
	let Thing = () => { };
	
	let thing = new Thing();
	
	let r = match(thing, [
		[instanceOf(Thing), 'Is a Thing'],
		[_, 'Not a Thing']
	]);
	
	r === 'Is a Thing' // true
