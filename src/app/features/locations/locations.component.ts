import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LocationHeroComponent } from './components/location-hero/location-hero.component';
import { ClinicLocationCardComponent } from './components/clinic-location-card/clinic-location-card.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { LocationsService } from '../../core/services/locations.service';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, DOCTOR_PROFILE, INITIAL_SERVICES } from '../../core/config/clinic.config';
import { ClinicLocation } from '../../core/models/location.model';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LocationHeroComponent,
    ClinicLocationCardComponent,
    LocationMapComponent,
    ButtonComponent,
    IconComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsComponent implements OnInit {
  private readonly locationsService = inject(LocationsService);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);
  private readonly router = inject(Router);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly locations = this.locationsService.getLocations();
  readonly services = INITIAL_SERVICES;

  selectedLocation = signal<ClinicLocation>(this.locationsService.getPrimaryLocation());

  ngOnInit(): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'فروع العيادة', url: '/locations' },
    ]);

    this.seoService.update({
      title: 'فروع عيادة الحياة لطب الأسنان ببرج العرب | د. معاذ سمير',
      description:
        'تعرف على عناوين وفروع عيادة الحياة لطب الأسنان ببرج العرب الجديدة وبرج العرب القديمة بإشراف د. معاذ سمير. إرشادات الوصول وأرقام الحجز المباشر.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/locations`,
      keywords: [
        'دكتور اسنان برج العرب',
        'عيادة اسنان برج العرب الجديدة',
        'دكتور اسنان برج العرب القديمة',
        'عنوان عيادة الحياة لطب الاسنان',
        'تقويم اسنان برج العرب',
        'دكتور معاذ سمير برج العرب',
      ],
      jsonLd: [breadcrumbsSchema, this.seoService.getDefaultClinicSchema()],
    });

    this.analyticsService.trackEvent('location_page_view', {
      category: 'navigation',
      label: 'locations_index_viewed',
    });
  }

  onSelectMapLocation(loc: ClinicLocation): void {
    this.selectedLocation.set(loc);
  }

  onDirectionsClick(loc: ClinicLocation): void {
    this.analyticsService.trackEvent('location_directions_click', {
      category: 'engagement',
      location_name: loc.nameAr,
      location_id: loc.id,
      location_slug: loc.slug,
    });
  }

  onPhoneClick(loc: ClinicLocation): void {
    this.analyticsService.trackEvent('location_phone_click', {
      category: 'conversion',
      location_name: loc.nameAr,
      location_id: loc.id,
      location_slug: loc.slug,
    });
    this.contactService.callClinic(undefined, `loc_card_${loc.slug}`);
  }

  onWhatsAppClick(loc: ClinicLocation): void {
    this.analyticsService.trackEvent('location_whatsapp_click', {
      category: 'conversion',
      location_name: loc.nameAr,
      location_id: loc.id,
      location_slug: loc.slug,
    });
    const msg = `السلام عليكم، أود حجز موعد استشارة كشف في ${loc.nameAr}.`;
    this.whatsAppService.openWhatsApp(msg, `loc_card_${loc.slug}`);
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackEvent('location_booking_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onDirectCall(source: string): void {
    this.contactService.callClinic(undefined, source);
  }

  onDirectWhatsApp(source: string): void {
    const msg = 'السلام عليكم، أود الاستفسار عن أقرب فرع لعيادة الحياة لطب الأسنان ببرج العرب.';
    this.whatsAppService.openWhatsApp(msg, source);
  }
}
