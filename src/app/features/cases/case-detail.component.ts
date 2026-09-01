import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BeforeAfterSliderComponent } from './components/before-after-slider/before-after-slider.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { CasesService } from '../../core/services/cases.service';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, CLINIC_LOCATIONS, INITIAL_SERVICES } from '../../core/config/clinic.config';
import { DentalCase } from '../../core/models/case.model';

@Component({
  selector: 'app-case-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BeforeAfterSliderComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
    BadgeComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly casesService = inject(CasesService);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;
  readonly allServices = INITIAL_SERVICES;

  activeCase = signal<DentalCase | undefined>(undefined);

  readonly relatedServices = computed(() => {
    const slugs = this.activeCase()?.relatedServiceSlugs || [];
    return this.allServices.filter((s) => slugs.includes(s.slug));
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.casesService.getCaseBySlug(slug);
        this.activeCase.set(found);

        if (found) {
          this.configureSeo(found);
          this.analyticsService.trackEvent('case_view', {
            category: 'navigation',
            case_slug: found.slug,
            case_id: found.id,
            case_category: found.category,
          });
        } else {
          this.configureNotFoundSeo();
        }
      }
    });
  }

  private configureSeo(caseItem: DentalCase): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'الحالات والنتائج العلاجية', url: '/cases' },
      { name: caseItem.titleAr, url: `/cases/${caseItem.slug}` },
    ]);

    this.seoService.update({
      title: `${caseItem.titleAr} | حالات عيادة الحياة لطب الأسنان`,
      description: `${caseItem.shortDescriptionAr} استعرض تفاصيل الإجراءات والنتائج العلاجية في عيادة الحياة ببرج العرب بإشراف د. معاذ سمير.`,
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/cases/${caseItem.slug}`,
      keywords: [
        caseItem.titleAr,
        caseItem.categoryAr,
        'حالات اسنان برج العرب',
        'دكتور معاذ سمير',
        'عيادة الحياة لطب الأسنان',
      ],
      jsonLd: [breadcrumbsSchema, this.seoService.getDefaultClinicSchema()],
    });
  }

  private configureNotFoundSeo(): void {
    this.seoService.update({
      title: 'الحالة غير موجودة | عيادة الحياة لطب الأسنان',
      description: 'عذراً، لم نتمكن من العثور على الحالة السريرية المطلوبة.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/cases`,
    });
  }

  onBookingClick(source: string): void {
    const currentCase = this.activeCase();
    this.analyticsService.trackEvent('case_booking_click', {
      category: 'conversion',
      cta_location: source,
      case_slug: currentCase?.slug,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    const currentCase = this.activeCase();
    this.analyticsService.trackEvent('case_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
      case_slug: currentCase?.slug,
    });
    const msg = `السلام عليكم، أود الاستفسار عن إمكانية حجز استشارة كشف لحالة مشابهة لحالة (${currentCase?.titleAr || 'الحالات المعروضة'}).`;
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    const currentCase = this.activeCase();
    this.analyticsService.trackEvent('case_phone_click', {
      category: 'conversion',
      cta_location: source,
      case_slug: currentCase?.slug,
    });
    this.contactService.callClinic(undefined, source);
  }

  onBranchWhatsApp(branchName: string): void {
    const msg = `السلام عليكم، أود حجز موعد استشارة كشف بالعيادة في ${branchName}.`;
    this.whatsAppService.openWhatsApp(msg, `case_detail_branch_${branchName}`);
  }

  onBranchCall(branchName: string): void {
    this.contactService.callClinic(undefined, `case_detail_branch_call_${branchName}`);
  }
}
