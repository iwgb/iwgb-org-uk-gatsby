import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../../hooks/useLocalisedGhostEntities';
import NavColumnBody from '../NavColumnBody/NavColumnBody';

const ForSupportersColumn = () => {
  // language=GraphQL
  const data = useStaticQuery<Queries.Query>(graphql`
    {
      allGhostPage(
        filter: {
          tags: { elemMatch: { slug: { eq: "subcategory-for-supporters" } } }
        }
      ) {
        ...GhostPageTitles
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return <NavColumnBody titleMessage="nav.forSupporters" pages={pages} />;
};

export default ForSupportersColumn;
