import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { IconName } from '../../../../core/models/icon.model';

interface ApproachStep {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

@Component({
  selector: 'app-clinical-approach',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  templateUrl: './clinical-approach.component.html',
  styleUrls: ['./clinical-approach.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicalApproachComponent {
  readonly steps: ApproachStep[] = [
    {
      number: '01',
      title: 'فهم الحالة والاستماع',
      description: 'الاستماع لشكوى المريض، وفهم مخاوفه وتطلعاته وتاريخه الطبي قبل أي فحص.',
      icon: 'heart-pulse',
    },
    {
      number: '02',
      title: 'التقييم والتشخيص الدقيق',
      description: 'الفحص السريري المتأني والاستعانة بالتقنيات الرقمية المتاحة لتحديد التشخيص الصحيح.',
      icon: 'shield-check',
    },
    {
      number: '03',
      title: 'مناقشة الخيارات والبدائل',
      description: 'شرح تفاصيل الحالة والخيارات العلاجية المتاحة وتوضيح كل خطوة للمريض بشفافية.',
      icon: 'sparkle',
    },
    {
      number: '04',
      title: 'خطة العلاج المخصصة',
      description: 'تنفيذ الإجراءات الطبية بأعلى درجات الراحة والهدوء والتعقيم الطبي المحكم.',
      icon: 'tooth-align',
    },
    {
      number: '05',
      title: 'المتابعة والإرشاد الوقائي',
      description: 'تقديم النصائح اليومية والمتابعة الدورية للحفاظ على صحة وجمال الأسنان الطبيعية.',
      icon: 'calendar',
    },
  ];
}
