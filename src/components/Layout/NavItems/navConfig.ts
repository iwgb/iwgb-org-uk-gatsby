import { ComponentType } from 'react';
import Paths from '../../../utils/paths';
import More from './About/More';

export interface NavItem {
  message: string;
  path?: string;
  Component?: ComponentType<{ className?: string }>;
}

const NavConfig: NavItem[] = [
  {
    path: '/page/about-us',
    message: 'nav.about',
  },
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
    path: '/page/contact',
    message: 'nav.contact',
  },
  {
    Component: More,
    message: 'nav.more',
  },
];

export default NavConfig;
