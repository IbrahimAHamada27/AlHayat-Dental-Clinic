import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TechnologyHeroComponent } from './components/technology-hero/technology-hero.component';
import { DigitalIntroComponent } from './components/digital-intro/digital-intro.component';
import { FeaturedScannerComponent } from './components/featured-scanner/featured-scanner.component';
import { TechnologyComparisonComponent } from './components/technology-comparison/technology-comparison.component';
import { TechnologyWorkflowComponent } from './components/technology-workflow/technology-workflow.component';
import { TechnologyBenefitsComponent } from './components/technology-benefits/technology-benefits.component';
import { TechnologyServicesComponent } from './components/technology-services/technology-services.component';
import { ServiceFaqComponent } from '../services/components/service-faq/service-faq.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { INITIAL_TECHNOLOGY, INITIAL_SERVICES, CLINIC_CONFIG, CLINIC_LOCATIONS, DOCTOR_PROFILE } from '../../core/config/clinic.config';
import { TechnologyItem } from '../../core/models/content.model';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TechnologyHeroComponent,
    DigitalIntroComponent,
    FeaturedScannerComponent,
    TechnologyComparisonComponent,
    TechnologyWorkflowComponent,
    TechnologyBenefitsComponent,
    TechnologyServicesComponent,
    ServiceFaqComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly locations = CLINIC_LOCATIONS;
  readonly allTechnologies = INITIAL_TECHNOLOGY;
  readonly allServices = INITIAL_SERVICES;

  activeTechnology = signal<TechnologyItem | undefined>(undefined);

  readonly scanner = computed(() => {
    return this.allTechnologies.find((t) => t.id === 'intraoral-scanner') || this.allTechnologies[0];
  });

  readonly relatedServices = computed(() => {
    const slugs = this.scanner()?.relatedServiceSlugs || ['cosmetic-dentistry', 'orthodontics', 'restorative-dentistry'];
    return this.allServices.filter((s) => slugs.includes(s.slug));
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.allTechnologies.find((t) => t.slug === slug);
        this.activeTechnology.set(found || this.scanner());
      } else {
        this.activeTechnology.set(this.scanner());
      }

      this.configureSeo();
      this.analyticsService.trackEvent('technology_page_view', {
        category: 'navigation',
        technology_name: this.activeTechnology()?.slug || 'digital-dentistry',
      });
    });
  }

  private configureSeo(): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'طب الأسنان الرقمي', url: '/technology' },
    ]);

    const schemas: Array<Record<string, unknown>> = [
      breadcrumbsSchema,
      this.seoService.getDefaultClinicSchema(),
    ];

    if (this.scanner()?.faqs && this.scanner().faqs!.length > 0) {
      schemas.push(
        this.seoService.getFaqSchema(
          this.scanner().faqs!.map((f) => ({
            questionAr: f.questionAr,
            answerAr: f.answerAr,
          }))
        )
      );
    }

    this.seoService.update({
      title: 'طب الأسنان الرقمي والـ Intraoral Scanner في برج العرب | عيادة الحياة',
      description:
        'استكشف تقنيات طب الأسنان الرقمي والماسح الفموي Intraoral Scanner في عيادة الحياة لطب الأسنان ببرج العرب بإشراف د. معاذ سمير. مقاسات رقمية 3D دقيقة ومريحة للتركيبات والتقويم.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/technology`,
      keywords: [
        'طب الاسنان الرقمي برج العرب',
        'Intraoral Scanner برج العرب',
        'الماسح الرقمي للاسنان',
        'مقاسات الاسنان الرقمية',
        'عيادة اسنان رقمية برج العرب',
        'تركيبات الاسنان الرقمية برج العرب',
        'دكتور اسنان برج العرب',
      ],
      jsonLd: schemas,
    });
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackEvent('technology_booking_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    this.analyticsService.trackEvent('technology_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
    });
    const msg = 'السلام عليكم، أود الاستفسار عن تقنية المسح الضوئي الرقمي (Intraoral Scanner) في عيادة الحياة لطب الأسنان.';
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    this.analyticsService.trackEvent('technology_phone_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.contactService.callClinic(undefined, source);
  }

  onDoctorClick(): void {
    this.analyticsService.trackEvent('technology_doctor_click', {
      category: 'navigation',
      label: 'doctor_profile_from_tech',
    });
    this.router.navigate(['/doctor']);
  }

  onServiceClick(slug: string): void {
    this.analyticsService.trackEvent('technology_service_click', {
      category: 'navigation',
      service_name: slug,
    });
  }

  onFaqExpand(question: string): void {
    this.analyticsService.trackEvent('technology_faq_expand', {
      category: 'engagement',
      faq_question: question,
    });
  }

  onBranchWhatsApp(branchName: string): void {
    const msg = `السلام عليكم، أود حجز موعد استشارة بخصوص التقنيات الرقمية في ${branchName}.`;
    this.whatsAppService.openWhatsApp(msg, `tech_branch_${branchName}`);
  }

  onBranchCall(branchName: string): void {
    this.contactService.callClinic(undefined, `tech_branch_call_${branchName}`);
  }
}
