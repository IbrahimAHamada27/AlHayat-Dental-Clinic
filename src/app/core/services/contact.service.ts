import { Injectable, inject } from '@angular/core';
import { CLINIC_CONFIG, CLINIC_LOCATIONS, DOCTOR_PROFILE } from '../config/clinic.config';
import { AnalyticsService } from './analytics.service';
import { ClinicLocation } from '../models/location.model';
import { Doctor } from '../models/doctor.model';
import { ClinicConfig } from '../models/clinic.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly analyticsService = inject(AnalyticsService);

  readonly config: ClinicConfig = CLINIC_CONFIG;
  readonly locations: ClinicLocation[] = CLINIC_LOCATIONS;
  readonly doctor: Doctor = DOCTOR_PROFILE;

  /**
   * Returns primary clinic branch
   */
  get primaryLocation(): ClinicLocation {
    return this.locations.find((l) => l.isPrimary) || this.locations[0];
  }

  /**
   * Generates telephone protocol URL
   */
  getTelUrl(phoneNumber?: string): string {
    const raw = phoneNumber || this.config.contact.phoneRaw;
    return `tel:${raw}`;
  }

  /**
   * Calls the clinic directly and logs conversion event
   */
  callClinic(phoneNumber?: string, context = 'direct_call'): void {
    const url = this.getTelUrl(phoneNumber);
    this.analyticsService.trackPhoneClick(context);
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  }
}
