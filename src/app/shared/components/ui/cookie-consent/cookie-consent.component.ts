import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsentService } from '../../../../core/services/consent.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieConsentComponent {
  readonly consentService = inject(ConsentService);

  analyticsToggle = signal<boolean>(this.consentService.consentPreferences().analytics);
  marketingToggle = signal<boolean>(this.consentService.consentPreferences().marketing);

  onAcceptAll(): void {
    this.consentService.acceptAll();
  }

  onAcceptNecessary(): void {
    this.consentService.acceptNecessaryOnly();
  }

  onOpenPreferences(): void {
    this.analyticsToggle.set(this.consentService.consentPreferences().analytics);
    this.marketingToggle.set(this.consentService.consentPreferences().marketing);
    this.consentService.openPreferencesModal();
  }

  onSavePreferences(): void {
    this.consentService.savePreferences(this.analyticsToggle(), this.marketingToggle());
  }

  onClosePreferences(): void {
    this.consentService.closePreferencesModal();
  }
}
