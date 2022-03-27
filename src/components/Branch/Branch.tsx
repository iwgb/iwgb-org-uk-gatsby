import { FormattedMessage } from 'gatsby-plugin-intl';
import camelCase from 'lodash/camelCase';
import * as styles from './Branch.module.scss';
import Config from '../../config';
import SocialIcons from '../SocialIcons/SocialIcons';
import BranchLink from './BranchLink';

interface Props {
  branch: GatsbyTypes.AirtableData;
}

const Branch = ({ branch }: Props) => (
  <div className="col-12 col-md-6 col-lg-4">
    <div className="pt-3 h-100">
      <div
        className={`${styles.image} bg-image`}
        style={{
          backgroundImage: `url(${branch.Image || Config.defaultMetaImage}`,
        }}
      >
        <div
          className={`${styles.description} h-100 d-flex align-items-center justify-content-center text-white text-center p-3`}
        >
          <FormattedMessage
            id={`branches.${camelCase(branch.Name)}.description`}
          />
        </div>
      </div>
      <div className={`${styles.text} bg-white px-3 py-2`}>
        <h4>
          <FormattedMessage id={`branches.${camelCase(branch.Name)}.name`} />
        </h4>
        <div className="d-flex align-items-center">
          {branch.Link && <BranchLink href={branch.Link} className="me-3" />}
          <SocialIcons
            twitter={branch.Twitter}
            facebook={branch.Facebook}
            instagram={branch.Instagram}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Branch;
