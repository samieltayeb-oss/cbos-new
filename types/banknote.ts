import { BilingualString } from './index';

export interface SecurityFeature {
  id: string;
  name: BilingualString;
  description: BilingualString;
  x_percent: number;
  y_percent: number;
  type: 'watermark' | 'thread' | 'see-through' | 'intaglio' | 'microprint' | 'iridescent';
}

export interface BanknoteDenomination {
  id: string;
  value: number;
  currency: string;
  seriesYear: number;
  title: BilingualString;
  dimensions: string;
  primaryColor: BilingualString;
  frontImage: string;
  backImage?: string;
  frontTheme: BilingualString;
  backTheme: BilingualString;
  securityFeatures: SecurityFeature[];
}
