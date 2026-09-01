import {
  Component,
  signal,
  inject,
  HostListener,
  DOCUMENT,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ButtonComponent } from '../../ui/button/button.component';
import { IconComponent } from '../../ui/icon/icon.component';
import { CLINIC_CONFIG } from '../../../../core/config/clinic.config';
import { AnalyticsService } from '../../../../core/services/analytics.service';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { ContactService } from '../../../../core/services/contact.service';

interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly whatsAppService = inject(WhatsAppService);
  private readonly contactService = inject(ContactService);

  readonly config = CLINIC_CONFIG;

  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  readonly navItems: NavItem[] = [
    { label: 'الرئيسية', path: '/', exact: true },
    { label: 'عن الدكتور', path: '/doctor' },
    { label: 'الخدمات', path: '/services' },
    { label: 'التقنيات', path: '/technology' },
    { label: 'الحالات', path: '/cases' },
    { label: 'المقالات', path: '/blog' },
    { label: 'الفروع', path: '/locations' },
  ];

  constructor() {
    // Automatically close mobile menu upon successful route navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollOffset =
      window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isScrolled.set(scrollOffset > 24);
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu(): void {
    const nextState = !this.isMobileMenuOpen();
    this.isMobileMenuOpen.set(nextState);
    this.toggleBodyScrollLock(nextState);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.toggleBodyScrollLock(false);
  }

  private toggleBodyScrollLock(lock: boolean): void {
    if (lock) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = '';
    }
  }

  onBookingClick(source = 'navbar_desktop'): void {
    this.analyticsService.trackBookingStart(source);
    this.closeMobileMenu();
    // Default flow navigates to contact / consultation section
    this.router.navigate(['/contact']);
  }

  onWhatsAppClick(context = 'navbar_whatsapp'): void {
    const msg = this.whatsAppService.getBookingMessage();
    this.whatsAppService.openWhatsApp(msg, context);
    this.closeMobileMenu();
  }

  onPhoneClick(context = 'navbar_phone'): void {
    this.contactService.callClinic(undefined, context);
    this.closeMobileMenu();
  }
}
