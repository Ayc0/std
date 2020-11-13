const iterate = require('./utils/iterate');

function find(callback, thisArg) {
  return iterable => {
    for (const step of iterate(iterable)) {
      if (callback.apply(thisArg, step)) {
        return step;
      }
    }
  };
}

module.exports = find;
