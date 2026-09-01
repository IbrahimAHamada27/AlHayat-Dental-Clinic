import { Injectable, inject, PLATFORM_ID, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: number;
}

const CONSENT_STORAGE_KEY = 'al_hayat_consent_v1';
const CURRENT_CONSENT_VERSION = '1.0';

@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // Default initial preferences
  private readonly defaultPreferences: ConsentPreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
    version: CURRENT_CONSENT_VERSION,
    timestamp: 0,
  };

  readonly consentPreferences = signal<ConsentPreferences>(this.loadConsentFromStorage());
  readonly hasAnsweredConsent = signal<boolean>(this.checkIfAnswered());
  readonly isPreferencesModalOpen = signal<boolean>(false);

  readonly isAnalyticsConsented = computed(() => this.consentPreferences().analytics);
  readonly isMarketingConsented = computed(() => this.consentPreferences().marketing);

  private checkIfAnswered(): boolean {
    if (!this.isBrowser) return true; // Default to true on SSR to avoid hydration flash
    try {
      return !!localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      return true;
    }
  }

  private loadConsentFromStorage(): ConsentPreferences {
    if (!this.isBrowser) return this.defaultPreferences;
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentPreferences;
        if (parsed.version === CURRENT_CONSENT_VERSION) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return this.defaultPreferences;
  }

  private saveToStorage(prefs: ConsentPreferences): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // LocalStorage might be disabled
    }
  }

  acceptAll(): void {
    const prefs: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      version: CURRENT_CONSENT_VERSION,
      timestamp: Date.now(),
    };
    this.saveToStorage(prefs);
    this.consentPreferences.set(prefs);
    this.hasAnsweredConsent.set(true);
    this.isPreferencesModalOpen.set(false);
  }

  acceptNecessaryOnly(): void {
    const prefs: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      version: CURRENT_CONSENT_VERSION,
      timestamp: Date.now(),
    };
    this.saveToStorage(prefs);
    this.consentPreferences.set(prefs);
    this.hasAnsweredConsent.set(true);
    this.isPreferencesModalOpen.set(false);
  }

  savePreferences(analytics: boolean, marketing: boolean): void {
    const prefs: ConsentPreferences = {
      necessary: true,
      analytics,
      marketing,
      version: CURRENT_CONSENT_VERSION,
      timestamp: Date.now(),
    };
    this.saveToStorage(prefs);
    this.consentPreferences.set(prefs);
    this.hasAnsweredConsent.set(true);
    this.isPreferencesModalOpen.set(false);
  }

  openPreferencesModal(): void {
    this.isPreferencesModalOpen.set(true);
  }

  closePreferencesModal(): void {
    this.isPreferencesModalOpen.set(false);
  }
}
