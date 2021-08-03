import { DateTime } from 'luxon';
import { Link } from 'gatsby-plugin-intl';
import * as styles from './Story.module.scss';
import useLocalDateTime from '../../hooks/useLocalDateTime';
import Paths from '../../utils/paths';

interface Props {
  image?: string,
  title: string,
  published?: string,
  slug: string,
  hideMobileImages?: boolean,
}

const Story = ({
  image,
  title,
  published,
  slug,
  hideMobileImages = false,
}: Props) => {
  const localPublished = useLocalDateTime(published);

  return (
    <Link
      to={Paths.post(slug)}
      className={`d-flex flex-column link-unstyled h-100 my-3 ${styles.story}`}
    >
      {image && (
        <div
          className={`${styles.image} bg-image ${hideMobileImages && 'd-none'} d-md-block`}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="d-flex flex-column justify-content-between flex-grow-1 px-3 py-2 iwgb-lightest-grey-bg">
        <h3 className={styles.title}>{title}</h3>
        <div>{localPublished.toLocaleString(DateTime.DATE_MED)}</div>
      </div>
    </Link>
  );
};

export default Story;
