import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private showTabsSource = new BehaviorSubject<boolean>(true);
  showTabs$ = this.showTabsSource.asObservable();

  setShowTabs(value: boolean) {
    this.showTabsSource.next(value);
  }

  constructor() { }
}
