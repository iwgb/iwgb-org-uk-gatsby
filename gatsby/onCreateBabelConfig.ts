import { CreateBabelConfigArgs } from 'gatsby';

const onCreateBabelConfig = ({ actions: { setBabelPlugin } }: CreateBabelConfigArgs) => {
  setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

export default onCreateBabelConfig;
