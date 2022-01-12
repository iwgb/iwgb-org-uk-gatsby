import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import config from '../../config';
import Locales from './Locales/Locales';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

interface Props {
  className?: string;
  path: string;
  children: ReactNode;
  title?: string;
}

const UiContainer = ({ path, children, title = '', className = '' }: Props) => {
  const { formatMessage } = useIntl();

  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <div>
        <Helmet
          defaultTitle={`${formatMessage({ id: 'global.slogan' })} · IWGB`}
        >
          {title && <title>{`${title} · IWGB`}</title>}
          <meta name="theme-color" content="#962d22" />
          {[32, 64, 96, 128].map((px) => (
            <link
              key={px}
              rel="icon"
              href={`${config.cdnBaseUrl}/assets/favicon-${px}.png`}
              sizes={`${px}x${px}`}
            />
          ))}
        </Helmet>
        <Locales path={path} />
        <Nav />
        <div className={className}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default UiContainer;
