import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { MobileContactBarComponent } from './shared/components/layout/mobile-contact-bar/mobile-contact-bar.component';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    MobileContactBarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly router = inject(Router);
  private readonly analyticsService = inject(AnalyticsService);

  ngOnInit(): void {
    // Listen to route changes to automatically dispatch page views to GA4 and Meta Pixel
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.analyticsService.trackPageView(event.urlAfterRedirects);
      });
  }
}
