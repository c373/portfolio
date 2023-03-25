import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAboutPage: boolean = true;

  constructor(private router: Router) {
    this.router.events
    .pipe(
      filter( event =>event instanceof NavigationEnd)
    )
    .subscribe(
      (event: any) => {
        if (event.url === "/" || event.url === "/about") {
          this.isAboutPage = true;
        }
        else {
          this.isAboutPage = false;
        }
      }
    )
  }
}
