# Kasai

### _A pattern matching library for TypeScript (and JavaScript)_

Pattern matching allows for concise logic based on the value and _shape_ of data.

Kasai provides an intuitive interface for pattern matching in TypeScript and JavaScript. 

### Pattern Matching

You can think of pattern matching as a series of `if` statements, each with a corresponding return value.

```Typescript
    
    let match = (x) => {
        if(x === 1) return 'one';
        if(x === 2) return 'two';
        
        return 'three'; //default
    }
```

Pattern matching syntax is a bit more concise, however. Instead of writing a function with multiple `if` statements, we can provide an array of pattern/value pairs.

```Typescript
    match(x, [
        [(x) => x === 1, 'one'],
        [(x) => x === 2, 'two'],
        [_, 'three']
    ]);
``` 

In the code above, we've replaced our `if` statements with lambda expressions. Each lambda expression is executed in order, and when we find one that returns `true`, we will return its corresponding value (the 2nd element in the array).

Also note that `_` is a wildcard, and will always return true.

### Shape

The real power of pattern matching comes from its terse syntax for comparing collections of data.
We can compare any subset of the keys in an object, for example:

```Typescript
    
    let manufacturer = { name: 'Subaru', country: 'Japan' };
    
    let x = match(manufacturer, [
        [{country: 'USA'}, 'domestic'],
        [{country: _}, 'foreign']
    ]);
    
    // x is 'foreign'
```

We can also compare arrays of values.

```Typescript
    let sample = ['a', 'b', 'c'];
    
    let x = match(sample, [
        [['a', 'b', 'c'], 1],
        [['a', 'b',  _ ], 2],
        [_, 3]
    ]);
    
    // x is 1
```

### Return Values

The return value of a single match case can be any value _or_ a function that should be applied to the value that is being compared.

```Typescript
    
    let exchangeRate = 1.2;
    let product = { name: 'iPhone', price: 600, currency: Currency.Euro };
    
    let price = match(product, [
        [{currency: Currency.USD}, (p) => p.price],
        [{currency: Currency.Euro}, (p) => p.price * exchangeRate]
    ]);
    
    // price is 720
```


### Additional Examples

Import the library

```TypeScript
/// <reference path="./node_modules/Kasai/target/index" />
import Kasai = require('Kasai');

// optional - localize for less cluttered patterns
let match = Kasai.match;
let _ = Kasai._;
```

Match against lambda expressions

```TypeScript

let a = 5;

match(a, [
    [(x) => x > 3, 'X is greater than 3'],
    [(x) => x < 2, 'X is less then 2'],
    [_, 'X is something else']
]);
```

Match against object literals

```TypeScript

let a = {a: 1, b: 2, c: 3};

match(a, [
    [{a: _, b: 2, c: 3}, (x) => x.a],
    [_, (x) => 0]
]);
```

Match against array literals

```TypeScript
let a = [1, 2, 3];

match(a, [
    [[1, 2, _], (x) => x[2]],
    [_, false]
]);
```

Match against boolean literals
```TypeScript

let a = false;

match(a, [
    [true, (x) => "TRUTH"],
    [false, (x) => "LIES"]
]);
```

### Other helpful shortcuts

Match against basic types:
```TypeScript

let a = "hello";

match(a, [
    [typeOf('string'), (x) => 'string!'],
    [typeOf('boolean'), (x) => 'boolean!'],
    [_, (x) => '???']
]);
```
Match against complex types:
```TypeScript

let a = new Thing();

match(a, [
    [instanceOf(Thing), (x) => x.doThing()],
    [instanceOf(Stuff), (x) => x.doStuff()],
    [_, (x) => false]
]);
```
