import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number')
      throw new TypeError('Amount must be a number');
    if (currency.constructor !== Currency)
      throw new TypeError('Currency must be an object of type Currency');

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
  set amount(value) {
    if (typeof value !== 'number')
      throw new TypeError('Amount must be a number');
    this._amount = value;
  }
  
  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (typeof value !== 'object')
      throw new TypeError('Currency must be a number');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number')
      throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number')
      throw new TypeError('Conversion Rate must be a number');
    return amount * conversionRate;
  }
}
