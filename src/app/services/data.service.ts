import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  private _isSavedChanges: boolean = false;

  public get isSaved(): boolean {
    return this._isSavedChanges;
  }

  public saveChanges(): void {
    this._isSavedChanges = true;
  }
}
