import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SeoConfig } from '../models/seo.model';
import { Doctor } from '../models/doctor.model';
import { ServiceItem, ServiceFaqItem } from '../models/service.model';
import { CLINIC_CONFIG } from '../config/clinic.config';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private jsonLdScriptElement?: HTMLScriptElement;

  /**
   * Updates page SEO metadata including OpenGraph, Twitter, and canonical URLs
   */
  update(seo: Partial<SeoConfig>): void {
    const fullTitle = seo.title
      ? `${seo.title} | ${CLINIC_CONFIG.clinicNameAr}`
      : CLINIC_CONFIG.defaultSeo.defaultTitleAr;

    const description = seo.description || CLINIC_CONFIG.defaultSeo.defaultDescriptionAr;
    const url = seo.canonical || CLINIC_CONFIG.defaultSeo.siteUrl;
    let image = seo.ogImage || CLINIC_CONFIG.defaultSeo.ogImage;
    if (image && !image.startsWith('http://') && !image.startsWith('https://')) {
      const cleanBase = CLINIC_CONFIG.defaultSeo.siteUrl.replace(/\/$/, '');
      const cleanPath = image.replace(/^\//, '');
      image = `${cleanBase}/${cleanPath}`;
    }
    const ogType = seo.ogType || 'website';
    const twitterCard = seo.twitterCard || 'summary';

    // Set Document Title
    this.titleService.setTitle(fullTitle);

    // Primary Meta Tags
    this.metaService.updateTag({ name: 'description', content: description });
    if (seo.robots) {
      this.metaService.updateTag({ name: 'robots', content: seo.robots });
    } else {
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    }

    if (seo.keywords && seo.keywords.length > 0) {
      this.metaService.updateTag({ name: 'keywords', content: seo.keywords.join(', ') });
    }

    // OpenGraph Tags
    this.metaService.updateTag({ property: 'og:site_name', content: CLINIC_CONFIG.clinicNameAr });
    this.metaService.updateTag({ property: 'og:locale', content: CLINIC_CONFIG.defaultSeo.locale });
    this.metaService.updateTag({ property: 'og:title', content: seo.ogTitle || fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: seo.ogDescription || description });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:type', content: ogType });

    // Twitter Tags
    this.metaService.updateTag({ name: 'twitter:card', content: twitterCard });
    this.metaService.updateTag({ name: 'twitter:title', content: seo.ogTitle || fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: seo.ogDescription || description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    // Canonical Tag
    this.updateCanonicalUrl(url);

    // Structured Data (JSON-LD)
    if (seo.jsonLd) {
      this.setStructuredData(seo.jsonLd);
    }
  }

  /**
   * Sets or updates the canonical link tag in <head>
   */
  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Injects or updates JSON-LD script for rich search snippets
   */
  setStructuredData(schemaData: Record<string, unknown> | Array<Record<string, unknown>>): void {
    if (!this.jsonLdScriptElement) {
      this.jsonLdScriptElement = this.document.createElement('script');
      this.jsonLdScriptElement.type = 'application/ld+json';
      this.document.head.appendChild(this.jsonLdScriptElement);
    }
    this.jsonLdScriptElement.text = JSON.stringify(schemaData);
  }

  /**
   * Generates default Schema.org Dentist / LocalBusiness structured data
   */
  getDefaultClinicSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
      name: CLINIC_CONFIG.clinicNameAr,
      alternateName: CLINIC_CONFIG.clinicNameEn,
      description: CLINIC_CONFIG.shortDescriptionAr,
      url: CLINIC_CONFIG.defaultSeo.siteUrl,
      telephone: CLINIC_CONFIG.contact.phoneRaw,
      priceRange: '$$',
      medicalSpecialty: 'Dentistry',
      employee: {
        '@type': 'Physician',
        name: CLINIC_CONFIG.doctorNameAr,
        jobTitle: 'طبيب أسنان',
      },
    };
  }

  /**
   * Generates Schema.org Person & Physician structured data for Dr. Moaz Samir
   */
  getDoctorPersonSchema(doctor: Doctor): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': ['Person', 'Physician'],
      '@id': `${CLINIC_CONFIG.defaultSeo.siteUrl}/doctor#physician`,
      name: doctor.nameAr,
      alternateName: doctor.nameEn,
      jobTitle: doctor.titleAr,
      description: doctor.safeTitleAr,
      url: `${CLINIC_CONFIG.defaultSeo.siteUrl}/doctor`,
      medicalSpecialty: 'Dentistry',
      worksFor: {
        '@type': 'Dentist',
        name: CLINIC_CONFIG.clinicNameAr,
        alternateName: CLINIC_CONFIG.clinicNameEn,
        url: CLINIC_CONFIG.defaultSeo.siteUrl,
        telephone: CLINIC_CONFIG.contact.phoneRaw,
      },
    };
  }

  /**
   * Generates Schema.org Service structured data
   */
  getServiceSchema(service: ServiceItem): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.titleAr,
      description: service.shortDescriptionAr,
      serviceType: service.categoryAr,
      url: `${CLINIC_CONFIG.defaultSeo.siteUrl}/services/${service.slug}`,
      provider: {
        '@type': 'Dentist',
        name: CLINIC_CONFIG.clinicNameAr,
        url: CLINIC_CONFIG.defaultSeo.siteUrl,
        telephone: CLINIC_CONFIG.contact.phoneRaw,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'برج العرب، الإسكندرية',
      },
    };
  }

  /**
   * Generates Schema.org FAQPage structured data
   */
  getFaqSchema(faqs: ServiceFaqItem[]): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.questionAr,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answerAr,
        },
      })),
    };
  }

  /**
   * Generates Schema.org BreadcrumbList structured data
   */
  getBreadcrumbSchema(items: { name: string; url: string }[]): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${CLINIC_CONFIG.defaultSeo.siteUrl}${item.url}`,
      })),
    };
  }
}
