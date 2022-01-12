import { graphql, useStaticQuery } from 'gatsby';
import useLocalisedGhostEntities from '../../hooks/useLocalisedGhostEntities';
import Feed from '../Feed';
import Paths from '../../utils/paths';

const Jobs = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPost(
        filter: { tags: { elemMatch: { slug: { eq: "category-job" } } } }
      ) {
        ...GhostPostSummaries
      }
    }
  `);

  const jobs = useLocalisedGhostEntities(data.allGhostPost);

  return <Feed entities={jobs} getPath={Paths.post} />;
};

export default Jobs;
