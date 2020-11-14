const iterate = require('./utils/iterate');

const genArray = length => new Array(length).fill(null);

function* zip(iterables) {
  const trueIterables = iterables.map(iterate);
  const length = iterables.length;
  while (true) {
    const elements = genArray(length);
    const indexes = genArray(length);
    let isDone = true;
    let i = -1;
    for (const iterable of trueIterables) {
      i++;
      const next = iterable.next();
      if (next.done) {
        continue;
      }
      isDone = false;
      const step = next.value;
      elements[i] = step[0];
      indexes[i] = step[1];
    }
    if (isDone) {
      break;
    }
    yield [elements, indexes, iterables];
  }
}

module.exports = zip;
