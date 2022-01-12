import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../../hooks/useLocalisedGhostEntities';
import NavColumnBody from '../NavColumnBody/NavColumnBody';

const GetInvolvedColumn = () => {
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPage(
        filter: {
          tags: { elemMatch: { slug: { eq: "subcategory-get-involved" } } }
        }
      ) {
        ...GhostPageTitles
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return <NavColumnBody titleMessage="nav.getInvolved" pages={pages} />;
};

export default GetInvolvedColumn;
