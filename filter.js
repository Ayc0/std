const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

const apply = require('./apply/filter');

const filter = (callback, thisArg) => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, callback, thisArg), type);
};

module.exports = filter;
