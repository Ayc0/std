const iterate = require('../utils/iterate');

function* drop(iterable, limit) {
  let i = 0;
  for (const step of iterate(iterable)) {
    if (i >= limit) {
      yield step;
    }
    i++;
  }
}

module.exports = drop;
