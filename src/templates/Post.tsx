import { graphql, PageProps } from 'gatsby';
import UiContainer from '../components/Layout/UiContainer';
import paths from '../utils/paths';
import GhostEntityMeta from '../components/Meta/GhostEntityMeta';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import NotFound from '../components/NotFound/NotFound';
import GenericPost from '../components/GenericPost/GenericPost';

const JOB_POST_TAG_SLUG = 'category-job';

const Post = ({ data: { allGhostPost: posts } }: PageProps<Queries.Query>) => {
  const [{ entity: post, slug }] = useLocalisedGhostEntities(posts);

  if (slug === undefined) {
    return <NotFound />;
  }

  return (
    <UiContainer path={paths.post(slug || '')}>
      <GhostEntityMeta
        path={paths.post(slug || '')}
        entity={post as Queries.GhostPost}
      />
      <GenericPost
        image={post.feature_image ?? undefined}
        title={post.title}
        timestamp={post.published_at ?? undefined}
        html={post.html ?? undefined}
        showDonate={
          !(
            post.tags &&
            post.tags.some((tag) => tag && tag.slug === JOB_POST_TAG_SLUG)
          )
        }
      />
    </UiContainer>
  );
};

export const query = graphql`
  query ($slugs: [String]) {
    allGhostPost(filter: { slug: { in: $slugs } }) {
      ...GhostPostFields
    }
  }
`;

export default Post;
