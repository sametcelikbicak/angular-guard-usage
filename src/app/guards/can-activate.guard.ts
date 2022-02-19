import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  public canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      alert('You should login first...');
      return false;
    }

    return true;
  }
}
