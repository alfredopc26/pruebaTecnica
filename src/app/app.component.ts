import { Component, OnInit, HostListener, Inject  } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class AppComponent {
  title = 'pruebaTecnica';
  currentSection = 'home';

  constructor(@Inject(DOCUMENT) document) { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {

    let element = document.getElementById('mainNav');
    if (element === null) return;

    if (window.pageYOffset > 50) {
      element.classList.add('mainNavScroll');

    } else {
      element.classList.remove('mainNavScroll'); 
    }

  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
  }

  activeTo(section) {
    this.currentSection = section;
  }

}
