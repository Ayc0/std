const iterate = require('./utils/iterate');

function reduce(callback, initialValue = 0, thisArg) {
  return iterable => {
    for (const step of iterate(iterable)) {
      initialValue = callback.apply(thisArg, [initialValue, ...step]);
    }
    return initialValue;
  };
}

module.exports = reduce;
