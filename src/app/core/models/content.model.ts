export interface TechnologyWorkflowStep {
  number: string;
  titleAr: string;
  descriptionAr: string;
}

export interface TechnologyComparison {
  traditionalTitleAr: string;
  traditionalPointsAr: string[];
  digitalTitleAr: string;
  digitalPointsAr: string[];
}

export interface TechnologyFaqItem {
  questionAr: string;
  answerAr: string;
}

export interface TechnologyItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  shortDescriptionAr: string;
  shortDescriptionEn: string;
  overviewAr?: string;
  overviewEn?: string;
  clinicalPurposeAr: string;
  clinicalPurposeEn: string;
  patientBenefitAr: string;
  patientBenefitEn: string;
  benefitsAr?: string[];
  benefitsEn?: string[];
  workflowStepsAr?: TechnologyWorkflowStep[];
  comparisonAr?: TechnologyComparison;
  relatedServiceSlugs?: string[];
  faqs?: TechnologyFaqItem[];
  image?: string;
  isFeatured?: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  categoryAr: string;
  categoryEn: string;
  authorAr: string;
  authorEn: string;
  publishedDate: string;
  readTimeMinutes: number;
  image?: string;
  tags?: string[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  summaryAr: string;
  summaryEn: string;
  treatmentAr?: string;
  treatmentEn?: string;
  beforeImage?: string;
  afterImage?: string;
  resultsAr?: string[];
}

export interface TestimonialItem {
  id: string;
  patientNameAr: string;
  patientNameEn?: string;
  treatmentAr: string;
  treatmentEn?: string;
  contentAr: string;
  contentEn?: string;
  rating?: number;
  date?: string;
}
