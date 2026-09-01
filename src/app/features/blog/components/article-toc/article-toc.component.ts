import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingBlock } from '../../../../core/models/article.model';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-article-toc',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './article-toc.component.html',
  styleUrls: ['./article-toc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleTocComponent {
  headings = input.required<HeadingBlock[]>();

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
