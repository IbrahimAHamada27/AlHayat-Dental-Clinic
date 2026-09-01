import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CasesHeroComponent } from './components/cases-hero/cases-hero.component';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { CasesService } from '../../core/services/cases.service';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, CLINIC_LOCATIONS } from '../../core/config/clinic.config';
import { DentalCase, CaseCategory } from '../../core/models/case.model';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CasesHeroComponent,
    CaseCardComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasesComponent implements OnInit {
  private readonly casesService = inject(CasesService);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);
  private readonly router = inject(Router);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;

  selectedCategory = signal<CaseCategory | 'all'>('all');

  readonly categories = this.casesService.getAvailableCategories();
  readonly allCases = this.casesService.getCases();

  filteredCases = computed(() => {
    return this.casesService.getCasesByCategory(this.selectedCategory());
  });

  featuredCase = computed(() => {
    return this.casesService.getFeaturedCases()[0] || this.allCases[0];
  });

  ngOnInit(): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'الحالات والنتائج العلاجية', url: '/cases' },
    ]);

    this.seoService.update({
      title: 'حالات ونتائج علاجية مدروسة | عيادة الحياة لطب الأسنان ببرج العرب',
      description:
        'استعرض نماذج من الحالات السريرية والنتائج العلاجية في عيادة الحياة لطب الأسنان ببرج العرب بإشراف د. معاذ سمير. تقويم، تركيبات زيركون، وعلاج عصب مدروس.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/cases`,
      keywords: [
        'حالات اسنان برج العرب',
        'نتائج تقويم الاسنان برج العرب',
        'قبل وبعد اسنان برج العرب',
        'تركيبات اسنان قبل وبعد',
        'دكتور معاذ سمير حالات',
      ],
      jsonLd: [breadcrumbsSchema, this.seoService.getDefaultClinicSchema()],
    });

    this.analyticsService.trackEvent('cases_page_view', {
      category: 'navigation',
      label: 'cases_list_loaded',
    });
  }

  setCategory(cat: CaseCategory | 'all'): void {
    this.selectedCategory.set(cat);
    this.analyticsService.trackEvent('case_filter_used', {
      category: 'engagement',
      case_category: cat,
    });
  }

  onCaseSelected(caseItem: DentalCase): void {
    this.analyticsService.trackEvent('case_card_click', {
      category: 'navigation',
      case_slug: caseItem.slug,
      case_id: caseItem.id,
      case_category: caseItem.category,
    });
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackEvent('case_booking_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    this.analyticsService.trackEvent('case_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
    });
    const msg = 'السلام عليكم، أرغب في الاستفسار عن إمكانية حجز استشارة كشف لحالة مشابهة للحالات المعروضة في عيادة الحياة.';
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    this.analyticsService.trackEvent('case_phone_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.contactService.callClinic(undefined, source);
  }

  onBranchWhatsApp(branchName: string): void {
    const msg = `السلام عليكم، أود حجز موعد استشارة كشف بالعيادة في ${branchName}.`;
    this.whatsAppService.openWhatsApp(msg, `cases_branch_${branchName}`);
  }

  onBranchCall(branchName: string): void {
    this.contactService.callClinic(undefined, `cases_branch_call_${branchName}`);
  }
}
