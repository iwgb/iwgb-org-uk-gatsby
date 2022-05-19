import SlideDown from 'react-slidedown';
import { useMemo } from 'react';
import NavConfig from '../navConfig';
import * as styles from './Subnav.module.scss';

interface Props {
  className?: string;
  openSubnav: string;
}

const Subnav = ({ openSubnav, className = '' }: Props) => {
  const openSubnavConfig = useMemo(
    () => NavConfig.find((config) => config.message === openSubnav),
    [openSubnav]
  );

  return (
    <SlideDown className={className}>
      {openSubnavConfig && openSubnavConfig.Component && (
        <openSubnavConfig.Component className={styles.component} />
      )}
    </SlideDown>
  );
};

export default Subnav;
