import { EntitySlugTuple } from '../hooks/useLocalisedGhostEntities';
import Story from './Story/Story';

interface Props {
  entities: EntitySlugTuple[],
  getPath: (slug: string) => string,
  hideMobileImages?: boolean,
}

const Feed = ({
  entities,
  getPath,
  hideMobileImages = false,
}: Props) => (
  <div className="row">
    {entities.map(({ entity, slug }) => (
      <div
        className="col-12 col-md-4"
        key={slug}
      >
        <Story
          image={entity.feature_image}
          title={entity.title}
          published={entity.published_at}
          path={getPath(slug)}
          hideMobileImages={hideMobileImages}
        />
      </div>
    ))}
  </div>
);

export default Feed;
