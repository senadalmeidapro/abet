import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactData, ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly language = inject(LanguageService);
  readonly contactForm;
  sending = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone: ['', Validators.maxLength(40)],
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      message: ['', [Validators.required, Validators.maxLength(10000)]],
      website: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const value = this.contactForm.value;
    const data: ContactData = {
      name: value.name!.trim(),
      email: value.email!.trim(),
      phone: value.phone?.trim() ?? '',
      subject: value.subject!.trim(),
      message: value.message!.trim(),
      website: value.website ?? '',
    };

    this.sending = true;
    this.status = 'idle';

    this.contactService.sendMessage(data).subscribe({
      next: () => {
        this.sending = false;
        this.status = 'success';
        this.contactForm.reset();
      },
      error: () => {
        this.sending = false;
        this.status = 'error';
      },
    });
  }
}
