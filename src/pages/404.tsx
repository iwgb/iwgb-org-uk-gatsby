import { useIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Container from '../components/Layout/Container';
import NotFoundComponent from '../components/NotFound/NotFound';
import { TemplateProps } from '../utils/types';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';

const NotFound = ({ data: { allGhostPost: posts } }: TemplateProps) => {
  const { formatMessage } = useIntl();
  const entities = useLocalisedGhostEntities(posts);

  return (
    <Container
      path="/404"
      title={formatMessage({ id: '404.title' })}
    >
      <NotFoundComponent posts={entities} />
    </Container>
  );
};

export const query = graphql`
  {
    allGhostPost(
      sort: { order: [DESC], fields: [published_at] },
      filter: { tags: { elemMatch: { slug: { eq: "special-victory" } } } },
    ) {
      ...GhostPostFields,
    },
  }
`;

export default NotFound;
