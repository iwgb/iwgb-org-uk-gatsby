import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import config from '../../config';
import Locales from './Locales/Locales';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

interface Props {
  path: string,
  children: ReactNode,
}

const Container = ({
  path,
  children,
}: Props) => (
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
    {children}
    <Footer />
  </div>
);

export default Container;
