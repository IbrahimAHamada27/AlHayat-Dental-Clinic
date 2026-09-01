import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { TechnologyWorkflowStep } from '../../../../core/models/content.model';

@Component({
  selector: 'app-technology-workflow',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './technology-workflow.component.html',
  styleUrls: ['./technology-workflow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyWorkflowComponent {
  steps = input.required<TechnologyWorkflowStep[]>();
}
