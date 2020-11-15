const len = require('../len');

describe('len()', () => {
  it('should work with strings', () => {
    const input = '543210';
    expect(len(input)).toEqual(6);
  });

  it('should work with arrays', () => {
    const input = [5, 4, 3, 2, 1, 0];
    expect(len(input)).toEqual(6);
  });

  it('should work with sets', () => {
    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(len(input)).toEqual(6);
  });

  it('should work with objects', () => {
    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(len(input)).toEqual(6);
  });

  it('should work with maps', () => {
    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(len(input)).toEqual(6);
  });

  it('should work with iterators', () => {
    function* iter() {
      yield 5;
      yield 4;
      yield 3;
      yield 2;
      yield 1;
      yield 0;
    }
    const input = iter();
    expect(len(input)).toEqual(6);
  });
});
