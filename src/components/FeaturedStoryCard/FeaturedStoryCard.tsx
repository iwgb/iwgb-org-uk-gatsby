import { DateTime } from 'luxon';
import { Link } from 'gatsby-plugin-intl';
import Config from '../../config';
import * as styles from './FeaturedStoryCard.module.scss';
import Paths from '../../utils/paths';
import useLocalDateTime from '../../hooks/useLocalDateTime';

interface Props {
  image?: string;
  title: string;
  published?: string;
  slug: string;
}

const FeaturedStoryCard = ({
  image = Config.defaultMetaImage,
  title,
  published,
  slug,
}: Props) => {
  const localPublished = useLocalDateTime(published);

  return (
    <Link
      to={Paths.post(slug)}
      className={`d-flex flex-column justify-content-end bg-image link-unstyled ${styles.featured}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`${styles.text} px-3 py-2`}>
        <h2 className="text-white">{title}</h2>
        <div className="iwgb-lightest-grey">
          {localPublished.toLocaleString(DateTime.DATE_MED)}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedStoryCard;
