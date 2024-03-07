import { Routes } from '@angular/router';
import { AuthenticationGuard } from "./shared/services/api/auth.guard";

export const routes: Routes = [
  {
    path: 'alerts',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./features/alerts/alerts.module').then(m => m.AlertsModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'history',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./features/history/history.module').then(m => m.HistoryModule)
  },
  {path: '*', redirectTo: ''}
];
