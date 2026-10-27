import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterLink, VideoComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {}
