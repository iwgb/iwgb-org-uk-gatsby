import { Link } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';
import NavConfig from './navConfig';
import NavItemText from './NavItemText/NavItemText';
import Subnav from './Subnav';

interface Props {
  openSubnav: string;
  setOpenSubnav: (subnav: string) => void;
}

const NavMenuItems = ({ openSubnav, setOpenSubnav }: Props) => (
  <div className="d-flex d-lg-none flex-column iwgb-dark-grey-bg">
    {NavConfig.map(({ path, message }) =>
      path === undefined ? (
        <>
          <div className="container py-3">
            <Button
              className="btn-reset"
              onClick={() => setOpenSubnav(message)}
            >
              <NavItemText message={message} isOpen={openSubnav === message} />
            </Button>
          </div>
          <Subnav openSubnav={message === openSubnav ? message : ''} />
        </>
      ) : (
        <Link className="container link-unstyled py-3" to={path}>
          <NavItemText message={message} />
        </Link>
      )
    )}
  </div>
);

export default NavMenuItems;
