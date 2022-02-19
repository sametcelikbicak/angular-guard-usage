import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginContent: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.loginContent = 'Logging in...';

    setTimeout(() => {
      this.authService.login();
      this.loginContent = '';
      this.router.navigate(['.']);
    }, 700);
  }
}
