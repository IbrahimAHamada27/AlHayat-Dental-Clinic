import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DentalCase } from '../../../../core/models/case.model';
import { BeforeAfterSliderComponent } from '../before-after-slider/before-after-slider.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [CommonModule, RouterModule, BeforeAfterSliderComponent, BadgeComponent, IconComponent],
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseCardComponent {
  caseItem = input.required<DentalCase>();
  cardClick = output<DentalCase>();

  onSelect(): void {
    this.cardClick.emit(this.caseItem());
  }
}
