import { FormattedMessage } from 'gatsby-plugin-intl';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import * as styles from './NavItemText.module.scss';

interface Props {
  message: string;
  isOpen?: boolean;
}

const NavItemText = ({ message, isOpen }: Props) => (
  <>
    <FormattedMessage id={message} />
    {isOpen !== undefined && (
      <Icon
        icon={faChevronDown}
        className={`ms-2 ${styles.chevron} ${isOpen && styles.open}`}
      />
    )}
  </>
);

export default NavItemText;
