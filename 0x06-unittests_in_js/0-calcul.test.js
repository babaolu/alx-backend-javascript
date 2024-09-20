const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('should always round to nearest integer', function () {
  it('add integers correctly', function () {
    assert.equal(calculateNumber(5, 7), 12);
  });
  it('should always round to the closest integer', function () {
    assert.equal(calculateNumber(1.2, 5), 6);
    assert.equal(calculateNumber(5, 5.6), 11);
    assert.equal(calculateNumber(4.85, 7.18), 12);
  });
  it('can handle single argument', function () {
    assert.equal(calculateNumber(4), 4);
    assert.equal(calculateNumber(7.4), 7);
    assert.equal(calculateNumber(9.7), 10);
  });
  it('no arguments handled', function () {
    assert.equal(calculateNumber(), 0);
  });
  it('handles non-integers', function () {
    assert.equal(calculateNumber('hello'), 0);
    assert.equal(calculateNumber(4.3, 'world'), 0);
    assert.equal(calculateNumber('Hi', 'earth'), 0);
  });
});
