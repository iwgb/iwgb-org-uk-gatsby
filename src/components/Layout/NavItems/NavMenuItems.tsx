import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import NavConfig from './navConfig';

const NavMenuItems = () => (
  <div className="d-flex d-lg-none flex-column iwgb-dark-grey-bg">
    {NavConfig.map(({ path, message }) => (
      <Link
        className="container link-unstyled py-3"
        to={path}
      >
        <FormattedMessage id={message} />
      </Link>
    ))}
  </div>
);

export default NavMenuItems;
