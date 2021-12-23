import { config } from '@fortawesome/fontawesome-svg-core';
import './src/App.scss';
import 'react-slidedown/lib/slidedown.css';

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = () => {
  config.autoAddCss = false;
};
