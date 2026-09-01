import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article } from '../../../../core/models/article.model';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterModule, BadgeComponent, IconComponent],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardComponent {
  article = input.required<Article>();
  cardClick = output<Article>();

  onSelect(): void {
    this.cardClick.emit(this.article());
  }
}
