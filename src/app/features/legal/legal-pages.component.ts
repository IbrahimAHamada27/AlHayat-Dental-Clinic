import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { CLINIC_CONFIG } from '../../core/config/clinic.config';
import { CardComponent } from '../../shared/components/ui/card/card.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  template: `
    <section class="section">
      <div class="container container-md">
        <app-card variant="surface" padding="spacious">
          <h1 class="font-h2 mb-md">سياسة الخصوصية</h1>
          <p class="body-regular text-secondary">
            نلتزم في {{ config.clinicNameAr }} بحماية خصوصية المرضى وسرية السجلات الطبية وبيانات التواصل. لا يتم مشاركة أي بيانات شخصية مع أطراف ثالثة دون موافقة مسبقة.
          </p>
          <div class="divider"></div>
          <p class="body-small text-muted">آخر تحديث: سبتمبر 2026</p>
        </app-card>
      </div>
    </section>
  `,
  styles: [
    `
      .mb-md { margin-bottom: var(--spacing-md); }
      .text-secondary { color: var(--color-text-secondary); }
      .text-muted { color: var(--color-text-muted); }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly config = CLINIC_CONFIG;

  ngOnInit(): void {
    this.seoService.update({
      title: 'سياسة الخصوصية | عيادة الحياة',
      description: 'سياسة الخصوصية وسرية بيانات المرضى في عيادة الحياة لطب الأسنان.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/privacy`,
    });
  }
}

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  template: `
    <section class="section">
      <div class="container container-md">
        <app-card variant="surface" padding="spacious">
          <h1 class="font-h2 mb-md">الشروط والأحكام</h1>
          <p class="body-regular text-secondary">
            المعلومات الواردة في هذا الموقع مخصصة للأغراض التعريفية والتثقيفية وحجز المواعيد في {{ config.clinicNameAr }}.
          </p>
          <div class="divider"></div>
          <p class="body-small text-muted">آخر تحديث: سبتمبر 2026</p>
        </app-card>
      </div>
    </section>
  `,
  styles: [
    `
      .mb-md { margin-bottom: var(--spacing-md); }
      .text-secondary { color: var(--color-text-secondary); }
      .text-muted { color: var(--color-text-muted); }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly config = CLINIC_CONFIG;

  ngOnInit(): void {
    this.seoService.update({
      title: 'الشروط والأحكام | عيادة الحياة',
      description: 'الشروط والأحكام واستخدام موقع عيادة الحياة لطب الأسنان.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/terms`,
    });
  }
}

@Component({
  selector: 'app-medical-disclaimer',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  template: `
    <section class="section">
      <div class="container container-md">
        <app-card variant="surface" padding="spacious">
          <h1 class="font-h2 mb-md">إخلاء المسؤولية الطبية</h1>
          <p class="body-regular text-secondary">
            المحتوى المنشور في الموقع للأغراض التوعوية العامة فقط ولا يُعد بديلاً عن الفحص والتشخيص السريري المباشر لدى طبيب الأسنان المختص.
          </p>
          <div class="divider"></div>
          <p class="body-small text-muted">آخر تحديث: سبتمبر 2026</p>
        </app-card>
      </div>
    </section>
  `,
  styles: [
    `
      .mb-md { margin-bottom: var(--spacing-md); }
      .text-secondary { color: var(--color-text-secondary); }
      .text-muted { color: var(--color-text-muted); }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicalDisclaimerComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly config = CLINIC_CONFIG;

  ngOnInit(): void {
    this.seoService.update({
      title: 'إخلاء المسؤولية الطبية | عيادة الحياة',
      description: 'إخلاء المسؤولية الطبية التوعوية لعيادة الحياة لطب الأسنان.',
      canonical: `${CLINIC_CONFIG.defaultSeo.siteUrl}/medical-disclaimer`,
    });
  }
}
