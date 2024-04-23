import { CreatePagesArgs } from 'gatsby';
import path from 'node:path';
import { getSlugsInLocales } from '../../src/utils/intl';

const getFeaturedSlug = async (
  { graphql }: CreatePagesArgs,
  locales: string[]
): Promise<string> => {
  // language=GraphQL
  const { errors, data } = await graphql<Queries.Query>(
    `
      query ($locale: String!) {
        allGhostPost(
          limit: 1
          sort: { published_at: DESC }
          filter: {
            tags: { elemMatch: { slug: { eq: $locale } } }
            featured: { eq: true }
          }
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
    { locale: locales[0] }
  );

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPost.edges[0].node.slug;
};

const RECENT_STORY_EXCLUDED_TAGS = ['category-job', 'special-hero-cta'];

const getRecentStorySlugs = async (
  { graphql }: CreatePagesArgs,
  locales: string[],
  featuredSlug: string
): Promise<string[]> => {
  const { errors, data } = await graphql<Queries.Query>(
    // language=GraphQL
    `
      query (
        $locale: String!
        $featuredSlug: String!
        $excludeTags: [String!]
      ) {
        allGhostPost(
          limit: 3
          sort: { published_at: DESC }
          filter: {
            tags: { elemMatch: { slug: { eq: $locale, nin: $excludeTags } } }
            slug: { ne: $featuredSlug }
          }
        ) {
          edges {
            node {
              slug
              tags {
                slug
              }
            }
          }
        }
      }
    `,
    {
      locale: locales[0],
      featuredSlug,
      excludeTags: RECENT_STORY_EXCLUDED_TAGS,
    }
  );

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPost.edges.map(({ node: { slug } }) => slug);
};

const getFeaturedCampaignSlugs = async ({
  graphql,
}: CreatePagesArgs): Promise<string[]> => {
  // language=GraphQL
  const { errors, data } = await graphql<Queries.Query>(`
    {
      allGhostPage(
        sort: { published_at: DESC }
        filter: {
          tags: { elemMatch: { slug: { eq: "category-campaign" } } }
          featured: { eq: true }
        }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPage.edges.map(({ node: { slug } }) => slug);
};

const getHeroCtaSlugs = async ({
  graphql,
}: CreatePagesArgs): Promise<string[]> => {
  // language=GraphQL
  const { errors, data } = await graphql<Queries.Query>(`
    {
      allGhostPost(
        sort: { published_at: DESC }
        filter: { tags: { elemMatch: { slug: { eq: "special-hero-cta" } } } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allGhostPost.edges.map(({ node: { slug } }) => slug);
};

const createHomepage = async (args: CreatePagesArgs, locales: string[]) => {
  const featuredSlug = await getFeaturedSlug(args, locales);
  const [recentStorySlugs, campaignSlugs, heroCtaSlugs] = await Promise.all<
    string[]
  >([
    getRecentStorySlugs(args, locales, featuredSlug),
    getFeaturedCampaignSlugs(args),
    getHeroCtaSlugs(args),
  ]);

  const component = path.resolve('./src/templates/Index.tsx');

  args.actions.createPage({
    path: '/',
    component,
    context: {
      featuredSlug: getSlugsInLocales([featuredSlug], locales),
      recentStorySlugs: getSlugsInLocales(recentStorySlugs, locales),
      campaignSlugs,
      heroCtaSlugs,
      locales,
    },
  });
};

export default createHomepage;
