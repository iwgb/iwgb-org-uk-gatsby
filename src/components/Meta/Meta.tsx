// @ts-ignore
import Seo from '@americanexpress/react-seo';
import env from '../../utils/env';
import config from '../../config';
import { replacePathLocale } from '../../utils/intl';

interface Props {
  path: string,
  image?: string,
  twitterCard?: object,
  openGraph?: object,
  [x:string]: any;
}

const Meta = ({
  path,
  image,
  twitterCard,
  openGraph,
  ...rest
}: Props) => {
  const defaultImage = { src: image };

  return (
    <Seo
      siteUrl={`${env.siteUrl}${path}`}
      image={defaultImage}
      twitterCard={{ card: 'summary_large_image', ...defaultImage, ...twitterCard }}
      openGraph={{ ...defaultImage, ...openGraph }}
      alternateLinks={env.availableLocales.map((locale) => ({
        hreflang: locale,
        href: `${env.siteUrl}${replacePathLocale(path, locale)}`,
      }))}
      {...rest}
    />
  );
};

Meta.defaultProps = {
  image: config.defaultMetaImage,
  twitterCard: {},
  openGraph: {},
};

export default Meta;
