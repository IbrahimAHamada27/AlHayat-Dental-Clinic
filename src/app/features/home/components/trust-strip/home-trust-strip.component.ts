import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { VALUE_PILLARS } from '../../../../core/config/clinic.config';

@Component({
  selector: 'app-home-trust-strip',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="trust-strip-section" aria-label="ركائز عيادة الحياة">
      <div class="container container-max">
        <div class="pillars-grid">
          @for (pillar of pillars; track pillar.titleAr) {
            <div class="pillar-card">
              <div class="pillar-icon-box">
                <app-icon [name]="pillar.icon" size="md" />
              </div>
              <div class="pillar-content">
                <h3 class="pillar-title">{{ pillar.titleAr }}</h3>
                <p class="pillar-desc">{{ pillar.descAr }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .trust-strip-section {
        background-color: var(--color-surface);
        border-bottom: 1px solid var(--color-border);
        padding-block: var(--spacing-xl);
      }

      .pillars-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);

        @media (min-width: 600px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1024px) {
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-xl);
        }
      }

      .pillar-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-md);
        padding: var(--spacing-lg);
        background: var(--color-background);
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border-subtle);
        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(22, 74, 69, 0.08);
          border-color: var(--color-primary-light);
        }
      }

      .pillar-icon-box {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        background: linear-gradient(135deg, rgba(22, 74, 69, 0.1) 0%, rgba(22, 74, 69, 0.04) 100%);
        color: var(--color-primary);
        border: 1px solid rgba(22, 74, 69, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .pillar-content {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .pillar-title {
        font-size: var(--font-size-body-lg);
        font-weight: var(--font-weight-bold);
        color: var(--color-primary-dark);
        margin: 0;
        line-height: 1.3;
      }

      .pillar-desc {
        font-size: var(--font-size-caption);
        color: var(--color-text-secondary);
        line-height: 1.55;
        margin: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTrustStripComponent {
  readonly pillars = VALUE_PILLARS;
}

