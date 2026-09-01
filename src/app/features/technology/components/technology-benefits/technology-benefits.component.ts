import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-technology-benefits',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './technology-benefits.component.html',
  styleUrls: ['./technology-benefits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyBenefitsComponent {}
