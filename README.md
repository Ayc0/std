# std

## Range

```js
function* range([from,] to[, step]) {
  // yield every steps
}
```

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
map(x => x * 2)(new Map([["a", 1], ["b", 2]]));
// Map(2) {"a" => 2, "b" => 4}
map(x => x.repeat(2))("ab");
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
forEach(x => console.log(x * 2))(new Map([["a", 1], ["b", 2]]));
// 2
// 4
forEach(x => console.log(x.repeat(2)))("ab");
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
filter(x => x % 2)(new Map([["a", 1], ["b", 2]]));
// Map(1) {"a" => 1}
filter(x => x => x % 2)("12");
// '1'
```
