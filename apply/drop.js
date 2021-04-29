function* drop(generator, limit) {
  let i = 0;
  for (const step of generator) {
    if (i >= limit) {
      yield step;
    }
    i++;
  }
}

module.exports = drop;
