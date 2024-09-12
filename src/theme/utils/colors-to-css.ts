import type { ColorsPalette, Palette } from '~/types/color';

const additionalTransparencies: Record<string, number[]> = {
  500: [8, 20],
};

const codesToExtend = Object.keys(additionalTransparencies);

const opacityToHex = (opacity: number): string => Math.round((opacity * 255) / 100).toString(16);

const insertPalette = (name: string, palette: Palette): string =>
  Object.entries(palette).reduce((result, [code, hex]) => {
    let res = result + `--col-${name}-${code}: ${hex};\n`;

    if (codesToExtend.includes(code)) {
      for (const opacity of additionalTransparencies[code]) {
        res += `--col-${name}-${code}-${opacity}: ${hex}${opacityToHex(opacity)};\n`;
      }
    }

    return res;
  }, '');

export const colorsToCss = (colors: ColorsPalette): string =>
  Object.entries(colors).reduce((result, [name, palette]) => result + insertPalette(name, palette), '');
