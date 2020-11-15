const take = require('../take');

describe('take()', () => {
  it('should work with strings', () => {
    const take2 = take(2);

    const input = '543210';
    expect(take2(input)).toEqual('54');
  });

  it('should work with arrays', () => {
    const take2 = take(2);

    const input = [5, 4, 3, 2, 1, 0];
    expect(take2(input)).toEqual([5, 4]);
  });

  it('should work with sets', () => {
    const take2 = take(2);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(take2(input)).toEqual(new Set([5, 4]));
  });

  it('should work with objects', () => {
    const take2 = take(2);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(take2(input)).toEqual({ a: 5, b: 4 });
  });

  it('should work with maps', () => {
    const take2 = take(2);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(take2(input)).toEqual(
      new Map([
        ['a', 5],
        ['b', 4],
      ]),
    );
  });

  it('should work with iterators', () => {
    const take2 = take(2);

    function* iter() {
      yield 5;
      yield 4;
      yield 3;
      yield 2;
      yield 1;
      yield 0;
    }
    const input = iter();
    const output = take2(input);
    let check = jest.fn();
    for (const x of output) {
      check(x);
    }
    expect(check).toHaveBeenCalledTimes(2);
    expect(check).toHaveBeenNthCalledWith(1, 5);
    expect(check).toHaveBeenNthCalledWith(2, 4);
    check = jest.fn();
    for (const x of input) {
      check(x);
    }
    expect(check).toHaveBeenCalledTimes(4);
    expect(check).toHaveBeenNthCalledWith(1, 3);
  });
});
