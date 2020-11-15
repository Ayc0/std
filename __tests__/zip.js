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
    function* iter() {
      yield 5;
      yield 4;
      yield 3;
      yield 2;
      yield 1;
      yield 0;
    }
    const iterator = iter();

    const check = jest.fn();

    for (const step of zip([string, array, set, object, map, iterator])) {
      check(step);
    }

    expect(check).toHaveBeenCalledTimes(6);
    expect(check).toHaveBeenNthCalledWith(1, [
      ['5', 5, 5, 5, 5, 5],
      [0, 0, null, 'a', 'a', null],
      [string, array, set, object, map, iterator],
    ]);
    expect(check).toHaveBeenNthCalledWith(2, [
      ['4', 4, 4, 4, 4, 4],
      [1, 1, null, 'b', 'b', null],
      [string, array, set, object, map, iterator],
    ]);
    expect(check).toHaveBeenNthCalledWith(3, [
      ['3', 3, 3, 3, 3, 3],
      [2, 2, null, 'c', 'c', null],
      [string, array, set, object, map, iterator],
    ]);
    expect(check).toHaveBeenNthCalledWith(4, [
      ['2', 2, 2, 2, 2, 2],
      [3, 3, null, 'd', 'd', null],
      [string, array, set, object, map, iterator],
    ]);
    expect(check).toHaveBeenNthCalledWith(5, [
      ['1', 1, 1, 1, 1, 1],
      [4, 4, null, 'e', 'e', null],
      [string, array, set, object, map, iterator],
    ]);
    expect(check).toHaveBeenNthCalledWith(6, [
      ['0', 0, 0, 0, 0, 0],
      [5, 5, null, 'f', 'f', null],
      [string, array, set, object, map, iterator],
    ]);
  });

  it('should work with different sizes', () => {
    const array2 = [1, 0];
    const array4 = [3, 2, 1, 0];

    const check = jest.fn();

    for (const step of zip([array2, array4])) {
      check(step);
    }

    expect(check).toHaveBeenCalledTimes(4);
    expect(check).toHaveBeenNthCalledWith(1, [
      [1, 3],
      [0, 0],
      [array2, array4],
    ]);
    expect(check).toHaveBeenNthCalledWith(2, [
      [0, 2],
      [1, 1],
      [array2, array4],
    ]);
    expect(check).toHaveBeenNthCalledWith(3, [
      [null, 1],
      [null, 2],
      [array2, array4],
    ]);
    expect(check).toHaveBeenNthCalledWith(4, [
      [null, 0],
      [null, 3],
      [array2, array4],
    ]);
  });
});
