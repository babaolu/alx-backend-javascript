export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string')
      new TypeError('Name must be a string');
    if (typeof code !== 'string')
      new TypeError('Code must be a string');
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
  
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string')
      new TypeError('Name must be a string');
    this._name = value;
  }
  
  get code() {
    return this._code;
  }
  set code(value) {
    if (typeof value !== 'string')
      new TypeError('Code must be a string');
    this._code = value;
  }
}
