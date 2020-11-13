const range = require('../range');

describe('range()', () => {
  it('should work with just to', () => {
    const iterable = range(5);
    expect(Array.from(iterable)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should work with from and to', () => {
    const iterable = range(-1, 4);
    expect(Array.from(iterable)).toEqual([-1, 0, 1, 2, 3]);
  });

  it('should work with from, to and step', () => {
    const iterable = range(-1, 7, 3);
    expect(Array.from(iterable)).toEqual([-1, 2, 5]);
  });

  it('should work with floats', () => {
    const iterable = range(-1.1, 7.9, 1.2);
    expect(Array.from(iterable).map(x => Math.round(x * 10) / 10)).toEqual([
      -1.1,
      0.1,
      1.3,
      2.5,
      3.7,
      4.9,
      6.1,
      7.3,
    ]);
  });
});
