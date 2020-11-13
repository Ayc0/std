# std

## Range

```js
function* range([from,] to[, step]) {
  // yield every steps
}
```

## Zip

```js
function* zip(iterables) {
  // yield [currentValues, indexes, iterables]
}
```

### Supported iterables

- array
- string
- Map
- Set
- Object

### Examples

```js
for (const [currentValues, indexes, iterables] of zip([
  '123',
  [1, 2, 3],
  { a: 1, b: 2, c: 3 },
])) {
  console.log(currentValues);
  // [ '1', 1, 1 ]
  // [ '2', 2, 2 ]
  // [ '3', 3, 3 ]
  console.log(indexes);
  // [ 0, 0, 'a' ]
  // [ 1, 1, 'b' ]
  // [ 2, 2, 'c' ]
}
```

## Len

```js
function len(iterable) {
  // return length of iterable
}
```

### Supported iterables

- array
- string
- Map
- Set
- Object

## Map

```js
function map(callback[, thisArg]) {
  return function (iterable) {
    // return new iterable of the input iterable type
  }
}

function callback(currentValue[, index[, iterable]]) {
  // return new element of iterable
}
```

### Supported iterables

- array
- string
- Map
- Set
- Object

### Examples

```js
map(x => x * 2)({ a: 1, b: 2 });
// { a: 2, b: 4 }
map(x => x * 2)([1, 2]);
// [ 2, 4 ]
map(x => x * 2)(new Set([1, 2]));
// Set(2) {2, 4}
map(x => x * 2)(
  new Map([
    ['a', 1],
    ['b', 2],
  ]),
);
// Map(2) {"a" => 2, "b" => 4}
map(x => x.repeat(2))('ab');
// 'aabb'
```

## ForEach

```js
function forEach(callback[, thisArg]) {
  return function (iterable) {
  }
}

function callback(currentValue[, index[, iterable]]) {
}
```

### Supported iterables

- array
- string
- Map
- Set
- Object

### Examples

```js
forEach(x => console.log(x * 2))({ a: 1, b: 2 });
// 2
// 4
forEach(x => console.log(x * 2))([1, 2]);
// 2
// 4
forEach(x => console.log(x * 2))(new Set([1, 2]));
// 2
// 4
forEach(x => console.log(x * 2))(
  new Map([
    ['a', 1],
    ['b', 2],
  ]),
);
// 2
// 4
forEach(x => console.log(x.repeat(2)))('ab');
// aa
// bb
```

## Filter

```js
function filter(callback[, thisArg]) {
  return function (iterable) {
    // return new iterable of the input iterable type
  }
}

function callback(currentValue[, index[, iterable]]) {
  // return if you should keep this element of not
}
```

### Supported iterables

- array
- string
- Map
- Set
- Object

### Examples

```js
filter(x => x % 2)({ a: 1, b: 2 });
// { a: 1 }
filter(x => x % 2)([1, 2]);
// [ 1 ]
filter(x => x % 2)(new Set([1, 2]));
// Set(1) {1}
filter(x => x % 2)(
  new Map([
    ['a', 1],
    ['b', 2],
  ]),
);
// Map(1) {"a" => 1}
filter(x => x % 2)('12');
// '1'
```

## Reduce

```js
function reduce(callback, initialValue, thisArg) {
  return function (iterable) {
    // return reduced value
  };
}

function callback(accumulator, currentValue[, index[, iterable]]) {
  // returns the value that results from the reduction
}
```

### Supported iterables

- array
- string
- Map
- Set
- Object

### Examples

```js
reduce((acc, x) => acc + x, 0)({ a: 1, b: 2 });
// { a: 1 }
reduce((acc, x) => acc + x, 0)([1, 2]);
// [ 1 ]
reduce((acc, x) => acc + x, 0)(new Set([1, 2]));
// Set(1) {1}
reduce(
  (acc, x) => acc + x,
  0,
)(
  new Map([
    ['a', 1],
    ['b', 2],
  ]),
);
// Map(1) {"a" => 1}
reduce((acc, x) => acc + Number(x), 0)('12');
// '1'
```
