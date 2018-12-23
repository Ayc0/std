const ARRAY = Symbol("Array");
const STRING = Symbol("String");
const SET = Symbol("Set");
const MAP = Symbol("Map");
const OBJECT = Symbol("Object");

const checkType = element => {
  if (typeof element === "string" || element instanceof String) {
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
  if (typeof element === "object" || element instanceof Object) {
    return OBJECT;
  }
  return null;
};

module.exports = {
  checkType,
  type: {
    Array: ARRAY,
    String: STRING,
    Set: SET,
    Map: MAP,
    Object: OBJECT
  }
};
