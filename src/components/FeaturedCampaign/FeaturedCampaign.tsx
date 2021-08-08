import { Button } from 'react-bootstrap';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import * as styles from './FeaturedCampaign.module.scss';
import Paths from '../../utils/paths';
import Config from '../../config';
import StripeText from '../StripeText/StripeText';

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
}

interface Props {
  image?: string,
  topText: string,
  bottomText: string,
  body?: string,
  ctaPath: string,
  ctaMessage?: string,
  direction?: 'left' | 'right',
}

const FeaturedCampaign = ({
  image = Config.defaultMetaImage,
  topText,
  bottomText,
  body = '',
  ctaPath,
  ctaMessage = 'home.readMore',
  direction = 'left',
}: Props) => (
  <div className={`${styles.campaign} ${styles[direction]} row flex-nowrap my-5 `}>
    <div className={`col-12 d-flex ${direction === Direction.RIGHT && 'flex-row-reverse'}`}>
      <div
        className="d-none d-lg-block bg-image w-100 flex-shrink-1"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex-shrink-1 px-0">
        <div
          className={`${styles.text} bg-image`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <StripeText className={styles.stripe}>
            {topText}
          </StripeText>
          <br />
          <StripeText className={`${styles.stripe} ${styles.stripeBottom}`}>
            {bottomText}
          </StripeText>
          <div className={`${styles.body} bg-white px-3 py-2`}>
            {body && (
              <div>
                {body}
              </div>
            )}
            <div className="mt-2">
              <Link
                to={ctaPath}
                className="mt-2"
              >
                <Button>
                  <FormattedMessage id={ctaMessage} />
                </Button>
              </Link>
              <Link
                to={Paths.donate()}
                className="ms-2"
              >
                <Button>
                  <FormattedMessage id="home.donate" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedCampaign;
