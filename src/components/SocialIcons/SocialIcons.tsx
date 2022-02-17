import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import SocialIcon from './SocialIcon';

interface Props {
  className?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

const SocialIcons = ({
  className = '',
  twitter,
  facebook,
  instagram,
  youtube,
}: Props) => (
  <div className={className}>
    {twitter && <SocialIcon icon={faTwitter} href={twitter} />}
    {facebook && <SocialIcon icon={faFacebook} href={facebook} />}
    {instagram && <SocialIcon icon={faInstagram} href={instagram} />}
    {youtube && <SocialIcon icon={faYoutube} href={youtube} />}
  </div>
);

export default SocialIcons;
