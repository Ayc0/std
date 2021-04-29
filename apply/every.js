function every(generator, callback, thisArg) {
  for (const step of generator) {
    if (!callback.apply(thisArg, step)) {
      return false;
    }
  }
  return true;
}

module.exports = every;
