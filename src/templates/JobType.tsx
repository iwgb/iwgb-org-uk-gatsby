import { PageProps } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { useEffect } from 'react';
import camelCase from 'lodash/camelCase';
import Container from '../components/Layout/Container';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import Paths from '../utils/paths';
import Config from '../config';

interface Props extends PageProps {
  pageContext: {
    jobType: string,
  }
}

const JobType = ({ pageContext: { jobType } }: Props) => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    window.setTimeout(
      () => window.location.replace(`${Config.joinBaseUrl}/${jobType}`),
      1000,
    );
  }, []);

  return (
    <Container
      path={Paths.joinJobType(jobType)}
      className="d-flex flex-column align-items-center p-5"
      title={`${formatMessage({ id: 'home.join' })} · ${formatMessage({ id: `join.jobType.${camelCase(jobType)}.name` })}`}
    >
      <LogoAnimation height={100} />
      <h3>
        <FormattedMessage id="join.loading.title" />
      </h3>
      <p>
        <FormattedMessage id="join.loading.body" />
      </p>
    </Container>
  );
};

export default JobType;
