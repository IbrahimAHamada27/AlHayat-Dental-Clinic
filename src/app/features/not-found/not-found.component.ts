import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { SeoService } from '../../core/services/seo.service';
import { CLINIC_CONFIG, DOCTOR_PROFILE } from '../../core/config/clinic.config';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly config = CLINIC_CONFIG;
  readonly doctor = DOCTOR_PROFILE;

  ngOnInit(): void {
    this.seoService.update({
      title: 'الصفحة غير موجودة (404) | د. معاذ سمير',
      description: 'عذراً، لم نتمكن من العثور على الصفحة المطلوبة في موقع عيادة الحياة لطب الأسنان.',
      robots: 'noindex, nofollow',
    });
  }
}
