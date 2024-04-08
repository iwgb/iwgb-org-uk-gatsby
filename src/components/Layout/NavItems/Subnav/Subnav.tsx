import { useMemo } from 'react';
import AnimateHeight from 'react-animate-height';
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
    <AnimateHeight
      height={openSubnavConfig && openSubnavConfig.Component ? 'auto' : 0}
      className={className}
    >
      {openSubnavConfig && openSubnavConfig.Component && (
        <openSubnavConfig.Component className={styles.component} />
      )}
    </AnimateHeight>
  );
};

export default Subnav;
