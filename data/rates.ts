import { ExchangeRateResponse } from '@/types/rates';

export const officialRatesData: ExchangeRateResponse = {
  date: '2026-09-24',
  source: {
    ar: 'بنك السودان المركزي — الإدارة العامة للأسواق المالية وإدارة النقد الأجنبي',
    en: 'Central Bank of Sudan — Financial Markets & Foreign Exchange Directorate'
  },
  methodologyNote: {
    ar: 'الأسعار التأشيرية اليومية المعلنة من بنك السودان المركزي لاحتساب المعاملات الجمركية والتقييم المحاسبي، وتحدد البنوك والصرافات أسعارها وفقاً لآليات العرض والطلب المعتمدة.',
    en: 'Daily indicative exchange rates published by CBOS for official transactions, customs assessment, and financial valuation. Commercial banks and bureaus set market rates via approved liquidity matching mechanisms.'
  },
  rates: [
    {
      currency_code: 'USD',
      currency_name: { ar: 'دولار أمريكي', en: 'US Dollar' },
      official_buy: 1980.50,
      official_sell: 1995.35,
      official_middle: 1987.93,
      commercial_bank_avg: 1985.00,
      exchange_bureau_avg: 1990.00,
      isPrimary: true,
      historical_7d: [
        { date: '2026-09-18', rate: 1970.00 },
        { date: '2026-09-19', rate: 1972.50 },
        { date: '2026-09-20', rate: 1975.00 },
        { date: '2026-09-21', rate: 1979.20 },
        { date: '2026-09-22', rate: 1982.00 },
        { date: '2026-09-23', rate: 1985.50 },
        { date: '2026-09-24', rate: 1987.93 },
      ]
    },
    {
      currency_code: 'EUR',
      currency_name: { ar: 'يورو أوروبي', en: 'Euro' },
      official_buy: 2145.20,
      official_sell: 2161.30,
      official_middle: 2153.25,
      commercial_bank_avg: 2150.00,
      exchange_bureau_avg: 2155.00,
      isPrimary: true,
      historical_7d: [
        { date: '2026-09-18', rate: 2135.00 },
        { date: '2026-09-19', rate: 2142.50 },
        { date: '2026-09-20', rate: 2139.10 },
        { date: '2026-09-21', rate: 2146.50 },
        { date: '2026-09-22', rate: 2144.00 },
        { date: '2026-09-23', rate: 2151.20 },
        { date: '2026-09-24', rate: 2153.25 },
      ]
    },
    {
      currency_code: 'SAR',
      currency_name: { ar: 'ريال سعودي', en: 'Saudi Riyal' },
      official_buy: 527.80,
      official_sell: 531.75,
      official_middle: 529.78,
      commercial_bank_avg: 528.50,
      exchange_bureau_avg: 530.00,
      isPrimary: true,
      historical_7d: [
        { date: '2026-09-18', rate: 524.50 },
        { date: '2026-09-19', rate: 525.80 },
        { date: '2026-09-20', rate: 526.40 },
        { date: '2026-09-21', rate: 527.40 },
        { date: '2026-09-22', rate: 528.50 },
        { date: '2026-09-23', rate: 529.10 },
        { date: '2026-09-24', rate: 529.78 },
      ]
    },
    {
      currency_code: 'AED',
      currency_name: { ar: 'درهم إماراتي', en: 'UAE Dirham' },
      official_buy: 539.10,
      official_sell: 543.15,
      official_middle: 541.13,
      commercial_bank_avg: 540.00,
      exchange_bureau_avg: 541.50,
      isPrimary: true,
      historical_7d: [
        { date: '2026-09-18', rate: 536.00 },
        { date: '2026-09-19', rate: 537.40 },
        { date: '2026-09-20', rate: 538.20 },
        { date: '2026-09-21', rate: 539.50 },
        { date: '2026-09-22', rate: 540.20 },
        { date: '2026-09-23', rate: 540.80 },
        { date: '2026-09-24', rate: 541.13 },
      ]
    },
    {
      currency_code: 'GBP',
      currency_name: { ar: 'جنيه إسترليني', en: 'Pound Sterling' },
      official_buy: 2548.00,
      official_sell: 2567.10,
      official_middle: 2557.55,
      commercial_bank_avg: 2550.00,
      historical_7d: [
        { date: '2026-09-18', rate: 2530.00 },
        { date: '2026-09-19', rate: 2548.50 },
        { date: '2026-09-20', rate: 2562.00 },
        { date: '2026-09-21', rate: 2545.00 },
        { date: '2026-09-22', rate: 2552.00 },
        { date: '2026-09-23', rate: 2554.00 },
        { date: '2026-09-24', rate: 2557.55 },
      ]
    },
    {
      currency_code: 'QAR',
      currency_name: { ar: 'ريال قطري', en: 'Qatari Riyal' },
      official_buy: 543.80,
      official_sell: 547.88,
      official_middle: 545.84,
      commercial_bank_avg: 544.50,
      historical_7d: [
        { date: '2026-09-18', rate: 540.00 },
        { date: '2026-09-19', rate: 541.20 },
        { date: '2026-09-20', rate: 542.50 },
        { date: '2026-09-21', rate: 543.10 },
        { date: '2026-09-22', rate: 544.20 },
        { date: '2026-09-23', rate: 545.00 },
        { date: '2026-09-24', rate: 545.84 },
      ]
    },
    {
      currency_code: 'KWD',
      currency_name: { ar: 'دينار كويتي', en: 'Kuwaiti Dinar' },
      official_buy: 6450.00,
      official_sell: 6498.40,
      official_middle: 6474.20,
      commercial_bank_avg: 6465.00,
      historical_7d: [
        { date: '2026-09-18', rate: 6430.00 },
        { date: '2026-09-19', rate: 6445.00 },
        { date: '2026-09-20', rate: 6438.00 },
        { date: '2026-09-21', rate: 6455.00 },
        { date: '2026-09-22', rate: 6462.00 },
        { date: '2026-09-23', rate: 6470.00 },
        { date: '2026-09-24', rate: 6474.20 },
      ]
    },
    {
      currency_code: 'EGP',
      currency_name: { ar: 'جنيه مصري', en: 'Egyptian Pound' },
      official_buy: 40.50,
      official_sell: 41.20,
      official_middle: 40.85,
      commercial_bank_avg: 40.70,
      historical_7d: [
        { date: '2026-09-18', rate: 40.10 },
        { date: '2026-09-19', rate: 40.25 },
        { date: '2026-09-20', rate: 40.40 },
        { date: '2026-09-21', rate: 40.35 },
        { date: '2026-09-22', rate: 40.60 },
        { date: '2026-09-23', rate: 40.75 },
        { date: '2026-09-24', rate: 40.85 },
      ]
    }
  ]
};
