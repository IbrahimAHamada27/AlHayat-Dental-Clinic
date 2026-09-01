import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { ClinicConfig } from '../../../../core/models/clinic.model';

@Component({
  selector: 'app-cases-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './cases-hero.component.html',
  styleUrls: ['./cases-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasesHeroComponent {
  config = input.required<ClinicConfig>();

  bookingClick = output<string>();
  whatsAppClick = output<string>();
  phoneClick = output<string>();

  onBook(): void {
    this.bookingClick.emit('cases_hero_book');
  }

  onWhatsApp(): void {
    this.whatsAppClick.emit('cases_hero_whatsapp');
  }

  onCall(): void {
    this.phoneClick.emit('cases_hero_call');
  }
}
