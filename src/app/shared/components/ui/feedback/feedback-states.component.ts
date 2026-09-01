import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" [attr.aria-label]="label()" role="status">
      <div class="spinner"></div>
      @if (label()) {
        <p class="loading-text">{{ label() }}</p>
      }
    </div>
  `,
  styles: [
    `
      .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-3xl);
        text-align: center;
      }

      .spinner {
        width: 38px;
        height: 38px;
        border: 3px solid var(--color-border-strong);
        border-top-color: var(--color-primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        margin-bottom: var(--spacing-md);
      }

      .loading-text {
        color: var(--color-text-muted);
        font-size: var(--font-size-body-sm);
        margin: 0;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingStateComponent {
  label = input<string>('جاري التحميل...');
}

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="empty-container">
      <h3 class="empty-title">{{ title() }}</h3>
      @if (description()) {
        <p class="empty-desc">{{ description() }}</p>
      }
      <div class="empty-action">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .empty-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--spacing-3xl) var(--spacing-xl);
        border: 1px dashed var(--color-border-strong);
        border-radius: var(--radius-md);
        background-color: var(--color-surface);
      }

      .empty-title {
        font-size: var(--font-size-h3);
        color: var(--color-text);
        margin-bottom: var(--spacing-xs);
      }

      .empty-desc {
        font-size: var(--font-size-body);
        color: var(--color-text-secondary);
        max-width: 480px;
        margin-bottom: var(--spacing-lg);
      }

      .empty-action {
        display: flex;
        gap: var(--spacing-sm);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  title = input<string>('لا توجد بيانات متاحة حالياً');
  description = input<string | undefined>(undefined);
}

@Component({
  selector: 'app-error-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="error-container" role="alert">
      <h3 class="error-title">{{ title() }}</h3>
      <p class="error-desc">{{ message() }}</p>
      <div class="error-action">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--spacing-3xl) var(--spacing-xl);
        border: 1px solid var(--color-error-bg);
        border-radius: var(--radius-md);
        background-color: var(--color-surface);
      }

      .error-title {
        font-size: var(--font-size-h3);
        color: var(--color-error);
        margin-bottom: var(--spacing-xs);
      }

      .error-desc {
        font-size: var(--font-size-body);
        color: var(--color-text-secondary);
        max-width: 480px;
        margin-bottom: var(--spacing-lg);
      }

      .error-action {
        display: flex;
        gap: var(--spacing-sm);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorStateComponent {
  title = input<string>('حدث خطأ أثناء تحميل البيانات');
  message = input<string>('يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.');
}
