import { Products } from 'src/pages/products/Products';
import Profile from 'src/pages/profile/ProfileScreen';

export const paths = [
  {
    path: '/',
    component: Products,
    isAuth: false,
  },
  {
    path: '/profile',
    component: Profile,
    isAuth: true,
  },
  {
    path: '/auth',
    component: Auth,
    isAuth: false,
  },
];
