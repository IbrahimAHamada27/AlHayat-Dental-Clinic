import { Component, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { ContactService } from '../../../../core/services/contact.service';
import { AnalyticsService } from '../../../../core/services/analytics.service';
import { CLINIC_CONFIG } from '../../../../core/config/clinic.config';

@Component({
  selector: 'app-consultation-cta',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './consultation-cta.component.html',
  styleUrls: ['./consultation-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultationCTAComponent {
  private readonly router = inject(Router);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);
  private readonly analyticsService = inject(AnalyticsService);

  readonly config = CLINIC_CONFIG;

  eyebrow = input<string>('حجز موعد واستشارة');
  title = input<string>('هل ترغب في فحص واستشارة دقيقة لأسنانك؟');
  description = input<string>(
    'يسعدنا استقبالك في عيادة الحياة لطب الأسنان بفرعي برج العرب الجديدة وبرج العرب القديمة بإشراف د. معاذ سمير.'
  );
  serviceSlug = input<string | undefined>(undefined);
  locationId = input<string | undefined>(undefined);
  context = input<string>('global_consultation_cta');

  onBookingClick(): void {
    this.analyticsService.trackEvent('consultation_cta_click', {
      category: 'conversion',
      cta_location: this.context(),
      service_slug: this.serviceSlug(),
      location_id: this.locationId(),
    });
    this.analyticsService.trackBookingStart(this.context());

    const queryParams: Record<string, string> = {};
    if (this.serviceSlug()) queryParams['service'] = this.serviceSlug()!;
    if (this.locationId()) queryParams['location'] = this.locationId()!;

    this.router.navigate(['/contact'], { queryParams });
  }

  onWhatsAppClick(): void {
    this.analyticsService.trackEvent('whatsapp_click', {
      category: 'conversion',
      cta_location: this.context(),
    });
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, this.context());
  }

  onPhoneClick(): void {
    this.analyticsService.trackEvent('phone_click', {
      category: 'conversion',
      cta_location: this.context(),
    });
    this.contactService.callClinic(undefined, this.context());
  }
}
