import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'doctor',
    loadComponent: () =>
      import('./features/doctor/doctor.component').then((m) => m.DoctorComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./features/services/service-detail.component').then((m) => m.ServiceDetailComponent),
  },
  {
    path: 'technology',
    loadComponent: () =>
      import('./features/technology/technology.component').then((m) => m.TechnologyComponent),
  },
  {
    path: 'technology/:slug',
    loadComponent: () =>
      import('./features/technology/technology.component').then((m) => m.TechnologyComponent),
  },
  {
    path: 'cases',
    loadComponent: () =>
      import('./features/cases/cases.component').then((m) => m.CasesComponent),
  },
  {
    path: 'cases/:slug',
    loadComponent: () =>
      import('./features/cases/case-detail.component').then((m) => m.CaseDetailComponent),
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./features/locations/locations.component').then((m) => m.LocationsComponent),
  },
  {
    path: 'locations/:slug',
    loadComponent: () =>
      import('./features/locations/location-detail.component').then((m) => m.LocationDetailComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./features/blog/blog-detail.component').then((m) => m.BlogDetailComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'booking',
    redirectTo: 'contact',
    pathMatch: 'full',
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./features/legal/legal-pages.component').then((m) => m.PrivacyComponent),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./features/legal/legal-pages.component').then((m) => m.TermsComponent),
  },
  {
    path: 'medical-disclaimer',
    loadComponent: () =>
      import('./features/legal/legal-pages.component').then((m) => m.MedicalDisclaimerComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
