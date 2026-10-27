import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-maritime',
  standalone: true,
  imports: [RouterLink, VideoComponent],
  templateUrl: './maritime.component.html',
  styleUrl: './maritime.component.scss',
})
export class MaritimeComponent {}
