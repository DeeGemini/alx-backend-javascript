// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -3 when inputs are 1.4 and 4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4), -3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 when inputs are 4.5 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
    });
  });

  describe('Invalid type', function() {
    it('should throw an error when type is invalid', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
  });
});
