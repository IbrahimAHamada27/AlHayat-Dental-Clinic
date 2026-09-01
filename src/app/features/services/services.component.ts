import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ServicesHeroComponent } from './components/services-hero/services-hero.component';
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
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ServicesHeroComponent,
    ButtonComponent,
    IconComponent,
    CardComponent,
    BadgeComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;
  readonly allServices = INITIAL_SERVICES;

  selectedCategory = signal<string>('all');

  readonly categories = [
    { id: 'all', labelAr: 'كافة الخدمات' },
    { id: 'تقويم الأسنان', labelAr: 'تقويم الأسنان' },
    { id: 'العلاجات الترميمية', labelAr: 'العلاجات الترميمية وعصب الأسنان' },
    { id: 'تجميل الأسنان والتركيبات', labelAr: 'تجميل الأسنان والتركيبات' },
    { id: 'العناية الوقائية', labelAr: 'تنظيف وصحة اللثة' },
    { id: 'رعاية الأطفال', labelAr: 'طب أسنان الأطفال' },
  ];

  filteredServices = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') {
      return this.allServices;
    }
    return this.allServices.filter((s) => s.categoryAr === cat);
  });

  featuredService = computed(() => {
    return this.allServices.find((s) => s.isFeatured && s.id === 'orthodontics') || this.allServices[0];
  });

  ngOnInit(): void {
    // 1. Configure SEO metadata & Breadcrumbs
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'الخدمات', url: '/services' },
    ]);

    this.seoService.update({
      title: 'خدمات طب وتجميل وتقويم الأسنان في برج العرب | عيادة الحياة',
      description:
        'استكشف كافة الخدمات الطبية والعلاجية في عيادة الحياة لطب الأسنان ببرج العرب: تقويم الأسنان، حشو وعلاج الجذور، تجميل وزلكون الأسنان، وتنظيف اللثة الرقمي.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/services`,
      keywords: [
        'خدمات عيادة الاسنان برج العرب',
        'تقويم الاسنان برج العرب',
        'حشو تجميلي برج العرب',
        'علاج عصب برج العرب',
        'تركيبات اسنان برج العرب',
        'تنظيف جير الاسنان برج العرب',
      ],
      jsonLd: breadcrumbsSchema,
    });

    // 2. Dispatch analytics
    this.analyticsService.trackEvent('services_page_view', {
      category: 'navigation',
      label: 'services_list_loaded',
    });
  }

  setCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }

  onServiceCardClick(service: ServiceItem): void {
    this.analyticsService.trackEvent('service_card_click', {
      category: 'navigation',
      service_name: service.slug,
    });
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    this.contactService.callClinic(undefined, source);
  }

  onBranchWhatsApp(branchName: string): void {
    const msg = this.whatsAppService.getLocationInquiryMessage(branchName);
    this.whatsAppService.openWhatsApp(msg, `services_branch_${branchName}`);
  }

  onBranchCall(branchName: string): void {
    this.contactService.callClinic(undefined, `services_branch_call_${branchName}`);
  }
}
