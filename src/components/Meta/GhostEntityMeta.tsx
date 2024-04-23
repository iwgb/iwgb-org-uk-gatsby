import { Helmet } from 'react-helmet';
import Meta from './Meta';

interface Props {
  path: string;
  entity: Queries.GhostPost | Queries.GhostPage;
}

const GhostEntityMeta = ({ path, entity }: Props) => (
  <>
    <Meta
      path={path}
      image={entity?.feature_image ?? undefined}
      description={(entity?.meta_description || entity?.excerpt) ?? undefined}
      twitterCard={{
        title: entity?.twitter_title || entity?.title,
        description:
          entity?.twitter_description ||
          entity?.meta_description ||
          entity?.excerpt,
        image: { src: entity?.twitter_image || entity?.feature_image || '' },
      }}
      openGraph={{
        title: entity?.og_title || entity?.title,
        description:
          entity?.og_description || entity?.meta_description || entity?.excerpt,
        image: { src: entity?.og_image || entity?.feature_image || '' },
      }}
    />
    <Helmet>
      <title>{`${entity?.title} · IWGB`}</title>
    </Helmet>
  </>
);

export default GhostEntityMeta;
