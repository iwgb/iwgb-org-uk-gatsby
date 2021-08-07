import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as styles from './SocialIcon.module.scss';

interface Props {
  icon: IconProp,
  href: string,
}

const SocialIcon = ({ icon, href }: Props) => (
  <a
    className={`${styles.icon} me-2`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <Icon
      icon={icon}
      fixedWidth={true}
      size="lg"
    />
  </a>
);

export default SocialIcon;
