import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-continuous-learning',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './continuous-learning.component.html',
  styleUrls: ['./continuous-learning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContinuousLearningComponent {}
