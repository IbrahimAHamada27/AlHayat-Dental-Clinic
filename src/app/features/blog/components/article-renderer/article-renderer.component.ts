import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleBlock } from '../../../../core/models/article.model';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-article-renderer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './article-renderer.component.html',
  styleUrls: ['./article-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleRendererComponent {
  blocks = input.required<ArticleBlock[]>();
}
