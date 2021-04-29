function reduce(generator, callback, initialValue = 0, thisArg) {
  for (const step of generator) {
    initialValue = callback.apply(thisArg, [initialValue, ...step]);
  }
  return initialValue;
}

module.exports = reduce;
