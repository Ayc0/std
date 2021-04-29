const iterate = require('./utils/iterate');
const apply = require('./apply/reduce');

function reduce(callback, initialValue = 0, thisArg) {
  return iterable => apply(iterate(iterable), callback, initialValue, thisArg);
}

module.exports = reduce;
