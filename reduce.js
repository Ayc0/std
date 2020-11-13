const iterate = require('./utils/iterate');

function reduce(callback, initialValue, thisArg) {
  return iterable => {
    let i = 0;
    for (const step of iterate(iterable)) {
      if (arguments.length === 1 && i == 0) {
        initialValue = step[0];
      }
      initialValue = callback.apply(thisArg, [initialValue, ...step]);
      i++;
    }
    return initialValue;
  };
}

module.exports = reduce;
