import { Injectable } from '@angular/core';
import { Article, ArticleCategory } from '../models/article.model';
import { DENTAL_ARTICLES } from '../data/articles.data';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly articles: Article[] = DENTAL_ARTICLES;

  /**
   * Returns all published educational articles
   */
  getArticles(): readonly Article[] {
    return this.articles.filter((a) => a.status === 'published');
  }

  /**
   * Returns the spotlight/featured article
   */
  getFeaturedArticle(): Article | undefined {
    return this.getArticles().find((a) => a.isFeatured) || this.getArticles()[0];
  }

  /**
   * Filters published articles by category
   */
  getArticlesByCategory(category: ArticleCategory | 'all'): readonly Article[] {
    if (category === 'all') {
      return this.getArticles();
    }
    return this.getArticles().filter((a) => a.category === category);
  }

  /**
   * Resolves a single article by its URL slug
   */
  getArticleBySlug(slug: string): Article | undefined {
    return this.getArticles().find((a) => a.slug === slug);
  }

  /**
   * Searches published articles across title, excerpt, and tags
   */
  searchArticles(query: string, category: ArticleCategory | 'all' = 'all'): readonly Article[] {
    let list = this.getArticlesByCategory(category);
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      return list;
    }

    return list.filter((a) => {
      const matchTitle = a.titleAr.toLowerCase().includes(cleanQuery);
      const matchExcerpt = a.excerptAr.toLowerCase().includes(cleanQuery);
      const matchTags = a.tags?.some((t) => t.toLowerCase().includes(cleanQuery));
      const matchCat = a.categoryAr.toLowerCase().includes(cleanQuery);
      return matchTitle || matchExcerpt || matchTags || matchCat;
    });
  }

  /**
   * Returns related articles excluding current one
   */
  getRelatedArticles(currentSlug: string, category: ArticleCategory, limit = 2): readonly Article[] {
    return this.getArticles()
      .filter((a) => a.slug !== currentSlug && a.category === category)
      .slice(0, limit);
  }

  /**
   * Returns available categories present in published articles
   */
  getCategories(): Array<{ id: ArticleCategory | 'all'; labelAr: string }> {
    const list: Array<{ id: ArticleCategory | 'all'; labelAr: string }> = [
      { id: 'all', labelAr: 'كافة المقالات' },
      { id: 'orthodontics', labelAr: 'تقويم الأسنان' },
      { id: 'digital-dentistry', labelAr: 'طب الأسنان الرقمي' },
      { id: 'oral-hygiene', labelAr: 'العناية وصحة الفم' },
      { id: 'cosmetic', labelAr: 'تجميل وترميم الأسنان' },
    ];
    return list;
  }
}
