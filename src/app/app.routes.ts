import { Routes } from '@angular/router';
import { User } from './pages/user/user';
import { Login } from './pages/login/login';
import { SignUp } from './pages/signup/signup';

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
    path: 'user',
    component: User,
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
