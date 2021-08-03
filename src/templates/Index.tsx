import { graphql, PageProps } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import Container from '../components/Layout/Container';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import { Modify } from '../utils/types';
import FeaturedStoryCard from '../components/FeaturedStoryCard/FeaturedStoryCard';
import Feed from '../components/Feed';
import FeaturedCampaign from '../components/FeaturedCampaign/FeaturedCampaign';
import Config from '../config';
import Paths from '../utils/paths';
import Benefits from '../components/Benefits/Benefits';
import Contact from '../components/Contact/Contact';

interface GraphqlData {
  featured: GatsbyTypes.GhostPostConnection,
  recentStories: GatsbyTypes.GhostPostConnection,
  campaigns: GatsbyTypes.GhostPostConnection,
}

const Index = ({ data }: Modify<PageProps, { data: GraphqlData }>) => {
  const { formatMessage } = useIntl();
  const [{ entity: featured, slug: featuredSlug }] = useLocalisedGhostEntities(data.featured);
  const recentStories = useLocalisedGhostEntities(data.recentStories);
  const campaigns = useLocalisedGhostEntities(data.campaigns);

  return (
    <Container path="">
      <div className="container py-3">
        <FeaturedStoryCard
          title={featured.title}
          image={featured.feature_image}
          published={featured.published_at}
          slug={featuredSlug}
        />
        <Feed
          posts={recentStories}
          hideMobileImages
        />
      </div>
      <div className="container">
        <FeaturedCampaign
          image={Config.defaultMetaImage}
          topText={formatMessage({ id: 'home.weAre.1' })}
          bottomText={formatMessage({ id: 'home.weAre.2' })}
          body={formatMessage({ id: 'home.weAre.body' })}
          ctaPath={Paths.join()}
          ctaMessage={formatMessage({ id: 'home.join' })}
        />
        {campaigns.map(({ entity, slug }, i) => (
          <FeaturedCampaign
            image={entity.feature_image}
            topText={entity.title.split(' ').slice(0, 2).join(' ')}
            bottomText={entity.title.split(' ').slice(2).join(' ')}
            body={entity.excerpt}
            ctaPath={Paths.page(slug)}
            direction={i % 2 === 1 ? 'left' : 'right'}
          />
        ))}
      </div>
      <Benefits />
      <Contact />
    </Container>
  );
};

export const query = graphql`
  query (
    $featuredSlug: [String!],
    $recentStorySlugs: [String!],
    $campaignSlugs: [String!],
  ) {
    featured: allGhostPost(filter: { slug: { in: $featuredSlug } }) {
      ...GhostPostFields,
    },
    recentStories: allGhostPost(filter: { slug: { in: $recentStorySlugs } }) {
      ...GhostPostFields,
    },
    campaigns: allGhostPage(filter: { slug: { in: $campaignSlugs } }) {
      ...GhostPageFields,
    },
  }
`;

export default Index;
