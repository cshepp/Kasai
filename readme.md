# Kasai

_A pattern matching library for Typescript_

Notes for myself:

```TypeScript

    let a = {a: 1, b: 2, c: 3};

    match(a, [
        [(x) => typeof x === 'object', (x) => 'a'],
        [(x) => typeof x === 'boolean', (x) => 'b'],
        [(x) => true, (x) => '???']
    ]);

    match(a, [
        [{a: _, b: 2, c: 3}, (x) => x.c],
        [_, (x) => 0]
    ]);



    let b = [1, 2, 3];

    match(b, [
        [[1, 2, _], (x) => x[2]],
        [_, false]
    ]);
```
