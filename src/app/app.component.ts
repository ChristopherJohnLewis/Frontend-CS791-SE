import { Component } from '@angular/core';
import {
  Router,
  Event,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// subscribes to router events and shows a loading overlay when navigation starts. Turns off the overlay when navigation finishes
export class AppComponent {
  public showOverlay = true;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      setTimeout( () => {this.navigationInterceptor(event);}, 1000);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }
}