import { Link, useIntl } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import SlideDown from 'react-slidedown';
import Config from '../../../config';
import Paths from '../../../utils/paths';
import * as styles from './Nav.module.scss';
import NavItems from '../NavItems/NavItems';
import NavMenuItems from '../NavItems/NavMenuItems';

const Nav = () => {
  const { locale, formatMessage } = useIntl();
  const [isOpen, setOpen] = useState(false);

  const onToggleNav = () => setOpen(!isOpen);

  return (
    <div className={`${styles.nav} position-sticky iwgb-dark-red-bg text-white`}>
      <div className="container d-flex justify-content-between flex-row-reverse flex-lg-row">
        <Link to="/">
          <img
            className={`${styles.wordmark} mt-3`}
            src={`${Config.cdnBaseUrl}/assets/wordmark-white.png`}
            alt={formatMessage({ id: 'global.iwgbLogo' })}
          />
        </Link>
        <div className="d-flex align-items-center">
          <NavItems />
          <div className="d-block d-lg-none">
            <Hamburger
              direction="right"
              onToggle={onToggleNav}
            />
          </div>
          <Link
            className="ms-3"
            to={Paths.join()}
          >
            <Button
              className={`${styles.join} ${styles[`join_${locale}`]}`}
              variant="light"
            />
          </Link>
        </div>
      </div>
      <SlideDown>
        {isOpen && (
          <NavMenuItems />
        )}
      </SlideDown>
    </div>
  );
};

export default Nav;
