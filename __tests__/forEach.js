const forEach = require('../forEach');

describe('forEach()', () => {
  it('should work with strings', () => {
    const run = jest.fn();
    const check = forEach(run);

    const input = '543210';
    check(input);

    expect(run).toHaveBeenCalledTimes(6);
    expect(run).toHaveBeenNthCalledWith(1, '5', 0, input);
    expect(run).toHaveBeenNthCalledWith(2, '4', 1, input);
    expect(run).toHaveBeenNthCalledWith(3, '3', 2, input);
    expect(run).toHaveBeenNthCalledWith(4, '2', 3, input);
    expect(run).toHaveBeenNthCalledWith(5, '1', 4, input);
    expect(run).toHaveBeenNthCalledWith(6, '0', 5, input);
  });

  it('should work with arrays', () => {
    const run = jest.fn();
    const check = forEach(run);

    const input = [5, 4, 3, 2, 1, 0];
    check(input);

    expect(run).toHaveBeenCalledTimes(6);
    expect(run).toHaveBeenNthCalledWith(1, 5, 0, input);
    expect(run).toHaveBeenNthCalledWith(2, 4, 1, input);
    expect(run).toHaveBeenNthCalledWith(3, 3, 2, input);
    expect(run).toHaveBeenNthCalledWith(4, 2, 3, input);
    expect(run).toHaveBeenNthCalledWith(5, 1, 4, input);
    expect(run).toHaveBeenNthCalledWith(6, 0, 5, input);
  });

  it('should work with sets', () => {
    const run = jest.fn();
    const check = forEach(run);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    check(input);

    expect(run).toHaveBeenCalledTimes(6);
    expect(run).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(run).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(run).toHaveBeenNthCalledWith(3, 3, null, input);
    expect(run).toHaveBeenNthCalledWith(4, 2, null, input);
    expect(run).toHaveBeenNthCalledWith(5, 1, null, input);
    expect(run).toHaveBeenNthCalledWith(6, 0, null, input);
  });

  it('should work with objects', () => {
    const run = jest.fn();
    const check = forEach(run);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    check(input);

    expect(run).toHaveBeenCalledTimes(6);
    expect(run).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(run).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(run).toHaveBeenNthCalledWith(3, 3, 'c', input);
    expect(run).toHaveBeenNthCalledWith(4, 2, 'd', input);
    expect(run).toHaveBeenNthCalledWith(5, 1, 'e', input);
    expect(run).toHaveBeenNthCalledWith(6, 0, 'f', input);
  });

  it('should work with maps', () => {
    const run = jest.fn();
    const check = forEach(run);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    check(input);

    expect(run).toHaveBeenCalledTimes(6);
    expect(run).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(run).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(run).toHaveBeenNthCalledWith(3, 3, 'c', input);
    expect(run).toHaveBeenNthCalledWith(4, 2, 'd', input);
    expect(run).toHaveBeenNthCalledWith(5, 1, 'e', input);
    expect(run).toHaveBeenNthCalledWith(6, 0, 'f', input);
  });
});
