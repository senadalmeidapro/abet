import { Component, inject, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  standalone: true,
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss',
})
export class VideoEmbedComponent implements OnChanges {
  @Input({ required: true }) videoId = '';
  @Input({ required: true }) title = '';

  protected safeVideoUrl: SafeResourceUrl | null = null;

  private readonly sanitizer = inject(DomSanitizer);

  ngOnChanges(): void {
    this.safeVideoUrl = /^[\w-]+$/.test(this.videoId)
      ? this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube-nocookie.com/embed/${this.videoId}`,
        )
      : null;
  }
}
