import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { CLINIC_CONFIG } from '../../../../core/config/clinic.config';

@Component({
  selector: 'app-contact-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './contact-hero.component.html',
  styleUrls: ['./contact-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactHeroComponent {
  readonly config = CLINIC_CONFIG;

  whatsAppClick = output<void>();
  phoneClick = output<void>();
  scrollFormClick = output<void>();
}
