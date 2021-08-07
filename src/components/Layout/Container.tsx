import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import config from '../../config';
import Locales from './Locales/Locales';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

interface Props {
  className?: string,
  path: string,
  children: ReactNode,
}

const Container = ({
  path,
  children,
  className = '',
}: Props) => (
  <div className="d-flex flex-column justify-content-between min-vh-100">
    <div>
      <Helmet>
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
      <div className={className}>
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

export default Container;
