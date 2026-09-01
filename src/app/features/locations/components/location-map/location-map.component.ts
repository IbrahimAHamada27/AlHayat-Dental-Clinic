import { Component, input, output, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClinicLocation } from '../../../../core/models/location.model';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationMapComponent {
  private readonly sanitizer = inject(DomSanitizer);

  location = input.required<ClinicLocation>();
  directionsClick = output<ClinicLocation>();

  readonly safeMapUrl = computed<SafeResourceUrl>(() => {
    const loc = this.location();
    const url = loc.mapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(loc.addressAr)}&hl=ar&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  onOpenMap(): void {
    this.directionsClick.emit(this.location());
    if (this.location().googleMapsUrl) {
      window.open(this.location().googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
