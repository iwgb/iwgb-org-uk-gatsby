import AboutColumn from './AboutColumn';
import DemocracyColumn from './DemocracyColumn';
import GetInvolvedColumn from './GetInvolvedColumn';

const About = () => (
  <div className="iwgb-lightest-grey-bg">
    <div className="container">
      <div className="row py-4">
        <AboutColumn />
        <DemocracyColumn />
        <GetInvolvedColumn />
      </div>
    </div>
  </div>
);

export default About;
