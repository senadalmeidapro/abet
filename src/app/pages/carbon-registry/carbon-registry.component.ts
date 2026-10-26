import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoEmbedComponent } from '../../shared/video-embed/video-embed.component';

@Component({
  selector: 'app-carbon-registry',
  standalone: true,
  imports: [RouterLink, VideoEmbedComponent],
  templateUrl: './carbon-registry.component.html',
  styleUrl: './carbon-registry.component.scss',
})
export class CarbonRegistryComponent {}
