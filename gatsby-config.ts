require('dotenv').config();

const locales = (process.env.GATSBY_AVAILABLE_LOCALES || 'en').split(',');

const devConfig = process.env.NODE_ENV === 'development'
  ? ['gatsby-plugin-extract-schema', 'gatsby-plugin-typegen']
  : [];

export default {
  siteMetadata: {
    siteUrl: 'https://iwgb.org.uk',
    title: 'iwgb-org-uk',
  },
  plugins: [
    ...devConfig,
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_API_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: false,
        headers: {
          '/*': [
            'x-xss-protection: 1; mode=block',
            'x-content-type-options: nosniff',
            'referrer-policy: same-origin',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/locale`,
        languages: locales,
        defaultLanguage: locales[0],
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_MEMBERSHIP_BASE_ID,
            tableName: process.env.AIRTABLE_MEMBERSHIP_JOB_TYPES_TABLE_NAME,
          },
          {
            baseId: process.env.AIRTABLE_WEB_DATA_BASE_ID,
            tableName: process.env.AIRTABLE_WEB_DATA_BRANCHES_TABLE_NAME,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: process.env.FATHOM_URL,
        siteId: process.env.FATHOM_SITE_ID,
      },
    },
  ],
};
