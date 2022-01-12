import { ComponentType } from 'react';
import Paths from '../../../utils/paths';
import About from './About/About';

export interface NavItem {
  message: string;
  path?: string;
  Component?: ComponentType;
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
    Component: About,
    message: 'nav.about',
  },
  {
    path: '/page/support-and-advice',
    message: 'nav.support',
  },
];

export default NavConfig;
