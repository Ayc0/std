const iterate = require('./utils/iterate');
const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

const apply = require('./apply/map');

const map = (callback, thisArg) => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterate(iterable), callback, thisArg), type);
};

module.exports = map;
