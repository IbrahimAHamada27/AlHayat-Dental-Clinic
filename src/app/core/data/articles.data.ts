import { Article } from '../models/article.model';

export const DENTAL_ARTICLES: Article[] = [
  {
    id: 'art-tartar-signs',
    slug: 'tartar-warning-signs-and-scaling',
    titleAr: 'علامات بتقولك إنك محتاج تنظيف جير!',
    titleEn: '5 Signs You Need Professional Dental Scaling',
    excerptAr:
      'لو عندك واحدة أو أكتر من العلامات دي، ما تستناش المشكلة تكبر! الجير مش مجرد مشكلة في شكل الأسنان بل يهدد صحة اللثة.',
    excerptEn:
      'Key warning signs indicating dental tartar accumulation and why professional cleaning is required.',
    category: 'oral-hygiene',
    categoryAr: 'تنظيف الجير وصحة اللثة',
    categoryEn: 'Tartar Scaling & Gum Care',
    tags: ['تنظيف الجير', 'جير الأسنان', 'صحة اللثة', 'تنظيف الأسنان', 'دكتور معاذ سمير', 'برج العرب'],
    readingTimeMinutes: 3,
    publishedDate: '2026-09-05',
    authorId: 'dr-moaz-samir',
    authorNameAr: 'د. معاذ سمير',
    authorTitleAr: 'طبيب أسنان — عيادة الحياة لطب الأسنان',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'tartar-signs-intro',
        textAr: 'أبرز علامات الحاجة لإزالة وتنظيف الجير',
      },
      {
        type: 'paragraph',
        textAr:
          'لو عندك واحدة أو أكتر من العلامات دي، ما تستناش المشكلة تكبر، فصحة أسنانك ونظافتها تبدأ بإزالة الجير والتكلسات في الوقت المناسب.',
      },
      {
        type: 'list',
        itemsAr: [
          '🔸 رائحة فم مزعجة بشكل متكرر.',
          '🔸 نزيف اللثة أثناء غسل الأسنان بالفرشاة.',
          '🔸 اصفرار أو تراكمات جيرية واضحة على الأسنان.',
          '🔸 إحساس بخشونة أو طبقة صلبة على سطح الأسنان.',
          '🔸 احمرار أو تورم وانزعاج في اللثة.',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        titleAr: 'ليه الجير مش مجرد مشكلة في شكل الأسنان؟',
        textAr:
          'الجير مش مجرد مشكلة في شكل الأسنان؛ تراكمه ممكن يهيّج اللثة ويسبب التهابها ورائحة الفم الكريهة، والجير المتصلب لا يمكن إزالته بالفرشاة العادية ويحتاج لتنظيف احترافي بالموجات فوق الصوتية عند طبيب الأسنان.',
      },
    ],
    faqs: [
      {
        questionAr: 'هل يمكن إزالة الجير المتصلب بالفرشاة والمعجون في المنزل؟',
        answerAr:
          'لا، الجير عبارة عن بلاك متصلّب وملتصق بشدة بسطح السن ولا يزول بالفرشاة المنزلية، ويحتاج لأجهزة تنظيف الجير الدقيقة في عيادة الأسنان.',
      },
    ],
    relatedServiceSlugs: ['teeth-cleaning'],
    relatedLocationSlugs: ['new-borg-el-arab', 'old-borg-el-arab'],
    isFeatured: true,
    status: 'published',
  },
  {
    id: 'art-tartar-pigmentation',
    slug: 'tartar-and-stains-oral-health-impact',
    titleAr: 'تراكم الجير والتصبغات مش مجرد مشكلة في شكل الأسنان!',
    titleEn: 'Tartar and Stains: Impact Beyond Appearance',
    excerptAr:
      'هل بتلاحظ تغير لون أسنانك أو وجود ترسبات صفراء وبنية؟ تعرف على تأثير الجير والتصبغات على صحة الفم واللثة.',
    excerptEn:
      'Understanding how plaque, tartar, and surface stains cause gum inflammation and tooth issues.',
    category: 'oral-hygiene',
    categoryAr: 'العناية باللثة والتنظيف',
    categoryEn: 'Gum Health & Scaling',
    tags: ['تراكم الجير', 'تصبغات الأسنان', 'إزالة الجير', 'ابتسامة صحية', 'دكتور معاذ سمير', 'برج العرب'],
    readingTimeMinutes: 3,
    publishedDate: '2026-09-05',
    authorId: 'dr-moaz-samir',
    authorNameAr: 'د. معاذ سمير',
    authorTitleAr: 'طبيب أسنان — عيادة الحياة لطب الأسنان',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'stains-and-tartar',
        textAr: 'هل بتلاحظ ترسبات أو التغير في لون الأسنان؟',
      },
      {
        type: 'paragraph',
        textAr:
          'بتلاحظ إن أسنانك لونها اتغير؟ أو فيه ترسبات صفراء أو بنية حوالين الأسنان واللثة؟ ممكن يكون السبب تراكم الجير والتصبغات.',
      },
      {
        type: 'paragraph',
        textAr:
          'الجير هو بلاك متصلّب، ومش بيختفي بالفرشاة العادية، ومع تراكمه ممكن يسبب التهاب ونزيف اللثة، رائحة الفم الكريهة ومشاكل بالأسنان واللثة.',
      },
      {
        type: 'callout',
        variant: 'info',
        titleAr: 'فوائد التنظيف الاحترافي للأسنان',
        textAr:
          'تنظيف الأسنان بشكل احترافي بيساعد على إزالة الجير والتصبغات السطحية والحفاظ على ابتسامة أنظف وصحة أفضل للثة.. ابتسامتك مش بس شكل دي جزء من صحتك.',
      },
    ],
    faqs: [
      {
        questionAr: 'كم مرة يُنصح بإجراء تنظيف الأسنان وإزالة التصبغات؟',
        answerAr:
          'يُنصح بإجراء تنظيف احترافي للجير والتصبغات السطحية كل 6 أشهر للحفاظ على سلامة اللثة والوقاية من الالتهابات.',
      },
    ],
    relatedServiceSlugs: ['teeth-cleaning'],
    relatedLocationSlugs: ['new-borg-el-arab', 'old-borg-el-arab'],
    isFeatured: true,
    status: 'published',
  },
  {
    id: 'art-001',
    slug: 'when-to-start-orthodontics',
    titleAr: 'متى يجب استشارة طبيب الأسنان بشأن تقويم الأسنان؟',
    titleEn: 'When Should You Consider an Orthodontic Evaluation?',
    excerptAr:
      'دليل مبسط يوضح العلامات السريرية التي تستدعي فحص التقويم وأهمية التقييم المبكر لاصطفاف الفكين وصحة الإطباق.',
    excerptEn:
      'A practical guide outlining clinical indications for orthodontic evaluation and the importance of timely assessment.',
    category: 'orthodontics',
    categoryAr: 'تقويم الأسنان',
    categoryEn: 'Orthodontics',
    tags: ['تقويم الأسنان', 'ازدحام الأسنان', 'صحة الإطباق', 'برج العرب'],
    readingTimeMinutes: 5,
    publishedDate: '2026-08-15',
    updatedDate: '2026-09-01',
    authorId: 'dr-moaz-samir',
    authorNameAr: 'د. معاذ سمير',
    authorTitleAr: 'طبيب أسنان — عيادة الحياة لطب الأسنان',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'early-evaluation',
        textAr: 'أهمية الفحص والتقييم لتقويم الأسنان',
      },
      {
        type: 'paragraph',
        textAr:
          'يُعد تقويم الأسنان إجراءً علاجياً وتجميلياً متكاملاً يهدف إلى تصحيح تراكب الأسنان، وسوء الإطباق، وضبط العلاقة الوظيفية بين الفكين العلوي والسفلي لتوفير بيئة فموية صحية، متناسقة، وسهلة التنظيف اليومي.',
      },
      {
        type: 'heading',
        level: 2,
        id: 'clinical-signs',
        textAr: 'علامات سريرية تشير إلى الحاجة لاستشارة التقويم',
      },
      {
        type: 'paragraph',
        textAr:
          'هناك مؤشرات شائعة تجعل زيارة طبيب الأسنان لتقييم الحاجة إلى تقويم خطوة ضرورية للحفاظ على صحة الأسنان ومفصل الفك:',
      },
      {
        type: 'list',
        itemsAr: [
          'تزاحم وتداخل الأسنان مما يصعب تنظيفها بالفرشاة والخيط ويزيد من تراكم الجير.',
          'وجود فراغات ملحوظة وغير متناسقة بين الأسنان تؤثر على المظهر ومضغ الطعام.',
          'عدم تطابق الأسنان العلوية مع السفلية عند إغلاق الفم (العضة المفتوحة أو العضة المعكوسة).`',
          'بروز الأسنان الأمامية مما يعرضها لخطر الصدمات أو يؤثر على إغلاق الشفتين.',
          'صعوبة أو انزعاج أثناء مضغ الطعام أو صدور صوت من مفصل الفك.',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        titleAr: 'تنويه سريري حول العمر المناسب للتقويم',
        textAr:
          'لا يوجد عمر محدد يمنع علاج تقويم الأسنان؛ فالتقويم مناسب للأطفال والبالغين على حد سواء متى ما كانت صحة اللثة وعظام الفك الداعمة بحالة سليمة ومستقرة.',
      },
      {
        type: 'heading',
        level: 2,
        id: 'first-consultation',
        textAr: 'ماذا تتوقع خلال جلسة التقييم الأولى؟',
      },
      {
        type: 'paragraph',
        textAr:
          'يقوم د. معاذ سمير في عيادة الحياة بإجراء فحص سريري دقيق للأسنان وعلاقة الإطباق، وأخذ صور تشخيصية ومقاسات دقيقة لدراسة الحالة وتحديد الخطة العلاجية الملائمة والمدة الزمنية التقديرية.',
      },
    ],
    faqs: [
      {
        questionAr: 'هل يسبب تركيب جهاز التقويم ألماً؟',
        answerAr:
          'قد يشعر المريض بضغط خفيف أو انزعاج بسيط في الأيام الأولى بعد وضع أو شد التقويم، وهو أمر طبيعي مؤقت يزول تدريجياً مع اعتياد عضلات الفم واللثة.',
      },
      {
        questionAr: 'كم تستغرق مدة علاج تقويم الأسنان عادة؟',
        answerAr:
          'تختلف المدة بحسب درجة الازدحام ونوع خطة العلاج ومدى استجابة الأنسجة، وتتراوح في الغالب بين عدة أشهر إلى سنة ونصف بحسب تقييم الطبيب.',
      },
    ],
    relatedServiceSlugs: ['orthodontics', 'teeth-cleaning'],
    relatedCaseSlugs: ['orthodontic-alignment-crowding'],
    relatedLocationSlugs: ['new-borg-el-arab', 'old-borg-el-arab'],
    isFeatured: true,
    status: 'published',
  },
  {
    id: 'art-002',
    slug: 'intraoral-scanner-vs-traditional-impressions',
    titleAr: 'الماسح الفموي الرقمي 3D: ما هو وكيف يختلف عن المقاسات التقليدية؟',
    titleEn: 'Intraoral 3D Scanner vs Traditional Dental Impressions',
    excerptAr:
      'تعرف على تقنية الـ Intraoral Scanner وكيف جعلت أخذ مقاسات التركيبات والتقويم أكثر دقة وراحة للمريض.',
    excerptEn:
      'Explore 3D intraoral scanning technology and how it improves comfort and precision over traditional impression trays.',
    category: 'digital-dentistry',
    categoryAr: 'طب الأسنان الرقمي',
    categoryEn: 'Digital Dentistry',
    tags: ['طب الأسنان الرقمي', 'Intraoral Scanner', 'تركيبات الأسنان', 'برج العرب'],
    readingTimeMinutes: 4,
    publishedDate: '2026-08-20',
    updatedDate: '2026-09-01',
    authorId: 'dr-moaz-samir',
    authorNameAr: 'د. معاذ سمير',
    authorTitleAr: 'طبيب أسنان — عيادة الحياة لطب الأسنان',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'what-is-scanner',
        textAr: 'ما هو الماسح الفموي الرقمي (Intraoral Scanner)؟',
      },
      {
        type: 'paragraph',
        textAr:
          'هو جهاز تصوير بصري متطور بحجم مدمج يُستخدم داخل الفم لالتقاط آلاف الصور الدقيقة في ثوانٍ معدودة، ثم تجميعها برمجياً لإنشاء نموذج ثلاثي الأبعاد فائق الدقة للأسنان واللثة يظهر مباشرة على شاشة العيادة.',
      },
      {
        type: 'heading',
        level: 2,
        id: 'digital-vs-traditional',
        textAr: 'أبرز الفروق بين المقاس الرقمي ومعجون الطبعة التقليدي',
      },
      {
        type: 'list',
        itemsAr: [
          'راحة المريض: الاستغناء عن صواني ومعجون المقاسات الكثيف الذي كان يسبب شعوراً بالانزعاج أو الغثيان لدى الكثيرين.',
          'دقة متناهية: التقاط حواف التحضير وتفاصيل السن واللثة بدقة عالية تقلل من احتمالية إعادة أخذ المقاس.',
          'نقل رقمي فوري: إرسال النموذج 3D مباشرة عبر الإنترنت إلى معمل الأسنان دون الحاجة لشحن قوالب الجبس يدوياً.',
          'أرشفة دائمة: إمكانية حفظ ملف الأسنان الرقمي للرجوع إليه ومقارنة التغيرات في أي زيارات مستقبلية.',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        titleAr: 'التكنولوجيا وسيلة سريرية وليست غاية',
        textAr:
          'الهدف الأساسي من توظيف الماسح الرقمي هو تحسين جودة الخطوات العلاجية وتوفير أقصى درجات الراحة للمريض، ويبقى الفحص السريري المباشر هو حجر الأساس في التشخيص.',
      },
    ],
    faqs: [
      {
        questionAr: 'هل تصدر كاميرا الماسح الضوئي أي إشعاعات؟',
        answerAr:
          'لا، الماسح الفموي يعتمد بالكامل على الضوء المرئي والتقاط الصور الرقمية العادية، ولا يستخدم أي نوع من الأشعة السينية أو الإشعاع.',
      },
    ],
    relatedServiceSlugs: ['cosmetic-dentistry', 'orthodontics', 'restorative-dentistry'],
    relatedCaseSlugs: ['aesthetic-zirconia-restoration'],
    relatedLocationSlugs: ['new-borg-el-arab', 'old-borg-el-arab'],
    isFeatured: false,
    status: 'published',
  },
  {
    id: 'art-003',
    slug: 'daily-oral-hygiene-flossing-tips',
    titleAr: 'الدليل العملي للعناية اليومية بصحة الفم واستخدام خيط الأسنان',
    titleEn: 'Practical Guide to Daily Oral Hygiene & Flossing',
    excerptAr:
      'إرشادات وقائية مبسطة للحفاظ على صحة وسلامة اللثة وحماية الأسنان من التسوس وتراكم التكلسات الجيرية.',
    excerptEn:
      'Evidence-based preventive tips for optimal gum health and proper daily dental flossing techniques.',
    category: 'oral-hygiene',
    categoryAr: 'العناية وصحة الفم',
    categoryEn: 'Oral Hygiene',
    tags: ['صحة الفم', 'تنظيف الأسنان', 'خيط الأسنان', 'الوقاية'],
    readingTimeMinutes: 4,
    publishedDate: '2026-08-25',
    authorId: 'dr-moaz-samir',
    authorNameAr: 'د. معاذ سمير',
    authorTitleAr: 'طبيب أسنان — عيادة الحياة لطب الأسنان',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'why-brush-not-enough',
        textAr: 'لماذا لا تكفي فرشاة الأسنان بمفردها؟',
      },
      {
        type: 'paragraph',
        textAr:
          'تستطيع فرشاة الأسنان تنظيف الأسطح الخارجية والداخلية وسطح المضغ، ولكنها تعجز عن الوصول إلى المناطق التلامسية الضيقة بين الأسنان المتجاورة، وهي الأماكن الأكثر عرضة لتراكم بقايا الطعام وبدء نخر الأسنان والتهاب اللثة.',
      },
      {
        type: 'heading',
        level: 2,
        id: 'flossing-guide',
        textAr: 'الخطوات الصحيحة لاستخدام خيط الأسنان الطبي',
      },
      {
        type: 'list',
        itemsAr: [
          'اقطع خيطاً بطول مناسب (حوالي 30-40 سم) ولف أطرافه برفق حول إصبعي الوسطى.',
          'مرر الخيط برفق بحركة انسيابية بين السنين دون ضغط حاد ومفاجئ على اللثة.',
          'شكّل الخيط على هيئة حرف (C) حول جانب السن، وحركه برفق من الأسفل للأعلى لإزالة العوالق.',
          'كرر الإجراء بين كافة الأسنان باستخدام جزء نظيف من الخيط لكل فراغ.',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        titleAr: 'أهمية جلسة تنظيف الجير الدورية',
        textAr:
          'حتى مع العناية المنزلية المنتظمة، تتصلب بعض المعادن مشكلة طبقة جيرية لا تزول إلا في العيادة؛ لذا يُنصح بإجراء جلسة تنظيف وتلميع دورية كل 6 أشهر.',
      },
    ],
    faqs: [
      {
        questionAr: 'هل يسبب خيط الأسنان نزيف اللثة؟',
        answerAr:
          'في البداية، قد تلاحظ نزيفاً خفيفاً إذا كانت اللثة تعاني من التهاب بسيط نتيجة تراكم البلاك. مع الاستخدام اليومي اللطيف والمنتظم، تستعيد اللثة صحتها ويتوقف النزيف.',
      },
    ],
    relatedServiceSlugs: ['teeth-cleaning', 'restorative-dentistry'],
    relatedLocationSlugs: ['new-borg-el-arab', 'old-borg-el-arab'],
    isFeatured: false,
    status: 'published',
  },
  {
    id: 'art-004',
    slug: 'cosmetic-composite-fillings-guide',
    titleAr: 'الحشوات التجميلية: متى تكون الخيار الأنسب لحماية وتجميل السن؟',
    titleEn: 'Cosmetic Composite Fillings: Indications and Benefits',
    excerptAr:
      'تعرف على حشوات الكمبوزيت التجميلية ومميزاتها في علاج التسوس وترميم الأسنان بمظهر طبيعي مطابق للمينا.',
    excerptEn:
      'Learn about tooth-colored composite restorations and how they preserve natural tooth structure with aesthetic results.',
    category: 'cosmetic',
    categoryAr: 'تجميل وترميم الأسنان',
    categoryEn: 'Cosmetic Dentistry',
    tags: ['حشوات تجميلية', 'علاج التسوس', 'ترميم الأسنان', 'برج العرب'],
    readingTimeMinutes: 4,
    publishedDate: '2026-08-28',
    authorId: 'dr-moaz-samir',
    authorNameAr: 'د. معاذ سمير',
    authorTitleAr: 'طبيب أسنان — عيادة الحياة لطب الأسنان',
    blocks: [
      {
        type: 'heading',
        level: 2,
        id: 'what-is-composite',
        textAr: 'ما هي حشوات الكمبوزيت التجميلية؟',
      },
      {
        type: 'paragraph',
        textAr:
          'هي مواد راتنجية طبية متقدمة معززة بجزيئات ميكروسكوبية تلتصق كيميائياً وميكانيكياً ببنية السن الطبيعي. تتميز بتنوع تدرجاتها اللونية بحيث تتطابق بدقة مع لون وشفافية الأسنان المحيطة.',
      },
      {
        type: 'heading',
        level: 2,
        id: 'indications',
        textAr: 'أبرز دواعي استخدام الحشوات التجميلية',
      },
      {
        type: 'list',
        itemsAr: [
          'إزالة التسوس والنخر في الأسنان الأمامية والخلفية وإعادة بنائها.',
          'ترميم الشقوق والكسور البسيطة في حواف الأسنان الناتجة عن الصدمات أو العض القوي.',
          'إغلاق المسافات البسيطة بين الأسنان وتعديل شكل حوافها برفق.',
          'استبدال الحشوات القديمة المتآكلة بحشوات حديثة متوافقة بيولوجياً.',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        titleAr: 'الحفاظ على الأنسجة السليمة للسن',
        textAr:
          'تعتمد الحشوات التجميلية على مبدأ طب الأسنان التحفظي (Minimally Invasive Dentistry)؛ حيث يتم إزالة الجزء المتسوس فقط مع الحفاظ على أكبر قدر ممكن من مينا وعاج السن السليم.',
      },
    ],
    faqs: [
      {
        questionAr: 'كم تدوم الحشوة التجميلية؟',
        answerAr:
          'تدوم الحشوة التجميلية لسنوات طويلة مع العناية الفموية الجيدة وتجنب قضم الأشياء الصلبة، وتظل بحالة ممتازة مع الفحص الدوري المنتظم.',
      },
    ],
    relatedServiceSlugs: ['restorative-dentistry', 'cosmetic-dentistry'],
    relatedCaseSlugs: ['composite-aesthetic-fillings'],
    relatedLocationSlugs: ['new-borg-el-arab', 'old-borg-el-arab'],
    isFeatured: false,
    status: 'published',
  },
];
