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
    {twitter && <SocialIcon icon={faTwitter} href={twitter} label="Twitter" />}
    {facebook && (
      <SocialIcon icon={faFacebook} href={facebook} label="Facebook" />
    )}
    {instagram && (
      <SocialIcon icon={faInstagram} href={instagram} label="Instagram" />
    )}
    {youtube && <SocialIcon icon={faYoutube} href={youtube} label="Youtube" />}
  </div>
);

export default SocialIcons;
