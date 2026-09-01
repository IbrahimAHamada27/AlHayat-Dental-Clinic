import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'sage' | 'primary' | 'outline' | 'subtle' | 'success';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="app-badge"
      [class.badge-sage]="variant() === 'sage'"
      [class.badge-primary]="variant() === 'primary'"
      [class.badge-outline]="variant() === 'outline'"
      [class.badge-subtle]="variant() === 'subtle'"
      [class.badge-success]="variant() === 'success'"
    >
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
      }

      .app-badge {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-3xs);
        padding-block: 0.25rem;
        padding-inline: 0.65rem;
        font-size: var(--font-size-caption);
        font-weight: var(--font-weight-medium);
        border-radius: var(--radius-pill);
        line-height: 1.3;
        white-space: nowrap;

        &.badge-sage {
          background-color: var(--color-sage-soft);
          color: var(--color-accent);
          border: 1px solid var(--color-sage-border);
        }

        &.badge-primary {
          background-color: var(--color-primary-subtle);
          color: var(--color-primary);
        }

        &.badge-outline {
          background-color: transparent;
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border-strong);
        }

        &.badge-subtle {
          background-color: var(--color-background-soft);
          color: var(--color-text-muted);
        }

        &.badge-success {
          background-color: var(--color-success-bg);
          color: var(--color-success);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  variant = input<BadgeVariant>('sage');
}
