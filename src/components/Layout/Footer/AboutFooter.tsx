import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../hooks/useLocalisedGhostEntities';
import FooterColumnBody from './FooterColumnBody/FooterColumnBody';

const AboutFooter = () => {
  // language=GraphQL
  const data = useStaticQuery(graphql`
    {
      allGhostPage(filter: { tags: { elemMatch: { slug: { eq: "subcategory-about" } } } }) {
        ...GhostPageTitles,
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return (
    <FooterColumnBody
      titleMessage="footer.about"
      pages={pages}
    />
  );
};

export default AboutFooter;
