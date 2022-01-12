import { Link } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';
import NavItemBody from './NavItemBody/NavItemBody';
import { NavItem } from './navConfig';

interface Props extends NavItem {
  setOpenSubnav: (subnav: string) => void;
  openSubnav: string;
}

const NavLink = ({ path, message, setOpenSubnav, openSubnav }: Props) => (
  <>
    {path === undefined ? (
      <Button className="btn-reset" onClick={() => setOpenSubnav(message)}>
        <NavItemBody message={message} isOpen={openSubnav === message} />
      </Button>
    ) : (
      <Link className="link-unstyled h-100" to={path}>
        <NavItemBody message={message} />
      </Link>
    )}
  </>
);

export default NavLink;
