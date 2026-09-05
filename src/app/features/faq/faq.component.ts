import {
  Component,
  OnInit,
  signal,
  computed,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  CLINIC_FAQS,
  ClinicFaq,
  INITIAL_SERVICES,
} from '../../core/config/clinic.config';

export interface DetailedFaqItem {
  id: string;
  questionAr: string;
  answerAr: string;
  categoryKey: string;
  categoryNameAr: string;
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconComponent,
    ButtonComponent,
    BadgeComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly locations = CLINIC_LOCATIONS;

  readonly selectedCategory = signal<string>('all');
  readonly searchQuery = signal<string>('');
  readonly openFaqId = signal<string | null>('faq-best-clinic');

  readonly categories = [
    { key: 'all', labelAr: 'جميع الأسئلة' },
    { key: 'clinic', labelAr: 'عن العيادة والمواعيد' },
    { key: 'root-canal', labelAr: 'علاج وحشو العصب' },
    { key: 'ortho', labelAr: 'تقويم الأسنان' },
    { key: 'cosmetics', labelAr: 'التركيبات والتجميل' },
    { key: 'tech', labelAr: 'الماسح والتقنيات الرقمية' },
    { key: 'clean', labelAr: 'تنظيف الجير والتبييض' },
    { key: 'kids', labelAr: 'أسنان الأطفال' },
  ];

