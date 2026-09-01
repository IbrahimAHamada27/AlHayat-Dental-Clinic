import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactHeroComponent } from './components/contact-hero/contact-hero.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfoCardComponent } from './components/contact-info-card/contact-info-card.component';
import { ClinicLocationCardComponent } from '../locations/components/clinic-location-card/clinic-location-card.component';
import { ServiceFaqComponent } from '../services/components/service-faq/service-faq.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, CLINIC_LOCATIONS, DOCTOR_PROFILE } from '../../core/config/clinic.config';
import { ClinicLocation } from '../../core/models/location.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactHeroComponent,
    ContactFormComponent,
    ContactInfoCardComponent,
    ClinicLocationCardComponent,
    ServiceFaqComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly locations = CLINIC_LOCATIONS;

  preselectedService = signal<string>('general');
  preselectedLocation = signal<string>('no-preference');

  readonly contactFaqs = [
    {
      questionAr: 'كيف يمكنني حجز موعد كشف أو استشارة في عيادة الحياة؟',
      answerAr:
        'يمكنك طلب موعدك بسهولة عبر إرسال رسالة واتساب مباشرة أو الاتصال هاتفياً بالعيادة على الرقم 01501701514، أو ملء نموذج طلب الاستشارة بهذه الصفحة ليتواصل معك فريق الاستقبال لتنسيق الموعد المناسب.',
    },
    {
      questionAr: 'أين تقع فروع عيادة الحياة لطب الأسنان؟',
      answerAr:
        'تخدم العيادة أهالي برج العرب من خلال فرعين: الفرع الأول ببرج العرب الجديدة (شارع الجهاز – أعلى صيدلية د. رشا – الدور الأول بجوار سيتي لاب)، والفرع الثاني ببرج العرب القديمة (شارع الوحدة الصحية – خلف مكتب البريد وخلف مسجد التقوى).',
    },
    {
      questionAr: 'هل يلزم حجز موعد مسبق قبل الحضور للعيادة؟',
      answerAr:
        'يُفضل دائماً التنسيق المسبق عبر واتساب أو الهاتف لضمان توفير الوقت الكافي لفحص حالتك بدقة وتقليل فترات الانتظار.',
    },
    {
      questionAr: 'ماذا أفعل في الحالات الطارئة أو ألم الأسنان الحاد؟',
      answerAr:
        'في حال وجود ألم طارئ أو كسر مفاجئ، يُرجى الاتصال المباشر برقم العيادة هاتفياً للاستفسار عن أقرب وقت متاح لاستقبال حالتك وتخفيف الألم.',
    },
  ];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const srv = params.get('service');
      const loc = params.get('location');
      if (srv) this.preselectedService.set(srv);
      if (loc) this.preselectedLocation.set(loc);
    });

    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'تواصل معنا', url: '/contact' },
    ]);

    const faqSchema = this.seoService.getFaqSchema(this.contactFaqs);

    this.seoService.update({
      title: 'تواصل معنا وحجز موعد | عيادة الحياة لطب الأسنان — د. معاذ سمير',
      description:
        'تواصل مع عيادة الحياة لطب الأسنان ببرج العرب الجديدة وبرج العرب القديمة بإشراف د. معاذ سمير. احجز استشارتك عبر واتساب أو الهاتف: 01501701514.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/contact`,
      keywords: [
        'حجز دكتور اسنان برج العرب',
        'عيادة اسنان برج العرب الجديدة',
        'رقم عيادة اسنان برج العرب',
        'دكتور معاذ سمير حجز',
        'تواصل عيادة الحياة لطب الاسنان',
      ],
      jsonLd: [
        breadcrumbsSchema,
        this.seoService.getDefaultClinicSchema(),
        faqSchema,
      ],
    });

    this.analyticsService.trackEvent('contact_page_view', {
      category: 'navigation',
      label: 'contact_page_loaded',
    });
  }

  onHeroWhatsApp(): void {
    this.analyticsService.trackEvent('whatsapp_click', {
      category: 'conversion',
      cta_location: 'contact_hero',
    });
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, 'contact_hero');
  }

  onHeroPhone(): void {
    this.analyticsService.trackEvent('phone_click', {
      category: 'conversion',
      cta_location: 'contact_hero',
    });
    this.contactService.callClinic(undefined, 'contact_hero');
  }

  scrollToForm(): void {
    const el = document.getElementById('consultation-form-block');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onDirections(loc: ClinicLocation): void {
    this.analyticsService.trackEvent('directions_click', {
      category: 'navigation',
      location_id: loc.id,
      location_name: loc.nameAr,
    });
    if (typeof window !== 'undefined' && loc.googleMapsUrl) {
      window.open(loc.googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
