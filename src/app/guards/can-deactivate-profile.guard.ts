import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateProfileGuard
  implements CanDeactivate<ProfileComponent>
{
  constructor(private dataService: DataService) {}

  public canDeactivate(component: ProfileComponent): boolean {
    if (!this.dataService.isSaved || !component.isSaved) {
      alert('You should save your changes...');
      return false;
    }

    return true;
  }
}
