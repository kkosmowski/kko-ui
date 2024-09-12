export type StateColor = 'success' | 'info' | 'warning' | 'error';
export type Color = 'primary' | 'secondary' | StateColor;

type ColorCode = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type ContrastCode = `A${ColorCode}`;
export type PaletteCode = ColorCode | ContrastCode;

export type Palette = Record<PaletteCode, string>;

export type ColorsPalette = {
  primary: Palette;
  secondary: Palette;
};
