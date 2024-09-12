import React from 'react';

import type { ButtonProps, ButtonVariant } from './Button.types';
import styles from './Button.module.css';

import type { Color } from '~/types/color';
import type { ScopedSize } from '~/types/size';
import { buildClassName } from '~/utils/build-class-name';

const defaultColor: Color = 'primary';
const defaultSize: ScopedSize = 'md';
const defaultVariant: ButtonVariant = 'ghost';

export const Button = (props: ButtonProps) => {
  const {
    color = defaultColor,
    size = defaultSize,
    variant = defaultVariant,
    className,
    children,
    ...attributes
  } = props;
  const clN = buildClassName(styles.button, variant, size, color, className);

  return (
    <button className={clN} {...attributes}>
      {children}
    </button>
  );
};
