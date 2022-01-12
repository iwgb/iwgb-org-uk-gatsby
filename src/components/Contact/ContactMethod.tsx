import { ReactNode, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FormattedMessage } from 'gatsby-plugin-intl';
import ContactAction from './ContactAction';
import * as styles from './ContactMethod.module.scss';

interface Props {
  icon: IconProp;
  actionIcon?: IconProp | null;
  actionHref?: string;
  actionMessage?: string;
  hintMessage?: string;
  isActionInNewTab?: boolean;
  showActions?: boolean;
  text?: string;
  children: ReactNode;
}

const ContactMethod = ({
  icon,
  actionIcon = null,
  actionHref = '',
  actionMessage = '',
  hintMessage = '',
  text = '',
  isActionInNewTab = false,
  showActions = true,
  children,
}: Props) => {
  const [isComplete, setComplete] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setComplete(true);
    window.setTimeout(() => {
      setComplete(false);
    }, 2000 /* ms */);
  };

  return (
    <div className="d-flex my-3">
      <Icon className="mx-3 mt-1" icon={icon} fixedWidth={true} />
      <div>
        {children}
        {showActions && actionIcon && (
          <small className="d-flex align-items-start mt-1">
            <button
              className={`${styles.copy} btn-reset`}
              type="button"
              onClick={onCopy}
            >
              <ContactAction
                icon={isComplete ? faCheck : faCopy}
                message="home.contact.copy"
              />
            </button>
            <span className="iwgb-light-grey mx-2">&middot;</span>
            <a
              target={isActionInNewTab ? '_blank' : '_self'}
              rel="noreferrer"
              href={actionHref}
            >
              <ContactAction icon={actionIcon} message={actionMessage} />
            </a>
            {hintMessage && (
              <>
                <span className="iwgb-light-grey mx-2">&middot;</span>
                <span className="iwgb-light-grey">
                  <FormattedMessage id={hintMessage} />
                </span>
              </>
            )}
          </small>
        )}
      </div>
    </div>
  );
};

export default ContactMethod;
