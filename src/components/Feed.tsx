import { EntitySlugTuple } from '../hooks/useLocalisedGhostEntities';
import Story from './Story/Story';

interface Props {
  posts: EntitySlugTuple[],
  hideMobileImages?: boolean,
}

const Feed = ({
  posts,
  hideMobileImages = false,
}: Props) => (
  <div className="row">
    {posts.map(({ entity: post, slug }) => (
      <div
        className="col-12 col-md-4"
        key={slug}
      >
        <Story
          image={post.feature_image}
          title={post.title}
          published={post.published_at}
          slug={slug}
          hideMobileImages={hideMobileImages}
        />
      </div>
    ))}
  </div>
);

export default Feed;
