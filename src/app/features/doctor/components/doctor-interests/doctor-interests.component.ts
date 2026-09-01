import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DoctorAreaOfInterest } from '../../../../core/models/doctor.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-doctor-interests',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, ButtonComponent, IconComponent],
  templateUrl: './doctor-interests.component.html',
  styleUrls: ['./doctor-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorInterestsComponent {
  interests = input.required<DoctorAreaOfInterest[]>();
  serviceClick = output<string>();

  onServiceClick(slug: string): void {
    this.serviceClick.emit(slug);
  }
}
