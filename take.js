const iterate = require('./utils/iterate');
const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

function* apply(iterable, limit) {
  let i = 0;
  const iter = iterate(iterable);
  while (true) {
    if (i >= limit) {
      return;
    }
    const next = iter.next();
    if (next.done) {
      return;
    }
    yield next.value;
    i++;
  }
}

const take = limit => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, limit), type);
};

module.exports = take;
