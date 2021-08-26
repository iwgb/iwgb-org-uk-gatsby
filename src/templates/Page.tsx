import { graphql } from 'gatsby';
import UiContainer from '../components/Layout/UiContainer';
import paths from '../utils/paths';
import GhostEntityMeta from '../components/Meta/GhostEntityMeta';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import NotFound from '../pages/404';
import HtmlContent from '../components/HtmlContent/HtmlContent';
import { TemplateProps } from '../utils/types';
import Jobs from '../components/Jobs/Jobs';

const JOBS_PAGE_TAG_SLUG = 'special-careers';

const Page = ({ data: { allGhostPage: pages } }: TemplateProps) => {
  const [{ entity: page, slug }] = useLocalisedGhostEntities(pages);

  if (page === undefined || slug === undefined) {
    return <NotFound />;
  }

  const tags = page.tags || [];

  return (
    <UiContainer path={paths.page(slug || '')}>
      <GhostEntityMeta
        path={paths.page(slug || '')}
        entity={page as GatsbyTypes.GhostPage}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="my-5">
              {page.title}
            </h1>
            <HtmlContent html={page.html} />
            {tags.some((tag) => tag && tag.slug === JOBS_PAGE_TAG_SLUG) && (
              <Jobs />
            )}
          </div>
        </div>
      </div>
    </UiContainer>
  );
};

export const query = graphql`
  query($slugs: [String]) {
    allGhostPage(filter: { slug: { in: $slugs } }) {
      ...GhostPageFields,
    },
  }
`;

export default Page;
