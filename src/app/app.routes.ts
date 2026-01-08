import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { SignUp } from './pages/signup/signup';
import { Home } from './pages/home/home';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    // canActivate: [loginAuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignUp,
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: Home,
  },
  // {
  //   path: '',
  //   component: DefaultHomeLayout,
  //   // canActivateChild: [AuthGuard],
  //   children: [
  //     {
  //       path: 'home',
  //       component: Home,
  //     },
  //   ],
  // },
  {
    path: '**',
    redirectTo: '/login',
  },
];
