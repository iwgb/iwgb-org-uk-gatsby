import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import SlideDown from 'react-slidedown';
import Config from '../../../config';
import Paths from '../../../utils/paths';
import * as styles from './Nav.module.scss';
import NavItems from '../NavItems/NavItems';
import NavMenuItems from '../NavItems/NavMenuItems';
import Subnav from '../NavItems/Subnav/Subnav';

const Nav = () => {
  const { locale, formatMessage } = useIntl();
  const [isOpen, setOpen] = useState(false);
  const [openSubnav, setOpenSubnav] = useState('');

  const onToggleNav = () => setOpen(!isOpen);

  const onToggleOpenSubnav = (id: string) => {
    if (openSubnav === id) {
      setOpenSubnav('');
    } else {
      setOpenSubnav(id);
    }
  };

  return (
    <div
      className={`${styles.nav} position-sticky iwgb-dark-red-bg text-white`}
    >
      <div className="container d-flex justify-content-between flex-row-reverse flex-lg-row">
        <Link to="/">
          <img
            className={`${styles.wordmark} mt-3`}
            src={`${Config.cdnBaseUrl}/assets/wordmark-white.png`}
            alt={formatMessage({ id: 'global.iwgbLogo' })}
          />
        </Link>
        <div className="d-flex align-items-center">
          <NavItems
            openSubnav={openSubnav}
            setOpenSubnav={onToggleOpenSubnav}
          />
          <div className="d-block d-lg-none">
            <Hamburger direction="right" onToggle={onToggleNav} />
          </div>
          <Link className="ms-3" to={Paths.join()}>
            <Button
              className={`${styles.join} ${styles[`join_${locale}`]}`}
              variant="light"
            >
              <span className="sr-only">
                <FormattedMessage id="nav.joinButtonAlt" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <SlideDown>
        {isOpen && (
          <NavMenuItems
            openSubnav={openSubnav}
            setOpenSubnav={onToggleOpenSubnav}
          />
        )}
      </SlideDown>
      <Subnav openSubnav={openSubnav} className="d-none d-lg-block" />
    </div>
  );
};

export default Nav;
