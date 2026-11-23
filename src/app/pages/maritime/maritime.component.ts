import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RouterLink } from '@angular/router';
import { VideoComponent } from '../../shared/video/video.component';
@Component({selector:'app-maritime',standalone:true,imports:[RouterLink,VideoComponent],templateUrl:'./maritime.component.html',styleUrl:'./maritime.component.scss'})
export class MaritimeComponent {
  readonly language=inject(LanguageService);
  get c(){return this.language.dict().maritime;}

}
