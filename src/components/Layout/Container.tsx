import { ReactNode } from 'react';
import Meta from '../Meta/Meta';
import UiContainer from './UiContainer';

interface Props {
  className?: string,
  path: string,
  children: ReactNode,
  title?: string,
  [x:string]: any,
}

const Container = ({
  path,
  children,
  className = '',
  title = '',
  ...rest
}: Props) => (
  <>
    <Meta
      path={path}
      {...rest}
    />
    <UiContainer
      path={path}
      className={className}
      title={title}
    >
      {children}
    </UiContainer>
  </>
);

export default Container;
