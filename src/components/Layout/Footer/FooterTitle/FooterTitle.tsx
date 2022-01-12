import { FormattedMessage } from 'gatsby-plugin-intl';
import * as styles from './FooterTitle.module.scss';

interface Props {
  message: string;
}

const FooterTitle = ({ message }: Props) => (
  <div className={`${styles.title} font-weight-700 mt-3 mt-md-0`}>
    <FormattedMessage id={message} />
  </div>
);

export default FooterTitle;
