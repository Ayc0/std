const map = require('../map');

describe('map()', () => {
  it('should work with strings', () => {
    const times2 = jest.fn(x => x * 2);
    const check = map(times2);

    const input = '543210';
    expect(check(input)).toEqual('1086420');

    expect(times2).toHaveBeenCalledTimes(6);
    expect(times2).toHaveBeenNthCalledWith(1, '5', 0, input);
    expect(times2).toHaveBeenNthCalledWith(2, '4', 1, input);
    expect(times2).toHaveBeenNthCalledWith(3, '3', 2, input);
    expect(times2).toHaveBeenNthCalledWith(4, '2', 3, input);
    expect(times2).toHaveBeenNthCalledWith(5, '1', 4, input);
    expect(times2).toHaveBeenNthCalledWith(6, '0', 5, input);
  });

  it('should work with arrays', () => {
    const times2 = jest.fn(x => x * 2);
    const check = map(times2);

    const input = [5, 4, 3, 2, 1, 0];
    expect(check(input)).toEqual([10, 8, 6, 4, 2, 0]);

    expect(times2).toHaveBeenCalledTimes(6);
    expect(times2).toHaveBeenNthCalledWith(1, 5, 0, input);
    expect(times2).toHaveBeenNthCalledWith(2, 4, 1, input);
    expect(times2).toHaveBeenNthCalledWith(3, 3, 2, input);
    expect(times2).toHaveBeenNthCalledWith(4, 2, 3, input);
    expect(times2).toHaveBeenNthCalledWith(5, 1, 4, input);
    expect(times2).toHaveBeenNthCalledWith(6, 0, 5, input);
  });

  it('should work with sets', () => {
    const times2 = jest.fn(x => x * 2);
    const check = map(times2);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(check(input)).toEqual(new Set([10, 8, 6, 4, 2, 0]));

    expect(times2).toHaveBeenCalledTimes(6);
    expect(times2).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(times2).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(times2).toHaveBeenNthCalledWith(3, 3, null, input);
    expect(times2).toHaveBeenNthCalledWith(4, 2, null, input);
    expect(times2).toHaveBeenNthCalledWith(5, 1, null, input);
    expect(times2).toHaveBeenNthCalledWith(6, 0, null, input);
  });

  it('should work with objects', () => {
    const times2 = jest.fn(x => x * 2);
    const check = map(times2);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(check(input)).toEqual({ a: 10, b: 8, c: 6, d: 4, e: 2, f: 0 });

    expect(times2).toHaveBeenCalledTimes(6);
    expect(times2).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(times2).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(times2).toHaveBeenNthCalledWith(3, 3, 'c', input);
    expect(times2).toHaveBeenNthCalledWith(4, 2, 'd', input);
    expect(times2).toHaveBeenNthCalledWith(5, 1, 'e', input);
    expect(times2).toHaveBeenNthCalledWith(6, 0, 'f', input);
  });

  it('should work with maps', () => {
    const times2 = jest.fn(x => x * 2);
    const check = map(times2);

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
        ['a', 10],
        ['b', 8],
        ['c', 6],
        ['d', 4],
        ['e', 2],
        ['f', 0],
      ]),
    );

    expect(times2).toHaveBeenCalledTimes(6);
    expect(times2).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(times2).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(times2).toHaveBeenNthCalledWith(3, 3, 'c', input);
    expect(times2).toHaveBeenNthCalledWith(4, 2, 'd', input);
    expect(times2).toHaveBeenNthCalledWith(5, 1, 'e', input);
    expect(times2).toHaveBeenNthCalledWith(6, 0, 'f', input);
  });

  it('should work with iterators', () => {
    const times2 = jest.fn(x => x * 2);
    const check = map(times2);

    function* iter() {
      yield 5;
      yield 4;
      yield 3;
      yield 2;
      yield 1;
      yield 0;
    }
    const input = iter();
    const output = [];
    for (const x of check(input)) {
      output.push(x);
    }
    expect(output).toEqual([10, 8, 6, 4, 2, 0]);

    expect(times2).toHaveBeenCalledTimes(6);
    expect(times2).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(times2).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(times2).toHaveBeenNthCalledWith(3, 3, null, input);
    expect(times2).toHaveBeenNthCalledWith(4, 2, null, input);
    expect(times2).toHaveBeenNthCalledWith(5, 1, null, input);
    expect(times2).toHaveBeenNthCalledWith(6, 0, null, input);
  });
});
