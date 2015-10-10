import {match} from '../src/Kasai.Match/Match'
import {_} from '../src/Kasai.Compare/Helpers'

/**********************
 * 	Single values
 */

	// Let's look at the most basic usage of Kasai - matching against a single value
	
	let season = 'Summer';
	
	let avgTemp = match(season, [
		['Spring', 68],
		['Summer', 85],
		['Autumn', 55],
		['Winter', 25]
	]);
	
	avgTemp === 85; // True
	
	// In the example above, we're using Kasai
	// to mimic the behavior of a switch/case
	// statement.

	// It's also worth noting that, because
	// the cases are just arrays, we
	// can create them dynamically or
	// swap them out at runtime.
	

/**********************
 *	Arrays
 */

	
	// Pattern matching starts to become really
	// awesome when we use it to inspect
	// collections or complex data structures.
	
	// In the example below, we'll use some
	// arrays in our patterns.
	
	// It's important to note that array patterns
	// must be the same length as the value in
	// order to match - we cannot match on the
	// first element in an array and ignore the rest.

	// We'll also introduce the wildcard
	// token (_).
	
	let Exchange = {
		'Canada': 1.29,
		'EU': 0.88
	};

	let productPrice = [600, 'CAD'];
	
	let exchangeRate = match(productPrice, [
		[[_, 'USD'],  1],
		[[_, 'CAD'],  Exchange.Canada],
		[[_, 'EURO'], Exchange.EU]
	]);

	exchangeRate === Exchange.Canada; // True

	// (Nested arrays work too!)


/**********************
 *	Objects
 */

	// Now let's look at using objects in our patterns.
	
	// We can easily match an object by using object literal syntax.
	// Each key in an object can have a different pattern.

	// Object matches are not comprehensive, meaning
	// that _extra_ keys in an object will not prevent
	// it from matching a pattern.
	
	// In the example below, we only care about the "middle" key,
	// so we don't even mention the other two keys.

	let person = {
		first: 'Thomas',
		middle: 'Alva',
		last: 'Edison'
	};

	let hasMiddleName = match(person, [
		[{ middle: _ }, true],
		[_, false]
	]);
	
	hasMiddleName === true; // True


/**********************
 *	Lambda Expressions
 */

	// Kasai supports lambda expressions in patterns.
	
	// Lambdas can be used anywhere in a pattern - 
	// at the top level, in an array, in a property
	// of an object, etc.
	
	// When used in a pattern, lambdas MUST RETURN A BOOLEAN! 
	
	let Cost = {
		Overweight: 100,
		Standard: 50,
		Free: 0
	};

	let suitcase = { owner: { name: 'Billy', isGoldCardMember: false }, weight: 52 };
	
	let cost = match(suitcase, [
		[{ owner: { isGoldCardMember: true } }, Cost.Free],
		[{ weight: (w) => w <= 50 }, Cost.Standard],
		[_, Cost.Overweight]
	]);
	
	cost === Cost.Standard; // True
