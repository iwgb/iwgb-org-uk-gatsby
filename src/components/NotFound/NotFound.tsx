import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '../Layout/Container';
import useLocalisedGhostEntities from '../../hooks/useLocalisedGhostEntities';
import Config from '../../config';
import StripeText from '../StripeText/StripeText';
import Feed from '../Feed';
import Paths from '../../utils/paths';
import * as styles from './NotFound.module.scss';

const NotFound = () => {
  const { formatMessage } = useIntl();
  // language=GraphQL
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    {
      allGhostPost(
        sort: { order: [DESC], fields: [published_at] }
        filter: { tags: { elemMatch: { slug: { eq: "special-victory" } } } }
      ) {
        ...GhostPostFields
      }
    }
  `);

  const victories = useLocalisedGhostEntities(data.allGhostPost);

  return (
    <Container path="/404" title={formatMessage({ id: '404.title' })}>
      <div
        className={`${styles.image} bg-image pb-5`}
        style={{
          backgroundImage: `url(${Config.cdnBaseUrl}/bucket/Press/5e5d2de3b04df.jpg`,
        }}
      >
        <div className="container">
          <div className="row">
            <h1 className={styles.heading}>
              <StripeText>
                <FormattedMessage id="404.heading" />
              </StripeText>
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="bg-white px-3 py-4">
                <h2>
                  <FormattedMessage id="404.body" />
                </h2>
                <Feed entities={victories} getPath={Paths.post} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
