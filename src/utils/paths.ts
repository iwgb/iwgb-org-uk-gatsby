const Paths = {
  page: (slug: string) => `/page/${slug}`,
  post: (slug: string) => `/post/${slug}`,
  join: () => '/join',
  news: (page: number = 0) => `/news/${page}`,
  campaigns: () => '/campaigns',
  branches: () => '/branches',
  donate: () => '/donate',
};

export default Paths;
