import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../ui/icon/icon.component';
import { CLINIC_CONFIG, CLINIC_LOCATIONS } from '../../../../core/config/clinic.config';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { ContactService } from '../../../../core/services/contact.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'عن الدكتور', path: '/doctor' },
    { label: 'الخدمات العلاجية', path: '/services' },
    { label: 'التقنيات الحديثة', path: '/technology' },
    { label: 'الحالات والنتائج', path: '/cases' },
    { label: 'المقالات الطبية', path: '/blog' },
    { label: 'الفروع ومواعيد العمل', path: '/locations' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  readonly legalLinks = [
    { label: 'سياسة الخصوصية', path: '/privacy' },
    { label: 'الشروط والأحكام', path: '/terms' },
    { label: 'إخلاء المسؤولية الطبية', path: '/medical-disclaimer' },
  ];

  onWhatsAppClick(): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, 'footer_whatsapp');
  }

  onPhoneClick(): void {
    this.contactService.callClinic(undefined, 'footer_phone');
  }
}
