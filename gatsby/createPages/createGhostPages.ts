import { CreatePagesArgs } from 'gatsby';
import chunk from 'lodash/chunk';
import path from 'node:path';
import Paths from '../../src/utils/paths';
import { getSlugsInLocales } from '../../src/utils/intl';
import { GhostEntityEdges } from '../../src/hooks/useLocalisedGhostEntities';

const PAGE_SIZE = 15;

interface PaginatedFeedParams {
  items: Readonly<GhostEntityEdges>;
  createPage: CreatePagesArgs['actions']['createPage'];
  getPath: (page: number) => string;
  component: string;
  locales: string[];
  pageSize?: number;
}

const createPaginatedFeed = ({
  items,
  createPage,
  getPath,
  component,
  locales,
  pageSize = PAGE_SIZE,
}: PaginatedFeedParams) => {
  const pages = chunk(items, pageSize);

  pages.forEach((edges, i) =>
    createPage({
      path: getPath(i + 1),
      component,
      context: {
        hasPrevious: i > 0,
        hasNext: i < pages.length - 1,
        slugs: getSlugsInLocales(
          edges.map(({ node: { slug } }) => slug),
          locales
        ),
        page: i + 1,
        pages: pages.length,
      },
    })
  );
};

const createGhostPages = async (
  { actions: { createPage }, graphql }: CreatePagesArgs,
  locales: string[]
) => {
  // language=GraphQL
  const { errors, data } = await graphql<Queries.Query>(
    `
      query ($locale: String!) {
        allGhostPost(
          sort: { published_at: DESC }
          filter: { tags: { elemMatch: { slug: { eq: $locale } } } }
        ) {
          edges {
            node {
              slug
            }
          }
        }
        allGhostPage(
          filter: { tags: { elemMatch: { slug: { eq: $locale } } } }
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

  const pages = data.allGhostPage.edges;
  const posts = data.allGhostPost.edges;

  const pageTemplate = path.resolve('./src/templates/Page.tsx');
  const postTemplate = path.resolve('./src/templates/Post.tsx');

  const createPagesFromSlug = (
    edges: Readonly<GhostEntityEdges>,
    getPath: (slug: string) => string,
    component: string
  ) =>
    edges.forEach(({ node: { slug } }) =>
      createPage({
        path: getPath(slug),
        component,
        context: {
          slugs: getSlugsInLocales([slug], locales),
        },
      })
    );

  createPagesFromSlug(pages, Paths.page, pageTemplate);
  createPagesFromSlug(posts, Paths.post, postTemplate);

  const newsTemplate = path.resolve('./src/templates/News.tsx');
  createPaginatedFeed({
    items: posts,
    createPage,
    getPath: Paths.news,
    component: newsTemplate,
    locales,
  });
};

export default createGhostPages;
