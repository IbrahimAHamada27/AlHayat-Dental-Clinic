import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-doctor-technology',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, SectionHeadingComponent],
  templateUrl: './doctor-technology.component.html',
  styleUrls: ['./doctor-technology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorTechnologyComponent {
  technologyClick = output<void>();

  onTechClick(): void {
    this.technologyClick.emit();
  }
}
