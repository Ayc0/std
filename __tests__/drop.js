const drop = require('../drop');

describe('drop()', () => {
  it('should work with strings', () => {
    const drop2 = drop(2);

    const input = '543210';
    expect(drop2(input)).toEqual('3210');
  });

  it('should work with arrays', () => {
    const drop2 = drop(2);

    const input = [5, 4, 3, 2, 1, 0];
    expect(drop2(input)).toEqual([3, 2, 1, 0]);
  });

  it('should work with sets', () => {
    const drop2 = drop(2);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(drop2(input)).toEqual(new Set([3, 2, 1, 0]));
  });

  it('should work with objects', () => {
    const drop2 = drop(2);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(drop2(input)).toEqual({ c: 3, d: 2, e: 1, f: 0 });
  });

  it('should work with maps', () => {
    const drop2 = drop(2);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(drop2(input)).toEqual(
      new Map([
        ['c', 3],
        ['d', 2],
        ['e', 1],
        ['f', 0],
      ]),
    );
  });

  it('should work with iterators', () => {
    const drop2 = drop(2);

    function* iter() {
      yield 5;
      yield 4;
      yield 3;
      yield 2;
      yield 1;
      yield 0;
    }
    const input = iter();
    const output = drop2(input);
    const check = jest.fn();
    for (const x of output) {
      check(x);
    }
    expect(check).toHaveBeenCalledTimes(4);
    expect(check).toHaveBeenNthCalledWith(1, 3);
    expect(check).toHaveBeenNthCalledWith(2, 2);
    expect(check).toHaveBeenNthCalledWith(3, 1);
    expect(check).toHaveBeenNthCalledWith(4, 0);
  });
});
