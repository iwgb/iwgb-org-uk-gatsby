import { Link } from 'gatsby-plugin-intl';
import NavItemBody from './NavItemBody';

interface Props {
  path: string,
  message: string,
}

const NavLink = ({ path, message }: Props) => (
  <Link
    className="link-unstyled h-100"
    to={path}
  >
    <NavItemBody message={message} />
  </Link>
);

export default NavLink;
