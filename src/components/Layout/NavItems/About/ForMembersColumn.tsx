import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../../hooks/useLocalisedGhostEntities';
import NavColumnBody from '../NavColumnBody/NavColumnBody';

const ForMembersColumn = () => {
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPage(
        filter: {
          tags: { elemMatch: { slug: { eq: "subcategory-for-members" } } }
        }
      ) {
        ...GhostPageTitles
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return <NavColumnBody titleMessage="nav.forMembers" pages={pages} />;
};

export default ForMembersColumn;
