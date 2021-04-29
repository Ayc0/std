const iterate = require('../utils/iterate');

function* map(iterable, callback, thisArg) {
  for (const step of iterate(iterable)) {
    yield [callback.apply(thisArg, step), step[1]];
  }
}

module.exports = map;
