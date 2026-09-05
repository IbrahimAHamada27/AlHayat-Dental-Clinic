import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { CLINIC_STATS, DOCTOR_PROFILE } from '../../../../core/config/clinic.config';

@Component({
  selector: 'app-home-why-clinic',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IconComponent,
    ButtonComponent,
    BadgeComponent,
  ],
  templateUrl: './home-why-clinic.component.html',
  styleUrls: ['./home-why-clinic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWhyClinicComponent {
  readonly stats = CLINIC_STATS;
  readonly doctor = DOCTOR_PROFILE;
}

