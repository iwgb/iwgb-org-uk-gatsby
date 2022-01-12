import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import env from '../../../utils/env';
import config from '../../../config';
import * as styles from './Locales.module.scss';

interface Props {
  path: string;
}

const Locales = ({ path }: Props) => {
  const { locale: currentLocale } = useIntl();

  return (
    <div className="iwgb-dark-grey-bg position-relative">
      <div
        className={`${styles.locales} container d-flex align-items-center justify-content-between`}
      >
        <div className="text-white text-uppercase font-weight-700">
          {env.isDev && <span className={styles.breakpoint} />}
        </div>
        <div>
          {env.availableLocales.map((locale) => (
            <Link to={`/${locale}${path}`} key={locale}>
              <img
                className={`m-2 ${styles.locale} ${
                  currentLocale === locale && styles.current
                }`}
                src={`${config.cdnBaseUrl}/assets/${locale}.png`}
                alt={locale}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locales;
