const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

const apply = require('./apply/drop');

const drop = limit => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, limit), type);
};

module.exports = drop;
