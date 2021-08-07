import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import camelCase from 'lodash/camelCase';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import * as styles from './JobType.module.scss';
import Paths from '../../utils/paths';

interface Props {
  slug: string,
}

const JobType = ({ slug }: Props) => (
  <div className="col-12 col-md-4 my-2">
    <div className={`${styles.jobType} p-3 h-100`}>
      <Link
        to={Paths.joinJobType(slug)}
        className="link-unstyled h-100 d-flex align-items-center"
      >
        <div>
          <h3>
            <FormattedMessage id={`join.jobType.${camelCase(slug)}.name`} />
          </h3>
          <p>
            <FormattedMessage id={`join.jobType.${camelCase(slug)}.description`} />
          </p>
        </div>
        <div className={`${styles.arrow} d-flex align-items-center justify-content-center flex-shrink-0 ms-2`}>
          <Icon
            icon={faArrowRight}
            fixedWidth={true}
            size="lg"
          />
        </div>
      </Link>
    </div>
  </div>
);

export default JobType;
