# Kasai

### _A pattern matching library for Typescript_

Notes for myself:

Import the library

```TypeScript
import {match, _} from 'kasai'
```

Match against lambda expressions

```TypeScript

let a = 5

match(a, [
    [(x) => x > 3, 'X is greater than 3'],
    [(x) => x < 2, 'X is less then 2'],
    [_, 'X is something else']
])
```

Match against object literals

```TypeScript

let a = {a: 1, b: 2, c: 3}

match(a, [
    [{a: _, b: 2, c: 3}, (x) => x.a],
    [_, (x) => 0]
])
```

Match against array literals

```TypeScript
let a = [1, 2, 3]

match(a, [
    [[1, 2, _], (x) => x[2]],
    [_, false]
])
```

Match against boolean literals
```TypeScript

let a = false

match(a, [
    [true, (x) => "TRUTH"],
    [false, (x) => "LIES"]
])
```

### Other helpful shortcuts

```TypeScript
import {instanceOf, typeOf} from 'kasai'
```

Match against basic types:
```TypeScript

let a = "hello"

match(a, [
    [typeOf('object'), (x) => 'object!'],
    [typeOf('boolean'), (x) => 'boolean!'],
    [_, (x) => '???']
])
```
Match against complex types:
```TypeScript

let a = new Thing()

match(a, [
    [instanceOf(Thing), (x) => x.doThing()],
    [instanceOf(Stuff), (x) => x.doStuff()],
    [_, (x) => false]
])
```
