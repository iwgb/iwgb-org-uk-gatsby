import { EntitySlugTuple } from '../../../../hooks/useLocalisedGhostEntities';
import * as styles from './FooterColumnBody.module.scss';
import FooterTitle from '../FooterTitle/FooterTitle';
import PageList from '../../../PageList/PageList';

interface Props {
  titleMessage: string,
  pages: EntitySlugTuple[],
}

const FooterColumnBody = ({
  titleMessage,
  pages,
}: Props) => (
  <PageList
    pages={pages}
    className={styles.column}
  >
    <FooterTitle message={titleMessage} />
  </PageList>
);

export default FooterColumnBody;
