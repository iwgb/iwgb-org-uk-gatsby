require('dotenv').config();

const locales = (process.env.GATSBY_AVAILABLE_LOCALES || 'en').split(',');

export default {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'iwgb-org-uk',
  },
  plugins: [
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
    'gatsby-plugin-extract-schema',
    'gatsby-plugin-typegen',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/locale`,
        languages: locales,
        defaultLanguage: locales[0],
        redirect: true,
      },
    },
  ],
};
