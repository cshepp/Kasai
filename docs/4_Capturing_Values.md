
# Capturing

Capturing allows you to "save" one or more pieces of a pattern so that you can reference them in the result expression.

Let's dive right in and look at a simple example. When using Kasai, the symbol `$` will capture a value in a pattern.

```javascript
let obj = { a: 'one' };

let result = match(obj, [
	[{ a: $ }, (b) => b.toUpperCase()],
	[_, 0]
]);

result === 'ONE'; // True
```

So, what just happened?

Our pattern `{ a: $ }` checked to make sure that there was a value - _any value_ - at the key `a`, and then it captured the corresponding value `'one'`.

Then, in our result expression, our captured values are passed (in order of capture) to the lambda expression, which is executed and its return value becomes the result of the `match` expression.

Let's look at another example.

```javascript	
let product = { price: 10, taxRate: 0.06 };

let total = match(product, [
	[{ price: $, taxRate: $ }, (price, taxRate) => price + (price * taxRate)],
	[{ price: $ }, (price) => price]
]);

total === 10.6; // True
```

You can see that we're able to capture multiple values and use them in the result expression.
