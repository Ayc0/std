const std = require('..');

const len = require('../len');

const map = require('../map');
const filter = require('../filter');
const forEach = require('../forEach');
const reduce = require('../reduce');

const range = require('../range');
const zip = require('../zip');

const find = require('../find');
const some = require('../some');
const every = require('../every');

describe('std', () => {
  it('should export the right functions', () => {
    expect(std.len).toBe(len);
    expect(std.map).toBe(map);
    expect(std.filter).toBe(filter);
    expect(std.forEach).toBe(forEach);
    expect(std.reduce).toBe(reduce);
    expect(std.range).toBe(range);
    expect(std.zip).toBe(zip);
    expect(std.find).toBe(find);
    expect(std.some).toBe(some);
    expect(std.every).toBe(every);
  });
});
