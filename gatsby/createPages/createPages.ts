import { CreatePagesArgs } from 'gatsby';
import createGhostPages from './createGhostPages';
import createHomepage from './createHomepage';
import createJoinPages from './createJoinPages';
import createFeeds from './createFeeds';
import createRedirects from './createRedirects';

require('dotenv').config();

const locales = (process.env.GATSBY_AVAILABLE_LOCALES || 'en').split(',');

const pageCreators = [
  createGhostPages,
  createHomepage,
  createJoinPages,
  createFeeds,
  createRedirects,
] as Array<(args: CreatePagesArgs, locales: string[]) => Promise<void>>;

const createPages = async (args: CreatePagesArgs) => Promise.all(pageCreators
  .map((pageCreator) => pageCreator(args, locales)));

export default createPages;
