import { createElement, ReactElement } from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core';
import CleanCSS from 'clean-css';
import { RenderBodyArgs } from 'gatsby';

const { styles } = new CleanCSS().minify(dom.css());
let styleTag: ReactElement | null = null;

const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  if (!styleTag) {
    styleTag = createElement('style', {
      key: 'gatsby-plugin-fontawesome-css',
      type: 'text/css',
      dangerouslySetInnerHTML: { __html: styles },
    });
  }
  setHeadComponents([styleTag]);
};

export { onRenderBody };
