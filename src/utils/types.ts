import { PageProps } from 'gatsby';

export interface TemplateProps extends PageProps {
  data: GatsbyTypes.Query,
}
