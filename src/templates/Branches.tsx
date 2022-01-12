import { graphql } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { TemplateProps } from '../utils/types';
import Container from '../components/Layout/Container';
import Paths from '../utils/paths';
import Branch from '../components/Branch/Branch';

const EXCLUDE_BRANCHES = ['Central Union'];

const Branches = ({ data: { allAirtable: branches } }: TemplateProps) => {
  const { formatMessage } = useIntl();

  return (
    <Container
      path={Paths.branches()}
      title={formatMessage({ id: 'nav.branches' })}
    >
      <div className="container">
        <div className="row">
          <h1 className="my-5">
            <FormattedMessage id="branches.title" />
          </h1>
        </div>
        <div className="row">
          {branches.edges.map(({ node: { data: branch } }) =>
            branch && !EXCLUDE_BRANCHES.includes(branch.Name || '') ? (
              <Branch branch={branch} />
            ) : null
          )}
        </div>
      </div>
    </Container>
  );
};

export const query = graphql`
  {
    allAirtable(
      sort: { fields: [data___Name], order: [ASC] }
      filter: { table: { eq: "Branches" } }
    ) {
      edges {
        node {
          data {
            Name
            Twitter
            Facebook
            Instagram
            Link
            Image
          }
        }
      }
    }
  }
`;

export default Branches;
