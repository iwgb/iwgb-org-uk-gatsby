import http from 'axios';
import { env } from 'process';
import fs from 'fs/promises';
import config from '../gatsby-config';

interface GatsbyIntlOptions {
  path: string;
  languages: string[];
  defaultLanguage: string;
  redirect: boolean;
}

interface GatsbyIntlPlugin {
  options: GatsbyIntlOptions;
}

const onPreBootstrap = async () => {
  const { options } = config.plugins.find(
    (item) => typeof item === 'object' && item.resolve === 'gatsby-plugin-intl'
  ) as GatsbyIntlPlugin;
  return Promise.all(
    options.languages.map(async (language) => {
      const { data } = await http.get(`${env.LANGPACK_BASE_URL}/${language}`);
      return fs.writeFile(options.path, JSON.stringify(data));
    })
  );
};

export default onPreBootstrap;
