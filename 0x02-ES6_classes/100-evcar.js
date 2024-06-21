import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    if (typeof range !== 'string') {
      new TypeError('Range must a string');
    }
    this._range = range;
  }

  get range() {
    return this._range;
  }
  set range(value) {
    if (typeof value !== 'string')
      new TypeError('Range must be a string');
    this._range = value;
  }

  cloneCar() {
    return new super.constructor();
  }
}
