const ARRAY = Symbol('Array');
const STRING = Symbol('String');
const SET = Symbol('Set');
const MAP = Symbol('Map');
const OBJECT = Symbol('Object');

const checkType = element => {
  if (typeof element === 'string' || element instanceof String) {
    return STRING;
  }
  if (Array.isArray(element)) {
    return ARRAY;
  }
  if (element instanceof Set) {
    return SET;
  }
  if (element instanceof Map) {
    return MAP;
  }
  if (typeof element === 'object' || element instanceof Object) {
    return OBJECT;
  }
  return null;
}

function* iterate(iterable) {
  const type = checkType(iterable);
  if (type === ARRAY || type === STRING) {
    let index = 0;
    while (index < iterable.length) {
      yield [iterable[index], index, iterable];
      index += 1;
    }
    return;
  }
  if (type === MAP) {
    for (let key of iterable.keys()) {
      yield [iterable.get(key), key, iterable];
    }
    return;
  }
  if (type === SET) {
    for (let element of iterable) {
      yield [element, null, iterable];
    }
    return;
  }
  if (type === OBJECT) {
    for (let key in iterable) {
      if (iterable.hasOwnProperty(key)) {
        yield [iterable[key], key, iterable];
      }
    }
    return;
  }
}

module.exports = {
  checkType,
  type: {
    Array: ARRAY,
    String: STRING,
    Set: SET,
    Map: MAP,
    Object: OBJECT,
  }
}
