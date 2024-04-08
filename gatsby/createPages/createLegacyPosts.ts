import { CreatePagesArgs } from 'gatsby';
import path from 'node:path';
import http from 'axios';
import { marked } from 'marked';
import { DateTime } from 'luxon';
import Paths from '../../src/utils/paths';
import { LegacyPostResponse } from '../../src/utils/types';

const createLegacyPosts = async ({
  actions: { createPage, createRedirect },
}: CreatePagesArgs) => {
  const archiveUrl = process.env.LEGACY_POST_URL;
  if (archiveUrl === undefined) {
    return;
  }

  const { data: legacyPosts } = await http.get<LegacyPostResponse>(archiveUrl);
  const component = path.resolve('./src/templates/LegacyPost.tsx');

  Object.entries(legacyPosts).forEach(
    ([id, { content, timestamp, ...post }]) => {
      createPage({
        path: Paths.post(id),
        component,
        context: {
          id,
          ...post,
          content: marked.parse(content),
          timestamp: DateTime.fromFormat(timestamp, 'y-MM-dd HH:mm:ss').toISO(),
        },
      });
      createRedirect({
        fromPath: `${Paths.post(id)}/*`,
        toPath: Paths.post(id),
      });
    }
  );
};

export default createLegacyPosts;
