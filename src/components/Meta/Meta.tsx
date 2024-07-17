// @ts-expect-error -- untyped
import Seo from '@americanexpress/react-seo';
import { useIntl } from 'gatsby-plugin-intl';
import env from '../../utils/env';
import config from '../../config';
import { replacePathLocale } from '../../utils/intl';

interface Props {
  path: string;
  description?: string;
  image?: string;
  twitterCard?: object;
  openGraph?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- passthrough to untyped
  [x: string]: any;
}

const Meta = ({
  path,
  description = '',
  image = config.defaultMetaImage,
  twitterCard = {},
  openGraph = {},
  ...rest
}: Props) => {
  const { locale } = useIntl();

  return (
    <Seo
      siteUrl={`${env.siteUrl}/${locale}${path}`}
      description={description}
      image={{ src: image }}
      twitterCard={{
        description,
        card: 'summary_large_image',
        src: image,
        ...twitterCard,
      }}
      openGraph={{
        description,
        src: image,
        ...openGraph,
      }}
      alternateLinks={env.availableLocales.map((availableLocale) => ({
        hrefLang: availableLocale,
        href: `${env.siteUrl}${replacePathLocale(path, availableLocale)}`,
      }))}
      locale={locale}
      {...rest}
    />
  );
};

export default Meta;
