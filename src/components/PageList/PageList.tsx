import { Link } from 'gatsby-plugin-intl';
import { ReactNode } from 'react';
import { EntitySlugTuple } from '../../hooks/useLocalisedGhostEntities';
import * as styles from './PageList.module.scss';
import Paths from '../../utils/paths';

interface Props {
  className?: string;
  children: ReactNode;
  pages: EntitySlugTuple[];
}

const PageList = ({ className = '', children, pages }: Props) => (
  <div className={`${className} col-md`}>
    {children}
    <div className="iwgb-med-grey">
      {pages.map(({ entity, slug }) => (
        <Link
          key={slug}
          className={`${styles.link} d-block my-2`}
          to={Paths.page(slug)}
        >
          {entity.title}
        </Link>
      ))}
    </div>
  </div>
);

export default PageList;
