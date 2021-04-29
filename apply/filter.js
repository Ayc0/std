function* filter(generator, callback, thisArg) {
  for (const step of generator) {
    const shouldKeepElement = callback.apply(thisArg, step);
    if (shouldKeepElement) {
      yield [step[0], step[1]];
    }
  }
}

module.exports = filter;
