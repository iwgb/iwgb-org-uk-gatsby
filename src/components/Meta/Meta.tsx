// @ts-ignore
import Seo from '@americanexpress/react-seo';
import env from '../../utils/env';
import config from '../../config';
import { replacePathLocale } from '../../utils/intl';

interface Props {
  path: string,
  description?: string,
  image?: string,
  twitterCard?: object,
  openGraph?: object,
  [x:string]: any;
}

const Meta = ({
  path,
  description = '',
  image = config.defaultMetaImage,
  twitterCard = {},
  openGraph = {},
  ...rest
}: Props) => (
  <Seo
    siteUrl={`${env.siteUrl}${path}`}
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
    alternateLinks={env.availableLocales.map((locale) => ({
      hrefLang: locale,
      href: `${env.siteUrl}${replacePathLocale(path, locale)}`,
    }))}
    {...rest}
  />
);

export default Meta;
