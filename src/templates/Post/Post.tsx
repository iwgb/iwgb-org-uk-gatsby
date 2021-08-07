import { graphql } from 'gatsby';
import { DateTime } from 'luxon';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import { Button } from 'react-bootstrap';
import Container from '../../components/Layout/Container';
import paths from '../../utils/paths';
import GhostEntityMeta from '../../components/Meta/GhostEntityMeta';
import useLocalisedGhostEntities from '../../hooks/useLocalisedGhostEntities';
import NotFound from '../../pages/404';
import * as styles from './Post.module.scss';
import useLocalDateTime from '../../hooks/useLocalDateTime';
import HtmlContent from '../../components/HtmlContent/HtmlContent';

interface Props {
  data: GatsbyTypes.Query,
}

const Post = ({ data: { allGhostPost: posts } }: Props) => {
  const [{ entity: post, slug }] = useLocalisedGhostEntities(posts);
  const published = useLocalDateTime(post.published_at);
  const { formatMessage } = useIntl();

  if (slug === undefined) {
    return <NotFound />;
  }

  return (
    <Container path={paths.post(slug || '')}>
      <GhostEntityMeta
        path={paths.post(slug || '')}
        entity={post as GatsbyTypes.GhostPost}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <div
              className={`${post.feature_image && styles.image} row bg-image align-items-end pt-3`}
              style={{ backgroundImage: `url(${post.feature_image})` }}
            >
              <div className="col-12 col-md-3" />
              <div className="col-12 col-md-9 px-0">
                <h1 className={`${post.feature_image && `${styles.title} text-white`} mb-0 px-3`}>
                  {post.title}
                </h1>
              </div>
            </div>
            <div className="row mt-3">
              <small className={`col-12 col-md-3 iwgb-dark-grey ${styles.published} mb-3 mb-md-0`}>
                {published.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
              </small>
              <HtmlContent
                html={post.html}
                className={`${styles.content} col-12 col-md-9`}
              />
            </div>
            <div className="row mt-3">
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export const query = graphql`
  query($slugs: [String]) {
    allGhostPost(filter: { slug: { in: $slugs } }) {
      ...GhostPostFields,
    },
  }
`;

export default Post;
