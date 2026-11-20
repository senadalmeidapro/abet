import { Component } from '@angular/core';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  readonly members: TeamMember[] = [];
}
