function* map(generator, callback, thisArg) {
  for (const step of generator) {
    yield [callback.apply(thisArg, step), step[1]];
  }
}

module.exports = map;
