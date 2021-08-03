import { CreatePagesArgs } from 'gatsby';
import createGhostPages from './createGhostPages';
import createHomepage from './createHomepage';

require('dotenv').config();

const locales = (process.env.GATSBY_AVAILABLE_LOCALES || 'en').split(',');

const createPages = async (args: CreatePagesArgs) => Promise.all([
  createGhostPages(args, locales),
  createHomepage(args, locales),
]);

export default createPages;
