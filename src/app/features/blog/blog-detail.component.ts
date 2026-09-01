import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ArticleRendererComponent } from './components/article-renderer/article-renderer.component';
import { ArticleTocComponent } from './components/article-toc/article-toc.component';
import { ArticleShareComponent } from './components/article-share/article-share.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ServiceFaqComponent } from '../services/components/service-faq/service-faq.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { SectionHeadingComponent } from '../../shared/components/ui/section-heading/section-heading.component';
import { BlogService } from '../../core/services/blog.service';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, DOCTOR_PROFILE, INITIAL_SERVICES } from '../../core/config/clinic.config';
import { Article, HeadingBlock } from '../../core/models/article.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArticleRendererComponent,
    ArticleTocComponent,
    ArticleShareComponent,
    ArticleCardComponent,
    ServiceFaqComponent,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly blogService = inject(BlogService);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly allServices = INITIAL_SERVICES;

  activeArticle = signal<Article | undefined>(undefined);

  readonly articleUrl = computed(() => {
    const slug = this.activeArticle()?.slug || '';
    return `${CLINIC_CONFIG.defaultSeo.siteUrl}/blog/${slug}`;
  });

  readonly articleHeadings = computed<HeadingBlock[]>(() => {
    const blocks = this.activeArticle()?.blocks || [];
    return blocks.filter((b): b is HeadingBlock => b.type === 'heading');
  });

  readonly relatedServices = computed(() => {
    const slugs = this.activeArticle()?.relatedServiceSlugs || [];
    return this.allServices.filter((s) => slugs.includes(s.slug));
  });

  readonly relatedArticles = computed(() => {
    const art = this.activeArticle();
    if (!art) return [];
    return this.blogService.getRelatedArticles(art.slug, art.category);
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.blogService.getArticleBySlug(slug);
        this.activeArticle.set(found);

        if (found) {
          this.configureSeo(found);
          this.analyticsService.trackEvent('article_view', {
            category: 'navigation',
            article_slug: found.slug,
            article_id: found.id,
            article_category: found.category,
          });
        } else {
          this.configureNotFoundSeo();
        }
      }
    });
  }

  private configureSeo(article: Article): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'المقالات والتثقيف الصحي', url: '/blog' },
      { name: article.titleAr, url: `/blog/${article.slug}` },
    ]);

    const articleSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.titleAr,
      description: article.excerptAr,
      datePublished: article.publishedDate,
      dateModified: article.updatedDate || article.publishedDate,
      author: {
        '@type': 'Person',
        name: article.authorNameAr,
        jobTitle: article.authorTitleAr,
      },
      publisher: {
        '@type': 'Dentist',
        name: CLINIC_CONFIG.clinicNameAr,
        url: CLINIC_CONFIG.defaultSeo.siteUrl,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${CLINIC_CONFIG.defaultSeo.siteUrl}/blog/${article.slug}`,
      },
    };

    const schemas: Array<Record<string, unknown>> = [
      breadcrumbsSchema,
      articleSchema,
      this.seoService.getDefaultClinicSchema(),
    ];

    if (article.faqs && article.faqs.length > 0) {
      schemas.push(
        this.seoService.getFaqSchema(
          article.faqs.map((f) => ({
            questionAr: f.questionAr,
            answerAr: f.answerAr,
          }))
        )
      );
    }

    this.seoService.update({
      title: `${article.titleAr} | مدونة عيادة الحياة لطب الأسنان`,
      description: `${article.excerptAr} إرشادات طبية موثوقة بقلم د. معاذ سمير في عيادة الحياة ببرج العرب.`,
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/blog/${article.slug}`,
      keywords: [
        article.titleAr,
        article.categoryAr,
        ...(article.tags || []),
        'دكتور معاذ سمير',
        'عيادة الحياة لطب الاسنان',
        'برج العرب',
      ],
      jsonLd: schemas,
    });
  }

  private configureNotFoundSeo(): void {
    this.seoService.update({
      title: 'المقال غير موجود | عيادة الحياة لطب الأسنان',
      description: 'عذراً، لم نتمكن من العثور على المقال المطلوب.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/blog`,
    });
  }

  onShareClick(platform: string): void {
    const art = this.activeArticle();
    this.analyticsService.trackEvent('article_share', {
      category: 'engagement',
      share_platform: platform,
      article_slug: art?.slug,
      article_id: art?.id,
    });
  }

  onBookingClick(source: string): void {
    const art = this.activeArticle();
    this.analyticsService.trackEvent('article_booking_click', {
      category: 'conversion',
      cta_location: source,
      article_slug: art?.slug,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    const art = this.activeArticle();
    this.analyticsService.trackEvent('article_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
      article_slug: art?.slug,
    });
    const msg = `السلام عليكم، أود حجز موعد استشارة كشف بعد قراءة مقال (${art?.titleAr || 'عيادة الحياة'}).`;
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    const art = this.activeArticle();
    this.analyticsService.trackEvent('article_phone_click', {
      category: 'conversion',
      cta_location: source,
      article_slug: art?.slug,
    });
    this.contactService.callClinic(undefined, source);
  }
}
