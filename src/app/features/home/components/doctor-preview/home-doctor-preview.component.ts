import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Doctor } from '../../../../core/models/doctor.model';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { CardComponent } from '../../../../shared/components/ui/card/card.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-home-doctor-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    CardComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './home-doctor-preview.component.html',
  styleUrls: ['./home-doctor-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDoctorPreviewComponent {
  doctor = input.required<Doctor>();
  consultClick = output<string>();

  onConsult(): void {
    this.consultClick.emit('doctor_preview_consult');
  }
}
