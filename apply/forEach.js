const forEach = (generator, callback, thisArg) => {
  for (const step of generator) {
    callback.apply(thisArg, step);
  }
};

module.exports = forEach;
