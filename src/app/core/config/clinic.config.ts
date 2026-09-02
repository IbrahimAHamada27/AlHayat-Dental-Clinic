import { ClinicConfig } from '../models/clinic.model';
import { ClinicLocation } from '../models/location.model';
import { Doctor } from '../models/doctor.model';
import { ServiceItem } from '../models/service.model';
import { TechnologyItem, CaseStudyItem, ArticleItem, TestimonialItem } from '../models/content.model';

export const CLINIC_CONFIG: ClinicConfig = {
  clinicNameAr: 'عيادة الحياة لطب الأسنان',
  clinicNameEn: 'Al Hayat Dental Clinic',
  doctorNameAr: 'د. معاذ سمير',
  doctorNameEn: 'Dr. Moaz Samir',
  taglineAr: 'رعاية أسنان متكاملة وتشخيص دقيق لصحة وابتسامة تدوم',
  taglineEn: 'Comprehensive Dental Care & Precision Diagnosis for a Lasting Smile',
  shortDescriptionAr:
    'عيادة متخصصة في تقديم خدمات طب وجراحة الفم وتقويم الأسنان بأحدث التقنيات وأعلى معايير الرعاية والتعقيم ببرج العرب.',
  shortDescriptionEn:
    'Dedicated dental clinic offering advanced oral care, orthodontics, and restorative treatments with precision and compassionate care in Borg El Arab.',
  contact: {
    phone: '015 017 01514',
    phoneRaw: '01501701514',
    phoneFormatted: '015 017 01514',
    whatsapp: '01501701514',
    whatsappRaw: '201501701514',
    email: 'info@alhayatdental.com',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/201501701514',
  },
  workingHours: [
    {
      daysAr: 'السبت – الخميس',
      daysEn: 'Saturday – Thursday',
      hoursAr: '٤:٠٠ م – ١٠:٠٠ م',
      hoursEn: '4:00 PM – 10:00 PM',
      noteAr: 'يُفضل الحجز المسبق لتقليل وقت الانتظار',
      noteEn: 'Prior appointment recommended',
    },
    {
      daysAr: 'الجمعة',
      daysEn: 'Friday',
      hoursAr: 'مغلق (حالات الطوارئ بتنسيق مسبق)',
      hoursEn: 'Closed (Emergency by coordination)',
    },
  ],
  defaultSeo: {
    siteName: 'عيادة الحياة لطب الأسنان | د. معاذ سمير',
    siteUrl: 'https://www.drmoazsamir.com',
    defaultTitleAr: 'عيادة الحياة لطب الأسنان | د. معاذ سمير — برج العرب',
    defaultTitleEn: 'Dr. Moaz Samir | Al Hayat Dental Clinic — Borg El Arab',
    defaultDescriptionAr:
      'عيادة الحياة لطب الأسنان بإشراف د. معاذ سمير في برج العرب. رعاية متكاملة لصحة الفم، تقويم الأسنان، حشو العصب، والتركيبات التجميلية مع تقنيات طب الأسنان الرقمي.',
    defaultDescriptionEn:
      'Al Hayat Dental Clinic by Dr. Moaz Samir. Comprehensive oral care, orthodontics, root canal treatments, and cosmetic dentistry in New & Old Borg El Arab.',
    ogImage: 'assets/images/logo/logo-square.jpg',
    locale: 'ar_EG',
  },
};

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'new-borg-el-arab',
    slug: 'new-borg-el-arab',
    nameAr: 'فرع برج العرب الجديدة',
    nameEn: 'New Borg El Arab Branch',
    shortNameAr: 'برج العرب الجديدة',
    shortNameEn: 'New Borg El Arab',
    cityAr: 'الإسكندرية',
    cityEn: 'Alexandria',
    districtAr: 'برج العرب الجديدة',
    districtEn: 'New Borg El Arab',
    addressAr: 'برج العرب الجديدة – شارع الجهاز',
    addressEn: 'New Borg El Arab – El Gehaz St.',
    buildingDetailsAr: 'أعلى صيدلية د. رشا – الدور الأول',
    buildingDetailsEn: 'Above Dr. Rasha Pharmacy – 1st Floor',
    landmarksAr: ['بجوار سيتي لاب', 'شارع الجهاز الرئيسي'],
    landmarksEn: ['Next to City Lab', 'Main Gehaz Street'],
    directionsAr: 'يقع الفرع في موقع حيوي بشارع الجهاز الرئيسي ببرج العرب الجديدة، أعلى صيدلية د. رشا مباشرة بالدور الأول، بجوار سيتي لاب.',
    directionsEn: 'Located on Main Gehaz Street in New Borg El Arab, directly above Dr. Rasha Pharmacy on the 1st floor, next to City Lab.',
    descriptionAr: 'فرع مجهز بالكامل لتقديم رعاية متكاملة لصحة الفم والأسنان وتقويم الأسنان والتقنيات الرقمية لسكان برج العرب الجديدة.',
    descriptionEn: 'Fully equipped branch offering comprehensive dental care, orthodontics, and digital dentistry.',
    phone: '015 017 01514',
    phoneFormatted: '015 017 01514',
    whatsapp: '01501701514',
    googleMapsUrl: 'https://maps.google.com/?q=%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2+%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9+%D8%AF+%D8%B1%D8%B4%D8%A7',
    mapEmbedUrl: 'https://maps.google.com/maps?q=30.8789,29.5815&hl=ar&z=15&output=embed',
    services: [
      'orthodontics',
      'restorative-dentistry',
      'root-canal',
      'cosmetic-dentistry',
      'teeth-cleaning',
      'pediatric-dentistry',
    ],
    isPrimary: true,
  },
  {
    id: 'old-borg-el-arab',
    slug: 'old-borg-el-arab',
    nameAr: 'فرع برج العرب القديمة',
    nameEn: 'Old Borg El Arab Branch',
    shortNameAr: 'برج العرب القديمة',
    shortNameEn: 'Old Borg El Arab',
    cityAr: 'الإسكندرية',
    cityEn: 'Alexandria',
    districtAr: 'برج العرب القديمة',
    districtEn: 'Old Borg El Arab',
    addressAr: 'برج العرب القديمة – شارع الوحدة الصحية',
    addressEn: 'Old Borg El Arab – Health Unit St.',
    buildingDetailsAr: 'شارع الوحدة الصحية',
    buildingDetailsEn: 'Health Unit Street',
    landmarksAr: ['خلف البريد', 'خلف مسجد التقوى'],
    landmarksEn: ['Behind Post Office', 'Behind Al-Taqwa Mosque'],
    directionsAr: 'يقع الفرع في شارع الوحدة الصحية ببرج العرب القديمة، خلف مكتب البريد وخلف مسجد التقوى.',
    directionsEn: 'Located on Health Unit Street in Old Borg El Arab, behind the Post Office and Al-Taqwa Mosque.',
    descriptionAr: 'فرع متكامل يقدم مختلف علاجات الأسنان التخصصية لخدمة أهالي برج العرب القديمة والمناطق المجاورة.',
    descriptionEn: 'Dedicated dental clinic serving patients across Old Borg El Arab and neighboring communities.',
    phone: '015 017 01514',
    phoneFormatted: '015 017 01514',
    whatsapp: '01501701514',
    googleMapsUrl: 'https://maps.google.com/?q=%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8+%D8%A7%D9%84%D9%82%D8%AF%D9%8A%D9%85%D8%A9+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9+%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9',
    mapEmbedUrl: 'https://maps.google.com/maps?q=30.9167,29.5333&hl=ar&z=15&output=embed',
    services: [
      'orthodontics',
      'restorative-dentistry',
      'root-canal',
      'cosmetic-dentistry',
      'teeth-cleaning',
      'pediatric-dentistry',
    ],
    isPrimary: false,
  },
];

