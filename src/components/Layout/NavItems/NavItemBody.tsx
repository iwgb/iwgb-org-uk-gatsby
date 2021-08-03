import { FormattedMessage } from 'gatsby-plugin-intl';
import * as styles from './NavItemBody.module.scss';

interface Props {
  message: string,
}

const NavItemBody = ({ message }: Props) => (
  <div className={`${styles.navItem} py-3 px-4 h-100 d-flex align-items-center text-center`}>
    <FormattedMessage id={message} />
  </div>
);

export default NavItemBody;
