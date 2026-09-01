import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconName } from '../../../../core/models/icon.model';

export type { IconName };
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name = input.required<IconName>();
  size = input<IconSize>('md');
  customClass = input<string>('');
  ariaHidden = input<boolean>(true);

  sizeClass = computed(() => `icon-size-${this.size()}`);
}
