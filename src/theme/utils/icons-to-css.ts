import { sizes } from '~/theme/consts';
import type { Size } from '~/types/size';

const iconSizes: Record<Size, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

export const iconsToCss = (map = iconSizes): string => {
  let result = '';

  for (const size of sizes) {
    result += `.icon.${size} { font-size: ${map[size]}px; }\n`;
  }

  return result;
};
