import Kanban from '../components/pages/Kanban';
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
    title: 'Kanban',
    url: '/kanban',
    component: Kanban,
    show: true,
  },
  {
    title: 'ClassClock',
    url: '/cloxk',
    component: Users,
    show: true,
  },
  {
    title: 'HooksClock',
    url: '/hooks',
    component: HooksExample,
    show: true,
  },
];
