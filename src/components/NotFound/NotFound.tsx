import { FormattedMessage } from 'gatsby-plugin-intl';
import { EntitySlugTuple } from '../../hooks/useLocalisedGhostEntities';
import Config from '../../config';
import StripeText from '../StripeText/StripeText';
import Feed from '../Feed';
import Paths from '../../utils/paths';
import * as styles from './NotFound.module.scss';

interface Props {
  posts: EntitySlugTuple[],
}

const NotFound = ({ posts }: Props) => (
  <div
    className={`${styles.image} bg-image pb-5`}
    style={{ backgroundImage: `url(${Config.cdnBaseUrl}/bucket/Press/5e5d2de3b04df.jpg` }}
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
            <Feed
              entities={posts}
              getPath={Paths.post}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
