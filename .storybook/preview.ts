import type { Preview } from '@storybook/react';
import { initTheme } from '../src/theme';

import '../src/assets/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  beforeAll: async () => {
    await initTheme();
  },
};

export default preview;