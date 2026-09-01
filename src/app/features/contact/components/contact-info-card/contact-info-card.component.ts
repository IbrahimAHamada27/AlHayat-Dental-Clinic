import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { CLINIC_CONFIG, CLINIC_LOCATIONS, DOCTOR_PROFILE } from '../../../../core/config/clinic.config';
import { ClinicLocation } from '../../../../core/models/location.model';

@Component({
  selector: 'app-contact-info-card',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, BadgeComponent],
  templateUrl: './contact-info-card.component.html',
  styleUrls: ['./contact-info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInfoCardComponent {
  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;
  readonly locations = CLINIC_LOCATIONS;

  phoneClick = output<void>();
  whatsAppClick = output<void>();
  directionsClick = output<ClinicLocation>();
}
