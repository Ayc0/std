const iterate = require('./utils/iterate');
const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

function* apply(iterable, limit) {
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

const take = limit => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, limit), type);
};

module.exports = take;
