import { graphql } from 'gatsby';
import { DateTime } from 'luxon';
import UiContainer from '../../components/Layout/UiContainer';
import paths from '../../utils/paths';
import GhostEntityMeta from '../../components/Meta/GhostEntityMeta';
import useLocalisedGhostEntities from '../../hooks/useLocalisedGhostEntities';
import NotFound from '../../components/NotFound/NotFound';
import * as styles from './Post.module.scss';
import useLocalDateTime from '../../hooks/useLocalDateTime';
import HtmlContent from '../../components/HtmlContent/HtmlContent';
import { TemplateProps } from '../../utils/types';
import DonateCta from '../../components/DonateCta';

const JOB_POST_TAG_SLUG = 'category-job';

const Post = ({ data: { allGhostPost: posts } }: TemplateProps) => {
  const [{ entity: post, slug }] = useLocalisedGhostEntities(posts);
  const published = useLocalDateTime(post.published_at);

  if (slug === undefined) {
    return <NotFound />;
  }

  return (
    <UiContainer path={paths.post(slug || '')}>
      <GhostEntityMeta
        path={paths.post(slug || '')}
        entity={post as GatsbyTypes.GhostPost}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div
              className={`${
                post.feature_image && styles.image
              } row bg-image align-items-end pt-3`}
              style={{ backgroundImage: `url(${post.feature_image})` }}
            >
              <div className="col-12 col-md-3" />
              <div
                className={`${
                  post.feature_image && `${styles.title} text-white`
                } col-12 col-md-9`}
              >
                <h1 className="mb-0">{post.title}</h1>
              </div>
            </div>
            <div className="row mt-3">
              <small
                className={`col-12 col-md-3 iwgb-dark-grey ${styles.published} mb-3 mb-md-0`}
              >
                {published.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
              </small>
              <HtmlContent
                html={post.html}
                className={`${styles.content} col-12 col-md-9`}
              />
            </div>
            <div className="row mt-3">
              {!(
                post.tags &&
                post.tags.some((tag) => tag && tag.slug === JOB_POST_TAG_SLUG)
              ) && <DonateCta />}
            </div>
          </div>
        </div>
      </div>
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
