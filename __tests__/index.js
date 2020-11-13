const std = require('..');

const len = require('../len');

const map = require('../map');
const filter = require('../filter');
const forEach = require('../forEach');
const reduce = require('../reduce');

const range = require('../range');
const zip = require('../zip');

describe('std', () => {
  it('should export the right functions', () => {
    expect(std.len).toBe(len);
    expect(std.map).toBe(map);
    expect(std.filter).toBe(filter);
    expect(std.forEach).toBe(forEach);
    expect(std.reduce).toBe(reduce);
    expect(std.range).toBe(range);
    expect(std.zip).toBe(zip);
  });
});
