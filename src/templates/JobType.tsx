import { PageProps } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import UiContainer from '../components/Layout/UiContainer';
import Paths from '../utils/paths';

interface Props extends PageProps {
  pageContext: {
    jobType: string,
  }
}

const JobType = ({ pageContext: { jobType } }: Props) => (
  <UiContainer
    path={Paths.joinJobType(jobType)}
    className="d-flex flex-column align-items-center p-5"
  >
    <LogoAnimation height={150} />
    <h3>
      <FormattedMessage id="join.loading.title" />
    </h3>
    <p>
      <FormattedMessage id="join.loading.body" />
    </p>
  </UiContainer>
);

export default JobType;
