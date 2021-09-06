import About from '../components/pages/About';
import Home from '../components/pages/Home';
import HooksExample from '../components/pages/HooksExample';
import Users from '../components/pages/Users';

export default [
  {
    title: 'Home',
    url: '/',
    component: Home,
    show: true,
    exact: true,
  },
  {
    title: 'About',
    url: '/about',
    component: About,
    show: false,
  },
  {
    title: 'Users',
    url: '/users',
    component: Users,
    show: true,
  },
  {
    title: 'Hooks',
    url: '/hooks',
    component: HooksExample,
    show: true,
  },
];
