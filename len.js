const { checkType, type: types } = require('./utils/checkType');

const len = iterable => {
  const type = checkType(iterable);
  if (type === types.Array || type === types.String) {
    return iterable.length;
  }
  if (type === types.Map || type === types.Set) {
    return iterable.size;
  }
  if (type === types.Object) {
    let size = 0;
    for (const key in iterable) {
      if (Object.prototype.hasOwnProperty.call(iterable, key)) {
        size++;
      }
    }
    return size;
  }
  return 0;
};

module.exports = len;
