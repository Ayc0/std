const filter = require('../filter');

describe('filter()', () => {
  it('should work with strings', () => {
    const even = jest.fn(x => x % 2 === 0);
    const check = filter(even);

    const input = '543210';
    expect(check(input)).toEqual('420');

    expect(even).toHaveBeenCalledTimes(6);
    expect(even).toHaveBeenNthCalledWith(1, '5', 0, input);
    expect(even).toHaveBeenNthCalledWith(2, '4', 1, input);
    expect(even).toHaveBeenNthCalledWith(3, '3', 2, input);
    expect(even).toHaveBeenNthCalledWith(4, '2', 3, input);
    expect(even).toHaveBeenNthCalledWith(5, '1', 4, input);
    expect(even).toHaveBeenNthCalledWith(6, '0', 5, input);
  });

  it('should work with arrays', () => {
    const even = jest.fn(x => x % 2 === 0);
    const check = filter(even);

    const input = [5, 4, 3, 2, 1, 0];
    expect(check(input)).toEqual([4, 2, 0]);

    expect(even).toHaveBeenCalledTimes(6);
    expect(even).toHaveBeenNthCalledWith(1, 5, 0, input);
    expect(even).toHaveBeenNthCalledWith(2, 4, 1, input);
    expect(even).toHaveBeenNthCalledWith(3, 3, 2, input);
    expect(even).toHaveBeenNthCalledWith(4, 2, 3, input);
    expect(even).toHaveBeenNthCalledWith(5, 1, 4, input);
    expect(even).toHaveBeenNthCalledWith(6, 0, 5, input);
  });

  it('should work with sets', () => {
    const even = jest.fn(x => x % 2 === 0);
    const check = filter(even);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(check(input)).toEqual(new Set([4, 2, 0]));

    expect(even).toHaveBeenCalledTimes(6);
    expect(even).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(even).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(even).toHaveBeenNthCalledWith(3, 3, null, input);
    expect(even).toHaveBeenNthCalledWith(4, 2, null, input);
    expect(even).toHaveBeenNthCalledWith(5, 1, null, input);
    expect(even).toHaveBeenNthCalledWith(6, 0, null, input);
  });

  it('should work with objects', () => {
    const even = jest.fn(x => x % 2 === 0);
    const check = filter(even);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(check(input)).toEqual({ b: 4, d: 2, f: 0 });

    expect(even).toHaveBeenCalledTimes(6);
    expect(even).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(even).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(even).toHaveBeenNthCalledWith(3, 3, 'c', input);
    expect(even).toHaveBeenNthCalledWith(4, 2, 'd', input);
    expect(even).toHaveBeenNthCalledWith(5, 1, 'e', input);
    expect(even).toHaveBeenNthCalledWith(6, 0, 'f', input);
  });

  it('should work with maps', () => {
    const even = jest.fn(x => x % 2 === 0);
    const check = filter(even);

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
        ['b', 4],
        ['d', 2],
        ['f', 0],
      ]),
    );

    expect(even).toHaveBeenCalledTimes(6);
    expect(even).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(even).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(even).toHaveBeenNthCalledWith(3, 3, 'c', input);
    expect(even).toHaveBeenNthCalledWith(4, 2, 'd', input);
    expect(even).toHaveBeenNthCalledWith(5, 1, 'e', input);
    expect(even).toHaveBeenNthCalledWith(6, 0, 'f', input);
  });
});
