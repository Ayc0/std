const drop = require('../drop');

describe('drop()', () => {
  it('should work with strings', () => {
    const check = drop(2);

    const input = '543210';
    expect(check(input)).toEqual('3210');
  });

  it('should work with arrays', () => {
    const check = drop(2);

    const input = [5, 4, 3, 2, 1, 0];
    expect(check(input)).toEqual([3, 2, 1, 0]);
  });

  it('should work with sets', () => {
    const check = drop(2);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(check(input)).toEqual(new Set([3, 2, 1, 0]));
  });

  it('should work with objects', () => {
    const check = drop(2);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(check(input)).toEqual({ c: 3, d: 2, e: 1, f: 0 });
  });

  it('should work with maps', () => {
    const check = drop(2);

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
        ['c', 3],
        ['d', 2],
        ['e', 1],
        ['f', 0],
      ]),
    );
  });
});
