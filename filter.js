const iterate = require('./iterate');
const { checkType } = require('./checkType');
const generateIterable = require('./generateIterable');

function* apply(iterable, callback, thisArg) {
  for (let step of iterate(iterable)) {
    const shouldKeepElement = callback.apply(thisArg, step);
    if (shouldKeepElement) {
      yield [step[0], step[1]];
    }
  }
}

const filter = (callback, thisArg) => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, callback, thisArg), type);
};

module.exports = filter;
