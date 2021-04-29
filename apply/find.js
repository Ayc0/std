function find(generator, callback, thisArg) {
  for (const step of generator) {
    if (callback.apply(thisArg, step)) {
      return [step[0], step[1]];
    }
  }
}

module.exports = find;
