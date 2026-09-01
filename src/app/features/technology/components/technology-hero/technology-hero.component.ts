import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';

@Component({
  selector: 'app-technology-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, BadgeComponent],
  templateUrl: './technology-hero.component.html',
  styleUrls: ['./technology-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyHeroComponent {
  config = input.required<ClinicConfig>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('tech_hero_book');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('tech_hero_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('tech_hero_call');
  }
}
