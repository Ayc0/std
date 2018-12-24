const { type: types } = require("./checkType");

const generateString = iterable => {
  let string = "";
  for (let step of iterable) {
    string += step[0];
  }
  return string;
};

const generateArray = iterable => {
  let array = [];
  for (let step of iterable) {
    array.push(step[0]);
  }
  return array;
};

const generateSet = iterable => {
  let set = new Set();
  for (let step of iterable) {
    set.add(step[0]);
  }
  return set;
};

const generateMap = iterable => {
  let map = new Map();
  for (let step of iterable) {
    map.set(step[1], step[0]);
  }
  return map;
};

const generateObject = iterable => {
  let object = {};
  for (let step of iterable) {
    object[step[1]] = step[0];
  }
  return object;
};

const generateIterable = (iterable, type) => {
  if (type === types.Array) {
    return generateArray(iterable);
  }
  if (type === types.String) {
    return generateString(iterable);
  }
  if (type === types.Set) {
    return generateSet(iterable);
  }
  if (type === types.Map) {
    return generateMap(iterable);
  }
  if (type === types.Object) {
    return generateObject(iterable);
  }
};

module.exports = generateIterable;
