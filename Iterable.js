const iterate = require('./utils/iterate');
const { checkType } = require('./utils/checkType');
const generateIterable = require('./utils/generateIterable');

const drop = require('./apply/drop');
const take = require('./apply/take');
const map = require('./apply/map');
const filter = require('./apply/filter');

const every = require('./apply/every');
const some = require('./apply/some');

const reduce = require('./apply/reduce');
const find = require('./apply/find');
const len = require('./len');

const forEach = require('./apply/forEach');

class Iterable {
  constructor(generator, initialType) {
    this.generator = generator;
    this.initialType = initialType;
  }

  static from(iterable) {
    return new Iterable(iterate(iterable), checkType(iterable));
  }

  // Returns Iterables
  drop(limit) {
    this.generator = drop(this.generator, limit);
    return this;
  }
  take(limit) {
    this.generator = take(this.generator, limit);
    return this;
  }
  map(callback, thisArg) {
    this.generator = map(this.generator, callback, thisArg);
    return this;
  }
  filter(callback, thisArg) {
    this.generator = filter(this.generator, callback, thisArg);
    return this;
  }

  // Perform boolean logic
  every(callback, thisArg) {
    return every(this.generator, callback, thisArg);
  }
  some(callback, thisArg) {
    return some(this.generator, callback, thisArg);
  }

  // Return unique value
  reduce(callback, initialValue = 0, thisArg) {
    return reduce(this.generator, callback, initialValue, thisArg);
  }
  find(callback, thisArg) {
    return find(this.generator, callback, thisArg);
  }
  len() {
    return len(this.generator);
  }

  // Browse values
  forEach(callback, thisArg) {
    forEach(this.generator, callback, thisArg);
  }

  // Recreate iterable
  build(type = this.initialType) {
    return generateIterable(this.generator, type);
  }
}

module.exports = Iterable;
