import { Component, input, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';
import { IconComponent } from '../../../../shared/components/ui/icon/icon.component';
import { BookingService } from '../../../../core/services/booking.service';
import { INITIAL_SERVICES, CLINIC_LOCATIONS } from '../../../../core/config/clinic.config';
import { ConsultationRequest, ConsultationResponse } from '../../../../core/models/contact.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, IconComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly bookingService = inject(BookingService);

  initialLocationId = input<string>('no-preference');
  initialServiceSlug = input<string>('general');

  readonly services = INITIAL_SERVICES;
  readonly locations = CLINIC_LOCATIONS;

  contactForm!: FormGroup;
  submitted = signal<boolean>(false);
  submissionResult = signal<ConsultationResponse | null>(null);

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(\+?20|0)?1[0125][0-9]{8}$/),
        ],
      ],
      preferredLocationId: [this.initialLocationId() || 'no-preference'],
      preferredServiceSlug: [this.initialServiceSlug() || 'general'],
      preferredContactMethod: ['whatsapp', Validators.required],
      notes: [''],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitted()));
  }

  onSubmit(): void {
    this.submitted.set(true);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const val = this.contactForm.value;
    const request: ConsultationRequest = {
      fullName: val.fullName,
      phoneNumber: val.phoneNumber,
      preferredLocationId: val.preferredLocationId,
      preferredServiceSlug: val.preferredServiceSlug,
      preferredContactMethod: val.preferredContactMethod,
      notes: val.notes,
    };

    const res = this.bookingService.requestConsultation(request, 'contact_page_form');
    this.submissionResult.set(res);
  }

  openWhatsAppFlow(): void {
    const res = this.submissionResult();
    if (res?.whatsappUrl && typeof window !== 'undefined') {
      window.open(res.whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  }

  resetForm(): void {
    this.contactForm.reset({
      preferredLocationId: 'no-preference',
      preferredServiceSlug: 'general',
      preferredContactMethod: 'whatsapp',
    });
    this.submitted.set(false);
    this.submissionResult.set(null);
  }
}
