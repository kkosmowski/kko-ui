import React from 'react';

import type { ButtonProps } from './Button.types.ts';

export const Button = (props: ButtonProps) => {
  const { ...attributes } = props;

  return <button {...attributes} />;
};
