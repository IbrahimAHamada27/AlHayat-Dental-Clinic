import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceItem } from '../../../../core/models/service.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';

@Component({
  selector: 'app-related-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, IconComponent, BadgeComponent],
  templateUrl: './related-services.component.html',
  styleUrls: ['./related-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedServicesComponent {
  relatedServices = input.required<ServiceItem[]>();
  relatedClick = output<string>();

  onServiceClick(slug: string): void {
    this.relatedClick.emit(slug);
  }
}
