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

  const filledIconsLink = document.createElement('link');
  filledIconsLink.rel = 'stylesheet';
  filledIconsLink.href = 'node_modules/material-icons/iconfont/filled.css';

  const outlinedIconsLink = document.createElement('link');
  outlinedIconsLink.rel = 'stylesheet';
  outlinedIconsLink.href = 'node_modules/material-icons/iconfont/outlined.css';

  document.head.append(style);
  document.head.append(filledIconsLink);
  document.head.append(outlinedIconsLink);
};

void initTheme();
