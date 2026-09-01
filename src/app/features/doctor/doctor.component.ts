import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DoctorHeroComponent } from './components/doctor-hero/doctor-hero.component';
import { DoctorIntroductionComponent } from './components/doctor-introduction/doctor-introduction.component';
import { ClinicalApproachComponent } from './components/clinical-approach/clinical-approach.component';
import { DoctorInterestsComponent } from './components/doctor-interests/doctor-interests.component';
import { AcademicTimelineComponent } from './components/academic-timeline/academic-timeline.component';
import { ContinuousLearningComponent } from './components/continuous-learning/continuous-learning.component';
import { DoctorTechnologyComponent } from './components/doctor-technology/doctor-technology.component';
import { DoctorPhilosophyComponent } from './components/doctor-philosophy/doctor-philosophy.component';
import { ClinicConnectionComponent } from './components/clinic-connection/clinic-connection.component';
import { DoctorLocationsComponent } from './components/doctor-locations/doctor-locations.component';
import { DoctorCtaComponent } from './components/doctor-cta/doctor-cta.component';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { DOCTOR_PROFILE, CLINIC_CONFIG, CLINIC_LOCATIONS } from '../../core/config/clinic.config';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DoctorHeroComponent,
    DoctorIntroductionComponent,
    ClinicalApproachComponent,
    DoctorInterestsComponent,
    AcademicTimelineComponent,
    ContinuousLearningComponent,
    DoctorTechnologyComponent,
    DoctorPhilosophyComponent,
    ClinicConnectionComponent,
    DoctorLocationsComponent,
    DoctorCtaComponent,
  ],
  template: `
    <main class="doctor-page-flow">
      <!-- 1. Doctor Hero Section -->
      <app-doctor-hero
        [doctor]="doctor"
        [config]="config"
        (bookingClick)="onBookingClick($event)"
        (whatsAppClick)="onWhatsAppClick($event)"
        (phoneClick)="onPhoneClick($event)"
      />

      <!-- 2. Professional Introduction & Principles -->
      <app-doctor-introduction [doctor]="doctor" />

      <!-- 3. Clinical Approach & 5-Step Process Timeline -->
      <app-clinical-approach />

      <!-- 4. Areas of Interest linked to Services -->
      <app-doctor-interests
        [interests]="doctor.areasOfInterest || []"
        (serviceClick)="onServiceInterestClick($event)"
      />

      <!-- 5. Academic & Professional Journey (Data-driven & Transparent) -->
      <app-academic-timeline [doctor]="doctor" />

      <!-- 6. Continuous Learning & Evidence-based Practice -->
      <app-continuous-learning />

      <!-- 7. Technology & Intraoral Scanner Spotlight -->
      <app-doctor-technology (technologyClick)="onTechnologyClick()" />

      <!-- 8. Personal Philosophy Statement -->
      <app-doctor-philosophy />

      <!-- 9. Connection to Al Hayat Dental Clinic -->
      <app-clinic-connection [doctor]="doctor" [config]="config" />

      <!-- 10. Dual Practice Locations in Borg El Arab -->
      <app-doctor-locations
        [locations]="locations"
        (whatsAppBranchClick)="onLocationWhatsApp($event)"
        (callBranchClick)="onLocationCall($event)"
      />

      <!-- 11. Final Reassuring Consultation CTA -->
      <app-doctor-cta
        [config]="config"
        [doctor]="doctor"
        (bookingClick)="onBookingClick($event)"
        (whatsAppClick)="onWhatsAppClick($event)"
        (phoneClick)="onPhoneClick($event)"
      />
    </main>
  `,
  styles: [
    `
      .doctor-page-flow {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly doctor = DOCTOR_PROFILE;
  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;

  ngOnInit(): void {
    // 1. Structured Data: Person, Physician & Breadcrumbs
    const personSchema = this.seoService.getDoctorPersonSchema(this.doctor);
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'عن الدكتور', url: '/doctor' },
    ]);

    // 2. Doctor SEO Metadata Setup
    this.seoService.update({
      title: `${this.doctor.nameAr} | طبيب أسنان في برج العرب`,
      description: `تعرف على ${this.doctor.nameAr} في عيادة الحياة لطب الأسنان ببرج العرب. رعاية متكاملة لصحة الفم وتقويم الأسنان وعلاج الجذور والتركيبات التجميلية مع تقنيات طب الأسنان الرقمي.`,
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/doctor`,
      ogType: 'profile',
      keywords: [
        'دكتور معاذ سمير',
        'د. معاذ سمير',
        'طبيب أسنان معاذ سمير',
        'دكتور أسنان برج العرب',
        'دكتور معاذ سمير برج العرب',
        'عيادة د. معاذ سمير',
        'عيادة الحياة د. معاذ سمير',
        'Dr Moaz Samir',
        'Dr Moaz Samir dentist',
        'Dr Moaz Samir Borg El Arab',
        'Moaz Samir dentist',
        'Al Hayat Dental Clinic',
      ],
      jsonLd: [personSchema, breadcrumbsSchema],
    });

    // 3. Analytics Tracking
    this.analyticsService.trackEvent('doctor_page_view', {
      category: 'navigation',
      label: 'doctor_profile_loaded',
    });
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackEvent('doctor_booking_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    this.analyticsService.trackEvent('doctor_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
    });
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    this.analyticsService.trackEvent('doctor_phone_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.contactService.callClinic(undefined, source);
  }

  onServiceInterestClick(slug: string): void {
    this.analyticsService.trackEvent('doctor_service_click', {
      category: 'navigation',
      service_name: slug,
    });
  }

  onTechnologyClick(): void {
    this.analyticsService.trackEvent('doctor_technology_click', {
      category: 'navigation',
      label: 'doctor_technology_link',
    });
  }

  onLocationWhatsApp(branchName: string): void {
    this.analyticsService.trackEvent('doctor_location_click', {
      category: 'conversion',
      location_name: branchName,
      label: 'doctor_location_whatsapp',
    });
    const msg = this.whatsAppService.getLocationInquiryMessage(branchName);
    this.whatsAppService.openWhatsApp(msg, `doctor_page_branch_${branchName}`);
  }

  onLocationCall(branchName: string): void {
    this.analyticsService.trackEvent('doctor_location_click', {
      category: 'conversion',
      location_name: branchName,
      label: 'doctor_location_call',
    });
    this.contactService.callClinic(undefined, `doctor_page_branch_${branchName}`);
  }
}
