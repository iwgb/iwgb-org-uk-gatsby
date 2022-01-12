import './src/App.scss';
import 'react-slidedown/lib/slidedown.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const onClientEntry = () => {
  config.autoAddCss = false;
};

export { onClientEntry };
