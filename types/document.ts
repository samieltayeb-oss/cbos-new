import { BilingualString } from './index';

export type DocumentType = 
  | 'circular' 
  | 'regulation' 
  | 'law' 
  | 'annual-report' 
  | 'bulletin' 
  | 'digest' 
  | 'research' 
  | 'policy-brief'
  | 'tender';

export interface CBOSDocument {
  id: string;
  reference_number: string;
  title: BilingualString;
  slug: string;
  type: DocumentType;
  department: BilingualString;
  publication_date: string;
  effective_date?: string;
  year: number;
  summary: BilingualString;
  file_url: string;
  file_size_kb: number;
  file_format: 'pdf' | 'xlsx' | 'docx';
  status: 'active' | 'superseded' | 'repealed';
  keywords?: string[];
}
