function* range() {
  let from = 0;
  let to = 0;
  let step = 1;
  if (arguments.length == 1) {
    to = arguments[0];
  } else if (arguments.length >= 2) {
    from = arguments[0];
    to = arguments[1];
  }
  if (arguments.length >= 3) {
    step = arguments[2];
  }
  if (step === 0) {
    return;
  }
  if (step > 0) {
    while (from < to) {
      yield from;
      from += step;
    }
  } else {
    while (from > to) {
      yield from;
      from += step;
    }
  }
}

module.exports = range;
