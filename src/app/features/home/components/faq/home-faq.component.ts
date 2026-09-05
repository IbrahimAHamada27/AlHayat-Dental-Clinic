import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { CLINIC_FAQS, ClinicFaq } from '../../../../core/config/clinic.config';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';

@Component({
  selector: 'app-home-faq',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    IconComponent,
    ButtonComponent,
    BadgeComponent,
  ],
  template: `
    <section class="section faq-section" aria-label="الأسئلة الشائعة لطب الأسنان">
      <div class="container container-max">
        <app-section-heading
          eyebrow="الأسئلة الشائعة"
          title="كل ما يهمك معرفته عن صحة وتجميل الأسنان"
          description="إجابات طبية واضحة وموثوقة بإشراف د. معاذ سمير عن العلاجات والتقنيات وحجز المواعيد ببرج العرب."
          align="center"
        />

        <div class="faq-accordion-wrap">
          @for (faq of faqs; track faq.id; let idx = $index) {
            <div
              class="faq-item"
              [class.faq-item-open]="openIndex() === idx"
            >
              <button
                type="button"
                class="faq-question-btn"
                [attr.aria-expanded]="openIndex() === idx"
                (click)="toggle(idx)"
              >
                <div class="faq-q-text-wrap">
                  <app-badge variant="sage" class="faq-badge">{{ faq.categoryAr }}</app-badge>
                  <span class="faq-question-text">{{ faq.questionAr }}</span>
                </div>
                <div class="faq-icon-indicator">
                  <app-icon
                    [name]="openIndex() === idx ? 'chevron-up' : 'chevron-down'"
                    size="sm"
                  />
                </div>
              </button>

              @if (openIndex() === idx) {
                <div class="faq-answer-pane">
                  <p class="faq-answer-text">{{ faq.answerAr }}</p>
                </div>
              }
            </div>
          }
        </div>

        <!-- Extra Question CTA -->
        <div class="faq-bottom-cta">
          <p class="faq-cta-text">هل لديك سؤال آخر لم تجد إجابته هنا؟</p>
          <app-button
            variant="primary"
            size="md"
            iconStart="whatsapp"
            (btnClick)="onAskWhatsApp()"
          >
            اسأل د. معاذ سمير مباشرة عبر واتساب
          </app-button>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .faq-section {
        background-color: var(--color-background);
        border-bottom: 1px solid var(--color-border);
        padding-block: var(--spacing-xxl);
      }

      .faq-accordion-wrap {
        max-width: 860px;
        margin: var(--spacing-xl) auto 0;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
      }

      .faq-item {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: border-color 0.25s ease, box-shadow 0.25s ease;

        &:hover {
          border-color: var(--color-primary-light);
        }

        &.faq-item-open {
          border-color: var(--color-primary);
          box-shadow: 0 4px 20px rgba(22, 74, 69, 0.07);
        }
      }

      .faq-question-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-md);
        padding: var(--spacing-lg) var(--spacing-xl);
        background: transparent;
        border: none;
        cursor: pointer;
        text-align: right;
        font-family: inherit;

        &:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: -2px;
        }
      }

      .faq-q-text-wrap {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        flex: 1;

        @media (max-width: 600px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }
      }

      .faq-question-text {
        font-size: var(--font-size-body-lg);
        font-weight: var(--font-weight-bold);
        color: var(--color-primary-dark);
        line-height: 1.4;
      }

      .faq-icon-indicator {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(22, 74, 69, 0.05);
        color: var(--color-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: background-color 0.2s ease, transform 0.2s ease;
      }

      .faq-answer-pane {
        padding: 0 var(--spacing-xl) var(--spacing-xl);
        border-top: 1px dashed var(--color-border-subtle);
        margin-top: var(--spacing-xs);
        animation: fadeIn 0.25s ease;
      }

      .faq-answer-text {
        font-size: var(--font-size-body);
        color: var(--color-text-secondary);
        line-height: 1.75;
        margin: var(--spacing-md) 0 0;
      }

      .faq-bottom-cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
        margin-top: var(--spacing-xxl);
        text-align: center;
      }

      .faq-cta-text {
        font-size: var(--font-size-body-lg);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
        margin: 0;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-4px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFaqComponent {
  private readonly whatsAppService = inject(WhatsAppService);

  readonly faqs: ClinicFaq[] = CLINIC_FAQS;
  readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    if (this.openIndex() === index) {
      this.openIndex.set(null);
    } else {
      this.openIndex.set(index);
    }
  }

  onAskWhatsApp(): void {
    const msg =
      'السلام عليكم د. معاذ سمير، أود الاستفسار بخصوص علاج بالأسنان في عيادة الحياة ببرج العرب.';
    this.whatsAppService.openWhatsApp(msg, 'homepage_faq_section');
  }
}
