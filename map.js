const iterate = require('./utils/iterate');
const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

function* apply(iterable, callback, thisArg) {
  for (let step of iterate(iterable)) {
    yield [callback.apply(thisArg, step), step[1]];
  }
}

const map = (callback, thisArg) => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, callback, thisArg), type);
};

module.exports = map;
