import { CreatePagesArgs } from 'gatsby';
import path from 'node:path';
import Paths from '../../src/utils/paths';

const createFeeds = ({ actions: { createPage } }: CreatePagesArgs) => {
  const campaignsTemplate = path.resolve('./src/templates/Campaigns.tsx');
  createPage({
    path: Paths.campaigns(),
    component: campaignsTemplate,
    context: {},
  });

  const branchesTemplate = path.resolve('./src/templates/Branches.tsx');
  createPage({
    path: Paths.branches(),
    component: branchesTemplate,
    context: {},
  });
};

export default createFeeds;
