const iterate = require('./utils/iterate');

function some(callback, thisArg) {
  return iterable => {
    for (const step of iterate(iterable)) {
      if (callback.apply(thisArg, step)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = some;
