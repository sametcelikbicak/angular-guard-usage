import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = `Angular ${VERSION.major} Guard usage`;
  public activePage = 'Home';

  public changeActivePage(activePage: string): void {
    this.activePage = activePage;
  }
}
