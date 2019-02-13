const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('incorrect values passed', () => {
    it('should return false if no value is passed', () => {
      const actual = calculateDistancePoints();

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if one value is missing', () => {
      const actual = calculateDistancePoints(99.5, 'medium');

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if two values are missing', () => {
      const actual = calculateDistancePoints(99.5);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if distance is negative', () => {
      const actual = calculateDistancePoints(-99.5, 'medium', 98);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if kPoint is negative', () => {
      const actual = calculateDistancePoints(99.5, 'medium', -98);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if hillSize is different than [medium, normal, large]', () => {
      const actual = calculateDistancePoints(99.5, 'big', 98);

      const expexted = false;

      assert.equal(actual, expexted);
    });
  });

  describe('correct values passed', () => {
    describe('distance and kPoint', () => {
      it('should works for distance less than kPoint', () => {
        const actual = calculateDistancePoints(91.5, 'medium', 99);

        const expexted = 45;

        assert.equal(actual, expexted);
      });

      it('should works for distance greater than kPoint', () => {
        const actual = calculateDistancePoints(99.5, 'medium', 96);

        const expexted = 67;

        assert.equal(actual, expexted);
      });

      it('should works for distance equal to kPoint', () => {
        const actual = calculateDistancePoints(98, 'medium', 98);

        const expexted = 60;

        assert.equal(actual, expexted);
      });

      it('should works for distance equal to zero', () => {
        const actual = calculateDistancePoints(0, 'medium', 98);

        const expexted = -136;

        assert.equal(actual, expexted);
      });
    });

    describe('hillSize', () => {
      it('should works for medium hillSize', () => {
        const actual = calculateDistancePoints(103.5, 'medium', 98);

        const expexted = 71.0;

        assert.equal(actual, expexted);
      });

      it('should works for normal hillSize', () => {
        const actual = calculateDistancePoints(122.5, 'normal', 120);

        const expexted = 64.5;

        assert.equal(actual, expexted);
      });

      it('should works for large hillSize', () => {
        const actual = calculateDistancePoints(208, 'large', 200);

        const expexted = 129.6;

        assert.equal(actual, expexted);
      });
    });
  });
});