import type { Theme } from '~/types/theme';
import { colorsToCss } from '~/theme/utils/colors-to-css';
import { typographyToCss } from '~/theme/utils/typography-to-css';

export const themeToCss = (theme: Theme): string => {
  const colors = colorsToCss(theme.colors);
  const typography = typographyToCss(theme.typography);

  const styles = [colors, typography].join('');
  return `:root {\n${styles}\n}`;
};
