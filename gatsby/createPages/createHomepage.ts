import { CreatePagesArgs } from 'gatsby';
import { getSlugsInLocales } from '../../src/utils/intl';

export const CUSTOM_HOMEPAGE_CONTEXT_FLAG = 'hasInjectedContext';

const getFeaturedSlug = async (
  { graphql }: CreatePagesArgs,
  locales: string[],
): Promise<string> => {
  // language=GraphQL
  const { errors, data } = await graphql<GatsbyTypes.Query>(`
    query ($locale: String!) {
      allGhostPost(
        limit: 1,
        sort: { order: [DESC], fields: [published_at] },
        filter: {
          tags: { elemMatch: { slug: { eq: $locale } } },
          featured: { eq: true },
        },
      ) {
        edges {
          node {
            slug,
          },
        },
      },
    }
  `, { locale: locales[0] });

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPost.edges[0].node.slug;
};

const getRecentStorySlugs = async (
  { graphql }: CreatePagesArgs,
  locales: string[],
  featuredSlug: string,
): Promise<string[]> => {
  // language=GraphQL
  const { errors, data } = await graphql<GatsbyTypes.Query>(`
    query ($locale: String!, $featuredSlug: String!) {
      allGhostPost(
        limit: 3,
        sort: { order: [DESC], fields: [published_at] },
        filter: {
          tags: { elemMatch: { slug: { eq: $locale } } },
          slug: { ne: $featuredSlug},
        },
      ) {
        edges {
          node {
            slug,
          },
        },
      },
    }
  `, { locale: locales[0], featuredSlug });

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPost.edges.map(({ node: { slug } }) => slug);
};

const getFeaturedCampaignSlugs = async (
  { graphql }: CreatePagesArgs,
): Promise<string[]> => {
  // language=GraphQL
  const { errors, data } = await graphql<GatsbyTypes.Query>(`
    {
      allGhostPage(
        sort: { order: [DESC], fields: [published_at] },
        filter: {
          tags: { elemMatch: { slug: { eq: "category-campaign" } } },
          featured: { eq: true },
        },
      ) {
        edges {
          node {
            slug,
          },
        },
      },
    }
  `);

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPage.edges.map(({ node: { slug } }) => slug);
};

const createHomepage = async (
  args: CreatePagesArgs,
  locales: string [],
) => {
  const featuredSlug = await getFeaturedSlug(args, locales);
  const recentStorySlugs = await getRecentStorySlugs(args, locales, featuredSlug);
  const campaignSlugs = await getFeaturedCampaignSlugs(args);

  const component = require.resolve('../../src/templates/Index.tsx');

  args.actions.createPage({
    path: '/',
    component,
    context: {
      featuredSlug: getSlugsInLocales([featuredSlug], locales),
      recentStorySlugs: getSlugsInLocales(recentStorySlugs, locales),
      campaignSlugs,
      locales,
    },
  });
};

export default createHomepage;
