const iterate = require('./utils/iterate');
const apply = require('./apply/forEach');

const forEach = (callback, thisArg) => iterable => {
  apply(iterate(iterable), callback, thisArg);
};

module.exports = forEach;
