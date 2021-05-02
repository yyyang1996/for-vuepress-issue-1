import path from 'path';
import { ThemeFunction } from 'vuepress';



const theme: ThemeFunction = () => {
  return {
    name: 'my-theme',

    layouts: path.resolve(__dirname, './layouts'),
    clientAppEnhanceFiles: path.resolve(__dirname, './enhance.ts'),
    clientAppSetupFiles: path.resolve(__dirname, './setup.ts'),

    extendsPageOptions(filePath: string) {
      if (filePath.startsWith('posts/')) {
        return {
          frontmatter: {
            layout: 'post',
            permalinkPattern: '/posts/:slug',
          },
        };
      }
      return {};
    },
  };
};

export default theme;
