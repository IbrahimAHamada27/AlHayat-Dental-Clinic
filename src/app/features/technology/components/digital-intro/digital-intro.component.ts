import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-digital-intro',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './digital-intro.component.html',
  styleUrls: ['./digital-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalIntroComponent {}
