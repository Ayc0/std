const iterate = require('./iterate');

function reduce(callback, initialValue, thisArg) {
  return iterable => {
    let i = 0;
    for (let step of iterate(iterable)) {
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
