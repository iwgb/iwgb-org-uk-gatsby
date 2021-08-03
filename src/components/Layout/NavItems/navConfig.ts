import Paths from '../../../utils/paths';

interface NavItem {
  path: string,
  message: string,
}

const NavConfig: NavItem[] = [
  {
    path: Paths.news(),
    message: 'nav.news',
  },
  {
    path: Paths.campaigns(),
    message: 'nav.campaigns',
  },
  {
    path: Paths.branches(),
    message: 'nav.branches',
  },
  {
    path: '',
    message: 'nav.about',
  },
  {
    path: '/page/support-and-advice',
    message: 'nav.support',
  },
];

export default NavConfig;