  readonly allFaqs: DetailedFaqItem[] = [
    {
      id: 'faq-best-clinic',
      questionAr: 'ما الذي يجعل عيادة الحياة أفضل عيادة أسنان في برج العرب؟',
      answerAr:
        'تتميز عيادة الحياة بإشراف مباشر من د. معاذ سمير، وامتلاكها لأحدث أجهزة طب الأسنان الرقمي مثل الماسح الضوئي ثلاثي الأبعاد (3D Intraoral Scanner) الذي يغني عن المقاسات التقليدية المزعجة، وتطبيق أعلى معايير التعقيم الجراحي بنسبة 100%، وتوفير فرعين مجهزين بالكامل في برج العرب الجديدة (شارع الجهاز) وبرج العرب القديمة (شارع الوحدة الصحية).',
      categoryKey: 'clinic',
      categoryNameAr: 'عن العيادة والمواعيد',
    },
    {
      id: 'faq-branches-appointment',
      questionAr: 'كيف أحجز موعداً وما هي مواعيد العمل في فرعي برج العرب؟',
      answerAr:
        'يمكنك الحجز بسهولة مباشرة عبر صفحة حجز المواعيد، أو عبر واتساب على الرقم 01501701514، أو بالاتصال الهاتفي المباشر. فرع برج العرب الجديدة (أول شارع الجهاز، أعلى صيدلية د. رشا) يعمل طوال الأسبوع من 2:30 ظهراً حتى 9:30 مساءً. وفرع برج العرب القديمة (شارع الوحدة الصحية) يعمل من السبت إلى الخميس من 3:30 عصراً حتى 10:00 مساءً.',
      categoryKey: 'clinic',
      categoryNameAr: 'عن العيادة والمواعيد',
    },
    {
      id: 'faq-painless-root-canal',
      questionAr: 'هل جلسات حشو وعلاج العصب مؤلمة في عيادة الحياة؟',
      answerAr:
        'إطلاقاً. نعتمد في عيادة الحياة على تقنيات علاج الجذور الحديثة بالموتور والروتاري (Rotary Endodontics) مع التخدير الموضعي الدقيق، مما يتيح إتمام تنظيف وحشو القنوات العصبية بجلسات مريحة وسريعة بدون أي ألم، والتخلص الفوري من ألم العصب الحاد دون إزعاج.',
      categoryKey: 'root-canal',
      categoryNameAr: 'علاج وحشو العصب',
    },
    {
      id: 'faq-root-canal-sessions',
      questionAr: 'كم جلسة يستغرق علاج وحشو العصب؟',
      answerAr:
        'بفضل أجهزة الروتاري وتحديد أطوال القنوات إلكترونياً (Apex Locator)، يتم علاج وحشو العصب في معظم الحالات خلال جلسة واحدة أو جلستين كحد أقصى، مقارنة بالطرق القديمة التي كانت تستغرق 4 أو 5 جلسات.',
      categoryKey: 'root-canal',
      categoryNameAr: 'علاج وحشو العصب',
    },
    {
      id: 'faq-crown-after-endo',
      questionAr: 'لماذا يحتاج السن إلى تاج (طربوش) بعد علاج العصب؟',
      answerAr:
        'السن بعد سحب العصب يفقد التغذية الدموية ويصبح أكثر هشاشة وعرضة للكسر تحت ضغط المضغ اليومي. وضع تاج (طربوش) من الزيركون أو البورسلين يحمي السن ويغلفه بالكامل ليعيش معك لسنوات طويلة بأمان.',
      categoryKey: 'root-canal',
      categoryNameAr: 'علاج وحشو العصب',
    },
    {
      id: 'faq-orthodontics-types',
      questionAr: 'ما هي أنواع تقويم الأسنان المتاحة في برج العرب مع د. معاذ سمير؟',
      answerAr:
        'نوفر في العيادة خيارات تقويم الأسنان المتنوعة المناسبة للأطفال والبالغين، ومنها: التقويم الشفاف غير المرئي (Clear Aligners)، التقويم المعدني الثابت التقليدي عالي الفعالية، والتقويم الخزفي التجميلي، مع خطة سداد مريحة ومتابعة شهرية دقيقة حتى الوصول لابتسامة متناسقة وإطباق سليم.',
      categoryKey: 'ortho',
      categoryNameAr: 'تقويم الأسنان',
    },
    {
      id: 'faq-ortho-duration',
      questionAr: 'كم تستغرق مدة علاج تقويم الأسنان عادة؟',
      answerAr:
        'تتراوح مدة التقويم في المتوسط بين 12 إلى 24 شهراً حسب درجة تزاحم الأسنان أو مشاكل الفكين. يتم تحديد الخطة الزمنية بدقة بعد الفحص السريري والأشعة الرقمية في الجلسة الاستشارية الأولى.',
      categoryKey: 'ortho',
      categoryNameAr: 'تقويم الأسنان',
    },
    {
      id: 'faq-ortho-extraction',
      questionAr: 'هل يتطلب التقويم خلع بعض الأسنان دائماً؟',
      answerAr:
        'ليس دائماً. نحن نسعى دائماً للحفاظ على كامل الأسنان الطبيعية متى ما أمكن ذلك، ولا نلجأ للخلع إلا في حالات التزاحم الشديد جداً أو بروز الفكين لضمان أفضل نتيجة جمالية ووظيفية للوجه والابتسامة.',
      categoryKey: 'ortho',
      categoryNameAr: 'تقويم الأسنان',
    },
    {
      id: 'faq-intraoral-scanner',
      questionAr: 'ما هي مميزات الماسح الضوئي ثلاثي الأبعاد (3D Intraoral Scanner) مقارنة بالمقاسات العادية؟',
      answerAr:
        'الماسح الضوئي الفموي هو كاميرا رقمية فائقة الدقة تلتقط آلاف الصور ثلاثية الأبعاد للأسنان والفكين في ثوانٍ معدودة. هذا يلغي تماماً الحاجة إلى قوالب وعجائن المقاسات التقليدية التي تسبب الغثيان والانزعاج، ويمنحنا دقة ميكرونية لتصنيع التركيبات وتيجان الزيركون والإيماكس وتقويم الأسنان بدقة وتطابق تام.',
      categoryKey: 'tech',
      categoryNameAr: 'الماسح والتقنيات الرقمية',
    },
    {
      id: 'faq-digital-xray-safety',
      questionAr: 'هل أجهزة الأشعة الرقمية في العيادة آمنة تماماً؟',
      answerAr:
        'نعم، تعمل أجهزة الأشعة الرقمية في عيادة الحياة بجرعة إشعاعية منخفضة جداً تقل بنسبة تزيد عن 80% مقارنة بأفلام الأشعة التقليدية، مع استخدام واقيات الرصاص وتوفير نتائج تصويرية فائقة الوضوح تظهر فوراً على شاشة الكشف.',
      categoryKey: 'tech',
      categoryNameAr: 'الماسح والتقنيات الرقمية',
    },
    {
      id: 'faq-cosmetic-crowns',
      questionAr: 'ما الفرق بين فينير الأسنان وتيجان الزيركون والإيماكس؟',
      answerAr:
        'الفينير (Veneers) هو عدسات خزفية رقيقة توضع على السطح الخارجي للأسنان الأمامية لتعديل اللون وتسكير الفراغات وتجميل الابتسامة، بينما تيجان الزيركون تتميز بصلابة فائقة تناسب الأضراس الخلفية والمضغ القوي، وتيجان الإيماكس (E-Max) توفر أعلى درجات الشفافية والجمال الطبيعي للأسنان الأمامية.',
      categoryKey: 'cosmetics',
      categoryNameAr: 'التركيبات والتجميل',
    },
    {
      id: 'faq-zircon-color',
      questionAr: 'هل يتغير لون تركيبات وتيجان الزيركون مع شرب الشاي والقهوة؟',
      answerAr:
        'لا، مادة الزيركونيا الخزفية غير مسامية ومقاومة تماماً للتصبغات والأحماض، مما يحافظ على بريقها ولونها الأبيض الناصع الطبيعي لسنوات طويلة دون أي تغير.',
      categoryKey: 'cosmetics',
      categoryNameAr: 'التركيبات والتجميل',
    },
    {
      id: 'faq-tartar-scaling',
      questionAr: 'كم مرة يجب إجراء تنظيف الجير في العيادة؟ وهل يضعف الأسنان؟',
      answerAr:
        'يُنصح بإجراء جلسة إزالة الجير بالموجات فوق الصوتية كل 6 أشهر للحفاظ على صحة اللثة ومنع تراجع العظم. تنظيف الجير الطبي لا يزيل أي جزء من مينا الأسنان ولا يضعفها نهائياً، بل ينقذ الأسنان من التخلخل والالتهابات النزفية المزمنة.',
      categoryKey: 'clean',
      categoryNameAr: 'تنظيف الجير والتبييض',
    },
    {
      id: 'faq-whitening-vs-scaling',
      questionAr: 'ما هو الفرق بين تنظيف الجير وتبييض الأسنان؟',
      answerAr:
        'تنظيف الجير هو إجراء علاجي ووقائي لإزالة الرواسب الكلسية والتكلسات المتراكمة بين الأسنان واللثة، بينما التبييض هو إجراء تجميلي يهدف لتفتيح درجة لون السن الطبيعية من 4 إلى 8 درجات للحصول على ابتسامة أكثر إشراقاً.',
      categoryKey: 'clean',
      categoryNameAr: 'تنظيف الجير والتبييض',
    },
    {
      id: 'faq-kids-baby-teeth',
      questionAr: 'لماذا نهتم بعلاج أسنان الأطفال اللبنية طالما أنها ستتبدل؟',
      answerAr:
        'الأسنان اللبنية تحافظ على المسافة الصحيحة للأسنان الدائمة تحتها، وتساعد الطفل على مضغ الطعام السليم ونطق الحروف بشكل صحيح. إهمال علاج تسوسها قد يسبب خراجات مؤلمة للطفل ويؤدي لتشوه وازدحام الأسنان الدائمة مستقبلاً.',
      categoryKey: 'kids',
      categoryNameAr: 'أسنان الأطفال',
    },
    {
      id: 'faq-fluoride-session',
      questionAr: 'ما هي أهمية جلسات الفلورايد وسد الشقوق للوقاية لدى الأطفال؟',
      answerAr:
        'جلسات تطبيق ورنيش الفلورايد وسد شقوق الأضراس (Fissure Sealants) تُقوي مينا الأسنان وتحميها بنسبة تزيد عن 85% ضد التسوس، وهي جلسات وقائية سريعة وبدون أي حقن أو ألم، تمنح طفلك تجربة محببة داخل العيادة.',
      categoryKey: 'kids',
      categoryNameAr: 'أسنان الأطفال',
    },
  ];

