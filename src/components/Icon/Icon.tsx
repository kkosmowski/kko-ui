import React from 'react';

import styles from './Icon.module.css';
import type { IconProps, IconVariant } from './Icon.types';

import { colors } from '~/theme/consts';

const variants: Record<IconVariant, string> = {
  filled: 'icon material-icons',
  outlined: 'icon material-icons-outlined',
};

export const Icon = ({ name, variant = 'outlined', size = 'md', color = '' }: IconProps) => {
  const isKnownColor = (colors as string[]).includes(color ?? '');
  const className = `${styles.icon} ${variants[variant]} ${size} ${isKnownColor ? color : ''}`;
  const style = isKnownColor || !color ? {} : { color };

  return (
    <span className={className} style={style}>
      {name}
    </span>
  );
};
