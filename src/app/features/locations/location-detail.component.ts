import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { LocationsService } from '../../core/services/locations.service';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, DOCTOR_PROFILE, INITIAL_SERVICES } from '../../core/config/clinic.config';
import { ClinicLocation } from '../../core/models/location.model';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LocationMapComponent,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly locationsService = inject(LocationsService);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly allLocations = this.locationsService.getLocations();
  readonly allServices = INITIAL_SERVICES;

  activeLocation = signal<ClinicLocation | undefined>(undefined);

  readonly otherLocations = computed(() => {
    const currentId = this.activeLocation()?.id;
    return this.allLocations.filter((l) => l.id !== currentId);
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.locationsService.getLocationBySlug(slug);
        this.activeLocation.set(found);

        if (found) {
          this.configureSeo(found);
          this.analyticsService.trackEvent('location_page_view', {
            category: 'navigation',
            location_name: found.nameAr,
            location_id: found.id,
            location_slug: found.slug,
          });
        } else {
          this.configureNotFoundSeo();
        }
      }
    });
  }

  private configureSeo(loc: ClinicLocation): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'فروع العيادة', url: '/locations' },
      { name: loc.nameAr, url: `/locations/${loc.slug}` },
    ]);

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: `عيادة الحياة لطب الأسنان — ${loc.nameAr}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.addressAr,
        addressLocality: loc.districtAr,
        addressRegion: loc.cityAr,
        addressCountry: 'EG',
      },
      telephone: loc.phone,
      url: `${CLINIC_CONFIG.defaultSeo.siteUrl}/locations/${loc.slug}`,
      priceRange: '$$',
    };

    this.seoService.update({
      title: `${loc.nameAr} | عيادة الحياة لطب الأسنان ببرج العرب`,
      description: `تفضل بزيارة عيادة الحياة لطب الأسنان بـ ${loc.nameAr} (${loc.addressAr}). رعاية متكاملة، تقويم، وتركيبات بإشراف د. معاذ سمير.`,
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/locations/${loc.slug}`,
      keywords: [
        `دكتور اسنان ${loc.shortNameAr || loc.districtAr}`,
        `عيادة اسنان ${loc.shortNameAr || loc.districtAr}`,
        `عنوان عيادة اسنان ${loc.shortNameAr || loc.districtAr}`,
        'دكتور معاذ سمير',
        'عيادة الحياة لطب الاسنان',
      ],
      jsonLd: [breadcrumbsSchema, localBusinessSchema],
    });
  }

  private configureNotFoundSeo(): void {
    this.seoService.update({
      title: 'الفرع غير موجود | عيادة الحياة لطب الأسنان',
      description: 'عذراً، لم نتمكن من العثور على الفرع المطلوب.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/locations`,
    });
  }

  onDirectionsClick(): void {
    const loc = this.activeLocation();
    if (!loc) return;

    this.analyticsService.trackEvent('location_directions_click', {
      category: 'engagement',
      location_name: loc.nameAr,
      location_id: loc.id,
      location_slug: loc.slug,
    });

    if (loc.googleMapsUrl) {
      window.open(loc.googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  }

  onWhatsAppClick(source: string): void {
    const loc = this.activeLocation();
    this.analyticsService.trackEvent('location_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
      location_name: loc?.nameAr,
      location_id: loc?.id,
      location_slug: loc?.slug,
    });
    const msg = `السلام عليكم، أود حجز موعد كشف في ${loc?.nameAr || 'عيادة الحياة لطب الأسنان'}.`;
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    const loc = this.activeLocation();
    this.analyticsService.trackEvent('location_phone_click', {
      category: 'conversion',
      cta_location: source,
      location_name: loc?.nameAr,
      location_id: loc?.id,
      location_slug: loc?.slug,
    });
    this.contactService.callClinic(undefined, source);
  }

  onBookingClick(source: string): void {
    const loc = this.activeLocation();
    this.analyticsService.trackEvent('location_booking_click', {
      category: 'conversion',
      cta_location: source,
      location_name: loc?.nameAr,
      location_id: loc?.id,
      location_slug: loc?.slug,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }
}
