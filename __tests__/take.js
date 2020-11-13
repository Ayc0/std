const take = require('../take');

describe('take()', () => {
  it('should work with strings', () => {
    const check = take(2);

    const input = '543210';
    expect(check(input)).toEqual('54');
  });

  it('should work with arrays', () => {
    const check = take(2);

    const input = [5, 4, 3, 2, 1, 0];
    expect(check(input)).toEqual([5, 4]);
  });

  it('should work with sets', () => {
    const check = take(2);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(check(input)).toEqual(new Set([5, 4]));
  });

  it('should work with objects', () => {
    const check = take(2);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(check(input)).toEqual({ a: 5, b: 4 });
  });

  it('should work with maps', () => {
    const check = take(2);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(check(input)).toEqual(
      new Map([
        ['a', 5],
        ['b', 4],
      ]),
    );
  });
});
