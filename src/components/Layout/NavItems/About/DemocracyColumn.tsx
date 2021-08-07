import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../../hooks/useLocalisedGhostEntities';
import NavColumnBody from '../NavColumnBody/NavColumnBody';

const DemocracyColumn = () => {
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPage(filter: { tags: { elemMatch: { slug: { eq: "subcategory-democracy" } } } }) {
        ...GhostPageTitles,
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return (
    <NavColumnBody
      titleMessage="nav.democracy"
      pages={pages}
    />
  );
};

export default DemocracyColumn;
