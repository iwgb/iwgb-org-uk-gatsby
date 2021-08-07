import { Button, ButtonProps } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
  icon: IconProp,
  children: ReactNode,
  className?: string,
  direction?: 'left' | 'right',
}

const IconButton = ({
  icon,
  children,
  className = '',
  direction = 'right',
  ...rest
}: Props) => (
  <Button
    className={`d-flex align-items-center ${direction === 'left' && 'flex-row-reverse'}${className}`}
    {...rest}
  >
    {children}
    <Icon
      className={direction === 'left' ? 'me-2' : 'ms-2'}
      icon={icon}
    />
  </Button>
);

export default IconButton;
