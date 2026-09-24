import { BilingualString } from './index';

export interface ExchangeRateItem {
  currency_code: string;
  currency_name: BilingualString;
  official_buy: number;
  official_sell: number;
  official_middle: number;
  commercial_bank_avg?: number;
  exchange_bureau_avg?: number;
  historical_7d: { date: string; rate: number }[];
  isPrimary?: boolean;
}

export interface ExchangeRateResponse {
  date: string;
  source: BilingualString;
  rates: ExchangeRateItem[];
  methodologyNote: BilingualString;
}
