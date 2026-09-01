import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { TechnologyItem } from '../../../../core/models/content.model';

@Component({
  selector: 'app-featured-scanner',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, BadgeComponent],
  templateUrl: './featured-scanner.component.html',
  styleUrls: ['./featured-scanner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedScannerComponent {
  scanner = input.required<TechnologyItem>();

  consultClick = output<string>();
  whatsAppClick = output<string>();

  onConsult(): void {
    this.consultClick.emit(this.scanner().titleAr);
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit(this.scanner().titleAr);
  }
}
