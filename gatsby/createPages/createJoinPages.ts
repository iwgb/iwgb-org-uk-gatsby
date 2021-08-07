import { CreatePagesArgs } from 'gatsby';
import Paths from '../../src/utils/paths';
import { getSlugsInLocales } from '../../src/utils/intl';

const getJobTypeSlugs = async ({ graphql }: CreatePagesArgs): Promise<string[]> => {
  // language=GraphQL
  const { errors, data } = await graphql<GatsbyTypes.Query>(`
    {
      allAirtable(
        sort: { fields: [data___Slug], order: [ASC] },
        filter: { table: { eq: "Job types" } },
      ) {
        edges {
          node {
            data {
              Slug,
            },
          },
        },
      },
    }
  `);

  if (errors || data === undefined) {
    throw new Error(errors);
  }

  return data.allAirtable.edges
    .reduce((jobTypes, { node }) => (
      node.data && node.data.Slug
        ? [...jobTypes, node.data.Slug]
        : jobTypes
    ), [] as string[])
    .sort((a, b) => {
      if (a === 'other') {
        return 1;
      }
      if (b === 'other') {
        return -1;
      }
      return 0;
    });
};

const createJoinPages = async (args: CreatePagesArgs, locales: string[]) => {
  const jobTypes = await getJobTypeSlugs(args);

  args.actions.createPage({
    path: Paths.join(),
    component: require.resolve('../../src/templates/Join/Join.tsx'),
    context: {
      jobTypes,
      contentSlugs: getSlugsInLocales(['join'], locales),
    },
  });

  jobTypes.forEach((jobType) => {
    args.actions.createPage({
      path: Paths.joinJobType(jobType),
      component: require.resolve('../../src/templates/JobType.tsx'),
      context: { jobType },
    });
  });
};

export default createJoinPages;
