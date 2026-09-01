import { Injectable } from '@angular/core';
import { DentalCase, CaseCategory } from '../models/case.model';
import { DENTAL_CASES } from '../data/cases.data';

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  private readonly cases: DentalCase[] = DENTAL_CASES;

  /**
   * Returns all active clinical cases with confirmed patient consent
   */
  getCases(): readonly DentalCase[] {
    return this.cases.filter((c) => c.consentConfirmed !== false);
  }

  /**
   * Returns cases marked as featured for homepage and spotlight sections
   */
  getFeaturedCases(): readonly DentalCase[] {
    return this.getCases().filter((c) => c.isFeatured);
  }

  /**
   * Filters cases by clinical category
   */
  getCasesByCategory(category: CaseCategory | 'all'): readonly DentalCase[] {
    if (category === 'all') {
      return this.getCases();
    }
    return this.getCases().filter((c) => c.category === category);
  }

  /**
   * Resolves a single case by its URL slug
   */
  getCaseBySlug(slug: string): DentalCase | undefined {
    return this.getCases().find((c) => c.slug === slug);
  }

  /**
   * Returns distinct categories available among published cases
   */
  getAvailableCategories(): Array<{ id: CaseCategory | 'all'; labelAr: string }> {
    const cats = new Set(this.getCases().map((c) => c.category));
    const list: Array<{ id: CaseCategory | 'all'; labelAr: string }> = [
      { id: 'all', labelAr: 'كافة الحالات' },
    ];

    if (cats.has('orthodontics')) list.push({ id: 'orthodontics', labelAr: 'تقويم الأسنان' });
    if (cats.has('cosmetic')) list.push({ id: 'cosmetic', labelAr: 'تجميل وتركيبات الأسنان' });
    if (cats.has('endodontics')) list.push({ id: 'endodontics', labelAr: 'علاج الجذور وحشو العصب' });
    if (cats.has('restorative')) list.push({ id: 'restorative', labelAr: 'العلاجات الترميمية' });

    return list;
  }
}
