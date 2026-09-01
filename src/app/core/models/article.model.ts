export type ArticleCategory =
  | 'orthodontics'
  | 'oral-hygiene'
  | 'cosmetic'
  | 'digital-dentistry'
  | 'restorative'
  | 'general';

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3;
  textAr: string;
  id: string;
}

export interface ParagraphBlock {
  type: 'paragraph';
  textAr: string;
}

export interface ListBlock {
  type: 'list';
  itemsAr: string[];
  ordered?: boolean;
}

export interface CalloutBlock {
  type: 'callout';
  textAr: string;
  titleAr?: string;
  variant?: 'info' | 'tip' | 'warning';
}

export interface QuoteBlock {
  type: 'quote';
  quoteAr: string;
  authorAr?: string;
}

export type ArticleBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | QuoteBlock;

export interface ArticleFAQ {
  questionAr: string;
  answerAr: string;
}

export interface Article {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  category: ArticleCategory;
  categoryAr: string;
  categoryEn: string;
  tags: string[];
  featuredImage?: string;
  readingTimeMinutes: number;
  publishedDate: string; // ISO format or formatted e.g. "2026-09-01"
  updatedDate?: string;
  authorId: string;
  authorNameAr: string;
  authorTitleAr: string;
  blocks: ArticleBlock[];
  faqs?: ArticleFAQ[];
  relatedServiceSlugs?: string[];
  relatedCaseSlugs?: string[];
  relatedLocationSlugs?: string[];
  isFeatured?: boolean;
  status: 'published' | 'draft';
}
