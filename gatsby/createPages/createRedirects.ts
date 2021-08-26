import { CreatePagesArgs } from 'gatsby';

const redirects = {
  '/donate': '/page/donate',
};

const createRedirects = (
  { actions: { createRedirect } }: CreatePagesArgs,
  locales: string[],
) => {
  (Object.entries(redirects) as [string, string][])
    .forEach(([fromPath, toPath]) => {
      createRedirect({ fromPath, toPath });
      locales.forEach(((locale) => {
        createRedirect({
          fromPath: `/${locale}${fromPath}`,
          toPath,
        });
      }));
    });
};

export default createRedirects;
