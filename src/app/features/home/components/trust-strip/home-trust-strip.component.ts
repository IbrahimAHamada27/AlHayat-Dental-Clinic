import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-home-trust-strip',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="trust-strip-section" aria-label="بيانات العيادة الأساسية">
      <div class="container container-max">
        <div class="trust-grid">
          <div class="trust-item">
            <div class="trust-icon-box">
              <app-icon name="user" size="sm" />
            </div>
            <div class="trust-text">
              <span class="trust-label">إشراف طبي مباشر</span>
              <strong class="trust-value">د. معاذ سمير</strong>
            </div>
          </div>

          <div class="trust-item">
            <div class="trust-icon-box">
              <app-icon name="tooth-align" size="sm" />
            </div>
            <div class="trust-text">
              <span class="trust-label">العلامة الطبية</span>
              <strong class="trust-value">عيادة الحياة لطب الأسنان</strong>
            </div>
          </div>

          <div class="trust-item">
            <div class="trust-icon-box">
              <app-icon name="location" size="sm" />
            </div>
            <div class="trust-text">
              <span class="trust-label">فروع العيادة</span>
              <strong class="trust-value">برج العرب الجديدة والقديمة</strong>
            </div>
          </div>

          <div class="trust-item">
            <div class="trust-icon-box">
              <app-icon name="sparkle" size="sm" />
            </div>
            <div class="trust-text">
              <span class="trust-label">التقنيات السريرية</span>
              <strong class="trust-value">طب أسنان رقمي وتعقيم متكامل</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .trust-strip-section {
        background-color: var(--color-surface);
        border-bottom: 1px solid var(--color-border);
        padding-block: var(--spacing-lg);
      }

      .trust-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-md);

        @media (min-width: 992px) {
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-xl);
        }
      }

      .trust-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
      }

      .trust-icon-box {
        width: 40px;
        height: 40px;
        border-radius: var(--radius-sm);
        background-color: var(--color-medical-blue);
        color: var(--color-primary);
        border: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .trust-text {
        display: flex;
        flex-direction: column;
      }

      .trust-label {
        font-size: var(--font-size-caption);
        color: var(--color-text-muted);
      }

      .trust-value {
        font-size: var(--font-size-body-sm);
        font-weight: var(--font-weight-semibold);
        color: var(--color-primary-dark);
        line-height: 1.3;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTrustStripComponent {}
