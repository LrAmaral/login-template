import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { User } from './pages/user/user';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: Signup,
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
