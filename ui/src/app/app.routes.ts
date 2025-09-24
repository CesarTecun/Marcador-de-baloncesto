import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page.component';
import { DisplayPageComponent } from './pages/display-page.component';
import { ResultsPageComponent } from './pages/results-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // público
  { path: 'login', component: LoginPageComponent },

  // tablero de control (protegido)
  { path: '', component: HomePageComponent, canActivate: [authGuard] },

  // existentes
  { path: 'display/:id', component: DisplayPageComponent },
  { path: 'results', component: ResultsPageComponent },

  // nuevas rutas navbar (standalone + lazy, sin imports arriba)
  {
    path: 'partidos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/partidos/partidos.component').then(m => m.PartidosComponent),
  },
  {
    path: 'jugadores',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/jugadores/jugadores.component').then(m => m.JugadoresComponent),
  },
  {
    path: 'equipos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/equipos/equipos.component').then(m => m.EquiposComponent),
  },
  {
    path: 'marcador',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/marcador/marcador.component').then(m => m.MarcadorComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
  },

  { path: '**', redirectTo: '' },
];
