import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { DateTime } from 'luxon';
import PoliciesFooter from './PoliciesFooter';
import AboutFooter from './AboutFooter';
import GetInvolvedFooter from './GetInvolvedFooter';
import FooterTitle from './FooterTitle/FooterTitle';
import SocialIcons from '../../SocialIcons/SocialIcons';
import * as styles from './Footer.module.scss';
import Config from '../../../config';

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="container py-5">
      <div className="row">
        <PoliciesFooter />
        <AboutFooter />
        <GetInvolvedFooter />
        <div className={`col-md ${styles.social}`}>
          <FooterTitle message="footer.social" />
          <div className="my-2">
            <SocialIcons
              className="my-2"
              twitter={`https://twitter.com/${formatMessage({
                id: 'footer.handles.twitter',
              })}`}
              facebook={`https://facebook.com/${formatMessage({
                id: 'footer.handles.facebook',
              })}`}
              instagram={`https://instagram.com/${formatMessage({
                id: 'footer.handles.instagram',
              })}`}
              youtube={`https://youtube.com/${formatMessage({
                id: 'footer.handles.youtube',
              })}`}
            />
          </div>
        </div>
        <div className="col-md d-flex justify-content-center mt-4 mt-md-0">
          <img
            alt={formatMessage({ id: 'global.iwgbLogo' })}
            className={styles.roundel}
            src={`${Config.cdnBaseUrl}/assets/roundel-colour.png`}
          />
        </div>
      </div>
      <div className="row my-5">
        <small className="col-12 text-center iwgb-light-grey">
          <p className="mb-0">
            <FormattedMessage
              id="footer.copyright"
              values={{
                copy: '©',
                year: DateTime.now().toFormat('y'),
              }}
            />
          </p>
          <p className="mb-0">
            <FormattedMessage id="footer.credit" />
          </p>
          <p className="mb-0">
            <a href={Config.cmsUrl} target="_blank" rel="noreferrer">
              <FormattedMessage id="footer.logIn" />
            </a>
            <span className="mx-2">&middot;</span>
            <a href={Config.repoUrl} target="_blank" rel="noreferrer">
              <FormattedMessage id="footer.contribute" />
            </a>
          </p>
        </small>
      </div>
    </div>
  );
};

export default Footer;
