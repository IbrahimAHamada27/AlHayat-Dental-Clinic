import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  location = input.required<ClinicLocation>();

  directionsClick = output<ClinicLocation>();

  onOpenMap(): void {
    this.directionsClick.emit(this.location());
    if (this.location().googleMapsUrl) {
      window.open(this.location().googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  }
}
