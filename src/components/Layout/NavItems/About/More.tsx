import GeneralColumn from './GeneralColumn';
import DemocracyColumn from './DemocracyColumn';
import ForSupportersColumn from './ForSupportersColumn';
import ForMembersColumn from './ForMembersColumn';

interface Props {
  className?: string;
}

const More = ({ className = '' }: Props) => (
  <div className={`${className} iwgb-lightest-grey-bg`}>
    <div className="container">
      <div className="row py-4">
        <GeneralColumn />
        <DemocracyColumn />
        <ForSupportersColumn />
        <ForMembersColumn />
      </div>
    </div>
  </div>
);

export default More;
