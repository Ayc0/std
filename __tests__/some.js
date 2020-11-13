const some = require('../some');

describe('some()', () => {
  it('should work with strings', () => {
    const has3 = jest.fn(x => x === '3');
    const run = some(has3);

    const input = '543210';
    expect(run(input)).toEqual(true);

    expect(has3).toHaveBeenCalledTimes(3);
    expect(has3).toHaveBeenNthCalledWith(1, '5', 0, input);
    expect(has3).toHaveBeenNthCalledWith(2, '4', 1, input);
    expect(has3).toHaveBeenNthCalledWith(3, '3', 2, input);
  });

  it('should work with arrays', () => {
    const has3 = jest.fn(x => x === 3);
    const run = some(has3);

    const input = [5, 4, 3, 2, 1, 0];
    expect(run(input)).toEqual(true);

    expect(has3).toHaveBeenCalledTimes(3);
    expect(has3).toHaveBeenNthCalledWith(1, 5, 0, input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, 1, input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, 2, input);
  });

  it('should work with sets', () => {
    const has3 = jest.fn(x => x === 3);
    const run = some(has3);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(run(input)).toEqual(true);

    expect(has3).toHaveBeenCalledTimes(3);
    expect(has3).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, null, input);
  });

  it('should work with objects', () => {
    const has3 = jest.fn(x => x === 3);
    const run = some(has3);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(run(input)).toEqual(true);

    expect(has3).toHaveBeenCalledTimes(3);
    expect(has3).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, 'c', input);
  });

  it('should work with maps', () => {
    const has3 = jest.fn(x => x === 3);
    const run = some(has3);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(run(input)).toEqual(true);

    expect(has3).toHaveBeenCalledTimes(3);
    expect(has3).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, 'c', input);
  });

  it('should work when doesn’t some value', () => {
    const nope = jest.fn(x => false);
    const run = some(nope);

    const input = '543210';
    expect(run(input)).toEqual(false);

    expect(nope).toHaveBeenCalledTimes(6);
  });
});