export const DOCTOR_PROFILE: Doctor = {
  id: 'dr-moaz-samir',
  nameAr: 'د. معاذ سمير',
  nameEn: 'Dr. Moaz Samir',
  titleAr: 'طبيب أسنان',
  titleEn: 'Dental Surgeon',
  safeTitleAr: 'طبيب أسنان يهتم بتقديم رعاية متكاملة لصحة الفم والأسنان',
  safeTitleEn: 'Dental Practitioner committed to holistic oral health and care',
  specializationAr: 'طب الفم وتقويم الأسنان',
  specializationEn: 'Oral Health & Orthodontics',
  image: 'assets/images/doctor/dr-moaz-portrait.jpg',
  bioAr:
    'طبيب أسنان يركز على تقديم رعاية طبية دقيقة وشخصية لكل مريض، مع الاهتمام بالتشخيص الصحيح واختيار العلاج الأنسب للحفاظ على صحة الأسنان الطبيعية والابتسامة المريحة.',
  bioEn:
    'Dedicated dental practitioner focused on accurate diagnosis, individualized treatment plans, and modern techniques to preserve oral health and create healthy smiles.',
  philosophyAr:
    'نؤمن بأن طب الأسنان يبدأ بالاستماع الواعي لحالة المريض، والشرح الواضح لكل خطوة علاجية، وتوفير بيئة علاجية مريحة وآمنة.',
  philosophyEn:
    'We believe dentistry begins with active listening, clear patient communication, and a calm, reassuring clinical environment.',
  specialtiesAr: [
    'طب وجراحة الفم والأسنان',
    'تقويم الأسنان وتعديل الإطباق',
    'علاج الجذور وحشو العصب',
    'التركيبات التجميلية والتعويضية',
    'تنظيف وتلميع الأسنان وعلاج اللثة',
    'طب أسنان الأطفال والرعاية الوقائية',
  ],
  specialtiesEn: [
    'General & Restorative Dentistry',
    'Orthodontics & Occlusion',
    'Endodontics (Root Canal Treatment)',
    'Cosmetic & Prosthetic Restorations',
    'Periodontics & Preventive Scaling',
    'Pediatric & Preventive Care',
  ],
  areasOfInterest: [
    {
      id: 'ortho-interest',
      titleAr: 'تقويم الأسنان وتعديل الإطباق',
      titleEn: 'Orthodontics & Occlusion',
      descriptionAr: 'العناية بترتيب اصطفاف الأسنان وتحسين الإطباق والمظهر الجمالي والوظيفي وفق تقييم كل حالة.',
      descriptionEn: 'Aligning teeth and correcting occlusion based on careful individual case evaluation.',
      iconName: 'tooth-align',
      serviceSlug: 'orthodontics',
    },
    {
      id: 'restorative-interest',
      titleAr: 'علاج التسوس والحشو التجميلي',
      titleEn: 'Restorative & Aesthetic Fillings',
      descriptionAr: 'علاج التسوس بدقة عالية واستخدام الحشوات التجميلية المطابقة للون السن الطبيعي لحمايته.',
      descriptionEn: 'Meticulous caries management and shade-matched composite restorations.',
      iconName: 'tooth-fill',
      serviceSlug: 'restorative-dentistry',
    },
    {
      id: 'prosthetics-interest',
      titleAr: 'التركيبات وتجميل الأسنان',
      titleEn: 'Prosthetics & Cosmetic Crowns',
      descriptionAr: 'تعويض الأسنان المفقودة أو المتضررة بتيجان الزيركون والإيماكس المتوافقة بيولوجياً وطبيعياً.',
      descriptionEn: 'Restoring missing or damaged teeth with biocompatible zirconia and E-max crowns.',
      iconName: 'sparkle',
      serviceSlug: 'cosmetic-dentistry',
    },
    {
      id: 'endodontics-interest',
      titleAr: 'علاج الجذور وحشو العصب',
      titleEn: 'Root Canal Therapy',
      descriptionAr: 'إنقاذ الأسنان المتضررة وتخفيف الألم بالاعتماد على الأجهزة الآلية الحديثة بأعلى معايير الدقة.',
      descriptionEn: 'Preserving teeth and alleviating acute discomfort with rotary endodontic systems.',
      iconName: 'root-canal',
      serviceSlug: 'root-canal',
    },
    {
      id: 'digital-interest',
      titleAr: 'طب الأسنان الرقمي (Intraoral Scanner)',
      titleEn: 'Digital Dentistry',
      descriptionAr: 'الاستفادة من المسح الضوئي الرقمي ثلاثي الأبعاد لأخذ المقاسات بدقة وراحة للمريض.',
      descriptionEn: 'Utilizing 3D digital impressions for accurate restorations and comfortable patient experience.',
      iconName: 'sparkle',
      serviceSlug: undefined,
    },
  ],
  education: [],
  experience: [],
  certifications: [],
  courses: [],
  conferences: [],
  memberships: [],
  socialLinks: CLINIC_CONFIG.social,
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    titleAr: 'تقويم الأسنان وتعديل الإطباق',
    titleEn: 'Orthodontics & Occlusion Correction',
    shortDescriptionAr: 'تعديل اصطفاف الأسنان وتحسين الإطباق والمظهر الجمالي والوظيفي للفكين بخطط علاج مخصصة.',
    shortDescriptionEn: 'Aligning teeth and correcting occlusion with tailored orthodontic treatment plans.',
    overviewAr:
      'تهدف خدمة تقويم الأسنان إلى تصحيح وضعية الأسنان غير المنتظمة وعلاج مشكلات الإطباق وازدحام الأسنان، مما يسهم في تحسين وظيفة المضغ والمظهر العام للابتسامة وتسهيل العناية اليومية بصحة الفم واللثة.',
    overviewEn:
      'Orthodontic care aims to align crowded teeth, correct functional malocclusion, and enhance oral aesthetics and chewing efficiency.',
    categoryAr: 'تقويم الأسنان',
    categoryEn: 'Orthodontics',
    iconName: 'tooth-align',
    heroImage: 'assets/images/cases/case-ortho-braces.jpg',
    isFeatured: true,
    isActive: true,
    whoItIsForAr: [
      'حالات ازدحام وتزاحم الأسنان أو تراكبها في الفك العلوي أو السفلي.',
      'وجود مسافات وفراغات بين الأسنان تؤثر على المظهر أو تراكم بقايا الطعام.',
      'مشكلات الإطباق مثل العضة المفتوحة، أو المعكوسة، أو العميقة.',
      'الرغبة في تحسين التناسق الجمالي والوظيفي للابتسامة وفق تقييم الطبيب.',
    ],
    benefitsAr: [
      'المساعدة في تحسين المظهر الجمالي وتناسق اصطفاف الأسنان.',
      'تحسين كفاءة المضغ وتوزيع قوى الإطباق بشكل متوازن على الفكين.',
      'تسهيل تنظيف الأسنان والوقاية من تراكم الجير والتهابات اللثة.',
    ],
    considerationsAr: [
      'تختلف خطة العلاج ومدة التقويم من حالة لأخرى بناءً على التقييم السريري الدقيق والفحص الإشعاعي.',
      'تتطلب فترة التقويم التزاماً منتظماً بمواعيد الشد والمتابعة الشهرية والحفاظ الفائق على نظافة الفم.',
    ],
    processStepsAr: [
      {
        number: '01',
        titleAr: 'الفحص السريري والاستماع',
        descriptionAr: 'معاينة وضعية الأسنان والإطباق ومناقشة أهداف المريض وتطلعاته.',
      },
      {
        number: '02',
        titleAr: 'التصوير وأخذ القياسات',
        descriptionAr: 'إجراء الأشعة التشخيصية وأخذ المقاسات الفموية لدراسة الحالة بدقة.',
      },
      {
        number: '03',
        titleAr: 'وضع الخطة العلاجية',
        descriptionAr: 'تحديد نوع التقويم المناسب ومناقشة تفاصيل المراحل مع المريض.',
      },
      {
        number: '04',
        titleAr: 'تركيب التقويم وتعديل القوى',
        descriptionAr: 'تثبيت الحاصرات وضبط الأسلاك الطبية لبدء تحريك الأسنان برفق وأمان.',
      },
      {
        number: '05',
        titleAr: 'المتابعة ومرحلة التثبيت',
        descriptionAr: 'زيارات شهرية للمعاينة، تليها مرحلة التثبيت (Retainer) للحفاظ على النتيجة الدائمة.',
      },
    ],
    usesDigitalTech: true,
    faqs: [
      {
        questionAr: 'هل تقويم الأسنان مناسب للكبار والأطفال؟',
        answerAr: 'نعم، يمكن إجراء تقويم الأسنان في مختلف الفئات العمرية بعد تقييم صحة اللثة والعظام المحيطة بالأسنان.',
      },
      {
        questionAr: 'كم تستغرق مدة علاج تقويم الأسنان عادة؟',
        answerAr: 'تتراوح المدة عموماً بين عدة أشهر إلى سنتين بحسب صعوبة الحالة ودرجة الازدحام ومدى الالتزام بالتعليمات.',
      },
      {
        questionAr: 'هل يتطلب التقويم خلع بعض الأسنان دائماً؟',
        answerAr: 'ليس بالضرورة؛ يحدد الطبيب الحاجة إلى الخلع فقط في الحالات التي تعاني من ضيق شديد في الفك ولا توجد مساحة كافية لاصطفاف الأسنان.',
      },
      {
        questionAr: 'كيف أحافظ على نظافة أسناني أثناء وجود التقويم؟',
        answerAr: 'باستخدام فرشاة التقويم المخصصة، وخيط الأسنان الطبي، والمضمضة، وتنظيف الأسنان بعد كل وجبة لتفادي التصبغات.',
      },
    ],
    relatedServiceSlugs: ['restorative-dentistry', 'teeth-cleaning', 'cosmetic-dentistry'],
    seo: {
      title: 'تقويم الأسنان في برج العرب | د. معاذ سمير | عيادة الحياة',
      description: 'خدمة تقويم الأسنان وتعديل الإطباق في برج العرب بإشراف د. معاذ سمير. خطط علاجية مخصصة لتحسين اصطفاف الأسنان ووظيفة الفكين.',
      keywords: [
        'تقويم الأسنان برج العرب',
        'دكتور تقويم أسنان برج العرب',
        'تقويم الأسنان برج العرب الجديدة',
        'تقويم الأسنان برج العرب القديمة',
        'تقويم الاسنان الاسكندرية',
      ],
    },
  },
  {
    id: 'restorative-dentistry',
    slug: 'restorative-dentistry',
    titleAr: 'حشو وعلاج الأسنان (الحشو التجميلي)',
    titleEn: 'Restorative Dentistry & Cosmetic Fillings',
    shortDescriptionAr: 'إزالة التسوس وترميم الأسنان المتضررة بحشوات تجميلية مطابقة للون السن الطبيعي.',
    shortDescriptionEn: 'Caries management and natural tooth-colored composite restorations.',
    overviewAr:
      'تركز خدمة حشو وعلاج الأسنان على إزالة التسوس وإعادة بناء الأجزاء المتضررة من السن باستخدام حشوات تجميلية كمبوزيت مطابقة تماماً للون وملمس السن الطبيعي، لاستعادة قوة المضغ والشكل الجمالي المتناسق.',
    overviewEn:
      'Restorative dental care focuses on caries debridement and rebuilding tooth structure with aesthetic composites.',
    categoryAr: 'العلاجات الترميمية',
    categoryEn: 'Restorative Care',
    iconName: 'tooth-fill',
    heroImage: 'assets/images/cases/case-composite-anterior.jpg',
    isFeatured: true,
    isActive: true,
    whoItIsForAr: [
      'وجود تسوس مرئي أو نخر في الأسنان الأمامية أو الخلفية.',
      'تآكل أو كسر جزئي في الحشوات القديمة أو بنية السن.',
      'الشعور بآلام خفيفة أو حساسية مع الأطعمة السكرية والباردة.',
      'الحاجة لترميم الأسنان بعد تنظيف النخور السطحية والمتوسطة.',
    ],
    benefitsAr: [
      'استعادة قوة السن ووظيفته الطبيعية في المضغ.',
      'لون تجميلي مطابق للأسنان الطبيعية يصعب تمييزه.',
      'حماية بنية السن المتبقية ومنع امتداد التسوس إلى العصب.',
    ],
    considerationsAr: [
      'يتطلب الحفاظ على الحشوات التجميلية تنظيف الأسنان بالفرشاة والمعجون مرتين يومياً والمتابعة الدورية.',
      'في حال كان التسوس عميقاً ووصل للعصب، قد يتطلب الأمر علاج جذور قبل وضع الحشو النهائي.',
    ],
    processStepsAr: [
      {
        number: '01',
        titleAr: 'الفحص وتشخيص عمق التسوس',
        descriptionAr: 'معاينة السن سريرياً والاستعانة بالأشعة لتحديد مسار النخر وعمقه.',
      },
      {
        number: '02',
        titleAr: 'تنظيف السن وإزالة النخر',
        descriptionAr: 'تنظيف دقيق لكافة الأنسجة المصابة بالتسوس مع الحفاظ على الأنسجة السليمة.',
      },
      {
        number: '03',
        titleAr: 'وضع الحشو التجميلي وتشكيله',
        descriptionAr: 'تطبيق طبقات الحشو التجميلي واختيار التدرج اللوني المطابق للسن.',
      },
      {
        number: '04',
        titleAr: 'التصلب الضوئي والصقل',
        descriptionAr: 'تثبيت الحشو بالضوء الخاص، ثم ضبط الإطباق وتلميع السن لضمان راحة تامة.',
      },
    ],
    usesDigitalTech: false,
    faqs: [
      {
        questionAr: 'هل الحشوات التجميلية تدوم لفترة طويلة؟',
        answerAr: 'نعم، تتميز الحشوات التجميلية الحديثة بقوة التصاق ومتانة عالية تدوم لسنوات مع العناية اليومية والفحص الدوري.',
      },
      {
        questionAr: 'هل علاج وحشو التسوس مؤلم؟',
        answerAr: 'يتم الإجراء تحت تخدير موضعي موضعي دقيق لضمان راحة المريض التامة دون أي شعور بالألم.',
      },
      {
        questionAr: 'ما الفرق بين الحشو التجميلي والحشو الفضي (الأملجم)؟',
        answerAr: 'الحشو التجميلي يتميز بلونه المطابق للسن الطبيعي والتحامه المباشر مع بنية السن دون الحاجة لإزالة جزء كبير من السن السليم.',
      },
    ],
    relatedServiceSlugs: ['root-canal', 'teeth-cleaning', 'cosmetic-dentistry'],
    seo: {
      title: 'حشو الأسنان التجميلي في برج العرب | د. معاذ سمير | عيادة الحياة',
      description: 'علاج التسوس والحشو التجميلي للأسنان في برج العرب بإشراف د. معاذ سمير. حشوات كمبوزيت متوافقة بلون الأسنان الطبيعية.',
      keywords: [
        'حشو تجميلي برج العرب',
        'حشو اسنان برج العرب',
        'علاج تسوس الاسنان برج العرب',
        'الحشو التجميلي برج العرب الجديدة',
      ],
    },
  },
  {
    id: 'root-canal',
    slug: 'root-canal',
    titleAr: 'علاج الجذور وحشو العصب',
    titleEn: 'Root Canal Therapy (Endodontics)',
    shortDescriptionAr: 'إنقاذ السن الطبيعي وتخفيف الألم الحاد بأحدث أجهزة علاج العصب الآلية.',
    shortDescriptionEn: 'Preserving natural teeth and relieving acute pain with rotary endodontics.',
    overviewAr:
      'يُعد علاج الجذور الإجراء الطبي المعتمد لإنقاذ الأسنان الطبيعية التي تعرضت لالتهاب أو تلف العصب نتيجة التسوس العميق أو الصدمات، مما يمنع الحاجة إلى خلع السن، بالاعتماد على أجهزة علاج الجذور الآلية الدقيقة.',
    overviewEn:
      'Root canal treatment saves severely decayed or infected teeth, relieving pain and preventing extraction.',
    categoryAr: 'العلاجات الترميمية',
    categoryEn: 'Restorative Care',
    iconName: 'root-canal',
    heroImage: 'assets/images/doctor/dr-moaz-loupes.jpg',
    isFeatured: true,
    isActive: true,
    whoItIsForAr: [
      'آلام الأسنان الحادة أو النبض المستمر خاصة أثناء الليل.',
      'حساسية مفرطة ومستمرة تجاه المشروبات الساخنة أو الباردة.',
      'وجود انتفاخ أو تورم في اللثة المحيطة بالسن المصاب.',
      'تسوس عميق وصل إلى لب السن والأعصاب المغذية.',
    ],
    benefitsAr: [
      'التخلص السريع والفعال من الألم والالتهاب.',
      'الحفاظ على السن الطبيعي داخل الفك وتجنب اللجوء للخلع.',
      'الحفاظ على وظيفة المضغ الطبيعية وتناسق الأسنان المجاورة.',
    ],
    considerationsAr: [
      'غالباً ما ينصح الطبيب بتركيب تاج (طربوش) حماية على السن بعد علاج العصب لتقويته وحمايته من الكسر.',
      'الالتزام بتناول الأدوية الموصوفة طبياً إذا كانت هناك عدوى بكتيرية.',
    ],
    processStepsAr: [
      {
        number: '01',
        titleAr: 'الفحص والتشخيص الإشعاعي',
        descriptionAr: 'تحديد قنوات العصب المصابة ومدى امتداد الالتهاب بدقة.',
      },
      {
        number: '02',
        titleAr: 'التخدير وإزالة النسيج الملتهب',
        descriptionAr: 'تخدير موضعي كامل وتنظيف قنوات العصب بأحدث الأدوات الدقيقة.',
      },
      {
        number: '03',
        titleAr: 'تشكيل وتطهير القنوات آلياً',
        descriptionAr: 'استخدام أجهزة Rotary الآلية لتنظيف القنوات وتعقيمها بمحاليل طبية متقدمة.',
      },
      {
        number: '04',
        titleAr: 'حشو القنوات والإغلاق المحكم',
        descriptionAr: 'ملء القنوات بمادة حشو عصب حيوية محكمة لمنع تسرب البكتيريا مستقبلاً.',
      },
    ],
    usesDigitalTech: true,
    faqs: [
      {
        questionAr: 'كم جلسة يستغرق علاج وحشو العصب؟',
        answerAr: 'في كثير من الحالات يمكن إتمام العلاج في جلسة واحدة أو جلستين بفضل أجهزة علاج العصب الآلية الحديثة.',
      },
      {
        questionAr: 'هل علاج العصب مؤلم؟',
        answerAr: 'يتم الإجراء تحت تخدير موضعي كامل، والهدف الأساسي من علاج العصب هو التخلص من الألم وليس التسبب فيه.',
      },
      {
        questionAr: 'لماذا يحتاج السن إلى تاج (طربوش) بعد علاج العصب؟',
        answerAr: 'لأن السن بعد إزالة العصب يفقد تغذيته الدموية ويصبح أكثر عرضة للكسر تحت ضغط المضغ، والتاج يمنحه الحماية الكاملة.',
      },
    ],
    relatedServiceSlugs: ['restorative-dentistry', 'cosmetic-dentistry'],
    seo: {
      title: 'علاج وحشو العصب في برج العرب | د. معاذ سمير | عيادة الحياة',
      description: 'علاج جذور الأسنان وحشو العصب بالتقنيات الآلية الحديثة في برج العرب بإشراف د. معاذ سمير. إنقاذ السن وتخفيف الألم بدقة.',
      keywords: [
        'علاج عصب برج العرب',
        'حشو عصب برج العرب',
        'دكتور علاج جذور برج العرب',
        'حشو عصب بدون الم برج العرب',
      ],
    },
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    titleAr: 'تجميل وتركيبات الأسنان (تيجان وزيركون)',
    titleEn: 'Cosmetic Dentistry & Prosthetic Crowns',
    shortDescriptionAr: 'فينير وتيجان الزيركون والإيماكس لتعويض الأسنان واستعادة الابتسامة الطبيعية.',
    shortDescriptionEn: 'Veneers, zirconia, and E-max crowns for natural aesthetic restoration.',
    overviewAr:
      'تشمل خدمة التركيبات وتجميل الأسنان تيجان الزيركون والإيماكس والجسور الثابتة والعدسات التجميلية (الفينير)، لتعويض الأسنان المتضررة أو المفقودة وتعديل شكل ولون الابتسامة بأعلى توافق حيوي وطبيعي مع اللثة.',
    overviewEn:
      'Cosmetic crowns and prosthetics restore damaged or missing teeth using biocompatible zirconia and E-max.',
    categoryAr: 'تجميل الأسنان والتركيبات',
    categoryEn: 'Cosmetics & Crowns',
    iconName: 'sparkle',
    heroImage: 'assets/images/cases/case-smile-makeover.jpg',
    isFeatured: true,
    isActive: true,
    whoItIsForAr: [
      'الأسنان الضعيفة أو المعالجة عصبياً والتي تحتاج لحماية كاملة.',
      'وجود كسور أو تصبغات شديدة لا تستجيب للتبييض العادي.',
      'تعويض سن مفقود أو أكثر عبر الجسور الثابتة أو التيجان.',
      'الرغبة في تحسين مظهر وشكل الأسنان الأمامية وتناسقها.',
    ],
    benefitsAr: [
      'مظهر جمالي فائق يطابق بريق وشفافية الأسنان الطبيعية.',
      'قوة ومتانة عالية ومقاومة ممتازة للتآكل وقوى المضغ.',
      'توافق حيوي ممتاز مع أنسجة اللثة يمنع الالتهابات وتغير اللون.',
    ],
    considerationsAr: [
      'يعتمد اختيار المادة (زيركون، إيماكس، بورسلين) على موقع السن وحاجة الحالة الوظيفية والجمالية.',
      'الاستفادة من الماسح الضوئي الرقمي لأخذ مقاسات دقيقة ومريحة دون مواد الطباعة التقليدية.',
    ],
    processStepsAr: [
      {
        number: '01',
        titleAr: 'التقييم وتحديد الخيار الأنسب',
        descriptionAr: 'فحص الحالة ومناقشة الخيارات التجميلية ونوع التركيبة الأفضل للسن.',
      },
      {
        number: '02',
        titleAr: 'تحضير السن بدقة ميكروسكوبية',
        descriptionAr: 'برد خفيف ومحسوب للسن لتوفير مساحة للتاج التجميلي.',
      },
      {
        number: '03',
        titleAr: 'أخذ المقاس الرقمي ثلاثي الأبعاد',
        descriptionAr: 'استخدام Intraoral Scanner لنقل تفاصيل السن بدقة للمعامل الرقمية المعتمدة.',
      },
      {
        number: '04',
        titleAr: 'التجربة والتثبيت النهائي',
        descriptionAr: 'معاينة تطابق التاج وملاءمته التامة مع الإطباق واللثة قبل التثبيت الدائم.',
      },
    ],
    usesDigitalTech: true,
    faqs: [
      {
        questionAr: 'ما الفرق بين تركيبات الزيركون والإيماكس؟',
        answerAr: 'الزيركون يتميز بصلابة فائقة تناسب الأسنان الخلفية والجسور، بينما يتميز الإيماكس بشفافية جمالية استثنائية تناسب الأسنان الأمامية.',
      },
      {
        questionAr: 'هل يتغير لون تركيبات الزيركون مع الوقت؟',
        answerAr: 'لا، تركيبات الزيركون والإيماكس مقاومة تماماً للتصبغات الناتجة عن القهوة والشاي وتحتفظ بلمعانها لسنوات طويلة.',
      },
      {
        questionAr: 'كم من الوقت يستغرق تجهيز التركيبة؟',
        answerAr: 'بفضل سير العمل الرقمي والماسح الضوئي، يتم تجهيز التركيبة في غضون أيام قليلة بدقة فائقة.',
      },
    ],
    relatedServiceSlugs: ['restorative-dentistry', 'orthodontics'],
    seo: {
      title: 'تركيبات وتجميل الأسنان في برج العرب | د. معاذ سمير | عيادة الحياة',
      description: 'تركيبات الزيركون والإيماكس وتجميل الأسنان في برج العرب بإشراف د. معاذ سمير. دقة رقمية بالماسح الضوئي ونتائج طبيعية مريحة.',
      keywords: [
        'تركيبات اسنان برج العرب',
        'زيركون برج العرب',
        'تجميل اسنان برج العرب',
        'فينير برج العرب',
        'دكتور تركيبات اسنان برج العرب',
      ],
    },
  },
  {
    id: 'teeth-cleaning',
    slug: 'teeth-cleaning',
    titleAr: 'تنظيف الجير وتلميع الأسنان وعلاج اللثة',
    titleEn: 'Ultrasonic Scaling & Periodontal Care',
    shortDescriptionAr: 'إزالة الرواسب الجيرية وتلميع الأسنان وحماية اللثة من الالتهابات والنزيف.',
    shortDescriptionEn: 'Ultrasonic calculus removal and gentle polishing for healthy gums.',
    overviewAr:
      'تعد جلسة تنظيف وتلميع الأسنان بالموجات فوق الصوتية الخطوة الوقائية الأساسية لحماية اللثة والأسنان من التراجع والالتهاب، حيث تزيل التكلسات والبكتيريا المترسبة تحت وفوق خط اللثة دون أي كشط أو أذى لمينا السن.',
    overviewEn:
      'Preventive ultrasonic scaling and polishing eliminates calculus and plaque, safeguarding gum health.',
    categoryAr: 'العناية الوقائية',
    categoryEn: 'Periodontal Care',
    iconName: 'shield-check',
    heroImage: 'assets/images/cases/case-teeth-cleaning.jpg',
    isFeatured: true,
    isActive: true,
    whoItIsForAr: [
      'نزيف اللثة أثناء تنظيف الأسنان بالفرشاة أو عند تناول الطعام.',
      'تراكم طبقات الجير الصفراء أو البنية خلف الأسنان.',
      'رائحة الفم غير المستحبة الناتجة عن تراكم بكتيريا الجير.',
      'الفحص الوقائي والتنظيف الدوري كل 6 أشهر للحفاظ على صحة الفم.',
    ],
    benefitsAr: [
      'حماية فورية للثة من التراجع والالتهابات المزمنة.',
      'إزالة التصبغات السطحية واستعادة الملمس الأملس النظيف للأسنان.',
      'انتعاش النفس وحماية عظام الفك الداعمة للأسنان.',
    ],
    considerationsAr: [
      'تنظيف الجير لا يضعف الأسنان ولا يزيل طبقة المينا، بل يحميها من التآكل الناتج عن البكتيريا.',
      'قد يشعر المريض بحساسية خفيفة مؤقتة لمدة يوم أو يومين بعد إزالة التكلسات السميكة.',
    ],
    processStepsAr: [
      {
        number: '01',
        titleAr: 'فحص اللثة والأسنان',
        descriptionAr: 'معاينة درجة تراكم الجير وصحة اللثة وعمق الجيوب اللثوية.',
      },
      {
        number: '02',
        titleAr: 'التنظيف بالموجات فوق الصوتية',
        descriptionAr: 'تفتيت التكلسات الجيرية برفق باستخدام ذبذبات الألتراسونيك ورذاذ الماء.',
      },
      {
        number: '03',
        titleAr: 'التلميع اللطيف للأسنان',
        descriptionAr: 'تلميع سطوح الأسنان بمعجون طبي لإزالة التصبغات السطحية وتنعيم المينا.',
      },
      {
        number: '04',
        titleAr: 'إرشادات العناية اليومية',
        descriptionAr: 'توجيه المريض لأفضل طرق التنظيف بالفرشاة والخيط لضمان استمرار صحة اللثة.',
      },
    ],
    usesDigitalTech: false,
    faqs: [
      {
        questionAr: 'كم مرة يجب تنظيف الجير في العيادة؟',
        answerAr: 'يُنصح بإجراء جلسة تنظيف وتلميع الأسنان كل 6 أشهر كإجراء وقائي للحفاظ على سلامة اللثة.',
      },
      {
        questionAr: 'هل تنظيف الجير يسبب تخلخل الأسنان؟',
        answerAr: 'على العكس تماماً، إزالة الجير تحمي الأسنان من فقدان العظم الداعم الذي يسبب التخلخل في حال إهمال العلاج.',
      },
      {
        questionAr: 'هل تبييض الأسنان هو نفسه تنظيف الجير؟',
        answerAr: 'تنظيف الجير يزيل الرواسب والتصبغات السطحية ويعيد السن للونه الطبيعي، بينما التبييض يغير درجة لون السن الداخلية بدرجات أفتح.',
      },
    ],
    relatedServiceSlugs: ['restorative-dentistry', 'orthodontics', 'pediatric-dentistry'],
    seo: {
      title: 'تنظيف وتلميع الأسنان في برج العرب | د. معاذ سمير | عيادة الحياة',
      description: 'جلسات تنظيف الجير وتلميع الأسنان وعلاج اللثة بالموجات فوق الصوتية في برج العرب بإشراف د. معاذ سمير. وقاية متكاملة وابتسامة منتعشة.',
      keywords: [
        'تنظيف اسنان برج العرب',
        'تنظيف الجير برج العرب',
        'علاج اللثة برج العرب',
        'تلميع الاسنان برج العرب',
      ],
    },
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    titleAr: 'طب أسنان الأطفال والرعاية الوقائية',
    titleEn: 'Pediatric Dentistry & Preventive Care',
    shortDescriptionAr: 'رعاية هادئة ولطيفة لصحة أسنان الأطفال وجلسات وقائية بالفلورايد.',
    shortDescriptionEn: 'Gentle, reassuring dental care and fluoride treatments for children.',
    overviewAr:
      'نقدم في عيادة الحياة تجربة مريحة ولطيفة ومطمئنة للأطفال، تركز على علاج تسوس الأسنان اللبنية، وتطبيق جلسات الفلورايد المقوية للمينا وسد الشقوق الوقائي (Fissure Sealants)، مع غرس العادات الصحية الإيجابية للعناية بالفم منذ الصغر.',
    overviewEn:
      'Child-friendly preventive and restorative dentistry promoting early positive oral hygiene habits.',
    categoryAr: 'رعاية الأطفال',
    categoryEn: 'Pediatric Care',
    iconName: 'heart-pulse',
    heroImage: 'assets/images/doctor/dr-moaz-working.jpg',
    isFeatured: true,
    isActive: true,
    whoItIsForAr: [
      'الأطفال في مراحل ظهور الأسنان اللبنية والدائمة.',
      'وجود تسوس أو نخر مبكر في أسنان الأطفال.',
      'الحاجة لجلسات وقائية لتقوية مينا الأسنان ضد التسوس.',
      'التعود على زيارة طبيب الأسنان في بيئة هادئة بدون خوف أو توتر.',
    ],
    benefitsAr: [
      'الحفاظ على الأسنان اللبنية كحافظ مسافة طبيعي للأسنان الدائمة.',
      'توفير تجربة علاجية إيجابية تبني الثقة وتزيل حاجز الخوف لدى الطفل.',
      'حماية الأسنان الدائمة الحديثة الظهور من التسوس المبكر.',
    ],
    considerationsAr: [
      'ننصح ببدء زيارات الكشف المبكر مع ظهور أول سن أو في عمر السنة لتوجيه الوالدين حول التغذية والتنظيف الصحيح.',
    ],
    processStepsAr: [
      {
        number: '01',
        titleAr: 'الاستقبال والتهيئة الودية',
        descriptionAr: 'التعرف على الطفل بلطف وخلق بيئة مرحة لتقليل التوتر والخوف.',
      },
      {
        number: '02',
        titleAr: 'الفحص اللطيف وتقييم الأسنان',
        descriptionAr: 'فحص الأسنان اللبنية ومتابعة بزوغ الأسنان الدائمة وصحة اللثة.',
      },
      {
        number: '03',
        titleAr: 'العلاج أو التطبيق الوقائي',
        descriptionAr: 'إجراء الحشوات اللطيفة أو تطبيق ورنيش الفلورايد وسد شقوق المينا.',
      },
      {
        number: '04',
        titleAr: 'التشجيع والتوعية التفاعلية',
        descriptionAr: 'تعليم الطفل وأولياء الأمور خطوات التنظيف السليمة بأسلوب محبب وممتع.',
      },
    ],
    usesDigitalTech: false,
    faqs: [
      {
        questionAr: 'لماذا نهتم بعلاج الأسنان اللبنية طالما أنها ستتبدل؟',
        answerAr: 'لأن الأسنان اللبنية ضرورية لنطق الطفل ومضغه للطعام، كما أنها تحفظ المكان الصحيح لنمو الأسنان الدائمة وتمنع تزاحمها مستقبلاً.',
      },
      {
        questionAr: 'ما هي جلسات الفلورايد وسد الشقوق؟',
        answerAr: 'إجراءات وقائية سريعة وغير مؤلمة تعمل على تقوية مينا الأسنان وإغلاق الفجوات الدقيقة التي يتجمع فيها الطعام والتسوس.',
      },
    ],
    relatedServiceSlugs: ['teeth-cleaning', 'restorative-dentistry'],
    seo: {
      title: 'طب أسنان الأطفال في برج العرب | د. معاذ سمير | عيادة الحياة',
      description: 'رعاية أسنان هادئة ولطيفة للأطفال في برج العرب بإشراف د. معاذ سمير. جلسات فلورايد، علاج تسوس الأسنان اللبنية، وتوعية وقائية ممتعة.',
      keywords: [
        'دكتور اسنان اطفال برج العرب',
        'اسنان اطفال برج العرب',
        'عيادة اسنان اطفال برج العرب',
        'فلورايد اسنان اطفال برج العرب',
      ],
    },
  },
];

