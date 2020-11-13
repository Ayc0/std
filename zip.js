const len = require('./len');
const iterate = require('./utils/iterate');

function* zip(iterables) {
  let previousLength = null;
  let currentLength = null;
  for (let iterable of iterables) {
    currentLength = len(iterable);
    if (currentLength !== previousLength && previousLength !== null) {
      throw new Error('Every iterable should have the same length');
    }
    previousLength = currentLength;
  }
  const trueIterables = iterables.map(iterate);
  for (let index = 0; index < currentLength; index++) {
    const elements = [];
    const indexes = [];
    for (let iterable of trueIterables) {
      const step = iterable.next().value;
      elements.push(step[0]);
      indexes.push(step[1]);
    }
    yield [elements, indexes, iterables];
  }
}

module.exports = zip;
