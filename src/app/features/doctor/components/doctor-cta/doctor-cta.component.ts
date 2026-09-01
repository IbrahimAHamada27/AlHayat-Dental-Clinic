import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-doctor-cta',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './doctor-cta.component.html',
  styleUrls: ['./doctor-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorCtaComponent {
  config = input.required<ClinicConfig>();
  doctor = input.required<Doctor>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('doctor_cta_booking');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('doctor_cta_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('doctor_cta_phone');
  }
}
