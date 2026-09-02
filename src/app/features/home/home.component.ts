import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeHeroComponent } from './components/hero/home-hero.component';
import { HomeTrustStripComponent } from './components/trust-strip/home-trust-strip.component';
import { HomeDoctorPreviewComponent } from './components/doctor-preview/home-doctor-preview.component';
import { HomeServicesPreviewComponent } from './components/services-preview/home-services-preview.component';
import { HomeTechnologyPreviewComponent } from './components/technology-preview/home-technology-preview.component';
import { HomeWhyClinicComponent } from './components/why-clinic/home-why-clinic.component';
import { HomeCasesPreviewComponent } from './components/cases-preview/home-cases-preview.component';
import { HomeLocationsPreviewComponent } from './components/locations-preview/home-locations-preview.component';
import { HomeArticlesPreviewComponent } from './components/articles-preview/home-articles-preview.component';
import { HomeFinalCtaComponent } from './components/final-cta/home-final-cta.component';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import {
  CLINIC_CONFIG,
  CLINIC_LOCATIONS,
  DOCTOR_PROFILE,
  INITIAL_SERVICES,
  INITIAL_CASES,
  INITIAL_ARTICLES,
} from '../../core/config/clinic.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeHeroComponent,
    HomeTrustStripComponent,
    HomeDoctorPreviewComponent,
    HomeServicesPreviewComponent,
    HomeTechnologyPreviewComponent,
    HomeWhyClinicComponent,
    HomeCasesPreviewComponent,
    HomeLocationsPreviewComponent,
    HomeArticlesPreviewComponent,
    HomeFinalCtaComponent,
  ],
  template: `
    <main class="home-page-flow">
      <!-- 1. Hero Section -->
      <app-home-hero
        [config]="config"
        [doctor]="doctor"
        [locations]="locations"
        (bookingClick)="onBookingClick($event)"
        (whatsAppClick)="onWhatsAppHeroClick()"
        (phoneClick)="onPhoneClick($event)"
      />

      <!-- 2. Trust Strip -->
      <app-home-trust-strip />

      <!-- 3. Doctor Introduction -->
      <app-home-doctor-preview
        [doctor]="doctor"
        (consultClick)="onDoctorConsultClick()"
      />

      <!-- 4. Services Section -->
      <app-home-services-preview [services]="services" />

      <!-- 5. Digital Dentistry & Technology Spotlight -->
      <app-home-technology-preview />

      <!-- 6. Why Al Hayat Clinic Philosophy -->
      <app-home-why-clinic />

      <!-- 7. Clinical Cases Preview -->
      <app-home-cases-preview [cases]="cases" />

      <!-- 8. Clinic Locations -->
      <app-home-locations-preview
        [locations]="locations"
        (whatsAppBranchClick)="onWhatsAppBranchClick($event)"
        (callBranchClick)="onCallBranchClick($event)"
      />

      <!-- 9. Educational Articles Preview -->
      <app-home-articles-preview [articles]="articles" />

      <!-- 10. Final Calm Reassuring CTA -->
      <app-home-final-cta
        [config]="config"
        (bookingClick)="onBookingClick($event)"
        (whatsAppClick)="onWhatsAppFinalClick()"
        (phoneClick)="onPhoneClick($event)"
      />
    </main>
  `,
  styles: [
    `
      .home-page-flow {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly locations = CLINIC_LOCATIONS;
  readonly services = INITIAL_SERVICES;
  readonly cases = INITIAL_CASES;
  readonly articles = INITIAL_ARTICLES;

  ngOnInit(): void {
    // 1. Configure Homepage SEO & Rich Metadata
    this.seoService.update({
      title: 'د. معاذ سمير | طبيب أسنان في برج العرب | عيادة الحياة لطب الأسنان',
      description:
        'عيادة الحياة لطب الأسنان بإشراف د. معاذ سمير في برج العرب. رعاية متكاملة لصحة الفم وتقويم وتجميل الأسنان وحشو العصب بالتقنيات الرقمية بفرعينا بالجديدة والقديمة.',
      canonical: CLINIC_CONFIG.defaultSeo.siteUrl,
      keywords: [
        'د معاذ',
        'د معاذ سمير',
        'دكتور معاذ',
        'دكتور معاذ سمير',
        'د اسنان',
        'دكتور اسنان',
        'د اسنان برج العرب',
        'دكتور اسنان برج العرب',
        'دكتور أسنان برج العرب الجديدة',
        'دكتور أسنان برج العرب القديمة',
        'عيادة اسنان برج العرب',
        'عيادة اسنان في برج العرب',
        'عيادة اسنان برج العرب الجديدة',
        'عيادة اسنان برج العرب القديمة',
        'افضل دكتور اسنان في برج العرب',
        'احسن عيادة اسنان ببرج العرب',
        'عيادة الحياة لطب الأسنان',
        'تقويم اسنان برج العرب',
        'حشو عصب برج العرب',
        'تركيبات زيركون برج العرب',
        'تنظيف جير الاسنان برج العرب',
        'طب اسنان الاطفال برج العرب',
        'Dr Moaz Samir',
        'Dentist in Borg El Arab',
        'Al Hayat Dental Clinic',
      ],
      jsonLd: this.seoService.getDefaultClinicSchema(),
    });

    // 2. Dispatch homepage view analytics
    this.analyticsService.trackEvent('home_view', {
      category: 'navigation',
      label: 'homepage_loaded',
    });
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppHeroClick(): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, 'homepage_hero');
  }

  onDoctorConsultClick(): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, 'homepage_doctor_section');
  }

  onWhatsAppBranchClick(branchName: string): void {
    const msg = this.whatsAppService.getLocationInquiryMessage(branchName);
    this.whatsAppService.openWhatsApp(msg, `homepage_branch_${branchName}`);
  }

  onCallBranchClick(branchName: string): void {
    this.contactService.callClinic(undefined, `homepage_branch_call_${branchName}`);
  }

  onWhatsAppFinalClick(): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, 'homepage_final_cta');
  }

  onPhoneClick(source: string): void {
    this.contactService.callClinic(undefined, source);
  }
}
