const iterate = require("./iterate");

const forEach = (iterable, callback, thisArg) => {
  for (let step of iterate(iterable)) {
    callback.apply(thisArg, step);
  }
};

module.exports = forEach;
