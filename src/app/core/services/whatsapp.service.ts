import { Injectable, inject } from '@angular/core';
import { CLINIC_CONFIG } from '../config/clinic.config';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root',
})
export class WhatsAppService {
  private readonly analyticsService = inject(AnalyticsService);

  private readonly basePhone = CLINIC_CONFIG.contact.whatsappRaw;

  /**
   * Generates a direct WhatsApp web/mobile URL with encoded message
   */
  createUrl(message?: string): string {
    const text = message ? encodeURIComponent(message) : '';
    return `https://wa.me/${this.basePhone}${text ? `?text=${text}` : ''}`;
  }

  /**
   * Pre-composed message for general booking & consultation
   */
  getBookingMessage(branchName?: string): string {
    if (branchName) {
      return `مرحباً، أود حجز موعد كشف واستشارة في عيادة الحياة لطب الأسنان (${branchName}).`;
    }
    return `مرحباً، أود حجز موعد كشف واستشارة لدى د. معاذ سمير في عيادة الحياة لطب الأسنان.`;
  }

  /**
   * Pre-composed message for specific service inquiry
   */
  getServiceInquiryMessage(serviceTitle: string): string {
    return `مرحباً، أود الاستفسار عن تفاصيل ومواعيد خدمة (${serviceTitle}) في عيادة الحياة لطب الأسنان.`;
  }

  /**
   * Pre-composed message for branch location inquiry
   */
  getLocationInquiryMessage(locationName: string): string {
    return `مرحباً، أود الاستفسار عن مواعيد العمل وتفاصيل العنوان لـ (${locationName}).`;
  }

  /**
   * Opens WhatsApp directly in new tab and triggers conversion tracking
   */
  openWhatsApp(message?: string, context = 'general'): void {
    const url = this.createUrl(message);
    this.analyticsService.trackWhatsAppClick(context);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
