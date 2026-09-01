import { IconName } from './icon.model';

export interface ServiceProcessStep {
  number: string;
  titleAr: string;
  titleEn?: string;
  descriptionAr: string;
  descriptionEn?: string;
}

export interface ServiceFaqItem {
  questionAr: string;
  questionEn?: string;
  answerAr: string;
  answerEn?: string;
}

export interface ServiceSeo {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  shortDescriptionAr: string;
  shortDescriptionEn: string;
  overviewAr: string;
  overviewEn: string;
  categoryAr: string;
  categoryEn: string;
  iconName: IconName;
  heroImage?: string;
  isFeatured?: boolean;
  isActive?: boolean;
  whoItIsForAr?: string[];
  whoItIsForEn?: string[];
  benefitsAr?: string[];
  benefitsEn?: string[];
  considerationsAr?: string[];
  considerationsEn?: string[];
  processStepsAr?: ServiceProcessStep[];
  usesDigitalTech?: boolean;
  faqs?: ServiceFaqItem[];
  relatedServiceSlugs?: string[];
  seo?: ServiceSeo;
}
