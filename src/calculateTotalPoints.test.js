const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('incorrect values passed', () => {
    it('should return false if no value is passed', () => {
      const actual = calculateTotalPoints();

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if one value is missing', () => {
      const actual = calculateTotalPoints(99.5, 'medium', 98, [19.5, 17, 19, 20.5, 18.5]);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if two values are missing', () => {
      const actual = calculateTotalPoints(99.5, 'medium', 98);

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if three values are missing', () => {
      const actual = calculateTotalPoints(99.5, 'medium');

      const expexted = false;

      assert.equal(actual, expexted);
    });

    it('should return false if four values are missing', () => {
      const actual = calculateTotalPoints(99.5);

      const expexted = false;

      assert.equal(actual, expexted);
    });
  });

  describe('correct values passed', () => {
    describe('windFactor', () => {
      it('should works for negative windFactor', () => {
        const actual = calculateTotalPoints(225.0, 'large', 200, [18.0, 18.5, 18.0, 18.0, 19.0], -9.9, 8.7);

        const expexted = 203.3;

        assert.equal(actual, expexted);
      });

      it('should works for positive windFactor', () => {
        const actual = calculateTotalPoints(122.0, 'normal', 120, [17.5, 18.0, 17.5, 18.0, 18.0], 2.0);

        const expexted = 119.1;

        assert.equal(actual, expexted);
      });

      it('should works for windFactor equal to zero', () => {
        const actual = calculateTotalPoints(122.0, 'normal', 120, [17.5, 18.0, 17.5, 18.0, 18.0], 0);

        const expexted = 117.1;

        assert.equal(actual, expexted);
      });
    });

    describe('gateFactor', () => {
      it('should works for negative gateFactor', () => {
        const actual = calculateTotalPoints(108.0, 'medium', 98, [18.0, 18.5, 18.5, 18.5, 19.0], -15.3, -2.2);

        const expexted = 118.0;

        assert.equal(actual, expexted);
      });

      it('should works for positive gateFactor', () => {
        const actual = calculateTotalPoints(212.0, 'large', 200, [18.0, 17.5, 17.5, 17.5, 18.0], -7.5, 8.7);

        const expexted = 188.6;

        assert.equal(actual, expexted);
      });

      it('should works for gateFactor equal to zero', () => {
        const actual = calculateTotalPoints(121.0, 'normal', 120, [17.0, 16.5, 17.5, 17.5, 17.5], -1.7, 0);

        const expexted = 112.1;

        assert.equal(actual, expexted);
      });

      it('should works if gateFactor is missing', () => {
        const actual = calculateTotalPoints(134.0, 'normal', 120, [19.0, 20.0, 19.5, 19.0, 18.5], -5.4);

        const expexted = 137.3;

        assert.equal(actual, expexted);
      });
    });
  });
});