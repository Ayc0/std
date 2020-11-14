const zip = require('../zip');

describe('zip()', () => {
  it('should work with similar sizes', () => {
    const string = '543210';
    const array = [5, 4, 3, 2, 1, 0];
    const set = new Set([5, 4, 3, 2, 1, 0]);
    const object = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
    const map = new Map([
      ['a', 5],
      ['b', 4],
      ['c', 3],
      ['d', 2],
      ['e', 1],
      ['f', 0],
    ]);

    const check = jest.fn();

    for (const step of zip([string, array, set, object, map])) {
      check(step);
    }

    expect(check).toHaveBeenCalledTimes(6);
    expect(check).toHaveBeenNthCalledWith(1, [
      ['5', 5, 5, 5, 5],
      [0, 0, null, 'a', 'a'],
      [string, array, set, object, map],
    ]);
    expect(check).toHaveBeenNthCalledWith(2, [
      ['4', 4, 4, 4, 4],
      [1, 1, null, 'b', 'b'],
      [string, array, set, object, map],
    ]);
    expect(check).toHaveBeenNthCalledWith(3, [
      ['3', 3, 3, 3, 3],
      [2, 2, null, 'c', 'c'],
      [string, array, set, object, map],
    ]);
    expect(check).toHaveBeenNthCalledWith(4, [
      ['2', 2, 2, 2, 2],
      [3, 3, null, 'd', 'd'],
      [string, array, set, object, map],
    ]);
    expect(check).toHaveBeenNthCalledWith(5, [
      ['1', 1, 1, 1, 1],
      [4, 4, null, 'e', 'e'],
      [string, array, set, object, map],
    ]);
    expect(check).toHaveBeenNthCalledWith(6, [
      ['0', 0, 0, 0, 0],
      [5, 5, null, 'f', 'f'],
      [string, array, set, object, map],
    ]);
  });
});
