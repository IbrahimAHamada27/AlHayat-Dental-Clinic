import {
  Component,
  OnInit,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import {
  CLINIC_CONFIG,
  CLINIC_LOCATIONS,
  DOCTOR_PROFILE,
  INITIAL_SERVICES,
} from '../../core/config/clinic.config';

@Component({
  selector: 'app-appointment-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IconComponent,
    ButtonComponent,
  ],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;
  readonly doctor = DOCTOR_PROFILE;
  readonly services = INITIAL_SERVICES;

  readonly isSubmitted = signal<boolean>(false);
  readonly selectedBranch = signal<string>('new-borg');

  bookingForm!: FormGroup;

  readonly branchesList = [
    {
      id: 'new-borg',
      nameAr: 'فرع برج العرب الجديدة',
      addressAr: 'شارع الجهاز – أعلى صيدلية د. رشا – الدور الأول بجوار سيتي لاب',
      hoursAr: 'طوال الأسبوع من ٢:٣٠ ظهراً حتى ٩:٣٠ مساءً',
    },
    {
      id: 'old-borg',
      nameAr: 'فرع برج العرب القديمة',
      addressAr: 'شارع الوحدة الصحية – خلف مكتب البريد ومسجد التقوى',
      hoursAr: 'السبت إلى الخميس من ٣:٣٠ عصراً حتى ١٠:٠٠ مساءً',
    },
  ];

  readonly serviceOptions = [
    { value: 'checkup', label: 'كشف وفحص شامل (مع مسح رقمي)' },
    { value: 'root-canal', label: 'علاج وحشو عصب بدون ألم (روتاري)' },
    { value: 'orthodontics', label: 'تقويم أسنان (شفاف / معدني)' },
    { value: 'crowns', label: 'تركيبات زيركون وإيماكس وتيجان ثابتة' },
    { value: 'veneers', label: 'ابتسامة هوليوود وعدسات الفينير' },
    { value: 'cleaning', label: 'تنظيف وتلميع الجير بالموجات فوق الصوتية' },
    { value: 'whitening', label: 'تبييض الأسنان بالليزر' },
    { value: 'kids', label: 'طب أسنان الأطفال وجلسات الفلورايد' },
    { value: 'extraction', label: 'خلع جراحي أو ضرس عقل' },
    { value: 'emergency', label: 'حالة ألم طارئة' },
  ];

  readonly timeSlots = [
    { value: 'afternoon', label: 'الفترة المسائية الأولى (٢:٣٠ م – ٦:٠٠ م)' },
    { value: 'evening', label: 'الفترة المسائية الثانية (٦:٠٠ م – ١٠:٠٠ م)' },
  ];

  ngOnInit(): void {
    this.initForm();

    this.route.queryParamMap.subscribe((params) => {
      const srv = params.get('service');
      const loc = params.get('branch');
      if (srv) {
        this.bookingForm.patchValue({ service: srv });
      }
      if (loc && (loc === 'new-borg' || loc === 'old-borg')) {
        this.selectedBranch.set(loc);
        this.bookingForm.patchValue({ branch: loc });
      }
    });

    const breadcrumbs = [
      { name: 'الرئيسية', url: '/' },
      { name: 'حجز موعد', url: '/appointment' },
    ];

    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema(breadcrumbs);

    this.seoService.update({
      title: 'حجز موعد كشف واستشارة | عيادة الحياة لطب الأسنان — د. معاذ سمير برج العرب',
      description:
        'احجز موعدك الآن في عيادة الحياة لطب وجراحة وتجميل الأسنان ببرج العرب الجديدة أو برج العرب القديمة بإشراف د. معاذ سمير. تواصل فوري عبر واتساب أو الهاتف.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/appointment`,
      keywords: [
        'حجز دكتور اسنان برج العرب',
        'مواعيد عيادة الحياة اسنان',
        'دكتور معاذ سمير كشف',
        'عيادة اسنان برج العرب الجديدة حجز',
        'عيادة اسنان برج العرب القديمة موعد',
      ],
      jsonLd: [breadcrumbsSchema, this.seoService.getDefaultClinicSchema()],
    });

    this.analyticsService.trackEvent('page_view', {
      category: 'navigation',
      label: 'appointment_page_loaded',
    });
  }

  private initForm(): void {
    this.bookingForm = this.fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(01[0125][0-9]{8}|[0-9]{9,14})$/),
        ],
      ],
      branch: ['new-borg', Validators.required],
      service: ['checkup', Validators.required],
      preferredDate: [''],
      preferredTime: ['evening', Validators.required],
      notes: [''],
    });
  }

  onBranchSelect(branchId: string): void {
    this.selectedBranch.set(branchId);
    this.bookingForm.patchValue({ branch: branchId });
  }

  onSubmitWhatsApp(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const val = this.bookingForm.value;
    const branchName =
      val.branch === 'new-borg'
        ? 'فرع برج العرب الجديدة (شارع الجهاز)'
        : 'فرع برج العرب القديمة (شارع الوحدة الصحية)';

    const serviceObj = this.serviceOptions.find((s) => s.value === val.service);
    const serviceName = serviceObj ? serviceObj.label : val.service;

    const timeObj = this.timeSlots.find((t) => t.value === val.preferredTime);
    const timeName = timeObj ? timeObj.label : val.preferredTime;

    const dateStr = val.preferredDate ? `\n- *التاريخ المفضل:* ${val.preferredDate}` : '';
    const notesStr = val.notes ? `\n- *ملاحظات المريض:* ${val.notes}` : '';

    const message = `*طلب حجز موعد جديد — عيادة الحياة لطب الأسنان*
- *الاسم:* ${val.patientName}
- *الهاتف:* ${val.phone}
- *الفرع المطلوب:* ${branchName}
- *الخدمة المطلوبة:* ${serviceName}${dateStr}
- *الفترة المفضلة:* ${timeName}${notesStr}

يرجى تأكيد موعد الكشف المتاح مع د. معاذ سمير. شكراً لكم!`;

    this.analyticsService.trackBookingStart('appointment_page_whatsapp', {
      service_name: val.service,
    });

    this.isSubmitted.set(true);
    this.whatsAppService.openWhatsApp(message, 'appointment_page_form');
  }

  onCallDirectly(): void {
    this.analyticsService.trackEvent('phone_click', {
      category: 'conversion',
      cta_location: 'appointment_page_call',
    });
    this.contactService.callClinic(undefined, 'appointment_page');
  }

  resetForm(): void {
    this.bookingForm.reset({
      branch: 'new-borg',
      service: 'checkup',
      preferredTime: 'evening',
    });
    this.isSubmitted.set(false);
  }
}
