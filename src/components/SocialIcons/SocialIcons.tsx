import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import SocialIcon from './SocialIcon';

interface Props {
  className?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

const SocialIcons = ({
  className = '',
  twitter,
  facebook,
  instagram,
}: Props) => (
  <div className={className}>
    {twitter && <SocialIcon icon={faTwitter} href={twitter} />}
    {facebook && <SocialIcon icon={faFacebook} href={facebook} />}
    {instagram && <SocialIcon icon={faInstagram} href={instagram} />}
  </div>
);

export default SocialIcons;
