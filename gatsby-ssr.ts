import { createElement, ReactHTMLElement } from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { RenderBodyArgs } from 'gatsby';
import CleanCss from 'clean-css';

let styleTag: ReactHTMLElement<HTMLStyleElement> | null = null;

const { styles } = new CleanCss().minify(dom.css());

const getStyleTag = (): ReactHTMLElement<HTMLStyleElement> => createElement('style', {
  key: 'gatsby-plugin-fontawesome-css',
  type: 'text/css',
  dangerouslySetInnerHTML: { __html: styles },
});

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  if (styleTag !== null) {
    styleTag = getStyleTag();
  }
  setHeadComponents([styleTag]);
};
