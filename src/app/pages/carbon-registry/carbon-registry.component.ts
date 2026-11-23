import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RouterLink } from '@angular/router';
import { VideoComponent } from '../../shared/video/video.component';
@Component({selector:'app-carbon-registry',standalone:true,imports:[RouterLink,VideoComponent],templateUrl:'./carbon-registry.component.html',styleUrl:'./carbon-registry.component.scss'})
export class CarbonRegistryComponent {
  readonly language=inject(LanguageService);
  get c(){return this.language.dict().carbon;}

}
