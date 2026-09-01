import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';
import { Doctor } from '../../../../core/models/doctor.model';
import { ClinicLocation } from '../../../../core/models/location.model';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, BadgeComponent],
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {
  config = input.required<ClinicConfig>();
  doctor = input.required<Doctor>();
  locations = input.required<ClinicLocation[]>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('hero_primary_cta');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('hero_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('hero_doctor_card_call');
  }
}
