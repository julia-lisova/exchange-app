export type CurrencyType = "EUR"| "UAH"| "USD";

export interface ConvertCurrencyResponse {
  "success": boolean;
  "query": {
    "from": CurrencyType;
    "to": CurrencyType;
    "amount": number;
  };
  "info": {
    "timestamp": number;
    "rate": number;
  };
  "date": string;
  "result": number;
}
