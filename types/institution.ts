import { BilingualString } from './index';

export type InstitutionType = 
  | 'commercial_bank'
  | 'specialized_bank'
  | 'foreign_bank_branch'
  | 'exchange_bureau'
  | 'microfinance'
  | 'payment_switch';

export interface FinancialInstitution {
  id: string;
  licenseNumber: string;
  name: BilingualString;
  type: InstitutionType;
  typeLabel: BilingualString;
  status: 'active' | 'under_restructuring' | 'suspended';
  headquarters: BilingualString;
  establishedYear: number;
  swiftBic?: string;
  website?: string;
  phone?: string;
  branchesCount?: number;
}
