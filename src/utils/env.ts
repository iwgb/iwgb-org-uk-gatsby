export default {
  langpackBaseUrl: process.env.GATSBY_LANGPACK_BASE_URL || '',
  availableLocales: (process.env.GATSBY_AVAILABLE_LOCALES || 'en').split(','),
  siteUrl: process.env.GATSBY_SITE_URL || 'http://localhost:8000',
};
