import { colors } from '~/theme/colors';
import { themeToCss } from '~/theme/utils/theme-to-css';
import type { Theme } from '~/types/theme';
import { typography } from '~/theme/typography';

const theme: Theme = {
  colors,
  typography,
};

export const initTheme = async () => {
  const style = document.createElement('style');
  style.dataset.name = 'kko-ui';
  style.innerHTML = themeToCss(theme);

  document.head.append(style);
};

void initTheme();
