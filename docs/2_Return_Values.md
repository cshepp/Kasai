

# Returning literals

In the previous examples, our match statements all had result expressions that were literals, like this:

```javascript
let a = 1;

let b = match(a, [
	[1, 'one'],
	[_, 'not one']
]);

b === 'one' // true
```

That's cool, but we can do more!

# Lambda Expressions

Lambdas are _also_ valid as result expressions.
	
When the result expression in a match clause is a lambda, we pass the originl test expression into that function, and return the result.

Here's a simple example.

```javascript
let c = 'one';

let d = match(c, [
	['one', (x) => x.toUpperCase()],
	[_, 'not one']
]);

d === 'ONE'; // true
```

This can also be useful for extracting properties from an object:

```javascript	
let e = { a: 'one' };

let f = match(e, [
	[{ a: 'one' }, (x) => x.a],
	[_, 'not one']
]);

f === 'one'; // true 
```
