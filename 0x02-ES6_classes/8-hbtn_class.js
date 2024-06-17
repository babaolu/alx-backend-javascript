export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      new TypeError('Location must a string');
    }
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
  }
 
  get size() {
    return this._size;
  }
  set size(value) {
    if (typeof value !== 'number')
      new TypeError('Size must be a number');
    this._size = value;
  }

  get location() {
    return this._location;
  }
  set location(value) {
    if (typeof value !== 'string')
      new TypeError('Location must be a string');
    this._location = value;
  }
}
