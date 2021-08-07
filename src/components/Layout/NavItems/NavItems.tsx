import NavLink from './NavLink';
import NavConfig from './navConfig';

interface Props {
  openSubnav: string,
  setOpenSubnav: (subnav: string) => void,
}

const NavItems = ({ openSubnav, setOpenSubnav }: Props) => (
  <div className="d-none d-lg-flex h-100">
    {NavConfig.map(({ path, message }) => (
      <NavLink
        key={message}
        path={path}
        message={message}
        openSubnav={openSubnav}
        setOpenSubnav={setOpenSubnav}
      />
    ))}
  </div>
);

export default NavItems;
