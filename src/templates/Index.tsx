import { graphql, PageProps } from 'gatsby';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import useLocalisedGhostEntities from '../hooks/useLocalisedGhostEntities';
import Container from '../components/Layout/Container';
import FeaturedStoryCard from '../components/FeaturedStoryCard/FeaturedStoryCard';
import FeaturedCampaign from '../components/FeaturedCampaign/FeaturedCampaign';
import Feed from '../components/Feed';
import Config from '../config';
import Paths from '../utils/paths';
import Benefits from '../components/Benefits/Benefits';
import Contact from '../components/Contact/Contact';
import IconButton from '../components/IconButton';
import HeroCta from '../components/HeroCta/HeroCta';

const getCampaignText = (title: string): string[] => {
  const titlePieces = title.split(' ');
  const firstSliceLength = Math.ceil(titlePieces.length / 2);
  return [
    titlePieces.slice(0, firstSliceLength).join(' '),
    titlePieces.slice(firstSliceLength).join(' '),
  ];
};

interface Props extends PageProps {
  data: {
    featured: GatsbyTypes.GhostPostConnection;
    recentStories: GatsbyTypes.GhostPostConnection;
    campaigns: GatsbyTypes.GhostPageConnection;
    heroCtas: GatsbyTypes.GhostPostConnection;
  };
}

const Index = ({ data }: Props) => {
  const { formatMessage } = useIntl();
  const [{ entity: featured, slug: featuredSlug }] = useLocalisedGhostEntities(
    data.featured
  );
  const recentStories = useLocalisedGhostEntities(data.recentStories);
  const campaigns = useLocalisedGhostEntities(data.campaigns);
  const heroCtas = useLocalisedGhostEntities(data.heroCtas);

  return (
    <Container
      path="/"
      description={formatMessage({ id: 'global.description' })}
    >
      {heroCtas.map(({ entity, slug }) => (
        <HeroCta key={slug} post={entity} />
      ))}
      <div className="container py-3">
        <FeaturedStoryCard
          title={featured.title}
          image={featured.feature_image}
          published={featured.published_at}
          slug={featuredSlug}
        />
        <Feed
          entities={recentStories}
          getPath={Paths.post}
          hideMobileImages={true}
        />
        <div className="row justify-content-end py-3">
          <Link className="w-auto link-unstyled" to={Paths.news()}>
            <IconButton icon={faArrowRight}>
              <FormattedMessage id="home.moreStories" />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className="container">
        <FeaturedCampaign
          image={Config.defaultMetaImage}
          topText={formatMessage({ id: 'home.weAre.1' })}
          bottomText={formatMessage({ id: 'home.weAre.2' })}
          body={formatMessage({ id: 'home.weAre.body' })}
          ctaPath={Paths.join()}
          ctaMessage="home.join"
        />
        {campaigns.map(({ entity, slug }, i) => {
          const [topText, bottomText] = getCampaignText(entity.title);

          return (
            <FeaturedCampaign
              key={slug}
              image={entity.feature_image}
              topText={topText}
              bottomText={bottomText}
              body={entity.excerpt}
              ctaPath={Paths.page(slug)}
              direction={i % 2 === 1 ? 'left' : 'right'}
            />
          );
        })}
      </div>
      <Benefits />
      <Contact />
    </Container>
  );
};

export const query = graphql`
  query (
    $featuredSlug: [String!]
    $recentStorySlugs: [String!]
    $campaignSlugs: [String!]
    $heroCtaSlugs: [String!]
  ) {
    featured: allGhostPost(filter: { slug: { in: $featuredSlug } }) {
      ...GhostPostFields
    }
    recentStories: allGhostPost(filter: { slug: { in: $recentStorySlugs } }) {
      ...GhostPostFields
    }
    campaigns: allGhostPage(filter: { slug: { in: $campaignSlugs } }) {
      ...GhostPageFields
    }
    heroCtas: allGhostPost(filter: { slug: { in: $heroCtaSlugs } }) {
      ...GhostPostFields
    }
  }
`;

export default Index;
