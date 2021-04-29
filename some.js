const iterate = require('./utils/iterate');
const apply = require('./apply/some');

function some(callback, thisArg) {
  return iterable => apply(iterate(iterable), callback, thisArg);
}

module.exports = some;
