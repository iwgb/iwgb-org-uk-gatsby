import { Link } from 'gatsby-plugin-intl';
import { EntitySlugTuple } from '../../../../hooks/useLocalisedGhostEntities';
import * as styles from './FooterColumnBody.module.scss';
import Paths from '../../../../utils/paths';
import FooterTitle from '../FooterTitle/FooterTitle';

interface Props {
  titleMessage: string,
  pages: EntitySlugTuple[],
}

const FooterColumnBody = ({
  titleMessage,
  pages,
}: Props) => (
  <div className={`${styles.column} col-md`}>
    <FooterTitle message={titleMessage} />
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

export default FooterColumnBody;
