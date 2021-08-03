import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import env from '../../../utils/env';
import config from '../../../config';
import * as styles from './Locales.module.scss';

interface Props {
  path: string,
}

const Locales = ({ path }: Props) => {
  const { locale: currentLocale } = useIntl();

  return (
    <div className={`${styles.locales} container-fluid d-flex align-items-center justify-content-end iwgb-dark-grey-bg position-relative`}>
      {env.availableLocales.map((locale) => (
        <Link
          to={`/${locale}${path}`}
          key={locale}
        >
          <img
            className={`m-2 ${styles.locale} ${currentLocale === locale && styles.current}`}
            src={`${config.cdnBaseUrl}/assets/${locale}.png`}
            alt={locale}
          />
        </Link>
      ))}
    </div>
  );
};

export default Locales;
