import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../../../core/models/doctor.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-doctor-introduction',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './doctor-introduction.component.html',
  styleUrls: ['./doctor-introduction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorIntroductionComponent {
  doctor = input.required<Doctor>();
}
