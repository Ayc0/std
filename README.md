# std

## Range

```js
function* range([from,] to[, step]) {
  // yield every steps
}
```

## Map

```js
function map(iterable, callback) {
  // return new iterable of the input iterable type
}

function callback(currentValue[, index[, iterable]] [, thisArg]) {
  // return new element of iterable
}
```

### Supported iterables

* array
* string
* Map
* Set
* Object

### Examples

```js
map({ a: 1, b: 2 }, x => x*2);
// { a: 2, b: 4 }
map([ 1, 2 ], x => x*2);
// [ 2, 4 ]
map(new Set([ 1, 2 ]), x => x*2);
// Set(2) {2, 4}
map(new Map([['a', 1], ['b', 2]]), x => x*2);
// Map(2) {"a" => 2, "b" => 4}
map('ab', x => x.repeat(2));
// 'aabb'
```
