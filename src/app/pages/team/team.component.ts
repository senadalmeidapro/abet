import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

type TeamMember = { name: string; role: string; bio: string; photo: string };

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  readonly language = inject(LanguageService);
  readonly members: TeamMember[] = [];
}
