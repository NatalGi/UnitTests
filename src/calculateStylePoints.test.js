const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('incorrect values passed', () => {
    it('should return false if no value is passed', () => {
      const actual = calculateStylePoints();

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if it\'s more than five notes', () => {
      const actual = calculateStylePoints([16.5, 14, 17, 17, 18.5, 19]);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if it\'s less than five notes', () => {
      const actual = calculateStylePoints([16.5, 18.5, 19]);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if at least one note is negative', () => {
      const actual = calculateStylePoints([16.5, 18.5, 19, -14.5, 17]);

      const expexted = false;

      assert.equal(actual, expexted);
    });
  });

  describe('correct values passed', () => {
    it('should work for all the same notes', () => {
      const actual = calculateStylePoints([16.5, 16.5, 16.5, 16.5, 16.5]);

      const expexted = 49.5;

      assert.equal(actual, expexted);
    });

    it('should work for repeating notes', () => {
      const actual = calculateStylePoints([19.5, 17, 19.5, 16.5, 18.5]);

      const expexted = 55;

      assert.equal(actual, expexted);
    });

    it('should work for all different notes', () => {
      const actual = calculateStylePoints([19.5, 17, 19, 20.5, 18.5]);

      const expexted = 57;

      assert.equal(actual, expexted);
    });
  });
});