import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../hooks/useLocalisedGhostEntities';
import FooterColumnBody from './FooterColumnBody/FooterColumnBody';

const GetInvolvedFooter = () => {
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

  return <FooterColumnBody titleMessage="footer.getInvolved" pages={pages} />;
};

export default GetInvolvedFooter;
