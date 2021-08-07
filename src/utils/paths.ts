const Paths = {
  page: (slug: string) => `/page/${slug}`,
  post: (slug: string) => `/post/${slug}`,
  join: () => '/join',
  joinJobType: (jobType: string) => `/join/${jobType}`,
  news: (page: number = 1) => `/news/${page}`,
  campaigns: () => '/campaigns',
  branches: () => '/branches',
  donate: () => '/donate',
};

export default Paths;
