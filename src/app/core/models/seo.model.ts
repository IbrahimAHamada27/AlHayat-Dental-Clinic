export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export type SchemaType =
  | 'Dentist'
  | 'MedicalBusiness'
  | 'LocalBusiness'
  | 'Physician'
  | 'Person'
  | 'Article'
  | 'BreadcrumbList'
  | 'FAQPage';
