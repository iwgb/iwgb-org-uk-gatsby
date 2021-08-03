import { ReactNode } from 'react';
import * as styles from './StripeText.module.scss';

interface Props {
  children: ReactNode,
  className?: string,
}

const StripeText = ({
  children,
  className = '',
}: Props) => (
  <span className={`${styles.stripe} text-white font-weight-700 ${className}`}>
    {children}
  </span>
);

export default StripeText;
