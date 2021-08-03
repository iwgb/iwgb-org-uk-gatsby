import { useIntl } from 'gatsby-plugin-intl';
import { DateTime } from 'luxon';

const useLocalDateTime = (value: string | undefined): DateTime => {
  const { locale } = useIntl();
  return value
    ? DateTime.fromISO(value).setLocale(locale)
    : DateTime.now().setLocale(locale);
};

export default useLocalDateTime;
