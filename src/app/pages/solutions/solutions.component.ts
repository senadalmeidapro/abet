import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RouterLink } from '@angular/router';
import { VideoComponent } from '../../shared/video/video.component';

@Component({selector:'app-solutions',standalone:true,imports:[RouterLink,VideoComponent],templateUrl:'./solutions.component.html',styleUrl:'./solutions.component.scss'})
export class SolutionsComponent {
  readonly language = inject(LanguageService);
  get c(){return this.language.dict().solutionsPage;}

}
