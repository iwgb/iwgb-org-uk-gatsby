import Html from 'dangerously-set-html-content';
import * as styles from './HtmlContent.module.scss';

interface Props {
  html?: string,
  className?: string,
}

const HtmlContent = ({
  html = '',
  className = '',
}: Props) => (
  <div className={`${className} ${styles.html}`}>
    {
      html.includes('<script')
        ? <Html html={html} />
        : <div dangerouslySetInnerHTML={{ __html: html }} />
    }
  </div>
);

export default HtmlContent;
