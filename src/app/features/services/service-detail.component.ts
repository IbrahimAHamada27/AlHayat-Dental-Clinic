import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceProcessComponent } from './components/service-process/service-process.component';
import { ServiceFaqComponent } from './components/service-faq/service-faq.component';
import { RelatedServicesComponent } from './components/related-services/related-services.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { ServiceItem } from '../../core/models/service.model';
import { INITIAL_SERVICES, CLINIC_CONFIG, CLINIC_LOCATIONS } from '../../core/config/clinic.config';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ServiceProcessComponent,
    ServiceFaqComponent,
    RelatedServicesComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
    BadgeComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;
  readonly allServices = INITIAL_SERVICES;

  service = signal<ServiceItem | undefined>(undefined);

  relatedServices = computed(() => {
    const s = this.service();
    if (!s || !s.relatedServiceSlugs) {
      return this.allServices.filter((item) => item.id !== s?.id).slice(0, 3);
    }
    return this.allServices.filter((item) => s.relatedServiceSlugs!.includes(item.slug));
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const found = this.allServices.find((s) => s.slug === slug && s.isActive !== false);
      this.service.set(found);

      if (found) {
        this.applySeo(found);
        this.analyticsService.trackEvent('service_view', {
          category: 'navigation',
          service_name: found.slug,
          label: found.titleAr,
        });
      } else {
        this.seoService.update({
          title: 'الخدمة غير موجودة | عيادة الحياة',
          description: 'عذراً، لم نتمكن من العثور على الخدمة المطلوبة في عيادة الحياة لطب الأسنان.',
          robots: 'noindex, follow',
        });
      }
    });
  }

  private applySeo(service: ServiceItem): void {
    const canonicalUrl = `${CLINIC_CONFIG.defaultSeo.siteUrl}/services/${service.slug}`;
    const pageTitle = service.seo?.title || `${service.titleAr} في برج العرب | د. معاذ سمير | عيادة الحياة`;
    const pageDescription = service.seo?.description || `${service.overviewAr} متوفر في عيادة الحياة لطب الأسنان ببرج العرب الجديدة وبرج العرب القديمة.`;

    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'الخدمات', url: '/services' },
      { name: service.titleAr, url: `/services/${service.slug}` },
    ]);

    const serviceSchema = this.seoService.getServiceSchema(service);

    const schemas: Array<Record<string, unknown>> = [breadcrumbsSchema, serviceSchema];

    if (service.faqs && service.faqs.length > 0) {
      schemas.push(this.seoService.getFaqSchema(service.faqs));
    }

    this.seoService.update({
      title: pageTitle,
      description: pageDescription,
      canonical: canonicalUrl,
      keywords: service.seo?.keywords || [
        `${service.titleAr} برج العرب`,
        'عيادة اسنان برج العرب',
        'دكتور معاذ سمير',
      ],
      jsonLd: schemas,
    });
  }

  onBookingClick(serviceTitle: string, source: string): void {
    this.analyticsService.trackEvent('service_booking_click', {
      category: 'conversion',
      service_name: this.service()?.slug,
      cta_location: source,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(serviceTitle: string, source: string): void {
    this.analyticsService.trackEvent('service_whatsapp_click', {
      category: 'conversion',
      service_name: this.service()?.slug,
      cta_location: source,
    });
    const msg = this.whatsAppService.getServiceInquiryMessage(serviceTitle);
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    this.analyticsService.trackEvent('service_phone_click', {
      category: 'conversion',
      service_name: this.service()?.slug,
      cta_location: source,
    });
    this.contactService.callClinic(undefined, source);
  }

  onFaqExpand(question: string): void {
    this.analyticsService.trackEvent('service_faq_expand', {
      category: 'engagement',
      service_name: this.service()?.slug,
      faq_question: question,
    });
  }

  onRelatedServiceClick(slug: string): void {
    this.analyticsService.trackEvent('related_service_click', {
      category: 'navigation',
      service_name: slug,
      label: `from_${this.service()?.slug}`,
    });
  }

  onBranchWhatsApp(branchName: string, serviceTitle: string): void {
    const msg = `السلام عليكم، أود حجز موعد لخدمة ${serviceTitle} في ${branchName}.`;
    this.whatsAppService.openWhatsApp(msg, `service_branch_${branchName}`);
  }

  onBranchCall(branchName: string): void {
    this.contactService.callClinic(undefined, `service_branch_call_${branchName}`);
  }
}
