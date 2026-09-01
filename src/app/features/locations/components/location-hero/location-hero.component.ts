import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';

@Component({
  selector: 'app-location-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './location-hero.component.html',
  styleUrls: ['./location-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationHeroComponent {
  config = input.required<ClinicConfig>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('locations_hero_book');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('locations_hero_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('locations_hero_call');
  }
}
