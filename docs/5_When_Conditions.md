# When Conditions

When conditions allow you to augment a pattern with a conditional expression - the pattern will only match when the condition is met (hence the name).

In practice, when conditions are often used to compare values that were captured in the pattern. 

Below is a simple example that uses a `when` condition.

```javascript
let x = { a: 1, b: 2 };

let result = match(x, [
	[{ a: $, b: $ }, when((a, b) => a > b), 'one'],
	[{ a: $, b: $ }, when((a, b) => a < b), 'two'],
	[_, 'none']
]);

result === 'two'; // true
```

The `when` condition must evaluate to `true` in order for a match to occur.

Captured values are passed to the `when` condition in the same way they are passed to the result expression.

Also note that the `when` function is just for clarity - you can simply use a function that returns a boolean, if you wish:

```javascript
let x = [1, 2]

let result = match(x, [
	[[$, $], (a, b) => a < b, 'one'],
	[_, 'two']
]);

result === 'one'; // true
```
