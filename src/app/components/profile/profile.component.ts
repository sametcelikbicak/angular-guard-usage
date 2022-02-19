import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public isSaved: boolean = false;

  constructor(private dataService: DataService) {}

  public saveChanges(): void {
    this.dataService.saveChanges();
    this.isSaved = true;
  }

  public rollbackChanges(): void {
    this.dataService.rollbackChanges();
    this.isSaved = false;
  }
}
