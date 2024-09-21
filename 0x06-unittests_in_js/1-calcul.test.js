const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('summation is recognized', function () {
  it('add integers correctly', function () {
    assert.equal(calculateNumber('SUM', 5, 7), 12);
  });
  it('should always round to the closest integer', function () {
    assert.equal(calculateNumber('SUM', 1.2, 5), 6);
    assert.equal(calculateNumber('SUM', 5, 5.6), 11);
    assert.equal(calculateNumber('SUM', 4.85, 7.18), 12);
  });
  it('can handle two arguments', function () {
    assert.equal(calculateNumber('SUM', 4), 4);
    assert.equal(calculateNumber('SUM', 7.4), 7);
    assert.equal(calculateNumber('SUM', 9.7), 10);
  });
  it('can handle single argument', function () {
    assert.equal(calculateNumber('SUM'), 0);
  });
  it('handles non-integers', function () {
    assert.equal(calculateNumber('SUM', 'hello'), 0);
    assert.equal(calculateNumber('SUM', 4.3, 'world'), 0);
    assert.equal(calculateNumber('SUM', 'Hi', 'earth'), 0);
  });
});

describe('subtraction is recognized', function () {
  it('subtracts integers correctly', function () {
    assert.equal(calculateNumber('SUBTRACT', 5, 7), -2);
  });
  it('should always round to the closest integer', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 5), -4);
    assert.equal(calculateNumber('SUBTRACT', 5, 5.6), -1);
    assert.equal(calculateNumber('SUBTRACT', 4.85, 7.18), -2);
  });
  it('can handle two arguments', function () {
    assert.equal(calculateNumber('SUBTRACT', 4), 4);
    assert.equal(calculateNumber('SUBTRACT', 7.4), 7);
    assert.equal(calculateNumber('SUBTRACT', 9.7), 10);
  });
  it('can handle single argument', function () {
    assert.equal(calculateNumber('SUBTRACT'), 0);
  });
  it('handles non-integers', function () {
    assert.equal(calculateNumber('SUBTRACT', 'hello'), 0);
    assert.equal(calculateNumber('SUBTRACT', 4.3, 'world'), 0);
    assert.equal(calculateNumber('SUBTRACT', 'Hi', 'earth'), 0);
  });
});

describe('division is recognized', function () {
  it('add integers correctly', function () {
    assert.equal(calculateNumber('DIVIDE', 4, 8), 0.5);
  });
  it('should always round to the closest integer', function () {
    assert.equal(calculateNumber('DIVIDE', 1.2, 5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 5, 7.6), 0.625);
    assert.equal(calculateNumber('DIVIDE', 4.85, 6.18), 0.83333333333333334);
  });
  it('can handle two arguments', function () {
    assert.equal(calculateNumber('DIVIDE', 4), 'Error');
    assert.equal(calculateNumber('DIVIDE', 7.4), 'Error');
    assert.equal(calculateNumber('DIVIDE', 9.7), 'Error');
  });
  it('can handle single argument', function () {
    assert.equal(calculateNumber('DIVIDE'), 'Error');
  });
  it('handles non-integers', function () {
    assert.equal(calculateNumber('DIVIDE', 'hello'), 0);
    assert.equal(calculateNumber('DIVIDE', 4.3, 'world'), 0);
    assert.equal(calculateNumber('DIVIDE', 'Hi', 'earth'), 0);
  });
});

describe('unrecognized arguments are handled', function () {
  it('no arguments handled', function () {
    assert.equal(calculateNumber(), 'Type required');
  });
  it('random operation type string handled', function () {
    assert.equal(calculateNumber('Hi', 5, 6), 'Type not recognized');
  });
  it('operation type takes precedence over operand type', function () {
    assert.equal(calculateNumber('Hello', 'world', 6), 'Type not recognized');
  });
  it('trying to ignore the operation type argument', function () {
    assert.equal(calculateNumber(7, 6), 'Type not recognized');
  });
});
