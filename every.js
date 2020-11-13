const iterate = require('./utils/iterate');

function every(callback, thisArg) {
  return iterable => {
    for (const step of iterate(iterable)) {
      if (!callback.apply(thisArg, step)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = every;
