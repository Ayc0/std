const Iterable = require('../Iterable');
const { type } = require('../utils/checkType');

const array = [5, 4, 3, 2, 1, 0];
const set = new Set(array);
const string = '543210';
const object = { a: 5, b: 4, c: 3, d: 2, e: 1, f: 0 };
const map = new Map(Object.entries(object));
const inputs = [string, array, set, object, map];

function* iter() {
  yield* array;
}

describe('Iterable()', () => {
  it('should recreate the original iterable', () => {
    for (const input of inputs) {
      const iterable = Iterable.from(input);
      const output = iterable.build();
      expect(output).toEqual(input);
    }
    {
      const iterable = Iterable.from(iter());
      const output = [];
      for (const value of iterable.build()) {
        output.push(value);
      }
      expect(output).toEqual(array);
    }
  });

  describe('should create valid other type', () => {
    it('should create a string', () => {
      for (const input of [...inputs, iter()]) {
        const iterable = Iterable.from(input);
        const output = iterable.build(type.String);
        expect(output).toEqual(string);
      }
    });

    it('should create a array', () => {
      for (const input of [...inputs, iter()]) {
        const iterable = Iterable.from(input);
        const output = iterable.build(type.Array);
        expect(output.map(x => parseInt(x, 10))).toEqual(array);
      }
    });

    it('should create a map', () => {
      for (const input of [...inputs, iter()]) {
        const iterable = Iterable.from(input);
        iterable.map(x => parseInt(x, 10));
        const output = iterable.build(type.Array);
        expect(output).toEqual(array);
      }
    });

    it('should create a set', () => {
      for (const input of [...inputs, iter()]) {
        const iterable = Iterable.from(input);
        iterable.map(x => parseInt(x, 10));
        const output = iterable.build(type.Set);
        expect(output).toEqual(set);
      }
    });

    it('should create a object', () => {
      for (const input of [object, map]) {
        const iterable = Iterable.from(input);
        const output = iterable.build(type.Object);
        expect(output).toEqual(object);
      }
      const simpleObject = Object.fromEntries(array.map((x, i) => [i, x]));
      for (const input of [array, string]) {
        const iterable = Iterable.from(input);
        iterable.map(x => parseInt(x, 10));
        const output = iterable.build(type.Object);
        expect(output).toEqual(simpleObject);
      }
    });

    it('should create a map', () => {
      for (const input of [object, map]) {
        const iterable = Iterable.from(input);
        const output = iterable.build(type.Map);
        expect(output).toEqual(map);
      }
      const simpleMap = new Map(array.map((x, i) => [i, x]));
      for (const input of [array, string]) {
        const iterable = Iterable.from(input);
        iterable.map(x => parseInt(x, 10));
        const output = iterable.build(type.Map);
        expect(output).toEqual(simpleMap);
      }
    });
  });

  describe('it includes regular methods', () => {
    const getIterable = () => Iterable.from(array);
    it('should work with map, take, drop, filter', () => {
      const iterable = getIterable();
      expect(
        iterable
          .drop(1)
          .filter(x => x % 2 === 0)
          .map(x => x * 3)
          .take(2)
          .build(),
      ).toEqual([12, 6]);
    });
    it('should work with every', () => {
      const iterable = getIterable();
      expect(iterable.every(x => x >= 0)).toBe(true);
      // once the iterable has been browsed, it should always return true
      expect(iterable.every(x => false)).toBe(true);
    });
    it('should work with some', () => {
      const iterable = getIterable();
      expect(iterable.some(x => x >= 5)).toBe(true);
      // once the iterable has been browsed, it should always return false
      expect(iterable.some(x => true)).toBe(false);
    });
    it('should work with reduce', () => {
      const iterable = getIterable();
      expect(iterable.reduce((acc, cur) => acc + cur, 0)).toBe(15);
      // once the iterable has been browsed, it doesn't have any value anymore
      expect(iterable.reduce((acc, cur) => acc + cur, 0)).toBe(0);
    });
    it('should work with find', () => {
      const iterable = getIterable();
      expect(iterable.find(x => x === 4)).toEqual([4, 1]);
      expect(iterable.find(x => x === 2)).toEqual([2, 3]);
      // once one value has been read, find won't read it again
      expect(iterable.find(x => x === 5)).toEqual(undefined);
    });
    it('should work with len', () => {
      const iterable = getIterable();
      expect(iterable.find(x => x === 4)).toEqual([4, 1]);
      expect(iterable.find(x => x === 2)).toEqual([2, 3]);
      // once one value has been read, find won't read it again
      expect(iterable.find(x => x === 5)).toEqual(undefined);
    });
    it('should work with len', () => {
      for (const input of [...inputs, iter()]) {
        const iterable = Iterable.from(input);
        expect(iterable.len()).toBe(6);
      }
    });
    it('should work with forEach', () => {
      for (const input of [...inputs, iter()]) {
        const iterable = Iterable.from(input);
        const cb = jest.fn();
        iterable.forEach(cb);
        expect(cb).toHaveBeenCalledTimes(6);
      }
    });
  });
});
