import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-doctor-philosophy',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './doctor-philosophy.component.html',
  styleUrls: ['./doctor-philosophy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorPhilosophyComponent {}
