function calculateNumber(type, a = 0, b = 0) {
  if (!type) {
    return 'Type required';
  }
  switch (type) {
    case 'SUM':
      if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
      if (b === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    default:
      return 'Type not recognized';
  }
}
module.exports = calculateNumber;
