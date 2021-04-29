const iterate = require('./utils/iterate');
const apply = require('./apply/find');

function find(callback, thisArg) {
  return iterable => apply(iterate(iterable), callback, thisArg);
}

module.exports = find;
