export class ExchangeCoefficient {
  constructor(public USD_to_UAH: number, public EUR_to_UAH: number) {
  }

  convert(from: string, to: string, amount: number|undefined=0) {
    switch (true) {
      case from === to:
        return +amount.toFixed(2);
      case from === 'USD' && to === 'EUR':
        return +(amount * this.USD_to_UAH / this.EUR_to_UAH).toFixed(2);
      case from === 'USD' && to === 'UAH':
        return +(amount * this.USD_to_UAH).toFixed(2);
      case from === 'EUR' && to === 'USD':
        return +(amount * this.EUR_to_UAH / this.USD_to_UAH).toFixed(2);
      case from === 'EUR' && to === 'UAH':
        return +(amount * this.EUR_to_UAH).toFixed(2);
      case from === 'UAH' && to === 'USD':
        return +(amount / this.USD_to_UAH).toFixed(2);
      case from === 'UAH' && to === 'EUR':
        return +(amount / this.EUR_to_UAH).toFixed(2);
      default:
        return 0;
    }
  }
}
