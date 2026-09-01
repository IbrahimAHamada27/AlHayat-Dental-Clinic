import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceItem } from '../../../../core/models/service.model';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-home-services-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './home-services-preview.component.html',
  styleUrls: ['./home-services-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeServicesPreviewComponent {
  services = input.required<ServiceItem[]>();

  get featuredService(): ServiceItem | undefined {
    return this.services().find((s) => s.id === 'orthodontics') || this.services()[0];
  }

  get regularServices(): ServiceItem[] {
    const featuredId = this.featuredService?.id;
    return this.services().filter((s) => s.id !== featuredId);
  }
}