  readonly filteredFaqs = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchQuery().trim().toLowerCase();

    return this.allFaqs.filter((faq) => {
      const matchesCategory =
        category === 'all' || faq.categoryKey === category;
      const matchesSearch =
        !query ||
        faq.questionAr.toLowerCase().includes(query) ||
        faq.answerAr.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  });

  ngOnInit(): void {
    const breadcrumbs = [
      { name: 'الرئيسية', url: '/' },
      { name: 'الأسئلة الشائعة', url: '/faqs' },
    ];

    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema(breadcrumbs);
    const faqSchema = this.seoService.getFaqSchema(
      this.allFaqs.map((f) => ({
        questionAr: f.questionAr,
        answerAr: f.answerAr,
      }))
    );

    this.seoService.update({
      title: 'الأسئلة الشائعة في طب وتجميل الأسنان | عيادة الحياة — د. معاذ سمير',
      description:
        'إجابات شاملة وموثوقة على أهم أسئلة علاج وحشو العصب، تقويم الأسنان، الماسح الضوئي ثلاثي الأبعاد، التركيبات، والأسعار في عيادة الحياة ببرج العرب.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/faqs`,
      keywords: [
        'الاسئلة الشائعة طب اسنان برج العرب',
        'اسعار حشو العصب برج العرب',
        'تقويم الاسنان عيادة الحياة',
        'الماسح الضوئي للاسنان دكتور معاذ سمير',
        'مواعيد عيادة اسنان برج العرب',
      ],
      jsonLd: [
        breadcrumbsSchema,
        this.seoService.getDefaultClinicSchema(),
        faqSchema,
      ],
    });

    this.analyticsService.trackEvent('page_view', {
      category: 'navigation',
      label: 'faq_page_loaded',
    });
  }

  setCategory(key: string): void {
    this.selectedCategory.set(key);
  }

  toggleFaq(id: string): void {
    if (this.openFaqId() === id) {
      this.openFaqId.set(null);
    } else {
      this.openFaqId.set(id);
    }
  }

  onAskDoctor(): void {
    const msg =
      'السلام عليكم د. معاذ سمير، أود استشارتك بخصوص استفسار طبي حول علاج الأسنان في عيادة الحياة.';
    this.whatsAppService.openWhatsApp(msg, 'faq_page_direct_ask');
  }

  onPhoneCall(): void {
    this.contactService.callClinic(undefined, 'faq_page_call');
  }
}
