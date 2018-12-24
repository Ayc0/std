# std

## Range

```js
function* range([from,] to[, step]) {
  // yield every steps
}
```

## Map

```js
function map(iterable, callback[, thisArg]) {
  // return new iterable of the input iterable type
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
map({ a: 1, b: 2 }, x => x * 2);
// { a: 2, b: 4 }
map([1, 2], x => x * 2);
// [ 2, 4 ]
map(new Set([1, 2]), x => x * 2);
// Set(2) {2, 4}
map(new Map([["a", 1], ["b", 2]]), x => x * 2);
// Map(2) {"a" => 2, "b" => 4}
map("ab", x => x.repeat(2));
// 'aabb'
```

## ForEach

```js
function forEach(iterable, callback[, thisArg]) {
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
forEach({ a: 1, b: 2 }, x => console.log(x * 2));
// 2
// 4
forEach([1, 2], x => console.log(x * 2));
// 2
// 4
forEach(new Set([1, 2]), x => console.log(x * 2));
// 2
// 4
forEach(new Map([["a", 1], ["b", 2]]), x => console.log(x * 2));
// 2
// 4
forEach("ab", x => console.log(x.repeat(2)));
// aa
// bb
```

## Filter

```js
function filter(iterable, callback[, thisArg]) {
  // return new iterable of the input iterable type
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
filter({ a: 1, b: 2 }, x => x % 2);
// { a: 1 }
filter([1, 2], x => x % 2);
// [ 1 ]
filter(new Set([1, 2]), x => x % 2);
// Set(1) {1}
filter(new Map([["a", 1], ["b", 2]]), x => x % 2);
// Map(1) {"a" => 1}
filter("12", x => x => x % 2);
// '1'
```
