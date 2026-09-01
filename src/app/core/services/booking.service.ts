import { Injectable, inject } from '@angular/core';
import { CLINIC_CONFIG } from '../config/clinic.config';
import { WhatsAppService } from './whatsapp.service';
import { AnalyticsService } from './analytics.service';
import { ConsultationRequest, ConsultationResponse } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly analyticsService = inject(AnalyticsService);

  /**
   * Processes consultation request and formats structured message for WhatsApp conversion
   * Note: No sensitive health data or localStorage persistence.
   */
  requestConsultation(
    request: ConsultationRequest,
    source = 'contact_form'
  ): ConsultationResponse {
    this.analyticsService.trackEvent('contact_form_submit', {
      category: 'conversion',
      sourcePage: source,
      location_id: request.preferredLocationId,
      service_slug: request.preferredServiceSlug,
    });

    this.analyticsService.trackBookingStart(source);

    // Compose concise, polite Arabic message for reception
    let msg = `مرحباً، أود طلب حجز موعد كشف واستشارة في عيادة الحياة لطب الأسنان.\n\n`;
    msg += `• الاسم: ${request.fullName.trim()}\n`;
    msg += `• رقم الهاتف: ${request.phoneNumber.trim()}\n`;

    if (request.preferredLocationId && request.preferredLocationId !== 'no-preference') {
      const branchName =
        request.preferredLocationId === 'new-borg-el-arab'
          ? 'فرع برج العرب الجديدة (شارع الجهاز)'
          : 'فرع برج العرب القديمة (شارع الوحدة الصحية)';
      msg += `• الفرع المفضل: ${branchName}\n`;
    }

    if (request.preferredServiceSlug && request.preferredServiceSlug !== 'general') {
      msg += `• الخدمة المطلوبة: ${request.preferredServiceSlug}\n`;
    }

    if (request.notes && request.notes.trim()) {
      msg += `• ملاحظات إضافية: ${request.notes.trim()}\n`;
    }

    const whatsappUrl = this.whatsAppService.createUrl(msg);

    return {
      success: true,
      whatsappUrl,
      message: 'تم تجهيز طلب الاستشارة بنجاح.',
    };
  }
}
