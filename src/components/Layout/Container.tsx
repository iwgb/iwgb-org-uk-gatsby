import { ComponentProps, ReactNode } from 'react';
import Meta from '../Meta/Meta';
import UiContainer from './UiContainer';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
}

const Container = ({
  path,
  children,
  className = '',
  title = '',
  ...rest
}: Props & ComponentProps<typeof Meta>) => (
  <>
    <Meta path={path} {...rest} />
    <UiContainer path={path} className={className} title={title}>
      {children}
    </UiContainer>
  </>
);

export default Container;
