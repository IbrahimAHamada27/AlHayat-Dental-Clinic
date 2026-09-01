import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { IconComponent } from '../../ui/icon/icon.component';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { ContactService } from '../../../../core/services/contact.service';
import { AnalyticsService } from '../../../../core/services/analytics.service';
import { CLINIC_CONFIG } from '../../../../core/config/clinic.config';

@Component({
  selector: 'app-mobile-contact-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './mobile-contact-bar.component.html',
  styleUrls: ['./mobile-contact-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileContactBarComponent {
  private readonly router = inject(Router);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);
  private readonly analyticsService = inject(AnalyticsService);

  readonly config = CLINIC_CONFIG;

  onCallClick(): void {
    this.contactService.callClinic(undefined, 'mobile_sticky_bar');
  }

  onWhatsAppClick(): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, 'mobile_sticky_bar');
  }

  onBookClick(): void {
    this.analyticsService.trackBookingStart('mobile_sticky_bar');
    this.router.navigate(['/contact']);
  }
}
