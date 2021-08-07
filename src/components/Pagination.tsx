import { Link } from 'gatsby-plugin-intl';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { arrayOf } from '../utils/array';
import IconButton from './IconButton';

interface Props {
  page: number,
  pages: number,
  hasPrevious: boolean,
  hasNext: boolean,
  getPath: (page: number) => string,
}

const Pagination = ({
  page,
  pages,
  hasPrevious,
  hasNext,
  getPath,
}: Props) => (
  <div className="row justify-content-between align-items-center py-3">
    <div className={`w-auto ${!hasPrevious && 'hidden'}`}>
      <Link
        className="link-unstyled"
        to={getPath(page - 1)}
      >
        <IconButton
          icon={faArrowLeft}
          direction="left"
        >
          Newer
        </IconButton>
      </Link>
    </div>
    <div className="w-auto">
      {arrayOf(pages).map((_, i) => (
        i + 1 === page
          ? (
            <span className="px-2 font-weight-700 text-decoration-none disabled">
              {i + 1}
            </span>
          )
          : (
            <Link
              className="px-2"
              to={getPath(i + 1)}
            >
              {i + 1}
            </Link>
          )
      ))}
    </div>
    <div className="w-auto">
      {hasNext && (
        <Link
          className="link-unstyled"
          to={getPath(page + 1)}
        >
          <IconButton icon={faArrowRight}>
            Older
          </IconButton>
        </Link>
      )}
    </div>
  </div>
);

export default Pagination;
