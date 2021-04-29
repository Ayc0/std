const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

const apply = require('./apply/map');

const map = (callback, thisArg) => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, callback, thisArg), type);
};

module.exports = map;
