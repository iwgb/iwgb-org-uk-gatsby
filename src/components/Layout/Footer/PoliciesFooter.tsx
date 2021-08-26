import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../../hooks/useLocalisedGhostEntities';
import FooterColumnBody from './FooterColumnBody/FooterColumnBody';

const PoliciesFooter = () => {
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPage(filter: { tags: { elemMatch: { slug: { eq: "category-policies" } } } }) {
        ...GhostPageTitles,
      }
    }
  `);

  const pages = useLocalisedGhostEntities(data.allGhostPage);

  return (
    <FooterColumnBody
      titleMessage="footer.policies"
      pages={pages}
    />
  );
};

export default PoliciesFooter;
