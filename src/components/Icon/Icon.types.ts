import type { MaterialIcon } from 'material-icons';

import type { Size } from '~/types/size';
import type { Color } from '~/types/color';

export type IconVariant = 'filled' | 'outlined';

export type IconProps = {
  name: MaterialIcon;
  variant?: IconVariant;
  size?: Size;
  color?: Color | string;
};
