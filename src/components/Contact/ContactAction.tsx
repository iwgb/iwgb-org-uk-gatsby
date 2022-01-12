import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  message: string;
}

const ContactAction = ({ icon, message }: Props) => (
  <div className="d-flex align-items-center flex-nowrap">
    <Icon icon={icon} size="sm" className="me-2" fixedWidth={true} />
    <span className="text-decoration-underline">
      <FormattedMessage id={message} />
    </span>
  </div>
);

export default ContactAction;
