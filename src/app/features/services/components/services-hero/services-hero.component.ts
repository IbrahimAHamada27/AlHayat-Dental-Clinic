import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './services-hero.component.html',
  styleUrls: ['./services-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesHeroComponent {
  config = input.required<ClinicConfig>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('services_hero_book');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('services_hero_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('services_hero_call');
  }
}
