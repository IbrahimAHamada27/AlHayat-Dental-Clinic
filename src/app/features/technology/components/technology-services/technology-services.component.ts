import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceItem } from '../../../../core/models/service.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';

@Component({
  selector: 'app-technology-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, IconComponent, BadgeComponent],
  templateUrl: './technology-services.component.html',
  styleUrls: ['./technology-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyServicesComponent {
  services = input.required<ServiceItem[]>();
  serviceClick = output<string>();

  onServiceClick(slug: string): void {
    this.serviceClick.emit(slug);
  }
}
