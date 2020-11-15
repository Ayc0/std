const find = require('../find');

describe('find()', () => {
  it('should work with strings', () => {
    const find3 = jest.fn(x => x === '3');
    const run = find(find3);

    const input = '543210';
    expect(run(input)).toEqual(['3', 2]);

    expect(find3).toHaveBeenCalledTimes(3);
    expect(find3).toHaveBeenNthCalledWith(1, '5', 0, input);
    expect(find3).toHaveBeenNthCalledWith(2, '4', 1, input);
    expect(find3).toHaveBeenNthCalledWith(3, '3', 2, input);
  });

  it('should work with arrays', () => {
    const find3 = jest.fn(x => x === 3);
    const run = find(find3);

    const input = [5, 4, 3, 2, 1, 0];
    expect(run(input)).toEqual([3, 2]);

    expect(find3).toHaveBeenCalledTimes(3);
    expect(find3).toHaveBeenNthCalledWith(1, 5, 0, input);
    expect(find3).toHaveBeenNthCalledWith(2, 4, 1, input);
    expect(find3).toHaveBeenNthCalledWith(3, 3, 2, input);
  });

  it('should work with sets', () => {
    const find3 = jest.fn(x => x === 3);
    const run = find(find3);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(run(input)).toEqual([3, null]);

    expect(find3).toHaveBeenCalledTimes(3);
    expect(find3).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(find3).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(find3).toHaveBeenNthCalledWith(3, 3, null, input);
  });

  it('should work with objects', () => {
    const find3 = jest.fn(x => x === 3);
    const run = find(find3);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(run(input)).toEqual([3, 'c']);

    expect(find3).toHaveBeenCalledTimes(3);
    expect(find3).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(find3).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(find3).toHaveBeenNthCalledWith(3, 3, 'c', input);
  });

  it('should work with maps', () => {
    const find3 = jest.fn(x => x === 3);
    const run = find(find3);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(run(input)).toEqual([3, 'c']);

    expect(find3).toHaveBeenCalledTimes(3);
    expect(find3).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(find3).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(find3).toHaveBeenNthCalledWith(3, 3, 'c', input);
  });

  it('should work with iterators', () => {
    const find3 = jest.fn(x => x === 3);
    const run = find(find3);

    function* iter() {
      yield 5;
      yield 4;
      yield 3;
      yield 2;
      yield 1;
      yield 0;
    }
    const input = iter();
    expect(run(input)).toEqual([3, null]);

    expect(input.next().done).toBe(false);

    // this is required otherwise the `toHaveBeenNthCalledWith` fail
    // I suspect an issue with the nb of step remaining
    input.return();

    expect(find3).toHaveBeenCalledTimes(3);
    expect(find3).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(find3).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(find3).toHaveBeenNthCalledWith(3, 3, null, input);
  });

  it('should work when doesn’t find value', () => {
    const nope = jest.fn(x => false);
    const run = find(nope);

    const input = '543210';
    expect(run(input)).toEqual(undefined);

    expect(nope).toHaveBeenCalledTimes(6);
  });
});
