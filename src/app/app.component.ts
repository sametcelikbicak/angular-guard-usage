import { Component, OnInit, VERSION } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = `Angular ${VERSION.major} Guard usage`;
  public activePage = 'Home';

  constructor(public authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.url.split('/')[1];
        this.activePage = path === '' ? 'home' : path;
      }
    });
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['.']);
  }
}
