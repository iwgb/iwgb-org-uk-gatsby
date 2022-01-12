import Lottie from 'react-lottie';
import animationData from './animation.json';

interface Props {
  height: number;
}

const LogoAnimation = ({ height }: Props) => (
  <Lottie
    options={{
      animationData,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={height}
  />
);

export default LogoAnimation;
