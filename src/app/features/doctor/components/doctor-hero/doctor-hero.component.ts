import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BadgeComponent } from '../../../../shared/components/ui/badge/badge.component';
import { Doctor } from '../../../../core/models/doctor.model';
import { ClinicConfig } from '../../../../core/models/clinic.model';

@Component({
  selector: 'app-doctor-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, BadgeComponent],
  templateUrl: './doctor-hero.component.html',
  styleUrls: ['./doctor-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorHeroComponent {
  doctor = input.required<Doctor>();
  config = input.required<ClinicConfig>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('doctor_hero_book');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('doctor_hero_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('doctor_hero_call');
  }
}
