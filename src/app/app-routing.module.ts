import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateProfileGuard } from './guards/can-deactivate-profile.guard';

const routes: Routes = [
  { component: LoginComponent, path: 'login' },
  {
    component: ProfileComponent,
    path: 'profile',
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateProfileGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
