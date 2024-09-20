function calculateNumber(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }
  return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;
