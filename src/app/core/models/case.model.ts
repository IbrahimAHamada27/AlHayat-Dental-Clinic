export type CaseCategory =
  | 'orthodontics'
  | 'restorative'
  | 'cosmetic'
  | 'endodontics'
  | 'periodontics'
  | 'digital-dentistry';

export interface CaseApproachStep {
  number: string;
  titleAr: string;
  descriptionAr: string;
}

export interface DentalCase {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  shortDescriptionAr: string;
  shortDescriptionEn: string;
  category: CaseCategory;
  categoryAr: string;
  categoryEn: string;
  treatmentTypeAr: string;
  treatmentTypeEn: string;
  beforeImage: string;
  afterImage: string;
  beforeLabelAr?: string;
  afterLabelAr?: string;
  gallery?: string[];
  overviewAr?: string;
  overviewEn?: string;
  clinicalNotesAr?: string[];
  treatmentApproachAr?: CaseApproachStep[];
  relatedServiceSlugs?: string[];
  locationIds?: string[];
  isFeatured?: boolean;
  tags?: string[];
  disclaimerAr?: string;
  consentConfirmed: boolean;
}
