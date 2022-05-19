import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../../hooks/useLocalisedGhostEntities';
import NavColumnBody from '../NavColumnBody/NavColumnBody';

const GeneralColumn = () => {
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPage(
        filter: { tags: { elemMatch: { slug: { eq: "subcategory-general" } } } }
      ) {
        ...GhostPageTitles
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return <NavColumnBody titleMessage="nav.general" pages={pages} />;
};

export default GeneralColumn;
