import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="section-heading"
      [class.align-center]="align() === 'center'"
      [class.align-start]="align() === 'start'"
      [class.theme-dark]="theme() === 'dark'"
    >
      <div class="heading-content">
        @if (eyebrow()) {
          <span class="eyebrow">{{ eyebrow() }}</span>
        }

        <h2 class="heading-title">{{ title() }}</h2>

        @if (description()) {
          <p class="heading-description">{{ description() }}</p>
        }
      </div>

      <div class="heading-action">
        <ng-content select="[action]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .section-heading {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-2xl);

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
        }

        &.align-center {
          text-align: center;
          align-items: center;

          .heading-content {
            max-width: 680px;
            margin-inline: auto;
          }
        }

        &.align-start {
          text-align: start;

          .heading-content {
            max-width: 720px;
          }
        }
      }

      .heading-title {
        font-size: var(--font-size-h2);
        font-weight: var(--font-weight-bold);
        color: var(--color-text);
        line-height: 1.3;
        margin-top: var(--spacing-2xs);
        margin-bottom: var(--spacing-xs);
      }

      .heading-description {
        font-size: var(--font-size-body-lg);
        color: var(--color-text-secondary);
        line-height: 1.65;
        margin: 0;
      }

      .theme-dark {
        .heading-title {
          color: var(--color-text-inverse);
        }

        .heading-description {
          color: var(--color-text-inverse-muted);
        }
      }

      .heading-action {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        flex-shrink: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  eyebrow = input<string | undefined>(undefined);
  title = input.required<string>();
  description = input<string | undefined>(undefined);
  align = input<'start' | 'center'>('start');
  theme = input<'light' | 'dark'>('light');
}