export const INITIAL_TECHNOLOGY: TechnologyItem[] = [
  {
    id: 'intraoral-scanner',
    slug: 'intraoral-scanner',
    titleAr: 'الماسح الضوئي الفموي الرقمي (Intraoral Scanner)',
    titleEn: 'Digital Intraoral Scanner',
    shortDescriptionAr:
      'تقنية رقمية متطورة لأخذ مقاسات الأسنان والتركيبات بدقة عالية وسرعة فائقة دون الحاجة لمواد الطباعة التقليدية (العجينة).',
    shortDescriptionEn:
      'Advanced digital impression scanner replacing conventional tray impressions with high accuracy and patient comfort.',
    overviewAr:
      'جهاز Intraoral Scanner هو أداة رقمية تلتقط بيانات بصرية دقيقة لسطوح الأسنان وأنسجة الفم لإنشاء نموذج ثلاثي الأبعاد عالي الدقة، مما يتيح إرسال المقاسات فورياً وبطريقة رقمية آمنة إلى المعامل المتخصصة لتصميم التركيبات وحالات التقويم.',
    overviewEn:
      'The Intraoral Scanner captures precise optical data of dental arches to create accurate 3D digital models.',
    clinicalPurposeAr: 'أخذ مقاسات رقمية ثلاثية الأبعاد للتركيبات التجميلية وتخطيط التقويم بدقة.',
    clinicalPurposeEn: 'High-precision 3D digital impressions for crowns and orthodontic planning.',
    patientBenefitAr: 'تجربة مريحة وسريعة بدون شعور الغثيان المصاحب لمعجون المقاسات التقليدي.',
    patientBenefitEn: 'Comfortable impression experience avoiding traditional gag-reflex paste.',
    benefitsAr: [
      'راحة أكبر للمريض وتجنب استخدام معجون المقاسات التقليدي في الحالات المناسبة.',
      'سرعة نقل البيانات الرقمية لمعامل الأسنان لتقليل مدة انتظار وتجهيز التركيبات.',
      'تمكين المريض من معاينة أسنانه ونموذجها ثلاثي الأبعاد على الشاشة أثناء الجلسة.',
      'سهولة حفظ وأرشفة المقاسات الرقمية للرجوع إليها في خطط المتابعة المستقبلية.',
    ],
    workflowStepsAr: [
      {
        number: '01',
        titleAr: 'الفحص السريري والتأكد من ملاءمة الإجراء',
        descriptionAr: 'معاينة الحالة سريرياً وتحديد نوع التركيبة أو الخطة التي تتطلب المقاس الرقمي.',
      },
      {
        number: '02',
        titleAr: 'المسح الضوئي اللطيف لسطوح الأسنان',
        descriptionAr: 'تمرير الماسح الضوئي برفق فوق الأسنان لالتقاط الصور والبيانات الدقيقة.',
      },
      {
        number: '03',
        titleAr: 'بناء النموذج الرقمي ثلاثي الأبعاد (3D)',
        descriptionAr: 'معالجة البيانات فورياً وعرض نموذج رقمي ملون يوضح تفاصيل السن والإطباق.',
      },
      {
        number: '04',
        titleAr: 'الإرسال الرقمي الفوري للمعمل المعتمد',
        descriptionAr: 'نقل الملفات الرقمية إلكترونياً لبدء خرط وتصميم التيجان بدقة متناهية.',
      },
      {
        number: '05',
        titleAr: 'التجربة والتثبيت النهائي للتركيبة',
        descriptionAr: 'استلام التاج التجميلي ومطابقته بدقة وسلاسة على السن الطبيعي.',
      },
    ],
    comparisonAr: {
      traditionalTitleAr: 'المقاس التقليدي (معجون الطبعة)',
      traditionalPointsAr: [
        'استخدام قوالب معدنية أو بلاستيكية محشوة بمعجون المقاس.',
        'قد يسبب شعوراً بالانزعاج أو رد فعل الغثيان (Gag Reflex) لبعض المرضى.',
        'الحاجة لصب القالب بالجبس وشحنه يدوياً إلى المعمل.',
        'احتمالية حدوث تشوه طفيف في المادة إذا تعرضت للحرارة أو الضغط.',
      ],
      digitalTitleAr: 'المقاس الرقمي (Intraoral Scanner)',
      digitalPointsAr: [
        'مسح ضوئي خفيف بكاميرا دقيقة دون أي معجون أو مواد داخل الفم.',
        'تجربة مريحة وسريعة تناسب المرضى وتمنع الإحساس المزعج.',
        'ملف ثلاثي الأبعاد يُرسل للمعمل إلكترونياً في ثوانٍ معدودة.',
        'دقة رقمية ميكروسكوبية مع إمكانية التحقق والتعديل على الشاشة فوراً.',
      ],
    },
    relatedServiceSlugs: ['cosmetic-dentistry', 'orthodontics', 'restorative-dentistry'],
    faqs: [
      {
        questionAr: 'ما هو جهاز الـ Intraoral Scanner وكيف يعمل؟',
        answerAr: 'هو كاميرا بصرية متقدمة تُمرر داخل الفم لالتقاط آلاف الصور في ثوانٍ، وتجميعها لتكوين نموذج رقمي ثلاثي الأبعاد مطابق تماماً للأسنان واللثة.',
      },
      {
        questionAr: 'هل المسح الرقمي يغني عن المقاسات التقليدية في كل الحالات؟',
        answerAr: 'يُعد المسح الرقمي خياراً ممتازاً ومريحاً في معظم حالات التركيبات والتقويم، لكن الطبيب يحدد الطريقة الأنسب بناءً على طبيعة الإجراء السريري وموقع الأسنان.',
      },
      {
        questionAr: 'هل استخدام الماسح الرقمي يسبب أي ألم أو حرارة؟',
        answerAr: 'لا على الإطلاق، فالجهاز يعتمد على الضوء البصري فقط ويتحرك بسلاسة دون ملامسة قوية أو إصدار أي حرارة أو ألم.',
      },
      {
        questionAr: 'هل تتوفر تقنية الماسح الرقمي في فرعي عيادة الحياة ببرج العرب؟',
        answerAr: 'نعم، نعتمد سير العمل الرقمي لمرضانا في فرع برج العرب الجديدة وبرج العرب القديمة بالتنسيق المسبق مع الطبيب.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'digital-xray-sensor',
    slug: 'digital-xray-sensor',
    titleAr: 'حساس الأشعة الرقمية (Digital X-Ray Sensor - RVG)',
    titleEn: 'Digital Intraoral X-Ray Sensor',
    shortDescriptionAr:
      'تقنية التصوير الإشعاعي الرقمي الفوري داخل الفم بدقة متناهية مع تقليل نسبة التعرض الإشعاعي بنسبة تفوق 80%.',
    shortDescriptionEn:
      'High-resolution instant intraoral digital radiography sensor with up to 80% reduced radiation exposure.',
    overviewAr:
      'يُعد حساس الأشعة الرقمية (Digital Sensor) من أهم أدوات التشخيص السريري الدقيق في عيادة الحياة، حيث يوفر صوراً فورية عالية التباين لجذور الأسنان وعظام الفك تظهر مباشرة على شاشة العيادة خلال ثوانٍ، مما يتيح تشخيص التسوس الخفي وأمراض الجذور واللثة بأمان وسرعة فائقة.',
    overviewEn:
      'High-definition digital radiography sensors providing instant chairside imagery with minimal radiation dosage.',
    clinicalPurposeAr: 'تشخيص دقيق وفوري لجذور الأسنان، التسوس بين الأسنان، ومتابعة حالات علاج العصب.',
    clinicalPurposeEn: 'Instant diagnosis of interproximal caries, root pathology, and endodontic working length.',
    patientBenefitAr: 'أمان إشعاعي فائق، سرعة فورية بدون انتظار تحميض الأفلام، ورؤية تفاصيل السن بوضوح.',
    patientBenefitEn: 'Ultra-low radiation dose, instant results without chemical processing, and clear visualization.',
    benefitsAr: [
      'تقليل التعرض للإشعاع بنسبة تصل إلى 80-90% مقارنة بالأفلام التقليدية.',
      'ظهور الصورة فورياً على شاشة العرض عالية الدقة أمام المريض في ثوانٍ.',
      'إمكانية تكبير الصورة وتعديل التباين لتشخيص أدق التفاصيل غير المرئية.',
      'أرشفة رقمية متكاملة لملف المريض لمقارنة التطور عبر الزيارات.',
    ],
    workflowStepsAr: [
      {
        number: '01',
        titleAr: 'وضع الحساس الرقمي المريح',
        descriptionAr: 'وضع الحساس ذي الحواف الانسيابية بدقة داخل الفم بجوار السن المراد فحصه.',
      },
      {
        number: '02',
        titleAr: 'التقاط الصورة بأقل جرعة إشعاع',
        descriptionAr: 'تسليط الأشعة لجزء من الثانية بأعلى معايير الأمان الإشعاعي.',
      },
      {
        number: '03',
        titleAr: 'المعالجة والعرض الفوري',
        descriptionAr: 'انتقال الصورة السينية فورياً لشاشة العرض أمام الطبيب والمريض.',
      },
      {
        number: '04',
        titleAr: 'الشرح ووضع خطة العلاج',
        descriptionAr: 'مناقشة حالة السن والجذور مع المريض بوضوح وشفافية تامة.',
      },
    ],
    comparisonAr: {
      traditionalTitleAr: 'الأشعة التقليدية (أفلام التحميض)',
      traditionalPointsAr: [
        'جرعة إشعاعية أعلى مقارنة بالحساسات الرقمية الحديثة.',
        'الحاجة للانتظار لدقائق لتحميض الفيلم بالمواد الكيميائية.',
        'صعوبة تكبير الصورة أو تعديل تباينها بدقة على الشاشة.',
        'عرضة للتلف أو الخدش بمرور الوقت.',
      ],
      digitalTitleAr: 'حساس الأشعة الديجيتال (Digital Sensor)',
      digitalPointsAr: [
        'جرعة إشعاعية منخفضة جداً وآمنة لكافة الفئات.',
        'ظهور الصورة الفوري على شاشة العرض بدون أي مواد تحميض.',
        'إمكانية قياس أطوال الجذور بالأجزاء من المليمتر وتكبير التفاصيل.',
        'حفظ رقمي دائم وسهل الاسترجاع والمقارنة في أي وقت.',
      ],
    },
    relatedServiceSlugs: ['root-canal', 'restorative-dentistry', 'orthodontics'],
    faqs: [
      {
        questionAr: 'هل الأشعة الرقمية آمنة؟',
        answerAr: 'نعم، تتميز الأشعة الرقمية بجرعة منخفضة جداً مقارنة بالأشعة التقليدية وتعتبر آمنة ومطابقة لأعلى معايير السلامة الإشعاعية.',
      },
      {
        questionAr: 'كم من الوقت يستغرق ظهور صورة الأشعة؟',
        answerAr: 'تظهر الصورة فورياً خلال 2 إلى 3 ثوانٍ على الشاشة مباشرة.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'digital-xray-unit',
    slug: 'digital-xray-unit',
    titleAr: 'جهاز الأشعة الديجيتال (Digital X-Ray Unit)',
    titleEn: 'Digital Dental X-Ray Unit',
    shortDescriptionAr:
      'وحدة إشعاعية دقيقة ومحكمة مخصصة لتصوير الأسنان بدقة وأمان متناهي في فرعي العيادة.',
    shortDescriptionEn:
      'High-precision dental X-ray emission unit ensuring targeted diagnosis and optimum patient safety.',
    overviewAr:
      'جهاز الأشعة الديجيتال المعتمد في عيادة الحياة يتميز بتركيز دقيق للشعاع الإشعاعي (DC High Frequency) لضمان أعلى جودة للصورة مع حماية كاملة للمريض وتقليل التشتت الإشعاعي للحد الأدنى، لتشخيص دقيق لجميع حالات الفم والأسنان.',
    overviewEn:
      'State-of-the-art dental X-ray equipment designed for pinpoint diagnostic accuracy and patient comfort.',
    clinicalPurposeAr: 'توفير مصدر إشعاعي فائق الدقة والأمان لتصوير الأسنان والجذور سريرياً.',
    clinicalPurposeEn: 'High-frequency controlled X-ray generator for intraoral diagnostics.',
    patientBenefitAr: 'فحص مريح وسريع، أعلى درجات الأمان والوقاية، مع دقة تشخيصية لا تترك مجالاً للشك.',
    patientBenefitEn: 'Maximum safety, quick non-invasive examination, and reliable diagnosis.',
    benefitsAr: [
      'تكنولوجيا التردد العالي DC التي تضمن نقاء تاماً للصورة.',
      'أعلى معايير الوقاية والسلامة المعتمدة طبياً.',
      'توجيه دقيق وسلس للذراع حول مقعد العلاج لراحة المريض.',
    ],
    relatedServiceSlugs: ['root-canal', 'restorative-dentistry'],
    faqs: [
      {
        questionAr: 'هل يلزم المريض ارتداء واقي الرصاص؟',
        answerAr: 'نعم، نوفر سترة واقية لضمان أقصى درجات الأمان والراحة أثناء التصوير.',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'rotary-endodontics',
    slug: 'rotary-endodontics',
    titleAr: 'أجهزة علاج الجذور وحشو العصب الآلية',
    titleEn: 'Rotary Endodontic System',
    shortDescriptionAr: 'أجهزة متطورة لتنظيف وتشكيل قنوات العصب بدقة عالية وتقليل وقت الجلسة وألم ما بعد العلاج.',
    shortDescriptionEn: 'Precision motor-driven root canal shaping for efficient, painless therapy.',
    overviewAr:
      'تعتمد أجهزة علاج الجذور الآلية (Rotary) على مبارد مرنة من مادة النيكل تيتانيوم تتحرك بحركات دقيقة ومحسوبة لتنظيف وتوسيع قنوات العصب المعقدة بأمان تام، مما يوفر علاجاً دقيقاً ومحكماً في وقت أقصر.',
    overviewEn: 'Rotary endodontic motors provide flexible NiTi instrumentation for thorough root canal disinfection.',
    clinicalPurposeAr: 'علاج العصب بجلسات أسرع وأعلى درجات الدقة والتعقيم لقنوات الجذور.',
    clinicalPurposeEn: 'Efficient and thorough cleaning of root canal anatomy.',
    patientBenefitAr: 'تقليل وقت الجلسة والحد من الإنزعاج بعد انتهاء العلاج.',
    patientBenefitEn: 'Shorter chair time and reduced post-operative discomfort.',
    benefitsAr: [
      'تنظيف وتطهير شامل لأضيق قنوات العصب المنحنية.',
      'تقليل زمن الجلسة بشكل ملحوظ مقارنة بالطرق اليدوية القديمة.',
      'تقليل الشعور بالألم أو التحسس بعد انتهاء جلسة حشو العصب.',
    ],
    relatedServiceSlugs: ['root-canal', 'restorative-dentistry'],
    faqs: [
      {
        questionAr: 'ما ميزة الأجهزة الآلية مقارنة بالطريقة اليدوية في علاج العصب؟',
        answerAr: 'تتميز بالمرونة العالية والقدرة على تنظيف القنوات المنحنية بدقة متناهية وسرعة تختصر وقت الجلسة للمريض.',
      },
    ],
    isFeatured: false,
  },
  {
    id: 'ultrasonic-scaler',
    slug: 'ultrasonic-scaler',
    titleAr: 'أجهزة تنظيف الجير بالموجات فوق الصوتية',
    titleEn: 'Ultrasonic Scaling Unit',
    shortDescriptionAr: 'إزالة لطيفة ودقيقة للتكلسات والرواسب الجيرية العميقة مع الحفاظ الكامل على مينا السن واللثة.',
    shortDescriptionEn: 'Gentle ultrasonic scaling to remove calculus while protecting enamel and soft tissue.',
    overviewAr:
      'تعمل وحدات الألتراسونيك على إصدار ذبذبات متناهية الصغر مع رذاذ ماء لطيف لتفتيت الترسبات الجيرية الصلبة المتراكمة فوق وتحت خط اللثة دون التسبب في أي كشط أو خشونة لسطح السن.',
    overviewEn: 'Ultrasonic scalers gently vibrate calculus away using acoustic micro-streaming.',
    clinicalPurposeAr: 'تنظيف الجير وعلاج التهابات اللثة الوقائي والعلاجي.',
    clinicalPurposeEn: 'Preventive and therapeutic periodontal debridement.',
    patientBenefitAr: 'تنظيف فعال بدون ألم وحماية فورية لصحة اللثة ورائحة الفم.',
    patientBenefitEn: 'Painless, effective plaque removal and instant gum relief.',
    benefitsAr: [
      'تفتيت سريع للتكلسات الصعبة دون كشط مينا السن.',
      'رذاذ ماء منعش يبرد الأنسجة ويغسل الرواسب أولاً بأول.',
      'حماية فورية للثة من النزيف والتراجع المستقبلي.',
    ],
    relatedServiceSlugs: ['teeth-cleaning'],
    faqs: [
      {
        questionAr: 'هل تنظيف الجير بالموجات فوق الصوتية يضعف الأسنان؟',
        answerAr: 'لا، الذبذبات الصوتية مصممة لإزالة الجير الخارجي فقط دون أي تأثير على بنية السن أو مينا الأسنان.',
      },
    ],
    isFeatured: false,
  },
];

export const INITIAL_CASES: CaseStudyItem[] = [
  {
    id: 'ortho-case-1',
    slug: 'orthodontic-alignment-crowding',
    titleAr: 'علاج تزاحم وبروز الأسنان بالتقويم الثابت',
    titleEn: 'Orthodontic Alignment & Occlusion Correction',
    categoryAr: 'تقويم الأسنان',
    categoryEn: 'Orthodontics',
    summaryAr: 'خطة علاجية مخصصة لإعادة اصطفاف الأسنان المتراكبة وتعديل خط الإطباق وتنسيق الابتسامة بأمان.',
    summaryEn: 'Custom orthodontic plan correcting crowded anterior teeth and restoring functional harmony.',
    beforeImage: 'assets/images/cases/case-ortho-braces.jpg',
    afterImage: 'assets/images/cases/case-ortho-braces.jpg',
  },
  {
    id: 'smile-makeover-case-2',
    slug: 'aesthetic-smile-rehabilitation',
    titleAr: 'إعادة تأهيل وتجميل شامل لابتسامة متضررة',
    titleEn: 'Full Aesthetic Smile Makeover',
    categoryAr: 'التركيبات والتجميل',
    categoryEn: 'Cosmetic & Prosthetics',
    summaryAr: 'تعويض وترميم شامل للأسنان المفقودة والمتآكلة لاستعادة وظيفة المضغ والابتسامة الجذابة.',
    summaryEn: 'Restoring damaged and missing teeth with aesthetic, biocompatible crowns.',
    beforeImage: 'assets/images/cases/case-smile-makeover.jpg',
    afterImage: 'assets/images/cases/case-smile-makeover.jpg',
  },
  {
    id: 'composite-anterior-case-4',
    slug: 'anterior-composite-fracture-restoration',
    titleAr: 'ترميم وحشو تجميلي لكسور الأسنان الأمامية',
    titleEn: 'Anterior Composite Fracture Restoration',
    categoryAr: 'العلاجات الترميمية',
    categoryEn: 'Restorative Dentistry',
    summaryAr: 'إعادة بناء كسر الأسنان الأمامية بطبقات كمبوزيت تجميلية مطابقة لشفافية وبريق المينا الطبيعي.',
    summaryEn: 'Conservative aesthetic composite build-up restoring fractured anterior incisors seamlessly.',
    beforeImage: 'assets/images/cases/case-composite-anterior.jpg',
    afterImage: 'assets/images/cases/case-composite-anterior.jpg',
  },
];

export const INITIAL_ARTICLES: ArticleItem[] = [
  {
    id: 'checkup-guide',
    slug: 'importance-of-regular-dental-checkups',
    titleAr: 'أهمية الفحص الدوري للأسنان والكشف المبكر',
    titleEn: 'The Importance of Regular Dental Checkups',
    excerptAr: 'كيف يسهم الفحص الدوري كل 6 أشهر في الوقاية من التسوس وعلاج مشكلات اللثة قبل تطورها وتجنب الإجراءات المعقدة.',
    excerptEn: 'Why biannual dental visits protect your teeth from advanced decay and ensure healthy gums.',
    contentAr:
      'يُعد الفحص الدوري للأسنان حجر الأساس في الحفاظ على صحة الفم واللثة، حيث يساعد الكشف المبكر على معالجة المشكلات البسيطة قبل أن تتطور إلى حالات أكثر تعقيداً.',
    contentEn: 'Regular dental checkups prevent minor caries from turning into severe endodontic issues.',
    categoryAr: 'طب وقائي',
    categoryEn: 'Preventive Care',
    authorAr: 'د. معاذ سمير',
    authorEn: 'Dr. Moaz Samir',
    publishedDate: 'سبتمبر 2026',
    readTimeMinutes: 3,
  },
  {
    id: 'ortho-tips',
    slug: 'orthodontics-care-and-tips',
    titleAr: 'دليل العناية بالأسنان أثناء فترة التقويم',
    titleEn: 'Essential Dental Care Guide for Braces',
    excerptAr: 'إرشادات عملية لتنظيف التقويم والحفاظ على صحة اللثة وتجنب تراكم بقايا الطعام وتصبغات الأسنان.',
    excerptEn: 'Practical hygiene tips to keep your gums healthy and brackets clean during orthodontic treatment.',
    contentAr:
      'تتطلب فترة تقويم الأسنان عناية يومية خاصة للمحافظة على نظافة الأسلاك والحاصرات والوقاية من التهابات اللثة.',
    contentEn: 'Orthodontic treatment requires meticulous daily oral hygiene.',
    categoryAr: 'تقويم الأسنان',
    categoryEn: 'Orthodontics',
    authorAr: 'د. معاذ سمير',
    authorEn: 'Dr. Moaz Samir',
    publishedDate: 'سبتمبر 2026',
    readTimeMinutes: 4,
  },
  {
    id: 'root-canal-facts',
    slug: 'root-canal-facts-and-myths',
    titleAr: 'حقائق وشائعات حول علاج وحشو العصب',
    titleEn: 'Facts & Myths About Root Canal Treatment',
    excerptAr: 'توضيح علمي مبسط حول جلسات علاج الجذور وكيف تساعد التقنيات الحديثة في إجراء الجلسة براحة تامة بدون ألم.',
    excerptEn: 'A clear explanation of modern rotary endodontics and how it preserves natural teeth painlessly.',
    contentAr:
      'يهدف علاج العصب إلى إنقاذ السن الطبيعي ومنع فقدانه، وتتيح الأجهزة الحديثة إتمام الإجراء بدقة وأعلى درجات الراحة.',
    contentEn: 'Modern root canal therapy is designed to save teeth and relieve pain efficiently.',
    categoryAr: 'علاج الجذور',
    categoryEn: 'Endodontics',
    authorAr: 'د. معاذ سمير',
    authorEn: 'Dr. Moaz Samir',
    publishedDate: 'سبتمبر 2026',
    readTimeMinutes: 3,
  },
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [];
