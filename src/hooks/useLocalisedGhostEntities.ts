import { useIntl } from 'gatsby-plugin-intl';
import { useMemo } from 'react';
import { getSlugInLocale } from '../utils/intl';

export type GhostEntityConnection =
  | GatsbyTypes.GhostPageConnection
  | GatsbyTypes.GhostPostConnection;

export type GhostEntityEdges = (
  | GatsbyTypes.GhostPageEdge
  | GatsbyTypes.GhostPostEdge
)[];

export type GhostEntity = GatsbyTypes.GhostPage | GatsbyTypes.GhostPost;

export interface EntitySlugTuple {
  entity: GhostEntity;
  slug: string;
}

export const findEntitiesWithLocale = (
  entities: GhostEntityConnection,
  locale: string
): GhostEntityEdges =>
  entities.edges.filter(({ node: { tags = [] } }) =>
    tags.some((tag) => tag && tag.slug === locale)
  );

const useLocalisedGhostEntities = (
  entities: GhostEntityConnection
): EntitySlugTuple[] => {
  const { defaultLocale, locale } = useIntl();

  return useMemo(() => {
    const defaultEntities = findEntitiesWithLocale(entities, defaultLocale);
    const localEntities = findEntitiesWithLocale(entities, locale);

    return defaultEntities.map(({ node: defaultEntity }): EntitySlugTuple => {
      const { slug } = defaultEntity;
      const localEdge = localEntities.find(
        ({ node }) => node.slug === getSlugInLocale(slug, locale)
      );
      return {
        slug,
        entity: localEdge === undefined ? defaultEntity : localEdge.node,
      };
    });
  }, [entities, locale, defaultLocale]);
};

export default useLocalisedGhostEntities;
