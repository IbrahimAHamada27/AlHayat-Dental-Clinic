import { Component, input, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-article-share',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './article-share.component.html',
  styleUrls: ['./article-share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleShareComponent {
  title = input.required<string>();
  url = input.required<string>();

  shareClick = output<string>();

  copied = signal<boolean>(false);

  copyLink(): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.url()).then(() => {
        this.copied.set(true);
        this.shareClick.emit('copy_link');
        setTimeout(() => this.copied.set(false), 2500);
      });
    }
  }

  shareWhatsApp(): void {
    this.shareClick.emit('whatsapp');
    const text = `${encodeURIComponent(this.title())}\n${encodeURIComponent(this.url())}`;
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  shareFacebook(): void {
    this.shareClick.emit('facebook');
    const u = encodeURIComponent(this.url());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${u}`, '_blank', 'noopener,noreferrer');
  }
}
