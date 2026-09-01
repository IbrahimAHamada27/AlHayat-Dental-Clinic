import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClinicLocation } from '../../../../core/models/location.model';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';

@Component({
  selector: 'app-clinic-location-card',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, BadgeComponent],
  templateUrl: './clinic-location-card.component.html',
  styleUrls: ['./clinic-location-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicLocationCardComponent {
  location = input.required<ClinicLocation>();

  directionsClick = output<ClinicLocation>();
  phoneClick = output<ClinicLocation>();
  whatsAppClick = output<ClinicLocation>();

  onDirections(): void {
    this.directionsClick.emit(this.location());
    if (this.location().googleMapsUrl) {
      window.open(this.location().googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  }

  onCall(): void {
    this.phoneClick.emit(this.location());
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit(this.location());
  }
}
