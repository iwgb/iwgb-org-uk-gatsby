export const replacePathLocale = (path: string, locale: string): string => {
  const barePath = path
    .split('/')
    .slice(2)
    .join('/');
  return `/${locale}/${barePath}`;
};

export const getSlugInLocale = (slug: string, locale: string): string => `${slug}-${locale}`;

export const getSlugsInLocales = (slugs: string[], locales: string[]): string[] => slugs
  .reduce((intlSlugs, slug) => [
    ...intlSlugs,
    ...[
      slug,
      ...locales
        .slice(1)
        .map((locale) => getSlugInLocale(slug, locale)),
    ],
  ], [] as string[]);
