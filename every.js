const iterate = require('./utils/iterate');
const apply = require('./apply/every');

function every(callback, thisArg) {
  return iterable => apply(iterate(iterable), callback, thisArg);
}

module.exports = every;
