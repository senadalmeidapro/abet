import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-carbon-registry',
  standalone: true,
  imports: [RouterLink, VideoComponent],
  templateUrl: './carbon-registry.component.html',
  styleUrl: './carbon-registry.component.scss',
})
export class CarbonRegistryComponent {}
