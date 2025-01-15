import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor() {
    this.setDirection('rtl'); 
  }

  setDirection(direction: 'ltr' | 'rtl') {
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', 'ar'); 
  }

}
