const iterate = require('../utils/iterate');

function* filter(iterable, callback, thisArg) {
  for (const step of iterate(iterable)) {
    const shouldKeepElement = callback.apply(thisArg, step);
    if (shouldKeepElement) {
      yield [step[0], step[1]];
    }
  }
}

module.exports = filter;
