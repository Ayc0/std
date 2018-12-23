const { checkType, type: types } = require("./checkType");

function* iterate(iterable) {
  const type = checkType(iterable);
  if (type === types.ARRAY || type === types.STRING) {
    let index = 0;
    while (index < iterable.length) {
      yield [iterable[index], index, iterable];
      index += 1;
    }
    return;
  }
  if (type === types.MAP) {
    for (let key of iterable.keys()) {
      yield [iterable.get(key), key, iterable];
    }
    return;
  }
  if (type === types.SET) {
    for (let element of iterable) {
      yield [element, null, iterable];
    }
    return;
  }
  if (type === types.Object) {
    for (let key in iterable) {
      if (iterable.hasOwnProperty(key)) {
        yield [iterable[key], key, iterable];
      }
    }
    return;
  }
}

module.exports = iterate;
