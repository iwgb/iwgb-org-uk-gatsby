import { graphql, PageProps } from 'gatsby';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import Config from '../../config';
import * as styles from './Join.module.scss';
import Container from '../../components/Layout/Container';
import StripeText from '../../components/StripeText/StripeText';
import Paths from '../../utils/paths';
import JobType from '../../components/JobType/JobType';
import useLocalisedGhostEntities from '../../hooks/useLocalisedGhostEntities';
import HtmlContent from '../../components/HtmlContent/HtmlContent';

interface Props extends PageProps {
  data: GatsbyTypes.Query,
  pageContext: {
    jobTypes: string[],
  },
}

const Join = ({
  data: { allGhostPage: pages },
  pageContext: { jobTypes },
}: Props) => {
  const [{ entity: content }] = useLocalisedGhostEntities(pages);
  const { formatMessage } = useIntl();

  return (
    <Container path={Paths.join()}>
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${Config.cdnBaseUrl}/cms/2020/02/5de78f059c508.jpg` }}
      >
        <div className="container">
          <div className={`row ${styles.title}`}>
            <div className="col-12">
              <StripeText>
                <FormattedMessage id="join.title" />
              </StripeText>
            </div>
          </div>
          <div className="row pb-5">
            {jobTypes.map((jobType) => (
              <JobType
                key={jobType}
                slug={jobType}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="iwgb-dark-grey-bg text-white">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-6">
              <h3>{content.title}</h3>
              <HtmlContent html={content.html} />
            </div>
            <div className="col-12 col-md-6">
              <h3>
                <FormattedMessage id="join.contact.title" />
              </h3>
              <p>
                <FormattedMessage id="join.contact.body" />
              </p>
              <h3>
                <FormattedMessage id="join.fees.title" />
              </h3>
              <p>
                <FormattedMessage id="join.fees.body" />
              </p>
              <p>
                <Link to={formatMessage({ id: 'join.fees.link.href' })}>
                  <FormattedMessage id="join.fees.link.text" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export const query = graphql`
  query ($contentSlugs: [String!]) {
    allGhostPage(filter: { slug: { in: $contentSlugs } }) {
      ...GhostPageFields,
    },
  }
`;

export default Join;
