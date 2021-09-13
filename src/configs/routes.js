import Kanban from '../components/pages/Kanban';
import Home from '../components/pages/Home';
import HooksExample from '../components/pages/HooksExample';
import Users from '../components/pages/Users';
import Refs from '../components/pages/Refs';
import ContextExample from '../components/pages/ContextExample';

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
  {
    title: 'Refs',
    url: '/refs',
    component: Refs,
    show: true,
  },
  {
    title: 'Context',
    url: '/context',
    component: ContextExample,
    show: true,
  },
];
