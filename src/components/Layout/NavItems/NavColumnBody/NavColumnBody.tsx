import { FormattedMessage } from 'gatsby-plugin-intl';
import PageList from '../../../PageList/PageList';
import { EntitySlugTuple } from '../../../../hooks/useLocalisedGhostEntities';

interface Props {
  titleMessage: string;
  pages: EntitySlugTuple[];
}

const NavColumnBody = ({ titleMessage, pages }: Props) => (
  <PageList pages={pages} className="py-2 py-md-0 col-sm-6">
    <h3 className="text-dark">
      <FormattedMessage id={titleMessage} />
    </h3>
  </PageList>
);

export default NavColumnBody;
