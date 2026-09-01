import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleItem } from '../../../../core/models/content.model';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { CardComponent } from '../../../../shared/components/ui/card/card.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-home-articles-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    CardComponent,
    SectionHeadingComponent,
  ],
  templateUrl: './home-articles-preview.component.html',
  styleUrls: ['./home-articles-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeArticlesPreviewComponent {
  articles = input.required<ArticleItem[]>();
}
