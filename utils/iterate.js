const { checkType, type: types } = require('./checkType');

function* iterate(iterable) {
  const type = checkType(iterable);
  if (type === types.Array || type === types.String) {
    let index = 0;
    while (index < iterable.length) {
      yield [iterable[index], index, iterable];
      index += 1;
    }
    return;
  }
  if (type === types.Map) {
    for (const key of iterable.keys()) {
      yield [iterable.get(key), key, iterable];
    }
    return;
  }
  if (type === types.Set) {
    for (const element of iterable) {
      yield [element, null, iterable];
    }
    return;
  }
  if (type === types.Iterator) {
    while (true) {
      const next = iterable.next();
      if (next.done) {
        return;
      }
      yield [next.value, null, iterable];
    }
  }
  if (type === types.Object) {
    for (const key in iterable) {
      if (iterable.hasOwnProperty(key)) {
        yield [iterable[key], key, iterable];
      }
    }
    return;
  }
}

module.exports = iterate;
