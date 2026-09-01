import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { TechnologyComparison } from '../../../../core/models/content.model';

@Component({
  selector: 'app-technology-comparison',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './technology-comparison.component.html',
  styleUrls: ['./technology-comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyComparisonComponent {
  comparison = input.required<TechnologyComparison>();
}
