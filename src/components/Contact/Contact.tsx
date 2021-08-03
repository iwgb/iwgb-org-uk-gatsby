import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons/faCommentDots';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import ContactMethod from './ContactMethod';

const Contact = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="iwgb-dark-grey-bg text-white">
      <div className="container py-4">
        <div className="row pt-4">
          <h1>
            <FormattedMessage id="home.contact.title" />
          </h1>
          <p>
            <FormattedMessage id="home.contact.body" />
          </p>
        </div>
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <ContactMethod
              icon={faCommentDots}
              showActions={false}
            >
              <FormattedMessage
                id="home.contact.form.text"
                values={{
                  link: (
                    <a
                      href={formatMessage({ id: 'home.contact.form.href' })}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage id="home.contact.form.linkText" />
                      <Icon
                        className="ms-1"
                        icon={faExternalLinkAlt}
                        size="xs"
                      />
                    </a>
                  ),
                }}
              />
            </ContactMethod>
            <ContactMethod
              icon={faPhone}
              text={formatMessage({ id: 'home.contact.phone.value' })}
              actionHref={formatMessage({ id: 'home.contact.phone.action.href' })}
              actionMessage="home.contact.phone.action.text"
              actionIcon={faPhone}
              hintMessage="home.contact.phone.openingHours"
            >
              <FormattedMessage id="home.contact.phone.value" />
            </ContactMethod>
            <ContactMethod
              icon={faMapMarkerAlt}
              text={formatMessage({ id: 'home.contact.address.value' })}
              actionHref={formatMessage({ id: 'home.contact.address.action.href' })}
              actionMessage="home.contact.address.action.text"
              actionIcon={faLocationArrow}
              isActionInNewTab={true}
            >
              <div>
                {
                  formatMessage({ id: 'home.contact.address.value' })
                    .split(',\n')
                    .map((line) => (
                      <>
                        {line}
                        <br />
                      </>
                    ))
                }
              </div>
            </ContactMethod>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
