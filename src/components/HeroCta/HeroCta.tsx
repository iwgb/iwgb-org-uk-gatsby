import Marquee from 'react-fast-marquee';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { GhostEntity } from '../../hooks/useLocalisedGhostEntities';
import HtmlContent from '../HtmlContent/HtmlContent';
import StripeText from '../StripeText/StripeText';
import * as styles from './HeroCta.module.scss';
import { arrayOf } from '../../utils/array';

interface Props {
  post: GhostEntity;
}

const HeroCta = ({
  post: { title, feature_image: image, html, excerpt: href },
}: Props) => (
  <div className="iwgb-dark-grey-bg text-white">
    <div className={`${styles.marqueeContainer} iwgb-light-red-bg`}>
      <Marquee className={styles.marquee} speed={50} gradient={false}>
        {arrayOf(30).map((_, i) => (
          <span
            // eslint-disable-next-line react/no-array-index-key -- no other index
            key={i}
            className="font-weight-700 fst-italic text-uppercase px-2"
          >
            <FormattedMessage id="home.takeAction" />
          </span>
        ))}
      </Marquee>
    </div>
    <div className="container">
      <a
        className={`${styles.link} link-unstyled row`}
        href={href ?? undefined}
        target="_blank"
        rel="noreferrer"
      >
        <div className="col-5 col-md-7 col-xl-8 col-xxl-9 pt-4 pb-4 pb-lg-2">
          <StripeText className={styles.title}>{title}</StripeText>
          <div className="d-none d-lg-flex align-items-center my-3">
            <HtmlContent
              html={html ?? undefined}
              className={`${styles.html} d-none d-lg-block`}
            />
            {href && (
              <Button className="d-flex align-items-center ms-2">
                <FormattedMessage id="home.go" />
                <Icon icon={faArrowRight} className="ms-2" />
              </Button>
            )}
          </div>
        </div>
        <div className="col-7 col-md-5 col-xl-4 col-xxl-3">
          <div className={`${styles.imageContainer} h-100`}>
            <div
              className={`${styles.image} bg-image h-100`}
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default HeroCta;
