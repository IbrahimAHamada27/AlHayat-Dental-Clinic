import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconName } from '../../../../core/models/icon.model';

interface PillarItem {
  icon: IconName;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-home-why-clinic',
  standalone: true,
  imports: [CommonModule, IconComponent, SectionHeadingComponent],
  templateUrl: './home-why-clinic.component.html',
  styleUrls: ['./home-why-clinic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWhyClinicComponent {
  readonly pillars: PillarItem[] = [
    {
      icon: 'shield-check',
      title: 'التشخيص الطبي الدقيق أولاً',
      desc: 'نبدأ بالاستماع لشكوى المريض والفحص السريري الدقيق وشرح الخيارات العلاجية بوضوح قبل البدء بأي إجراء.',
    },
    {
      icon: 'heart-pulse',
      title: 'رعاية مخصصة وتجربة مريحة',
      desc: 'لا توجد خطة علاجية موحدة؛ كل حالة تُعامل بخصوصية تامة مع مراعاة راحة المريض النفسية وتقليل التوتر.',
    },
    {
      icon: 'sparkle',
      title: 'الاعتماد على التقنيات الحديثة',
      desc: 'تجهيزات رقمية مثل الماسح الفموي وأجهزة علاج العصب الآلية لتوفير أعلى درجات الدقة وتوفير وقت المريض.',
    },
    {
      icon: 'location',
      title: 'سهولة الوصول وفرعان ببرج العرب',
      desc: 'موقعان استراتيجيان في برج العرب الجديدة وبرج العرب القديمة مع قنوات تواصل مباشرة وسريعة.',
    },
  ];
}
