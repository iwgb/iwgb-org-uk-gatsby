import { graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import Container from '../components/Layout/Container';
import Paths from '../utils/paths';
import Feed from '../components/Feed';
import { TemplateProps } from '../utils/types';

const Campaigns = ({ data: { allGhostPage: pages } }: TemplateProps) => {
  const campaigns = useLocalisedGhostEntities(pages);
  const { formatMessage } = useIntl();

  return (
    <Container
      path={Paths.campaigns()}
      title={formatMessage({ id: 'nav.campaigns' })}
    >
      <div className="container">
        <div className="row">
          <h1 className="my-5">
            <FormattedMessage id="nav.campaigns" />
          </h1>
        </div>
        <Feed entities={campaigns} getPath={Paths.page} />
      </div>
    </Container>
  );
};

export const query = graphql`
  {
    allGhostPage(
      sort: { order: [DESC], fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: "category-campaign" } } } }
    ) {
      ...GhostPageFields
    }
  }
`;

export default Campaigns;
