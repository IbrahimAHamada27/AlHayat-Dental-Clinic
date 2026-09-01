import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFaqItem } from '../../../../core/models/service.model';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-service-faq',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './service-faq.component.html',
  styleUrls: ['./service-faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceFaqComponent {
  faqs = input.required<ServiceFaqItem[]>();
  serviceTitle = input<string>('');

  faqExpand = output<string>();

  openIndices = signal<Set<number>>(new Set<number>());

  toggleFaq(index: number, question: string): void {
    const next = new Set(this.openIndices());
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
      this.faqExpand.emit(question);
    }
    this.openIndices.set(next);
  }

  isOpen(index: number): boolean {
    return this.openIndices().has(index);
  }
}
