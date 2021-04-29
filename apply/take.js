const iterate = require('../utils/iterate');

function* take(iterable, limit) {
  if (limit === 0) {
    return;
  }
  let i = 0;
  for (const step of iterate(iterable)) {
    yield step;
    i++;
    if (i >= limit) {
      return;
    }
  }
}

module.exports = take;
