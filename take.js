const iterate = require('./utils/iterate');
const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

function* apply(iterable, limit) {
  let i = 0;
  for (const step of iterate(iterable)) {
    if (i < limit) {
      yield step;
    } else {
      break;
    }
    i++;
  }
}

const take = limit => iterable => {
  const type = checkType(iterable);
  return generateIterable(apply(iterable, limit), type);
};

module.exports = take;
