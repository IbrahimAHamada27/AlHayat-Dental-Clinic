import { Injectable } from '@angular/core';
import { ClinicLocation } from '../models/location.model';
import { CLINIC_LOCATIONS } from '../config/clinic.config';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private readonly locations: ClinicLocation[] = CLINIC_LOCATIONS;

  /**
   * Returns all active clinic locations
   */
  getLocations(): readonly ClinicLocation[] {
    return this.locations;
  }

  /**
   * Returns a location by its URL slug
   */
  getLocationBySlug(slug: string): ClinicLocation | undefined {
    return this.locations.find((l) => l.slug === slug);
  }

  /**
   * Returns a location by its unique ID
   */
  getLocationById(id: string): ClinicLocation | undefined {
    return this.locations.find((l) => l.id === id);
  }

  /**
   * Returns the primary clinic branch
   */
  getPrimaryLocation(): ClinicLocation {
    return this.locations.find((l) => l.isPrimary) || this.locations[0];
  }
}
