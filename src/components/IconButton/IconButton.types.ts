import type { MaterialIcon } from 'material-icons';

import type { ButtonProps } from '../Button';

export type IconButtonProps = Omit<ButtonProps, 'variant' | 'children'> & {
  name: MaterialIcon;
};
