import { PageProps } from 'gatsby';
import { LegacyPost as LegacyPostType } from '../utils/types';
import paths from '../utils/paths';
import UiContainer from '../components/Layout/UiContainer';
import GenericPost from '../components/GenericPost/GenericPost';

interface LegacyContext extends LegacyPostType {
  id: string;
}

interface Props extends PageProps {
  pageContext: LegacyContext;
}

const LegacyPost = ({
  pageContext: { id, header_img: headerImage, content, title, timestamp },
}: Props) => {
  return (
    <UiContainer path={paths.post(id)}>
      <GenericPost
        image={headerImage}
        title={title}
        timestamp={timestamp}
        html={content}
      />
    </UiContainer>
  );
};

export default LegacyPost;