import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Doctor } from '../../../../core/models/doctor.model';
import { ClinicConfig } from '../../../../core/models/clinic.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-clinic-connection',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, IconComponent],
  templateUrl: './clinic-connection.component.html',
  styleUrls: ['./clinic-connection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicConnectionComponent {
  doctor = input.required<Doctor>();
  config = input.required<ClinicConfig>();
}
