import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-solution-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-solution-card.component.html',
  styleUrl: './home-solution-card.component.scss',
})
export class HomeSolutionCardComponent {
  @Input() category = '';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() link = '';
  @Input() linkLabel = '';
  @Input() reverse = false;
  @Input() theme: 'sea' | 'carbon' = 'sea';
}
