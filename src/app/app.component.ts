import { Component, OnDestroy } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  showTabs = true;
  private subscription: Subscription;
  constructor(private appStateService: AppStateService) {
    this.subscription = this.appStateService.showTabs$.subscribe((showTabs) => {
      this.showTabs = showTabs;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
