import type { Typography } from '~/types/typography';

export const typographyToCss = ({ fontFamily, fontSize, fontWeight }: Typography): string => `
font-family: ${fontFamily};
font-size: ${typeof fontSize === 'string' ? fontSize : `${fontSize}px`};
font-weight: ${fontWeight};`;
