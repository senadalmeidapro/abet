import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  sendMessage(event: Event): void {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const values = new FormData(form);
    const subject = String(values.get('subject') ?? '');
    const body = [
      `Nom et prénom : ${values.get('name') ?? ''}`,
      `Email : ${values.get('email') ?? ''}`,
      `Téléphone : ${values.get('phone') ?? ''}`,
      '',
      String(values.get('message') ?? ''),
    ].join('\n');
    const params = new URLSearchParams({ subject, body });

    window.location.href = `mailto:contact@abetforafrica.com?${params.toString()}`;
  }
}
