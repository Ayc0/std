const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

const apply = require('./apply/take');

const take = limit => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, limit), type);
};

module.exports = take;
