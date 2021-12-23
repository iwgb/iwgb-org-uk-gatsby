import { createElement } from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core';
import CleanCss from 'clean-css';

let styleTag = null;

const { styles } = new CleanCss().minify(dom.css());

const getStyleTag = () => createElement('style', {
  key: 'gatsby-plugin-fontawesome-css',
  type: 'text/css',
  dangerouslySetInnerHTML: { __html: styles },
});

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setHeadComponents }) => {
  if (styleTag !== null) {
    styleTag = getStyleTag();
  }
  setHeadComponents([styleTag]);
};
