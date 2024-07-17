export interface LegacyPost {
  content: string;
  timestamp: string;
  title: string;
  header_img: string;
}

export interface LegacyPostResponse {
  [id: string]: LegacyPost;
}
