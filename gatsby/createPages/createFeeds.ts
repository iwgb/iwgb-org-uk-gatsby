import { CreatePagesArgs } from 'gatsby';
import Paths from '../../src/utils/paths';

const createFeeds = ({ actions: { createPage } }: CreatePagesArgs) => {
  const campaignsTemplate = require.resolve(
    '../../src/templates/Campaigns.tsx'
  );
  createPage({
    path: Paths.campaigns(),
    component: campaignsTemplate,
    context: {},
  });

  const branchesTemplate = require.resolve('../../src/templates/Branches.tsx');
  createPage({
    path: Paths.branches(),
    component: branchesTemplate,
    context: {},
  });
};

export default createFeeds;
