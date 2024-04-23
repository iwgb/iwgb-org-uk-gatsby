export interface LegacyPost {
  content: string;
  timestamp: string;
  title: string;
  // eslint-disable-next-line camelcase -- api format
  header_img: string;
}

export interface LegacyPostResponse {
  [id: string]: LegacyPost;
}
