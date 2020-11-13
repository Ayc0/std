const iterate = require('./utils/iterate');

const forEach = (callback, thisArg) => iterable => {
  for (let step of iterate(iterable)) {
    callback.apply(thisArg, step);
  }
};

module.exports = forEach;
