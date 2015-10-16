# Kasai

### _A pattern matching library for TypeScript (and JavaScript)_

Pattern matching allows for concise logic based on the value and _shape_ of data.

Kasai provides an intuitive interface for pattern matching in TypeScript and JavaScript.

### Importing Kasai (TypeScript)
```javascript
/// <reference path="node_modules/kasai/target/types" />
import kasai = require('kasai');
```

### Matching

Pattern matching is really great for inspecting complex data structures with ease.

How many times have you written code like this?

```javascript
let shippingDestination = (user) => {
    return user.hasOwnProperty('contactInfo')
        && user.contactInfo.hasOwnProperty('address')
        && user.contactInfo.address.hasOwnProperty('zip')
        && user.contactInfo.address.zip.length === 5
        ? 'domestic'
        : 'foreign';
}
```

Yuck!

With Kasai, that mess becomes this:

```javascript
let shippingDestination = (user) => {
    return match(user, [
        [{ contactInfo: { address: { zip: (z) => z.length === 5 } } }, 'domestic'],
        [_, 'foreign']
    ]);
}
```

The concise, declarative syntax makes this code easier to read and easier for others to understand.

Kasai has support for matching any combination of objects, arrays, and primitive types (including circular references).

### Capturing

Kasai also allows you to capture values from within a data structure with `$`.

```javascript
let users = [
    { first: 'Thomas', middle: 'Alva', last: 'Edison' },
    { first: 'Nikola', last: 'Tesla' }
];

let getFullName = (user) => {
    return match(user, [
        [{first: $, middle: $, last: $}, (f, m, l) => f + ' ' + m + ' ' + l],
        [{first: $, last: $}           , (f, l) => f + ' ' + l],
        [_, 'unknown']
    ]);
}

let fullNames = users.map(getFullName);
// >>  ['Thomas Alva Edison', 'Nikola Tesla']
```

For more examples, see the `docs` folder.
