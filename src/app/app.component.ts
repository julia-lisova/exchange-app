import {Component} from '@angular/core';
import {lastValueFrom} from 'rxjs';
import {ExchangeService} from "./exchange.service";
import {ConvertCurrencyResponse, CurrencyType} from "./convert-currency.response";
import {ExchangeCoefficient} from "./exchange-coefficient";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  currencyInfo_USD_to_UAH: ConvertCurrencyResponse | null = null;
  currencyInfo_EUR_to_UAH: ConvertCurrencyResponse | null = null;
  exchangeCoefficient?: ExchangeCoefficient;

  amountFirst: number | undefined = 100;
  currencyFirst: CurrencyType = 'USD';
  amountSecond: number | undefined;
  currencySecond: CurrencyType = 'UAH';

  constructor(private exchangeService: ExchangeService) {
    this.title = 'myApp';
    this.init();
  }

  init = async () => {
    this.currencyInfo_USD_to_UAH = await lastValueFrom(this.exchangeService.getData('USD', 'UAH', 1));
    this.currencyInfo_EUR_to_UAH = await lastValueFrom(this.exchangeService.getData('EUR', 'UAH', 1));
    this.exchangeCoefficient = new ExchangeCoefficient(this.currencyInfo_USD_to_UAH.result, this.currencyInfo_EUR_to_UAH.result);
    this.updateData('from');
  }

  updateData(type: 'from' | 'to') {
    switch (type) {
      case "from":
        return this.amountSecond = this.exchangeCoefficient?.convert(this.currencyFirst, this.currencySecond, this.amountFirst);
      case "to":
        return this.amountFirst = this.exchangeCoefficient?.convert(this.currencySecond, this.currencyFirst, this.amountSecond);
    }
  }


}
