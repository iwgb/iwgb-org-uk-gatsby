import { FormattedMessage } from 'gatsby-plugin-intl';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import * as styles from './NavItemBody.module.scss';

interface Props {
  message: string,
  isOpen?: boolean,
}

const NavItemBody = ({ message, isOpen }: Props) => (
  <div className={`${styles.navItem} py-3 px-4 h-100 d-flex align-items-center text-center`}>
    <FormattedMessage id={message} />
    {isOpen !== undefined && (
      <Icon
        icon={faChevronDown}
        className={`ms-2 ${styles.chevron} ${isOpen && styles.open}`}
      />
    )}
  </div>
);

export default NavItemBody;
