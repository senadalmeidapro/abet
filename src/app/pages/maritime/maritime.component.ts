import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoEmbedComponent } from '../../shared/video-embed/video-embed.component';

@Component({
  selector: 'app-maritime',
  standalone: true,
  imports: [RouterLink, VideoEmbedComponent],
  templateUrl: './maritime.component.html',
  styleUrl: './maritime.component.scss',
})
export class MaritimeComponent {}
