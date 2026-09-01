export interface ConsultationRequest {
  fullName: string;
  phoneNumber: string;
  preferredLocationId?: string;
  preferredServiceSlug?: string;
  preferredContactMethod: 'whatsapp' | 'phone';
  notes?: string;
}

export interface ConsultationResponse {
  success: boolean;
  whatsappUrl?: string;
  message?: string;
}

export interface ContactFAQItem {
  questionAr: string;
  answerAr: string;
}
