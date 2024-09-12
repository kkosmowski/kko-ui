import type { ButtonHTMLAttributes } from 'react';

import type { Color } from '~/types/color';
import type { ScopedSize } from '~/types/size';
import type { Variant } from '~/types/variant';

export type ButtonColor = Color;
export type ButtonSize = ScopedSize;
export type ButtonVariant = Variant | 'icon' | 'text';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
