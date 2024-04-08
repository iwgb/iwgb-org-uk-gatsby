import './src/App.scss';
import { config } from '@fortawesome/fontawesome-svg-core';

const onClientEntry = () => {
  config.autoAddCss = false;
};

export { onClientEntry };
