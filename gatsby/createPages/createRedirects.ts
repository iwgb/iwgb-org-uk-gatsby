import { CreatePagesArgs } from 'gatsby';

const redirects = {
  '/donate': '/page/donate',
};

const createRedirects = ({ actions: { createRedirect } }: CreatePagesArgs) => {
  (Object.entries(redirects) as [string, string][])
    .forEach(([fromPath, toPath]) => createRedirect({ fromPath, toPath }));
};

export default createRedirects;
