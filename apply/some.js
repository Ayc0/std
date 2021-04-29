function some(generator, callback, thisArg) {
  for (const step of generator) {
    if (callback.apply(thisArg, step)) {
      return true;
    }
  }
  return false;
}

module.exports = some;
