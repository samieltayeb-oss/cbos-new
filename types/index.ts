export type Language = 'ar' | 'en';

export interface BilingualString {
  ar: string;
  en: string;
}

export interface NavItem {
  id: string;
  title: BilingualString;
  href: string;
  description?: BilingualString;
  badge?: BilingualString;
  children?: NavItem[];
}

export interface NavGroup {
  id: string;
  title: BilingualString;
  href: string;
  featuredDocument?: {
    title: BilingualString;
    refNumber: string;
    href: string;
    date: string;
  };
  categories: {
    title: BilingualString;
    items: NavItem[];
  }[];
}

export interface MetricCardData {
  id: string;
  title: BilingualString;
  value: string;
  change?: string;
  isPositive?: boolean;
  unit?: BilingualString;
  subtext?: BilingualString;
  updatedAt: string;
}
