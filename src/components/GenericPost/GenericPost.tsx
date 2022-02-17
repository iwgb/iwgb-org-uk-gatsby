import * as styles from './GenericPost.module.scss';
import HtmlContent from '../HtmlContent/HtmlContent';
import DonateCta from '../DonateCta';
import useFormattedTimestamp from '../../hooks/useFormattedTimestamp';

interface Props {
  image?: string;
  title: string;
  timestamp?: string;
  html?: string;
  showDonate?: boolean;
}

const GenericPost = ({
  image,
  title,
  timestamp,
  html = '',
  showDonate = true,
}: Props) => {
  const published = useFormattedTimestamp(timestamp);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <div
            className={`${
              image && styles.image
            } row bg-image align-items-end pt-3`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="col-12 col-md-3" />
            <div
              className={`${
                image && `${styles.title} text-white`
              } col-12 col-md-9`}
            >
              <h1 className="mb-0">{title}</h1>
            </div>
          </div>
          <div className="row mt-3">
            <small
              className={`col-12 col-md-3 iwgb-dark-grey ${styles.published} mb-3 mb-md-0`}
            >
              {published}
            </small>
            <HtmlContent
              html={html}
              className={`${styles.content} col-12 col-md-9`}
            />
          </div>
          <div className="row mt-3">{showDonate && <DonateCta />}</div>
        </div>
      </div>
    </div>
  );
};

export default GenericPost;
