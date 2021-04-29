function find(generator, callback, thisArg) {
  while (true) {
    const next = generator.next();
    if (next.done) {
      return;
    }
    const step = next.value;
    if (callback.apply(thisArg, step)) {
      return [step[0], step[1]];
    }
  }
}

module.exports = find;
