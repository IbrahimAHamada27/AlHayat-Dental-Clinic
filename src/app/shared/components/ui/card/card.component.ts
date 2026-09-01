import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'default' | 'surface' | 'soft' | 'interactive' | 'bordered';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="app-card"
      [class.card-surface]="variant() === 'surface'"
      [class.card-soft]="variant() === 'soft'"
      [class.card-interactive]="variant() === 'interactive'"
      [class.card-bordered]="variant() === 'bordered'"
      [class.padding-compact]="padding() === 'compact'"
      [class.padding-spacious]="padding() === 'spacious'"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .app-card {
        background-color: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: var(--spacing-xl);
        position: relative;
        transition:
          border-color var(--transition-base),
          box-shadow var(--transition-base),
          transform var(--transition-base);

        &.card-soft {
          background-color: var(--color-background-soft);
        }

        &.card-bordered {
          background-color: transparent;
          border-color: var(--color-border-strong);
        }

        &.card-interactive {
          cursor: pointer;

          &:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-sm);
            transform: translateY(-2px);
          }
        }

        &.padding-compact {
          padding: var(--spacing-md);
        }

        &.padding-spacious {
          padding: var(--spacing-2xl);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  variant = input<CardVariant>('default');
  padding = input<'default' | 'compact' | 'spacious'>('default');
}
