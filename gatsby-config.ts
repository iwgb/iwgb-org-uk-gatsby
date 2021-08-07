require('dotenv').config();

const locales = (process.env.GATSBY_AVAILABLE_LOCALES || 'en').split(',');

const devConfig = process.env.NODE_ENV === 'development'
  ? ['gatsby-plugin-extract-schema']
  : [];

export default {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typegen',
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
  ],
};
