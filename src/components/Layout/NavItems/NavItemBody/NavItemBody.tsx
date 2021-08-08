import NavItemText from '../NavItemText/NavItemText';
import * as styles from './NavItemBody.module.scss';

interface Props {
  message: string,
  isOpen?: boolean,
}

const NavItemBody = ({ message, isOpen }: Props) => (
  <div className={`${styles.navItem} py-3 px-4 h-100 d-flex align-items-center text-center`}>
    <NavItemText
      message={message}
      isOpen={isOpen}
    />
  </div>
);

export default NavItemBody;
