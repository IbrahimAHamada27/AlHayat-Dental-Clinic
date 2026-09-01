import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { BlogService } from '../../core/services/blog.service';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { ContactService } from '../../core/services/contact.service';
import { CLINIC_CONFIG, DOCTOR_PROFILE } from '../../core/config/clinic.config';
import { Article, ArticleCategory } from '../../core/models/article.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArticleCardComponent,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);
  private readonly router = inject(Router);

  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly categories = this.blogService.getCategories();
  readonly allArticles = this.blogService.getArticles();

  searchQuery = signal<string>('');
  selectedCategory = signal<ArticleCategory | 'all'>('all');

  filteredArticles = computed(() => {
    return this.blogService.searchArticles(this.searchQuery(), this.selectedCategory());
  });

  featuredArticle = computed(() => {
    return this.blogService.getFeaturedArticle();
  });

  latestArticles = computed(() => {
    const list = this.filteredArticles();
    if (this.selectedCategory() === 'all' && !this.searchQuery()) {
      return list.filter((a) => a.id !== this.featuredArticle()?.id);
    }
    return list;
  });

  ngOnInit(): void {
    const breadcrumbsSchema = this.seoService.getBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'المقالات والتثقيف الصحي', url: '/blog' },
    ]);

    this.seoService.update({
      title: 'مقالات ومعلومات طب الأسنان | د. معاذ سمير — عيادة الحياة',
      description:
        'مركز المعرفة والتثقيف الصحي لصحة الفم والأسنان في عيادة الحياة ببرج العرب بإشراف د. معاذ سمير. إرشادات مبسطة حول التقويم، التركيبات، وطب الأسنان الرقمي.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/blog`,
      keywords: [
        'معلومات طب الاسنان',
        'نصائح تقويم الاسنان',
        'العناية بالفم والاسنان',
        'دكتور معاذ سمير مقالات',
        'عيادة الحياة لطب الاسنان برج العرب',
      ],
      jsonLd: [breadcrumbsSchema, this.seoService.getDefaultClinicSchema()],
    });

    this.analyticsService.trackEvent('blog_page_view', {
      category: 'navigation',
      label: 'blog_index_viewed',
    });
  }

  setCategory(cat: ArticleCategory | 'all'): void {
    this.selectedCategory.set(cat);
    this.analyticsService.trackEvent('article_category_filter', {
      category: 'engagement',
      article_category: cat,
    });
  }

  onSearchInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
    if (val.length > 2) {
      this.analyticsService.trackEvent('article_search', {
        category: 'search',
        search_query: val,
      });
    }
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  onArticleClick(article: Article): void {
    this.analyticsService.trackEvent('article_preview_click', {
      category: 'navigation',
      article_slug: article.slug,
      article_id: article.id,
      article_category: article.category,
    });
  }

  onBookingClick(source: string): void {
    this.analyticsService.trackEvent('article_booking_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.analyticsService.trackBookingStart(source);
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(source: string): void {
    this.analyticsService.trackEvent('article_whatsapp_click', {
      category: 'conversion',
      cta_location: source,
    });
    const msg = 'السلام عليكم، أود الاستفسار عن استشارة طبية بخصوص أحد المواضيع المنشورة في مدونة عيادة الحياة.';
    this.whatsAppService.openWhatsApp(msg, source);
  }

  onPhoneClick(source: string): void {
    this.analyticsService.trackEvent('article_phone_click', {
      category: 'conversion',
      cta_location: source,
    });
    this.contactService.callClinic(undefined, source);
  }
}
