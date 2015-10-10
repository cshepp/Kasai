import {match} from '../src/Kasai.Match/Match'
import {_} from '../src/Kasai.Compare/Helpers'

/**********************
 * 	Returning literals
 */

	// In the previous examples, our match
	// statements all returned literals like this:
	
	let a = 1;
	
	let b = match(a, [
		[1, 'one'],
		[_, 'not one']
	]);
	
	b === 'one' // true
	
	// That's cool, but we can do more!



/**********************
 * 	Lambda Expressions
 */

	// Lambdas are _also_ valid as the second
	// element in a pattern case.
	
	// When a lambda is present in a match,
	// we pass the _original_ match value into
	// that function, and return the result.

	// Here's a super simple example.

	let c = 'one';
	
	let d = match(c, [
		['one', (x) => x.toUpperCase()],
		[_, 'not one']
	]);
	
	d === 'ONE'; // true
	
	// This can also be useful for extracting
	// properties from an object.
	
	let e = { a: 'one' };
	
	let f = match(e, [
		[{ a: 'one' }, (x) => x.a],
		[_, 'not one']
	]);
	
	f === 'one'; // true 