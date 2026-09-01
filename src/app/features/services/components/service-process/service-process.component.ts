import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProcessStep } from '../../../../core/models/service.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-service-process',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './service-process.component.html',
  styleUrls: ['./service-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceProcessComponent {
  steps = input.required<ServiceProcessStep[]>();
  serviceTitle = input<string>('');
}
