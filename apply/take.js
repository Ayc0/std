function* take(generator, limit) {
  if (limit === 0) {
    return;
  }
  let i = 0;
  for (const step of generator) {
    yield step;
    i++;
    if (i >= limit) {
      return;
    }
  }
}

module.exports = take;
