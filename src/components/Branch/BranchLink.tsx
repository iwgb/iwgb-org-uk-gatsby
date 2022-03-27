import { FormattedMessage, Link } from 'gatsby-plugin-intl';

interface Props {
  href: string;
  className?: string;
}

const BranchLink = ({ href, className = '' }: Props) =>
  href.slice(0, 19) === 'https://iwgb.org.uk' ? (
    <Link className={className} to={href.replace('https://iwgb.org.uk', '')}>
      <FormattedMessage id="branches.readMore" />
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      <FormattedMessage id="branches.viewWebsite" />
    </a>
  );

export default BranchLink;
