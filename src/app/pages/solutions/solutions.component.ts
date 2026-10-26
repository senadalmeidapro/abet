import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoEmbedComponent } from '../../shared/video-embed/video-embed.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterLink, VideoEmbedComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {}
