import NavLink from './NavLink';
import NavConfig from './navConfig';

const NavItems = () => (
  <div className="d-none d-lg-flex h-100">
    {NavConfig.map(({ path, message }) => (
      <NavLink
        key={message}
        path={path}
        message={message}
      />
    ))}
  </div>
);

export default NavItems;
