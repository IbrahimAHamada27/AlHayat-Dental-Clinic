import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClinicLocation } from '../../../../core/models/location.model';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { CardComponent } from '../../../../shared/components/ui/card/card.component';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-doctor-locations',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent, CardComponent, SectionHeadingComponent],
  templateUrl: './doctor-locations.component.html',
  styleUrls: ['./doctor-locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorLocationsComponent {
  locations = input.required<ClinicLocation[]>();

  whatsAppBranchClick = output<string>();
  callBranchClick = output<string>();

  onWhatsApp(branchName: string): void {
    this.whatsAppBranchClick.emit(branchName);
  }

  onCall(branchName: string): void {
    this.callBranchClick.emit(branchName);
  }
}
