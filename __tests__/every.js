const every = require('../every');

describe('every()', () => {
  it('should work with strings', () => {
    const has3 = jest.fn(x => Number(x) >= 3);
    const run = every(has3);

    const input = '543210';
    expect(run(input)).toEqual(false);

    expect(has3).toHaveBeenCalledTimes(4);
    expect(has3).toHaveBeenNthCalledWith(1, '5', 0, input);
    expect(has3).toHaveBeenNthCalledWith(2, '4', 1, input);
    expect(has3).toHaveBeenNthCalledWith(3, '3', 2, input);
  });

  it('should work with arrays', () => {
    const has3 = jest.fn(x => x >= 3);
    const run = every(has3);

    const input = [5, 4, 3, 2, 1, 0];
    expect(run(input)).toEqual(false);

    expect(has3).toHaveBeenCalledTimes(4);
    expect(has3).toHaveBeenNthCalledWith(1, 5, 0, input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, 1, input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, 2, input);
  });

  it('should work with sets', () => {
    const has3 = jest.fn(x => x >= 3);
    const run = every(has3);

    const input = new Set([5, 4, 3, 2, 1, 0]);
    expect(run(input)).toEqual(false);

    expect(has3).toHaveBeenCalledTimes(4);
    expect(has3).toHaveBeenNthCalledWith(1, 5, null, input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, null, input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, null, input);
  });

  it('should work with objects', () => {
    const has3 = jest.fn(x => x >= 3);
    const run = every(has3);

    const input = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    expect(run(input)).toEqual(false);

    expect(has3).toHaveBeenCalledTimes(4);
    expect(has3).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, 'c', input);
  });

  it('should work with maps', () => {
    const has3 = jest.fn(x => x >= 3);
    const run = every(has3);

    const input = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);
    expect(run(input)).toEqual(false);

    expect(has3).toHaveBeenCalledTimes(4);
    expect(has3).toHaveBeenNthCalledWith(1, 5, 'a', input);
    expect(has3).toHaveBeenNthCalledWith(2, 4, 'b', input);
    expect(has3).toHaveBeenNthCalledWith(3, 3, 'c', input);
  });

  it('should work when goes through all values', () => {
    const yup = jest.fn(x => true);
    const run = every(yup);

    const input = '543210';
    expect(run(input)).toEqual(true);

    expect(yup).toHaveBeenCalledTimes(6);
  });
});
