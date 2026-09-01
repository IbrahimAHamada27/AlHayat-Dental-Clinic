import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-home-technology-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    IconComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './home-technology-preview.component.html',
  styleUrls: ['./home-technology-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTechnologyPreviewComponent {}
