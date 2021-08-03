import { CreatePagesArgs } from 'gatsby';
import Paths from '../../src/utils/paths';
import { getSlugsInLocales } from '../../src/utils/intl';

const createGhostPages = async (
  { actions: { createPage }, graphql }: CreatePagesArgs,
  locales: string[],
) => {
  // language=GraphQL
  const { errors, data } = await graphql<GatsbyTypes.Query>(`
    query ($locale: String!) {
      allGhostPost(
        sort: { order: [ASC], fields: [published_at] },
        filter: { tags: { elemMatch: { slug: { eq: $locale } } } },
      ) {
        edges {
          node {
            slug,
          },
        },
      },
      allGhostPage(
        sort: { order: [ASC], fields: [published_at] },
        filter: { tags: { elemMatch: { slug: { eq: $locale } } } },
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

  const pages = data.allGhostPage.edges;
  const posts = data.allGhostPost.edges;

  const pageTemplate = require.resolve('../../src/templates/Page.tsx');
  const postTemplate = require.resolve('../../src/templates/Post/Post.tsx');

  const createPagesFromSlug = (
    edges: readonly GatsbyTypes.GhostPageEdge[] | readonly GatsbyTypes.GhostPostEdge[],
    getPath: (slug: string) => string,
    component: string,
  ) => edges.forEach(({ node: { slug } }) => createPage({
    path: getPath(slug),
    component,
    context: {
      slugs: getSlugsInLocales([slug], locales),
    },
  }));

  createPagesFromSlug(pages, Paths.page, pageTemplate);
  createPagesFromSlug(posts, Paths.post, postTemplate);
};

export default createGhostPages;
