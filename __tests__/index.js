const fs = require('fs');
const path = require('path');

const modules = fs
  .readdirSync(path.join(__dirname, '..'))
  .filter(f => path.extname(f) === '.js' && f !== 'index.js')
  .map(f => path.basename(f, '.js'));

const std = require('..');

describe('exports', () => {
  for (const mod of modules) {
    it(`should export '${mod}'`, () => {
      expect(std[mod]).toBe(require(`../${mod}`));
    });
    it(`should have tests for "${mod}"`, () => {
      expect(fs.existsSync(`./${mod}.js`)).toBe(true);
    });
  }
});

describe('Documentation', () => {
  const readme = fs
    .readFileSync(path.join(__dirname, '..', 'README.md'))
    .toString();
  for (const mod of modules) {
    it(`should document "${mod}"`, () => {
      const isDocumented = readme.includes(`- [${mod}](#`);
      expect(isDocumented).toBe(true);
    });
  }
});
