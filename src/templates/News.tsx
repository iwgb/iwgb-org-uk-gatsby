import { graphql, PageProps } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import Container from '../components/Layout/Container';
import Paths from '../utils/paths';
import Feed from '../components/Feed';
import Pagination from '../components/Pagination';

interface TContext {
  page: number;
  hasPrevious: boolean;
  hasNext: boolean;
  pages: number;
}

const News = ({
  data: { allGhostPost: posts },
  pageContext: { page, hasPrevious, hasNext, pages },
}: PageProps<GatsbyTypes.Query, TContext>) => {
  const entities = useLocalisedGhostEntities(posts);
  const { formatMessage } = useIntl();

  return (
    <Container
      path={Paths.news(page)}
      title={formatMessage({ id: 'nav.news' })}
    >
      <div className="container">
        <div className="row">
          <h1 className="my-5">
            <FormattedMessage id="nav.news" />
          </h1>
        </div>
        <Feed entities={entities} getPath={Paths.post} />
        <Pagination
          page={page}
          pages={pages}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          getPath={Paths.news}
        />
      </div>
    </Container>
  );
};

export const query = graphql`
  query ($slugs: [String!]) {
    allGhostPost(filter: { slug: { in: $slugs } }) {
      ...GhostPostFields
    }
  }
`;

export default News;
