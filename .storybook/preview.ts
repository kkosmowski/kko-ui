import type { Preview } from '@storybook/react';
import { initTheme } from '../src/theme';

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