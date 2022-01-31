import { graphql } from 'gatsby';
import UiContainer from '../components/Layout/UiContainer';
import paths from '../utils/paths';
import GhostEntityMeta from '../components/Meta/GhostEntityMeta';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import NotFound from '../components/NotFound/NotFound';
import { TemplateProps } from '../utils/types';
import GenericPost from '../components/GenericPost/GenericPost';

const JOB_POST_TAG_SLUG = 'category-job';

const Post = ({ data: { allGhostPost: posts } }: TemplateProps) => {
  const [{ entity: post, slug }] = useLocalisedGhostEntities(posts);

  if (slug === undefined) {
    return <NotFound />;
  }

  return (
    <UiContainer path={paths.post(slug || '')}>
      <GhostEntityMeta
        path={paths.post(slug || '')}
        entity={post as GatsbyTypes.GhostPost}
      />
      <GenericPost
        image={post.feature_image}
        title={post.title}
        timestamp={post.published_at}
        html={post.html}
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
