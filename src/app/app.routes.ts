import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'prepare',
    loadComponent: () => import('./pages/prepare/prepare.page').then( m => m.PreparePage)
  },
  {
    path: 'roll',
    loadComponent: () => import('./pages/roll/roll.page').then( m => m.RollPage)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'debug',
    loadComponent: () => import('./pages/debug/debug.page').then( m => m.DebugPage)
  },
];
