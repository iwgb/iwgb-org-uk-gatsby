import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';

const DonateCta = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="col-12 col-md-9 offset-md-3 px-0">
      <h2 className="iwgb-dark-red-bg text-white mb-0 px-3 py-2">
        <FormattedMessage id="post.donate.title" />
      </h2>
      <div className="iwgb-lightest-grey-bg mb-0 p-3">
        <p>
          <FormattedMessage id="post.donate.body" />
        </p>
        <Link to={formatMessage({ id: 'post.donate.cta.href' })}>
          <Button>
            <FormattedMessage id="post.donate.cta.text" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DonateCta;
