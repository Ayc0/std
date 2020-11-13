const reduce = require('../reduce');

describe('reduce()', () => {
  it('should work with strings', () => {
    const sum = jest.fn((acc, cur) => acc + Number(cur));
    const run = reduce(sum, 0);

    const input = '543210';
    expect(run(input)).toEqual(15);

    expect(sum).toHaveBeenCalledTimes(6);
    expect(sum).toHaveBeenNthCalledWith(1, 0, '5', 0, input);
    expect(sum).toHaveBeenNthCalledWith(2, 5, '4', 1, input);
    expect(sum).toHaveBeenNthCalledWith(3, 9, '3', 2, input);
    expect(sum).toHaveBeenNthCalledWith(4, 12, '2', 3, input);
    expect(sum).toHaveBeenNthCalledWith(5, 14, '1', 4, input);
    expect(sum).toHaveBeenNthCalledWith(6, 15, '0', 5, input);
  });

  it('should work with arrays', () => {
    const sum = jest.fn((acc, cur) => acc + cur);
    const run = reduce(sum, 0);

    const input = [5, 4, 3, 2, 1, 0];
    expect(run(input)).toEqual(15);

    expect(sum).toHaveBeenCalledTimes(6);
    expect(sum).toHaveBeenNthCalledWith(1, 0, 5, 0, input);
    expect(sum).toHaveBeenNthCalledWith(2, 5, 4, 1, input);
    expect(sum).toHaveBeenNthCalledWith(3, 9, 3, 2, input);
    expect(sum).toHaveBeenNthCalledWith(4, 12, 2, 3, input);
    expect(sum).toHaveBeenNthCalledWith(5, 14, 1, 4, input);
    expect(sum).toHaveBeenNthCalledWith(6, 15, 0, 5, input);
  });

  it('should work with sets', () => {
    const sum = jest.fn((acc, cur) => acc + cur);
    const run = reduce(sum, 0);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(run(input)).toEqual(15);

    expect(sum).toHaveBeenCalledTimes(6);
    expect(sum).toHaveBeenNthCalledWith(1, 0, 5, null, input);
    expect(sum).toHaveBeenNthCalledWith(2, 5, 4, null, input);
    expect(sum).toHaveBeenNthCalledWith(3, 9, 3, null, input);
    expect(sum).toHaveBeenNthCalledWith(4, 12, 2, null, input);
    expect(sum).toHaveBeenNthCalledWith(5, 14, 1, null, input);
    expect(sum).toHaveBeenNthCalledWith(6, 15, 0, null, input);
  });

  it('should work with objects', () => {
    const sum = jest.fn((acc, cur) => acc + cur);
    const run = reduce(sum, 0);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(run(input)).toEqual(15);

    expect(sum).toHaveBeenCalledTimes(6);
    expect(sum).toHaveBeenNthCalledWith(1, 0, 5, 'a', input);
    expect(sum).toHaveBeenNthCalledWith(2, 5, 4, 'b', input);
    expect(sum).toHaveBeenNthCalledWith(3, 9, 3, 'c', input);
    expect(sum).toHaveBeenNthCalledWith(4, 12, 2, 'd', input);
    expect(sum).toHaveBeenNthCalledWith(5, 14, 1, 'e', input);
    expect(sum).toHaveBeenNthCalledWith(6, 15, 0, 'f', input);
  });

  it('should work with maps', () => {
    const sum = jest.fn((acc, cur) => acc + cur);
    const run = reduce(sum, 0);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(run(input)).toEqual(15);

    expect(sum).toHaveBeenCalledTimes(6);
    expect(sum).toHaveBeenNthCalledWith(1, 0, 5, 'a', input);
    expect(sum).toHaveBeenNthCalledWith(2, 5, 4, 'b', input);
    expect(sum).toHaveBeenNthCalledWith(3, 9, 3, 'c', input);
    expect(sum).toHaveBeenNthCalledWith(4, 12, 2, 'd', input);
    expect(sum).toHaveBeenNthCalledWith(5, 14, 1, 'e', input);
    expect(sum).toHaveBeenNthCalledWith(6, 15, 0, 'f', input);
  });
});
