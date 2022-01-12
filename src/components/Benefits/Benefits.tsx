import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';
import * as styles from './Benefits.module.scss';
import StripeText from '../StripeText/StripeText';
import { arrayOf } from '../../utils/array';

const Benefits = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div
        className={`${styles.header} bg-image d-flex align-items-end`}
        style={{
          backgroundImage: `url(${formatMessage({
            id: 'home.benefits.image',
          })}`,
        }}
      >
        <div className="container my-4">
          <StripeText className={styles.title}>
            <FormattedMessage id="home.benefits.title" />
          </StripeText>
        </div>
      </div>
      <div className="iwgb-med-grey-bg text-white">
        <div className="container py-4">
          <div className="row py-4">
            {arrayOf(3).map((_, i) => (
              <div
                /* eslint-disable-next-line react/no-array-index-key -- no other index */
                key={i}
                className="col-12 col-md-4 d-flex flex-column justify-content-between my-3 my-md-0"
              >
                <div>
                  <h2>
                    <FormattedMessage id={`home.benefits.${i}.title`} />
                  </h2>
                  <p>
                    <FormattedMessage id={`home.benefits.${i}.body`} />
                  </p>
                </div>
                <Link to={formatMessage({ id: `home.benefits.${i}.cta.href` })}>
                  <Button>
                    <FormattedMessage id={`home.benefits.${i}.cta.text`} />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
