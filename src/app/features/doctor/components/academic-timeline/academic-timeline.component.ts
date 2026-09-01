import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../../../core/models/doctor.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';

@Component({
  selector: 'app-academic-timeline',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent, BadgeComponent],
  templateUrl: './academic-timeline.component.html',
  styleUrls: ['./academic-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicTimelineComponent {
  doctor = input.required<Doctor>();

  get hasAcademicData(): boolean {
    const d = this.doctor();
    return !!(
      (d.education && d.education.length > 0) ||
      (d.experience && d.experience.length > 0) ||
      (d.certifications && d.certifications.length > 0) ||
      (d.courses && d.courses.length > 0) ||
      (d.conferences && d.conferences.length > 0)
    );
  }
}
