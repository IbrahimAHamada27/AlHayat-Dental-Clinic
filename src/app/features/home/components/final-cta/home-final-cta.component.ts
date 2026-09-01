import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';

@Component({
  selector: 'app-home-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './home-final-cta.component.html',
  styleUrls: ['./home-final-cta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFinalCtaComponent {
  config = input.required<ClinicConfig>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('final_cta_booking');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('final_cta_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('final_cta_phone');
  }
}
