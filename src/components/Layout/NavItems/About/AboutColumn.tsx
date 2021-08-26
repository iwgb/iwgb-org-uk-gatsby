import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../../hooks/useLocalisedGhostEntities';
import NavColumnBody from '../NavColumnBody/NavColumnBody';

const AboutFooter = () => {
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPage(filter: { tags: { elemMatch: { slug: { eq: "subcategory-about" } } } }) {
        ...GhostPageTitles,
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return (
    <NavColumnBody
      titleMessage="nav.about"
      pages={pages}
    />
  );
};

export default AboutFooter;
