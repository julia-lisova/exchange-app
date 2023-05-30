import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConvertCurrencyResponse, CurrencyType} from "./convert-currency.response";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http: HttpClient) {
  }

  getData(from: CurrencyType, to: CurrencyType, amount: number):Observable<ConvertCurrencyResponse> {
    const headers = new HttpHeaders({
      "apikey": "nfFfPdv9CLQ2gBeRmxawDiMvqj7v2p7W"
    });
    return this.http.get<ConvertCurrencyResponse>(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {headers});
  }

  fakeAPI(from: CurrencyType, to: CurrencyType, amount: number):Observable<ConvertCurrencyResponse> {
    const date = new Date();
    const rate = from ==="USD" ? 36.928467 : 39.628395

    return of({
      "success": true,
      "query": {
        from,
        to,
        amount
      },
      "info": {
        "timestamp": date.getTime()/1000,
        rate
      },
      "date": date.toISOString().slice(0,10),
      "result": rate
    }).pipe(
      delay(1200)
    )
  }
}


